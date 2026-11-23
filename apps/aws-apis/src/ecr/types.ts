type BatchCheckLayerAvailabilityRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  layerDigests: {}
}
type BatchCheckLayerAvailabilityResponse = { layers?: {} | undefined; failures?: {} | undefined }
type BatchDeleteImageRequest = { registryId?: {} | undefined; repositoryName: {}; imageIds: {} }
type BatchDeleteImageResponse = { imageIds?: {} | undefined; failures?: {} | undefined }
type BatchGetImageRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  imageIds: {}
  acceptedMediaTypes?: {} | undefined
}
type BatchGetImageResponse = { images?: {} | undefined; failures?: {} | undefined }
type BatchGetRepositoryScanningConfigurationRequest = { repositoryNames: {} }
type BatchGetRepositoryScanningConfigurationResponse = {
  scanningConfigurations?: {} | undefined
  failures?: {} | undefined
}
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
type CreatePullThroughCacheRuleRequest = {
  ecrRepositoryPrefix: {}
  upstreamRegistryUrl: {}
  registryId?: {} | undefined
}
type CreatePullThroughCacheRuleResponse = {
  ecrRepositoryPrefix?: {} | undefined
  upstreamRegistryUrl?: {} | undefined
  createdAt?: {} | undefined
  registryId?: {} | undefined
}
type CreateRepositoryRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  tags?: {} | undefined
  imageTagMutability?: {} | undefined
  imageScanningConfiguration?: { scanOnPush?: {} | undefined } | undefined
  encryptionConfiguration?: { encryptionType: {}; kmsKey?: {} | undefined } | undefined
}
type ImageScanningConfiguration = { scanOnPush?: {} | undefined }
type CreateRepositoryResponse = {
  repository?:
    | {
        repositoryArn?: {} | undefined
        registryId?: {} | undefined
        repositoryName?: {} | undefined
        repositoryUri?: {} | undefined
        createdAt?: {} | undefined
        imageTagMutability?: {} | undefined
        imageScanningConfiguration?: ImageScanningConfiguration | undefined
        encryptionConfiguration?: { encryptionType: {}; kmsKey?: {} | undefined } | undefined
      }
    | undefined
}
type DeleteLifecyclePolicyRequest = { registryId?: {} | undefined; repositoryName: {} }
type DeleteLifecyclePolicyResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  lifecyclePolicyText?: {} | undefined
  lastEvaluatedAt?: {} | undefined
}
type DeletePullThroughCacheRuleRequest = { ecrRepositoryPrefix: {}; registryId?: {} | undefined }
type DeletePullThroughCacheRuleResponse = {
  ecrRepositoryPrefix?: {} | undefined
  upstreamRegistryUrl?: {} | undefined
  createdAt?: {} | undefined
  registryId?: {} | undefined
}
type DeleteRegistryPolicyRequest = { [x: string]: unknown }
type DeleteRegistryPolicyResponse = { registryId?: {} | undefined; policyText?: {} | undefined }
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
        imageTagMutability?: {} | undefined
        imageScanningConfiguration?: ImageScanningConfiguration | undefined
        encryptionConfiguration?: { encryptionType: {}; kmsKey?: {} | undefined } | undefined
      }
    | undefined
}
type DeleteRepositoryPolicyRequest = { registryId?: {} | undefined; repositoryName: {} }
type DeleteRepositoryPolicyResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  policyText?: {} | undefined
}
type ImageIdentifier = { imageDigest?: {} | undefined; imageTag?: {} | undefined }
type DescribeImageReplicationStatusRequest = {
  repositoryName: {}
  imageId: ImageIdentifier
  registryId?: {} | undefined
}
type DescribeImageReplicationStatusResponse = {
  repositoryName?: {} | undefined
  imageId?: ImageIdentifier | undefined
  replicationStatuses?: {} | undefined
}
type DescribeImageScanFindingsRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  imageId: ImageIdentifier
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeImageScanFindingsResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  imageId?: ImageIdentifier | undefined
  imageScanStatus?: { status?: {} | undefined; description?: {} | undefined } | undefined
  imageScanFindings?:
    | {
        imageScanCompletedAt?: {} | undefined
        vulnerabilitySourceUpdatedAt?: {} | undefined
        findingSeverityCounts?: {} | undefined
        findings?: {} | undefined
        enhancedFindings?: {} | undefined
      }
    | undefined
  nextToken?: {} | undefined
}
type DescribeImagesRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  imageIds?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  filter?: { tagStatus?: {} | undefined } | undefined
}
type DescribeImagesResponse = { imageDetails?: {} | undefined; nextToken?: {} | undefined }
type DescribePullThroughCacheRulesRequest = {
  registryId?: {} | undefined
  ecrRepositoryPrefixes?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribePullThroughCacheRulesResponse = {
  pullThroughCacheRules?: {} | undefined
  nextToken?: {} | undefined
}
type DescribeRegistryRequest = { [x: string]: unknown }
type DescribeRegistryResponse = {
  registryId?: {} | undefined
  replicationConfiguration?: { rules: {} } | undefined
}
type DescribeRepositoriesRequest = {
  registryId?: {} | undefined
  repositoryNames?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type DescribeRepositoriesResponse = { repositories?: {} | undefined; nextToken?: {} | undefined }
type GetAuthorizationTokenRequest = { registryIds?: {} | undefined }
type GetAuthorizationTokenResponse = { authorizationData?: {} | undefined }
type GetDownloadUrlForLayerRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  layerDigest: {}
}
type GetDownloadUrlForLayerResponse = { downloadUrl?: {} | undefined; layerDigest?: {} | undefined }
type GetLifecyclePolicyRequest = { registryId?: {} | undefined; repositoryName: {} }
type GetLifecyclePolicyResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  lifecyclePolicyText?: {} | undefined
  lastEvaluatedAt?: {} | undefined
}
type GetLifecyclePolicyPreviewRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  imageIds?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  filter?: { tagStatus?: {} | undefined } | undefined
}
type GetLifecyclePolicyPreviewResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  lifecyclePolicyText?: {} | undefined
  status?: {} | undefined
  nextToken?: {} | undefined
  previewResults?: {} | undefined
  summary?: { expiringImageTotalCount?: {} | undefined } | undefined
}
type GetRegistryPolicyRequest = { [x: string]: unknown }
type GetRegistryPolicyResponse = { registryId?: {} | undefined; policyText?: {} | undefined }
type GetRegistryScanningConfigurationRequest = { [x: string]: unknown }
type GetRegistryScanningConfigurationResponse = {
  registryId?: {} | undefined
  scanningConfiguration?: { scanType?: {} | undefined; rules?: {} | undefined } | undefined
}
type GetRepositoryPolicyRequest = { registryId?: {} | undefined; repositoryName: {} }
type GetRepositoryPolicyResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  policyText?: {} | undefined
}
type InitiateLayerUploadRequest = { registryId?: {} | undefined; repositoryName: {} }
type InitiateLayerUploadResponse = { uploadId?: {} | undefined; partSize?: {} | undefined }
type ListImagesRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  filter?: { tagStatus?: {} | undefined } | undefined
}
type ListImagesResponse = { imageIds?: {} | undefined; nextToken?: {} | undefined }
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
type PutImageScanningConfigurationRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  imageScanningConfiguration: { scanOnPush?: {} | undefined }
}
type PutImageScanningConfigurationResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  imageScanningConfiguration?: { scanOnPush?: {} | undefined } | undefined
}
type PutImageTagMutabilityRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  imageTagMutability: {}
}
type PutImageTagMutabilityResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  imageTagMutability?: {} | undefined
}
type PutLifecyclePolicyRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  lifecyclePolicyText: {}
}
type PutLifecyclePolicyResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  lifecyclePolicyText?: {} | undefined
}
type PutRegistryPolicyRequest = { policyText: {} }
type PutRegistryPolicyResponse = { registryId?: {} | undefined; policyText?: {} | undefined }
type PutRegistryScanningConfigurationRequest = { scanType?: {} | undefined; rules?: {} | undefined }
type PutRegistryScanningConfigurationResponse = {
  registryScanningConfiguration?: { scanType?: {} | undefined; rules?: {} | undefined } | undefined
}
type PutReplicationConfigurationRequest = { replicationConfiguration: { rules: {} } }
type PutReplicationConfigurationResponse = { replicationConfiguration?: { rules: {} } | undefined }
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
type StartImageScanRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  imageId: ImageIdentifier
}
type StartImageScanResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  imageId?: ImageIdentifier | undefined
  imageScanStatus?: { status?: {} | undefined; description?: {} | undefined } | undefined
}
type StartLifecyclePolicyPreviewRequest = {
  registryId?: {} | undefined
  repositoryName: {}
  lifecyclePolicyText?: {} | undefined
}
type StartLifecyclePolicyPreviewResponse = {
  registryId?: {} | undefined
  repositoryName?: {} | undefined
  lifecyclePolicyText?: {} | undefined
  status?: {} | undefined
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.BatchDeleteImage'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.BatchGetImage'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetImageRequest }
        output: BatchGetImageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.BatchGetRepositoryScanningConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchGetRepositoryScanningConfigurationRequest }
        output: BatchGetRepositoryScanningConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.CompleteLayerUpload'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.CreatePullThroughCacheRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreatePullThroughCacheRuleRequest }
        output: CreatePullThroughCacheRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.CreateRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.CreateRepository'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteLifecyclePolicyRequest }
        output: DeleteLifecyclePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DeletePullThroughCacheRule'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeletePullThroughCacheRuleRequest }
        output: DeletePullThroughCacheRuleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRegistryPolicyRequest }
        output: DeleteRegistryPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepository': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DeleteRepository'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DescribeImageReplicationStatus'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeImageReplicationStatusRequest }
        output: DescribeImageReplicationStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeImageScanFindingsRequest }
        output: DescribeImageScanFindingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeImages': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DescribeImages'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DescribePullThroughCacheRules'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribePullThroughCacheRulesRequest }
        output: DescribePullThroughCacheRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRegistry': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DescribeRegistry'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRegistryRequest }
        output: DescribeRegistryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.DescribeRepositories': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.DescribeRepositories'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetDownloadUrlForLayerRequest }
        output: GetDownloadUrlForLayerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLifecyclePolicyRequest }
        output: GetLifecyclePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetLifecyclePolicyPreviewRequest }
        output: GetLifecyclePolicyPreviewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRegistryPolicyRequest }
        output: GetRegistryPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.GetRegistryScanningConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRegistryScanningConfigurationRequest }
        output: GetRegistryScanningConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListImages': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.ListImages'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListImagesRequest }
        output: ListImagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.ListTagsForResource'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImage': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.PutImage'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.PutImageScanningConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutImageScanningConfigurationRequest }
        output: PutImageScanningConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutImageTagMutabilityRequest }
        output: PutImageTagMutabilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutLifecyclePolicyRequest }
        output: PutLifecyclePolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRegistryPolicyRequest }
        output: PutRegistryPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.PutRegistryScanningConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRegistryScanningConfigurationRequest }
        output: PutRegistryScanningConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutReplicationConfigurationRequest }
        output: PutReplicationConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartImageScan': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.StartImageScan'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartImageScanRequest }
        output: StartImageScanResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartLifecyclePolicyPreviewRequest }
        output: StartLifecyclePolicyPreviewResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.TagResource'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.UntagResource'
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
    '/#X-Amz-Target=AmazonEC2ContainerRegistry_V20150921.UploadLayerPart': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonEC2ContainerRegistry_V20150921.UploadLayerPart'
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
