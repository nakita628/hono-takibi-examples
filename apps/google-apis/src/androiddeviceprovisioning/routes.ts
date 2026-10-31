import { createRoute, z } from '@hono/zod-openapi'

const DeviceIdentifierSchema = z
  .object({
    chromeOsAttestedDeviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier provided by OEMs, carried through the production and sales process. Only applicable to Chrome OS devices.',
      }),
    deviceType: z
      .enum(['DEVICE_TYPE_UNSPECIFIED', 'DEVICE_TYPE_ANDROID', 'DEVICE_TYPE_CHROME_OS'])
      .exactOptional()
      .openapi({ description: 'The type of the device' }),
    imei: z
      .string()
      .exactOptional()
      .openapi({ description: 'The device’s IMEI number. Validated on input.' }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The device manufacturer’s name. Matches the device's built-in value returned from `android.os.Build.MANUFACTURER`. Allowed values are listed in [Android manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names).",
      }),
    meid: z.string().exactOptional().openapi({ description: 'The device’s MEID number.' }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The device model's name. Allowed values are listed in [Android models](/zero-touch/resources/manufacturer-names#model-names) and [Chrome OS models](https://support.google.com/chrome/a/answer/10130175#identify_compatible).",
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The manufacturer's serial number for the device. This value might not be unique across different device models.",
      }),
  })
  .openapi({
    description:
      'Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).',
    required: [],
  })
  .openapi('DeviceIdentifier')

const DeviceMetadataSchema = z
  .object({
    entries: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Metadata entries recorded as key-value pairs.' }),
  })
  .openapi({
    description:
      'Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).',
    required: [],
  })
  .openapi('DeviceMetadata')

const ClaimDeviceRequestSchema = z
  .object({
    customerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the customer for whom the device is being claimed.' }),
    deviceIdentifier: DeviceIdentifierSchema.exactOptional().openapi({
      description: 'Required. Required. The device identifier of the device to claim.',
    }),
    deviceMetadata: DeviceMetadataSchema.exactOptional().openapi({
      description: 'Optional. The metadata to attach to the device.',
    }),
    googleWorkspaceCustomerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Google Workspace customer ID.' }),
    preProvisioningToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Must and can only be set for Chrome OS devices.' }),
    sectionType: z
      .enum(['SECTION_TYPE_UNSPECIFIED', 'SECTION_TYPE_SIM_LOCK', 'SECTION_TYPE_ZERO_TOUCH'])
      .exactOptional()
      .openapi({ description: "Required. The section type of the device's provisioning record." }),
    simlockProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile.',
      }),
  })
  .openapi({
    description: 'Request message to claim a device on behalf of a customer.',
    required: [],
  })
  .openapi('ClaimDeviceRequest')

const ClaimDeviceResponseSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The device ID of the claimed device.' }),
    deviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the device in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.',
      }),
  })
  .openapi({ description: 'Response message containing device id of the claim.', required: [] })
  .openapi('ClaimDeviceResponse')

const PartnerClaimSchema = z
  .object({
    customerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the customer for whom the device is being claimed.' }),
    deviceIdentifier: DeviceIdentifierSchema.exactOptional().openapi({
      description: 'Required. Required. Device identifier of the device.',
    }),
    deviceMetadata: DeviceMetadataSchema.exactOptional().openapi({
      description: 'Required. The metadata to attach to the device at claim.',
    }),
    googleWorkspaceCustomerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Google Workspace customer ID.' }),
    preProvisioningToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Must and can only be set for Chrome OS devices.' }),
    sectionType: z
      .enum(['SECTION_TYPE_UNSPECIFIED', 'SECTION_TYPE_SIM_LOCK', 'SECTION_TYPE_ZERO_TOUCH'])
      .exactOptional()
      .openapi({ description: "Required. The section type of the device's provisioning record." }),
    simlockProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile.',
      }),
  })
  .openapi({ description: 'Identifies one claim request.', required: [] })
  .openapi('PartnerClaim')

const ClaimDevicesRequestSchema = z
  .object({
    claims: z
      .array(PartnerClaimSchema)
      .exactOptional()
      .openapi({ description: 'Required. A list of device claims.' }),
  })
  .openapi({
    description:
      "Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.",
    required: [],
  })
  .openapi('ClaimDevicesRequest')

const GoogleWorkspaceAccountSchema = z
  .object({
    customerId: z.string().exactOptional().openapi({ description: 'Required. The customer ID.' }),
    preProvisioningTokens: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The pre-provisioning tokens previously used to claim devices.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A Google Workspace customer.', required: [] })
  .openapi('GoogleWorkspaceAccount')

const CompanySchema = z
  .object({
    adminEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. Email address of customer's users in the admin role. Each email address must be associated with a Google Account.",
      }),
    companyId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The ID of the company. Assigned by the server.',
        readOnly: true,
      }),
    companyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The name of the company. For example _XYZ Corp_. Displayed to the company's employees in the zero-touch enrollment portal.",
      }),
    googleWorkspaceAccount: GoogleWorkspaceAccountSchema.exactOptional().openapi({
      description:
        'Output only. The Google Workspace account associated with this customer. Only used for customer Companies.',
      readOnly: true,
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The preferred locale of the customer represented as a BCP47 language code. This field is validated on input and requests containing unsupported language codes will be rejected. Supported language codes: Arabic (ar) Chinese (Hong Kong) (zh-HK) Chinese (Simplified) (zh-CN) Chinese (Traditional) (zh-TW) Czech (cs) Danish (da) Dutch (nl) English (UK) (en-GB) English (US) (en-US) Filipino (fil) Finnish (fi) French (fr) German (de) Hebrew (iw) Hindi (hi) Hungarian (hu) Indonesian (id) Italian (it) Japanese (ja) Korean (ko) Norwegian (Bokmal) (no) Polish (pl) Portuguese (Brazil) (pt-BR) Portuguese (Portugal) (pt-PT) Russian (ru) Spanish (es) Spanish (Latin America) (es-419) Swedish (sv) Thai (th) Turkish (tr) Ukrainian (uk) Vietnamese (vi)',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The API resource name of the company. The resource name is one of the following formats: * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]` Assigned by the server.',
        readOnly: true,
      }),
    ownerEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Required. Input only. Email address of customer's users in the owner role. At least one `owner_email` is required. Owners share the same access as admins but can also add, delete, and edit your organization's portal users.",
      }),
    skipWelcomeEmail: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Input only. If set to true, welcome email will not be sent to the customer. It is recommended to skip the welcome email if devices will be claimed with additional DEVICE_PROTECTION service, as the customer will receive separate emails at device claim time. This field is ignored if this is not a Zero-touch customer.',
      }),
    termsStatus: z
      .enum([
        'TERMS_STATUS_UNSPECIFIED',
        'TERMS_STATUS_NOT_ACCEPTED',
        'TERMS_STATUS_ACCEPTED',
        'TERMS_STATUS_STALE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A reseller, vendor, or customer in the zero-touch reseller and customer APIs.',
    required: [],
  })
  .openapi('Company')

const ConfigurationSchema = z
  .object({
    companyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning.',
      }),
    configurationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The ID of the configuration. Assigned by the server.',
        readOnly: true,
      }),
    configurationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins.",
      }),
    contactEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input.',
      }),
    contactPhone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses.',
      }),
    customMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned.',
      }),
    dpcExtras: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The JSON-formatted EMM provisioning extras that are passed to the DPC.',
      }),
    dpcResourcePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`.',
      }),
    isDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases.",
    required: [],
  })
  .openapi('Configuration')

const CreateCustomerRequestSchema = z
  .object({
    customer: CompanySchema.exactOptional().openapi({
      description:
        "Required. The company data to populate the new customer. Must contain a value for `companyName` and at least one `owner_email` that's associated with a Google Account. The values for `companyId` and `name` must be empty.",
    }),
  })
  .openapi({ description: 'Request message to create a customer.', required: [] })
  .openapi('CreateCustomerRequest')

const DeviceReferenceSchema = z
  .object({
    deviceId: z.string().exactOptional().openapi({ description: 'The ID of the device.' }),
    deviceIdentifier: DeviceIdentifierSchema.exactOptional().openapi({
      description: 'The hardware IDs of the device.',
    }),
  })
  .openapi({
    description:
      "A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).",
    required: [],
  })
  .openapi('DeviceReference')

const CustomerApplyConfigurationRequestSchema = z
  .object({
    configuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The configuration applied to the device in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.',
      }),
    device: DeviceReferenceSchema.exactOptional().openapi({
      description:
        'Required. The device the configuration is applied to. There are custom validations in ApplyConfigurationRequestValidator',
    }),
  })
  .openapi({
    description: 'Request message for customer to assign a configuration to device.',
    required: [],
  })
  .openapi('CustomerApplyConfigurationRequest')

const CustomerListConfigurationsResponseSchema = z
  .object({
    configurations: z
      .array(ConfigurationSchema)
      .exactOptional()
      .openapi({ description: 'The configurations.' }),
  })
  .openapi({ description: "Response message of customer's listing configuration.", required: [] })
  .openapi('CustomerListConfigurationsResponse')

const CustomerListCustomersResponseSchema = z
  .object({
    customers: z
      .array(CompanySchema)
      .exactOptional()
      .openapi({ description: 'The customer accounts the calling user is a member of.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token used to access the next page of results. Omitted if no further results are available.',
      }),
  })
  .openapi({ description: 'Response message for listing my customers.', required: [] })
  .openapi('CustomerListCustomersResponse')

const DeviceClaimSchema = z
  .object({
    additionalService: z
      .enum(['ADDITIONAL_SERVICE_UNSPECIFIED', 'DEVICE_PROTECTION'])
      .exactOptional()
      .openapi({ description: 'The Additional service registered for the device.' }),
    googleWorkspaceCustomerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the Google Workspace account that owns the Chrome OS device.',
      }),
    ownerCompanyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Customer that purchased the device.' }),
    resellerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the reseller that claimed the device.' }),
    sectionType: z
      .enum(['SECTION_TYPE_UNSPECIFIED', 'SECTION_TYPE_SIM_LOCK', 'SECTION_TYPE_ZERO_TOUCH'])
      .exactOptional()
      .openapi({
        description: 'Output only. The type of claim made on the device.',
        readOnly: true,
      }),
    vacationModeExpireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The timestamp when the device will exit ‘vacation mode’. This value is present iff the device is in 'vacation mode'.",
      }),
    vacationModeStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The timestamp when the device was put into ‘vacation mode’. This value is present iff the device is in 'vacation mode'.",
      }),
  })
  .openapi({
    description:
      'A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).',
    required: [],
  })
  .openapi('DeviceClaim')

const DeviceSchema = z
  .object({
    claims: z
      .array(DeviceClaimSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The provisioning claims for a device. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. Call `partners.devices.unclaim` or `partners.devices.unclaimAsync` to remove the device from zero-touch enrollment.',
        readOnly: true,
      }),
    configuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Not available to resellers.' }),
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The ID of the device. Assigned by the server.',
        readOnly: true,
      }),
    deviceIdentifier: DeviceIdentifierSchema.exactOptional().openapi({
      description:
        'The hardware IDs that identify a manufactured device. To learn more, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).',
    }),
    deviceMetadata: DeviceMetadataSchema.exactOptional().openapi({
      description:
        'The metadata attached to the device. Structured as key-value pairs. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'An Android or Chrome OS device registered for zero-touch enrollment.',
    required: [],
  })
  .openapi('Device')

const CustomerListDevicesResponseSchema = z
  .object({
    devices: z
      .array(DeviceSchema)
      .exactOptional()
      .openapi({ description: "The customer's devices." }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token used to access the next page of results. Omitted if no further results are available.',
      }),
  })
  .openapi({ description: "Response message of customer's liting devices.", required: [] })
  .openapi('CustomerListDevicesResponse')

const DpcSchema = z
  .object({
    dpcName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The title of the DPC app in Google Play. For example, _Google Apps Device Policy_. Useful in an application's user interface.",
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The API resource name in the format `customers/[CUSTOMER_ID]/dpcs/[DPC_ID]`. Assigned by the server. To maintain a reference to a DPC across customer accounts, persist and match the last path component (`DPC_ID`).',
        readOnly: true,
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The DPC's Android application ID that looks like a Java package name. Zero-touch enrollment installs the DPC app onto a device using this identifier.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play.",
    required: [],
  })
  .openapi('Dpc')

const CustomerListDpcsResponseSchema = z
  .object({
    dpcs: z
      .array(DpcSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of DPCs available to the customer that support zero-touch enrollment.',
      }),
  })
  .openapi({ description: "Response message of customer's listing DPCs.", required: [] })
  .openapi('CustomerListDpcsResponse')

const CustomerRemoveConfigurationRequestSchema = z
  .object({
    device: DeviceReferenceSchema.exactOptional().openapi({
      description:
        'Required. The device to remove the configuration from. There are custom validations in RemoveConfigurationRequestValidator',
    }),
  })
  .openapi({
    description: 'Request message for customer to remove the configuration from device.',
    required: [],
  })
  .openapi('CustomerRemoveConfigurationRequest')

const CustomerUnclaimDeviceRequestSchema = z
  .object({
    device: DeviceReferenceSchema.exactOptional().openapi({
      description:
        'Required. The device to unclaim. There are custom validations in UnclaimDeviceRequestValidator.',
    }),
  })
  .openapi({ description: 'Request message for customer to unclaim a device.', required: [] })
  .openapi('CustomerUnclaimDeviceRequest')

const DevicesLongRunningOperationMetadataSchema = z
  .object({
    devicesCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The number of metadata updates in the operation. This might be different from the number of updates in the request if the API can't parse some of the updates.",
      }),
    processingStatus: z
      .enum([
        'BATCH_PROCESS_STATUS_UNSPECIFIED',
        'BATCH_PROCESS_PENDING',
        'BATCH_PROCESS_IN_PROGRESS',
        'BATCH_PROCESS_PROCESSED',
      ])
      .exactOptional()
      .openapi({ description: 'The processing status of the operation.' }),
    progress: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The processing progress of the operation. Measured as a number from 0 to 100. A value of 10O doesn't always mean the operation completed—check for the inclusion of a `done` field.",
      }),
  })
  .openapi({
    description:
      'Tracks the status of a long-running operation to asynchronously update a batch of reseller metadata attached to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).',
    required: [],
  })
  .openapi('DevicesLongRunningOperationMetadata')

const PerDeviceStatusInBatchSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'If processing succeeds, the device ID of the device.' }),
    errorIdentifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'If processing fails, the error type.' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If processing fails, a developer message explaining what went wrong.',
      }),
    status: z
      .enum([
        'SINGLE_DEVICE_STATUS_UNSPECIFIED',
        'SINGLE_DEVICE_STATUS_UNKNOWN_ERROR',
        'SINGLE_DEVICE_STATUS_OTHER_ERROR',
        'SINGLE_DEVICE_STATUS_SUCCESS',
        'SINGLE_DEVICE_STATUS_PERMISSION_DENIED',
        'SINGLE_DEVICE_STATUS_INVALID_DEVICE_IDENTIFIER',
        'SINGLE_DEVICE_STATUS_INVALID_SECTION_TYPE',
        'SINGLE_DEVICE_STATUS_SECTION_NOT_YOURS',
        'SINGLE_DEVICE_STATUS_INVALID_TOKEN',
        'SINGLE_DEVICE_STATUS_REVOKED_TOKEN',
      ])
      .exactOptional()
      .openapi({ description: 'The result status of the device after processing.' }),
  })
  .openapi({
    description: 'Captures the processing status for each device in the operation.',
    required: [],
  })
  .openapi('PerDeviceStatusInBatch')

const PartnerUnclaimSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Device ID of the device.' }),
    deviceIdentifier: DeviceIdentifierSchema.exactOptional().openapi({
      description: 'Required. Device identifier of the device.',
    }),
    sectionType: z
      .enum(['SECTION_TYPE_UNSPECIFIED', 'SECTION_TYPE_SIM_LOCK', 'SECTION_TYPE_ZERO_TOUCH'])
      .exactOptional()
      .openapi({ description: "Required. The section type of the device's provisioning record." }),
    vacationModeDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)',
      }),
    vacationModeExpireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The expiration time of the vacation unlock.' }),
  })
  .openapi({ description: 'Identifies one unclaim request.', required: [] })
  .openapi('PartnerUnclaim')

const UpdateMetadataArgumentsSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Device ID of the device.' }),
    deviceIdentifier: DeviceIdentifierSchema.exactOptional().openapi({
      description: 'Required. Device identifier.',
    }),
    deviceMetadata: DeviceMetadataSchema.exactOptional().openapi({
      description: 'Required. The metadata to update.',
    }),
  })
  .openapi({ description: 'Identifies metadata updates to one device.', required: [] })
  .openapi('UpdateMetadataArguments')

const OperationPerDeviceSchema = z
  .object({
    claim: PartnerClaimSchema.exactOptional().openapi({
      description: 'A copy of the original device-claim request received by the server.',
    }),
    result: PerDeviceStatusInBatchSchema.exactOptional().openapi({
      description: 'The processing result for each device.',
    }),
    unclaim: PartnerUnclaimSchema.exactOptional().openapi({
      description: 'A copy of the original device-unclaim request received by the server.',
    }),
    updateMetadata: UpdateMetadataArgumentsSchema.exactOptional().openapi({
      description: 'A copy of the original metadata-update request received by the server.',
    }),
  })
  .openapi({
    description:
      'A task for each device in the operation. Corresponds to each device change in the request.',
    required: [],
  })
  .openapi('OperationPerDevice')

const DevicesLongRunningOperationResponseSchema = z
  .object({
    perDeviceStatus: z
      .array(OperationPerDeviceSchema)
      .exactOptional()
      .openapi({
        description:
          'The processing status for each device in the operation. One `PerDeviceStatus` per device. The list order matches the items in the original request.',
      }),
    successCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A summary of how many items in the operation the server processed successfully. Updated as the operation progresses.',
      }),
  })
  .openapi({
    description:
      'Tracks the status of a long-running operation to claim, unclaim, or attach metadata to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).',
    required: [],
  })
  .openapi('DevicesLongRunningOperationResponse')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FindDevicesByDeviceIdentifierRequestSchema = z
  .object({
    deviceIdentifier: DeviceIdentifierSchema.exactOptional().openapi({
      description: 'Required. Required. The device identifier to search for.',
    }),
    limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token specifying which result page to return.' }),
  })
  .openapi({ description: 'Request to find devices.', required: [] })
  .openapi('FindDevicesByDeviceIdentifierRequest')

const FindDevicesByDeviceIdentifierResponseSchema = z
  .object({
    devices: z.array(DeviceSchema).exactOptional().openapi({ description: 'Found devices.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token used to access the next page of results. Omitted if no further results are available.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total count of items in the list irrespective of pagination.' }),
  })
  .openapi({ description: 'Response containing found devices.', required: [] })
  .openapi('FindDevicesByDeviceIdentifierResponse')

const FindDevicesByOwnerRequestSchema = z
  .object({
    customerId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of customer IDs to search for.' }),
    googleWorkspaceCustomerId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of IDs of Google Workspace accounts to search for.' }),
    limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token specifying which result page to return.' }),
    sectionType: z
      .enum(['SECTION_TYPE_UNSPECIFIED', 'SECTION_TYPE_SIM_LOCK', 'SECTION_TYPE_ZERO_TOUCH'])
      .exactOptional()
      .openapi({ description: "Required. The section type of the device's provisioning record." }),
  })
  .openapi({ description: 'Request to find devices by customers.', required: [] })
  .openapi('FindDevicesByOwnerRequest')

const FindDevicesByOwnerResponseSchema = z
  .object({
    devices: z
      .array(DeviceSchema)
      .exactOptional()
      .openapi({ description: "The customer's devices." }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token used to access the next page of results. Omitted if no further results are available.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total count of items in the list irrespective of pagination.' }),
  })
  .openapi({ description: 'Response containing found devices.', required: [] })
  .openapi('FindDevicesByOwnerResponse')

const ListCustomersResponseSchema = z
  .object({
    customers: z
      .array(CompanySchema)
      .exactOptional()
      .openapi({ description: 'List of customers related to this reseller partner.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Omitted if no further results are available.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total count of items in the list irrespective of pagination.' }),
  })
  .openapi({
    description: 'Response message of all customers related to this partner.',
    required: [],
  })
  .openapi('ListCustomersResponse')

const ListVendorCustomersResponseSchema = z
  .object({
    customers: z
      .array(CompanySchema)
      .exactOptional()
      .openapi({ description: 'List of customers of the vendor.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Omitted if no further results are available.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total count of items in the list irrespective of pagination.' }),
  })
  .openapi({ description: 'Response message to list customers of the vendor.', required: [] })
  .openapi('ListVendorCustomersResponse')

const ListVendorsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Omitted if no further results are available.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total count of items in the list irrespective of pagination.' }),
    vendors: z
      .array(CompanySchema)
      .exactOptional()
      .openapi({
        description:
          'List of vendors of the reseller partner. Fields `name`, `companyId` and `companyName` are populated to the Company object.',
      }),
  })
  .openapi({ description: 'Response message to list vendors of the partner.', required: [] })
  .openapi('ListVendorsResponse')

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
      description:
        'This field will always be not set if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. In this case, error information for each device is set in `response.perDeviceStatus.result.status`.',
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
          'This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.',
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
          'This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const UnclaimDeviceRequestSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The device ID returned by `ClaimDevice`.' }),
    deviceIdentifier: DeviceIdentifierSchema.exactOptional().openapi({
      description: 'Required. The device identifier you used when you claimed this device.',
    }),
    sectionType: z
      .enum(['SECTION_TYPE_UNSPECIFIED', 'SECTION_TYPE_SIM_LOCK', 'SECTION_TYPE_ZERO_TOUCH'])
      .exactOptional()
      .openapi({ description: "Required. The section type of the device's provisioning record." }),
    vacationModeDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)',
      }),
    vacationModeExpireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiration time of the vacation unlock.' }),
  })
  .openapi({ description: 'Request message to unclaim a device.', required: [] })
  .openapi('UnclaimDeviceRequest')

const UnclaimDevicesRequestSchema = z
  .object({
    unclaims: z
      .array(PartnerUnclaimSchema)
      .exactOptional()
      .openapi({ description: 'Required. The list of devices to unclaim.' }),
  })
  .openapi({ description: 'Request to unclaim devices asynchronously in batch.', required: [] })
  .openapi('UnclaimDevicesRequest')

const UpdateDeviceMetadataInBatchRequestSchema = z
  .object({
    updates: z
      .array(UpdateMetadataArgumentsSchema)
      .exactOptional()
      .openapi({ description: 'Required. The list of metadata updates.' }),
  })
  .openapi({ description: 'Request to update device metadata in batch.', required: [] })
  .openapi('UpdateDeviceMetadataInBatchRequest')

const UpdateDeviceMetadataRequestSchema = z
  .object({
    deviceMetadata: DeviceMetadataSchema.exactOptional().openapi({
      description: 'Required. The metadata to attach to the device.',
    }),
  })
  .openapi({ description: 'Request to set metadata for a device.', required: [] })
  .openapi('UpdateDeviceMetadataRequest')

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

export const getV1CustomersRoute = createRoute({
  method: 'get',
  path: '/v1/customers',
  tags: ['customers'],
  description: "Lists the user's customer accounts.",
  operationId: 'androiddeviceprovisioning.customers.list',
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
              'The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive).',
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
              'A token specifying which result page to return. This field has custom validations in ListCustomersRequestValidator',
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
      content: { 'application/json': { schema: CustomerListCustomersResponseSchema } },
    },
  },
})

export const postV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataRoute = createRoute({
  method: 'post',
  path: '/v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata',
  tags: ['partners'],
  description: 'Updates reseller metadata associated with the device. Android devices only.',
  operationId: 'androiddeviceprovisioning.partners.devices.metadata',
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
      metadataOwnerId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The owner of the newly set metadata. Set this to the partner ID.',
            in: 'path',
            name: 'metadataOwnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deviceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the device.',
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateDeviceMetadataRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeviceMetadataSchema } },
    },
  },
})

export const getV1PartnersPartnerIdCustomersRoute = createRoute({
  method: 'get',
  path: '/v1/partners/{partnerId}/customers',
  tags: ['partners'],
  description:
    'Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.',
  operationId: 'androiddeviceprovisioning.partners.customers.list',
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
              'The maximum number of results to be returned. If not specified or 0, all the records are returned.',
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
            description: 'A token identifying a page of results returned by the server.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the reseller partner.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCustomersResponseSchema } },
    },
  },
})

export const postV1PartnersPartnerIdDevicesClaimRoute = createRoute({
  method: 'post',
  path: '/v1/partners/{partnerId}/devices:claim',
  tags: ['partners'],
  description:
    'Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.',
  operationId: 'androiddeviceprovisioning.partners.devices.claim',
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
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the reseller partner.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClaimDeviceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClaimDeviceResponseSchema } },
    },
  },
})

export const postV1PartnersPartnerIdDevicesClaimAsyncRoute = createRoute({
  method: 'post',
  path: '/v1/partners/{partnerId}/devices:claimAsync',
  tags: ['partners'],
  description:
    'Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).',
  operationId: 'androiddeviceprovisioning.partners.devices.claimAsync',
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
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the reseller partner.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClaimDevicesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
})

export const postV1PartnersPartnerIdDevicesFindByIdentifierRoute = createRoute({
  method: 'post',
  path: '/v1/partners/{partnerId}/devices:findByIdentifier',
  tags: ['partners'],
  description: 'Finds devices by hardware identifiers, such as IMEI.',
  operationId: 'androiddeviceprovisioning.partners.devices.findByIdentifier',
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
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the reseller partner.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FindDevicesByDeviceIdentifierRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FindDevicesByDeviceIdentifierResponseSchema } },
    },
  },
})

export const postV1PartnersPartnerIdDevicesFindByOwnerRoute = createRoute({
  method: 'post',
  path: '/v1/partners/{partnerId}/devices:findByOwner',
  tags: ['partners'],
  description:
    "Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.",
  operationId: 'androiddeviceprovisioning.partners.devices.findByOwner',
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
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the reseller partner.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FindDevicesByOwnerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FindDevicesByOwnerResponseSchema } },
    },
  },
})

export const postV1PartnersPartnerIdDevicesUnclaimRoute = createRoute({
  method: 'post',
  path: '/v1/partners/{partnerId}/devices:unclaim',
  tags: ['partners'],
  description: 'Unclaims a device from a customer and removes it from zero-touch enrollment.',
  operationId: 'androiddeviceprovisioning.partners.devices.unclaim',
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
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the reseller partner.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UnclaimDeviceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV1PartnersPartnerIdDevicesUnclaimAsyncRoute = createRoute({
  method: 'post',
  path: '/v1/partners/{partnerId}/devices:unclaimAsync',
  tags: ['partners'],
  description:
    'Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).',
  operationId: 'androiddeviceprovisioning.partners.devices.unclaimAsync',
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
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The reseller partner ID.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UnclaimDevicesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
})

export const postV1PartnersPartnerIdDevicesUpdateMetadataAsyncRoute = createRoute({
  method: 'post',
  path: '/v1/partners/{partnerId}/devices:updateMetadataAsync',
  tags: ['partners'],
  description:
    'Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.',
  operationId: 'androiddeviceprovisioning.partners.devices.updateMetadataAsync',
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
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The reseller partner ID.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateDeviceMetadataInBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['partners'],
  description: 'Gets a device.',
  operationId: 'androiddeviceprovisioning.partners.devices.get',
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
              'Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.',
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
      content: { 'application/json': { schema: DeviceSchema } },
    },
  },
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['customers'],
  description:
    'Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.',
  operationId: 'androiddeviceprovisioning.customers.configurations.delete',
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
              'Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails.',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['customers'],
  description: "Updates a configuration's field values.",
  operationId: 'androiddeviceprovisioning.customers.configurations.patch',
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
            description:
              'Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation.',
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
              'Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConfigurationSchema } },
    },
  },
})

export const getV1ParentConfigurationsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/configurations',
  tags: ['customers'],
  description: "Lists a customer's configurations.",
  operationId: 'androiddeviceprovisioning.customers.configurations.list',
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
              'Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.',
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
      content: { 'application/json': { schema: CustomerListConfigurationsResponseSchema } },
    },
  },
})

export const postV1ParentConfigurationsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/configurations',
  tags: ['customers'],
  description:
    'Creates a new configuration. Once created, a customer can apply the configuration to devices.',
  operationId: 'androiddeviceprovisioning.customers.configurations.create',
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
              'Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`. This field has custom validation in CreateConfigurationRequestValidator',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConfigurationSchema } },
    },
  },
})

export const getV1ParentCustomersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/customers',
  tags: ['partners'],
  description: 'Lists the customers of the vendor.',
  operationId: 'androiddeviceprovisioning.partners.vendors.customers.list',
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
            description: 'The maximum number of results to be returned.',
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
            description: 'A token identifying a page of results returned by the server.',
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
              'Required. The resource name in the format `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`.',
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
      content: { 'application/json': { schema: ListVendorCustomersResponseSchema } },
    },
  },
})

export const postV1ParentCustomersRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/customers',
  tags: ['partners'],
  description:
    'Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.',
  operationId: 'androiddeviceprovisioning.partners.customers.create',
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
              'Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateCustomerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CompanySchema } },
    },
  },
})

export const getV1ParentDevicesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/devices',
  tags: ['customers'],
  description: "Lists a customer's devices.",
  operationId: 'androiddeviceprovisioning.customers.devices.list',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A token specifying which result page to return.',
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
              'Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`.',
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
      content: { 'application/json': { schema: CustomerListDevicesResponseSchema } },
    },
  },
})

export const postV1ParentDevicesApplyConfigurationRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/devices:applyConfiguration',
  tags: ['customers'],
  description:
    'Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.',
  operationId: 'androiddeviceprovisioning.customers.devices.applyConfiguration',
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
              'Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerApplyConfigurationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV1ParentDevicesRemoveConfigurationRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/devices:removeConfiguration',
  tags: ['customers'],
  description: 'Removes a configuration from device.',
  operationId: 'androiddeviceprovisioning.customers.devices.removeConfiguration',
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
              'Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerRemoveConfigurationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const postV1ParentDevicesUnclaimRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/devices:unclaim',
  tags: ['customers'],
  description:
    'Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.',
  operationId: 'androiddeviceprovisioning.customers.devices.unclaim',
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
              'Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerUnclaimDeviceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
})

export const getV1ParentDpcsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/dpcs',
  tags: ['customers'],
  description: 'Lists the DPCs (device policy controllers) that support zero-touch enrollment.',
  operationId: 'androiddeviceprovisioning.customers.dpcs.list',
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
              'Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.',
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
      content: { 'application/json': { schema: CustomerListDpcsResponseSchema } },
    },
  },
})

export const getV1ParentVendorsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/vendors',
  tags: ['partners'],
  description: 'Lists the vendors of the partner.',
  operationId: 'androiddeviceprovisioning.partners.vendors.list',
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
            description: 'The maximum number of results to be returned.',
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
            description: 'A token identifying a page of results returned by the server.',
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
            description: 'Required. The resource name in the format `partners/[PARTNER_ID]`.',
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
      content: { 'application/json': { schema: ListVendorsResponseSchema } },
    },
  },
})
