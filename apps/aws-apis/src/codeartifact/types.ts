type AssociateExternalConnectionResult = {
  repository?:
    | {
        name?: {} | undefined
        administratorAccount?: {} | undefined
        domainName?: {} | undefined
        domainOwner?: {} | undefined
        arn?: {} | undefined
        description?: {} | undefined
        upstreams?: {} | undefined
        externalConnections?: {} | undefined
        createdTime?: {} | undefined
      }
    | undefined
}
type DisassociateExternalConnectionResult = {
  repository?:
    | {
        name?: {} | undefined
        administratorAccount?: {} | undefined
        domainName?: {} | undefined
        domainOwner?: {} | undefined
        arn?: {} | undefined
        description?: {} | undefined
        upstreams?: {} | undefined
        externalConnections?: {} | undefined
        createdTime?: {} | undefined
      }
    | undefined
}
type PackageVersion = string
type PackageVersionRevision = string
type CopyPackageVersionsResult = {
  successfulVersions?: {} | undefined
  failedVersions?: {} | undefined
}
type Tag = { key: {}; value: {} }
type CreateDomainResult = {
  domain?:
    | {
        name?: {} | undefined
        owner?: {} | undefined
        arn?: {} | undefined
        status?: {} | undefined
        createdTime?: {} | undefined
        encryptionKey?: {} | undefined
        repositoryCount?: {} | undefined
        assetSizeBytes?: {} | undefined
        s3BucketArn?: {} | undefined
      }
    | undefined
}
type DeleteDomainResult = {
  domain?:
    | {
        name?: {} | undefined
        owner?: {} | undefined
        arn?: {} | undefined
        status?: {} | undefined
        createdTime?: {} | undefined
        encryptionKey?: {} | undefined
        repositoryCount?: {} | undefined
        assetSizeBytes?: {} | undefined
        s3BucketArn?: {} | undefined
      }
    | undefined
}
type DomainDescription = {
  name?: {} | undefined
  owner?: {} | undefined
  arn?: {} | undefined
  status?: {} | undefined
  createdTime?: {} | undefined
  encryptionKey?: {} | undefined
  repositoryCount?: {} | undefined
  assetSizeBytes?: {} | undefined
  s3BucketArn?: {} | undefined
}
type DescribeDomainResult = { domain?: DomainDescription | undefined }
type UpstreamRepository = { repositoryName: {} }
type CreateRepositoryResult = {
  repository?:
    | {
        name?: {} | undefined
        administratorAccount?: {} | undefined
        domainName?: {} | undefined
        domainOwner?: {} | undefined
        arn?: {} | undefined
        description?: {} | undefined
        upstreams?: {} | undefined
        externalConnections?: {} | undefined
        createdTime?: {} | undefined
      }
    | undefined
}
type DeleteRepositoryResult = {
  repository?:
    | {
        name?: {} | undefined
        administratorAccount?: {} | undefined
        domainName?: {} | undefined
        domainOwner?: {} | undefined
        arn?: {} | undefined
        description?: {} | undefined
        upstreams?: {} | undefined
        externalConnections?: {} | undefined
        createdTime?: {} | undefined
      }
    | undefined
}
type DescribeRepositoryResult = {
  repository?:
    | {
        name?: {} | undefined
        administratorAccount?: {} | undefined
        domainName?: {} | undefined
        domainOwner?: {} | undefined
        arn?: {} | undefined
        description?: {} | undefined
        upstreams?: {} | undefined
        externalConnections?: {} | undefined
        createdTime?: {} | undefined
      }
    | undefined
}
type UpdateRepositoryResult = {
  repository?:
    | {
        name?: {} | undefined
        administratorAccount?: {} | undefined
        domainName?: {} | undefined
        domainOwner?: {} | undefined
        arn?: {} | undefined
        description?: {} | undefined
        upstreams?: {} | undefined
        externalConnections?: {} | undefined
        createdTime?: {} | undefined
      }
    | undefined
}
type DeleteDomainPermissionsPolicyResult = {
  policy?:
    | { resourceArn?: {} | undefined; revision?: {} | undefined; document?: {} | undefined }
    | undefined
}
type GetDomainPermissionsPolicyResult = {
  policy?:
    | { resourceArn?: {} | undefined; revision?: {} | undefined; document?: {} | undefined }
    | undefined
}
type PackageSummary = {
  format?: {} | undefined
  namespace?: {} | undefined
  package?: {} | undefined
  originConfiguration?: { restrictions?: { publish: {}; upstream: {} } | undefined } | undefined
}
type DeletePackageResult = { deletedPackage?: PackageSummary | undefined }
type DescribePackageResult = {
  package: {
    format?: {} | undefined
    namespace?: {} | undefined
    name?: {} | undefined
    originConfiguration?: { restrictions?: { publish: {}; upstream: {} } | undefined } | undefined
  }
}
type PutPackageOriginConfigurationResult = {
  originConfiguration?: { restrictions?: { publish: {}; upstream: {} } | undefined } | undefined
}
type DeletePackageVersionsResult = {
  successfulVersions?: {} | undefined
  failedVersions?: {} | undefined
}
type DeleteRepositoryPermissionsPolicyResult = {
  policy?:
    | { resourceArn?: {} | undefined; revision?: {} | undefined; document?: {} | undefined }
    | undefined
}
type DescribePackageVersionResult = {
  packageVersion: {
    format?: {} | undefined
    namespace?: {} | undefined
    packageName?: {} | undefined
    displayName?: {} | undefined
    version?: {} | undefined
    summary?: {} | undefined
    homePage?: {} | undefined
    sourceCodeRepository?: {} | undefined
    publishedTime?: {} | undefined
    licenses?: {} | undefined
    revision?: {} | undefined
    status?: {} | undefined
    origin?:
      | {
          domainEntryPoint?:
            | { repositoryName?: {} | undefined; externalConnectionName?: {} | undefined }
            | undefined
          originType?: {} | undefined
        }
      | undefined
  }
}
type DisposePackageVersionsResult = {
  successfulVersions?: {} | undefined
  failedVersions?: {} | undefined
}
type GetAuthorizationTokenResult = {
  authorizationToken?: {} | undefined
  expiration?: {} | undefined
}
type GetPackageVersionAssetResult = { asset?: {} | undefined }
type GetPackageVersionReadmeResult = {
  format?: {} | undefined
  namespace?: {} | undefined
  package?: {} | undefined
  version?: {} | undefined
  versionRevision?: {} | undefined
  readme?: {} | undefined
}
type GetRepositoryEndpointResult = { repositoryEndpoint?: {} | undefined }
type GetRepositoryPermissionsPolicyResult = {
  policy?:
    | { resourceArn?: {} | undefined; revision?: {} | undefined; document?: {} | undefined }
    | undefined
}
type PutRepositoryPermissionsPolicyResult = {
  policy?:
    | { resourceArn?: {} | undefined; revision?: {} | undefined; document?: {} | undefined }
    | undefined
}
type ListDomainsResult = { domains?: {} | undefined; nextToken?: {} | undefined }
type ListPackageVersionAssetsResult = {
  format?: {} | undefined
  namespace?: {} | undefined
  package?: {} | undefined
  version?: {} | undefined
  versionRevision?: {} | undefined
  nextToken?: {} | undefined
  assets?: {} | undefined
}
type ListPackageVersionDependenciesResult = {
  format?: {} | undefined
  namespace?: {} | undefined
  package?: {} | undefined
  version?: {} | undefined
  versionRevision?: {} | undefined
  nextToken?: {} | undefined
  dependencies?: {} | undefined
}
type ListPackageVersionsResult = {
  defaultDisplayVersion?: {} | undefined
  format?: {} | undefined
  namespace?: {} | undefined
  package?: {} | undefined
  versions?: {} | undefined
  nextToken?: {} | undefined
}
type ListPackagesResult = { packages?: {} | undefined; nextToken?: {} | undefined }
type ListRepositoriesResult = { repositories?: {} | undefined; nextToken?: {} | undefined }
type ListRepositoriesInDomainResult = { repositories?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceResult = { tags?: {} | undefined }
type PublishPackageVersionResult = {
  format?: {} | undefined
  namespace?: {} | undefined
  package?: {} | undefined
  version?: {} | undefined
  versionRevision?: {} | undefined
  status?: {} | undefined
  asset?: { name: {}; size?: {} | undefined; hashes?: {} | undefined } | undefined
}
type PutDomainPermissionsPolicyResult = {
  policy?:
    | { resourceArn?: {} | undefined; revision?: {} | undefined; document?: {} | undefined }
    | undefined
}
type TagResourceResult = { [x: string]: unknown }
type TagKey = string
type UntagResourceResult = { [x: string]: unknown }
type UpdatePackageVersionsStatusResult = {
  successfulVersions?: {} | undefined
  failedVersions?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/repository/external-connection#domain&repository&external-connection': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            'external-connection': string
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
        output: AssociateExternalConnectionResult
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            'external-connection': string
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
        output: DisassociateExternalConnectionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/versions/copy#domain&source-repository&destination-repository&format&package': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            'source-repository': string
            'destination-repository': string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
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
        } & {
          json: {
            versions?: PackageVersion[] | undefined
            versionRevisions?: { [x: string]: PackageVersionRevision } | undefined
            allowOverwrite?: boolean | undefined
            includeFromUpstream?: boolean | undefined
          }
        }
        output: CopyPackageVersionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/domain#domain': {
      $post: {
        input: { query: { domain: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { encryptionKey?: string | undefined; tags?: Tag[] | undefined } }
        output: CreateDomainResult
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { query: { domain: string; 'domain-owner'?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteDomainResult
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { domain: string; 'domain-owner'?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDomainResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/repository#domain&repository': {
      $post: {
        input: {
          query: { domain: string; 'domain-owner'?: string | undefined; repository: string }
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
        } & {
          json: {
            description?: string | undefined
            upstreams?: UpstreamRepository[] | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateRepositoryResult
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          query: { domain: string; 'domain-owner'?: string | undefined; repository: string }
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
        output: DeleteRepositoryResult
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: { domain: string; 'domain-owner'?: string | undefined; repository: string }
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
        output: DescribeRepositoryResult
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: { domain: string; 'domain-owner'?: string | undefined; repository: string }
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
        } & {
          json: { description?: string | undefined; upstreams?: UpstreamRepository[] | undefined }
        }
        output: UpdateRepositoryResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/domain/permissions/policy#domain': {
      $delete: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            'policy-revision'?: string | undefined
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
        output: DeleteDomainPermissionsPolicyResult
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { domain: string; 'domain-owner'?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDomainPermissionsPolicyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package#domain&repository&format&package': {
      $delete: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
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
        output: DeletePackageResult
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
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
        output: DescribePackageResult
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
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
        } & { json: { restrictions: { publish?: {} | undefined; upstream?: {} | undefined } } }
        output: PutPackageOriginConfigurationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/versions/delete#domain&repository&format&package': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
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
        } & {
          json: {
            versions: PackageVersion[]
            expectedStatus?:
              | 'Published'
              | 'Unfinished'
              | 'Unlisted'
              | 'Archived'
              | 'Disposed'
              | 'Deleted'
              | undefined
          }
        }
        output: DeletePackageVersionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/repository/permissions/policies#domain&repository': {
      $delete: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            'policy-revision'?: string | undefined
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
        output: DeleteRepositoryPermissionsPolicyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/version#domain&repository&format&package&version': {
      $get: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
            version: string
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
        output: DescribePackageVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/versions/dispose#domain&repository&format&package': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
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
        } & {
          json: {
            versions: PackageVersion[]
            versionRevisions?: { [x: string]: PackageVersionRevision } | undefined
            expectedStatus?:
              | 'Published'
              | 'Unfinished'
              | 'Unlisted'
              | 'Archived'
              | 'Disposed'
              | 'Deleted'
              | undefined
          }
        }
        output: DisposePackageVersionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/authorization-token#domain': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            duration?: number | undefined
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
        output: GetAuthorizationTokenResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/version/asset#domain&repository&format&package&version&asset': {
      $get: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
            version: string
            asset: string
            revision?: string | undefined
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
        output: GetPackageVersionAssetResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/version/readme#domain&repository&format&package&version': {
      $get: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
            version: string
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
        output: GetPackageVersionReadmeResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/repository/endpoint#domain&repository&format': {
      $get: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
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
        output: GetRepositoryEndpointResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/repository/permissions/policy#domain&repository': {
      $get: {
        input: {
          query: { domain: string; 'domain-owner'?: string | undefined; repository: string }
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
        output: GetRepositoryPermissionsPolicyResult
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          query: { domain: string; 'domain-owner'?: string | undefined; repository: string }
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
        } & { json: { policyRevision?: string | undefined; policyDocument: string } }
        output: PutRepositoryPermissionsPolicyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/domains': {
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
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListDomainsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/version/assets#domain&repository&format&package&version': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
            version: string
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            maxResults?: string | undefined
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
        output: ListPackageVersionAssetsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/version/dependencies#domain&repository&format&package&version': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
            version: string
            'next-token'?: string | undefined
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
        output: ListPackageVersionDependenciesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/versions#domain&repository&format&package': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
            status?:
              | 'Published'
              | 'Unfinished'
              | 'Unlisted'
              | 'Archived'
              | 'Disposed'
              | 'Deleted'
              | undefined
            sortBy?: 'PUBLISHED_TIME' | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            originType?: 'INTERNAL' | 'EXTERNAL' | 'UNKNOWN' | undefined
            maxResults?: string | undefined
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
        output: ListPackageVersionsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/packages#domain&repository': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format?: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic' | undefined
            namespace?: string | undefined
            'package-prefix'?: string | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            publish?: 'ALLOW' | 'BLOCK' | undefined
            upstream?: 'ALLOW' | 'BLOCK' | undefined
            maxResults?: string | undefined
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
        output: ListPackagesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/repositories': {
      $post: {
        input: {
          query: {
            'repository-prefix'?: string | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            maxResults?: string | undefined
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
        output: ListRepositoriesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/domain/repositories#domain': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            'administrator-account'?: string | undefined
            'repository-prefix'?: string | undefined
            'max-results'?: number | undefined
            'next-token'?: string | undefined
            maxResults?: string | undefined
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
        output: ListRepositoriesInDomainResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags#resourceArn': {
      $post: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/version/publish#domain&repository&format&package&version&asset&x-amz-content-sha256': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
            version: string
            asset: string
            unfinished?: boolean | undefined
          }
        } & {
          header: {
            'x-amz-content-sha256': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { assetContent: string } }
        output: PublishPackageVersionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/domain/permissions/policy': {
      $put: {
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
            domain: string
            domainOwner?: string | undefined
            policyRevision?: string | undefined
            policyDocument: string
          }
        }
        output: PutDomainPermissionsPolicyResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tag#resourceArn': {
      $post: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: Tag[] } }
        output: TagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/untag#resourceArn': {
      $post: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tagKeys: TagKey[] } }
        output: UntagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/package/versions/update_status#domain&repository&format&package': {
      $post: {
        input: {
          query: {
            domain: string
            'domain-owner'?: string | undefined
            repository: string
            format: 'npm' | 'pypi' | 'maven' | 'nuget' | 'generic'
            namespace?: string | undefined
            package: string
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
        } & {
          json: {
            versions: PackageVersion[]
            versionRevisions?: { [x: string]: PackageVersionRevision } | undefined
            expectedStatus?:
              | 'Published'
              | 'Unfinished'
              | 'Unlisted'
              | 'Archived'
              | 'Disposed'
              | 'Deleted'
              | undefined
            targetStatus:
              | 'Published'
              | 'Unfinished'
              | 'Unlisted'
              | 'Archived'
              | 'Disposed'
              | 'Deleted'
          }
        }
        output: UpdatePackageVersionsStatusResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
