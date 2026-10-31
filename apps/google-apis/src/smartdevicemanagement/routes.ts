import { createRoute, z } from '@hono/zod-openapi'

const GoogleHomeEnterpriseSdmV1ParentRelationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to.',
        readOnly: true,
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123"',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents device relationships, for instance, structure/room to which the device is assigned to.',
    required: [],
  })
  .openapi('GoogleHomeEnterpriseSdmV1ParentRelation')

const GoogleHomeEnterpriseSdmV1DeviceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the device. For example: "enterprises/XYZ/devices/123".',
      }),
    parentRelations: z
      .array(GoogleHomeEnterpriseSdmV1ParentRelationSchema)
      .exactOptional()
      .openapi({ description: 'Assignee details of the device.' }),
    traits: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Output only. Device traits.', readOnly: true }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Device resource represents an instance of enterprise managed device in the property.',
    required: [],
  })
  .openapi('GoogleHomeEnterpriseSdmV1Device')

const GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequestSchema = z
  .object({
    command: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The command name to execute, represented by the fully qualified protobuf message name.',
      }),
    params: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The command message to execute, represented as a Struct.' }),
  })
  .openapi({
    description: 'Request message for SmartDeviceManagementService.ExecuteDeviceCommand',
    required: [],
  })
  .openapi('GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest')

const GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponseSchema = z
  .object({
    results: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The results of executing the command.' }),
  })
  .openapi({
    description: 'Response message for SmartDeviceManagementService.ExecuteDeviceCommand',
    required: [],
  })
  .openapi('GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse')

const GoogleHomeEnterpriseSdmV1ListDevicesResponseSchema = z
  .object({
    devices: z
      .array(GoogleHomeEnterpriseSdmV1DeviceSchema)
      .exactOptional()
      .openapi({ description: 'The list of devices.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token to retrieve the next page of results.' }),
  })
  .openapi({
    description: 'Response message for SmartDeviceManagementService.ListDevices',
    required: [],
  })
  .openapi('GoogleHomeEnterpriseSdmV1ListDevicesResponse')

const GoogleHomeEnterpriseSdmV1RoomSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123".',
        readOnly: true,
      }),
    traits: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Room traits.' }),
  })
  .openapi({
    description:
      'Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.',
    required: [],
  })
  .openapi('GoogleHomeEnterpriseSdmV1Room')

const GoogleHomeEnterpriseSdmV1ListRoomsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages.',
      }),
    rooms: z
      .array(GoogleHomeEnterpriseSdmV1RoomSchema)
      .exactOptional()
      .openapi({ description: 'The list of rooms.' }),
  })
  .openapi({
    description: 'Response message for SmartDeviceManagementService.ListRooms',
    required: [],
  })
  .openapi('GoogleHomeEnterpriseSdmV1ListRoomsResponse')

const GoogleHomeEnterpriseSdmV1StructureSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC".',
        readOnly: true,
      }),
    traits: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Structure traits.' }),
  })
  .openapi({
    description:
      'Structure resource represents an instance of enterprise managed home or hotel room.',
    required: [],
  })
  .openapi('GoogleHomeEnterpriseSdmV1Structure')

const GoogleHomeEnterpriseSdmV1ListStructuresResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages.',
      }),
    structures: z
      .array(GoogleHomeEnterpriseSdmV1StructureSchema)
      .exactOptional()
      .openapi({ description: 'The list of structures.' }),
  })
  .openapi({
    description: 'Response message for SmartDeviceManagementService.ListStructures',
    required: [],
  })
  .openapi('GoogleHomeEnterpriseSdmV1ListStructuresResponse')

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
        'https://www.googleapis.com/auth/sdm.service':
          'See and/or control the devices that you selected',
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
        'https://www.googleapis.com/auth/sdm.service':
          'See and/or control the devices that you selected',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['enterprises'],
  description: 'Gets a room managed by the enterprise.',
  operationId: 'smartdevicemanagement.enterprises.structures.rooms.get',
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
            description:
              'The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123".',
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
      content: { 'application/json': { schema: GoogleHomeEnterpriseSdmV1RoomSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/sdm.service'],
      Oauth2c: ['https://www.googleapis.com/auth/sdm.service'],
    },
  ],
})

export const postV1NameExecuteCommandRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:executeCommand',
  tags: ['enterprises'],
  description: 'Executes a command to device managed by the enterprise.',
  operationId: 'smartdevicemanagement.enterprises.devices.executeCommand',
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
            description:
              'The name of the device requested. For example: "enterprises/XYZ/devices/123"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/sdm.service'],
      Oauth2c: ['https://www.googleapis.com/auth/sdm.service'],
    },
  ],
})

export const getV1ParentDevicesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/devices',
  tags: ['enterprises'],
  description: 'Lists devices managed by the enterprise.',
  operationId: 'smartdevicemanagement.enterprises.devices.list',
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
              "Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing'",
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
              'Optional requested page size. Server may return fewer devices than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'Optional token of the page to retrieve.',
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
            description: 'The parent enterprise to list devices under. E.g. "enterprises/XYZ".',
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
        'application/json': { schema: GoogleHomeEnterpriseSdmV1ListDevicesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/sdm.service'],
      Oauth2c: ['https://www.googleapis.com/auth/sdm.service'],
    },
  ],
})

export const getV1ParentRoomsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/rooms',
  tags: ['enterprises'],
  description: 'Lists rooms managed by the enterprise.',
  operationId: 'smartdevicemanagement.enterprises.structures.rooms.list',
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
              'Requested page size. Server may return fewer rooms than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'The token of the page to retrieve.',
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
            description:
              'The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC".',
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
      content: { 'application/json': { schema: GoogleHomeEnterpriseSdmV1ListRoomsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/sdm.service'],
      Oauth2c: ['https://www.googleapis.com/auth/sdm.service'],
    },
  ],
})

export const getV1ParentStructuresRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/structures',
  tags: ['enterprises'],
  description: 'Lists structures managed by the enterprise.',
  operationId: 'smartdevicemanagement.enterprises.structures.list',
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
            description: 'Optional filter to list structures.',
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
              'Requested page size. Server may return fewer structures than requested. If unspecified, server will pick an appropriate default.',
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
            description: 'The token of the page to retrieve.',
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
            description: 'The parent enterprise to list structures under. E.g. "enterprises/XYZ".',
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
        'application/json': { schema: GoogleHomeEnterpriseSdmV1ListStructuresResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/sdm.service'],
      Oauth2c: ['https://www.googleapis.com/auth/sdm.service'],
    },
  ],
})
