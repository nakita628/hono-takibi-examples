import { createRoute, z } from '@hono/zod-openapi'

const StringMin12Max40Schema = z.string().min(12).max(40).openapi('StringMin12Max40')

const IntegerSchema = z.int().openapi('Integer')

const ClaimDevicesByClaimCodeResponseSchema = z
  .object({
    ClaimCode: StringMin12Max40Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'claimCode' },
          description: 'The claim code provided by the device manufacturer.',
        }),
    ).exactOptional(),
    Total: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'total' },
          description:
            'The total number of devices associated with the claim code that has been processed in\n the claim request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClaimDevicesByClaimCodeResponse')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InternalFailureExceptionSchema = z.any().openapi('InternalFailureException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const StringSchema = z.string().openapi('String')

const DeviceAttributesSchema = z
  .record(z.string(), StringSchema)
  .openapi({ description: '\n DeviceAttributes is a string-to-string map specified by the user.' })
  .openapi('DeviceAttributes')

const BooleanSchema = z.boolean().openapi('Boolean')

const DoubleMin0Max100Schema = z.float64().openapi('DoubleMin0Max100')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const DeviceDescriptionSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ xml: { name: 'arn' }, description: 'The ARN of the device.' }),
    ).exactOptional(),
    Attributes: DeviceAttributesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'attributes' },
          description:
            'An array of zero or more elements of DeviceAttribute objects providing\n user specified device attributes.',
        }),
    ).exactOptional(),
    DeviceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deviceId' },
          description: 'The unique identifier of the device.',
        }),
    ).exactOptional(),
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description: 'A Boolean value indicating whether or not the device is enabled.',
        }),
    ).exactOptional(),
    RemainingLife: DoubleMin0Max100Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'remainingLife' },
          description:
            'A value between 0 and 1 inclusive, representing the fraction of life remaining for the\n device.',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'type' },
          description: 'The type of the device, such as "button".',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The tags currently associated with the AWS IoT 1-Click device.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeviceDescription')

const DescribeDeviceResponseSchema = z
  .object({
    DeviceDescription: DeviceDescriptionSchema.and(
      z.any().openapi({ xml: { name: 'deviceDescription' }, description: 'Device details.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeDeviceResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const FinalizeDeviceClaimResponseSchema = z
  .object({
    State: StringSchema.and(
      z.any().openapi({ xml: { name: 'state' }, description: "The device's final claim state." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FinalizeDeviceClaimResponse')

const PreconditionFailedExceptionSchema = z.any().openapi('PreconditionFailedException')

const ResourceConflictExceptionSchema = z.any().openapi('ResourceConflictException')

const DeviceMethodSchema = z
  .object({
    DeviceType: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deviceType' },
          description: 'The type of the device, such as "button".',
        }),
    ).exactOptional(),
    MethodName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'methodName' },
          description: 'The name of the method applicable to the deviceType.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeviceMethod')

const ListOfDeviceMethodSchema = z.array(DeviceMethodSchema).openapi('ListOfDeviceMethod')

const GetDeviceMethodsResponseSchema = z
  .object({
    DeviceMethods: ListOfDeviceMethodSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'deviceMethods' }, description: 'List of available device APIs.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeviceMethodsResponse')

const InitiateDeviceClaimResponseSchema = z
  .object({
    State: StringSchema.and(
      z.any().openapi({ xml: { name: 'state' }, description: "The device's final claim state." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InitiateDeviceClaimResponse')

const InvokeDeviceMethodResponseSchema = z
  .object({
    DeviceMethodResponse: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deviceMethodResponse' },
          description: 'A JSON encoded string containing the device method response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvokeDeviceMethodResponse')

const RangeNotSatisfiableExceptionSchema = z.any().openapi('RangeNotSatisfiableException')

const AttributesSchema = z.object({}).openapi('Attributes')

const DeviceSchema = z
  .object({
    Attributes: AttributesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'attributes' },
          description: 'The user specified attributes associated with the device for an event.',
        }),
    ).exactOptional(),
    DeviceId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deviceId' },
          description: 'The unique identifier of the device.',
        }),
    ).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ xml: { name: 'type' }, description: 'The device type, such as "button".' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Device')

const DeviceEventSchema = z
  .object({
    Device: DeviceSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'device' },
          description: 'An object representing the device associated with the event.',
        }),
    ).exactOptional(),
    StdEvent: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stdEvent' },
          description: 'A serialized JSON object representing the device-type specific event.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeviceEvent')

const ListOfDeviceEventSchema = z.array(DeviceEventSchema).openapi('ListOfDeviceEvent')

const ListDeviceEventsResponseSchema = z
  .object({
    Events: ListOfDeviceEventSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'events' },
          description:
            'An array of zero or more elements describing the event(s) associated with the\n device.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description: 'The token to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDeviceEventsResponse')

const ListOfDeviceDescriptionSchema = z
  .array(DeviceDescriptionSchema)
  .openapi('ListOfDeviceDescription')

const ListDevicesResponseSchema = z
  .object({
    Devices: ListOfDeviceDescriptionSchema.and(
      z.any().openapi({ xml: { name: 'devices' }, description: 'A list of devices.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description: 'The token to retrieve the next set of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDevicesResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            '<p>A collection of key/value pairs defining the resource tags. For example, {\n "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS\n Tagging Strategies</a>.</p><p>\n \n </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const UnclaimDeviceResponseSchema = z
  .object({
    State: StringSchema.and(
      z.any().openapi({ xml: { name: 'state' }, description: "The device's final claim state." }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnclaimDeviceResponse')

const UpdateDeviceStateResponseSchema = z.object({}).openapi('UpdateDeviceStateResponse')

const ClaimDevicesByClaimCodeRequestSchema = z
  .object({})
  .openapi({ title: 'ClaimDevicesByClaimCodeRequest' })
  .openapi('ClaimDevicesByClaimCodeRequest')

const DescribeDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeDeviceRequest' })
  .openapi('DescribeDeviceRequest')

const FinalizeDeviceClaimRequestSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            '<p>A collection of key/value pairs defining the resource tags. For example, {\n "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS\n Tagging Strategies</a>.</p><p>\n \n </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'FinalizeDeviceClaimRequest', required: [] })
  .openapi('FinalizeDeviceClaimRequest')

const GetDeviceMethodsRequestSchema = z
  .object({})
  .openapi({ title: 'GetDeviceMethodsRequest' })
  .openapi('GetDeviceMethodsRequest')

const InitiateDeviceClaimRequestSchema = z
  .object({})
  .openapi({ title: 'InitiateDeviceClaimRequest' })
  .openapi('InitiateDeviceClaimRequest')

const InvokeDeviceMethodRequestSchema = z
  .object({
    DeviceMethod: DeviceMethodSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'deviceMethod' }, description: 'The device method to invoke.' }),
    ).exactOptional(),
    DeviceMethodParameters: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deviceMethodParameters' },
          description: 'A JSON encoded string containing the device method request parameters.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'InvokeDeviceMethodRequest', required: [] })
  .openapi('InvokeDeviceMethodRequest')

const TimestampIso8601Schema = z.iso.datetime({ offset: true }).openapi('TimestampIso8601')

const MaxResultsSchema = z.int().min(1).max(250).openapi('MaxResults')

const ListDeviceEventsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDeviceEventsRequest' })
  .openapi('ListDeviceEventsRequest')

const ListDevicesRequestSchema = z
  .object({})
  .openapi({ title: 'ListDevicesRequest' })
  .openapi('ListDevicesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TagResourceRequestSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            '<p>A collection of key/value pairs defining the resource tags. For example, {\n "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS\n Tagging Strategies</a>.</p><p>\n \n </p>',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UnclaimDeviceRequestSchema = z
  .object({})
  .openapi({ title: 'UnclaimDeviceRequest' })
  .openapi('UnclaimDeviceRequest')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDeviceStateRequestSchema = z
  .object({
    Enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enabled' },
          description: 'If true, the device is enabled. If false, the device is\n disabled.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDeviceStateRequest', required: [] })
  .openapi('UpdateDeviceStateRequest')

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

export const putClaimsClaimCodeRoute = createRoute({
  method: 'put',
  path: '/claims/{claimCode}',
  description:
    'Adds device(s) to your account (i.e., claim one or more devices) if and only if you\n received a claim code with the device(s).',
  operationId: 'ClaimDevicesByClaimCode',
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
      claimCode: z
        .string()
        .openapi({
          param: {
            name: 'claimCode',
            in: 'path',
            required: true,
            description:
              'The claim code, starting with "C-", as provided by the device manufacturer.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ClaimDevicesByClaimCodeResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    482: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getDevicesDeviceIdRoute = createRoute({
  method: 'get',
  path: '/devices/{deviceId}',
  description:
    'Given a device ID, returns a DescribeDeviceResponse object describing the\n details of the device.',
  operationId: 'DescribeDevice',
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
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the device.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDeviceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const putDevicesDeviceIdFinalizeClaimRoute = createRoute({
  method: 'put',
  path: '/devices/{deviceId}/finalize-claim',
  description:
    '<p>Given a device ID, finalizes the claim request for the associated device.</p><note>\n <p>Claiming a device consists of initiating a claim, then publishing a device event,\n and finalizing the claim. For a device of type button, a device event can\n be published by simply clicking the device.</p>\n </note>',
  operationId: 'FinalizeDeviceClaim',
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
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the device.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A collection of key/value pairs defining the resource tags. For example, {\n "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS\n Tagging Strategies</a>.</p><p>\n \n </p>',
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
      content: { 'application/json': { schema: FinalizeDeviceClaimResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    484: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const getDevicesDeviceIdMethodsRoute = createRoute({
  method: 'get',
  path: '/devices/{deviceId}/methods',
  description: 'Given a device ID, returns the invokable methods associated with the device.',
  operationId: 'GetDeviceMethods',
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
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the device.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeviceMethodsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postDevicesDeviceIdMethodsRoute = createRoute({
  method: 'post',
  path: '/devices/{deviceId}/methods',
  description:
    'Given a device ID, issues a request to invoke a named device method (with possible\n parameters). See the "Example POST" code snippet below.',
  operationId: 'InvokeDeviceMethod',
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
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the device.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              deviceMethod: z
                .object({
                  DeviceType: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'deviceType' },
                        description: 'The type of the device, such as "button".',
                      }),
                  ).exactOptional(),
                  MethodName: StringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'methodName' },
                        description: 'The name of the method applicable to the deviceType.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The device method to invoke.', required: [] }),
              deviceMethodParameters: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A JSON encoded string containing the device method request parameters.',
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
      content: { 'application/json': { schema: InvokeDeviceMethodResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'PreconditionFailedException',
      content: { 'application/json': { schema: PreconditionFailedExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'RangeNotSatisfiableException',
      content: { 'application/json': { schema: RangeNotSatisfiableExceptionSchema } },
    },
    485: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const putDevicesDeviceIdInitiateClaimRoute = createRoute({
  method: 'put',
  path: '/devices/{deviceId}/initiate-claim',
  description:
    '<p>Given a device ID, initiates a claim request for the associated device.</p><note>\n <p>Claiming a device consists of initiating a claim, then publishing a device event,\n and finalizing the claim. For a device of type button, a device event can\n be published by simply clicking the device.</p>\n </note>',
  operationId: 'InitiateDeviceClaim',
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
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the device.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InitiateDeviceClaimResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
  },
})

export const getDevicesDeviceIdEventsFromTimeStampToTimeStampRoute = createRoute({
  method: 'get',
  path: '/devices/{deviceId}/events#fromTimeStamp&toTimeStamp',
  description:
    'Using a device ID, returns a DeviceEventsResponse object containing an\n array of events for the device.',
  operationId: 'ListDeviceEvents',
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
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the device.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fromTimeStamp: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'fromTimeStamp',
            in: 'query',
            required: true,
            description:
              'The start date for the device event query, in ISO8061 format. For example,\n 2018-03-28T15:45:12.880Z\n ',
            schema: { type: 'string', format: 'date-time' },
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
              'The maximum number of results to return per request. If not set, a default value of\n 100 is used.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to retrieve the next set of results.',
            schema: { type: 'string' },
          },
        }),
      toTimeStamp: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            name: 'toTimeStamp',
            in: 'query',
            required: true,
            description:
              'The end date for the device event query, in ISO8061 format. For example,\n 2018-03-28T15:45:12.880Z\n ',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeviceEventsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'RangeNotSatisfiableException',
      content: { 'application/json': { schema: RangeNotSatisfiableExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const getDevicesRoute = createRoute({
  method: 'get',
  path: '/devices',
  description: 'Lists the 1-Click compatible devices associated with your AWS account.',
  operationId: 'ListDevices',
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
      deviceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'deviceType',
            in: 'query',
            required: false,
            description: 'The type of the device, such as "button".',
            schema: { type: 'string' },
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
              'The maximum number of results to return per request. If not set, a default value of\n 100 is used.',
            schema: { type: 'integer', minimum: 1, maximum: 250 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to retrieve the next set of results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDevicesResponseSchema } },
    },
    480: {
      description: 'RangeNotSatisfiableException',
      content: { 'application/json': { schema: RangeNotSatisfiableExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resource-arn}',
  description: 'Lists the tags associated with the specified resource ARN.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resource-arn}',
  description:
    'Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per\n resource.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .openapi({
                  description:
                    '<p>A collection of key/value pairs defining the resource tags. For example, {\n "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS\n Tagging Strategies</a>.</p><p>\n \n </p>',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const putDevicesDeviceIdUnclaimRoute = createRoute({
  method: 'put',
  path: '/devices/{deviceId}/unclaim',
  description: 'Disassociates a device from your AWS account using its device ID.',
  operationId: 'UnclaimDevice',
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
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the device.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UnclaimDeviceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resource-arn}#tagKeys',
  description:
    'Using tag keys, deletes the tags (key/value pairs) associated with the specified\n resource ARN.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The ARN of the resource.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StringSchema),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A collections of tag keys. For example, {"key1","key2"}',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})

export const putDevicesDeviceIdStateRoute = createRoute({
  method: 'put',
  path: '/devices/{deviceId}/state',
  description:
    'Using a Boolean value (true or false), this operation\n enables or disables the device given a device ID.',
  operationId: 'UpdateDeviceState',
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
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            required: true,
            description: 'The unique identifier of the device.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If true, the device is enabled. If false, the device is\n disabled.',
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
      content: { 'application/json': { schema: UpdateDeviceStateResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    482: {
      description: 'InternalFailureException',
      content: { 'application/json': { schema: InternalFailureExceptionSchema } },
    },
  },
})
