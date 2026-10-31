import { createRoute, z } from '@hono/zod-openapi'

const GoogleChromePolicyVersionsV1NumericRangeConstraintSchema = z
  .object({
    maximum: z.string().exactOptional().openapi({ description: 'Maximum value.' }),
    minimum: z.string().exactOptional().openapi({ description: 'Minimum value.' }),
  })
  .openapi({
    description: 'A constraint on upper and/or lower bounds, with at least one being set.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1NumericRangeConstraint')

const GoogleChromePolicyVersionsV1FieldConstraintsSchema = z
  .object({
    numericRangeConstraint:
      GoogleChromePolicyVersionsV1NumericRangeConstraintSchema.exactOptional().openapi({
        description: 'The allowed range for numeric fields.',
      }),
  })
  .openapi({ description: 'Information about any range constraints.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1FieldConstraints')

const GoogleChromePolicyVersionsV1PolicySchemaFieldDependenciesSchema = z
  .object({
    sourceField: z
      .string()
      .exactOptional()
      .openapi({ description: 'The source field which this field depends on.' }),
    sourceFieldValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value which the source field must have for this field to be allowed to be set.',
      }),
  })
  .openapi({
    description: 'The field and the value it must have for another field to be allowed to be set.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies')

const GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescriptionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Additional description for this value.',
        readOnly: true,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The string represenstation of the value that can be set for the field.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Provides detailed information about a known value that is allowed for a particular field in a PolicySchema.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription')

const GoogleChromePolicyVersionsV1PolicySchemaRequiredItemsSchema = z
  .object({
    fieldConditions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The value(s) of the field that provoke required field enforcement. An empty field_conditions implies that any value assigned to this field will provoke required field enforcement.',
      }),
    requiredFields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The fields that are required as a consequence of the field conditions.',
      }),
  })
  .openapi({
    description: 'The fields that will become required based on the value of this field.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1PolicySchemaRequiredItems')

type GoogleChromePolicyVersionsV1PolicySchemaFieldDescriptionType = {
  defaultValue?: { [key: string]: unknown }
  description?: string
  field?: string
  fieldConstraints?: z.infer<typeof GoogleChromePolicyVersionsV1FieldConstraintsSchema>
  fieldDependencies?: z.infer<
    typeof GoogleChromePolicyVersionsV1PolicySchemaFieldDependenciesSchema
  >[]
  fieldDescription?: string
  inputConstraint?: string
  knownValueDescriptions?: z.infer<
    typeof GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescriptionSchema
  >[]
  name?: string
  nestedFieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescriptionType[]
  requiredItems?: z.infer<typeof GoogleChromePolicyVersionsV1PolicySchemaRequiredItemsSchema>[]
}

const Proto2EnumValueDescriptorProtoSchema = z
  .object({ name: z.string().exactOptional(), number: z.int32().exactOptional() })
  .openapi({ description: 'Describes a value within an enum.', required: [] })
  .openapi('Proto2EnumValueDescriptorProto')

const Proto2EnumDescriptorProtoSchema = z
  .object({
    name: z.string().exactOptional(),
    value: z.array(Proto2EnumValueDescriptorProtoSchema).exactOptional(),
  })
  .openapi({ description: 'Describes an enum type.', required: [] })
  .openapi('Proto2EnumDescriptorProto')

const Proto2FieldDescriptorProtoSchema = z
  .object({
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For numeric types, contains the original text representation of the value. For booleans, "true" or "false". For strings, contains the default text contents (not escaped in any way). For bytes, contains the C escaped value. All bytes >= 128 are escaped.',
      }),
    jsonName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "JSON name of this field. The value is set by protocol compiler. If the user has set a \"json_name\" option on this field, that option's value will be used. Otherwise, it's deduced from the field's name by converting it to camelCase.",
      }),
    label: z.enum(['LABEL_OPTIONAL', 'LABEL_REQUIRED', 'LABEL_REPEATED']).exactOptional(),
    name: z.string().exactOptional(),
    number: z.int32().exactOptional(),
    oneofIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "If set, gives the index of a oneof in the containing type's oneof_decl list. This field is a member of that oneof.",
      }),
    proto3Optional: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, this is a proto3 "optional". When a proto3 field is optional, it tracks presence regardless of field type. When proto3_optional is true, this field must be belong to a oneof to signal to old proto3 clients that presence is tracked for this field. This oneof is known as a "synthetic" oneof, and this field must be its sole member (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs exist in the descriptor only, and do not generate any API. Synthetic oneofs must be ordered after all "real" oneofs. For message fields, proto3_optional doesn\'t create any semantic change, since non-repeated message fields always track presence. However it still indicates the semantic detail of whether the user wrote "optional" or not. This can be useful for round-tripping the .proto file. For consistency we give message fields a synthetic oneof also, even though it is not required to track presence. This is especially important because the parser can\'t tell if a field is a message or an enum, so it must always create a synthetic oneof. Proto2 optional fields do not set this flag, because they already indicate optional with `LABEL_OPTIONAL`.',
      }),
    type: z
      .enum([
        'TYPE_DOUBLE',
        'TYPE_FLOAT',
        'TYPE_INT64',
        'TYPE_UINT64',
        'TYPE_INT32',
        'TYPE_FIXED64',
        'TYPE_FIXED32',
        'TYPE_BOOL',
        'TYPE_STRING',
        'TYPE_GROUP',
        'TYPE_MESSAGE',
        'TYPE_BYTES',
        'TYPE_UINT32',
        'TYPE_ENUM',
        'TYPE_SFIXED32',
        'TYPE_SFIXED64',
        'TYPE_SINT32',
        'TYPE_SINT64',
      ])
      .exactOptional()
      .openapi({
        description:
          'If type_name is set, this need not be set. If both this and type_name are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.',
      }),
    typeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "For message and enum types, this is the name of the type. If the name starts with a '.', it is fully-qualified. Otherwise, C++-like scoping rules are used to find the type (i.e. first the nested types within this message are searched, then within the parent, on up to the root namespace).",
      }),
  })
  .openapi({ description: 'Describes a field within a message.', required: [] })
  .openapi('Proto2FieldDescriptorProto')

const Proto2OneofDescriptorProtoSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ description: 'Describes a oneof.', required: [] })
  .openapi('Proto2OneofDescriptorProto')

type Proto2DescriptorProtoType = {
  enumType?: z.infer<typeof Proto2EnumDescriptorProtoSchema>[]
  field?: z.infer<typeof Proto2FieldDescriptorProtoSchema>[]
  name?: string
  nestedType?: Proto2DescriptorProtoType[]
  oneofDecl?: z.infer<typeof Proto2OneofDescriptorProtoSchema>[]
}

const GoogleTypeDateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('GoogleTypeDate')

const ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycleSchema = z
  .object({
    deprecatedInFavorOf: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'In the event that this policy was deprecated in favor of another policy, the fully qualified namespace(s) of the new policies as they will show in PolicyAPI.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description about current life cycle.' }),
    endSupport: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'End supporting date for current policy.',
    }),
    policyApiLifecycleStage: z
      .enum(['API_UNSPECIFIED', 'API_PREVIEW', 'API_DEVELOPMENT', 'API_CURRENT', 'API_DEPRECATED'])
      .exactOptional()
      .openapi({ description: 'Indicate current life cycle stage of the policy API.' }),
  })
  .openapi({ required: [] })
  .openapi('ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle')

const GoogleChromePolicyVersionsV1AdditionalTargetKeyNameSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Key name.' }),
    keyDescription: z.string().exactOptional().openapi({ description: 'Key description.' }),
  })
  .openapi({
    description:
      'Additional key names that will be used to identify the target of the policy value.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1AdditionalTargetKeyName')

const GoogleChromePolicyVersionsV1PolicyTargetKeySchema = z
  .object({
    additionalTargetKeys: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map containing the additional target key name and value pairs used to further identify the target of the policy.',
      }),
    targetResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target resource on which this policy is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") * Group ("groups/{group_id}")',
      }),
  })
  .openapi({
    description: 'The key used to identify the target on which the policy will be applied.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1PolicyTargetKey')

const GoogleChromePolicyVersionsV1DeleteGroupPolicyRequestSchema = z
  .object({
    policySchema: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The fully qualified name of the policy schema that is being inherited.',
      }),
    policyTargetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Required. The key of the target for which we want to modify a policy. The target resource must point to a Group.',
    }),
  })
  .openapi({
    description: 'Request parameters for deleting the policy value of a specific group target.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest')

const GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequestSchema = z
  .object({
    requests: z
      .array(GoogleChromePolicyVersionsV1DeleteGroupPolicyRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'List of policies that will be deleted as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. ',
      }),
  })
  .openapi({
    description: 'Request message for specifying that multiple policy values will be deleted.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest')

const GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequestSchema = z
  .object({
    policySchema: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The fully qualified name of the policy schema that is being inherited.',
      }),
    policyTargetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Required. The key of the target for which we want to modify a policy. The target resource must point to an Org Unit.',
    }),
  })
  .openapi({
    description:
      'Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest')

const GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequestSchema = z
  .object({
    requests: z
      .array(GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'List of policies that have to inherit their values as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. ',
      }),
  })
  .openapi({
    description:
      'Request message for specifying that multiple policy values inherit their value from their parents.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest')

const GoogleChromePolicyVersionsV1PolicyValueSchema = z
  .object({
    policySchema: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The fully qualified name of the policy schema associated with this policy.',
      }),
    value: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'The value of the policy that is compatible with the schema that it is associated with.',
      }),
  })
  .openapi({ description: 'A particular value for a policy managed by the service.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1PolicyValue')

const GoogleChromePolicyVersionsV1ModifyGroupPolicyRequestSchema = z
  .object({
    policyTargetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Required. The key of the target for which we want to modify a policy. The target resource must point to a Group.',
    }),
    policyValue: GoogleChromePolicyVersionsV1PolicyValueSchema.exactOptional().openapi({
      description: 'The new value for the policy.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'.",
      }),
  })
  .openapi({
    description: 'Request parameters for modifying a policy value for a specific group target.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest')

const GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequestSchema = z
  .object({
    requests: z
      .array(GoogleChromePolicyVersionsV1ModifyGroupPolicyRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. ',
      }),
  })
  .openapi({
    description:
      'Request message for modifying multiple policy values for a specific group-based target.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest')

const GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequestSchema = z
  .object({
    policyTargetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Required. The key of the target for which we want to modify a policy. The target resource must point to an Org Unit.',
    }),
    policyValue: GoogleChromePolicyVersionsV1PolicyValueSchema.exactOptional().openapi({
      description: 'The new value for the policy.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'.",
      }),
  })
  .openapi({
    description: 'Request parameters for modifying a policy value for a specific org unit target.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest')

const GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequestSchema = z
  .object({
    requests: z
      .array(GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. ',
      }),
  })
  .openapi({
    description: 'Request message for modifying multiple policy values for a specific target.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest')

const GoogleChromePolicyVersionsV1CertificateReferenceSchema = z
  .object({
    network: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of the referencing network.',
        readOnly: true,
      }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The obfuscated id of the org unit the referencing network is in.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Error information for removing of a specific certificate on a specific target. A reference to a certificate.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1CertificateReference')

const GoogleChromePolicyVersionsV1NetworkSettingSchema = z
  .object({
    policySchema: z
      .string()
      .exactOptional()
      .openapi({ description: 'The fully qualified name of the network setting.' }),
    value: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The value of the network setting.' }),
  })
  .openapi({ description: 'A network setting contains network configurations.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1NetworkSetting')

const GoogleChromePolicyVersionsV1DefineCertificateRequestSchema = z
  .object({
    ceritificateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The optional name of the certificate. If not specified, the certificate issuer will be used as the name.',
      }),
    certificate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The raw contents of the .PEM, .CRT, or .CER file.' }),
    settings: z
      .array(GoogleChromePolicyVersionsV1NetworkSettingSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Certificate settings within the chrome.networks.certificates namespace.',
      }),
    targetResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The target resource on which this certificate is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")',
      }),
  })
  .openapi({ description: 'Request object for creating a certificate.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1DefineCertificateRequest')

const GoogleChromePolicyVersionsV1DefineCertificateResponseSchema = z
  .object({
    networkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The guid of the certificate created by the action.' }),
    settings: z
      .array(GoogleChromePolicyVersionsV1NetworkSettingSchema)
      .exactOptional()
      .openapi({ description: 'the affiliated settings of the certificate (NOT IMPLEMENTED)' }),
    targetResource: z
      .string()
      .exactOptional()
      .openapi({ description: 'the resource at which the certificate is defined.' }),
  })
  .openapi({ description: 'Response object for creating a certificate.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1DefineCertificateResponse')

const GoogleChromePolicyVersionsV1DefineNetworkRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the new created network.' }),
    settings: z
      .array(GoogleChromePolicyVersionsV1NetworkSettingSchema)
      .exactOptional()
      .openapi({ description: 'Required. Detailed network settings.' }),
    targetResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")',
      }),
  })
  .openapi({ description: 'Request object for creating a new network.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1DefineNetworkRequest')

const GoogleChromePolicyVersionsV1DefineNetworkResponseSchema = z
  .object({
    networkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Network ID of the new created network.' }),
    settings: z
      .array(GoogleChromePolicyVersionsV1NetworkSettingSchema)
      .exactOptional()
      .openapi({ description: 'Detailed network settings of the new created network' }),
    targetResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")',
      }),
  })
  .openapi({ description: 'Response object for creating a network.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1DefineNetworkResponse')

const GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequestSchema = z
  .object({
    policyNamespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace of the policy type for the request.' }),
    policySchema: z
      .string()
      .exactOptional()
      .openapi({ description: 'The schema name of the policy for the request.' }),
    policyTargetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Required. The key of the target for which we want to retrieve the group priority ordering. The target resource must point to an app.',
    }),
  })
  .openapi({
    description: 'Request message for listing the group priority ordering of an app.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest')

const GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponseSchema = z
  .object({
    groupIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The group IDs, in priority ordering.',
        readOnly: true,
      }),
    policyNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The namespace of the policy type of the group IDs.',
        readOnly: true,
      }),
    policySchema: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The schema name of the policy for the group IDs.',
        readOnly: true,
      }),
    policyTargetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Output only. The target resource for which the group priority ordering has been retrieved.',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'Response message for listing the group priority ordering of an app.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse')

const Proto2DescriptorProtoSchema: z.ZodType<Proto2DescriptorProtoType> = z
  .lazy(() =>
    z
      .object({
        enumType: z.array(Proto2EnumDescriptorProtoSchema).exactOptional(),
        field: z.array(Proto2FieldDescriptorProtoSchema).exactOptional(),
        name: z.string().exactOptional(),
        nestedType: z.array(Proto2DescriptorProtoSchema).exactOptional(),
        oneofDecl: z.array(Proto2OneofDescriptorProtoSchema).exactOptional(),
      })
      .openapi({ description: 'Describes a message type.', required: [] }),
  )
  .openapi('Proto2DescriptorProto')

const Proto2FileDescriptorProtoSchema = z
  .object({
    enumType: z.array(Proto2EnumDescriptorProtoSchema).exactOptional(),
    messageType: z
      .array(Proto2DescriptorProtoSchema)
      .exactOptional()
      .openapi({ description: 'All top-level definitions in this file.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'file name, relative to root of source tree' }),
    package: z.string().exactOptional().openapi({ description: 'e.g. "foo", "foo.bar", etc.' }),
    syntax: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The syntax of the proto file. The supported values are "proto2", "proto3", and "editions". If `edition` is present, this value must be "editions".',
      }),
  })
  .openapi({ description: 'Describes a complete .proto file.', required: [] })
  .openapi('Proto2FileDescriptorProto')

const GoogleChromePolicyVersionsV1PolicySchemaFieldDescriptionSchema: z.ZodType<GoogleChromePolicyVersionsV1PolicySchemaFieldDescriptionType> =
  z
    .lazy(() =>
      z
        .object({
          defaultValue: z
            .any()
            .exactOptional()
            .openapi({
              description: 'Output only. Client default if the policy is unset.',
              readOnly: true,
            }),
          description: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Deprecated. Use name and field_description instead. The description for the field.',
            }),
          field: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Output only. The name of the field for associated with this description.',
              readOnly: true,
            }),
          fieldConstraints:
            GoogleChromePolicyVersionsV1FieldConstraintsSchema.exactOptional().openapi({
              description:
                'Output only. Information on any input constraints associated on the values for the field.',
              readOnly: true,
            }),
          fieldDependencies: z
            .array(GoogleChromePolicyVersionsV1PolicySchemaFieldDependenciesSchema)
            .exactOptional()
            .openapi({
              description:
                'Output only. Provides a list of fields and values. At least one of the fields must have the corresponding value in order for this field to be allowed to be set.',
              readOnly: true,
            }),
          fieldDescription: z
            .string()
            .exactOptional()
            .openapi({ description: 'Output only. The description of the field.', readOnly: true }),
          inputConstraint: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Output only. Any input constraints associated on the values for the field.',
              readOnly: true,
            }),
          knownValueDescriptions: z
            .array(GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescriptionSchema)
            .exactOptional()
            .openapi({
              description:
                'Output only. If the field has a set of known values, this field will provide a description for these values.',
              readOnly: true,
            }),
          name: z
            .string()
            .exactOptional()
            .openapi({ description: 'Output only. The name of the field.', readOnly: true }),
          nestedFieldDescriptions: z
            .array(GoogleChromePolicyVersionsV1PolicySchemaFieldDescriptionSchema)
            .exactOptional()
            .openapi({
              description:
                'Output only. Provides the description of the fields nested in this field, if the field is a message type that defines multiple fields.',
              readOnly: true,
            }),
          requiredItems: z
            .array(GoogleChromePolicyVersionsV1PolicySchemaRequiredItemsSchema)
            .exactOptional()
            .openapi({
              description:
                'Output only. Provides a list of fields that are required to be set if this field has a certain value.',
              readOnly: true,
            }),
        })
        .openapi({
          description:
            'Provides detailed information for a particular field that is part of a PolicySchema.',
          required: [],
        }),
    )
    .openapi('GoogleChromePolicyVersionsV1PolicySchemaFieldDescription')

const GoogleChromePolicyVersionsV1PolicySchemaNoticeDescriptionSchema = z
  .object({
    acknowledgementRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the user needs to acknowledge the notice message before the value can be set.',
        readOnly: true,
      }),
    field: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The field name associated with the notice.',
        readOnly: true,
      }),
    noticeMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The notice message associate with the value of the field.',
        readOnly: true,
      }),
    noticeValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The value of the field that has a notice. When setting the field to this value, the user may be required to acknowledge the notice message in order for the value to be set.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Provides special notice messages related to a particular value in a field that is part of a PolicySchema.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription')

const GoogleChromePolicyVersionsV1PolicySchemaSchema = z
  .object({
    accessRestrictions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Specific access restrictions related to this policy.',
        readOnly: true,
      }),
    additionalTargetKeyNames: z
      .array(GoogleChromePolicyVersionsV1AdditionalTargetKeyNameSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional key names that will be used to identify the target of the policy value. When specifying a `policyTargetKey`, each of the additional keys specified here will have to be included in the `additionalTargetKeys` map.',
        readOnly: true,
      }),
    categoryTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the category in which a setting belongs.' }),
    definition: Proto2FileDescriptorProtoSchema.exactOptional().openapi({
      description: 'Schema definition using proto descriptor.',
    }),
    fieldDescriptions: z
      .array(GoogleChromePolicyVersionsV1PolicySchemaFieldDescriptionSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Detailed description of each field that is part of the schema.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Format: name=customers/{customer}/policySchemas/{schema_namespace}',
      }),
    notices: z
      .array(GoogleChromePolicyVersionsV1PolicySchemaNoticeDescriptionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Special notice messages related to setting certain values in certain fields in the schema.',
        readOnly: true,
      }),
    policyApiLifecycle:
      ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycleSchema.exactOptional().openapi({
        description: 'Output only. Current lifecycle information.',
        readOnly: true,
      }),
    policyDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Description about the policy schema for user consumption.',
        readOnly: true,
      }),
    schemaName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The fully qualified name of the policy schema. This value is used to fill the field `policy_schema` in PolicyValue when calling BatchInheritOrgUnitPolicies BatchModifyOrgUnitPolicies BatchModifyGroupPolicies or BatchDeleteGroupPolicies.',
        readOnly: true,
      }),
    supportUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. URI to related support article for this schema.',
        readOnly: true,
      }),
    validTargetResources: z
      .array(z.enum(['TARGET_RESOURCE_UNSPECIFIED', 'ORG_UNIT', 'GROUP']))
      .exactOptional()
      .openapi({
        description: 'Output only. Information about applicable target resources for the policy.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Resource representing a policy schema.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1PolicySchema')

const GoogleChromePolicyVersionsV1ListPolicySchemasResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The page token used to get the next page of policy schemas.' }),
    policySchemas: z
      .array(GoogleChromePolicyVersionsV1PolicySchemaSchema)
      .exactOptional()
      .openapi({ description: 'The list of policy schemas that match the query.' }),
  })
  .openapi({
    description: 'Response message for listing policy schemas that match a filter.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1ListPolicySchemasResponse')

const GoogleChromePolicyVersionsV1PolicyModificationFieldErrorSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The error message related to the field.',
        readOnly: true,
      }),
    field: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of the field with the error.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Error information for a modification request of a specific field on a specific policy.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1PolicyModificationFieldError')

const GoogleChromePolicyVersionsV1PolicyModificationErrorSchema = z
  .object({
    errors: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The non-field errors related to the modification.',
        readOnly: true,
      }),
    fieldErrors: z
      .array(GoogleChromePolicyVersionsV1PolicyModificationFieldErrorSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The error messages related to the modification.',
        readOnly: true,
      }),
    policySchema: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The specific policy schema modification that had an error.',
        readOnly: true,
      }),
    policyTargetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description: 'Output only. The specific policy target modification that had error.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'Error information for a modification request of a specific policy on a specific target.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1PolicyModificationError')

const GoogleChromePolicyVersionsV1PolicyModificationErrorDetailsSchema = z
  .object({
    modificationErrors: z
      .array(GoogleChromePolicyVersionsV1PolicyModificationErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. List of specific policy modifications errors that may have occurred during a modifying request.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Details of the errors encountered during a policy modification request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1PolicyModificationErrorDetails')

const GoogleChromePolicyVersionsV1RemoveCertificateErrorDetailsSchema = z
  .object({
    certificateReferences: z
      .array(GoogleChromePolicyVersionsV1CertificateReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. If the certificate was not removed, a list of references to the certificate that prevented it from being removed. Only unreferenced certificates can be removed.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Details of the errors encountered during a remove certificate request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails')

const GoogleChromePolicyVersionsV1RemoveCertificateRequestSchema = z
  .object({
    networkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The GUID of the certificate to remove.' }),
    targetResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The target resource on which this certificate will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")',
      }),
  })
  .openapi({ description: 'Request object for removing a certificate.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1RemoveCertificateRequest')

const GoogleChromePolicyVersionsV1RemoveCertificateResponseSchema = z
  .object({})
  .openapi({ description: 'Response object for removing a certificate.' })
  .openapi('GoogleChromePolicyVersionsV1RemoveCertificateResponse')

const GoogleChromePolicyVersionsV1RemoveNetworkRequestSchema = z
  .object({
    networkId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The GUID of the network to remove.' }),
    targetResource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The target resource on which this network will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}")',
      }),
  })
  .openapi({ description: 'Request object for removing a network', required: [] })
  .openapi('GoogleChromePolicyVersionsV1RemoveNetworkRequest')

const GoogleChromePolicyVersionsV1RemoveNetworkResponseSchema = z
  .object({})
  .openapi({ description: 'Response object for removing a network.' })
  .openapi('GoogleChromePolicyVersionsV1RemoveNetworkResponse')

const GoogleChromePolicyVersionsV1ResolveRequestSchema = z
  .object({
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of policies to return, defaults to 100 and has a maximum of 1000.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The page token used to retrieve a specific page of the request.' }),
    policySchemaFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The schema filter to apply to the resolve request. Specify a schema name to view a particular schema, for example: chrome.users.ShowLogoutButton Wildcards are supported, but only in the leaf portion of the schema name. Wildcards cannot be used in namespace directly. Please read https://developers.google.com/chrome/policy/guides/policy-schemas for details on schema namespaces. For example: Valid: "chrome.users.*", "chrome.users.apps.*", "chrome.printers.*" Invalid: "*", "*.users", "chrome.*", "chrome.*.apps.*"',
      }),
    policyTargetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Required. The key of the target resource on which the policies should be resolved.',
    }),
  })
  .openapi({
    description: 'Request message for getting the resolved policy value for a specific target.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1ResolveRequest')

const GoogleChromePolicyVersionsV1ResolvedPolicySchema = z
  .object({
    addedSourceKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Output only. The added source key establishes at which level an entity was explicitly added for management. This is useful for certain type of policies that are only applied if they are explicitly added for management. For example: apps and networks. An entity can only be deleted from management in an Organizational Unit that it was explicitly added to. If this is not present it means that the policy is managed without the need to explicitly add an entity, for example: standard user or device policies.',
      readOnly: true,
    }),
    sourceKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Output only. The source resource from which this policy value is obtained. May be the same as `targetKey` if the policy is directly modified on the target, otherwise it would be another resource from which the policy gets its value (if applicable). If not present, the source is the default value for the customer.',
      readOnly: true,
    }),
    targetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description: 'Output only. The target resource for which the resolved policy value applies.',
      readOnly: true,
    }),
    value: GoogleChromePolicyVersionsV1PolicyValueSchema.exactOptional().openapi({
      description: 'Output only. The resolved value of the policy.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'The resolved value of a policy for a given target.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1ResolvedPolicy')

const GoogleChromePolicyVersionsV1ResolveResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token used to get the next set of resolved policies found by the request.',
      }),
    resolvedPolicies: z
      .array(GoogleChromePolicyVersionsV1ResolvedPolicySchema)
      .exactOptional()
      .openapi({ description: 'The list of resolved policies found by the resolve request.' }),
  })
  .openapi({
    description: 'Response message for getting the resolved policy value for a specific target.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1ResolveResponse')

const GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequestSchema = z
  .object({
    groupIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. The group IDs, in desired priority ordering.' }),
    policyNamespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace of the policy type for the request.' }),
    policySchema: z
      .string()
      .exactOptional()
      .openapi({ description: 'The schema name of the policy for the request.' }),
    policyTargetKey: GoogleChromePolicyVersionsV1PolicyTargetKeySchema.exactOptional().openapi({
      description:
        'Required. The key of the target for which we want to update the group priority ordering. The target resource must point to an app.',
    }),
  })
  .openapi({
    description: 'Request message for updating the group priority ordering of an app.',
    required: [],
  })
  .openapi('GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest')

const GoogleChromePolicyVersionsV1UploadPolicyFileRequestSchema = z
  .object({
    policyField: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The fully qualified policy schema and field name this file is uploaded for. This information will be used to validate the content type of the file.',
      }),
  })
  .openapi({ description: 'Request message for uploading a file for a policy.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1UploadPolicyFileRequest')

const GoogleChromePolicyVersionsV1UploadPolicyFileResponseSchema = z
  .object({
    downloadUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The uri for end user to download the file.' }),
  })
  .openapi({ description: 'Response message for downloading an uploaded file.', required: [] })
  .openapi('GoogleChromePolicyVersionsV1UploadPolicyFileResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/chrome.management.policy':
          'See, edit, create or delete policies applied to Chrome OS and Chrome Browsers managed within your organization',
        'https://www.googleapis.com/auth/chrome.management.policy.readonly':
          'See policies applied to Chrome OS and Chrome Browsers managed within your organization',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/chrome.management.policy':
          'See, edit, create or delete policies applied to Chrome OS and Chrome Browsers managed within your organization',
        'https://www.googleapis.com/auth/chrome.management.policy.readonly':
          'See policies applied to Chrome OS and Chrome Browsers managed within your organization',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1CustomerPoliciesFilesUploadPolicyFileRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/files:uploadPolicyFile',
  tags: ['media'],
  description:
    'Creates an enterprise file from the content provided by user. Returns a public download url for end user.',
  operationId: 'chromepolicy.media.upload',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer for which the file upload will apply.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': {
          schema: GoogleChromePolicyVersionsV1UploadPolicyFileRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1UploadPolicyFileResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesGroupsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/groups:batchDelete',
  tags: ['customers'],
  description:
    'Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.',
  operationId: 'chromepolicy.customers.policies.groups.batchDelete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesGroupsBatchModifyRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/groups:batchModify',
  tags: ['customers'],
  description:
    'Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.',
  operationId: 'chromepolicy.customers.policies.groups.batchModify',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesGroupsListGroupPriorityOrderingRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/groups:listGroupPriorityOrdering',
  tags: ['customers'],
  description:
    'Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.',
  operationId: 'chromepolicy.customers.policies.groups.listGroupPriorityOrdering',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy.readonly'],
    },
  ],
})

export const postV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/groups:updateGroupPriorityOrdering',
  tags: ['customers'],
  description:
    'Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.',
  operationId: 'chromepolicy.customers.policies.groups.updateGroupPriorityOrdering',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesNetworksDefineCertificateRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/networks:defineCertificate',
  tags: ['customers'],
  description: 'Creates a certificate at a specified OU for a customer.',
  operationId: 'chromepolicy.customers.policies.networks.defineCertificate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer for which the certificate will apply.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1DefineCertificateRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1DefineCertificateResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesNetworksDefineNetworkRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/networks:defineNetwork',
  tags: ['customers'],
  description: 'Define a new network.',
  operationId: 'chromepolicy.customers.policies.networks.defineNetwork',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer who will own this new network.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1DefineNetworkRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1DefineNetworkResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesNetworksRemoveCertificateRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/networks:removeCertificate',
  tags: ['customers'],
  description: 'Remove an existing certificate by guid.',
  operationId: 'chromepolicy.customers.policies.networks.removeCertificate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer whose certificate will be removed.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1RemoveCertificateRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1RemoveCertificateResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesNetworksRemoveNetworkRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/networks:removeNetwork',
  tags: ['customers'],
  description: 'Remove an existing network by guid.',
  operationId: 'chromepolicy.customers.policies.networks.removeNetwork',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer whose network will be removed.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1RemoveNetworkRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1RemoveNetworkResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesOrgunitsBatchInheritRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/orgunits:batchInherit',
  tags: ['customers'],
  description:
    'Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.',
  operationId: 'chromepolicy.customers.policies.orgunits.batchInherit',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the G Suite account or literal "my_customer" for the customer associated to the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesOrgunitsBatchModifyRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies/orgunits:batchModify',
  tags: ['customers'],
  description:
    'Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.',
  operationId: 'chromepolicy.customers.policies.orgunits.batchModify',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the G Suite account or literal "my_customer" for the customer associated to the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
  ],
})

export const postV1CustomerPoliciesResolveRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}/policies:resolve',
  tags: ['customers'],
  description: 'Gets the resolved policy values for a list of policies that match a search query.',
  operationId: 'chromepolicy.customers.policies.resolve',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the G Suite account or literal "my_customer" for the customer associated to the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleChromePolicyVersionsV1ResolveRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1ResolveResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy.readonly'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['customers'],
  description: 'Get a specific policy schema for a customer by its resource name.',
  operationId: 'chromepolicy.customers.policySchemas.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The policy schema resource name to query.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleChromePolicyVersionsV1PolicySchemaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy.readonly'],
    },
  ],
})

export const getV1ParentPolicySchemasRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/policySchemas',
  tags: ['customers'],
  description:
    'Gets a list of policy schemas that match a specified filter value for a given customer.',
  operationId: 'chromepolicy.customers.policySchemas.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The schema filter used to find a particular schema based on fields like its resource name, description and `additionalTargetKeyNames`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of policy schemas to return, defaults to 100 and has a maximum of 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The page token used to retrieve a specific page of the listing request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer for which the listing request will apply.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromePolicyVersionsV1ListPolicySchemasResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.policy.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.policy.readonly'],
    },
  ],
})
