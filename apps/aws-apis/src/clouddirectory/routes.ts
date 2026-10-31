import { createRoute, z } from '@hono/zod-openapi'

const SelectorObjectReferenceSchema = z.string().openapi('SelectorObjectReference')

type ObjectReferenceType = {
  Selector?: z.infer<typeof SelectorObjectReferenceSchema> & { [key: string]: unknown }
}

const AddFacetToObjectResponseSchema = z.object({}).openapi('AddFacetToObjectResponse')

const ArnSchema = z.string().openapi('Arn')

const FacetNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._-]*$/)
  .min(1)
  .max(64)
  .openapi('FacetName')

const AttributeNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._:-]*$/)
  .min(1)
  .max(230)
  .openapi('AttributeName')

const AttributeKeySchema = z
  .object({
    SchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the schema that contains the facet and attribute.',
        }),
    ),
    FacetName: FacetNameSchema.and(
      z.any().openapi({ description: 'The name of the facet that the attribute exists within.' }),
    ),
    Name: AttributeNameSchema.and(z.any().openapi({ description: 'The name of the attribute.' })),
  })
  .openapi({
    required: ['SchemaArn', 'FacetName', 'Name'],
    description: 'A unique identifier for an attribute.',
  })
  .openapi('AttributeKey')

const StringAttributeValueSchema = z.string().openapi('StringAttributeValue')

const BinaryAttributeValueSchema = z.string().openapi('BinaryAttributeValue')

const BooleanAttributeValueSchema = z.boolean().openapi('BooleanAttributeValue')

const NumberAttributeValueSchema = z.string().openapi('NumberAttributeValue')

const DatetimeAttributeValueSchema = z.iso
  .datetime({ offset: true })
  .openapi('DatetimeAttributeValue')

const TypedAttributeValueSchema = z
  .object({
    StringValue: StringAttributeValueSchema.and(
      z.any().openapi({ description: 'A string data value.' }),
    ).exactOptional(),
    BinaryValue: BinaryAttributeValueSchema.and(
      z.any().openapi({ description: 'A binary data value.' }),
    ).exactOptional(),
    BooleanValue: BooleanAttributeValueSchema.and(
      z.any().openapi({ description: 'A Boolean data value.' }),
    ).exactOptional(),
    NumberValue: NumberAttributeValueSchema.and(
      z.any().openapi({ description: 'A number data value.' }),
    ).exactOptional(),
    DatetimeValue: DatetimeAttributeValueSchema.and(
      z.any().openapi({ description: 'A date and time value.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.',
    required: [],
  })
  .openapi('TypedAttributeValue')

const AttributeKeyAndValueSchema = z
  .object({
    Key: AttributeKeySchema.and(z.any().openapi({ description: 'The key of the attribute.' })),
    Value: TypedAttributeValueSchema.and(
      z.any().openapi({ description: 'The value of the attribute.' }),
    ),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'The combination of an attribute key and an attribute value.',
  })
  .openapi('AttributeKeyAndValue')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const InvalidArnExceptionSchema = z.any().openapi('InvalidArnException')

const RetryableConflictExceptionSchema = z.any().openapi('RetryableConflictException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const DirectoryNotEnabledExceptionSchema = z.any().openapi('DirectoryNotEnabledException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const FacetValidationExceptionSchema = z.any().openapi('FacetValidationException')

const ApplySchemaResponseSchema = z
  .object({
    AppliedSchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The applied schema ARN that is associated with the copied schema in the <a>Directory</a>. You can use this ARN to describe the schema information applied on this directory. For more information, see <a>arns</a>.',
        }),
    ).exactOptional(),
    DirectoryArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApplySchemaResponse')

const SchemaAlreadyExistsExceptionSchema = z.any().openapi('SchemaAlreadyExistsException')

const InvalidAttachmentExceptionSchema = z.any().openapi('InvalidAttachmentException')

const ObjectIdentifierSchema = z.string().openapi('ObjectIdentifier')

const AttachObjectResponseSchema = z
  .object({
    AttachedObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attached <code>ObjectIdentifier</code>, which is the child <code>ObjectIdentifier</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachObjectResponse')

const LinkNameAlreadyInUseExceptionSchema = z.any().openapi('LinkNameAlreadyInUseException')

const AttachPolicyResponseSchema = z.object({}).openapi('AttachPolicyResponse')

const NotPolicyExceptionSchema = z.any().openapi('NotPolicyException')

const AttachToIndexResponseSchema = z
  .object({
    AttachedObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ObjectIdentifier</code> of the object that was attached to the index.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachToIndexResponse')

const IndexedAttributeMissingExceptionSchema = z.any().openapi('IndexedAttributeMissingException')

const NotIndexExceptionSchema = z.any().openapi('NotIndexException')

const TypedLinkNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._-]*$/)
  .openapi('TypedLinkName')

const TypedLinkSchemaAndFacetNameSchema = z
  .object({
    SchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
        }),
    ),
    TypedLinkName: TypedLinkNameSchema.and(
      z.any().openapi({ description: 'The unique name of the typed link facet.' }),
    ),
  })
  .openapi({
    required: ['SchemaArn', 'TypedLinkName'],
    description:
      'Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.',
  })
  .openapi('TypedLinkSchemaAndFacetName')

const ObjectReferenceSchema: z.ZodType<ObjectReferenceType> = z
  .lazy(() =>
    z
      .object({
        Selector: SelectorObjectReferenceSchema.and(
          z
            .any()
            .openapi({
              description:
                '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
            }),
        ).exactOptional(),
      })
      .openapi({ description: 'The reference that identifies an object.', required: [] }),
  )
  .openapi('ObjectReference')

const AttributeNameAndValueSchema = z
  .object({
    AttributeName: AttributeNameSchema.and(
      z.any().openapi({ description: 'The attribute name of the typed link.' }),
    ),
    Value: TypedAttributeValueSchema.and(
      z.any().openapi({ description: 'The value for the typed link.' }),
    ),
  })
  .openapi({
    required: ['AttributeName', 'Value'],
    description: 'Identifies the attribute name and value for a typed link.',
  })
  .openapi('AttributeNameAndValue')

const AttributeNameAndValueListSchema = z
  .array(AttributeNameAndValueSchema)
  .openapi('AttributeNameAndValueList')

const TypedLinkSpecifierSchema = z
  .object({
    TypedLinkFacet: TypedLinkSchemaAndFacetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the typed link facet that is associated with the typed link.',
        }),
    ),
    SourceObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the source object that the typed link will attach to.',
        }),
    ),
    TargetObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the target object that the typed link will attach to.',
        }),
    ),
    IdentityAttributeValues: AttributeNameAndValueListSchema.and(
      z.any().openapi({ description: 'Identifies the attribute value to update.' }),
    ),
  })
  .openapi({
    required: [
      'TypedLinkFacet',
      'SourceObjectReference',
      'TargetObjectReference',
      'IdentityAttributeValues',
    ],
    description:
      'Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.',
  })
  .openapi('TypedLinkSpecifier')

const AttachTypedLinkResponseSchema = z
  .object({
    TypedLinkSpecifier: TypedLinkSpecifierSchema.and(
      z.any().openapi({ description: 'Returns a typed link specifier as output.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachTypedLinkResponse')

const AttributeKeyAndValueListSchema = z
  .array(AttributeKeyAndValueSchema)
  .openapi('AttributeKeyAndValueList')

const NextTokenSchema = z.string().openapi('NextToken')

const BatchListObjectAttributesResponseSchema = z
  .object({
    Attributes: AttributeKeyAndValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attributes map that is associated with the object. <code>AttributeArn</code> is the key; attribute value is the value.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListObjectAttributes</a> response operation.',
    required: [],
  })
  .openapi('BatchListObjectAttributesResponse')

const LinkNameToObjectIdentifierMapSchema = z
  .record(z.string(), ObjectIdentifierSchema)
  .openapi('LinkNameToObjectIdentifierMap')

const BatchListObjectChildrenResponseSchema = z
  .object({
    Children: LinkNameToObjectIdentifierMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The children structure, which is a map with the key as the <code>LinkName</code> and <code>ObjectIdentifier</code> as the value.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListObjectChildren</a> response operation.',
    required: [],
  })
  .openapi('BatchListObjectChildrenResponse')

const SchemaFacetSchema = z
  .object({
    SchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions. If this value is set, FacetName must also be set.',
        }),
    ).exactOptional(),
    FacetName: FacetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the facet. If this value is set, SchemaArn must also be set.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A facet.', required: [] })
  .openapi('SchemaFacet')

const SchemaFacetListSchema = z.array(SchemaFacetSchema).openapi('SchemaFacetList')

const BatchGetObjectInformationResponseSchema = z
  .object({
    SchemaFacets: SchemaFacetListSchema.and(
      z.any().openapi({ description: 'The facets attached to the specified object.' }),
    ).exactOptional(),
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The <code>ObjectIdentifier</code> of the specified object.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>GetObjectInformation</a> response operation.',
    required: [],
  })
  .openapi('BatchGetObjectInformationResponse')

const BatchGetObjectAttributesResponseSchema = z
  .object({
    Attributes: AttributeKeyAndValueListSchema.and(
      z.any().openapi({ description: 'The attribute values that are associated with an object.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>GetObjectAttributes</a> response operation.',
    required: [],
  })
  .openapi('BatchGetObjectAttributesResponse')

const IndexAttachmentSchema = z
  .object({
    IndexedAttributes: AttributeKeyAndValueListSchema.and(
      z.any().openapi({ description: 'The indexed attribute values.' }),
    ).exactOptional(),
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'In response to <a>ListIndex</a>, the <code>ObjectIdentifier</code> of the object attached to the index. In response to <a>ListAttachedIndices</a>, the <code>ObjectIdentifier</code> of the index attached to the object. This field will always contain the <code>ObjectIdentifier</code> of the object on the opposite side of the attachment specified in the query.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents an index and an attached object.', required: [] })
  .openapi('IndexAttachment')

const IndexAttachmentListSchema = z.array(IndexAttachmentSchema).openapi('IndexAttachmentList')

const BatchListAttachedIndicesResponseSchema = z
  .object({
    IndexAttachments: IndexAttachmentListSchema.and(
      z.any().openapi({ description: 'The indices attached to the specified object.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListAttachedIndices</a> response operation.',
    required: [],
  })
  .openapi('BatchListAttachedIndicesResponse')

const PathStringSchema = z.string().openapi('PathString')

const ObjectIdentifierListSchema = z.array(ObjectIdentifierSchema).openapi('ObjectIdentifierList')

const PathToObjectIdentifiersSchema = z
  .object({
    Path: PathStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The path that is used to identify the object starting from directory root.',
        }),
    ).exactOptional(),
    ObjectIdentifiers: ObjectIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists <code>ObjectIdentifiers</code> starting from directory root to the object in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the path to the <code>ObjectIdentifiers</code> that is associated with the directory.',
    required: [],
  })
  .openapi('PathToObjectIdentifiers')

const PathToObjectIdentifiersListSchema = z
  .array(PathToObjectIdentifiersSchema)
  .openapi('PathToObjectIdentifiersList')

const BatchListObjectParentPathsResponseSchema = z
  .object({
    PathToObjectIdentifiersList: PathToObjectIdentifiersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the path to the <code>ObjectIdentifiers</code> that are associated with the directory.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListObjectParentPaths</a> response operation.',
    required: [],
  })
  .openapi('BatchListObjectParentPathsResponse')

const BatchListObjectPoliciesResponseSchema = z
  .object({
    AttachedPolicyIds: ObjectIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of policy <code>ObjectIdentifiers</code>, that are attached to the object.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListObjectPolicies</a> response operation.',
    required: [],
  })
  .openapi('BatchListObjectPoliciesResponse')

const BatchListPolicyAttachmentsResponseSchema = z
  .object({
    ObjectIdentifiers: ObjectIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code>ObjectIdentifiers</code> to which the policy is attached.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListPolicyAttachments</a> response operation.',
    required: [],
  })
  .openapi('BatchListPolicyAttachmentsResponse')

const PolicyTypeSchema = z.string().openapi('PolicyType')

const PolicyAttachmentSchema = z
  .object({
    PolicyId: ObjectIdentifierSchema.and(
      z.any().openapi({ description: 'The ID of <code>PolicyAttachment</code>.' }),
    ).exactOptional(),
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ObjectIdentifier</code> that is associated with <code>PolicyAttachment</code>.',
        }),
    ).exactOptional(),
    PolicyType: PolicyTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of policy that can be associated with <code>PolicyAttachment</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.',
    required: [],
  })
  .openapi('PolicyAttachment')

const PolicyAttachmentListSchema = z.array(PolicyAttachmentSchema).openapi('PolicyAttachmentList')

const PolicyToPathSchema = z
  .object({
    Path: PathStringSchema.and(
      z.any().openapi({ description: 'The path that is referenced from the root.' }),
    ).exactOptional(),
    Policies: PolicyAttachmentListSchema.and(
      z.any().openapi({ description: 'List of policy objects.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.',
    required: [],
  })
  .openapi('PolicyToPath')

const PolicyToPathListSchema = z.array(PolicyToPathSchema).openapi('PolicyToPathList')

const BatchLookupPolicyResponseSchema = z
  .object({
    PolicyToPathList: PolicyToPathListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and <code>PolicyType</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>LookupPolicy</a> response operation.',
    required: [],
  })
  .openapi('BatchLookupPolicyResponse')

const BatchListIndexResponseSchema = z
  .object({
    IndexAttachments: IndexAttachmentListSchema.and(
      z.any().openapi({ description: 'The objects and indexed values attached to the index.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListIndex</a> response operation.',
    required: [],
  })
  .openapi('BatchListIndexResponse')

const TypedLinkSpecifierListSchema = z
  .array(TypedLinkSpecifierSchema)
  .openapi('TypedLinkSpecifierList')

const BatchListOutgoingTypedLinksResponseSchema = z
  .object({
    TypedLinkSpecifiers: TypedLinkSpecifierListSchema.and(
      z.any().openapi({ description: 'Returns a typed link specifier as output.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.',
    required: [],
  })
  .openapi('BatchListOutgoingTypedLinksResponse')

const BatchListIncomingTypedLinksResponseSchema = z
  .object({
    LinkSpecifiers: TypedLinkSpecifierListSchema.and(
      z.any().openapi({ description: 'Returns one or more typed link specifiers as output.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListIncomingTypedLinks</a> response operation.',
    required: [],
  })
  .openapi('BatchListIncomingTypedLinksResponse')

const BatchGetLinkAttributesResponseSchema = z
  .object({
    Attributes: AttributeKeyAndValueListSchema.and(
      z.any().openapi({ description: 'The attributes that are associated with the typed link.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>GetLinkAttributes</a> response operation.',
    required: [],
  })
  .openapi('BatchGetLinkAttributesResponse')

const LinkNameSchema = z
  .string()
  .regex(/[^\/\[\]\(\):\{\}#@!?\s\\;]+/)
  .min(1)
  .max(64)
  .openapi('LinkName')

const ObjectIdentifierAndLinkNameTupleSchema = z
  .object({
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z.any().openapi({ description: 'The ID that is associated with the object.' }),
    ).exactOptional(),
    LinkName: LinkNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the link between the parent and the child object.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A pair of ObjectIdentifier and LinkName.', required: [] })
  .openapi('ObjectIdentifierAndLinkNameTuple')

const ObjectIdentifierAndLinkNameListSchema = z
  .array(ObjectIdentifierAndLinkNameTupleSchema)
  .openapi('ObjectIdentifierAndLinkNameList')

const BatchListObjectParentsResponseSchema = z
  .object({
    ParentLinks: ObjectIdentifierAndLinkNameListSchema.and(
      z.any().openapi({ description: 'Returns a list of parent reference and LinkName Tuples.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>ListObjectParents</a> response operation.',
    required: [],
  })
  .openapi('BatchListObjectParentsResponse')

const BatchReadSuccessfulResponseSchema = z
  .object({
    ListObjectAttributes: BatchListObjectAttributesResponseSchema.and(
      z.any().openapi({ description: 'Lists all attributes that are associated with an object.' }),
    ).exactOptional(),
    ListObjectChildren: BatchListObjectChildrenResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a paginated list of child objects that are associated with a given object.',
        }),
    ).exactOptional(),
    GetObjectInformation: BatchGetObjectInformationResponseSchema.and(
      z.any().openapi({ description: 'Retrieves metadata about an object.' }),
    ).exactOptional(),
    GetObjectAttributes: BatchGetObjectAttributesResponseSchema.and(
      z
        .any()
        .openapi({
          description: 'Retrieves attributes within a facet that are associated with an object.',
        }),
    ).exactOptional(),
    ListAttachedIndices: BatchListAttachedIndicesResponseSchema.and(
      z.any().openapi({ description: 'Lists indices attached to an object.' }),
    ).exactOptional(),
    ListObjectParentPaths: BatchListObjectParentPathsResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.',
        }),
    ).exactOptional(),
    ListObjectPolicies: BatchListObjectPoliciesResponseSchema.and(
      z
        .any()
        .openapi({ description: 'Returns policies attached to an object in pagination fashion.' }),
    ).exactOptional(),
    ListPolicyAttachments: BatchListPolicyAttachmentsResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.',
        }),
    ).exactOptional(),
    LookupPolicy: BatchLookupPolicyResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don\'t have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don\'t lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.',
        }),
    ).exactOptional(),
    ListIndex: BatchListIndexResponseSchema.and(
      z.any().openapi({ description: 'Lists objects attached to the specified index.' }),
    ).exactOptional(),
    ListOutgoingTypedLinks: BatchListOutgoingTypedLinksResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ).exactOptional(),
    ListIncomingTypedLinks: BatchListIncomingTypedLinksResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ).exactOptional(),
    GetLinkAttributes: BatchGetLinkAttributesResponseSchema.and(
      z.any().openapi({ description: 'The list of attributes to retrieve from the typed link.' }),
    ).exactOptional(),
    ListObjectParents: BatchListObjectParentsResponseSchema.and(
      z.any().openapi({ description: 'The list of parent objects to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchRead</code> success response operation.',
    required: [],
  })
  .openapi('BatchReadSuccessfulResponse')

const BatchReadExceptionTypeSchema = z
  .enum([
    'ValidationException',
    'InvalidArnException',
    'ResourceNotFoundException',
    'InvalidNextTokenException',
    'AccessDeniedException',
    'NotNodeException',
    'FacetValidationException',
    'CannotListParentOfRootException',
    'NotIndexException',
    'NotPolicyException',
    'DirectoryNotEnabledException',
    'LimitExceededException',
    'InternalServiceException',
  ])
  .openapi('BatchReadExceptionType')

const ExceptionMessageSchema = z.string().openapi('ExceptionMessage')

const BatchReadExceptionSchema = z
  .object({
    Type: BatchReadExceptionTypeSchema.and(
      z
        .any()
        .openapi({ description: 'A type of exception, such as <code>InvalidArnException</code>.' }),
    ).exactOptional(),
    Message: ExceptionMessageSchema.and(
      z.any().openapi({ description: 'An exception message that is associated with the failure.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The batch read exception structure, which contains the exception type and message.',
    required: [],
  })
  .openapi('BatchReadException')

const BatchReadOperationResponseSchema = z
  .object({
    SuccessfulResponse: BatchReadSuccessfulResponseSchema.and(
      z.any().openapi({ description: 'Identifies which operation in a batch has succeeded.' }),
    ).exactOptional(),
    ExceptionResponse: BatchReadExceptionSchema.and(
      z.any().openapi({ description: 'Identifies which operation in a batch has failed.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchRead</code> response operation.',
    required: [],
  })
  .openapi('BatchReadOperationResponse')

const BatchReadOperationResponseListSchema = z
  .array(BatchReadOperationResponseSchema)
  .openapi('BatchReadOperationResponseList')

const BatchReadResponseSchema = z
  .object({
    Responses: BatchReadOperationResponseListSchema.and(
      z.any().openapi({ description: 'A list of all the responses for each batch read.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchReadResponse')

const NumberResultsSchema = z.int().min(1).openapi('NumberResults')

const BatchListObjectAttributesSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({ description: 'Reference of the object whose attributes need to be listed.' }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
    FacetFilter: SchemaFacetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to filter the list of object attributes that are associated with a certain facet.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectReference'],
    description: 'Represents the output of a <a>ListObjectAttributes</a> operation.',
  })
  .openapi('BatchListObjectAttributes')

const BatchListObjectChildrenSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Reference of the object for which child objects are being listed.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectReference'],
    description: 'Represents the output of a <a>ListObjectChildren</a> operation.',
  })
  .openapi('BatchListObjectChildren')

const BatchListAttachedIndicesSchema = z
  .object({
    TargetReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the object that has indices attached.' }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TargetReference'],
    description:
      'Lists indices attached to an object inside a <a>BatchRead</a> operation. For more information, see <a>ListAttachedIndices</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchListAttachedIndices')

const BatchListObjectParentPathsSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'The reference that identifies the object whose attributes will be listed.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectReference'],
    description:
      'Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectParentPaths</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchListObjectParentPaths')

const BatchGetObjectInformationSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the object.' }),
    ),
  })
  .openapi({
    required: ['ObjectReference'],
    description:
      'Retrieves metadata about an object inside a <a>BatchRead</a> operation. For more information, see <a>GetObjectInformation</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchGetObjectInformation')

const AttributeNameListSchema = z.array(AttributeNameSchema).openapi('AttributeNameList')

const BatchGetObjectAttributesSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Reference that identifies the object whose attributes will be retrieved.',
        }),
    ),
    SchemaFacet: SchemaFacetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.',
        }),
    ),
    AttributeNames: AttributeNameListSchema.and(
      z.any().openapi({ description: 'List of attribute names whose values will be retrieved.' }),
    ),
  })
  .openapi({
    required: ['ObjectReference', 'SchemaFacet', 'AttributeNames'],
    description:
      'Retrieves attributes within a facet that are associated with an object inside an <a>BatchRead</a> operation. For more information, see <a>GetObjectAttributes</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchGetObjectAttributes')

const BatchListObjectParentsSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema,
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectReference'],
    description:
      'Lists parent objects that are associated with a given object in pagination fashion.',
  })
  .openapi('BatchListObjectParents')

const BatchListObjectPoliciesSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'The reference that identifies the object whose attributes will be listed.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectReference'],
    description:
      'Returns policies attached to an object in pagination fashion inside a <a>BatchRead</a> operation. For more information, see <a>ListObjectPolicies</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchListObjectPolicies')

const BatchListPolicyAttachmentsSchema = z
  .object({
    PolicyReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The reference that identifies the policy object.' }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PolicyReference'],
    description:
      'Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchListPolicyAttachments')

const BatchLookupPolicySchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Reference that identifies the object whose policies will be looked up.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectReference'],
    description:
      'Lists all policies from the root of the Directory to the object specified inside a <a>BatchRead</a> operation. For more information, see <a>LookupPolicy</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchLookupPolicy')

const RangeModeSchema = z
  .enum(['FIRST', 'LAST', 'LAST_BEFORE_MISSING_VALUES', 'INCLUSIVE', 'EXCLUSIVE'])
  .openapi('RangeMode')

const TypedAttributeValueRangeSchema = z
  .object({
    StartMode: RangeModeSchema.and(
      z.any().openapi({ description: 'The inclusive or exclusive range start.' }),
    ),
    StartValue: TypedAttributeValueSchema.and(
      z.any().openapi({ description: 'The value to start the range at.' }),
    ).exactOptional(),
    EndMode: RangeModeSchema.and(
      z.any().openapi({ description: 'The inclusive or exclusive range end.' }),
    ),
    EndValue: TypedAttributeValueSchema.and(
      z.any().openapi({ description: 'The attribute value to terminate the range at.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StartMode', 'EndMode'],
    description:
      'A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.',
  })
  .openapi('TypedAttributeValueRange')

const ObjectAttributeRangeSchema = z
  .object({
    AttributeKey: AttributeKeySchema.and(
      z.any().openapi({ description: 'The key of the attribute that the attribute range covers.' }),
    ).exactOptional(),
    Range: TypedAttributeValueRangeSchema.and(
      z.any().openapi({ description: 'The range of attribute values being selected.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A range of attributes.', required: [] })
  .openapi('ObjectAttributeRange')

const ObjectAttributeRangeListSchema = z
  .array(ObjectAttributeRangeSchema)
  .openapi('ObjectAttributeRangeList')

const BatchListIndexSchema = z
  .object({
    RangesOnIndexedValues: ObjectAttributeRangeListSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the ranges of indexed values that you want to query.' }),
    ).exactOptional(),
    IndexReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The reference to the index to list.' }),
    ),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IndexReference'],
    description:
      'Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchListIndex')

const TypedLinkAttributeRangeSchema = z
  .object({
    AttributeName: AttributeNameSchema.and(
      z.any().openapi({ description: 'The unique name of the typed link attribute.' }),
    ).exactOptional(),
    Range: TypedAttributeValueRangeSchema.and(
      z.any().openapi({ description: 'The range of attribute values that are being selected.' }),
    ),
  })
  .openapi({
    required: ['Range'],
    description: 'Identifies the range of attributes that are used by a specified filter.',
  })
  .openapi('TypedLinkAttributeRange')

const TypedLinkAttributeRangeListSchema = z
  .array(TypedLinkAttributeRangeSchema)
  .openapi('TypedLinkAttributeRangeList')

const BatchListOutgoingTypedLinksSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'The reference that identifies the object whose attributes will be listed.',
        }),
    ),
    FilterAttributeRanges: TypedLinkAttributeRangeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.',
        }),
    ).exactOptional(),
    FilterTypedLink: TypedLinkSchemaAndFacetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters are interpreted in the order of the attributes defined on the typed link facet, not the order they are supplied to any API calls.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectReference'],
    description:
      'Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchListOutgoingTypedLinks')

const BatchListIncomingTypedLinksSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'The reference that identifies the object whose attributes will be listed.',
        }),
    ),
    FilterAttributeRanges: TypedLinkAttributeRangeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.',
        }),
    ).exactOptional(),
    FilterTypedLink: TypedLinkSchemaAndFacetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObjectReference'],
    description:
      'Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListIncomingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchListIncomingTypedLinks')

const BatchGetLinkAttributesSchema = z
  .object({
    TypedLinkSpecifier: TypedLinkSpecifierSchema.and(
      z.any().openapi({ description: 'Allows a typed link specifier to be accepted as input.' }),
    ),
    AttributeNames: AttributeNameListSchema.and(
      z.any().openapi({ description: 'A list of attribute names whose values will be retrieved.' }),
    ),
  })
  .openapi({
    required: ['TypedLinkSpecifier', 'AttributeNames'],
    description:
      'Retrieves attributes that are associated with a typed link inside a <a>BatchRead</a> operation. For more information, see <a>GetLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchGetLinkAttributes')

const BatchReadOperationSchema = z
  .object({
    ListObjectAttributes: BatchListObjectAttributesSchema.and(
      z.any().openapi({ description: 'Lists all attributes that are associated with an object.' }),
    ).exactOptional(),
    ListObjectChildren: BatchListObjectChildrenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a paginated list of child objects that are associated with a given object.',
        }),
    ).exactOptional(),
    ListAttachedIndices: BatchListAttachedIndicesSchema.and(
      z.any().openapi({ description: 'Lists indices attached to an object.' }),
    ).exactOptional(),
    ListObjectParentPaths: BatchListObjectParentPathsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.',
        }),
    ).exactOptional(),
    GetObjectInformation: BatchGetObjectInformationSchema.and(
      z.any().openapi({ description: 'Retrieves metadata about an object.' }),
    ).exactOptional(),
    GetObjectAttributes: BatchGetObjectAttributesSchema.and(
      z
        .any()
        .openapi({
          description: 'Retrieves attributes within a facet that are associated with an object.',
        }),
    ).exactOptional(),
    ListObjectParents: BatchListObjectParentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists parent objects that are associated with a given object in pagination fashion.',
        }),
    ).exactOptional(),
    ListObjectPolicies: BatchListObjectPoliciesSchema.and(
      z
        .any()
        .openapi({ description: 'Returns policies attached to an object in pagination fashion.' }),
    ).exactOptional(),
    ListPolicyAttachments: BatchListPolicyAttachmentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.',
        }),
    ).exactOptional(),
    LookupPolicy: BatchLookupPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don\'t have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don\'t lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.',
        }),
    ).exactOptional(),
    ListIndex: BatchListIndexSchema.and(
      z.any().openapi({ description: 'Lists objects attached to the specified index.' }),
    ).exactOptional(),
    ListOutgoingTypedLinks: BatchListOutgoingTypedLinksSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ).exactOptional(),
    ListIncomingTypedLinks: BatchListIncomingTypedLinksSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ).exactOptional(),
    GetLinkAttributes: BatchGetLinkAttributesSchema.and(
      z
        .any()
        .openapi({ description: 'Retrieves attributes that are associated with a typed link.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchRead</code> operation.',
    required: [],
  })
  .openapi('BatchReadOperation')

const BatchCreateObjectResponseSchema = z
  .object({
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z.any().openapi({ description: 'The ID that is associated with the object.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>CreateObject</a> response operation.',
    required: [],
  })
  .openapi('BatchCreateObjectResponse')

const BatchAttachObjectResponseSchema = z
  .object({
    attachedObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>ObjectIdentifier</code> of the object that has been attached.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output batch <a>AttachObject</a> response operation.',
    required: [],
  })
  .openapi('BatchAttachObjectResponse')

const BatchDetachObjectResponseSchema = z
  .object({
    detachedObjectIdentifier: ObjectIdentifierSchema.and(
      z.any().openapi({ description: 'The <code>ObjectIdentifier</code> of the detached object.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>DetachObject</a> response operation.',
    required: [],
  })
  .openapi('BatchDetachObjectResponse')

const BatchUpdateObjectAttributesResponseSchema = z
  .object({
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z.any().openapi({ description: 'ID that is associated with the object.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchUpdate</code> response operation.',
    required: [],
  })
  .openapi('BatchUpdateObjectAttributesResponse')

const BatchDeleteObjectResponseSchema = z
  .object({})
  .openapi({ description: 'Represents the output of a <a>DeleteObject</a> response operation.' })
  .openapi('BatchDeleteObjectResponse')

const BatchAddFacetToObjectResponseSchema = z
  .object({})
  .openapi({ description: 'The result of a batch add facet to object operation.' })
  .openapi('BatchAddFacetToObjectResponse')

const BatchRemoveFacetFromObjectResponseSchema = z
  .object({})
  .openapi({ description: 'An empty result that represents success.' })
  .openapi('BatchRemoveFacetFromObjectResponse')

const BatchAttachPolicyResponseSchema = z
  .object({})
  .openapi({ description: 'Represents the output of an <a>AttachPolicy</a> response operation.' })
  .openapi('BatchAttachPolicyResponse')

const BatchDetachPolicyResponseSchema = z
  .object({})
  .openapi({ description: 'Represents the output of a <a>DetachPolicy</a> response operation.' })
  .openapi('BatchDetachPolicyResponse')

const BatchCreateIndexResponseSchema = z
  .object({
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>ObjectIdentifier</code> of the index created by this operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>CreateIndex</a> response operation.',
    required: [],
  })
  .openapi('BatchCreateIndexResponse')

const BatchAttachToIndexResponseSchema = z
  .object({
    AttachedObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ObjectIdentifier</code> of the object that was attached to the index.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>AttachToIndex</a> response operation.',
    required: [],
  })
  .openapi('BatchAttachToIndexResponse')

const BatchDetachFromIndexResponseSchema = z
  .object({
    DetachedObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ObjectIdentifier</code> of the object that was detached from the index.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>DetachFromIndex</a> response operation.',
    required: [],
  })
  .openapi('BatchDetachFromIndexResponse')

const BatchAttachTypedLinkResponseSchema = z
  .object({
    TypedLinkSpecifier: TypedLinkSpecifierSchema.and(
      z.any().openapi({ description: 'Returns a typed link specifier as output.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <a>AttachTypedLink</a> response operation.',
    required: [],
  })
  .openapi('BatchAttachTypedLinkResponse')

const BatchDetachTypedLinkResponseSchema = z
  .object({})
  .openapi({ description: 'Represents the output of a <a>DetachTypedLink</a> response operation.' })
  .openapi('BatchDetachTypedLinkResponse')

const BatchUpdateLinkAttributesResponseSchema = z
  .object({})
  .openapi({
    description: 'Represents the output of a <a>UpdateLinkAttributes</a> response operation.',
  })
  .openapi('BatchUpdateLinkAttributesResponse')

const BatchWriteOperationResponseSchema = z
  .object({
    CreateObject: BatchCreateObjectResponseSchema.and(
      z.any().openapi({ description: 'Creates an object in a <a>Directory</a>.' }),
    ).exactOptional(),
    AttachObject: BatchAttachObjectResponseSchema.and(
      z.any().openapi({ description: 'Attaches an object to a <a>Directory</a>.' }),
    ).exactOptional(),
    DetachObject: BatchDetachObjectResponseSchema.and(
      z.any().openapi({ description: 'Detaches an object from a <a>Directory</a>.' }),
    ).exactOptional(),
    UpdateObjectAttributes: BatchUpdateObjectAttributesResponseSchema.and(
      z.any().openapi({ description: 'Updates a given object’s attributes.' }),
    ).exactOptional(),
    DeleteObject: BatchDeleteObjectResponseSchema.and(
      z.any().openapi({ description: 'Deletes an object in a <a>Directory</a>.' }),
    ).exactOptional(),
    AddFacetToObject: BatchAddFacetToObjectResponseSchema.and(
      z.any().openapi({ description: 'The result of an add facet to object batch operation.' }),
    ).exactOptional(),
    RemoveFacetFromObject: BatchRemoveFacetFromObjectResponseSchema.and(
      z.any().openapi({ description: 'The result of a batch remove facet from object operation.' }),
    ).exactOptional(),
    AttachPolicy: BatchAttachPolicyResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attaches a policy object to a regular object. An object can have a limited number of attached policies.',
        }),
    ).exactOptional(),
    DetachPolicy: BatchDetachPolicyResponseSchema.and(
      z.any().openapi({ description: 'Detaches a policy from a <a>Directory</a>.' }),
    ).exactOptional(),
    CreateIndex: BatchCreateIndexResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.',
        }),
    ).exactOptional(),
    AttachToIndex: BatchAttachToIndexResponseSchema.and(
      z.any().openapi({ description: 'Attaches the specified object to the specified index.' }),
    ).exactOptional(),
    DetachFromIndex: BatchDetachFromIndexResponseSchema.and(
      z.any().openapi({ description: 'Detaches the specified object from the specified index.' }),
    ).exactOptional(),
    AttachTypedLink: BatchAttachTypedLinkResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ).exactOptional(),
    DetachTypedLink: BatchDetachTypedLinkResponseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ).exactOptional(),
    UpdateLinkAttributes: BatchUpdateLinkAttributesResponseSchema.and(
      z
        .any()
        .openapi({
          description: 'Represents the output of a <code>BatchWrite</code> response operation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchWrite</code> response operation.',
    required: [],
  })
  .openapi('BatchWriteOperationResponse')

const BatchWriteOperationResponseListSchema = z
  .array(BatchWriteOperationResponseSchema)
  .openapi('BatchWriteOperationResponseList')

const BatchWriteResponseSchema = z
  .object({
    Responses: BatchWriteOperationResponseListSchema.and(
      z.any().openapi({ description: 'A list of all the responses for each batch write.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchWriteResponse')

const BatchReferenceNameSchema = z.string().openapi('BatchReferenceName')

const BatchCreateObjectSchema = z
  .object({
    SchemaFacet: SchemaFacetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>FacetArns</code> that will be associated with the object. For more information, see <a>arns</a>.',
        }),
    ),
    ObjectAttributeList: AttributeKeyAndValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An attribute map, which contains an attribute ARN as the key and attribute value as the map value.',
        }),
    ),
    ParentReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'If specified, the parent reference to which this object will be attached.',
        }),
    ).exactOptional(),
    LinkName: LinkNameSchema.and(
      z.any().openapi({ description: 'The name of the link.' }),
    ).exactOptional(),
    BatchReferenceName: BatchReferenceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SchemaFacet', 'ObjectAttributeList'],
    description: 'Represents the output of a <a>CreateObject</a> operation.',
  })
  .openapi('BatchCreateObject')

const BatchAttachObjectSchema = z
  .object({
    ParentReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The parent object reference.' }),
    ),
    ChildReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'The child object reference that is to be attached to the object.',
        }),
    ),
    LinkName: LinkNameSchema.and(z.any().openapi({ description: 'The name of the link.' })),
  })
  .openapi({
    required: ['ParentReference', 'ChildReference', 'LinkName'],
    description: 'Represents the output of an <a>AttachObject</a> operation.',
  })
  .openapi('BatchAttachObject')

const BatchDetachObjectSchema = z
  .object({
    ParentReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Parent reference from which the object with the specified link name is detached.',
        }),
    ),
    LinkName: LinkNameSchema.and(z.any().openapi({ description: 'The name of the link.' })),
    BatchReferenceName: BatchReferenceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ParentReference', 'LinkName'],
    description: 'Represents the output of a <a>DetachObject</a> operation.',
  })
  .openapi('BatchDetachObject')

const UpdateActionTypeSchema = z.enum(['CREATE_OR_UPDATE', 'DELETE']).openapi('UpdateActionType')

const ObjectAttributeActionSchema = z
  .object({
    ObjectAttributeActionType: UpdateActionTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'A type that can be either <code>Update</code> or <code>Delete</code>.',
        }),
    ).exactOptional(),
    ObjectAttributeUpdateValue: TypedAttributeValueSchema.and(
      z.any().openapi({ description: 'The value that you want to update to.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The action to take on the object attribute.', required: [] })
  .openapi('ObjectAttributeAction')

const ObjectAttributeUpdateSchema = z
  .object({
    ObjectAttributeKey: AttributeKeySchema.and(
      z.any().openapi({ description: 'The key of the attribute being updated.' }),
    ).exactOptional(),
    ObjectAttributeAction: ObjectAttributeActionSchema.and(
      z.any().openapi({ description: 'The action to perform as part of the attribute update.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Structure that contains attribute update information.', required: [] })
  .openapi('ObjectAttributeUpdate')

const ObjectAttributeUpdateListSchema = z
  .array(ObjectAttributeUpdateSchema)
  .openapi('ObjectAttributeUpdateList')

const BatchUpdateObjectAttributesSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'Reference that identifies the object.' }),
    ),
    AttributeUpdates: ObjectAttributeUpdateListSchema.and(
      z.any().openapi({ description: 'Attributes update structure.' }),
    ),
  })
  .openapi({
    required: ['ObjectReference', 'AttributeUpdates'],
    description: 'Represents the output of a <code>BatchUpdate</code> operation. ',
  })
  .openapi('BatchUpdateObjectAttributes')

const BatchDeleteObjectSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The reference that identifies the object.' }),
    ),
  })
  .openapi({
    required: ['ObjectReference'],
    description: 'Represents the output of a <a>DeleteObject</a> operation.',
  })
  .openapi('BatchDeleteObject')

const BatchAddFacetToObjectSchema = z
  .object({
    SchemaFacet: SchemaFacetSchema.and(
      z.any().openapi({ description: 'Represents the facet being added to the object.' }),
    ),
    ObjectAttributeList: AttributeKeyAndValueListSchema.and(
      z.any().openapi({ description: 'The attributes to set on the object.' }),
    ),
    ObjectReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the object being mutated.' }),
    ),
  })
  .openapi({
    required: ['SchemaFacet', 'ObjectAttributeList', 'ObjectReference'],
    description: 'Represents the output of a batch add facet to object operation.',
  })
  .openapi('BatchAddFacetToObject')

const BatchRemoveFacetFromObjectSchema = z
  .object({
    SchemaFacet: SchemaFacetSchema.and(
      z.any().openapi({ description: 'The facet to remove from the object.' }),
    ),
    ObjectReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the object whose facet will be removed.' }),
    ),
  })
  .openapi({
    required: ['SchemaFacet', 'ObjectReference'],
    description: 'A batch operation to remove a facet from an object.',
  })
  .openapi('BatchRemoveFacetFromObject')

const BatchAttachPolicySchema = z
  .object({
    PolicyReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The reference that is associated with the policy object.' }),
    ),
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference that identifies the object to which the policy will be attached.',
        }),
    ),
  })
  .openapi({
    required: ['PolicyReference', 'ObjectReference'],
    description:
      'Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchAttachPolicy')

const BatchDetachPolicySchema = z
  .object({
    PolicyReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'Reference that identifies the policy object.' }),
    ),
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Reference that identifies the object whose policy object will be detached.',
        }),
    ),
  })
  .openapi({
    required: ['PolicyReference', 'ObjectReference'],
    description:
      'Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.',
  })
  .openapi('BatchDetachPolicy')

const AttributeKeyListSchema = z.array(AttributeKeySchema).openapi('AttributeKeyList')

const BoolSchema = z.boolean().openapi('Bool')

const BatchCreateIndexSchema = z
  .object({
    OrderedIndexedAttributeList: AttributeKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the attributes that should be indexed on. Currently only a single attribute is supported.',
        }),
    ),
    IsUnique: BoolSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the attribute that is being indexed has unique values or not.',
        }),
    ),
    ParentReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'A reference to the parent object that contains the index object.',
        }),
    ).exactOptional(),
    LinkName: LinkNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the link between the parent object and the index object.',
        }),
    ).exactOptional(),
    BatchReferenceName: BatchReferenceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The batch reference name. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/transaction_support.html">Transaction Support</a> for more information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrderedIndexedAttributeList', 'IsUnique'],
    description:
      'Creates an index object inside of a <a>BatchRead</a> operation. For more information, see <a>CreateIndex</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchCreateIndex')

const BatchAttachToIndexSchema = z
  .object({
    IndexReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({ description: 'A reference to the index that you are attaching the object to.' }),
    ),
    TargetReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({ description: 'A reference to the object that you are attaching to the index.' }),
    ),
  })
  .openapi({
    required: ['IndexReference', 'TargetReference'],
    description:
      'Attaches the specified object to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>AttachToIndex</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchAttachToIndex')

const BatchDetachFromIndexSchema = z
  .object({
    IndexReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the index object.' }),
    ),
    TargetReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the object being detached from the index.' }),
    ),
  })
  .openapi({
    required: ['IndexReference', 'TargetReference'],
    description:
      'Detaches the specified object from the specified index inside a <a>BatchRead</a> operation. For more information, see <a>DetachFromIndex</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchDetachFromIndex')

const BatchAttachTypedLinkSchema = z
  .object({
    SourceObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the source object that the typed link will attach to.',
        }),
    ),
    TargetObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the target object that the typed link will attach to.',
        }),
    ),
    TypedLinkFacet: TypedLinkSchemaAndFacetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the typed link facet that is associated with the typed link.',
        }),
    ),
    Attributes: AttributeNameAndValueListSchema.and(
      z
        .any()
        .openapi({ description: 'A set of attributes that are associated with the typed link.' }),
    ),
  })
  .openapi({
    required: ['SourceObjectReference', 'TargetObjectReference', 'TypedLinkFacet', 'Attributes'],
    description:
      'Attaches a typed link to a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>AttachTypedLink</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchAttachTypedLink')

const BatchDetachTypedLinkSchema = z
  .object({
    TypedLinkSpecifier: TypedLinkSpecifierSchema.and(
      z.any().openapi({ description: 'Used to accept a typed link specifier as input.' }),
    ),
  })
  .openapi({
    required: ['TypedLinkSpecifier'],
    description:
      'Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchDetachTypedLink')

const LinkAttributeActionSchema = z
  .object({
    AttributeActionType: UpdateActionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A type that can be either <code>UPDATE_OR_CREATE</code> or <code>DELETE</code>.',
        }),
    ).exactOptional(),
    AttributeUpdateValue: TypedAttributeValueSchema.and(
      z.any().openapi({ description: 'The value that you want to update to.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.',
    required: [],
  })
  .openapi('LinkAttributeAction')

const LinkAttributeUpdateSchema = z
  .object({
    AttributeKey: AttributeKeySchema.and(
      z.any().openapi({ description: 'The key of the attribute being updated.' }),
    ).exactOptional(),
    AttributeAction: LinkAttributeActionSchema.and(
      z.any().openapi({ description: 'The action to perform as part of the attribute update.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Structure that contains attribute update information.', required: [] })
  .openapi('LinkAttributeUpdate')

const LinkAttributeUpdateListSchema = z
  .array(LinkAttributeUpdateSchema)
  .openapi('LinkAttributeUpdateList')

const BatchUpdateLinkAttributesSchema = z
  .object({
    TypedLinkSpecifier: TypedLinkSpecifierSchema.and(
      z.any().openapi({ description: 'Allows a typed link specifier to be accepted as input.' }),
    ),
    AttributeUpdates: LinkAttributeUpdateListSchema.and(
      z.any().openapi({ description: 'The attributes update structure.' }),
    ),
  })
  .openapi({
    required: ['TypedLinkSpecifier', 'AttributeUpdates'],
    description:
      'Updates a given typed link’s attributes inside a <a>BatchRead</a> operation. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>. For more information, see <a>UpdateLinkAttributes</a> and <a>BatchReadRequest$Operations</a>.',
  })
  .openapi('BatchUpdateLinkAttributes')

const BatchWriteOperationSchema = z
  .object({
    CreateObject: BatchCreateObjectSchema.and(
      z.any().openapi({ description: 'Creates an object.' }),
    ).exactOptional(),
    AttachObject: BatchAttachObjectSchema.and(
      z.any().openapi({ description: 'Attaches an object to a <a>Directory</a>.' }),
    ).exactOptional(),
    DetachObject: BatchDetachObjectSchema.and(
      z.any().openapi({ description: 'Detaches an object from a <a>Directory</a>.' }),
    ).exactOptional(),
    UpdateObjectAttributes: BatchUpdateObjectAttributesSchema.and(
      z.any().openapi({ description: "Updates a given object's attributes." }),
    ).exactOptional(),
    DeleteObject: BatchDeleteObjectSchema.and(
      z.any().openapi({ description: 'Deletes an object in a <a>Directory</a>.' }),
    ).exactOptional(),
    AddFacetToObject: BatchAddFacetToObjectSchema.and(
      z.any().openapi({ description: 'A batch operation that adds a facet to an object.' }),
    ).exactOptional(),
    RemoveFacetFromObject: BatchRemoveFacetFromObjectSchema.and(
      z.any().openapi({ description: 'A batch operation that removes a facet from an object.' }),
    ).exactOptional(),
    AttachPolicy: BatchAttachPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Attaches a policy object to a regular object. An object can have a limited number of attached policies.',
        }),
    ).exactOptional(),
    DetachPolicy: BatchDetachPolicySchema.and(
      z.any().openapi({ description: 'Detaches a policy from a <a>Directory</a>.' }),
    ).exactOptional(),
    CreateIndex: BatchCreateIndexSchema.and(
      z
        .any()
        .openapi({
          description:
            'Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.htm">Indexing and search</a> for more information.',
        }),
    ).exactOptional(),
    AttachToIndex: BatchAttachToIndexSchema.and(
      z.any().openapi({ description: 'Attaches the specified object to the specified index.' }),
    ).exactOptional(),
    DetachFromIndex: BatchDetachFromIndexSchema.and(
      z.any().openapi({ description: 'Detaches the specified object from the specified index.' }),
    ).exactOptional(),
    AttachTypedLink: BatchAttachTypedLinkSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ).exactOptional(),
    DetachTypedLink: BatchDetachTypedLinkSchema.and(
      z
        .any()
        .openapi({
          description:
            'Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ).exactOptional(),
    UpdateLinkAttributes: BatchUpdateLinkAttributesSchema.and(
      z.any().openapi({ description: "Updates a given object's attributes." }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents the output of a <code>BatchWrite</code> operation. ',
    required: [],
  })
  .openapi('BatchWriteOperation')

const BatchWriteExceptionSchema = z.any().openapi('BatchWriteException')

const DirectoryArnSchema = z.string().openapi('DirectoryArn')

const DirectoryNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._-]*$/)
  .min(1)
  .max(64)
  .openapi('DirectoryName')

const CreateDirectoryResponseSchema = z
  .object({
    DirectoryArn: DirectoryArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.',
        }),
    ),
    Name: DirectoryNameSchema.and(
      z.any().openapi({ description: 'The name of the <a>Directory</a>.' }),
    ),
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z.any().openapi({ description: 'The root object node of the created directory.' }),
    ),
    AppliedSchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the published schema in the <a>Directory</a>. Once a published schema is copied into the directory, it has its own ARN, which is referred to applied schema ARN. For more information, see <a>arns</a>.',
        }),
    ),
  })
  .openapi({ required: ['DirectoryArn', 'Name', 'ObjectIdentifier', 'AppliedSchemaArn'] })
  .openapi('CreateDirectoryResponse')

const DirectoryAlreadyExistsExceptionSchema = z.any().openapi('DirectoryAlreadyExistsException')

const CreateFacetResponseSchema = z.object({}).openapi('CreateFacetResponse')

const FacetAttributeTypeSchema = z
  .enum(['STRING', 'BINARY', 'BOOLEAN', 'NUMBER', 'DATETIME', 'VARIANT'])
  .openapi('FacetAttributeType')

const RuleTypeSchema = z
  .enum(['BINARY_LENGTH', 'NUMBER_COMPARISON', 'STRING_FROM_SET', 'STRING_LENGTH'])
  .openapi('RuleType')

const RuleParameterValueSchema = z.string().openapi('RuleParameterValue')

const RuleParameterMapSchema = z
  .record(z.string(), RuleParameterValueSchema)
  .openapi('RuleParameterMap')

const RuleSchema = z
  .object({
    Type: RuleTypeSchema.and(
      z.any().openapi({ description: 'The type of attribute validation rule.' }),
    ).exactOptional(),
    Parameters: RuleParameterMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The minimum and maximum parameters that are associated with the rule.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains an Amazon Resource Name (ARN) and parameters that are associated with the rule.',
    required: [],
  })
  .openapi('Rule')

const RuleMapSchema = z.record(z.string(), RuleSchema).openapi('RuleMap')

const FacetAttributeDefinitionSchema = z
  .object({
    Type: FacetAttributeTypeSchema.and(
      z.any().openapi({ description: 'The type of the attribute.' }),
    ),
    DefaultValue: TypedAttributeValueSchema.and(
      z.any().openapi({ description: 'The default value of the attribute (if configured).' }),
    ).exactOptional(),
    IsImmutable: BoolSchema.and(
      z.any().openapi({ description: 'Whether the attribute is mutable or not.' }),
    ).exactOptional(),
    Rules: RuleMapSchema.and(
      z.any().openapi({ description: 'Validation rules attached to the attribute definition.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Type'],
    description:
      'A facet attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.',
  })
  .openapi('FacetAttributeDefinition')

const FacetAttributeReferenceSchema = z
  .object({
    TargetFacetName: FacetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target facet name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.',
        }),
    ),
    TargetAttributeName: AttributeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The target attribute name that is associated with the facet reference. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.',
        }),
    ),
  })
  .openapi({
    required: ['TargetFacetName', 'TargetAttributeName'],
    description:
      'The facet attribute reference that specifies the attribute definition that contains the attribute facet name and attribute name.',
  })
  .openapi('FacetAttributeReference')

const RequiredAttributeBehaviorSchema = z
  .enum(['REQUIRED_ALWAYS', 'NOT_REQUIRED'])
  .openapi('RequiredAttributeBehavior')

const FacetAttributeSchema = z
  .object({
    Name: AttributeNameSchema.and(
      z.any().openapi({ description: 'The name of the facet attribute.' }),
    ),
    AttributeDefinition: FacetAttributeDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A facet attribute consists of either a definition or a reference. This structure contains the attribute definition. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.',
        }),
    ).exactOptional(),
    AttributeReference: FacetAttributeReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'An attribute reference that is associated with the attribute. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_attributereferences.html">Attribute References</a> for more information.',
        }),
    ).exactOptional(),
    RequiredBehavior: RequiredAttributeBehaviorSchema.and(
      z.any().openapi({ description: 'The required behavior of the <code>FacetAttribute</code>.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description: 'An attribute that is associated with the <a>Facet</a>.',
  })
  .openapi('FacetAttribute')

const FacetAlreadyExistsExceptionSchema = z.any().openapi('FacetAlreadyExistsException')

const InvalidRuleExceptionSchema = z.any().openapi('InvalidRuleException')

const CreateIndexResponseSchema = z
  .object({
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>ObjectIdentifier</code> of the index created by this operation.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateIndexResponse')

const UnsupportedIndexTypeExceptionSchema = z.any().openapi('UnsupportedIndexTypeException')

const CreateObjectResponseSchema = z
  .object({
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z.any().openapi({ description: 'The identifier that is associated with the object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateObjectResponse')

const CreateSchemaResponseSchema = z
  .object({
    SchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateSchemaResponse')

const CreateTypedLinkFacetResponseSchema = z.object({}).openapi('CreateTypedLinkFacetResponse')

const TypedLinkAttributeDefinitionSchema = z
  .object({
    Name: AttributeNameSchema.and(
      z.any().openapi({ description: 'The unique name of the typed link attribute.' }),
    ),
    Type: FacetAttributeTypeSchema.and(
      z.any().openapi({ description: 'The type of the attribute.' }),
    ),
    DefaultValue: TypedAttributeValueSchema.and(
      z.any().openapi({ description: 'The default value of the attribute (if configured).' }),
    ).exactOptional(),
    IsImmutable: BoolSchema.and(
      z.any().openapi({ description: 'Whether the attribute is mutable or not.' }),
    ).exactOptional(),
    Rules: RuleMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Validation rules that are attached to the attribute definition.',
        }),
    ).exactOptional(),
    RequiredBehavior: RequiredAttributeBehaviorSchema.and(
      z
        .any()
        .openapi({
          description: 'The required behavior of the <code>TypedLinkAttributeDefinition</code>.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Type', 'RequiredBehavior'],
    description: 'A typed link attribute definition.',
  })
  .openapi('TypedLinkAttributeDefinition')

const TypedLinkAttributeDefinitionListSchema = z
  .array(TypedLinkAttributeDefinitionSchema)
  .openapi('TypedLinkAttributeDefinitionList')

const DeleteDirectoryResponseSchema = z
  .object({
    DirectoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the deleted directory.' }),
    ),
  })
  .openapi({ required: ['DirectoryArn'] })
  .openapi('DeleteDirectoryResponse')

const DirectoryNotDisabledExceptionSchema = z.any().openapi('DirectoryNotDisabledException')

const DirectoryDeletedExceptionSchema = z.any().openapi('DirectoryDeletedException')

const DeleteFacetResponseSchema = z.object({}).openapi('DeleteFacetResponse')

const FacetNotFoundExceptionSchema = z.any().openapi('FacetNotFoundException')

const FacetInUseExceptionSchema = z.any().openapi('FacetInUseException')

const DeleteObjectResponseSchema = z.object({}).openapi('DeleteObjectResponse')

const ObjectNotDetachedExceptionSchema = z.any().openapi('ObjectNotDetachedException')

const DeleteSchemaResponseSchema = z
  .object({
    SchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The input ARN that is returned as part of the response. For more information, see <a>arns</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteSchemaResponse')

const StillContainsLinksExceptionSchema = z.any().openapi('StillContainsLinksException')

const DeleteTypedLinkFacetResponseSchema = z.object({}).openapi('DeleteTypedLinkFacetResponse')

const DetachFromIndexResponseSchema = z
  .object({
    DetachedObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>ObjectIdentifier</code> of the object that was detached from the index.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetachFromIndexResponse')

const ObjectAlreadyDetachedExceptionSchema = z.any().openapi('ObjectAlreadyDetachedException')

const DetachObjectResponseSchema = z
  .object({
    DetachedObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>ObjectIdentifier</code> that was detached from the object.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DetachObjectResponse')

const NotNodeExceptionSchema = z.any().openapi('NotNodeException')

const DetachPolicyResponseSchema = z.object({}).openapi('DetachPolicyResponse')

const DisableDirectoryResponseSchema = z
  .object({
    DirectoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the directory that has been disabled.' }),
    ),
  })
  .openapi({ required: ['DirectoryArn'] })
  .openapi('DisableDirectoryResponse')

const EnableDirectoryResponseSchema = z
  .object({
    DirectoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the enabled directory.' }),
    ),
  })
  .openapi({ required: ['DirectoryArn'] })
  .openapi('EnableDirectoryResponse')

const GetAppliedSchemaVersionResponseSchema = z
  .object({
    AppliedSchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Current applied schema ARN, including the minor version in use if one was provided.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAppliedSchemaVersionResponse')

const DirectoryStateSchema = z.enum(['ENABLED', 'DISABLED', 'DELETED']).openapi('DirectoryState')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const DirectorySchema = z
  .object({
    Name: DirectoryNameSchema.and(
      z.any().openapi({ description: 'The name of the directory.' }),
    ).exactOptional(),
    DirectoryArn: DirectoryArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that is associated with the directory. For more information, see <a>arns</a>.',
        }),
    ).exactOptional(),
    State: DirectoryStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the directory. Can be either <code>Enabled</code>, <code>Disabled</code>, or <code>Deleted</code>.',
        }),
    ).exactOptional(),
    CreationDateTime: DateSchema.and(
      z.any().openapi({ description: 'The date and time when the directory was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Directory structure that includes the directory name and directory ARN.',
    required: [],
  })
  .openapi('Directory')

const GetDirectoryResponseSchema = z
  .object({
    Directory: DirectorySchema.and(
      z.any().openapi({ description: 'Metadata about the directory.' }),
    ),
  })
  .openapi({ required: ['Directory'] })
  .openapi('GetDirectoryResponse')

const ObjectTypeSchema = z.enum(['NODE', 'LEAF_NODE', 'POLICY', 'INDEX']).openapi('ObjectType')

const FacetStyleSchema = z.enum(['STATIC', 'DYNAMIC']).openapi('FacetStyle')

const FacetSchema = z
  .object({
    Name: FacetNameSchema.and(
      z.any().openapi({ description: 'The name of the <a>Facet</a>.' }),
    ).exactOptional(),
    ObjectType: ObjectTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.',
        }),
    ).exactOptional(),
    FacetStyle: FacetStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            'There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that contains <code>Name</code>, <code>ARN</code>, <code>Attributes</code>, <code> <a>Rule</a>s</code>, and <code>ObjectTypes</code>. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_whatarefacets.html">Facets</a> for more information.',
    required: [],
  })
  .openapi('Facet')

const GetFacetResponseSchema = z
  .object({
    Facet: FacetSchema.and(
      z
        .any()
        .openapi({ description: 'The <a>Facet</a> structure that is associated with the facet.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFacetResponse')

const GetLinkAttributesResponseSchema = z
  .object({
    Attributes: AttributeKeyAndValueListSchema.and(
      z.any().openapi({ description: 'The attributes that are associated with the typed link.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLinkAttributesResponse')

const GetObjectAttributesResponseSchema = z
  .object({
    Attributes: AttributeKeyAndValueListSchema.and(
      z.any().openapi({ description: 'The attributes that are associated with the object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetObjectAttributesResponse')

const GetObjectInformationResponseSchema = z
  .object({
    SchemaFacets: SchemaFacetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The facets attached to the specified object. Although the response does not include minor version information, the most recently applied minor version of each Facet is in effect. See <a>GetAppliedSchemaVersion</a> for details.',
        }),
    ).exactOptional(),
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z
        .any()
        .openapi({ description: 'The <code>ObjectIdentifier</code> of the specified object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetObjectInformationResponse')

const SchemaNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._-]*$/)
  .min(1)
  .max(32)
  .openapi('SchemaName')

const SchemaJsonDocumentSchema = z.string().openapi('SchemaJsonDocument')

const GetSchemaAsJsonResponseSchema = z
  .object({
    Name: SchemaNameSchema.and(
      z.any().openapi({ description: 'The name of the retrieved schema.' }),
    ).exactOptional(),
    Document: SchemaJsonDocumentSchema.and(
      z.any().openapi({ description: 'The JSON representation of the schema document.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSchemaAsJsonResponse')

const GetTypedLinkFacetInformationResponseSchema = z
  .object({
    IdentityAttributeOrder: AttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetTypedLinkFacetInformationResponse')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ArnsSchema = z.array(ArnSchema).openapi('Arns')

const ListAppliedSchemaArnsResponseSchema = z
  .object({
    SchemaArns: ArnsSchema.and(
      z.any().openapi({ description: 'The ARNs of schemas that are applied to the directory.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAppliedSchemaArnsResponse')

const ListAttachedIndicesResponseSchema = z
  .object({
    IndexAttachments: IndexAttachmentListSchema.and(
      z.any().openapi({ description: 'The indices attached to the specified object.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAttachedIndicesResponse')

const ListDevelopmentSchemaArnsResponseSchema = z
  .object({
    SchemaArns: ArnsSchema.and(
      z.any().openapi({ description: 'The ARNs of retrieved development schemas.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDevelopmentSchemaArnsResponse')

const DirectoryListSchema = z.array(DirectorySchema).openapi('DirectoryList')

const ListDirectoriesResponseSchema = z
  .object({
    Directories: DirectoryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists all directories that are associated with your account in pagination fashion.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Directories'] })
  .openapi('ListDirectoriesResponse')

const FacetAttributeListSchema = z.array(FacetAttributeSchema).openapi('FacetAttributeList')

const ListFacetAttributesResponseSchema = z
  .object({
    Attributes: FacetAttributeListSchema.and(
      z.any().openapi({ description: 'The attributes attached to the facet.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFacetAttributesResponse')

const FacetNameListSchema = z.array(FacetNameSchema).openapi('FacetNameList')

const ListFacetNamesResponseSchema = z
  .object({
    FacetNames: FacetNameListSchema.and(
      z.any().openapi({ description: 'The names of facets that exist within the schema.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFacetNamesResponse')

const ListIncomingTypedLinksResponseSchema = z
  .object({
    LinkSpecifiers: TypedLinkSpecifierListSchema.and(
      z.any().openapi({ description: 'Returns one or more typed link specifiers as output.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListIncomingTypedLinksResponse')

const ListIndexResponseSchema = z
  .object({
    IndexAttachments: IndexAttachmentListSchema.and(
      z.any().openapi({ description: 'The objects and indexed values attached to the index.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListIndexResponse')

const ListManagedSchemaArnsResponseSchema = z
  .object({
    SchemaArns: ArnsSchema.and(
      z.any().openapi({ description: 'The ARNs for all AWS managed schemas.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListManagedSchemaArnsResponse')

const ListObjectAttributesResponseSchema = z
  .object({
    Attributes: AttributeKeyAndValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes map that is associated with the object. <code>AttributeArn</code> is the key, and attribute value is the value.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListObjectAttributesResponse')

const ListObjectChildrenResponseSchema = z
  .object({
    Children: LinkNameToObjectIdentifierMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Children structure, which is a map with key as the <code>LinkName</code> and <code>ObjectIdentifier</code> as the value.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListObjectChildrenResponse')

const ListObjectParentPathsResponseSchema = z
  .object({
    PathToObjectIdentifiersList: PathToObjectIdentifiersListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns the path to the <code>ObjectIdentifiers</code> that are associated with the directory.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListObjectParentPathsResponse')

const ObjectIdentifierToLinkNameMapSchema = z
  .record(z.string(), LinkNameSchema)
  .openapi('ObjectIdentifierToLinkNameMap')

const ListObjectParentsResponseSchema = z
  .object({
    Parents: ObjectIdentifierToLinkNameMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parent structure, which is a map with key as the <code>ObjectIdentifier</code> and LinkName as the value.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    ParentLinks: ObjectIdentifierAndLinkNameListSchema.and(
      z.any().openapi({ description: 'Returns a list of parent reference and LinkName Tuples.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListObjectParentsResponse')

const CannotListParentOfRootExceptionSchema = z.any().openapi('CannotListParentOfRootException')

const ListObjectPoliciesResponseSchema = z
  .object({
    AttachedPolicyIds: ObjectIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of policy <code>ObjectIdentifiers</code>, that are attached to the object.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListObjectPoliciesResponse')

const ListOutgoingTypedLinksResponseSchema = z
  .object({
    TypedLinkSpecifiers: TypedLinkSpecifierListSchema.and(
      z.any().openapi({ description: 'Returns a typed link specifier as output.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOutgoingTypedLinksResponse')

const ListPolicyAttachmentsResponseSchema = z
  .object({
    ObjectIdentifiers: ObjectIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code>ObjectIdentifiers</code> to which the policy is attached.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPolicyAttachmentsResponse')

const ListPublishedSchemaArnsResponseSchema = z
  .object({
    SchemaArns: ArnsSchema.and(
      z.any().openapi({ description: 'The ARNs of published schemas.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPublishedSchemaArnsResponse')

const TagKeySchema = z.string().openapi('TagKey')

const TagValueSchema = z.string().openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z.any().openapi({ description: 'The key that is associated with the tag.' }),
    ).exactOptional(),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value that is associated with the tag.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The tag structure that contains a tag key and value.', required: [] })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of tag key value pairs that are associated with the response.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token to use to retrieve the next page of results. This value is null when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const InvalidTaggingRequestExceptionSchema = z.any().openapi('InvalidTaggingRequestException')

const ListTypedLinkFacetAttributesResponseSchema = z
  .object({
    Attributes: TypedLinkAttributeDefinitionListSchema.and(
      z
        .any()
        .openapi({ description: 'An ordered set of attributes associate with the typed link.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTypedLinkFacetAttributesResponse')

const TypedLinkNameListSchema = z.array(TypedLinkNameSchema).openapi('TypedLinkNameList')

const ListTypedLinkFacetNamesResponseSchema = z
  .object({
    FacetNames: TypedLinkNameListSchema.and(
      z
        .any()
        .openapi({ description: 'The names of typed link facets that exist within the schema.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTypedLinkFacetNamesResponse')

const LookupPolicyResponseSchema = z
  .object({
    PolicyToPathList: PolicyToPathListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides list of path to policies. Policies contain <code>PolicyId</code>, <code>ObjectIdentifier</code>, and <code>PolicyType</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LookupPolicyResponse')

const PublishSchemaResponseSchema = z
  .object({
    PublishedSchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN that is associated with the published schema. For more information, see <a>arns</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishSchemaResponse')

const SchemaAlreadyPublishedExceptionSchema = z.any().openapi('SchemaAlreadyPublishedException')

const PutSchemaFromJsonResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the schema to update.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutSchemaFromJsonResponse')

const InvalidSchemaDocExceptionSchema = z.any().openapi('InvalidSchemaDocException')

const RemoveFacetFromObjectResponseSchema = z.object({}).openapi('RemoveFacetFromObjectResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const UpdateFacetResponseSchema = z.object({}).openapi('UpdateFacetResponse')

const FacetAttributeUpdateSchema = z
  .object({
    Attribute: FacetAttributeSchema.and(
      z.any().openapi({ description: 'The attribute to update.' }),
    ).exactOptional(),
    Action: UpdateActionTypeSchema.and(
      z.any().openapi({ description: 'The action to perform when updating the attribute.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A structure that contains information used to update an attribute.',
    required: [],
  })
  .openapi('FacetAttributeUpdate')

const InvalidFacetUpdateExceptionSchema = z.any().openapi('InvalidFacetUpdateException')

const UpdateLinkAttributesResponseSchema = z.object({}).openapi('UpdateLinkAttributesResponse')

const UpdateObjectAttributesResponseSchema = z
  .object({
    ObjectIdentifier: ObjectIdentifierSchema.and(
      z.any().openapi({ description: 'The <code>ObjectIdentifier</code> of the updated object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateObjectAttributesResponse')

const UpdateSchemaResponseSchema = z
  .object({
    SchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN that is associated with the updated schema. For more information, see <a>arns</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSchemaResponse')

const UpdateTypedLinkFacetResponseSchema = z.object({}).openapi('UpdateTypedLinkFacetResponse')

const TypedLinkFacetAttributeUpdateSchema = z
  .object({
    Attribute: TypedLinkAttributeDefinitionSchema.and(
      z.any().openapi({ description: 'The attribute to update.' }),
    ),
    Action: UpdateActionTypeSchema.and(
      z.any().openapi({ description: 'The action to perform when updating the attribute.' }),
    ),
  })
  .openapi({
    required: ['Attribute', 'Action'],
    description: 'A typed link facet attribute update.',
  })
  .openapi('TypedLinkFacetAttributeUpdate')

const UpgradeAppliedSchemaResponseSchema = z
  .object({
    UpgradedSchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the upgraded schema that is returned as part of the response.',
        }),
    ).exactOptional(),
    DirectoryArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the directory that is returned as part of the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpgradeAppliedSchemaResponse')

const IncompatibleSchemaExceptionSchema = z.any().openapi('IncompatibleSchemaException')

const UpgradePublishedSchemaResponseSchema = z
  .object({
    UpgradedSchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the upgraded schema that is returned as part of the response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpgradePublishedSchemaResponse')

const AddFacetToObjectRequestSchema = z
  .object({
    SchemaFacet: SchemaFacetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifiers for the facet that you are adding to the object. See <a>SchemaFacet</a> for details.',
        }),
    ),
    ObjectAttributeList: AttributeKeyAndValueListSchema.and(
      z
        .any()
        .openapi({ description: 'Attributes on the facet that you are adding to the object.' }),
    ).exactOptional(),
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'A reference to the object you are adding the specified facet to.',
        }),
    ),
  })
  .openapi({ required: ['SchemaFacet', 'ObjectReference'], title: 'AddFacetToObjectRequest' })
  .openapi('AddFacetToObjectRequest')

const ApplySchemaRequestSchema = z
  .object({
    PublishedSchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see <a>arns</a>.',
        }),
    ),
  })
  .openapi({ required: ['PublishedSchemaArn'], title: 'ApplySchemaRequest' })
  .openapi('ApplySchemaRequest')

const AttachObjectRequestSchema = z
  .object({
    ParentReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The parent object reference.' }),
    ),
    ChildReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The child object reference to be attached to the object.' }),
    ),
    LinkName: LinkNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The link name with which the child object is attached to the parent.',
        }),
    ),
  })
  .openapi({
    required: ['ParentReference', 'ChildReference', 'LinkName'],
    title: 'AttachObjectRequest',
  })
  .openapi('AttachObjectRequest')

const AttachPolicyRequestSchema = z
  .object({
    PolicyReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The reference that is associated with the policy object.' }),
    ),
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference that identifies the object to which the policy will be attached.',
        }),
    ),
  })
  .openapi({ required: ['PolicyReference', 'ObjectReference'], title: 'AttachPolicyRequest' })
  .openapi('AttachPolicyRequest')

const AttachToIndexRequestSchema = z
  .object({
    IndexReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({ description: 'A reference to the index that you are attaching the object to.' }),
    ),
    TargetReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({ description: 'A reference to the object that you are attaching to the index.' }),
    ),
  })
  .openapi({ required: ['IndexReference', 'TargetReference'], title: 'AttachToIndexRequest' })
  .openapi('AttachToIndexRequest')

const AttachTypedLinkRequestSchema = z
  .object({
    SourceObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the source object that the typed link will attach to.',
        }),
    ),
    TargetObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the target object that the typed link will attach to.',
        }),
    ),
    TypedLinkFacet: TypedLinkSchemaAndFacetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'Identifies the typed link facet that is associated with the typed link.',
        }),
    ),
    Attributes: AttributeNameAndValueListSchema.and(
      z
        .any()
        .openapi({ description: 'A set of attributes that are associated with the typed link.' }),
    ),
  })
  .openapi({
    required: ['SourceObjectReference', 'TargetObjectReference', 'TypedLinkFacet', 'Attributes'],
    title: 'AttachTypedLinkRequest',
  })
  .openapi('AttachTypedLinkRequest')

const BatchReadOperationListSchema = z
  .array(BatchReadOperationSchema)
  .openapi('BatchReadOperationList')

const ConsistencyLevelSchema = z.enum(['SERIALIZABLE', 'EVENTUAL']).openapi('ConsistencyLevel')

const BatchReadRequestSchema = z
  .object({
    Operations: BatchReadOperationListSchema.and(
      z.any().openapi({ description: 'A list of operations that are part of the batch.' }),
    ),
  })
  .openapi({ required: ['Operations'], title: 'BatchReadRequest' })
  .openapi('BatchReadRequest')

const BatchWriteOperationListSchema = z
  .array(BatchWriteOperationSchema)
  .openapi('BatchWriteOperationList')

const BatchWriteRequestSchema = z
  .object({
    Operations: BatchWriteOperationListSchema.and(
      z.any().openapi({ description: 'A list of operations that are part of the batch.' }),
    ),
  })
  .openapi({ required: ['Operations'], title: 'BatchWriteRequest' })
  .openapi('BatchWriteRequest')

const CreateDirectoryRequestSchema = z
  .object({
    Name: DirectoryNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the <a>Directory</a>. Should be unique per account, per region.',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'CreateDirectoryRequest' })
  .openapi('CreateDirectoryRequest')

const CreateFacetRequestSchema = z
  .object({
    Name: FacetNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the <a>Facet</a>, which is unique for a given schema.',
        }),
    ),
    Attributes: FacetAttributeListSchema.and(
      z.any().openapi({ description: 'The attributes that are associated with the <a>Facet</a>.' }),
    ).exactOptional(),
    ObjectType: ObjectTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether a given object created from this facet is of type node, leaf node, policy or index.</p> <ul> <li> <p>Node: Can have multiple children but one parent.</p> </li> </ul> <ul> <li> <p>Leaf node: Cannot have children but can have multiple parents.</p> </li> </ul> <ul> <li> <p>Policy: Allows you to store a policy document and policy type. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p> </li> </ul> <ul> <li> <p>Index: Can be created with the Index API.</p> </li> </ul>',
        }),
    ).exactOptional(),
    FacetStyle: FacetStyleSchema.and(
      z
        .any()
        .openapi({
          description:
            'There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateFacetRequest' })
  .openapi('CreateFacetRequest')

const CreateIndexRequestSchema = z
  .object({
    OrderedIndexedAttributeList: AttributeKeyListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the attributes that should be indexed on. Currently only a single attribute is supported.',
        }),
    ),
    IsUnique: BoolSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the attribute that is being indexed has unique values or not.',
        }),
    ),
    ParentReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'A reference to the parent object that contains the index object.',
        }),
    ).exactOptional(),
    LinkName: LinkNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the link between the parent object and the index object.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrderedIndexedAttributeList', 'IsUnique'], title: 'CreateIndexRequest' })
  .openapi('CreateIndexRequest')

const CreateObjectRequestSchema = z
  .object({
    SchemaFacets: SchemaFacetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.',
        }),
    ),
    ObjectAttributeList: AttributeKeyAndValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The attribute map whose attribute ARN contains the key and attribute value as the map value.',
        }),
    ).exactOptional(),
    ParentReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'If specified, the parent reference to which this object will be attached.',
        }),
    ).exactOptional(),
    LinkName: LinkNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of link that is used to attach this object to a parent.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['SchemaFacets'], title: 'CreateObjectRequest' })
  .openapi('CreateObjectRequest')

const CreateSchemaRequestSchema = z
  .object({
    Name: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that is associated with the schema. This is unique to each account and in each region.',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'CreateSchemaRequest' })
  .openapi('CreateSchemaRequest')

const TypedLinkFacetSchema = z
  .object({
    Name: TypedLinkNameSchema.and(
      z.any().openapi({ description: 'The unique name of the typed link facet.' }),
    ),
    Attributes: TypedLinkAttributeDefinitionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.',
        }),
    ),
    IdentityAttributeOrder: AttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See <a>ListOutgoingTypedLinks</a> and <a>ListIncomingTypedLinks</a> for details.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Attributes', 'IdentityAttributeOrder'],
    description:
      'Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.',
  })
  .openapi('TypedLinkFacet')

const CreateTypedLinkFacetRequestSchema = z
  .object({
    Facet: TypedLinkFacetSchema.and(
      z
        .any()
        .openapi({
          description: ' <a>Facet</a> structure that is associated with the typed link facet.',
        }),
    ),
  })
  .openapi({ required: ['Facet'], title: 'CreateTypedLinkFacetRequest' })
  .openapi('CreateTypedLinkFacetRequest')

const DeleteDirectoryRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDirectoryRequest' })
  .openapi('DeleteDirectoryRequest')

const DeleteFacetRequestSchema = z
  .object({
    Name: FacetNameSchema.and(z.any().openapi({ description: 'The name of the facet to delete.' })),
  })
  .openapi({ required: ['Name'], title: 'DeleteFacetRequest' })
  .openapi('DeleteFacetRequest')

const DeleteObjectRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference that identifies the object.' }),
    ),
  })
  .openapi({ required: ['ObjectReference'], title: 'DeleteObjectRequest' })
  .openapi('DeleteObjectRequest')

const DeleteSchemaRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteSchemaRequest' })
  .openapi('DeleteSchemaRequest')

const DeleteTypedLinkFacetRequestSchema = z
  .object({
    Name: TypedLinkNameSchema.and(
      z.any().openapi({ description: 'The unique name of the typed link facet.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'DeleteTypedLinkFacetRequest' })
  .openapi('DeleteTypedLinkFacetRequest')

const DetachFromIndexRequestSchema = z
  .object({
    IndexReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the index object.' }),
    ),
    TargetReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the object being detached from the index.' }),
    ),
  })
  .openapi({ required: ['IndexReference', 'TargetReference'], title: 'DetachFromIndexRequest' })
  .openapi('DetachFromIndexRequest')

const DetachObjectRequestSchema = z
  .object({
    ParentReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The parent reference from which the object with the specified link name is detached.',
        }),
    ),
    LinkName: LinkNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The link name associated with the object that needs to be detached.',
        }),
    ),
  })
  .openapi({ required: ['ParentReference', 'LinkName'], title: 'DetachObjectRequest' })
  .openapi('DetachObjectRequest')

const DetachPolicyRequestSchema = z
  .object({
    PolicyReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'Reference that identifies the policy object.' }),
    ),
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Reference that identifies the object whose policy object will be detached.',
        }),
    ),
  })
  .openapi({ required: ['PolicyReference', 'ObjectReference'], title: 'DetachPolicyRequest' })
  .openapi('DetachPolicyRequest')

const DetachTypedLinkRequestSchema = z
  .object({
    TypedLinkSpecifier: TypedLinkSpecifierSchema.and(
      z.any().openapi({ description: 'Used to accept a typed link specifier as input.' }),
    ),
  })
  .openapi({ required: ['TypedLinkSpecifier'], title: 'DetachTypedLinkRequest' })
  .openapi('DetachTypedLinkRequest')

const DisableDirectoryRequestSchema = z
  .object({})
  .openapi({ title: 'DisableDirectoryRequest' })
  .openapi('DisableDirectoryRequest')

const EnableDirectoryRequestSchema = z
  .object({})
  .openapi({ title: 'EnableDirectoryRequest' })
  .openapi('EnableDirectoryRequest')

const FacetAttributeUpdateListSchema = z
  .array(FacetAttributeUpdateSchema)
  .openapi('FacetAttributeUpdateList')

const GetAppliedSchemaVersionRequestSchema = z
  .object({
    SchemaArn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the applied schema.' })),
  })
  .openapi({ required: ['SchemaArn'], title: 'GetAppliedSchemaVersionRequest' })
  .openapi('GetAppliedSchemaVersionRequest')

const GetDirectoryRequestSchema = z
  .object({})
  .openapi({ title: 'GetDirectoryRequest' })
  .openapi('GetDirectoryRequest')

const GetFacetRequestSchema = z
  .object({
    Name: FacetNameSchema.and(
      z.any().openapi({ description: 'The name of the facet to retrieve.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'GetFacetRequest' })
  .openapi('GetFacetRequest')

const GetLinkAttributesRequestSchema = z
  .object({
    TypedLinkSpecifier: TypedLinkSpecifierSchema.and(
      z.any().openapi({ description: 'Allows a typed link specifier to be accepted as input.' }),
    ),
    AttributeNames: AttributeNameListSchema.and(
      z.any().openapi({ description: 'A list of attribute names whose values will be retrieved.' }),
    ),
    ConsistencyLevel: ConsistencyLevelSchema.and(
      z
        .any()
        .openapi({
          description: 'The consistency level at which to retrieve the attributes on a typed link.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['TypedLinkSpecifier', 'AttributeNames'],
    title: 'GetLinkAttributesRequest',
  })
  .openapi('GetLinkAttributesRequest')

const GetObjectAttributesRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Reference that identifies the object whose attributes will be retrieved.',
        }),
    ),
    SchemaFacet: SchemaFacetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.',
        }),
    ),
    AttributeNames: AttributeNameListSchema.and(
      z.any().openapi({ description: 'List of attribute names whose values will be retrieved.' }),
    ),
  })
  .openapi({
    required: ['ObjectReference', 'SchemaFacet', 'AttributeNames'],
    title: 'GetObjectAttributesRequest',
  })
  .openapi('GetObjectAttributesRequest')

const GetObjectInformationRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the object.' }),
    ),
  })
  .openapi({ required: ['ObjectReference'], title: 'GetObjectInformationRequest' })
  .openapi('GetObjectInformationRequest')

const GetSchemaAsJsonRequestSchema = z
  .object({})
  .openapi({ title: 'GetSchemaAsJsonRequest' })
  .openapi('GetSchemaAsJsonRequest')

const GetTypedLinkFacetInformationRequestSchema = z
  .object({
    Name: TypedLinkNameSchema.and(
      z.any().openapi({ description: 'The unique name of the typed link facet.' }),
    ),
  })
  .openapi({ required: ['Name'], title: 'GetTypedLinkFacetInformationRequest' })
  .openapi('GetTypedLinkFacetInformationRequest')

const ListAppliedSchemaArnsRequestSchema = z
  .object({
    DirectoryArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the directory you are listing.' }),
    ),
    SchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['DirectoryArn'], title: 'ListAppliedSchemaArnsRequest' })
  .openapi('ListAppliedSchemaArnsRequest')

const ListAttachedIndicesRequestSchema = z
  .object({
    TargetReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the object that has indices attached.' }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['TargetReference'], title: 'ListAttachedIndicesRequest' })
  .openapi('ListAttachedIndicesRequest')

const ListDevelopmentSchemaArnsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDevelopmentSchemaArnsRequest', required: [] })
  .openapi('ListDevelopmentSchemaArnsRequest')

const ListDirectoriesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
    state: DirectoryStateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state of the directories in the list. Can be either Enabled, Disabled, or Deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListDirectoriesRequest', required: [] })
  .openapi('ListDirectoriesRequest')

const ListFacetAttributesRequestSchema = z
  .object({
    Name: FacetNameSchema.and(
      z.any().openapi({ description: 'The name of the facet whose attributes will be retrieved.' }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'ListFacetAttributesRequest' })
  .openapi('ListFacetAttributesRequest')

const ListFacetNamesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFacetNamesRequest', required: [] })
  .openapi('ListFacetNamesRequest')

const ListIncomingTypedLinksRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Reference that identifies the object whose attributes will be listed.',
        }),
    ),
    FilterAttributeRanges: TypedLinkAttributeRangeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.',
        }),
    ).exactOptional(),
    FilterTypedLink: TypedLinkSchemaAndFacetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
    ConsistencyLevel: ConsistencyLevelSchema.and(
      z.any().openapi({ description: 'The consistency level to execute the request at.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectReference'], title: 'ListIncomingTypedLinksRequest' })
  .openapi('ListIncomingTypedLinksRequest')

const ListIndexRequestSchema = z
  .object({
    RangesOnIndexedValues: ObjectAttributeRangeListSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies the ranges of indexed values that you want to query.' }),
    ).exactOptional(),
    IndexReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The reference to the index to list.' }),
    ),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['IndexReference'], title: 'ListIndexRequest' })
  .openapi('ListIndexRequest')

const ListManagedSchemaArnsRequestSchema = z
  .object({
    SchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListManagedSchemaArnsRequest', required: [] })
  .openapi('ListManagedSchemaArnsRequest')

const ListObjectAttributesRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'The reference that identifies the object whose attributes will be listed.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
    FacetFilter: SchemaFacetSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to filter the list of object attributes that are associated with a certain facet.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectReference'], title: 'ListObjectAttributesRequest' })
  .openapi('ListObjectAttributesRequest')

const ListObjectChildrenRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference that identifies the object for which child objects are being listed.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectReference'], title: 'ListObjectChildrenRequest' })
  .openapi('ListObjectChildrenRequest')

const ListObjectParentPathsRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'The reference that identifies the object whose parent paths are listed.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectReference'], title: 'ListObjectParentPathsRequest' })
  .openapi('ListObjectParentPathsRequest')

const ListObjectParentsRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reference that identifies the object for which parent objects are being listed.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
    IncludeAllLinksToEachParent: BoolSchema.and(
      z
        .any()
        .openapi({
          description:
            'When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectReference'], title: 'ListObjectParentsRequest' })
  .openapi('ListObjectParentsRequest')

const ListObjectPoliciesRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Reference that identifies the object for which policies will be listed.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectReference'], title: 'ListObjectPoliciesRequest' })
  .openapi('ListObjectPoliciesRequest')

const ListOutgoingTypedLinksRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'A reference that identifies the object whose attributes will be listed.',
        }),
    ),
    FilterAttributeRanges: TypedLinkAttributeRangeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.',
        }),
    ).exactOptional(),
    FilterTypedLink: TypedLinkSchemaAndFacetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters are interpreted in the order of the attributes defined on the typed link facet, not the order they are supplied to any API calls.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
    ConsistencyLevel: ConsistencyLevelSchema.and(
      z.any().openapi({ description: 'The consistency level to execute the request at.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectReference'], title: 'ListOutgoingTypedLinksRequest' })
  .openapi('ListOutgoingTypedLinksRequest')

const ListPolicyAttachmentsRequestSchema = z
  .object({
    PolicyReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The reference that identifies the policy object.' }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['PolicyReference'], title: 'ListPolicyAttachmentsRequest' })
  .openapi('ListPolicyAttachmentsRequest')

const ListPublishedSchemaArnsRequestSchema = z
  .object({
    SchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListPublishedSchemaArnsRequest', required: [] })
  .openapi('ListPublishedSchemaArnsRequest')

const TagsNumberResultsSchema = z.int().min(50).openapi('TagsNumberResults')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token. This is for future use. Currently pagination is not supported for tagging.',
        }),
    ).exactOptional(),
    MaxResults: TagsNumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const ListTypedLinkFacetAttributesRequestSchema = z
  .object({
    Name: TypedLinkNameSchema.and(
      z.any().openapi({ description: 'The unique name of the typed link facet.' }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'ListTypedLinkFacetAttributesRequest' })
  .openapi('ListTypedLinkFacetAttributesRequest')

const ListTypedLinkFacetNamesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to retrieve.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListTypedLinkFacetNamesRequest', required: [] })
  .openapi('ListTypedLinkFacetNamesRequest')

const LookupPolicyRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z
        .any()
        .openapi({
          description: 'Reference that identifies the object whose policies will be looked up.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The token to request the next page of results.' }),
    ).exactOptional(),
    MaxResults: NumberResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items to be retrieved in a single call. This is an approximate number.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObjectReference'], title: 'LookupPolicyRequest' })
  .openapi('LookupPolicyRequest')

const VersionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9._-]*$/)
  .min(1)
  .max(10)
  .openapi('Version')

const PublishSchemaRequestSchema = z
  .object({
    Version: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The major version under which the schema will be published. Schemas have both a major and minor version associated with them.',
        }),
    ),
    MinorVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.',
        }),
    ).exactOptional(),
    Name: SchemaNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new name under which the schema will be published. If this is not provided, the development schema is considered.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Version'], title: 'PublishSchemaRequest' })
  .openapi('PublishSchemaRequest')

const PutSchemaFromJsonRequestSchema = z
  .object({
    Document: SchemaJsonDocumentSchema.and(
      z.any().openapi({ description: 'The replacement JSON schema.' }),
    ),
  })
  .openapi({ required: ['Document'], title: 'PutSchemaFromJsonRequest' })
  .openapi('PutSchemaFromJsonRequest')

const RemoveFacetFromObjectRequestSchema = z
  .object({
    SchemaFacet: SchemaFacetSchema.and(
      z.any().openapi({ description: 'The facet to remove. See <a>SchemaFacet</a> for details.' }),
    ),
    ObjectReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'A reference to the object to remove the facet from.' }),
    ),
  })
  .openapi({ required: ['SchemaFacet', 'ObjectReference'], title: 'RemoveFacetFromObjectRequest' })
  .openapi('RemoveFacetFromObjectRequest')

const RuleKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9._-]*$/)
  .min(1)
  .max(64)
  .openapi('RuleKey')

const RuleParameterKeySchema = z.string().openapi('RuleParameterKey')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.',
        }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: 'A list of tag key-value pairs.' })),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TypedLinkFacetAttributeUpdateListSchema = z
  .array(TypedLinkFacetAttributeUpdateSchema)
  .openapi('TypedLinkFacetAttributeUpdateList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z
        .any()
        .openapi({ description: 'Keys of the tag that need to be removed from the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateFacetRequestSchema = z
  .object({
    Name: FacetNameSchema.and(z.any().openapi({ description: 'The name of the facet.' })),
    AttributeUpdates: FacetAttributeUpdateListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of attributes that need to be updated in a given schema <a>Facet</a>. Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update operation to perform. ',
        }),
    ).exactOptional(),
    ObjectType: ObjectTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'UpdateFacetRequest' })
  .openapi('UpdateFacetRequest')

const UpdateLinkAttributesRequestSchema = z
  .object({
    TypedLinkSpecifier: TypedLinkSpecifierSchema.and(
      z.any().openapi({ description: 'Allows a typed link specifier to be accepted as input.' }),
    ),
    AttributeUpdates: LinkAttributeUpdateListSchema.and(
      z.any().openapi({ description: 'The attributes update structure.' }),
    ),
  })
  .openapi({
    required: ['TypedLinkSpecifier', 'AttributeUpdates'],
    title: 'UpdateLinkAttributesRequest',
  })
  .openapi('UpdateLinkAttributesRequest')

const UpdateObjectAttributesRequestSchema = z
  .object({
    ObjectReference: ObjectReferenceSchema.and(
      z.any().openapi({ description: 'The reference that identifies the object.' }),
    ),
    AttributeUpdates: ObjectAttributeUpdateListSchema.and(
      z.any().openapi({ description: 'The attributes update structure.' }),
    ),
  })
  .openapi({
    required: ['ObjectReference', 'AttributeUpdates'],
    title: 'UpdateObjectAttributesRequest',
  })
  .openapi('UpdateObjectAttributesRequest')

const UpdateSchemaRequestSchema = z
  .object({
    Name: SchemaNameSchema.and(z.any().openapi({ description: 'The name of the schema.' })),
  })
  .openapi({ required: ['Name'], title: 'UpdateSchemaRequest' })
  .openapi('UpdateSchemaRequest')

const UpdateTypedLinkFacetRequestSchema = z
  .object({
    Name: TypedLinkNameSchema.and(
      z.any().openapi({ description: 'The unique name of the typed link facet.' }),
    ),
    AttributeUpdates: TypedLinkFacetAttributeUpdateListSchema.and(
      z.any().openapi({ description: 'Attributes update structure.' }),
    ),
    IdentityAttributeOrder: AttributeNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'AttributeUpdates', 'IdentityAttributeOrder'],
    title: 'UpdateTypedLinkFacetRequest',
  })
  .openapi('UpdateTypedLinkFacetRequest')

const UpgradeAppliedSchemaRequestSchema = z
  .object({
    PublishedSchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The revision of the published schema to upgrade the directory to.',
        }),
    ),
    DirectoryArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN for the directory to which the upgraded schema will be applied.',
        }),
    ),
    DryRun: BoolSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PublishedSchemaArn', 'DirectoryArn'],
    title: 'UpgradeAppliedSchemaRequest',
  })
  .openapi('UpgradeAppliedSchemaRequest')

const UpgradePublishedSchemaRequestSchema = z
  .object({
    DevelopmentSchemaArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of the development schema with the changes used for the upgrade.',
        }),
    ),
    PublishedSchemaArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the published schema to be upgraded.' }),
    ),
    MinorVersion: VersionSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the minor version of the published schema that will be created. This parameter is NOT optional.',
        }),
    ),
    DryRun: BoolSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DevelopmentSchemaArn', 'PublishedSchemaArn', 'MinorVersion'],
    title: 'UpgradePublishedSchemaRequest',
  })
  .openapi('UpgradePublishedSchemaRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const putAmazonclouddirectory20170111ObjectFacetsXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition',
  description:
    'Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.',
  operationId: 'AddFacetToObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SchemaFacet: z
                .object({
                  SchemaArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions. If this value is set, FacetName must also be set.',
                      }),
                  ).exactOptional(),
                  FacetName: FacetNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the facet. If this value is set, SchemaArn must also be set.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'A facet.', required: [] }),
              ObjectAttributeList: z
                .array(AttributeKeyAndValueSchema)
                .exactOptional()
                .openapi({
                  description: 'Attributes on the facet that you are adding to the object.',
                }),
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
            })
            .openapi({ required: ['SchemaFacet', 'ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddFacetToObjectResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111SchemaApplyXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition',
  description:
    'Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.',
  operationId: 'ApplySchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> into which the schema is copied. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PublishedSchemaArn: z
                .string()
                .openapi({
                  description:
                    'Published schema Amazon Resource Name (ARN) that needs to be copied. For more information, see <a>arns</a>.',
                }),
            })
            .openapi({ required: ['PublishedSchemaArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplySchemaResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'SchemaAlreadyExistsException',
      content: { 'application/json': { schema: SchemaAlreadyExistsExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidAttachmentException',
      content: { 'application/json': { schema: InvalidAttachmentExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111ObjectAttachXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition',
  description:
    '<p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>',
  operationId: 'AttachObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where both objects reside. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ParentReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              ChildReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              LinkName: z
                .string()
                .regex(/[^\/\[\]\(\):\{\}#@!?\s\\;]+/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The link name with which the child object is attached to the parent.',
                }),
            })
            .openapi({ required: ['ParentReference', 'ChildReference', 'LinkName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachObjectResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'LinkNameAlreadyInUseException',
      content: { 'application/json': { schema: LinkNameAlreadyInUseExceptionSchema } },
    },
    489: {
      description: 'InvalidAttachmentException',
      content: { 'application/json': { schema: InvalidAttachmentExceptionSchema } },
    },
    490: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    491: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111PolicyAttachXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition',
  description:
    'Attaches a policy object to a regular object. An object can have a limited number of attached policies.',
  operationId: 'AttachPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where both objects reside. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PolicyReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
            })
            .openapi({ required: ['PolicyReference', 'ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachPolicyResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'NotPolicyException',
      content: { 'application/json': { schema: NotPolicyExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111IndexAttachXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition',
  description: 'Attaches the specified object to the specified index.',
  operationId: 'AttachToIndex',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the directory where the object and index exist.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              IndexReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              TargetReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
            })
            .openapi({ required: ['IndexReference', 'TargetReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachToIndexResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'InvalidAttachmentException',
      content: { 'application/json': { schema: InvalidAttachmentExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    489: {
      description: 'LinkNameAlreadyInUseException',
      content: { 'application/json': { schema: LinkNameAlreadyInUseExceptionSchema } },
    },
    490: {
      description: 'IndexedAttributeMissingException',
      content: { 'application/json': { schema: IndexedAttributeMissingExceptionSchema } },
    },
    491: {
      description: 'NotIndexException',
      content: { 'application/json': { schema: NotIndexExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition',
  description:
    'Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
  operationId: 'AttachTypedLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the directory where you want to attach the typed link.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SourceObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              TargetObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              TypedLinkFacet: z
                .object({
                  SchemaArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
                      }),
                  ).exactOptional(),
                  TypedLinkName: TypedLinkNameSchema.and(
                    z.any().openapi({ description: 'The unique name of the typed link facet.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.',
                  required: [],
                }),
              Attributes: z
                .array(AttributeNameAndValueSchema)
                .openapi({
                  description: 'A set of attributes that are associated with the typed link.',
                }),
            })
            .openapi({
              required: [
                'SourceObjectReference',
                'TargetObjectReference',
                'TypedLinkFacet',
                'Attributes',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AttachTypedLinkResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidAttachmentException',
      content: { 'application/json': { schema: InvalidAttachmentExceptionSchema } },
    },
    489: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    490: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111BatchreadXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition',
  description: 'Performs all the read operations in a batch. ',
  operationId: 'BatchRead',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-consistency-level': z
        .enum(['SERIALIZABLE', 'EVENTUAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-consistency-level',
            in: 'header',
            required: false,
            description:
              'Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.',
            schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Operations: z
                .array(BatchReadOperationSchema)
                .openapi({ description: 'A list of operations that are part of the batch.' }),
            })
            .openapi({ required: ['Operations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchReadResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111BatchwriteXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition',
  description:
    'Performs all the write operations in a batch. Either all the operations succeed or none.',
  operationId: 'BatchWrite',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Operations: z
                .array(BatchWriteOperationSchema)
                .openapi({ description: 'A list of operations that are part of the batch.' }),
            })
            .openapi({ required: ['Operations'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchWriteResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'BatchWriteException',
      content: { 'application/json': { schema: BatchWriteExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111DirectoryCreateXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition',
  description:
    '<p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>',
  operationId: 'CreateDirectory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the published schema that will be copied into the data <a>Directory</a>. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The name of the <a>Directory</a>. Should be unique per account, per region.',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDirectoryResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryAlreadyExistsException',
      content: { 'application/json': { schema: DirectoryAlreadyExistsExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111FacetCreateXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition',
  description:
    'Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.',
  operationId: 'CreateFacet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The schema ARN in which the new <a>Facet</a> will be created. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(64)
                .openapi({
                  description: 'The name of the <a>Facet</a>, which is unique for a given schema.',
                }),
              Attributes: z
                .array(FacetAttributeSchema)
                .exactOptional()
                .openapi({
                  description: 'The attributes that are associated with the <a>Facet</a>.',
                }),
              ObjectType: z
                .enum(['NODE', 'LEAF_NODE', 'POLICY', 'INDEX'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies whether a given object created from this facet is of type node, leaf node, policy or index.</p> <ul> <li> <p>Node: Can have multiple children but one parent.</p> </li> </ul> <ul> <li> <p>Leaf node: Cannot have children but can have multiple parents.</p> </li> </ul> <ul> <li> <p>Policy: Allows you to store a policy document and policy type. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p> </li> </ul> <ul> <li> <p>Index: Can be created with the Index API.</p> </li> </ul>',
                }),
              FacetStyle: z
                .enum(['STATIC', 'DYNAMIC'])
                .exactOptional()
                .openapi({
                  description:
                    'There are two different styles that you can define on any given facet, <code>Static</code> and <code>Dynamic</code>. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations.',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFacetResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'FacetAlreadyExistsException',
      content: { 'application/json': { schema: FacetAlreadyExistsExceptionSchema } },
    },
    488: {
      description: 'InvalidRuleException',
      content: { 'application/json': { schema: InvalidRuleExceptionSchema } },
    },
    489: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111IndexXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/index#x-amz-data-partition',
  description:
    'Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.',
  operationId: 'CreateIndex',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory where the index should be created.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              OrderedIndexedAttributeList: z
                .array(AttributeKeySchema)
                .openapi({
                  description:
                    'Specifies the attributes that should be indexed on. Currently only a single attribute is supported.',
                }),
              IsUnique: z
                .boolean()
                .openapi({
                  description:
                    'Indicates whether the attribute that is being indexed has unique values or not.',
                }),
              ParentReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              LinkName: z
                .string()
                .regex(/[^\/\[\]\(\):\{\}#@!?\s\\;]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the link between the parent object and the index object.',
                }),
            })
            .openapi({ required: ['OrderedIndexedAttributeList', 'IsUnique'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIndexResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
    489: {
      description: 'LinkNameAlreadyInUseException',
      content: { 'application/json': { schema: LinkNameAlreadyInUseExceptionSchema } },
    },
    490: {
      description: 'UnsupportedIndexTypeException',
      content: { 'application/json': { schema: UnsupportedIndexTypeExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111ObjectXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/object#x-amz-data-partition',
  description:
    'Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. ',
  operationId: 'CreateObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> in which the object will be created. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SchemaFacets: z
                .array(SchemaFacetSchema)
                .openapi({
                  description:
                    'A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.',
                }),
              ObjectAttributeList: z
                .array(AttributeKeyAndValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The attribute map whose attribute ARN contains the key and attribute value as the map value.',
                }),
              ParentReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              LinkName: z
                .string()
                .regex(/[^\/\[\]\(\):\{\}#@!?\s\\;]+/)
                .min(1)
                .max(64)
                .exactOptional()
                .openapi({
                  description: 'The name of link that is used to attach this object to a parent.',
                }),
            })
            .openapi({ required: ['SchemaFacets'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateObjectResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
    489: {
      description: 'LinkNameAlreadyInUseException',
      content: { 'application/json': { schema: LinkNameAlreadyInUseExceptionSchema } },
    },
    490: {
      description: 'UnsupportedIndexTypeException',
      content: { 'application/json': { schema: UnsupportedIndexTypeExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111SchemaCreateRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/schema/create',
  description:
    '<p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>',
  operationId: 'CreateSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(32)
                .openapi({
                  description:
                    'The name that is associated with the schema. This is unique to each account and in each region.',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSchemaResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'SchemaAlreadyExistsException',
      content: { 'application/json': { schema: SchemaAlreadyExistsExceptionSchema } },
    },
    487: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartitionRoute =
  createRoute({
    method: 'put',
    path: '/amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition',
    description:
      'Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
    operationId: 'CreateTypedLinkFacet',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-data-partition': z
          .string()
          .openapi({
            param: {
              name: 'x-amz-data-partition',
              in: 'header',
              required: true,
              description:
                'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Facet: z
                  .object({
                    Name: TypedLinkNameSchema.and(
                      z.any().openapi({ description: 'The unique name of the typed link facet.' }),
                    ).exactOptional(),
                    Attributes: TypedLinkAttributeDefinitionListSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'A set of key-value pairs associated with the typed link. Typed link attributes are used when you have data values that are related to the link itself, and not to one of the two objects being linked. Identity attributes also serve to distinguish the link from others of the same type between the same objects.',
                        }),
                    ).exactOptional(),
                    IdentityAttributeOrder: AttributeNameListSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The set of attributes that distinguish links made from this facet from each other, in the order of significance. Listing typed links can filter on the values of these attributes. See <a>ListOutgoingTypedLinks</a> and <a>ListIncomingTypedLinks</a> for details.',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.',
                    required: [],
                  }),
              })
              .openapi({ required: ['Facet'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateTypedLinkFacetResponseSchema } },
      },
      480: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
      481: {
        description: 'InvalidArnException',
        content: { 'application/json': { schema: InvalidArnExceptionSchema } },
      },
      482: {
        description: 'RetryableConflictException',
        content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      487: {
        description: 'FacetAlreadyExistsException',
        content: { 'application/json': { schema: FacetAlreadyExistsExceptionSchema } },
      },
      488: {
        description: 'InvalidRuleException',
        content: { 'application/json': { schema: InvalidRuleExceptionSchema } },
      },
      489: {
        description: 'FacetValidationException',
        content: { 'application/json': { schema: FacetValidationExceptionSchema } },
      },
    },
  })

export const putAmazonclouddirectory20170111DirectoryXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/directory#x-amz-data-partition',
  description:
    'Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.',
  operationId: 'DeleteDirectory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDirectoryResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DirectoryNotDisabledException',
      content: { 'application/json': { schema: DirectoryNotDisabledExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryDeletedException',
      content: { 'application/json': { schema: DirectoryDeletedExceptionSchema } },
    },
    487: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    488: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111FacetDeleteXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition',
  description:
    'Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.',
  operationId: 'DeleteFacet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(64)
                .openapi({ description: 'The name of the facet to delete.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFacetResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'FacetNotFoundException',
      content: { 'application/json': { schema: FacetNotFoundExceptionSchema } },
    },
    488: {
      description: 'FacetInUseException',
      content: { 'application/json': { schema: FacetInUseExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111ObjectDeleteXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition',
  description:
    'Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.',
  operationId: 'DeleteObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteObjectResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'ObjectNotDetachedException',
      content: { 'application/json': { schema: ObjectNotDetachedExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111SchemaXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/schema#x-amz-data-partition',
  description:
    'Deletes a given schema. Schemas in a development and published state can only be deleted. ',
  operationId: 'DeleteSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the development schema. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSchemaResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'StillContainsLinksException',
      content: { 'application/json': { schema: StillContainsLinksExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartitionRoute =
  createRoute({
    method: 'put',
    path: '/amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition',
    description:
      'Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
    operationId: 'DeleteTypedLinkFacet',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-data-partition': z
          .string()
          .openapi({
            param: {
              name: 'x-amz-data-partition',
              in: 'header',
              required: true,
              description:
                'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Name: z
                  .string()
                  .regex(/^[a-zA-Z0-9._-]*$/)
                  .openapi({ description: 'The unique name of the typed link facet.' }),
              })
              .openapi({ required: ['Name'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteTypedLinkFacetResponseSchema } },
      },
      480: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
      481: {
        description: 'InvalidArnException',
        content: { 'application/json': { schema: InvalidArnExceptionSchema } },
      },
      482: {
        description: 'RetryableConflictException',
        content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      487: {
        description: 'FacetNotFoundException',
        content: { 'application/json': { schema: FacetNotFoundExceptionSchema } },
      },
    },
  })

export const putAmazonclouddirectory20170111IndexDetachXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition',
  description: 'Detaches the specified object from the specified index.',
  operationId: 'DetachFromIndex',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the directory the index and object exist in.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              IndexReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              TargetReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
            })
            .openapi({ required: ['IndexReference', 'TargetReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetachFromIndexResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'ObjectAlreadyDetachedException',
      content: { 'application/json': { schema: ObjectAlreadyDetachedExceptionSchema } },
    },
    489: {
      description: 'NotIndexException',
      content: { 'application/json': { schema: NotIndexExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111ObjectDetachXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition',
  description:
    'Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.',
  operationId: 'DetachObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ParentReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              LinkName: z
                .string()
                .regex(/[^\/\[\]\(\):\{\}#@!?\s\\;]+/)
                .min(1)
                .max(64)
                .openapi({
                  description:
                    'The link name associated with the object that needs to be detached.',
                }),
            })
            .openapi({ required: ['ParentReference', 'LinkName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetachObjectResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'NotNodeException',
      content: { 'application/json': { schema: NotNodeExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111PolicyDetachXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition',
  description: 'Detaches a policy from an object.',
  operationId: 'DetachPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where both objects reside. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PolicyReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
            })
            .openapi({ required: ['PolicyReference', 'ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DetachPolicyResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'NotPolicyException',
      content: { 'application/json': { schema: NotPolicyExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition',
  description:
    'Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
  operationId: 'DetachTypedLink',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the directory where you want to detach the typed link.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TypedLinkSpecifier: z
                .object({
                  TypedLinkFacet: TypedLinkSchemaAndFacetNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Identifies the typed link facet that is associated with the typed link.',
                      }),
                  ).exactOptional(),
                  SourceObjectReference: ObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Identifies the source object that the typed link will attach to.',
                      }),
                  ).exactOptional(),
                  TargetObjectReference: ObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Identifies the target object that the typed link will attach to.',
                      }),
                  ).exactOptional(),
                  IdentityAttributeValues: AttributeNameAndValueListSchema.and(
                    z.any().openapi({ description: 'Identifies the attribute value to update.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.',
                  required: [],
                }),
            })
            .openapi({ required: ['TypedLinkSpecifier'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111DirectoryDisableXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition',
  description:
    'Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.',
  operationId: 'DisableDirectory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory to disable.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisableDirectoryResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DirectoryDeletedException',
      content: { 'application/json': { schema: DirectoryDeletedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    487: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111DirectoryEnableXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition',
  description:
    'Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.',
  operationId: 'EnableDirectory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory to enable.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EnableDirectoryResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'DirectoryDeletedException',
      content: { 'application/json': { schema: DirectoryDeletedExceptionSchema } },
    },
    482: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    487: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111SchemaGetappliedschemaRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/schema/getappliedschema',
  description: 'Returns current applied schema version ARN, including the minor version in use.',
  operationId: 'GetAppliedSchemaVersion',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SchemaArn: z.string().openapi({ description: 'The ARN of the applied schema.' }),
            })
            .openapi({ required: ['SchemaArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAppliedSchemaVersionResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111DirectoryGetXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition',
  description: 'Retrieves metadata about a directory.',
  operationId: 'GetDirectory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDirectoryResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111FacetXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition',
  description:
    '<p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>',
  operationId: 'UpdateFacet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(64)
                .openapi({ description: 'The name of the facet.' }),
              AttributeUpdates: z
                .array(FacetAttributeUpdateSchema)
                .exactOptional()
                .openapi({
                  description:
                    'List of attributes that need to be updated in a given schema <a>Facet</a>. Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update operation to perform. ',
                }),
              ObjectType: z
                .enum(['NODE', 'LEAF_NODE', 'POLICY', 'INDEX'])
                .exactOptional()
                .openapi({
                  description:
                    'The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.',
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFacetResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InvalidFacetUpdateException',
      content: { 'application/json': { schema: InvalidFacetUpdateExceptionSchema } },
    },
    487: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    489: {
      description: 'FacetNotFoundException',
      content: { 'application/json': { schema: FacetNotFoundExceptionSchema } },
    },
    490: {
      description: 'InvalidRuleException',
      content: { 'application/json': { schema: InvalidRuleExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111FacetXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition',
  description:
    'Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.',
  operationId: 'GetFacet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(64)
                .openapi({ description: 'The name of the facet to retrieve.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFacetResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'FacetNotFoundException',
      content: { 'application/json': { schema: FacetNotFoundExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartitionRoute =
  createRoute({
    method: 'post',
    path: '/amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition',
    description: 'Retrieves attributes that are associated with a typed link.',
    operationId: 'GetLinkAttributes',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-data-partition': z
          .string()
          .openapi({
            param: {
              name: 'x-amz-data-partition',
              in: 'header',
              required: true,
              description:
                'The Amazon Resource Name (ARN) that is associated with the Directory where the typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                TypedLinkSpecifier: z
                  .object({
                    TypedLinkFacet: TypedLinkSchemaAndFacetNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Identifies the typed link facet that is associated with the typed link.',
                        }),
                    ).exactOptional(),
                    SourceObjectReference: ObjectReferenceSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Identifies the source object that the typed link will attach to.',
                        }),
                    ).exactOptional(),
                    TargetObjectReference: ObjectReferenceSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Identifies the target object that the typed link will attach to.',
                        }),
                    ).exactOptional(),
                    IdentityAttributeValues: AttributeNameAndValueListSchema.and(
                      z.any().openapi({ description: 'Identifies the attribute value to update.' }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.',
                    required: [],
                  }),
                AttributeNames: z
                  .array(AttributeNameSchema)
                  .openapi({
                    description: 'A list of attribute names whose values will be retrieved.',
                  }),
                ConsistencyLevel: z
                  .enum(['SERIALIZABLE', 'EVENTUAL'])
                  .exactOptional()
                  .openapi({
                    description:
                      'The consistency level at which to retrieve the attributes on a typed link.',
                  }),
              })
              .openapi({ required: ['TypedLinkSpecifier', 'AttributeNames'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetLinkAttributesResponseSchema } },
      },
      480: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
      481: {
        description: 'InvalidArnException',
        content: { 'application/json': { schema: InvalidArnExceptionSchema } },
      },
      482: {
        description: 'RetryableConflictException',
        content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'DirectoryNotEnabledException',
        content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
      },
      487: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      488: {
        description: 'FacetValidationException',
        content: { 'application/json': { schema: FacetValidationExceptionSchema } },
      },
    },
  })

export const postAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartitionRoute =
  createRoute({
    method: 'post',
    path: '/amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition',
    description: 'Retrieves attributes within a facet that are associated with an object.',
    operationId: 'GetObjectAttributes',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-data-partition': z
          .string()
          .openapi({
            param: {
              name: 'x-amz-data-partition',
              in: 'header',
              required: true,
              description:
                'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides.',
              schema: { type: 'string' },
            },
          }),
        'x-amz-consistency-level': z
          .enum(['SERIALIZABLE', 'EVENTUAL'])
          .exactOptional()
          .openapi({
            param: {
              name: 'x-amz-consistency-level',
              in: 'header',
              required: false,
              description:
                'The consistency level at which to retrieve the attributes on an object.',
              schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                ObjectReference: z
                  .object({
                    Selector: SelectorObjectReferenceSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description: 'The reference that identifies an object.',
                    required: [],
                  }),
                SchemaFacet: z
                  .object({
                    SchemaArn: ArnSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions. If this value is set, FacetName must also be set.',
                        }),
                    ).exactOptional(),
                    FacetName: FacetNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The name of the facet. If this value is set, SchemaArn must also be set.',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({ description: 'A facet.', required: [] }),
                AttributeNames: z
                  .array(AttributeNameSchema)
                  .openapi({
                    description: 'List of attribute names whose values will be retrieved.',
                  }),
              })
              .openapi({ required: ['ObjectReference', 'SchemaFacet', 'AttributeNames'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetObjectAttributesResponseSchema } },
      },
      480: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
      481: {
        description: 'InvalidArnException',
        content: { 'application/json': { schema: InvalidArnExceptionSchema } },
      },
      482: {
        description: 'RetryableConflictException',
        content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'DirectoryNotEnabledException',
        content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
      },
      487: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      488: {
        description: 'FacetValidationException',
        content: { 'application/json': { schema: FacetValidationExceptionSchema } },
      },
    },
  })

export const postAmazonclouddirectory20170111ObjectInformationXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition',
  description: 'Retrieves metadata about an object.',
  operationId: 'GetObjectInformation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory being retrieved.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-consistency-level': z
        .enum(['SERIALIZABLE', 'EVENTUAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-consistency-level',
            in: 'header',
            required: false,
            description: 'The consistency level at which to retrieve the object information.',
            schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetObjectInformationResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition',
  description:
    'Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.',
  operationId: 'PutSchemaFromJson',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the schema to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Document: z.string().openapi({ description: 'The replacement JSON schema.' }),
            })
            .openapi({ required: ['Document'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutSchemaFromJsonResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InvalidSchemaDocException',
      content: { 'application/json': { schema: InvalidSchemaDocExceptionSchema } },
    },
    487: {
      description: 'InvalidRuleException',
      content: { 'application/json': { schema: InvalidRuleExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition',
  description:
    'Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.',
  operationId: 'GetSchemaAsJson',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the schema to retrieve.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSchemaAsJsonResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition',
  description:
    'Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
  operationId: 'GetTypedLinkFacetInformation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .openapi({ description: 'The unique name of the typed link facet.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTypedLinkFacetInformationResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    488: {
      description: 'FacetNotFoundException',
      content: { 'application/json': { schema: FacetNotFoundExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111SchemaAppliedRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/schema/applied',
  description:
    'Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.',
  operationId: 'ListAppliedSchemaArns',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DirectoryArn: z
                .string()
                .openapi({ description: 'The ARN of the directory you are listing.' }),
              SchemaArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The response for <code>ListAppliedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
            })
            .openapi({ required: ['DirectoryArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAppliedSchemaArnsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111ObjectIndicesXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition',
  description: 'Lists indices attached to the specified object.',
  operationId: 'ListAttachedIndices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-consistency-level': z
        .enum(['SERIALIZABLE', 'EVENTUAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-consistency-level',
            in: 'header',
            required: false,
            description: 'The consistency level to use for this operation.',
            schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              TargetReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
            })
            .openapi({ required: ['TargetReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAttachedIndicesResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111SchemaDevelopmentRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/schema/development',
  description: 'Retrieves each Amazon Resource Name (ARN) of schemas in the development state.',
  operationId: 'ListDevelopmentSchemaArns',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDevelopmentSchemaArnsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111DirectoryListRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/directory/list',
  description: 'Lists directories created within an account.',
  operationId: 'ListDirectories',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
              state: z
                .enum(['ENABLED', 'DISABLED', 'DELETED'])
                .exactOptional()
                .openapi({
                  description:
                    'The state of the directories in the list. Can be either Enabled, Disabled, or Deleted.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDirectoriesResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111FacetAttributesXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition',
  description: 'Retrieves attributes attached to the facet.',
  operationId: 'ListFacetAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the schema where the facet resides.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(64)
                .openapi({
                  description: 'The name of the facet whose attributes will be retrieved.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFacetAttributesResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'FacetNotFoundException',
      content: { 'application/json': { schema: FacetNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111FacetListXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition',
  description: 'Retrieves the names of facets that exist in a schema.',
  operationId: 'ListFacetNames',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The Amazon Resource Name (ARN) to retrieve facet names from.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFacetNamesResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition',
  description:
    'Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
  operationId: 'ListIncomingTypedLinks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the directory where you want to list the typed links.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              FilterAttributeRanges: z
                .array(TypedLinkAttributeRangeSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.',
                }),
              FilterTypedLink: z
                .object({
                  SchemaArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
                      }),
                  ).exactOptional(),
                  TypedLinkName: TypedLinkNameSchema.and(
                    z.any().openapi({ description: 'The unique name of the typed link facet.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.',
                  required: [],
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
              ConsistencyLevel: z
                .enum(['SERIALIZABLE', 'EVENTUAL'])
                .exactOptional()
                .openapi({ description: 'The consistency level to execute the request at.' }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIncomingTypedLinksResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    489: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111IndexTargetsXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition',
  description: 'Lists objects attached to the specified index.',
  operationId: 'ListIndex',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory that the index exists in.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-consistency-level': z
        .enum(['SERIALIZABLE', 'EVENTUAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-consistency-level',
            in: 'header',
            required: false,
            description: 'The consistency level to execute the request at.',
            schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              RangesOnIndexedValues: z
                .array(ObjectAttributeRangeSchema)
                .exactOptional()
                .openapi({
                  description: 'Specifies the ranges of indexed values that you want to query.',
                }),
              IndexReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
            })
            .openapi({ required: ['IndexReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIndexResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    486: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    487: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    488: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    489: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    490: {
      description: 'NotIndexException',
      content: { 'application/json': { schema: NotIndexExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111SchemaManagedRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/schema/managed',
  description:
    'Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.',
  operationId: 'ListManagedSchemaArns',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SchemaArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The response for ListManagedSchemaArns. When this parameter is used, all minor version ARNs for a major version are listed.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListManagedSchemaArnsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111ObjectAttributesXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition',
  description: 'Lists all attributes that are associated with an object. ',
  operationId: 'ListObjectAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-consistency-level': z
        .enum(['SERIALIZABLE', 'EVENTUAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-consistency-level',
            in: 'header',
            required: false,
            description:
              'Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.',
            schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to be retrieved in a single call. This is an approximate number.',
                }),
              FacetFilter: z
                .object({
                  SchemaArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions. If this value is set, FacetName must also be set.',
                      }),
                  ).exactOptional(),
                  FacetName: FacetNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the facet. If this value is set, SchemaArn must also be set.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'A facet.', required: [] }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListObjectAttributesResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    489: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111ObjectChildrenXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition',
  description: 'Returns a paginated list of child objects that are associated with a given object.',
  operationId: 'ListObjectChildren',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-consistency-level': z
        .enum(['SERIALIZABLE', 'EVENTUAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-consistency-level',
            in: 'header',
            required: false,
            description:
              'Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.',
            schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to be retrieved in a single call. This is an approximate number.',
                }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListObjectChildrenResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    489: {
      description: 'NotNodeException',
      content: { 'application/json': { schema: NotNodeExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition',
  description:
    '<p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>',
  operationId: 'ListObjectParentPaths',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory to which the parent path applies.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to be retrieved in a single call. This is an approximate number.',
                }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListObjectParentPathsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111ObjectParentXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition',
  description:
    'Lists parent objects that are associated with a given object in pagination fashion.',
  operationId: 'ListObjectParents',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-consistency-level': z
        .enum(['SERIALIZABLE', 'EVENTUAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-consistency-level',
            in: 'header',
            required: false,
            description:
              'Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.',
            schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to be retrieved in a single call. This is an approximate number.',
                }),
              IncludeAllLinksToEachParent: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.',
                }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListObjectParentsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    489: {
      description: 'CannotListParentOfRootException',
      content: { 'application/json': { schema: CannotListParentOfRootExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111ObjectPolicyXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition',
  description: 'Returns policies attached to an object in pagination fashion.',
  operationId: 'ListObjectPolicies',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-consistency-level': z
        .enum(['SERIALIZABLE', 'EVENTUAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-consistency-level',
            in: 'header',
            required: false,
            description:
              'Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.',
            schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to be retrieved in a single call. This is an approximate number.',
                }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListObjectPoliciesResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition',
  description:
    'Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
  operationId: 'ListOutgoingTypedLinks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the directory where you want to list the typed links.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              FilterAttributeRanges: z
                .array(TypedLinkAttributeRangeSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.',
                }),
              FilterTypedLink: z
                .object({
                  SchemaArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
                      }),
                  ).exactOptional(),
                  TypedLinkName: TypedLinkNameSchema.and(
                    z.any().openapi({ description: 'The unique name of the typed link facet.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.',
                  required: [],
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
              ConsistencyLevel: z
                .enum(['SERIALIZABLE', 'EVENTUAL'])
                .exactOptional()
                .openapi({ description: 'The consistency level to execute the request at.' }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOutgoingTypedLinksResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    489: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition',
  description:
    'Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.',
  operationId: 'ListPolicyAttachments',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
      'x-amz-consistency-level': z
        .enum(['SERIALIZABLE', 'EVENTUAL'])
        .exactOptional()
        .openapi({
          param: {
            name: 'x-amz-consistency-level',
            in: 'header',
            required: false,
            description:
              'Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.',
            schema: { type: 'string', enum: ['SERIALIZABLE', 'EVENTUAL'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PolicyReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to be retrieved in a single call. This is an approximate number.',
                }),
            })
            .openapi({ required: ['PolicyReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPolicyAttachmentsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    489: {
      description: 'NotPolicyException',
      content: { 'application/json': { schema: NotPolicyExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111SchemaPublishedRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/schema/published',
  description:
    'Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.',
  operationId: 'ListPublishedSchemaArns',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SchemaArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The pagination token.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({ description: 'The maximum number of results to retrieve.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPublishedSchemaArnsResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111TagsRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/tags',
  description:
    'Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The pagination token. This is for future use. Currently pagination is not supported for tagging.',
                }),
              MaxResults: z
                .int()
                .min(50)
                .exactOptional()
                .openapi({
                  description:
                    'The <code>MaxResults</code> parameter sets the maximum number of results returned in a single page. This is for future use and is not supported currently.',
                }),
            })
            .openapi({ required: ['ResourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidTaggingRequestException',
      content: { 'application/json': { schema: InvalidTaggingRequestExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartitionRoute =
  createRoute({
    method: 'post',
    path: '/amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition',
    description:
      'Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
    operationId: 'ListTypedLinkFacetAttributes',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-data-partition': z
          .string()
          .openapi({
            param: {
              name: 'x-amz-data-partition',
              in: 'header',
              required: true,
              description:
                'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Name: z
                  .string()
                  .regex(/^[a-zA-Z0-9._-]*$/)
                  .openapi({ description: 'The unique name of the typed link facet.' }),
                NextToken: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The pagination token.' }),
                MaxResults: z
                  .int()
                  .min(1)
                  .exactOptional()
                  .openapi({ description: 'The maximum number of results to retrieve.' }),
              })
              .openapi({ required: ['Name'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListTypedLinkFacetAttributesResponseSchema } },
      },
      480: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
      481: {
        description: 'InvalidArnException',
        content: { 'application/json': { schema: InvalidArnExceptionSchema } },
      },
      482: {
        description: 'RetryableConflictException',
        content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      487: {
        description: 'FacetNotFoundException',
        content: { 'application/json': { schema: FacetNotFoundExceptionSchema } },
      },
      488: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
    },
  })

export const postAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartitionRoute = createRoute(
  {
    method: 'post',
    path: '/amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition',
    description:
      'Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
    operationId: 'ListTypedLinkFacetNames',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-data-partition': z
          .string()
          .openapi({
            param: {
              name: 'x-amz-data-partition',
              in: 'header',
              required: true,
              description:
                'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        MaxResults: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'MaxResults',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination limit',
              required: false,
            },
          }),
        NextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'NextToken',
              in: 'query',
              schema: { type: 'string' },
              description: 'Pagination token',
              required: false,
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                NextToken: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The pagination token.' }),
                MaxResults: z
                  .int()
                  .min(1)
                  .exactOptional()
                  .openapi({ description: 'The maximum number of results to retrieve.' }),
              })
              .openapi({ required: [] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListTypedLinkFacetNamesResponseSchema } },
      },
      480: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
      481: {
        description: 'InvalidArnException',
        content: { 'application/json': { schema: InvalidArnExceptionSchema } },
      },
      482: {
        description: 'RetryableConflictException',
        content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      487: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
    },
  },
)

export const postAmazonclouddirectory20170111PolicyLookupXAmzDataPartitionRoute = createRoute({
  method: 'post',
  path: '/amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition',
  description:
    'Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don\'t have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don\'t lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.',
  operationId: 'LookupPolicy',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a>. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The token to request the next page of results.' }),
              MaxResults: z
                .int()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items to be retrieved in a single call. This is an approximate number.',
                }),
            })
            .openapi({ required: ['ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LookupPolicyResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111SchemaPublishXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition',
  description:
    'Publishes a development schema with a major version and a recommended minor version.',
  operationId: 'PublishSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the development schema. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Version: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(10)
                .openapi({
                  description:
                    'The major version under which the schema will be published. Schemas have both a major and minor version associated with them.',
                }),
              MinorVersion: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    'The minor version under which the schema will be published. This parameter is recommended. Schemas have both a major and minor version associated with them.',
                }),
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(32)
                .exactOptional()
                .openapi({
                  description:
                    'The new name under which the schema will be published. If this is not provided, the development schema is considered.',
                }),
            })
            .openapi({ required: ['Version'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PublishSchemaResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'SchemaAlreadyPublishedException',
      content: { 'application/json': { schema: SchemaAlreadyPublishedExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition',
  description: 'Removes the specified facet from the specified object.',
  operationId: 'RemoveFacetFromObject',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description: 'The ARN of the directory in which the object resides.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SchemaFacet: z
                .object({
                  SchemaArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The ARN of the schema that contains the facet with no minor component. See <a>arns</a> and <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_inplaceschemaupgrade.html">In-Place Schema Upgrade</a> for a description of when to provide minor versions. If this value is set, FacetName must also be set.',
                      }),
                  ).exactOptional(),
                  FacetName: FacetNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The name of the facet. If this value is set, SchemaArn must also be set.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'A facet.', required: [] }),
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
            })
            .openapi({ required: ['SchemaFacet', 'ObjectReference'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveFacetFromObjectResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111TagsAddRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/tags/add',
  description: 'An API operation for adding tags to a resource.',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.',
                }),
              Tags: z.array(TagSchema).openapi({ description: 'A list of tag key-value pairs.' }),
            })
            .openapi({ required: ['ResourceArn', 'Tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidTaggingRequestException',
      content: { 'application/json': { schema: InvalidTaggingRequestExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111TagsRemoveRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/tags/remove',
  description: 'An API operation for removing tags from a resource.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ResourceArn: z
                .string()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the resource. Tagging is only supported for directories.',
                }),
              TagKeys: z
                .array(TagKeySchema)
                .openapi({
                  description: 'Keys of the tag that need to be removed from the resource.',
                }),
            })
            .openapi({ required: ['ResourceArn', 'TagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidTaggingRequestException',
      content: { 'application/json': { schema: InvalidTaggingRequestExceptionSchema } },
    },
  },
})

export const postAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartitionRoute =
  createRoute({
    method: 'post',
    path: '/amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition',
    description:
      'Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.',
    operationId: 'UpdateLinkAttributes',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amz-data-partition': z
          .string()
          .openapi({
            param: {
              name: 'x-amz-data-partition',
              in: 'header',
              required: true,
              description:
                'The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                TypedLinkSpecifier: z
                  .object({
                    TypedLinkFacet: TypedLinkSchemaAndFacetNameSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Identifies the typed link facet that is associated with the typed link.',
                        }),
                    ).exactOptional(),
                    SourceObjectReference: ObjectReferenceSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Identifies the source object that the typed link will attach to.',
                        }),
                    ).exactOptional(),
                    TargetObjectReference: ObjectReferenceSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Identifies the target object that the typed link will attach to.',
                        }),
                    ).exactOptional(),
                    IdentityAttributeValues: AttributeNameAndValueListSchema.and(
                      z.any().openapi({ description: 'Identifies the attribute value to update.' }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.',
                    required: [],
                  }),
                AttributeUpdates: z
                  .array(LinkAttributeUpdateSchema)
                  .openapi({ description: 'The attributes update structure.' }),
              })
              .openapi({ required: ['TypedLinkSpecifier', 'AttributeUpdates'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateLinkAttributesResponseSchema } },
      },
      480: {
        description: 'InternalServiceException',
        content: { 'application/json': { schema: InternalServiceExceptionSchema } },
      },
      481: {
        description: 'InvalidArnException',
        content: { 'application/json': { schema: InvalidArnExceptionSchema } },
      },
      482: {
        description: 'RetryableConflictException',
        content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
      },
      483: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      484: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
      485: {
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      486: {
        description: 'DirectoryNotEnabledException',
        content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
      },
      487: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      488: {
        description: 'FacetValidationException',
        content: { 'application/json': { schema: FacetValidationExceptionSchema } },
      },
    },
  })

export const putAmazonclouddirectory20170111ObjectUpdateXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition',
  description: "Updates a given object's attributes.",
  operationId: 'UpdateObjectAttributes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ObjectReference: z
                .object({
                  Selector: SelectorObjectReferenceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>A path selector supports easy selection of an object by the parent/child links leading to it from the directory root. Use the link names from each parent/child link to construct the path. Path selectors start with a slash (/) and link names are separated by slashes. For more information about paths, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_access_objects.html">Access Objects</a>. You can identify an object in one of the following ways:</p> <ul> <li> <p> <i>$ObjectIdentifier</i> - An object identifier is an opaque string provided by Amazon Cloud Directory. When creating objects, the system will provide you with the identifier of the created object. An object’s identifier is immutable and no two objects will ever share the same object identifier. To identify an object with ObjectIdentifier, the ObjectIdentifier must be wrapped in double quotes. </p> </li> <li> <p> <i>/some/path</i> - Identifies the object based on path</p> </li> <li> <p> <i>#SomeBatchReference</i> - Identifies the object in a batch call</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'The reference that identifies an object.', required: [] }),
              AttributeUpdates: z
                .array(ObjectAttributeUpdateSchema)
                .openapi({ description: 'The attributes update structure.' }),
            })
            .openapi({ required: ['ObjectReference', 'AttributeUpdates'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateObjectAttributesResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'DirectoryNotEnabledException',
      content: { 'application/json': { schema: DirectoryNotEnabledExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'LinkNameAlreadyInUseException',
      content: { 'application/json': { schema: LinkNameAlreadyInUseExceptionSchema } },
    },
    489: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111SchemaUpdateXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition',
  description:
    'Updates the schema name with a new name. Only development schema names can be updated.',
  operationId: 'UpdateSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the development schema. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(32)
                .openapi({ description: 'The name of the schema.' }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSchemaResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartitionRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition',
  description:
    'Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
  operationId: 'UpdateTypedLinkFacet',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'x-amz-data-partition': z
        .string()
        .openapi({
          param: {
            name: 'x-amz-data-partition',
            in: 'header',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .openapi({ description: 'The unique name of the typed link facet.' }),
              AttributeUpdates: z
                .array(TypedLinkFacetAttributeUpdateSchema)
                .openapi({ description: 'Attributes update structure.' }),
              IdentityAttributeOrder: z
                .array(AttributeNameSchema)
                .openapi({
                  description:
                    'The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.',
                }),
            })
            .openapi({ required: ['Name', 'AttributeUpdates', 'IdentityAttributeOrder'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTypedLinkFacetResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'FacetValidationException',
      content: { 'application/json': { schema: FacetValidationExceptionSchema } },
    },
    487: {
      description: 'InvalidFacetUpdateException',
      content: { 'application/json': { schema: InvalidFacetUpdateExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    489: {
      description: 'FacetNotFoundException',
      content: { 'application/json': { schema: FacetNotFoundExceptionSchema } },
    },
    490: {
      description: 'InvalidRuleException',
      content: { 'application/json': { schema: InvalidRuleExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111SchemaUpgradeappliedRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/schema/upgradeapplied',
  description:
    'Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.',
  operationId: 'UpgradeAppliedSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PublishedSchemaArn: z
                .string()
                .openapi({
                  description: 'The revision of the published schema to upgrade the directory to.',
                }),
              DirectoryArn: z
                .string()
                .openapi({
                  description:
                    'The ARN for the directory to which the upgraded schema will be applied.',
                }),
              DryRun: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Used for testing whether the major version schemas are backward compatible or not. If schema compatibility fails, an exception would be thrown else the call would succeed but no changes will be saved. This parameter is optional.',
                }),
            })
            .openapi({ required: ['PublishedSchemaArn', 'DirectoryArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpgradeAppliedSchemaResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'IncompatibleSchemaException',
      content: { 'application/json': { schema: IncompatibleSchemaExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidAttachmentException',
      content: { 'application/json': { schema: InvalidAttachmentExceptionSchema } },
    },
    488: {
      description: 'SchemaAlreadyExistsException',
      content: { 'application/json': { schema: SchemaAlreadyExistsExceptionSchema } },
    },
  },
})

export const putAmazonclouddirectory20170111SchemaUpgradepublishedRoute = createRoute({
  method: 'put',
  path: '/amazonclouddirectory/2017-01-11/schema/upgradepublished',
  description:
    'Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.',
  operationId: 'UpgradePublishedSchema',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              DevelopmentSchemaArn: z
                .string()
                .openapi({
                  description:
                    'The ARN of the development schema with the changes used for the upgrade.',
                }),
              PublishedSchemaArn: z
                .string()
                .openapi({ description: 'The ARN of the published schema to be upgraded.' }),
              MinorVersion: z
                .string()
                .regex(/^[a-zA-Z0-9._-]*$/)
                .min(1)
                .max(10)
                .openapi({
                  description:
                    'Identifies the minor version of the published schema that will be created. This parameter is NOT optional.',
                }),
              DryRun: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Used for testing whether the Development schema provided is backwards compatible, or not, with the publish schema provided by the user to be upgraded. If schema compatibility fails, an exception would be thrown else the call would succeed. This parameter is optional and defaults to false.',
                }),
            })
            .openapi({ required: ['DevelopmentSchemaArn', 'PublishedSchemaArn', 'MinorVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpgradePublishedSchemaResponseSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
    481: {
      description: 'InvalidArnException',
      content: { 'application/json': { schema: InvalidArnExceptionSchema } },
    },
    482: {
      description: 'RetryableConflictException',
      content: { 'application/json': { schema: RetryableConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'IncompatibleSchemaException',
      content: { 'application/json': { schema: IncompatibleSchemaExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'InvalidAttachmentException',
      content: { 'application/json': { schema: InvalidAttachmentExceptionSchema } },
    },
    488: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
