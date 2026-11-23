type Jwt = { compactJwt?: string | undefined }
type Signature = { publicKeyId?: string | undefined; signature?: string | undefined }
type AttestationOccurrence = {
  jwts?: Jwt[] | undefined
  serializedPayload?: string | undefined
  signatures?: Signature[] | undefined
}
type ValidateAttestationOccurrenceRequest = {
  attestation?: AttestationOccurrence | undefined
  occurrenceNote?: string | undefined
  occurrenceResourceUri?: string | undefined
}
type ValidateAttestationOccurrenceResponse = {
  denialReason?: string | undefined
  result?: 'RESULT_UNSPECIFIED' | 'VERIFIED' | 'ATTESTATION_NOT_VERIFIABLE' | undefined
}
type Empty = { [x: string]: unknown }
type AdmissionWhitelistPattern = { namePattern?: string | undefined }
type AdmissionRule = {
  enforcementMode?:
    | 'ENFORCEMENT_MODE_UNSPECIFIED'
    | 'ENFORCED_BLOCK_AND_AUDIT_LOG'
    | 'DRYRUN_AUDIT_LOG_ONLY'
    | undefined
  evaluationMode?:
    | 'EVALUATION_MODE_UNSPECIFIED'
    | 'ALWAYS_ALLOW'
    | 'REQUIRE_ATTESTATION'
    | 'ALWAYS_DENY'
    | undefined
  requireAttestationsBy?: string[] | undefined
}
type Policy = {
  admissionWhitelistPatterns?: AdmissionWhitelistPattern[] | undefined
  clusterAdmissionRules?: { [x: string]: AdmissionRule } | undefined
  defaultAdmissionRule?: AdmissionRule | undefined
  description?: string | undefined
  etag?: string | undefined
  globalPolicyEvaluationMode?:
    | 'GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED'
    | 'ENABLE'
    | 'DISABLE'
    | undefined
  istioServiceIdentityAdmissionRules?: { [x: string]: AdmissionRule } | undefined
  kubernetesNamespaceAdmissionRules?: { [x: string]: AdmissionRule } | undefined
  kubernetesServiceAccountAdmissionRules?: { [x: string]: AdmissionRule } | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type PkixPublicKey = {
  publicKeyPem?: string | undefined
  signatureAlgorithm?:
    | 'SIGNATURE_ALGORITHM_UNSPECIFIED'
    | 'RSA_PSS_2048_SHA256'
    | 'RSA_SIGN_PSS_2048_SHA256'
    | 'RSA_PSS_3072_SHA256'
    | 'RSA_SIGN_PSS_3072_SHA256'
    | 'RSA_PSS_4096_SHA256'
    | 'RSA_SIGN_PSS_4096_SHA256'
    | 'RSA_PSS_4096_SHA512'
    | 'RSA_SIGN_PSS_4096_SHA512'
    | 'RSA_SIGN_PKCS1_2048_SHA256'
    | 'RSA_SIGN_PKCS1_3072_SHA256'
    | 'RSA_SIGN_PKCS1_4096_SHA256'
    | 'RSA_SIGN_PKCS1_4096_SHA512'
    | 'ECDSA_P256_SHA256'
    | 'EC_SIGN_P256_SHA256'
    | 'ECDSA_P384_SHA384'
    | 'EC_SIGN_P384_SHA384'
    | 'ECDSA_P521_SHA512'
    | 'EC_SIGN_P521_SHA512'
    | undefined
}
type AttestorPublicKey = {
  asciiArmoredPgpPublicKey?: string | undefined
  comment?: string | undefined
  id?: string | undefined
  pkixPublicKey?: PkixPublicKey | undefined
}
type UserOwnedDrydockNote = {
  delegationServiceAccountEmail?: string | undefined
  noteReference?: string | undefined
  publicKeys?: AttestorPublicKey[] | undefined
}
type Attestor = {
  description?: string | undefined
  etag?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
  userOwnedDrydockNote?: UserOwnedDrydockNote | undefined
}
type ListAttestorsResponse = {
  attestors?: Attestor[] | undefined
  nextPageToken?: string | undefined
}
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type IamPolicy = {
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: IamPolicy | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:attestor:validateAttestationOccurrence': {
      $post: {
        input: { param: { attestor: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ValidateAttestationOccurrenceRequest }
        output: ValidateAttestationOccurrenceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Attestor }
        output: Attestor
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/attestors': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListAttestorsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            attestorId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Attestor }
        output: Attestor
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: IamPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetIamPolicyRequest }
        output: IamPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
