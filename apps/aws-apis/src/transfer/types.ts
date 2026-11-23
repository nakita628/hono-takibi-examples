type PosixProfile = { Uid: {}; Gid: {}; SecondaryGids?: {} | undefined }
type CreateAccessRequest = {
  HomeDirectory?: {} | undefined
  HomeDirectoryType?: {} | undefined
  HomeDirectoryMappings?: {} | undefined
  Policy?: {} | undefined
  PosixProfile?: PosixProfile | undefined
  Role: {}
  ServerId: {}
  ExternalId: {}
}
type CreateAccessResponse = { ServerId: {}; ExternalId: {} }
type CreateAgreementRequest = {
  Description?: {} | undefined
  ServerId: {}
  LocalProfileId: {}
  PartnerProfileId: {}
  BaseDirectory: {}
  AccessRole: {}
  Status?: {} | undefined
  Tags?: {} | undefined
}
type CreateAgreementResponse = { AgreementId: {} }
type CreateConnectorRequest = {
  Url: {}
  As2Config: {
    LocalProfileId?: {} | undefined
    PartnerProfileId?: {} | undefined
    MessageSubject?: {} | undefined
    Compression?: {} | undefined
    EncryptionAlgorithm?: {} | undefined
    SigningAlgorithm?: {} | undefined
    MdnSigningAlgorithm?: {} | undefined
    MdnResponse?: {} | undefined
  }
  AccessRole: {}
  LoggingRole?: {} | undefined
  Tags?: {} | undefined
}
type CreateConnectorResponse = { ConnectorId: {} }
type CreateProfileRequest = {
  As2Id: {}
  ProfileType: {}
  CertificateIds?: {} | undefined
  Tags?: {} | undefined
}
type CreateProfileResponse = { ProfileId: {} }
type CreateServerRequest = {
  Certificate?: {} | undefined
  Domain?: {} | undefined
  EndpointDetails?:
    | {
        AddressAllocationIds?: {} | undefined
        SubnetIds?: {} | undefined
        VpcEndpointId?: {} | undefined
        VpcId?: {} | undefined
        SecurityGroupIds?: {} | undefined
      }
    | undefined
  EndpointType?: {} | undefined
  HostKey?: {} | undefined
  IdentityProviderDetails?:
    | {
        Url?: {} | undefined
        InvocationRole?: {} | undefined
        DirectoryId?: {} | undefined
        Function?: {} | undefined
      }
    | undefined
  IdentityProviderType?: {} | undefined
  LoggingRole?: {} | undefined
  PostAuthenticationLoginBanner?: {} | undefined
  PreAuthenticationLoginBanner?: {} | undefined
  Protocols?: {} | undefined
  ProtocolDetails?:
    | {
        PassiveIp?: {} | undefined
        TlsSessionResumptionMode?: {} | undefined
        SetStatOption?: {} | undefined
        As2Transports?: {} | undefined
      }
    | undefined
  SecurityPolicyName?: {} | undefined
  Tags?: {} | undefined
  WorkflowDetails?: { OnUpload?: {} | undefined; OnPartialUpload?: {} | undefined } | undefined
}
type CreateServerResponse = { ServerId: {} }
type CreateUserRequest = {
  HomeDirectory?: {} | undefined
  HomeDirectoryType?: {} | undefined
  HomeDirectoryMappings?: {} | undefined
  Policy?: {} | undefined
  PosixProfile?: { Uid: {}; Gid: {}; SecondaryGids?: {} | undefined } | undefined
  Role: {}
  ServerId: {}
  SshPublicKeyBody?: {} | undefined
  Tags?: {} | undefined
  UserName: {}
}
type CreateUserResponse = { ServerId: {}; UserName: {} }
type CreateWorkflowRequest = {
  Description?: {} | undefined
  Steps: {}
  OnExceptionSteps?: {} | undefined
  Tags?: {} | undefined
}
type CreateWorkflowResponse = { WorkflowId: {} }
type DeleteAccessRequest = { ServerId: {}; ExternalId: {} }
type DeleteAgreementRequest = { AgreementId: {}; ServerId: {} }
type DeleteCertificateRequest = { CertificateId: {} }
type DeleteConnectorRequest = { ConnectorId: {} }
type DeleteHostKeyRequest = { ServerId: {}; HostKeyId: {} }
type DeleteProfileRequest = { ProfileId: {} }
type DeleteServerRequest = { ServerId: {} }
type DeleteSshPublicKeyRequest = { ServerId: {}; SshPublicKeyId: {}; UserName: {} }
type DeleteUserRequest = { ServerId: {}; UserName: {} }
type DeleteWorkflowRequest = { WorkflowId: {} }
type DescribeAccessRequest = { ServerId: {}; ExternalId: {} }
type DescribeAccessResponse = {
  ServerId: {}
  Access: {
    HomeDirectory?: {} | undefined
    HomeDirectoryMappings?: {} | undefined
    HomeDirectoryType?: {} | undefined
    Policy?: {} | undefined
    PosixProfile?: PosixProfile | undefined
    Role?: {} | undefined
    ExternalId?: {} | undefined
  }
}
type DescribeAgreementRequest = { AgreementId: {}; ServerId: {} }
type DescribeAgreementResponse = {
  Agreement: {
    Arn: {}
    AgreementId?: {} | undefined
    Description?: {} | undefined
    Status?: {} | undefined
    ServerId?: {} | undefined
    LocalProfileId?: {} | undefined
    PartnerProfileId?: {} | undefined
    BaseDirectory?: {} | undefined
    AccessRole?: {} | undefined
    Tags?: {} | undefined
  }
}
type DescribeCertificateRequest = { CertificateId: {} }
type DescribeCertificateResponse = {
  Certificate: {
    Arn: {}
    CertificateId?: {} | undefined
    Usage?: {} | undefined
    Status?: {} | undefined
    Certificate?: {} | undefined
    CertificateChain?: {} | undefined
    ActiveDate?: {} | undefined
    InactiveDate?: {} | undefined
    Serial?: {} | undefined
    NotBeforeDate?: {} | undefined
    NotAfterDate?: {} | undefined
    Type?: {} | undefined
    Description?: {} | undefined
    Tags?: {} | undefined
  }
}
type DescribeConnectorRequest = { ConnectorId: {} }
type DescribeConnectorResponse = {
  Connector: {
    Arn: {}
    ConnectorId?: {} | undefined
    Url?: {} | undefined
    As2Config?:
      | {
          LocalProfileId?: {} | undefined
          PartnerProfileId?: {} | undefined
          MessageSubject?: {} | undefined
          Compression?: {} | undefined
          EncryptionAlgorithm?: {} | undefined
          SigningAlgorithm?: {} | undefined
          MdnSigningAlgorithm?: {} | undefined
          MdnResponse?: {} | undefined
        }
      | undefined
    AccessRole?: {} | undefined
    LoggingRole?: {} | undefined
    Tags?: {} | undefined
  }
}
type DescribeExecutionRequest = { ExecutionId: {}; WorkflowId: {} }
type DescribeExecutionResponse = {
  WorkflowId: {}
  Execution: {
    ExecutionId?: {} | undefined
    InitialFileLocation?:
      | {
          S3FileLocation?:
            | {
                Bucket?: {} | undefined
                Key?: {} | undefined
                VersionId?: {} | undefined
                Etag?: {} | undefined
              }
            | undefined
          EfsFileLocation?: { FileSystemId?: {} | undefined; Path?: {} | undefined } | undefined
        }
      | undefined
    ServiceMetadata?:
      | { UserDetails: { UserName: {}; ServerId: {}; SessionId?: {} | undefined } }
      | undefined
    ExecutionRole?: {} | undefined
    LoggingConfiguration?:
      | { LoggingRole?: {} | undefined; LogGroupName?: {} | undefined }
      | undefined
    PosixProfile?: PosixProfile | undefined
    Status?: {} | undefined
    Results?: { Steps?: {} | undefined; OnExceptionSteps?: {} | undefined } | undefined
  }
}
type DescribeHostKeyRequest = { ServerId: {}; HostKeyId: {} }
type DescribeHostKeyResponse = {
  HostKey: {
    Arn: {}
    HostKeyId?: {} | undefined
    HostKeyFingerprint?: {} | undefined
    Description?: {} | undefined
    Type?: {} | undefined
    DateImported?: {} | undefined
    Tags?: {} | undefined
  }
}
type DescribeProfileRequest = { ProfileId: {} }
type DescribeProfileResponse = {
  Profile: {
    Arn: {}
    ProfileId?: {} | undefined
    ProfileType?: {} | undefined
    As2Id?: {} | undefined
    CertificateIds?: {} | undefined
    Tags?: {} | undefined
  }
}
type DescribeSecurityPolicyRequest = { SecurityPolicyName: {} }
type DescribeSecurityPolicyResponse = {
  SecurityPolicy: {
    Fips?: {} | undefined
    SecurityPolicyName: {}
    SshCiphers?: {} | undefined
    SshKexs?: {} | undefined
    SshMacs?: {} | undefined
    TlsCiphers?: {} | undefined
  }
}
type DescribeServerRequest = { ServerId: {} }
type DescribeServerResponse = {
  Server: {
    Arn: {}
    Certificate?: {} | undefined
    ProtocolDetails?:
      | {
          PassiveIp?: {} | undefined
          TlsSessionResumptionMode?: {} | undefined
          SetStatOption?: {} | undefined
          As2Transports?: {} | undefined
        }
      | undefined
    Domain?: {} | undefined
    EndpointDetails?:
      | {
          AddressAllocationIds?: {} | undefined
          SubnetIds?: {} | undefined
          VpcEndpointId?: {} | undefined
          VpcId?: {} | undefined
          SecurityGroupIds?: {} | undefined
        }
      | undefined
    EndpointType?: {} | undefined
    HostKeyFingerprint?: {} | undefined
    IdentityProviderDetails?:
      | {
          Url?: {} | undefined
          InvocationRole?: {} | undefined
          DirectoryId?: {} | undefined
          Function?: {} | undefined
        }
      | undefined
    IdentityProviderType?: {} | undefined
    LoggingRole?: {} | undefined
    PostAuthenticationLoginBanner?: {} | undefined
    PreAuthenticationLoginBanner?: {} | undefined
    Protocols?: {} | undefined
    SecurityPolicyName?: {} | undefined
    ServerId?: {} | undefined
    State?: {} | undefined
    Tags?: {} | undefined
    UserCount?: {} | undefined
    WorkflowDetails?: { OnUpload?: {} | undefined; OnPartialUpload?: {} | undefined } | undefined
  }
}
type DescribeUserRequest = { ServerId: {}; UserName: {} }
type DescribeUserResponse = {
  ServerId: {}
  User: {
    Arn: {}
    HomeDirectory?: {} | undefined
    HomeDirectoryMappings?: {} | undefined
    HomeDirectoryType?: {} | undefined
    Policy?: {} | undefined
    PosixProfile?: { Uid: {}; Gid: {}; SecondaryGids?: {} | undefined } | undefined
    Role?: {} | undefined
    SshPublicKeys?: {} | undefined
    Tags?: {} | undefined
    UserName?: {} | undefined
  }
}
type DescribeWorkflowRequest = { WorkflowId: {} }
type DescribeWorkflowResponse = {
  Workflow: {
    Arn: {}
    Description?: {} | undefined
    Steps?: {} | undefined
    OnExceptionSteps?: {} | undefined
    WorkflowId?: {} | undefined
    Tags?: {} | undefined
  }
}
type ImportCertificateRequest = {
  Usage: {}
  Certificate: {}
  CertificateChain?: {} | undefined
  PrivateKey?: {} | undefined
  ActiveDate?: {} | undefined
  InactiveDate?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
}
type ImportCertificateResponse = { CertificateId: {} }
type ImportHostKeyRequest = {
  ServerId: {}
  HostKeyBody: {}
  Description?: {} | undefined
  Tags?: {} | undefined
}
type ImportHostKeyResponse = { ServerId: {}; HostKeyId: {} }
type ImportSshPublicKeyRequest = { ServerId: {}; SshPublicKeyBody: {}; UserName: {} }
type ImportSshPublicKeyResponse = { ServerId: {}; SshPublicKeyId: {}; UserName: {} }
type ListAccessesRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined; ServerId: {} }
type ListAccessesResponse = { NextToken?: {} | undefined; ServerId: {}; Accesses: {} }
type ListAgreementsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  ServerId: {}
}
type ListAgreementsResponse = { NextToken?: {} | undefined; Agreements: {} }
type ListCertificatesRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListCertificatesResponse = { NextToken?: {} | undefined; Certificates: {} }
type ListConnectorsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListConnectorsResponse = { NextToken?: {} | undefined; Connectors: {} }
type ListExecutionsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  WorkflowId: {}
}
type ListExecutionsResponse = { NextToken?: {} | undefined; WorkflowId: {}; Executions: {} }
type ListHostKeysRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined; ServerId: {} }
type ListHostKeysResponse = { NextToken?: {} | undefined; ServerId: {}; HostKeys: {} }
type ListProfilesRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  ProfileType?: {} | undefined
}
type ListProfilesResponse = { NextToken?: {} | undefined; Profiles: {} }
type ListSecurityPoliciesRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListSecurityPoliciesResponse = { NextToken?: {} | undefined; SecurityPolicyNames: {} }
type ListServersRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListServersResponse = { NextToken?: {} | undefined; Servers: {} }
type ListTagsForResourceRequest = {
  Arn: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = {
  Arn?: {} | undefined
  NextToken?: {} | undefined
  Tags?: {} | undefined
}
type ListUsersRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined; ServerId: {} }
type ListUsersResponse = { NextToken?: {} | undefined; ServerId: {}; Users: {} }
type ListWorkflowsRequest = { MaxResults?: {} | undefined; NextToken?: {} | undefined }
type ListWorkflowsResponse = { NextToken?: {} | undefined; Workflows: {} }
type SendWorkflowStepStateRequest = { WorkflowId: {}; ExecutionId: {}; Token: {}; Status: {} }
type SendWorkflowStepStateResponse = { [x: string]: unknown }
type StartFileTransferRequest = { ConnectorId: {}; SendFilePaths: {} }
type StartFileTransferResponse = { TransferId: {} }
type StartServerRequest = { ServerId: {} }
type StopServerRequest = { ServerId: {} }
type TagResourceRequest = { Arn: {}; Tags: {} }
type TestIdentityProviderRequest = {
  ServerId: {}
  ServerProtocol?: {} | undefined
  SourceIp?: {} | undefined
  UserName: {}
  UserPassword?: {} | undefined
}
type TestIdentityProviderResponse = {
  Response?: {} | undefined
  StatusCode: {}
  Message?: {} | undefined
  Url: {}
}
type UntagResourceRequest = { Arn: {}; TagKeys: {} }
type UpdateAccessRequest = {
  HomeDirectory?: {} | undefined
  HomeDirectoryType?: {} | undefined
  HomeDirectoryMappings?: {} | undefined
  Policy?: {} | undefined
  PosixProfile?: PosixProfile | undefined
  Role?: {} | undefined
  ServerId: {}
  ExternalId: {}
}
type UpdateAccessResponse = { ServerId: {}; ExternalId: {} }
type UpdateAgreementRequest = {
  AgreementId: {}
  ServerId: {}
  Description?: {} | undefined
  Status?: {} | undefined
  LocalProfileId?: {} | undefined
  PartnerProfileId?: {} | undefined
  BaseDirectory?: {} | undefined
  AccessRole?: {} | undefined
}
type UpdateAgreementResponse = { AgreementId: {} }
type UpdateCertificateRequest = {
  CertificateId: {}
  ActiveDate?: {} | undefined
  InactiveDate?: {} | undefined
  Description?: {} | undefined
}
type UpdateCertificateResponse = { CertificateId: {} }
type UpdateConnectorRequest = {
  ConnectorId: {}
  Url?: {} | undefined
  As2Config?:
    | {
        LocalProfileId?: {} | undefined
        PartnerProfileId?: {} | undefined
        MessageSubject?: {} | undefined
        Compression?: {} | undefined
        EncryptionAlgorithm?: {} | undefined
        SigningAlgorithm?: {} | undefined
        MdnSigningAlgorithm?: {} | undefined
        MdnResponse?: {} | undefined
      }
    | undefined
  AccessRole?: {} | undefined
  LoggingRole?: {} | undefined
}
type UpdateConnectorResponse = { ConnectorId: {} }
type UpdateHostKeyRequest = { ServerId: {}; HostKeyId: {}; Description: {} }
type UpdateHostKeyResponse = { ServerId: {}; HostKeyId: {} }
type UpdateProfileRequest = { ProfileId: {}; CertificateIds?: {} | undefined }
type UpdateProfileResponse = { ProfileId: {} }
type UpdateServerRequest = {
  Certificate?: {} | undefined
  ProtocolDetails?:
    | {
        PassiveIp?: {} | undefined
        TlsSessionResumptionMode?: {} | undefined
        SetStatOption?: {} | undefined
        As2Transports?: {} | undefined
      }
    | undefined
  EndpointDetails?:
    | {
        AddressAllocationIds?: {} | undefined
        SubnetIds?: {} | undefined
        VpcEndpointId?: {} | undefined
        VpcId?: {} | undefined
        SecurityGroupIds?: {} | undefined
      }
    | undefined
  EndpointType?: {} | undefined
  HostKey?: {} | undefined
  IdentityProviderDetails?:
    | {
        Url?: {} | undefined
        InvocationRole?: {} | undefined
        DirectoryId?: {} | undefined
        Function?: {} | undefined
      }
    | undefined
  LoggingRole?: {} | undefined
  PostAuthenticationLoginBanner?: {} | undefined
  PreAuthenticationLoginBanner?: {} | undefined
  Protocols?: {} | undefined
  SecurityPolicyName?: {} | undefined
  ServerId: {}
  WorkflowDetails?: { OnUpload?: {} | undefined; OnPartialUpload?: {} | undefined } | undefined
}
type UpdateServerResponse = { ServerId: {} }
type UpdateUserRequest = {
  HomeDirectory?: {} | undefined
  HomeDirectoryType?: {} | undefined
  HomeDirectoryMappings?: {} | undefined
  Policy?: {} | undefined
  PosixProfile?: { Uid: {}; Gid: {}; SecondaryGids?: {} | undefined } | undefined
  Role?: {} | undefined
  ServerId: {}
  UserName: {}
}
type UpdateUserResponse = { ServerId: {}; UserName: {} }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=TransferService.CreateAccess': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.CreateAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAccessRequest }
        output: CreateAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.CreateAgreement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.CreateAgreement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAgreementRequest }
        output: CreateAgreementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.CreateConnector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.CreateConnector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateConnectorRequest }
        output: CreateConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.CreateProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.CreateProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateProfileRequest }
        output: CreateProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.CreateServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.CreateServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateServerRequest }
        output: CreateServerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.CreateUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.CreateUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateUserRequest }
        output: CreateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.CreateWorkflow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.CreateWorkflow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateWorkflowRequest }
        output: CreateWorkflowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteAccess': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAccessRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteAgreement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteAgreement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAgreementRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteConnector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteConnector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteConnectorRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteHostKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteHostKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteHostKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteProfileRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteServerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteSshPublicKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteSshPublicKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSshPublicKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteUserRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DeleteWorkflow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DeleteWorkflow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteWorkflowRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeAccess': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAccessRequest }
        output: DescribeAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeAgreement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeAgreement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAgreementRequest }
        output: DescribeAgreementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCertificateRequest }
        output: DescribeCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeConnector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeConnector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeConnectorRequest }
        output: DescribeConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeExecution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeExecution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeExecutionRequest }
        output: DescribeExecutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeHostKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeHostKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeHostKeyRequest }
        output: DescribeHostKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeProfileRequest }
        output: DescribeProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeSecurityPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeSecurityPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSecurityPolicyRequest }
        output: DescribeSecurityPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeServerRequest }
        output: DescribeServerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeUserRequest }
        output: DescribeUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.DescribeWorkflow': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.DescribeWorkflow'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeWorkflowRequest }
        output: DescribeWorkflowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ImportCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.ImportCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportCertificateRequest }
        output: ImportCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ImportHostKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.ImportHostKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportHostKeyRequest }
        output: ImportHostKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ImportSshPublicKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.ImportSshPublicKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportSshPublicKeyRequest }
        output: ImportSshPublicKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListAccesses': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListAccesses'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAccessesRequest }
        output: ListAccessesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListAgreements': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListAgreements'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAgreementsRequest }
        output: ListAgreementsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListCertificates': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListCertificates'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCertificatesRequest }
        output: ListCertificatesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListConnectors': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListConnectors'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListConnectorsRequest }
        output: ListConnectorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListExecutions': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListExecutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListExecutionsRequest }
        output: ListExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListHostKeys': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.ListHostKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListHostKeysRequest }
        output: ListHostKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListProfiles': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListProfiles'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListProfilesRequest }
        output: ListProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListSecurityPolicies': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListSecurityPolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSecurityPoliciesRequest }
        output: ListSecurityPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListServers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListServers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListServersRequest }
        output: ListServersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListTagsForResource': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListTagsForResource'
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
    '/#X-Amz-Target=TransferService.ListUsers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListUsers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListUsersRequest }
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.ListWorkflows': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TransferService.ListWorkflows'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListWorkflowsRequest }
        output: ListWorkflowsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.SendWorkflowStepState': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.SendWorkflowStepState'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SendWorkflowStepStateRequest }
        output: SendWorkflowStepStateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.StartFileTransfer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.StartFileTransfer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartFileTransferRequest }
        output: StartFileTransferResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.StartServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.StartServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartServerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.StopServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.StopServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopServerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.TestIdentityProvider': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.TestIdentityProvider'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TestIdentityProviderRequest }
        output: TestIdentityProviderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.UpdateAccess': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.UpdateAccess'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAccessRequest }
        output: UpdateAccessResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.UpdateAgreement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.UpdateAgreement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAgreementRequest }
        output: UpdateAgreementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.UpdateCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.UpdateCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCertificateRequest }
        output: UpdateCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.UpdateConnector': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.UpdateConnector'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateConnectorRequest }
        output: UpdateConnectorResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.UpdateHostKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.UpdateHostKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateHostKeyRequest }
        output: UpdateHostKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.UpdateProfile': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.UpdateProfile'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateProfileRequest }
        output: UpdateProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.UpdateServer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.UpdateServer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateServerRequest }
        output: UpdateServerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TransferService.UpdateUser': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TransferService.UpdateUser'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateUserRequest }
        output: UpdateUserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
