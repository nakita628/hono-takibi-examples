import { createRoute, z } from '@hono/zod-openapi'

const EntityNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*$/)
  .min(1)
  .max(63)
  .openapi('EntityName')

const DeploymentTypeSchema = z.literal('Model').openapi('DeploymentType')

const FailureHandlingPolicySchema = z
  .enum(['ROLLBACK_ON_FAILURE', 'DO_NOTHING'])
  .openapi('FailureHandlingPolicy')

const S3UriSchema = z
  .string()
  .regex(/^s3:\/\/([^\/]+)\/?(.*)$/)
  .max(1024)
  .openapi('S3Uri')

const ChecksumTypeSchema = z.literal('SHA1').openapi('ChecksumType')

const ChecksumStringSchema = z
  .string()
  .regex(/^[a-z0-9](-*[a-z0-9])*$/)
  .min(1)
  .max(63)
  .openapi('ChecksumString')

const ChecksumSchema = z
  .object({
    Type: ChecksumTypeSchema.and(
      z.any().openapi({ description: 'The type of the checksum.' }),
    ).exactOptional(),
    Sum: ChecksumStringSchema.and(
      z.any().openapi({ description: 'The checksum of the model.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about the checksum of a model deployed on a device.',
    required: [],
  })
  .openapi('Checksum')

const ModelStateSchema = z.enum(['DEPLOY', 'UNDEPLOY']).openapi('ModelState')

const DefinitionSchema = z
  .object({
    ModelHandle: EntityNameSchema.and(
      z.any().openapi({ description: 'The unique model handle.' }),
    ).exactOptional(),
    S3Url: S3UriSchema.and(
      z.any().openapi({ description: 'The absolute S3 location of the model.' }),
    ).exactOptional(),
    Checksum: ChecksumSchema.and(
      z.any().openapi({ description: 'The checksum information of the model.' }),
    ).exactOptional(),
    State: ModelStateSchema.and(
      z.any().openapi({ description: 'The desired state of the model.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('Definition')

const DefinitionsSchema = z.array(DefinitionSchema).openapi('Definitions')

const EdgeDeploymentSchema = z
  .object({
    DeploymentName: EntityNameSchema.and(
      z.any().openapi({ description: 'The name and unique ID of the deployment.' }),
    ).exactOptional(),
    Type: DeploymentTypeSchema.and(
      z.any().openapi({ description: 'The type of the deployment.' }),
    ).exactOptional(),
    FailureHandlingPolicy: FailureHandlingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines whether to rollback to previous configuration if deployment fails.',
        }),
    ).exactOptional(),
    Definitions: DefinitionsSchema.and(
      z.any().openapi({ description: 'Returns a list of Definition objects.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a deployment on an edge device that is registered with SageMaker Edge Manager.',
    required: [],
  })
  .openapi('EdgeDeployment')

const EdgeDeploymentsSchema = z.array(EdgeDeploymentSchema).openapi('EdgeDeployments')

const GetDeploymentsResultSchema = z
  .object({
    Deployments: EdgeDeploymentsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of the configurations of the active deployments on the device.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeploymentsResult')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const DeviceRegistrationSchema = z.string().min(1).max(1000).openapi('DeviceRegistration')

const CacheTTLSecondsSchema = z.string().min(1).max(1000).openapi('CacheTTLSeconds')

const GetDeviceRegistrationResultSchema = z
  .object({
    DeviceRegistration: DeviceRegistrationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes if the device is currently registered with SageMaker Edge Manager.',
        }),
    ).exactOptional(),
    CacheTTL: CacheTTLSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, that the registration status is stored on the device’s cache before it is refreshed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeviceRegistrationResult')

const DimensionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9\/])*$/)
  .min(1)
  .max(1000)
  .openapi('Dimension')

const MetricSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*$/)
  .min(4)
  .max(100)
  .openapi('Metric')

const ValueSchema = z.float64().openapi('Value')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const EdgeMetricSchema = z
  .object({
    Dimension: DimensionSchema.and(
      z.any().openapi({ description: 'The dimension of metrics published.' }),
    ).exactOptional(),
    MetricName: MetricSchema.and(
      z.any().openapi({ description: 'Returns the name of the metric.' }),
    ).exactOptional(),
    Value: ValueSchema.and(
      z.any().openapi({ description: 'Returns the value of the metric.' }),
    ).exactOptional(),
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'Timestamp of when the metric was requested.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information required for edge device metrics.', required: [] })
  .openapi('EdgeMetric')

const ModelNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*[a-zA-Z0-9])*$/)
  .min(4)
  .max(255)
  .openapi('ModelName')

const VersionSchema = z
  .string()
  .regex(/[a-zA-Z0-9\ \_\.]+/)
  .min(1)
  .max(64)
  .openapi('Version')

const EdgeMetricsSchema = z.array(EdgeMetricSchema).openapi('EdgeMetrics')

const ModelSchema = z
  .object({
    ModelName: ModelNameSchema.and(
      z.any().openapi({ description: 'The name of the model.' }),
    ).exactOptional(),
    ModelVersion: VersionSchema.and(
      z.any().openapi({ description: 'The version of the model.' }),
    ).exactOptional(),
    LatestSampleTime: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the last data sample taken.' }),
    ).exactOptional(),
    LatestInference: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the last inference that was made.' }),
    ).exactOptional(),
    ModelMetrics: EdgeMetricsSchema.and(
      z.any().openapi({ description: 'Information required for model metrics.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.',
    required: [],
  })
  .openapi('Model')

const StringSchema = z.string().openapi('String')

const DeploymentStatusSchema = z.enum(['SUCCESS', 'FAIL']).openapi('DeploymentStatus')

const DeploymentModelSchema = z
  .object({
    ModelHandle: EntityNameSchema.and(
      z.any().openapi({ description: 'The unique handle of the model.' }),
    ).exactOptional(),
    ModelName: ModelNameSchema.and(
      z.any().openapi({ description: 'The name of the model.' }),
    ).exactOptional(),
    ModelVersion: VersionSchema.and(
      z.any().openapi({ description: 'The version of the model.' }),
    ).exactOptional(),
    DesiredState: ModelStateSchema.and(
      z.any().openapi({ description: 'The desired state of the model.' }),
    ).exactOptional(),
    State: ModelStateSchema.and(
      z.any().openapi({ description: 'Returns the current state of the model.' }),
    ).exactOptional(),
    Status: DeploymentStatusSchema.and(
      z.any().openapi({ description: 'Returns the deployment status of the model.' }),
    ).exactOptional(),
    StatusReason: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Returns the error message for the deployment status result.' }),
    ).exactOptional(),
    RollbackFailureReason: StringSchema.and(
      z.any().openapi({ description: 'Returns the error message if there is a rollback.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DeploymentModel')

const DeploymentModelsSchema = z.array(DeploymentModelSchema).openapi('DeploymentModels')

const DeploymentResultSchema = z
  .object({
    DeploymentName: EntityNameSchema.and(
      z.any().openapi({ description: 'The name and unique ID of the deployment.' }),
    ).exactOptional(),
    DeploymentStatus: EntityNameSchema.and(
      z.any().openapi({ description: 'Returns the bucket error code.' }),
    ).exactOptional(),
    DeploymentStatusMessage: StringSchema.and(
      z.any().openapi({ description: 'Returns the detailed error message.' }),
    ).exactOptional(),
    DeploymentStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp of when the deployment was started on the agent.' }),
    ).exactOptional(),
    DeploymentEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timestamp of when the deployment was ended, and the agent got the deployment results.',
        }),
    ).exactOptional(),
    DeploymentModels: DeploymentModelsSchema.and(
      z.any().openapi({ description: 'Returns a list of models deployed on the agent.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.',
    required: [],
  })
  .openapi('DeploymentResult')

const DeviceFleetNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$/)
  .min(1)
  .max(63)
  .openapi('DeviceFleetName')

const DeviceNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$/)
  .min(1)
  .max(63)
  .openapi('DeviceName')

const GetDeploymentsRequestSchema = z
  .object({
    DeviceName: DeviceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the device you want to get the configuration of active deployments from.',
        }),
    ),
    DeviceFleetName: DeviceFleetNameSchema.and(
      z.any().openapi({ description: 'The name of the fleet that the device belongs to.' }),
    ),
  })
  .openapi({ required: ['DeviceName', 'DeviceFleetName'], title: 'GetDeploymentsRequest' })
  .openapi('GetDeploymentsRequest')

const GetDeviceRegistrationRequestSchema = z
  .object({
    DeviceName: DeviceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique name of the device you want to get the registration status from.',
        }),
    ),
    DeviceFleetName: DeviceFleetNameSchema.and(
      z.any().openapi({ description: 'The name of the fleet that the device belongs to.' }),
    ),
  })
  .openapi({ required: ['DeviceName', 'DeviceFleetName'], title: 'GetDeviceRegistrationRequest' })
  .openapi('GetDeviceRegistrationRequest')

const ModelsSchema = z.array(ModelSchema).openapi('Models')

const SendHeartbeatRequestSchema = z
  .object({
    AgentMetrics: EdgeMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            'For internal use. Returns a list of SageMaker Edge Manager agent operating metrics.',
        }),
    ).exactOptional(),
    Models: ModelsSchema.and(
      z.any().openapi({ description: 'Returns a list of models deployed on the the device.' }),
    ).exactOptional(),
    AgentVersion: VersionSchema.and(
      z.any().openapi({ description: 'Returns the version of the agent.' }),
    ),
    DeviceName: DeviceNameSchema.and(
      z.any().openapi({ description: 'The unique name of the device.' }),
    ),
    DeviceFleetName: DeviceFleetNameSchema.and(
      z.any().openapi({ description: 'The name of the fleet that the device belongs to.' }),
    ),
    DeploymentResult: DeploymentResultSchema.and(
      z.any().openapi({ description: 'Returns the result of a deployment on the device.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AgentVersion', 'DeviceName', 'DeviceFleetName'],
    title: 'SendHeartbeatRequest',
  })
  .openapi('SendHeartbeatRequest')

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

export const postGetDeploymentsRoute = createRoute({
  method: 'post',
  path: '/GetDeployments',
  description: 'Use to get the active deployments from a device.',
  operationId: 'GetDeployments',
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
              DeviceName: z
                .string()
                .regex(/^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$/)
                .min(1)
                .max(63)
                .openapi({
                  description:
                    'The unique name of the device you want to get the configuration of active deployments from.',
                }),
              DeviceFleetName: z
                .string()
                .regex(/^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$/)
                .min(1)
                .max(63)
                .openapi({ description: 'The name of the fleet that the device belongs to.' }),
            })
            .openapi({ required: ['DeviceName', 'DeviceFleetName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentsResultSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postGetDeviceRegistrationRoute = createRoute({
  method: 'post',
  path: '/GetDeviceRegistration',
  description: 'Use to check if a device is registered with SageMaker Edge Manager.',
  operationId: 'GetDeviceRegistration',
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
              DeviceName: z
                .string()
                .regex(/^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$/)
                .min(1)
                .max(63)
                .openapi({
                  description:
                    'The unique name of the device you want to get the registration status from.',
                }),
              DeviceFleetName: z
                .string()
                .regex(/^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$/)
                .min(1)
                .max(63)
                .openapi({ description: 'The name of the fleet that the device belongs to.' }),
            })
            .openapi({ required: ['DeviceName', 'DeviceFleetName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeviceRegistrationResultSchema } },
    },
    480: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const postSendHeartbeatRoute = createRoute({
  method: 'post',
  path: '/SendHeartbeat',
  description: 'Use to get the current status of devices registered on SageMaker Edge Manager.',
  operationId: 'SendHeartbeat',
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
              AgentMetrics: z
                .array(EdgeMetricSchema)
                .exactOptional()
                .openapi({
                  description:
                    'For internal use. Returns a list of SageMaker Edge Manager agent operating metrics.',
                }),
              Models: z
                .array(ModelSchema)
                .exactOptional()
                .openapi({ description: 'Returns a list of models deployed on the the device.' }),
              AgentVersion: z
                .string()
                .regex(/[a-zA-Z0-9\ \_\.]+/)
                .min(1)
                .max(64)
                .openapi({ description: 'Returns the version of the agent.' }),
              DeviceName: z
                .string()
                .regex(/^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$/)
                .min(1)
                .max(63)
                .openapi({ description: 'The unique name of the device.' }),
              DeviceFleetName: z
                .string()
                .regex(/^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$/)
                .min(1)
                .max(63)
                .openapi({ description: 'The name of the fleet that the device belongs to.' }),
              DeploymentResult: z
                .object({
                  DeploymentName: EntityNameSchema.and(
                    z.any().openapi({ description: 'The name and unique ID of the deployment.' }),
                  ).exactOptional(),
                  DeploymentStatus: EntityNameSchema.and(
                    z.any().openapi({ description: 'Returns the bucket error code.' }),
                  ).exactOptional(),
                  DeploymentStatusMessage: StringSchema.and(
                    z.any().openapi({ description: 'Returns the detailed error message.' }),
                  ).exactOptional(),
                  DeploymentStartTime: TimestampSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The timestamp of when the deployment was started on the agent.',
                      }),
                  ).exactOptional(),
                  DeploymentEndTime: TimestampSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The timestamp of when the deployment was ended, and the agent got the deployment results.',
                      }),
                  ).exactOptional(),
                  DeploymentModels: DeploymentModelsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Returns a list of models deployed on the agent.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.',
                  required: [],
                }),
            })
            .openapi({ required: ['AgentVersion', 'DeviceName', 'DeviceFleetName'] }),
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
  },
})
