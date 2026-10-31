import { createRoute, z } from '@hono/zod-openapi'

const ProjectNameSchema = z
  .string()
  .openapi({ description: ' Name of the project. ' })
  .openapi('ProjectName')

const ProjectIdSchema = z
  .string()
  .openapi({ description: ' Unique project identifier. ' })
  .openapi('ProjectId')

const ProjectRegionSchema = z
  .string()
  .openapi({
    description: ' Default region to use for AWS resource creation in the AWS Mobile Hub project. ',
  })
  .openapi('ProjectRegion')

const ProjectStateSchema = z
  .enum(['NORMAL', 'SYNCING', 'IMPORTING'])
  .openapi({ description: ' Synchronization state for a project. ' })
  .openapi('ProjectState')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const ConsoleUrlSchema = z.string().openapi('ConsoleUrl')

const ResourceTypeSchema = z
  .string()
  .openapi({
    description:
      ' Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket). ',
  })
  .openapi('ResourceType')

const ResourceNameSchema = z
  .string()
  .openapi({
    description:
      ' Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket). ',
  })
  .openapi('ResourceName')

const ResourceArnSchema = z
  .string()
  .openapi({
    description: ' AWS resource name which uniquely identifies the resource in AWS systems. ',
  })
  .openapi('ResourceArn')

const FeatureSchema = z
  .string()
  .openapi({
    description:
      ' Identifies which feature in AWS Mobile Hub is associated with this AWS resource. ',
  })
  .openapi('Feature')

const AttributeValueSchema = z
  .string()
  .openapi({ description: ' Value part of key-value attribute pairs. ' })
  .openapi('AttributeValue')

const AttributesSchema = z
  .record(z.string(), AttributeValueSchema)
  .openapi({ description: ' Key-value attribute pairs. ' })
  .openapi('Attributes')

const ResourceSchema = z
  .object({
    type: ResourceTypeSchema.exactOptional(),
    name: ResourceNameSchema.exactOptional(),
    arn: ResourceArnSchema.exactOptional(),
    feature: FeatureSchema.exactOptional(),
    attributes: AttributesSchema.exactOptional(),
  })
  .openapi({
    description: ' Information about an instance of an AWS resource associated with a project. ',
    required: [],
  })
  .openapi('Resource')

const ResourcesSchema = z
  .array(ResourceSchema)
  .openapi({ description: ' List of AWS resources associated with a project. ' })
  .openapi('Resources')

const ProjectDetailsSchema = z
  .object({
    name: ProjectNameSchema.exactOptional(),
    projectId: ProjectIdSchema.exactOptional(),
    region: ProjectRegionSchema.exactOptional(),
    state: ProjectStateSchema.exactOptional(),
    createdDate: DateSchema.and(
      z.any().openapi({ description: ' Date the project was created. ' }),
    ).exactOptional(),
    lastUpdatedDate: DateSchema.and(
      z.any().openapi({ description: ' Date of the last modification of the project. ' }),
    ).exactOptional(),
    consoleUrl: ConsoleUrlSchema.and(
      z
        .any()
        .openapi({ description: ' Website URL for this project in the AWS Mobile Hub console. ' }),
    ).exactOptional(),
    resources: ResourcesSchema.exactOptional(),
  })
  .openapi({ description: ' Detailed information about an AWS Mobile Hub project. ', required: [] })
  .openapi('ProjectDetails')

const CreateProjectResultSchema = z
  .object({
    details: ProjectDetailsSchema.and(
      z
        .any()
        .openapi({
          description: ' Detailed information about the created AWS Mobile Hub project. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Result structure used in response to a request to create a project. ',
    required: [],
  })
  .openapi('CreateProjectResult')

const ErrorMessageSchema = z
  .string()
  .openapi({ description: ' The Exception Error Message. ' })
  .openapi('ErrorMessage')

const InternalFailureExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      ' The service has encountered an unexpected error condition which prevents it from servicing the request. ',
    required: [],
  })
  .openapi('InternalFailureException')

const ServiceUnavailableExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      ' The service is temporarily unavailable. The request should be retried after some time delay. ',
    required: [],
  })
  .openapi('ServiceUnavailableException')

const UnauthorizedExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: ' Credentials of the caller are insufficient to authorize the request. ',
    required: [],
  })
  .openapi('UnauthorizedException')

const TooManyRequestsExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      ' Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. ',
    required: [],
  })
  .openapi('TooManyRequestsException')

const BadRequestExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      ' The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. ',
    required: [],
  })
  .openapi('BadRequestException')

const NotFoundExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({ description: ' No entity can be found with the specified identifier. ', required: [] })
  .openapi('NotFoundException')

const LimitExceededExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description:
      ' There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request. ',
    required: [],
  })
  .openapi('LimitExceededException')

const DeleteProjectResultSchema = z
  .object({
    deletedResources: ResourcesSchema.and(
      z.any().openapi({ description: ' Resources which were deleted. ' }),
    ).exactOptional(),
    orphanedResources: ResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Resources which were not deleted, due to a risk of losing potentially important data or files. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Result structure used in response to request to delete a project. ',
    required: [],
  })
  .openapi('DeleteProjectResult')

const BundleIdSchema = z
  .string()
  .openapi({ description: ' Unique bundle identifier. ' })
  .openapi('BundleId')

const BundleTitleSchema = z
  .string()
  .openapi({ description: ' Title of the download bundle. ' })
  .openapi('BundleTitle')

const BundleVersionSchema = z
  .string()
  .openapi({ description: ' Version of the download bundle. ' })
  .openapi('BundleVersion')

const BundleDescriptionSchema = z
  .string()
  .openapi({ description: ' Description of the download bundle. ' })
  .openapi('BundleDescription')

const IconUrlSchema = z
  .string()
  .openapi({ description: ' Icon for the download bundle. ' })
  .openapi('IconUrl')

const PlatformSchema = z
  .enum(['OSX', 'WINDOWS', 'LINUX', 'OBJC', 'SWIFT', 'ANDROID', 'JAVASCRIPT'])
  .openapi({ description: ' Developer desktop or target mobile app or website platform. ' })
  .openapi('Platform')

const PlatformsSchema = z
  .array(PlatformSchema)
  .openapi({ description: ' Developer desktop or mobile app or website platforms. ' })
  .openapi('Platforms')

const BundleDetailsSchema = z
  .object({
    bundleId: BundleIdSchema.exactOptional(),
    title: BundleTitleSchema.exactOptional(),
    version: BundleVersionSchema.exactOptional(),
    description: BundleDescriptionSchema.exactOptional(),
    iconUrl: IconUrlSchema.exactOptional(),
    availablePlatforms: PlatformsSchema.exactOptional(),
  })
  .openapi({ description: ' The details of the bundle. ', required: [] })
  .openapi('BundleDetails')

const DescribeBundleResultSchema = z
  .object({
    details: BundleDetailsSchema.and(
      z.any().openapi({ description: ' The details of the bundle. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Result structure contains the details of the bundle. ', required: [] })
  .openapi('DescribeBundleResult')

const DescribeProjectResultSchema = z
  .object({ details: ProjectDetailsSchema.exactOptional() })
  .openapi({
    description: ' Result structure used for requests of project details. ',
    required: [],
  })
  .openapi('DescribeProjectResult')

const DownloadUrlSchema = z
  .string()
  .openapi({ description: ' The download Url. ' })
  .openapi('DownloadUrl')

const ExportBundleResultSchema = z
  .object({
    downloadUrl: DownloadUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            ' URL which contains the custom-generated SDK and tool packages used to integrate the client mobile app or web app with the AWS resources created by the AWS Mobile Hub project. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources. ',
    required: [],
  })
  .openapi('ExportBundleResult')

const ShareUrlSchema = z
  .string()
  .openapi({
    description:
      ' URL which can be shared to allow other AWS users to create their own project in AWS Mobile Hub with the same configuration as the specified project. This URL pertains to a snapshot in time of the project configuration that is created when this API is called. If you want to share additional changes to your project configuration, then you will need to create and share a new snapshot by calling this method again. ',
  })
  .openapi('ShareUrl')

const SnapshotIdSchema = z
  .string()
  .openapi({
    description:
      ' Unique identifier for the exported snapshot of the project configuration. This snapshot identifier is included in the share URL. ',
  })
  .openapi('SnapshotId')

const ExportProjectResultSchema = z
  .object({
    downloadUrl: DownloadUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            ' URL which can be used to download the exported project configuation file(s). ',
        }),
    ).exactOptional(),
    shareUrl: ShareUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            ' URL which can be shared to allow other AWS users to create their own project in AWS Mobile Hub with the same configuration as the specified project. This URL pertains to a snapshot in time of the project configuration that is created when this API is called. If you want to share additional changes to your project configuration, then you will need to create and share a new snapshot by calling this method again. ',
        }),
    ).exactOptional(),
    snapshotId: SnapshotIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Unique identifier for the exported snapshot of the project configuration. This snapshot identifier is included in the share URL. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Result structure used for requests to export project configuration details. ',
    required: [],
  })
  .openapi('ExportProjectResult')

const BundleListSchema = z
  .array(BundleDetailsSchema)
  .openapi({ description: ' A list of bundles. ' })
  .openapi('BundleList')

const NextTokenSchema = z
  .string()
  .openapi({
    description:
      ' Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. ',
  })
  .openapi('NextToken')

const ListBundlesResultSchema = z
  .object({
    bundleList: BundleListSchema.and(
      z.any().openapi({ description: ' A list of bundles. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Result structure contains a list of all available bundles with details. ',
    required: [],
  })
  .openapi('ListBundlesResult')

const ProjectSummarySchema = z
  .object({
    name: ProjectNameSchema.and(
      z.any().openapi({ description: ' Name of the project. ' }),
    ).exactOptional(),
    projectId: ProjectIdSchema.and(
      z.any().openapi({ description: ' Unique project identifier. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Summary information about an AWS Mobile Hub project. ', required: [] })
  .openapi('ProjectSummary')

const ProjectSummariesSchema = z
  .array(ProjectSummarySchema)
  .openapi({ description: ' List of projects. ' })
  .openapi('ProjectSummaries')

const ListProjectsResultSchema = z
  .object({
    projects: ProjectSummariesSchema.exactOptional(),
    nextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({
    description: ' Result structure used for requests to list projects in AWS Mobile Hub. ',
    required: [],
  })
  .openapi('ListProjectsResult')

const UpdateProjectResultSchema = z
  .object({
    details: ProjectDetailsSchema.and(
      z
        .any()
        .openapi({
          description: ' Detailed information about the updated AWS Mobile Hub project. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Result structure used for requests to updated project configuration. ',
    required: [],
  })
  .openapi('UpdateProjectResult')

const AccountActionRequiredExceptionSchema = z
  .object({ message: ErrorMessageSchema.exactOptional() })
  .openapi({
    description: ' Account Action is required in order to continue the request. ',
    required: [],
  })
  .openapi('AccountActionRequiredException')

const AttributeKeySchema = z
  .string()
  .openapi({ description: ' Key part of key-value attribute pairs. ' })
  .openapi('AttributeKey')

const BooleanSchema = z.boolean().openapi('Boolean')

const ContentsSchema = z
  .string()
  .openapi({ description: ' Binary file data. ' })
  .openapi('Contents')

const CreateProjectRequestSchema = z
  .object({
    contents: ContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' ZIP or YAML file which contains configuration settings to be used when creating the project. This may be the contents of the file downloaded from the URL provided in an export project operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateProjectRequest',
    description: ' Request structure used to request a project be created. ',
    required: [],
  })
  .openapi('CreateProjectRequest')

const DeleteProjectRequestSchema = z
  .object({})
  .openapi({
    title: 'DeleteProjectRequest',
    description: ' Request structure used to request a project be deleted. ',
  })
  .openapi('DeleteProjectRequest')

const DescribeBundleRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeBundleRequest',
    description: ' Request structure to request the details of a specific bundle. ',
  })
  .openapi('DescribeBundleRequest')

const DescribeProjectRequestSchema = z
  .object({})
  .openapi({
    title: 'DescribeProjectRequest',
    description: ' Request structure used to request details about a project. ',
  })
  .openapi('DescribeProjectRequest')

const ExportBundleRequestSchema = z
  .object({})
  .openapi({
    title: 'ExportBundleRequest',
    description:
      ' Request structure used to request generation of custom SDK and tool packages required to integrate mobile web or app clients with backed AWS resources. ',
  })
  .openapi('ExportBundleRequest')

const ExportProjectRequestSchema = z
  .object({})
  .openapi({
    title: 'ExportProjectRequest',
    description: ' Request structure used in requests to export project configuration details. ',
  })
  .openapi('ExportProjectRequest')

const MaxResultsSchema = z
  .int()
  .openapi({ description: ' Maximum number of records to list in a single response. ' })
  .openapi('MaxResults')

const ListBundlesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListBundlesRequest',
    description: ' Request structure to request all available bundles. ',
  })
  .openapi('ListBundlesRequest')

const ListProjectsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListProjectsRequest',
    description: ' Request structure used to request projects list in AWS Mobile Hub. ',
  })
  .openapi('ListProjectsRequest')

const UpdateProjectRequestSchema = z
  .object({
    contents: ContentsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' ZIP or YAML file which contains project configuration to be updated. This should be the contents of the file downloaded from the URL provided in an export project operation. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateProjectRequest',
    description: ' Request structure used for requests to update project configuration. ',
    required: [],
  })
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

export const getProjectsRoute = createRoute({
  method: 'get',
  path: '/projects',
  description: ' Lists projects in AWS Mobile Hub. ',
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
      maxResults: z
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
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' Maximum number of records to list in a single response. ',
            schema: {
              type: 'integer',
              description: ' Maximum number of records to list in a single response. ',
            },
          },
          description: ' Maximum number of records to list in a single response. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' Pagination token. Set to null to start listing projects from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more projects. ',
            schema: {
              type: 'string',
              description:
                ' Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. ',
            },
          },
          description:
            ' Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. ',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProjectsResultSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postProjectsRoute = createRoute({
  method: 'post',
  path: '/projects',
  description: ' Creates an AWS Mobile Hub project. ',
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
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            required: false,
            description: ' Name of the project. ',
            schema: { type: 'string', description: ' Name of the project. ' },
          },
          description: ' Name of the project. ',
        }),
      region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'region',
            in: 'query',
            required: false,
            description: ' Default region where project resources should be created. ',
            schema: {
              type: 'string',
              description:
                ' Default region to use for AWS resource creation in the AWS Mobile Hub project. ',
            },
          },
          description:
            ' Default region to use for AWS resource creation in the AWS Mobile Hub project. ',
        }),
      snapshotId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'snapshotId',
            in: 'query',
            required: false,
            description:
              ' Unique identifier for an exported snapshot of project configuration. This snapshot identifier is included in the share URL when a project is exported. ',
            schema: {
              type: 'string',
              description:
                ' Unique identifier for the exported snapshot of the project configuration. This snapshot identifier is included in the share URL. ',
            },
          },
          description:
            ' Unique identifier for the exported snapshot of the project configuration. This snapshot identifier is included in the share URL. ',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              contents: z.string().exactOptional().openapi({ description: ' Binary file data. ' }),
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
      content: { 'application/json': { schema: CreateProjectResultSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deleteProjectsProjectIdRoute = createRoute({
  method: 'delete',
  path: '/projects/{projectId}',
  description: ' Delets a project in AWS Mobile Hub. ',
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
      projectId: z
        .string()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            description: ' Unique project identifier. ',
            schema: { type: 'string', description: ' Unique project identifier. ' },
          },
          description: ' Unique project identifier. ',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProjectResultSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getBundlesBundleIdRoute = createRoute({
  method: 'get',
  path: '/bundles/{bundleId}',
  description: ' Get the bundle details for the requested bundle id. ',
  operationId: 'DescribeBundle',
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
      bundleId: z
        .string()
        .openapi({
          param: {
            name: 'bundleId',
            in: 'path',
            required: true,
            description: ' Unique bundle identifier. ',
            schema: { type: 'string', description: ' Unique bundle identifier. ' },
          },
          description: ' Unique bundle identifier. ',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeBundleResultSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postBundlesBundleIdRoute = createRoute({
  method: 'post',
  path: '/bundles/{bundleId}',
  description:
    ' Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. ',
  operationId: 'ExportBundle',
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
      bundleId: z
        .string()
        .openapi({
          param: {
            name: 'bundleId',
            in: 'path',
            required: true,
            description: ' Unique bundle identifier. ',
            schema: { type: 'string', description: ' Unique bundle identifier. ' },
          },
          description: ' Unique bundle identifier. ',
        }),
    }),
    query: z.object({
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'projectId',
            in: 'query',
            required: false,
            description: ' Unique project identifier. ',
            schema: { type: 'string', description: ' Unique project identifier. ' },
          },
          description: ' Unique project identifier. ',
        }),
      platform: z
        .enum(['OSX', 'WINDOWS', 'LINUX', 'OBJC', 'SWIFT', 'ANDROID', 'JAVASCRIPT'])
        .exactOptional()
        .openapi({
          param: {
            name: 'platform',
            in: 'query',
            required: false,
            description: ' Developer desktop or target application platform. ',
            schema: {
              type: 'string',
              enum: ['OSX', 'WINDOWS', 'LINUX', 'OBJC', 'SWIFT', 'ANDROID', 'JAVASCRIPT'],
              description: ' Developer desktop or target mobile app or website platform. ',
            },
          },
          description: ' Developer desktop or target mobile app or website platform. ',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportBundleResultSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getProjectProjectIdRoute = createRoute({
  method: 'get',
  path: '/project#projectId',
  description: ' Gets details about a project in AWS Mobile Hub. ',
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
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            name: 'projectId',
            in: 'query',
            required: true,
            description: ' Unique project identifier. ',
            schema: { type: 'string', description: ' Unique project identifier. ' },
          },
          description: ' Unique project identifier. ',
        }),
      syncFromResources: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'syncFromResources',
            in: 'query',
            required: false,
            description:
              ' If set to true, causes AWS Mobile Hub to synchronize information from other services, e.g., update state of AWS CloudFormation stacks in the AWS Mobile Hub project. ',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeProjectResultSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postExportsProjectIdRoute = createRoute({
  method: 'post',
  path: '/exports/{projectId}',
  description:
    ' Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. ',
  operationId: 'ExportProject',
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
      projectId: z
        .string()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            description: ' Unique project identifier. ',
            schema: { type: 'string', description: ' Unique project identifier. ' },
          },
          description: ' Unique project identifier. ',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportProjectResultSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const getBundlesRoute = createRoute({
  method: 'get',
  path: '/bundles',
  description: ' List all available bundles. ',
  operationId: 'ListBundles',
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
      maxResults: z
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
            name: 'maxResults',
            in: 'query',
            required: false,
            description: ' Maximum number of records to list in a single response. ',
            schema: {
              type: 'integer',
              description: ' Maximum number of records to list in a single response. ',
            },
          },
          description: ' Maximum number of records to list in a single response. ',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              ' Pagination token. Set to null to start listing bundles from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more bundles. ',
            schema: {
              type: 'string',
              description:
                ' Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. ',
            },
          },
          description:
            ' Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. ',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBundlesResultSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postUpdateProjectIdRoute = createRoute({
  method: 'post',
  path: '/update#projectId',
  description: ' Update an existing project. ',
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
    query: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            name: 'projectId',
            in: 'query',
            required: true,
            description: ' Unique project identifier. ',
            schema: { type: 'string', description: ' Unique project identifier. ' },
          },
          description: ' Unique project identifier. ',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              contents: z.string().exactOptional().openapi({ description: ' Binary file data. ' }),
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
      content: { 'application/json': { schema: UpdateProjectResultSchema } },
    },
    480: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    481: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'AccountActionRequiredException',
      content: { 'application/json': { schema: AccountActionRequiredExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
