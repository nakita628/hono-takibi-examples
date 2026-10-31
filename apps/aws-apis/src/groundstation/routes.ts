import { createRoute, z } from '@hono/zod-openapi'

const UuidSchema = z
  .string()
  .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
  .min(1)
  .max(128)
  .openapi('Uuid')

const ContactIdResponseSchema = z
  .object({
    contactId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a contact.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ContactIdResponse')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const DependencyExceptionSchema = z.any().openapi('DependencyException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConfigArnSchema = z.string().openapi('ConfigArn')

const StringSchema = z.string().openapi('String')

const ConfigCapabilityTypeSchema = z
  .enum([
    'antenna-downlink',
    'antenna-downlink-demod-decode',
    'antenna-uplink',
    'dataflow-endpoint',
    'tracking',
    'uplink-echo',
    's3-recording',
  ])
  .openapi('ConfigCapabilityType')

const ConfigIdResponseSchema = z
  .object({
    configArn: ConfigArnSchema.and(
      z.any().openapi({ description: 'ARN of a <code>Config</code>.' }),
    ).exactOptional(),
    configId: StringSchema.and(
      z.any().openapi({ description: 'UUID of a <code>Config</code>.' }),
    ).exactOptional(),
    configType: ConfigCapabilityTypeSchema.and(
      z.any().openapi({ description: 'Type of a <code>Config</code>.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ConfigIdResponse')

const BandwidthUnitsSchema = z.enum(['GHz', 'MHz', 'kHz']).openapi('BandwidthUnits')

const DoubleSchema = z.float64().openapi('Double')

const FrequencyBandwidthSchema = z
  .object({
    units: BandwidthUnitsSchema.and(z.any().openapi({ description: 'Frequency bandwidth units.' })),
    value: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Frequency bandwidth value. AWS Ground Station currently has the following bandwidth limitations:</p> <ul> <li> <p>For <code>AntennaDownlinkDemodDecodeconfig</code>, valid values are between 125 kHz to 650 MHz.</p> </li> <li> <p>For <code>AntennaDownlinkconfig</code>, valid values are between 10 kHz to 54 MHz.</p> </li> <li> <p>For <code>AntennaUplinkConfig</code>, valid values are between 10 kHz to 54 MHz.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['units', 'value'],
    description: 'Object that describes the frequency bandwidth. ',
  })
  .openapi('FrequencyBandwidth')

const FrequencyUnitsSchema = z.enum(['GHz', 'MHz', 'kHz']).openapi('FrequencyUnits')

const FrequencySchema = z
  .object({
    units: FrequencyUnitsSchema.and(z.any().openapi({ description: 'Frequency units.' })),
    value: DoubleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Frequency value. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.',
        }),
    ),
  })
  .openapi({ required: ['units', 'value'], description: 'Object that describes the frequency.' })
  .openapi('Frequency')

const PolarizationSchema = z.enum(['LEFT_HAND', 'NONE', 'RIGHT_HAND']).openapi('Polarization')

const SpectrumConfigSchema = z
  .object({
    bandwidth: FrequencyBandwidthSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Bandwidth of a spectral <code>Config</code>. AWS Ground Station currently has the following bandwidth limitations:</p> <ul> <li> <p>For <code>AntennaDownlinkDemodDecodeconfig</code>, valid values are between 125 kHz to 650 MHz.</p> </li> <li> <p>For <code>AntennaDownlinkconfig</code> valid values are between 10 kHz to 54 MHz.</p> </li> <li> <p>For <code>AntennaUplinkConfig</code>, valid values are between 10 kHz to 54 MHz.</p> </li> </ul>',
        }),
    ),
    centerFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'Center frequency of a spectral <code>Config</code>. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.',
        }),
    ),
    polarization: PolarizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Polarization of a spectral <code>Config</code>. Capturing both <code>"RIGHT_HAND"</code> and <code>"LEFT_HAND"</code> polarization requires two separate configs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['bandwidth', 'centerFrequency'],
    description: 'Object that describes a spectral <code>Config</code>.',
  })
  .openapi('SpectrumConfig')

const AntennaDownlinkConfigSchema = z
  .object({
    spectrumConfig: SpectrumConfigSchema.and(
      z.any().openapi({ description: 'Object that describes a spectral <code>Config</code>.' }),
    ),
  })
  .openapi({
    required: ['spectrumConfig'],
    description:
      'Information about how AWS Ground Station should configure an antenna for downlink during a contact.',
  })
  .openapi('AntennaDownlinkConfig')

const JsonStringSchema = z
  .string()
  .regex(/^[{}\[\]:.,"0-9A-z\-_\s]{2,8192}$/)
  .min(2)
  .max(8192)
  .openapi('JsonString')

const DecodeConfigSchema = z
  .object({
    unvalidatedJSON: JsonStringSchema.and(
      z.any().openapi({ description: 'Unvalidated JSON of a decode <code>Config</code>.' }),
    ),
  })
  .openapi({
    required: ['unvalidatedJSON'],
    description: 'Information about the decode <code>Config</code>.',
  })
  .openapi('DecodeConfig')

const DemodulationConfigSchema = z
  .object({
    unvalidatedJSON: JsonStringSchema.and(
      z.any().openapi({ description: 'Unvalidated JSON of a demodulation <code>Config</code>.' }),
    ),
  })
  .openapi({
    required: ['unvalidatedJSON'],
    description: 'Information about the demodulation <code>Config</code>.',
  })
  .openapi('DemodulationConfig')

const AntennaDownlinkDemodDecodeConfigSchema = z
  .object({
    decodeConfig: DecodeConfigSchema.and(
      z.any().openapi({ description: 'Information about the decode <code>Config</code>.' }),
    ),
    demodulationConfig: DemodulationConfigSchema.and(
      z.any().openapi({ description: 'Information about the demodulation <code>Config</code>.' }),
    ),
    spectrumConfig: SpectrumConfigSchema.and(
      z.any().openapi({ description: 'Information about the spectral <code>Config</code>.' }),
    ),
  })
  .openapi({
    required: ['decodeConfig', 'demodulationConfig', 'spectrumConfig'],
    description:
      'Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.',
  })
  .openapi('AntennaDownlinkDemodDecodeConfig')

const UplinkSpectrumConfigSchema = z
  .object({
    centerFrequency: FrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'Center frequency of an uplink spectral <code>Config</code>. Valid values are between 2025 to 2120 MHz.',
        }),
    ),
    polarization: PolarizationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Polarization of an uplink spectral <code>Config</code>. Capturing both <code>"RIGHT_HAND"</code> and <code>"LEFT_HAND"</code> polarization requires two separate configs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['centerFrequency'],
    description: 'Information about the uplink spectral <code>Config</code>.',
  })
  .openapi('UplinkSpectrumConfig')

const EirpUnitsSchema = z.literal('dBW').openapi('EirpUnits')

const EirpSchema = z
  .object({
    units: EirpUnitsSchema.and(z.any().openapi({ description: 'Units of an EIRP.' })),
    value: DoubleSchema.and(
      z
        .any()
        .openapi({ description: 'Value of an EIRP. Valid values are between 20.0 to 50.0 dBW.' }),
    ),
  })
  .openapi({ required: ['units', 'value'], description: 'Object that represents EIRP.' })
  .openapi('Eirp')

const BooleanSchema = z.boolean().openapi('Boolean')

const AntennaUplinkConfigSchema = z
  .object({
    spectrumConfig: UplinkSpectrumConfigSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the uplink spectral <code>Config</code>.' }),
    ),
    targetEirp: EirpSchema.and(z.any().openapi({ description: 'EIRP of the target.' })),
    transmitDisabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether or not uplink transmit is disabled.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['spectrumConfig', 'targetEirp'],
    description: 'Information about the uplink <code>Config</code> of an antenna.',
  })
  .openapi('AntennaUplinkConfig')

const DataflowEndpointConfigSchema = z
  .object({
    dataflowEndpointName: StringSchema.and(
      z.any().openapi({ description: 'Name of a dataflow endpoint.' }),
    ),
    dataflowEndpointRegion: StringSchema.and(
      z.any().openapi({ description: 'Region of a dataflow endpoint.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['dataflowEndpointName'],
    description: 'Information about the dataflow endpoint <code>Config</code>.',
  })
  .openapi('DataflowEndpointConfig')

const BucketArnSchema = z.string().openapi('BucketArn')

const S3KeyPrefixSchema = z
  .string()
  .regex(
    /^([a-zA-Z0-9_\-=\/]|\{satellite_id\}|\{config\-name}|\{s3\-config-id}|\{year\}|\{month\}|\{day\}){1,900}$/,
  )
  .min(1)
  .max(900)
  .openapi('S3KeyPrefix')

const RoleArnSchema = z.string().openapi('RoleArn')

const S3RecordingConfigSchema = z
  .object({
    bucketArn: BucketArnSchema.and(
      z.any().openapi({ description: 'ARN of the bucket to record to.' }),
    ),
    prefix: S3KeyPrefixSchema.and(
      z.any().openapi({ description: 'S3 Key prefix to prefice data files.' }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'ARN of the role Ground Station assumes to write data to the bucket.',
        }),
    ),
  })
  .openapi({
    required: ['bucketArn', 'roleArn'],
    description: 'Information about an S3 recording <code>Config</code>.',
  })
  .openapi('S3RecordingConfig')

const CriticalitySchema = z.enum(['PREFERRED', 'REMOVED', 'REQUIRED']).openapi('Criticality')

const TrackingConfigSchema = z
  .object({
    autotrack: CriticalitySchema.and(
      z.any().openapi({ description: 'Current setting for autotrack.' }),
    ),
  })
  .openapi({
    required: ['autotrack'],
    description:
      'Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile.',
  })
  .openapi('TrackingConfig')

const UplinkEchoConfigSchema = z
  .object({
    antennaUplinkConfigArn: ConfigArnSchema.and(
      z.any().openapi({ description: 'ARN of an uplink <code>Config</code>.' }),
    ),
    enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether or not an uplink <code>Config</code> is enabled.' }),
    ),
  })
  .openapi({
    required: ['antennaUplinkConfigArn', 'enabled'],
    description:
      '<p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>',
  })
  .openapi('UplinkEchoConfig')

const ResourceLimitExceededExceptionSchema = z.any().openapi('ResourceLimitExceededException')

const DataflowEndpointGroupIdResponseSchema = z
  .object({
    dataflowEndpointGroupId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a dataflow endpoint group.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DataflowEndpointGroupIdResponse')

const AgentStatusSchema = z.enum(['SUCCESS', 'FAILED', 'ACTIVE', 'INACTIVE']).openapi('AgentStatus')

const AuditResultsSchema = z.enum(['HEALTHY', 'UNHEALTHY']).openapi('AuditResults')

const IntegerSchema = z.int().openapi('Integer')

const SocketAddressSchema = z
  .object({
    name: StringSchema.and(z.any().openapi({ description: 'Name of a socket address.' })),
    port: IntegerSchema.and(z.any().openapi({ description: 'Port of a socket address.' })),
  })
  .openapi({ required: ['name', 'port'], description: 'Information about the socket address.' })
  .openapi('SocketAddress')

const ConnectionDetailsSchema = z
  .object({
    mtu: IntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.',
        }),
    ).exactOptional(),
    socketAddress: SocketAddressSchema.and(z.any().openapi({ description: 'A socket address.' })),
  })
  .openapi({
    required: ['socketAddress'],
    description: 'Egress address of AgentEndpoint with an optional mtu.',
  })
  .openapi('ConnectionDetails')

const RangedConnectionDetailsMtuIntegerSchema = z
  .int()
  .min(1400)
  .max(1500)
  .openapi('RangedConnectionDetailsMtuInteger')

const IpV4AddressSchema = z
  .string()
  .regex(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)
  .min(7)
  .max(16)
  .openapi('IpV4Address')

const IntegerRangeSchema = z
  .object({
    maximum: IntegerSchema.and(z.any().openapi({ description: 'A maximum value.' })),
    minimum: IntegerSchema.and(z.any().openapi({ description: 'A minimum value.' })),
  })
  .openapi({
    required: ['maximum', 'minimum'],
    description: 'An integer range that has a minimum and maximum value.',
  })
  .openapi('IntegerRange')

const RangedSocketAddressSchema = z
  .object({
    name: IpV4AddressSchema.and(z.any().openapi({ description: 'IPv4 socket address.' })),
    portRange: IntegerRangeSchema.and(
      z.any().openapi({ description: 'Port range of a socket address.' }),
    ),
  })
  .openapi({ required: ['name', 'portRange'], description: 'A socket address with a port range.' })
  .openapi('RangedSocketAddress')

const RangedConnectionDetailsSchema = z
  .object({
    mtu: RangedConnectionDetailsMtuIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.',
        }),
    ).exactOptional(),
    socketAddress: RangedSocketAddressSchema.and(
      z.any().openapi({ description: 'A ranged socket address.' }),
    ),
  })
  .openapi({
    required: ['socketAddress'],
    description: 'Ingress address of AgentEndpoint with a port range and an optional mtu.',
  })
  .openapi('RangedConnectionDetails')

const SafeNameSchema = z
  .string()
  .regex(/^[ a-zA-Z0-9_:-]{1,256}$/)
  .min(1)
  .max(256)
  .openapi('SafeName')

const AwsGroundStationAgentEndpointSchema = z
  .object({
    agentStatus: AgentStatusSchema.and(
      z.any().openapi({ description: 'The status of AgentEndpoint.' }),
    ).exactOptional(),
    auditResults: AuditResultsSchema.and(
      z.any().openapi({ description: 'The results of the audit.' }),
    ).exactOptional(),
    egressAddress: ConnectionDetailsSchema.and(
      z.any().openapi({ description: 'The egress address of AgentEndpoint.' }),
    ),
    ingressAddress: RangedConnectionDetailsSchema.and(
      z.any().openapi({ description: 'The ingress address of AgentEndpoint.' }),
    ),
    name: SafeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name string associated with AgentEndpoint. Used as a human-readable identifier for AgentEndpoint.',
        }),
    ),
  })
  .openapi({
    required: ['egressAddress', 'ingressAddress', 'name'],
    description: 'Information about AwsGroundStationAgentEndpoint.',
  })
  .openapi('AwsGroundStationAgentEndpoint')

const DataflowEndpointMtuIntegerSchema = z
  .int()
  .min(1400)
  .max(1500)
  .openapi('DataflowEndpointMtuInteger')

const EndpointStatusSchema = z
  .enum(['created', 'creating', 'deleted', 'deleting', 'failed'])
  .openapi('EndpointStatus')

const DataflowEndpointSchema = z
  .object({
    address: SocketAddressSchema.and(
      z.any().openapi({ description: 'Socket address of a dataflow endpoint.' }),
    ).exactOptional(),
    mtu: DataflowEndpointMtuIntegerSchema.and(
      z
        .any()
        .openapi({
          description: 'Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.',
        }),
    ).exactOptional(),
    name: SafeNameSchema.and(
      z.any().openapi({ description: 'Name of a dataflow endpoint.' }),
    ).exactOptional(),
    status: EndpointStatusSchema.and(
      z.any().openapi({ description: 'Status of a dataflow endpoint.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a dataflow endpoint.', required: [] })
  .openapi('DataflowEndpoint')

const CapabilityHealthReasonSchema = z
  .enum([
    'NO_REGISTERED_AGENT',
    'INVALID_IP_OWNERSHIP',
    'NOT_AUTHORIZED_TO_CREATE_SLR',
    'UNVERIFIED_IP_OWNERSHIP',
    'INITIALIZING_DATAPLANE',
    'DATAPLANE_FAILURE',
    'HEALTHY',
  ])
  .openapi('CapabilityHealthReason')

const CapabilityHealthReasonListSchema = z
  .array(CapabilityHealthReasonSchema)
  .min(0)
  .max(500)
  .openapi('CapabilityHealthReasonList')

const CapabilityHealthSchema = z.enum(['UNHEALTHY', 'HEALTHY']).openapi('CapabilityHealth')

const SecurityGroupIdListSchema = z.array(StringSchema).openapi('SecurityGroupIdList')

const SubnetListSchema = z.array(StringSchema).openapi('SubnetList')

const SecurityDetailsSchema = z
  .object({
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description: 'ARN to a role needed for connecting streams to your instances. ',
        }),
    ),
    securityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'The security groups to attach to the elastic network interfaces.',
        }),
    ),
    subnetIds: SubnetListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of subnets where AWS Ground Station places elastic network interfaces to send streams to your instances.',
        }),
    ),
  })
  .openapi({
    required: ['roleArn', 'securityGroupIds', 'subnetIds'],
    description: 'Information about endpoints.',
  })
  .openapi('SecurityDetails')

const EndpointDetailsSchema = z
  .object({
    awsGroundStationAgentEndpoint: AwsGroundStationAgentEndpointSchema.and(
      z.any().openapi({ description: 'An agent endpoint.' }),
    ).exactOptional(),
    endpoint: DataflowEndpointSchema.and(
      z.any().openapi({ description: 'A dataflow endpoint.' }),
    ).exactOptional(),
    healthReasons: CapabilityHealthReasonListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Health reasons for a dataflow endpoint. This field is ignored when calling <code>CreateDataflowEndpointGroup</code>.',
        }),
    ).exactOptional(),
    healthStatus: CapabilityHealthSchema.and(
      z
        .any()
        .openapi({
          description:
            'A dataflow endpoint health status. This field is ignored when calling <code>CreateDataflowEndpointGroup</code>.',
        }),
    ).exactOptional(),
    securityDetails: SecurityDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Endpoint security details including a list of subnets, a list of security groups and a role to connect streams to instances.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the endpoint details.', required: [] })
  .openapi('EndpointDetails')

const EphemerisIdResponseSchema = z
  .object({
    ephemerisId: UuidSchema.and(
      z.any().openapi({ description: 'The AWS Ground Station ephemeris ID.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EphemerisIdResponse')

const UnboundedStringSchema = z
  .string()
  .regex(/^[\s\S]+$/)
  .min(1)
  .openapi('UnboundedString')

const S3BucketNameSchema = z
  .string()
  .regex(/^[a-z0-9.-]{3,63}$/)
  .min(3)
  .max(63)
  .openapi('S3BucketName')

const S3ObjectKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9!*'\)\(.\/_-]{1,1024}$/)
  .min(1)
  .max(1024)
  .openapi('S3ObjectKey')

const S3VersionIdSchema = z
  .string()
  .regex(/^[\s\S]{1,1024}$/)
  .min(1)
  .max(1024)
  .openapi('S3VersionId')

const S3ObjectSchema = z
  .object({
    bucket: S3BucketNameSchema.and(
      z.any().openapi({ description: 'An Amazon S3 Bucket name.' }),
    ).exactOptional(),
    key: S3ObjectKeySchema.and(
      z.any().openapi({ description: 'An Amazon S3 key for the ephemeris.' }),
    ).exactOptional(),
    version: S3VersionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'For versioned S3 objects, the version to use for the ephemeris.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Object stored in S3 containing ephemeris data.', required: [] })
  .openapi('S3Object')

const OEMEphemerisSchema = z
  .object({
    oemData: UnboundedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data for an OEM ephemeris, supplied directly in the request rather than through an S3 object.',
        }),
    ).exactOptional(),
    s3Object: S3ObjectSchema.and(
      z.any().openapi({ description: 'Identifies the S3 object to be used as the ephemeris.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Ephemeris data in Orbit Ephemeris Message (OEM) format.', required: [] })
  .openapi('OEMEphemeris')

const TleLineOneSchema = z
  .string()
  .regex(
    /^1 [ 0-9]{5}[A-Z] [ 0-9]{5}[ A-Z]{3} [ 0-9]{5}[.][ 0-9]{8} (?:(?:[ 0+-][.][ 0-9]{8})|(?: [ +-][.][ 0-9]{7})) [ +-][ 0-9]{5}[+-][ 0-9] [ +-][ 0-9]{5}[+-][ 0-9] [ 0-9] [ 0-9]{4}[ 0-9]$/,
  )
  .length(69)
  .openapi('TleLineOne')

const TleLineTwoSchema = z
  .string()
  .regex(
    /^2 [ 0-9]{5} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{7} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{3}[.][ 0-9]{4} [ 0-9]{2}[.][ 0-9]{13}[ 0-9]$/,
  )
  .length(69)
  .openapi('TleLineTwo')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const TimeRangeSchema = z
  .object({
    endTime: TimestampSchema.and(
      z.any().openapi({ description: 'Time in UTC at which the time range ends.' }),
    ),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'Time in UTC at which the time range starts.' }),
    ),
  })
  .openapi({
    required: ['endTime', 'startTime'],
    description: 'A time range with a start and end time.',
  })
  .openapi('TimeRange')

const TLEDataSchema = z
  .object({
    tleLine1: TleLineOneSchema.and(
      z.any().openapi({ description: 'First line of two-line element set (TLE) data.' }),
    ),
    tleLine2: TleLineTwoSchema.and(
      z.any().openapi({ description: 'Second line of two-line element set (TLE) data.' }),
    ),
    validTimeRange: TimeRangeSchema.and(
      z
        .any()
        .openapi({
          description: 'The valid time range for the TLE. Gaps or overlap are not permitted.',
        }),
    ),
  })
  .openapi({
    required: ['tleLine1', 'tleLine2', 'validTimeRange'],
    description: 'Two-line element set (TLE) data.',
  })
  .openapi('TLEData')

const TLEDataListSchema = z.array(TLEDataSchema).min(1).max(500).openapi('TLEDataList')

const TLEEphemerisSchema = z
  .object({
    s3Object: S3ObjectSchema.and(
      z.any().openapi({ description: 'Identifies the S3 object to be used as the ephemeris.' }),
    ).exactOptional(),
    tleData: TLEDataListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data for a TLE ephemeris, supplied directly in the request rather than through an S3 object.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Two-line element set (TLE) ephemeris.', required: [] })
  .openapi('TLEEphemeris')

const MissionProfileIdResponseSchema = z
  .object({
    missionProfileId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a mission profile.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('MissionProfileIdResponse')

const DataflowEdgeSchema = z.array(ConfigArnSchema).length(2).openapi('DataflowEdge')

const KeyAliasArnSchema = z
  .string()
  .regex(
    /^arn:aws[a-zA-Z-]{0,16}:kms:[a-z]{2}(-[a-z]{1,16}){1,3}-\d{1}:\d{12}:((alias\/[a-zA-Z0-9:\/_-]{1,256}))$/,
  )
  .min(1)
  .max(512)
  .openapi('KeyAliasArn')

const KeyArnSchema = z.string().openapi('KeyArn')

const ContactStatusSchema = z
  .enum([
    'AVAILABLE',
    'AWS_CANCELLED',
    'AWS_FAILED',
    'CANCELLED',
    'CANCELLING',
    'COMPLETED',
    'FAILED',
    'FAILED_TO_SCHEDULE',
    'PASS',
    'POSTPASS',
    'PREPASS',
    'SCHEDULED',
    'SCHEDULING',
  ])
  .openapi('ContactStatus')

const AntennaDemodDecodeDetailsSchema = z
  .object({
    outputNode: StringSchema.and(
      z
        .any()
        .openapi({ description: 'Name of an antenna demod decode output node used in a contact.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details about an antenna demod decode <code>Config</code> used in a contact.',
    required: [],
  })
  .openapi('AntennaDemodDecodeDetails')

const S3RecordingDetailsSchema = z
  .object({
    bucketArn: BucketArnSchema.and(
      z.any().openapi({ description: 'ARN of the bucket used.' }),
    ).exactOptional(),
    keyTemplate: StringSchema.and(
      z.any().openapi({ description: 'Key template used for the S3 Recording Configuration' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details about an S3 recording <code>Config</code> used in a contact.',
    required: [],
  })
  .openapi('S3RecordingDetails')

const ConfigDetailsSchema = z
  .object({
    antennaDemodDecodeDetails: AntennaDemodDecodeDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Details for antenna demod decode <code>Config</code> in a contact.',
        }),
    ).exactOptional(),
    endpointDetails: EndpointDetailsSchema.exactOptional(),
    s3RecordingDetails: S3RecordingDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'Details for an S3 recording <code>Config</code> in a contact.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Details for certain <code>Config</code> object types in a contact.',
    required: [],
  })
  .openapi('ConfigDetails')

const DestinationSchema = z
  .object({
    configDetails: ConfigDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional details for a <code>Config</code>, if type is dataflow endpoint or antenna demod decode.',
        }),
    ).exactOptional(),
    configId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a <code>Config</code>.' }),
    ).exactOptional(),
    configType: ConfigCapabilityTypeSchema.and(
      z.any().openapi({ description: 'Type of a <code>Config</code>.' }),
    ).exactOptional(),
    dataflowDestinationRegion: StringSchema.and(
      z.any().openapi({ description: 'Region of a dataflow destination.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Dataflow details for the destination side.', required: [] })
  .openapi('Destination')

const SourceSchema = z
  .object({
    configDetails: ConfigDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional details for a <code>Config</code>, if type is <code>dataflow-endpoint</code> or <code>antenna-downlink-demod-decode</code> ',
        }),
    ).exactOptional(),
    configId: StringSchema.and(
      z.any().openapi({ description: 'UUID of a <code>Config</code>.' }),
    ).exactOptional(),
    configType: ConfigCapabilityTypeSchema.and(
      z.any().openapi({ description: 'Type of a <code>Config</code>.' }),
    ).exactOptional(),
    dataflowSourceRegion: StringSchema.and(
      z.any().openapi({ description: 'Region of a dataflow source.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Dataflow details for the source side.', required: [] })
  .openapi('Source')

const DataflowDetailSchema = z
  .object({
    destination: DestinationSchema.exactOptional(),
    errorMessage: StringSchema.and(
      z.any().openapi({ description: 'Error message for a dataflow.' }),
    ).exactOptional(),
    source: SourceSchema.exactOptional(),
  })
  .openapi({ description: 'Information about a dataflow edge used in a contact.', required: [] })
  .openapi('DataflowDetail')

const DataflowListSchema = z.array(DataflowDetailSchema).openapi('DataflowList')

const AngleUnitsSchema = z.enum(['DEGREE_ANGLE', 'RADIAN']).openapi('AngleUnits')

const ElevationSchema = z
  .object({
    unit: AngleUnitsSchema.and(z.any().openapi({ description: 'Elevation angle units.' })),
    value: DoubleSchema.and(z.any().openapi({ description: 'Elevation angle value.' })),
  })
  .openapi({
    required: ['unit', 'value'],
    description: 'Elevation angle of the satellite in the sky during a contact.',
  })
  .openapi('Elevation')

const MissionProfileArnSchema = z.string().openapi('MissionProfileArn')

const SatelliteArnSchema = z.string().openapi('SatelliteArn')

const TagsMapSchema = z.record(z.string(), StringSchema).openapi('TagsMap')

const DescribeContactResponseSchema = z
  .object({
    contactId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a contact.' }),
    ).exactOptional(),
    contactStatus: ContactStatusSchema.and(
      z.any().openapi({ description: 'Status of a contact.' }),
    ).exactOptional(),
    dataflowList: DataflowListSchema.and(
      z
        .any()
        .openapi({
          description: 'List describing source and destination details for each dataflow edge.',
        }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z.any().openapi({ description: 'End time of a contact in UTC.' }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z.any().openapi({ description: 'Error message for a contact.' }),
    ).exactOptional(),
    groundStation: StringSchema.and(
      z.any().openapi({ description: 'Ground station for a contact.' }),
    ).exactOptional(),
    maximumElevation: ElevationSchema.and(
      z.any().openapi({ description: 'Maximum elevation angle of a contact.' }),
    ).exactOptional(),
    missionProfileArn: MissionProfileArnSchema.and(
      z.any().openapi({ description: 'ARN of a mission profile.' }),
    ).exactOptional(),
    postPassEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.',
        }),
    ).exactOptional(),
    prePassStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.',
        }),
    ).exactOptional(),
    region: StringSchema.and(
      z.any().openapi({ description: 'Region of a contact.' }),
    ).exactOptional(),
    satelliteArn: SatelliteArnSchema.and(
      z.any().openapi({ description: 'ARN of a satellite.' }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'Start time of a contact in UTC.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to a contact.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeContactResponse')

const EphemerisInvalidReasonSchema = z
  .enum([
    'METADATA_INVALID',
    'TIME_RANGE_INVALID',
    'TRAJECTORY_INVALID',
    'KMS_KEY_INVALID',
    'VALIDATION_ERROR',
  ])
  .openapi('EphemerisInvalidReason')

const EphemerisPrioritySchema = z.int().min(0).max(99999).openapi('EphemerisPriority')

const EphemerisStatusSchema = z
  .enum(['VALIDATING', 'INVALID', 'ERROR', 'ENABLED', 'DISABLED', 'EXPIRED'])
  .openapi('EphemerisStatus')

const EphemerisDescriptionSchema = z
  .object({
    ephemerisData: UnboundedStringSchema.and(
      z.any().openapi({ description: 'Supplied ephemeris data.' }),
    ).exactOptional(),
    sourceS3Object: S3ObjectSchema.and(
      z.any().openapi({ description: 'Source S3 object used for the ephemeris.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Description of ephemeris.', required: [] })
  .openapi('EphemerisDescription')

const EphemerisTypeDescriptionSchema = z
  .object({
    oem: EphemerisDescriptionSchema.exactOptional(),
    tle: EphemerisDescriptionSchema.exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('EphemerisTypeDescription')

const DescribeEphemerisResponseSchema = z
  .object({
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the ephemeris was uploaded in UTC.' }),
    ).exactOptional(),
    enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether or not the ephemeris is enabled.' }),
    ).exactOptional(),
    ephemerisId: UuidSchema.and(
      z.any().openapi({ description: 'The AWS Ground Station ephemeris ID.' }),
    ).exactOptional(),
    invalidReason: EphemerisInvalidReasonSchema.and(
      z
        .any()
        .openapi({
          description:
            'Reason that an ephemeris failed validation. Only provided for ephemerides with <code>INVALID</code> status.',
        }),
    ).exactOptional(),
    name: SafeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.',
        }),
    ).exactOptional(),
    priority: EphemerisPrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>',
        }),
    ).exactOptional(),
    satelliteId: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'The AWS Ground Station satellite ID associated with ephemeris.' }),
    ).exactOptional(),
    status: EphemerisStatusSchema.and(
      z.any().openapi({ description: 'The status of the ephemeris.' }),
    ).exactOptional(),
    suppliedData: EphemerisTypeDescriptionSchema.and(
      z.any().openapi({ description: 'Supplied ephemeris data.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to an ephemeris.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeEphemerisResponse')

const GetAgentConfigurationResponseSchema = z
  .object({
    agentId: UuidSchema.and(z.any().openapi({ description: 'UUID of agent.' })).exactOptional(),
    taskingDocument: StringSchema.and(
      z.any().openapi({ description: 'Tasking document for agent.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAgentConfigurationResponse')

const ConfigTypeDataSchema = z
  .object({
    antennaDownlinkConfig: AntennaDownlinkConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about how AWS Ground Station should configure an antenna for downlink during a contact.',
        }),
    ).exactOptional(),
    antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.',
        }),
    ).exactOptional(),
    antennaUplinkConfig: AntennaUplinkConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.',
        }),
    ).exactOptional(),
    dataflowEndpointConfig: DataflowEndpointConfigSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the dataflow endpoint <code>Config</code>.' }),
    ).exactOptional(),
    s3RecordingConfig: S3RecordingConfigSchema.and(
      z.any().openapi({ description: 'Information about an S3 recording <code>Config</code>.' }),
    ).exactOptional(),
    trackingConfig: TrackingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. ',
        }),
    ).exactOptional(),
    uplinkEchoConfig: UplinkEchoConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>',
    required: [],
  })
  .openapi('ConfigTypeData')

const GetConfigResponseSchema = z
  .object({
    configArn: ConfigArnSchema.and(
      z.any().openapi({ description: 'ARN of a <code>Config</code> ' }),
    ),
    configData: ConfigTypeDataSchema.and(
      z.any().openapi({ description: 'Data elements in a <code>Config</code>.' }),
    ),
    configId: StringSchema.and(z.any().openapi({ description: 'UUID of a <code>Config</code>.' })),
    configType: ConfigCapabilityTypeSchema.and(
      z.any().openapi({ description: 'Type of a <code>Config</code>.' }),
    ).exactOptional(),
    name: StringSchema.and(z.any().openapi({ description: 'Name of a <code>Config</code>.' })),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to a <code>Config</code>.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['configArn', 'configData', 'configId', 'name'], description: '<p/>' })
  .openapi('GetConfigResponse')

const DataflowEndpointGroupDurationInSecondsSchema = z
  .int()
  .min(120)
  .max(480)
  .openapi('DataflowEndpointGroupDurationInSeconds')

const DataflowEndpointGroupArnSchema = z.string().openapi('DataflowEndpointGroupArn')

const EndpointDetailsListSchema = z
  .array(EndpointDetailsSchema)
  .min(0)
  .max(500)
  .openapi('EndpointDetailsList')

const GetDataflowEndpointGroupResponseSchema = z
  .object({
    contactPostPassDurationSeconds: DataflowEndpointGroupDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.',
        }),
    ).exactOptional(),
    contactPrePassDurationSeconds: DataflowEndpointGroupDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.',
        }),
    ).exactOptional(),
    dataflowEndpointGroupArn: DataflowEndpointGroupArnSchema.and(
      z.any().openapi({ description: 'ARN of a dataflow endpoint group.' }),
    ).exactOptional(),
    dataflowEndpointGroupId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a dataflow endpoint group.' }),
    ).exactOptional(),
    endpointsDetails: EndpointDetailsListSchema.and(
      z.any().openapi({ description: 'Details of a dataflow endpoint.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to a dataflow endpoint group.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('GetDataflowEndpointGroupResponse')

const GetMinuteUsageResponseSchema = z
  .object({
    estimatedMinutesRemaining: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Estimated number of minutes remaining for an account, specific to the month being requested.',
        }),
    ).exactOptional(),
    isReservedMinutesCustomer: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns whether or not an account has signed up for the reserved minutes pricing plan, specific to the month being requested.',
        }),
    ).exactOptional(),
    totalReservedMinuteAllocation: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Total number of reserved minutes allocated, specific to the month being requested.',
        }),
    ).exactOptional(),
    totalScheduledMinutes: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Total scheduled minutes for an account, specific to the month being requested.',
        }),
    ).exactOptional(),
    upcomingMinutesScheduled: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Upcoming minutes scheduled for an account, specific to the month being requested.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('GetMinuteUsageResponse')

const DurationInSecondsSchema = z.int().min(0).max(21600).openapi('DurationInSeconds')

const DataflowEdgeListSchema = z
  .array(DataflowEdgeSchema)
  .min(0)
  .max(500)
  .openapi('DataflowEdgeList')

const PositiveDurationInSecondsSchema = z
  .int()
  .min(1)
  .max(21600)
  .openapi('PositiveDurationInSeconds')

const AWSRegionSchema = z
  .string()
  .regex(/^[\w-]+$/)
  .min(1)
  .max(128)
  .openapi('AWSRegion')

const KmsKeySchema = z
  .object({
    kmsAliasArn: KeyAliasArnSchema.and(
      z.any().openapi({ description: 'KMS Alias Arn.' }),
    ).exactOptional(),
    kmsKeyArn: KeyArnSchema.and(z.any().openapi({ description: 'KMS Key Arn.' })).exactOptional(),
  })
  .openapi({ description: 'AWS Key Management Service (KMS) Key.', required: [] })
  .openapi('KmsKey')

const GetMissionProfileResponseSchema = z
  .object({
    contactPostPassDurationSeconds: DurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.',
        }),
    ).exactOptional(),
    contactPrePassDurationSeconds: DurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.',
        }),
    ).exactOptional(),
    dataflowEdges: DataflowEdgeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.',
        }),
    ).exactOptional(),
    minimumViableContactDurationSeconds: PositiveDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.',
        }),
    ).exactOptional(),
    missionProfileArn: MissionProfileArnSchema.and(
      z.any().openapi({ description: 'ARN of a mission profile.' }),
    ).exactOptional(),
    missionProfileId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a mission profile.' }),
    ).exactOptional(),
    name: SafeNameSchema.and(
      z.any().openapi({ description: 'Name of a mission profile.' }),
    ).exactOptional(),
    region: AWSRegionSchema.and(
      z.any().openapi({ description: 'Region of a mission profile.' }),
    ).exactOptional(),
    streamsKmsKey: KmsKeySchema.and(
      z.any().openapi({ description: 'KMS key to use for encrypting streams.' }),
    ).exactOptional(),
    streamsKmsRole: RoleArnSchema.and(
      z.any().openapi({ description: 'Role to use for encrypting streams with KMS key.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to a mission profile.' }),
    ).exactOptional(),
    trackingConfigArn: ConfigArnSchema.and(
      z.any().openapi({ description: 'ARN of a tracking <code>Config</code>.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('GetMissionProfileResponse')

const EphemerisSourceSchema = z
  .enum(['CUSTOMER_PROVIDED', 'SPACE_TRACK'])
  .openapi('EphemerisSource')

const EphemerisMetaDataSchema = z
  .object({
    ephemerisId: UuidSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>UUID of a customer-provided ephemeris.</p> <p>This field is not populated for default ephemerides from Space Track.</p>',
        }),
    ).exactOptional(),
    epoch: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The epoch of a default, ephemeris from Space Track in UTC.</p> <p>This field is not populated for customer-provided ephemerides.</p>',
        }),
    ).exactOptional(),
    name: SafeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p> <p>A name is only returned for customer-provider ephemerides that have a name associated.</p>',
        }),
    ).exactOptional(),
    source: EphemerisSourceSchema.and(
      z
        .any()
        .openapi({
          description: 'The <code>EphemerisSource</code> that generated a given ephemeris.',
        }),
    ),
  })
  .openapi({ required: ['source'], description: 'Metadata describing a particular ephemeris.' })
  .openapi('EphemerisMetaData')

const GroundStationNameSchema = z
  .string()
  .regex(/^[ a-zA-Z0-9-._:=]{4,256}$/)
  .min(4)
  .max(500)
  .openapi('GroundStationName')

const GroundStationIdListSchema = z
  .array(GroundStationNameSchema)
  .min(0)
  .max(500)
  .openapi('GroundStationIdList')

const NoradSatelliteIDSchema = z.int().min(0).max(99999).openapi('NoradSatelliteID')

const GetSatelliteResponseSchema = z
  .object({
    currentEphemeris: EphemerisMetaDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current ephemeris being used to compute the trajectory of the satellite.',
        }),
    ).exactOptional(),
    groundStations: GroundStationIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of ground stations to which the satellite is on-boarded.',
        }),
    ).exactOptional(),
    noradSatelliteID: NoradSatelliteIDSchema.and(
      z.any().openapi({ description: 'NORAD satellite ID number.' }),
    ).exactOptional(),
    satelliteArn: SatelliteArnSchema.and(
      z.any().openapi({ description: 'ARN of a satellite.' }),
    ).exactOptional(),
    satelliteId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a satellite.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('GetSatelliteResponse')

const ConfigListItemSchema = z
  .object({
    configArn: ConfigArnSchema.and(
      z.any().openapi({ description: 'ARN of a <code>Config</code>.' }),
    ).exactOptional(),
    configId: StringSchema.and(
      z.any().openapi({ description: 'UUID of a <code>Config</code>.' }),
    ).exactOptional(),
    configType: ConfigCapabilityTypeSchema.and(
      z.any().openapi({ description: 'Type of a <code>Config</code>.' }),
    ).exactOptional(),
    name: StringSchema.and(
      z.any().openapi({ description: 'Name of a <code>Config</code>.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An item in a list of <code>Config</code> objects.', required: [] })
  .openapi('ConfigListItem')

const ConfigListSchema = z.array(ConfigListItemSchema).openapi('ConfigList')

const PaginationTokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9-\/+_.=]+$/)
  .min(3)
  .max(1000)
  .openapi('PaginationToken')

const ListConfigsResponseSchema = z
  .object({
    configList: ConfigListSchema.and(
      z.any().openapi({ description: 'List of <code>Config</code> items.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Next token returned in the response of a previous <code>ListConfigs</code> call. Used to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ListConfigsResponse')

const ContactDataSchema = z
  .object({
    contactId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a contact.' }),
    ).exactOptional(),
    contactStatus: ContactStatusSchema.and(
      z.any().openapi({ description: 'Status of a contact.' }),
    ).exactOptional(),
    endTime: TimestampSchema.and(
      z.any().openapi({ description: 'End time of a contact in UTC.' }),
    ).exactOptional(),
    errorMessage: StringSchema.and(
      z.any().openapi({ description: 'Error message of a contact.' }),
    ).exactOptional(),
    groundStation: StringSchema.and(
      z.any().openapi({ description: 'Name of a ground station.' }),
    ).exactOptional(),
    maximumElevation: ElevationSchema.and(
      z.any().openapi({ description: 'Maximum elevation angle of a contact.' }),
    ).exactOptional(),
    missionProfileArn: MissionProfileArnSchema.and(
      z.any().openapi({ description: 'ARN of a mission profile.' }),
    ).exactOptional(),
    postPassEndTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.',
        }),
    ).exactOptional(),
    prePassStartTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.',
        }),
    ).exactOptional(),
    region: StringSchema.and(
      z.any().openapi({ description: 'Region of a contact.' }),
    ).exactOptional(),
    satelliteArn: SatelliteArnSchema.and(
      z.any().openapi({ description: 'ARN of a satellite.' }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'Start time of a contact in UTC.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to a contact.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Data describing a contact.', required: [] })
  .openapi('ContactData')

const ContactListSchema = z.array(ContactDataSchema).openapi('ContactList')

const ListContactsResponseSchema = z
  .object({
    contactList: ContactListSchema.and(
      z.any().openapi({ description: 'List of contacts.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Next token returned in the response of a previous <code>ListContacts</code> call. Used to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ListContactsResponse')

const DataflowEndpointListItemSchema = z
  .object({
    dataflowEndpointGroupArn: DataflowEndpointGroupArnSchema.and(
      z.any().openapi({ description: 'ARN of a dataflow endpoint group.' }),
    ).exactOptional(),
    dataflowEndpointGroupId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a dataflow endpoint group.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Item in a list of <code>DataflowEndpoint</code> groups.', required: [] })
  .openapi('DataflowEndpointListItem')

const DataflowEndpointGroupListSchema = z
  .array(DataflowEndpointListItemSchema)
  .openapi('DataflowEndpointGroupList')

const ListDataflowEndpointGroupsResponseSchema = z
  .object({
    dataflowEndpointGroupList: DataflowEndpointGroupListSchema.and(
      z.any().openapi({ description: 'A list of dataflow endpoint groups.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Next token returned in the response of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ListDataflowEndpointGroupsResponse')

const EphemerisItemSchema = z
  .object({
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the ephemeris was uploaded in UTC.' }),
    ).exactOptional(),
    enabled: BooleanSchema.and(
      z.any().openapi({ description: 'Whether or not the ephemeris is enabled.' }),
    ).exactOptional(),
    ephemerisId: UuidSchema.and(
      z.any().openapi({ description: 'The AWS Ground Station ephemeris ID.' }),
    ).exactOptional(),
    name: SafeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.',
        }),
    ).exactOptional(),
    priority: EphemerisPrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>',
        }),
    ).exactOptional(),
    sourceS3Object: S3ObjectSchema.and(
      z.any().openapi({ description: 'Source S3 object used for the ephemeris.' }),
    ).exactOptional(),
    status: EphemerisStatusSchema.and(
      z.any().openapi({ description: 'The status of the ephemeris.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Ephemeris item.', required: [] })
  .openapi('EphemerisItem')

const EphemeridesListSchema = z
  .array(EphemerisItemSchema)
  .min(1)
  .max(500)
  .openapi('EphemeridesList')

const ListEphemeridesResponseSchema = z
  .object({
    ephemerides: EphemeridesListSchema.and(
      z.any().openapi({ description: 'List of ephemerides.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEphemeridesResponse')

const GroundStationDataSchema = z
  .object({
    groundStationId: GroundStationNameSchema.and(
      z.any().openapi({ description: 'UUID of a ground station.' }),
    ).exactOptional(),
    groundStationName: GroundStationNameSchema.and(
      z.any().openapi({ description: 'Name of a ground station.' }),
    ).exactOptional(),
    region: AWSRegionSchema.and(
      z.any().openapi({ description: 'Ground station Region.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the ground station data.', required: [] })
  .openapi('GroundStationData')

const GroundStationListSchema = z.array(GroundStationDataSchema).openapi('GroundStationList')

const ListGroundStationsResponseSchema = z
  .object({
    groundStationList: GroundStationListSchema.and(
      z.any().openapi({ description: 'List of ground stations.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Next token that can be supplied in the next call to get the next page of ground stations.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ListGroundStationsResponse')

const MissionProfileListItemSchema = z
  .object({
    missionProfileArn: MissionProfileArnSchema.and(
      z.any().openapi({ description: 'ARN of a mission profile.' }),
    ).exactOptional(),
    missionProfileId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a mission profile.' }),
    ).exactOptional(),
    name: SafeNameSchema.and(
      z.any().openapi({ description: 'Name of a mission profile.' }),
    ).exactOptional(),
    region: AWSRegionSchema.and(
      z.any().openapi({ description: 'Region of a mission profile.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Item in a list of mission profiles.', required: [] })
  .openapi('MissionProfileListItem')

const MissionProfileListSchema = z.array(MissionProfileListItemSchema).openapi('MissionProfileList')

const ListMissionProfilesResponseSchema = z
  .object({
    missionProfileList: MissionProfileListSchema.and(
      z.any().openapi({ description: 'List of mission profiles.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Next token returned in the response of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ListMissionProfilesResponse')

const SatelliteListItemSchema = z
  .object({
    currentEphemeris: EphemerisMetaDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current ephemeris being used to compute the trajectory of the satellite.',
        }),
    ).exactOptional(),
    groundStations: GroundStationIdListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of ground stations to which the satellite is on-boarded.',
        }),
    ).exactOptional(),
    noradSatelliteID: NoradSatelliteIDSchema.and(
      z.any().openapi({ description: 'NORAD satellite ID number.' }),
    ).exactOptional(),
    satelliteArn: SatelliteArnSchema.and(
      z.any().openapi({ description: 'ARN of a satellite.' }),
    ).exactOptional(),
    satelliteId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of a satellite.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Item in a list of satellites.', required: [] })
  .openapi('SatelliteListItem')

const SatelliteListSchema = z.array(SatelliteListItemSchema).openapi('SatelliteList')

const ListSatellitesResponseSchema = z
  .object({
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Next token that can be supplied in the next call to get the next page of satellites.',
        }),
    ).exactOptional(),
    satellites: SatelliteListSchema.and(
      z.any().openapi({ description: 'List of satellites.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ListSatellitesResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to a resource.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ListTagsForResourceResponse')

const RegisterAgentResponseSchema = z
  .object({
    agentId: UuidSchema.and(
      z.any().openapi({ description: 'UUID of registered agent.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterAgentResponse')

const AgentCpuCoresListSchema = z.array(IntegerSchema).min(0).max(256).openapi('AgentCpuCoresList')

const VersionStringSchema = z
  .string()
  .regex(/^(0|[1-9]\d*)(\.(0|[1-9]\d*))*$/)
  .min(1)
  .max(64)
  .openapi('VersionString')

const ComponentTypeStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]{1,64}$/)
  .openapi('ComponentTypeString')

const VersionStringListSchema = z
  .array(VersionStringSchema)
  .min(1)
  .max(20)
  .openapi('VersionStringList')

const ComponentVersionSchema = z
  .object({
    componentType: ComponentTypeStringSchema.and(
      z.any().openapi({ description: 'Component type.' }),
    ),
    versions: VersionStringListSchema.and(z.any().openapi({ description: 'List of versions.' })),
  })
  .openapi({
    required: ['componentType', 'versions'],
    description: 'Version information for agent components.',
  })
  .openapi('ComponentVersion')

const ComponentVersionListSchema = z
  .array(ComponentVersionSchema)
  .min(1)
  .max(20)
  .openapi('ComponentVersionList')

const InstanceIdSchema = z
  .string()
  .regex(/^[a-z0-9-]{10,64}$/)
  .min(10)
  .max(64)
  .openapi('InstanceId')

const InstanceTypeSchema = z
  .string()
  .regex(/^[a-z0-9.-]{1,64}$/)
  .min(1)
  .max(64)
  .openapi('InstanceType')

const CapabilityArnSchema = z.string().openapi('CapabilityArn')

const CapabilityArnListSchema = z
  .array(CapabilityArnSchema)
  .min(1)
  .max(20)
  .openapi('CapabilityArnList')

const IpAddressListSchema = z.array(IpV4AddressSchema).min(1).max(20).openapi('IpAddressList')

const TagResourceResponseSchema = z
  .object({})
  .openapi({ description: '<p/>' })
  .openapi('TagResourceResponse')

const UntagResourceResponseSchema = z
  .object({})
  .openapi({ description: '<p/>' })
  .openapi('UntagResourceResponse')

const UpdateAgentStatusResponseSchema = z
  .object({ agentId: UuidSchema.and(z.any().openapi({ description: 'UUID of updated agent.' })) })
  .openapi({ required: ['agentId'] })
  .openapi('UpdateAgentStatusResponse')

const SignatureMapSchema = z.record(z.string(), BooleanSchema).openapi('SignatureMap')

const LongSchema = z.int().openapi('Long')

const ComponentStatusDataSchema = z
  .object({
    bytesReceived: LongSchema.and(
      z.any().openapi({ description: 'Bytes received by the component.' }),
    ).exactOptional(),
    bytesSent: LongSchema.and(
      z.any().openapi({ description: 'Bytes sent by the component.' }),
    ).exactOptional(),
    capabilityArn: CapabilityArnSchema.and(
      z.any().openapi({ description: 'Capability ARN of the component.' }),
    ),
    componentType: ComponentTypeStringSchema.and(
      z.any().openapi({ description: 'The Component type.' }),
    ),
    dataflowId: UuidSchema.and(
      z.any().openapi({ description: 'Dataflow UUID associated with the component.' }),
    ),
    packetsDropped: LongSchema.and(
      z.any().openapi({ description: 'Packets dropped by component.' }),
    ).exactOptional(),
    status: AgentStatusSchema.and(z.any().openapi({ description: 'Component status.' })),
  })
  .openapi({
    required: ['capabilityArn', 'componentType', 'dataflowId', 'status'],
    description: 'Data on the status of agent components.',
  })
  .openapi('ComponentStatusData')

const AgentDetailsSchema = z
  .object({
    agentCpuCores: AgentCpuCoresListSchema.and(
      z.any().openapi({ description: 'List of CPU cores reserved for the agent.' }),
    ).exactOptional(),
    agentVersion: VersionStringSchema.and(
      z.any().openapi({ description: 'Current agent version.' }),
    ),
    componentVersions: ComponentVersionListSchema.and(
      z.any().openapi({ description: 'List of versions being used by agent components.' }),
    ),
    instanceId: InstanceIdSchema.and(
      z.any().openapi({ description: 'ID of EC2 instance agent is running on.' }),
    ),
    instanceType: InstanceTypeSchema.and(
      z.any().openapi({ description: 'Type of EC2 instance agent is running on.' }),
    ),
    reservedCpuCores: AgentCpuCoresListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<note> <p>This field should not be used. Use agentCpuCores instead.</p> </note> <p>List of CPU cores reserved for processes other than the agent running on the EC2 instance.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['agentVersion', 'componentVersions', 'instanceId', 'instanceType'],
    description: 'Detailed information about the agent.',
  })
  .openapi('AgentDetails')

const AggregateStatusSchema = z
  .object({
    signatureMap: SignatureMapSchema.and(
      z.any().openapi({ description: 'Sparse map of failure signatures.' }),
    ).exactOptional(),
    status: AgentStatusSchema.and(z.any().openapi({ description: 'Aggregate status.' })),
  })
  .openapi({ required: ['status'], description: 'Aggregate status of Agent components.' })
  .openapi('AggregateStatus')

const AnyArnSchema = z
  .string()
  .regex(/^(arn:aws:)[\s\S]{0,1024}$/)
  .min(5)
  .max(1024)
  .openapi('AnyArn')

const CancelContactRequestSchema = z
  .object({})
  .openapi({ title: 'CancelContactRequest', description: '<p/>' })
  .openapi('CancelContactRequest')

const ComponentStatusListSchema = z
  .array(ComponentStatusDataSchema)
  .min(0)
  .max(20)
  .openapi('ComponentStatusList')

const CreateConfigRequestSchema = z
  .object({
    configData: ConfigTypeDataSchema.and(
      z.any().openapi({ description: 'Parameters of a <code>Config</code>.' }),
    ),
    name: SafeNameSchema.and(z.any().openapi({ description: 'Name of a <code>Config</code>.' })),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to a <code>Config</code>.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['configData', 'name'], title: 'CreateConfigRequest', description: '<p/>' })
  .openapi('CreateConfigRequest')

const CreateDataflowEndpointGroupRequestSchema = z
  .object({
    contactPostPassDurationSeconds: DataflowEndpointGroupDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.',
        }),
    ).exactOptional(),
    contactPrePassDurationSeconds: DataflowEndpointGroupDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.',
        }),
    ).exactOptional(),
    endpointDetails: EndpointDetailsListSchema.and(
      z
        .any()
        .openapi({
          description: 'Endpoint details of each endpoint in the dataflow endpoint group.',
        }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags of a dataflow endpoint group.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['endpointDetails'],
    title: 'CreateDataflowEndpointGroupRequest',
    description: '<p/>',
  })
  .openapi('CreateDataflowEndpointGroupRequest')

const EphemerisDataSchema = z
  .object({ oem: OEMEphemerisSchema.exactOptional(), tle: TLEEphemerisSchema.exactOptional() })
  .openapi({ description: 'Ephemeris data.', required: [] })
  .openapi('EphemerisData')

const CustomerEphemerisPrioritySchema = z
  .int()
  .min(1)
  .max(99999)
  .openapi('CustomerEphemerisPriority')

const CreateEphemerisRequestSchema = z
  .object({
    enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to set the ephemeris status to <code>ENABLED</code> after validation.</p> <p>Setting this to false will set the ephemeris status to <code>DISABLED</code> after validation.</p>',
        }),
    ).exactOptional(),
    ephemeris: EphemerisDataSchema.and(
      z.any().openapi({ description: 'Ephemeris data.' }),
    ).exactOptional(),
    expirationTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'An overall expiration time for the ephemeris in UTC, after which it will become <code>EXPIRED</code>.',
        }),
    ).exactOptional(),
    kmsKeyArn: KeyArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The ARN of a KMS key used to encrypt the ephemeris in Ground Station.',
        }),
    ).exactOptional(),
    name: SafeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.',
        }),
    ),
    priority: CustomerEphemerisPrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>',
        }),
    ).exactOptional(),
    satelliteId: UuidSchema.and(
      z.any().openapi({ description: 'AWS Ground Station satellite ID for this ephemeris.' }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to an ephemeris.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['name', 'satelliteId'], title: 'CreateEphemerisRequest' })
  .openapi('CreateEphemerisRequest')

const CreateMissionProfileRequestSchema = z
  .object({
    contactPostPassDurationSeconds: DurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.',
        }),
    ).exactOptional(),
    contactPrePassDurationSeconds: DurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.',
        }),
    ).exactOptional(),
    dataflowEdges: DataflowEdgeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.',
        }),
    ),
    minimumViableContactDurationSeconds: PositiveDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.',
        }),
    ),
    name: SafeNameSchema.and(z.any().openapi({ description: 'Name of a mission profile.' })),
    streamsKmsKey: KmsKeySchema.and(
      z.any().openapi({ description: 'KMS key to use for encrypting streams.' }),
    ).exactOptional(),
    streamsKmsRole: RoleArnSchema.and(
      z.any().openapi({ description: 'Role to use for encrypting streams with KMS key.' }),
    ).exactOptional(),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to a mission profile.' }),
    ).exactOptional(),
    trackingConfigArn: ConfigArnSchema.and(
      z.any().openapi({ description: 'ARN of a tracking <code>Config</code>.' }),
    ),
  })
  .openapi({
    required: ['dataflowEdges', 'minimumViableContactDurationSeconds', 'name', 'trackingConfigArn'],
    title: 'CreateMissionProfileRequest',
    description: '<p/>',
  })
  .openapi('CreateMissionProfileRequest')

const DeleteConfigRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteConfigRequest', description: '<p/>' })
  .openapi('DeleteConfigRequest')

const DeleteDataflowEndpointGroupRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDataflowEndpointGroupRequest', description: '<p/>' })
  .openapi('DeleteDataflowEndpointGroupRequest')

const DeleteEphemerisRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEphemerisRequest' })
  .openapi('DeleteEphemerisRequest')

const DeleteMissionProfileRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteMissionProfileRequest', description: '<p/>' })
  .openapi('DeleteMissionProfileRequest')

const DescribeContactRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeContactRequest', description: '<p/>' })
  .openapi('DescribeContactRequest')

const DescribeEphemerisRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeEphemerisRequest' })
  .openapi('DescribeEphemerisRequest')

const DiscoveryDataSchema = z
  .object({
    capabilityArns: CapabilityArnListSchema.and(
      z.any().openapi({ description: 'List of capabilities to associate with agent.' }),
    ),
    privateIpAddresses: IpAddressListSchema.and(
      z.any().openapi({ description: 'List of private IP addresses to associate with agent.' }),
    ),
    publicIpAddresses: IpAddressListSchema.and(
      z.any().openapi({ description: 'List of public IP addresses to associate with agent.' }),
    ),
  })
  .openapi({
    required: ['capabilityArns', 'privateIpAddresses', 'publicIpAddresses'],
    description: 'Data for agent discovery.',
  })
  .openapi('DiscoveryData')

const EphemerisStatusListSchema = z
  .array(EphemerisStatusSchema)
  .min(0)
  .max(500)
  .openapi('EphemerisStatusList')

const GetAgentConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'GetAgentConfigurationRequest' })
  .openapi('GetAgentConfigurationRequest')

const GetConfigRequestSchema = z
  .object({})
  .openapi({ title: 'GetConfigRequest', description: '<p/>' })
  .openapi('GetConfigRequest')

const GetDataflowEndpointGroupRequestSchema = z
  .object({})
  .openapi({ title: 'GetDataflowEndpointGroupRequest', description: '<p/>' })
  .openapi('GetDataflowEndpointGroupRequest')

const MonthSchema = z.int().min(1).max(12).openapi('Month')

const YearSchema = z.int().min(2018).max(3000).openapi('Year')

const GetMinuteUsageRequestSchema = z
  .object({
    month: MonthSchema.and(
      z.any().openapi({ description: 'The month being requested, with a value of 1-12.' }),
    ),
    year: YearSchema.and(
      z.any().openapi({ description: 'The year being requested, in the format of YYYY.' }),
    ),
  })
  .openapi({ required: ['month', 'year'], title: 'GetMinuteUsageRequest', description: '<p/>' })
  .openapi('GetMinuteUsageRequest')

const GetMissionProfileRequestSchema = z
  .object({})
  .openapi({ title: 'GetMissionProfileRequest', description: '<p/>' })
  .openapi('GetMissionProfileRequest')

const GetSatelliteRequestSchema = z
  .object({})
  .openapi({ title: 'GetSatelliteRequest', description: '<p/>' })
  .openapi('GetSatelliteRequest')

const PaginationMaxResultsSchema = z.int().min(0).max(100).openapi('PaginationMaxResults')

const ListConfigsRequestSchema = z
  .object({})
  .openapi({ title: 'ListConfigsRequest', description: '<p/>' })
  .openapi('ListConfigsRequest')

const StatusListSchema = z.array(ContactStatusSchema).min(0).max(500).openapi('StatusList')

const ListContactsRequestSchema = z
  .object({
    endTime: TimestampSchema.and(z.any().openapi({ description: 'End time of a contact in UTC.' })),
    groundStation: GroundStationNameSchema.and(
      z.any().openapi({ description: 'Name of a ground station.' }),
    ).exactOptional(),
    maxResults: PaginationMaxResultsSchema.and(
      z.any().openapi({ description: 'Maximum number of contacts returned.' }),
    ).exactOptional(),
    missionProfileArn: MissionProfileArnSchema.and(
      z.any().openapi({ description: 'ARN of a mission profile.' }),
    ).exactOptional(),
    nextToken: PaginationTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.',
        }),
    ).exactOptional(),
    satelliteArn: SatelliteArnSchema.and(
      z.any().openapi({ description: 'ARN of a satellite.' }),
    ).exactOptional(),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'Start time of a contact in UTC.' }),
    ),
    statusList: StatusListSchema.and(
      z.any().openapi({ description: 'Status of a contact reservation.' }),
    ),
  })
  .openapi({
    required: ['endTime', 'startTime', 'statusList'],
    title: 'ListContactsRequest',
    description: '<p/>',
  })
  .openapi('ListContactsRequest')

const ListDataflowEndpointGroupsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDataflowEndpointGroupsRequest', description: '<p/>' })
  .openapi('ListDataflowEndpointGroupsRequest')

const ListEphemeridesRequestSchema = z
  .object({
    endTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The end time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.',
        }),
    ),
    satelliteId: UuidSchema.and(
      z
        .any()
        .openapi({ description: 'The AWS Ground Station satellite ID to list ephemeris for.' }),
    ),
    startTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.',
        }),
    ),
    statusList: EphemerisStatusListSchema.and(
      z.any().openapi({ description: 'The list of ephemeris status to return.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['endTime', 'satelliteId', 'startTime'], title: 'ListEphemeridesRequest' })
  .openapi('ListEphemeridesRequest')

const ListGroundStationsRequestSchema = z
  .object({})
  .openapi({ title: 'ListGroundStationsRequest', description: '<p/>' })
  .openapi('ListGroundStationsRequest')

const ListMissionProfilesRequestSchema = z
  .object({})
  .openapi({ title: 'ListMissionProfilesRequest', description: '<p/>' })
  .openapi('ListMissionProfilesRequest')

const ListSatellitesRequestSchema = z
  .object({})
  .openapi({ title: 'ListSatellitesRequest', description: '<p/>' })
  .openapi('ListSatellitesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest', description: '<p/>' })
  .openapi('ListTagsForResourceRequest')

const RegisterAgentRequestSchema = z
  .object({
    agentDetails: AgentDetailsSchema.and(
      z.any().openapi({ description: 'Detailed information about the agent being registered.' }),
    ),
    discoveryData: DiscoveryDataSchema.and(
      z
        .any()
        .openapi({
          description: 'Data for associating an agent with the capabilities it is managing.',
        }),
    ),
  })
  .openapi({ required: ['agentDetails', 'discoveryData'], title: 'RegisterAgentRequest' })
  .openapi('RegisterAgentRequest')

const ReserveContactRequestSchema = z
  .object({
    endTime: TimestampSchema.and(z.any().openapi({ description: 'End time of a contact in UTC.' })),
    groundStation: GroundStationNameSchema.and(
      z.any().openapi({ description: 'Name of a ground station.' }),
    ),
    missionProfileArn: MissionProfileArnSchema.and(
      z.any().openapi({ description: 'ARN of a mission profile.' }),
    ),
    satelliteArn: SatelliteArnSchema.and(z.any().openapi({ description: 'ARN of a satellite' })),
    startTime: TimestampSchema.and(
      z.any().openapi({ description: 'Start time of a contact in UTC.' }),
    ),
    tags: TagsMapSchema.and(
      z.any().openapi({ description: 'Tags assigned to a contact.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['endTime', 'groundStation', 'missionProfileArn', 'satelliteArn', 'startTime'],
    title: 'ReserveContactRequest',
    description: '<p/>',
  })
  .openapi('ReserveContactRequest')

const TagKeysSchema = z.array(UnboundedStringSchema).min(0).max(500).openapi('TagKeys')

const TagResourceRequestSchema = z
  .object({
    tags: TagsMapSchema.and(z.any().openapi({ description: 'Tags assigned to a resource.' })),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest', description: '<p/>' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest', description: '<p/>' })
  .openapi('UntagResourceRequest')

const UpdateAgentStatusRequestSchema = z
  .object({
    aggregateStatus: AggregateStatusSchema.and(
      z.any().openapi({ description: 'Aggregate status for agent.' }),
    ),
    componentStatuses: ComponentStatusListSchema.and(
      z.any().openapi({ description: 'List of component statuses for agent.' }),
    ),
    taskId: UuidSchema.and(z.any().openapi({ description: 'GUID of agent task.' })),
  })
  .openapi({
    required: ['aggregateStatus', 'componentStatuses', 'taskId'],
    title: 'UpdateAgentStatusRequest',
  })
  .openapi('UpdateAgentStatusRequest')

const UpdateConfigRequestSchema = z
  .object({
    configData: ConfigTypeDataSchema.and(
      z.any().openapi({ description: 'Parameters of a <code>Config</code>.' }),
    ),
    name: SafeNameSchema.and(z.any().openapi({ description: 'Name of a <code>Config</code>.' })),
  })
  .openapi({ required: ['configData', 'name'], title: 'UpdateConfigRequest', description: '<p/>' })
  .openapi('UpdateConfigRequest')

const UpdateEphemerisRequestSchema = z
  .object({
    enabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the ephemeris is enabled or not. Changing this value will not require the ephemeris to be re-validated.',
        }),
    ),
    name: SafeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.',
        }),
    ).exactOptional(),
    priority: EphemerisPrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['enabled'], title: 'UpdateEphemerisRequest' })
  .openapi('UpdateEphemerisRequest')

const UpdateMissionProfileRequestSchema = z
  .object({
    contactPostPassDurationSeconds: DurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.',
        }),
    ).exactOptional(),
    contactPrePassDurationSeconds: DurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.',
        }),
    ).exactOptional(),
    dataflowEdges: DataflowEdgeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.',
        }),
    ).exactOptional(),
    minimumViableContactDurationSeconds: PositiveDurationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.',
        }),
    ).exactOptional(),
    name: SafeNameSchema.and(
      z.any().openapi({ description: 'Name of a mission profile.' }),
    ).exactOptional(),
    streamsKmsKey: KmsKeySchema.and(
      z.any().openapi({ description: 'KMS key to use for encrypting streams.' }),
    ).exactOptional(),
    streamsKmsRole: RoleArnSchema.and(
      z.any().openapi({ description: 'Role to use for encrypting streams with KMS key.' }),
    ).exactOptional(),
    trackingConfigArn: ConfigArnSchema.and(
      z.any().openapi({ description: 'ARN of a tracking <code>Config</code>.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateMissionProfileRequest', description: '<p/>', required: [] })
  .openapi('UpdateMissionProfileRequest')

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

export const getContactContactIdRoute = createRoute({
  method: 'get',
  path: '/contact/{contactId}',
  description: 'Describes an existing contact.',
  operationId: 'DescribeContact',
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
      contactId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'contactId',
            in: 'path',
            required: true,
            description: 'UUID of a contact.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeContactResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteContactContactIdRoute = createRoute({
  method: 'delete',
  path: '/contact/{contactId}',
  description: 'Cancels a contact with a specified contact ID.',
  operationId: 'CancelContact',
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
      contactId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'contactId',
            in: 'path',
            required: true,
            description: 'UUID of a contact.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  description: 'Returns a list of <code>Config</code> objects.',
  operationId: 'ListConfigs',
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
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Maximum number of <code>Configs</code> returned.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9-\/+_.=]+$/)
        .min(3)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Next token returned in the request of a previous <code>ListConfigs</code> call. Used to get the next page of results.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9-/+_.=]+$',
              minLength: 3,
              maxLength: 1000,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConfigsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postConfigRoute = createRoute({
  method: 'post',
  path: '/config',
  description:
    '<p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>',
  operationId: 'CreateConfig',
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
              configData: z
                .object({
                  antennaDownlinkConfig: AntennaDownlinkConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about how AWS Ground Station should configure an antenna for downlink during a contact.',
                      }),
                  ).exactOptional(),
                  antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.',
                      }),
                  ).exactOptional(),
                  antennaUplinkConfig: AntennaUplinkConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.',
                      }),
                  ).exactOptional(),
                  dataflowEndpointConfig: DataflowEndpointConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Information about the dataflow endpoint <code>Config</code>.',
                      }),
                  ).exactOptional(),
                  s3RecordingConfig: S3RecordingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Information about an S3 recording <code>Config</code>.',
                      }),
                  ).exactOptional(),
                  trackingConfig: TrackingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. ',
                      }),
                  ).exactOptional(),
                  uplinkEchoConfig: UplinkEchoConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>',
                  required: [],
                }),
              name: z
                .string()
                .regex(/^[ a-zA-Z0-9_:-]{1,256}$/)
                .min(1)
                .max(256)
                .openapi({ description: 'Name of a <code>Config</code>.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Tags assigned to a <code>Config</code>.' }),
            })
            .openapi({ required: ['configData', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceLimitExceededException',
      content: { 'application/json': { schema: ResourceLimitExceededExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getDataflowEndpointGroupRoute = createRoute({
  method: 'get',
  path: '/dataflowEndpointGroup',
  description: 'Returns a list of <code>DataflowEndpoint</code> groups.',
  operationId: 'ListDataflowEndpointGroups',
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
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Maximum number of dataflow endpoint groups returned.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9-\/+_.=]+$/)
        .min(3)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Next token returned in the request of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9-/+_.=]+$',
              minLength: 3,
              maxLength: 1000,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDataflowEndpointGroupsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postDataflowEndpointGroupRoute = createRoute({
  method: 'post',
  path: '/dataflowEndpointGroup',
  description:
    '<p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>',
  operationId: 'CreateDataflowEndpointGroup',
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
              contactPostPassDurationSeconds: z
                .int()
                .min(120)
                .max(480)
                .exactOptional()
                .openapi({
                  description:
                    'Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.',
                }),
              contactPrePassDurationSeconds: z
                .int()
                .min(120)
                .max(480)
                .exactOptional()
                .openapi({
                  description:
                    'Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.',
                }),
              endpointDetails: z
                .array(EndpointDetailsSchema)
                .min(0)
                .max(500)
                .openapi({
                  description: 'Endpoint details of each endpoint in the dataflow endpoint group.',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Tags of a dataflow endpoint group.' }),
            })
            .openapi({ required: ['endpointDetails'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DataflowEndpointGroupIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postEphemerisRoute = createRoute({
  method: 'post',
  path: '/ephemeris',
  description: 'Creates an Ephemeris with the specified <code>EphemerisData</code>.',
  operationId: 'CreateEphemeris',
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
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Whether to set the ephemeris status to <code>ENABLED</code> after validation.</p> <p>Setting this to false will set the ephemeris status to <code>DISABLED</code> after validation.</p>',
                }),
              ephemeris: z
                .object({
                  oem: OEMEphemerisSchema.exactOptional(),
                  tle: TLEEphemerisSchema.exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Ephemeris data.', required: [] }),
              expirationTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'An overall expiration time for the ephemeris in UTC, after which it will become <code>EXPIRED</code>.',
                }),
              kmsKeyArn: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ARN of a KMS key used to encrypt the ephemeris in Ground Station.',
                }),
              name: z
                .string()
                .regex(/^[ a-zA-Z0-9_:-]{1,256}$/)
                .min(1)
                .max(256)
                .openapi({
                  description:
                    'A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.',
                }),
              priority: z
                .int()
                .min(1)
                .max(99999)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>',
                }),
              satelliteId: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .min(1)
                .max(128)
                .openapi({ description: 'AWS Ground Station satellite ID for this ephemeris.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Tags assigned to an ephemeris.' }),
            })
            .openapi({ required: ['name', 'satelliteId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EphemerisIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getMissionprofileRoute = createRoute({
  method: 'get',
  path: '/missionprofile',
  description: 'Returns a list of mission profiles.',
  operationId: 'ListMissionProfiles',
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
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Maximum number of mission profiles returned.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9-\/+_.=]+$/)
        .min(3)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Next token returned in the request of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9-/+_.=]+$',
              minLength: 3,
              maxLength: 1000,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMissionProfilesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postMissionprofileRoute = createRoute({
  method: 'post',
  path: '/missionprofile',
  description:
    '<p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>',
  operationId: 'CreateMissionProfile',
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
              contactPostPassDurationSeconds: z
                .int()
                .min(0)
                .max(21600)
                .exactOptional()
                .openapi({
                  description:
                    'Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.',
                }),
              contactPrePassDurationSeconds: z
                .int()
                .min(0)
                .max(21600)
                .exactOptional()
                .openapi({
                  description:
                    'Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.',
                }),
              dataflowEdges: z
                .array(DataflowEdgeSchema)
                .min(0)
                .max(500)
                .openapi({
                  description:
                    'A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.',
                }),
              minimumViableContactDurationSeconds: z
                .int()
                .min(1)
                .max(21600)
                .openapi({
                  description:
                    'Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.',
                }),
              name: z
                .string()
                .regex(/^[ a-zA-Z0-9_:-]{1,256}$/)
                .min(1)
                .max(256)
                .openapi({ description: 'Name of a mission profile.' }),
              streamsKmsKey: z
                .object({
                  kmsAliasArn: KeyAliasArnSchema.and(
                    z.any().openapi({ description: 'KMS Alias Arn.' }),
                  ).exactOptional(),
                  kmsKeyArn: KeyArnSchema.and(
                    z.any().openapi({ description: 'KMS Key Arn.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'AWS Key Management Service (KMS) Key.', required: [] }),
              streamsKmsRole: z
                .string()
                .exactOptional()
                .openapi({ description: 'Role to use for encrypting streams with KMS key.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Tags assigned to a mission profile.' }),
              trackingConfigArn: z
                .string()
                .openapi({ description: 'ARN of a tracking <code>Config</code>.' }),
            })
            .openapi({
              required: [
                'dataflowEdges',
                'minimumViableContactDurationSeconds',
                'name',
                'trackingConfigArn',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MissionProfileIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getConfigConfigTypeConfigIdRoute = createRoute({
  method: 'get',
  path: '/config/{configType}/{configId}',
  description:
    '<p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>',
  operationId: 'GetConfig',
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
      configId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'configId',
            in: 'path',
            required: true,
            description: 'UUID of a <code>Config</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
      configType: z
        .enum([
          'antenna-downlink',
          'antenna-downlink-demod-decode',
          'antenna-uplink',
          'dataflow-endpoint',
          'tracking',
          'uplink-echo',
          's3-recording',
        ])
        .openapi({
          param: {
            name: 'configType',
            in: 'path',
            required: true,
            description: 'Type of a <code>Config</code>.',
            schema: {
              type: 'string',
              enum: [
                'antenna-downlink',
                'antenna-downlink-demod-decode',
                'antenna-uplink',
                'dataflow-endpoint',
                'tracking',
                'uplink-echo',
                's3-recording',
              ],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConfigResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putConfigConfigTypeConfigIdRoute = createRoute({
  method: 'put',
  path: '/config/{configType}/{configId}',
  description:
    '<p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>',
  operationId: 'UpdateConfig',
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
      configId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'configId',
            in: 'path',
            required: true,
            description: 'UUID of a <code>Config</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
      configType: z
        .enum([
          'antenna-downlink',
          'antenna-downlink-demod-decode',
          'antenna-uplink',
          'dataflow-endpoint',
          'tracking',
          'uplink-echo',
          's3-recording',
        ])
        .openapi({
          param: {
            name: 'configType',
            in: 'path',
            required: true,
            description: 'Type of a <code>Config</code>.',
            schema: {
              type: 'string',
              enum: [
                'antenna-downlink',
                'antenna-downlink-demod-decode',
                'antenna-uplink',
                'dataflow-endpoint',
                'tracking',
                'uplink-echo',
                's3-recording',
              ],
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              configData: z
                .object({
                  antennaDownlinkConfig: AntennaDownlinkConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about how AWS Ground Station should configure an antenna for downlink during a contact.',
                      }),
                  ).exactOptional(),
                  antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.',
                      }),
                  ).exactOptional(),
                  antennaUplinkConfig: AntennaUplinkConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.',
                      }),
                  ).exactOptional(),
                  dataflowEndpointConfig: DataflowEndpointConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Information about the dataflow endpoint <code>Config</code>.',
                      }),
                  ).exactOptional(),
                  s3RecordingConfig: S3RecordingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Information about an S3 recording <code>Config</code>.',
                      }),
                  ).exactOptional(),
                  trackingConfig: TrackingConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. ',
                      }),
                  ).exactOptional(),
                  uplinkEchoConfig: UplinkEchoConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>',
                  required: [],
                }),
              name: z
                .string()
                .regex(/^[ a-zA-Z0-9_:-]{1,256}$/)
                .min(1)
                .max(256)
                .openapi({ description: 'Name of a <code>Config</code>.' }),
            })
            .openapi({ required: ['configData', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteConfigConfigTypeConfigIdRoute = createRoute({
  method: 'delete',
  path: '/config/{configType}/{configId}',
  description: 'Deletes a <code>Config</code>.',
  operationId: 'DeleteConfig',
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
      configId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'configId',
            in: 'path',
            required: true,
            description: 'UUID of a <code>Config</code>.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
      configType: z
        .enum([
          'antenna-downlink',
          'antenna-downlink-demod-decode',
          'antenna-uplink',
          'dataflow-endpoint',
          'tracking',
          'uplink-echo',
          's3-recording',
        ])
        .openapi({
          param: {
            name: 'configType',
            in: 'path',
            required: true,
            description: 'Type of a <code>Config</code>.',
            schema: {
              type: 'string',
              enum: [
                'antenna-downlink',
                'antenna-downlink-demod-decode',
                'antenna-uplink',
                'dataflow-endpoint',
                'tracking',
                'uplink-echo',
                's3-recording',
              ],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getDataflowEndpointGroupDataflowEndpointGroupIdRoute = createRoute({
  method: 'get',
  path: '/dataflowEndpointGroup/{dataflowEndpointGroupId}',
  description: 'Returns the dataflow endpoint group.',
  operationId: 'GetDataflowEndpointGroup',
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
      dataflowEndpointGroupId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'dataflowEndpointGroupId',
            in: 'path',
            required: true,
            description: 'UUID of a dataflow endpoint group.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataflowEndpointGroupResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteDataflowEndpointGroupDataflowEndpointGroupIdRoute = createRoute({
  method: 'delete',
  path: '/dataflowEndpointGroup/{dataflowEndpointGroupId}',
  description: 'Deletes a dataflow endpoint group.',
  operationId: 'DeleteDataflowEndpointGroup',
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
      dataflowEndpointGroupId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'dataflowEndpointGroupId',
            in: 'path',
            required: true,
            description: 'UUID of a dataflow endpoint group.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DataflowEndpointGroupIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getEphemerisEphemerisIdRoute = createRoute({
  method: 'get',
  path: '/ephemeris/{ephemerisId}',
  description: 'Describes an existing ephemeris.',
  operationId: 'DescribeEphemeris',
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
      ephemerisId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ephemerisId',
            in: 'path',
            required: true,
            description: 'The AWS Ground Station ephemeris ID.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeEphemerisResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putEphemerisEphemerisIdRoute = createRoute({
  method: 'put',
  path: '/ephemeris/{ephemerisId}',
  description: 'Updates an existing ephemeris',
  operationId: 'UpdateEphemeris',
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
      ephemerisId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ephemerisId',
            in: 'path',
            required: true,
            description: 'The AWS Ground Station ephemeris ID.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
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
                .openapi({
                  description:
                    'Whether the ephemeris is enabled or not. Changing this value will not require the ephemeris to be re-validated.',
                }),
              name: z
                .string()
                .regex(/^[ a-zA-Z0-9_:-]{1,256}$/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.',
                }),
              priority: z
                .int()
                .min(0)
                .max(99999)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>',
                }),
            })
            .openapi({ required: ['enabled'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EphemerisIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteEphemerisEphemerisIdRoute = createRoute({
  method: 'delete',
  path: '/ephemeris/{ephemerisId}',
  description: 'Deletes an ephemeris',
  operationId: 'DeleteEphemeris',
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
      ephemerisId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'ephemerisId',
            in: 'path',
            required: true,
            description: 'The AWS Ground Station ephemeris ID.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EphemerisIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getMissionprofileMissionProfileIdRoute = createRoute({
  method: 'get',
  path: '/missionprofile/{missionProfileId}',
  description: 'Returns a mission profile.',
  operationId: 'GetMissionProfile',
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
      missionProfileId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'missionProfileId',
            in: 'path',
            required: true,
            description: 'UUID of a mission profile.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMissionProfileResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putMissionprofileMissionProfileIdRoute = createRoute({
  method: 'put',
  path: '/missionprofile/{missionProfileId}',
  description:
    '<p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>',
  operationId: 'UpdateMissionProfile',
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
      missionProfileId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'missionProfileId',
            in: 'path',
            required: true,
            description: 'UUID of a mission profile.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              contactPostPassDurationSeconds: z
                .int()
                .min(0)
                .max(21600)
                .exactOptional()
                .openapi({
                  description:
                    'Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.',
                }),
              contactPrePassDurationSeconds: z
                .int()
                .min(0)
                .max(21600)
                .exactOptional()
                .openapi({
                  description:
                    'Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.',
                }),
              dataflowEdges: z
                .array(DataflowEdgeSchema)
                .min(0)
                .max(500)
                .exactOptional()
                .openapi({
                  description:
                    'A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.',
                }),
              minimumViableContactDurationSeconds: z
                .int()
                .min(1)
                .max(21600)
                .exactOptional()
                .openapi({
                  description:
                    'Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.',
                }),
              name: z
                .string()
                .regex(/^[ a-zA-Z0-9_:-]{1,256}$/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({ description: 'Name of a mission profile.' }),
              streamsKmsKey: z
                .object({
                  kmsAliasArn: KeyAliasArnSchema.and(
                    z.any().openapi({ description: 'KMS Alias Arn.' }),
                  ).exactOptional(),
                  kmsKeyArn: KeyArnSchema.and(
                    z.any().openapi({ description: 'KMS Key Arn.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'AWS Key Management Service (KMS) Key.', required: [] }),
              streamsKmsRole: z
                .string()
                .exactOptional()
                .openapi({ description: 'Role to use for encrypting streams with KMS key.' }),
              trackingConfigArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'ARN of a tracking <code>Config</code>.' }),
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
      content: { 'application/json': { schema: MissionProfileIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteMissionprofileMissionProfileIdRoute = createRoute({
  method: 'delete',
  path: '/missionprofile/{missionProfileId}',
  description: 'Deletes a mission profile.',
  operationId: 'DeleteMissionProfile',
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
      missionProfileId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'missionProfileId',
            in: 'path',
            required: true,
            description: 'UUID of a mission profile.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MissionProfileIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getAgentAgentIdConfigurationRoute = createRoute({
  method: 'get',
  path: '/agent/{agentId}/configuration',
  description:
    "<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>",
  operationId: 'GetAgentConfiguration',
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
      agentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'agentId',
            in: 'path',
            required: true,
            description: 'UUID of agent to get configuration information for.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAgentConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postMinuteUsageRoute = createRoute({
  method: 'post',
  path: '/minute-usage',
  description: 'Returns the number of minutes used by account.',
  operationId: 'GetMinuteUsage',
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
              month: z
                .int()
                .min(1)
                .max(12)
                .openapi({ description: 'The month being requested, with a value of 1-12.' }),
              year: z
                .int()
                .min(2018)
                .max(3000)
                .openapi({ description: 'The year being requested, in the format of YYYY.' }),
            })
            .openapi({ required: ['month', 'year'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMinuteUsageResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getSatelliteSatelliteIdRoute = createRoute({
  method: 'get',
  path: '/satellite/{satelliteId}',
  description: 'Returns a satellite.',
  operationId: 'GetSatellite',
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
      satelliteId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'satelliteId',
            in: 'path',
            required: true,
            description: 'UUID of a satellite.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSatelliteResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postContactsRoute = createRoute({
  method: 'post',
  path: '/contacts',
  description:
    '<p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>',
  operationId: 'ListContacts',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endTime: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'End time of a contact in UTC.' }),
              groundStation: z
                .string()
                .regex(/^[ a-zA-Z0-9-._:=]{4,256}$/)
                .min(4)
                .max(500)
                .exactOptional()
                .openapi({ description: 'Name of a ground station.' }),
              maxResults: z
                .int()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({ description: 'Maximum number of contacts returned.' }),
              missionProfileArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'ARN of a mission profile.' }),
              nextToken: z
                .string()
                .regex(/^[A-Za-z0-9-\/+_.=]+$/)
                .min(3)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.',
                }),
              satelliteArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'ARN of a satellite.' }),
              startTime: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'Start time of a contact in UTC.' }),
              statusList: z
                .array(ContactStatusSchema)
                .min(0)
                .max(500)
                .openapi({ description: 'Status of a contact reservation.' }),
            })
            .openapi({ required: ['endTime', 'startTime', 'statusList'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListContactsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postEphemeridesRoute = createRoute({
  method: 'post',
  path: '/ephemerides',
  description: 'List existing ephemerides.',
  operationId: 'ListEphemerides',
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
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Maximum number of ephemerides to return.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9-\/+_.=]+$/)
        .min(3)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'Pagination token.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9-/+_.=]+$',
              minLength: 3,
              maxLength: 1000,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              endTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'The end time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.',
                }),
              satelliteId: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .min(1)
                .max(128)
                .openapi({
                  description: 'The AWS Ground Station satellite ID to list ephemeris for.',
                }),
              startTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'The start time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.',
                }),
              statusList: z
                .array(EphemerisStatusSchema)
                .min(0)
                .max(500)
                .exactOptional()
                .openapi({ description: 'The list of ephemeris status to return.' }),
            })
            .openapi({ required: ['endTime', 'satelliteId', 'startTime'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEphemeridesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getGroundstationRoute = createRoute({
  method: 'get',
  path: '/groundstation',
  description: 'Returns a list of ground stations. ',
  operationId: 'ListGroundStations',
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
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Maximum number of ground stations returned.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9-\/+_.=]+$/)
        .min(3)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Next token that can be supplied in the next call to get the next page of ground stations.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9-/+_.=]+$',
              minLength: 3,
              maxLength: 1000,
            },
          },
        }),
      satelliteId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'satelliteId',
            in: 'query',
            required: false,
            description: 'Satellite ID to retrieve on-boarded ground stations.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGroundStationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getSatelliteRoute = createRoute({
  method: 'get',
  path: '/satellite',
  description: 'Returns a list of satellites.',
  operationId: 'ListSatellites',
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
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'Maximum number of satellites returned.',
            schema: { type: 'integer', minimum: 0, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9-\/+_.=]+$/)
        .min(3)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'Next token that can be supplied in the next call to get the next page of satellites.',
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9-/+_.=]+$',
              minLength: 3,
              maxLength: 1000,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSatellitesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
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
  description: 'Returns a list of tags for a specified resource.',
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
        .regex(/^(arn:aws:)[\s\S]{0,1024}$/)
        .min(5)
        .max(1024)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'ARN of a resource.',
            schema: {
              type: 'string',
              pattern: '^(arn:aws:)[\\s\\S]{0,1024}$',
              minLength: 5,
              maxLength: 1024,
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
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
  description: 'Assigns a tag to a resource.',
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
        .regex(/^(arn:aws:)[\s\S]{0,1024}$/)
        .min(5)
        .max(1024)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'ARN of a resource tag.',
            schema: {
              type: 'string',
              pattern: '^(arn:aws:)[\\s\\S]{0,1024}$',
              minLength: 5,
              maxLength: 1024,
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
                .record(z.string(), StringSchema)
                .openapi({ description: 'Tags assigned to a resource.' }),
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postAgentRoute = createRoute({
  method: 'post',
  path: '/agent',
  description:
    "<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>",
  operationId: 'RegisterAgent',
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
              agentDetails: z
                .object({
                  agentCpuCores: AgentCpuCoresListSchema.and(
                    z.any().openapi({ description: 'List of CPU cores reserved for the agent.' }),
                  ).exactOptional(),
                  agentVersion: VersionStringSchema.and(
                    z.any().openapi({ description: 'Current agent version.' }),
                  ).exactOptional(),
                  componentVersions: ComponentVersionListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'List of versions being used by agent components.' }),
                  ).exactOptional(),
                  instanceId: InstanceIdSchema.and(
                    z.any().openapi({ description: 'ID of EC2 instance agent is running on.' }),
                  ).exactOptional(),
                  instanceType: InstanceTypeSchema.and(
                    z.any().openapi({ description: 'Type of EC2 instance agent is running on.' }),
                  ).exactOptional(),
                  reservedCpuCores: AgentCpuCoresListSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<note> <p>This field should not be used. Use agentCpuCores instead.</p> </note> <p>List of CPU cores reserved for processes other than the agent running on the EC2 instance.</p>',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Detailed information about the agent.', required: [] }),
              discoveryData: z
                .object({
                  capabilityArns: CapabilityArnListSchema.and(
                    z
                      .any()
                      .openapi({ description: 'List of capabilities to associate with agent.' }),
                  ).exactOptional(),
                  privateIpAddresses: IpAddressListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'List of private IP addresses to associate with agent.',
                      }),
                  ).exactOptional(),
                  publicIpAddresses: IpAddressListSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'List of public IP addresses to associate with agent.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Data for agent discovery.', required: [] }),
            })
            .openapi({ required: ['agentDetails', 'discoveryData'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterAgentResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postContactRoute = createRoute({
  method: 'post',
  path: '/contact',
  description: 'Reserves a contact using specified parameters.',
  operationId: 'ReserveContact',
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
              endTime: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'End time of a contact in UTC.' }),
              groundStation: z
                .string()
                .regex(/^[ a-zA-Z0-9-._:=]{4,256}$/)
                .min(4)
                .max(500)
                .openapi({ description: 'Name of a ground station.' }),
              missionProfileArn: z.string().openapi({ description: 'ARN of a mission profile.' }),
              satelliteArn: z.string().openapi({ description: 'ARN of a satellite' }),
              startTime: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'Start time of a contact in UTC.' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Tags assigned to a contact.' }),
            })
            .openapi({
              required: [
                'endTime',
                'groundStation',
                'missionProfileArn',
                'satelliteArn',
                'startTime',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ContactIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
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
  description: 'Deassigns a resource tag.',
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
        .regex(/^(arn:aws:)[\s\S]{0,1024}$/)
        .min(5)
        .max(1024)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'ARN of a resource.',
            schema: {
              type: 'string',
              pattern: '^(arn:aws:)[\\s\\S]{0,1024}$',
              minLength: 5,
              maxLength: 1024,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(UnboundedStringSchema).min(0).max(500),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'Keys of a resource tag.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/UnboundedString' },
              minItems: 0,
              maxItems: 500,
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
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putAgentAgentIdRoute = createRoute({
  method: 'put',
  path: '/agent/{agentId}',
  description:
    "<note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>",
  operationId: 'UpdateAgentStatus',
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
      agentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'agentId',
            in: 'path',
            required: true,
            description: 'UUID of agent to update.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 1,
              maxLength: 128,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              aggregateStatus: z
                .object({
                  signatureMap: SignatureMapSchema.and(
                    z.any().openapi({ description: 'Sparse map of failure signatures.' }),
                  ).exactOptional(),
                  status: AgentStatusSchema.and(
                    z.any().openapi({ description: 'Aggregate status.' }),
                  ).exactOptional(),
                })
                .openapi({ description: 'Aggregate status of Agent components.', required: [] }),
              componentStatuses: z
                .array(ComponentStatusDataSchema)
                .min(0)
                .max(20)
                .openapi({ description: 'List of component statuses for agent.' }),
              taskId: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .min(1)
                .max(128)
                .openapi({ description: 'GUID of agent task.' }),
            })
            .openapi({ required: ['aggregateStatus', 'componentStatuses', 'taskId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAgentStatusResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'DependencyException',
      content: { 'application/json': { schema: DependencyExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
