type TagValue = string
type CreateAccessorOutput = { AccessorId?: {} | undefined; BillingToken?: {} | undefined }
type InvalidRequestException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ResourceAlreadyExistsException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type ResourceLimitExceededException = { [x: string]: unknown }
type InternalServiceErrorException = { [x: string]: unknown }
type TooManyTagsException = { [x: string]: unknown }
type ListAccessorsOutput = { Accessors?: {} | undefined; NextToken?: {} | undefined }
type CreateMemberOutput = { MemberId?: {} | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type ResourceNotReadyException = { [x: string]: unknown }
type ListMembersOutput = { Members?: {} | undefined; NextToken?: {} | undefined }
type CreateNetworkOutput = { NetworkId?: {} | undefined; MemberId?: {} | undefined }
type ListNetworksOutput = { Networks?: {} | undefined; NextToken?: {} | undefined }
type CreateNodeOutput = { NodeId?: {} | undefined }
type ListNodesOutput = { Nodes?: {} | undefined; NextToken?: {} | undefined }
type CreateProposalOutput = { ProposalId?: {} | undefined }
type ListProposalsOutput = { Proposals?: {} | undefined; NextToken?: {} | undefined }
type DeleteAccessorOutput = { [x: string]: unknown }
type GetAccessorOutput = {
  Accessor?:
    | {
        Id?: {} | undefined
        Type?: {} | undefined
        BillingToken?: {} | undefined
        Status?: {} | undefined
        CreationDate?: {} | undefined
        Arn?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeleteMemberOutput = { [x: string]: unknown }
type GetMemberOutput = {
  Member?:
    | {
        NetworkId?: {} | undefined
        Id?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        FrameworkAttributes?:
          | { Fabric?: { AdminUsername?: {} | undefined; CaEndpoint?: {} | undefined } | undefined }
          | undefined
        LogPublishingConfiguration?:
          | {
              Fabric?:
                | { CaLogs?: { Cloudwatch?: { Enabled?: {} | undefined } | undefined } | undefined }
                | undefined
            }
          | undefined
        Status?: {} | undefined
        CreationDate?: {} | undefined
        Tags?: {} | undefined
        Arn?: {} | undefined
        KmsKeyArn?: {} | undefined
      }
    | undefined
}
type UpdateMemberOutput = { [x: string]: unknown }
type DeleteNodeOutput = { [x: string]: unknown }
type GetNodeOutput = {
  Node?:
    | {
        NetworkId?: {} | undefined
        MemberId?: {} | undefined
        Id?: {} | undefined
        InstanceType?: {} | undefined
        AvailabilityZone?: {} | undefined
        FrameworkAttributes?:
          | {
              Fabric?:
                | { PeerEndpoint?: {} | undefined; PeerEventEndpoint?: {} | undefined }
                | undefined
              Ethereum?:
                | { HttpEndpoint?: {} | undefined; WebSocketEndpoint?: {} | undefined }
                | undefined
            }
          | undefined
        LogPublishingConfiguration?:
          | {
              Fabric?:
                | {
                    ChaincodeLogs?:
                      | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                      | undefined
                    PeerLogs?: { Cloudwatch?: { Enabled?: {} | undefined } | undefined } | undefined
                  }
                | undefined
            }
          | undefined
        StateDB?: {} | undefined
        Status?: {} | undefined
        CreationDate?: {} | undefined
        Tags?: {} | undefined
        Arn?: {} | undefined
        KmsKeyArn?: {} | undefined
      }
    | undefined
}
type UpdateNodeOutput = { [x: string]: unknown }
type GetNetworkOutput = {
  Network?:
    | {
        Id?: {} | undefined
        Name?: {} | undefined
        Description?: {} | undefined
        Framework?: {} | undefined
        FrameworkVersion?: {} | undefined
        FrameworkAttributes?:
          | {
              Fabric?:
                | { OrderingServiceEndpoint?: {} | undefined; Edition?: {} | undefined }
                | undefined
              Ethereum?: { ChainId?: {} | undefined } | undefined
            }
          | undefined
        VpcEndpointServiceName?: {} | undefined
        VotingPolicy?:
          | {
              ApprovalThresholdPolicy?:
                | {
                    ThresholdPercentage?: {} | undefined
                    ProposalDurationInHours?: {} | undefined
                    ThresholdComparator?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Status?: {} | undefined
        CreationDate?: {} | undefined
        Tags?: {} | undefined
        Arn?: {} | undefined
      }
    | undefined
}
type GetProposalOutput = {
  Proposal?:
    | {
        ProposalId?: {} | undefined
        NetworkId?: {} | undefined
        Description?: {} | undefined
        Actions?: { Invitations?: {} | undefined; Removals?: {} | undefined } | undefined
        ProposedByMemberId?: {} | undefined
        ProposedByMemberName?: {} | undefined
        Status?: {} | undefined
        CreationDate?: {} | undefined
        ExpirationDate?: {} | undefined
        YesVoteCount?: {} | undefined
        NoVoteCount?: {} | undefined
        OutstandingVoteCount?: {} | undefined
        Tags?: {} | undefined
        Arn?: {} | undefined
      }
    | undefined
}
type ListInvitationsOutput = { Invitations?: {} | undefined; NextToken?: {} | undefined }
type ListProposalVotesOutput = { ProposalVotes?: {} | undefined; NextToken?: {} | undefined }
type VoteOnProposalOutput = { [x: string]: unknown }
type IllegalActionException = { [x: string]: unknown }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type RejectInvitationOutput = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accessors': {
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
                ClientRequestToken: string
                AccessorType: 'BILLING_TOKEN'
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateAccessorOutput
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
                ClientRequestToken: string
                AccessorType: 'BILLING_TOKEN'
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidRequestException
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
                ClientRequestToken: string
                AccessorType: 'BILLING_TOKEN'
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
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
                ClientRequestToken: string
                AccessorType: 'BILLING_TOKEN'
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceAlreadyExistsException
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
                ClientRequestToken: string
                AccessorType: 'BILLING_TOKEN'
                Tags?: { [x: string]: TagValue } | undefined
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
                ClientRequestToken: string
                AccessorType: 'BILLING_TOKEN'
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceLimitExceededException
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
                ClientRequestToken: string
                AccessorType: 'BILLING_TOKEN'
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServiceErrorException
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
                ClientRequestToken: string
                AccessorType: 'BILLING_TOKEN'
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: TooManyTagsException
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
            output: ListAccessorsOutput
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
            output: InvalidRequestException
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
            output: AccessDeniedException
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
            output: ThrottlingException
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/networks/:networkId/members': {
      $post:
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: CreateMemberOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                InvitationId: string
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
              }
            }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 488
          }
      $get:
        | {
            input: { param: { networkId: string } } & {
              query: {
                name?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
                isOwned?: boolean | undefined
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
            output: ListMembersOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string } } & {
              query: {
                name?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
                isOwned?: boolean | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string } } & {
              query: {
                name?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
                isOwned?: boolean | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string } } & {
              query: {
                name?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
                isOwned?: boolean | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string } } & {
              query: {
                name?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
                isOwned?: boolean | undefined
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/networks': {
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
                ClientRequestToken: string
                Name: string
                Description?: string | undefined
                Framework: 'HYPERLEDGER_FABRIC' | 'ETHEREUM'
                FrameworkVersion: string
                FrameworkConfiguration?: { Fabric?: { Edition: {} } | undefined } | undefined
                VotingPolicy: {
                  ApprovalThresholdPolicy?:
                    | {
                        ThresholdPercentage?: {} | undefined
                        ProposalDurationInHours?: {} | undefined
                        ThresholdComparator?: {} | undefined
                      }
                    | undefined
                }
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateNetworkOutput
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
                ClientRequestToken: string
                Name: string
                Description?: string | undefined
                Framework: 'HYPERLEDGER_FABRIC' | 'ETHEREUM'
                FrameworkVersion: string
                FrameworkConfiguration?: { Fabric?: { Edition: {} } | undefined } | undefined
                VotingPolicy: {
                  ApprovalThresholdPolicy?:
                    | {
                        ThresholdPercentage?: {} | undefined
                        ProposalDurationInHours?: {} | undefined
                        ThresholdComparator?: {} | undefined
                      }
                    | undefined
                }
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidRequestException
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
                ClientRequestToken: string
                Name: string
                Description?: string | undefined
                Framework: 'HYPERLEDGER_FABRIC' | 'ETHEREUM'
                FrameworkVersion: string
                FrameworkConfiguration?: { Fabric?: { Edition: {} } | undefined } | undefined
                VotingPolicy: {
                  ApprovalThresholdPolicy?:
                    | {
                        ThresholdPercentage?: {} | undefined
                        ProposalDurationInHours?: {} | undefined
                        ThresholdComparator?: {} | undefined
                      }
                    | undefined
                }
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
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
                ClientRequestToken: string
                Name: string
                Description?: string | undefined
                Framework: 'HYPERLEDGER_FABRIC' | 'ETHEREUM'
                FrameworkVersion: string
                FrameworkConfiguration?: { Fabric?: { Edition: {} } | undefined } | undefined
                VotingPolicy: {
                  ApprovalThresholdPolicy?:
                    | {
                        ThresholdPercentage?: {} | undefined
                        ProposalDurationInHours?: {} | undefined
                        ThresholdComparator?: {} | undefined
                      }
                    | undefined
                }
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceAlreadyExistsException
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
                ClientRequestToken: string
                Name: string
                Description?: string | undefined
                Framework: 'HYPERLEDGER_FABRIC' | 'ETHEREUM'
                FrameworkVersion: string
                FrameworkConfiguration?: { Fabric?: { Edition: {} } | undefined } | undefined
                VotingPolicy: {
                  ApprovalThresholdPolicy?:
                    | {
                        ThresholdPercentage?: {} | undefined
                        ProposalDurationInHours?: {} | undefined
                        ThresholdComparator?: {} | undefined
                      }
                    | undefined
                }
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
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
                ClientRequestToken: string
                Name: string
                Description?: string | undefined
                Framework: 'HYPERLEDGER_FABRIC' | 'ETHEREUM'
                FrameworkVersion: string
                FrameworkConfiguration?: { Fabric?: { Edition: {} } | undefined } | undefined
                VotingPolicy: {
                  ApprovalThresholdPolicy?:
                    | {
                        ThresholdPercentage?: {} | undefined
                        ProposalDurationInHours?: {} | undefined
                        ThresholdComparator?: {} | undefined
                      }
                    | undefined
                }
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceLimitExceededException
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
                ClientRequestToken: string
                Name: string
                Description?: string | undefined
                Framework: 'HYPERLEDGER_FABRIC' | 'ETHEREUM'
                FrameworkVersion: string
                FrameworkConfiguration?: { Fabric?: { Edition: {} } | undefined } | undefined
                VotingPolicy: {
                  ApprovalThresholdPolicy?:
                    | {
                        ThresholdPercentage?: {} | undefined
                        ProposalDurationInHours?: {} | undefined
                        ThresholdComparator?: {} | undefined
                      }
                    | undefined
                }
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServiceErrorException
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
                ClientRequestToken: string
                Name: string
                Description?: string | undefined
                Framework: 'HYPERLEDGER_FABRIC' | 'ETHEREUM'
                FrameworkVersion: string
                FrameworkConfiguration?: { Fabric?: { Edition: {} } | undefined } | undefined
                VotingPolicy: {
                  ApprovalThresholdPolicy?:
                    | {
                        ThresholdPercentage?: {} | undefined
                        ProposalDurationInHours?: {} | undefined
                        ThresholdComparator?: {} | undefined
                      }
                    | undefined
                }
                MemberConfiguration: {
                  Name?: {} | undefined
                  Description?: {} | undefined
                  FrameworkConfiguration?:
                    | { Fabric?: { AdminUsername: {}; AdminPassword: {} } | undefined }
                    | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              CaLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  Tags?: {} | undefined
                  KmsKeyArn?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                framework?: 'HYPERLEDGER_FABRIC' | 'ETHEREUM' | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'DELETING'
                  | 'DELETED'
                  | undefined
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
            output: ListNetworksOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                framework?: 'HYPERLEDGER_FABRIC' | 'ETHEREUM' | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'DELETING'
                  | 'DELETED'
                  | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                name?: string | undefined
                framework?: 'HYPERLEDGER_FABRIC' | 'ETHEREUM' | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'DELETING'
                  | 'DELETED'
                  | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                name?: string | undefined
                framework?: 'HYPERLEDGER_FABRIC' | 'ETHEREUM' | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'DELETING'
                  | 'DELETED'
                  | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                name?: string | undefined
                framework?: 'HYPERLEDGER_FABRIC' | 'ETHEREUM' | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'CREATE_FAILED'
                  | 'DELETING'
                  | 'DELETED'
                  | undefined
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/networks/:networkId/nodes': {
      $post:
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateNodeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceAlreadyExistsException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId?: string | undefined
                NodeConfiguration: {
                  InstanceType?: {} | undefined
                  AvailabilityZone?: {} | undefined
                  LogPublishingConfiguration?:
                    | {
                        Fabric?:
                          | {
                              ChaincodeLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                              PeerLogs?:
                                | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  StateDB?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 488
          }
      $get:
        | {
            input: { param: { networkId: string } } & {
              query: {
                memberId?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'UNHEALTHY'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'FAILED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
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
            output: ListNodesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string } } & {
              query: {
                memberId?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'UNHEALTHY'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'FAILED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string } } & {
              query: {
                memberId?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'UNHEALTHY'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'FAILED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string } } & {
              query: {
                memberId?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'UNHEALTHY'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'FAILED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string } } & {
              query: {
                memberId?: string | undefined
                status?:
                  | 'CREATING'
                  | 'AVAILABLE'
                  | 'UNHEALTHY'
                  | 'CREATE_FAILED'
                  | 'UPDATING'
                  | 'DELETING'
                  | 'DELETED'
                  | 'FAILED'
                  | 'INACCESSIBLE_ENCRYPTION_KEY'
                  | undefined
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/networks/:networkId/proposals': {
      $post:
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId: string
                Actions: { Invitations?: {} | undefined; Removals?: {} | undefined }
                Description?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateProposalOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId: string
                Actions: { Invitations?: {} | undefined; Removals?: {} | undefined }
                Description?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId: string
                Actions: { Invitations?: {} | undefined; Removals?: {} | undefined }
                Description?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId: string
                Actions: { Invitations?: {} | undefined; Removals?: {} | undefined }
                Description?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId: string
                Actions: { Invitations?: {} | undefined; Removals?: {} | undefined }
                Description?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId: string
                Actions: { Invitations?: {} | undefined; Removals?: {} | undefined }
                Description?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId: string
                Actions: { Invitations?: {} | undefined; Removals?: {} | undefined }
                Description?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { networkId: string } } & {
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
                ClientRequestToken: string
                MemberId: string
                Actions: { Invitations?: {} | undefined; Removals?: {} | undefined }
                Description?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: TooManyTagsException
            outputFormat: 'json'
            status: 486
          }
      $get:
        | {
            input: { param: { networkId: string } } & {
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
            output: ListProposalsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { networkId: string } } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/accessors/:AccessorId': {
      $delete:
        | {
            input: { param: { AccessorId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteAccessorOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccessorId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { AccessorId: string } } & {
              header: {
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
            input: { param: { AccessorId: string } } & {
              header: {
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
        | {
            input: { param: { AccessorId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { AccessorId: string } } & {
              header: {
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
      $get:
        | {
            input: { param: { AccessorId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetAccessorOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { AccessorId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { AccessorId: string } } & {
              header: {
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
            input: { param: { AccessorId: string } } & {
              header: {
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
        | {
            input: { param: { AccessorId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { AccessorId: string } } & {
              header: {
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
    '/networks/:networkId/members/:memberId': {
      $delete:
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteMemberOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
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
            input: { param: { networkId: string; memberId: string } } & {
              header: {
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
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
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
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
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
      $get:
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetMemberOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
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
            input: { param: { networkId: string; memberId: string } } & {
              header: {
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
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
              header: {
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
      $patch:
        | {
            input: { param: { networkId: string; memberId: string } } & {
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
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            CaLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: UpdateMemberOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
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
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            CaLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
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
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            CaLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
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
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            CaLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
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
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            CaLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { networkId: string; memberId: string } } & {
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
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            CaLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/networks/:networkId/nodes/:nodeId': {
      $delete:
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            output: DeleteNodeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            status: 482
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
      $get:
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            output: GetNodeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            status: 482
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
            status: 483
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
              query: { memberId?: string | undefined }
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
      $patch:
        | {
            input: { param: { networkId: string; nodeId: string } } & {
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
                MemberId?: string | undefined
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            ChaincodeLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                            PeerLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: UpdateNodeOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
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
                MemberId?: string | undefined
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            ChaincodeLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                            PeerLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
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
                MemberId?: string | undefined
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            ChaincodeLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                            PeerLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
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
                MemberId?: string | undefined
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            ChaincodeLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                            PeerLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
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
                MemberId?: string | undefined
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            ChaincodeLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                            PeerLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { networkId: string; nodeId: string } } & {
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
                MemberId?: string | undefined
                LogPublishingConfiguration?:
                  | {
                      Fabric?:
                        | {
                            ChaincodeLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                            PeerLogs?:
                              | { Cloudwatch?: { Enabled?: {} | undefined } | undefined }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/networks/:networkId': {
      $get:
        | {
            input: { param: { networkId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetNetworkOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string } } & {
              header: {
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
            input: { param: { networkId: string } } & {
              header: {
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
        | {
            input: { param: { networkId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { networkId: string } } & {
              header: {
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
    '/networks/:networkId/proposals/:proposalId': {
      $get:
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetProposalOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
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
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
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
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
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
    '/invitations': {
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
            output: ListInvitationsOutput
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
            output: InvalidRequestException
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
            output: AccessDeniedException
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
            output: ResourceNotFoundException
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
            output: ThrottlingException
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
            output: ResourceLimitExceededException
            outputFormat: 'json'
            status: 484
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/networks/:networkId/proposals/:proposalId/votes': {
      $get:
        | {
            input: { param: { networkId: string; proposalId: string } } & {
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
            output: ListProposalVotesOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
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
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
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
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 483
          }
      $post:
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VoterMemberId: string; Vote: 'YES' | 'NO' } }
            output: VoteOnProposalOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VoterMemberId: string; Vote: 'YES' | 'NO' } }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VoterMemberId: string; Vote: 'YES' | 'NO' } }
            output: IllegalActionException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VoterMemberId: string; Vote: 'YES' | 'NO' } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VoterMemberId: string; Vote: 'YES' | 'NO' } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VoterMemberId: string; Vote: 'YES' | 'NO' } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { networkId: string; proposalId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { VoterMemberId: string; Vote: 'YES' | 'NO' } }
            output: InternalServiceErrorException
            outputFormat: 'json'
            status: 485
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
            output: InvalidRequestException
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
            output: ResourceNotReadyException
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
            } & { json: { Tags: { [x: string]: TagValue } } }
            output: InvalidRequestException
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
            output: TooManyTagsException
            outputFormat: 'json'
            status: 483
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
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/invitations/:invitationId': {
      $delete:
        | {
            input: { param: { invitationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RejectInvitationOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invitationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { invitationId: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: IllegalActionException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { invitationId: string } } & {
              header: {
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
            input: { param: { invitationId: string } } & {
              header: {
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
            status: 483
          }
        | {
            input: { param: { invitationId: string } } & {
              header: {
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
        | {
            input: { param: { invitationId: string } } & {
              header: {
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
            output: InvalidRequestException
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
            output: ResourceNotReadyException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
