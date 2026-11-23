type AddTagsToCertificateRequest = { CertificateArn: {}; Tags: {} }
type DeleteCertificateRequest = { CertificateArn: {} }
type DescribeCertificateRequest = { CertificateArn: {} }
type DescribeCertificateResponse = {
  Certificate?:
    | {
        CertificateArn?: {} | undefined
        DomainName?: {} | undefined
        SubjectAlternativeNames?: {} | undefined
        DomainValidationOptions?: {} | undefined
        Serial?: {} | undefined
        Subject?: {} | undefined
        Issuer?: {} | undefined
        CreatedAt?: {} | undefined
        IssuedAt?: {} | undefined
        ImportedAt?: {} | undefined
        Status?: {} | undefined
        RevokedAt?: {} | undefined
        RevocationReason?: {} | undefined
        NotBefore?: {} | undefined
        NotAfter?: {} | undefined
        KeyAlgorithm?: {} | undefined
        SignatureAlgorithm?: {} | undefined
        InUseBy?: {} | undefined
        FailureReason?: {} | undefined
        Type?: {} | undefined
        RenewalSummary?:
          | {
              RenewalStatus: {}
              DomainValidationOptions: {}
              RenewalStatusReason?: {} | undefined
              UpdatedAt: {}
            }
          | undefined
        KeyUsages?: {} | undefined
        ExtendedKeyUsages?: {} | undefined
        CertificateAuthorityArn?: {} | undefined
        RenewalEligibility?: {} | undefined
        Options?: { CertificateTransparencyLoggingPreference?: {} | undefined } | undefined
      }
    | undefined
}
type ExportCertificateRequest = { CertificateArn: {}; Passphrase: {} }
type ExportCertificateResponse = {
  Certificate?: {} | undefined
  CertificateChain?: {} | undefined
  PrivateKey?: {} | undefined
}
type GetAccountConfigurationResponse = {
  ExpiryEvents?: { DaysBeforeExpiry?: {} | undefined } | undefined
}
type GetCertificateRequest = { CertificateArn: {} }
type GetCertificateResponse = { Certificate?: {} | undefined; CertificateChain?: {} | undefined }
type ImportCertificateRequest = {
  CertificateArn?: {} | undefined
  Certificate: {}
  PrivateKey: {}
  CertificateChain?: {} | undefined
  Tags?: {} | undefined
}
type ImportCertificateResponse = { CertificateArn?: {} | undefined }
type ListCertificatesRequest = {
  CertificateStatuses?: {} | undefined
  Includes?:
    | { extendedKeyUsage?: {} | undefined; keyUsage?: {} | undefined; keyTypes?: {} | undefined }
    | undefined
  NextToken?: {} | undefined
  MaxItems?: {} | undefined
  SortBy?: {} | undefined
  SortOrder?: {} | undefined
}
type ListCertificatesResponse = {
  NextToken?: {} | undefined
  CertificateSummaryList?: {} | undefined
}
type ListTagsForCertificateRequest = { CertificateArn: {} }
type ListTagsForCertificateResponse = { Tags?: {} | undefined }
type PutAccountConfigurationRequest = {
  ExpiryEvents?: { DaysBeforeExpiry?: {} | undefined } | undefined
  IdempotencyToken: {}
}
type RemoveTagsFromCertificateRequest = { CertificateArn: {}; Tags: {} }
type RenewCertificateRequest = { CertificateArn: {} }
type RequestCertificateRequest = {
  DomainName: {}
  ValidationMethod?: {} | undefined
  SubjectAlternativeNames?: {} | undefined
  IdempotencyToken?: {} | undefined
  DomainValidationOptions?: {} | undefined
  Options?: { CertificateTransparencyLoggingPreference?: {} | undefined } | undefined
  CertificateAuthorityArn?: {} | undefined
  Tags?: {} | undefined
  KeyAlgorithm?: {} | undefined
}
type RequestCertificateResponse = { CertificateArn?: {} | undefined }
type ResendValidationEmailRequest = { CertificateArn: {}; Domain: {}; ValidationDomain: {} }
type UpdateCertificateOptionsRequest = {
  CertificateArn: {}
  Options: { CertificateTransparencyLoggingPreference?: {} | undefined }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=CertificateManager.AddTagsToCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.AddTagsToCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddTagsToCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.DeleteCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.DeleteCertificate'
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
    '/#X-Amz-Target=CertificateManager.DescribeCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.DescribeCertificate'
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
    '/#X-Amz-Target=CertificateManager.ExportCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.ExportCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExportCertificateRequest }
        output: ExportCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.GetAccountConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.GetAccountConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetAccountConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.GetCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.GetCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetCertificateRequest }
        output: GetCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.ImportCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.ImportCertificate'
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
    '/#X-Amz-Target=CertificateManager.ListCertificates': {
      $post: {
        input: { query: { MaxItems?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'CertificateManager.ListCertificates'
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
    '/#X-Amz-Target=CertificateManager.ListTagsForCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.ListTagsForCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForCertificateRequest }
        output: ListTagsForCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.PutAccountConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.PutAccountConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutAccountConfigurationRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.RemoveTagsFromCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.RemoveTagsFromCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveTagsFromCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.RenewCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.RenewCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RenewCertificateRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.RequestCertificate': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.RequestCertificate'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RequestCertificateRequest }
        output: RequestCertificateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.ResendValidationEmail': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.ResendValidationEmail'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ResendValidationEmailRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=CertificateManager.UpdateCertificateOptions': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'CertificateManager.UpdateCertificateOptions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCertificateOptionsRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
