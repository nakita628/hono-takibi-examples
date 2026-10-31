import { createRoute, z } from '@hono/zod-openapi'

type PrivilegeType = {
  childPrivileges?: PrivilegeType[]
  etag?: string
  isOuScopable?: boolean
  kind?: string
  privilegeName?: string
  serviceId?: string
  serviceName?: string
}

const AliasSchema = z
  .object({
    alias: z.string().exactOptional(),
    etag: z.string().exactOptional(),
    id: z.string().exactOptional(),
    kind: z.string().default('admin#directory#alias').exactOptional(),
    primaryEmail: z.string().exactOptional(),
  })
  .openapi({ description: 'JSON template for Alias object in Directory API.', required: [] })
  .openapi('Alias')

const AliasesSchema = z
  .object({
    aliases: z.array(z.any()).exactOptional(),
    etag: z.string().exactOptional(),
    kind: z.string().default('admin#directory#aliases').exactOptional(),
  })
  .openapi({
    description: 'JSON response template to list aliases in Directory API.',
    required: [],
  })
  .openapi('Aliases')

const AspSchema = z
  .object({
    codeId: z.int32().exactOptional().openapi({ description: 'The unique ID of the ASP.' }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.',
      }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the ASP.' }),
    kind: z
      .string()
      .default('admin#directory#asp')
      .exactOptional()
      .openapi({
        description: 'The type of the API resource. This is always `admin#directory#asp`.',
      }),
    lastTimeUsed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the application that the user, represented by their `userId`, entered when the ASP was created.',
      }),
    userKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the user who issued the ASP.' }),
  })
  .openapi({
    description:
      'An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).',
    required: [],
  })
  .openapi('Asp')

const AspsSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z.array(AspSchema).exactOptional().openapi({ description: 'A list of ASP resources.' }),
    kind: z
      .string()
      .default('admin#directory#aspList')
      .exactOptional()
      .openapi({
        description: 'The type of the API resource. This is always `admin#directory#aspList`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Asps')

const AuxiliaryMessageSchema = z
  .object({
    auxiliaryMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human readable message in English. Example: "Given printer is invalid or no longer supported."',
      }),
    fieldMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Field that this message concerns.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'SEVERITY_INFO', 'SEVERITY_WARNING', 'SEVERITY_ERROR'])
      .exactOptional()
      .openapi({ description: 'Message severity' }),
  })
  .openapi({
    description:
      'Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."}',
    required: [],
  })
  .openapi('AuxiliaryMessage')

const BatchChangeChromeOsDeviceStatusRequestSchema = z
  .object({
    changeChromeOsDeviceStatusAction: z
      .enum([
        'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_UNSPECIFIED',
        'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION',
        'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DISABLE',
        'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_REENABLE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The action to take on the ChromeOS device in order to change its status.',
      }),
    deprovisionReason: z
      .enum([
        'DEPROVISION_REASON_UNSPECIFIED',
        'DEPROVISION_REASON_SAME_MODEL_REPLACEMENT',
        'DEPROVISION_REASON_UPGRADE',
        'DEPROVISION_REASON_DOMAIN_MOVE',
        'DEPROVISION_REASON_SERVICE_EXPIRATION',
        'DEPROVISION_REASON_OTHER',
        'DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT',
        'DEPROVISION_REASON_RETIRING_DEVICE',
        'DEPROVISION_REASON_UPGRADE_TRANSFER',
        'DEPROVISION_REASON_NOT_REQUIRED',
        'DEPROVISION_REASON_REPAIR_CENTER',
      ])
      .exactOptional()
      .openapi({
        description:
          "Optional. The reason behind a device deprovision. Must be provided if 'changeChromeOsDeviceStatusAction' is set to 'CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION'. Otherwise, omit this field.",
        'x-enumDeprecated': [
          false,
          false,
          true,
          true,
          true,
          true,
          false,
          false,
          false,
          false,
          false,
        ],
      }),
    deviceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Required. List of the IDs of the ChromeOS devices to change. Maximum 50.',
      }),
  })
  .openapi({
    description: 'A request for changing the status of a batch of ChromeOS devices.',
    required: [],
  })
  .openapi('BatchChangeChromeOsDeviceStatusRequest')

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

const ChangeChromeOsDeviceStatusSucceededSchema = z
  .object({})
  .openapi({ description: 'Response for a successful ChromeOS device status change.' })
  .openapi('ChangeChromeOsDeviceStatusSucceeded')

const ChangeChromeOsDeviceStatusResultSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the ChromeOS device.' }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure.',
    }),
    response: ChangeChromeOsDeviceStatusSucceededSchema.exactOptional().openapi({
      description: 'The device could change its status successfully.',
    }),
  })
  .openapi({
    description: 'The result of a single ChromeOS device for a Change state operation.',
    required: [],
  })
  .openapi('ChangeChromeOsDeviceStatusResult')

const BatchChangeChromeOsDeviceStatusResponseSchema = z
  .object({
    changeChromeOsDeviceStatusResults: z
      .array(ChangeChromeOsDeviceStatusResultSchema)
      .exactOptional()
      .openapi({
        description: 'The results for each of the ChromeOS devices provided in the request.',
      }),
  })
  .openapi({
    description: 'The response of changing the status of a batch of ChromeOS devices.',
    required: [],
  })
  .openapi('BatchChangeChromeOsDeviceStatusResponse')

const PrintServerSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the print server was created.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Editable. Description of the print server (as shown in the Admin console).',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Editable. Display name of the print server (as shown in the Admin console).',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. ID of the print server. Leave empty when creating.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`',
      }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "ID of the organization unit (OU) that owns this print server. This value can only be set when the print server is initially created. If it's not populated, the print server is placed under the root OU. The `org_unit_id` can be retrieved using the [Directory API](/admin-sdk/directory/reference/rest/v1/orgunits).",
      }),
    uri: z.string().exactOptional().openapi({ description: 'Editable. Print server URI.' }),
  })
  .openapi({ description: 'Configuration for a print server.', required: [] })
  .openapi('PrintServer')

const CreatePrintServerRequestSchema = z
  .object({
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`",
      }),
    printServer: PrintServerSchema.exactOptional().openapi({
      description:
        'Required. A print server to create. If you want to place the print server under a specific organizational unit (OU), then populate the `org_unit_id`. Otherwise the print server is created under the root OU. The `org_unit_id` can be retrieved using the [Directory API](https://developers.google.com/admin-sdk/directory/v1/guides/manage-org-units).',
    }),
  })
  .openapi({ description: 'Request for adding a new print server.', required: [] })
  .openapi('CreatePrintServerRequest')

const BatchCreatePrintServersRequestSchema = z
  .object({
    requests: z
      .array(CreatePrintServerRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. A list of `PrintServer` resources to be created (max `50` per batch).',
      }),
  })
  .openapi({ description: 'Request to add multiple new print servers in a batch.', required: [] })
  .openapi('BatchCreatePrintServersRequest')

const PrintServerFailureInfoSchema = z
  .object({
    errorCode: z
      .enum([
        'OK',
        'CANCELLED',
        'UNKNOWN',
        'INVALID_ARGUMENT',
        'DEADLINE_EXCEEDED',
        'NOT_FOUND',
        'ALREADY_EXISTS',
        'PERMISSION_DENIED',
        'UNAUTHENTICATED',
        'RESOURCE_EXHAUSTED',
        'FAILED_PRECONDITION',
        'ABORTED',
        'OUT_OF_RANGE',
        'UNIMPLEMENTED',
        'INTERNAL',
        'UNAVAILABLE',
        'DATA_LOSS',
      ])
      .exactOptional()
      .openapi({ description: 'Canonical code for why the update failed to apply.' }),
    errorMessage: z.string().exactOptional().openapi({ description: 'Failure reason message.' }),
    printServer: PrintServerSchema.exactOptional().openapi({ description: 'Failed print server.' }),
    printServerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of a failed print server.' }),
  })
  .openapi({ description: 'Info about failures', required: [] })
  .openapi('PrintServerFailureInfo')

const BatchCreatePrintServersResponseSchema = z
  .object({
    failures: z
      .array(PrintServerFailureInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of create failures. `PrintServer` IDs are not populated, as print servers were not created.',
      }),
    printServers: z
      .array(PrintServerSchema)
      .exactOptional()
      .openapi({
        description: 'A list of successfully created print servers with their IDs populated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BatchCreatePrintServersResponse')

const PrinterSchema = z
  .object({
    auxiliaryMessages: z
      .array(AuxiliaryMessageSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Auxiliary messages about issues with the printer configuration if any.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time when printer was created.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Editable. Description of printer.' }),
    displayName: z.string().exactOptional().openapi({ description: 'Editable. Name of printer.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the printer. (During printer creation leave empty)' }),
    makeAndModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)',
      }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Organization Unit that owns this printer (Only can be set during Printer creation)',
      }),
    uri: z.string().exactOptional().openapi({ description: 'Editable. Printer URI.' }),
    useDriverlessConfig: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored",
      }),
  })
  .openapi({ description: 'Printer configuration.', required: [] })
  .openapi('Printer')

const CreatePrinterRequestSchema = z
  .object({
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The name of the customer. Format: customers/{customer_id}',
      }),
    printer: PrinterSchema.exactOptional().openapi({
      description:
        'Required. A printer to create. If you want to place the printer under particular OU then populate printer.org_unit_id filed. Otherwise the printer will be placed under root OU.',
    }),
  })
  .openapi({ description: 'Request for adding a new printer.', required: [] })
  .openapi('CreatePrinterRequest')

const BatchCreatePrintersRequestSchema = z
  .object({
    requests: z
      .array(CreatePrinterRequestSchema)
      .exactOptional()
      .openapi({ description: 'A list of Printers to be created. Max 50 at a time.' }),
  })
  .openapi({ description: 'Request for adding new printers in batch.', required: [] })
  .openapi('BatchCreatePrintersRequest')

const FailureInfoSchema = z
  .object({
    errorCode: z
      .enum([
        'OK',
        'CANCELLED',
        'UNKNOWN',
        'INVALID_ARGUMENT',
        'DEADLINE_EXCEEDED',
        'NOT_FOUND',
        'ALREADY_EXISTS',
        'PERMISSION_DENIED',
        'UNAUTHENTICATED',
        'RESOURCE_EXHAUSTED',
        'FAILED_PRECONDITION',
        'ABORTED',
        'OUT_OF_RANGE',
        'UNIMPLEMENTED',
        'INTERNAL',
        'UNAVAILABLE',
        'DATA_LOSS',
      ])
      .exactOptional()
      .openapi({ description: 'Canonical code for why the update failed to apply.' }),
    errorMessage: z.string().exactOptional().openapi({ description: 'Failure reason message.' }),
    printer: PrinterSchema.exactOptional().openapi({ description: 'Failed printer.' }),
    printerId: z.string().exactOptional().openapi({ description: 'Id of a failed printer.' }),
  })
  .openapi({ description: 'Info about failures', required: [] })
  .openapi('FailureInfo')

const BatchCreatePrintersResponseSchema = z
  .object({
    failures: z
      .array(FailureInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of create failures. Printer IDs are not populated, as printer were not created.',
      }),
    printers: z
      .array(PrinterSchema)
      .exactOptional()
      .openapi({
        description: 'A list of successfully created printers with their IDs populated.',
      }),
  })
  .openapi({ description: 'Response for adding new printers in batch.', required: [] })
  .openapi('BatchCreatePrintersResponse')

const BatchDeletePrintServersRequestSchema = z
  .object({
    printServerIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of print server IDs that should be deleted (max `100` per batch).',
      }),
  })
  .openapi({
    description: 'Request to delete multiple existing print servers in a batch.',
    required: [],
  })
  .openapi('BatchDeletePrintServersRequest')

const BatchDeletePrintServersResponseSchema = z
  .object({
    failedPrintServers: z
      .array(PrintServerFailureInfoSchema)
      .exactOptional()
      .openapi({ description: 'A list of update failures.' }),
    printServerIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of print server IDs that were successfully deleted.' }),
  })
  .openapi({ required: [] })
  .openapi('BatchDeletePrintServersResponse')

const BatchDeletePrintersRequestSchema = z
  .object({
    printerIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of Printer.id that should be deleted. Max 100 at a time.' }),
  })
  .openapi({ description: 'Request for deleting existing printers in batch.', required: [] })
  .openapi('BatchDeletePrintersRequest')

const BatchDeletePrintersResponseSchema = z
  .object({
    failedPrinters: z
      .array(FailureInfoSchema)
      .exactOptional()
      .openapi({ description: 'A list of update failures.' }),
    printerIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of Printer.id that were successfully deleted.' }),
  })
  .openapi({ description: 'Response for deleting existing printers in batch.', required: [] })
  .openapi('BatchDeletePrintersResponse')

const BuildingAddressSchema = z
  .object({
    addressLines: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Unstructured address lines describing the lower levels of an address.',
      }),
    administrativeArea: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Highest administrative subdivision which is used for postal addresses of a country or region.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. BCP-47 language code of the contents of this address (if known).',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Postal code of the address.' }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. CLDR region code of the country/region of the address.' }),
    sublocality: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Sublocality of the address.' }),
  })
  .openapi({ description: 'Public API: Resources.buildings', required: [] })
  .openapi('BuildingAddress')

const BuildingCoordinatesSchema = z
  .object({
    latitude: z.float64().exactOptional().openapi({ description: 'Latitude in decimal degrees.' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Longitude in decimal degrees.' }),
  })
  .openapi({ description: 'Public API: Resources.buildings', required: [] })
  .openapi('BuildingCoordinates')

const BuildingSchema = z
  .object({
    address: BuildingAddressSchema.exactOptional().openapi({
      description:
        'The postal address of the building. See [`PostalAddress`](/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required.',
    }),
    buildingId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the building. The maximum length is 100 characters.',
      }),
    buildingName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.',
      }),
    coordinates: BuildingCoordinatesSchema.exactOptional().openapi({
      description:
        'The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A brief description of the building. For example, "Chelsea Market".',
      }),
    etags: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    floorNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.',
      }),
    kind: z
      .string()
      .default('admin#directory#resources#buildings#Building')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
  })
  .openapi({ description: 'Public API: Resources.buildings', required: [] })
  .openapi('Building')

const BuildingsSchema = z
  .object({
    buildings: z
      .array(BuildingSchema)
      .exactOptional()
      .openapi({ description: 'The Buildings in this page of results.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#resources#buildings#buildingsList')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
  })
  .openapi({ description: 'Public API: Resources.buildings', required: [] })
  .openapi('Buildings')

const CalendarResourceSchema = z
  .object({
    buildingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique ID for the building a resource is located in.' }),
    capacity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Capacity of a resource, number of seats in a room.' }),
    etags: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    featureInstances: z
      .any()
      .exactOptional()
      .openapi({ description: 'Instances of features for the calendar resource.' }),
    floorName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the floor a resource is located on.' }),
    floorSection: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the section within a floor a resource is located in.' }),
    generatedResourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".',
      }),
    kind: z
      .string()
      .default('admin#directory#resources#calendars#CalendarResource')
      .exactOptional()
      .openapi({
        description:
          'The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.',
      }),
    resourceCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.',
      }),
    resourceDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the resource, visible only to admins.' }),
    resourceEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The read-only email for the calendar resource. Generated as part of creating a new calendar resource.',
      }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID for the calendar resource.' }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the calendar resource. For example, "Training Room 1A".',
      }),
    resourceType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of the calendar resource, intended for non-room resources.',
      }),
    userVisibleDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the resource, visible to users and admins.' }),
  })
  .openapi({ description: 'Public API: Resources.calendars', required: [] })
  .openapi('CalendarResource')

const CalendarResourcesSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z
      .array(CalendarResourceSchema)
      .exactOptional()
      .openapi({ description: 'The CalendarResources in this page of results.' }),
    kind: z
      .string()
      .default('admin#directory#resources#calendars#calendarResourcesList')
      .exactOptional()
      .openapi({
        description:
          'Identifies this as a collection of CalendarResources. This is always `admin#directory#resources#calendars#calendarResourcesList`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
  })
  .openapi({ description: 'Public API: Resources.calendars', required: [] })
  .openapi('CalendarResources')

const ChannelSchema = z
  .object({
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address where notifications are delivered for this channel.' }),
    expiration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'A UUID or similar unique string that identifies this channel.' }),
    kind: z
      .string()
      .default('api#channel')
      .exactOptional()
      .openapi({
        description:
          'Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.',
      }),
    params: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional parameters controlling delivery channel behavior. Optional. For example, `params.ttl` specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days.',
      }),
    payload: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A Boolean value to indicate whether payload is wanted. Optional.' }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.',
      }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'A version-specific identifier for the watched resource.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of delivery mechanism used for this channel.' }),
  })
  .openapi({
    description: 'An notification channel used to watch for resource changes.',
    required: [],
  })
  .openapi('Channel')

const OsUpdateStatusSchema = z
  .object({
    rebootTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time of the last reboot.' }),
    state: z
      .enum([
        'updateStateUnspecified',
        'updateStateNotStarted',
        'updateStateDownloadInProgress',
        'updateStateNeedReboot',
      ])
      .exactOptional()
      .openapi({ description: 'The update state of an OS update.' }),
    targetKioskAppVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'New required platform version from the pending updated kiosk app.',
      }),
    targetOsVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot.',
      }),
    updateCheckTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time of the last update check.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time of the last successful OS update.' }),
  })
  .openapi({
    description: 'Contains information regarding the current OS update status.',
    required: [],
  })
  .openapi('OsUpdateStatus')

const ChromeOsDeviceSchema = z
  .object({
    activeTimeRanges: z
      .array(
        z
          .object({
            activeTime: z
              .int32()
              .exactOptional()
              .openapi({ description: 'Duration of usage in milliseconds.' }),
            date: z.iso.date().exactOptional().openapi({ description: 'Date of usage' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of active time ranges (Read-only).' }),
    annotatedAssetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The asset identifier as noted by an administrator or specified during enrollment.',
      }),
    annotatedLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed.',
      }),
    annotatedUser: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.',
      }),
    autoUpdateExpiration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '(Read-only) The timestamp after which the device will stop receiving Chrome updates or support',
      }),
    bootMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).",
      }),
    cpuInfo: z
      .array(
        z
          .object({
            architecture: z
              .string()
              .exactOptional()
              .openapi({ description: 'The CPU architecture.' }),
            logicalCpus: z
              .array(
                z
                  .object({
                    cStates: z
                      .array(
                        z
                          .object({
                            displayName: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Name of the state.' }),
                            sessionDuration: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Time spent in the state since the last reboot.',
                              }),
                          })
                          .openapi({
                            description:
                              'Status of a single C-state. C-states are various modes the CPU can transition to in order to use more or less power.',
                            required: [],
                          }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          'C-States indicate the power consumption state of the CPU. For more information look at documentation published by the CPU maker.',
                      }),
                    currentScalingFrequencyKhz: z
                      .int32()
                      .exactOptional()
                      .openapi({ description: 'Current frequency the CPU is running at.' }),
                    idleDuration: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Idle time since last boot.' }),
                    maxScalingFrequencyKhz: z
                      .int32()
                      .exactOptional()
                      .openapi({
                        description: 'Maximum frequency the CPU is allowed to run at, by policy.',
                      }),
                  })
                  .openapi({ description: 'Status of a single logical CPU.', required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Information for the Logical CPUs' }),
            maxClockSpeedKhz: z
              .int32()
              .exactOptional()
              .openapi({ description: 'The max CPU clock speed in kHz.' }),
            model: z.string().exactOptional().openapi({ description: 'The CPU model name.' }),
          })
          .openapi({ description: 'CPU specs for a CPU.', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Information regarding CPU specs in the device.' }),
    cpuStatusReports: z
      .array(
        z
          .object({
            cpuTemperatureInfo: z
              .array(
                z
                  .object({
                    label: z.string().exactOptional().openapi({ description: 'CPU label' }),
                    temperature: z
                      .int32()
                      .exactOptional()
                      .openapi({ description: 'Temperature in Celsius degrees.' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'A list of CPU temperature samples.' }),
            cpuUtilizationPercentageInfo: z.array(z.int32()).exactOptional(),
            reportTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ description: 'Date and time the report was received.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Reports of CPU utilization and temperature (Read-only)' }),
    deprovisionReason: z
      .enum([
        'DEPROVISION_REASON_UNSPECIFIED',
        'DEPROVISION_REASON_SAME_MODEL_REPLACEMENT',
        'DEPROVISION_REASON_UPGRADE',
        'DEPROVISION_REASON_DOMAIN_MOVE',
        'DEPROVISION_REASON_SERVICE_EXPIRATION',
        'DEPROVISION_REASON_OTHER',
        'DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT',
        'DEPROVISION_REASON_RETIRING_DEVICE',
        'DEPROVISION_REASON_UPGRADE_TRANSFER',
        'DEPROVISION_REASON_NOT_REQUIRED',
        'DEPROVISION_REASON_REPAIR_CENTER',
      ])
      .exactOptional()
      .openapi({
        description: '(Read-only) Deprovision reason.',
        'x-enumDeprecated': [
          false,
          false,
          true,
          true,
          true,
          true,
          false,
          false,
          false,
          false,
          false,
        ],
      }),
    deviceFiles: z
      .array(
        z
          .object({
            createTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ description: 'Date and time the file was created' }),
            downloadUrl: z.string().exactOptional().openapi({ description: 'File download URL' }),
            name: z.string().exactOptional().openapi({ description: 'File name' }),
            type: z.string().exactOptional().openapi({ description: 'File type' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of device files to download (Read-only)' }),
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the Chrome device.' }),
    deviceLicenseType: z
      .enum([
        'deviceLicenseTypeUnspecified',
        'enterprise',
        'enterpriseUpgrade',
        'educationUpgrade',
        'education',
        'kioskUpgrade',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Device license type.', readOnly: true }),
    diskVolumeReports: z
      .array(
        z
          .object({
            volumeInfo: z
              .array(
                z
                  .object({
                    storageFree: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Free disk space [in bytes]' }),
                    storageTotal: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Total disk space [in bytes]' }),
                    volumeId: z.string().exactOptional().openapi({ description: 'Volume id' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Disk volumes' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'Reports of disk space and other info about mounted/connected volumes.',
      }),
    dockMacAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '(Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.',
      }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    ethernetMacAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "The device's MAC address on the ethernet network interface." }),
    ethernetMacAddress0: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '(Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.',
      }),
    firmwareVersion: z
      .string()
      .exactOptional()
      .openapi({ description: "The Chrome device's firmware version." }),
    firstEnrollmentTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date and time for the first time the device was enrolled.' }),
    kind: z
      .string()
      .default('admin#directory#chromeosdevice')
      .exactOptional()
      .openapi({
        description:
          'The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`.',
      }),
    lastDeprovisionTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: '(Read-only) Date and time for the last deprovision of the device.',
      }),
    lastEnrollmentTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time the device was last enrolled (Read-only)' }),
    lastKnownNetwork: z
      .array(
        z
          .object({
            ipAddress: z.string().exactOptional().openapi({ description: 'The IP address.' }),
            wanIpAddress: z
              .string()
              .exactOptional()
              .openapi({ description: 'The WAN IP address.' }),
          })
          .openapi({ description: 'Information for an ip address.', required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Contains last known network (Read-only)' }),
    lastSync: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)',
      }),
    macAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The device's wireless MAC address. If the device does not have this information, it is not included in the response.",
      }),
    manufactureDate: z
      .string()
      .exactOptional()
      .openapi({
        description: '(Read-only) The date the device was manufactured in yyyy-mm-dd format.',
      }),
    meid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid).",
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The device's model information. If the device does not have this information, this property is not included in the response.",
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed.",
      }),
    orderNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The device's order number. Only devices directly purchased from Google have an order number.",
      }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).',
      }),
    orgUnitPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).",
      }),
    osUpdateStatus: OsUpdateStatusSchema.exactOptional().openapi({
      description: 'The status of the OS updates for the device.',
    }),
    osVersion: z
      .string()
      .exactOptional()
      .openapi({ description: "The Chrome device's operating system version." }),
    platformVersion: z
      .string()
      .exactOptional()
      .openapi({ description: "The Chrome device's platform version." }),
    recentUsers: z
      .array(
        z
          .object({
            email: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The user's email address. This is only present if the user type is `USER_TYPE_MANAGED`.",
              }),
            type: z.string().exactOptional().openapi({ description: 'The type of the user.' }),
          })
          .openapi({
            description: 'A list of recent device users, in descending order, by last login time.',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description: 'A list of recent device users, in descending order, by last login time.',
      }),
    screenshotFiles: z
      .array(
        z
          .object({
            createTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ description: 'Date and time the file was created' }),
            downloadUrl: z.string().exactOptional().openapi({ description: 'File download URL' }),
            name: z.string().exactOptional().openapi({ description: 'File name' }),
            type: z.string().exactOptional().openapi({ description: 'File type' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)',
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab.",
      }),
    status: z.string().exactOptional().openapi({ description: 'The status of the device.' }),
    supportEndDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Final date the device will be supported (Read-only)' }),
    systemRamFreeReports: z
      .array(
        z
          .object({
            reportTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ description: 'Date and time the report was received.' }),
            systemRamFreeInfo: z.array(z.string()).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Reports of amounts of available RAM memory (Read-only)' }),
    systemRamTotal: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total RAM on the device [in bytes] (Read-only)' }),
    tpmVersionInfo: z
      .object({
        family: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: "1.2" -> 312e3200 TPM 2.0: "2.0" -> 322e3000',
          }),
        firmwareVersion: z
          .string()
          .exactOptional()
          .openapi({ description: 'TPM firmware version.' }),
        manufacturer: z.string().exactOptional().openapi({ description: 'TPM manufacturer code.' }),
        specLevel: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2.',
          }),
        tpmModel: z.string().exactOptional().openapi({ description: 'TPM model number.' }),
        vendorSpecific: z
          .string()
          .exactOptional()
          .openapi({ description: 'Vendor-specific information such as Vendor ID.' }),
      })
      .exactOptional()
      .openapi({ description: 'Trusted Platform Module (TPM) (Read-only)', required: [] }),
    willAutoRenew: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if the device will auto renew its support after the support end date. This is a read-only property.',
      }),
  })
  .openapi({
    description:
      "Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).",
    required: [],
  })
  .openapi('ChromeOsDevice')

const ChromeOsDeviceActionSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'Action to be taken on the Chrome OS device.' }),
    deprovisionReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers.',
      }),
  })
  .openapi({
    description: 'Data about an update to the status of a Chrome OS device.',
    required: [],
  })
  .openapi('ChromeOsDeviceAction')

const ChromeOsDevicesSchema = z
  .object({
    chromeosdevices: z
      .array(ChromeOsDeviceSchema)
      .exactOptional()
      .openapi({ description: 'A list of Chrome OS Device objects.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#chromeosdevices')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Token used to access the next page of this result. To access the next page, use this token's value in the `pageToken` query string of this request.",
      }),
  })
  .openapi({ required: [] })
  .openapi('ChromeOsDevices')

const ChromeOsMoveDevicesToOuSchema = z
  .object({
    deviceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Chrome OS devices to be moved to OU' }),
  })
  .openapi({ required: [] })
  .openapi('ChromeOsMoveDevicesToOu')

const CustomerPostalAddressSchema = z
  .object({
    addressLine1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A customer's physical address. The address can be composed of one to three lines.",
      }),
    addressLine2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address line 2 of the address.' }),
    addressLine3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address line 3 of the address.' }),
    contactName: z
      .string()
      .exactOptional()
      .openapi({ description: "The customer contact's name." }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is a required property. For `countryCode` information see the [ISO 3166 country code elements](https://www.iso.org/iso/country_codes.htm).',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the locality. An example of a locality value is the city of `San Francisco`.',
      }),
    organizationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company or company division name.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code. A postalCode example is a postal zip code such as `10009`. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element.',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the region. An example of a region value is `NY` for the state of New York.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CustomerPostalAddress')

const CustomerSchema = z
  .object({
    alternateEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain`",
      }),
    customerCreationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "The customer's creation time (Readonly)" }),
    customerDomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The customer's primary domain name string. Do not include the `www` prefix when creating a new customer.",
      }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The unique ID for the customer's Google Workspace account. (Readonly)",
      }),
    kind: z
      .string()
      .default('admin#directory#customer')
      .exactOptional()
      .openapi({
        description: 'Identifies the resource as a customer. Value: `admin#directory#customer`',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`.",
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.",
      }),
    postalAddress: CustomerPostalAddressSchema.exactOptional().openapi({
      description: "The customer's postal address information.",
    }),
  })
  .openapi({ required: [] })
  .openapi('Customer')

const DirectoryChromeosdevicesCommandResultSchema = z
  .object({
    commandResultPayload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The payload for the command result. The following commands respond with a payload: * `DEVICE_START_CRD_SESSION`: Payload is a stringified JSON object in the form: { "url": url }. The URL provides a link to the Chrome Remote Desktop session.',
      }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The error message with a short explanation as to why the command failed. Only present if the command failed.',
      }),
    executeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the command was executed or failed to execute.' }),
    result: z
      .enum(['COMMAND_RESULT_TYPE_UNSPECIFIED', 'IGNORED', 'FAILURE', 'SUCCESS'])
      .exactOptional()
      .openapi({ description: 'The result of the command.' }),
  })
  .openapi({ description: 'The result of executing a command.', required: [] })
  .openapi('DirectoryChromeosdevicesCommandResult')

const DirectoryChromeosdevicesCommandSchema = z
  .object({
    commandExpireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired.",
      }),
    commandId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique ID of a device command.' }),
    commandResult: DirectoryChromeosdevicesCommandResultSchema.exactOptional().openapi({
      description: 'The result of the command execution.',
    }),
    issueTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp when the command was issued by the admin.' }),
    payload: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payload that the command specified, if any.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'EXPIRED',
        'CANCELLED',
        'SENT_TO_CLIENT',
        'ACKED_BY_CLIENT',
        'EXECUTED_BY_CLIENT',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates the command state.' }),
    type: z
      .enum([
        'COMMAND_TYPE_UNSPECIFIED',
        'REBOOT',
        'TAKE_A_SCREENSHOT',
        'SET_VOLUME',
        'WIPE_USERS',
        'REMOTE_POWERWASH',
        'DEVICE_START_CRD_SESSION',
        'CAPTURE_LOGS',
        'FETCH_SUPPORT_PACKET',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the command.' }),
  })
  .openapi({
    description: 'Information regarding a command that was issued to a device.',
    required: [],
  })
  .openapi('DirectoryChromeosdevicesCommand')

const DirectoryChromeosdevicesIssueCommandRequestSchema = z
  .object({
    commandType: z
      .enum([
        'COMMAND_TYPE_UNSPECIFIED',
        'REBOOT',
        'TAKE_A_SCREENSHOT',
        'SET_VOLUME',
        'WIPE_USERS',
        'REMOTE_POWERWASH',
        'DEVICE_START_CRD_SESSION',
        'CAPTURE_LOGS',
        'FETCH_SUPPORT_PACKET',
      ])
      .exactOptional()
      .openapi({ description: 'The type of command.' }),
    payload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The payload for the command, provide it only if command supports it. The following commands support adding payload: * `SET_VOLUME`: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the range [0,100]. * `DEVICE_START_CRD_SESSION`: Payload is optionally a stringified JSON object in the form: { "ackedUserPresence": true }. `ackedUserPresence` is a boolean. By default, `ackedUserPresence` is set to `false`. To start a Chrome Remote Desktop session for an active device, set `ackedUserPresence` to `true`. * `REBOOT`: Payload is a stringified JSON object in the form: { "user_session_delay_seconds": 300 }. The delay has to be in the range [0, 300]. * `FETCH_SUPPORT_PACKET`: Payload is optionally a stringified JSON object in the form: {"supportPacketDetails":{ "issueCaseId": optional_support_case_id_string, "issueDescription": optional_issue_description_string, "requestedDataCollectors": []}} The list of available `data_collector_enums` are as following: Chrome System Information (1), Crash IDs (2), Memory Details (3), UI Hierarchy (4), Additional ChromeOS Platform Logs (5), Device Event (6), Intel WiFi NICs Debug Dump (7), Touch Events (8), Lacros (9), Lacros System Information (10), ChromeOS Flex Logs (11), DBus Details (12), ChromeOS Network Routes (13), ChromeOS Shill (Connection Manager) Logs (14), Policies (15), ChromeOS System State and Logs (16), ChromeOS System Logs (17), ChromeOS Chrome User Logs (18), ChromeOS Bluetooth (19), ChromeOS Connected Input Devices (20), ChromeOS Traffic Counters (21), ChromeOS Virtual Keyboard (22), ChromeOS Network Health (23). See more details in [help article](https://support.google.com/chrome/a?p=remote-log).',
      }),
  })
  .openapi({ description: 'A request for issuing a command.', required: [] })
  .openapi('DirectoryChromeosdevicesIssueCommandRequest')

const DirectoryChromeosdevicesIssueCommandResponseSchema = z
  .object({
    commandId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique ID of the issued command, used to retrieve the command status.',
      }),
  })
  .openapi({ description: 'A response for issuing a command.', required: [] })
  .openapi('DirectoryChromeosdevicesIssueCommandResponse')

const DomainAliasSchema = z
  .object({
    creationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the domain alias. (Read-only).' }),
    domainAliasName: z.string().exactOptional().openapi({ description: 'The domain alias name.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#domainAlias')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    parentDomainName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.',
      }),
    verified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates the verification state of a domain alias. (Read-only)' }),
  })
  .openapi({ required: [] })
  .openapi('DomainAlias')

const DomainAliasesSchema = z
  .object({
    domainAliases: z
      .array(DomainAliasSchema)
      .exactOptional()
      .openapi({ description: 'A list of domain alias objects.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#domainAliases')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
  })
  .openapi({ required: [] })
  .openapi('DomainAliases')

const DomainsSchema = z
  .object({
    creationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only).',
      }),
    domainAliases: z
      .array(DomainAliasSchema)
      .exactOptional()
      .openapi({ description: 'A list of domain alias objects. (Read-only)' }),
    domainName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain name of the customer.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    isPrimary: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the domain is a primary domain (Read-only).' }),
    kind: z
      .string()
      .default('admin#directory#domain')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    verified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates the verification state of a domain. (Read-only).' }),
  })
  .openapi({ required: [] })
  .openapi('Domains')

const Domains2Schema = z
  .object({
    domains: z
      .array(DomainsSchema)
      .exactOptional()
      .openapi({ description: 'A list of domain objects.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#domains')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
  })
  .openapi({ required: [] })
  .openapi('Domains2')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FeatureSchema = z
  .object({
    etags: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#resources#features#Feature')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the feature.' }),
  })
  .openapi({ description: 'JSON template for Feature object in Directory API.', required: [] })
  .openapi('Feature')

const FeatureInstanceSchema = z
  .object({
    feature: FeatureSchema.exactOptional().openapi({
      description:
        'The feature that this is an instance of. A calendar resource may have multiple instances of a feature.',
    }),
  })
  .openapi({ description: 'JSON template for a feature instance.', required: [] })
  .openapi('FeatureInstance')

const FeatureRenameSchema = z
  .object({
    newName: z.string().exactOptional().openapi({ description: 'New name of the feature.' }),
  })
  .openapi({ required: [] })
  .openapi('FeatureRename')

const FeaturesSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    features: z
      .array(FeatureSchema)
      .exactOptional()
      .openapi({ description: 'The Features in this page of results.' }),
    kind: z
      .string()
      .default('admin#directory#resources#features#featuresList')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
  })
  .openapi({ description: 'Public API: Resources.features', required: [] })
  .openapi('Features')

const GroupSchema = z
  .object({
    adminCreated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Read-only. Value is `true` if this group was created by an administrator rather than a user.',
      }),
    aliases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Read-only. The list of a group's alias email addresses. To add, update, or remove a group's aliases, use the `groups.aliases` methods. If edited in a group's POST or PUT request, the edit is ignored.",
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.',
      }),
    directMembersCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.",
      }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.",
      }),
    kind: z
      .string()
      .default('admin#directory#group')
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. For Groups resources, the value is `admin#directory#group`.',
      }),
    name: z.string().exactOptional().openapi({ description: "The group's display name." }),
    nonEditableAliases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Read-only. The list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored.",
      }),
  })
  .openapi({
    description:
      "Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-groups). For information about other types of groups, see the [Cloud Identity Groups API documentation](https://cloud.google.com/identity/docs/groups). Note: The user calling the API (or being impersonated by a service account) must have an assigned [role](https://developers.google.com/admin-sdk/directory/v1/guides/manage-roles) that includes Admin API Groups permissions, such as Super Admin or Groups Admin.",
    required: [],
  })
  .openapi('Group')

const GroupAliasSchema = z
  .object({
    alias: z.string().exactOptional().openapi({ description: 'The alias email address.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID of the group.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. For Alias resources, the value is `admin#directory#alias`.',
      }),
    primaryEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary email address of the group.' }),
  })
  .openapi({
    description: 'The Directory API manages aliases, which are alternative email addresses.',
    required: [],
  })
  .openapi('GroupAlias')

const GroupsSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    groups: z
      .array(GroupSchema)
      .exactOptional()
      .openapi({ description: 'A list of group objects.' }),
    kind: z
      .string()
      .default('admin#directory#groups')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token used to access next page of this result.' }),
  })
  .openapi({ required: [] })
  .openapi('Groups')

const ListPrintServersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` in a request to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    printServers: z
      .array(PrintServerSchema)
      .exactOptional()
      .openapi({ description: 'List of print servers.' }),
  })
  .openapi({ required: [] })
  .openapi('ListPrintServersResponse')

const PrinterModelSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name. eq. "Brother MFC-8840D"' }),
    makeAndModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Make and model as represented in "make_and_model" field in Printer object. eq. "brother mfc-8840d"',
      }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Manufacturer. eq. "Brother"' }),
  })
  .openapi({ description: 'Printer manufacturer and model', required: [] })
  .openapi('PrinterModel')

const ListPrinterModelsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    printerModels: z
      .array(PrinterModelSchema)
      .exactOptional()
      .openapi({
        description:
          'Printer models that are currently allowed to be configured for ChromeOs. Some printers may be added or removed over time.',
      }),
  })
  .openapi({ description: 'Response for listing allowed printer models.', required: [] })
  .openapi('ListPrinterModelsResponse')

const ListPrintersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    printers: z
      .array(PrinterSchema)
      .exactOptional()
      .openapi({
        description:
          'List of printers. If `org_unit_id` was given in the request, then only printers visible for this OU will be returned. If `org_unit_id` was not given in the request, then all printers will be returned.',
      }),
  })
  .openapi({ description: 'Response for listing printers.', required: [] })
  .openapi('ListPrintersResponse')

const MemberSchema = z
  .object({
    delivery_settings: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Defines mail delivery preferences of member. This field is only supported by `insert`, `update`, and `get` methods.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.",
      }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.",
      }),
    kind: z
      .string()
      .default('admin#directory#member')
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. For Members resources, the value is `admin#directory#member`.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).",
      }),
    status: z.string().exactOptional().openapi({ description: 'Status of member (Immutable)' }),
    type: z.string().exactOptional().openapi({ description: 'The type of group member.' }),
  })
  .openapi({
    description:
      "A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members).",
    required: [],
  })
  .openapi('Member')

const MembersSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#members')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    members: z
      .array(MemberSchema)
      .exactOptional()
      .openapi({ description: 'A list of member objects.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token used to access next page of this result.' }),
  })
  .openapi({ required: [] })
  .openapi('Members')

const MembersHasMemberSchema = z
  .object({
    isMember: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'JSON template for Has Member response in Directory API.', required: [] })
  .openapi('MembersHasMember')

const MobileDeviceSchema = z
  .object({
    adbStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Adb (USB debugging) enabled or disabled on device (Read-only)' }),
    applications: z
      .array(
        z
          .object({
            displayName: z
              .string()
              .exactOptional()
              .openapi({ description: "The application's display name. An example is `Browser`." }),
            packageName: z
              .string()
              .exactOptional()
              .openapi({
                description: "The application's package name. An example is `com.android.browser`.",
              }),
            permission: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  "The list of permissions of this application. These can be either a standard Android permission or one defined by the application, and are found in an application's [Android manifest](https://developer.android.com/guide/topics/manifest/uses-permission-element.html). Examples of a Calendar application's permissions are `READ_CALENDAR`, or `MANAGE_ACCOUNTS`.",
              }),
            versionCode: z
              .int32()
              .exactOptional()
              .openapi({ description: "The application's version code. An example is `13`." }),
            versionName: z
              .string()
              .exactOptional()
              .openapi({
                description: "The application's version name. An example is `3.2-140714`.",
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data. When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications.',
      }),
    basebandVersion: z
      .string()
      .exactOptional()
      .openapi({ description: "The device's baseband version." }),
    bootloaderVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mobile Device Bootloader version (Read-only)' }),
    brand: z.string().exactOptional().openapi({ description: 'Mobile Device Brand (Read-only)' }),
    buildNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The device's operating system build number." }),
    defaultLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default locale used on the device.' }),
    developerOptionsStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Developer options enabled or disabled on device (Read-only)' }),
    deviceCompromisedStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The compromised device status.' }),
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier.',
      }),
    devicePasswordStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'DevicePasswordStatus (Read-only)' }),
    email: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The list of the owner's email addresses. If your application needs the current list of user emails, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a user](/admin-sdk/directory/v1/guides/manage-users#get_user) method.",
      }),
    encryptionStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mobile Device Encryption Status (Read-only)' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    firstSync: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only)',
      }),
    hardware: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mobile Device Hardware (Read-only)' }),
    hardwareId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property.',
      }),
    imei: z.string().exactOptional().openapi({ description: "The device's IMEI number." }),
    kernelVersion: z
      .string()
      .exactOptional()
      .openapi({ description: "The device's kernel version." }),
    kind: z
      .string()
      .default('admin#directory#mobiledevice')
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`.',
      }),
    lastSync: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)',
      }),
    managedAccountIsOnOwnerProfile: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicating if this account is on owner/primary profile or not.',
      }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mobile Device manufacturer (Read-only)' }),
    meid: z.string().exactOptional().openapi({ description: "The device's MEID number." }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The mobile device's model name, for example Nexus S. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile=devices#update_mobile_device).",
      }),
    name: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The list of the owner's user names. If your application needs the current list of device owner names, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile device user information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-users#get_user).",
      }),
    networkOperator: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Mobile Device mobile or network operator (if available) (Read-only)',
      }),
    os: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).",
      }),
    otherAccountsInfo: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of accounts added on device (Read-only)' }),
    privilege: z.string().exactOptional().openapi({ description: 'DMAgentPermission (Read-only)' }),
    releaseVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mobile Device release version version (Read-only)' }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique ID the API service uses to identify the mobile device.',
      }),
    securityPatchLevel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mobile Device Security patch level (Read-only)' }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The device's serial number." }),
    status: z.string().exactOptional().openapi({ description: "The device's status." }),
    supportsWorkProfile: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Work profile supported on device (Read-only)' }),
    type: z.string().exactOptional().openapi({ description: 'The type of mobile device.' }),
    unknownSourcesStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Unknown sources enabled or disabled on device (Read-only)' }),
    userAgent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Gives information about the device such as `os` version. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).",
      }),
    wifiMacAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "The device's MAC address on Wi-Fi networks." }),
  })
  .openapi({
    description:
      "Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).",
    required: [],
  })
  .openapi('MobileDevice')

const MobileDeviceActionSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({ description: 'The action to be performed on the device.' }),
  })
  .openapi({ required: [] })
  .openapi('MobileDeviceAction')

const MobileDevicesSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#mobiledevices')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    mobiledevices: z
      .array(MobileDeviceSchema)
      .exactOptional()
      .openapi({ description: 'A list of Mobile Device objects.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token used to access next page of this result.' }),
  })
  .openapi({ required: [] })
  .openapi('MobileDevices')

const OrgUnitSchema = z
  .object({
    blockInheritance: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. This field is deprecated. Setting it to `true` is no longer supported and can have _unintended consequences_. For more information about inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the organizational unit.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#orgUnit')
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.",
      }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the organizational unit.' }),
    orgUnitPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user).",
      }),
    parentOrgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.',
      }),
    parentOrgUnitPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.",
      }),
  })
  .openapi({
    description:
      "Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.",
    required: [],
  })
  .openapi('OrgUnit')

const OrgUnitsSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#orgUnits')
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`.',
      }),
    organizationUnits: z
      .array(OrgUnitSchema)
      .exactOptional()
      .openapi({ description: 'A list of organizational unit objects.' }),
  })
  .openapi({ required: [] })
  .openapi('OrgUnits')

const PrivilegeSchema: z.ZodType<PrivilegeType> = z
  .lazy(() =>
    z
      .object({
        childPrivileges: z
          .array(PrivilegeSchema)
          .exactOptional()
          .openapi({
            description:
              'A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege.',
          }),
        etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
        isOuScopable: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If the privilege can be restricted to an organization unit.' }),
        kind: z
          .string()
          .default('admin#directory#privilege')
          .exactOptional()
          .openapi({
            description:
              'The type of the API resource. This is always `admin#directory#privilege`.',
          }),
        privilegeName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the privilege.' }),
        serviceId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).',
          }),
        serviceName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the service this privilege is for.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Privilege')

const PrivilegesSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z
      .array(PrivilegeSchema)
      .exactOptional()
      .openapi({ description: 'A list of Privilege resources.' }),
    kind: z
      .string()
      .default('admin#directory#privileges')
      .exactOptional()
      .openapi({
        description: 'The type of the API resource. This is always `admin#directory#privileges`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Privileges')

const RoleSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    isSuperAdminRole: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Returns `true` if the role is a super admin role.' }),
    isSystemRole: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Returns `true` if this is a pre-defined system role.' }),
    kind: z
      .string()
      .default('admin#directory#role')
      .exactOptional()
      .openapi({
        description: 'The type of the API resource. This is always `admin#directory#role`.',
      }),
    roleDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of the role.' }),
    roleId: z.string().exactOptional().openapi({ description: 'ID of the role.' }),
    roleName: z.string().exactOptional().openapi({ description: 'Name of the role.' }),
    rolePrivileges: z
      .array(
        z
          .object({
            privilegeName: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name of the privilege.' }),
            serviceId: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'The set of privileges that are granted to this role.' }),
  })
  .openapi({ required: [] })
  .openapi('Role')

const RoleAssignmentSchema = z
  .object({
    assignedTo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the entity this role is assigned to—either the `user_id` of a user, the `group_id` of a group, or the `uniqueId` of a service account as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).',
      }),
    assigneeType: z
      .enum(['user', 'group'])
      .exactOptional()
      .openapi({
        description: 'Output only. The type of the assignee (`USER` or `GROUP`).',
        readOnly: true,
      }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#roleAssignment')
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. This is always `admin#directory#roleAssignment`.',
      }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.',
      }),
    roleAssignmentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this roleAssignment.' }),
    roleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the role that is assigned.' }),
    scopeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The scope in which this role is assigned.' }),
  })
  .openapi({ description: 'Defines an assignment of a role.', required: [] })
  .openapi('RoleAssignment')

const RoleAssignmentsSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z
      .array(RoleAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'A list of RoleAssignment resources.' }),
    kind: z
      .string()
      .default('admin#directory#roleAssignments')
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. This is always `admin#directory#roleAssignments`.',
      }),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RoleAssignments')

const RolesSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z
      .array(RoleSchema)
      .exactOptional()
      .openapi({ description: 'A list of Role resources.' }),
    kind: z
      .string()
      .default('admin#directory#roles')
      .exactOptional()
      .openapi({
        description: 'The type of the API resource. This is always `admin#directory#roles`.',
      }),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Roles')

const SchemaFieldSpecSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: 'Display Name of the field.' }),
    etag: z.string().exactOptional().openapi({ description: 'The ETag of the field.' }),
    fieldId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the field (Read-only)' }),
    fieldName: z.string().exactOptional().openapi({ description: 'The name of the field.' }),
    fieldType: z.string().exactOptional().openapi({ description: 'The type of the field.' }),
    indexed: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Boolean specifying whether the field is indexed or not. Default: `true`.',
      }),
    kind: z
      .string()
      .default('admin#directory#schema#fieldspec')
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is. For schema fields this is always `admin#directory#schema#fieldspec`.',
      }),
    multiValued: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A boolean specifying whether this is a multi-valued field or not. Default: `false`.',
      }),
    numericIndexingSpec: z
      .object({
        maxValue: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.',
          }),
        minValue: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.',
        required: [],
      }),
    readAccessType: z
      .string()
      .default('ALL_DOMAIN_USERS')
      .exactOptional()
      .openapi({
        description:
          'Specifies who can view values of this field. See [Retrieve users as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It may take up to 24 hours for changes to this field to be reflected.',
      }),
  })
  .openapi({
    description:
      'You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).',
    required: [],
  })
  .openapi('SchemaFieldSpec')

const SchemaSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name for the schema.' }),
    etag: z.string().exactOptional().openapi({ description: 'The ETag of the resource.' }),
    fields: z
      .array(SchemaFieldSpecSchema)
      .exactOptional()
      .openapi({ description: 'A list of fields in the schema.' }),
    kind: z
      .string()
      .default('admin#directory#schema')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    schemaId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the schema (Read-only)' }),
    schemaName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.",
      }),
  })
  .openapi({
    description:
      'The type of API resource. For Schema resources, this is always `admin#directory#schema`.',
    required: [],
  })
  .openapi('Schema')

const SchemasSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#schemas')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    schemas: z
      .array(SchemaSchema)
      .exactOptional()
      .openapi({ description: 'A list of UserSchema objects.' }),
  })
  .openapi({
    description: 'JSON response template for List Schema operation in Directory API.',
    required: [],
  })
  .openapi('Schemas')

const TokenSchema = z
  .object({
    anonymous: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID.',
      }),
    clientId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Client ID of the application the token is issued to.' }),
    displayText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The displayable name of the application the token is issued to.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#token')
      .exactOptional()
      .openapi({
        description: 'The type of the API resource. This is always `admin#directory#token`.',
      }),
    nativeApp: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the token is issued to an installed application. The value is `true` if the application is installed to a desktop or mobile device.',
      }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of authorization scopes the application is granted.' }),
    userKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the user that issued the token.' }),
  })
  .openapi({ description: 'JSON template for token resource in Directory API.', required: [] })
  .openapi('Token')

const TokensSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z
      .array(TokenSchema)
      .exactOptional()
      .openapi({ description: 'A list of Token resources.' }),
    kind: z
      .string()
      .default('admin#directory#tokenList')
      .exactOptional()
      .openapi({
        description: 'The type of the API resource. This is always `admin#directory#tokenList`.',
      }),
  })
  .openapi({
    description: 'JSON response template for List tokens operation in Directory API.',
    required: [],
  })
  .openapi('Tokens')

const UserCustomPropertiesSchema = z
  .record(z.string(), z.any())
  .openapi({
    description:
      'JSON template for a set of custom properties (i.e. all fields in a particular schema)',
  })
  .openapi('UserCustomProperties')

const UserNameSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's display name. Limit: 256 characters." }),
    familyName: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's last name. Required when creating a user account." }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description: "The user's full name formed by concatenating the first and last name values.",
      }),
    givenName: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's first name. Required when creating a user account." }),
  })
  .openapi({ required: [] })
  .openapi('UserName')

const UserSchema = z
  .object({
    addresses: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "The list of the user's addresses. The maximum allowed data size for this field is 10KB.",
      }),
    agreedToTerms: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement.',
        readOnly: true,
      }),
    aliases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: "Output only. The list of the user's alias email addresses.",
        readOnly: true,
      }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if user is archived.' }),
    changePasswordAtNextLogin: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).",
      }),
    creationTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "User's G Suite account creation time. (Read-only)",
        readOnly: true,
      }),
    customSchemas: z
      .record(z.string(), UserCustomPropertiesSchema)
      .exactOptional()
      .openapi({
        description:
          "Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.",
      }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The customer ID to [retrieve all account users](/admin-sdk/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](/admin-sdk/directory/v1/reference/users/list) request.",
        readOnly: true,
      }),
    deletionTime: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    emails: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "The list of the user's email addresses. The maximum allowed data size for this field is 10KB. This excludes `publicKeyEncryptionCertificates`.",
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. ETag of the resource.', readOnly: true }),
    externalIds: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB.',
      }),
    gender: z
      .any()
      .exactOptional()
      .openapi({
        description: "The user's gender. The maximum allowed data size for this field is 1KB.",
      }),
    hashFunction: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA-1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.",
      }),
    ims: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "The list of the user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB.",
      }),
    includeInGlobalAddressList: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).",
      }),
    ipWhitelisted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If `true`, the user's IP address is subject to a deprecated IP address [`allowlist`](https://support.google.com/a/answer/60752) configuration.",
      }),
    isAdmin: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates a user with super admininistrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](/admin-sdk/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](/admin-sdk/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](/admin-sdk/directory/v1/reference/users/insert.html) or [update](/admin-sdk/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service.',
        readOnly: true,
      }),
    isDelegatedAdmin: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325).',
        readOnly: true,
      }),
    isEnforcedIn2Sv: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Is 2-step verification enforced (Read-only)',
        readOnly: true,
      }),
    isEnrolledIn2Sv: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Is enrolled in 2-step verification (Read-only)',
        readOnly: true,
      }),
    isMailboxSetup: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license.",
        readOnly: true,
      }),
    keywords: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "The list of the user's keywords. The maximum allowed data size for this field is 1KB.",
      }),
    kind: z
      .string()
      .default('admin#directory#user')
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`.',
        readOnly: true,
      }),
    languages: z
      .any()
      .exactOptional()
      .openapi({
        description: "The user's languages. The maximum allowed data size for this field is 1KB.",
      }),
    lastLoginTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "User's last login time. (Read-only)", readOnly: true }),
    locations: z
      .any()
      .exactOptional()
      .openapi({
        description: "The user's locations. The maximum allowed data size for this field is 10KB.",
      }),
    name: UserNameSchema.exactOptional().openapi({
      description:
        'Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1KB.',
    }),
    nonEditableAliases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Output only. The list of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain.",
        readOnly: true,
      }),
    notes: z.any().exactOptional().openapi({ description: 'Notes for the user.' }),
    orgUnitPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).',
      }),
    organizations: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB.',
      }),
    password: z.string().exactOptional().openapi({ description: "User's password" }),
    phones: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "The list of the user's phone numbers. The maximum allowed data size for this field is 1KB.",
      }),
    posixAccounts: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.',
      }),
    primaryEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.",
      }),
    recoveryEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Recovery email of the user.' }),
    recoveryPhone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.',
      }),
    relations: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "The list of the user's relationships to other users. The maximum allowed data size for this field is 2KB.",
      }),
    sshPublicKeys: z.any().exactOptional().openapi({ description: 'A list of SSH public keys.' }),
    suspended: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if user is suspended.' }),
    suspensionReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`.',
        readOnly: true,
      }),
    thumbnailPhotoEtag: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. ETag of the user's photo (Read-only)",
        readOnly: true,
      }),
    thumbnailPhotoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The URL of the user's profile photo. The URL might be temporary or private.",
        readOnly: true,
      }),
    websites: z
      .any()
      .exactOptional()
      .openapi({
        description: "The user's websites. The maximum allowed data size for this field is 2KB.",
      }),
  })
  .openapi({
    description:
      "The Directory API allows you to create and manage your account's users, user aliases, and user Google profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).",
    required: [],
  })
  .openapi('User')

const UserAboutSchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents are assumed to contain plain text.',
      }),
    value: z.string().exactOptional().openapi({ description: 'Actual value of notes.' }),
  })
  .openapi({
    description: 'JSON template for About (notes) of a user in Directory API.',
    required: [],
  })
  .openapi('UserAbout')

const UserAddressSchema = z
  .object({
    country: z.string().exactOptional().openapi({ description: 'Country.' }),
    countryCode: z.string().exactOptional().openapi({ description: 'Country code.' }),
    customType: z.string().exactOptional().openapi({ description: 'Custom type.' }),
    extendedAddress: z.string().exactOptional().openapi({ description: 'Extended Address.' }),
    formatted: z.string().exactOptional().openapi({ description: 'Formatted address.' }),
    locality: z.string().exactOptional().openapi({ description: 'Locality.' }),
    poBox: z.string().exactOptional().openapi({ description: 'Other parts of address.' }),
    postalCode: z.string().exactOptional().openapi({ description: 'Postal code.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If this is user's primary address. Only one entry could be marked as primary.",
      }),
    region: z.string().exactOptional().openapi({ description: 'Region.' }),
    sourceIsStructured: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses but any values will eventually be clobbered.',
      }),
    streetAddress: z.string().exactOptional().openapi({ description: 'Street.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Each entry can have a type which indicates standard values of that entry. For example address could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value.',
      }),
  })
  .openapi({ description: 'JSON template for address.', required: [] })
  .openapi('UserAddress')

const UserAliasSchema = z
  .object({
    alias: z.string().exactOptional().openapi({ description: 'The alias email address.' }),
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID for the user.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. For Alias resources, the value is `admin#directory#alias`.',
      }),
    primaryEmail: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's primary email address." }),
  })
  .openapi({
    description: 'The Directory API manages aliases, which are alternative email addresses.',
    required: [],
  })
  .openapi('UserAlias')

const UserEmailSchema = z
  .object({
    address: z.string().exactOptional().openapi({ description: 'Email id of the user.' }),
    customType: z.string().exactOptional().openapi({ description: 'Custom Type.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "If this is user's primary email. Only one entry could be marked as primary.",
      }),
    public_key_encryption_certificates: z
      .object({
        certificate: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'X.509 encryption certificate in `PEM` format. Must only be an end-entity (leaf) certificate.',
          }),
        is_default: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether this is the default certificate for the given email address.',
          }),
        state: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Denotes the certificate's state in its lifecycle. Possible values are `not_yet_validated`, `valid`, `invalid`, `expired`, and `revoked`.",
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Public Key Encryption Certificates. Current limit: 1 per email address, and 5 per user.',
        required: [],
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value.',
      }),
  })
  .openapi({ description: 'JSON template for an email.', required: [] })
  .openapi('UserEmail')

const UserExternalIdSchema = z
  .object({
    customType: z.string().exactOptional().openapi({ description: 'Custom type.' }),
    type: z.string().exactOptional().openapi({ description: 'The type of the Id.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the id.' }),
  })
  .openapi({ description: 'JSON template for an externalId entry.', required: [] })
  .openapi('UserExternalId')

const UserGenderSchema = z
  .object({
    addressMeAs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'AddressMeAs. A human-readable string containing the proper way to refer to the profile owner by humans for example he/him/his or they/them/their.',
      }),
    customGender: z.string().exactOptional().openapi({ description: 'Custom gender.' }),
    type: z.string().exactOptional().openapi({ description: 'Gender.' }),
  })
  .openapi({ required: [] })
  .openapi('UserGender')

const UserImSchema = z
  .object({
    customProtocol: z.string().exactOptional().openapi({ description: 'Custom protocol.' }),
    customType: z.string().exactOptional().openapi({ description: 'Custom type.' }),
    im: z.string().exactOptional().openapi({ description: 'Instant messenger id.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "If this is user's primary im. Only one entry could be marked as primary.",
      }),
    protocol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type it can take a CUSTOM value and specify the custom name in customProtocol field.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value.',
      }),
  })
  .openapi({ description: 'JSON template for instant messenger of an user.', required: [] })
  .openapi('UserIm')

const UserKeywordSchema = z
  .object({
    customType: z.string().exactOptional().openapi({ description: 'Custom Type.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Each entry can have a type which indicates standard type of that entry. For example keyword could be of type occupation or outlook. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.',
      }),
    value: z.string().exactOptional().openapi({ description: 'Keyword.' }),
  })
  .openapi({ description: 'JSON template for a keyword entry.', required: [] })
  .openapi('UserKeyword')

const UserLanguageSchema = z
  .object({
    customLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Other language. User can provide their own language name if there is no corresponding ISO 639 language code. If this is set, `languageCode` can't be set.",
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "ISO 639 string representation of a language. See [Language Codes](/admin-sdk/directory/v1/languages) for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. Illegal values cause `SchemaException`. If this is set, `customLanguage` can't be set.",
      }),
    preference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. If present, controls whether the specified `languageCode` is the user's preferred language. If `customLanguage` is set, this can't be set. Allowed values are `preferred` and `not_preferred`.",
      }),
  })
  .openapi({ description: 'JSON template for a language entry.', required: [] })
  .openapi('UserLanguage')

const UserLocationSchema = z
  .object({
    area: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Textual location. This is most useful for display purposes to concisely describe the location. For example 'Mountain View, CA', 'Near Seattle', 'US-NYC-9TH 9A209A.''",
      }),
    buildingId: z.string().exactOptional().openapi({ description: 'Building Identifier.' }),
    customType: z.string().exactOptional().openapi({ description: 'Custom Type.' }),
    deskCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Most specific textual code of individual desk location.' }),
    floorName: z.string().exactOptional().openapi({ description: 'Floor name/number.' }),
    floorSection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Floor section. More specific location within the floor. For example if a floor is divided into sections 'A', 'B' and 'C' this field would identify one of those values.",
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Each entry can have a type which indicates standard types of that entry. For example location could be of types default and desk. In addition to standard type an entry can have a custom type and can give it any name. Such types should have 'custom' as type and also have a customType value.",
      }),
  })
  .openapi({ description: 'JSON template for a location entry.', required: [] })
  .openapi('UserLocation')

const UserMakeAdminSchema = z
  .object({
    status: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates the administrator status of the user.' }),
  })
  .openapi({ required: [] })
  .openapi('UserMakeAdmin')

const UserOrganizationSchema = z
  .object({
    costCenter: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cost center of the users department.' }),
    customType: z.string().exactOptional().openapi({ description: 'Custom type.' }),
    department: z
      .string()
      .exactOptional()
      .openapi({ description: 'Department within the organization.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the organization.' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain to which the organization belongs to.' }),
    fullTimeEquivalent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The full-time equivalent millipercent within the organization (100000 = 100%).',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Location of the organization. This need not be fully qualified address.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the organization' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({ description: "If it user's primary organization." }),
    symbol: z.string().exactOptional().openapi({ description: 'Symbol of the organization.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title (designation) of the user in the organization.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Each entry can have a type which indicates standard types of that entry. For example organization could be of school work etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value.',
      }),
  })
  .openapi({ description: 'JSON template for an organization entry.', required: [] })
  .openapi('UserOrganization')

const UserPhoneSchema = z
  .object({
    customType: z.string().exactOptional().openapi({ description: 'Custom Type.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({ description: "If this is user's primary phone or not." }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax work mobile etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.',
      }),
    value: z.string().exactOptional().openapi({ description: 'Phone number.' }),
  })
  .openapi({ description: 'JSON template for a phone entry.', required: [] })
  .openapi('UserPhone')

const UserPhotoSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    height: z.int32().exactOptional().openapi({ description: 'Height of the photo in pixels.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID the API uses to uniquely identify the user.' }),
    kind: z
      .string()
      .default('admin#directory#user#photo')
      .exactOptional()
      .openapi({
        description:
          'The type of the API resource. For Photo resources, this is `admin#directory#user#photo`.',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding.',
      }),
    photoData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.",
      }),
    primaryEmail: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's primary email address." }),
    width: z.int32().exactOptional().openapi({ description: 'Width of the photo in pixels.' }),
  })
  .openapi({ required: [] })
  .openapi('UserPhoto')

const UserPosixAccountSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A POSIX account field identifier.' }),
    gecos: z
      .string()
      .exactOptional()
      .openapi({ description: 'The GECOS (user information) for this account.' }),
    gid: z.string().exactOptional().openapi({ description: 'The default group ID.' }),
    homeDirectory: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path to the home directory for this account.' }),
    operatingSystemType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The operating system type for this account.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({ description: "If this is user's primary account within the SystemId." }),
    shell: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path to the login shell for this account.' }),
    systemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'System identifier for which account Username or Uid apply to.' }),
    uid: z.string().exactOptional().openapi({ description: 'The POSIX compliant user ID.' }),
    username: z.string().exactOptional().openapi({ description: 'The username of the account.' }),
  })
  .openapi({ description: 'JSON template for a POSIX account entry.', required: [] })
  .openapi('UserPosixAccount')

const UserRelationSchema = z
  .object({
    customType: z.string().exactOptional().openapi({ description: 'Custom Type.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relation of the user. Some of the possible values are mother father sister brother manager assistant partner.',
      }),
    value: z.string().exactOptional().openapi({ description: 'The name of the relation.' }),
  })
  .openapi({ description: 'JSON template for a relation entry.', required: [] })
  .openapi('UserRelation')

const UserSshPublicKeySchema = z
  .object({
    expirationTimeUsec: z
      .string()
      .exactOptional()
      .openapi({ description: 'An expiration time in microseconds since epoch.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A SHA-256 fingerprint of the SSH public key. (Read-only)',
        readOnly: true,
      }),
    key: z.string().exactOptional().openapi({ description: 'An SSH public key.' }),
  })
  .openapi({ description: 'JSON template for a POSIX account entry.', required: [] })
  .openapi('UserSshPublicKey')

const UserUndeleteSchema = z
  .object({ orgUnitPath: z.string().exactOptional().openapi({ description: 'OrgUnit of User' }) })
  .openapi({ required: [] })
  .openapi('UserUndelete')

const UserWebsiteSchema = z
  .object({
    customType: z.string().exactOptional().openapi({ description: 'Custom Type.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({ description: "If this is user's primary website or not." }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Each entry can have a type which indicates standard types of that entry. For example website could be of home work blog etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.',
      }),
    value: z.string().exactOptional().openapi({ description: 'Website.' }),
  })
  .openapi({ description: 'JSON template for a website entry.', required: [] })
  .openapi('UserWebsite')

const UsersSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#users')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token used to access next page of this result.' }),
    trigger_event: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Event that triggered this response (only used in case of Push Response)',
      }),
    users: z.array(UserSchema).exactOptional().openapi({ description: 'A list of user objects.' }),
  })
  .openapi({ required: [] })
  .openapi('Users')

const VerificationCodeSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('admin#directory#verificationCode')
      .exactOptional()
      .openapi({
        description: 'The type of the resource. This is always `admin#directory#verificationCode`.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The obfuscated unique ID of the user.' }),
    verificationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A current verification code for the user. Invalidated or used verification codes are not returned as part of the result.',
      }),
  })
  .openapi({
    description:
      'The Directory API allows you to view, generate, and invalidate backup verification codes for a user.',
    required: [],
  })
  .openapi('VerificationCode')

const VerificationCodesSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z
      .array(VerificationCodeSchema)
      .exactOptional()
      .openapi({ description: 'A list of verification code resources.' }),
    kind: z
      .string()
      .default('admin#directory#verificationCodesList')
      .exactOptional()
      .openapi({
        description:
          'The type of the resource. This is always `admin#directory#verificationCodesList`.',
      }),
  })
  .openapi({
    description: 'JSON response template for list verification codes operation in Directory API.',
    required: [],
  })
  .openapi('VerificationCodes')

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
        'https://www.googleapis.com/auth/admin.chrome.printers':
          'See, add, edit, and permanently delete the printers that your organization can use with Chrome',
        'https://www.googleapis.com/auth/admin.chrome.printers.readonly':
          'See the printers that your organization can use with Chrome',
        'https://www.googleapis.com/auth/admin.directory.customer':
          'View and manage customer related information',
        'https://www.googleapis.com/auth/admin.directory.customer.readonly':
          'View customer related information',
        'https://www.googleapis.com/auth/admin.directory.device.chromeos':
          "View and manage your Chrome OS devices' metadata",
        'https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly':
          "View your Chrome OS devices' metadata",
        'https://www.googleapis.com/auth/admin.directory.device.mobile':
          "View and manage your mobile devices' metadata",
        'https://www.googleapis.com/auth/admin.directory.device.mobile.action':
          'Manage your mobile devices by performing administrative tasks',
        'https://www.googleapis.com/auth/admin.directory.device.mobile.readonly':
          "View your mobile devices' metadata",
        'https://www.googleapis.com/auth/admin.directory.domain':
          'View and manage the provisioning of domains for your customers',
        'https://www.googleapis.com/auth/admin.directory.domain.readonly':
          'View domains related to your customers',
        'https://www.googleapis.com/auth/admin.directory.group':
          'View and manage the provisioning of groups on your domain',
        'https://www.googleapis.com/auth/admin.directory.group.member':
          'View and manage group subscriptions on your domain',
        'https://www.googleapis.com/auth/admin.directory.group.member.readonly':
          'View group subscriptions on your domain',
        'https://www.googleapis.com/auth/admin.directory.group.readonly':
          'View groups on your domain',
        'https://www.googleapis.com/auth/admin.directory.orgunit':
          'View and manage organization units on your domain',
        'https://www.googleapis.com/auth/admin.directory.orgunit.readonly':
          'View organization units on your domain',
        'https://www.googleapis.com/auth/admin.directory.resource.calendar':
          'View and manage the provisioning of calendar resources on your domain',
        'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly':
          'View calendar resources on your domain',
        'https://www.googleapis.com/auth/admin.directory.rolemanagement':
          'Manage delegated admin roles for your domain',
        'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly':
          'View delegated admin roles for your domain',
        'https://www.googleapis.com/auth/admin.directory.user':
          'View and manage the provisioning of users on your domain',
        'https://www.googleapis.com/auth/admin.directory.user.alias':
          'View and manage user aliases on your domain',
        'https://www.googleapis.com/auth/admin.directory.user.alias.readonly':
          'View user aliases on your domain',
        'https://www.googleapis.com/auth/admin.directory.user.readonly':
          'See info about users on your domain',
        'https://www.googleapis.com/auth/admin.directory.user.security':
          'Manage data access permissions for users on your domain',
        'https://www.googleapis.com/auth/admin.directory.userschema':
          'View and manage the provisioning of user schemas on your domain',
        'https://www.googleapis.com/auth/admin.directory.userschema.readonly':
          'View user schemas on your domain',
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
        'https://www.googleapis.com/auth/admin.chrome.printers':
          'See, add, edit, and permanently delete the printers that your organization can use with Chrome',
        'https://www.googleapis.com/auth/admin.chrome.printers.readonly':
          'See the printers that your organization can use with Chrome',
        'https://www.googleapis.com/auth/admin.directory.customer':
          'View and manage customer related information',
        'https://www.googleapis.com/auth/admin.directory.customer.readonly':
          'View customer related information',
        'https://www.googleapis.com/auth/admin.directory.device.chromeos':
          "View and manage your Chrome OS devices' metadata",
        'https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly':
          "View your Chrome OS devices' metadata",
        'https://www.googleapis.com/auth/admin.directory.device.mobile':
          "View and manage your mobile devices' metadata",
        'https://www.googleapis.com/auth/admin.directory.device.mobile.action':
          'Manage your mobile devices by performing administrative tasks',
        'https://www.googleapis.com/auth/admin.directory.device.mobile.readonly':
          "View your mobile devices' metadata",
        'https://www.googleapis.com/auth/admin.directory.domain':
          'View and manage the provisioning of domains for your customers',
        'https://www.googleapis.com/auth/admin.directory.domain.readonly':
          'View domains related to your customers',
        'https://www.googleapis.com/auth/admin.directory.group':
          'View and manage the provisioning of groups on your domain',
        'https://www.googleapis.com/auth/admin.directory.group.member':
          'View and manage group subscriptions on your domain',
        'https://www.googleapis.com/auth/admin.directory.group.member.readonly':
          'View group subscriptions on your domain',
        'https://www.googleapis.com/auth/admin.directory.group.readonly':
          'View groups on your domain',
        'https://www.googleapis.com/auth/admin.directory.orgunit':
          'View and manage organization units on your domain',
        'https://www.googleapis.com/auth/admin.directory.orgunit.readonly':
          'View organization units on your domain',
        'https://www.googleapis.com/auth/admin.directory.resource.calendar':
          'View and manage the provisioning of calendar resources on your domain',
        'https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly':
          'View calendar resources on your domain',
        'https://www.googleapis.com/auth/admin.directory.rolemanagement':
          'Manage delegated admin roles for your domain',
        'https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly':
          'View delegated admin roles for your domain',
        'https://www.googleapis.com/auth/admin.directory.user':
          'View and manage the provisioning of users on your domain',
        'https://www.googleapis.com/auth/admin.directory.user.alias':
          'View and manage user aliases on your domain',
        'https://www.googleapis.com/auth/admin.directory.user.alias.readonly':
          'View user aliases on your domain',
        'https://www.googleapis.com/auth/admin.directory.user.readonly':
          'See info about users on your domain',
        'https://www.googleapis.com/auth/admin.directory.user.security':
          'Manage data access permissions for users on your domain',
        'https://www.googleapis.com/auth/admin.directory.userschema':
          'View and manage the provisioning of user schemas on your domain',
        'https://www.googleapis.com/auth/admin.directory.userschema.readonly':
          'View user schemas on your domain',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getAdminDirectoryV1CustomerCustomerIdDevicesChromeosRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customerId}/devices/chromeos',
  tags: ['chromeosdevices'],
  description: 'Retrieves a paginated list of Chrome OS devices within an account.',
  operationId: 'directory.chromeosdevices.list',
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
      includeChildOrgunits: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.",
            in: 'query',
            name: 'includeChildOrgunits',
            schema: { type: 'boolean' },
            required: false,
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
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .enum(['annotatedLocation', 'annotatedUser', 'lastSync', 'notes', 'serialNumber', 'status'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Device property to use for sorting results.',
            in: 'query',
            name: 'orderBy',
            schema: {
              enum: [
                'annotatedLocation',
                'annotatedUser',
                'lastSync',
                'notes',
                'serialNumber',
                'status',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      orgUnitPath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The full path of the organizational unit (minus the leading `/`) or its unique ID.',
            in: 'query',
            name: 'orgUnitPath',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict information returned to a set of selected fields.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/list-query-operators',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChromeOsDevicesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuRoute =
  createRoute({
    method: 'post',
    path: '/admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu',
    tags: ['chromeosdevices'],
    description:
      'Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.',
    operationId: 'directory.chromeosdevices.moveDevicesToOu',
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
        orgUnitPath: z
          .string()
          .openapi({
            param: {
              description: 'Full path of the target organizational unit or its ID',
              in: 'query',
              name: 'orgUnitPath',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        customerId: z
          .string()
          .openapi({
            param: {
              description: 'Immutable. ID of the Google Workspace account',
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ChromeOsMoveDevicesToOuSchema } } },
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
      },
    ],
  })

export const getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}',
  tags: ['chromeosdevices'],
  description: "Retrieves a Chrome OS device's properties.",
  operationId: 'directory.chromeosdevices.get',
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
      projection: z
        .enum(['BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Determines whether the response contains the full list of properties or only a subset.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deviceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.',
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChromeOsDeviceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly'],
    },
  ],
})

export const putAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}',
  tags: ['chromeosdevices'],
  description:
    "Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.",
  operationId: 'directory.chromeosdevices.update',
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
      projection: z
        .enum(['BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict information returned to a set of selected fields.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deviceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.',
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChromeOsDeviceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChromeOsDeviceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
    },
  ],
})

export const patchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}',
  tags: ['chromeosdevices'],
  description:
    "Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).",
  operationId: 'directory.chromeosdevices.patch',
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
      projection: z
        .enum(['BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict information returned to a set of selected fields.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deviceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.',
            in: 'path',
            name: 'deviceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChromeOsDeviceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChromeOsDeviceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdRoute =
  createRoute({
    method: 'get',
    path: '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}',
    tags: ['customer'],
    description: 'Gets command data a specific command issued to the device.',
    operationId: 'admin.customer.devices.chromeos.commands.get',
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
        customerId: z
          .string()
          .openapi({
            param: {
              description: 'Immutable. ID of the Google Workspace account.',
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'Immutable. ID of Chrome OS Device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        commandId: z
          .string()
          .openapi({
            param: {
              description: 'Immutable. ID of Chrome OS Device Command.',
              in: 'path',
              name: 'commandId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DirectoryChromeosdevicesCommandSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly'],
      },
    ],
  })

export const postAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandRoute =
  createRoute({
    method: 'post',
    path: '/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand',
    tags: ['customer'],
    description: 'Issues a command for the device to execute.',
    operationId: 'admin.customer.devices.chromeos.issueCommand',
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
        customerId: z
          .string()
          .openapi({
            param: {
              description: 'Immutable. ID of the Google Workspace account.',
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'Immutable. ID of Chrome OS Device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DirectoryChromeosdevicesIssueCommandRequestSchema },
        },
      },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: DirectoryChromeosdevicesIssueCommandResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
      },
    ],
  })

export const postAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionRoute =
  createRoute({
    method: 'post',
    path: '/admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action',
    tags: ['chromeosdevices'],
    description:
      'Use [BatchChangeChromeOsDeviceStatus](/admin-sdk/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).',
    operationId: 'directory.chromeosdevices.action',
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
        customerId: z
          .string()
          .openapi({
            param: {
              description:
                "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceId: z
          .string()
          .openapi({
            param: {
              description:
                'The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.',
              in: 'path',
              name: 'resourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ChromeOsDeviceActionSchema } } },
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
      },
    ],
  })

export const postAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusRoute =
  createRoute({
    method: 'post',
    path: '/admin/directory/v1/customer/{customerId}/devices/chromeos:batchChangeStatus',
    tags: ['customer'],
    description:
      'Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633).',
    operationId: 'admin.customer.devices.chromeos.batchChangeStatus',
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
        customerId: z
          .string()
          .openapi({
            param: {
              description: 'Required. Immutable ID of the Google Workspace account.',
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: BatchChangeChromeOsDeviceStatusRequestSchema } },
      },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: BatchChangeChromeOsDeviceStatusResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.chromeos'],
      },
    ],
  })

export const getAdminDirectoryV1CustomerCustomerIdDevicesMobileRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customerId}/devices/mobile',
  tags: ['mobiledevices'],
  description:
    'Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).',
  operationId: 'directory.mobiledevices.list',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return. Max allowed value is 100.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .enum(['deviceId', 'email', 'lastSync', 'model', 'name', 'os', 'status', 'type'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Device property to use for sorting results.',
            in: 'query',
            name: 'orderBy',
            schema: {
              enum: ['deviceId', 'email', 'lastSync', 'model', 'name', 'os', 'status', 'type'],
              type: 'string',
            },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify next page in the list',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict information returned to a set of selected fields.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/search-operators',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MobileDevicesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.mobile'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.mobile'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.mobile.action'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.mobile.action'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.mobile.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.mobile.readonly'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}',
  tags: ['mobiledevices'],
  description: "Retrieves a mobile device's properties.",
  operationId: 'directory.mobiledevices.get',
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
      projection: z
        .enum(['BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict information returned to a set of selected fields.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceId: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID the API service uses to identify the mobile device.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MobileDeviceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.mobile'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.mobile'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.mobile.action'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.mobile.action'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.mobile.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.mobile.readonly'],
    },
  ],
})

export const deleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}',
  tags: ['mobiledevices'],
  description: 'Removes a mobile device.',
  operationId: 'directory.mobiledevices.delete',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceId: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID the API service uses to identify the mobile device.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.mobile'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.mobile'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionRoute = createRoute(
  {
    method: 'post',
    path: '/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action',
    tags: ['mobiledevices'],
    description:
      'Takes an action that affects a mobile device. For example, remotely wiping a device.',
    operationId: 'directory.mobiledevices.action',
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
        customerId: z
          .string()
          .openapi({
            param: {
              description:
                "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
              in: 'path',
              name: 'customerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        resourceId: z
          .string()
          .openapi({
            param: {
              description: 'The unique ID the API service uses to identify the mobile device.',
              in: 'path',
              name: 'resourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: MobileDeviceActionSchema } } },
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.mobile'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.mobile'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.device.mobile.action'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.device.mobile.action'],
      },
    ],
  },
)

export const getAdminDirectoryV1CustomerCustomerIdOrgunitsRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customerId}/orgunits',
  tags: ['orgunits'],
  description: 'Retrieves a list of all organizational units for an account.',
  operationId: 'directory.orgunits.list',
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
      orgUnitPath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit.',
            in: 'query',
            name: 'orgUnitPath',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['all', 'children', 'allIncludingParent'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to return all sub-organizations or just immediate children.',
            in: 'query',
            name: 'type',
            schema: { enum: ['all', 'children', 'allIncludingParent'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrgUnitsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.orgunit.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.orgunit.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerIdOrgunitsRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customerId}/orgunits',
  tags: ['orgunits'],
  description: 'Adds an organizational unit.',
  operationId: 'directory.orgunits.insert',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrgUnitSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrgUnitSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}',
  tags: ['orgunits'],
  description: 'Retrieves an organizational unit.',
  operationId: 'directory.orgunits.get',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orgUnitPath: z
        .string()
        .openapi({
          param: {
            description:
              'The full path of the organizational unit (minus the leading `/`) or its unique ID.',
            in: 'path',
            name: 'orgUnitPath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrgUnitSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.orgunit.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.orgunit.readonly'],
    },
  ],
})

export const putAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}',
  tags: ['orgunits'],
  description: 'Updates an organizational unit.',
  operationId: 'directory.orgunits.update',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orgUnitPath: z
        .string()
        .openapi({
          param: {
            description:
              'The full path of the organizational unit (minus the leading `/`) or its unique ID.',
            in: 'path',
            name: 'orgUnitPath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrgUnitSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrgUnitSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
    },
  ],
})

export const deleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}',
  tags: ['orgunits'],
  description: 'Removes an organizational unit.',
  operationId: 'directory.orgunits.delete',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orgUnitPath: z
        .string()
        .openapi({
          param: {
            description:
              'The full path of the organizational unit (minus the leading `/`) or its unique ID.',
            in: 'path',
            name: 'orgUnitPath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
    },
  ],
})

export const patchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/customer/{customerId}/orgunits/{orgUnitPath}',
  tags: ['orgunits'],
  description:
    'Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)',
  operationId: 'directory.orgunits.patch',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orgUnitPath: z
        .string()
        .openapi({
          param: {
            description:
              'The full path of the organizational unit (minus the leading `/`) or its unique ID.',
            in: 'path',
            name: 'orgUnitPath',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrgUnitSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrgUnitSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.orgunit'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerIdSchemasRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customerId}/schemas',
  tags: ['schemas'],
  description: 'Retrieves all schemas for a customer.',
  operationId: 'directory.schemas.list',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SchemasSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.userschema'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.userschema'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.userschema.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.userschema.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerIdSchemasRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customerId}/schemas',
  tags: ['schemas'],
  description: 'Creates a schema.',
  operationId: 'directory.schemas.insert',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SchemaSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SchemaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.userschema'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.userschema'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}',
  tags: ['schemas'],
  description: 'Retrieves a schema.',
  operationId: 'directory.schemas.get',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schemaKey: z
        .string()
        .openapi({
          param: {
            description: 'Name or immutable ID of the schema.',
            in: 'path',
            name: 'schemaKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SchemaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.userschema'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.userschema'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.userschema.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.userschema.readonly'],
    },
  ],
})

export const putAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}',
  tags: ['schemas'],
  description: 'Updates a schema.',
  operationId: 'directory.schemas.update',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schemaKey: z
        .string()
        .openapi({
          param: {
            description: 'Name or immutable ID of the schema.',
            in: 'path',
            name: 'schemaKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SchemaSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SchemaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.userschema'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.userschema'],
    },
  ],
})

export const deleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}',
  tags: ['schemas'],
  description: 'Deletes a schema.',
  operationId: 'directory.schemas.delete',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schemaKey: z
        .string()
        .openapi({
          param: {
            description: 'Name or immutable ID of the schema.',
            in: 'path',
            name: 'schemaKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.userschema'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.userschema'],
    },
  ],
})

export const patchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/customer/{customerId}/schemas/{schemaKey}',
  tags: ['schemas'],
  description: 'Patches a schema.',
  operationId: 'directory.schemas.patch',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schemaKey: z
        .string()
        .openapi({
          param: {
            description: 'Name or immutable ID of the schema.',
            in: 'path',
            name: 'schemaKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SchemaSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SchemaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.userschema'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.userschema'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerDomainaliasesRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/domainaliases',
  tags: ['domainAliases'],
  description: 'Lists the domain aliases of the customer.',
  operationId: 'directory.domainAliases.list',
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
      parentDomainName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the parent domain for which domain aliases are to be fetched.',
            in: 'query',
            name: 'parentDomainName',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DomainAliasesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerDomainaliasesRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customer}/domainaliases',
  tags: ['domainAliases'],
  description: 'Inserts a domain alias of the customer.',
  operationId: 'directory.domainAliases.insert',
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
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DomainAliasSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DomainAliasSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}',
  tags: ['domainAliases'],
  description: 'Retrieves a domain alias of the customer.',
  operationId: 'directory.domainAliases.get',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domainAliasName: z
        .string()
        .openapi({
          param: {
            description: 'Name of domain alias to be retrieved.',
            in: 'path',
            name: 'domainAliasName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DomainAliasSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain.readonly'],
    },
  ],
})

export const deleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}',
  tags: ['domainAliases'],
  description: 'Deletes a domain Alias of the customer.',
  operationId: 'directory.domainAliases.delete',
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
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domainAliasName: z
        .string()
        .openapi({
          param: {
            description: 'Name of domain alias to be retrieved.',
            in: 'path',
            name: 'domainAliasName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerDomainsRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/domains',
  tags: ['domains'],
  description: 'Lists the domains of the customer.',
  operationId: 'directory.domains.list',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: Domains2Schema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerDomainsRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customer}/domains',
  tags: ['domains'],
  description: 'Inserts a domain of the customer.',
  operationId: 'directory.domains.insert',
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
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DomainsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DomainsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/domains/{domainName}',
  tags: ['domains'],
  description: 'Retrieves a domain of the customer.',
  operationId: 'directory.domains.get',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Name of domain to be retrieved',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DomainsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain.readonly'],
    },
  ],
})

export const deleteAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/customer/{customer}/domains/{domainName}',
  tags: ['domains'],
  description: 'Deletes a domain of the customer.',
  operationId: 'directory.domains.delete',
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
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Name of domain to be deleted',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.domain'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.domain'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/resources/buildings',
  tags: ['resources'],
  description: 'Retrieves a list of buildings for an account.',
  operationId: 'directory.resources.buildings.list',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify the next page in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BuildingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customer}/resources/buildings',
  tags: ['resources'],
  description: 'Inserts a building.',
  operationId: 'directory.resources.buildings.insert',
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
      coordinatesSource: z
        .enum(['CLIENT_SPECIFIED', 'RESOLVED_FROM_ADDRESS', 'SOURCE_UNSPECIFIED'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Source from which Building.coordinates are derived.',
            in: 'query',
            name: 'coordinatesSource',
            schema: {
              enum: ['CLIENT_SPECIFIED', 'RESOLVED_FROM_ADDRESS', 'SOURCE_UNSPECIFIED'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BuildingSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BuildingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}',
  tags: ['resources'],
  description: 'Retrieves a building.',
  operationId: 'directory.resources.buildings.get',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      buildingId: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the building to retrieve.',
            in: 'path',
            name: 'buildingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BuildingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
    },
  ],
})

export const putAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}',
  tags: ['resources'],
  description: 'Updates a building.',
  operationId: 'directory.resources.buildings.update',
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
      coordinatesSource: z
        .enum(['CLIENT_SPECIFIED', 'RESOLVED_FROM_ADDRESS', 'SOURCE_UNSPECIFIED'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Source from which Building.coordinates are derived.',
            in: 'query',
            name: 'coordinatesSource',
            schema: {
              enum: ['CLIENT_SPECIFIED', 'RESOLVED_FROM_ADDRESS', 'SOURCE_UNSPECIFIED'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      buildingId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the building to update.',
            in: 'path',
            name: 'buildingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BuildingSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BuildingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const deleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}',
  tags: ['resources'],
  description: 'Deletes a building.',
  operationId: 'directory.resources.buildings.delete',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      buildingId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the building to delete.',
            in: 'path',
            name: 'buildingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const patchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}',
  tags: ['resources'],
  description: 'Patches a building.',
  operationId: 'directory.resources.buildings.patch',
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
      coordinatesSource: z
        .enum(['CLIENT_SPECIFIED', 'RESOLVED_FROM_ADDRESS', 'SOURCE_UNSPECIFIED'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Source from which Building.coordinates are derived.',
            in: 'query',
            name: 'coordinatesSource',
            schema: {
              enum: ['CLIENT_SPECIFIED', 'RESOLVED_FROM_ADDRESS', 'SOURCE_UNSPECIFIED'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      buildingId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the building to update.',
            in: 'path',
            name: 'buildingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BuildingSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BuildingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/resources/calendars',
  tags: ['resources'],
  description: 'Retrieves a list of calendar resources for an account.',
  operationId: 'directory.resources.calendars.list',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field(s) to sort results by in either ascending or descending order. Supported fields include `resourceId`, `resourceName`, `capacity`, `buildingId`, and `floorName`. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example `buildingId, capacity desc` would return results sorted first by `buildingId` in ascending order then by `capacity` in descending order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify the next page in the list.',
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
              "String query used to filter results. Should be of the form \"field operator value\" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include `generatedResourceName`, `name`, `buildingId`, `floor_name`, `capacity`, `featureInstances.feature.name`, `resourceEmail`, `resourceCategory`. For example `buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone`.",
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CalendarResourcesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customer}/resources/calendars',
  tags: ['resources'],
  description: 'Inserts a calendar resource.',
  operationId: 'directory.resources.calendars.insert',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CalendarResourceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CalendarResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute =
  createRoute({
    method: 'get',
    path: '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}',
    tags: ['resources'],
    description: 'Retrieves a calendar resource.',
    operationId: 'directory.resources.calendars.get',
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
        customer: z
          .string()
          .openapi({
            param: {
              description:
                "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
              in: 'path',
              name: 'customer',
              required: true,
              schema: { type: 'string' },
            },
          }),
        calendarResourceId: z
          .string()
          .openapi({
            param: {
              description: 'The unique ID of the calendar resource to retrieve.',
              in: 'path',
              name: 'calendarResourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CalendarResourceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
      },
    ],
  })

export const putAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute =
  createRoute({
    method: 'put',
    path: '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}',
    tags: ['resources'],
    description:
      'Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.',
    operationId: 'directory.resources.calendars.update',
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
        customer: z
          .string()
          .openapi({
            param: {
              description:
                "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
              in: 'path',
              name: 'customer',
              required: true,
              schema: { type: 'string' },
            },
          }),
        calendarResourceId: z
          .string()
          .openapi({
            param: {
              description: 'The unique ID of the calendar resource to update.',
              in: 'path',
              name: 'calendarResourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CalendarResourceSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CalendarResourceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      },
    ],
  })

export const deleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute =
  createRoute({
    method: 'delete',
    path: '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}',
    tags: ['resources'],
    description: 'Deletes a calendar resource.',
    operationId: 'directory.resources.calendars.delete',
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
        customer: z
          .string()
          .openapi({
            param: {
              description:
                "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
              in: 'path',
              name: 'customer',
              required: true,
              schema: { type: 'string' },
            },
          }),
        calendarResourceId: z
          .string()
          .openapi({
            param: {
              description: 'The unique ID of the calendar resource to delete.',
              in: 'path',
              name: 'calendarResourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      },
    ],
  })

export const patchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute =
  createRoute({
    method: 'patch',
    path: '/admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}',
    tags: ['resources'],
    description: 'Patches a calendar resource.',
    operationId: 'directory.resources.calendars.patch',
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
        customer: z
          .string()
          .openapi({
            param: {
              description:
                "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
              in: 'path',
              name: 'customer',
              required: true,
              schema: { type: 'string' },
            },
          }),
        calendarResourceId: z
          .string()
          .openapi({
            param: {
              description: 'The unique ID of the calendar resource to update.',
              in: 'path',
              name: 'calendarResourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CalendarResourceSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CalendarResourceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      },
    ],
  })

export const getAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/resources/features',
  tags: ['resources'],
  description: 'Retrieves a list of features for an account.',
  operationId: 'directory.resources.features.list',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify the next page in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FeaturesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customer}/resources/features',
  tags: ['resources'],
  description: 'Inserts a feature.',
  operationId: 'directory.resources.features.insert',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FeatureSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FeatureSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}',
  tags: ['resources'],
  description: 'Retrieves a feature.',
  operationId: 'directory.resources.features.get',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      featureKey: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the feature to retrieve.',
            in: 'path',
            name: 'featureKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FeatureSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly'],
    },
  ],
})

export const putAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}',
  tags: ['resources'],
  description: 'Updates a feature.',
  operationId: 'directory.resources.features.update',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      featureKey: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the feature to update.',
            in: 'path',
            name: 'featureKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FeatureSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FeatureSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const deleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}',
  tags: ['resources'],
  description: 'Deletes a feature.',
  operationId: 'directory.resources.features.delete',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      featureKey: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the feature to delete.',
            in: 'path',
            name: 'featureKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const patchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/customer/{customer}/resources/features/{featureKey}',
  tags: ['resources'],
  description: 'Patches a feature.',
  operationId: 'directory.resources.features.patch',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      featureKey: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the feature to update.',
            in: 'path',
            name: 'featureKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FeatureSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FeatureSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename',
  tags: ['resources'],
  description: 'Renames a feature.',
  operationId: 'directory.resources.features.rename',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oldName: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the feature to rename.',
            in: 'path',
            name: 'oldName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FeatureRenameSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.resource.calendar'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerRoleassignmentsRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/roleassignments',
  tags: ['roleAssignments'],
  description: 'Retrieves a paginated list of all roleAssignments.',
  operationId: 'directory.roleAssignments.list',
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
      includeIndirectRoleAssignments: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, fetches indirect role assignments (i.e. role assignment via a group) as well as direct ones. Defaults to `false`. You must specify `user_key` or the indirect role assignments will not be included.',
            in: 'query',
            name: 'includeIndirectRoleAssignments',
            schema: { type: 'boolean' },
            required: false,
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
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify the next page in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      roleId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.',
            in: 'query',
            name: 'roleId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The primary email address, alias email address, or unique user or group ID. If included in the request, returns role assignments only for this user or group.',
            in: 'query',
            name: 'userKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoleAssignmentsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerRoleassignmentsRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customer}/roleassignments',
  tags: ['roleAssignments'],
  description: 'Creates a role assignment.',
  operationId: 'directory.roleAssignments.insert',
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
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleAssignmentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoleAssignmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}',
  tags: ['roleAssignments'],
  description: 'Retrieves a role assignment.',
  operationId: 'directory.roleAssignments.get',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      roleAssignmentId: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the role assignment.',
            in: 'path',
            name: 'roleAssignmentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoleAssignmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
    },
  ],
})

export const deleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute =
  createRoute({
    method: 'delete',
    path: '/admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}',
    tags: ['roleAssignments'],
    description: 'Deletes a role assignment.',
    operationId: 'directory.roleAssignments.delete',
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
        customer: z
          .string()
          .openapi({
            param: {
              description: 'Immutable ID of the Google Workspace account.',
              in: 'path',
              name: 'customer',
              required: true,
              schema: { type: 'string' },
            },
          }),
        roleAssignmentId: z
          .string()
          .openapi({
            param: {
              description: 'Immutable ID of the role assignment.',
              in: 'path',
              name: 'roleAssignmentId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      },
    ],
  })

export const getAdminDirectoryV1CustomerCustomerRolesRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/roles',
  tags: ['roles'],
  description: 'Retrieves a paginated list of all the roles in a domain.',
  operationId: 'directory.roles.list',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify the next page in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RolesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
    },
  ],
})

export const postAdminDirectoryV1CustomerCustomerRolesRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/customer/{customer}/roles',
  tags: ['roles'],
  description: 'Creates a role.',
  operationId: 'directory.roles.insert',
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
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/roles/ALL/privileges',
  tags: ['privileges'],
  description: 'Retrieves a paginated list of all privileges for a customer.',
  operationId: 'directory.privileges.list',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PrivilegesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
    },
  ],
})

export const getAdminDirectoryV1CustomerCustomerRolesRoleIdRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customer/{customer}/roles/{roleId}',
  tags: ['roles'],
  description: 'Retrieves a role.',
  operationId: 'directory.roles.get',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the role.',
            in: 'path',
            name: 'roleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly'],
    },
  ],
})

export const putAdminDirectoryV1CustomerCustomerRolesRoleIdRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/customer/{customer}/roles/{roleId}',
  tags: ['roles'],
  description: 'Updates a role.',
  operationId: 'directory.roles.update',
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
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the role.',
            in: 'path',
            name: 'roleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
  ],
})

export const deleteAdminDirectoryV1CustomerCustomerRolesRoleIdRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/customer/{customer}/roles/{roleId}',
  tags: ['roles'],
  description: 'Deletes a role.',
  operationId: 'directory.roles.delete',
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
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the role.',
            in: 'path',
            name: 'roleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
  ],
})

export const patchAdminDirectoryV1CustomerCustomerRolesRoleIdRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/customer/{customer}/roles/{roleId}',
  tags: ['roles'],
  description: 'Patches a role.',
  operationId: 'directory.roles.patch',
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
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the Google Workspace account.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            description: 'Immutable ID of the role.',
            in: 'path',
            name: 'roleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RoleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.rolemanagement'],
    },
  ],
})

export const getAdminDirectoryV1CustomersCustomerKeyRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/customers/{customerKey}',
  tags: ['customers'],
  description: 'Retrieves a customer.',
  operationId: 'directory.customers.get',
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
      customerKey: z
        .string()
        .openapi({
          param: {
            description: 'Id of the customer to be retrieved',
            in: 'path',
            name: 'customerKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.customer'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.customer'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.customer.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.customer.readonly'],
    },
  ],
})

export const putAdminDirectoryV1CustomersCustomerKeyRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/customers/{customerKey}',
  tags: ['customers'],
  description: 'Updates a customer.',
  operationId: 'directory.customers.update',
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
      customerKey: z
        .string()
        .openapi({
          param: {
            description: 'Id of the customer to be updated',
            in: 'path',
            name: 'customerKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.customer'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.customer'],
    },
  ],
})

export const patchAdminDirectoryV1CustomersCustomerKeyRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/customers/{customerKey}',
  tags: ['customers'],
  description: 'Patches a customer.',
  operationId: 'directory.customers.patch',
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
      customerKey: z
        .string()
        .openapi({
          param: {
            description: 'Id of the customer to be updated',
            in: 'path',
            name: 'customerKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.customer'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.customer'],
    },
  ],
})

export const getAdminDirectoryV1GroupsRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/groups',
  tags: ['groups'],
  description: 'Retrieves all groups of a domain or of a user given a userKey (paginated).',
  operationId: 'directory.groups.list',
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
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'query',
            name: 'customer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead.',
            in: 'query',
            name: 'domain',
            schema: { type: 'string' },
            required: false,
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
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return. Max allowed value is 200.',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .literal('email')
        .exactOptional()
        .openapi({
          param: {
            description: 'Column to use for sorting results',
            in: 'query',
            name: 'orderBy',
            schema: { enum: ['email'], type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify next page in the list',
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
              'Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-groups',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to return results in ascending or descending order. Only of use when orderBy is also used',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      userKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object.",
            in: 'query',
            name: 'userKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GroupsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
    },
  ],
})

export const postAdminDirectoryV1GroupsRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/groups',
  tags: ['groups'],
  description: 'Creates a group.',
  operationId: 'directory.groups.insert',
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
    body: { content: { 'application/json': { schema: GroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
  ],
})

export const getAdminDirectoryV1GroupsGroupKeyRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/groups/{groupKey}',
  tags: ['groups'],
  description: "Retrieves a group's properties.",
  operationId: 'directory.groups.get',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
    },
  ],
})

export const putAdminDirectoryV1GroupsGroupKeyRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/groups/{groupKey}',
  tags: ['groups'],
  description: "Updates a group's properties.",
  operationId: 'directory.groups.update',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
  ],
})

export const deleteAdminDirectoryV1GroupsGroupKeyRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/groups/{groupKey}',
  tags: ['groups'],
  description: 'Deletes a group.',
  operationId: 'directory.groups.delete',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
  ],
})

export const patchAdminDirectoryV1GroupsGroupKeyRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/groups/{groupKey}',
  tags: ['groups'],
  description:
    "Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).",
  operationId: 'directory.groups.patch',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
  ],
})

export const getAdminDirectoryV1GroupsGroupKeyAliasesRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/groups/{groupKey}/aliases',
  tags: ['groups'],
  description: 'Lists all aliases for a group.',
  operationId: 'directory.groups.aliases.list',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AliasesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
    },
  ],
})

export const postAdminDirectoryV1GroupsGroupKeyAliasesRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/groups/{groupKey}/aliases',
  tags: ['groups'],
  description: 'Adds an alias for the group.',
  operationId: 'directory.groups.aliases.insert',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AliasSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AliasSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
  ],
})

export const deleteAdminDirectoryV1GroupsGroupKeyAliasesAliasRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/groups/{groupKey}/aliases/{alias}',
  tags: ['groups'],
  description: 'Removes an alias.',
  operationId: 'directory.groups.aliases.delete',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            description: 'The alias to be removed',
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
  ],
})

export const getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}',
  tags: ['members'],
  description:
    "Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.",
  operationId: 'directory.members.hasMember',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      memberKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.",
            in: 'path',
            name: 'memberKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MembersHasMemberSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
    },
  ],
})

export const getAdminDirectoryV1GroupsGroupKeyMembersRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/groups/{groupKey}/members',
  tags: ['members'],
  description:
    'Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/admin-sdk/directory/v1/guides/troubleshoot-error-codes).',
  operationId: 'directory.members.list',
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
      includeDerivedMembership: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to list indirect memberships. Default: false.',
            in: 'query',
            name: 'includeDerivedMembership',
            schema: { type: 'boolean' },
            required: false,
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
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return. Max allowed value is 200.',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify next page in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      roles: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The `roles` query parameter allows you to retrieve group members by role. Allowed values are `OWNER`, `MANAGER`, and `MEMBER`.',
            in: 'query',
            name: 'roles',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MembersSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
    },
  ],
})

export const postAdminDirectoryV1GroupsGroupKeyMembersRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/groups/{groupKey}/members',
  tags: ['members'],
  description: 'Adds a user to the specified group.',
  operationId: 'directory.members.insert',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MemberSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MemberSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member'],
    },
  ],
})

export const getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/groups/{groupKey}/members/{memberKey}',
  tags: ['members'],
  description: "Retrieves a group member's properties.",
  operationId: 'directory.members.get',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      memberKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.",
            in: 'path',
            name: 'memberKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MemberSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.readonly'],
    },
  ],
})

export const putAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/groups/{groupKey}/members/{memberKey}',
  tags: ['members'],
  description: 'Updates the membership of a user in the specified group.',
  operationId: 'directory.members.update',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      memberKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.",
            in: 'path',
            name: 'memberKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MemberSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MemberSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member'],
    },
  ],
})

export const deleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/groups/{groupKey}/members/{memberKey}',
  tags: ['members'],
  description: 'Removes a member from a group.',
  operationId: 'directory.members.delete',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      memberKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.",
            in: 'path',
            name: 'memberKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member'],
    },
  ],
})

export const patchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/groups/{groupKey}/members/{memberKey}',
  tags: ['members'],
  description:
    'Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).',
  operationId: 'directory.members.patch',
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
      groupKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
            in: 'path',
            name: 'groupKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      memberKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.",
            in: 'path',
            name: 'memberKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MemberSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MemberSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group.member'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group.member'],
    },
  ],
})

export const getAdminDirectoryV1UsersRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/users',
  tags: ['users'],
  description: 'Retrieves a paginated list of either deleted users or all users in a domain.',
  operationId: 'directory.users.list',
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
      customFieldMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.',
            in: 'query',
            name: 'customFieldMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      customer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter.",
            in: 'query',
            name: 'customer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided.',
            in: 'query',
            name: 'domain',
            schema: { type: 'string' },
            required: false,
          },
        }),
      event: z
        .enum(['add', 'delete', 'makeAdmin', 'undelete', 'update'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Event on which subscription is intended (if subscribing)',
            in: 'query',
            name: 'event',
            schema: { enum: ['add', 'delete', 'makeAdmin', 'undelete', 'update'], type: 'string' },
            required: false,
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
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .enum(['email', 'familyName', 'givenName'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Property to use for sorting results.',
            in: 'query',
            name: 'orderBy',
            schema: { enum: ['email', 'familyName', 'givenName'], type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify next page in the list',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['basic', 'custom', 'full'])
        .exactOptional()
        .openapi({
          param: {
            description: 'What subset of fields to fetch for this user.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['basic', 'custom', 'full'], type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Query string for searching user fields. For more information on constructing user queries, see [Search for Users](/admin-sdk/directory/v1/guides/search-users).',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to `true`, retrieves the list of deleted users. (Default: `false`)',
            in: 'query',
            name: 'showDeleted',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to return results in ascending or descending order, ignoring case.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      viewType: z
        .enum(['admin_view', 'domain_public'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).',
            in: 'query',
            name: 'viewType',
            schema: { enum: ['admin_view', 'domain_public'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UsersSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postAdminDirectoryV1UsersRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users',
  tags: ['users'],
  description:
    'Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn\'t fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case.',
  operationId: 'directory.users.insert',
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
      resolveConflictAccount: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set to `true`, the option selected for [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) will apply. Default: `false`',
            in: 'query',
            name: 'resolveConflictAccount',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
  ],
})

export const postAdminDirectoryV1UsersWatchRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users/watch',
  tags: ['users'],
  description: 'Watches for changes in users list.',
  operationId: 'directory.users.watch',
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
      customFieldMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.',
            in: 'query',
            name: 'customFieldMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      customer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.',
            in: 'query',
            name: 'customer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."',
            in: 'query',
            name: 'domain',
            schema: { type: 'string' },
            required: false,
          },
        }),
      event: z
        .enum(['add', 'delete', 'makeAdmin', 'undelete', 'update'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Events to watch for.',
            in: 'query',
            name: 'event',
            schema: { enum: ['add', 'delete', 'makeAdmin', 'undelete', 'update'], type: 'string' },
            required: false,
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
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .enum(['email', 'familyName', 'givenName'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Column to use for sorting results',
            in: 'query',
            name: 'orderBy',
            schema: { enum: ['email', 'familyName', 'givenName'], type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify next page in the list',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['basic', 'custom', 'full'])
        .exactOptional()
        .openapi({
          param: {
            description: 'What subset of fields to fetch for this user.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['basic', 'custom', 'full'], type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-users',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set to true, retrieves the list of deleted users. (Default: false)',
            in: 'query',
            name: 'showDeleted',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to return results in ascending or descending order.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      viewType: z
        .enum(['admin_view', 'domain_public'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).',
            in: 'query',
            name: 'viewType',
            schema: { enum: ['admin_view', 'domain_public'], type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getAdminDirectoryV1UsersUserKeyRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/users/{userKey}',
  tags: ['users'],
  description: 'Retrieves a user.',
  operationId: 'directory.users.get',
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
      customFieldMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.',
            in: 'query',
            name: 'customFieldMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['basic', 'custom', 'full'])
        .exactOptional()
        .openapi({
          param: {
            description: 'What subset of fields to fetch for this user.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['basic', 'custom', 'full'], type: 'string' },
            required: false,
          },
        }),
      viewType: z
        .enum(['admin_view', 'domain_public'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).',
            in: 'query',
            name: 'viewType',
            schema: { enum: ['admin_view', 'domain_public'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
    },
  ],
})

export const putAdminDirectoryV1UsersUserKeyRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/users/{userKey}',
  tags: ['users'],
  description:
    "Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/admin-sdk/directory/v1/guides/manage-users#update_user) for more information.",
  operationId: 'directory.users.update',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
  ],
})

export const deleteAdminDirectoryV1UsersUserKeyRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/users/{userKey}',
  tags: ['users'],
  description: 'Deletes a user.',
  operationId: 'directory.users.delete',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
  ],
})

export const patchAdminDirectoryV1UsersUserKeyRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/users/{userKey}',
  tags: ['users'],
  description:
    "Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/admin-sdk/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.",
  operationId: 'directory.users.patch',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
  ],
})

export const getAdminDirectoryV1UsersUserKeyAliasesRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/users/{userKey}/aliases',
  tags: ['users'],
  description: 'Lists all aliases for a user.',
  operationId: 'directory.users.aliases.list',
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
      event: z
        .enum(['add', 'delete'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Events to watch for.',
            in: 'query',
            name: 'event',
            schema: { enum: ['add', 'delete'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AliasesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.alias.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.alias.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
    },
  ],
})

export const postAdminDirectoryV1UsersUserKeyAliasesRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users/{userKey}/aliases',
  tags: ['users'],
  description: 'Adds an alias.',
  operationId: 'directory.users.aliases.insert',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AliasSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AliasSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
    },
  ],
})

export const postAdminDirectoryV1UsersUserKeyAliasesWatchRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users/{userKey}/aliases/watch',
  tags: ['users'],
  description: 'Watches for changes in users list.',
  operationId: 'directory.users.aliases.watch',
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
      event: z
        .enum(['add', 'delete'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Events to watch for.',
            in: 'query',
            name: 'event',
            schema: { enum: ['add', 'delete'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userKey: z
        .string()
        .openapi({
          param: {
            description: 'Email or immutable ID of the user',
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.alias.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.alias.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
    },
  ],
})

export const deleteAdminDirectoryV1UsersUserKeyAliasesAliasRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/users/{userKey}/aliases/{alias}',
  tags: ['users'],
  description: 'Removes an alias.',
  operationId: 'directory.users.aliases.delete',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            description: 'The alias to be removed.',
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
    },
  ],
})

export const getAdminDirectoryV1UsersUserKeyAspsRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/users/{userKey}/asps',
  tags: ['asps'],
  description: 'Lists the ASPs issued by a user.',
  operationId: 'directory.asps.list',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AspsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const getAdminDirectoryV1UsersUserKeyAspsCodeIdRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/users/{userKey}/asps/{codeId}',
  tags: ['asps'],
  description: 'Gets information about an ASP issued by a user.',
  operationId: 'directory.asps.get',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      codeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique ID of the ASP.',
            in: 'path',
            name: 'codeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AspSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const deleteAdminDirectoryV1UsersUserKeyAspsCodeIdRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/users/{userKey}/asps/{codeId}',
  tags: ['asps'],
  description: 'Deletes an ASP issued by a user.',
  operationId: 'directory.asps.delete',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      codeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The unique ID of the ASP to be deleted.',
            in: 'path',
            name: 'codeId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const postAdminDirectoryV1UsersUserKeyMakeAdminRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users/{userKey}/makeAdmin',
  tags: ['users'],
  description: 'Makes a user a super administrator.',
  operationId: 'directory.users.makeAdmin',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserMakeAdminSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
  ],
})

export const getAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/users/{userKey}/photos/thumbnail',
  tags: ['users'],
  description: "Retrieves the user's photo.",
  operationId: 'directory.users.photos.get',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserPhotoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
    },
  ],
})

export const putAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute = createRoute({
  method: 'put',
  path: '/admin/directory/v1/users/{userKey}/photos/thumbnail',
  tags: ['users'],
  description: 'Adds a photo for the user.',
  operationId: 'directory.users.photos.update',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserPhotoSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserPhotoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
  ],
})

export const deleteAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/users/{userKey}/photos/thumbnail',
  tags: ['users'],
  description: "Removes the user's photo.",
  operationId: 'directory.users.photos.delete',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
  ],
})

export const patchAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/users/{userKey}/photos/thumbnail',
  tags: ['users'],
  description:
    'Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).',
  operationId: 'directory.users.photos.patch',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserPhotoSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserPhotoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
  ],
})

export const postAdminDirectoryV1UsersUserKeySignOutRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users/{userKey}/signOut',
  tags: ['users'],
  description:
    'Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.',
  operationId: 'directory.users.signOut',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const getAdminDirectoryV1UsersUserKeyTokensRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/users/{userKey}/tokens',
  tags: ['tokens'],
  description: 'Returns the set of tokens specified user has issued to 3rd party applications.',
  operationId: 'directory.tokens.list',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TokensSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const getAdminDirectoryV1UsersUserKeyTokensClientIdRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/users/{userKey}/tokens/{clientId}',
  tags: ['tokens'],
  description: 'Gets information about an access token issued by a user.',
  operationId: 'directory.tokens.get',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID of the application the token is issued to.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const deleteAdminDirectoryV1UsersUserKeyTokensClientIdRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/users/{userKey}/tokens/{clientId}',
  tags: ['tokens'],
  description: 'Deletes all access tokens issued by a user for an application.',
  operationId: 'directory.tokens.delete',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID of the application the token is issued to.',
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const postAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users/{userKey}/twoStepVerification/turnOff',
  tags: ['twoStepVerification'],
  description: 'Turns off 2-Step Verification for user.',
  operationId: 'directory.twoStepVerification.turnOff',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const postAdminDirectoryV1UsersUserKeyUndeleteRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users/{userKey}/undelete',
  tags: ['users'],
  description: 'Undeletes a deleted user.',
  operationId: 'directory.users.undelete',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description: 'The immutable id of the user',
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserUndeleteSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
  ],
})

export const getAdminDirectoryV1UsersUserKeyVerificationCodesRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/users/{userKey}/verificationCodes',
  tags: ['verificationCodes'],
  description: 'Returns the current set of valid backup verification codes for the specified user.',
  operationId: 'directory.verificationCodes.list',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description:
              "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VerificationCodesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const postAdminDirectoryV1UsersUserKeyVerificationCodesGenerateRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users/{userKey}/verificationCodes/generate',
  tags: ['verificationCodes'],
  description: 'Generates new backup verification codes for the user.',
  operationId: 'directory.verificationCodes.generate',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description: 'Email or immutable ID of the user',
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const postAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/users/{userKey}/verificationCodes/invalidate',
  tags: ['verificationCodes'],
  description: 'Invalidates the current backup verification codes for the user.',
  operationId: 'directory.verificationCodes.invalidate',
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
      userKey: z
        .string()
        .openapi({
          param: {
            description: 'Email or immutable ID of the user',
            in: 'path',
            name: 'userKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.security'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.security'],
    },
  ],
})

export const getAdminDirectoryV1NameRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/{name}',
  tags: ['customers'],
  description: "Returns a print server's configuration.",
  operationId: 'admin.customers.chrome.printServers.get',
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
              "Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`",
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
      content: { 'application/json': { schema: PrintServerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers.readonly'],
    },
  ],
})

export const deleteAdminDirectoryV1NameRoute = createRoute({
  method: 'delete',
  path: '/admin/directory/v1/{name}',
  tags: ['customers'],
  description: 'Deletes a print server.',
  operationId: 'admin.customers.chrome.printServers.delete',
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
              'Required. The name of the print server to be deleted. Format: `customers/{customer.id}/chrome/printServers/{print_server.id}`',
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
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
  ],
})

export const patchAdminDirectoryV1NameRoute = createRoute({
  method: 'patch',
  path: '/admin/directory/v1/{name}',
  tags: ['customers'],
  description: "Updates a print server's configuration.",
  operationId: 'admin.customers.chrome.printServers.patch',
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
              'The list of fields to update. Some fields are read-only and cannot be updated. Values for unspecified fields are patched.',
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
              'Immutable. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PrintServerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PrintServerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
  ],
})

export const getAdminDirectoryV1ParentChromePrintServersRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/{parent}/chrome/printServers',
  tags: ['customers'],
  description: 'Lists print server configurations.',
  operationId: 'admin.customers.chrome.printServers.list',
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
              "Search query in [Common Expression Language syntax](https://github.com/google/cel-spec). Supported filters are `display_name`, `description`, and `uri`. Example: `printServer.displayName=='marketing-queue'`.",
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
              'Sort order for results. Supported values are `display_name`, `description`, or `create_time`. Default order is ascending, but descending order can be returned by appending "desc" to the `order_by` field. For instance, `orderBy==\'description desc\'` returns the print servers sorted by description in descending order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If `org_unit_id` is present in the request, only print servers owned or inherited by the organizational unit (OU) are returned. If the `PrintServer` resource's `org_unit_id` matches the one in the request, the OU owns the server. If `org_unit_id` is not specified in the request, all print servers are returned or filtered against.",
            in: 'query',
            name: 'orgUnitId',
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
              'The maximum number of objects to return (default `100`, max `100`). The service might return fewer than this value.',
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
              'A generated token to paginate results (the `next_page_token` from a previous call).',
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
              "Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`",
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
      content: { 'application/json': { schema: ListPrintServersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers.readonly'],
    },
  ],
})

export const postAdminDirectoryV1ParentChromePrintServersRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/{parent}/chrome/printServers',
  tags: ['customers'],
  description: 'Creates a print server.',
  operationId: 'admin.customers.chrome.printServers.create',
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
              "Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PrintServerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PrintServerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
  ],
})

export const postAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersRoute = createRoute(
  {
    method: 'post',
    path: '/admin/directory/v1/{parent}/chrome/printServers:batchCreatePrintServers',
    tags: ['customers'],
    description: 'Creates multiple print servers.',
    operationId: 'admin.customers.chrome.printServers.batchCreatePrintServers',
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
                "Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}`",
              in: 'path',
              name: 'parent',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: BatchCreatePrintServersRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: BatchCreatePrintServersResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      },
    ],
  },
)

export const postAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersRoute = createRoute(
  {
    method: 'post',
    path: '/admin/directory/v1/{parent}/chrome/printServers:batchDeletePrintServers',
    tags: ['customers'],
    description: 'Deletes multiple print servers.',
    operationId: 'admin.customers.chrome.printServers.batchDeletePrintServers',
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
                "Required. The [unique ID](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{customer.id}`",
              in: 'path',
              name: 'parent',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: BatchDeletePrintServersRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: BatchDeletePrintServersResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
        Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      },
    ],
  },
)

export const getAdminDirectoryV1ParentChromePrintersRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/{parent}/chrome/printers',
  tags: ['customers'],
  description: 'List printers configs.',
  operationId: 'admin.customers.chrome.printers.list',
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
              'Search query. Search syntax is shared between this api and Admin Console printers pages.',
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
              'The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id.',
            in: 'query',
            name: 'orgUnitId',
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
              'The maximum number of objects to return. The service may return fewer than this value.',
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
            description: 'A page token, received from a previous call.',
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
              'Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}',
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
      content: { 'application/json': { schema: ListPrintersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers.readonly'],
    },
  ],
})

export const postAdminDirectoryV1ParentChromePrintersRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/{parent}/chrome/printers',
  tags: ['customers'],
  description: 'Creates a printer under given Organization Unit.',
  operationId: 'admin.customers.chrome.printers.create',
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
            description: 'Required. The name of the customer. Format: customers/{customer_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PrinterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PrinterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
  ],
})

export const postAdminDirectoryV1ParentChromePrintersBatchCreatePrintersRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/{parent}/chrome/printers:batchCreatePrinters',
  tags: ['customers'],
  description: 'Creates printers under given Organization Unit.',
  operationId: 'admin.customers.chrome.printers.batchCreatePrinters',
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
            description: 'Required. The name of the customer. Format: customers/{customer_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchCreatePrintersRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchCreatePrintersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
  ],
})

export const postAdminDirectoryV1ParentChromePrintersBatchDeletePrintersRoute = createRoute({
  method: 'post',
  path: '/admin/directory/v1/{parent}/chrome/printers:batchDeletePrinters',
  tags: ['customers'],
  description: 'Deletes printers in batch.',
  operationId: 'admin.customers.chrome.printers.batchDeletePrinters',
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
            description: 'Required. The name of the customer. Format: customers/{customer_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchDeletePrintersRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchDeletePrintersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
  ],
})

export const getAdminDirectoryV1ParentChromePrintersListPrinterModelsRoute = createRoute({
  method: 'get',
  path: '/admin/directory/v1/{parent}/chrome/printers:listPrinterModels',
  tags: ['customers'],
  description: 'Lists the supported printer models.',
  operationId: 'admin.customers.chrome.printers.listPrinterModels',
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
              'Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages.',
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
              'The maximum number of objects to return. The service may return fewer than this value.',
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
            description: 'A page token, received from a previous call.',
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
              'Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}',
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
      content: { 'application/json': { schema: ListPrinterModelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.chrome.printers.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.chrome.printers.readonly'],
    },
  ],
})

export const postAdminDirectoryV1ChannelsStopRoute = createRoute({
  method: 'post',
  path: '/admin/directory_v1/channels/stop',
  tags: ['channels'],
  description: 'Stops watching resources through this channel.',
  operationId: 'admin.channels.stop',
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
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.alias'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.alias.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.alias.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
