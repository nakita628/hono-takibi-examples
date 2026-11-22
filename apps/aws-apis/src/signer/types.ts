type AddProfilePermissionResponse = { revisionId?: {} | undefined }
type ValidationException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ServiceLimitExceededException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type InternalServiceErrorException = { [x: string]: unknown }
type ListProfilePermissionsResponse = {
  revisionId?: {} | undefined
  policySizeBytes?: {} | undefined
  permissions?: {} | undefined
  nextToken?: {} | undefined
}
type SigningProfileRevocationRecord = {
  revocationEffectiveFrom?: {} | undefined
  revokedAt?: {} | undefined
  revokedBy?: {} | undefined
}
type SignatureValidityPeriod = { value?: {} | undefined; type?: {} | undefined }
type GetSigningProfileResponse = {
  profileName?: {} | undefined
  profileVersion?: {} | undefined
  profileVersionArn?: {} | undefined
  revocationRecord?: SigningProfileRevocationRecord | undefined
  signingMaterial?: { certificateArn: {} } | undefined
  platformId?: {} | undefined
  platformDisplayName?: {} | undefined
  signatureValidityPeriod?: SignatureValidityPeriod | undefined
  overrides?:
    | {
        signingConfiguration?:
          | { encryptionAlgorithm?: {} | undefined; hashAlgorithm?: {} | undefined }
          | undefined
        signingImageFormat?: {} | undefined
      }
    | undefined
  signingParameters?: {} | undefined
  status?: {} | undefined
  statusReason?: {} | undefined
  arn?: {} | undefined
  tags?: {} | undefined
}
type SigningParameterValue = string
type TagValue = string
type PutSigningProfileResponse = {
  arn?: {} | undefined
  profileVersion?: {} | undefined
  profileVersionArn?: {} | undefined
}
type DescribeSigningJobResponse = {
  jobId?: {} | undefined
  source?: { s3?: { bucketName: {}; key: {}; version: {} } | undefined } | undefined
  signingMaterial?: { certificateArn: {} } | undefined
  platformId?: {} | undefined
  platformDisplayName?: {} | undefined
  profileName?: {} | undefined
  profileVersion?: {} | undefined
  overrides?:
    | {
        signingConfiguration?:
          | { encryptionAlgorithm?: {} | undefined; hashAlgorithm?: {} | undefined }
          | undefined
        signingImageFormat?: {} | undefined
      }
    | undefined
  signingParameters?: {} | undefined
  createdAt?: {} | undefined
  completedAt?: {} | undefined
  signatureExpiresAt?: {} | undefined
  requestedBy?: {} | undefined
  status?: {} | undefined
  statusReason?: {} | undefined
  revocationRecord?:
    | { reason?: {} | undefined; revokedAt?: {} | undefined; revokedBy?: {} | undefined }
    | undefined
  signedObject?:
    | { s3?: { bucketName?: {} | undefined; key?: {} | undefined } | undefined }
    | undefined
  jobOwner?: {} | undefined
  jobInvoker?: {} | undefined
}
type GetSigningPlatformResponse = {
  platformId?: {} | undefined
  displayName?: {} | undefined
  partner?: {} | undefined
  target?: {} | undefined
  category?: {} | undefined
  signingConfiguration?:
    | {
        encryptionAlgorithmOptions: { allowedValues: {}; defaultValue: {} }
        hashAlgorithmOptions: { allowedValues: {}; defaultValue: {} }
      }
    | undefined
  signingImageFormat?: { supportedFormats: {}; defaultFormat: {} } | undefined
  maxSizeInMB?: {} | undefined
  revocationSupported?: {} | undefined
}
type ListSigningJobsResponse = { jobs?: {} | undefined; nextToken?: {} | undefined }
type StartSigningJobResponse = { jobId?: {} | undefined; jobOwner?: {} | undefined }
type ThrottlingException = { [x: string]: unknown }
type ListSigningPlatformsResponse = { platforms?: {} | undefined; nextToken?: {} | undefined }
type SigningProfileStatus = 'Active' | 'Canceled' | 'Revoked'
type ListSigningProfilesResponse = { profiles?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type BadRequestException = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type TagResourceResponse = { [x: string]: unknown }
type RemoveProfilePermissionResponse = { revisionId?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/signing-profiles/:profileName/permissions': {
      $post:
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                profileVersion?: string | undefined
                action: string
                principal: string
                revisionId?: string | undefined
                statementId: string
              }
            }
            output: AddProfilePermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                profileVersion?: string | undefined
                action: string
                principal: string
                revisionId?: string | undefined
                statementId: string
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                profileVersion?: string | undefined
                action: string
                principal: string
                revisionId?: string | undefined
                statementId: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                profileVersion?: string | undefined
                action: string
                principal: string
                revisionId?: string | undefined
                statementId: string
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                profileVersion?: string | undefined
                action: string
                principal: string
                revisionId?: string | undefined
                statementId: string
              }
            }
            output: ServiceLimitExceededException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                profileVersion?: string | undefined
                action: string
                principal: string
                revisionId?: string | undefined
                statementId: string
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                profileVersion?: string | undefined
                action: string
                principal: string
                revisionId?: string | undefined
                statementId: string
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                profileVersion?: string | undefined
                action: string
                principal: string
                revisionId?: string | undefined
                statementId: string
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { profileName: string } } & {
              query: { nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListProfilePermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileName: string } } & {
              query: { nextToken?: string | undefined }
            } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { profileName: string } } & {
              query: { nextToken?: string | undefined }
            } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { profileName: string } } & {
              query: { nextToken?: string | undefined }
            } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { profileName: string } } & {
              query: { nextToken?: string | undefined }
            } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { profileName: string } } & {
              query: { nextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/signing-profiles/:profileName': {
      $delete:
        | {
            input: { param: { profileName: string } } & {
              header: {
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
        | {
            input: { param: { profileName: string } } & {
              header: {
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
            input: { param: { profileName: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
      $get:
        | {
            input: { param: { profileName: string } } & {
              query: { profileOwner?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetSigningProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileName: string } } & {
              query: { profileOwner?: string | undefined }
            } & {
              header: {
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
            input: { param: { profileName: string } } & {
              query: { profileOwner?: string | undefined }
            } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { profileName: string } } & {
              query: { profileOwner?: string | undefined }
            } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { profileName: string } } & {
              query: { profileOwner?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
      $put:
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                signingMaterial?: { certificateArn?: {} | undefined } | undefined
                signatureValidityPeriod?:
                  | { value?: {} | undefined; type?: {} | undefined }
                  | undefined
                platformId: string
                overrides?:
                  | {
                      signingConfiguration?:
                        | { encryptionAlgorithm?: {} | undefined; hashAlgorithm?: {} | undefined }
                        | undefined
                      signingImageFormat?: {} | undefined
                    }
                  | undefined
                signingParameters?: { [x: string]: SigningParameterValue } | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: PutSigningProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                signingMaterial?: { certificateArn?: {} | undefined } | undefined
                signatureValidityPeriod?:
                  | { value?: {} | undefined; type?: {} | undefined }
                  | undefined
                platformId: string
                overrides?:
                  | {
                      signingConfiguration?:
                        | { encryptionAlgorithm?: {} | undefined; hashAlgorithm?: {} | undefined }
                        | undefined
                      signingImageFormat?: {} | undefined
                    }
                  | undefined
                signingParameters?: { [x: string]: SigningParameterValue } | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                signingMaterial?: { certificateArn?: {} | undefined } | undefined
                signatureValidityPeriod?:
                  | { value?: {} | undefined; type?: {} | undefined }
                  | undefined
                platformId: string
                overrides?:
                  | {
                      signingConfiguration?:
                        | { encryptionAlgorithm?: {} | undefined; hashAlgorithm?: {} | undefined }
                        | undefined
                      signingImageFormat?: {} | undefined
                    }
                  | undefined
                signingParameters?: { [x: string]: SigningParameterValue } | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                signingMaterial?: { certificateArn?: {} | undefined } | undefined
                signatureValidityPeriod?:
                  | { value?: {} | undefined; type?: {} | undefined }
                  | undefined
                platformId: string
                overrides?:
                  | {
                      signingConfiguration?:
                        | { encryptionAlgorithm?: {} | undefined; hashAlgorithm?: {} | undefined }
                        | undefined
                      signingImageFormat?: {} | undefined
                    }
                  | undefined
                signingParameters?: { [x: string]: SigningParameterValue } | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                signingMaterial?: { certificateArn?: {} | undefined } | undefined
                signatureValidityPeriod?:
                  | { value?: {} | undefined; type?: {} | undefined }
                  | undefined
                platformId: string
                overrides?:
                  | {
                      signingConfiguration?:
                        | { encryptionAlgorithm?: {} | undefined; hashAlgorithm?: {} | undefined }
                        | undefined
                      signingImageFormat?: {} | undefined
                    }
                  | undefined
                signingParameters?: { [x: string]: SigningParameterValue } | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                signingMaterial?: { certificateArn?: {} | undefined } | undefined
                signatureValidityPeriod?:
                  | { value?: {} | undefined; type?: {} | undefined }
                  | undefined
                platformId: string
                overrides?:
                  | {
                      signingConfiguration?:
                        | { encryptionAlgorithm?: {} | undefined; hashAlgorithm?: {} | undefined }
                        | undefined
                      signingImageFormat?: {} | undefined
                    }
                  | undefined
                signingParameters?: { [x: string]: SigningParameterValue } | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/signing-jobs/:jobId': {
      $get:
        | {
            input: { param: { jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DescribeSigningJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { jobId: string } } & {
              header: {
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
            input: { param: { jobId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { jobId: string } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/signing-platforms/:platformId': {
      $get:
        | {
            input: { param: { platformId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetSigningPlatformResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { platformId: string } } & {
              header: {
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
            input: { param: { platformId: string } } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { platformId: string } } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { platformId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/signing-jobs': {
      $get:
        | {
            input: {
              query: {
                status?: 'InProgress' | 'Failed' | 'Succeeded' | undefined
                platformId?: string | undefined
                requestedBy?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                isRevoked?: boolean | undefined
                signatureExpiresBefore?: string | undefined
                signatureExpiresAfter?: string | undefined
                jobInvoker?: string | undefined
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
            output: ListSigningJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'InProgress' | 'Failed' | 'Succeeded' | undefined
                platformId?: string | undefined
                requestedBy?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                isRevoked?: boolean | undefined
                signatureExpiresBefore?: string | undefined
                signatureExpiresAfter?: string | undefined
                jobInvoker?: string | undefined
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
            status: 480
          }
        | {
            input: {
              query: {
                status?: 'InProgress' | 'Failed' | 'Succeeded' | undefined
                platformId?: string | undefined
                requestedBy?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                isRevoked?: boolean | undefined
                signatureExpiresBefore?: string | undefined
                signatureExpiresAfter?: string | undefined
                jobInvoker?: string | undefined
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
            status: 481
          }
        | {
            input: {
              query: {
                status?: 'InProgress' | 'Failed' | 'Succeeded' | undefined
                platformId?: string | undefined
                requestedBy?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                isRevoked?: boolean | undefined
                signatureExpiresBefore?: string | undefined
                signatureExpiresAfter?: string | undefined
                jobInvoker?: string | undefined
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
            status: 482
          }
        | {
            input: {
              query: {
                status?: 'InProgress' | 'Failed' | 'Succeeded' | undefined
                platformId?: string | undefined
                requestedBy?: string | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                isRevoked?: boolean | undefined
                signatureExpiresBefore?: string | undefined
                signatureExpiresAfter?: string | undefined
                jobInvoker?: string | undefined
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
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
                source: { s3?: { bucketName: {}; key: {}; version: {} } | undefined }
                destination: {
                  s3?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
                }
                profileName: string
                clientRequestToken: string
                profileOwner?: string | undefined
              }
            }
            output: StartSigningJobResponse
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
                source: { s3?: { bucketName: {}; key: {}; version: {} } | undefined }
                destination: {
                  s3?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
                }
                profileName: string
                clientRequestToken: string
                profileOwner?: string | undefined
              }
            }
            output: ValidationException
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
                source: { s3?: { bucketName: {}; key: {}; version: {} } | undefined }
                destination: {
                  s3?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
                }
                profileName: string
                clientRequestToken: string
                profileOwner?: string | undefined
              }
            }
            output: ResourceNotFoundException
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
                source: { s3?: { bucketName: {}; key: {}; version: {} } | undefined }
                destination: {
                  s3?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
                }
                profileName: string
                clientRequestToken: string
                profileOwner?: string | undefined
              }
            }
            output: AccessDeniedException
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
                source: { s3?: { bucketName: {}; key: {}; version: {} } | undefined }
                destination: {
                  s3?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
                }
                profileName: string
                clientRequestToken: string
                profileOwner?: string | undefined
              }
            }
            output: ThrottlingException
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
                source: { s3?: { bucketName: {}; key: {}; version: {} } | undefined }
                destination: {
                  s3?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
                }
                profileName: string
                clientRequestToken: string
                profileOwner?: string | undefined
              }
            }
            output: TooManyRequestsException
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
                source: { s3?: { bucketName: {}; key: {}; version: {} } | undefined }
                destination: {
                  s3?: { bucketName?: {} | undefined; prefix?: {} | undefined } | undefined
                }
                profileName: string
                clientRequestToken: string
                profileOwner?: string | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/signing-platforms': {
      $get:
        | {
            input: {
              query: {
                category?: string | undefined
                partner?: string | undefined
                target?: string | undefined
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
            output: ListSigningPlatformsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?: string | undefined
                partner?: string | undefined
                target?: string | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                category?: string | undefined
                partner?: string | undefined
                target?: string | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                category?: string | undefined
                partner?: string | undefined
                target?: string | undefined
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                category?: string | undefined
                partner?: string | undefined
                target?: string | undefined
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/signing-profiles': {
      $get:
        | {
            input: {
              query: {
                includeCanceled?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                platformId?: string | undefined
                statuses?: SigningProfileStatus[] | undefined
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
            output: ListSigningProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeCanceled?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                platformId?: string | undefined
                statuses?: SigningProfileStatus[] | undefined
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
            status: 480
          }
        | {
            input: {
              query: {
                includeCanceled?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                platformId?: string | undefined
                statuses?: SigningProfileStatus[] | undefined
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
            status: 481
          }
        | {
            input: {
              query: {
                includeCanceled?: boolean | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                platformId?: string | undefined
                statuses?: SigningProfileStatus[] | undefined
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 482
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
            output: InternalServiceErrorException
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
            output: NotFoundException
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
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
            output: InternalServiceErrorException
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
            } & { json: { tags: { [x: string]: TagValue } } }
            output: NotFoundException
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
            } & { json: { tags: { [x: string]: TagValue } } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/signing-profiles/:profileName/permissions/:statementId#revisionId': {
      $delete:
        | {
            input: { param: { profileName: string; statementId: string } } & {
              query: { revisionId: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RemoveProfilePermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileName: string; statementId: string } } & {
              query: { revisionId: string }
            } & {
              header: {
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
            status: 480
          }
        | {
            input: { param: { profileName: string; statementId: string } } & {
              query: { revisionId: string }
            } & {
              header: {
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
            status: 481
          }
        | {
            input: { param: { profileName: string; statementId: string } } & {
              query: { revisionId: string }
            } & {
              header: {
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
            status: 482
          }
        | {
            input: { param: { profileName: string; statementId: string } } & {
              query: { revisionId: string }
            } & {
              header: {
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
            input: { param: { profileName: string; statementId: string } } & {
              query: { revisionId: string }
            } & {
              header: {
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
            status: 484
          }
        | {
            input: { param: { profileName: string; statementId: string } } & {
              query: { revisionId: string }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/signing-jobs/:jobId/revoke': {
      $put:
        | {
            input: { param: { jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobOwner?: string | undefined; reason: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobOwner?: string | undefined; reason: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobOwner?: string | undefined; reason: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobOwner?: string | undefined; reason: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobOwner?: string | undefined; reason: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { jobId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { jobOwner?: string | undefined; reason: string } }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/signing-profiles/:profileName/revoke': {
      $put:
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { profileVersion: string; reason: string; effectiveTime: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { profileVersion: string; reason: string; effectiveTime: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { profileVersion: string; reason: string; effectiveTime: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { profileVersion: string; reason: string; effectiveTime: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { profileVersion: string; reason: string; effectiveTime: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { profileName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { profileVersion: string; reason: string; effectiveTime: string } }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 484
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
            output: InternalServiceErrorException
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
            output: BadRequestException
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
            output: NotFoundException
            outputFormat: 'json'
            status: 482
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
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
