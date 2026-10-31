import { createRoute, z } from '@hono/zod-openapi'

const EntityKeySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.",
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.',
      }),
  })
  .openapi({
    description:
      'A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.',
    required: [],
  })
  .openapi('EntityKey')

const DynamicGroupQuerySchema = z
  .object({
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Query that determines the memberships of the dynamic group. Examples: All users with at least one `organizations.department` of engineering. `user.organizations.exists(org, org.department=='engineering')` All users with at least one location that has `area` of `foo` and `building_id` of `bar`. `user.locations.exists(loc, loc.area=='foo' && loc.building_id=='bar')` All users with any variation of the name John Doe (case-insensitive queries add `equalsIgnoreCase()` to the value being queried). `user.name.value.equalsIgnoreCase('jOhn DoE')`",
      }),
    resourceType: z.enum(['RESOURCE_TYPE_UNSPECIFIED', 'USER']).exactOptional(),
  })
  .openapi({ description: 'Defines a query on a resource.', required: [] })
  .openapi('DynamicGroupQuery')

const DynamicGroupStatusSchema = z
  .object({
    status: z
      .enum(['STATUS_UNSPECIFIED', 'UP_TO_DATE', 'UPDATING_MEMBERSHIPS', 'INVALID_QUERY'])
      .exactOptional()
      .openapi({ description: 'Status of the dynamic group.' }),
    statusTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The latest time at which the dynamic group is guaranteed to be in the given status. If status is `UP_TO_DATE`, the latest time at which the dynamic group was confirmed to be up-to-date. If status is `UPDATING_MEMBERSHIPS`, the time at which dynamic group was created.',
      }),
  })
  .openapi({
    description: 'The current status of a dynamic group along with timestamp.',
    required: [],
  })
  .openapi('DynamicGroupStatus')

const DynamicGroupMetadataSchema = z
  .object({
    queries: z
      .array(DynamicGroupQuerySchema)
      .exactOptional()
      .openapi({
        description:
          'Memberships will be the union of all queries. Only one entry with USER resource is currently supported. Customers can create up to 100 dynamic groups.',
      }),
    status: DynamicGroupStatusSchema.exactOptional().openapi({
      description: 'Output only. Status of the dynamic group.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Dynamic group metadata like queries and status.', required: [] })
  .openapi('DynamicGroupMetadata')

const PosixGroupSchema = z
  .object({
    gid: z.string().exactOptional().openapi({ description: 'GID of the POSIX group.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the POSIX group.' }),
    systemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System identifier for which group name and gid apply to. If not specified it will default to empty value.',
      }),
  })
  .openapi({
    description: 'POSIX Group definition to represent a group in a POSIX compliant system.',
    required: [],
  })
  .openapi('PosixGroup')

type GroupType = {
  additionalGroupKeys?: z.infer<typeof EntityKeySchema>[]
  createTime?: string
  description?: string
  displayName?: string
  dynamicGroupMetadata?: z.infer<typeof DynamicGroupMetadataSchema>
  groupKey?: z.infer<typeof EntityKeySchema>
  labels?: { [key: string]: string }
  name?: string
  parent?: string
  posixGroups?: z.infer<typeof PosixGroupSchema>[]
  updateTime?: string
}

const AddIdpCredentialOperationMetadataSchema = z
  .object({})
  .openapi({
    description: 'LRO response metadata for InboundSamlSsoProfilesService.AddIdpCredential.',
  })
  .openapi('AddIdpCredentialOperationMetadata')

const AddIdpCredentialRequestSchema = z
  .object({
    pemData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PEM encoded x509 certificate containing the public key for verifying IdP signatures.',
      }),
  })
  .openapi({
    description:
      'The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials.',
    required: [],
  })
  .openapi('AddIdpCredentialRequest')

const AndroidAttributesSchema = z
  .object({
    enabledUnknownSources: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether applications from unknown sources can be installed on device.',
      }),
    ownerProfileAccount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles.',
      }),
    ownershipPrivilege: z
      .enum([
        'OWNERSHIP_PRIVILEGE_UNSPECIFIED',
        'DEVICE_ADMINISTRATOR',
        'PROFILE_OWNER',
        'DEVICE_OWNER',
      ])
      .exactOptional()
      .openapi({ description: 'Ownership privileges on device.' }),
    supportsWorkProfile: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy.',
      }),
  })
  .openapi({
    description: 'Resource representing the Android specific attributes of a Device.',
    required: [],
  })
  .openapi('AndroidAttributes')

const ApproveDeviceUserRequestSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.",
      }),
  })
  .openapi({
    description: 'Request message for approving the device to access user data.',
    required: [],
  })
  .openapi('ApproveDeviceUserRequest')

const DeviceUserSchema = z
  .object({
    compromisedState: z
      .enum(['COMPROMISED_STATE_UNSPECIFIED', 'COMPROMISED', 'NOT_COMPROMISED'])
      .exactOptional()
      .openapi({ description: 'Compromised State of the DeviceUser object' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the user first signed in to the device' }),
    firstSyncTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Most recent time when user registered with this service.',
        readOnly: true,
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Default locale used on device, in IETF BCP-47 format.',
        readOnly: true,
      }),
    lastSyncTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Last time when user synced with policies.',
        readOnly: true,
      }),
    managementState: z
      .enum([
        'MANAGEMENT_STATE_UNSPECIFIED',
        'WIPING',
        'WIPED',
        'APPROVED',
        'BLOCKED',
        'PENDING_APPROVAL',
        'UNENROLLED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Management state of the user on the device.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where `device_user_id` uniquely identifies a user's use of a device.",
        readOnly: true,
      }),
    passwordState: z
      .enum(['PASSWORD_STATE_UNSPECIFIED', 'PASSWORD_SET', 'PASSWORD_NOT_SET'])
      .exactOptional()
      .openapi({ description: 'Password state of the DeviceUser object' }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. User agent on the device for this specific user',
        readOnly: true,
      }),
    userEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of the user registered on the device.' }),
  })
  .openapi({
    description:
      "Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device",
    required: [],
  })
  .openapi('DeviceUser')

const ApproveDeviceUserResponseSchema = z
  .object({
    deviceUser: DeviceUserSchema.exactOptional().openapi({
      description: 'Resultant DeviceUser object for the action.',
    }),
  })
  .openapi({
    description: 'Response message for approving the device to access user data.',
    required: [],
  })
  .openapi('ApproveDeviceUserResponse')

const BlockDeviceUserRequestSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.",
      }),
  })
  .openapi({ description: 'Request message for blocking account on device.', required: [] })
  .openapi('BlockDeviceUserRequest')

const BlockDeviceUserResponseSchema = z
  .object({
    deviceUser: DeviceUserSchema.exactOptional().openapi({
      description: 'Resultant DeviceUser object for the action.',
    }),
  })
  .openapi({
    description: 'Response message for blocking the device from accessing user data.',
    required: [],
  })
  .openapi('BlockDeviceUserResponse')

const CancelUserInvitationRequestSchema = z
  .object({})
  .openapi({ description: 'Request to cancel sent invitation for target email in UserInvitation.' })
  .openapi('CancelUserInvitationRequest')

const CancelWipeDeviceRequestSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.",
      }),
  })
  .openapi({
    description: 'Request message for cancelling an unfinished device wipe.',
    required: [],
  })
  .openapi('CancelWipeDeviceRequest')

const CertificateTemplateSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The template id of the template. Example: "1.3.6.1.4.1.311.21.8.15608621.11768144.5720724.16068415.6889630.81.2472537.7784047".',
      }),
    majorVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Major version of the template. Example: 100.' }),
    minorVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The minor version of the template. Example: 12.' }),
  })
  .openapi({ description: 'CertificateTemplate (v3 Extension in X.509).', required: [] })
  .openapi('CertificateTemplate')

const CertificateAttributesSchema = z
  .object({
    certificateTemplate: CertificateTemplateSchema.exactOptional().openapi({
      description: 'The X.509 extension for CertificateTemplate.',
    }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The encoded certificate fingerprint.' }),
    issuer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the issuer of this certificate.' }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serial number of the certificate, Example: "123456789".' }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject name of this certificate.' }),
    thumbprint: z.string().exactOptional().openapi({ description: 'The certificate thumbprint.' }),
    validationState: z
      .enum([
        'CERTIFICATE_VALIDATION_STATE_UNSPECIFIED',
        'VALIDATION_SUCCESSFUL',
        'VALIDATION_FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'Validation state of this certificate.' }),
    validityExpirationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Certificate not valid at or after this timestamp.' }),
    validityStartTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Certificate not valid before this timestamp.' }),
  })
  .openapi({ description: 'Stores information about a certificate.', required: [] })
  .openapi('CertificateAttributes')

const EndpointVerificationSpecificAttributesSchema = z
  .object({
    certificateAttributes: z
      .array(CertificateAttributesSchema)
      .exactOptional()
      .openapi({ description: 'Details of certificates.' }),
  })
  .openapi({
    description:
      'Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview',
    required: [],
  })
  .openapi('EndpointVerificationSpecificAttributes')

const DeviceSchema = z
  .object({
    androidSpecificAttributes: AndroidAttributesSchema.exactOptional().openapi({
      description: 'Output only. Attributes specific to Android devices.',
      readOnly: true,
    }),
    assetTag: z.string().exactOptional().openapi({ description: 'Asset tag of the device.' }),
    basebandVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Baseband version of the device.', readOnly: true }),
    bootloaderVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Device bootloader version. Example: 0.6.7.',
        readOnly: true,
      }),
    brand: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Device brand. Example: Samsung.', readOnly: true }),
    buildNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Build number of the device.', readOnly: true }),
    clientTypes: z
      .array(
        z.enum([
          'CLIENT_TYPE_UNSPECIFIED',
          'DRIVE_FS',
          'FUNDAMENTAL',
          'ENDPOINT_VERIFICATION',
          'WINDOWS_ADVANCED',
          'GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'List of the clients the device is reporting to.' }),
    compromisedState: z
      .enum(['COMPROMISED_STATE_UNSPECIFIED', 'COMPROMISED', 'UNCOMPROMISED'])
      .exactOptional()
      .openapi({
        description: 'Output only. Represents whether the Device is compromised.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.',
        readOnly: true,
      }),
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the device.' }),
    deviceType: z
      .enum([
        'DEVICE_TYPE_UNSPECIFIED',
        'ANDROID',
        'IOS',
        'GOOGLE_SYNC',
        'WINDOWS',
        'MAC_OS',
        'LINUX',
        'CHROME_OS',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Type of device.', readOnly: true }),
    enabledDeveloperOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether developer options is enabled on device.',
        readOnly: true,
      }),
    enabledUsbDebugging: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether USB debugging is enabled on device.',
        readOnly: true,
      }),
    encryptionState: z
      .enum(['ENCRYPTION_STATE_UNSPECIFIED', 'UNSUPPORTED_BY_DEVICE', 'ENCRYPTED', 'NOT_ENCRYPTED'])
      .exactOptional()
      .openapi({ description: 'Output only. Device encryption state.', readOnly: true }),
    endpointVerificationSpecificAttributes:
      EndpointVerificationSpecificAttributesSchema.exactOptional().openapi({
        description: 'Output only. Attributes specific to Endpoint Verification devices.',
        readOnly: true,
      }),
    hostname: z.string().exactOptional().openapi({ description: 'Host name of the device.' }),
    imei: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. IMEI number of device if GSM device; empty otherwise.',
        readOnly: true,
      }),
    kernelVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Kernel version of the device.', readOnly: true }),
    lastSyncTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Most recent time when device synced with this service.' }),
    managementState: z
      .enum([
        'MANAGEMENT_STATE_UNSPECIFIED',
        'APPROVED',
        'BLOCKED',
        'PENDING',
        'UNPROVISIONED',
        'WIPING',
        'WIPED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Management state of the device', readOnly: true }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Device manufacturer. Example: Motorola.',
        readOnly: true,
      }),
    meid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. MEID number of device if CDMA device; empty otherwise.',
        readOnly: true,
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Model name of device. Example: Pixel 3.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique id assigned to the Device.',
        readOnly: true,
      }),
    networkOperator: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Mobile or network operator of device, if available.',
        readOnly: true,
      }),
    osVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. OS version of the device. Example: Android 8.1.0.',
        readOnly: true,
      }),
    otherAccounts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account\'s domain has only one account. Examples: "com.example", "xyz.com".',
        readOnly: true,
      }),
    ownerType: z
      .enum(['DEVICE_OWNERSHIP_UNSPECIFIED', 'COMPANY', 'BYOD'])
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the device is owned by the company or an individual',
        readOnly: true,
      }),
    releaseVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. OS release version. Example: 6.0.', readOnly: true }),
    securityPatchTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. OS security patch update time on device.',
        readOnly: true,
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serial Number of device. Example: HT82V1A01076.' }),
    wifiMacAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'WiFi MAC addresses of device.' }),
  })
  .openapi({
    description:
      'A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.',
    required: [],
  })
  .openapi('Device')

const CancelWipeDeviceResponseSchema = z
  .object({
    device: DeviceSchema.exactOptional().openapi({
      description:
        'Resultant Device object for the action. Note that asset tags will not be returned in the device object.',
    }),
  })
  .openapi({
    description: 'Response message for cancelling an unfinished device wipe.',
    required: [],
  })
  .openapi('CancelWipeDeviceResponse')

const CancelWipeDeviceUserRequestSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.",
      }),
  })
  .openapi({
    description: 'Request message for cancelling an unfinished user account wipe.',
    required: [],
  })
  .openapi('CancelWipeDeviceUserRequest')

const CancelWipeDeviceUserResponseSchema = z
  .object({
    deviceUser: DeviceUserSchema.exactOptional().openapi({
      description: 'Resultant DeviceUser object for the action.',
    }),
  })
  .openapi({
    description: 'Response message for cancelling an unfinished user account wipe.',
    required: [],
  })
  .openapi('CancelWipeDeviceUserResponse')

const CheckTransitiveMembershipResponseSchema = z
  .object({
    hasMembership: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Response does not include the possible roles of a member since the behavior of this rpc is not all-or-nothing unlike the other rpcs. So, it may not be possible to list all the roles definitively, due to possible lack of authorization in some of the paths.',
      }),
  })
  .openapi({
    description: 'The response message for MembershipsService.CheckTransitiveMembership.',
    required: [],
  })
  .openapi('CheckTransitiveMembershipResponse')

const CustomAttributeValueSchema = z
  .object({
    boolValue: z.boolean().exactOptional().openapi({ description: 'Represents a boolean value.' }),
    numberValue: z.float64().exactOptional().openapi({ description: 'Represents a double value.' }),
    stringValue: z.string().exactOptional().openapi({ description: 'Represents a string value.' }),
  })
  .openapi({
    description: 'Additional custom attribute values may be one of these types',
    required: [],
  })
  .openapi('CustomAttributeValue')

const ClientStateSchema = z
  .object({
    assetTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The caller can specify asset tags for this resource' }),
    complianceState: z
      .enum(['COMPLIANCE_STATE_UNSPECIFIED', 'COMPLIANT', 'NON_COMPLIANT'])
      .exactOptional()
      .openapi({
        description: 'The compliance state of the resource as specified by the API client.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the client state data was created.',
        readOnly: true,
      }),
    customId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest',
      }),
    healthScore: z
      .enum(['HEALTH_SCORE_UNSPECIFIED', 'VERY_POOR', 'POOR', 'NEUTRAL', 'GOOD', 'VERY_GOOD'])
      .exactOptional()
      .openapi({ description: 'The Health score of the resource' }),
    keyValuePairs: z
      .record(z.string(), CustomAttributeValueSchema)
      .exactOptional()
      .openapi({
        description:
          'The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.',
      }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the client state data was last updated.',
        readOnly: true,
      }),
    managed: z
      .enum(['MANAGED_STATE_UNSPECIFIED', 'MANAGED', 'UNMANAGED'])
      .exactOptional()
      .openapi({
        description: 'The management state of the resource as specified by the API client.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data.',
        readOnly: true,
      }),
    ownerType: z
      .enum(['OWNER_TYPE_UNSPECIFIED', 'OWNER_TYPE_CUSTOMER', 'OWNER_TYPE_PARTNER'])
      .exactOptional()
      .openapi({ description: 'Output only. The owner of the ClientState', readOnly: true }),
    scoreReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'A descriptive cause of the health score.' }),
  })
  .openapi({
    description:
      'Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users',
    required: [],
  })
  .openapi('ClientState')

const CreateDeviceRequestSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.",
      }),
    device: DeviceSchema.exactOptional().openapi({
      description:
        'Required. The device to be created. The name field within this device is ignored in the create method. A new name is created by the method, and returned within the response. Only the fields `device_type`, `serial_number` and `asset_tag` (if present) are used to create the device. All other fields are ignored. The `device_type` and `serial_number` fields are required.',
    }),
  })
  .openapi({ description: 'Request message for creating a Company Owned device.', required: [] })
  .openapi('CreateDeviceRequest')

const CreateInboundSamlSsoProfileOperationMetadataSchema = z
  .object({})
  .openapi({
    description:
      'LRO response metadata for InboundSamlSsoProfilesService.CreateInboundSamlSsoProfile.',
  })
  .openapi('CreateInboundSamlSsoProfileOperationMetadata')

const CreateInboundSsoAssignmentOperationMetadataSchema = z
  .object({})
  .openapi({
    description:
      'LRO response metadata for InboundSsoAssignmentsService.CreateInboundSsoAssignment.',
  })
  .openapi('CreateInboundSsoAssignmentOperationMetadata')

const DeleteIdpCredentialOperationMetadataSchema = z
  .object({})
  .openapi({
    description: 'LRO response metadata for InboundSamlSsoProfilesService.DeleteIdpCredential.',
  })
  .openapi('DeleteIdpCredentialOperationMetadata')

const DeleteInboundSamlSsoProfileOperationMetadataSchema = z
  .object({})
  .openapi({
    description:
      'LRO response metadata for InboundSamlSsoProfilesService.DeleteInboundSamlSsoProfile.',
  })
  .openapi('DeleteInboundSamlSsoProfileOperationMetadata')

const DeleteInboundSsoAssignmentOperationMetadataSchema = z
  .object({})
  .openapi({
    description:
      'LRO response metadata for InboundSsoAssignmentsService.DeleteInboundSsoAssignment.',
  })
  .openapi('DeleteInboundSsoAssignmentOperationMetadata')

const DsaPublicKeyInfoSchema = z
  .object({
    keySize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Key size in bits (size of parameter P).' }),
  })
  .openapi({ description: 'Information of a DSA public key.', required: [] })
  .openapi('DsaPublicKeyInfo')

const ExpiryDetailSchema = z
  .object({
    expireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the `MembershipRole` will expire.' }),
  })
  .openapi({ description: 'The `MembershipRole` expiry details.', required: [] })
  .openapi('ExpiryDetail')

const MembershipRoleRestrictionEvaluationSchema = z
  .object({
    state: z
      .enum(['STATE_UNSPECIFIED', 'COMPLIANT', 'FORWARD_COMPLIANT', 'NON_COMPLIANT', 'EVALUATING'])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state of the restriction',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The evaluated state of this restriction.', required: [] })
  .openapi('MembershipRoleRestrictionEvaluation')

const RestrictionEvaluationsSchema = z
  .object({
    memberRestrictionEvaluation: MembershipRoleRestrictionEvaluationSchema.exactOptional().openapi({
      description:
        'Evaluation of the member restriction applied to this membership. Empty if the user lacks permission to view the restriction evaluation.',
    }),
  })
  .openapi({
    description: 'Evaluations of restrictions applied to parent group on this membership.',
    required: [],
  })
  .openapi('RestrictionEvaluations')

const MembershipRoleSchema = z
  .object({
    expiryDetail: ExpiryDetailSchema.exactOptional().openapi({
      description:
        'The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`.',
      }),
    restrictionEvaluations: RestrictionEvaluationsSchema.exactOptional().openapi({
      description: 'Evaluations of restrictions applied to parent group on this membership.',
    }),
  })
  .openapi({
    description:
      'A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.',
    required: [],
  })
  .openapi('MembershipRole')

const MembershipSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the `Membership` was created.',
        readOnly: true,
      }),
    deliverySetting: z
      .enum(['DELIVERY_SETTING_UNSPECIFIED', 'ALL_MAIL', 'DIGEST', 'DAILY', 'NONE', 'DISABLED'])
      .exactOptional()
      .openapi({
        description: 'Output only. Delivery setting associated with the membership.',
        readOnly: true,
      }),
    memberKey: EntityKeySchema.exactOptional().openapi({
      description:
        'Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`.',
        readOnly: true,
      }),
    preferredMemberKey: EntityKeySchema.exactOptional().openapi({
      description:
        'Required. Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.',
    }),
    roles: z
      .array(MembershipRoleSchema)
      .exactOptional()
      .openapi({
        description:
          'The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'USER', 'SERVICE_ACCOUNT', 'GROUP', 'SHARED_DRIVE', 'OTHER'])
      .exactOptional()
      .openapi({ description: 'Output only. The type of the membership.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the `Membership` was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".',
    required: [],
  })
  .openapi('Membership')

const MembershipAdjacencyListSchema = z
  .object({
    edges: z
      .array(MembershipSchema)
      .exactOptional()
      .openapi({
        description:
          'Each edge contains information about the member that belongs to this group. Note: Fields returned here will help identify the specific Membership resource (e.g name, preferred_member_key and role), but may not be a comprehensive list of all fields.',
      }),
    group: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource name of the group that the members belong to.' }),
  })
  .openapi({
    description: "Membership graph's path information as an adjacency list.",
    required: [],
  })
  .openapi('MembershipAdjacencyList')

const GroupSchema: z.ZodType<GroupType> = z
  .lazy(() =>
    z
      .object({
        additionalGroupKeys: z
          .array(EntityKeySchema)
          .exactOptional()
          .openapi({
            description: 'Output only. Additional group keys associated with the Group.',
            readOnly: true,
          }),
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The time when the `Group` was created.',
            readOnly: true,
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters.',
          }),
        displayName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The display name of the `Group`.' }),
        dynamicGroupMetadata: DynamicGroupMetadataSchema.exactOptional().openapi({
          description: 'Optional. Dynamic group metadata like queries and status.',
        }),
        groupKey: EntityKeySchema.exactOptional().openapi({
          description: 'Required. The `EntityKey` of the `Group`.',
        }),
        labels: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'Required. One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of `cloudidentity.googleapis.com/groups.discussion_forum` and an empty value. Existing Google Groups can have an additional label with a key of `cloudidentity.googleapis.com/groups.security` and an empty value added to them. **This is an immutable change and the security label cannot be removed once added.** Dynamic groups have a label with a key of `cloudidentity.googleapis.com/groups.dynamic`. Identity-mapped groups for Cloud Search have a label with a key of `system/groups/external` and an empty value.',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`.',
            readOnly: true,
          }),
        parent: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source}` for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, \'C046psxkn\'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793)',
          }),
        posixGroups: z
          .array(PosixGroupSchema)
          .exactOptional()
          .openapi({ description: 'Optional. The POSIX groups associated with the `Group`.' }),
        updateTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The time when the `Group` was last updated.',
            readOnly: true,
          }),
      })
      .openapi({
        description:
          'A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.',
        required: [],
      }),
  )
  .openapi('Group')

const GetMembershipGraphResponseSchema = z
  .object({
    adjacencyList: z
      .array(MembershipAdjacencyListSchema)
      .exactOptional()
      .openapi({
        description: "The membership graph's path information represented as an adjacency list.",
      }),
    groups: z
      .array(GroupSchema)
      .exactOptional()
      .openapi({
        description:
          "The resources representing each group in the adjacency list. Each group in this list can be correlated to a 'group' of the MembershipAdjacencyList using the 'name' of the Group resource.",
      }),
  })
  .openapi({
    description: 'The response message for MembershipsService.GetMembershipGraph.',
    required: [],
  })
  .openapi('GetMembershipGraphResponse')

const GoogleAppsCloudidentityDevicesV1AndroidAttributesSchema = z
  .object({
    enabledUnknownSources: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether applications from unknown sources can be installed on device.',
      }),
    ownerProfileAccount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles.',
      }),
    ownershipPrivilege: z
      .enum([
        'OWNERSHIP_PRIVILEGE_UNSPECIFIED',
        'DEVICE_ADMINISTRATOR',
        'PROFILE_OWNER',
        'DEVICE_OWNER',
      ])
      .exactOptional()
      .openapi({ description: 'Ownership privileges on device.' }),
    supportsWorkProfile: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy.',
      }),
  })
  .openapi({
    description: 'Resource representing the Android specific attributes of a Device.',
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1AndroidAttributes')

const GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for ApproveDeviceUser LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata')

const GoogleAppsCloudidentityDevicesV1DeviceUserSchema = z
  .object({
    compromisedState: z
      .enum(['COMPROMISED_STATE_UNSPECIFIED', 'COMPROMISED', 'NOT_COMPROMISED'])
      .exactOptional()
      .openapi({ description: 'Compromised State of the DeviceUser object' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the user first signed in to the device' }),
    firstSyncTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Most recent time when user registered with this service.',
        readOnly: true,
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Default locale used on device, in IETF BCP-47 format.',
        readOnly: true,
      }),
    lastSyncTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Last time when user synced with policies.',
        readOnly: true,
      }),
    managementState: z
      .enum([
        'MANAGEMENT_STATE_UNSPECIFIED',
        'WIPING',
        'WIPED',
        'APPROVED',
        'BLOCKED',
        'PENDING_APPROVAL',
        'UNENROLLED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Management state of the user on the device.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device}/deviceUsers/{device_user}`, where `device_user` uniquely identifies a user's use of a device.",
        readOnly: true,
      }),
    passwordState: z
      .enum(['PASSWORD_STATE_UNSPECIFIED', 'PASSWORD_SET', 'PASSWORD_NOT_SET'])
      .exactOptional()
      .openapi({ description: 'Password state of the DeviceUser object' }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. User agent on the device for this specific user',
        readOnly: true,
      }),
    userEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of the user registered on the device.' }),
  })
  .openapi({
    description:
      "Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device",
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1DeviceUser')

const GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponseSchema = z
  .object({
    deviceUser: GoogleAppsCloudidentityDevicesV1DeviceUserSchema.exactOptional().openapi({
      description: 'Resultant DeviceUser object for the action.',
    }),
  })
  .openapi({
    description: 'Response message for approving the device to access user data.',
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse')

const GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for BlockDeviceUser LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata')

const GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponseSchema = z
  .object({
    deviceUser: GoogleAppsCloudidentityDevicesV1DeviceUserSchema.exactOptional().openapi({
      description: 'Resultant DeviceUser object for the action.',
    }),
  })
  .openapi({
    description: 'Response message for blocking the device from accessing user data.',
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse')

const GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for CancelWipeDevice LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata')

const GoogleAppsCloudidentityDevicesV1DeviceSchema = z
  .object({
    androidSpecificAttributes:
      GoogleAppsCloudidentityDevicesV1AndroidAttributesSchema.exactOptional().openapi({
        description: 'Output only. Attributes specific to Android devices.',
        readOnly: true,
      }),
    assetTag: z.string().exactOptional().openapi({ description: 'Asset tag of the device.' }),
    basebandVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Baseband version of the device.', readOnly: true }),
    bootloaderVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Device bootloader version. Example: 0.6.7.',
        readOnly: true,
      }),
    brand: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Device brand. Example: Samsung.', readOnly: true }),
    buildNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Build number of the device.', readOnly: true }),
    compromisedState: z
      .enum(['COMPROMISED_STATE_UNSPECIFIED', 'COMPROMISED', 'UNCOMPROMISED'])
      .exactOptional()
      .openapi({
        description: 'Output only. Represents whether the Device is compromised.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.',
        readOnly: true,
      }),
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the device.' }),
    deviceType: z
      .enum([
        'DEVICE_TYPE_UNSPECIFIED',
        'ANDROID',
        'IOS',
        'GOOGLE_SYNC',
        'WINDOWS',
        'MAC_OS',
        'LINUX',
        'CHROME_OS',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Type of device.', readOnly: true }),
    enabledDeveloperOptions: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether developer options is enabled on device.',
        readOnly: true,
      }),
    enabledUsbDebugging: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether USB debugging is enabled on device.',
        readOnly: true,
      }),
    encryptionState: z
      .enum(['ENCRYPTION_STATE_UNSPECIFIED', 'UNSUPPORTED_BY_DEVICE', 'ENCRYPTED', 'NOT_ENCRYPTED'])
      .exactOptional()
      .openapi({ description: 'Output only. Device encryption state.', readOnly: true }),
    imei: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. IMEI number of device if GSM device; empty otherwise.',
        readOnly: true,
      }),
    kernelVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Kernel version of the device.', readOnly: true }),
    lastSyncTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Most recent time when device synced with this service.' }),
    managementState: z
      .enum([
        'MANAGEMENT_STATE_UNSPECIFIED',
        'APPROVED',
        'BLOCKED',
        'PENDING',
        'UNPROVISIONED',
        'WIPING',
        'WIPED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Management state of the device', readOnly: true }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Device manufacturer. Example: Motorola.',
        readOnly: true,
      }),
    meid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. MEID number of device if CDMA device; empty otherwise.',
        readOnly: true,
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Model name of device. Example: Pixel 3.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}`, where device is the unique id assigned to the Device.',
        readOnly: true,
      }),
    networkOperator: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Mobile or network operator of device, if available.',
        readOnly: true,
      }),
    osVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. OS version of the device. Example: Android 8.1.0.',
        readOnly: true,
      }),
    otherAccounts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account\'s domain has only one account. Examples: "com.example", "xyz.com".',
        readOnly: true,
      }),
    ownerType: z
      .enum(['DEVICE_OWNERSHIP_UNSPECIFIED', 'COMPANY', 'BYOD'])
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the device is owned by the company or an individual',
        readOnly: true,
      }),
    releaseVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. OS release version. Example: 6.0.', readOnly: true }),
    securityPatchTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. OS security patch update time on device.',
        readOnly: true,
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serial Number of device. Example: HT82V1A01076.' }),
    wifiMacAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'WiFi MAC addresses of device.' }),
  })
  .openapi({
    description:
      ' A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.',
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1Device')

const GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponseSchema = z
  .object({
    device: GoogleAppsCloudidentityDevicesV1DeviceSchema.exactOptional().openapi({
      description:
        'Resultant Device object for the action. Note that asset tags will not be returned in the device object.',
    }),
  })
  .openapi({
    description: 'Response message for cancelling an unfinished device wipe.',
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse')

const GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for CancelWipeDeviceUser LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata')

const GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponseSchema = z
  .object({
    deviceUser: GoogleAppsCloudidentityDevicesV1DeviceUserSchema.exactOptional().openapi({
      description: 'Resultant DeviceUser object for the action.',
    }),
  })
  .openapi({
    description: 'Response message for cancelling an unfinished user account wipe.',
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse')

const GoogleAppsCloudidentityDevicesV1CustomAttributeValueSchema = z
  .object({
    boolValue: z.boolean().exactOptional().openapi({ description: 'Represents a boolean value.' }),
    numberValue: z.float64().exactOptional().openapi({ description: 'Represents a double value.' }),
    stringValue: z.string().exactOptional().openapi({ description: 'Represents a string value.' }),
  })
  .openapi({
    description: 'Additional custom attribute values may be one of these types',
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1CustomAttributeValue')

const GoogleAppsCloudidentityDevicesV1ClientStateSchema = z
  .object({
    assetTags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The caller can specify asset tags for this resource' }),
    complianceState: z
      .enum(['COMPLIANCE_STATE_UNSPECIFIED', 'COMPLIANT', 'NON_COMPLIANT'])
      .exactOptional()
      .openapi({
        description: 'The compliance state of the resource as specified by the API client.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the client state data was created.',
        readOnly: true,
      }),
    customId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest',
      }),
    healthScore: z
      .enum(['HEALTH_SCORE_UNSPECIFIED', 'VERY_POOR', 'POOR', 'NEUTRAL', 'GOOD', 'VERY_GOOD'])
      .exactOptional()
      .openapi({
        description:
          'The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies.',
      }),
    keyValuePairs: z
      .record(z.string(), GoogleAppsCloudidentityDevicesV1CustomAttributeValueSchema)
      .exactOptional()
      .openapi({
        description:
          'The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.',
      }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the client state data was last updated.',
        readOnly: true,
      }),
    managed: z
      .enum(['MANAGED_STATE_UNSPECIFIED', 'MANAGED', 'UNMANAGED'])
      .exactOptional()
      .openapi({
        description: 'The management state of the resource as specified by the API client.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device}/deviceUsers/{device_user}/clientState/{partner}`, where partner corresponds to the partner storing the data. For partners belonging to the \"BeyondCorp Alliance\", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer}-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')",
        readOnly: true,
      }),
    ownerType: z
      .enum(['OWNER_TYPE_UNSPECIFIED', 'OWNER_TYPE_CUSTOMER', 'OWNER_TYPE_PARTNER'])
      .exactOptional()
      .openapi({ description: 'Output only. The owner of the ClientState', readOnly: true }),
    scoreReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'A descriptive cause of the health score.' }),
  })
  .openapi({
    description:
      'Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users',
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1ClientState')

const GoogleAppsCloudidentityDevicesV1CreateDeviceMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for CreateDevice LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata')

const GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for DeleteDevice LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata')

const GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for DeleteDeviceUser LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata')

const GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for ListEndpointApps LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata')

const GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for SignoutDeviceUser LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata')

const GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for UpdateClientState LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata')

const GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for UpdateDevice LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata')

const GoogleAppsCloudidentityDevicesV1WipeDeviceMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for WipeDevice LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata')

const GoogleAppsCloudidentityDevicesV1WipeDeviceResponseSchema = z
  .object({
    device: GoogleAppsCloudidentityDevicesV1DeviceSchema.exactOptional().openapi({
      description:
        'Resultant Device object for the action. Note that asset tags will not be returned in the device object.',
    }),
  })
  .openapi({ description: 'Response message for wiping all data on the device.', required: [] })
  .openapi('GoogleAppsCloudidentityDevicesV1WipeDeviceResponse')

const GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata for WipeDeviceUser LRO.' })
  .openapi('GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata')

const GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponseSchema = z
  .object({
    deviceUser: GoogleAppsCloudidentityDevicesV1DeviceUserSchema.exactOptional().openapi({
      description: 'Resultant DeviceUser object for the action.',
    }),
  })
  .openapi({
    description: "Response message for wiping the user's account from the device.",
    required: [],
  })
  .openapi('GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse')

const TransitiveMembershipRoleSchema = z
  .object({
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TransitiveMembershipRole in string format. Currently supported TransitiveMembershipRoles: `"MEMBER"`, `"OWNER"`, and `"MANAGER"`.',
      }),
  })
  .openapi({
    description: 'Message representing the role of a TransitiveMembership.',
    required: [],
  })
  .openapi('TransitiveMembershipRole')

const GroupRelationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name for this group.' }),
    group: z.string().exactOptional().openapi({ description: 'Resource name for this group.' }),
    groupKey: EntityKeySchema.exactOptional().openapi({
      description:
        'Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels for Group resource.' }),
    relationType: z
      .enum(['RELATION_TYPE_UNSPECIFIED', 'DIRECT', 'INDIRECT', 'DIRECT_AND_INDIRECT'])
      .exactOptional()
      .openapi({ description: 'The relation between the member and the transitive group.' }),
    roles: z
      .array(TransitiveMembershipRoleSchema)
      .exactOptional()
      .openapi({ description: 'Membership roles of the member for the group.' }),
  })
  .openapi({
    description: 'Message representing a transitive group of a user or a group.',
    required: [],
  })
  .openapi('GroupRelation')

const RsaPublicKeyInfoSchema = z
  .object({
    keySize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Key size in bits (size of the modulus).' }),
  })
  .openapi({ description: 'Information of a RSA public key.', required: [] })
  .openapi('RsaPublicKeyInfo')

const IdpCredentialSchema = z
  .object({
    dsaKeyInfo: DsaPublicKeyInfoSchema.exactOptional().openapi({
      description: 'Output only. Information of a DSA public key.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the credential.',
        readOnly: true,
      }),
    rsaKeyInfo: RsaPublicKeyInfoSchema.exactOptional().openapi({
      description: 'Output only. Information of a RSA public key.',
      readOnly: true,
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the `IdpCredential` was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Credential for verifying signatures produced by the Identity Provider.',
    required: [],
  })
  .openapi('IdpCredential')

const SamlIdpConfigSchema = z
  .object({
    changePasswordUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The **Change Password URL** of the identity provider. Users will be sent to this URL when changing their passwords at `myaccount.google.com`. This takes precedence over the change password URL configured at customer-level. Must use `HTTPS`.',
      }),
    entityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The SAML **Entity ID** of the identity provider.' }),
    logoutRedirectUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The **Logout Redirect URL** (sign-out page URL) of the identity provider. When a user clicks the sign-out link on a Google page, they will be redirected to this URL. This is a pure redirect with no attached SAML `LogoutRequest` i.e. SAML single logout is not supported. Must use `HTTPS`.',
      }),
    singleSignOnServiceUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The `SingleSignOnService` endpoint location (sign-in page URL) of the identity provider. This is the URL where the `AuthnRequest` will be sent. Must use `HTTPS`. Assumed to accept the `HTTP-Redirect` binding.',
      }),
  })
  .openapi({ description: 'SAML IDP (identity provider) configuration.', required: [] })
  .openapi('SamlIdpConfig')

const SamlSpConfigSchema = z
  .object({
    assertionConsumerServiceUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The SAML **Assertion Consumer Service (ACS) URL** to be used for the IDP-initiated login. Assumed to accept response messages via the `HTTP-POST` binding.',
        readOnly: true,
      }),
    entityId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The SAML **Entity ID** for this service provider.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'SAML SP (service provider) configuration.', required: [] })
  .openapi('SamlSpConfig')

const InboundSamlSsoProfileSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. The customer. For example: `customers/C0123abc`.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable name of the SAML SSO profile.' }),
    idpConfig: SamlIdpConfigSchema.exactOptional().openapi({
      description: 'SAML identity provider configuration.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the SAML SSO profile.',
        readOnly: true,
      }),
    spConfig: SamlSpConfigSchema.exactOptional().openapi({
      description:
        'SAML service provider configuration for this SAML SSO profile. These are the service provider details provided by Google that should be configured on the corresponding identity provider.',
    }),
  })
  .openapi({
    description:
      'A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.',
    required: [],
  })
  .openapi('InboundSamlSsoProfile')

const SamlSsoInfoSchema = z
  .object({
    inboundSamlSsoProfile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the `InboundSamlSsoProfile` to use. Must be of the form `inboundSamlSsoProfiles/{inbound_saml_sso_profile}`. ',
      }),
  })
  .openapi({
    description: 'Details that are applicable when `sso_mode` == `SAML_SSO`.',
    required: [],
  })
  .openapi('SamlSsoInfo')

const SignInBehaviorSchema = z
  .object({
    redirectCondition: z
      .enum(['REDIRECT_CONDITION_UNSPECIFIED', 'NEVER'])
      .exactOptional()
      .openapi({ description: 'When to redirect sign-ins to the IdP.' }),
  })
  .openapi({ description: 'Controls sign-in behavior.', required: [] })
  .openapi('SignInBehavior')

const InboundSsoAssignmentSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. The customer. For example: `customers/C0123abc`.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment.',
        readOnly: true,
      }),
    rank: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set.',
      }),
    samlSsoInfo: SamlSsoInfoSchema.exactOptional().openapi({
      description: 'SAML SSO details. Must be set if and only if `sso_mode` is set to `SAML_SSO`.',
    }),
    signInBehavior: SignInBehaviorSchema.exactOptional().openapi({
      description:
        'Assertions about users assigned to an IdP will always be accepted from that IdP. This controls whether/when Google should redirect a user to the IdP. Unset (defaults) is the recommended configuration.',
    }),
    ssoMode: z
      .enum(['SSO_MODE_UNSPECIFIED', 'SSO_OFF', 'SAML_SSO', 'DOMAIN_WIDE_SAML_IF_ENABLED'])
      .exactOptional()
      .openapi({ description: 'Inbound SSO behavior.' }),
    targetGroup: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. Must be of the form `groups/{group}`.' }),
    targetOrgUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. Must be of the form `orgUnits/{org_unit}`.' }),
  })
  .openapi({
    description: 'Targets with "set" SSO assignments and their respective assignments.',
    required: [],
  })
  .openapi('InboundSsoAssignment')

const IsInvitableUserResponseSchema = z
  .object({
    isInvitableUser: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Returns true if the email address is invitable.' }),
  })
  .openapi({ description: 'Response for IsInvitableUser RPC.', required: [] })
  .openapi('IsInvitableUserResponse')

const ListClientStatesResponseSchema = z
  .object({
    clientStates: z
      .array(ClientStateSchema)
      .exactOptional()
      .openapi({ description: 'Client states meeting the list restrictions.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results. Empty if there are no more results.',
      }),
  })
  .openapi({
    description: 'Response message that is returned in LRO result of ListClientStates Operation.',
    required: [],
  })
  .openapi('ListClientStatesResponse')

const ListDeviceUsersResponseSchema = z
  .object({
    deviceUsers: z
      .array(DeviceUserSchema)
      .exactOptional()
      .openapi({ description: 'Devices meeting the list restrictions.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results. Empty if there are no more results.',
      }),
  })
  .openapi({
    description: 'Response message that is returned from the ListDeviceUsers method.',
    required: [],
  })
  .openapi('ListDeviceUsersResponse')

const ListDevicesResponseSchema = z
  .object({
    devices: z
      .array(DeviceSchema)
      .exactOptional()
      .openapi({ description: 'Devices meeting the list restrictions.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results. Empty if there are no more results.',
      }),
  })
  .openapi({
    description: 'Response message that is returned from the ListDevices method.',
    required: [],
  })
  .openapi('ListDevicesResponse')

const ListGroupsResponseSchema = z
  .object({
    groups: z
      .array(GroupSchema)
      .exactOptional()
      .openapi({ description: 'The `Group` resources under the specified `parent`.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to retrieve the next page of results, or empty if there are no more results available.',
      }),
  })
  .openapi({ description: 'The response message for GroupsService.ListGroups.', required: [] })
  .openapi('ListGroupsResponse')

const ListIdpCredentialsResponseSchema = z
  .object({
    idpCredentials: z
      .array(IdpCredentialSchema)
      .exactOptional()
      .openapi({ description: 'The IdpCredentials from the specified InboundSamlSsoProfile.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({
    description: 'Response of the InboundSamlSsoProfilesService.ListIdpCredentials method.',
    required: [],
  })
  .openapi('ListIdpCredentialsResponse')

const ListInboundSamlSsoProfilesResponseSchema = z
  .object({
    inboundSamlSsoProfiles: z
      .array(InboundSamlSsoProfileSchema)
      .exactOptional()
      .openapi({ description: 'List of InboundSamlSsoProfiles.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({
    description: 'Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method.',
    required: [],
  })
  .openapi('ListInboundSamlSsoProfilesResponse')

const ListInboundSsoAssignmentsResponseSchema = z
  .object({
    inboundSsoAssignments: z
      .array(InboundSsoAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'The assignments.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({
    description: 'Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.',
    required: [],
  })
  .openapi('ListInboundSsoAssignmentsResponse')

const ListMembershipsResponseSchema = z
  .object({
    memberships: z
      .array(MembershipSchema)
      .exactOptional()
      .openapi({ description: 'The `Membership`s under the specified `parent`.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to retrieve the next page of results, or empty if there are no more results available.',
      }),
  })
  .openapi({
    description: 'The response message for MembershipsService.ListMemberships.',
    required: [],
  })
  .openapi('ListMembershipsResponse')

const OrgMembershipSchema = z
  .object({
    member: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Org member id as full resource name. Format for shared drive resource: //drive.googleapis.com/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource).',
      }),
    memberUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uri with which you can read the member. This follows https://aip.dev/122 Format for shared drive resource: https://drive.googleapis.com/drive/v3/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of [OrgMembership.EntityType], and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE.',
      }),
    type: z
      .enum(['ENTITY_TYPE_UNSPECIFIED', 'SHARED_DRIVE'])
      .exactOptional()
      .openapi({ description: 'Immutable. Entity type for the org member.' }),
  })
  .openapi({
    description:
      'A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member".',
    required: [],
  })
  .openapi('OrgMembership')

const ListOrgMembershipsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.',
      }),
    orgMemberships: z
      .array(OrgMembershipSchema)
      .exactOptional()
      .openapi({ description: 'The non-vacuous membership in an orgUnit.' }),
  })
  .openapi({
    description: 'The response message for OrgMembershipsService.ListOrgMemberships.',
    required: [],
  })
  .openapi('ListOrgMembershipsResponse')

const UserInvitationSchema = z
  .object({
    mailsSentCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of invitation emails sent to the user.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Shall be of the form `customers/{customer}/userinvitations/{user_email_address}`.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NOT_YET_SENT', 'INVITED', 'ACCEPTED', 'DECLINED'])
      .exactOptional()
      .openapi({ description: 'State of the `UserInvitation`.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when the `UserInvitation` was last updated.' }),
  })
  .openapi({
    description:
      "The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed.",
    required: [],
  })
  .openapi('UserInvitation')

const ListUserInvitationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token for the next page. If not empty, indicates that there may be more `UserInvitation` resources that match the listing request; this value can be used in a subsequent ListUserInvitationsRequest to get continued results with the current list call.',
      }),
    userInvitations: z
      .array(UserInvitationSchema)
      .exactOptional()
      .openapi({ description: 'The list of UserInvitation resources.' }),
  })
  .openapi({ description: 'Response message for UserInvitation listing request.', required: [] })
  .openapi('ListUserInvitationsResponse')

const LookupGroupNameResponseSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Group`.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The response message for GroupsService.LookupGroupName.', required: [] })
  .openapi('LookupGroupNameResponse')

const LookupMembershipNameResponseSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Membership`. Must be of the form `groups/{group_id}/memberships/{membership_id}`.',
      }),
  })
  .openapi({
    description: 'The response message for MembershipsService.LookupMembershipName.',
    required: [],
  })
  .openapi('LookupMembershipNameResponse')

const LookupSelfDeviceUsersResponseSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The customer Id that may be passed back to other Devices API methods such as List, Get, etc.',
      }),
    names: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '[Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: `devices/{device_id}/deviceUsers/{user_resource_id}`, where device_id is the unique ID assigned to a Device and user_resource_id is the unique user ID',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results. Empty if there are no more results.',
      }),
  })
  .openapi({
    description:
      "Response containing resource names of the DeviceUsers associated with the caller's credentials.",
    required: [],
  })
  .openapi('LookupSelfDeviceUsersResponse')

const MemberRelationSchema = z
  .object({
    member: z.string().exactOptional().openapi({ description: 'Resource name for this member.' }),
    preferredMemberKey: z
      .array(EntityKeySchema)
      .exactOptional()
      .openapi({
        description:
          'Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.',
      }),
    relationType: z
      .enum(['RELATION_TYPE_UNSPECIFIED', 'DIRECT', 'INDIRECT', 'DIRECT_AND_INDIRECT'])
      .exactOptional()
      .openapi({ description: 'The relation between the group and the transitive membership.' }),
    roles: z
      .array(TransitiveMembershipRoleSchema)
      .exactOptional()
      .openapi({ description: 'The membership role details (i.e name of role and expiry time).' }),
  })
  .openapi({
    description: 'Message representing a transitive membership of a group.',
    required: [],
  })
  .openapi('MemberRelation')

const RestrictionEvaluationSchema = z
  .object({
    state: z
      .enum(['STATE_UNSPECIFIED', 'EVALUATING', 'COMPLIANT', 'FORWARD_COMPLIANT', 'NON_COMPLIANT'])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state of the restriction',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The evaluated state of this restriction.', required: [] })
  .openapi('RestrictionEvaluation')

const MemberRestrictionSchema = z
  .object({
    evaluation: RestrictionEvaluationSchema.exactOptional().openapi({
      description: 'The evaluated state of this restriction on a group.',
    }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Member Restriction as defined by CEL expression. Supported restrictions are: `member.customer_id` and `member.type`. Valid values for `member.type` are `1`, `2` and `3`. They correspond to USER, SERVICE_ACCOUNT, and GROUP respectively. The value for `member.customer_id` only supports `groupCustomerId()` currently which means the customer id of the group will be used for restriction. Supported operators are `&&`, `||` and `==`, corresponding to AND, OR, and EQUAL. Examples: Allow only service accounts of given customer to be members. `member.type == 2 && member.customer_id == groupCustomerId()` Allow only users or groups to be members. `member.type == 1 || member.type == 3`',
      }),
  })
  .openapi({ description: 'The definition of MemberRestriction', required: [] })
  .openapi('MemberRestriction')

const MembershipRelationSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An extended description to help users determine the purpose of a `Group`.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the `Group`.' }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`.',
      }),
    groupKey: EntityKeySchema.exactOptional().openapi({
      description: 'The `EntityKey` of the `Group`.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value.',
      }),
    membership: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`.',
      }),
    roles: z
      .array(MembershipRoleSchema)
      .exactOptional()
      .openapi({ description: 'The `MembershipRole`s that apply to the `Membership`.' }),
  })
  .openapi({ description: 'Message containing membership relation.', required: [] })
  .openapi('MembershipRelation')

const UpdateMembershipRolesParamsSchema = z
  .object({
    fieldMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully-qualified names of fields to update. May only contain the field `expiry_detail.expire_time`.',
      }),
    membershipRole: MembershipRoleSchema.exactOptional().openapi({
      description:
        'The `MembershipRole`s to be updated. Only `MEMBER` `MembershipRoles` can currently be updated. May only contain a `MembershipRole` with `name` `MEMBER`.',
    }),
  })
  .openapi({ description: 'The details of an update to a `MembershipRole`.', required: [] })
  .openapi('UpdateMembershipRolesParams')

const ModifyMembershipRolesRequestSchema = z
  .object({
    addRoles: z
      .array(MembershipRoleSchema)
      .exactOptional()
      .openapi({
        description:
          'The `MembershipRole`s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if `update_roles_params` is set.',
      }),
    removeRoles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The `name`s of the `MembershipRole`s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead. Must not contain `MEMBER`. Must not be set if `update_roles_params` is set.',
      }),
    updateRolesParams: z
      .array(UpdateMembershipRolesParamsSchema)
      .exactOptional()
      .openapi({
        description:
          'The `MembershipRole`s to be updated. Updating roles in the same request as adding or removing roles is not supported. Must not be set if either `add_roles` or `remove_roles` is set.',
      }),
  })
  .openapi({
    description: 'The request message for MembershipsService.ModifyMembershipRoles.',
    required: [],
  })
  .openapi('ModifyMembershipRolesRequest')

const ModifyMembershipRolesResponseSchema = z
  .object({
    membership: MembershipSchema.exactOptional().openapi({
      description: 'The `Membership` resource after modifying its `MembershipRole`s.',
    }),
  })
  .openapi({
    description: 'The response message for MembershipsService.ModifyMembershipRoles.',
    required: [],
  })
  .openapi('ModifyMembershipRolesResponse')

const MoveOrgMembershipRequestSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Customer on whose membership change is made. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization.',
      }),
    destinationOrgUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. OrgUnit where the membership will be moved to. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits).',
      }),
  })
  .openapi({
    description: 'The request message for OrgMembershipsService.MoveOrgMembership.',
    required: [],
  })
  .openapi('MoveOrgMembershipRequest')

const StatusSchema = z
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
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
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
  .openapi('Operation')

const SearchDirectGroupsResponseSchema = z
  .object({
    memberships: z
      .array(MembershipRelationSchema)
      .exactOptional()
      .openapi({ description: 'List of direct groups satisfying the query.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results available for listing.',
      }),
  })
  .openapi({
    description: 'The response message for MembershipsService.SearchDirectGroups.',
    required: [],
  })
  .openapi('SearchDirectGroupsResponse')

const SearchGroupsResponseSchema = z
  .object({
    groups: z
      .array(GroupSchema)
      .exactOptional()
      .openapi({ description: 'The `Group` resources that match the search query.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to retrieve the next page of results, or empty if there are no more results available.',
      }),
  })
  .openapi({ description: 'The response message for GroupsService.SearchGroups.', required: [] })
  .openapi('SearchGroupsResponse')

const SearchTransitiveGroupsResponseSchema = z
  .object({
    memberships: z
      .array(GroupRelationSchema)
      .exactOptional()
      .openapi({ description: 'List of transitive groups satisfying the query.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results available for listing.',
      }),
  })
  .openapi({
    description: 'The response message for MembershipsService.SearchTransitiveGroups.',
    required: [],
  })
  .openapi('SearchTransitiveGroupsResponse')

const SearchTransitiveMembershipsResponseSchema = z
  .object({
    memberships: z
      .array(MemberRelationSchema)
      .exactOptional()
      .openapi({ description: 'List of transitive memberships satisfying the query.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results.',
      }),
  })
  .openapi({
    description: 'The response message for MembershipsService.SearchTransitiveMemberships.',
    required: [],
  })
  .openapi('SearchTransitiveMembershipsResponse')

const SecuritySettingsSchema = z
  .object({
    memberRestriction: MemberRestrictionSchema.exactOptional().openapi({
      description: 'The Member Restriction value',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the security settings. Shall be of the form `groups/{group_id}/securitySettings`.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The definiion of security settings.', required: [] })
  .openapi('SecuritySettings')

const SendUserInvitationRequestSchema = z
  .object({})
  .openapi({
    description:
      'A request to send email for inviting target user corresponding to the UserInvitation.',
  })
  .openapi('SendUserInvitationRequest')

const UpdateInboundSamlSsoProfileOperationMetadataSchema = z
  .object({})
  .openapi({
    description:
      'LRO response metadata for InboundSamlSsoProfilesService.UpdateInboundSamlSsoProfile.',
  })
  .openapi('UpdateInboundSamlSsoProfileOperationMetadata')

const UpdateInboundSsoAssignmentOperationMetadataSchema = z
  .object({})
  .openapi({
    description:
      'LRO response metadata for InboundSsoAssignmentsService.UpdateInboundSsoAssignment.',
  })
  .openapi('UpdateInboundSsoAssignmentOperationMetadata')

const WipeDeviceRequestSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.",
      }),
    removeResetLock: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies if a user is able to factory reset a device after a Device Wipe. On iOS, this is called "Activation Lock", while on Android, this is known as "Factory Reset Protection". If true, this protection will be removed from the device, so that a user can successfully factory reset. If false, the setting is untouched on the device.',
      }),
  })
  .openapi({ description: 'Request message for wiping all data on the device.', required: [] })
  .openapi('WipeDeviceRequest')

const WipeDeviceResponseSchema = z
  .object({
    device: DeviceSchema.exactOptional().openapi({
      description:
        'Resultant Device object for the action. Note that asset tags will not be returned in the device object.',
    }),
  })
  .openapi({ description: 'Response message for wiping all data on the device.', required: [] })
  .openapi('WipeDeviceResponse')

const WipeDeviceUserRequestSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.",
      }),
  })
  .openapi({ description: 'Request message for starting an account wipe on device.', required: [] })
  .openapi('WipeDeviceUserRequest')

const WipeDeviceUserResponseSchema = z
  .object({
    deviceUser: DeviceUserSchema.exactOptional().openapi({
      description: 'Resultant DeviceUser object for the action.',
    }),
  })
  .openapi({
    description: "Response message for wiping the user's account from the device.",
    required: [],
  })
  .openapi('WipeDeviceUserResponse')

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
        'https://www.googleapis.com/auth/cloud-identity.devices':
          'Private Service: https://www.googleapis.com/auth/cloud-identity.devices',
        'https://www.googleapis.com/auth/cloud-identity.devices.lookup': 'See your device details',
        'https://www.googleapis.com/auth/cloud-identity.devices.readonly':
          'Private Service: https://www.googleapis.com/auth/cloud-identity.devices.readonly',
        'https://www.googleapis.com/auth/cloud-identity.groups':
          'See, change, create, and delete any of the Cloud Identity Groups that you can access, including the members of each group',
        'https://www.googleapis.com/auth/cloud-identity.groups.readonly':
          'See any Cloud Identity Groups that you can access, including group members and their emails',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
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
        'https://www.googleapis.com/auth/cloud-identity.devices':
          'Private Service: https://www.googleapis.com/auth/cloud-identity.devices',
        'https://www.googleapis.com/auth/cloud-identity.devices.lookup': 'See your device details',
        'https://www.googleapis.com/auth/cloud-identity.devices.readonly':
          'Private Service: https://www.googleapis.com/auth/cloud-identity.devices.readonly',
        'https://www.googleapis.com/auth/cloud-identity.groups':
          'See, change, create, and delete any of the Cloud Identity Groups that you can access, including the members of each group',
        'https://www.googleapis.com/auth/cloud-identity.groups.readonly':
          'See any Cloud Identity Groups that you can access, including group members and their emails',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1DevicesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/devices',
  tags: ['devices'],
  description: 'Lists/Searches devices.',
  operationId: 'cloudidentity.devices.list',
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
      customer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer.',
            in: 'query',
            name: 'customer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally to specify results to be sorted in descending order. Default order is ascending.',
            in: 'query',
            name: 'orderBy',
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
              'Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.',
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
              'Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_UNSPECIFIED', 'COMPANY_INVENTORY', 'USER_ASSIGNED_DEVICES'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The view to use for the List request.',
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_UNSPECIFIED', 'COMPANY_INVENTORY', 'USER_ASSIGNED_DEVICES'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDevicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices.readonly'],
    },
  ],
})

export const postV1beta1DevicesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/devices',
  tags: ['devices'],
  description:
    'Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium',
  operationId: 'cloudidentity.devices.create',
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
    body: { content: { 'application/json': { schema: CreateDeviceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices'],
    },
  ],
})

export const getV1beta1GroupsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/groups',
  tags: ['groups'],
  description: 'Lists the `Group` resources under a customer or namespace.',
  operationId: 'cloudidentity.groups.list',
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
              'The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`. Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`.',
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
              'The `next_page_token` value returned from a previous list request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The parent resource under which to list all `Group` resources. Must be of the form `identitysources/{identity_source_id}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, \'C046psxkn\'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793)',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The level of detail to be returned. If unspecified, defaults to `View.BASIC`.',
            in: 'query',
            name: 'view',
            schema: { enum: ['VIEW_UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListGroupsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1GroupsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/groups',
  tags: ['groups'],
  description: 'Creates a `Group`.',
  operationId: 'cloudidentity.groups.create',
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
      initialGroupConfig: z
        .enum(['INITIAL_GROUP_CONFIG_UNSPECIFIED', 'WITH_INITIAL_OWNER', 'EMPTY'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The initial configuration option for the `Group`.',
            in: 'query',
            name: 'initialGroupConfig',
            schema: {
              enum: ['INITIAL_GROUP_CONFIG_UNSPECIFIED', 'WITH_INITIAL_OWNER', 'EMPTY'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1GroupsLookupRoute = createRoute({
  method: 'get',
  path: '/v1beta1/groups:lookup',
  tags: ['groups'],
  description:
    'Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.',
  operationId: 'cloudidentity.groups.lookup',
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
      'groupKey.id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.",
            in: 'query',
            name: 'groupKey.id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'groupKey.namespace': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.',
            in: 'query',
            name: 'groupKey.namespace',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LookupGroupNameResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1GroupsSearchRoute = createRoute({
  method: 'get',
  path: '/v1beta1/groups:search',
  tags: ['groups'],
  description: 'Searches for `Group` resources matching a specified query.',
  operationId: 'cloudidentity.groups.search',
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
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ordering of groups for the display name or email in the search groups response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order. Example: Sort by the ascending name: order_by="display_name" Sort by the descending group key email: order_by="group_key desc"',
            in: 'query',
            name: 'orderBy',
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
              'The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.',
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
              'The `next_page_token` value returned from a previous search request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The search query. * Must be specified in [Common Expression Language](https://opensource.google/projects/cel). * Must contain equality operators on the parent, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with \"C\" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) * Can contain optional inclusion operators on `labels` such as `'cloudidentity.googleapis.com/groups.discussion_forum' in labels`). * Can contain an optional equality operator on `domain_name`. e.g. `domain_name == 'abc.com'` * Can contain optional `startsWith/contains/equality` operators on `group_key`, e.g. `group_key.startsWith('dev')`, `group_key.contains('dev'), group_key == 'dev@abc.com'` * Can contain optional `startsWith/contains/equality` operators on `display_name`, such as `display_name.startsWith('dev')` , `display_name.contains('dev')`, `display_name == 'dev'`",
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The level of detail to be returned. If unspecified, defaults to `View.BASIC`.',
            in: 'query',
            name: 'view',
            schema: { enum: ['BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchGroupsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1InboundSamlSsoProfilesRoute = createRoute({
  method: 'get',
  path: '/v1beta1/inboundSamlSsoProfiles',
  tags: ['inboundSamlSsoProfiles'],
  description: 'Lists InboundSamlSsoProfiles for a customer.',
  operationId: 'cloudidentity.inboundSamlSsoProfiles.list',
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
              'A [Common Expression Language](https://github.com/google/cel-spec) expression to filter the results. The only supported filter is filtering by customer. For example: `customer=="customers/C0123abc"`. Omitting the filter or specifying a filter of `customer=="customers/my_customer"` will return the profiles for the customer that the caller (authenticated user) belongs to.',
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
              'The maximum number of InboundSamlSsoProfiles to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100. Requests with page_size greater than that will be silently interpreted as having this maximum value.',
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
              'A page token, received from a previous `ListInboundSamlSsoProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSamlSsoProfiles` must match the call that provided the page token.',
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
      content: { 'application/json': { schema: ListInboundSamlSsoProfilesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1InboundSamlSsoProfilesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/inboundSamlSsoProfiles',
  tags: ['inboundSamlSsoProfiles'],
  description: 'Creates an InboundSamlSsoProfile for a customer.',
  operationId: 'cloudidentity.inboundSamlSsoProfiles.create',
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
    body: { content: { 'application/json': { schema: InboundSamlSsoProfileSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1InboundSsoAssignmentsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/inboundSsoAssignments',
  tags: ['inboundSsoAssignments'],
  description: 'Lists the InboundSsoAssignments for a `Customer`.',
  operationId: 'cloudidentity.inboundSsoAssignments.list',
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
              'A CEL expression to filter the results. The only supported filter is filtering by customer. For example: `customer==customers/C0123abc`. Omitting the filter or specifying a filter of `customer==customers/my_customer` will return the assignments for the customer that the caller (authenticated user) belongs to.',
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
              'The maximum number of assignments to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100, though requests with page_size greater than that will be silently interpreted as having this maximum value. This may increase in the futue.',
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
              'A page token, received from a previous `ListInboundSsoAssignments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSsoAssignments` must match the call that provided the page token.',
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
      content: { 'application/json': { schema: ListInboundSsoAssignmentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1InboundSsoAssignmentsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/inboundSsoAssignments',
  tags: ['inboundSsoAssignments'],
  description:
    'Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.',
  operationId: 'cloudidentity.inboundSsoAssignments.create',
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
    body: { content: { 'application/json': { schema: InboundSsoAssignmentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['inboundSsoAssignments'],
  description: 'Gets an InboundSsoAssignment.',
  operationId: 'cloudidentity.inboundSsoAssignments.get',
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
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field-level read mask of which fields to return. "*" returns all fields. If not specified, all fields will be returned. May only contain the following field: `member_restriction`.',
            in: 'query',
            name: 'readMask',
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
            description:
              'Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to fetch. Format: `inboundSsoAssignments/{assignment}`',
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
      content: { 'application/json': { schema: InboundSsoAssignmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta1/{name}',
  tags: ['inboundSsoAssignments'],
  description:
    'Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.',
  operationId: 'cloudidentity.inboundSsoAssignments.delete',
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
      customer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.",
            in: 'query',
            name: 'customer',
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
            description:
              'Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to delete. Format: `inboundSsoAssignments/{assignment}`',
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
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1beta1NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta1/{name}',
  tags: ['inboundSsoAssignments'],
  description:
    'Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1beta1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.',
  operationId: 'cloudidentity.inboundSsoAssignments.patch',
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
            description: 'Required. The list of fields to be updated.',
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
            description:
              'Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InboundSsoAssignmentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameApproveRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:approve',
  tags: ['devices'],
  description: 'Approves device to access user data.',
  operationId: 'cloudidentity.devices.deviceUsers.approve',
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
              'Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApproveDeviceUserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices'],
    },
  ],
})

export const postV1beta1NameBlockRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:block',
  tags: ['devices'],
  description: 'Blocks device from accessing user data',
  operationId: 'cloudidentity.devices.deviceUsers.block',
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
              'Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BlockDeviceUserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices'],
    },
  ],
})

export const postV1beta1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:cancel',
  tags: ['customers'],
  description: 'Cancels a UserInvitation that was already sent.',
  operationId: 'cloudidentity.customers.userinvitations.cancel',
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
              'Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelUserInvitationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
})

export const postV1beta1NameCancelWipeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:cancelWipe',
  tags: ['devices'],
  description:
    'Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.',
  operationId: 'cloudidentity.devices.deviceUsers.cancelWipe',
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
              'Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelWipeDeviceUserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices'],
    },
  ],
})

export const getV1beta1NameIsInvitableUserRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}:isInvitableUser',
  tags: ['customers'],
  description:
    "Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.",
  operationId: 'cloudidentity.customers.userinvitations.isInvitableUser',
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
              'Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}`',
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
      content: { 'application/json': { schema: IsInvitableUserResponseSchema } },
    },
  },
})

export const postV1beta1NameModifyMembershipRolesRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:modifyMembershipRoles',
  tags: ['groups'],
  description: 'Modifies the `MembershipRole`s of a `Membership`.',
  operationId: 'cloudidentity.groups.memberships.modifyMembershipRoles',
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
              'Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group_id}/memberships/{membership_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyMembershipRolesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ModifyMembershipRolesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1NameMoveRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:move',
  tags: ['orgUnits'],
  description:
    'Move an OrgMembership to a new OrgUnit. NOTE: This is an atomic copy-and-delete. The resource will have a new copy under the destination OrgUnit and be deleted from the source OrgUnit. The resource can only be searched under the destination OrgUnit afterwards.',
  operationId: 'cloudidentity.orgUnits.memberships.move',
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
              "Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). To manage a Membership without specifying source `orgUnitId`, this API also supports the wildcard character '-' for `$orgUnitId` per https://google.aip.dev/159. The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of OrgMembership.EntityType, and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MoveOrgMembershipRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
})

export const postV1beta1NameSendRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:send',
  tags: ['customers'],
  description:
    'Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.',
  operationId: 'cloudidentity.customers.userinvitations.send',
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
              'Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendUserInvitationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
})

export const postV1beta1NameWipeRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{name}:wipe',
  tags: ['devices'],
  description: "Wipes the user's account on a device.",
  operationId: 'cloudidentity.devices.deviceUsers.wipe',
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
              'Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WipeDeviceUserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices'],
    },
  ],
})

export const getV1beta1ParentDeviceUsersRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/deviceUsers',
  tags: ['devices'],
  description: 'Lists/Searches DeviceUsers.',
  operationId: 'cloudidentity.devices.deviceUsers.list',
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
      customer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.",
            in: 'query',
            name: 'customer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Order specification for devices in the response.',
            in: 'query',
            name: 'orderBy',
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
              'Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.',
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
              'Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.',
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
              'Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device}',
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
      content: { 'application/json': { schema: ListDeviceUsersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices.readonly'],
    },
  ],
})

export const getV1beta1ParentIdpCredentialsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/idpCredentials',
  tags: ['inboundSamlSsoProfiles'],
  description: 'Returns a list of IdpCredentials in an InboundSamlSsoProfile.',
  operationId: 'cloudidentity.inboundSamlSsoProfiles.idpCredentials.list',
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
              'The maximum number of `IdpCredential`s to return. The service may return fewer than this value.',
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
              'A page token, received from a previous `ListIdpCredentials` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdpCredentials` must match the call that provided the page token.',
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
              'Required. The parent, which owns this collection of `IdpCredential`s. Format: `inboundSamlSsoProfiles/{sso_profile_id}`',
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
      content: { 'application/json': { schema: ListIdpCredentialsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentIdpCredentialsAddRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/idpCredentials:add',
  tags: ['inboundSamlSsoProfiles'],
  description: 'Adds an IdpCredential. Up to 2 credentials are allowed.',
  operationId: 'cloudidentity.inboundSamlSsoProfiles.idpCredentials.add',
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
              'Required. The InboundSamlSsoProfile that owns the IdpCredential. Format: `inboundSamlSsoProfiles/{sso_profile_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddIdpCredentialRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentMembershipsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/memberships',
  tags: ['orgUnits'],
  description:
    "List OrgMembership resources in an OrgUnit treated as 'parent'. Parent format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits)",
  operationId: 'cloudidentity.orgUnits.memberships.list',
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
      customer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Immutable. Customer that this OrgMembership belongs to. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization.',
            in: 'query',
            name: 'customer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The search query. Must be specified in [Common Expression Language](https://opensource.google/projects/cel). May only contain equality operators on the `type` (e.g., `type == 'shared_drive'`).",
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .union([z.literal('BASIC'), z.literal('FULL')])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will default to 50. The maximum allowed value is 100, though requests with page_size greater than that will be silently interpreted as 100.',
            in: 'query',
            name: 'pageSize',
            schema: { enum: ['BASIC', 'FULL'], type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `OrgMembershipsService.ListOrgMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOrgMembershipsRequest` must match the call that provided the page token.',
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
              'Required. Immutable. OrgUnit which is queried for a list of memberships. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits).',
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
      content: { 'application/json': { schema: ListOrgMembershipsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1beta1ParentMembershipsRoute = createRoute({
  method: 'post',
  path: '/v1beta1/{parent}/memberships',
  tags: ['groups'],
  description: 'Creates a `Membership`.',
  operationId: 'cloudidentity.groups.memberships.create',
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
              'Required. The parent `Group` resource under which to create the `Membership`. Must be of the form `groups/{group_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MembershipSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentMembershipsCheckTransitiveMembershipRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/memberships:checkTransitiveMembership',
  tags: ['groups'],
  description:
    'Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.',
  operationId: 'cloudidentity.groups.memberships.checkTransitiveMembership',
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
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. A CEL expression that MUST include member specification. This is a `required` field. Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value'`",
            in: 'query',
            name: 'query',
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
              '[Resource name](https://cloud.google.com/apis/design/resource_names) of the group to check the transitive membership in. Format: `groups/{group_id}`, where `group_id` is the unique id assigned to the Group to which the Membership belongs to.',
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
      content: { 'application/json': { schema: CheckTransitiveMembershipResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentMembershipsGetMembershipGraphRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/memberships:getMembershipGraph',
  tags: ['groups'],
  description:
    'Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.',
  operationId: 'cloudidentity.groups.memberships.getMembershipGraph',
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
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. A CEL expression that MUST include member specification AND label(s). Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value' && in labels`",
            in: 'query',
            name: 'query',
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
              'Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group to which the Membership belongs to. group_id can be a wildcard collection id "-". When a group_id is specified, the membership graph will be constrained to paths between the member (defined in the query) and the parent. If a wildcard collection is provided, all membership paths connected to the member will be returned.',
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
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentMembershipsLookupRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/memberships:lookup',
  tags: ['groups'],
  description:
    'Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.',
  operationId: 'cloudidentity.groups.memberships.lookup',
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
      'memberKey.id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.",
            in: 'query',
            name: 'memberKey.id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'memberKey.namespace': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.',
            in: 'query',
            name: 'memberKey.namespace',
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
              'Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group_id}`.',
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
      content: { 'application/json': { schema: LookupMembershipNameResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentMembershipsSearchDirectGroupsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/memberships:searchDirectGroups',
  tags: ['groups'],
  description: 'Searches direct groups of a member.',
  operationId: 'cloudidentity.groups.memberships.searchDirectGroups',
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
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ordering of membership relation for the display name or email in the response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order. Example: Sort by the ascending display name: order_by="group_name" or order_by="group_name asc". Sort by the descending display name: order_by="group_name desc". Sort by the ascending group key: order_by="group_key" or order_by="group_key asc". Sort by the descending group key: order_by="group_key desc".',
            in: 'query',
            name: 'orderBy',
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
            description: 'The default page size is 200 (max 1000).',
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
            description: 'The next_page_token value returned from a previous list request, if any',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. A CEL expression that MUST include member specification AND label(s). Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && 'label_value' in labels`",
            in: 'query',
            name: 'query',
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
              "[Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: groups/{group_id}, where group_id is always '-' as this API will search across all groups for a given member.",
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
      content: { 'application/json': { schema: SearchDirectGroupsResponseSchema } },
    },
  },
})

export const getV1beta1ParentMembershipsSearchTransitiveGroupsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/memberships:searchTransitiveGroups',
  tags: ['groups'],
  description:
    'Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.',
  operationId: 'cloudidentity.groups.memberships.searchTransitiveGroups',
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
            description: 'The default page size is 200 (max 1000).',
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
            description: 'The next_page_token value returned from a previous list request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. A CEL expression that MUST include member specification AND label(s). This is a `required` field. Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && in labels` Query may optionally contain equality operators on the parent of the group restricting the search within a particular customer, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with \"C\" (for example, 'C046psxkn'). This filtering is only supported for Admins with groups read permissons on the input customer. Example query: `member_key_id == 'member_key_id_value' && in labels && parent == 'customers/C046psxkn'`",
            in: 'query',
            name: 'query',
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
              "[Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is always '-' as this API will search across all groups for a given member.",
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
      content: { 'application/json': { schema: SearchTransitiveGroupsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentMembershipsSearchTransitiveMembershipsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/memberships:searchTransitiveMemberships',
  tags: ['groups'],
  description:
    'Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.',
  operationId: 'cloudidentity.groups.memberships.searchTransitiveMemberships',
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
            description: 'The default page size is 200 (max 1000).',
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
            description: 'The next_page_token value returned from a previous list request, if any.',
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
              '[Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.',
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
      content: { 'application/json': { schema: SearchTransitiveMembershipsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.groups.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ParentUserinvitationsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/userinvitations',
  tags: ['customers'],
  description:
    "Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.",
  operationId: 'cloudidentity.customers.userinvitations.list',
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
              'Optional. A query string for filtering `UserInvitation` results by their current state, in the format: `"state==\'invited\'"`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The sort order of the list results. You can sort the results in descending order based on either email or last update timestamp but not both, using `order_by="email desc"`. Currently, sorting is supported for `update_time asc`, `update_time desc`, `email asc`, and `email desc`. If not specified, results will be returned based on `email asc` order.',
            in: 'query',
            name: 'orderBy',
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
              'Optional. The maximum number of UserInvitation resources to return. If unspecified, at most 100 resources will be returned. The maximum value is 200; values above 200 will be set to 200.',
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
              'Optional. A page token, received from a previous `ListUserInvitations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.',
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
              'Required. The customer ID of the Google Workspace or Cloud Identity account the UserInvitation resources are associated with.',
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
      content: { 'application/json': { schema: ListUserInvitationsResponseSchema } },
    },
  },
})

export const getV1beta1ParentLookupRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}:lookup',
  tags: ['devices'],
  description:
    "Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.",
  operationId: 'cloudidentity.devices.deviceUsers.lookup',
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
      androidId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).',
            in: 'query',
            name: 'androidId',
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
              'The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.',
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
              'A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rawResourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\\Users\\%USERPROFILE%\\.secureConnect\\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json",
            in: 'query',
            name: 'rawResourceId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.",
            in: 'query',
            name: 'userId',
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
              'Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.',
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
      content: { 'application/json': { schema: LookupSelfDeviceUsersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-identity.devices.lookup'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-identity.devices.lookup'],
    },
  ],
})
