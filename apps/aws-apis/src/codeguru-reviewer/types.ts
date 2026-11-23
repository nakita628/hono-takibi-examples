type S3Repository = { Name: {}; BucketName: {} }
type TagValue = string
type S3RepositoryDetails = {
  BucketName?: {} | undefined
  CodeArtifacts?:
    | { SourceCodeArtifactsObjectKey: {}; BuildArtifactsObjectKey?: {} | undefined }
    | undefined
}
type AssociateRepositoryResponse = {
  RepositoryAssociation?:
    | {
        AssociationId?: {} | undefined
        AssociationArn?: {} | undefined
        ConnectionArn?: {} | undefined
        Name?: {} | undefined
        Owner?: {} | undefined
        ProviderType?: {} | undefined
        State?: {} | undefined
        StateReason?: {} | undefined
        LastUpdatedTimeStamp?: {} | undefined
        CreatedTimeStamp?: {} | undefined
        KMSKeyDetails?: { KMSKeyId?: {} | undefined; EncryptionOption?: {} | undefined } | undefined
        S3RepositoryDetails?: S3RepositoryDetails | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type InternalServerException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type ProviderType = 'CodeCommit' | 'GitHub' | 'Bitbucket' | 'GitHubEnterpriseServer' | 'S3Bucket'
type RepositoryAssociationState =
  | 'Associated'
  | 'Associating'
  | 'Failed'
  | 'Disassociating'
  | 'Disassociated'
type Name = string
type Owner = string
type ListRepositoryAssociationsResponse = {
  RepositoryAssociationSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type RepositoryHeadSourceCodeType = { BranchName: {} }
type SourceCodeType = {
  CommitDiff?:
    | {
        SourceCommit?: {} | undefined
        DestinationCommit?: {} | undefined
        MergeBaseCommit?: {} | undefined
      }
    | undefined
  RepositoryHead?: RepositoryHeadSourceCodeType | undefined
  BranchDiff?: { SourceBranchName: {}; DestinationBranchName: {} } | undefined
  S3BucketRepository?:
    | {
        Name: {}
        Details?:
          | {
              BucketName?: {} | undefined
              CodeArtifacts?:
                | { SourceCodeArtifactsObjectKey: {}; BuildArtifactsObjectKey?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
  RequestMetadata?:
    | {
        RequestId?: {} | undefined
        Requester?: {} | undefined
        EventInfo?: { Name?: {} | undefined; State?: {} | undefined } | undefined
        VendorName?: {} | undefined
      }
    | undefined
}
type CodeReview = {
  Name?: {} | undefined
  CodeReviewArn?: {} | undefined
  RepositoryName?: {} | undefined
  Owner?: {} | undefined
  ProviderType?: {} | undefined
  State?: {} | undefined
  StateReason?: {} | undefined
  CreatedTimeStamp?: {} | undefined
  LastUpdatedTimeStamp?: {} | undefined
  Type?: {} | undefined
  PullRequestId?: {} | undefined
  SourceCodeType?:
    | {
        CommitDiff?:
          | {
              SourceCommit?: {} | undefined
              DestinationCommit?: {} | undefined
              MergeBaseCommit?: {} | undefined
            }
          | undefined
        RepositoryHead?: RepositoryHeadSourceCodeType | undefined
        BranchDiff?: { SourceBranchName: {}; DestinationBranchName: {} } | undefined
        S3BucketRepository?:
          | {
              Name: {}
              Details?:
                | {
                    BucketName?: {} | undefined
                    CodeArtifacts?:
                      | {
                          SourceCodeArtifactsObjectKey: {}
                          BuildArtifactsObjectKey?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        RequestMetadata?:
          | {
              RequestId?: {} | undefined
              Requester?: {} | undefined
              EventInfo?: { Name?: {} | undefined; State?: {} | undefined } | undefined
              VendorName?: {} | undefined
            }
          | undefined
      }
    | undefined
  AssociationArn?: {} | undefined
  Metrics?:
    | {
        MeteredLinesOfCodeCount?: {} | undefined
        SuppressedLinesOfCodeCount?: {} | undefined
        FindingsCount?: {} | undefined
      }
    | undefined
  AnalysisTypes?: {} | undefined
  ConfigFileState?: {} | undefined
}
type CreateCodeReviewResponse = { CodeReview?: CodeReview | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type DescribeCodeReviewResponse = {
  CodeReview?:
    | {
        Name?: {} | undefined
        CodeReviewArn?: {} | undefined
        RepositoryName?: {} | undefined
        Owner?: {} | undefined
        ProviderType?: {} | undefined
        State?: {} | undefined
        StateReason?: {} | undefined
        CreatedTimeStamp?: {} | undefined
        LastUpdatedTimeStamp?: {} | undefined
        Type?: {} | undefined
        PullRequestId?: {} | undefined
        SourceCodeType?:
          | {
              CommitDiff?:
                | {
                    SourceCommit?: {} | undefined
                    DestinationCommit?: {} | undefined
                    MergeBaseCommit?: {} | undefined
                  }
                | undefined
              RepositoryHead?: RepositoryHeadSourceCodeType | undefined
              BranchDiff?: { SourceBranchName: {}; DestinationBranchName: {} } | undefined
              S3BucketRepository?:
                | {
                    Name: {}
                    Details?:
                      | {
                          BucketName?: {} | undefined
                          CodeArtifacts?:
                            | {
                                SourceCodeArtifactsObjectKey: {}
                                BuildArtifactsObjectKey?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              RequestMetadata?:
                | {
                    RequestId?: {} | undefined
                    Requester?: {} | undefined
                    EventInfo?: { Name?: {} | undefined; State?: {} | undefined } | undefined
                    VendorName?: {} | undefined
                  }
                | undefined
            }
          | undefined
        AssociationArn?: {} | undefined
        Metrics?:
          | {
              MeteredLinesOfCodeCount?: {} | undefined
              SuppressedLinesOfCodeCount?: {} | undefined
              FindingsCount?: {} | undefined
            }
          | undefined
        AnalysisTypes?: {} | undefined
        ConfigFileState?: {} | undefined
      }
    | undefined
}
type DescribeRecommendationFeedbackResponse = {
  RecommendationFeedback?:
    | {
        CodeReviewArn?: {} | undefined
        RecommendationId?: {} | undefined
        Reactions?: {} | undefined
        UserId?: {} | undefined
        CreatedTimeStamp?: {} | undefined
        LastUpdatedTimeStamp?: {} | undefined
      }
    | undefined
}
type DescribeRepositoryAssociationResponse = {
  RepositoryAssociation?:
    | {
        AssociationId?: {} | undefined
        AssociationArn?: {} | undefined
        ConnectionArn?: {} | undefined
        Name?: {} | undefined
        Owner?: {} | undefined
        ProviderType?: {} | undefined
        State?: {} | undefined
        StateReason?: {} | undefined
        LastUpdatedTimeStamp?: {} | undefined
        CreatedTimeStamp?: {} | undefined
        KMSKeyDetails?: { KMSKeyId?: {} | undefined; EncryptionOption?: {} | undefined } | undefined
        S3RepositoryDetails?: S3RepositoryDetails | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type NotFoundException = { [x: string]: unknown }
type DisassociateRepositoryResponse = {
  RepositoryAssociation?:
    | {
        AssociationId?: {} | undefined
        AssociationArn?: {} | undefined
        ConnectionArn?: {} | undefined
        Name?: {} | undefined
        Owner?: {} | undefined
        ProviderType?: {} | undefined
        State?: {} | undefined
        StateReason?: {} | undefined
        LastUpdatedTimeStamp?: {} | undefined
        CreatedTimeStamp?: {} | undefined
        KMSKeyDetails?: { KMSKeyId?: {} | undefined; EncryptionOption?: {} | undefined } | undefined
        S3RepositoryDetails?: S3RepositoryDetails | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type JobState = 'Completed' | 'Pending' | 'Failed' | 'Deleting'
type ListCodeReviewsResponse = { CodeReviewSummaries?: {} | undefined; NextToken?: {} | undefined }
type UserId = string
type RecommendationId = string
type ListRecommendationFeedbackResponse = {
  RecommendationFeedbackSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListRecommendationsResponse = {
  RecommendationSummaries?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type Reaction = 'ThumbsUp' | 'ThumbsDown'
type PutRecommendationFeedbackResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/associations': {
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
                Repository: {
                  CodeCommit?: { Name: {} } | undefined
                  Bitbucket?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  GitHubEnterpriseServer?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  S3Bucket?: S3Repository | undefined
                }
                ClientRequestToken?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                KMSKeyDetails?:
                  | { KMSKeyId?: {} | undefined; EncryptionOption?: {} | undefined }
                  | undefined
              }
            }
            output: AssociateRepositoryResponse
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
                Repository: {
                  CodeCommit?: { Name: {} } | undefined
                  Bitbucket?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  GitHubEnterpriseServer?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  S3Bucket?: S3Repository | undefined
                }
                ClientRequestToken?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                KMSKeyDetails?:
                  | { KMSKeyId?: {} | undefined; EncryptionOption?: {} | undefined }
                  | undefined
              }
            }
            output: InternalServerException
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
                Repository: {
                  CodeCommit?: { Name: {} } | undefined
                  Bitbucket?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  GitHubEnterpriseServer?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  S3Bucket?: S3Repository | undefined
                }
                ClientRequestToken?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                KMSKeyDetails?:
                  | { KMSKeyId?: {} | undefined; EncryptionOption?: {} | undefined }
                  | undefined
              }
            }
            output: ValidationException
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
                Repository: {
                  CodeCommit?: { Name: {} } | undefined
                  Bitbucket?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  GitHubEnterpriseServer?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  S3Bucket?: S3Repository | undefined
                }
                ClientRequestToken?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                KMSKeyDetails?:
                  | { KMSKeyId?: {} | undefined; EncryptionOption?: {} | undefined }
                  | undefined
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
                Repository: {
                  CodeCommit?: { Name: {} } | undefined
                  Bitbucket?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  GitHubEnterpriseServer?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  S3Bucket?: S3Repository | undefined
                }
                ClientRequestToken?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                KMSKeyDetails?:
                  | { KMSKeyId?: {} | undefined; EncryptionOption?: {} | undefined }
                  | undefined
              }
            }
            output: ConflictException
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
                Repository: {
                  CodeCommit?: { Name: {} } | undefined
                  Bitbucket?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  GitHubEnterpriseServer?: { Name: {}; ConnectionArn: {}; Owner: {} } | undefined
                  S3Bucket?: S3Repository | undefined
                }
                ClientRequestToken?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                KMSKeyDetails?:
                  | { KMSKeyId?: {} | undefined; EncryptionOption?: {} | undefined }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: {
              query: {
                ProviderType?: ProviderType[] | undefined
                State?: RepositoryAssociationState[] | undefined
                Name?: Name[] | undefined
                Owner?: Owner[] | undefined
                MaxResults?: number | undefined
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
            output: ListRepositoryAssociationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ProviderType?: ProviderType[] | undefined
                State?: RepositoryAssociationState[] | undefined
                Name?: Name[] | undefined
                Owner?: Owner[] | undefined
                MaxResults?: number | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                ProviderType?: ProviderType[] | undefined
                State?: RepositoryAssociationState[] | undefined
                Name?: Name[] | undefined
                Owner?: Owner[] | undefined
                MaxResults?: number | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                ProviderType?: ProviderType[] | undefined
                State?: RepositoryAssociationState[] | undefined
                Name?: Name[] | undefined
                Owner?: Owner[] | undefined
                MaxResults?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/codereviews': {
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
                Name: string
                RepositoryAssociationArn: string
                Type: {
                  RepositoryAnalysis?:
                    | {
                        RepositoryHead?: { BranchName: {} } | undefined
                        SourceCodeType?: SourceCodeType | undefined
                      }
                    | undefined
                  AnalysisTypes?: {} | undefined
                }
                ClientRequestToken?: string | undefined
              }
            }
            output: CreateCodeReviewResponse
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
                Name: string
                RepositoryAssociationArn: string
                Type: {
                  RepositoryAnalysis?:
                    | {
                        RepositoryHead?: { BranchName: {} } | undefined
                        SourceCodeType?: SourceCodeType | undefined
                      }
                    | undefined
                  AnalysisTypes?: {} | undefined
                }
                ClientRequestToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
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
                Name: string
                RepositoryAssociationArn: string
                Type: {
                  RepositoryAnalysis?:
                    | {
                        RepositoryHead?: { BranchName: {} } | undefined
                        SourceCodeType?: SourceCodeType | undefined
                      }
                    | undefined
                  AnalysisTypes?: {} | undefined
                }
                ClientRequestToken?: string | undefined
              }
            }
            output: InternalServerException
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
                Name: string
                RepositoryAssociationArn: string
                Type: {
                  RepositoryAnalysis?:
                    | {
                        RepositoryHead?: { BranchName: {} } | undefined
                        SourceCodeType?: SourceCodeType | undefined
                      }
                    | undefined
                  AnalysisTypes?: {} | undefined
                }
                ClientRequestToken?: string | undefined
              }
            }
            output: ValidationException
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
                Name: string
                RepositoryAssociationArn: string
                Type: {
                  RepositoryAnalysis?:
                    | {
                        RepositoryHead?: { BranchName: {} } | undefined
                        SourceCodeType?: SourceCodeType | undefined
                      }
                    | undefined
                  AnalysisTypes?: {} | undefined
                }
                ClientRequestToken?: string | undefined
              }
            }
            output: ConflictException
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
                Name: string
                RepositoryAssociationArn: string
                Type: {
                  RepositoryAnalysis?:
                    | {
                        RepositoryHead?: { BranchName: {} } | undefined
                        SourceCodeType?: SourceCodeType | undefined
                      }
                    | undefined
                  AnalysisTypes?: {} | undefined
                }
                ClientRequestToken?: string | undefined
              }
            }
            output: AccessDeniedException
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
                Name: string
                RepositoryAssociationArn: string
                Type: {
                  RepositoryAnalysis?:
                    | {
                        RepositoryHead?: { BranchName: {} } | undefined
                        SourceCodeType?: SourceCodeType | undefined
                      }
                    | undefined
                  AnalysisTypes?: {} | undefined
                }
                ClientRequestToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/codereviews/:CodeReviewArn': {
      $get:
        | {
            input: { param: { CodeReviewArn: string } } & {
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
            output: DescribeCodeReviewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
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
            input: { param: { CodeReviewArn: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
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
            status: 482
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
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
            status: 483
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/feedback/:CodeReviewArn#RecommendationId': {
      $get:
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { RecommendationId: string; UserId?: string | undefined }
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
            output: DescribeRecommendationFeedbackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { RecommendationId: string; UserId?: string | undefined }
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
            input: { param: { CodeReviewArn: string } } & {
              query: { RecommendationId: string; UserId?: string | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { RecommendationId: string; UserId?: string | undefined }
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
            status: 482
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { RecommendationId: string; UserId?: string | undefined }
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
            status: 483
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { RecommendationId: string; UserId?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/associations/:AssociationArn': {
      $get:
        | {
            input: { param: { AssociationArn: string } } & {
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
            output: DescribeRepositoryAssociationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AssociationArn: string } } & {
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
            input: { param: { AssociationArn: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { AssociationArn: string } } & {
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
            status: 482
          }
        | {
            input: { param: { AssociationArn: string } } & {
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
            status: 483
          }
        | {
            input: { param: { AssociationArn: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $delete:
        | {
            input: { param: { AssociationArn: string } } & {
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
            output: DisassociateRepositoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AssociationArn: string } } & {
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
            input: { param: { AssociationArn: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { AssociationArn: string } } & {
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
            status: 482
          }
        | {
            input: { param: { AssociationArn: string } } & {
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
            status: 483
          }
        | {
            input: { param: { AssociationArn: string } } & {
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
            status: 484
          }
        | {
            input: { param: { AssociationArn: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/codereviews#Type': {
      $get:
        | {
            input: {
              query: {
                ProviderTypes?: ProviderType[] | undefined
                States?: JobState[] | undefined
                RepositoryNames?: Name[] | undefined
                Type: 'PullRequest' | 'RepositoryAnalysis'
                MaxResults?: number | undefined
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
            output: ListCodeReviewsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ProviderTypes?: ProviderType[] | undefined
                States?: JobState[] | undefined
                RepositoryNames?: Name[] | undefined
                Type: 'PullRequest' | 'RepositoryAnalysis'
                MaxResults?: number | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                ProviderTypes?: ProviderType[] | undefined
                States?: JobState[] | undefined
                RepositoryNames?: Name[] | undefined
                Type: 'PullRequest' | 'RepositoryAnalysis'
                MaxResults?: number | undefined
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
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                ProviderTypes?: ProviderType[] | undefined
                States?: JobState[] | undefined
                RepositoryNames?: Name[] | undefined
                Type: 'PullRequest' | 'RepositoryAnalysis'
                MaxResults?: number | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                ProviderTypes?: ProviderType[] | undefined
                States?: JobState[] | undefined
                RepositoryNames?: Name[] | undefined
                Type: 'PullRequest' | 'RepositoryAnalysis'
                MaxResults?: number | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/feedback/:CodeReviewArn/RecommendationFeedback': {
      $get:
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                UserIds?: UserId[] | undefined
                RecommendationIds?: RecommendationId[] | undefined
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
            output: ListRecommendationFeedbackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                UserIds?: UserId[] | undefined
                RecommendationIds?: RecommendationId[] | undefined
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                UserIds?: UserId[] | undefined
                RecommendationIds?: RecommendationId[] | undefined
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                UserIds?: UserId[] | undefined
                RecommendationIds?: RecommendationId[] | undefined
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
            status: 482
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                UserIds?: UserId[] | undefined
                RecommendationIds?: RecommendationId[] | undefined
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
            status: 483
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: {
                NextToken?: string | undefined
                MaxResults?: number | undefined
                UserIds?: UserId[] | undefined
                RecommendationIds?: RecommendationId[] | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/codereviews/:CodeReviewArn/Recommendations': {
      $get:
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { NextToken?: string | undefined; MaxResults?: number | undefined }
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
            output: ListRecommendationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { NextToken?: string | undefined; MaxResults?: number | undefined }
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
            input: { param: { CodeReviewArn: string } } & {
              query: { NextToken?: string | undefined; MaxResults?: number | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { NextToken?: string | undefined; MaxResults?: number | undefined }
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
            status: 482
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { NextToken?: string | undefined; MaxResults?: number | undefined }
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
            status: 483
          }
        | {
            input: { param: { CodeReviewArn: string } } & {
              query: { NextToken?: string | undefined; MaxResults?: number | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
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
            output: InternalServerException
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
            output: ValidationException
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
            output: ResourceNotFoundException
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
            } & { json: { Tags: { [x: string]: TagValue } } }
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
            } & { json: { Tags: { [x: string]: TagValue } } }
            output: InternalServerException
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
            } & { json: { Tags: { [x: string]: TagValue } } }
            output: ValidationException
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
            } & { json: { Tags: { [x: string]: TagValue } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/feedback': {
      $put:
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
            } & { json: { CodeReviewArn: string; RecommendationId: string; Reactions: Reaction[] } }
            output: PutRecommendationFeedbackResponse
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
            } & { json: { CodeReviewArn: string; RecommendationId: string; Reactions: Reaction[] } }
            output: ResourceNotFoundException
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
            } & { json: { CodeReviewArn: string; RecommendationId: string; Reactions: Reaction[] } }
            output: InternalServerException
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
            } & { json: { CodeReviewArn: string; RecommendationId: string; Reactions: Reaction[] } }
            output: ValidationException
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
            } & { json: { CodeReviewArn: string; RecommendationId: string; Reactions: Reaction[] } }
            output: AccessDeniedException
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
            } & { json: { CodeReviewArn: string; RecommendationId: string; Reactions: Reaction[] } }
            output: ThrottlingException
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
            output: InternalServerException
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
            output: ValidationException
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
