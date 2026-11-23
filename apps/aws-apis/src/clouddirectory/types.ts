type AttributeKeyAndValue = {
  Key: { SchemaArn: {}; FacetName: {}; Name: {} }
  Value: {
    StringValue?: {} | undefined
    BinaryValue?: {} | undefined
    BooleanValue?: {} | undefined
    NumberValue?: {} | undefined
    DatetimeValue?: {} | undefined
  }
}
type AddFacetToObjectResponse = { [x: string]: unknown }
type InternalServiceException = { [x: string]: unknown }
type InvalidArnException = { [x: string]: unknown }
type RetryableConflictException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type DirectoryNotEnabledException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type FacetValidationException = { [x: string]: unknown }
type ApplySchemaResponse = { AppliedSchemaArn?: {} | undefined; DirectoryArn?: {} | undefined }
type SchemaAlreadyExistsException = { [x: string]: unknown }
type InvalidAttachmentException = { [x: string]: unknown }
type AttachObjectResponse = { AttachedObjectIdentifier?: {} | undefined }
type LinkNameAlreadyInUseException = { [x: string]: unknown }
type AttachPolicyResponse = { [x: string]: unknown }
type NotPolicyException = { [x: string]: unknown }
type AttachToIndexResponse = { AttachedObjectIdentifier?: {} | undefined }
type IndexedAttributeMissingException = { [x: string]: unknown }
type NotIndexException = { [x: string]: unknown }
type AttributeNameAndValue = {
  AttributeName: {}
  Value: {
    StringValue?: {} | undefined
    BinaryValue?: {} | undefined
    BooleanValue?: {} | undefined
    NumberValue?: {} | undefined
    DatetimeValue?: {} | undefined
  }
}
type AttachTypedLinkResponse = {
  TypedLinkSpecifier?:
    | {
        TypedLinkFacet: { SchemaArn: {}; TypedLinkName: {} }
        SourceObjectReference: { Selector?: {} | undefined }
        TargetObjectReference: { Selector?: {} | undefined }
        IdentityAttributeValues: {}
      }
    | undefined
}
type ObjectReference = { Selector?: {} | undefined }
type BatchReadOperation = {
  ListObjectAttributes?:
    | {
        ObjectReference: { Selector?: {} | undefined }
        NextToken?: {} | undefined
        MaxResults?: {} | undefined
        FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
      }
    | undefined
  ListObjectChildren?:
    | {
        ObjectReference: { Selector?: {} | undefined }
        NextToken?: {} | undefined
        MaxResults?: {} | undefined
      }
    | undefined
  ListAttachedIndices?:
    | {
        TargetReference: { Selector?: {} | undefined }
        NextToken?: {} | undefined
        MaxResults?: {} | undefined
      }
    | undefined
  ListObjectParentPaths?:
    | {
        ObjectReference: { Selector?: {} | undefined }
        NextToken?: {} | undefined
        MaxResults?: {} | undefined
      }
    | undefined
  GetObjectInformation?: { ObjectReference: { Selector?: {} | undefined } } | undefined
  GetObjectAttributes?:
    | {
        ObjectReference: { Selector?: {} | undefined }
        SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
        AttributeNames: {}
      }
    | undefined
  ListObjectParents?:
    | { ObjectReference: ObjectReference; NextToken?: {} | undefined; MaxResults?: {} | undefined }
    | undefined
  ListObjectPolicies?:
    | {
        ObjectReference: { Selector?: {} | undefined }
        NextToken?: {} | undefined
        MaxResults?: {} | undefined
      }
    | undefined
  ListPolicyAttachments?:
    | {
        PolicyReference: { Selector?: {} | undefined }
        NextToken?: {} | undefined
        MaxResults?: {} | undefined
      }
    | undefined
  LookupPolicy?:
    | {
        ObjectReference: { Selector?: {} | undefined }
        NextToken?: {} | undefined
        MaxResults?: {} | undefined
      }
    | undefined
  ListIndex?:
    | {
        RangesOnIndexedValues?: {} | undefined
        IndexReference: { Selector?: {} | undefined }
        MaxResults?: {} | undefined
        NextToken?: {} | undefined
      }
    | undefined
  ListOutgoingTypedLinks?:
    | {
        ObjectReference: { Selector?: {} | undefined }
        FilterAttributeRanges?: {} | undefined
        FilterTypedLink?: { SchemaArn: {}; TypedLinkName: {} } | undefined
        NextToken?: {} | undefined
        MaxResults?: {} | undefined
      }
    | undefined
  ListIncomingTypedLinks?:
    | {
        ObjectReference: { Selector?: {} | undefined }
        FilterAttributeRanges?: {} | undefined
        FilterTypedLink?: { SchemaArn: {}; TypedLinkName: {} } | undefined
        NextToken?: {} | undefined
        MaxResults?: {} | undefined
      }
    | undefined
  GetLinkAttributes?:
    | {
        TypedLinkSpecifier: {
          TypedLinkFacet: { SchemaArn: {}; TypedLinkName: {} }
          SourceObjectReference: { Selector?: {} | undefined }
          TargetObjectReference: { Selector?: {} | undefined }
          IdentityAttributeValues: {}
        }
        AttributeNames: {}
      }
    | undefined
}
type BatchReadResponse = { Responses?: {} | undefined }
type BatchWriteOperation = {
  CreateObject?:
    | {
        SchemaFacet: {}
        ObjectAttributeList: {}
        ParentReference?: { Selector?: {} | undefined } | undefined
        LinkName?: {} | undefined
        BatchReferenceName?: {} | undefined
      }
    | undefined
  AttachObject?:
    | {
        ParentReference: { Selector?: {} | undefined }
        ChildReference: { Selector?: {} | undefined }
        LinkName: {}
      }
    | undefined
  DetachObject?:
    | {
        ParentReference: { Selector?: {} | undefined }
        LinkName: {}
        BatchReferenceName?: {} | undefined
      }
    | undefined
  UpdateObjectAttributes?:
    | { ObjectReference: { Selector?: {} | undefined }; AttributeUpdates: {} }
    | undefined
  DeleteObject?: { ObjectReference: { Selector?: {} | undefined } } | undefined
  AddFacetToObject?:
    | {
        SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
        ObjectAttributeList: {}
        ObjectReference: { Selector?: {} | undefined }
      }
    | undefined
  RemoveFacetFromObject?:
    | {
        SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
        ObjectReference: { Selector?: {} | undefined }
      }
    | undefined
  AttachPolicy?:
    | {
        PolicyReference: { Selector?: {} | undefined }
        ObjectReference: { Selector?: {} | undefined }
      }
    | undefined
  DetachPolicy?:
    | {
        PolicyReference: { Selector?: {} | undefined }
        ObjectReference: { Selector?: {} | undefined }
      }
    | undefined
  CreateIndex?:
    | {
        OrderedIndexedAttributeList: {}
        IsUnique: {}
        ParentReference?: { Selector?: {} | undefined } | undefined
        LinkName?: {} | undefined
        BatchReferenceName?: {} | undefined
      }
    | undefined
  AttachToIndex?:
    | {
        IndexReference: { Selector?: {} | undefined }
        TargetReference: { Selector?: {} | undefined }
      }
    | undefined
  DetachFromIndex?:
    | {
        IndexReference: { Selector?: {} | undefined }
        TargetReference: { Selector?: {} | undefined }
      }
    | undefined
  AttachTypedLink?:
    | {
        SourceObjectReference: { Selector?: {} | undefined }
        TargetObjectReference: { Selector?: {} | undefined }
        TypedLinkFacet: { SchemaArn: {}; TypedLinkName: {} }
        Attributes: {}
      }
    | undefined
  DetachTypedLink?:
    | {
        TypedLinkSpecifier: {
          TypedLinkFacet: { SchemaArn: {}; TypedLinkName: {} }
          SourceObjectReference: { Selector?: {} | undefined }
          TargetObjectReference: { Selector?: {} | undefined }
          IdentityAttributeValues: {}
        }
      }
    | undefined
  UpdateLinkAttributes?:
    | {
        TypedLinkSpecifier: {
          TypedLinkFacet: { SchemaArn: {}; TypedLinkName: {} }
          SourceObjectReference: { Selector?: {} | undefined }
          TargetObjectReference: { Selector?: {} | undefined }
          IdentityAttributeValues: {}
        }
        AttributeUpdates: {}
      }
    | undefined
}
type BatchWriteResponse = { Responses?: {} | undefined }
type BatchWriteException = { [x: string]: unknown }
type CreateDirectoryResponse = {
  DirectoryArn: {}
  Name: {}
  ObjectIdentifier: {}
  AppliedSchemaArn: {}
}
type DirectoryAlreadyExistsException = { [x: string]: unknown }
type FacetAttribute = {
  Name: {}
  AttributeDefinition?:
    | {
        Type: {}
        DefaultValue?:
          | {
              StringValue?: {} | undefined
              BinaryValue?: {} | undefined
              BooleanValue?: {} | undefined
              NumberValue?: {} | undefined
              DatetimeValue?: {} | undefined
            }
          | undefined
        IsImmutable?: {} | undefined
        Rules?: {} | undefined
      }
    | undefined
  AttributeReference?: { TargetFacetName: {}; TargetAttributeName: {} } | undefined
  RequiredBehavior?: {} | undefined
}
type CreateFacetResponse = { [x: string]: unknown }
type FacetAlreadyExistsException = { [x: string]: unknown }
type InvalidRuleException = { [x: string]: unknown }
type AttributeKey = { SchemaArn: {}; FacetName: {}; Name: {} }
type CreateIndexResponse = { ObjectIdentifier?: {} | undefined }
type UnsupportedIndexTypeException = { [x: string]: unknown }
type SchemaFacet = { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
type CreateObjectResponse = { ObjectIdentifier?: {} | undefined }
type CreateSchemaResponse = { SchemaArn?: {} | undefined }
type CreateTypedLinkFacetResponse = { [x: string]: unknown }
type DeleteDirectoryResponse = { DirectoryArn: {} }
type DirectoryNotDisabledException = { [x: string]: unknown }
type DirectoryDeletedException = { [x: string]: unknown }
type DeleteFacetResponse = { [x: string]: unknown }
type FacetNotFoundException = { [x: string]: unknown }
type FacetInUseException = { [x: string]: unknown }
type DeleteObjectResponse = { [x: string]: unknown }
type ObjectNotDetachedException = { [x: string]: unknown }
type DeleteSchemaResponse = { SchemaArn?: {} | undefined }
type StillContainsLinksException = { [x: string]: unknown }
type DeleteTypedLinkFacetResponse = { [x: string]: unknown }
type DetachFromIndexResponse = { DetachedObjectIdentifier?: {} | undefined }
type ObjectAlreadyDetachedException = { [x: string]: unknown }
type DetachObjectResponse = { DetachedObjectIdentifier?: {} | undefined }
type NotNodeException = { [x: string]: unknown }
type DetachPolicyResponse = { [x: string]: unknown }
type DisableDirectoryResponse = { DirectoryArn: {} }
type EnableDirectoryResponse = { DirectoryArn: {} }
type GetAppliedSchemaVersionResponse = { AppliedSchemaArn?: {} | undefined }
type GetDirectoryResponse = {
  Directory: {
    Name?: {} | undefined
    DirectoryArn?: {} | undefined
    State?: {} | undefined
    CreationDateTime?: {} | undefined
  }
}
type GetFacetResponse = {
  Facet?:
    | { Name?: {} | undefined; ObjectType?: {} | undefined; FacetStyle?: {} | undefined }
    | undefined
}
type FacetAttributeUpdate = {
  Attribute?:
    | {
        Name: {}
        AttributeDefinition?:
          | {
              Type: {}
              DefaultValue?:
                | {
                    StringValue?: {} | undefined
                    BinaryValue?: {} | undefined
                    BooleanValue?: {} | undefined
                    NumberValue?: {} | undefined
                    DatetimeValue?: {} | undefined
                  }
                | undefined
              IsImmutable?: {} | undefined
              Rules?: {} | undefined
            }
          | undefined
        AttributeReference?: { TargetFacetName: {}; TargetAttributeName: {} } | undefined
        RequiredBehavior?: {} | undefined
      }
    | undefined
  Action?: {} | undefined
}
type UpdateFacetResponse = { [x: string]: unknown }
type InvalidFacetUpdateException = { [x: string]: unknown }
type AttributeName = string
type GetLinkAttributesResponse = { Attributes?: {} | undefined }
type GetObjectAttributesResponse = { Attributes?: {} | undefined }
type GetObjectInformationResponse = {
  SchemaFacets?: {} | undefined
  ObjectIdentifier?: {} | undefined
}
type GetSchemaAsJsonResponse = { Name?: {} | undefined; Document?: {} | undefined }
type PutSchemaFromJsonResponse = { Arn?: {} | undefined }
type InvalidSchemaDocException = { [x: string]: unknown }
type GetTypedLinkFacetInformationResponse = { IdentityAttributeOrder?: {} | undefined }
type InvalidNextTokenException = { [x: string]: unknown }
type ListAppliedSchemaArnsResponse = { SchemaArns?: {} | undefined; NextToken?: {} | undefined }
type ListAttachedIndicesResponse = { IndexAttachments?: {} | undefined; NextToken?: {} | undefined }
type ListDevelopmentSchemaArnsResponse = { SchemaArns?: {} | undefined; NextToken?: {} | undefined }
type ListDirectoriesResponse = { Directories: {}; NextToken?: {} | undefined }
type ListFacetAttributesResponse = { Attributes?: {} | undefined; NextToken?: {} | undefined }
type ListFacetNamesResponse = { FacetNames?: {} | undefined; NextToken?: {} | undefined }
type TypedLinkAttributeRange = {
  AttributeName?: {} | undefined
  Range: {
    StartMode: {}
    StartValue?:
      | {
          StringValue?: {} | undefined
          BinaryValue?: {} | undefined
          BooleanValue?: {} | undefined
          NumberValue?: {} | undefined
          DatetimeValue?: {} | undefined
        }
      | undefined
    EndMode: {}
    EndValue?:
      | {
          StringValue?: {} | undefined
          BinaryValue?: {} | undefined
          BooleanValue?: {} | undefined
          NumberValue?: {} | undefined
          DatetimeValue?: {} | undefined
        }
      | undefined
  }
}
type ListIncomingTypedLinksResponse = {
  LinkSpecifiers?: {} | undefined
  NextToken?: {} | undefined
}
type ObjectAttributeRange = {
  AttributeKey?: { SchemaArn: {}; FacetName: {}; Name: {} } | undefined
  Range?:
    | {
        StartMode: {}
        StartValue?:
          | {
              StringValue?: {} | undefined
              BinaryValue?: {} | undefined
              BooleanValue?: {} | undefined
              NumberValue?: {} | undefined
              DatetimeValue?: {} | undefined
            }
          | undefined
        EndMode: {}
        EndValue?:
          | {
              StringValue?: {} | undefined
              BinaryValue?: {} | undefined
              BooleanValue?: {} | undefined
              NumberValue?: {} | undefined
              DatetimeValue?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ListIndexResponse = { IndexAttachments?: {} | undefined; NextToken?: {} | undefined }
type ListManagedSchemaArnsResponse = { SchemaArns?: {} | undefined; NextToken?: {} | undefined }
type ListObjectAttributesResponse = { Attributes?: {} | undefined; NextToken?: {} | undefined }
type ListObjectChildrenResponse = { Children?: {} | undefined; NextToken?: {} | undefined }
type ListObjectParentPathsResponse = {
  PathToObjectIdentifiersList?: {} | undefined
  NextToken?: {} | undefined
}
type ListObjectParentsResponse = {
  Parents?: {} | undefined
  NextToken?: {} | undefined
  ParentLinks?: {} | undefined
}
type CannotListParentOfRootException = { [x: string]: unknown }
type ListObjectPoliciesResponse = { AttachedPolicyIds?: {} | undefined; NextToken?: {} | undefined }
type ListOutgoingTypedLinksResponse = {
  TypedLinkSpecifiers?: {} | undefined
  NextToken?: {} | undefined
}
type ListPolicyAttachmentsResponse = {
  ObjectIdentifiers?: {} | undefined
  NextToken?: {} | undefined
}
type ListPublishedSchemaArnsResponse = { SchemaArns?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined; NextToken?: {} | undefined }
type InvalidTaggingRequestException = { [x: string]: unknown }
type ListTypedLinkFacetAttributesResponse = {
  Attributes?: {} | undefined
  NextToken?: {} | undefined
}
type ListTypedLinkFacetNamesResponse = { FacetNames?: {} | undefined; NextToken?: {} | undefined }
type LookupPolicyResponse = { PolicyToPathList?: {} | undefined; NextToken?: {} | undefined }
type PublishSchemaResponse = { PublishedSchemaArn?: {} | undefined }
type SchemaAlreadyPublishedException = { [x: string]: unknown }
type RemoveFacetFromObjectResponse = { [x: string]: unknown }
type Tag = { Key?: {} | undefined; Value?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type LinkAttributeUpdate = {
  AttributeKey?: { SchemaArn: {}; FacetName: {}; Name: {} } | undefined
  AttributeAction?:
    | {
        AttributeActionType?: {} | undefined
        AttributeUpdateValue?:
          | {
              StringValue?: {} | undefined
              BinaryValue?: {} | undefined
              BooleanValue?: {} | undefined
              NumberValue?: {} | undefined
              DatetimeValue?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateLinkAttributesResponse = { [x: string]: unknown }
type ObjectAttributeUpdate = {
  ObjectAttributeKey?: { SchemaArn: {}; FacetName: {}; Name: {} } | undefined
  ObjectAttributeAction?:
    | {
        ObjectAttributeActionType?: {} | undefined
        ObjectAttributeUpdateValue?:
          | {
              StringValue?: {} | undefined
              BinaryValue?: {} | undefined
              BooleanValue?: {} | undefined
              NumberValue?: {} | undefined
              DatetimeValue?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type UpdateObjectAttributesResponse = { ObjectIdentifier?: {} | undefined }
type UpdateSchemaResponse = { SchemaArn?: {} | undefined }
type TypedLinkFacetAttributeUpdate = {
  Attribute: {
    Name: {}
    Type: {}
    DefaultValue?:
      | {
          StringValue?: {} | undefined
          BinaryValue?: {} | undefined
          BooleanValue?: {} | undefined
          NumberValue?: {} | undefined
          DatetimeValue?: {} | undefined
        }
      | undefined
    IsImmutable?: {} | undefined
    Rules?: {} | undefined
    RequiredBehavior: {}
  }
  Action: {}
}
type UpdateTypedLinkFacetResponse = { [x: string]: unknown }
type UpgradeAppliedSchemaResponse = {
  UpgradedSchemaArn?: {} | undefined
  DirectoryArn?: {} | undefined
}
type IncompatibleSchemaException = { [x: string]: unknown }
type UpgradePublishedSchemaResponse = { UpgradedSchemaArn?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: AddFacetToObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: ApplySchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: SchemaAlreadyExistsException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { PublishedSchemaArn: string } }
            output: InvalidAttachmentException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: AttachObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: LinkNameAlreadyInUseException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: InvalidAttachmentException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ParentReference: { Selector?: {} | undefined }
                ChildReference: { Selector?: {} | undefined }
                LinkName: string
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 491
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: AttachPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: NotPolicyException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: AttachToIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: InvalidAttachmentException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: LinkNameAlreadyInUseException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: IndexedAttributeMissingException
            outputFormat: 'json'
            status: 490
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: NotIndexException
            outputFormat: 'json'
            status: 491
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: AttachTypedLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: InvalidAttachmentException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SourceObjectReference: { Selector?: {} | undefined }
                TargetObjectReference: { Selector?: {} | undefined }
                TypedLinkFacet: { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                Attributes: AttributeNameAndValue[]
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchReadOperation[] } }
            output: BatchReadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchReadOperation[] } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchReadOperation[] } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchReadOperation[] } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchReadOperation[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchReadOperation[] } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchReadOperation[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchReadOperation[] } }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchWriteOperation[] } }
            output: BatchWriteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchWriteOperation[] } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchWriteOperation[] } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchWriteOperation[] } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchWriteOperation[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchWriteOperation[] } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchWriteOperation[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchWriteOperation[] } }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Operations: BatchWriteOperation[] } }
            output: BatchWriteException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: CreateDirectoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: DirectoryAlreadyExistsException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: CreateFacetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: FacetAlreadyExistsException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: InvalidRuleException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Attributes?: FacetAttribute[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
                FacetStyle?: 'STATIC' | 'DYNAMIC' | undefined
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/index#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: CreateIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: LinkNameAlreadyInUseException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                OrderedIndexedAttributeList: AttributeKey[]
                IsUnique: boolean
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: UnsupportedIndexTypeException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: CreateObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: LinkNameAlreadyInUseException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacets: SchemaFacet[]
                ObjectAttributeList?: AttributeKeyAndValue[] | undefined
                ParentReference?: { Selector?: {} | undefined } | undefined
                LinkName?: string | undefined
              }
            }
            output: UnsupportedIndexTypeException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/create': {
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
            } & { json: { Name: string } }
            output: CreateSchemaResponse
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
            } & { json: { Name: string } }
            output: InternalServiceException
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
            } & { json: { Name: string } }
            output: InvalidArnException
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
            } & { json: { Name: string } }
            output: RetryableConflictException
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
            } & { json: { Name: string } }
            output: ValidationException
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
            } & { json: { Name: string } }
            output: LimitExceededException
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
            } & { json: { Name: string } }
            output: AccessDeniedException
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
            } & { json: { Name: string } }
            output: SchemaAlreadyExistsException
            outputFormat: 'json'
            status: 486
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
            } & { json: { Name: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: CreateTypedLinkFacetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: FacetAlreadyExistsException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: InvalidRuleException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Facet: {
                  Name?: {} | undefined
                  Attributes?: {} | undefined
                  IdentityAttributeOrder?: {} | undefined
                }
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/directory#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteDirectoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectoryNotDisabledException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectoryDeletedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: DeleteFacetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: FacetNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: FacetInUseException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: DeleteObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: ObjectNotDetachedException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: StillContainsLinksException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: DeleteTypedLinkFacetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: FacetNotFoundException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: DetachFromIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: ObjectAlreadyDetachedException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                IndexReference: { Selector?: {} | undefined }
                TargetReference: { Selector?: {} | undefined }
              }
            }
            output: NotIndexException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: DetachObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ParentReference: { Selector?: {} | undefined }; LinkName: string } }
            output: NotNodeException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: DetachPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                PolicyReference: { Selector?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: NotPolicyException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisableDirectoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectoryDeletedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: EnableDirectoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DirectoryDeletedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/getappliedschema': {
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
            } & { json: { SchemaArn: string } }
            output: GetAppliedSchemaVersionResponse
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
            } & { json: { SchemaArn: string } }
            output: InternalServiceException
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
            } & { json: { SchemaArn: string } }
            output: InvalidArnException
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
            } & { json: { SchemaArn: string } }
            output: RetryableConflictException
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
            } & { json: { SchemaArn: string } }
            output: ValidationException
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
            } & { json: { SchemaArn: string } }
            output: LimitExceededException
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
            } & { json: { SchemaArn: string } }
            output: AccessDeniedException
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
            } & { json: { SchemaArn: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetDirectoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 485
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: GetFacetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: FacetNotFoundException
            outputFormat: 'json'
            status: 487
          }
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: UpdateFacetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: InvalidFacetUpdateException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: FacetNotFoundException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates?: FacetAttributeUpdate[] | undefined
                ObjectType?: 'NODE' | 'LEAF_NODE' | 'POLICY' | 'INDEX' | undefined
              }
            }
            output: InvalidRuleException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: GetLinkAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeNames: AttributeName[]
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: GetObjectAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                AttributeNames: AttributeName[]
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: GetObjectInformationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ObjectReference: { Selector?: {} | undefined } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetSchemaAsJsonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
            status: 487
          }
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Document: string } }
            output: PutSchemaFromJsonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Document: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Document: string } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Document: string } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Document: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Document: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Document: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Document: string } }
            output: InvalidSchemaDocException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Document: string } }
            output: InvalidRuleException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: GetTypedLinkFacetInformationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: FacetNotFoundException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/applied': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                DirectoryArn: string
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListAppliedSchemaArnsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                DirectoryArn: string
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                DirectoryArn: string
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                DirectoryArn: string
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                DirectoryArn: string
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                DirectoryArn: string
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                DirectoryArn: string
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                DirectoryArn: string
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                DirectoryArn: string
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                TargetReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListAttachedIndicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                TargetReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                TargetReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                TargetReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                TargetReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                TargetReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                TargetReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                TargetReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                TargetReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/development': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: ListDevelopmentSchemaArnsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/directory/list': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
                state?: 'ENABLED' | 'DISABLED' | 'DELETED' | undefined
              }
            }
            output: ListDirectoriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
                state?: 'ENABLED' | 'DISABLED' | 'DELETED' | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
                state?: 'ENABLED' | 'DISABLED' | 'DELETED' | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
                state?: 'ENABLED' | 'DISABLED' | 'DELETED' | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
                state?: 'ENABLED' | 'DISABLED' | 'DELETED' | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
                state?: 'ENABLED' | 'DISABLED' | 'DELETED' | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
                state?: 'ENABLED' | 'DISABLED' | 'DELETED' | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
                state?: 'ENABLED' | 'DISABLED' | 'DELETED' | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListFacetAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: FacetNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: ListFacetNamesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: ListIncomingTypedLinksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: ListIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                RangesOnIndexedValues?: ObjectAttributeRange[] | undefined
                IndexReference: { Selector?: {} | undefined }
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: NotIndexException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/managed': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListManagedSchemaArnsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: ListObjectAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                FacetFilter?: { SchemaArn?: {} | undefined; FacetName?: {} | undefined } | undefined
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListObjectChildrenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: NotNodeException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListObjectParentPathsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: ListObjectParentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
                IncludeAllLinksToEachParent?: boolean | undefined
              }
            }
            output: CannotListParentOfRootException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListObjectPoliciesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: ListOutgoingTypedLinksResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                FilterAttributeRanges?: TypedLinkAttributeRange[] | undefined
                FilterTypedLink?:
                  | { SchemaArn?: {} | undefined; TypedLinkName?: {} | undefined }
                  | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
                ConsistencyLevel?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListPolicyAttachmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'x-amz-consistency-level'?: 'SERIALIZABLE' | 'EVENTUAL' | undefined
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
                PolicyReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: NotPolicyException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/published': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListPublishedSchemaArnsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                SchemaArn?: string | undefined
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/tags': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
                ResourceArn: string
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidTaggingRequestException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ListTypedLinkFacetAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: FacetNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: ListTypedLinkFacetNamesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { NextToken?: string | undefined; MaxResults?: number | undefined } }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LookupPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                NextToken?: string | undefined
                MaxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Version: string
                MinorVersion?: string | undefined
                Name?: string | undefined
              }
            }
            output: PublishSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Version: string
                MinorVersion?: string | undefined
                Name?: string | undefined
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Version: string
                MinorVersion?: string | undefined
                Name?: string | undefined
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Version: string
                MinorVersion?: string | undefined
                Name?: string | undefined
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Version: string
                MinorVersion?: string | undefined
                Name?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Version: string
                MinorVersion?: string | undefined
                Name?: string | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Version: string
                MinorVersion?: string | undefined
                Name?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Version: string
                MinorVersion?: string | undefined
                Name?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                Version: string
                MinorVersion?: string | undefined
                Name?: string | undefined
              }
            }
            output: SchemaAlreadyPublishedException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: RemoveFacetFromObjectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                SchemaFacet: { SchemaArn?: {} | undefined; FacetName?: {} | undefined }
                ObjectReference: { Selector?: {} | undefined }
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/tags/add': {
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: TagResourceResponse
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: InternalServiceException
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: InvalidArnException
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: RetryableConflictException
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: ValidationException
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: LimitExceededException
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: AccessDeniedException
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
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
            } & { json: { ResourceArn: string; Tags: Tag[] } }
            output: InvalidTaggingRequestException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/tags/remove': {
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
            } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
            output: UntagResourceResponse
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
            } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
            output: InternalServiceException
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
            } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
            output: InvalidArnException
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
            } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
            output: RetryableConflictException
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
            } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
            output: ValidationException
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
            } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
            output: LimitExceededException
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
            } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
            output: AccessDeniedException
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
            } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
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
            } & { json: { ResourceArn: string; TagKeys: TagKey[] } }
            output: InvalidTaggingRequestException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition': {
      $post:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: UpdateLinkAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                TypedLinkSpecifier: {
                  TypedLinkFacet?: { SchemaArn: {}; TypedLinkName: {} } | undefined
                  SourceObjectReference?: { Selector?: {} | undefined } | undefined
                  TargetObjectReference?: { Selector?: {} | undefined } | undefined
                  IdentityAttributeValues?: {} | undefined
                }
                AttributeUpdates: LinkAttributeUpdate[]
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: UpdateObjectAttributesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: DirectoryNotEnabledException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: LinkNameAlreadyInUseException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                ObjectReference: { Selector?: {} | undefined }
                AttributeUpdates: ObjectAttributeUpdate[]
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 489
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: UpdateSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Name: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition': {
      $put:
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: UpdateTypedLinkFacetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: InternalServiceException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: InvalidArnException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: RetryableConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: FacetValidationException
            outputFormat: 'json'
            status: 486
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: InvalidFacetUpdateException
            outputFormat: 'json'
            status: 487
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 488
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: FacetNotFoundException
            outputFormat: 'json'
            status: 489
          }
        | {
            input: {
              header: {
                'x-amz-data-partition': string
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
                AttributeUpdates: TypedLinkFacetAttributeUpdate[]
                IdentityAttributeOrder: AttributeName[]
              }
            }
            output: InvalidRuleException
            outputFormat: 'json'
            status: 490
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/upgradeapplied': {
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
            } & {
              json: {
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: UpgradeAppliedSchemaResponse
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
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: InternalServiceException
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
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: InvalidArnException
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
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: RetryableConflictException
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
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: ValidationException
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
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: IncompatibleSchemaException
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
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: AccessDeniedException
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
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
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
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: InvalidAttachmentException
            outputFormat: 'json'
            status: 487
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
                PublishedSchemaArn: string
                DirectoryArn: string
                DryRun?: boolean | undefined
              }
            }
            output: SchemaAlreadyExistsException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/amazonclouddirectory/2017-01-11/schema/upgradepublished': {
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
            } & {
              json: {
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: UpgradePublishedSchemaResponse
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
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: InternalServiceException
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
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: InvalidArnException
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
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: RetryableConflictException
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
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: ValidationException
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
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: IncompatibleSchemaException
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
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: AccessDeniedException
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
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 486
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
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: InvalidAttachmentException
            outputFormat: 'json'
            status: 487
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
                DevelopmentSchemaArn: string
                PublishedSchemaArn: string
                MinorVersion: string
                DryRun?: boolean | undefined
              }
            }
            output: LimitExceededException
            outputFormat: 'json'
            status: 488
          }
    }
  },
  '/'
>
export default routes
