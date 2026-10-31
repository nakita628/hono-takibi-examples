import { createRoute, z } from '@hono/zod-openapi'

const AgentDeviceIdSchema = z
  .object({ id: z.string().exactOptional().openapi({ description: 'Third-party device ID.' }) })
  .openapi({ description: 'Third-party device ID for one device.', required: [] })
  .openapi('AgentDeviceId')

const AgentOtherDeviceIdSchema = z
  .object({
    agentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Project ID for your smart home Action.' }),
    deviceId: z.string().exactOptional().openapi({ description: 'Unique third-party device ID.' }),
  })
  .openapi({ description: 'Alternate third-party device ID.', required: [] })
  .openapi('AgentOtherDeviceId')

const DeviceInfoSchema = z
  .object({
    hwVersion: z.string().exactOptional().openapi({ description: 'Device hardware version.' }),
    manufacturer: z.string().exactOptional().openapi({ description: 'Device manufacturer.' }),
    model: z.string().exactOptional().openapi({ description: 'Device model.' }),
    swVersion: z.string().exactOptional().openapi({ description: 'Device software version.' }),
  })
  .openapi({ description: 'Device information.', required: [] })
  .openapi('DeviceInfo')

const DeviceNamesSchema = z
  .object({
    defaultNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of names provided by the manufacturer rather than the user, such as serial numbers, SKUs, etc.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Primary name of the device, generally provided by the user.' }),
    nicknames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional names provided by the user for the device.' }),
  })
  .openapi({ description: 'Identifiers used to describe the device.', required: [] })
  .openapi('DeviceNames')

const DeviceSchema = z
  .object({
    attributes: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Attributes for the traits supported by the device.' }),
    customData: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.home.google.com/cloud-to-cloud/intents/query) and [EXECUTE](https://developers.home.google.com/cloud-to-cloud/intents/execute) intent. Data in this object has a few constraints: No sensitive information, including but not limited to Personally Identifiable Information.',
      }),
    deviceInfo: DeviceInfoSchema.exactOptional().openapi({
      description: 'Device manufacturer, model, hardware version, and software version.',
    }),
    id: z.string().exactOptional().openapi({ description: 'Third-party device ID.' }),
    name: DeviceNamesSchema.exactOptional().openapi({
      description: 'Names given to this device by your smart home Action.',
    }),
    notificationSupportedByAgent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification. If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices.',
      }),
    otherDeviceIds: z
      .array(AgentOtherDeviceIdSchema)
      .exactOptional()
      .openapi({
        description:
          'Alternate IDs associated with this device. This is used to identify cloud synced devices enabled for [local fulfillment](https://developers.home.google.com/local-home/overview).',
      }),
    roomHint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Suggested name for the room where this device is installed. Google attempts to use this value during user setup.',
      }),
    structureHint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Suggested name for the structure where this device is installed. Google attempts to use this value during user setup.',
      }),
    traits: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Traits supported by the device. See [device traits](https://developers.home.google.com/cloud-to-cloud/traits).',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hardware type of the device. See [device types](https://developers.home.google.com/cloud-to-cloud/guides).',
      }),
    willReportState: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification.',
      }),
  })
  .openapi({ description: 'Third-party device definition.', required: [] })
  .openapi('Device')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const QueryRequestPayloadSchema = z
  .object({
    devices: z
      .array(AgentDeviceIdSchema)
      .exactOptional()
      .openapi({ description: 'Third-party device IDs for which to get the device states.' }),
  })
  .openapi({ description: 'Payload containing device IDs.', required: [] })
  .openapi('QueryRequestPayload')

const QueryRequestInputSchema = z
  .object({
    payload: QueryRequestPayloadSchema.exactOptional().openapi({
      description: 'Payload containing third-party device IDs.',
    }),
  })
  .openapi({ description: 'Device ID inputs to QueryRequest.', required: [] })
  .openapi('QueryRequestInput')

const QueryRequestSchema = z
  .object({
    agentUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Third-party user ID.' }),
    inputs: z
      .array(QueryRequestInputSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Inputs containing third-party device IDs for which to get the device states.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Request ID used for debugging.' }),
  })
  .openapi({
    description:
      'Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.',
    required: [],
  })
  .openapi('QueryRequest')

const QueryResponsePayloadSchema = z
  .object({
    devices: z
      .record(
        z.string(),
        z.record(z.string(), z.any().openapi({ description: 'Properties of the object.' })),
      )
      .exactOptional()
      .openapi({
        description:
          'States of the devices. Map of third-party device ID to struct of device states.',
      }),
  })
  .openapi({ description: 'Payload containing device states information.', required: [] })
  .openapi('QueryResponsePayload')

const QueryResponseSchema = z
  .object({
    payload: QueryResponsePayloadSchema.exactOptional().openapi({
      description: 'Device states for the devices given in the request.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Request ID used for debugging. Copied from the request.' }),
  })
  .openapi({
    description:
      'Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.home.google.com/cloud-to-cloud/intents/query). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "devices": { "123": { "on": true, "online": true }, "456": { "on": true, "online": true, "brightness": 80, "color": { "name": "cerulean", "spectrumRGB": 31655 } } } } } ```',
    required: [],
  })
  .openapi('QueryResponse')

const ReportStateAndNotificationDeviceSchema = z
  .object({
    notifications: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Notifications metadata for devices. See the **Device NOTIFICATIONS** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits).',
      }),
    states: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'States of devices to update. See the **Device STATES** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits).',
      }),
  })
  .openapi({ description: 'The states and notifications specific to a device.', required: [] })
  .openapi('ReportStateAndNotificationDevice')

const StateAndNotificationPayloadSchema = z
  .object({
    devices: ReportStateAndNotificationDeviceSchema.exactOptional().openapi({
      description: 'The devices for updating state and sending notifications.',
    }),
  })
  .openapi({
    description: 'Payload containing the state and notification information for devices.',
    required: [],
  })
  .openapi('StateAndNotificationPayload')

const ReportStateAndNotificationRequestSchema = z
  .object({
    agentUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Third-party user ID.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier per event (for example, a doorbell press).' }),
    followUpToken: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    payload: StateAndNotificationPayloadSchema.exactOptional().openapi({
      description: 'Required. State of devices to update and notification metadata for devices.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Request ID used for debugging.' }),
  })
  .openapi({
    description:
      'Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, "123" and "456" in the following example). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "agentUserId": "1234", "payload": { "devices": { "states": { "123": { "on": true }, "456": { "on": true, "brightness": 10 } }, } } } ```',
    required: [],
  })
  .openapi('ReportStateAndNotificationRequest')

const ReportStateAndNotificationResponseSchema = z
  .object({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Request ID copied from ReportStateAndNotificationRequest.' }),
  })
  .openapi({
    description:
      'Response type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call.',
    required: [],
  })
  .openapi('ReportStateAndNotificationResponse')

const RequestSyncDevicesRequestSchema = z
  .object({
    agentUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Third-party user ID.' }),
    async: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given `agent_user_id`, but the caller will not receive any error responses.',
      }),
  })
  .openapi({
    description:
      'Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.',
    required: [],
  })
  .openapi('RequestSyncDevicesRequest')

const RequestSyncDevicesResponseSchema = z
  .object({})
  .openapi({
    description:
      'Response type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call. Intentionally empty upon success. An HTTP response code is returned with more details upon failure.',
  })
  .openapi('RequestSyncDevicesResponse')

const SyncRequestSchema = z
  .object({
    agentUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Third-party user ID.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Request ID used for debugging.' }),
  })
  .openapi({
    description:
      'Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.',
    required: [],
  })
  .openapi('SyncRequest')

const SyncResponsePayloadSchema = z
  .object({
    agentUserId: z.string().exactOptional().openapi({ description: 'Third-party user ID' }),
    devices: z
      .array(DeviceSchema)
      .exactOptional()
      .openapi({ description: 'Devices associated with the third-party user.' }),
  })
  .openapi({ description: 'Payload containing device information.', required: [] })
  .openapi('SyncResponsePayload')

const SyncResponseSchema = z
  .object({
    payload: SyncResponsePayloadSchema.exactOptional().openapi({
      description: 'Devices associated with the third-party user.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Request ID used for debugging. Copied from the request.' }),
  })
  .openapi({
    description:
      'Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Google smart home `action.devices.SYNC` [response](https://developers.home.google.com/cloud-to-cloud/intents/sync). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "agentUserId": "1836.15267389", "devices": [{ "id": "123", "type": "action.devices.types.OUTLET", "traits": [ "action.devices.traits.OnOff" ], "name": { "defaultNames": ["My Outlet 1234"], "name": "Night light", "nicknames": ["wall plug"] }, "willReportState": false, "deviceInfo": { "manufacturer": "lights-out-inc", "model": "hs1234", "hwVersion": "3.2", "swVersion": "11.4" }, "customData": { "fooValue": 74, "barValue": true, "bazValue": "foo" } }] } } ```',
    required: [],
  })
  .openapi('SyncResponse')

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
        'https://www.googleapis.com/auth/homegraph':
          'Private Service: https://www.googleapis.com/auth/homegraph',
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
        'https://www.googleapis.com/auth/homegraph':
          'Private Service: https://www.googleapis.com/auth/homegraph',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1DevicesQueryRoute = createRoute({
  method: 'post',
  path: '/v1/devices:query',
  tags: ['devices'],
  description:
    "Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.",
  operationId: 'homegraph.devices.query',
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
    body: { content: { 'application/json': { schema: QueryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/homegraph'],
      Oauth2c: ['https://www.googleapis.com/auth/homegraph'],
    },
  ],
})

export const postV1DevicesReportStateAndNotificationRoute = createRoute({
  method: 'post',
  path: '/v1/devices:reportStateAndNotification',
  tags: ['devices'],
  description:
    "Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.",
  operationId: 'homegraph.devices.reportStateAndNotification',
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
    body: { content: { 'application/json': { schema: ReportStateAndNotificationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportStateAndNotificationResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/homegraph'],
      Oauth2c: ['https://www.googleapis.com/auth/homegraph'],
    },
  ],
})

export const postV1DevicesRequestSyncRoute = createRoute({
  method: 'post',
  path: '/v1/devices:requestSync',
  tags: ['devices'],
  description:
    "Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.",
  operationId: 'homegraph.devices.requestSync',
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
    body: { content: { 'application/json': { schema: RequestSyncDevicesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RequestSyncDevicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/homegraph'],
      Oauth2c: ['https://www.googleapis.com/auth/homegraph'],
    },
  ],
})

export const postV1DevicesSyncRoute = createRoute({
  method: 'post',
  path: '/v1/devices:sync',
  tags: ['devices'],
  description:
    "Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.",
  operationId: 'homegraph.devices.sync',
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
    body: { content: { 'application/json': { schema: SyncRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SyncResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/homegraph'],
      Oauth2c: ['https://www.googleapis.com/auth/homegraph'],
    },
  ],
})

export const deleteV1AgentUserIdRoute = createRoute({
  method: 'delete',
  path: '/v1/{agentUserId}',
  tags: ['agentUsers'],
  description:
    "Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted. For more details on how users link their accounts, see [fulfillment and authentication](https://developers.home.google.com/cloud-to-cloud/primer/fulfillment). The third-party user's identity is passed in via the `agent_user_id` (see DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project.",
  operationId: 'homegraph.agentUsers.delete',
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
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Request ID used for debugging.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      agentUserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Third-party user ID.',
            in: 'path',
            name: 'agentUserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/homegraph'],
      Oauth2c: ['https://www.googleapis.com/auth/homegraph'],
    },
  ],
})
