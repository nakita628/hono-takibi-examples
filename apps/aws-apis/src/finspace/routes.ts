import { createRoute, z } from '@hono/zod-openapi'

const IdTypeSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{1,26}$/)
  .min(1)
  .max(26)
  .openapi('IdType')

const EnvironmentArnSchema = z
  .string()
  .regex(/^arn:aws:finspace:[A-Za-z0-9_\/.-]{0,63}:\d+:environment\/[0-9A-Za-z_-]{1,128}$/)
  .min(20)
  .max(2048)
  .openapi('EnvironmentArn')

const UrlSchema = z
  .string()
  .regex(/^https?:\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/)
  .min(1)
  .max(1000)
  .openapi('Url')

const CreateEnvironmentResponseSchema = z
  .object({
    environmentId: IdTypeSchema.exactOptional().openapi({
      description: 'The unique identifier for FinSpace environment that you created.',
    }),
    environmentArn: EnvironmentArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the FinSpace environment that you created.',
    }),
    environmentUrl: UrlSchema.exactOptional().openapi({
      description:
        'The sign-in url for the web application of the FinSpace environment you created.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateEnvironmentResponse')

const TagValueSchema = z
  .string()
  .regex(/^[a-zA-Z0-9+-=._:@ ]+$/)
  .min(1)
  .max(256)
  .openapi('TagValue')

const SamlMetadataDocumentSchema = z
  .string()
  .regex(/.*/)
  .min(1000)
  .max(10000000)
  .openapi('SamlMetadataDocument')

const UrnSchema = z
  .string()
  .regex(/^[A-Za-z0-9._\-:\/#\+]+$/)
  .min(1)
  .max(255)
  .openapi('Urn')

const FederationProviderNameSchema = z
  .string()
  .regex(/[^_\p{Z}][\p{L}\p{M}\p{S}\p{N}\p{P}][^_\p{Z}]+/u)
  .min(1)
  .max(32)
  .openapi('FederationProviderName')

const AttributeMapSchema = z.record(z.string(), UrlSchema).openapi('AttributeMap')

const EmailIdSchema = z
  .string()
  .regex(/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+[.]+[A-Za-z]+/)
  .min(1)
  .max(128)
  .openapi('EmailId')

const NameStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{1,50}$/)
  .min(1)
  .max(50)
  .openapi('NameString')

const DataBundleArnSchema = z
  .string()
  .regex(/^arn:aws:finspace:[A-Za-z0-9_\/.-]{0,63}:\d*:data-bundle\/[0-9A-Za-z_-]{1,128}$/)
  .min(20)
  .max(2048)
  .openapi({ description: 'The Amazon Resource Name (ARN) of the data bundle.' })
  .openapi('DataBundleArn')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const DeleteEnvironmentResponseSchema = z.looseObject({}).openapi('DeleteEnvironmentResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const EnvironmentNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]$/)
  .min(1)
  .max(255)
  .openapi('EnvironmentName')

const EnvironmentStatusSchema = z
  .enum([
    'CREATE_REQUESTED',
    'CREATING',
    'CREATED',
    'DELETE_REQUESTED',
    'DELETING',
    'DELETED',
    'FAILED_CREATION',
    'RETRY_DELETION',
    'FAILED_DELETION',
    'SUSPENDED',
  ])
  .openapi('EnvironmentStatus')

const DescriptionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9. ]{1,1000}$/)
  .min(1)
  .max(1000)
  .openapi('Description')

const SmsDomainUrlSchema = z
  .string()
  .regex(/^[a-zA-Z-0-9-:\/.]*$/)
  .min(1)
  .max(1000)
  .openapi('SmsDomainUrl')

const KmsKeyIdSchema = z
  .string()
  .regex(/^[a-zA-Z-0-9-:\/]*$/)
  .min(1)
  .max(1000)
  .openapi('KmsKeyId')

const FederationModeSchema = z.enum(['FEDERATED', 'LOCAL']).openapi('FederationMode')

const FederationParametersSchema = z
  .object({
    samlMetadataDocument: SamlMetadataDocumentSchema.exactOptional().openapi({
      description: 'SAML 2.0 Metadata document from identity provider (IdP).',
    }),
    samlMetadataURL: UrlSchema.exactOptional().openapi({
      description: 'Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).',
    }),
    applicationCallBackURL: UrlSchema.exactOptional().openapi({
      description:
        'The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration (IdP).',
    }),
    federationURN: UrnSchema.exactOptional().openapi({
      description:
        'The Uniform Resource Name (URN). Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.',
    }),
    federationProviderName: FederationProviderNameSchema.exactOptional().openapi({
      description: 'Name of the identity provider (IdP).',
    }),
    attributeMap: AttributeMapSchema.exactOptional().openapi({
      description:
        'SAML attribute name and value. The name must always be <code>Email</code> and the value should be set to the attribute definition in which user email is set. For example, name would be <code>Email</code> and value <code>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress</code>. Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.',
    }),
  })
  .openapi({
    description: 'Configuration information when authentication mode is FEDERATED.',
    required: [],
  })
  .openapi('FederationParameters')

const EnvironmentSchema = z
  .object({
    name: EnvironmentNameSchema.exactOptional().openapi({
      description: 'The name of the FinSpace environment.',
    }),
    environmentId: IdTypeSchema.exactOptional().openapi({
      description: 'The identifier of the FinSpace environment.',
    }),
    awsAccountId: IdTypeSchema.exactOptional().openapi({
      description: 'The ID of the AWS account in which the FinSpace environment is created.',
    }),
    status: EnvironmentStatusSchema.exactOptional().openapi({
      description: 'The current status of creation of the FinSpace environment.',
    }),
    environmentUrl: UrlSchema.exactOptional().openapi({
      description: 'The sign-in url for the web application of your FinSpace environment.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the FinSpace environment.',
    }),
    environmentArn: EnvironmentArnSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of your FinSpace environment.',
    }),
    sageMakerStudioDomainUrl: SmsDomainUrlSchema.exactOptional().openapi({
      description:
        'The url of the integrated FinSpace notebook environment in your web application.',
    }),
    kmsKeyId: KmsKeyIdSchema.exactOptional().openapi({
      description: 'The KMS key id used to encrypt in the FinSpace environment.',
    }),
    dedicatedServiceAccountId: IdTypeSchema.exactOptional().openapi({
      description:
        'The AWS account ID of the dedicated service account associated with your FinSpace environment.',
    }),
    federationMode: FederationModeSchema.exactOptional().openapi({
      description: 'The authentication mode for the environment.',
    }),
    federationParameters: FederationParametersSchema.exactOptional().openapi({
      description: 'Configuration information when authentication mode is FEDERATED.',
    }),
  })
  .openapi({ description: 'Represents an FinSpace environment.', required: [] })
  .openapi('Environment')

const GetEnvironmentResponseSchema = z
  .object({
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'The name of the FinSpace environment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetEnvironmentResponse')

const EnvironmentListSchema = z.array(EnvironmentSchema).openapi('EnvironmentList')

const PaginationTokenSchema = z.string().regex(/.*/).min(1).max(1000).openapi('PaginationToken')

const ListEnvironmentsResponseSchema = z
  .object({
    environments: EnvironmentListSchema.exactOptional().openapi({
      description: 'A list of all of your FinSpace environments.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'A token that you can use in a subsequent call to retrieve the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListEnvironmentsResponse')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.exactOptional().openapi({
      description: 'A list of all tags for a resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateEnvironmentResponseSchema = z
  .object({
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'Returns the FinSpace environment object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateEnvironmentResponse')

const SuperuserParametersSchema = z
  .object({
    emailAddress: EmailIdSchema.openapi({ description: 'The email address of the superuser.' }),
    firstName: NameStringSchema.openapi({ description: 'The first name of the superuser.' }),
    lastName: NameStringSchema.openapi({ description: 'The last name of the superuser.' }),
  })
  .openapi({
    required: ['emailAddress', 'firstName', 'lastName'],
    description: 'Configuration information for the superuser.',
  })
  .openapi('SuperuserParameters')

const DataBundleArnsSchema = z.array(DataBundleArnSchema).openapi('DataBundleArns')

const CreateEnvironmentRequestSchema = z
  .object({
    name: EnvironmentNameSchema.openapi({
      description: 'The name of the FinSpace environment to be created.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the FinSpace environment to be created.',
    }),
    kmsKeyId: KmsKeyIdSchema.exactOptional().openapi({
      description: 'The KMS key id to encrypt your data in the FinSpace environment.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'Add tags to your FinSpace environment.',
    }),
    federationMode: FederationModeSchema.exactOptional().openapi({
      description:
        '<p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul>',
    }),
    federationParameters: FederationParametersSchema.exactOptional().openapi({
      description: 'Configuration information when authentication mode is FEDERATED.',
    }),
    superuserParameters: SuperuserParametersSchema.exactOptional().openapi({
      description: 'Configuration information for the superuser.',
    }),
    dataBundles: DataBundleArnsSchema.exactOptional().openapi({
      description:
        '<p>The list of Amazon Resource Names (ARN) of the data bundles to install. Currently supported data bundle ARNs:</p> <ul> <li> <p> <code>arn:aws:finspace:${Region}::data-bundle/capital-markets-sample</code> - Contains sample Capital Markets datasets, categories and controlled vocabularies.</p> </li> <li> <p> <code>arn:aws:finspace:${Region}::data-bundle/taq</code> (default) - Contains trades and quotes data in addition to sample Capital Markets data.</p> </li> </ul>',
    }),
  })
  .openapi({ required: ['name'], title: 'CreateEnvironmentRequest' })
  .openapi('CreateEnvironmentRequest')

const DeleteEnvironmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteEnvironmentRequest' })
  .openapi('DeleteEnvironmentRequest')

const FederationAttributeKeySchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(32)
  .openapi('FederationAttributeKey')

const GetEnvironmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetEnvironmentRequest' })
  .openapi('GetEnvironmentRequest')

const ResultLimitSchema = z.int().min(0).max(100).openapi('ResultLimit')

const ListEnvironmentsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListEnvironmentsRequest' })
  .openapi('ListEnvironmentsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.openapi({ description: 'One or more tags to be assigned to the resource.' }),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateEnvironmentRequestSchema = z
  .object({
    name: EnvironmentNameSchema.exactOptional().openapi({
      description: 'The name of the environment.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'The description of the environment.',
    }),
    federationMode: FederationModeSchema.exactOptional().openapi({
      description:
        '<p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul>',
    }),
    federationParameters: FederationParametersSchema.exactOptional(),
  })
  .openapi({ title: 'UpdateEnvironmentRequest', required: [] })
  .openapi('UpdateEnvironmentRequest')

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

export const getEnvironmentRoute = createRoute({
  method: 'get',
  path: '/environment',
  description: 'A list of all of your FinSpace environments.',
  operationId: 'ListEnvironments',
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
      nextToken: z
        .string()
        .regex(/.*/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'A token generated by FinSpace that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the nextToken value from the response object of the previous page call.',
            schema: { type: 'string', pattern: '.*', minLength: 1, maxLength: 1000 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return in this request.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEnvironmentsResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const postEnvironmentRoute = createRoute({
  method: 'post',
  path: '/environment',
  description: 'Create a new FinSpace environment.',
  operationId: 'CreateEnvironment',
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
              name: z
                .string()
                .regex(/^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the FinSpace environment to be created.' }),
              description: z
                .string()
                .regex(/^[a-zA-Z0-9. ]{1,1000}$/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: 'The description of the FinSpace environment to be created.',
                }),
              kmsKeyId: z
                .string()
                .regex(/^[a-zA-Z-0-9-:\/]*$/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: 'The KMS key id to encrypt your data in the FinSpace environment.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'Add tags to your FinSpace environment.' }),
              federationMode: z
                .enum(['FEDERATED', 'LOCAL'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul>',
                }),
              federationParameters: z
                .object({
                  samlMetadataDocument: SamlMetadataDocumentSchema.exactOptional().openapi({
                    description: 'SAML 2.0 Metadata document from identity provider (IdP).',
                  }),
                  samlMetadataURL: UrlSchema.exactOptional().openapi({
                    description:
                      'Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).',
                  }),
                  applicationCallBackURL: UrlSchema.exactOptional().openapi({
                    description:
                      'The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration (IdP).',
                  }),
                  federationURN: UrnSchema.exactOptional().openapi({
                    description:
                      'The Uniform Resource Name (URN). Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.',
                  }),
                  federationProviderName: FederationProviderNameSchema.exactOptional().openapi({
                    description: 'Name of the identity provider (IdP).',
                  }),
                  attributeMap: AttributeMapSchema.exactOptional().openapi({
                    description:
                      'SAML attribute name and value. The name must always be <code>Email</code> and the value should be set to the attribute definition in which user email is set. For example, name would be <code>Email</code> and value <code>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress</code>. Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Configuration information when authentication mode is FEDERATED.',
                  required: [],
                }),
              superuserParameters: z
                .object({
                  emailAddress: EmailIdSchema.exactOptional().openapi({
                    description: 'The email address of the superuser.',
                  }),
                  firstName: NameStringSchema.exactOptional().openapi({
                    description: 'The first name of the superuser.',
                  }),
                  lastName: NameStringSchema.exactOptional().openapi({
                    description: 'The last name of the superuser.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Configuration information for the superuser.',
                  required: [],
                }),
              dataBundles: z
                .array(DataBundleArnSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The list of Amazon Resource Names (ARN) of the data bundles to install. Currently supported data bundle ARNs:</p> <ul> <li> <p> <code>arn:aws:finspace:${Region}::data-bundle/capital-markets-sample</code> - Contains sample Capital Markets datasets, categories and controlled vocabularies.</p> </li> <li> <p> <code>arn:aws:finspace:${Region}::data-bundle/taq</code> (default) - Contains trades and quotes data in addition to sample Capital Markets data.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEnvironmentResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getEnvironmentEnvironmentIdRoute = createRoute({
  method: 'get',
  path: '/environment/{environmentId}',
  description: 'Returns the FinSpace environment object.',
  operationId: 'GetEnvironment',
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
      environmentId: z
        .string()
        .regex(/^[a-zA-Z0-9]{1,26}$/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'environmentId',
            in: 'path',
            required: true,
            description: 'The identifier of the FinSpace environment.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9]{1,26}$', minLength: 1, maxLength: 26 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEnvironmentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const putEnvironmentEnvironmentIdRoute = createRoute({
  method: 'put',
  path: '/environment/{environmentId}',
  description: 'Update your FinSpace environment.',
  operationId: 'UpdateEnvironment',
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
      environmentId: z
        .string()
        .regex(/^[a-zA-Z0-9]{1,26}$/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'environmentId',
            in: 'path',
            required: true,
            description: 'The identifier of the FinSpace environment.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9]{1,26}$', minLength: 1, maxLength: 26 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]$/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the environment.' }),
              description: z
                .string()
                .regex(/^[a-zA-Z0-9. ]{1,1000}$/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The description of the environment.' }),
              federationMode: z
                .enum(['FEDERATED', 'LOCAL'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul>',
                }),
              federationParameters: z
                .object({
                  samlMetadataDocument: SamlMetadataDocumentSchema.exactOptional().openapi({
                    description: 'SAML 2.0 Metadata document from identity provider (IdP).',
                  }),
                  samlMetadataURL: UrlSchema.exactOptional().openapi({
                    description:
                      'Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).',
                  }),
                  applicationCallBackURL: UrlSchema.exactOptional().openapi({
                    description:
                      'The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration (IdP).',
                  }),
                  federationURN: UrnSchema.exactOptional().openapi({
                    description:
                      'The Uniform Resource Name (URN). Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.',
                  }),
                  federationProviderName: FederationProviderNameSchema.exactOptional().openapi({
                    description: 'Name of the identity provider (IdP).',
                  }),
                  attributeMap: AttributeMapSchema.exactOptional().openapi({
                    description:
                      'SAML attribute name and value. The name must always be <code>Email</code> and the value should be set to the attribute definition in which user email is set. For example, name would be <code>Email</code> and value <code>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress</code>. Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Configuration information when authentication mode is FEDERATED.',
                  required: [],
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
      content: { 'application/json': { schema: UpdateEnvironmentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const deleteEnvironmentEnvironmentIdRoute = createRoute({
  method: 'delete',
  path: '/environment/{environmentId}',
  description: 'Delete an FinSpace environment.',
  operationId: 'DeleteEnvironment',
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
      environmentId: z
        .string()
        .regex(/^[a-zA-Z0-9]{1,26}$/)
        .min(1)
        .max(26)
        .openapi({
          param: {
            name: 'environmentId',
            in: 'path',
            required: true,
            description: 'The identifier for the FinSpace environment.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9]{1,26}$', minLength: 1, maxLength: 26 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEnvironmentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'A list of all tags for a resource.',
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
    params: z.object({
      resourceArn: z
        .string()
        .regex(/^arn:aws:finspace:[A-Za-z0-9_\/.-]{0,63}:\d+:environment\/[0-9A-Za-z_-]{1,128}$/)
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name of the resource.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws:finspace:[A-Za-z0-9_/.-]{0,63}:\\d+:environment/[0-9A-Za-z_-]{1,128}$',
              minLength: 20,
              maxLength: 2048,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Adds metadata tags to a FinSpace resource.',
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
    params: z.object({
      resourceArn: z
        .string()
        .regex(/^arn:aws:finspace:[A-Za-z0-9_\/.-]{0,63}:\d+:environment\/[0-9A-Za-z_-]{1,128}$/)
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) for the resource.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws:finspace:[A-Za-z0-9_/.-]{0,63}:\\d+:environment/[0-9A-Za-z_-]{1,128}$',
              minLength: 20,
              maxLength: 2048,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'One or more tags to be assigned to the resource.' }),
            })
            .openapi({ required: ['tags'] }),
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes metadata tags from a FinSpace resource.',
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
    params: z.object({
      resourceArn: z
        .string()
        .regex(/^arn:aws:finspace:[A-Za-z0-9_\/.-]{0,63}:\d+:environment\/[0-9A-Za-z_-]{1,128}$/)
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'A FinSpace resource from which you want to remove a tag or tags. The value for this parameter is an Amazon Resource Name (ARN).',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws:finspace:[A-Za-z0-9_/.-]{0,63}:\\d+:environment/[0-9A-Za-z_-]{1,128}$',
              minLength: 20,
              maxLength: 2048,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys (names) of one or more tags to be removed.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
