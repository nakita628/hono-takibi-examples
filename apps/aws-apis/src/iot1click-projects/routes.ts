import { createRoute, z } from '@hono/zod-openapi'

const AssociateDeviceWithPlacementResponseSchema = z
  .object({})
  .openapi('AssociateDeviceWithPlacementResponse')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const ResourceConflictExceptionSchema = z.any().openapi('ResourceConflictException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const CreatePlacementResponseSchema = z.object({}).openapi('CreatePlacementResponse')

const AttributeValueSchema = z.string().max(800).openapi('AttributeValue')

const CreateProjectResponseSchema = z.object({}).openapi('CreateProjectResponse')

const AttributeDefaultValueSchema = z.string().max(800).openapi('AttributeDefaultValue')

const DefaultPlacementAttributeMapSchema = z
  .record(z.string(), AttributeDefaultValueSchema)
  .openapi('DefaultPlacementAttributeMap')

const DeviceTypeSchema = z.string().max(128).openapi('DeviceType')

const DeviceCallbackValueSchema = z.string().max(200).openapi('DeviceCallbackValue')

const DeviceCallbackOverrideMapSchema = z
  .record(z.string(), DeviceCallbackValueSchema)
  .openapi('DeviceCallbackOverrideMap')

const DeviceTemplateSchema = z
  .object({
    deviceType: DeviceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The device type, which currently must be <code>"button"</code>.',
        }),
    ).exactOptional(),
    callbackOverrides: DeviceCallbackOverrideMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional Lambda function to invoke instead of the default Lambda function provided by the placement template.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object representing a device for a placement template (see <a>PlacementTemplate</a>).',
    required: [],
  })
  .openapi('DeviceTemplate')

const DeviceTemplateMapSchema = z
  .record(z.string(), DeviceTemplateSchema)
  .openapi('DeviceTemplateMap')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const DeletePlacementResponseSchema = z.object({}).openapi('DeletePlacementResponse')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const DeleteProjectResponseSchema = z.object({}).openapi('DeleteProjectResponse')

const ProjectNameSchema = z
  .string()
  .regex(/^[0-9A-Za-z_-]+$/)
  .min(1)
  .max(128)
  .openapi('ProjectName')

const PlacementNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(128)
  .openapi('PlacementName')

const PlacementAttributeMapSchema = z
  .record(z.string(), AttributeValueSchema)
  .openapi('PlacementAttributeMap')

const TimeSchema = z.iso.datetime({ offset: true }).openapi('Time')

const PlacementDescriptionSchema = z
  .object({
    projectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project containing the placement.' }),
    ),
    placementName: PlacementNameSchema.and(
      z.any().openapi({ description: 'The name of the placement.' }),
    ),
    attributes: PlacementAttributeMapSchema.and(
      z
        .any()
        .openapi({ description: 'The user-defined attributes associated with the placement.' }),
    ),
    createdDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the placement was initially created, in UNIX epoch time format.',
        }),
    ),
    updatedDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the placement was last updated, in UNIX epoch time format. If the placement was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.',
        }),
    ),
  })
  .openapi({
    required: ['projectName', 'placementName', 'attributes', 'createdDate', 'updatedDate'],
    description: "An object describing a project's placement.",
  })
  .openapi('PlacementDescription')

const DescribePlacementResponseSchema = z
  .object({
    placement: PlacementDescriptionSchema.and(
      z.any().openapi({ description: 'An object describing the placement.' }),
    ),
  })
  .openapi({ required: ['placement'] })
  .openapi('DescribePlacementResponse')

const ProjectArnSchema = z
  .string()
  .regex(/^arn:aws:iot1click:[A-Za-z0-9_\/.-]{0,63}:\d+:projects\/[0-9A-Za-z_-]{1,128}$/)
  .openapi('ProjectArn')

const DescriptionSchema = z.string().min(0).max(500).openapi('Description')

const PlacementTemplateSchema = z
  .object({
    defaultAttributes: DefaultPlacementAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default attributes (key/value pairs) to be applied to all placements using this template.',
        }),
    ).exactOptional(),
    deviceTemplates: DeviceTemplateMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object specifying the <a>DeviceTemplate</a> for all placements using this (<a>PlacementTemplate</a>) template.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object defining the template for a placement.', required: [] })
  .openapi('PlacementTemplate')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const ProjectDescriptionSchema = z
  .object({
    arn: ProjectArnSchema.and(
      z.any().openapi({ description: 'The ARN of the project.' }),
    ).exactOptional(),
    projectName: ProjectNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the project for which to obtain information from.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description of the project.' }),
    ).exactOptional(),
    createdDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the project was originally created, in UNIX epoch time format.',
        }),
    ),
    updatedDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the project was last updated, in UNIX epoch time format. If the project was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.',
        }),
    ),
    placementTemplate: PlacementTemplateSchema.and(
      z
        .any()
        .openapi({ description: "An object describing the project's placement specifications." }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags (metadata key/value pairs) associated with the project.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['projectName', 'createdDate', 'updatedDate'],
    description:
      'An object providing detailed information for a particular project associated with an AWS account and region.',
  })
  .openapi('ProjectDescription')

const DescribeProjectResponseSchema = z
  .object({
    project: ProjectDescriptionSchema.and(
      z.any().openapi({ description: 'An object describing the project.' }),
    ),
  })
  .openapi({ required: ['project'] })
  .openapi('DescribeProjectResponse')

const DisassociateDeviceFromPlacementResponseSchema = z
  .object({})
  .openapi('DisassociateDeviceFromPlacementResponse')

const DeviceIdSchema = z.string().min(1).max(32).openapi('DeviceId')

const DeviceMapSchema = z.record(z.string(), DeviceIdSchema).openapi('DeviceMap')

const GetDevicesInPlacementResponseSchema = z
  .object({
    devices: DeviceMapSchema.and(
      z
        .any()
        .openapi({
          description: 'An object containing the devices (zero or more) within the placement.',
        }),
    ),
  })
  .openapi({ required: ['devices'] })
  .openapi('GetDevicesInPlacementResponse')

const PlacementSummarySchema = z
  .object({
    projectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project containing the placement.' }),
    ),
    placementName: PlacementNameSchema.and(
      z.any().openapi({ description: 'The name of the placement being summarized.' }),
    ),
    createdDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the placement was originally created, in UNIX epoch time format.',
        }),
    ),
    updatedDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the placement was last updated, in UNIX epoch time format. If the placement was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.',
        }),
    ),
  })
  .openapi({
    required: ['projectName', 'placementName', 'createdDate', 'updatedDate'],
    description: 'An object providing summary information for a particular placement.',
  })
  .openapi('PlacementSummary')

const PlacementSummaryListSchema = z.array(PlacementSummarySchema).openapi('PlacementSummaryList')

const NextTokenSchema = z.string().min(1).max(1024).openapi('NextToken')

const ListPlacementsResponseSchema = z
  .object({
    placements: PlacementSummaryListSchema.and(
      z.any().openapi({ description: 'An object listing the requested placements.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token used to retrieve the next set of results - will be effectively empty if there are no further results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['placements'] })
  .openapi('ListPlacementsResponse')

const ProjectSummarySchema = z
  .object({
    arn: ProjectArnSchema.and(
      z.any().openapi({ description: 'The ARN of the project.' }),
    ).exactOptional(),
    projectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project being summarized.' }),
    ),
    createdDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the project was originally created, in UNIX epoch time format.',
        }),
    ),
    updatedDate: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date when the project was last updated, in UNIX epoch time format. If the project was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.',
        }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'The tags (metadata key/value pairs) associated with the project.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['projectName', 'createdDate', 'updatedDate'],
    description:
      'An object providing summary information for a particular project for an associated AWS account and region.',
  })
  .openapi('ProjectSummary')

const ProjectSummaryListSchema = z.array(ProjectSummarySchema).openapi('ProjectSummaryList')

const ListProjectsResponseSchema = z
  .object({
    projects: ProjectSummaryListSchema.and(
      z.any().openapi({ description: 'An object containing the list of projects.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token used to retrieve the next set of results - will be effectively empty if there are no further results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projects'] })
  .openapi('ListProjectsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags (metadata key/value pairs) which you have assigned to the resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdatePlacementResponseSchema = z.object({}).openapi('UpdatePlacementResponse')

const UpdateProjectResponseSchema = z.object({}).openapi('UpdateProjectResponse')

const DeviceTemplateNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_-]+$/)
  .min(1)
  .max(128)
  .openapi('DeviceTemplateName')

const AssociateDeviceWithPlacementRequestSchema = z
  .object({
    deviceId: DeviceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the physical device to be associated with the given placement in the project. Note that a mandatory 4 character prefix is required for all <code>deviceId</code> values.',
        }),
    ),
  })
  .openapi({ required: ['deviceId'], title: 'AssociateDeviceWithPlacementRequest' })
  .openapi('AssociateDeviceWithPlacementRequest')

const AttributeNameSchema = z.string().min(1).max(128).openapi('AttributeName')

const CreatePlacementRequestSchema = z
  .object({
    placementName: PlacementNameSchema.and(
      z.any().openapi({ description: 'The name of the placement to be created.' }),
    ),
    attributes: PlacementAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional user-defined key/value pairs providing contextual data (such as location or function) for the placement.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['placementName'], title: 'CreatePlacementRequest' })
  .openapi('CreatePlacementRequest')

const CreateProjectRequestSchema = z
  .object({
    projectName: ProjectNameSchema.and(
      z.any().openapi({ description: 'The name of the project to create.' }),
    ),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'An optional description for the project.' }),
    ).exactOptional(),
    placementTemplate: PlacementTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The schema defining the placement to be created. A placement template defines placement default attributes and device templates. You cannot add or remove device templates after the project has been created. However, you can update <code>callbackOverrides</code> for the device templates using the <code>UpdateProject</code> API.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional tags (metadata key/value pairs) to be associated with the project. For example, <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['projectName'], title: 'CreateProjectRequest' })
  .openapi('CreateProjectRequest')

const DeletePlacementRequestSchema = z
  .object({})
  .openapi({ title: 'DeletePlacementRequest' })
  .openapi('DeletePlacementRequest')

const DeleteProjectRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteProjectRequest' })
  .openapi('DeleteProjectRequest')

const DescribePlacementRequestSchema = z
  .object({})
  .openapi({ title: 'DescribePlacementRequest' })
  .openapi('DescribePlacementRequest')

const DescribeProjectRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeProjectRequest' })
  .openapi('DescribeProjectRequest')

const DeviceCallbackKeySchema = z.string().min(1).max(128).openapi('DeviceCallbackKey')

const DisassociateDeviceFromPlacementRequestSchema = z
  .object({})
  .openapi({ title: 'DisassociateDeviceFromPlacementRequest' })
  .openapi('DisassociateDeviceFromPlacementRequest')

const GetDevicesInPlacementRequestSchema = z
  .object({})
  .openapi({ title: 'GetDevicesInPlacementRequest' })
  .openapi('GetDevicesInPlacementRequest')

const MaxResultsSchema = z.int().min(1).max(250).openapi('MaxResults')

const ListPlacementsRequestSchema = z
  .object({})
  .openapi({ title: 'ListPlacementsRequest' })
  .openapi('ListPlacementsRequest')

const ListProjectsRequestSchema = z
  .object({})
  .openapi({ title: 'ListProjectsRequest' })
  .openapi('ListProjectsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per resource.',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdatePlacementRequestSchema = z
  .object({
    attributes: PlacementAttributeMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The user-defined object of attributes used to update the placement. The maximum number of key/value pairs is 50.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdatePlacementRequest', required: [] })
  .openapi('UpdatePlacementRequest')

const UpdateProjectRequestSchema = z
  .object({
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'An optional user-defined description for the project.' }),
    ).exactOptional(),
    placementTemplate: PlacementTemplateSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object defining the project update. Once a project has been created, you cannot add device template names to the project. However, for a given <code>placementTemplate</code>, you can update the associated <code>callbackOverrides</code> for the device definition using this API.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateProjectRequest', required: [] })
  .openapi('UpdateProjectRequest')

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

export const putProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute =
  createRoute({
    method: 'put',
    path: '/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}',
    description: 'Associates a physical device with a placement.',
    operationId: 'AssociateDeviceWithPlacement',
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
        projectName: z
          .string()
          .regex(/^[0-9A-Za-z_-]+$/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'projectName',
              in: 'path',
              required: true,
              description:
                'The name of the project containing the placement in which to associate the device.',
              schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
            },
          }),
        placementName: z
          .string()
          .regex(/^[a-zA-Z0-9_-]+$/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'placementName',
              in: 'path',
              required: true,
              description: 'The name of the placement in which to associate the device.',
              schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
            },
          }),
        deviceTemplateName: z
          .string()
          .regex(/^[a-zA-Z0-9_-]+$/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'deviceTemplateName',
              in: 'path',
              required: true,
              description: 'The device template name to associate with the device ID.',
              schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                deviceId: z
                  .string()
                  .min(1)
                  .max(32)
                  .openapi({
                    description:
                      'The ID of the physical device to be associated with the given placement in the project. Note that a mandatory 4 character prefix is required for all <code>deviceId</code> values.',
                  }),
              })
              .openapi({ required: ['deviceId'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateDeviceWithPlacementResponseSchema } },
      },
      480: {
        description: 'InternalFailureException',
        content: { 'application/json': { schema: InternalFailureExceptionSchema } },
      },
      481: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      482: {
        description: 'ResourceConflictException',
        content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
      },
      483: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
    },
  })

export const deleteProjectsProjectNamePlacementsPlacementNameDevicesDeviceTemplateNameRoute =
  createRoute({
    method: 'delete',
    path: '/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}',
    description: 'Removes a physical device from a placement.',
    operationId: 'DisassociateDeviceFromPlacement',
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
        projectName: z
          .string()
          .regex(/^[0-9A-Za-z_-]+$/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'projectName',
              in: 'path',
              required: true,
              description: 'The name of the project that contains the placement.',
              schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
            },
          }),
        placementName: z
          .string()
          .regex(/^[a-zA-Z0-9_-]+$/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'placementName',
              in: 'path',
              required: true,
              description: 'The name of the placement that the device should be removed from.',
              schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
            },
          }),
        deviceTemplateName: z
          .string()
          .regex(/^[a-zA-Z0-9_-]+$/)
          .min(1)
          .max(128)
          .openapi({
            param: {
              name: 'deviceTemplateName',
              in: 'path',
              required: true,
              description: 'The device ID that should be removed from the placement.',
              schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DisassociateDeviceFromPlacementResponseSchema } },
      },
      480: {
        description: 'InternalFailureException',
        content: { 'application/json': { schema: InternalFailureExceptionSchema } },
      },
      481: {
        description: 'InvalidRequestException',
        content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
      },
      482: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const getProjectsProjectNamePlacementsRoute = createRoute({
  method: 'get',
  path: '/projects/{projectName}/placements',
  description: 'Lists the placement(s) of a project.',
  operationId: 'ListPlacements',
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
      projectName: z
        .string()
        .regex(/^[0-9A-Za-z_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The project containing the placements to be listed.',
            schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
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
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per request. If not set, a default value of 100 is used.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPlacementsResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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

export const postProjectsProjectNamePlacementsRoute = createRoute({
  method: 'post',
  path: '/projects/{projectName}/placements',
  description: 'Creates an empty placement.',
  operationId: 'CreatePlacement',
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
      projectName: z
        .string()
        .regex(/^[0-9A-Za-z_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project in which to create the placement.',
            schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              placementName: z
                .string()
                .regex(/^[a-zA-Z0-9_-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the placement to be created.' }),
              attributes: z
                .record(z.string(), AttributeValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Optional user-defined key/value pairs providing contextual data (such as location or function) for the placement.',
                }),
            })
            .openapi({ required: ['placementName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePlacementResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  description: 'Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.',
  operationId: 'ListProjects',
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
        .min(1)
        .max(1024)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to retrieve the next set of results.',
            schema: { type: 'string', minLength: 1, maxLength: 1024 },
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
          z.int().min(1).max(250),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'The maximum number of results to return per request. If not set, a default value of 100 is used.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectsResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  description:
    'Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.',
  operationId: 'CreateProject',
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
              projectName: z
                .string()
                .regex(/^[0-9A-Za-z_-]+$/)
                .min(1)
                .max(128)
                .openapi({ description: 'The name of the project to create.' }),
              description: z
                .string()
                .min(0)
                .max(500)
                .exactOptional()
                .openapi({ description: 'An optional description for the project.' }),
              placementTemplate: z
                .object({
                  defaultAttributes: DefaultPlacementAttributeMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The default attributes (key/value pairs) to be applied to all placements using this template.',
                      }),
                  ).exactOptional(),
                  deviceTemplates: DeviceTemplateMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object specifying the <a>DeviceTemplate</a> for all placements using this (<a>PlacementTemplate</a>) template.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'An object defining the template for a placement.',
                  required: [],
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Optional tags (metadata key/value pairs) to be associated with the project. For example, <code>{ {"key1": "value1", "key2": "value2"} }</code>. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.',
                }),
            })
            .openapi({ required: ['projectName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProjectResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const getProjectsProjectNamePlacementsPlacementNameRoute = createRoute({
  method: 'get',
  path: '/projects/{projectName}/placements/{placementName}',
  description: 'Describes a placement in a project.',
  operationId: 'DescribePlacement',
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
      placementName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'placementName',
            in: 'path',
            required: true,
            description: 'The name of the placement within a project.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
      projectName: z
        .string()
        .regex(/^[0-9A-Za-z_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The project containing the placement to be described.',
            schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribePlacementResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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

export const putProjectsProjectNamePlacementsPlacementNameRoute = createRoute({
  method: 'put',
  path: '/projects/{projectName}/placements/{placementName}',
  description:
    'Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").',
  operationId: 'UpdatePlacement',
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
      placementName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'placementName',
            in: 'path',
            required: true,
            description: 'The name of the placement to update.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
      projectName: z
        .string()
        .regex(/^[0-9A-Za-z_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project containing the placement to be updated.',
            schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              attributes: z
                .record(z.string(), AttributeValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The user-defined object of attributes used to update the placement. The maximum number of key/value pairs is 50.',
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
      content: { 'application/json': { schema: UpdatePlacementResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteProjectsProjectNamePlacementsPlacementNameRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectName}/placements/{placementName}',
  description:
    '<p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>',
  operationId: 'DeletePlacement',
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
      placementName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'placementName',
            in: 'path',
            required: true,
            description: 'The name of the empty placement to delete.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
      projectName: z
        .string()
        .regex(/^[0-9A-Za-z_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The project containing the empty placement to delete.',
            schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePlacementResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProjectsProjectNameRoute = createRoute({
  method: 'get',
  path: '/projects/{projectName}',
  description: 'Returns an object describing a project.',
  operationId: 'DescribeProject',
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
      projectName: z
        .string()
        .regex(/^[0-9A-Za-z_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project to be described.',
            schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProjectResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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

export const putProjectsProjectNameRoute = createRoute({
  method: 'put',
  path: '/projects/{projectName}',
  description:
    'Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).',
  operationId: 'UpdateProject',
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
      projectName: z
        .string()
        .regex(/^[0-9A-Za-z_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project to be updated.',
            schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .min(0)
                .max(500)
                .exactOptional()
                .openapi({ description: 'An optional user-defined description for the project.' }),
              placementTemplate: z
                .object({
                  defaultAttributes: DefaultPlacementAttributeMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The default attributes (key/value pairs) to be applied to all placements using this template.',
                      }),
                  ).exactOptional(),
                  deviceTemplates: DeviceTemplateMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object specifying the <a>DeviceTemplate</a> for all placements using this (<a>PlacementTemplate</a>) template.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'An object defining the template for a placement.',
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
      content: { 'application/json': { schema: UpdateProjectResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteProjectsProjectNameRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectName}',
  description:
    '<p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>',
  operationId: 'DeleteProject',
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
      projectName: z
        .string()
        .regex(/^[0-9A-Za-z_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the empty project to delete.',
            schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProjectsProjectNamePlacementsPlacementNameDevicesRoute = createRoute({
  method: 'get',
  path: '/projects/{projectName}/placements/{placementName}/devices',
  description: 'Returns an object enumerating the devices in a placement.',
  operationId: 'GetDevicesInPlacement',
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
      projectName: z
        .string()
        .regex(/^[0-9A-Za-z_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'projectName',
            in: 'path',
            required: true,
            description: 'The name of the project containing the placement.',
            schema: { type: 'string', pattern: '^[0-9A-Za-z_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
      placementName: z
        .string()
        .regex(/^[a-zA-Z0-9_-]+$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'placementName',
            in: 'path',
            required: true,
            description: 'The name of the placement to get the devices from.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_-]+$', minLength: 1, maxLength: 128 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDevicesInPlacementResponseSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists the tags (metadata key/value pairs) which you have assigned to the resource.',
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
        .regex(/^arn:aws:iot1click:[A-Za-z0-9_\/.-]{0,63}:\d+:projects\/[0-9A-Za-z_-]{1,128}$/)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource whose tags you want to list.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws:iot1click:[A-Za-z0-9_/.-]{0,63}:\\d+:projects/[0-9A-Za-z_-]{1,128}$',
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
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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
  description:
    'Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.',
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
        .regex(/^arn:aws:iot1click:[A-Za-z0-9_\/.-]{0,63}:\d+:projects\/[0-9A-Za-z_-]{1,128}$/)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resouce for which tag(s) should be added or modified.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws:iot1click:[A-Za-z0-9_/.-]{0,63}:\\d+:projects/[0-9A-Za-z_-]{1,128}$',
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
                .openapi({
                  description:
                    'The new or modifying tag(s) for the resource. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per resource.',
                }),
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
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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
  description: 'Removes one or more tags (metadata key/value pairs) from a resource.',
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
        .regex(/^arn:aws:iot1click:[A-Za-z0-9_\/.-]{0,63}:\d+:projects\/[0-9A-Za-z_-]{1,128}$/)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource whose tag you want to remove.',
            schema: {
              type: 'string',
              pattern:
                '^arn:aws:iot1click:[A-Za-z0-9_/.-]{0,63}:\\d+:projects/[0-9A-Za-z_-]{1,128}$',
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
            description: 'The keys of those tags which you want to remove.',
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
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
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
