import { createRoute, z } from '@hono/zod-openapi'

const ValueAsStringSchema = z.string().regex(/.*/).max(358400).openapi('ValueAsString')

const FeatureNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]([-_]*[a-zA-Z0-9]){0,63}/)
  .min(1)
  .max(64)
  .openapi('FeatureName')

const FeatureValueSchema = z
  .object({
    FeatureName: FeatureNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of a feature that a feature value corresponds to.' }),
    ),
    ValueAsString: ValueAsStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value associated with a feature, in string format. Note that features types can be String, Integral, or Fractional. This value represents all three types as a string.',
        }),
    ),
  })
  .openapi({
    required: ['FeatureName', 'ValueAsString'],
    description: 'The value associated with a feature.',
  })
  .openapi('FeatureValue')

const RecordSchema = z.array(FeatureValueSchema).min(1).openapi('Record')

const BatchGetRecordResultDetailSchema = z
  .object({
    FeatureGroupName: ValueAsStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>FeatureGroupName</code> containing Records you retrieved in a batch.',
        }),
    ),
    RecordIdentifierValueAsString: ValueAsStringSchema.and(
      z.any().openapi({ description: 'The value of the record identifier in string format.' }),
    ),
    Record: RecordSchema.and(
      z.any().openapi({ description: 'The <code>Record</code> retrieved.' }),
    ),
  })
  .openapi({
    required: ['FeatureGroupName', 'RecordIdentifierValueAsString', 'Record'],
    description: 'The output of Records that have been retrieved in a batch.',
  })
  .openapi('BatchGetRecordResultDetail')

const BatchGetRecordResultDetailsSchema = z
  .array(BatchGetRecordResultDetailSchema)
  .min(0)
  .openapi('BatchGetRecordResultDetails')

const MessageSchema = z.string().max(2048).openapi('Message')

const BatchGetRecordErrorSchema = z
  .object({
    FeatureGroupName: ValueAsStringSchema.and(
      z.any().openapi({ description: 'The name of the feature group that the record belongs to.' }),
    ),
    RecordIdentifierValueAsString: ValueAsStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value for the <code>RecordIdentifier</code> in string format of a Record from a <code>FeatureGroup</code> that is causing an error when attempting to be retrieved.',
        }),
    ),
    ErrorCode: ValueAsStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code of an error that has occurred when attempting to retrieve a batch of Records. For more information on errors, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_GetRecord.html#API_feature_store_GetRecord_Errors">Errors</a>.',
        }),
    ),
    ErrorMessage: MessageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error message of an error that has occurred when attempting to retrieve a record in the batch.',
        }),
    ),
  })
  .openapi({
    required: ['FeatureGroupName', 'RecordIdentifierValueAsString', 'ErrorCode', 'ErrorMessage'],
    description: 'The error that has occurred when attempting to retrieve a batch of Records.',
  })
  .openapi('BatchGetRecordError')

const BatchGetRecordErrorsSchema = z
  .array(BatchGetRecordErrorSchema)
  .min(0)
  .openapi('BatchGetRecordErrors')

const FeatureGroupNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]([-_]*[a-zA-Z0-9]){0,63}/)
  .min(1)
  .max(64)
  .openapi('FeatureGroupName')

const RecordIdentifiersSchema = z
  .array(ValueAsStringSchema)
  .min(1)
  .max(100)
  .openapi('RecordIdentifiers')

const FeatureNamesSchema = z.array(FeatureNameSchema).min(1).openapi('FeatureNames')

const BatchGetRecordIdentifierSchema = z
  .object({
    FeatureGroupName: FeatureGroupNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>FeatureGroupName</code> containing Records you are retrieving in a batch.',
        }),
    ),
    RecordIdentifiersValueAsString: RecordIdentifiersSchema.and(
      z
        .any()
        .openapi({ description: 'The value for a list of record identifiers in string format.' }),
    ),
    FeatureNames: FeatureNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['FeatureGroupName', 'RecordIdentifiersValueAsString'],
    description:
      'The identifier that identifies the batch of Records you are retrieving in a batch.',
  })
  .openapi('BatchGetRecordIdentifier')

const UnprocessedIdentifiersSchema = z
  .array(BatchGetRecordIdentifierSchema)
  .min(0)
  .openapi('UnprocessedIdentifiers')

const BatchGetRecordResponseSchema = z
  .object({
    Records: BatchGetRecordResultDetailsSchema.and(
      z.any().openapi({ description: 'A list of Records you requested to be retrieved in batch.' }),
    ),
    Errors: BatchGetRecordErrorsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of errors that have occurred when retrieving a batch of Records.',
        }),
    ),
    UnprocessedIdentifiers: UnprocessedIdentifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unprocessed list of <code>FeatureGroup</code> names, with their corresponding <code>RecordIdentifier</code> value, and Feature name.',
        }),
    ),
  })
  .openapi({ required: ['Records', 'Errors', 'UnprocessedIdentifiers'] })
  .openapi('BatchGetRecordResponse')

const ValidationErrorSchema = z.any().openapi('ValidationError')

const InternalFailureSchema = z.any().openapi('InternalFailure')

const ServiceUnavailableSchema = z.any().openapi('ServiceUnavailable')

const AccessForbiddenSchema = z.any().openapi('AccessForbidden')

const TargetStoreSchema = z.enum(['OnlineStore', 'OfflineStore']).openapi('TargetStore')

const GetRecordResponseSchema = z
  .object({
    Record: RecordSchema.and(
      z
        .any()
        .openapi({
          description: 'The record you requested. A list of <code>FeatureValues</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRecordResponse')

const ResourceNotFoundSchema = z.any().openapi('ResourceNotFound')

const BatchGetRecordIdentifiersSchema = z
  .array(BatchGetRecordIdentifierSchema)
  .min(1)
  .max(10)
  .openapi('BatchGetRecordIdentifiers')

const BatchGetRecordRequestSchema = z
  .object({
    Identifiers: BatchGetRecordIdentifiersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of <code>FeatureGroup</code> names, with their corresponding <code>RecordIdentifier</code> value, and Feature name that have been requested to be retrieved in batch.',
        }),
    ),
  })
  .openapi({ required: ['Identifiers'], title: 'BatchGetRecordRequest' })
  .openapi('BatchGetRecordRequest')

const TargetStoresSchema = z.array(TargetStoreSchema).min(1).max(2).openapi('TargetStores')

const DeletionModeSchema = z.enum(['SoftDelete', 'HardDelete']).openapi('DeletionMode')

const DeleteRecordRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRecordRequest' })
  .openapi('DeleteRecordRequest')

const GetRecordRequestSchema = z
  .object({})
  .openapi({ title: 'GetRecordRequest' })
  .openapi('GetRecordRequest')

const PutRecordRequestSchema = z
  .object({
    Record: RecordSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:</p> <ul> <li> <p>Use <code>GetRecord</code> to retrieve the latest record.</p> </li> <li> <p>Update the record returned from <code>GetRecord</code>. </p> </li> <li> <p>Use <code>PutRecord</code> to update feature values.</p> </li> </ul>',
        }),
    ),
    TargetStores: TargetStoresSchema.and(
      z
        .any()
        .openapi({
          description:
            "A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the <code>FeatureGroup</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Record'], title: 'PutRecordRequest' })
  .openapi('PutRecordRequest')

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

export const postBatchGetRecordRoute = createRoute({
  method: 'post',
  path: '/BatchGetRecord',
  description: 'Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.',
  operationId: 'BatchGetRecord',
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
              Identifiers: z
                .array(BatchGetRecordIdentifierSchema)
                .min(1)
                .max(10)
                .openapi({
                  description:
                    'A list of <code>FeatureGroup</code> names, with their corresponding <code>RecordIdentifier</code> value, and Feature name that have been requested to be retrieved in batch.',
                }),
            })
            .openapi({ required: ['Identifiers'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetRecordResponseSchema } },
    },
    480: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    481: {
      description: 'InternalFailure',
      content: { 'application/json': { schema: InternalFailureSchema } },
    },
    482: {
      description: 'ServiceUnavailable',
      content: { 'application/json': { schema: ServiceUnavailableSchema } },
    },
    483: {
      description: 'AccessForbidden',
      content: { 'application/json': { schema: AccessForbiddenSchema } },
    },
  },
})

export const deleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeRoute =
  createRoute({
    method: 'delete',
    path: '/FeatureGroup/{FeatureGroupName}#RecordIdentifierValueAsString&EventTime',
    description:
      '<p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the <code>OnlineStore</code>. Feature Store supports both <code>SOFT_DELETE</code> and <code>HARD_DELETE</code>. For <code>SOFT_DELETE</code> (default), feature columns are set to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or <code>BatchGetRecord</code>. For<code> HARD_DELETE</code>, the complete <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature Store appends the deleted record marker to the <code>OfflineStore</code> with feature values set to <code>null</code>, <code>is_deleted</code> value set to <code>True</code>, and <code>EventTime</code> set to the delete input <code>EventTime</code>.</p> <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be set later than the <code>EventTime</code> of the existing record in the <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the deletion does not occur:</p> <ul> <li> <p>For <code>SOFT_DELETE</code>, the existing (undeleted) record remains in the <code>OnlineStore</code>, though the delete record marker is still written to the <code>OfflineStore</code>.</p> </li> <li> <p> <code>HARD_DELETE</code> returns <code>EventTime</code>: <code>400 ValidationException</code> to indicate that the delete operation failed. No delete record marker is written to the <code>OfflineStore</code>.</p> </li> </ul>',
    operationId: 'DeleteRecord',
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
      params: z.object({
        FeatureGroupName: z
          .string()
          .regex(/^[a-zA-Z0-9]([-_]*[a-zA-Z0-9]){0,63}/)
          .min(1)
          .max(64)
          .openapi({
            param: {
              name: 'FeatureGroupName',
              in: 'path',
              required: true,
              description: 'The name of the feature group to delete the record from. ',
              schema: {
                type: 'string',
                pattern: '^[a-zA-Z0-9]([-_]*[a-zA-Z0-9]){0,63}',
                minLength: 1,
                maxLength: 64,
              },
            },
          }),
      }),
      query: z.object({
        RecordIdentifierValueAsString: z
          .string()
          .regex(/.*/)
          .max(358400)
          .openapi({
            param: {
              name: 'RecordIdentifierValueAsString',
              in: 'query',
              required: true,
              description:
                'The value for the <code>RecordIdentifier</code> that uniquely identifies the record, in string format. ',
              schema: { type: 'string', pattern: '.*', maxLength: 358400 },
            },
          }),
        EventTime: z
          .string()
          .regex(/.*/)
          .max(358400)
          .openapi({
            param: {
              name: 'EventTime',
              in: 'query',
              required: true,
              description:
                'Timestamp indicating when the deletion event occurred. <code>EventTime</code> can be used to query data at a certain point in time.',
              schema: { type: 'string', pattern: '.*', maxLength: 358400 },
            },
          }),
        TargetStores: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(TargetStoreSchema).min(1).max(2),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'TargetStores',
              in: 'query',
              required: false,
              description:
                "A list of stores from which you're deleting the record. By default, Feature Store deletes the record from all of the stores that you're using for the <code>FeatureGroup</code>.",
              schema: {
                type: 'array',
                items: { $ref: '#/components/schemas/TargetStore' },
                minItems: 1,
                maxItems: 2,
              },
            },
          }),
        DeletionMode: z
          .enum(['SoftDelete', 'HardDelete'])
          .exactOptional()
          .openapi({
            param: {
              name: 'DeletionMode',
              in: 'query',
              required: false,
              description:
                'The name of the deletion mode for deleting the record. By default, the deletion mode is set to <code>SoftDelete</code>.',
              schema: { type: 'string', enum: ['SoftDelete', 'HardDelete'] },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'Success' },
      480: {
        description: 'ValidationError',
        content: { 'application/json': { schema: ValidationErrorSchema } },
      },
      481: {
        description: 'InternalFailure',
        content: { 'application/json': { schema: InternalFailureSchema } },
      },
      482: {
        description: 'ServiceUnavailable',
        content: { 'application/json': { schema: ServiceUnavailableSchema } },
      },
      483: {
        description: 'AccessForbidden',
        content: { 'application/json': { schema: AccessForbiddenSchema } },
      },
    },
  })

export const getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringRoute = createRoute({
  method: 'get',
  path: '/FeatureGroup/{FeatureGroupName}#RecordIdentifierValueAsString',
  description:
    'Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned. ',
  operationId: 'GetRecord',
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
    params: z.object({
      FeatureGroupName: z
        .string()
        .regex(/^[a-zA-Z0-9]([-_]*[a-zA-Z0-9]){0,63}/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'FeatureGroupName',
            in: 'path',
            required: true,
            description: 'The name of the feature group from which you want to retrieve a record.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9]([-_]*[a-zA-Z0-9]){0,63}',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
    }),
    query: z.object({
      RecordIdentifierValueAsString: z
        .string()
        .regex(/.*/)
        .max(358400)
        .openapi({
          param: {
            name: 'RecordIdentifierValueAsString',
            in: 'query',
            required: true,
            description:
              'The value that corresponds to <code>RecordIdentifier</code> type and uniquely identifies the record in the <code>FeatureGroup</code>. ',
            schema: { type: 'string', pattern: '.*', maxLength: 358400 },
          },
        }),
      FeatureName: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(FeatureNameSchema).min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'FeatureName',
            in: 'query',
            required: false,
            description:
              'List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/FeatureName' },
              minItems: 1,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRecordResponseSchema } },
    },
    480: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    481: {
      description: 'ResourceNotFound',
      content: { 'application/json': { schema: ResourceNotFoundSchema } },
    },
    482: {
      description: 'InternalFailure',
      content: { 'application/json': { schema: InternalFailureSchema } },
    },
    483: {
      description: 'ServiceUnavailable',
      content: { 'application/json': { schema: ServiceUnavailableSchema } },
    },
    484: {
      description: 'AccessForbidden',
      content: { 'application/json': { schema: AccessForbiddenSchema } },
    },
  },
})

export const putFeatureGroupFeatureGroupNameRoute = createRoute({
  method: 'put',
  path: '/FeatureGroup/{FeatureGroupName}',
  description:
    'Used for data ingestion into the <code>FeatureStore</code>. The <code>PutRecord</code> API writes to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is the latest record for the <code>recordIdentifier</code>, the record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. If the record is a historic record, it is written only to the <code>OfflineStore</code>.',
  operationId: 'PutRecord',
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
    params: z.object({
      FeatureGroupName: z
        .string()
        .regex(/^[a-zA-Z0-9]([-_]*[a-zA-Z0-9]){0,63}/)
        .min(1)
        .max(64)
        .openapi({
          param: {
            name: 'FeatureGroupName',
            in: 'path',
            required: true,
            description: 'The name of the feature group that you want to insert the record into.',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9]([-_]*[a-zA-Z0-9]){0,63}',
              minLength: 1,
              maxLength: 64,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Record: z
                .array(FeatureValueSchema)
                .min(1)
                .openapi({
                  description:
                    '<p>List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:</p> <ul> <li> <p>Use <code>GetRecord</code> to retrieve the latest record.</p> </li> <li> <p>Update the record returned from <code>GetRecord</code>. </p> </li> <li> <p>Use <code>PutRecord</code> to update feature values.</p> </li> </ul>',
                }),
              TargetStores: z
                .array(TargetStoreSchema)
                .min(1)
                .max(2)
                .exactOptional()
                .openapi({
                  description:
                    "A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the <code>FeatureGroup</code>.",
                }),
            })
            .openapi({ required: ['Record'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationError',
      content: { 'application/json': { schema: ValidationErrorSchema } },
    },
    481: {
      description: 'InternalFailure',
      content: { 'application/json': { schema: InternalFailureSchema } },
    },
    482: {
      description: 'ServiceUnavailable',
      content: { 'application/json': { schema: ServiceUnavailableSchema } },
    },
    483: {
      description: 'AccessForbidden',
      content: { 'application/json': { schema: AccessForbiddenSchema } },
    },
  },
})
