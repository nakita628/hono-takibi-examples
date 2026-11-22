import { createRoute, z } from '@hono/zod-openapi'

const ApproveSkillResponseSchema = z.looseObject({}).openapi('ApproveSkillResponse')

const SkillIdSchema = z
  .string()
  .regex(/(^amzn1\.ask\.skill\.[0-9a-f\-]{1,200})|(^amzn1\.echo-sdk-ams\.app\.[0-9a-f\-]{1,200})/)
  .openapi('SkillId')

const ApproveSkillRequestSchema = z
  .object({
    SkillId: SkillIdSchema.openapi({ description: 'The unique identifier of the skill.' }),
  })
  .openapi({ required: ['SkillId'], title: 'ApproveSkillRequest' })
  .openapi('ApproveSkillRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const AssociateContactWithAddressBookResponseSchema = z
  .looseObject({})
  .openapi('AssociateContactWithAddressBookResponse')

const ArnSchema = z
  .string()
  .regex(
    /arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^\/].{0,1023}/,
  )
  .openapi('Arn')

const AssociateContactWithAddressBookRequestSchema = z
  .object({
    ContactArn: ArnSchema.openapi({
      description: 'The ARN of the contact to associate with an address book.',
    }),
    AddressBookArn: ArnSchema.openapi({
      description: 'The ARN of the address book with which to associate the contact.',
    }),
  })
  .openapi({
    required: ['ContactArn', 'AddressBookArn'],
    title: 'AssociateContactWithAddressBookRequest',
  })
  .openapi('AssociateContactWithAddressBookRequest')

const AssociateDeviceWithNetworkProfileResponseSchema = z
  .looseObject({})
  .openapi('AssociateDeviceWithNetworkProfileResponse')

const AssociateDeviceWithNetworkProfileRequestSchema = z
  .object({
    DeviceArn: ArnSchema.openapi({ description: 'The device ARN.' }),
    NetworkProfileArn: ArnSchema.openapi({
      description: 'The ARN of the network profile to associate with a device.',
    }),
  })
  .openapi({
    required: ['DeviceArn', 'NetworkProfileArn'],
    title: 'AssociateDeviceWithNetworkProfileRequest',
  })
  .openapi('AssociateDeviceWithNetworkProfileRequest')

const DeviceNotRegisteredExceptionSchema = z.any().openapi('DeviceNotRegisteredException')

const AssociateDeviceWithRoomResponseSchema = z
  .looseObject({})
  .openapi('AssociateDeviceWithRoomResponse')

const AssociateDeviceWithRoomRequestSchema = z
  .object({
    DeviceArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the device to associate to a room. Required.',
    }),
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room with which to associate the device. Required.',
    }),
  })
  .openapi({ title: 'AssociateDeviceWithRoomRequest', required: [] })
  .openapi('AssociateDeviceWithRoomRequest')

const AssociateSkillGroupWithRoomResponseSchema = z
  .looseObject({})
  .openapi('AssociateSkillGroupWithRoomResponse')

const AssociateSkillGroupWithRoomRequestSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the skill group to associate with a room. Required.',
    }),
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room with which to associate the skill group. Required.',
    }),
  })
  .openapi({ title: 'AssociateSkillGroupWithRoomRequest', required: [] })
  .openapi('AssociateSkillGroupWithRoomRequest')

const AssociateSkillWithSkillGroupResponseSchema = z
  .looseObject({})
  .openapi('AssociateSkillWithSkillGroupResponse')

const AssociateSkillWithSkillGroupRequestSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the skill group to associate the skill to. Required.',
    }),
    SkillId: SkillIdSchema.openapi({ description: 'The unique identifier of the skill.' }),
  })
  .openapi({ required: ['SkillId'], title: 'AssociateSkillWithSkillGroupRequest' })
  .openapi('AssociateSkillWithSkillGroupRequest')

const SkillNotLinkedExceptionSchema = z.any().openapi('SkillNotLinkedException')

const AssociateSkillWithUsersResponseSchema = z
  .looseObject({})
  .openapi('AssociateSkillWithUsersResponse')

const AssociateSkillWithUsersRequestSchema = z
  .object({
    SkillId: SkillIdSchema.openapi({
      description: 'The private skill ID you want to make available to enrolled users.',
    }),
  })
  .openapi({ required: ['SkillId'], title: 'AssociateSkillWithUsersRequest' })
  .openapi('AssociateSkillWithUsersRequest')

const CreateAddressBookResponseSchema = z
  .object({
    AddressBookArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the newly created address book.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateAddressBookResponse')

const AddressBookNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('AddressBookName')

const AddressBookDescriptionSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(200)
  .openapi('AddressBookDescription')

const ClientRequestTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9][a-zA-Z0-9_-]*/)
  .min(10)
  .max(150)
  .openapi({
    description: 'A unique, user-specified identifier for the request that ensures idempotency.',
  })
  .openapi('ClientRequestToken')

const TagKeySchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z
  .string()
  .regex(/^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)$/u)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.openapi({ description: 'The key of a tag. Tag keys are case-sensitive. ' }),
    Value: TagValueSchema.openapi({
      description: 'The value of a tag. Tag values are case sensitive and can be null.',
    }),
  })
  .openapi({
    required: ['Key', 'Value'],
    description: 'A key-value pair that can be associated with a resource. ',
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateAddressBookRequestSchema = z
  .object({
    Name: AddressBookNameSchema.openapi({ description: 'The name of the address book.' }),
    Description: AddressBookDescriptionSchema.exactOptional().openapi({
      description: 'The description of the address book.',
    }),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description: 'A unique, user-specified identifier for the request that ensures idempotency.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to be added to the specified resource. Do not provide system tags.',
    }),
  })
  .openapi({ required: ['Name'], title: 'CreateAddressBookRequest' })
  .openapi('CreateAddressBookRequest')

const AlreadyExistsExceptionSchema = z.any().openapi('AlreadyExistsException')

const CreateBusinessReportScheduleResponseSchema = z
  .object({
    ScheduleArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the business report schedule.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateBusinessReportScheduleResponse')

const BusinessReportScheduleNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(0)
  .max(64)
  .openapi('BusinessReportScheduleName')

const CustomerS3BucketNameSchema = z
  .string()
  .regex(/[a-z0-9-\.]{3,63}/)
  .openapi('CustomerS3BucketName')

const S3KeyPrefixSchema = z
  .string()
  .regex(/[A-Za-z0-9!_\-\.\*'()\/]*/)
  .min(0)
  .max(100)
  .openapi('S3KeyPrefix')

const BusinessReportFormatSchema = z.enum(['CSV', 'CSV_ZIP']).openapi('BusinessReportFormat')

const BusinessReportIntervalSchema = z
  .enum(['ONE_DAY', 'ONE_WEEK', 'THIRTY_DAYS'])
  .openapi('BusinessReportInterval')

const BusinessReportContentRangeSchema = z
  .object({
    Interval: BusinessReportIntervalSchema.openapi({
      description: 'The interval of the content range.',
    }),
  })
  .openapi({ required: ['Interval'], description: 'The content range of the report.' })
  .openapi('BusinessReportContentRange')

const DateSchema = z
  .string()
  .regex(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)
  .openapi('Date')

const BusinessReportRecurrenceSchema = z
  .object({ StartDate: DateSchema.exactOptional().openapi({ description: 'The start date.' }) })
  .openapi({ description: 'The recurrence of the reports.', required: [] })
  .openapi('BusinessReportRecurrence')

const CreateBusinessReportScheduleRequestSchema = z
  .object({
    ScheduleName: BusinessReportScheduleNameSchema.exactOptional().openapi({
      description: 'The name identifier of the schedule.',
    }),
    S3BucketName: CustomerS3BucketNameSchema.exactOptional().openapi({
      description:
        "The S3 bucket name of the output reports. If this isn't specified, the report can be retrieved from a download link by calling ListBusinessReportSchedule. ",
    }),
    S3KeyPrefix: S3KeyPrefixSchema.exactOptional().openapi({
      description: 'The S3 key where the report is delivered.',
    }),
    Format: BusinessReportFormatSchema.openapi({
      description:
        'The format of the generated report (individual CSV files or zipped files of individual files).',
    }),
    ContentRange: BusinessReportContentRangeSchema.openapi({
      description: 'The content range of the reports.',
    }),
    Recurrence: BusinessReportRecurrenceSchema.exactOptional().openapi({
      description:
        "The recurrence of the reports. If this isn't specified, the report will only be delivered one time when the API is called. ",
    }),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description: 'The client request token.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags for the business report schedule.',
    }),
  })
  .openapi({ required: ['Format', 'ContentRange'], title: 'CreateBusinessReportScheduleRequest' })
  .openapi('CreateBusinessReportScheduleRequest')

const CreateConferenceProviderResponseSchema = z
  .object({
    ConferenceProviderArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the newly-created conference provider.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateConferenceProviderResponse')

const ConferenceProviderNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(50)
  .openapi('ConferenceProviderName')

const ConferenceProviderTypeSchema = z
  .enum([
    'CHIME',
    'BLUEJEANS',
    'FUZE',
    'GOOGLE_HANGOUTS',
    'POLYCOM',
    'RINGCENTRAL',
    'SKYPE_FOR_BUSINESS',
    'WEBEX',
    'ZOOM',
    'CUSTOM',
  ])
  .openapi('ConferenceProviderType')

const EndpointSchema = z.string().min(1).max(256).openapi('Endpoint')

const CommsProtocolSchema = z.enum(['SIP', 'SIPS', 'H323']).openapi('CommsProtocol')

const IPDialInSchema = z
  .object({
    Endpoint: EndpointSchema.openapi({ description: 'The IP address.' }),
    CommsProtocol: CommsProtocolSchema.openapi({
      description: 'The protocol, including SIP, SIPS, and H323.',
    }),
  })
  .openapi({
    required: ['Endpoint', 'CommsProtocol'],
    description: 'The IP endpoint and protocol for calling.',
  })
  .openapi('IPDialIn')

const CountryCodeSchema = z
  .string()
  .regex(/\d{1,3}/)
  .openapi('CountryCode')

const OutboundPhoneNumberSchema = z
  .string()
  .regex(/\d{10}/)
  .openapi('OutboundPhoneNumber')

const OneClickIdDelaySchema = z.string().min(1).max(2).openapi('OneClickIdDelay')

const OneClickPinDelaySchema = z.string().min(1).max(2).openapi('OneClickPinDelay')

const PSTNDialInSchema = z
  .object({
    CountryCode: CountryCodeSchema.openapi({ description: 'The zip code.' }),
    PhoneNumber: OutboundPhoneNumberSchema.openapi({
      description: 'The phone number to call to join the conference.',
    }),
    OneClickIdDelay: OneClickIdDelaySchema.openapi({
      description:
        'The delay duration before Alexa enters the conference ID with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.',
    }),
    OneClickPinDelay: OneClickPinDelaySchema.openapi({
      description:
        'The delay duration before Alexa enters the conference pin with dual-tone multi-frequency (DTMF). Each number on the dial pad corresponds to a DTMF tone, which is how we send data over the telephone network.',
    }),
  })
  .openapi({
    required: ['CountryCode', 'PhoneNumber', 'OneClickIdDelay', 'OneClickPinDelay'],
    description: 'The information for public switched telephone network (PSTN) conferencing.',
  })
  .openapi('PSTNDialIn')

const RequirePinSchema = z.enum(['YES', 'NO', 'OPTIONAL']).openapi('RequirePin')

const MeetingSettingSchema = z
  .object({
    RequirePin: RequirePinSchema.openapi({
      description: 'The values that indicate whether the pin is always required.',
    }),
  })
  .openapi({
    required: ['RequirePin'],
    description:
      '<p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul>',
  })
  .openapi('MeetingSetting')

const CreateConferenceProviderRequestSchema = z
  .object({
    ConferenceProviderName: ConferenceProviderNameSchema.openapi({
      description: 'The name of the conference provider.',
    }),
    ConferenceProviderType: ConferenceProviderTypeSchema.openapi({
      description: 'Represents a type within a list of predefined types.',
    }),
    IPDialIn: IPDialInSchema.exactOptional().openapi({
      description: 'The IP endpoint and protocol for calling.',
    }),
    PSTNDialIn: PSTNDialInSchema.exactOptional().openapi({
      description: 'The information for PSTN conferencing.',
    }),
    MeetingSetting: MeetingSettingSchema.openapi({
      description: 'The meeting settings for the conference provider.',
    }),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description: 'The request token of the client.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to be added to the specified resource. Do not provide system tags.',
    }),
  })
  .openapi({
    required: ['ConferenceProviderName', 'ConferenceProviderType', 'MeetingSetting'],
    title: 'CreateConferenceProviderRequest',
  })
  .openapi('CreateConferenceProviderRequest')

const CreateContactResponseSchema = z
  .object({
    ContactArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the newly created address book.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateContactResponse')

const ContactNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('ContactName')

const RawPhoneNumberSchema = z
  .string()
  .regex(/^[\+0-9\#\,\(][\+0-9\-\.\/\(\)\,\#\s]+$/)
  .min(0)
  .max(50)
  .openapi('RawPhoneNumber')

const PhoneNumberTypeSchema = z.enum(['MOBILE', 'WORK', 'HOME']).openapi('PhoneNumberType')

const PhoneNumberSchema = z
  .object({
    Number: RawPhoneNumberSchema.openapi({ description: 'The raw value of the phone number.' }),
    Type: PhoneNumberTypeSchema.openapi({ description: 'The type of the phone number.' }),
  })
  .openapi({
    required: ['Number', 'Type'],
    description:
      'The phone number for the contact containing the raw number and phone number type.',
  })
  .openapi('PhoneNumber')

const PhoneNumberListSchema = z.array(PhoneNumberSchema).min(0).max(3).openapi('PhoneNumberList')

const SipUriSchema = z
  .string()
  .regex(/^sip[s]?:([^@:]+)\@([^@]+)$/)
  .min(1)
  .max(256)
  .openapi('SipUri')

const SipTypeSchema = z.literal('WORK').openapi('SipType')

const SipAddressSchema = z
  .object({
    Uri: SipUriSchema.openapi({ description: 'The URI for the SIP address.' }),
    Type: SipTypeSchema.openapi({ description: 'The type of the SIP address.' }),
  })
  .openapi({
    required: ['Uri', 'Type'],
    description: 'The SIP address for the contact containing the URI and SIP address type.',
  })
  .openapi('SipAddress')

const SipAddressListSchema = z.array(SipAddressSchema).min(0).max(1).openapi('SipAddressList')

const CreateContactRequestSchema = z
  .object({
    DisplayName: ContactNameSchema.exactOptional().openapi({
      description: 'The name of the contact to display on the console.',
    }),
    FirstName: ContactNameSchema.openapi({
      description: 'The first name of the contact that is used to call the contact on the device.',
    }),
    LastName: ContactNameSchema.exactOptional().openapi({
      description: 'The last name of the contact that is used to call the contact on the device.',
    }),
    PhoneNumber: RawPhoneNumberSchema.exactOptional().openapi({
      description:
        'The phone number of the contact in E.164 format. The phone number type defaults to WORK. You can specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which lets you specify the phone number type and multiple numbers.',
    }),
    PhoneNumbers: PhoneNumberListSchema.exactOptional().openapi({
      description: 'The list of phone numbers for the contact.',
    }),
    SipAddresses: SipAddressListSchema.exactOptional().openapi({
      description: 'The list of SIP addresses for the contact.',
    }),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description: 'A unique, user-specified identifier for this request that ensures idempotency.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to be added to the specified resource. Do not provide system tags.',
    }),
  })
  .openapi({ required: ['FirstName'], title: 'CreateContactRequest' })
  .openapi('CreateContactRequest')

const CreateGatewayGroupResponseSchema = z
  .object({
    GatewayGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the created gateway group.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateGatewayGroupResponse')

const GatewayGroupNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('GatewayGroupName')

const GatewayGroupDescriptionSchema = z.string().min(0).max(200).openapi('GatewayGroupDescription')

const CreateGatewayGroupRequestSchema = z
  .object({
    Name: GatewayGroupNameSchema.openapi({ description: 'The name of the gateway group.' }),
    Description: GatewayGroupDescriptionSchema.exactOptional().openapi({
      description: 'The description of the gateway group.',
    }),
    ClientRequestToken: ClientRequestTokenSchema.openapi({
      description: ' A unique, user-specified identifier for the request that ensures idempotency.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to be added to the specified resource. Do not provide system tags.',
    }),
  })
  .openapi({ required: ['Name', 'ClientRequestToken'], title: 'CreateGatewayGroupRequest' })
  .openapi('CreateGatewayGroupRequest')

const CreateNetworkProfileResponseSchema = z
  .object({
    NetworkProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the network profile associated with a device.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateNetworkProfileResponse')

const NetworkProfileNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('NetworkProfileName')

const NetworkProfileDescriptionSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(0)
  .max(200)
  .openapi('NetworkProfileDescription')

const NetworkSsidSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(32)
  .openapi('NetworkSsid')

const NetworkSecurityTypeSchema = z
  .enum(['OPEN', 'WEP', 'WPA_PSK', 'WPA2_PSK', 'WPA2_ENTERPRISE'])
  .openapi('NetworkSecurityType')

const NetworkEapMethodSchema = z.literal('EAP_TLS').openapi('NetworkEapMethod')

const CurrentWiFiPasswordSchema = z
  .string()
  .regex(/[\x00-\x7F]*/)
  .min(5)
  .max(128)
  .openapi('CurrentWiFiPassword')

const NextWiFiPasswordSchema = z
  .string()
  .regex(/(^$)|([\x00-\x7F]{5,})/)
  .min(0)
  .max(128)
  .openapi('NextWiFiPassword')

const TrustAnchorSchema = z
  .string()
  .regex(
    /-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9\/+]{64}\u000D?\u000A)*[A-Za-z0-9\/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?/,
  )
  .openapi('TrustAnchor')

const TrustAnchorListSchema = z.array(TrustAnchorSchema).min(1).max(5).openapi('TrustAnchorList')

const CreateNetworkProfileRequestSchema = z
  .object({
    NetworkProfileName: NetworkProfileNameSchema.openapi({
      description: 'The name of the network profile associated with a device.',
    }),
    Description: NetworkProfileDescriptionSchema.exactOptional().openapi({
      description: "Detailed information about a device's network profile.",
    }),
    Ssid: NetworkSsidSchema.openapi({ description: 'The SSID of the Wi-Fi network.' }),
    SecurityType: NetworkSecurityTypeSchema.openapi({
      description:
        'The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK, WEP, or OPEN.',
    }),
    EapMethod: NetworkEapMethodSchema.exactOptional().openapi({
      description:
        'The authentication standard that is used in the EAP framework. Currently, EAP_TLS is supported.',
    }),
    CurrentPassword: CurrentWiFiPasswordSchema.exactOptional().openapi({
      description: 'The current password of the Wi-Fi network.',
    }),
    NextPassword: NextWiFiPasswordSchema.exactOptional().openapi({
      description:
        'The next, or subsequent, password of the Wi-Fi network. This password is asynchronously transmitted to the device and is used when the password of the network changes to NextPassword. ',
    }),
    CertificateAuthorityArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager (ACM). This is used to issue certificates to the devices. ',
    }),
    TrustAnchors: TrustAnchorListSchema.exactOptional().openapi({
      description:
        'The root certificates of your authentication server that is installed on your devices and used to trust your authentication server during EAP negotiation. ',
    }),
    ClientRequestToken: ClientRequestTokenSchema,
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to be added to the specified resource. Do not provide system tags. ',
    }),
  })
  .openapi({
    required: ['NetworkProfileName', 'Ssid', 'SecurityType', 'ClientRequestToken'],
    title: 'CreateNetworkProfileRequest',
  })
  .openapi('CreateNetworkProfileRequest')

const InvalidCertificateAuthorityExceptionSchema = z
  .any()
  .openapi('InvalidCertificateAuthorityException')

const InvalidServiceLinkedRoleStateExceptionSchema = z
  .any()
  .openapi('InvalidServiceLinkedRoleStateException')

const CreateProfileResponseSchema = z
  .object({
    ProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the newly created room profile in the response.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateProfileResponse')

const ProfileNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('ProfileName')

const TimezoneSchema = z.string().min(1).max(100).openapi('Timezone')

const AddressSchema = z.string().min(1).max(500).openapi('Address')

const DistanceUnitSchema = z.enum(['METRIC', 'IMPERIAL']).openapi('DistanceUnit')

const TemperatureUnitSchema = z.enum(['FAHRENHEIT', 'CELSIUS']).openapi('TemperatureUnit')

const WakeWordSchema = z.enum(['ALEXA', 'AMAZON', 'ECHO', 'COMPUTER']).openapi('WakeWord')

const DeviceLocaleSchema = z.string().min(1).max(256).openapi('DeviceLocale')

const BooleanSchema = z.boolean().openapi('Boolean')

const MaxVolumeLimitSchema = z.int().openapi('MaxVolumeLimit')

const MinutesSchema = z.int().openapi('Minutes')

const EndOfMeetingReminderMinutesListSchema = z
  .array(MinutesSchema)
  .length(1)
  .openapi('EndOfMeetingReminderMinutesList')

const EndOfMeetingReminderTypeSchema = z
  .enum(['ANNOUNCEMENT_TIME_CHECK', 'ANNOUNCEMENT_VARIABLE_TIME_LEFT', 'CHIME', 'KNOCK'])
  .openapi('EndOfMeetingReminderType')

const CreateEndOfMeetingReminderSchema = z
  .object({
    ReminderAtMinutes: EndOfMeetingReminderMinutesListSchema.openapi({
      description: ' A range of 3 to 15 minutes that determines when the reminder begins.',
    }),
    ReminderType: EndOfMeetingReminderTypeSchema.openapi({
      description: 'The type of sound that users hear during the end of meeting reminder. ',
    }),
    Enabled: BooleanSchema.openapi({
      description: 'Whether an end of meeting reminder is enabled or not.',
    }),
  })
  .openapi({
    required: ['ReminderAtMinutes', 'ReminderType', 'Enabled'],
    description:
      'Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.',
  })
  .openapi('CreateEndOfMeetingReminder')

const CreateInstantBookingSchema = z
  .object({
    DurationInMinutes: MinutesSchema.openapi({
      description:
        'Duration between 15 and 240 minutes at increments of 15 that determines how long to book an available room when a meeting is started with Alexa.',
    }),
    Enabled: BooleanSchema.openapi({ description: 'Whether instant booking is enabled or not.' }),
  })
  .openapi({
    required: ['DurationInMinutes', 'Enabled'],
    description:
      'Creates settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available.',
  })
  .openapi('CreateInstantBooking')

const CreateRequireCheckInSchema = z
  .object({
    ReleaseAfterMinutes: MinutesSchema.openapi({
      description:
        "Duration between 5 and 20 minutes to determine when to release the room if it's not checked into.",
    }),
    Enabled: BooleanSchema.openapi({ description: 'Whether require check in is enabled or not.' }),
  })
  .openapi({
    required: ['ReleaseAfterMinutes', 'Enabled'],
    description:
      'Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.',
  })
  .openapi('CreateRequireCheckIn')

const CreateMeetingRoomConfigurationSchema = z
  .object({
    RoomUtilizationMetricsEnabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether room utilization metrics are enabled or not.',
    }),
    EndOfMeetingReminder: CreateEndOfMeetingReminderSchema.exactOptional(),
    InstantBooking: CreateInstantBookingSchema.exactOptional().openapi({
      description:
        "Settings to automatically book a room for a configured duration if it's free when joining a meeting with Alexa.",
    }),
    RequireCheckIn: CreateRequireCheckInSchema.exactOptional().openapi({
      description:
        "Settings for requiring a check in when a room is reserved. Alexa can cancel a room reservation if it's not checked into to make the room available for others. Users can check in by joining the meeting with Alexa or an AVS device, or by saying “Alexa, check in.”",
    }),
  })
  .openapi({ description: 'Creates meeting room settings of a room profile.', required: [] })
  .openapi('CreateMeetingRoomConfiguration')

const CreateProfileRequestSchema = z
  .object({
    ProfileName: ProfileNameSchema.openapi({ description: 'The name of a room profile.' }),
    Timezone: TimezoneSchema.openapi({ description: 'The time zone used by a room profile.' }),
    Address: AddressSchema.openapi({ description: 'The valid address for the room.' }),
    DistanceUnit: DistanceUnitSchema.openapi({
      description: 'The distance unit to be used by devices in the profile.',
    }),
    TemperatureUnit: TemperatureUnitSchema.openapi({
      description: 'The temperature unit to be used by devices in the profile.',
    }),
    WakeWord: WakeWordSchema.openapi({
      description: 'A wake word for Alexa, Echo, Amazon, or a computer.',
    }),
    Locale: DeviceLocaleSchema.exactOptional().openapi({
      description:
        'The locale of the room profile. (This is currently only available to a limited preview audience.)',
    }),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description: 'The user-specified token that is used during the creation of a profile.',
    }),
    SetupModeDisabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether room profile setup is enabled.',
    }),
    MaxVolumeLimit: MaxVolumeLimitSchema.exactOptional().openapi({
      description: 'The maximum volume limit for a room profile.',
    }),
    PSTNEnabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether PSTN calling is enabled.',
    }),
    DataRetentionOptIn: BooleanSchema.exactOptional().openapi({
      description: 'Whether data retention of the profile is enabled.',
    }),
    MeetingRoomConfiguration: CreateMeetingRoomConfigurationSchema.exactOptional().openapi({
      description: 'The meeting room settings of a room profile.',
    }),
    Tags: TagListSchema.exactOptional().openapi({ description: 'The tags for the profile.' }),
  })
  .openapi({
    required: ['ProfileName', 'Timezone', 'Address', 'DistanceUnit', 'TemperatureUnit', 'WakeWord'],
    title: 'CreateProfileRequest',
  })
  .openapi('CreateProfileRequest')

const CreateRoomResponseSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the newly created room in the response.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateRoomResponse')

const RoomNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('RoomName')

const RoomDescriptionSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(200)
  .openapi('RoomDescription')

const ProviderCalendarIdSchema = z.string().min(0).max(100).openapi('ProviderCalendarId')

const CreateRoomRequestSchema = z
  .object({
    RoomName: RoomNameSchema.openapi({ description: 'The name for the room.' }),
    Description: RoomDescriptionSchema.exactOptional().openapi({
      description: 'The description for the room.',
    }),
    ProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The profile ARN for the room. This is required.',
    }),
    ProviderCalendarId: ProviderCalendarIdSchema.exactOptional().openapi({
      description: 'The calendar ARN for the room.',
    }),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'A unique, user-specified identifier for this request that ensures idempotency. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({ description: 'The tags for the room.' }),
  })
  .openapi({ required: ['RoomName'], title: 'CreateRoomRequest' })
  .openapi('CreateRoomRequest')

const CreateSkillGroupResponseSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the newly created skill group in the response.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSkillGroupResponse')

const SkillGroupNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('SkillGroupName')

const SkillGroupDescriptionSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(200)
  .openapi('SkillGroupDescription')

const CreateSkillGroupRequestSchema = z
  .object({
    SkillGroupName: SkillGroupNameSchema.openapi({ description: 'The name for the skill group.' }),
    Description: SkillGroupDescriptionSchema.exactOptional().openapi({
      description: 'The description for the skill group.',
    }),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'A unique, user-specified identifier for this request that ensures idempotency. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({ description: 'The tags for the skill group.' }),
  })
  .openapi({ required: ['SkillGroupName'], title: 'CreateSkillGroupRequest' })
  .openapi('CreateSkillGroupRequest')

const CreateUserResponseSchema = z
  .object({
    UserArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the newly created user in the response.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateUserResponse')

const UserUserIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9@_+.-]*/)
  .min(1)
  .max(128)
  .openapi('UserUserId')

const UserFirstNameSchema = z
  .string()
  .min(0)
  .max(30)
  .openapi({ pattern: "([A-Za-z\\-' 0-9._]|\\p{IsLetter})*" })
  .openapi('UserFirstName')

const UserLastNameSchema = z
  .string()
  .min(0)
  .max(30)
  .openapi({ pattern: "([A-Za-z\\-' 0-9._]|\\p{IsLetter})*" })
  .openapi('UserLastName')

const EmailSchema = z
  .string()
  .regex(/([0-9a-zA-Z]([+-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z]([-\w]*[0-9a-zA-Z]+)*\.)+[a-zA-Z]{2,9})/)
  .min(1)
  .max(128)
  .openapi('Email')

const CreateUserRequestSchema = z
  .object({
    UserId: UserUserIdSchema.openapi({ description: 'The ARN for the user.' }),
    FirstName: UserFirstNameSchema.exactOptional().openapi({
      description: 'The first name for the user.',
    }),
    LastName: UserLastNameSchema.exactOptional().openapi({
      description: 'The last name for the user.',
    }),
    Email: EmailSchema.exactOptional().openapi({ description: 'The email address for the user.' }),
    ClientRequestToken: ClientRequestTokenSchema.exactOptional().openapi({
      description:
        'A unique, user-specified identifier for this request that ensures idempotency. ',
    }),
    Tags: TagListSchema.exactOptional().openapi({ description: 'The tags for the user.' }),
  })
  .openapi({ required: ['UserId'], title: 'CreateUserRequest' })
  .openapi('CreateUserRequest')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const DeleteAddressBookResponseSchema = z.looseObject({}).openapi('DeleteAddressBookResponse')

const DeleteAddressBookRequestSchema = z
  .object({
    AddressBookArn: ArnSchema.openapi({ description: 'The ARN of the address book to delete.' }),
  })
  .openapi({ required: ['AddressBookArn'], title: 'DeleteAddressBookRequest' })
  .openapi('DeleteAddressBookRequest')

const DeleteBusinessReportScheduleResponseSchema = z
  .looseObject({})
  .openapi('DeleteBusinessReportScheduleResponse')

const DeleteBusinessReportScheduleRequestSchema = z
  .object({
    ScheduleArn: ArnSchema.openapi({ description: 'The ARN of the business report schedule.' }),
  })
  .openapi({ required: ['ScheduleArn'], title: 'DeleteBusinessReportScheduleRequest' })
  .openapi('DeleteBusinessReportScheduleRequest')

const DeleteConferenceProviderResponseSchema = z
  .looseObject({})
  .openapi('DeleteConferenceProviderResponse')

const DeleteConferenceProviderRequestSchema = z
  .object({
    ConferenceProviderArn: ArnSchema.openapi({
      description: 'The ARN of the conference provider.',
    }),
  })
  .openapi({ required: ['ConferenceProviderArn'], title: 'DeleteConferenceProviderRequest' })
  .openapi('DeleteConferenceProviderRequest')

const DeleteContactResponseSchema = z.looseObject({}).openapi('DeleteContactResponse')

const DeleteContactRequestSchema = z
  .object({ ContactArn: ArnSchema.openapi({ description: 'The ARN of the contact to delete.' }) })
  .openapi({ required: ['ContactArn'], title: 'DeleteContactRequest' })
  .openapi('DeleteContactRequest')

const DeleteDeviceResponseSchema = z.looseObject({}).openapi('DeleteDeviceResponse')

const DeleteDeviceRequestSchema = z
  .object({
    DeviceArn: ArnSchema.openapi({
      description: 'The ARN of the device for which to request details.',
    }),
  })
  .openapi({ required: ['DeviceArn'], title: 'DeleteDeviceRequest' })
  .openapi('DeleteDeviceRequest')

const DeleteDeviceUsageDataResponseSchema = z
  .looseObject({})
  .openapi('DeleteDeviceUsageDataResponse')

const DeviceUsageTypeSchema = z.literal('VOICE').openapi('DeviceUsageType')

const DeleteDeviceUsageDataRequestSchema = z
  .object({
    DeviceArn: ArnSchema.openapi({ description: 'The ARN of the device.' }),
    DeviceUsageType: DeviceUsageTypeSchema.openapi({
      description: 'The type of usage data to delete.',
    }),
  })
  .openapi({ required: ['DeviceArn', 'DeviceUsageType'], title: 'DeleteDeviceUsageDataRequest' })
  .openapi('DeleteDeviceUsageDataRequest')

const DeleteGatewayGroupResponseSchema = z.looseObject({}).openapi('DeleteGatewayGroupResponse')

const DeleteGatewayGroupRequestSchema = z
  .object({
    GatewayGroupArn: ArnSchema.openapi({ description: 'The ARN of the gateway group to delete.' }),
  })
  .openapi({ required: ['GatewayGroupArn'], title: 'DeleteGatewayGroupRequest' })
  .openapi('DeleteGatewayGroupRequest')

const ResourceAssociatedExceptionSchema = z.any().openapi('ResourceAssociatedException')

const DeleteNetworkProfileResponseSchema = z.looseObject({}).openapi('DeleteNetworkProfileResponse')

const DeleteNetworkProfileRequestSchema = z
  .object({
    NetworkProfileArn: ArnSchema.openapi({
      description: 'The ARN of the network profile associated with a device.',
    }),
  })
  .openapi({ required: ['NetworkProfileArn'], title: 'DeleteNetworkProfileRequest' })
  .openapi('DeleteNetworkProfileRequest')

const DeleteProfileResponseSchema = z.looseObject({}).openapi('DeleteProfileResponse')

const DeleteProfileRequestSchema = z
  .object({
    ProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room profile to delete. Required.',
    }),
  })
  .openapi({ title: 'DeleteProfileRequest', required: [] })
  .openapi('DeleteProfileRequest')

const DeleteRoomResponseSchema = z.looseObject({}).openapi('DeleteRoomResponse')

const DeleteRoomRequestSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room to delete. Required.',
    }),
  })
  .openapi({ title: 'DeleteRoomRequest', required: [] })
  .openapi('DeleteRoomRequest')

const DeleteRoomSkillParameterResponseSchema = z
  .looseObject({})
  .openapi('DeleteRoomSkillParameterResponse')

const RoomSkillParameterKeySchema = z.string().min(1).max(256).openapi('RoomSkillParameterKey')

const DeleteRoomSkillParameterRequestSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room from which to remove the room skill parameter details.',
    }),
    SkillId: SkillIdSchema.openapi({
      description: 'The ID of the skill from which to remove the room skill parameter details.',
    }),
    ParameterKey: RoomSkillParameterKeySchema.openapi({
      description: 'The room skill parameter key for which to remove details.',
    }),
  })
  .openapi({ required: ['SkillId', 'ParameterKey'], title: 'DeleteRoomSkillParameterRequest' })
  .openapi('DeleteRoomSkillParameterRequest')

const DeleteSkillAuthorizationResponseSchema = z
  .looseObject({})
  .openapi('DeleteSkillAuthorizationResponse')

const DeleteSkillAuthorizationRequestSchema = z
  .object({
    SkillId: SkillIdSchema.openapi({ description: 'The unique identifier of a skill.' }),
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The room that the skill is authorized for.',
    }),
  })
  .openapi({ required: ['SkillId'], title: 'DeleteSkillAuthorizationRequest' })
  .openapi('DeleteSkillAuthorizationRequest')

const DeleteSkillGroupResponseSchema = z.looseObject({}).openapi('DeleteSkillGroupResponse')

const DeleteSkillGroupRequestSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the skill group to delete. Required.',
    }),
  })
  .openapi({ title: 'DeleteSkillGroupRequest', required: [] })
  .openapi('DeleteSkillGroupRequest')

const DeleteUserResponseSchema = z.looseObject({}).openapi('DeleteUserResponse')

const EnrollmentIdSchema = z.string().min(0).max(128).openapi('EnrollmentId')

const DeleteUserRequestSchema = z
  .object({
    UserArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the user to delete in the organization. Required.',
    }),
    EnrollmentId: EnrollmentIdSchema.openapi({
      description: "The ARN of the user's enrollment in the organization. Required.",
    }),
  })
  .openapi({ required: ['EnrollmentId'], title: 'DeleteUserRequest' })
  .openapi('DeleteUserRequest')

const DisassociateContactFromAddressBookResponseSchema = z
  .looseObject({})
  .openapi('DisassociateContactFromAddressBookResponse')

const DisassociateContactFromAddressBookRequestSchema = z
  .object({
    ContactArn: ArnSchema.openapi({
      description: 'The ARN of the contact to disassociate from an address book.',
    }),
    AddressBookArn: ArnSchema.openapi({
      description: 'The ARN of the address from which to disassociate the contact.',
    }),
  })
  .openapi({
    required: ['ContactArn', 'AddressBookArn'],
    title: 'DisassociateContactFromAddressBookRequest',
  })
  .openapi('DisassociateContactFromAddressBookRequest')

const DisassociateDeviceFromRoomResponseSchema = z
  .looseObject({})
  .openapi('DisassociateDeviceFromRoomResponse')

const DisassociateDeviceFromRoomRequestSchema = z
  .object({
    DeviceArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the device to disassociate from a room. Required.',
    }),
  })
  .openapi({ title: 'DisassociateDeviceFromRoomRequest', required: [] })
  .openapi('DisassociateDeviceFromRoomRequest')

const DisassociateSkillFromSkillGroupResponseSchema = z
  .looseObject({})
  .openapi('DisassociateSkillFromSkillGroupResponse')

const DisassociateSkillFromSkillGroupRequestSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The unique identifier of a skill. Required.',
    }),
    SkillId: SkillIdSchema.openapi({
      description: 'The ARN of a skill group to associate to a skill.',
    }),
  })
  .openapi({ required: ['SkillId'], title: 'DisassociateSkillFromSkillGroupRequest' })
  .openapi('DisassociateSkillFromSkillGroupRequest')

const DisassociateSkillFromUsersResponseSchema = z
  .looseObject({})
  .openapi('DisassociateSkillFromUsersResponse')

const DisassociateSkillFromUsersRequestSchema = z
  .object({
    SkillId: SkillIdSchema.openapi({
      description: ' The private skill ID you want to make unavailable for enrolled users.',
    }),
  })
  .openapi({ required: ['SkillId'], title: 'DisassociateSkillFromUsersRequest' })
  .openapi('DisassociateSkillFromUsersRequest')

const DisassociateSkillGroupFromRoomResponseSchema = z
  .looseObject({})
  .openapi('DisassociateSkillGroupFromRoomResponse')

const DisassociateSkillGroupFromRoomRequestSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the skill group to disassociate from a room. Required.',
    }),
    RoomArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the room from which the skill group is to be disassociated. Required.',
    }),
  })
  .openapi({ title: 'DisassociateSkillGroupFromRoomRequest', required: [] })
  .openapi('DisassociateSkillGroupFromRoomRequest')

const ForgetSmartHomeAppliancesResponseSchema = z
  .looseObject({})
  .openapi('ForgetSmartHomeAppliancesResponse')

const ForgetSmartHomeAppliancesRequestSchema = z
  .object({
    RoomArn: ArnSchema.openapi({
      description: 'The room that the appliances are associated with.',
    }),
  })
  .openapi({ required: ['RoomArn'], title: 'ForgetSmartHomeAppliancesRequest' })
  .openapi('ForgetSmartHomeAppliancesRequest')

const AddressBookSchema = z
  .object({
    AddressBookArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the address book.',
    }),
    Name: AddressBookNameSchema.exactOptional().openapi({
      description: 'The name of the address book.',
    }),
    Description: AddressBookDescriptionSchema.exactOptional().openapi({
      description: 'The description of the address book.',
    }),
  })
  .openapi({ description: 'An address book with attributes.', required: [] })
  .openapi('AddressBook')

const GetAddressBookResponseSchema = z
  .object({
    AddressBook: AddressBookSchema.exactOptional().openapi({
      description: 'The details of the requested address book.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetAddressBookResponse')

const GetAddressBookRequestSchema = z
  .object({
    AddressBookArn: ArnSchema.openapi({
      description: 'The ARN of the address book for which to request details.',
    }),
  })
  .openapi({ required: ['AddressBookArn'], title: 'GetAddressBookRequest' })
  .openapi('GetAddressBookRequest')

const ConferencePreferenceSchema = z
  .object({
    DefaultConferenceProviderArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the default conference provider.',
    }),
  })
  .openapi({
    description:
      'The default conference provider that is used if no other scheduled meetings are detected.',
    required: [],
  })
  .openapi('ConferencePreference')

const GetConferencePreferenceResponseSchema = z
  .object({
    Preference: ConferencePreferenceSchema.exactOptional().openapi({
      description: 'The conference preference.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConferencePreferenceResponse')

const GetConferencePreferenceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetConferencePreferenceRequest' })
  .openapi('GetConferencePreferenceRequest')

const ConferenceProviderSchema = z
  .object({
    Arn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the newly created conference provider.',
    }),
    Name: ConferenceProviderNameSchema.exactOptional().openapi({
      description: 'The name of the conference provider.',
    }),
    Type: ConferenceProviderTypeSchema.exactOptional().openapi({
      description: 'The type of conference providers.',
    }),
    IPDialIn: IPDialInSchema.exactOptional().openapi({
      description: 'The IP endpoint and protocol for calling.',
    }),
    PSTNDialIn: PSTNDialInSchema.exactOptional().openapi({
      description: 'The information for PSTN conferencing.',
    }),
    MeetingSetting: MeetingSettingSchema.exactOptional().openapi({
      description: 'The meeting settings for the conference provider.',
    }),
  })
  .openapi({
    description:
      'An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom. ',
    required: [],
  })
  .openapi('ConferenceProvider')

const GetConferenceProviderResponseSchema = z
  .object({
    ConferenceProvider: ConferenceProviderSchema.exactOptional().openapi({
      description: 'The conference provider.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetConferenceProviderResponse')

const GetConferenceProviderRequestSchema = z
  .object({
    ConferenceProviderArn: ArnSchema.openapi({
      description: 'The ARN of the newly created conference provider.',
    }),
  })
  .openapi({ required: ['ConferenceProviderArn'], title: 'GetConferenceProviderRequest' })
  .openapi('GetConferenceProviderRequest')

const ContactSchema = z
  .object({
    ContactArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the contact.' }),
    DisplayName: ContactNameSchema.exactOptional().openapi({
      description: 'The name of the contact to display on the console.',
    }),
    FirstName: ContactNameSchema.exactOptional().openapi({
      description: 'The first name of the contact, used to call the contact on the device.',
    }),
    LastName: ContactNameSchema.exactOptional().openapi({
      description: 'The last name of the contact, used to call the contact on the device.',
    }),
    PhoneNumber: RawPhoneNumberSchema.exactOptional().openapi({
      description:
        'The phone number of the contact. The phone number type defaults to WORK. You can either specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which lets you specify the phone number type and multiple numbers.',
    }),
    PhoneNumbers: PhoneNumberListSchema.exactOptional().openapi({
      description: 'The list of phone numbers for the contact.',
    }),
    SipAddresses: SipAddressListSchema.exactOptional().openapi({
      description: 'The list of SIP addresses for the contact.',
    }),
  })
  .openapi({ description: 'A contact with attributes.', required: [] })
  .openapi('Contact')

const GetContactResponseSchema = z
  .object({
    Contact: ContactSchema.exactOptional().openapi({
      description: 'The details of the requested contact.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetContactResponse')

const GetContactRequestSchema = z
  .object({
    ContactArn: ArnSchema.openapi({
      description: 'The ARN of the contact for which to request details.',
    }),
  })
  .openapi({ required: ['ContactArn'], title: 'GetContactRequest' })
  .openapi('GetContactRequest')

const DeviceSerialNumberSchema = z
  .string()
  .regex(/[a-zA-Z0-9]{1,200}/)
  .openapi('DeviceSerialNumber')

const DeviceTypeSchema = z
  .string()
  .regex(/[a-zA-Z0-9]{1,200}/)
  .openapi('DeviceType')

const DeviceNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(2)
  .max(100)
  .openapi('DeviceName')

const SoftwareVersionSchema = z.string().openapi('SoftwareVersion')

const MacAddressSchema = z.string().openapi('MacAddress')

const DeviceStatusSchema = z
  .enum(['READY', 'PENDING', 'WAS_OFFLINE', 'DEREGISTERED', 'FAILED'])
  .openapi('DeviceStatus')

const FeatureSchema = z
  .enum([
    'BLUETOOTH',
    'VOLUME',
    'NOTIFICATIONS',
    'LISTS',
    'SKILLS',
    'NETWORK_PROFILE',
    'SETTINGS',
    'ALL',
  ])
  .openapi('Feature')

const DeviceStatusDetailCodeSchema = z
  .enum([
    'DEVICE_SOFTWARE_UPDATE_NEEDED',
    'DEVICE_WAS_OFFLINE',
    'CREDENTIALS_ACCESS_FAILURE',
    'TLS_VERSION_MISMATCH',
    'ASSOCIATION_REJECTION',
    'AUTHENTICATION_FAILURE',
    'DHCP_FAILURE',
    'INTERNET_UNAVAILABLE',
    'DNS_FAILURE',
    'UNKNOWN_FAILURE',
    'CERTIFICATE_ISSUING_LIMIT_EXCEEDED',
    'INVALID_CERTIFICATE_AUTHORITY',
    'NETWORK_PROFILE_NOT_FOUND',
    'INVALID_PASSWORD_STATE',
    'PASSWORD_NOT_FOUND',
    'PASSWORD_MANAGER_ACCESS_DENIED',
    'CERTIFICATE_AUTHORITY_ACCESS_DENIED',
  ])
  .openapi('DeviceStatusDetailCode')

const DeviceStatusDetailSchema = z
  .object({
    Feature: FeatureSchema.exactOptional().openapi({
      description: 'The list of available features on the device.',
    }),
    Code: DeviceStatusDetailCodeSchema.exactOptional().openapi({
      description: 'The device status detail code.',
    }),
  })
  .openapi({ description: 'Details of a device’s status.', required: [] })
  .openapi('DeviceStatusDetail')

const DeviceStatusDetailsSchema = z.array(DeviceStatusDetailSchema).openapi('DeviceStatusDetails')

const ConnectionStatusSchema = z.enum(['ONLINE', 'OFFLINE']).openapi('ConnectionStatus')

const ConnectionStatusUpdatedTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('ConnectionStatusUpdatedTime')

const DeviceStatusInfoSchema = z
  .object({
    DeviceStatusDetails: DeviceStatusDetailsSchema.exactOptional().openapi({
      description: 'One or more device status detail descriptions.',
    }),
    ConnectionStatus: ConnectionStatusSchema.exactOptional().openapi({
      description: 'The latest available information about the connection status of a device. ',
    }),
    ConnectionStatusUpdatedTime: ConnectionStatusUpdatedTimeSchema.exactOptional().openapi({
      description: 'The time (in epoch) when the device connection status changed.',
    }),
  })
  .openapi({ description: "Detailed information about a device's status.", required: [] })
  .openapi('DeviceStatusInfo')

const CertificateTimeSchema = z.iso.datetime({ offset: true }).openapi('CertificateTime')

const DeviceNetworkProfileInfoSchema = z
  .object({
    NetworkProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the network profile associated with a device.',
    }),
    CertificateArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the certificate associated with a device.',
    }),
    CertificateExpirationTime: CertificateTimeSchema.exactOptional().openapi({
      description: 'The time (in epoch) when the certificate expires.',
    }),
  })
  .openapi({ description: "Detailed information about a device's network profile.", required: [] })
  .openapi('DeviceNetworkProfileInfo')

const DeviceSchema = z
  .object({
    DeviceArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of a device.' }),
    DeviceSerialNumber: DeviceSerialNumberSchema.exactOptional().openapi({
      description: 'The serial number of a device.',
    }),
    DeviceType: DeviceTypeSchema.exactOptional().openapi({ description: 'The type of a device.' }),
    DeviceName: DeviceNameSchema.exactOptional().openapi({ description: 'The name of a device.' }),
    SoftwareVersion: SoftwareVersionSchema.exactOptional().openapi({
      description: 'The software version of a device.',
    }),
    MacAddress: MacAddressSchema.exactOptional().openapi({
      description: 'The MAC address of a device.',
    }),
    RoomArn: ArnSchema.exactOptional().openapi({ description: 'The room ARN of a device.' }),
    DeviceStatus: DeviceStatusSchema.exactOptional().openapi({
      description:
        'The status of a device. If the status is not READY, check the DeviceStatusInfo value for details.',
    }),
    DeviceStatusInfo: DeviceStatusInfoSchema.exactOptional().openapi({
      description: "Detailed information about a device's status.",
    }),
    NetworkProfileInfo: DeviceNetworkProfileInfoSchema.exactOptional().openapi({
      description: "Detailed information about a device's network profile.",
    }),
  })
  .openapi({ description: 'A device with attributes.', required: [] })
  .openapi('Device')

const GetDeviceResponseSchema = z
  .object({
    Device: DeviceSchema.exactOptional().openapi({
      description: 'The details of the device requested. Required.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetDeviceResponse')

const GetDeviceRequestSchema = z
  .object({
    DeviceArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the device for which to request details. Required.',
    }),
  })
  .openapi({ title: 'GetDeviceRequest', required: [] })
  .openapi('GetDeviceRequest')

const GatewayNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(253)
  .openapi('GatewayName')

const GatewayDescriptionSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(0)
  .max(200)
  .openapi('GatewayDescription')

const GatewayVersionSchema = z.string().min(1).max(50).openapi('GatewayVersion')

const GatewaySchema = z
  .object({
    Arn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the gateway.' }),
    Name: GatewayNameSchema.exactOptional().openapi({ description: 'The name of the gateway.' }),
    Description: GatewayDescriptionSchema.exactOptional().openapi({
      description: 'The description of the gateway.',
    }),
    GatewayGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the gateway group that the gateway is associated to.',
    }),
    SoftwareVersion: GatewayVersionSchema.exactOptional().openapi({
      description:
        'The software version of the gateway. The gateway automatically updates its software version during normal operation.',
    }),
  })
  .openapi({ description: 'The details of the gateway. ', required: [] })
  .openapi('Gateway')

const GetGatewayResponseSchema = z
  .object({
    Gateway: GatewaySchema.exactOptional().openapi({ description: 'The details of the gateway.' }),
  })
  .openapi({ required: [] })
  .openapi('GetGatewayResponse')

const GetGatewayRequestSchema = z
  .object({ GatewayArn: ArnSchema.openapi({ description: 'The ARN of the gateway to get.' }) })
  .openapi({ required: ['GatewayArn'], title: 'GetGatewayRequest' })
  .openapi('GetGatewayRequest')

const GatewayGroupSchema = z
  .object({
    Arn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the gateway group.' }),
    Name: GatewayGroupNameSchema.exactOptional().openapi({
      description: 'The name of the gateway group.',
    }),
    Description: GatewayGroupDescriptionSchema.exactOptional().openapi({
      description: 'The description of the gateway group.',
    }),
  })
  .openapi({ description: 'The details of the gateway group.', required: [] })
  .openapi('GatewayGroup')

const GetGatewayGroupResponseSchema = z
  .object({ GatewayGroup: GatewayGroupSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetGatewayGroupResponse')

const GetGatewayGroupRequestSchema = z
  .object({
    GatewayGroupArn: ArnSchema.openapi({ description: 'The ARN of the gateway group to get.' }),
  })
  .openapi({ required: ['GatewayGroupArn'], title: 'GetGatewayGroupRequest' })
  .openapi('GetGatewayGroupRequest')

const OrganizationNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('OrganizationName')

const ShortSkillIdListSchema = z.array(SkillIdSchema).min(0).max(3).openapi('ShortSkillIdList')

const GetInvitationConfigurationResponseSchema = z
  .object({
    OrganizationName: OrganizationNameSchema.exactOptional().openapi({
      description: 'The name of the organization sending the enrollment invite to a user.',
    }),
    ContactEmail: EmailSchema.exactOptional().openapi({
      description:
        'The email ID of the organization or individual contact that the enrolled user can use. ',
    }),
    PrivateSkillIds: ShortSkillIdListSchema.exactOptional().openapi({
      description:
        'The list of private skill IDs that you want to recommend to the user to enable in the invitation.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetInvitationConfigurationResponse')

const GetInvitationConfigurationRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetInvitationConfigurationRequest' })
  .openapi('GetInvitationConfigurationRequest')

const NetworkProfileSchema = z
  .object({
    NetworkProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the network profile associated with a device.',
    }),
    NetworkProfileName: NetworkProfileNameSchema.exactOptional().openapi({
      description: 'The name of the network profile associated with a device.',
    }),
    Description: NetworkProfileDescriptionSchema.exactOptional().openapi({
      description: "Detailed information about a device's network profile.",
    }),
    Ssid: NetworkSsidSchema.exactOptional().openapi({
      description: 'The SSID of the Wi-Fi network.',
    }),
    SecurityType: NetworkSecurityTypeSchema.exactOptional().openapi({
      description:
        'The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK, WEP, or OPEN.',
    }),
    EapMethod: NetworkEapMethodSchema.exactOptional().openapi({
      description:
        'The authentication standard that is used in the EAP framework. Currently, EAP_TLS is supported. ',
    }),
    CurrentPassword: CurrentWiFiPasswordSchema.exactOptional().openapi({
      description: 'The current password of the Wi-Fi network.',
    }),
    NextPassword: NextWiFiPasswordSchema.exactOptional().openapi({
      description:
        'The next, or subsequent, password of the Wi-Fi network. This password is asynchronously transmitted to the device and is used when the password of the network changes to NextPassword. ',
    }),
    CertificateAuthorityArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager (ACM). This is used to issue certificates to the devices. ',
    }),
    TrustAnchors: TrustAnchorListSchema.exactOptional().openapi({
      description:
        'The root certificates of your authentication server, which is installed on your devices and used to trust your authentication server during EAP negotiation.',
    }),
  })
  .openapi({ description: 'The network profile associated with a device.', required: [] })
  .openapi('NetworkProfile')

const GetNetworkProfileResponseSchema = z
  .object({
    NetworkProfile: NetworkProfileSchema.exactOptional().openapi({
      description: 'The network profile associated with a device.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetNetworkProfileResponse')

const GetNetworkProfileRequestSchema = z
  .object({
    NetworkProfileArn: ArnSchema.openapi({
      description: 'The ARN of the network profile associated with a device.',
    }),
  })
  .openapi({ required: ['NetworkProfileArn'], title: 'GetNetworkProfileRequest' })
  .openapi('GetNetworkProfileRequest')

const InvalidSecretsManagerResourceExceptionSchema = z
  .any()
  .openapi('InvalidSecretsManagerResourceException')

const EndOfMeetingReminderSchema = z
  .object({
    ReminderAtMinutes: EndOfMeetingReminderMinutesListSchema.exactOptional().openapi({
      description: 'A range of 3 to 15 minutes that determines when the reminder begins.',
    }),
    ReminderType: EndOfMeetingReminderTypeSchema.exactOptional().openapi({
      description: 'The type of sound that users hear during the end of meeting reminder. ',
    }),
    Enabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether an end of meeting reminder is enabled or not.',
    }),
  })
  .openapi({
    description:
      'Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. ',
    required: [],
  })
  .openapi('EndOfMeetingReminder')

const InstantBookingSchema = z
  .object({
    DurationInMinutes: MinutesSchema.exactOptional().openapi({
      description:
        'Duration between 15 and 240 minutes at increments of 15 that determines how long to book an available room when a meeting is started with Alexa. ',
    }),
    Enabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether instant booking is enabled or not.',
    }),
  })
  .openapi({
    description:
      'Settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available.',
    required: [],
  })
  .openapi('InstantBooking')

const RequireCheckInSchema = z
  .object({
    ReleaseAfterMinutes: MinutesSchema.exactOptional().openapi({
      description:
        "Duration between 5 and 20 minutes to determine when to release the room if it's not checked into. ",
    }),
    Enabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether require check in is enabled or not.',
    }),
  })
  .openapi({
    description:
      'Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. ',
    required: [],
  })
  .openapi('RequireCheckIn')

const MeetingRoomConfigurationSchema = z
  .object({
    RoomUtilizationMetricsEnabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether room utilization metrics are enabled or not.',
    }),
    EndOfMeetingReminder: EndOfMeetingReminderSchema.exactOptional().openapi({
      description:
        'Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. ',
    }),
    InstantBooking: InstantBookingSchema.exactOptional().openapi({
      description:
        'Settings to automatically book the room if available for a configured duration when joining a meeting with Alexa. ',
    }),
    RequireCheckIn: RequireCheckInSchema.exactOptional().openapi({
      description:
        "Settings for requiring a check in when a room is reserved. Alexa can cancel a room reservation if it's not checked into. This makes the room available for others. Users can check in by joining the meeting with Alexa or an AVS device, or by saying “Alexa, check in.” ",
    }),
  })
  .openapi({ description: 'Meeting room settings of a room profile.', required: [] })
  .openapi('MeetingRoomConfiguration')

const ProfileSchema = z
  .object({
    ProfileArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of a room profile.' }),
    ProfileName: ProfileNameSchema.exactOptional().openapi({
      description: 'The name of a room profile.',
    }),
    IsDefault: BooleanSchema.exactOptional().openapi({
      description: 'Retrieves if the profile is default or not.',
    }),
    Address: AddressSchema.exactOptional().openapi({
      description: 'The address of a room profile.',
    }),
    Timezone: TimezoneSchema.exactOptional().openapi({
      description: 'The time zone of a room profile.',
    }),
    DistanceUnit: DistanceUnitSchema.exactOptional().openapi({
      description: 'The distance unit of a room profile.',
    }),
    TemperatureUnit: TemperatureUnitSchema.exactOptional().openapi({
      description: 'The temperature unit of a room profile.',
    }),
    WakeWord: WakeWordSchema.exactOptional().openapi({
      description: 'The wake word of a room profile.',
    }),
    Locale: DeviceLocaleSchema.exactOptional().openapi({
      description:
        'The locale of a room profile. (This is currently available only to a limited preview audience.)',
    }),
    SetupModeDisabled: BooleanSchema.exactOptional().openapi({
      description: 'The setup mode of a room profile.',
    }),
    MaxVolumeLimit: MaxVolumeLimitSchema.exactOptional().openapi({
      description: 'The max volume limit of a room profile.',
    }),
    PSTNEnabled: BooleanSchema.exactOptional().openapi({
      description: 'The PSTN setting of a room profile.',
    }),
    DataRetentionOptIn: BooleanSchema.exactOptional().openapi({
      description: 'Whether data retention of the profile is enabled.',
    }),
    AddressBookArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the address book.',
    }),
    MeetingRoomConfiguration: MeetingRoomConfigurationSchema.exactOptional().openapi({
      description: 'Meeting room settings of a room profile.',
    }),
  })
  .openapi({ description: 'A room profile with attributes.', required: [] })
  .openapi('Profile')

const GetProfileResponseSchema = z
  .object({
    Profile: ProfileSchema.exactOptional().openapi({
      description: 'The details of the room profile requested. Required.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetProfileResponse')

const GetProfileRequestSchema = z
  .object({
    ProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room profile for which to request details. Required.',
    }),
  })
  .openapi({ title: 'GetProfileRequest', required: [] })
  .openapi('GetProfileRequest')

const RoomSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of a room.' }),
    RoomName: RoomNameSchema.exactOptional().openapi({ description: 'The name of a room.' }),
    Description: RoomDescriptionSchema.exactOptional().openapi({
      description: 'The description of a room.',
    }),
    ProviderCalendarId: ProviderCalendarIdSchema.exactOptional().openapi({
      description: 'The provider calendar ARN of a room.',
    }),
    ProfileArn: ArnSchema.exactOptional().openapi({ description: 'The profile ARN of a room.' }),
  })
  .openapi({ description: 'A room with attributes.', required: [] })
  .openapi('Room')

const GetRoomResponseSchema = z
  .object({
    Room: RoomSchema.exactOptional().openapi({ description: 'The details of the room requested.' }),
  })
  .openapi({ required: [] })
  .openapi('GetRoomResponse')

const GetRoomRequestSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room for which to request details. Required.',
    }),
  })
  .openapi({ title: 'GetRoomRequest', required: [] })
  .openapi('GetRoomRequest')

const RoomSkillParameterValueSchema = z.string().min(1).max(512).openapi('RoomSkillParameterValue')

const RoomSkillParameterSchema = z
  .object({
    ParameterKey: RoomSkillParameterKeySchema.openapi({
      description:
        'The parameter key of a room skill parameter. ParameterKey is an enumerated type that only takes “DEFAULT” or “SCOPE” as valid values.',
    }),
    ParameterValue: RoomSkillParameterValueSchema.openapi({
      description: 'The parameter value of a room skill parameter.',
    }),
  })
  .openapi({
    required: ['ParameterKey', 'ParameterValue'],
    description: 'A skill parameter associated with a room.',
  })
  .openapi('RoomSkillParameter')

const GetRoomSkillParameterResponseSchema = z
  .object({
    RoomSkillParameter: RoomSkillParameterSchema.exactOptional().openapi({
      description: 'The details of the room skill parameter requested. Required.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetRoomSkillParameterResponse')

const GetRoomSkillParameterRequestSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room from which to get the room skill parameter details. ',
    }),
    SkillId: SkillIdSchema.openapi({
      description:
        'The ARN of the skill from which to get the room skill parameter details. Required.',
    }),
    ParameterKey: RoomSkillParameterKeySchema.openapi({
      description: 'The room skill parameter key for which to get details. Required.',
    }),
  })
  .openapi({ required: ['SkillId', 'ParameterKey'], title: 'GetRoomSkillParameterRequest' })
  .openapi('GetRoomSkillParameterRequest')

const SkillGroupSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of a skill group.' }),
    SkillGroupName: SkillGroupNameSchema.exactOptional().openapi({
      description: 'The name of a skill group.',
    }),
    Description: SkillGroupDescriptionSchema.exactOptional().openapi({
      description: 'The description of a skill group.',
    }),
  })
  .openapi({ description: 'A skill group with attributes.', required: [] })
  .openapi('SkillGroup')

const GetSkillGroupResponseSchema = z
  .object({
    SkillGroup: SkillGroupSchema.exactOptional().openapi({
      description: 'The details of the skill group requested. Required.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSkillGroupResponse')

const GetSkillGroupRequestSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the skill group for which to get details. Required.',
    }),
  })
  .openapi({ title: 'GetSkillGroupRequest', required: [] })
  .openapi('GetSkillGroupRequest')

const BusinessReportStatusSchema = z
  .enum(['RUNNING', 'SUCCEEDED', 'FAILED'])
  .openapi('BusinessReportStatus')

const BusinessReportFailureCodeSchema = z
  .enum(['ACCESS_DENIED', 'NO_SUCH_BUCKET', 'INTERNAL_FAILURE'])
  .openapi('BusinessReportFailureCode')

const BusinessReportS3PathSchema = z.string().openapi('BusinessReportS3Path')

const BusinessReportS3LocationSchema = z
  .object({
    Path: BusinessReportS3PathSchema.exactOptional().openapi({
      description: 'The path of the business report.',
    }),
    BucketName: CustomerS3BucketNameSchema.exactOptional().openapi({
      description: 'The S3 bucket name of the output reports.',
    }),
  })
  .openapi({ description: 'The S3 location of the output reports.', required: [] })
  .openapi('BusinessReportS3Location')

const BusinessReportDeliveryTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('BusinessReportDeliveryTime')

const BusinessReportDownloadUrlSchema = z.string().openapi('BusinessReportDownloadUrl')

const BusinessReportSchema = z
  .object({
    Status: BusinessReportStatusSchema.exactOptional().openapi({
      description: 'The status of the report generation execution (RUNNING, SUCCEEDED, or FAILED).',
    }),
    FailureCode: BusinessReportFailureCodeSchema.exactOptional().openapi({
      description: 'The failure code.',
    }),
    S3Location: BusinessReportS3LocationSchema.exactOptional().openapi({
      description: 'The S3 location of the output reports.',
    }),
    DeliveryTime: BusinessReportDeliveryTimeSchema.exactOptional().openapi({
      description: 'The time of report delivery.',
    }),
    DownloadUrl: BusinessReportDownloadUrlSchema.exactOptional().openapi({
      description: 'The download link where a user can download the report.',
    }),
  })
  .openapi({ description: 'Usage report with specified parameters.', required: [] })
  .openapi('BusinessReport')

const BusinessReportScheduleSchema = z
  .object({
    ScheduleArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the business report schedule.',
    }),
    ScheduleName: BusinessReportScheduleNameSchema.exactOptional().openapi({
      description: 'The name identifier of the schedule.',
    }),
    S3BucketName: CustomerS3BucketNameSchema.exactOptional().openapi({
      description: 'The S3 bucket name of the output reports.',
    }),
    S3KeyPrefix: S3KeyPrefixSchema.exactOptional().openapi({
      description: 'The S3 key where the report is delivered.',
    }),
    Format: BusinessReportFormatSchema.exactOptional().openapi({
      description:
        'The format of the generated report (individual CSV files or zipped files of individual files).',
    }),
    ContentRange: BusinessReportContentRangeSchema.exactOptional().openapi({
      description: 'The content range of the reports.',
    }),
    Recurrence: BusinessReportRecurrenceSchema.exactOptional().openapi({
      description: 'The recurrence of the reports.',
    }),
    LastBusinessReport: BusinessReportSchema.exactOptional().openapi({
      description:
        'The details of the last business report delivery for a specified time interval.',
    }),
  })
  .openapi({ description: 'The schedule of the usage report.', required: [] })
  .openapi('BusinessReportSchedule')

const BusinessReportScheduleListSchema = z
  .array(BusinessReportScheduleSchema)
  .openapi('BusinessReportScheduleList')

const NextTokenSchema = z.string().min(1).max(1100).openapi('NextToken')

const ListBusinessReportSchedulesResponseSchema = z
  .object({
    BusinessReportSchedules: BusinessReportScheduleListSchema.exactOptional().openapi({
      description: 'The schedule of the reports.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token used to list the remaining schedules from the previous API call.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListBusinessReportSchedulesResponse')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const ListBusinessReportSchedulesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token used to list the remaining schedules from the previous API call.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of schedules listed in the call.',
    }),
  })
  .openapi({ title: 'ListBusinessReportSchedulesRequest', required: [] })
  .openapi('ListBusinessReportSchedulesRequest')

const ConferenceProvidersListSchema = z
  .array(ConferenceProviderSchema)
  .openapi('ConferenceProvidersList')

const ListConferenceProvidersResponseSchema = z
  .object({
    ConferenceProviders: ConferenceProvidersListSchema.exactOptional().openapi({
      description: 'The conference providers.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The tokens used for pagination.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListConferenceProvidersResponse')

const ListConferenceProvidersRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The tokens used for pagination.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of conference providers to be returned, per paginated calls.',
    }),
  })
  .openapi({ title: 'ListConferenceProvidersRequest', required: [] })
  .openapi('ListConferenceProvidersRequest')

const DeviceEventTypeSchema = z
  .enum(['CONNECTION_STATUS', 'DEVICE_STATUS'])
  .openapi('DeviceEventType')

const DeviceEventValueSchema = z.string().openapi('DeviceEventValue')

const DeviceEventTimeSchema = z.iso.datetime({ offset: true }).openapi('DeviceEventTime')

const DeviceEventSchema = z
  .object({
    Type: DeviceEventTypeSchema.exactOptional().openapi({
      description: 'The type of device event.',
    }),
    Value: DeviceEventValueSchema.exactOptional().openapi({
      description: 'The value of the event.',
    }),
    Timestamp: DeviceEventTimeSchema.exactOptional().openapi({
      description: 'The time (in epoch) when the event occurred. ',
    }),
  })
  .openapi({ description: 'The list of device events.', required: [] })
  .openapi('DeviceEvent')

const DeviceEventListSchema = z.array(DeviceEventSchema).openapi('DeviceEventList')

const ListDeviceEventsResponseSchema = z
  .object({
    DeviceEvents: DeviceEventListSchema.exactOptional().openapi({
      description: 'The device events requested for the device ARN.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListDeviceEventsResponse')

const ListDeviceEventsRequestSchema = z
  .object({
    DeviceArn: ArnSchema.openapi({ description: 'The ARN of a device.' }),
    EventType: DeviceEventTypeSchema.exactOptional().openapi({
      description:
        "The event type to filter device events. If EventType isn't specified, this returns a list of all device events in reverse chronological order. If EventType is specified, this returns a list of device events for that EventType in reverse chronological order. ",
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response only includes results beyond the token, up to the value specified by MaxResults. When the end of results is reached, the response has a value of null.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. The default value is 50. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. ',
    }),
  })
  .openapi({ required: ['DeviceArn'], title: 'ListDeviceEventsRequest' })
  .openapi('ListDeviceEventsRequest')

const GatewayGroupSummarySchema = z
  .object({
    Arn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the gateway group.' }),
    Name: GatewayGroupNameSchema.exactOptional().openapi({
      description: 'The name of the gateway group.',
    }),
    Description: GatewayGroupDescriptionSchema.exactOptional().openapi({
      description: 'The description of the gateway group.',
    }),
  })
  .openapi({ description: 'The summary of a gateway group.', required: [] })
  .openapi('GatewayGroupSummary')

const GatewayGroupSummariesSchema = z
  .array(GatewayGroupSummarySchema)
  .openapi('GatewayGroupSummaries')

const ListGatewayGroupsResponseSchema = z
  .object({
    GatewayGroups: GatewayGroupSummariesSchema.exactOptional().openapi({
      description: 'The gateway groups in the list.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token used to paginate though multiple pages of gateway group summaries.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListGatewayGroupsResponse')

const ListGatewayGroupsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token used to paginate though multiple pages of gateway group summaries.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of gateway group summaries to return. The default is 50.',
    }),
  })
  .openapi({ title: 'ListGatewayGroupsRequest', required: [] })
  .openapi('ListGatewayGroupsRequest')

const GatewaySummarySchema = z
  .object({
    Arn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the gateway.' }),
    Name: GatewayNameSchema.exactOptional().openapi({ description: 'The name of the gateway.' }),
    Description: GatewayDescriptionSchema.exactOptional().openapi({
      description: 'The description of the gateway.',
    }),
    GatewayGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the gateway group that the gateway is associated to.',
    }),
    SoftwareVersion: GatewayVersionSchema.exactOptional().openapi({
      description:
        'The software version of the gateway. The gateway automatically updates its software version during normal operation.',
    }),
  })
  .openapi({ description: 'The summary of a gateway.', required: [] })
  .openapi('GatewaySummary')

const GatewaySummariesSchema = z.array(GatewaySummarySchema).openapi('GatewaySummaries')

const ListGatewaysResponseSchema = z
  .object({
    Gateways: GatewaySummariesSchema.exactOptional().openapi({
      description: 'The gateways in the list.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token used to paginate though multiple pages of gateway summaries.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListGatewaysResponse')

const ListGatewaysRequestSchema = z
  .object({
    GatewayGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The gateway group ARN for which to list gateways.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token used to paginate though multiple pages of gateway summaries.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of gateway summaries to return. The default is 50.',
    }),
  })
  .openapi({ title: 'ListGatewaysRequest', required: [] })
  .openapi('ListGatewaysRequest')

const SkillNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('SkillName')

const Boolean2Schema = z.boolean().openapi('Boolean2')

const EnablementTypeSchema = z.enum(['ENABLED', 'PENDING']).openapi('EnablementType')

const SkillTypeSchema = z.enum(['PUBLIC', 'PRIVATE']).openapi('SkillType')

const SkillSummarySchema = z
  .object({
    SkillId: SkillIdSchema.exactOptional().openapi({
      description: 'The ARN of the skill summary.',
    }),
    SkillName: SkillNameSchema.exactOptional().openapi({ description: 'The name of the skill.' }),
    SupportsLinking: Boolean2Schema.exactOptional().openapi({
      description: 'Linking support for a skill.',
    }),
    EnablementType: EnablementTypeSchema.exactOptional().openapi({
      description:
        "Whether the skill is enabled under the user's account, or if it requires linking to be used.",
    }),
    SkillType: SkillTypeSchema.exactOptional().openapi({
      description: 'Whether the skill is publicly available or is a private skill.',
    }),
  })
  .openapi({ description: 'The summary of skills.', required: [] })
  .openapi('SkillSummary')

const SkillSummaryListSchema = z.array(SkillSummarySchema).openapi('SkillSummaryList')

const ListSkillsResponseSchema = z
  .object({
    SkillSummaries: SkillSummaryListSchema.exactOptional().openapi({
      description: 'The list of enabled skills requested. Required.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSkillsResponse')

const EnablementTypeFilterSchema = z.enum(['ENABLED', 'PENDING']).openapi('EnablementTypeFilter')

const SkillTypeFilterSchema = z.enum(['PUBLIC', 'PRIVATE', 'ALL']).openapi('SkillTypeFilter')

const SkillListMaxResultsSchema = z.int().min(1).max(10).openapi('SkillListMaxResults')

const ListSkillsRequestSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the skill group for which to list enabled skills.',
    }),
    EnablementType: EnablementTypeFilterSchema.exactOptional().openapi({
      description: "Whether the skill is enabled under the user's account.",
    }),
    SkillType: SkillTypeFilterSchema.exactOptional().openapi({
      description: 'Whether the skill is publicly available or is a private skill.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
    }),
    MaxResults: SkillListMaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.',
    }),
  })
  .openapi({ title: 'ListSkillsRequest', required: [] })
  .openapi('ListSkillsRequest')

const CategoryIdSchema = z.int().min(1).openapi('CategoryId')

const CategoryNameSchema = z.string().openapi('CategoryName')

const CategorySchema = z
  .object({
    CategoryId: CategoryIdSchema.exactOptional().openapi({
      description: 'The ID of the skill store category.',
    }),
    CategoryName: CategoryNameSchema.exactOptional().openapi({
      description: 'The name of the skill store category.',
    }),
  })
  .openapi({
    description:
      'The skill store category that is shown. Alexa skills are assigned a specific skill category during creation, such as News, Social, and Sports.',
    required: [],
  })
  .openapi('Category')

const CategoryListSchema = z.array(CategorySchema).openapi('CategoryList')

const ListSkillsStoreCategoriesResponseSchema = z
  .object({
    CategoryList: CategoryListSchema.exactOptional().openapi({
      description: 'The list of categories.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The tokens used for pagination.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSkillsStoreCategoriesResponse')

const ListSkillsStoreCategoriesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The tokens used for pagination.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of categories returned, per paginated calls.',
    }),
  })
  .openapi({ title: 'ListSkillsStoreCategoriesRequest', required: [] })
  .openapi('ListSkillsStoreCategoriesRequest')

const ShortDescriptionSchema = z.string().openapi('ShortDescription')

const IconUrlSchema = z.string().openapi('IconUrl')

const UtteranceSchema = z.string().openapi('Utterance')

const SampleUtterancesSchema = z.array(UtteranceSchema).openapi('SampleUtterances')

const ProductDescriptionSchema = z.string().openapi('ProductDescription')

const InvocationPhraseSchema = z.string().openapi('InvocationPhrase')

const ReleaseDateSchema = z.string().openapi('ReleaseDate')

const EndUserLicenseAgreementSchema = z.string().openapi('EndUserLicenseAgreement')

const GenericKeywordSchema = z.string().openapi('GenericKeyword')

const GenericKeywordsSchema = z.array(GenericKeywordSchema).openapi('GenericKeywords')

const BulletPointSchema = z.string().openapi('BulletPoint')

const BulletPointsSchema = z.array(BulletPointSchema).openapi('BulletPoints')

const NewInThisVersionBulletPointsSchema = z
  .array(BulletPointSchema)
  .openapi('NewInThisVersionBulletPoints')

const SkillStoreTypeSchema = z.string().openapi('SkillStoreType')

const SkillTypesSchema = z.array(SkillStoreTypeSchema).openapi('SkillTypes')

const ReviewValueSchema = z.string().openapi('ReviewValue')

const ReviewsSchema = z.record(z.string(), ReviewValueSchema).openapi('Reviews')

const DeveloperNameSchema = z.string().openapi('DeveloperName')

const PrivacyPolicySchema = z.string().openapi('PrivacyPolicy')

const UrlSchema = z.string().openapi('Url')

const DeveloperInfoSchema = z
  .object({
    DeveloperName: DeveloperNameSchema.exactOptional().openapi({
      description: 'The name of the developer.',
    }),
    PrivacyPolicy: PrivacyPolicySchema.exactOptional().openapi({
      description: 'The URL of the privacy policy.',
    }),
    Email: EmailSchema.exactOptional().openapi({ description: 'The email of the developer.' }),
    Url: UrlSchema.exactOptional().openapi({ description: 'The website of the developer.' }),
  })
  .openapi({
    description: 'The details about the developer that published the skill.',
    required: [],
  })
  .openapi('DeveloperInfo')

const SkillDetailsSchema = z
  .object({
    ProductDescription: ProductDescriptionSchema.exactOptional().openapi({
      description: 'The description of the product.',
    }),
    InvocationPhrase: InvocationPhraseSchema.exactOptional().openapi({
      description: 'The phrase used to trigger the skill.',
    }),
    ReleaseDate: ReleaseDateSchema.exactOptional().openapi({
      description: 'The date when the skill was released.',
    }),
    EndUserLicenseAgreement: EndUserLicenseAgreementSchema.exactOptional().openapi({
      description: 'The URL of the end user license agreement.',
    }),
    GenericKeywords: GenericKeywordsSchema.exactOptional().openapi({
      description:
        'The generic keywords associated with the skill that can be used to find a skill.',
    }),
    BulletPoints: BulletPointsSchema.exactOptional().openapi({
      description: 'The details about what the skill supports organized as bullet points.',
    }),
    NewInThisVersionBulletPoints: NewInThisVersionBulletPointsSchema.exactOptional().openapi({
      description: 'The updates added in bullet points.',
    }),
    SkillTypes: SkillTypesSchema.exactOptional().openapi({ description: 'The types of skills.' }),
    Reviews: ReviewsSchema.exactOptional().openapi({
      description:
        '<p> <i>This member has been deprecated.</i> </p> <p>The list of reviews for the skill, including Key and Value pair.</p>',
    }),
    DeveloperInfo: DeveloperInfoSchema.exactOptional().openapi({
      description: 'The details about the developer that published the skill.',
    }),
  })
  .openapi({ description: 'Granular information about the skill.', required: [] })
  .openapi('SkillDetails')

const SkillsStoreSkillSchema = z
  .object({
    SkillId: SkillIdSchema.exactOptional().openapi({ description: 'The ARN of the skill.' }),
    SkillName: SkillNameSchema.exactOptional().openapi({ description: 'The name of the skill.' }),
    ShortDescription: ShortDescriptionSchema.exactOptional().openapi({
      description: 'Short description about the skill.',
    }),
    IconUrl: IconUrlSchema.exactOptional().openapi({
      description: 'The URL where the skill icon resides.',
    }),
    SampleUtterances: SampleUtterancesSchema.exactOptional().openapi({
      description: 'Sample utterances that interact with the skill.',
    }),
    SkillDetails: SkillDetailsSchema.exactOptional().openapi({
      description: 'Information about the skill.',
    }),
    SupportsLinking: Boolean2Schema.exactOptional().openapi({
      description: 'Linking support for a skill.',
    }),
  })
  .openapi({ description: 'The detailed information about an Alexa skill.', required: [] })
  .openapi('SkillsStoreSkill')

const SkillsStoreSkillListSchema = z.array(SkillsStoreSkillSchema).openapi('SkillsStoreSkillList')

const ListSkillsStoreSkillsByCategoryResponseSchema = z
  .object({
    SkillsStoreSkills: SkillsStoreSkillListSchema.exactOptional().openapi({
      description: 'The skill store skills.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The tokens used for pagination.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSkillsStoreSkillsByCategoryResponse')

const ListSkillsStoreSkillsByCategoryRequestSchema = z
  .object({
    CategoryId: CategoryIdSchema.openapi({
      description: 'The category ID for which the skills are being retrieved from the skill store.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The tokens used for pagination.',
    }),
    MaxResults: SkillListMaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of skills returned per paginated calls.',
    }),
  })
  .openapi({ required: ['CategoryId'], title: 'ListSkillsStoreSkillsByCategoryRequest' })
  .openapi('ListSkillsStoreSkillsByCategoryRequest')

const ApplianceFriendlyNameSchema = z.string().openapi('ApplianceFriendlyName')

const ApplianceDescriptionSchema = z.string().openapi('ApplianceDescription')

const ApplianceManufacturerNameSchema = z.string().openapi('ApplianceManufacturerName')

const SmartHomeApplianceSchema = z
  .object({
    FriendlyName: ApplianceFriendlyNameSchema.exactOptional().openapi({
      description: 'The friendly name of the smart home appliance.',
    }),
    Description: ApplianceDescriptionSchema.exactOptional().openapi({
      description: 'The description of the smart home appliance.',
    }),
    ManufacturerName: ApplianceManufacturerNameSchema.exactOptional().openapi({
      description: 'The name of the manufacturer of the smart home appliance.',
    }),
  })
  .openapi({
    description:
      'A smart home appliance that can connect to a central system. Any domestic device can be a smart appliance. ',
    required: [],
  })
  .openapi('SmartHomeAppliance')

const SmartHomeApplianceListSchema = z
  .array(SmartHomeApplianceSchema)
  .openapi('SmartHomeApplianceList')

const ListSmartHomeAppliancesResponseSchema = z
  .object({
    SmartHomeAppliances: SmartHomeApplianceListSchema.exactOptional().openapi({
      description: 'The smart home appliances.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The tokens used for pagination.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSmartHomeAppliancesResponse')

const ListSmartHomeAppliancesRequestSchema = z
  .object({
    RoomArn: ArnSchema.openapi({
      description: 'The room that the appliances are associated with.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of appliances to be returned, per paginated calls.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The tokens used for pagination.',
    }),
  })
  .openapi({ required: ['RoomArn'], title: 'ListSmartHomeAppliancesRequest' })
  .openapi('ListSmartHomeAppliancesRequest')

const ListTagsResponseSchema = z
  .object({
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags requested for the specified resource.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsResponse')

const ListTagsRequestSchema = z
  .object({
    Arn: ArnSchema.openapi({
      description: 'The ARN of the specified resource for which to list tags.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>. ',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.',
    }),
  })
  .openapi({ required: ['Arn'], title: 'ListTagsRequest' })
  .openapi('ListTagsRequest')

const PutConferencePreferenceResponseSchema = z
  .looseObject({})
  .openapi('PutConferencePreferenceResponse')

const PutConferencePreferenceRequestSchema = z
  .object({
    ConferencePreference: ConferencePreferenceSchema.openapi({
      description: 'The conference preference of a specific conference provider.',
    }),
  })
  .openapi({ required: ['ConferencePreference'], title: 'PutConferencePreferenceRequest' })
  .openapi('PutConferencePreferenceRequest')

const PutInvitationConfigurationResponseSchema = z
  .looseObject({})
  .openapi('PutInvitationConfigurationResponse')

const PutInvitationConfigurationRequestSchema = z
  .object({
    OrganizationName: OrganizationNameSchema.openapi({
      description: 'The name of the organization sending the enrollment invite to a user.',
    }),
    ContactEmail: EmailSchema.exactOptional().openapi({
      description:
        'The email ID of the organization or individual contact that the enrolled user can use. ',
    }),
    PrivateSkillIds: ShortSkillIdListSchema.exactOptional().openapi({
      description:
        'The list of private skill IDs that you want to recommend to the user to enable in the invitation.',
    }),
  })
  .openapi({ required: ['OrganizationName'], title: 'PutInvitationConfigurationRequest' })
  .openapi('PutInvitationConfigurationRequest')

const PutRoomSkillParameterResponseSchema = z
  .looseObject({})
  .openapi('PutRoomSkillParameterResponse')

const PutRoomSkillParameterRequestSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room associated with the room skill parameter. Required.',
    }),
    SkillId: SkillIdSchema.openapi({
      description: 'The ARN of the skill associated with the room skill parameter. Required.',
    }),
    RoomSkillParameter: RoomSkillParameterSchema.openapi({
      description: 'The updated room skill parameter. Required.',
    }),
  })
  .openapi({ required: ['SkillId', 'RoomSkillParameter'], title: 'PutRoomSkillParameterRequest' })
  .openapi('PutRoomSkillParameterRequest')

const PutSkillAuthorizationResponseSchema = z
  .looseObject({})
  .openapi('PutSkillAuthorizationResponse')

const ValueSchema = z.string().min(1).openapi('Value')

const AuthorizationResultSchema = z.record(z.string(), ValueSchema).openapi('AuthorizationResult')

const PutSkillAuthorizationRequestSchema = z
  .object({
    AuthorizationResult: AuthorizationResultSchema.openapi({
      description:
        'The authorization result specific to OAUTH code grant output. "Code” must be populated in the AuthorizationResult map to establish the authorization.',
    }),
    SkillId: SkillIdSchema.openapi({ description: 'The unique identifier of a skill.' }),
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The room that the skill is authorized for.',
    }),
  })
  .openapi({ required: ['AuthorizationResult', 'SkillId'], title: 'PutSkillAuthorizationRequest' })
  .openapi('PutSkillAuthorizationRequest')

const UnauthorizedExceptionSchema = z.any().openapi('UnauthorizedException')

const RegisterAVSDeviceResponseSchema = z
  .object({
    DeviceArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the device.' }),
  })
  .openapi({ required: [] })
  .openapi('RegisterAVSDeviceResponse')

const ClientIdSchema = z
  .string()
  .regex(/^\S\+\{1,256\}$/)
  .openapi('ClientId')

const UserCodeSchema = z.string().min(1).max(128).openapi('UserCode')

const ProductIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]{1,256}$/)
  .openapi('ProductId')

const DeviceSerialNumberForAVSSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{1,50}$/)
  .openapi('DeviceSerialNumberForAVS')

const AmazonIdSchema = z
  .string()
  .regex(/[a-zA-Z0-9]{1,18}/)
  .openapi('AmazonId')

const RegisterAVSDeviceRequestSchema = z
  .object({
    ClientId: ClientIdSchema.openapi({
      description:
        'The client ID of the OEM used for code-based linking authorization on an AVS device.',
    }),
    UserCode: UserCodeSchema.openapi({
      description:
        'The code that is obtained after your AVS device has made a POST request to LWA as a part of the Device Authorization Request component of the OAuth code-based linking specification.',
    }),
    ProductId: ProductIdSchema.openapi({
      description: 'The product ID used to identify your AVS device during authorization.',
    }),
    DeviceSerialNumber: DeviceSerialNumberForAVSSchema.exactOptional().openapi({
      description:
        'The key generated by the OEM that uniquely identifies a specified instance of your AVS device.',
    }),
    AmazonId: AmazonIdSchema.openapi({
      description:
        "The device type ID for your AVS device generated by Amazon when the OEM creates a new product on Amazon's Developer Console.",
    }),
    RoomArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the room with which to associate your AVS device.',
    }),
    Tags: TagListSchema.exactOptional().openapi({
      description: 'The tags to be added to the specified resource. Do not provide system tags.',
    }),
  })
  .openapi({
    required: ['ClientId', 'UserCode', 'ProductId', 'AmazonId'],
    title: 'RegisterAVSDeviceRequest',
  })
  .openapi('RegisterAVSDeviceRequest')

const InvalidDeviceExceptionSchema = z.any().openapi('InvalidDeviceException')

const RejectSkillResponseSchema = z.looseObject({}).openapi('RejectSkillResponse')

const RejectSkillRequestSchema = z
  .object({
    SkillId: SkillIdSchema.openapi({ description: 'The unique identifier of the skill.' }),
  })
  .openapi({ required: ['SkillId'], title: 'RejectSkillRequest' })
  .openapi('RejectSkillRequest')

const RoomSkillParametersSchema = z.array(RoomSkillParameterSchema).openapi('RoomSkillParameters')

const ResolveRoomResponseSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room from which the skill request was invoked.',
    }),
    RoomName: RoomNameSchema.exactOptional().openapi({
      description: 'The name of the room from which the skill request was invoked.',
    }),
    RoomSkillParameters: RoomSkillParametersSchema.exactOptional().openapi({
      description: 'Response to get the room profile request. Required.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ResolveRoomResponse')

const UserIdSchema = z
  .string()
  .regex(/amzn1\.[A-Za-z0-9+-\/=.]{1,300}/)
  .openapi('UserId')

const ResolveRoomRequestSchema = z
  .object({
    UserId: UserIdSchema.openapi({ description: 'The ARN of the user. Required.' }),
    SkillId: SkillIdSchema.openapi({
      description: 'The ARN of the skill that was requested. Required.',
    }),
  })
  .openapi({ required: ['UserId', 'SkillId'], title: 'ResolveRoomRequest' })
  .openapi('ResolveRoomRequest')

const RevokeInvitationResponseSchema = z.looseObject({}).openapi('RevokeInvitationResponse')

const RevokeInvitationRequestSchema = z
  .object({
    UserArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the user for whom to revoke an enrollment invitation. Required.',
    }),
    EnrollmentId: EnrollmentIdSchema.exactOptional().openapi({
      description: 'The ARN of the enrollment invitation to revoke. Required.',
    }),
  })
  .openapi({ title: 'RevokeInvitationRequest', required: [] })
  .openapi('RevokeInvitationRequest')

const AddressBookDataSchema = z
  .object({
    AddressBookArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the address book.',
    }),
    Name: AddressBookNameSchema.exactOptional().openapi({
      description: 'The name of the address book.',
    }),
    Description: AddressBookDescriptionSchema.exactOptional().openapi({
      description: 'The description of the address book.',
    }),
  })
  .openapi({ description: 'Information related to an address book.', required: [] })
  .openapi('AddressBookData')

const AddressBookDataListSchema = z.array(AddressBookDataSchema).openapi('AddressBookDataList')

const TotalCountSchema = z.int().openapi('TotalCount')

const SearchAddressBooksResponseSchema = z
  .object({
    AddressBooks: AddressBookDataListSchema.exactOptional().openapi({
      description:
        'The address books that meet the specified set of filter criteria, in sort order.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
    TotalCount: TotalCountSchema.exactOptional().openapi({
      description: 'The total number of address books returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchAddressBooksResponse')

const FilterKeySchema = z.string().min(1).max(500).openapi('FilterKey')

const FilterValueSchema = z.string().min(1).max(500).openapi('FilterValue')

const FilterValueListSchema = z.array(FilterValueSchema).max(50).openapi('FilterValueList')

const FilterSchema = z
  .object({
    Key: FilterKeySchema.openapi({ description: 'The key of a filter.' }),
    Values: FilterValueListSchema.openapi({ description: 'The values of a filter.' }),
  })
  .openapi({
    required: ['Key', 'Values'],
    description:
      'A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria.',
  })
  .openapi('Filter')

const FilterListSchema = z.array(FilterSchema).max(25).openapi('FilterList')

const SortKeySchema = z.string().min(1).max(500).openapi('SortKey')

const SortValueSchema = z.enum(['ASC', 'DESC']).openapi('SortValue')

const SortSchema = z
  .object({
    Key: SortKeySchema.openapi({ description: 'The sort key of a sort object.' }),
    Value: SortValueSchema.openapi({ description: 'The sort value of a sort object.' }),
  })
  .openapi({ required: ['Key', 'Value'], description: 'An object representing a sort criteria. ' })
  .openapi('Sort')

const SortListSchema = z.array(SortSchema).max(25).openapi('SortList')

const SearchAddressBooksRequestSchema = z
  .object({
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        'The filters to use to list a specified set of address books. The supported filter key is AddressBookName.',
    }),
    SortCriteria: SortListSchema.exactOptional().openapi({
      description:
        'The sort order to use in listing the specified set of address books. The supported sort key is AddressBookName.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response only includes results beyond the token, up to the value specified by MaxResults.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.',
    }),
  })
  .openapi({ title: 'SearchAddressBooksRequest', required: [] })
  .openapi('SearchAddressBooksRequest')

const ContactDataSchema = z
  .object({
    ContactArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the contact.' }),
    DisplayName: ContactNameSchema.exactOptional().openapi({
      description: 'The name of the contact to display on the console.',
    }),
    FirstName: ContactNameSchema.exactOptional().openapi({
      description: 'The first name of the contact, used to call the contact on the device.',
    }),
    LastName: ContactNameSchema.exactOptional().openapi({
      description: 'The last name of the contact, used to call the contact on the device.',
    }),
    PhoneNumber: RawPhoneNumberSchema.exactOptional().openapi({
      description:
        'The phone number of the contact. The phone number type defaults to WORK. You can specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which lets you specify the phone number type and multiple numbers.',
    }),
    PhoneNumbers: PhoneNumberListSchema.exactOptional().openapi({
      description: 'The list of phone numbers for the contact.',
    }),
    SipAddresses: SipAddressListSchema.exactOptional().openapi({
      description: 'The list of SIP addresses for the contact.',
    }),
  })
  .openapi({ description: 'Information related to a contact.', required: [] })
  .openapi('ContactData')

const ContactDataListSchema = z.array(ContactDataSchema).openapi('ContactDataList')

const SearchContactsResponseSchema = z
  .object({
    Contacts: ContactDataListSchema.exactOptional().openapi({
      description: 'The contacts that meet the specified set of filter criteria, in sort order.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
    TotalCount: TotalCountSchema.exactOptional().openapi({
      description: 'The total number of contacts returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchContactsResponse')

const SearchContactsRequestSchema = z
  .object({
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        'The filters to use to list a specified set of address books. The supported filter keys are DisplayName, FirstName, LastName, and AddressBookArns.',
    }),
    SortCriteria: SortListSchema.exactOptional().openapi({
      description:
        'The sort order to use in listing the specified set of contacts. The supported sort keys are DisplayName, FirstName, and LastName.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response only includes results beyond the token, up to the value specified by MaxResults.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.',
    }),
  })
  .openapi({ title: 'SearchContactsRequest', required: [] })
  .openapi('SearchContactsRequest')

const DeviceRoomNameSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(1)
  .max(100)
  .openapi('DeviceRoomName')

const DeviceDataCreatedTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('DeviceDataCreatedTime')

const DeviceDataSchema = z
  .object({
    DeviceArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of a device.' }),
    DeviceSerialNumber: DeviceSerialNumberSchema.exactOptional().openapi({
      description: 'The serial number of a device.',
    }),
    DeviceType: DeviceTypeSchema.exactOptional().openapi({ description: 'The type of a device.' }),
    DeviceName: DeviceNameSchema.exactOptional().openapi({ description: 'The name of a device.' }),
    SoftwareVersion: SoftwareVersionSchema.exactOptional().openapi({
      description: 'The software version of a device.',
    }),
    MacAddress: MacAddressSchema.exactOptional().openapi({
      description: 'The MAC address of a device.',
    }),
    DeviceStatus: DeviceStatusSchema.exactOptional().openapi({
      description: 'The status of a device.',
    }),
    NetworkProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the network profile associated with a device.',
    }),
    NetworkProfileName: NetworkProfileNameSchema.exactOptional().openapi({
      description: 'The name of the network profile associated with a device.',
    }),
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The room ARN associated with a device.',
    }),
    RoomName: DeviceRoomNameSchema.exactOptional().openapi({
      description: 'The name of the room associated with a device.',
    }),
    DeviceStatusInfo: DeviceStatusInfoSchema.exactOptional().openapi({
      description: "Detailed information about a device's status.",
    }),
    CreatedTime: DeviceDataCreatedTimeSchema.exactOptional().openapi({
      description: 'The time (in epoch) when the device data was created.',
    }),
  })
  .openapi({ description: 'Device attributes.', required: [] })
  .openapi('DeviceData')

const DeviceDataListSchema = z.array(DeviceDataSchema).openapi('DeviceDataList')

const SearchDevicesResponseSchema = z
  .object({
    Devices: DeviceDataListSchema.exactOptional().openapi({
      description: 'The devices that meet the specified set of filter criteria, in sort order.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
    TotalCount: TotalCountSchema.exactOptional().openapi({
      description: 'The total number of devices returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchDevicesResponse')

const SearchDevicesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        'The filters to use to list a specified set of devices. Supported filter keys are DeviceName, DeviceStatus, DeviceStatusDetailCode, RoomName, DeviceType, DeviceSerialNumber, UnassociatedOnly, ConnectionStatus (ONLINE and OFFLINE), NetworkProfileName, NetworkProfileArn, Feature, and FailureCode.',
    }),
    SortCriteria: SortListSchema.exactOptional().openapi({
      description:
        'The sort order to use in listing the specified set of devices. Supported sort keys are DeviceName, DeviceStatus, RoomName, DeviceType, DeviceSerialNumber, ConnectionStatus, NetworkProfileName, NetworkProfileArn, Feature, and FailureCode.',
    }),
  })
  .openapi({ title: 'SearchDevicesRequest', required: [] })
  .openapi('SearchDevicesRequest')

const NetworkProfileDataSchema = z
  .object({
    NetworkProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the network profile associated with a device.',
    }),
    NetworkProfileName: NetworkProfileNameSchema.exactOptional().openapi({
      description: 'The name of the network profile associated with a device.',
    }),
    Description: NetworkProfileDescriptionSchema.exactOptional().openapi({
      description: "Detailed information about a device's network profile.",
    }),
    Ssid: NetworkSsidSchema.exactOptional().openapi({
      description: 'The SSID of the Wi-Fi network.',
    }),
    SecurityType: NetworkSecurityTypeSchema.exactOptional().openapi({
      description:
        'The security type of the Wi-Fi network. This can be WPA2_ENTERPRISE, WPA2_PSK, WPA_PSK, WEP, or OPEN.',
    }),
    EapMethod: NetworkEapMethodSchema.exactOptional().openapi({
      description:
        'The authentication standard that is used in the EAP framework. Currently, EAP_TLS is supported.',
    }),
    CertificateAuthorityArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager (ACM). This is used to issue certificates to the devices.',
    }),
  })
  .openapi({ description: 'The data associated with a network profile.', required: [] })
  .openapi('NetworkProfileData')

const NetworkProfileDataListSchema = z
  .array(NetworkProfileDataSchema)
  .openapi('NetworkProfileDataList')

const SearchNetworkProfilesResponseSchema = z
  .object({
    NetworkProfiles: NetworkProfileDataListSchema.exactOptional().openapi({
      description:
        'The network profiles that meet the specified set of filter criteria, in sort order. It is a list of NetworkProfileData objects. ',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.',
    }),
    TotalCount: TotalCountSchema.exactOptional().openapi({
      description: 'The total number of network profiles returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchNetworkProfilesResponse')

const SearchNetworkProfilesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults. ',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved. ',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        'The filters to use to list a specified set of network profiles. Valid filters are NetworkProfileName, Ssid, and SecurityType.',
    }),
    SortCriteria: SortListSchema.exactOptional().openapi({
      description:
        'The sort order to use to list the specified set of network profiles. Valid sort criteria includes NetworkProfileName, Ssid, and SecurityType.',
    }),
  })
  .openapi({ title: 'SearchNetworkProfilesRequest', required: [] })
  .openapi('SearchNetworkProfilesRequest')

const ProfileDataSchema = z
  .object({
    ProfileArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of a room profile.' }),
    ProfileName: ProfileNameSchema.exactOptional().openapi({
      description: 'The name of a room profile.',
    }),
    IsDefault: BooleanSchema.exactOptional().openapi({
      description: 'Retrieves if the profile data is default or not.',
    }),
    Address: AddressSchema.exactOptional().openapi({
      description: 'The address of a room profile.',
    }),
    Timezone: TimezoneSchema.exactOptional().openapi({
      description: 'The time zone of a room profile.',
    }),
    DistanceUnit: DistanceUnitSchema.exactOptional().openapi({
      description: 'The distance unit of a room profile.',
    }),
    TemperatureUnit: TemperatureUnitSchema.exactOptional().openapi({
      description: 'The temperature unit of a room profile.',
    }),
    WakeWord: WakeWordSchema.exactOptional().openapi({
      description: 'The wake word of a room profile.',
    }),
    Locale: DeviceLocaleSchema.exactOptional().openapi({
      description:
        'The locale of a room profile. (This is currently available only to a limited preview audience.)',
    }),
  })
  .openapi({ description: 'The data of a room profile.', required: [] })
  .openapi('ProfileData')

const ProfileDataListSchema = z.array(ProfileDataSchema).openapi('ProfileDataList')

const SearchProfilesResponseSchema = z
  .object({
    Profiles: ProfileDataListSchema.exactOptional().openapi({
      description: 'The profiles that meet the specified set of filter criteria, in sort order.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
    TotalCount: TotalCountSchema.exactOptional().openapi({
      description: 'The total number of room profiles returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchProfilesResponse')

const SearchProfilesRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        'The filters to use to list a specified set of room profiles. Supported filter keys are ProfileName and Address. Required. ',
    }),
    SortCriteria: SortListSchema.exactOptional().openapi({
      description:
        'The sort order to use in listing the specified set of room profiles. Supported sort keys are ProfileName and Address.',
    }),
  })
  .openapi({ title: 'SearchProfilesRequest', required: [] })
  .openapi('SearchProfilesRequest')

const RoomDataSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of a room.' }),
    RoomName: RoomNameSchema.exactOptional().openapi({ description: 'The name of a room.' }),
    Description: RoomDescriptionSchema.exactOptional().openapi({
      description: 'The description of a room.',
    }),
    ProviderCalendarId: ProviderCalendarIdSchema.exactOptional().openapi({
      description: 'The provider calendar ARN of a room.',
    }),
    ProfileArn: ArnSchema.exactOptional().openapi({ description: 'The profile ARN of a room.' }),
    ProfileName: ProfileNameSchema.exactOptional().openapi({
      description: 'The profile name of a room.',
    }),
  })
  .openapi({ description: 'The data of a room.', required: [] })
  .openapi('RoomData')

const RoomDataListSchema = z.array(RoomDataSchema).openapi('RoomDataList')

const SearchRoomsResponseSchema = z
  .object({
    Rooms: RoomDataListSchema.exactOptional().openapi({
      description: 'The rooms that meet the specified set of filter criteria, in sort order.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
    TotalCount: TotalCountSchema.exactOptional().openapi({
      description: 'The total number of rooms returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchRoomsResponse')

const SearchRoomsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved. ',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        'The filters to use to list a specified set of rooms. The supported filter keys are RoomName and ProfileName.',
    }),
    SortCriteria: SortListSchema.exactOptional().openapi({
      description:
        'The sort order to use in listing the specified set of rooms. The supported sort keys are RoomName and ProfileName.',
    }),
  })
  .openapi({ title: 'SearchRoomsRequest', required: [] })
  .openapi('SearchRoomsRequest')

const SkillGroupDataSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The skill group ARN of a skill group.',
    }),
    SkillGroupName: SkillGroupNameSchema.exactOptional().openapi({
      description: 'The skill group name of a skill group.',
    }),
    Description: SkillGroupDescriptionSchema.exactOptional().openapi({
      description: 'The description of a skill group.',
    }),
  })
  .openapi({ description: 'The attributes of a skill group.', required: [] })
  .openapi('SkillGroupData')

const SkillGroupDataListSchema = z.array(SkillGroupDataSchema).openapi('SkillGroupDataList')

const SearchSkillGroupsResponseSchema = z
  .object({
    SkillGroups: SkillGroupDataListSchema.exactOptional().openapi({
      description: 'The skill groups that meet the filter criteria, in sort order.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
    TotalCount: TotalCountSchema.exactOptional().openapi({
      description: 'The total number of skill groups returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchSkillGroupsResponse')

const SearchSkillGroupsRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>. Required.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved. ',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        'The filters to use to list a specified set of skill groups. The supported filter key is SkillGroupName. ',
    }),
    SortCriteria: SortListSchema.exactOptional().openapi({
      description:
        'The sort order to use in listing the specified set of skill groups. The supported sort key is SkillGroupName. ',
    }),
  })
  .openapi({ title: 'SearchSkillGroupsRequest', required: [] })
  .openapi('SearchSkillGroupsRequest')

const EnrollmentStatusSchema = z
  .enum(['INITIALIZED', 'PENDING', 'REGISTERED', 'DISASSOCIATING', 'DEREGISTERING'])
  .openapi('EnrollmentStatus')

const UserDataSchema = z
  .object({
    UserArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of a user.' }),
    FirstName: UserFirstNameSchema.exactOptional().openapi({
      description: 'The first name of a user.',
    }),
    LastName: UserLastNameSchema.exactOptional().openapi({
      description: 'The last name of a user.',
    }),
    Email: EmailSchema.exactOptional().openapi({ description: 'The email of a user.' }),
    EnrollmentStatus: EnrollmentStatusSchema.exactOptional().openapi({
      description: 'The enrollment status of a user.',
    }),
    EnrollmentId: EnrollmentIdSchema.exactOptional().openapi({
      description: 'The enrollment ARN of a user.',
    }),
  })
  .openapi({ description: 'Information related to a user.', required: [] })
  .openapi('UserData')

const UserDataListSchema = z.array(UserDataSchema).openapi('UserDataList')

const SearchUsersResponseSchema = z
  .object({
    Users: UserDataListSchema.exactOptional().openapi({
      description: 'The users that meet the specified set of filter criteria, in sort order.',
    }),
    NextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The token returned to indicate that there is more data available.',
    }),
    TotalCount: TotalCountSchema.exactOptional().openapi({
      description: 'The total number of users returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SearchUsersResponse')

const SearchUsersRequestSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by <code>MaxResults</code>. Required.',
    }),
    MaxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved. Required.',
    }),
    Filters: FilterListSchema.exactOptional().openapi({
      description:
        'The filters to use for listing a specific set of users. Required. Supported filter keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.',
    }),
    SortCriteria: SortListSchema.exactOptional().openapi({
      description:
        'The sort order to use in listing the filtered set of users. Required. Supported sort keys are UserId, FirstName, LastName, Email, and EnrollmentStatus.',
    }),
  })
  .openapi({ title: 'SearchUsersRequest', required: [] })
  .openapi('SearchUsersRequest')

const SendAnnouncementResponseSchema = z
  .object({
    AnnouncementArn: ArnSchema.exactOptional().openapi({
      description: 'The identifier of the announcement.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SendAnnouncementResponse')

const LocaleSchema = z.literal('en-US').openapi('Locale')

const TextValueSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(0)
  .max(4096)
  .openapi('TextValue')

const TextSchema = z
  .object({
    Locale: LocaleSchema.openapi({
      description: 'The locale of the text message. Currently, en-US is supported.',
    }),
    Value: TextValueSchema.openapi({ description: 'The value of the text message.' }),
  })
  .openapi({ required: ['Locale', 'Value'], description: 'The text message.' })
  .openapi('Text')

const TextListSchema = z.array(TextSchema).max(1).openapi('TextList')

const SsmlValueSchema = z
  .string()
  .regex(/[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]*/)
  .min(0)
  .max(4096)
  .openapi('SsmlValue')

const SsmlSchema = z
  .object({
    Locale: LocaleSchema.openapi({
      description: 'The locale of the SSML message. Currently, en-US is supported.',
    }),
    Value: SsmlValueSchema.openapi({
      description:
        'The value of the SSML message in the correct SSML format. The audio tag is not supported.',
    }),
  })
  .openapi({
    required: ['Locale', 'Value'],
    description:
      'The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>.',
  })
  .openapi('Ssml')

const SsmlListSchema = z.array(SsmlSchema).max(1).openapi('SsmlList')

const AudioLocationSchema = z
  .string()
  .regex(
    /https:\/\/([A-Za-z0-9_.-]+)?(s3-[A-Za-z0-9-]+|s3\.([A-Za-z0-9-])+|s3|s3.dualstack\.([A-Za-z0-9-])+)+.amazonaws.com\/.*/,
  )
  .min(0)
  .max(1200)
  .openapi('AudioLocation')

const AudioSchema = z
  .object({
    Locale: LocaleSchema.openapi({
      description: 'The locale of the audio message. Currently, en-US is supported.',
    }),
    Location: AudioLocationSchema.openapi({
      description:
        'The location of the audio file. Currently, S3 URLs are supported. Only S3 locations comprised of safe characters are valid. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#Safe%20Characters">Safe Characters</a>.',
    }),
  })
  .openapi({
    required: ['Locale', 'Location'],
    description:
      '<p>The audio message. There is a 1 MB limit on the audio file input and the only supported format is MP3. To convert your MP3 audio files to an Alexa-friendly, </p> <p>required codec version (MPEG version 2) and bit rate (48 kbps), you might use converter software. One option for this is a command-line tool, FFmpeg. For more information, see <a href="https://www.ffmpeg.org/">FFmpeg</a>. The following command converts the provided &lt;input-file&gt; to an MP3 file that is played in the announcement:</p> <p> <code>ffmpeg -i &lt;input-file&gt; -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 &lt;output-file.mp3&gt;</code> </p>',
  })
  .openapi('Audio')

const AudioListSchema = z.array(AudioSchema).max(1).openapi('AudioList')

const ContentSchema = z
  .object({
    TextList: TextListSchema.exactOptional().openapi({ description: 'The list of text messages.' }),
    SsmlList: SsmlListSchema.exactOptional().openapi({ description: 'The list of SSML messages.' }),
    AudioList: AudioListSchema.exactOptional().openapi({
      description: 'The list of audio messages.',
    }),
  })
  .openapi({
    description:
      'The content definition. This can contain only one text, SSML, or audio list object.',
    required: [],
  })
  .openapi('Content')

const TimeToLiveInSecondsSchema = z.int().min(1).max(3600).openapi('TimeToLiveInSeconds')

const SendAnnouncementRequestSchema = z
  .object({
    RoomFilters: FilterListSchema.openapi({
      description:
        'The filters to use to send an announcement to a specified list of rooms. The supported filter keys are RoomName, ProfileName, RoomArn, and ProfileArn. To send to all rooms, specify an empty RoomFilters list.',
    }),
    Content: ContentSchema.openapi({
      description:
        'The announcement content. This can contain only one of the three possible announcement types (text, SSML or audio).',
    }),
    TimeToLiveInSeconds: TimeToLiveInSecondsSchema.exactOptional().openapi({
      description:
        "The time to live for an announcement. Default is 300. If delivery doesn't occur within this time, the announcement is not delivered.",
    }),
    ClientRequestToken: ClientRequestTokenSchema.openapi({
      description:
        'The unique, user-specified identifier for the request that ensures idempotency.',
    }),
  })
  .openapi({
    required: ['RoomFilters', 'Content', 'ClientRequestToken'],
    title: 'SendAnnouncementRequest',
  })
  .openapi('SendAnnouncementRequest')

const SendInvitationResponseSchema = z.looseObject({}).openapi('SendInvitationResponse')

const SendInvitationRequestSchema = z
  .object({
    UserArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the user to whom to send an invitation. Required.',
    }),
  })
  .openapi({ title: 'SendInvitationRequest', required: [] })
  .openapi('SendInvitationRequest')

const InvalidUserStatusExceptionSchema = z.any().openapi('InvalidUserStatusException')

const StartDeviceSyncResponseSchema = z.looseObject({}).openapi('StartDeviceSyncResponse')

const FeaturesSchema = z.array(FeatureSchema).openapi('Features')

const StartDeviceSyncRequestSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room with which the device to sync is associated. Required.',
    }),
    DeviceArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the device to sync. Required.',
    }),
    Features: FeaturesSchema.openapi({
      description: 'Request structure to start the device sync. Required.',
    }),
  })
  .openapi({ required: ['Features'], title: 'StartDeviceSyncRequest' })
  .openapi('StartDeviceSyncRequest')

const StartSmartHomeApplianceDiscoveryResponseSchema = z
  .looseObject({})
  .openapi('StartSmartHomeApplianceDiscoveryResponse')

const StartSmartHomeApplianceDiscoveryRequestSchema = z
  .object({
    RoomArn: ArnSchema.openapi({
      description: 'The room where smart home appliance discovery was initiated.',
    }),
  })
  .openapi({ required: ['RoomArn'], title: 'StartSmartHomeApplianceDiscoveryRequest' })
  .openapi('StartSmartHomeApplianceDiscoveryRequest')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    Arn: ArnSchema.openapi({
      description: 'The ARN of the resource to which to add metadata tags. Required. ',
    }),
    Tags: TagListSchema.openapi({
      description:
        'The tags to be added to the specified resource. Do not provide system tags. Required. ',
    }),
  })
  .openapi({ required: ['Arn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    Arn: ArnSchema.openapi({
      description: 'The ARN of the resource from which to remove metadata tags. Required. ',
    }),
    TagKeys: TagKeyListSchema.openapi({
      description:
        'The tags to be removed from the specified resource. Do not provide system tags. Required. ',
    }),
  })
  .openapi({ required: ['Arn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAddressBookResponseSchema = z.looseObject({}).openapi('UpdateAddressBookResponse')

const UpdateAddressBookRequestSchema = z
  .object({
    AddressBookArn: ArnSchema.openapi({ description: 'The ARN of the room to update.' }),
    Name: AddressBookNameSchema.exactOptional().openapi({
      description: 'The updated name of the room.',
    }),
    Description: AddressBookDescriptionSchema.exactOptional().openapi({
      description: 'The updated description of the room.',
    }),
  })
  .openapi({ required: ['AddressBookArn'], title: 'UpdateAddressBookRequest' })
  .openapi('UpdateAddressBookRequest')

const NameInUseExceptionSchema = z.any().openapi('NameInUseException')

const UpdateBusinessReportScheduleResponseSchema = z
  .looseObject({})
  .openapi('UpdateBusinessReportScheduleResponse')

const UpdateBusinessReportScheduleRequestSchema = z
  .object({
    ScheduleArn: ArnSchema.openapi({ description: 'The ARN of the business report schedule.' }),
    S3BucketName: CustomerS3BucketNameSchema.exactOptional().openapi({
      description: 'The S3 location of the output reports.',
    }),
    S3KeyPrefix: S3KeyPrefixSchema.exactOptional().openapi({
      description: 'The S3 key where the report is delivered.',
    }),
    Format: BusinessReportFormatSchema.exactOptional().openapi({
      description:
        'The format of the generated report (individual CSV files or zipped files of individual files).',
    }),
    ScheduleName: BusinessReportScheduleNameSchema.exactOptional().openapi({
      description: 'The name identifier of the schedule.',
    }),
    Recurrence: BusinessReportRecurrenceSchema.exactOptional().openapi({
      description: 'The recurrence of the reports.',
    }),
  })
  .openapi({ required: ['ScheduleArn'], title: 'UpdateBusinessReportScheduleRequest' })
  .openapi('UpdateBusinessReportScheduleRequest')

const UpdateConferenceProviderResponseSchema = z
  .looseObject({})
  .openapi('UpdateConferenceProviderResponse')

const UpdateConferenceProviderRequestSchema = z
  .object({
    ConferenceProviderArn: ArnSchema.openapi({
      description: 'The ARN of the conference provider.',
    }),
    ConferenceProviderType: ConferenceProviderTypeSchema.openapi({
      description: 'The type of the conference provider.',
    }),
    IPDialIn: IPDialInSchema.exactOptional().openapi({
      description: 'The IP endpoint and protocol for calling.',
    }),
    PSTNDialIn: PSTNDialInSchema.exactOptional().openapi({
      description: 'The information for PSTN conferencing.',
    }),
    MeetingSetting: MeetingSettingSchema.openapi({
      description: 'The meeting settings for the conference provider.',
    }),
  })
  .openapi({
    required: ['ConferenceProviderArn', 'ConferenceProviderType', 'MeetingSetting'],
    title: 'UpdateConferenceProviderRequest',
  })
  .openapi('UpdateConferenceProviderRequest')

const UpdateContactResponseSchema = z.looseObject({}).openapi('UpdateContactResponse')

const UpdateContactRequestSchema = z
  .object({
    ContactArn: ArnSchema.openapi({ description: 'The ARN of the contact to update.' }),
    DisplayName: ContactNameSchema.exactOptional().openapi({
      description: 'The updated display name of the contact.',
    }),
    FirstName: ContactNameSchema.exactOptional().openapi({
      description: 'The updated first name of the contact.',
    }),
    LastName: ContactNameSchema.exactOptional().openapi({
      description: 'The updated last name of the contact.',
    }),
    PhoneNumber: RawPhoneNumberSchema.exactOptional().openapi({
      description:
        'The updated phone number of the contact. The phone number type defaults to WORK. You can either specify PhoneNumber or PhoneNumbers. We recommend that you use PhoneNumbers, which lets you specify the phone number type and multiple numbers.',
    }),
    PhoneNumbers: PhoneNumberListSchema.exactOptional().openapi({
      description: 'The list of phone numbers for the contact.',
    }),
    SipAddresses: SipAddressListSchema.exactOptional().openapi({
      description: 'The list of SIP addresses for the contact.',
    }),
  })
  .openapi({ required: ['ContactArn'], title: 'UpdateContactRequest' })
  .openapi('UpdateContactRequest')

const UpdateDeviceResponseSchema = z.looseObject({}).openapi('UpdateDeviceResponse')

const UpdateDeviceRequestSchema = z
  .object({
    DeviceArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the device to update. Required.',
    }),
    DeviceName: DeviceNameSchema.exactOptional().openapi({
      description: 'The updated device name. Required.',
    }),
  })
  .openapi({ title: 'UpdateDeviceRequest', required: [] })
  .openapi('UpdateDeviceRequest')

const UpdateGatewayResponseSchema = z.looseObject({}).openapi('UpdateGatewayResponse')

const UpdateGatewayRequestSchema = z
  .object({
    GatewayArn: ArnSchema.openapi({ description: 'The ARN of the gateway to update.' }),
    Name: GatewayNameSchema.exactOptional().openapi({
      description: 'The updated name of the gateway.',
    }),
    Description: GatewayDescriptionSchema.exactOptional().openapi({
      description: 'The updated description of the gateway.',
    }),
    SoftwareVersion: GatewayVersionSchema.exactOptional().openapi({
      description:
        'The updated software version of the gateway. The gateway automatically updates its software version during normal operation.',
    }),
  })
  .openapi({ required: ['GatewayArn'], title: 'UpdateGatewayRequest' })
  .openapi('UpdateGatewayRequest')

const UpdateGatewayGroupResponseSchema = z.looseObject({}).openapi('UpdateGatewayGroupResponse')

const UpdateGatewayGroupRequestSchema = z
  .object({
    GatewayGroupArn: ArnSchema.openapi({ description: 'The ARN of the gateway group to update.' }),
    Name: GatewayGroupNameSchema.exactOptional().openapi({
      description: 'The updated name of the gateway group.',
    }),
    Description: GatewayGroupDescriptionSchema.exactOptional().openapi({
      description: 'The updated description of the gateway group.',
    }),
  })
  .openapi({ required: ['GatewayGroupArn'], title: 'UpdateGatewayGroupRequest' })
  .openapi('UpdateGatewayGroupRequest')

const UpdateNetworkProfileResponseSchema = z.looseObject({}).openapi('UpdateNetworkProfileResponse')

const UpdateNetworkProfileRequestSchema = z
  .object({
    NetworkProfileArn: ArnSchema.openapi({
      description: 'The ARN of the network profile associated with a device.',
    }),
    NetworkProfileName: NetworkProfileNameSchema.exactOptional().openapi({
      description: 'The name of the network profile associated with a device.',
    }),
    Description: NetworkProfileDescriptionSchema.exactOptional().openapi({
      description: "Detailed information about a device's network profile.",
    }),
    CurrentPassword: CurrentWiFiPasswordSchema.exactOptional().openapi({
      description: 'The current password of the Wi-Fi network.',
    }),
    NextPassword: NextWiFiPasswordSchema.exactOptional().openapi({
      description:
        'The next, or subsequent, password of the Wi-Fi network. This password is asynchronously transmitted to the device and is used when the password of the network changes to NextPassword. ',
    }),
    CertificateAuthorityArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the Private Certificate Authority (PCA) created in AWS Certificate Manager (ACM). This is used to issue certificates to the devices. ',
    }),
    TrustAnchors: TrustAnchorListSchema.exactOptional().openapi({
      description:
        'The root certificate(s) of your authentication server that will be installed on your devices and used to trust your authentication server during EAP negotiation. ',
    }),
  })
  .openapi({ required: ['NetworkProfileArn'], title: 'UpdateNetworkProfileRequest' })
  .openapi('UpdateNetworkProfileRequest')

const UpdateProfileResponseSchema = z.looseObject({}).openapi('UpdateProfileResponse')

const UpdateEndOfMeetingReminderSchema = z
  .object({
    ReminderAtMinutes: EndOfMeetingReminderMinutesListSchema.exactOptional().openapi({
      description:
        'Updates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. ',
    }),
    ReminderType: EndOfMeetingReminderTypeSchema.exactOptional().openapi({
      description: 'The type of sound that users hear during the end of meeting reminder. ',
    }),
    Enabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether an end of meeting reminder is enabled or not.',
    }),
  })
  .openapi({
    description:
      'Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. ',
    required: [],
  })
  .openapi('UpdateEndOfMeetingReminder')

const UpdateInstantBookingSchema = z
  .object({
    DurationInMinutes: MinutesSchema.exactOptional().openapi({
      description:
        'Duration between 15 and 240 minutes at increments of 15 that determines how long to book an available room when a meeting is started with Alexa.',
    }),
    Enabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether instant booking is enabled or not.',
    }),
  })
  .openapi({
    description:
      'Updates settings for the instant booking feature that are applied to a room profile. If instant booking is enabled, Alexa automatically reserves a room if it is free when a user joins a meeting with Alexa.',
    required: [],
  })
  .openapi('UpdateInstantBooking')

const UpdateRequireCheckInSchema = z
  .object({
    ReleaseAfterMinutes: MinutesSchema.exactOptional().openapi({
      description:
        "Duration between 5 and 20 minutes to determine when to release the room if it's not checked into. ",
    }),
    Enabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether require check in is enabled or not.',
    }),
  })
  .openapi({
    description:
      'Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. ',
    required: [],
  })
  .openapi('UpdateRequireCheckIn')

const UpdateMeetingRoomConfigurationSchema = z
  .object({
    RoomUtilizationMetricsEnabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether room utilization metrics are enabled or not.',
    }),
    EndOfMeetingReminder: UpdateEndOfMeetingReminderSchema.exactOptional().openapi({
      description:
        'Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. ',
    }),
    InstantBooking: UpdateInstantBookingSchema.exactOptional().openapi({
      description:
        'Settings to automatically book an available room available for a configured duration when joining a meeting with Alexa.',
    }),
    RequireCheckIn: UpdateRequireCheckInSchema.exactOptional().openapi({
      description:
        "Settings for requiring a check in when a room is reserved. Alexa can cancel a room reservation if it's not checked into to make the room available for others. Users can check in by joining the meeting with Alexa or an AVS device, or by saying “Alexa, check in.” ",
    }),
  })
  .openapi({ description: 'Updates meeting room settings of a room profile.', required: [] })
  .openapi('UpdateMeetingRoomConfiguration')

const UpdateProfileRequestSchema = z
  .object({
    ProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the room profile to update. Required.',
    }),
    ProfileName: ProfileNameSchema.exactOptional().openapi({
      description: 'The updated name for the room profile.',
    }),
    IsDefault: BooleanSchema.exactOptional().openapi({
      description:
        'Sets the profile as default if selected. If this is missing, no update is done to the default status.',
    }),
    Timezone: TimezoneSchema.exactOptional().openapi({
      description: 'The updated timezone for the room profile.',
    }),
    Address: AddressSchema.exactOptional().openapi({
      description: 'The updated address for the room profile.',
    }),
    DistanceUnit: DistanceUnitSchema.exactOptional().openapi({
      description: 'The updated distance unit for the room profile.',
    }),
    TemperatureUnit: TemperatureUnitSchema.exactOptional().openapi({
      description: 'The updated temperature unit for the room profile.',
    }),
    WakeWord: WakeWordSchema.exactOptional().openapi({
      description: 'The updated wake word for the room profile.',
    }),
    Locale: DeviceLocaleSchema.exactOptional().openapi({
      description:
        'The updated locale for the room profile. (This is currently only available to a limited preview audience.)',
    }),
    SetupModeDisabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether the setup mode of the profile is enabled.',
    }),
    MaxVolumeLimit: MaxVolumeLimitSchema.exactOptional().openapi({
      description: 'The updated maximum volume limit for the room profile.',
    }),
    PSTNEnabled: BooleanSchema.exactOptional().openapi({
      description: 'Whether the PSTN setting of the room profile is enabled.',
    }),
    DataRetentionOptIn: BooleanSchema.exactOptional().openapi({
      description: 'Whether data retention of the profile is enabled.',
    }),
    MeetingRoomConfiguration: UpdateMeetingRoomConfigurationSchema.exactOptional().openapi({
      description: 'The updated meeting room settings of a room profile.',
    }),
  })
  .openapi({ title: 'UpdateProfileRequest', required: [] })
  .openapi('UpdateProfileRequest')

const UpdateRoomResponseSchema = z.looseObject({}).openapi('UpdateRoomResponse')

const UpdateRoomRequestSchema = z
  .object({
    RoomArn: ArnSchema.exactOptional().openapi({ description: 'The ARN of the room to update. ' }),
    RoomName: RoomNameSchema.exactOptional().openapi({
      description: 'The updated name for the room.',
    }),
    Description: RoomDescriptionSchema.exactOptional().openapi({
      description: 'The updated description for the room.',
    }),
    ProviderCalendarId: ProviderCalendarIdSchema.exactOptional().openapi({
      description: 'The updated provider calendar ARN for the room.',
    }),
    ProfileArn: ArnSchema.exactOptional().openapi({
      description: 'The updated profile ARN for the room.',
    }),
  })
  .openapi({ title: 'UpdateRoomRequest', required: [] })
  .openapi('UpdateRoomRequest')

const UpdateSkillGroupResponseSchema = z.looseObject({}).openapi('UpdateSkillGroupResponse')

const UpdateSkillGroupRequestSchema = z
  .object({
    SkillGroupArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the skill group to update. ',
    }),
    SkillGroupName: SkillGroupNameSchema.exactOptional().openapi({
      description: 'The updated name for the skill group.',
    }),
    Description: SkillGroupDescriptionSchema.exactOptional().openapi({
      description: 'The updated description for the skill group.',
    }),
  })
  .openapi({ title: 'UpdateSkillGroupRequest', required: [] })
  .openapi('UpdateSkillGroupRequest')

const KeySchema = z.string().min(1).openapi('Key')

const ReviewKeySchema = z.string().openapi('ReviewKey')

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

export const postXAmzTargetAlexaForBusinessApproveSkillRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ApproveSkill',
  description:
    "Associates a skill with the organization under the customer's AWS account. If a skill is private, the user implicitly accepts access to this skill during enablement.",
  operationId: 'ApproveSkill',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ApproveSkill')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ApproveSkill'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ApproveSkillRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApproveSkillResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessAssociateContactWithAddressBookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook',
  description: 'Associates a contact with a given address book.',
  operationId: 'AssociateContactWithAddressBook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.AssociateContactWithAddressBook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.AssociateContactWithAddressBook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateContactWithAddressBookRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateContactWithAddressBookResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessAssociateDeviceWithNetworkProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile',
  description: 'Associates a device with the specified network profile.',
  operationId: 'AssociateDeviceWithNetworkProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.AssociateDeviceWithNetworkProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AlexaForBusiness.AssociateDeviceWithNetworkProfile'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateDeviceWithNetworkProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateDeviceWithNetworkProfileResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'DeviceNotRegisteredException',
      content: { 'application/json': { schema: DeviceNotRegisteredExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessAssociateDeviceWithRoomRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom',
  description:
    'Associates a device with a given room. This applies all the settings from the room profile to the device, and all the skills in any skill groups added to that room. This operation requires the device to be online, or else a manual sync is required. ',
  operationId: 'AssociateDeviceWithRoom',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.AssociateDeviceWithRoom')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.AssociateDeviceWithRoom'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateDeviceWithRoomRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateDeviceWithRoomResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'DeviceNotRegisteredException',
      content: { 'application/json': { schema: DeviceNotRegisteredExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessAssociateSkillGroupWithRoomRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom',
  description:
    'Associates a skill group with a given room. This enables all skills in the associated skill group on all devices in the room.',
  operationId: 'AssociateSkillGroupWithRoom',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.AssociateSkillGroupWithRoom')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.AssociateSkillGroupWithRoom'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateSkillGroupWithRoomRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateSkillGroupWithRoomResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessAssociateSkillWithSkillGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup',
  description: 'Associates a skill with a skill group.',
  operationId: 'AssociateSkillWithSkillGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.AssociateSkillWithSkillGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.AssociateSkillWithSkillGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateSkillWithSkillGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateSkillWithSkillGroupResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'SkillNotLinkedException',
      content: { 'application/json': { schema: SkillNotLinkedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessAssociateSkillWithUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers',
  description: 'Makes a private skill available for enrolled users to enable on their devices.',
  operationId: 'AssociateSkillWithUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.AssociateSkillWithUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.AssociateSkillWithUsers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateSkillWithUsersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateSkillWithUsersResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateAddressBookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateAddressBook',
  description: 'Creates an address book with the specified details.',
  operationId: 'CreateAddressBook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateAddressBook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateAddressBook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAddressBookRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAddressBookResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateBusinessReportScheduleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule',
  description:
    'Creates a recurring schedule for usage reports to deliver to the specified S3 location with a specified daily or weekly interval.',
  operationId: 'CreateBusinessReportSchedule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateBusinessReportSchedule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateBusinessReportSchedule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateBusinessReportScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBusinessReportScheduleResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateConferenceProviderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider',
  description: "Adds a new conference provider under the user's AWS account.",
  operationId: 'CreateConferenceProvider',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateConferenceProvider')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateConferenceProvider'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateConferenceProviderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConferenceProviderResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateContact',
  description: 'Creates a contact with the specified details.',
  operationId: 'CreateContact',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateContact'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateContactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateContactResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateGatewayGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup',
  description: 'Creates a gateway group with the specified details.',
  operationId: 'CreateGatewayGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateGatewayGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateGatewayGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateGatewayGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateGatewayGroupResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateNetworkProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile',
  description: 'Creates a network profile with the specified details.',
  operationId: 'CreateNetworkProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateNetworkProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateNetworkProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateNetworkProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateNetworkProfileResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InvalidCertificateAuthorityException',
      content: { 'application/json': { schema: InvalidCertificateAuthorityExceptionSchema } },
    },
    484: {
      description: 'InvalidServiceLinkedRoleStateException',
      content: { 'application/json': { schema: InvalidServiceLinkedRoleStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateProfile',
  description: 'Creates a new room profile with the specified details.',
  operationId: 'CreateProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProfileResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateRoomRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateRoom',
  description: 'Creates a room with the specified details.',
  operationId: 'CreateRoom',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateRoom')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateRoom'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateRoomRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRoomResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateSkillGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateSkillGroup',
  description: 'Creates a skill group with a specified name and description.',
  operationId: 'CreateSkillGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateSkillGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateSkillGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateSkillGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSkillGroupResponseSchema } },
    },
    480: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessCreateUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.CreateUser',
  description: 'Creates a user.',
  operationId: 'CreateUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.CreateUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.CreateUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateUserResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteAddressBookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteAddressBook',
  description: 'Deletes an address book by the address book ARN.',
  operationId: 'DeleteAddressBook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteAddressBook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteAddressBook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAddressBookRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAddressBookResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteBusinessReportScheduleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule',
  description: 'Deletes the recurring report delivery schedule with the specified schedule ARN.',
  operationId: 'DeleteBusinessReportSchedule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteBusinessReportSchedule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteBusinessReportSchedule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteBusinessReportScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBusinessReportScheduleResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteConferenceProviderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider',
  description: 'Deletes a conference provider.',
  operationId: 'DeleteConferenceProvider',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteConferenceProvider')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteConferenceProvider'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConferenceProviderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConferenceProviderResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteContact',
  description: 'Deletes a contact by the contact ARN.',
  operationId: 'DeleteContact',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteContact'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteContactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteContactResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteDevice',
  description: 'Removes a device from Alexa For Business.',
  operationId: 'DeleteDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteDevice'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDeviceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDeviceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'InvalidCertificateAuthorityException',
      content: { 'application/json': { schema: InvalidCertificateAuthorityExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteDeviceUsageDataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData',
  description:
    "When this action is called for a specified shared device, it allows authorized users to delete the device's entire previous history of voice input data and associated response data. This action can be called once every 24 hours for a specific shared device.",
  operationId: 'DeleteDeviceUsageData',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteDeviceUsageData')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteDeviceUsageData'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDeviceUsageDataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteDeviceUsageDataResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'DeviceNotRegisteredException',
      content: { 'application/json': { schema: DeviceNotRegisteredExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteGatewayGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup',
  description: 'Deletes a gateway group.',
  operationId: 'DeleteGatewayGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteGatewayGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteGatewayGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteGatewayGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteGatewayGroupResponseSchema } },
    },
    480: {
      description: 'ResourceAssociatedException',
      content: { 'application/json': { schema: ResourceAssociatedExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteNetworkProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile',
  description: 'Deletes a network profile by the network profile ARN.',
  operationId: 'DeleteNetworkProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteNetworkProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteNetworkProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteNetworkProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteNetworkProfileResponseSchema } },
    },
    480: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteProfile',
  description: 'Deletes a room profile by the profile ARN.',
  operationId: 'DeleteProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProfileResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteRoomRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteRoom',
  description: 'Deletes a room by the room ARN.',
  operationId: 'DeleteRoom',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteRoom')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteRoom'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteRoomRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRoomResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteRoomSkillParameterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter',
  description: 'Deletes room skill parameter details by room, skill, and parameter key ID.',
  operationId: 'DeleteRoomSkillParameter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteRoomSkillParameter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteRoomSkillParameter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRoomSkillParameterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRoomSkillParameterResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteSkillAuthorizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization',
  description: 'Unlinks a third-party account from a skill.',
  operationId: 'DeleteSkillAuthorization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteSkillAuthorization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteSkillAuthorization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSkillAuthorizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSkillAuthorizationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteSkillGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup',
  description: 'Deletes a skill group by skill group ARN.',
  operationId: 'DeleteSkillGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteSkillGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteSkillGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteSkillGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSkillGroupResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDeleteUserRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DeleteUser',
  description: 'Deletes a specified user by user ARN and enrollment ARN.',
  operationId: 'DeleteUser',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DeleteUser')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DeleteUser'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteUserResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDisassociateContactFromAddressBookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook',
  description: 'Disassociates a contact from a given address book.',
  operationId: 'DisassociateContactFromAddressBook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DisassociateContactFromAddressBook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AlexaForBusiness.DisassociateContactFromAddressBook'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateContactFromAddressBookRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateContactFromAddressBookResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDisassociateDeviceFromRoomRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom',
  description:
    'Disassociates a device from its current room. The device continues to be connected to the Wi-Fi network and is still registered to the account. The device settings and skills are removed from the room.',
  operationId: 'DisassociateDeviceFromRoom',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DisassociateDeviceFromRoom')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DisassociateDeviceFromRoom'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateDeviceFromRoomRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateDeviceFromRoomResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'DeviceNotRegisteredException',
      content: { 'application/json': { schema: DeviceNotRegisteredExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDisassociateSkillFromSkillGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup',
  description: 'Disassociates a skill from a skill group.',
  operationId: 'DisassociateSkillFromSkillGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DisassociateSkillFromSkillGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DisassociateSkillFromSkillGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateSkillFromSkillGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateSkillFromSkillGroupResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDisassociateSkillFromUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers',
  description:
    'Makes a private skill unavailable for enrolled users and prevents them from enabling it on their devices.',
  operationId: 'DisassociateSkillFromUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DisassociateSkillFromUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DisassociateSkillFromUsers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateSkillFromUsersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateSkillFromUsersResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessDisassociateSkillGroupFromRoomRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom',
  description:
    'Disassociates a skill group from a specified room. This disables all skills in the skill group on all devices in the room.',
  operationId: 'DisassociateSkillGroupFromRoom',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.DisassociateSkillGroupFromRoom')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.DisassociateSkillGroupFromRoom'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateSkillGroupFromRoomRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateSkillGroupFromRoomResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessForgetSmartHomeAppliancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances',
  description: 'Forgets smart home appliances associated to a room.',
  operationId: 'ForgetSmartHomeAppliances',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ForgetSmartHomeAppliances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ForgetSmartHomeAppliances'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ForgetSmartHomeAppliancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ForgetSmartHomeAppliancesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetAddressBookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetAddressBook',
  description: 'Gets address the book details by the address book ARN.',
  operationId: 'GetAddressBook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetAddressBook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetAddressBook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAddressBookRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAddressBookResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetConferencePreferenceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetConferencePreference',
  description: 'Retrieves the existing conference preferences.',
  operationId: 'GetConferencePreference',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetConferencePreference')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetConferencePreference'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetConferencePreferenceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConferencePreferenceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetConferenceProviderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetConferenceProvider',
  description: 'Gets details about a specific conference provider.',
  operationId: 'GetConferenceProvider',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetConferenceProvider')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetConferenceProvider'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetConferenceProviderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConferenceProviderResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetContact',
  description: 'Gets the contact details by the contact ARN.',
  operationId: 'GetContact',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetContact'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetContactRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetContactResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetDevice',
  description: 'Gets the details of a device by device ARN.',
  operationId: 'GetDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetDevice'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetDeviceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeviceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetGateway',
  description: 'Retrieves the details of a gateway.',
  operationId: 'GetGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetGateway'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetGatewayRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGatewayResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetGatewayGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetGatewayGroup',
  description: 'Retrieves the details of a gateway group.',
  operationId: 'GetGatewayGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetGatewayGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetGatewayGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetGatewayGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetGatewayGroupResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetInvitationConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration',
  description: 'Retrieves the configured values for the user enrollment invitation email template.',
  operationId: 'GetInvitationConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetInvitationConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetInvitationConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetInvitationConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInvitationConfigurationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetNetworkProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetNetworkProfile',
  description: 'Gets the network profile details by the network profile ARN.',
  operationId: 'GetNetworkProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetNetworkProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetNetworkProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetNetworkProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetNetworkProfileResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidSecretsManagerResourceException',
      content: { 'application/json': { schema: InvalidSecretsManagerResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetProfile',
  description: 'Gets the details of a room profile by profile ARN.',
  operationId: 'GetProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetProfile'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetProfileRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetProfileResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetRoomRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetRoom',
  description: 'Gets room details by room ARN.',
  operationId: 'GetRoom',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetRoom')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetRoom'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetRoomRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRoomResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetRoomSkillParameterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter',
  description: 'Gets room skill parameter details by room, skill, and parameter key ARN.',
  operationId: 'GetRoomSkillParameter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetRoomSkillParameter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetRoomSkillParameter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetRoomSkillParameterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRoomSkillParameterResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessGetSkillGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.GetSkillGroup',
  description: 'Gets skill group details by skill group ARN.',
  operationId: 'GetSkillGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.GetSkillGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.GetSkillGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetSkillGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSkillGroupResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListBusinessReportSchedulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules',
  description:
    'Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.',
  operationId: 'ListBusinessReportSchedules',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListBusinessReportSchedules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListBusinessReportSchedules'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListBusinessReportSchedulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBusinessReportSchedulesResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListConferenceProvidersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListConferenceProviders',
  description: 'Lists conference providers under a specific AWS account.',
  operationId: 'ListConferenceProviders',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListConferenceProviders')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListConferenceProviders'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListConferenceProvidersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConferenceProvidersResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListDeviceEventsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListDeviceEvents',
  description:
    'Lists the device event history, including device connection status, for up to 30 days.',
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
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListDeviceEvents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListDeviceEvents'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListDeviceEventsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDeviceEventsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListGatewayGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListGatewayGroups',
  description:
    'Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of a specific gateway group.',
  operationId: 'ListGatewayGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListGatewayGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListGatewayGroups'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListGatewayGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGatewayGroupsResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListGatewaysRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListGateways',
  description:
    'Retrieves a list of gateway summaries. Use GetGateway to retrieve details of a specific gateway. An optional gateway group ARN can be provided to only retrieve gateway summaries of gateways that are associated with that gateway group ARN.',
  operationId: 'ListGateways',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListGateways')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListGateways'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListGatewaysRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListGatewaysResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListSkillsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListSkills',
  description: 'Lists all enabled skills in a specific skill group.',
  operationId: 'ListSkills',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListSkills')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListSkills'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListSkillsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSkillsResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListSkillsStoreCategoriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories',
  description: 'Lists all categories in the Alexa skill store.',
  operationId: 'ListSkillsStoreCategories',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListSkillsStoreCategories')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListSkillsStoreCategories'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSkillsStoreCategoriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSkillsStoreCategoriesResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory',
  description: 'Lists all skills in the Alexa skill store by category.',
  operationId: 'ListSkillsStoreSkillsByCategory',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListSkillsStoreSkillsByCategory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListSkillsStoreSkillsByCategory'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSkillsStoreSkillsByCategoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSkillsStoreSkillsByCategoryResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListSmartHomeAppliancesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances',
  description: 'Lists all of the smart home appliances associated with a room.',
  operationId: 'ListSmartHomeAppliances',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListSmartHomeAppliances')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListSmartHomeAppliances'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListSmartHomeAppliancesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSmartHomeAppliancesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessListTagsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ListTags',
  description: 'Lists all tags for the specified resource.',
  operationId: 'ListTags',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ListTags')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ListTags'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ListTagsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessPutConferencePreferenceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.PutConferencePreference',
  description:
    'Sets the conference preferences on a specific conference provider at the account level.',
  operationId: 'PutConferencePreference',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.PutConferencePreference')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.PutConferencePreference'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutConferencePreferenceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutConferencePreferenceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessPutInvitationConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration',
  description:
    'Configures the email template for the user enrollment invitation with the specified attributes.',
  operationId: 'PutInvitationConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.PutInvitationConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.PutInvitationConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutInvitationConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutInvitationConfigurationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessPutRoomSkillParameterRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter',
  description:
    'Updates room skill parameter details by room, skill, and parameter key ID. Not all skills have a room skill parameter.',
  operationId: 'PutRoomSkillParameter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.PutRoomSkillParameter')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.PutRoomSkillParameter'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRoomSkillParameterRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRoomSkillParameterResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessPutSkillAuthorizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization',
  description:
    "Links a user's account to a third-party skill provider. If this API operation is called by an assumed IAM role, the skill being linked must be a private skill. Also, the skill must be owned by the AWS account that assumed the IAM role.",
  operationId: 'PutSkillAuthorization',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.PutSkillAuthorization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.PutSkillAuthorization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutSkillAuthorizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutSkillAuthorizationResponseSchema } },
    },
    480: {
      description: 'UnauthorizedException',
      content: { 'application/json': { schema: UnauthorizedExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessRegisterAVSDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice',
  description:
    'Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM) using Alexa Voice Service (AVS).',
  operationId: 'RegisterAVSDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.RegisterAVSDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.RegisterAVSDevice'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterAVSDeviceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterAVSDeviceResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidDeviceException',
      content: { 'application/json': { schema: InvalidDeviceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessRejectSkillRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.RejectSkill',
  description:
    "Disassociates a skill from the organization under a user's AWS account. If the skill is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill that is rejected can be added later by calling the ApproveSkill API. ",
  operationId: 'RejectSkill',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.RejectSkill')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.RejectSkill'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RejectSkillRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectSkillResponseSchema } },
    },
    480: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessResolveRoomRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.ResolveRoom',
  description:
    '<p>Determines the details for the room from which a skill request was invoked. This operation is used by skill developers.</p> <p>To query ResolveRoom from an Alexa skill, the skill ID needs to be authorized. When the skill is using an AWS Lambda function, the skill is automatically authorized when you publish your skill as a private skill to your AWS account. Skills that are hosted using a custom web service must be manually authorized. To get your skill authorized, contact AWS Support with your AWS account ID that queries the ResolveRoom API and skill ID. </p>',
  operationId: 'ResolveRoom',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.ResolveRoom')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.ResolveRoom'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResolveRoomRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResolveRoomResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessRevokeInvitationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.RevokeInvitation',
  description: 'Revokes an invitation and invalidates the enrollment URL.',
  operationId: 'RevokeInvitation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.RevokeInvitation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.RevokeInvitation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RevokeInvitationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RevokeInvitationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSearchAddressBooksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SearchAddressBooks',
  description:
    'Searches address books and lists the ones that meet a set of filter and sort criteria.',
  operationId: 'SearchAddressBooks',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SearchAddressBooks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SearchAddressBooks'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchAddressBooksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchAddressBooksResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSearchContactsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SearchContacts',
  description: 'Searches contacts and lists the ones that meet a set of filter and sort criteria.',
  operationId: 'SearchContacts',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SearchContacts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SearchContacts'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchContactsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchContactsResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSearchDevicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SearchDevices',
  description: 'Searches devices and lists the ones that meet a set of filter criteria.',
  operationId: 'SearchDevices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SearchDevices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SearchDevices'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchDevicesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchDevicesResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSearchNetworkProfilesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles',
  description:
    'Searches network profiles and lists the ones that meet a set of filter and sort criteria.',
  operationId: 'SearchNetworkProfiles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SearchNetworkProfiles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SearchNetworkProfiles'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchNetworkProfilesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchNetworkProfilesResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSearchProfilesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SearchProfiles',
  description: 'Searches room profiles and lists the ones that meet a set of filter criteria.',
  operationId: 'SearchProfiles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SearchProfiles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SearchProfiles'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchProfilesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchProfilesResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSearchRoomsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SearchRooms',
  description: 'Searches rooms and lists the ones that meet a set of filter and sort criteria.',
  operationId: 'SearchRooms',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SearchRooms')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SearchRooms'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchRoomsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchRoomsResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSearchSkillGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SearchSkillGroups',
  description:
    'Searches skill groups and lists the ones that meet a set of filter and sort criteria.',
  operationId: 'SearchSkillGroups',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SearchSkillGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SearchSkillGroups'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SearchSkillGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchSkillGroupsResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSearchUsersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SearchUsers',
  description: 'Searches users and lists the ones that meet a set of filter and sort criteria.',
  operationId: 'SearchUsers',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SearchUsers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SearchUsers'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchUsersRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchUsersResponseSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSendAnnouncementRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SendAnnouncement',
  description:
    'Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that are identified by a search or filter. ',
  operationId: 'SendAnnouncement',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SendAnnouncement')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SendAnnouncement'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendAnnouncementRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendAnnouncementResponseSchema } },
    },
    480: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    481: {
      description: 'AlreadyExistsException',
      content: { 'application/json': { schema: AlreadyExistsExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessSendInvitationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.SendInvitation',
  description:
    'Sends an enrollment invitation email with a URL to a user. The URL is valid for 30 days or until you call this operation again, whichever comes first. ',
  operationId: 'SendInvitation',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.SendInvitation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.SendInvitation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SendInvitationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendInvitationResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'InvalidUserStatusException',
      content: { 'application/json': { schema: InvalidUserStatusExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessStartDeviceSyncRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.StartDeviceSync',
  description:
    "<p>Resets a device and its account to the known default settings. This clears all information and settings set by previous users in the following ways:</p> <ul> <li> <p>Bluetooth - This unpairs all bluetooth devices paired with your echo device.</p> </li> <li> <p>Volume - This resets the echo device's volume to the default value.</p> </li> <li> <p>Notifications - This clears all notifications from your echo device.</p> </li> <li> <p>Lists - This clears all to-do items from your echo device.</p> </li> <li> <p>Settings - This internally syncs the room's profile (if the device is assigned to a room), contacts, address books, delegation access for account linking, and communications (if enabled on the room profile).</p> </li> </ul>",
  operationId: 'StartDeviceSync',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.StartDeviceSync')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.StartDeviceSync'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartDeviceSyncRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDeviceSyncResponseSchema } },
    },
    480: {
      description: 'DeviceNotRegisteredException',
      content: { 'application/json': { schema: DeviceNotRegisteredExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessStartSmartHomeApplianceDiscoveryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery',
  description: 'Initiates the discovery of any smart home appliances associated with the room.',
  operationId: 'StartSmartHomeApplianceDiscovery',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.StartSmartHomeApplianceDiscovery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.StartSmartHomeApplianceDiscovery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartSmartHomeApplianceDiscoveryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSmartHomeApplianceDiscoveryResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.TagResource',
  description: 'Adds metadata tags to a specified resource.',
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
      'X-Amz-Target': z
        .literal('AlexaForBusiness.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UntagResource',
  description: 'Removes metadata tags from a specified resource.',
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
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateAddressBookRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateAddressBook',
  description: 'Updates address book details by the address book ARN.',
  operationId: 'UpdateAddressBook',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateAddressBook')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateAddressBook'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAddressBookRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAddressBookResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'NameInUseException',
      content: { 'application/json': { schema: NameInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateBusinessReportScheduleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule',
  description:
    'Updates the configuration of the report delivery schedule with the specified schedule ARN.',
  operationId: 'UpdateBusinessReportSchedule',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateBusinessReportSchedule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateBusinessReportSchedule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateBusinessReportScheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBusinessReportScheduleResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateConferenceProviderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider',
  description: "Updates an existing conference provider's settings.",
  operationId: 'UpdateConferenceProvider',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateConferenceProvider')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateConferenceProvider'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateConferenceProviderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConferenceProviderResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateContactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateContact',
  description: 'Updates the contact details by the contact ARN.',
  operationId: 'UpdateContact',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateContact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateContact'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateContactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateContactResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateDeviceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateDevice',
  description: 'Updates the device name by device ARN.',
  operationId: 'UpdateDevice',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateDevice')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateDevice'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateDeviceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDeviceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    482: {
      description: 'DeviceNotRegisteredException',
      content: { 'application/json': { schema: DeviceNotRegisteredExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateGatewayRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateGateway',
  description:
    'Updates the details of a gateway. If any optional field is not provided, the existing corresponding value is left unmodified.',
  operationId: 'UpdateGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateGateway')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateGateway'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGatewayRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGatewayResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'NameInUseException',
      content: { 'application/json': { schema: NameInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateGatewayGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup',
  description:
    'Updates the details of a gateway group. If any optional field is not provided, the existing corresponding value is left unmodified.',
  operationId: 'UpdateGatewayGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateGatewayGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateGatewayGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateGatewayGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateGatewayGroupResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'NameInUseException',
      content: { 'application/json': { schema: NameInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateNetworkProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile',
  description: 'Updates a network profile by the network profile ARN.',
  operationId: 'UpdateNetworkProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateNetworkProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateNetworkProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateNetworkProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateNetworkProfileResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'NameInUseException',
      content: { 'application/json': { schema: NameInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    483: {
      description: 'InvalidCertificateAuthorityException',
      content: { 'application/json': { schema: InvalidCertificateAuthorityExceptionSchema } },
    },
    484: {
      description: 'InvalidSecretsManagerResourceException',
      content: { 'application/json': { schema: InvalidSecretsManagerResourceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateProfileRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateProfile',
  description: 'Updates an existing room profile by room profile ARN.',
  operationId: 'UpdateProfile',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateProfile')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateProfile'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateProfileResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'NameInUseException',
      content: { 'application/json': { schema: NameInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateRoomRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateRoom',
  description: 'Updates room details by room ARN.',
  operationId: 'UpdateRoom',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateRoom')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateRoom'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateRoomRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRoomResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'NameInUseException',
      content: { 'application/json': { schema: NameInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetAlexaForBusinessUpdateSkillGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup',
  description: 'Updates skill group details by skill group ARN.',
  operationId: 'UpdateSkillGroup',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AlexaForBusiness.UpdateSkillGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AlexaForBusiness.UpdateSkillGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateSkillGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSkillGroupResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'NameInUseException',
      content: { 'application/json': { schema: NameInUseExceptionSchema } },
    },
    482: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})
