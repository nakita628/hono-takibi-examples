type BatchCheckLayerAvailabilityRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  layerDigests: {}
}
type BatchCheckLayerAvailabilityResponse = { layers?: {} | undefined; failures?: {} | undefined }
type BatchDeleteImageRequest = { registryId?: {} | undefined; repositoryName: {}; imageIds: {} }
type BatchDeleteImageResponse = { imageIds?: {} | undefined; failures?: {} | undefined }
type CompleteLayerUploadRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  uploadId: {}
  layerDigests: {}
}
type CompleteLayerUploadResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  uploadId?: {} | undefined
  layerDigest?: {} | undefined
}
type CreateRepositoryRequest = {
  repositoryName: {}
  catalogData?:
    | {
        description?: {} | undefined
        architectures?: {} | undefined
        operatingSystems?: {} | undefined
        logoImageBlob?: {} | undefined
        aboutText?: {} | undefined
        usageText?: {} | undefined
      }
    | undefined
  tags?: {} | undefined
}
type RepositoryCatalogData = {
  description?: {} | undefined
  architectures?: {} | undefined
  operatingSystems?: {} | undefined
  logoUrl?: {} | undefined
  aboutText?: {} | undefined
  usageText?: {} | undefined
  marketplaceCertified?: {} | undefined
}
type CreateRepositoryResponse = {
  repository?:
    | {
        repositoryArn?: {} | undefined
        registryId?: {} | undefined
        repositoryName?: {} | undefined
        repositoryUri?: {} | undefined
        createdAt?: {} | undefined
      }
    | undefined
  catalogData?: RepositoryCatalogData | undefined
}
type DeleteRepositoryRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  force?: {} | undefined
}
type DeleteRepositoryResponse = {
  repository?:
    | {
        repositoryArn?: {} | undefined
        registryId?: {} | undefined
        repositoryName?: {} | undefined
        repositoryUri?: {} | undefined
        createdAt?: {} | undefined
      }
    | undefined
}
type DeleteRepositoryPolicyRequest = { registryId?: {} | undefined; repositoryName: {} }
type DeleteRepositoryPolicyResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  policyText?: {} | undefined
}
type DescribeImageTagsRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeImageTagsResponse = { imageTagDetails?: {} | undefined; nextToken?: {} | undefined }
type DescribeImagesRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  imageIds?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeImagesResponse = { imageDetails?: {} | undefined; nextToken?: {} | undefined }
type DescribeRegistriesRequest = { nextToken?: {} | undefined; maxResults?: {} | undefined }
type DescribeRegistriesResponse = { registries: {}; nextToken?: {} | undefined }
type DescribeRepositoriesRequest = {
  registryId?: {} | undefined
  repositoryNames?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeRepositoriesResponse = { repositories?: {} | undefined; nextToken?: {} | undefined }
type GetAuthorizationTokenRequest = { [x: string]: unknown }
type GetAuthorizationTokenResponse = {
  authorizationData?:
    | { authorizationToken?: {} | undefined; expiresAt?: {} | undefined }
    | undefined
}
type GetRegistryCatalogDataRequest = { [x: string]: unknown }
type GetRegistryCatalogDataResponse = { registryCatalogData: { displayName?: {} | undefined } }
type GetRepositoryCatalogDataRequest = { registryId?: {} | undefined; repositoryName: {} }
type GetRepositoryCatalogDataResponse = {
  catalogData?:
    | {
        description?: {} | undefined
        architectures?: {} | undefined
        operatingSystems?: {} | undefined
        logoUrl?: {} | undefined
        aboutText?: {} | undefined
        usageText?: {} | undefined
        marketplaceCertified?: {} | undefined
      }
    | undefined
}
type GetRepositoryPolicyRequest = { registryId?: {} | undefined; repositoryName: {} }
type GetRepositoryPolicyResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  policyText?: {} | undefined
}
type InitiateLayerUploadRequest = { registryId?: {} | undefined; repositoryName: {} }
type InitiateLayerUploadResponse = { uploadId?: {} | undefined; partSize?: {} | undefined }
type ListTagsForResourceRequest = { resourceArn: {} }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type PutImageRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  imageManifest: {}
  imageManifestMediaType?: {} | undefined
  imageTag?: {} | undefined
  imageDigest?: {} | undefined
}
type PutImageResponse = {
  image?:
    | {
        registryId?: {} | undefined
        repositoryName?: {} | undefined
        imageId?: { imageDigest?: {} | undefined; imageTag?: {} | undefined } | undefined
        imageManifest?: {} | undefined
        imageManifestMediaType?: {} | undefined
      }
    | undefined
}
type PutRegistryCatalogDataRequest = { displayName?: {} | undefined }
type PutRegistryCatalogDataResponse = { registryCatalogData: { displayName?: {} | undefined } }
type PutRepositoryCatalogDataRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  catalogData: {
    description?: {} | undefined
    architectures?: {} | undefined
    operatingSystems?: {} | undefined
    logoImageBlob?: {} | undefined
    aboutText?: {} | undefined
    usageText?: {} | undefined
  }
}
type PutRepositoryCatalogDataResponse = {
  catalogData?:
    | {
        description?: {} | undefined
        architectures?: {} | undefined
        operatingSystems?: {} | undefined
        logoUrl?: {} | undefined
        aboutText?: {} | undefined
        usageText?: {} | undefined
        marketplaceCertified?: {} | undefined
      }
    | undefined
}
type SetRepositoryPolicyRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  policyText: {}
  force?: {} | undefined
}
type SetRepositoryPolicyResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  policyText?: {} | undefined
}
type TagResourceRequest = { resourceArn: {}; tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { resourceArn: {}; tagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UploadLayerPartRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  uploadId: {}
  partFirstByte: {}
  partLastByte: {}
  layerPartBlob: {}
}
type UploadLayerPartResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  uploadId?: {} | undefined
  lastByteReceived?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=SpencerFrontendService.BatchCheckLayerAvailability': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.BatchCheckLayerAvailability'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchCheckLayerAvailabilityRequest }
        output: BatchCheckLayerAvailabilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.BatchDeleteImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.BatchDeleteImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchDeleteImageRequest }
        output: BatchDeleteImageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.CompleteLayerUpload': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.CompleteLayerUpload'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CompleteLayerUploadRequest }
        output: CompleteLayerUploadResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.CreateRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.CreateRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRepositoryRequest }
        output: CreateRepositoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.DeleteRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.DeleteRepository'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRepositoryRequest }
        output: DeleteRepositoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.DeleteRepositoryPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.DeleteRepositoryPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRepositoryPolicyRequest }
        output: DeleteRepositoryPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.DescribeImageTags': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.DescribeImageTags'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeImageTagsRequest }
        output: DescribeImageTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.DescribeImages': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.DescribeImages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeImagesRequest }
        output: DescribeImagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.DescribeRegistries': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.DescribeRegistries'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRegistriesRequest }
        output: DescribeRegistriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.DescribeRepositories': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.DescribeRepositories'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRepositoriesRequest }
        output: DescribeRepositoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.GetAuthorizationToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.GetAuthorizationToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetAuthorizationTokenRequest }
        output: GetAuthorizationTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.GetRegistryCatalogData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.GetRegistryCatalogData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRegistryCatalogDataRequest }
        output: GetRegistryCatalogDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.GetRepositoryCatalogData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.GetRepositoryCatalogData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRepositoryCatalogDataRequest }
        output: GetRepositoryCatalogDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.GetRepositoryPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.GetRepositoryPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRepositoryPolicyRequest }
        output: GetRepositoryPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.InitiateLayerUpload': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.InitiateLayerUpload'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: InitiateLayerUploadRequest }
        output: InitiateLayerUploadResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.ListTagsForResource'
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
    '/#X-Amz-Target=SpencerFrontendService.PutImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.PutImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutImageRequest }
        output: PutImageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.PutRegistryCatalogData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.PutRegistryCatalogData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRegistryCatalogDataRequest }
        output: PutRegistryCatalogDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.PutRepositoryCatalogData': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.PutRepositoryCatalogData'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRepositoryCatalogDataRequest }
        output: PutRepositoryCatalogDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.SetRepositoryPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.SetRepositoryPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SetRepositoryPolicyRequest }
        output: SetRepositoryPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=SpencerFrontendService.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.TagResource'
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
    '/#X-Amz-Target=SpencerFrontendService.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.UntagResource'
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
    '/#X-Amz-Target=SpencerFrontendService.UploadLayerPart': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'SpencerFrontendService.UploadLayerPart'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UploadLayerPartRequest }
        output: UploadLayerPartResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
