type CancelKeyDeletionRequest = { KeyId: {} }
type CancelKeyDeletionResponse = { KeyId?: {} | undefined }
type ConnectCustomKeyStoreRequest = { CustomKeyStoreId: {} }
type ConnectCustomKeyStoreResponse = { [x: string]: unknown }
type CreateAliasRequest = { AliasName: {}; TargetKeyId: {} }
type CreateCustomKeyStoreRequest = {
  CustomKeyStoreName: {}
  CloudHsmClusterId?: {} | undefined
  TrustAnchorCertificate?: {} | undefined
  KeyStorePassword?: {} | undefined
  CustomKeyStoreType?: {} | undefined
  XksProxyUriEndpoint?: {} | undefined
  XksProxyUriPath?: {} | undefined
  XksProxyVpcEndpointServiceName?: {} | undefined
  XksProxyAuthenticationCredential?: { AccessKeyId: {}; RawSecretAccessKey: {} } | undefined
  XksProxyConnectivity?: {} | undefined
}
type CreateCustomKeyStoreResponse = { CustomKeyStoreId?: {} | undefined }
type CreateGrantRequest = {
  KeyId: {}
  GranteePrincipal: {}
  RetiringPrincipal?: {} | undefined
  Operations: {}
  Constraints?:
    | { EncryptionContextSubset?: {} | undefined; EncryptionContextEquals?: {} | undefined }
    | undefined
  GrantTokens?: {} | undefined
  Name?: {} | undefined
  DryRun?: {} | undefined
}
type CreateGrantResponse = { GrantToken?: {} | undefined; GrantId?: {} | undefined }
type CreateKeyRequest = {
  Policy?: {} | undefined
  Description?: {} | undefined
  KeyUsage?: {} | undefined
  CustomerMasterKeySpec?: {} | undefined
  KeySpec?: {} | undefined
  Origin?: {} | undefined
  CustomKeyStoreId?: {} | undefined
  BypassPolicyLockoutSafetyCheck?: {} | undefined
  Tags?: {} | undefined
  MultiRegion?: {} | undefined
  XksKeyId?: {} | undefined
}
type CreateKeyResponse = {
  KeyMetadata?:
    | {
        AWSAccountId?: {} | undefined
        KeyId: {}
        Arn?: {} | undefined
        CreationDate?: {} | undefined
        Enabled?: {} | undefined
        Description?: {} | undefined
        KeyUsage?: {} | undefined
        KeyState?: {} | undefined
        DeletionDate?: {} | undefined
        ValidTo?: {} | undefined
        Origin?: {} | undefined
        CustomKeyStoreId?: {} | undefined
        CloudHsmClusterId?: {} | undefined
        ExpirationModel?: {} | undefined
        KeyManager?: {} | undefined
        CustomerMasterKeySpec?: {} | undefined
        KeySpec?: {} | undefined
        EncryptionAlgorithms?: {} | undefined
        SigningAlgorithms?: {} | undefined
        MultiRegion?: {} | undefined
        MultiRegionConfiguration?:
          | {
              MultiRegionKeyType?: {} | undefined
              PrimaryKey?: { Arn?: {} | undefined; Region?: {} | undefined } | undefined
              ReplicaKeys?: {} | undefined
            }
          | undefined
        PendingDeletionWindowInDays?: {} | undefined
        MacAlgorithms?: {} | undefined
        XksKeyConfiguration?: { Id?: {} | undefined } | undefined
      }
    | undefined
}
type DecryptRequest = {
  CiphertextBlob: {}
  EncryptionContext?: {} | undefined
  GrantTokens?: {} | undefined
  KeyId?: {} | undefined
  EncryptionAlgorithm?: {} | undefined
  Recipient?:
    | { KeyEncryptionAlgorithm?: {} | undefined; AttestationDocument?: {} | undefined }
    | undefined
  DryRun?: {} | undefined
}
type DecryptResponse = {
  KeyId?: {} | undefined
  Plaintext?: {} | undefined
  EncryptionAlgorithm?: {} | undefined
  CiphertextForRecipient?: {} | undefined
}
type DeleteAliasRequest = { AliasName: {} }
type DeleteCustomKeyStoreRequest = { CustomKeyStoreId: {} }
type DeleteCustomKeyStoreResponse = { [x: string]: unknown }
type DeleteImportedKeyMaterialRequest = { KeyId: {} }
type DescribeCustomKeyStoresRequest = {
  CustomKeyStoreId?: {} | undefined
  CustomKeyStoreName?: {} | undefined
  Limit?: {} | undefined
  Marker?: {} | undefined
}
type DescribeCustomKeyStoresResponse = {
  CustomKeyStores?: {} | undefined
  NextMarker?: {} | undefined
  Truncated?: {} | undefined
}
type DescribeKeyRequest = { KeyId: {}; GrantTokens?: {} | undefined }
type DescribeKeyResponse = {
  KeyMetadata?:
    | {
        AWSAccountId?: {} | undefined
        KeyId: {}
        Arn?: {} | undefined
        CreationDate?: {} | undefined
        Enabled?: {} | undefined
        Description?: {} | undefined
        KeyUsage?: {} | undefined
        KeyState?: {} | undefined
        DeletionDate?: {} | undefined
        ValidTo?: {} | undefined
        Origin?: {} | undefined
        CustomKeyStoreId?: {} | undefined
        CloudHsmClusterId?: {} | undefined
        ExpirationModel?: {} | undefined
        KeyManager?: {} | undefined
        CustomerMasterKeySpec?: {} | undefined
        KeySpec?: {} | undefined
        EncryptionAlgorithms?: {} | undefined
        SigningAlgorithms?: {} | undefined
        MultiRegion?: {} | undefined
        MultiRegionConfiguration?:
          | {
              MultiRegionKeyType?: {} | undefined
              PrimaryKey?: { Arn?: {} | undefined; Region?: {} | undefined } | undefined
              ReplicaKeys?: {} | undefined
            }
          | undefined
        PendingDeletionWindowInDays?: {} | undefined
        MacAlgorithms?: {} | undefined
        XksKeyConfiguration?: { Id?: {} | undefined } | undefined
      }
    | undefined
}
type DisableKeyRequest = { KeyId: {} }
type DisableKeyRotationRequest = { KeyId: {} }
type DisconnectCustomKeyStoreRequest = { CustomKeyStoreId: {} }
type DisconnectCustomKeyStoreResponse = { [x: string]: unknown }
type EnableKeyRequest = { KeyId: {} }
type EnableKeyRotationRequest = { KeyId: {} }
type EncryptRequest = {
  KeyId: {}
  Plaintext: {}
  EncryptionContext?: {} | undefined
  GrantTokens?: {} | undefined
  EncryptionAlgorithm?: {} | undefined
  DryRun?: {} | undefined
}
type EncryptResponse = {
  CiphertextBlob?: {} | undefined
  KeyId?: {} | undefined
  EncryptionAlgorithm?: {} | undefined
}
type GenerateDataKeyRequest = {
  KeyId: {}
  EncryptionContext?: {} | undefined
  NumberOfBytes?: {} | undefined
  KeySpec?: {} | undefined
  GrantTokens?: {} | undefined
  Recipient?:
    | { KeyEncryptionAlgorithm?: {} | undefined; AttestationDocument?: {} | undefined }
    | undefined
  DryRun?: {} | undefined
}
type GenerateDataKeyResponse = {
  CiphertextBlob?: {} | undefined
  Plaintext?: {} | undefined
  KeyId?: {} | undefined
  CiphertextForRecipient?: {} | undefined
}
type GenerateDataKeyPairRequest = {
  EncryptionContext?: {} | undefined
  KeyId: {}
  KeyPairSpec: {}
  GrantTokens?: {} | undefined
  Recipient?:
    | { KeyEncryptionAlgorithm?: {} | undefined; AttestationDocument?: {} | undefined }
    | undefined
  DryRun?: {} | undefined
}
type GenerateDataKeyPairResponse = {
  PrivateKeyCiphertextBlob?: {} | undefined
  PrivateKeyPlaintext?: {} | undefined
  PublicKey?: {} | undefined
  KeyId?: {} | undefined
  KeyPairSpec?: {} | undefined
  CiphertextForRecipient?: {} | undefined
}
type GenerateDataKeyPairWithoutPlaintextRequest = {
  EncryptionContext?: {} | undefined
  KeyId: {}
  KeyPairSpec: {}
  GrantTokens?: {} | undefined
  DryRun?: {} | undefined
}
type GenerateDataKeyPairWithoutPlaintextResponse = {
  PrivateKeyCiphertextBlob?: {} | undefined
  PublicKey?: {} | undefined
  KeyId?: {} | undefined
  KeyPairSpec?: {} | undefined
}
type GenerateDataKeyWithoutPlaintextRequest = {
  KeyId: {}
  EncryptionContext?: {} | undefined
  KeySpec?: {} | undefined
  NumberOfBytes?: {} | undefined
  GrantTokens?: {} | undefined
  DryRun?: {} | undefined
}
type GenerateDataKeyWithoutPlaintextResponse = {
  CiphertextBlob?: {} | undefined
  KeyId?: {} | undefined
}
type GenerateMacRequest = {
  Message: {}
  KeyId: {}
  MacAlgorithm: {}
  GrantTokens?: {} | undefined
  DryRun?: {} | undefined
}
type GenerateMacResponse = {
  Mac?: {} | undefined
  MacAlgorithm?: {} | undefined
  KeyId?: {} | undefined
}
type GenerateRandomRequest = {
  NumberOfBytes?: {} | undefined
  CustomKeyStoreId?: {} | undefined
  Recipient?:
    | { KeyEncryptionAlgorithm?: {} | undefined; AttestationDocument?: {} | undefined }
    | undefined
}
type GenerateRandomResponse = {
  Plaintext?: {} | undefined
  CiphertextForRecipient?: {} | undefined
}
type GetKeyPolicyRequest = { KeyId: {}; PolicyName: {} }
type GetKeyPolicyResponse = { Policy?: {} | undefined }
type GetKeyRotationStatusRequest = { KeyId: {} }
type GetKeyRotationStatusResponse = { KeyRotationEnabled?: {} | undefined }
type GetParametersForImportRequest = { KeyId: {}; WrappingAlgorithm: {}; WrappingKeySpec: {} }
type GetParametersForImportResponse = {
  KeyId?: {} | undefined
  ImportToken?: {} | undefined
  PublicKey?: {} | undefined
  ParametersValidTo?: {} | undefined
}
type GetPublicKeyRequest = { KeyId: {}; GrantTokens?: {} | undefined }
type GetPublicKeyResponse = {
  KeyId?: {} | undefined
  PublicKey?: {} | undefined
  CustomerMasterKeySpec?: {} | undefined
  KeySpec?: {} | undefined
  KeyUsage?: {} | undefined
  EncryptionAlgorithms?: {} | undefined
  SigningAlgorithms?: {} | undefined
}
type ImportKeyMaterialRequest = {
  KeyId: {}
  ImportToken: {}
  EncryptedKeyMaterial: {}
  ValidTo?: {} | undefined
  ExpirationModel?: {} | undefined
}
type ImportKeyMaterialResponse = { [x: string]: unknown }
type ListAliasesRequest = {
  KeyId?: {} | undefined
  Limit?: {} | undefined
  Marker?: {} | undefined
}
type ListAliasesResponse = {
  Aliases?: {} | undefined
  NextMarker?: {} | undefined
  Truncated?: {} | undefined
}
type ListGrantsRequest = {
  Limit?: {} | undefined
  Marker?: {} | undefined
  KeyId: {}
  GrantId?: {} | undefined
  GranteePrincipal?: {} | undefined
}
type ListGrantsResponse = {
  Grants?: {} | undefined
  NextMarker?: {} | undefined
  Truncated?: {} | undefined
}
type ListKeyPoliciesRequest = { KeyId: {}; Limit?: {} | undefined; Marker?: {} | undefined }
type ListKeyPoliciesResponse = {
  PolicyNames?: {} | undefined
  NextMarker?: {} | undefined
  Truncated?: {} | undefined
}
type ListKeysRequest = { Limit?: {} | undefined; Marker?: {} | undefined }
type ListKeysResponse = {
  Keys?: {} | undefined
  NextMarker?: {} | undefined
  Truncated?: {} | undefined
}
type ListResourceTagsRequest = { KeyId: {}; Limit?: {} | undefined; Marker?: {} | undefined }
type ListResourceTagsResponse = {
  Tags?: {} | undefined
  NextMarker?: {} | undefined
  Truncated?: {} | undefined
}
type ListRetirableGrantsRequest = {
  Limit?: {} | undefined
  Marker?: {} | undefined
  RetiringPrincipal: {}
}
type PutKeyPolicyRequest = {
  KeyId: {}
  PolicyName: {}
  Policy: {}
  BypassPolicyLockoutSafetyCheck?: {} | undefined
}
type ReEncryptRequest = {
  CiphertextBlob: {}
  SourceEncryptionContext?: {} | undefined
  SourceKeyId?: {} | undefined
  DestinationKeyId: {}
  DestinationEncryptionContext?: {} | undefined
  SourceEncryptionAlgorithm?: {} | undefined
  DestinationEncryptionAlgorithm?: {} | undefined
  GrantTokens?: {} | undefined
  DryRun?: {} | undefined
}
type ReEncryptResponse = {
  CiphertextBlob?: {} | undefined
  SourceKeyId?: {} | undefined
  KeyId?: {} | undefined
  SourceEncryptionAlgorithm?: {} | undefined
  DestinationEncryptionAlgorithm?: {} | undefined
}
type ReplicateKeyRequest = {
  KeyId: {}
  ReplicaRegion: {}
  Policy?: {} | undefined
  BypassPolicyLockoutSafetyCheck?: {} | undefined
  Description?: {} | undefined
  Tags?: {} | undefined
}
type ReplicateKeyResponse = {
  ReplicaKeyMetadata?:
    | {
        AWSAccountId?: {} | undefined
        KeyId: {}
        Arn?: {} | undefined
        CreationDate?: {} | undefined
        Enabled?: {} | undefined
        Description?: {} | undefined
        KeyUsage?: {} | undefined
        KeyState?: {} | undefined
        DeletionDate?: {} | undefined
        ValidTo?: {} | undefined
        Origin?: {} | undefined
        CustomKeyStoreId?: {} | undefined
        CloudHsmClusterId?: {} | undefined
        ExpirationModel?: {} | undefined
        KeyManager?: {} | undefined
        CustomerMasterKeySpec?: {} | undefined
        KeySpec?: {} | undefined
        EncryptionAlgorithms?: {} | undefined
        SigningAlgorithms?: {} | undefined
        MultiRegion?: {} | undefined
        MultiRegionConfiguration?:
          | {
              MultiRegionKeyType?: {} | undefined
              PrimaryKey?: { Arn?: {} | undefined; Region?: {} | undefined } | undefined
              ReplicaKeys?: {} | undefined
            }
          | undefined
        PendingDeletionWindowInDays?: {} | undefined
        MacAlgorithms?: {} | undefined
        XksKeyConfiguration?: { Id?: {} | undefined } | undefined
      }
    | undefined
  ReplicaPolicy?: {} | undefined
  ReplicaTags?: {} | undefined
}
type RetireGrantRequest = {
  GrantToken?: {} | undefined
  KeyId?: {} | undefined
  GrantId?: {} | undefined
  DryRun?: {} | undefined
}
type RevokeGrantRequest = { KeyId: {}; GrantId: {}; DryRun?: {} | undefined }
type ScheduleKeyDeletionRequest = { KeyId: {}; PendingWindowInDays?: {} | undefined }
type ScheduleKeyDeletionResponse = {
  KeyId?: {} | undefined
  DeletionDate?: {} | undefined
  KeyState?: {} | undefined
  PendingWindowInDays?: {} | undefined
}
type SignRequest = {
  KeyId: {}
  Message: {}
  MessageType?: {} | undefined
  GrantTokens?: {} | undefined
  SigningAlgorithm: {}
  DryRun?: {} | undefined
}
type SignResponse = {
  KeyId?: {} | undefined
  Signature?: {} | undefined
  SigningAlgorithm?: {} | undefined
}
type TagResourceRequest = { KeyId: {}; Tags: {} }
type UntagResourceRequest = { KeyId: {}; TagKeys: {} }
type UpdateAliasRequest = { AliasName: {}; TargetKeyId: {} }
type UpdateCustomKeyStoreRequest = {
  CustomKeyStoreId: {}
  NewCustomKeyStoreName?: {} | undefined
  KeyStorePassword?: {} | undefined
  CloudHsmClusterId?: {} | undefined
  XksProxyUriEndpoint?: {} | undefined
  XksProxyUriPath?: {} | undefined
  XksProxyVpcEndpointServiceName?: {} | undefined
  XksProxyAuthenticationCredential?: { AccessKeyId: {}; RawSecretAccessKey: {} } | undefined
  XksProxyConnectivity?: {} | undefined
}
type UpdateCustomKeyStoreResponse = { [x: string]: unknown }
type UpdateKeyDescriptionRequest = { KeyId: {}; Description: {} }
type UpdatePrimaryRegionRequest = { KeyId: {}; PrimaryRegion: {} }
type VerifyRequest = {
  KeyId: {}
  Message: {}
  MessageType?: {} | undefined
  Signature: {}
  SigningAlgorithm: {}
  GrantTokens?: {} | undefined
  DryRun?: {} | undefined
}
type VerifyResponse = {
  KeyId?: {} | undefined
  SignatureValid?: {} | undefined
  SigningAlgorithm?: {} | undefined
}
type VerifyMacRequest = {
  Message: {}
  KeyId: {}
  MacAlgorithm: {}
  Mac: {}
  GrantTokens?: {} | undefined
  DryRun?: {} | undefined
}
type VerifyMacResponse = {
  KeyId?: {} | undefined
  MacValid?: {} | undefined
  MacAlgorithm?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=TrentService.CancelKeyDeletion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.CancelKeyDeletion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelKeyDeletionRequest }
        output: CancelKeyDeletionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ConnectCustomKeyStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.ConnectCustomKeyStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ConnectCustomKeyStoreRequest }
        output: ConnectCustomKeyStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.CreateAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.CreateAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateAliasRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.CreateCustomKeyStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.CreateCustomKeyStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCustomKeyStoreRequest }
        output: CreateCustomKeyStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.CreateGrant': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.CreateGrant'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateGrantRequest }
        output: CreateGrantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.CreateKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.CreateKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateKeyRequest }
        output: CreateKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.Decrypt': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.Decrypt'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DecryptRequest }
        output: DecryptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.DeleteAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.DeleteAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteAliasRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.DeleteCustomKeyStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.DeleteCustomKeyStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCustomKeyStoreRequest }
        output: DeleteCustomKeyStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.DeleteImportedKeyMaterial': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.DeleteImportedKeyMaterial'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteImportedKeyMaterialRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.DescribeCustomKeyStores': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TrentService.DescribeCustomKeyStores'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCustomKeyStoresRequest }
        output: DescribeCustomKeyStoresResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.DescribeKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.DescribeKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeKeyRequest }
        output: DescribeKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.DisableKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.DisableKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.DisableKeyRotation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.DisableKeyRotation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableKeyRotationRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.DisconnectCustomKeyStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.DisconnectCustomKeyStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisconnectCustomKeyStoreRequest }
        output: DisconnectCustomKeyStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.EnableKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.EnableKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableKeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.EnableKeyRotation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.EnableKeyRotation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableKeyRotationRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.Encrypt': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.Encrypt'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EncryptRequest }
        output: EncryptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GenerateDataKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GenerateDataKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateDataKeyRequest }
        output: GenerateDataKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GenerateDataKeyPair': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GenerateDataKeyPair'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateDataKeyPairRequest }
        output: GenerateDataKeyPairResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GenerateDataKeyPairWithoutPlaintext': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GenerateDataKeyPairWithoutPlaintext'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateDataKeyPairWithoutPlaintextRequest }
        output: GenerateDataKeyPairWithoutPlaintextResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GenerateDataKeyWithoutPlaintext': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GenerateDataKeyWithoutPlaintext'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateDataKeyWithoutPlaintextRequest }
        output: GenerateDataKeyWithoutPlaintextResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GenerateMac': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GenerateMac'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateMacRequest }
        output: GenerateMacResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GenerateRandom': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GenerateRandom'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GenerateRandomRequest }
        output: GenerateRandomResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GetKeyPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GetKeyPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetKeyPolicyRequest }
        output: GetKeyPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GetKeyRotationStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GetKeyRotationStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetKeyRotationStatusRequest }
        output: GetKeyRotationStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GetParametersForImport': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GetParametersForImport'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetParametersForImportRequest }
        output: GetParametersForImportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.GetPublicKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.GetPublicKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetPublicKeyRequest }
        output: GetPublicKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ImportKeyMaterial': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.ImportKeyMaterial'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ImportKeyMaterialRequest }
        output: ImportKeyMaterialResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ListAliases': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TrentService.ListAliases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListAliasesRequest }
        output: ListAliasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ListGrants': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TrentService.ListGrants'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListGrantsRequest }
        output: ListGrantsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ListKeyPolicies': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TrentService.ListKeyPolicies'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListKeyPoliciesRequest }
        output: ListKeyPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ListKeys': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TrentService.ListKeys'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListKeysRequest }
        output: ListKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ListResourceTags': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TrentService.ListResourceTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListResourceTagsRequest }
        output: ListResourceTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ListRetirableGrants': {
      $post: {
        input: { query: { Limit?: string | undefined; Marker?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'TrentService.ListRetirableGrants'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRetirableGrantsRequest }
        output: ListGrantsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.PutKeyPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.PutKeyPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutKeyPolicyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ReEncrypt': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.ReEncrypt'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ReEncryptRequest }
        output: ReEncryptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ReplicateKey': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.ReplicateKey'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ReplicateKeyRequest }
        output: ReplicateKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.RetireGrant': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.RetireGrant'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RetireGrantRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.RevokeGrant': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.RevokeGrant'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RevokeGrantRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.ScheduleKeyDeletion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.ScheduleKeyDeletion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ScheduleKeyDeletionRequest }
        output: ScheduleKeyDeletionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.Sign': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.Sign'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SignRequest }
        output: SignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.TagResource'
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
    '/#X-Amz-Target=TrentService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.UntagResource'
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
    '/#X-Amz-Target=TrentService.UpdateAlias': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.UpdateAlias'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateAliasRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.UpdateCustomKeyStore': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.UpdateCustomKeyStore'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCustomKeyStoreRequest }
        output: UpdateCustomKeyStoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.UpdateKeyDescription': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.UpdateKeyDescription'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateKeyDescriptionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.UpdatePrimaryRegion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.UpdatePrimaryRegion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdatePrimaryRegionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.Verify': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.Verify'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: VerifyRequest }
        output: VerifyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=TrentService.VerifyMac': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'TrentService.VerifyMac'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: VerifyMacRequest }
        output: VerifyMacResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
