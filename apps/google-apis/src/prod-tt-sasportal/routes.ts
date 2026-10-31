import { createRoute, z } from '@hono/zod-openapi'

const SasPortalAssignmentSchema = z
  .object({
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The identities the role is assigned to. It can have the following values: * `{user_email}`: An email address that represents a specific Google account. For example: `alice@gmail.com`. * `{group_email}`: An email address that represents a Google group. For example, `viewers@gmail.com`.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Role that is assigned to `members`.' }),
  })
  .openapi({ description: 'Associates `members` with a `role`.', required: [] })
  .openapi('SasPortalAssignment')

const SasPortalFrequencyRangeSchema = z
  .object({
    highFrequencyMhz: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The highest frequency of the frequency range in MHz.' }),
    lowFrequencyMhz: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The lowest frequency of the frequency range in MHz.' }),
  })
  .openapi({
    description: 'Frequency range from `low_frequency` to `high_frequency`.',
    required: [],
  })
  .openapi('SasPortalFrequencyRange')

const SasPortalChannelWithScoreSchema = z
  .object({
    frequencyRange: SasPortalFrequencyRangeSchema.exactOptional().openapi({
      description: 'The frequency range of the channel.',
    }),
    score: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The channel score, normalized to be in the range [0,100].' }),
  })
  .openapi({ description: 'The channel with score.', required: [] })
  .openapi('SasPortalChannelWithScore')

const SasPortalCreateSignedDeviceRequestSchema = z
  .object({
    encodedDevice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.',
      }),
    installerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique installer id (CPI ID) from the Certified Professional Installers database.',
      }),
  })
  .openapi({ description: 'Request for CreateSignedDevice.', required: [] })
  .openapi('SasPortalCreateSignedDeviceRequest')

const SasPortalCustomerSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Name of the organization that the customer entity represents.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Resource name of the customer.' }),
    sasUserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'User IDs used by the devices belonging to this customer.' }),
  })
  .openapi({ description: 'Entity representing a SAS customer.', required: [] })
  .openapi('SasPortalCustomer')

const SasPortalDeploymentSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "The deployment's display name." }),
    frns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The FCC Registration Numbers (FRNs) copied from its direct parent.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Resource name.', readOnly: true }),
    sasUserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'User ID used by the devices belonging to this deployment. Each deployment should be associated with one unique user ID.',
      }),
  })
  .openapi({ description: 'The Deployment.', required: [] })
  .openapi('SasPortalDeployment')

const SasPortalDeviceAirInterfaceSchema = z
  .object({
    radioTechnology: z
      .enum([
        'RADIO_TECHNOLOGY_UNSPECIFIED',
        'E_UTRA',
        'CAMBIUM_NETWORKS',
        'FOUR_G_BBW_SAA_1',
        'NR',
        'DOODLE_CBRS',
        'CW',
        'REDLINE',
        'TARANA_WIRELESS',
      ])
      .exactOptional()
      .openapi({
        description:
          'Conditional. This field specifies the radio access technology that is used for the CBSD.',
      }),
    supportedSpec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This field is related to the `radioTechnology` and provides the air interface specification that the CBSD is compliant with at the time of registration.',
      }),
  })
  .openapi({ description: "Information about the device's air interface.", required: [] })
  .openapi('SasPortalDeviceAirInterface')

const SasPortalInstallationParamsSchema = z
  .object({
    antennaAzimuth: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Boresight direction of the horizontal plane of the antenna in degrees with respect to true north. The value of this parameter is an integer with a value between 0 and 359 inclusive. A value of 0 degrees means true north; a value of 90 degrees means east. This parameter is optional for Category A devices and conditional for Category B devices.',
      }),
    antennaBeamwidth: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '3-dB antenna beamwidth of the antenna in the horizontal-plane in degrees. This parameter is an unsigned integer having a value between 0 and 360 (degrees) inclusive; it is optional for Category A devices and conditional for Category B devices.',
      }),
    antennaDowntilt: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Antenna downtilt in degrees and is an integer with a value between -90 and +90 inclusive; a negative value means the antenna is tilted up (above horizontal). This parameter is optional for Category A devices and conditional for Category B devices.',
      }),
    antennaGain: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Peak antenna gain in dBi. This parameter is an integer with a value between -127 and +128 (dBi) inclusive.',
      }),
    antennaGainNewField: z
      .float64()
      .exactOptional()
      .openapi({ description: 'As above, but as a DoubleValue.' }),
    antennaModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If an external antenna is used, the antenna model is optionally provided in this field. The string has a maximum length of 128 octets.',
      }),
    cpeCbsdIndication: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If present, this parameter specifies whether the CBSD is a CPE-CBSD or not.',
      }),
    eirpCapability: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'This parameter is the maximum device EIRP in units of dBm/10MHz and is an integer with a value between -127 and +47 (dBm/10 MHz) inclusive. If not included, SAS interprets it as maximum allowable EIRP in units of dBm/10MHz for device category.',
      }),
    eirpCapabilityNewField: z
      .float64()
      .exactOptional()
      .openapi({ description: 'As above, but as a DoubleValue.' }),
    height: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Device antenna height in meters. When the `heightType` parameter value is "AGL", the antenna height should be given relative to ground level. When the `heightType` parameter value is "AMSL", it is given with respect to WGS84 datum.',
      }),
    heightType: z
      .enum(['HEIGHT_TYPE_UNSPECIFIED', 'HEIGHT_TYPE_AGL', 'HEIGHT_TYPE_AMSL'])
      .exactOptional()
      .openapi({ description: 'Specifies how the height is measured.' }),
    horizontalAccuracy: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'A positive number in meters to indicate accuracy of the device antenna horizontal location. This optional parameter should only be present if its value is less than the FCC requirement of 50 meters.',
      }),
    indoorDeployment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the device antenna is indoor or not. `true`: indoor. `false`: outdoor.',
      }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Latitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -90.000000 to +90.000000. Positive values represent latitudes north of the equator; negative values south of the equator.',
      }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Longitude of the device antenna location in degrees relative to the WGS 84 datum. The allowed range is from -180.000000 to +180.000000. Positive values represent longitudes east of the prime meridian; negative values west of the prime meridian.',
      }),
    verticalAccuracy: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'A positive number in meters to indicate accuracy of the device antenna vertical location. This optional parameter should only be present if its value is less than the FCC requirement of 3 meters.',
      }),
  })
  .openapi({ description: 'Information about the device installation parameters.', required: [] })
  .openapi('SasPortalInstallationParams')

const SasPortalDeviceModelSchema = z
  .object({
    firmwareVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The firmware version of the device.' }),
    hardwareVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hardware version of the device.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the device model.' }),
    softwareVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The software version of the device.' }),
    vendor: z.string().exactOptional().openapi({ description: 'The name of the device vendor.' }),
  })
  .openapi({ description: 'Information about the model of the device.', required: [] })
  .openapi('SasPortalDeviceModel')

const SasPortalDeviceConfigSchema = z
  .object({
    airInterface: SasPortalDeviceAirInterfaceSchema.exactOptional().openapi({
      description: "Information about this device's air interface.",
    }),
    callSign: z
      .string()
      .exactOptional()
      .openapi({ description: 'The call sign of the device operator.' }),
    category: z
      .enum(['DEVICE_CATEGORY_UNSPECIFIED', 'DEVICE_CATEGORY_A', 'DEVICE_CATEGORY_B'])
      .exactOptional()
      .openapi({ description: 'FCC category of the device.' }),
    installationParams: SasPortalInstallationParamsSchema.exactOptional().openapi({
      description: 'Installation parameters for the device.',
    }),
    isSigned: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Whether the configuration has been signed by a CPI.' }),
    measurementCapabilities: z
      .array(
        z.enum([
          'MEASUREMENT_CAPABILITY_UNSPECIFIED',
          'MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT',
          'MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Measurement reporting capabilities of the device.' }),
    model: SasPortalDeviceModelSchema.exactOptional().openapi({
      description: 'Information about this device model.',
    }),
    state: z
      .enum(['DEVICE_CONFIG_STATE_UNSPECIFIED', 'DRAFT', 'FINAL'])
      .exactOptional()
      .openapi({ description: 'State of the configuration.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The last time the device configuration was edited.' }),
    userId: z.string().exactOptional().openapi({ description: 'The identifier of a device user.' }),
  })
  .openapi({ description: 'Information about the device configuration.', required: [] })
  .openapi('SasPortalDeviceConfig')

const SasPortalNrqzValidationSchema = z
  .object({
    caseId: z.string().exactOptional().openapi({ description: 'Validation case ID.' }),
    cpiId: z.string().exactOptional().openapi({ description: 'CPI who signed the validation.' }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: "Device latitude that's associated with the validation." }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({ description: "Device longitude that's associated with the validation." }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'DRAFT', 'FINAL'])
      .exactOptional()
      .openapi({ description: 'State of the NRQZ validation info.' }),
  })
  .openapi({ description: 'Information about National Radio Quiet Zone validation.', required: [] })
  .openapi('SasPortalNrqzValidation')

const SasPortalDeviceMetadataSchema = z
  .object({
    antennaModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If populated, the Antenna Model Pattern to use. Format is: `RecordCreatorId:PatternId`',
      }),
    commonChannelGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Common Channel Group (CCG). A group of CBSDs in the same ICG requesting a common primary channel assignment. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).',
      }),
    interferenceCoordinationGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Interference Coordination Group (ICG). A group of CBSDs that manage their own interference with the group. For more details, see [CBRSA-TS-2001 V3.0.0](https://ongoalliance.org/wp-content/uploads/2020/02/CBRSA-TS-2001-V3.0.0_Approved-for-publication.pdf).',
      }),
    nrqzValidated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Set to `true` if a CPI has validated that they have coordinated with the National Quiet Zone office.',
        readOnly: true,
      }),
    nrqzValidation: SasPortalNrqzValidationSchema.exactOptional().openapi({
      description: 'Output only. National Radio Quiet Zone validation info.',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'Device data overridable by both SAS Portal and registration requests.',
    required: [],
  })
  .openapi('SasPortalDeviceMetadata')

const SasPortalDpaMoveListSchema = z
  .object({
    dpaId: z.string().exactOptional().openapi({ description: 'The ID of the DPA.' }),
    frequencyRange: SasPortalFrequencyRangeSchema.exactOptional().openapi({
      description: 'The frequency range that the move list affects.',
    }),
  })
  .openapi({ description: "An entry in a DPA's move list.", required: [] })
  .openapi('SasPortalDpaMoveList')

const SasPortalDeviceGrantSchema = z
  .object({
    channelType: z
      .enum(['CHANNEL_TYPE_UNSPECIFIED', 'CHANNEL_TYPE_GAA', 'CHANNEL_TYPE_PAL'])
      .exactOptional()
      .openapi({ description: 'Type of channel used.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiration time of the grant.' }),
    frequencyRange: SasPortalFrequencyRangeSchema.exactOptional().openapi({
      description: 'The transmission frequency range.',
    }),
    grantId: z.string().exactOptional().openapi({ description: 'Grant Id.' }),
    lastHeartbeatTransmitExpireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transmit expiration time of the last heartbeat.' }),
    maxEirp: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Maximum Equivalent Isotropically Radiated Power (EIRP) permitted by the grant. The maximum EIRP is in units of dBm/MHz. The value of `maxEirp` represents the average (RMS) EIRP that would be measured by the procedure defined in FCC part 96.41(e)(3).',
      }),
    moveList: z
      .array(SasPortalDpaMoveListSchema)
      .exactOptional()
      .openapi({ description: 'The DPA move lists on which this grant appears.' }),
    state: z
      .enum([
        'GRANT_STATE_UNSPECIFIED',
        'GRANT_STATE_GRANTED',
        'GRANT_STATE_TERMINATED',
        'GRANT_STATE_SUSPENDED',
        'GRANT_STATE_AUTHORIZED',
        'GRANT_STATE_EXPIRED',
      ])
      .exactOptional()
      .openapi({ description: 'State of the grant.' }),
    suspensionReason: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'If the grant is suspended, the reason(s) for suspension.' }),
  })
  .openapi({
    description:
      'Device grant. It is an authorization provided by the Spectrum Access System to a device to transmit using specified operating parameters after a successful heartbeat by the device.',
    required: [],
  })
  .openapi('SasPortalDeviceGrant')

const SasPortalDeviceSchema = z
  .object({
    activeConfig: SasPortalDeviceConfigSchema.exactOptional().openapi({
      description: 'Output only. Current configuration of the device as registered to the SAS.',
    }),
    currentChannels: z
      .array(SasPortalChannelWithScoreSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Current channels with scores.', readOnly: true }),
    deviceMetadata: SasPortalDeviceMetadataSchema.exactOptional().openapi({
      description:
        'Device parameters that can be overridden by both SAS Portal and SAS registration requests.',
    }),
    displayName: z.string().exactOptional().openapi({ description: 'Device display name.' }),
    fccId: z.string().exactOptional().openapi({ description: 'The FCC identifier of the device.' }),
    grantRangeAllowlists: z
      .array(SasPortalFrequencyRangeSchema)
      .exactOptional()
      .openapi({
        description: 'Only ranges that are within the allowlists are available for new grants.',
      }),
    grants: z
      .array(SasPortalDeviceGrantSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Grants held by the device.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource path name.' }),
    preloadedConfig: SasPortalDeviceConfigSchema.exactOptional().openapi({
      description: 'Configuration of the device, as specified via SAS Portal API.',
    }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A serial number assigned to the device by the device manufacturer.',
      }),
    state: z
      .enum(['DEVICE_STATE_UNSPECIFIED', 'RESERVED', 'REGISTERED', 'DEREGISTERED'])
      .exactOptional()
      .openapi({ description: 'Output only. Device state.' }),
  })
  .openapi({ required: [] })
  .openapi('SasPortalDevice')

const SasPortalEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('SasPortalEmpty')

const SasPortalGenerateSecretRequestSchema = z
  .object({})
  .openapi({ description: 'Request for GenerateSecret.' })
  .openapi('SasPortalGenerateSecretRequest')

const SasPortalGenerateSecretResponseSchema = z
  .object({
    secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The secret generated by the string and used by ValidateInstaller.',
      }),
  })
  .openapi({ description: 'Response for GenerateSecret.', required: [] })
  .openapi('SasPortalGenerateSecretResponse')

const SasPortalGetPolicyRequestSchema = z
  .object({
    resource: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The resource for which the policy is being requested.' }),
  })
  .openapi({ description: 'Request message for `GetPolicy` method.', required: [] })
  .openapi('SasPortalGetPolicyRequest')

const SasPortalListCustomersResponseSchema = z
  .object({
    customers: z
      .array(SasPortalCustomerSchema)
      .exactOptional()
      .openapi({ description: 'The list of customers that match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A pagination token returned from a previous call to ListCustomers that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers.',
      }),
  })
  .openapi({ description: 'Response for `ListCustomers`.', required: [] })
  .openapi('SasPortalListCustomersResponse')

const SasPortalListDeploymentsResponseSchema = z
  .object({
    deployments: z
      .array(SasPortalDeploymentSchema)
      .exactOptional()
      .openapi({ description: 'The deployments that match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments.',
      }),
  })
  .openapi({ description: 'Response for ListDeployments.', required: [] })
  .openapi('SasPortalListDeploymentsResponse')

const SasPortalListDevicesResponseSchema = z
  .object({
    devices: z
      .array(SasPortalDeviceSchema)
      .exactOptional()
      .openapi({ description: 'The devices that match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A pagination token returned from a previous call to ListDevices that indicates from where listing should continue. If the field is missing or empty, it means there is no more devices.',
      }),
  })
  .openapi({ description: 'Response for ListDevices.', required: [] })
  .openapi('SasPortalListDevicesResponse')

const SasPortalNodeSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: "The node's display name." }),
    name: z.string().exactOptional().openapi({ description: 'Output only. Resource name.' }),
    sasUserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'User ids used by the devices belonging to this node.' }),
  })
  .openapi({ description: 'The Node.', required: [] })
  .openapi('SasPortalNode')

const SasPortalListNodesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes.',
      }),
    nodes: z
      .array(SasPortalNodeSchema)
      .exactOptional()
      .openapi({ description: 'The nodes that match the request.' }),
  })
  .openapi({ description: 'Response for ListNodes.', required: [] })
  .openapi('SasPortalListNodesResponse')

const SasPortalMoveDeploymentRequestSchema = z
  .object({
    destination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the new parent resource node or customer to reparent the deployment under.',
      }),
  })
  .openapi({ description: 'Request for MoveDeployment.', required: [] })
  .openapi('SasPortalMoveDeploymentRequest')

const SasPortalMoveDeviceRequestSchema = z
  .object({
    destination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the new parent resource node or customer to reparent the device under.',
      }),
  })
  .openapi({ description: 'Request for MoveDevice.', required: [] })
  .openapi('SasPortalMoveDeviceRequest')

const SasPortalMoveNodeRequestSchema = z
  .object({
    destination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the new parent resource node or customer to reparent the node under.',
      }),
  })
  .openapi({ description: 'Request for MoveNode.', required: [] })
  .openapi('SasPortalMoveNodeRequest')

const SasPortalStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('SasPortalStatus')

const SasPortalOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: SasPortalStatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('SasPortalOperation')

const SasPortalPolicySchema = z
  .object({
    assignments: z
      .array(SasPortalAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'List of assignments' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to GetPolicy, and systems are expected to put that etag in the request to SetPolicy to ensure that their change will be applied to the same version of the policy. If no etag is provided in the call to GetPolicy, then the existing policy is overwritten blindly.',
      }),
  })
  .openapi({ description: 'Defines an access control policy to the resources.', required: [] })
  .openapi('SasPortalPolicy')

const SasPortalProvisionDeploymentRequestSchema = z
  .object({
    newDeploymentDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. If this field is set, and a new SAS Portal Deployment needs to be created, its display name will be set to the value of this field.',
      }),
    newOrganizationDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. If this field is set, and a new SAS Portal Organization needs to be created, its display name will be set to the value of this field.',
      }),
  })
  .openapi({
    description:
      'Request for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment]. GCP Project, Organization Info, and caller’s GAIA ID should be retrieved from the RPC handler, and used as inputs to create a new SAS organization (if not exists) and a new SAS deployment.',
    required: [],
  })
  .openapi('SasPortalProvisionDeploymentRequest')

const SasPortalProvisionDeploymentResponseSchema = z
  .object({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional error message if the provisioning request is not successful.',
      }),
  })
  .openapi({
    description:
      'Response for [ProvisionDeployment]. [spectrum.sas.portal.v1alpha1.Provisioning.ProvisionDeployment].',
    required: [],
  })
  .openapi('SasPortalProvisionDeploymentResponse')

const SasPortalSetPolicyRequestSchema = z
  .object({
    disableNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. Set the field as `true` to disable the onboarding notification.',
      }),
    policy: SasPortalPolicySchema.exactOptional().openapi({
      description: 'Required. The policy to be applied to the `resource`.',
    }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource for which the policy is being specified. This policy replaces any existing policy.',
      }),
  })
  .openapi({ description: 'Request message for `SetPolicy` method.', required: [] })
  .openapi('SasPortalSetPolicyRequest')

const SasPortalSignDeviceRequestSchema = z
  .object({
    device: SasPortalDeviceSchema.exactOptional().openapi({
      description:
        'Required. The device to sign. The device fields name, fcc_id and serial_number must be set. The user_id field must be set.',
    }),
  })
  .openapi({ description: 'Request for SignDevice.', required: [] })
  .openapi('SasPortalSignDeviceRequest')

const SasPortalTestPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The set of permissions to check for the `resource`.' }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The resource for which the permissions are being requested.',
      }),
  })
  .openapi({ description: 'Request message for `TestPermissions` method.', required: [] })
  .openapi('SasPortalTestPermissionsRequest')

const SasPortalTestPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A set of permissions that the caller is allowed.' }),
  })
  .openapi({ description: 'Response message for `TestPermissions` method.', required: [] })
  .openapi('SasPortalTestPermissionsResponse')

const SasPortalUpdateSignedDeviceRequestSchema = z
  .object({
    encodedDevice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.',
      }),
    installerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique installer ID (CPI ID) from the Certified Professional Installers database.',
      }),
  })
  .openapi({ description: 'Request for UpdateSignedDevice.', required: [] })
  .openapi('SasPortalUpdateSignedDeviceRequest')

const SasPortalValidateInstallerRequestSchema = z
  .object({
    encodedSecret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. JSON Web Token signed using a CPI private key. Payload must include a "secret" claim whose value is the secret.',
      }),
    installerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique installer id (CPI ID) from the Certified Professional Installers database.',
      }),
    secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Secret returned by the GenerateSecret.' }),
  })
  .openapi({ description: 'Request for ValidateInstaller.', required: [] })
  .openapi('SasPortalValidateInstallerRequest')

const SasPortalValidateInstallerResponseSchema = z
  .object({})
  .openapi({ description: 'Response for ValidateInstaller.' })
  .openapi('SasPortalValidateInstallerResponse')

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
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/sasportal':
          'Read, create, update, and delete your SAS Portal data.',
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
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/sasportal':
          'Read, create, update, and delete your SAS Portal data.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1alpha1CustomersRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/customers',
  tags: ['customers'],
  description: 'Returns a list of requested customers.',
  operationId: 'prod_tt_sasportal.customers.list',
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
            description: 'The maximum number of customers to return in the response.',
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
            description:
              'A pagination token returned from a previous call to ListCustomers that indicates where this listing should continue from.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalListCustomersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1CustomersProvisionDeploymentRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/customers:provisionDeployment',
  tags: ['customers'],
  description:
    'Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.',
  operationId: 'prod_tt_sasportal.customers.provisionDeployment',
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
    body: {
      content: { 'application/json': { schema: SasPortalProvisionDeploymentRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalProvisionDeploymentResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1InstallerGenerateSecretRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/installer:generateSecret',
  tags: ['installer'],
  description: 'Generates a secret to be used with the ValidateInstaller.',
  operationId: 'prod_tt_sasportal.installer.generateSecret',
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
    body: { content: { 'application/json': { schema: SasPortalGenerateSecretRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalGenerateSecretResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1InstallerValidateRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/installer:validate',
  tags: ['installer'],
  description: 'Validates the identity of a Certified Professional Installer (CPI).',
  operationId: 'prod_tt_sasportal.installer.validate',
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
    body: { content: { 'application/json': { schema: SasPortalValidateInstallerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalValidateInstallerResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1PoliciesGetRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/policies:get',
  tags: ['policies'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'prod_tt_sasportal.policies.get',
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
    body: { content: { 'application/json': { schema: SasPortalGetPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalPolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1PoliciesSetRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/policies:set',
  tags: ['policies'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy.',
  operationId: 'prod_tt_sasportal.policies.set',
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
    body: { content: { 'application/json': { schema: SasPortalSetPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalPolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1PoliciesTestRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/policies:test',
  tags: ['policies'],
  description: 'Returns permissions that a caller has on the specified resource.',
  operationId: 'prod_tt_sasportal.policies.test',
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
    body: { content: { 'application/json': { schema: SasPortalTestPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalTestPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const getV1alpha1NameRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{name}',
  tags: ['nodes'],
  description: 'Returns a requested node.',
  operationId: 'prod_tt_sasportal.nodes.nodes.get',
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
            description: 'Required. The name of the node.',
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
      content: { 'application/json': { schema: SasPortalNodeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const deleteV1alpha1NameRoute = createRoute({
  method: 'delete',
  path: '/v1alpha1/{name}',
  tags: ['nodes'],
  description: 'Deletes a node.',
  operationId: 'prod_tt_sasportal.nodes.nodes.delete',
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
            description: 'Required. The name of the node.',
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
      content: { 'application/json': { schema: SasPortalEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const patchV1alpha1NameRoute = createRoute({
  method: 'patch',
  path: '/v1alpha1/{name}',
  tags: ['nodes'],
  description: 'Updates an existing node.',
  operationId: 'prod_tt_sasportal.nodes.nodes.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Output only. Resource name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SasPortalNodeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalNodeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1NameMoveRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:move',
  tags: ['nodes'],
  description: 'Moves a node under another node or customer.',
  operationId: 'prod_tt_sasportal.nodes.nodes.move',
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
            description: 'Required. The name of the node to move.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SasPortalMoveNodeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1NameSignDeviceRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{name}:signDevice',
  tags: ['nodes'],
  description: 'Signs a device.',
  operationId: 'prod_tt_sasportal.nodes.devices.signDevice',
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
            description: 'Output only. The resource path name.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SasPortalSignDeviceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const patchV1alpha1NameUpdateSignedRoute = createRoute({
  method: 'patch',
  path: '/v1alpha1/{name}:updateSigned',
  tags: ['nodes'],
  description: 'Updates a signed device.',
  operationId: 'prod_tt_sasportal.nodes.devices.updateSigned',
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
            description: 'Required. The name of the device to update.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SasPortalUpdateSignedDeviceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalDeviceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const getV1alpha1ParentDeploymentsRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/deployments',
  tags: ['nodes'],
  description: 'Lists deployments.',
  operationId: 'prod_tt_sasportal.nodes.nodes.deployments.list',
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
              'The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no deployments are filtered.',
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
            description: 'The maximum number of deployments to return in the response.',
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
            description:
              'A pagination token returned from a previous call to ListDeployments that indicates where this listing should continue from.',
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
              'Required. The parent resource name, for example, "nodes/1", customer/1/nodes/2.',
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
      content: { 'application/json': { schema: SasPortalListDeploymentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1ParentDeploymentsRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/deployments',
  tags: ['nodes'],
  description: 'Creates a new deployment.',
  operationId: 'prod_tt_sasportal.nodes.nodes.deployments.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource name where the deployment is to be created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SasPortalDeploymentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalDeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const getV1alpha1ParentDevicesRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/devices',
  tags: ['nodes'],
  description: 'Lists devices under a node or customer.',
  operationId: 'prod_tt_sasportal.nodes.nodes.devices.list',
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
              'The filter expression. The filter should have one of the following formats: "sn=123454" or "display_name=MyDevice". sn corresponds to serial number of the device. The filter is case insensitive.',
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
              'The maximum number of devices to return in the response. If empty or zero, all devices will be listed. Must be in the range [0, 1000].',
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
            description:
              'A pagination token returned from a previous call to ListDevices that indicates where this listing should continue from.',
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
            description: 'Required. The name of the parent resource.',
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
      content: { 'application/json': { schema: SasPortalListDevicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1ParentDevicesRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/devices',
  tags: ['nodes'],
  description: 'Creates a device under a node or customer.',
  operationId: 'prod_tt_sasportal.nodes.nodes.devices.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the parent resource.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SasPortalDeviceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalDeviceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1ParentDevicesCreateSignedRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/devices:createSigned',
  tags: ['nodes'],
  description: 'Creates a signed device under a node or customer.',
  operationId: 'prod_tt_sasportal.nodes.nodes.devices.createSigned',
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
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the parent resource.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SasPortalCreateSignedDeviceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalDeviceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const getV1alpha1ParentNodesRoute = createRoute({
  method: 'get',
  path: '/v1alpha1/{parent}/nodes',
  tags: ['nodes'],
  description: 'Lists nodes.',
  operationId: 'prod_tt_sasportal.nodes.nodes.nodes.list',
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
              'The filter expression. The filter should have the following format: "DIRECT_CHILDREN" or format: "direct_children". The filter is case insensitive. If empty, then no nodes are filtered.',
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
            description: 'The maximum number of nodes to return in the response.',
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
            description:
              'A pagination token returned from a previous call to ListNodes that indicates where this listing should continue from.',
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
            description: 'Required. The parent resource name, for example, "nodes/1".',
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
      content: { 'application/json': { schema: SasPortalListNodesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})

export const postV1alpha1ParentNodesRoute = createRoute({
  method: 'post',
  path: '/v1alpha1/{parent}/nodes',
  tags: ['nodes'],
  description: 'Creates a new node.',
  operationId: 'prod_tt_sasportal.nodes.nodes.nodes.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource name where the node is to be created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SasPortalNodeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SasPortalNodeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sasportal'],
      Oauth2c: ['https://www.googleapis.com/auth/sasportal'],
    },
  ],
})
