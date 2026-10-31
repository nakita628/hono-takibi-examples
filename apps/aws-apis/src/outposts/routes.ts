import { createRoute, z } from '@hono/zod-openapi'

const CancelOrderOutputSchema = z.object({}).openapi('CancelOrderOutput')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const OutpostIdOnlySchema = z
  .string()
  .regex(/^op-[a-f0-9]{17}$/)
  .min(1)
  .max(20)
  .openapi('OutpostIdOnly')

const OrderIdSchema = z
  .string()
  .regex(/oo-[a-f0-9]{17}$/)
  .min(1)
  .max(20)
  .openapi('OrderId')

const OrderStatusSchema = z
  .enum([
    'RECEIVED',
    'PENDING',
    'PROCESSING',
    'INSTALLING',
    'FULFILLED',
    'CANCELLED',
    'PREPARING',
    'IN_PROGRESS',
    'COMPLETED',
    'ERROR',
  ])
  .openapi('OrderStatus')

const SkuCodeSchema = z
  .string()
  .regex(/OR-[A-Z0-9]{7}/)
  .min(1)
  .max(10)
  .openapi('SkuCode')

const LineItemIdSchema = z
  .string()
  .regex(/ooi-[a-f0-9]{17}/)
  .openapi('LineItemId')

const LineItemQuantitySchema = z.int().min(1).max(20).openapi('LineItemQuantity')

const LineItemStatusSchema = z
  .enum([
    'PREPARING',
    'BUILDING',
    'SHIPPED',
    'DELIVERED',
    'INSTALLING',
    'INSTALLED',
    'ERROR',
    'CANCELLED',
    'REPLACED',
  ])
  .openapi('LineItemStatus')

const TrackingIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]+$/)
  .min(6)
  .max(42)
  .openapi('TrackingId')

const ShipmentCarrierSchema = z.enum(['DHL', 'DBS', 'FEDEX', 'UPS']).openapi('ShipmentCarrier')

const ShipmentInformationSchema = z
  .object({
    ShipmentTrackingNumber: TrackingIdSchema.and(
      z.any().openapi({ description: ' The tracking number of the shipment. ' }),
    ).exactOptional(),
    ShipmentCarrier: ShipmentCarrierSchema.and(
      z.any().openapi({ description: ' The carrier of the shipment. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about a line item shipment. ', required: [] })
  .openapi('ShipmentInformation')

const AssetIdSchema = z
  .string()
  .regex(/^(\w+)$/)
  .min(1)
  .max(100)
  .openapi('AssetId')

const MacAddressSchema = z
  .string()
  .regex(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)
  .length(17)
  .openapi('MacAddress')

const MacAddressListSchema = z.array(MacAddressSchema).openapi('MacAddressList')

const LineItemAssetInformationSchema = z
  .object({
    AssetId: AssetIdSchema.and(
      z.any().openapi({ description: ' The ID of the asset. ' }),
    ).exactOptional(),
    MacAddressList: MacAddressListSchema.and(
      z.any().openapi({ description: ' The MAC addresses of the asset. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about a line item asset. ', required: [] })
  .openapi('LineItemAssetInformation')

const LineItemAssetInformationListSchema = z
  .array(LineItemAssetInformationSchema)
  .openapi('LineItemAssetInformationList')

const LineItemSchema = z
  .object({
    CatalogItemId: SkuCodeSchema.and(
      z.any().openapi({ description: ' The ID of the catalog item. ' }),
    ).exactOptional(),
    LineItemId: LineItemIdSchema.and(
      z.any().openapi({ description: 'The ID of the line item.' }),
    ).exactOptional(),
    Quantity: LineItemQuantitySchema.and(
      z.any().openapi({ description: 'The quantity of the line item.' }),
    ).exactOptional(),
    Status: LineItemStatusSchema.and(
      z.any().openapi({ description: 'The status of the line item.' }),
    ).exactOptional(),
    ShipmentInformation: ShipmentInformationSchema.and(
      z.any().openapi({ description: ' Information about a line item shipment. ' }),
    ).exactOptional(),
    AssetInformationList: LineItemAssetInformationListSchema.and(
      z.any().openapi({ description: ' Information about assets. ' }),
    ).exactOptional(),
    PreviousLineItemId: LineItemIdSchema.and(
      z.any().openapi({ description: 'The ID of the previous line item.' }),
    ).exactOptional(),
    PreviousOrderId: OrderIdSchema.and(
      z.any().openapi({ description: 'The ID of the previous order.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a line item.', required: [] })
  .openapi('LineItem')

const LineItemListDefinitionSchema = z.array(LineItemSchema).openapi('LineItemListDefinition')

const PaymentOptionSchema = z
  .enum(['ALL_UPFRONT', 'NO_UPFRONT', 'PARTIAL_UPFRONT'])
  .openapi('PaymentOption')

const ISO8601TimestampSchema = z.iso.datetime({ offset: true }).openapi('ISO8601Timestamp')

const PaymentTermSchema = z.enum(['THREE_YEARS', 'ONE_YEAR']).openapi('PaymentTerm')

const OrderTypeSchema = z.enum(['OUTPOST', 'REPLACEMENT']).openapi('OrderType')

const OrderSchema = z
  .object({
    OutpostId: OutpostIdOnlySchema.and(
      z.any().openapi({ description: ' The ID of the Outpost in the order. ' }),
    ).exactOptional(),
    OrderId: OrderIdSchema.and(
      z.any().openapi({ description: 'The ID of the order.' }),
    ).exactOptional(),
    Status: OrderStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the order.</p> <ul> <li> <p> <code>PREPARING</code> - Order is received and being prepared.</p> </li> <li> <p> <code>IN_PROGRESS</code> - Order is either being built, shipped, or installed. To get more details, see the line item status.</p> </li> <li> <p> <code>COMPLETED</code> - Order is complete.</p> </li> <li> <p> <code>CANCELLED</code> - Order is cancelled.</p> </li> <li> <p> <code>ERROR</code> - Customer should contact support.</p> </li> </ul> <note> <p>The following status are deprecated: <code>RECEIVED</code>, <code>PENDING</code>, <code>PROCESSING</code>, <code>INSTALLING</code>, and <code>FULFILLED</code>. </p> </note>',
        }),
    ).exactOptional(),
    LineItems: LineItemListDefinitionSchema.and(
      z.any().openapi({ description: 'The line items for the order' }),
    ).exactOptional(),
    PaymentOption: PaymentOptionSchema.and(
      z.any().openapi({ description: 'The payment option for the order.' }),
    ).exactOptional(),
    OrderSubmissionDate: ISO8601TimestampSchema.and(
      z.any().openapi({ description: 'The submission date for the order.' }),
    ).exactOptional(),
    OrderFulfilledDate: ISO8601TimestampSchema.and(
      z.any().openapi({ description: 'The fulfillment date of the order.' }),
    ).exactOptional(),
    PaymentTerm: PaymentTermSchema.and(
      z.any().openapi({ description: 'The payment term.' }),
    ).exactOptional(),
    OrderType: OrderTypeSchema.and(
      z.any().openapi({ description: 'The type of order.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an order.', required: [] })
  .openapi('Order')

const CreateOrderOutputSchema = z
  .object({
    Order: OrderSchema.and(
      z.any().openapi({ description: 'Information about this order.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateOrderOutput')

const LineItemRequestSchema = z
  .object({
    CatalogItemId: SkuCodeSchema.and(
      z.any().openapi({ description: 'The ID of the catalog item.' }),
    ).exactOptional(),
    Quantity: LineItemQuantitySchema.and(
      z.any().openapi({ description: 'The quantity of a line item request.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a line item request.', required: [] })
  .openapi('LineItemRequest')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const OutpostIdSchema = z
  .string()
  .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/)?op-[a-f0-9]{17}$/)
  .min(1)
  .max(180)
  .openapi('OutpostId')

const OwnerIdSchema = z
  .string()
  .regex(/\d{12}/)
  .length(12)
  .openapi({ description: 'The Amazon Web Services account ID of the Outpost owner.' })
  .openapi('OwnerId')

const OutpostArnSchema = z
  .string()
  .regex(/^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/op-[a-f0-9]{17}$/)
  .min(1)
  .max(255)
  .openapi({ description: 'The Amazon Resource Name (ARN) of the Outpost.' })
  .openapi('OutpostArn')

const SiteIdSchema = z
  .string()
  .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site\/)?(os-[a-f0-9]{17})$/)
  .min(1)
  .max(255)
  .openapi({ description: 'The ID of the site.' })
  .openapi('SiteId')

const OutpostNameSchema = z
  .string()
  .regex(/^[\S ]+$/)
  .min(1)
  .max(255)
  .openapi({ description: 'The name of the Outpost.' })
  .openapi('OutpostName')

const OutpostDescriptionSchema = z
  .string()
  .regex(/^[\S ]*$/)
  .min(0)
  .max(1000)
  .openapi({ description: 'The description of the Outpost.' })
  .openapi('OutpostDescription')

const LifeCycleStatusSchema = z
  .string()
  .regex(/^[ A-Za-z]+$/)
  .min(1)
  .max(20)
  .openapi({ description: 'The life cycle status.' })
  .openapi('LifeCycleStatus')

const AvailabilityZoneSchema = z
  .string()
  .regex(/^([a-zA-Z]+-){1,3}([a-zA-Z]+)?(\d+[a-zA-Z]?)?$/)
  .min(1)
  .max(1000)
  .openapi({ description: 'The Availability Zone.' })
  .openapi('AvailabilityZone')

const AvailabilityZoneIdSchema = z
  .string()
  .regex(/^[a-zA-Z]+\d-[a-zA-Z]+\d$/)
  .min(1)
  .max(255)
  .openapi({ description: 'The ID of the Availability Zone.' })
  .openapi('AvailabilityZoneId')

const TagValueSchema = z
  .string()
  .regex(/^[\S \n]+$/)
  .max(256)
  .openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const SiteArnSchema = z
  .string()
  .regex(/^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site\/(os-[a-f0-9]{17})$/)
  .min(1)
  .max(255)
  .openapi({ description: 'The Amazon Resource Name (ARN) of the site.' })
  .openapi('SiteArn')

const SupportedHardwareTypeSchema = z.enum(['RACK', 'SERVER']).openapi('SupportedHardwareType')

const OutpostSchema = z
  .object({
    OutpostId: OutpostIdSchema.and(
      z.any().openapi({ description: ' The ID of the Outpost. ' }),
    ).exactOptional(),
    OwnerId: OwnerIdSchema.exactOptional(),
    OutpostArn: OutpostArnSchema.exactOptional(),
    SiteId: SiteIdSchema.exactOptional(),
    Name: OutpostNameSchema.exactOptional(),
    Description: OutpostDescriptionSchema.exactOptional(),
    LifeCycleStatus: LifeCycleStatusSchema.exactOptional(),
    AvailabilityZone: AvailabilityZoneSchema.exactOptional(),
    AvailabilityZoneId: AvailabilityZoneIdSchema.exactOptional(),
    Tags: TagMapSchema.and(z.any().openapi({ description: 'The Outpost tags.' })).exactOptional(),
    SiteArn: SiteArnSchema.exactOptional(),
    SupportedHardwareType: SupportedHardwareTypeSchema.and(
      z.any().openapi({ description: ' The hardware type. ' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about an Outpost.', required: [] })
  .openapi('Outpost')

const CreateOutpostOutputSchema = z
  .object({ Outpost: OutpostSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateOutpostOutput')

const AccountIdSchema = z
  .string()
  .regex(/\d{12}/)
  .length(12)
  .openapi({ description: 'The ID of the Amazon Web Services account.' })
  .openapi('AccountId')

const SiteNameSchema = z
  .string()
  .regex(/^[\S ]+$/)
  .min(1)
  .max(1000)
  .openapi({ description: 'The name of the site.' })
  .openapi('SiteName')

const SiteDescriptionSchema = z
  .string()
  .regex(/^[\S ]+$/)
  .min(1)
  .max(1001)
  .openapi({ description: 'The description of the site.' })
  .openapi('SiteDescription')

const SiteNotesSchema = z
  .string()
  .regex(/^[\S \n]+$/)
  .min(1)
  .max(2000)
  .openapi('SiteNotes')

const CountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{2}$/)
  .length(2)
  .openapi('CountryCode')

const StateOrRegionSchema = z
  .string()
  .regex(/^\S[\S ]*$/)
  .min(1)
  .max(50)
  .openapi('StateOrRegion')

const CitySchema = z
  .string()
  .regex(/^\S[\S ]*$/)
  .min(1)
  .max(50)
  .openapi('City')

const PowerDrawKvaSchema = z
  .enum(['POWER_5_KVA', 'POWER_10_KVA', 'POWER_15_KVA', 'POWER_30_KVA'])
  .openapi('PowerDrawKva')

const PowerPhaseSchema = z.enum(['SINGLE_PHASE', 'THREE_PHASE']).openapi('PowerPhase')

const PowerConnectorSchema = z
  .enum(['L6_30P', 'IEC309', 'AH530P7W', 'AH532P6W'])
  .openapi('PowerConnector')

const PowerFeedDropSchema = z.enum(['ABOVE_RACK', 'BELOW_RACK']).openapi('PowerFeedDrop')

const UplinkGbpsSchema = z
  .enum(['UPLINK_1G', 'UPLINK_10G', 'UPLINK_40G', 'UPLINK_100G'])
  .openapi('UplinkGbps')

const UplinkCountSchema = z
  .enum([
    'UPLINK_COUNT_1',
    'UPLINK_COUNT_2',
    'UPLINK_COUNT_3',
    'UPLINK_COUNT_4',
    'UPLINK_COUNT_5',
    'UPLINK_COUNT_6',
    'UPLINK_COUNT_7',
    'UPLINK_COUNT_8',
    'UPLINK_COUNT_12',
    'UPLINK_COUNT_16',
  ])
  .openapi('UplinkCount')

const FiberOpticCableTypeSchema = z
  .enum(['SINGLE_MODE', 'MULTI_MODE'])
  .openapi('FiberOpticCableType')

const OpticalStandardSchema = z
  .enum([
    'OPTIC_10GBASE_SR',
    'OPTIC_10GBASE_IR',
    'OPTIC_10GBASE_LR',
    'OPTIC_40GBASE_SR',
    'OPTIC_40GBASE_ESR',
    'OPTIC_40GBASE_IR4_LR4L',
    'OPTIC_40GBASE_LR4',
    'OPTIC_100GBASE_SR4',
    'OPTIC_100GBASE_CWDM4',
    'OPTIC_100GBASE_LR4',
    'OPTIC_100G_PSM4_MSA',
    'OPTIC_1000BASE_LX',
    'OPTIC_1000BASE_SX',
  ])
  .openapi('OpticalStandard')

const MaximumSupportedWeightLbsSchema = z
  .enum(['NO_LIMIT', 'MAX_1400_LBS', 'MAX_1600_LBS', 'MAX_1800_LBS', 'MAX_2000_LBS'])
  .openapi('MaximumSupportedWeightLbs')

const RackPhysicalPropertiesSchema = z
  .object({
    PowerDrawKva: PowerDrawKvaSchema.and(
      z
        .any()
        .openapi({
          description: 'The power draw available at the hardware placement position for the rack. ',
        }),
    ).exactOptional(),
    PowerPhase: PowerPhaseSchema.and(
      z.any().openapi({ description: 'The power option that you can provide for hardware.' }),
    ).exactOptional(),
    PowerConnector: PowerConnectorSchema.and(
      z.any().openapi({ description: 'The power connector for the hardware. ' }),
    ).exactOptional(),
    PowerFeedDrop: PowerFeedDropSchema.and(
      z.any().openapi({ description: 'The position of the power feed.' }),
    ).exactOptional(),
    UplinkGbps: UplinkGbpsSchema.and(
      z
        .any()
        .openapi({
          description: 'The uplink speed the rack supports for the connection to the Region. ',
        }),
    ).exactOptional(),
    UplinkCount: UplinkCountSchema.and(
      z.any().openapi({ description: 'The number of uplinks each Outpost network device.' }),
    ).exactOptional(),
    FiberOpticCableType: FiberOpticCableTypeSchema.and(
      z
        .any()
        .openapi({ description: 'The type of fiber used to attach the Outpost to the network. ' }),
    ).exactOptional(),
    OpticalStandard: OpticalStandardSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of optical standard used to attach the Outpost to the network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a> in the Amazon Web Services Outposts User Guide. ',
        }),
    ).exactOptional(),
    MaximumSupportedWeightLbs: MaximumSupportedWeightLbsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000 lbs (907 kg). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. ',
    required: [],
  })
  .openapi('RackPhysicalProperties')

const SiteSchema = z
  .object({
    SiteId: SiteIdSchema.exactOptional(),
    AccountId: AccountIdSchema.exactOptional(),
    Name: SiteNameSchema.exactOptional(),
    Description: SiteDescriptionSchema.exactOptional(),
    Tags: TagMapSchema.and(z.any().openapi({ description: 'The site tags.' })).exactOptional(),
    SiteArn: SiteArnSchema.exactOptional(),
    Notes: SiteNotesSchema.and(
      z.any().openapi({ description: ' Notes about a site. ' }),
    ).exactOptional(),
    OperatingAddressCountryCode: CountryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ISO-3166 two-letter country code where the hardware is installed and powered on. ',
        }),
    ).exactOptional(),
    OperatingAddressStateOrRegion: StateOrRegionSchema.and(
      z
        .any()
        .openapi({
          description: ' State or region where the hardware is installed and powered on. ',
        }),
    ).exactOptional(),
    OperatingAddressCity: CitySchema.and(
      z.any().openapi({ description: ' City where the hardware is installed and powered on. ' }),
    ).exactOptional(),
    RackPhysicalProperties: RackPhysicalPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the physical and logistical details for a rack at the site. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about a site.', required: [] })
  .openapi('Site')

const CreateSiteOutputSchema = z
  .object({ Site: SiteSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateSiteOutput')

const ContactNameSchema = z
  .string()
  .regex(/^\S[\S ]*$/)
  .min(1)
  .max(255)
  .openapi('ContactName')

const ContactPhoneNumberSchema = z
  .string()
  .regex(/^[\S ]+$/)
  .min(1)
  .max(20)
  .openapi('ContactPhoneNumber')

const AddressLine1Schema = z
  .string()
  .regex(/^\S[\S ]*$/)
  .min(1)
  .max(180)
  .openapi('AddressLine1')

const AddressLine2Schema = z
  .string()
  .regex(/^\S[\S ]*$/)
  .min(0)
  .max(60)
  .openapi('AddressLine2')

const AddressLine3Schema = z
  .string()
  .regex(/^\S[\S ]*$/)
  .min(0)
  .max(60)
  .openapi('AddressLine3')

const DistrictOrCountySchema = z
  .string()
  .regex(/^\S[\S ]*/)
  .min(1)
  .max(60)
  .openapi('DistrictOrCounty')

const PostalCodeSchema = z
  .string()
  .regex(/^[a-zA-Z0-9 -]+$/)
  .min(1)
  .max(20)
  .openapi('PostalCode')

const MunicipalitySchema = z
  .string()
  .regex(/^\S[\S ]*$/)
  .min(0)
  .max(180)
  .openapi('Municipality')

const DeleteOutpostOutputSchema = z.object({}).openapi('DeleteOutpostOutput')

const DeleteSiteOutputSchema = z.object({}).openapi('DeleteSiteOutput')

const CatalogItemStatusSchema = z.enum(['AVAILABLE', 'DISCONTINUED']).openapi('CatalogItemStatus')

const FamilySchema = z
  .string()
  .regex(/[a-z0-9]+/)
  .min(1)
  .max(10)
  .openapi('Family')

const MaxSizeSchema = z.string().openapi('MaxSize')

const QuantitySchema = z.string().openapi('Quantity')

const EC2CapacitySchema = z
  .object({
    Family: FamilySchema.and(
      z.any().openapi({ description: ' The family of the EC2 capacity. ' }),
    ).exactOptional(),
    MaxSize: MaxSizeSchema.and(
      z.any().openapi({ description: ' The maximum size of the EC2 capacity. ' }),
    ).exactOptional(),
    Quantity: QuantitySchema.and(
      z.any().openapi({ description: ' The quantity of the EC2 capacity. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about EC2 capacity. ', required: [] })
  .openapi('EC2Capacity')

const EC2CapacityListDefinitionSchema = z
  .array(EC2CapacitySchema)
  .openapi('EC2CapacityListDefinition')

const CatalogItemPowerKvaSchema = z.float32().openapi('CatalogItemPowerKva')

const CatalogItemWeightLbsSchema = z.int().openapi('CatalogItemWeightLbs')

const SupportedUplinkGbpsSchema = z.int().openapi('SupportedUplinkGbps')

const SupportedUplinkGbpsListDefinitionSchema = z
  .array(SupportedUplinkGbpsSchema)
  .openapi('SupportedUplinkGbpsListDefinition')

const SupportedStorageEnumSchema = z.enum(['EBS', 'S3']).openapi('SupportedStorageEnum')

const SupportedStorageListSchema = z
  .array(SupportedStorageEnumSchema)
  .openapi('SupportedStorageList')

const CatalogItemSchema = z
  .object({
    CatalogItemId: SkuCodeSchema.and(
      z.any().openapi({ description: ' The ID of the catalog item. ' }),
    ).exactOptional(),
    ItemStatus: CatalogItemStatusSchema.and(
      z.any().openapi({ description: ' The status of a catalog item. ' }),
    ).exactOptional(),
    EC2Capacities: EC2CapacityListDefinitionSchema.and(
      z.any().openapi({ description: ' Information about the EC2 capacity of an item. ' }),
    ).exactOptional(),
    PowerKva: CatalogItemPowerKvaSchema.and(
      z.any().openapi({ description: ' Information about the power draw of an item. ' }),
    ).exactOptional(),
    WeightLbs: CatalogItemWeightLbsSchema.and(
      z.any().openapi({ description: ' The weight of the item in pounds. ' }),
    ).exactOptional(),
    SupportedUplinkGbps: SupportedUplinkGbpsListDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The uplink speed this catalog item requires for the connection to the Region. ',
        }),
    ).exactOptional(),
    SupportedStorage: SupportedStorageListSchema.and(
      z.any().openapi({ description: ' The supported storage options for the catalog item. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about a catalog item. ', required: [] })
  .openapi('CatalogItem')

const GetCatalogItemOutputSchema = z
  .object({
    CatalogItem: CatalogItemSchema.and(
      z.any().openapi({ description: 'Information about this catalog item.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCatalogItemOutput')

const ConnectionIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9+\/=]{1,1024}$/)
  .min(1)
  .max(1024)
  .openapi('ConnectionId')

const WireGuardPublicKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/+]{43}=$/)
  .length(44)
  .openapi('WireGuardPublicKey')

const ServerEndpointSchema = z
  .string()
  .regex(/^([0-9]{1,3}\.){3}[0-9]{1,3}:[0-9]{1,5}$/)
  .min(9)
  .max(21)
  .openapi('ServerEndpoint')

const CIDRSchema = z
  .string()
  .regex(/^([0-9]{1,3}\.){3}[0-9]{1,3}\/[0-9]{1,2}$/)
  .min(9)
  .max(18)
  .openapi('CIDR')

const CIDRListSchema = z.array(CIDRSchema).openapi('CIDRList')

const ConnectionDetailsSchema = z
  .object({
    ClientPublicKey: WireGuardPublicKeySchema.and(
      z.any().openapi({ description: ' The public key of the client. ' }),
    ).exactOptional(),
    ServerPublicKey: WireGuardPublicKeySchema.and(
      z.any().openapi({ description: ' The public key of the server. ' }),
    ).exactOptional(),
    ServerEndpoint: ServerEndpointSchema.and(
      z.any().openapi({ description: ' The endpoint for the server. ' }),
    ).exactOptional(),
    ClientTunnelAddress: CIDRSchema.and(
      z.any().openapi({ description: ' The client tunnel address. ' }),
    ).exactOptional(),
    ServerTunnelAddress: CIDRSchema.and(
      z.any().openapi({ description: ' The server tunnel address. ' }),
    ).exactOptional(),
    AllowedIps: CIDRListSchema.and(
      z.any().openapi({ description: ' The allowed IP addresses. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about a connection. ', required: [] })
  .openapi('ConnectionDetails')

const GetConnectionResponseSchema = z
  .object({
    ConnectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: ' The ID of the connection. ' }),
    ).exactOptional(),
    ConnectionDetails: ConnectionDetailsSchema.and(
      z.any().openapi({ description: ' Information about the connection. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetConnectionResponse')

const GetOrderOutputSchema = z
  .object({ Order: OrderSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetOrderOutput')

const GetOutpostOutputSchema = z
  .object({ Outpost: OutpostSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetOutpostOutput')

const InstanceTypeSchema = z
  .string()
  .openapi({ description: 'The instance type.' })
  .openapi('InstanceType')

const InstanceTypeItemSchema = z
  .object({ InstanceType: InstanceTypeSchema.exactOptional() })
  .openapi({ description: 'Information about an instance type.', required: [] })
  .openapi('InstanceTypeItem')

const InstanceTypeListDefinitionSchema = z
  .array(InstanceTypeItemSchema)
  .openapi({ description: 'Information about the instance types.' })
  .openapi('InstanceTypeListDefinition')

const TokenSchema = z
  .string()
  .regex(/^(\d+)##(\S+)$/)
  .min(1)
  .max(2048)
  .openapi({ description: 'The pagination token.' })
  .openapi('Token')

const GetOutpostInstanceTypesOutputSchema = z
  .object({
    InstanceTypes: InstanceTypeListDefinitionSchema.exactOptional(),
    NextToken: TokenSchema.exactOptional(),
    OutpostId: OutpostIdSchema.and(
      z.any().openapi({ description: ' The ID of the Outpost. ' }),
    ).exactOptional(),
    OutpostArn: OutpostArnSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOutpostInstanceTypesOutput')

const GetSiteOutputSchema = z
  .object({ Site: SiteSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetSiteOutput')

const AddressTypeSchema = z.enum(['SHIPPING_ADDRESS', 'OPERATING_ADDRESS']).openapi('AddressType')

const AddressSchema = z
  .object({
    ContactName: ContactNameSchema.and(
      z.any().openapi({ description: 'The name of the contact.' }),
    ).exactOptional(),
    ContactPhoneNumber: ContactPhoneNumberSchema.and(
      z.any().openapi({ description: 'The phone number of the contact.' }),
    ).exactOptional(),
    AddressLine1: AddressLine1Schema.and(
      z.any().openapi({ description: 'The first line of the address.' }),
    ),
    AddressLine2: AddressLine2Schema.and(
      z.any().openapi({ description: 'The second line of the address.' }),
    ).exactOptional(),
    AddressLine3: AddressLine3Schema.and(
      z.any().openapi({ description: 'The third line of the address.' }),
    ).exactOptional(),
    City: CitySchema.and(z.any().openapi({ description: 'The city for the address.' })),
    StateOrRegion: StateOrRegionSchema.and(
      z.any().openapi({ description: 'The state for the address.' }),
    ),
    DistrictOrCounty: DistrictOrCountySchema.and(
      z.any().openapi({ description: 'The district or county for the address.' }),
    ).exactOptional(),
    PostalCode: PostalCodeSchema.and(
      z.any().openapi({ description: 'The postal code for the address.' }),
    ),
    CountryCode: CountryCodeSchema.and(
      z.any().openapi({ description: 'The ISO-3166 two-letter country code for the address.' }),
    ),
    Municipality: MunicipalitySchema.and(
      z.any().openapi({ description: 'The municipality for the address.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AddressLine1', 'City', 'StateOrRegion', 'PostalCode', 'CountryCode'],
    description: ' Information about an address. ',
  })
  .openapi('Address')

const GetSiteAddressOutputSchema = z
  .object({
    SiteId: SiteIdSchema.exactOptional(),
    AddressType: AddressTypeSchema.and(
      z.any().openapi({ description: 'The type of the address you receive. ' }),
    ).exactOptional(),
    Address: AddressSchema.and(
      z.any().openapi({ description: ' Information about the address. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSiteAddressOutput')

const RackIdSchema = z
  .string()
  .regex(/^[\S \n]+$/)
  .min(5)
  .max(20)
  .openapi('RackId')

const AssetTypeSchema = z.literal('COMPUTE').openapi('AssetType')

const HostIdSchema = z
  .string()
  .regex(/^[A-Za-z0-9-]*$/)
  .min(1)
  .max(50)
  .openapi('HostId')

const ComputeAssetStateSchema = z
  .enum(['ACTIVE', 'ISOLATED', 'RETIRING'])
  .openapi('ComputeAssetState')

const ComputeAttributesSchema = z
  .object({
    HostId: HostIdSchema.and(
      z.any().openapi({ description: ' The host ID of the Dedicated Host on the asset. ' }),
    ).exactOptional(),
    State: ComputeAssetStateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The state.</p> <ul> <li> <p>ACTIVE - The asset is available and can provide capacity for new compute resources.</p> </li> <li> <p>ISOLATED - The asset is undergoing maintenance and can't provide capacity for new compute resources. Existing compute resources on the asset are not affected.</p> </li> <li> <p>RETIRING - The underlying hardware for the asset is degraded. Capacity for new compute resources is reduced. Amazon Web Services sends notifications for resources that must be stopped before the asset can be replaced.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about compute hardware assets. ', required: [] })
  .openapi('ComputeAttributes')

const RackElevationSchema = z.float32().min(0).max(99).openapi('RackElevation')

const AssetLocationSchema = z
  .object({
    RackElevation: RackElevationSchema.and(
      z
        .any()
        .openapi({ description: ' The position of an asset in a rack measured in rack units. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Information about the position of the asset in a rack. ',
    required: [],
  })
  .openapi('AssetLocation')

const AssetInfoSchema = z
  .object({
    AssetId: AssetIdSchema.and(
      z.any().openapi({ description: ' The ID of the asset. ' }),
    ).exactOptional(),
    RackId: RackIdSchema.and(
      z.any().openapi({ description: ' The rack ID of the asset. ' }),
    ).exactOptional(),
    AssetType: AssetTypeSchema.and(
      z.any().openapi({ description: ' The type of the asset. ' }),
    ).exactOptional(),
    ComputeAttributes: ComputeAttributesSchema.and(
      z.any().openapi({ description: ' Information about compute hardware assets. ' }),
    ).exactOptional(),
    AssetLocation: AssetLocationSchema.and(
      z.any().openapi({ description: ' The position of an asset in a rack. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Information about hardware assets. ', required: [] })
  .openapi('AssetInfo')

const AssetListDefinitionSchema = z.array(AssetInfoSchema).openapi('AssetListDefinition')

const ListAssetsOutputSchema = z
  .object({
    Assets: AssetListDefinitionSchema.and(
      z.any().openapi({ description: 'Information about the hardware assets.' }),
    ).exactOptional(),
    NextToken: TokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAssetsOutput')

const AssetStateSchema = z.enum(['ACTIVE', 'RETIRING']).openapi('AssetState')

const CatalogItemListDefinitionSchema = z
  .array(CatalogItemSchema)
  .openapi('CatalogItemListDefinition')

const ListCatalogItemsOutputSchema = z
  .object({
    CatalogItems: CatalogItemListDefinitionSchema.and(
      z.any().openapi({ description: 'Information about the catalog items.' }),
    ).exactOptional(),
    NextToken: TokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCatalogItemsOutput')

const CatalogItemClassSchema = z.enum(['RACK', 'SERVER']).openapi('CatalogItemClass')

const LineItemStatusCountsSchema = z
  .record(z.string(), LineItemQuantitySchema)
  .openapi('LineItemStatusCounts')

const OrderSummarySchema = z
  .object({
    OutpostId: OutpostIdOnlySchema.and(
      z.any().openapi({ description: ' The ID of the Outpost. ' }),
    ).exactOptional(),
    OrderId: OrderIdSchema.and(
      z.any().openapi({ description: ' The ID of the order. ' }),
    ).exactOptional(),
    OrderType: OrderTypeSchema.and(
      z.any().openapi({ description: 'The type of order.' }),
    ).exactOptional(),
    Status: OrderStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The status of the order.</p> <ul> <li> <p> <code>PREPARING</code> - Order is received and is being prepared.</p> </li> <li> <p> <code>IN_PROGRESS</code> - Order is either being built, shipped, or installed. For more information, see the <code>LineItem</code> status.</p> </li> <li> <p> <code>COMPLETED</code> - Order is complete.</p> </li> <li> <p> <code>CANCELLED</code> - Order is cancelled.</p> </li> <li> <p> <code>ERROR</code> - Customer should contact support.</p> </li> </ul> <note> <p>The following statuses are deprecated: <code>RECEIVED</code>, <code>PENDING</code>, <code>PROCESSING</code>, <code>INSTALLING</code>, and <code>FULFILLED</code>. </p> </note>',
        }),
    ).exactOptional(),
    LineItemCountsByStatus: LineItemStatusCountsSchema.and(
      z.any().openapi({ description: ' The status of all line items in the order. ' }),
    ).exactOptional(),
    OrderSubmissionDate: ISO8601TimestampSchema.and(
      z.any().openapi({ description: ' The submission date for the order. ' }),
    ).exactOptional(),
    OrderFulfilledDate: ISO8601TimestampSchema.and(
      z.any().openapi({ description: ' The fulfilment date for the order. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' A summary of line items in your order. ', required: [] })
  .openapi('OrderSummary')

const OrderSummaryListDefinitionSchema = z
  .array(OrderSummarySchema)
  .openapi('OrderSummaryListDefinition')

const ListOrdersOutputSchema = z
  .object({
    Orders: OrderSummaryListDefinitionSchema.and(
      z.any().openapi({ description: ' Information about the orders. ' }),
    ).exactOptional(),
    NextToken: TokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOrdersOutput')

const OutpostListDefinitionSchema = z
  .array(OutpostSchema)
  .openapi({ description: 'Information about the Outposts.' })
  .openapi('OutpostListDefinition')

const ListOutpostsOutputSchema = z
  .object({
    Outposts: OutpostListDefinitionSchema.exactOptional(),
    NextToken: TokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOutpostsOutput')

const SiteListDefinitionSchema = z
  .array(SiteSchema)
  .openapi({ description: 'Information about the sites.' })
  .openapi('SiteListDefinition')

const ListSitesOutputSchema = z
  .object({
    Sites: SiteListDefinitionSchema.exactOptional(),
    NextToken: TokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSitesOutput')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagMapSchema.and(z.any().openapi({ description: 'The resource tags.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const UnderlayIpAddressSchema = z
  .string()
  .regex(/^([0-9]{1,3}\.){3}[0-9]{1,3}$/)
  .min(7)
  .max(15)
  .openapi('UnderlayIpAddress')

const StartConnectionResponseSchema = z
  .object({
    ConnectionId: ConnectionIdSchema.and(
      z.any().openapi({ description: ' The ID of the connection. ' }),
    ).exactOptional(),
    UnderlayIpAddress: UnderlayIpAddressSchema.and(
      z.any().openapi({ description: ' The underlay IP address. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartConnectionResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateOutpostOutputSchema = z
  .object({ Outpost: OutpostSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateOutpostOutput')

const UpdateSiteOutputSchema = z
  .object({ Site: SiteSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateSiteOutput')

const UpdateSiteAddressOutputSchema = z
  .object({
    AddressType: AddressTypeSchema.and(
      z.any().openapi({ description: ' The type of the address. ' }),
    ).exactOptional(),
    Address: AddressSchema.and(
      z.any().openapi({ description: ' Information about an address. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSiteAddressOutput')

const UpdateSiteRackPhysicalPropertiesOutputSchema = z
  .object({ Site: SiteSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('UpdateSiteRackPhysicalPropertiesOutput')

const ArnSchema = z
  .string()
  .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:([a-z\d-]+)\/)[a-z]{2,8}-[a-f0-9]{17}$/)
  .max(1011)
  .openapi('Arn')

const AvailabilityZoneIdListSchema = z
  .array(AvailabilityZoneIdSchema)
  .min(1)
  .max(5)
  .openapi('AvailabilityZoneIdList')

const AvailabilityZoneListSchema = z
  .array(AvailabilityZoneSchema)
  .min(1)
  .max(5)
  .openapi('AvailabilityZoneList')

const CancelOrderInputSchema = z
  .object({})
  .openapi({ title: 'CancelOrderInput' })
  .openapi('CancelOrderInput')

const CatalogItemClassListSchema = z.array(CatalogItemClassSchema).openapi('CatalogItemClassList')

const CityListSchema = z.array(CitySchema).openapi('CityList')

const CountryCodeListSchema = z.array(CountryCodeSchema).openapi('CountryCodeList')

const OutpostIdentifierSchema = z
  .string()
  .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/)?op-[a-f0-9]{17}$/)
  .min(1)
  .max(180)
  .openapi('OutpostIdentifier')

const LineItemRequestListDefinitionSchema = z
  .array(LineItemRequestSchema)
  .min(1)
  .max(20)
  .openapi('LineItemRequestListDefinition')

const CreateOrderInputSchema = z
  .object({
    OutpostIdentifier: OutpostIdentifierSchema.and(
      z
        .any()
        .openapi({ description: ' The ID or the Amazon Resource Name (ARN) of the Outpost. ' }),
    ),
    LineItems: LineItemRequestListDefinitionSchema.and(
      z.any().openapi({ description: 'The line items that make up the order.' }),
    ),
    PaymentOption: PaymentOptionSchema.and(z.any().openapi({ description: 'The payment option.' })),
    PaymentTerm: PaymentTermSchema.and(
      z.any().openapi({ description: 'The payment terms.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OutpostIdentifier', 'LineItems', 'PaymentOption'],
    title: 'CreateOrderInput',
  })
  .openapi('CreateOrderInput')

const CreateOutpostInputSchema = z
  .object({
    Name: OutpostNameSchema,
    Description: OutpostDescriptionSchema.exactOptional(),
    SiteId: SiteIdSchema.and(
      z.any().openapi({ description: ' The ID or the Amazon Resource Name (ARN) of the site. ' }),
    ),
    AvailabilityZone: AvailabilityZoneSchema.exactOptional(),
    AvailabilityZoneId: AvailabilityZoneIdSchema.exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags to apply to the Outpost.' }),
    ).exactOptional(),
    SupportedHardwareType: SupportedHardwareTypeSchema.and(
      z.any().openapi({ description: ' The type of hardware for this Outpost. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name', 'SiteId'], title: 'CreateOutpostInput' })
  .openapi('CreateOutpostInput')

const CreateSiteInputSchema = z
  .object({
    Name: SiteNameSchema,
    Description: SiteDescriptionSchema.exactOptional(),
    Notes: SiteNotesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Additional information that you provide about site access requirements, electrician scheduling, personal protective equipment, or regulation of equipment materials that could affect your installation process. ',
        }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: ' The tags to apply to a site. ' }),
    ).exactOptional(),
    OperatingAddress: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The location to install and power on the hardware. This address might be different from the shipping address. ',
        }),
    ).exactOptional(),
    ShippingAddress: AddressSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The location to ship the hardware. This address might be different from the operating address. ',
        }),
    ).exactOptional(),
    RackPhysicalProperties: RackPhysicalPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Information about the physical and logistical details for the rack at this site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Name'], title: 'CreateSiteInput' })
  .openapi('CreateSiteInput')

const DeleteOutpostInputSchema = z
  .object({})
  .openapi({ title: 'DeleteOutpostInput' })
  .openapi('DeleteOutpostInput')

const DeleteSiteInputSchema = z
  .object({})
  .openapi({ title: 'DeleteSiteInput' })
  .openapi('DeleteSiteInput')

const DeviceSerialNumberSchema = z
  .string()
  .regex(/^(\w+)$/)
  .min(1)
  .max(100)
  .openapi('DeviceSerialNumber')

const EC2FamilyListSchema = z.array(FamilySchema).openapi('EC2FamilyList')

const GetCatalogItemInputSchema = z
  .object({})
  .openapi({ title: 'GetCatalogItemInput' })
  .openapi('GetCatalogItemInput')

const GetConnectionRequestSchema = z
  .object({})
  .openapi({ title: 'GetConnectionRequest' })
  .openapi('GetConnectionRequest')

const GetOrderInputSchema = z
  .object({})
  .openapi({ title: 'GetOrderInput' })
  .openapi('GetOrderInput')

const GetOutpostInputSchema = z
  .object({})
  .openapi({ title: 'GetOutpostInput' })
  .openapi('GetOutpostInput')

const MaxResults1000Schema = z
  .int()
  .min(1)
  .max(1000)
  .openapi({ description: 'The maximum page size.' })
  .openapi('MaxResults1000')

const GetOutpostInstanceTypesInputSchema = z
  .object({})
  .openapi({ title: 'GetOutpostInstanceTypesInput' })
  .openapi('GetOutpostInstanceTypesInput')

const GetSiteAddressInputSchema = z
  .object({})
  .openapi({ title: 'GetSiteAddressInput' })
  .openapi('GetSiteAddressInput')

const GetSiteInputSchema = z.object({}).openapi({ title: 'GetSiteInput' }).openapi('GetSiteInput')

const HostIdListSchema = z.array(HostIdSchema).openapi('HostIdList')

const LifeCycleStatusListSchema = z
  .array(LifeCycleStatusSchema)
  .min(1)
  .max(5)
  .openapi('LifeCycleStatusList')

const StatusListSchema = z.array(AssetStateSchema).min(1).max(2).openapi('StatusList')

const ListAssetsInputSchema = z
  .object({})
  .openapi({ title: 'ListAssetsInput' })
  .openapi('ListAssetsInput')

const ListCatalogItemsInputSchema = z
  .object({})
  .openapi({ title: 'ListCatalogItemsInput' })
  .openapi('ListCatalogItemsInput')

const ListOrdersInputSchema = z
  .object({})
  .openapi({ title: 'ListOrdersInput' })
  .openapi('ListOrdersInput')

const ListOutpostsInputSchema = z
  .object({})
  .openapi({ title: 'ListOutpostsInput' })
  .openapi('ListOutpostsInput')

const StateOrRegionListSchema = z.array(StateOrRegionSchema).openapi('StateOrRegionList')

const ListSitesInputSchema = z
  .object({})
  .openapi({ title: 'ListSitesInput' })
  .openapi('ListSitesInput')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const NetworkInterfaceDeviceIndexSchema = z
  .int()
  .min(0)
  .max(1)
  .openapi('NetworkInterfaceDeviceIndex')

const StartConnectionRequestSchema = z
  .object({
    DeviceSerialNumber: DeviceSerialNumberSchema.and(
      z.any().openapi({ description: ' The serial number of the dongle. ' }),
    ),
    AssetId: AssetIdSchema.and(z.any().openapi({ description: ' The ID of the Outpost server. ' })),
    ClientPublicKey: WireGuardPublicKeySchema.and(
      z.any().openapi({ description: ' The public key of the client. ' }),
    ),
    NetworkInterfaceDeviceIndex: NetworkInterfaceDeviceIndexSchema.and(
      z
        .any()
        .openapi({
          description: ' The device index of the network interface on the Outpost server. ',
        }),
    ),
  })
  .openapi({
    required: ['DeviceSerialNumber', 'AssetId', 'ClientPublicKey', 'NetworkInterfaceDeviceIndex'],
    title: 'StartConnectionRequest',
  })
  .openapi('StartConnectionRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    Tags: TagMapSchema.and(z.any().openapi({ description: 'The tags to add to the resource.' })),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateOutpostInputSchema = z
  .object({
    Name: OutpostNameSchema.exactOptional(),
    Description: OutpostDescriptionSchema.exactOptional(),
    SupportedHardwareType: SupportedHardwareTypeSchema.and(
      z.any().openapi({ description: ' The type of hardware for this Outpost. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateOutpostInput', required: [] })
  .openapi('UpdateOutpostInput')

const UpdateSiteAddressInputSchema = z
  .object({
    AddressType: AddressTypeSchema.and(
      z.any().openapi({ description: ' The type of the address. ' }),
    ),
    Address: AddressSchema.and(z.any().openapi({ description: ' The address for the site. ' })),
  })
  .openapi({ required: ['AddressType', 'Address'], title: 'UpdateSiteAddressInput' })
  .openapi('UpdateSiteAddressInput')

const UpdateSiteInputSchema = z
  .object({
    Name: SiteNameSchema.exactOptional(),
    Description: SiteDescriptionSchema.exactOptional(),
    Notes: SiteNotesSchema.and(
      z.any().openapi({ description: 'Notes about a site.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateSiteInput', required: [] })
  .openapi('UpdateSiteInput')

const UpdateSiteRackPhysicalPropertiesInputSchema = z
  .object({
    PowerDrawKva: PowerDrawKvaSchema.and(
      z
        .any()
        .openapi({
          description:
            'The power draw, in kVA, available at the hardware placement position for the rack.',
        }),
    ).exactOptional(),
    PowerPhase: PowerPhaseSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The power option that you can provide for hardware. </p> <ul> <li> <p>Single-phase AC feed: 200 V to 277 V, 50 Hz or 60 Hz</p> </li> <li> <p>Three-phase AC feed: 346 V to 480 V, 50 Hz or 60 Hz</p> </li> </ul>',
        }),
    ).exactOptional(),
    PowerConnector: PowerConnectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The power connector that Amazon Web Services should plan to provide for connections to the hardware. Note the correlation between <code>PowerPhase</code> and <code>PowerConnector</code>. </p> <ul> <li> <p>Single-phase AC feed</p> <ul> <li> <p> <b>L6-30P</b> – (common in US); 30A; single phase</p> </li> <li> <p> <b>IEC309 (blue)</b> – P+N+E, 6hr; 32 A; single phase</p> </li> </ul> </li> <li> <p>Three-phase AC feed</p> <ul> <li> <p> <b>AH530P7W (red)</b> – 3P+N+E, 7hr; 30A; three phase</p> </li> <li> <p> <b>AH532P6W (red)</b> – 3P+N+E, 6hr; 32A; three phase</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
    PowerFeedDrop: PowerFeedDropSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether the power feed comes above or below the rack. ',
        }),
    ).exactOptional(),
    UplinkGbps: UplinkGbpsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The uplink speed the rack should support for the connection to the Region. ',
        }),
    ).exactOptional(),
    UplinkCount: UplinkCountSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Racks come with two Outpost network devices. Depending on the supported uplink speed at the site, the Outpost network devices provide a variable number of uplinks. Specify the number of uplinks for each Outpost network device that you intend to use to connect the rack to your network. Note the correlation between <code>UplinkGbps</code> and <code>UplinkCount</code>. </p> <ul> <li> <p>1Gbps - Uplinks available: 1, 2, 4, 6, 8</p> </li> <li> <p>10Gbps - Uplinks available: 1, 2, 4, 8, 12, 16</p> </li> <li> <p>40 and 100 Gbps- Uplinks available: 1, 2, 4</p> </li> </ul>',
        }),
    ).exactOptional(),
    FiberOpticCableType: FiberOpticCableTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of fiber that you will use to attach the Outpost to your network. ',
        }),
    ).exactOptional(),
    OpticalStandard: OpticalStandardSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of optical standard that you will use to attach the Outpost to your network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a> in the Amazon Web Services Outposts User Guide. </p> <ul> <li> <p> <code>OPTIC_10GBASE_SR</code>: 10GBASE-SR</p> </li> <li> <p> <code>OPTIC_10GBASE_IR</code>: 10GBASE-IR</p> </li> <li> <p> <code>OPTIC_10GBASE_LR</code>: 10GBASE-LR</p> </li> <li> <p> <code>OPTIC_40GBASE_SR</code>: 40GBASE-SR</p> </li> <li> <p> <code>OPTIC_40GBASE_ESR</code>: 40GBASE-ESR</p> </li> <li> <p> <code>OPTIC_40GBASE_IR4_LR4L</code>: 40GBASE-IR (LR4L)</p> </li> <li> <p> <code>OPTIC_40GBASE_LR4</code>: 40GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100GBASE_SR4</code>: 100GBASE-SR4</p> </li> <li> <p> <code>OPTIC_100GBASE_CWDM4</code>: 100GBASE-CWDM4</p> </li> <li> <p> <code>OPTIC_100GBASE_LR4</code>: 100GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100G_PSM4_MSA</code>: 100G PSM4 MSA</p> </li> <li> <p> <code>OPTIC_1000BASE_LX</code>: 1000Base-LX</p> </li> <li> <p> <code>OPTIC_1000BASE_SX</code> : 1000Base-SX</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaximumSupportedWeightLbs: MaximumSupportedWeightLbsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000lbs. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateSiteRackPhysicalPropertiesInput', required: [] })
  .openapi('UpdateSiteRackPhysicalPropertiesInput')

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

export const postOrdersOrderIdCancelRoute = createRoute({
  method: 'post',
  path: '/orders/{OrderId}/cancel',
  description: 'Cancels the specified order for an Outpost.',
  operationId: 'CancelOrder',
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
      OrderId: z
        .string()
        .regex(/oo-[a-f0-9]{17}$/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'OrderId',
            in: 'path',
            required: true,
            description: ' The ID of the order. ',
            schema: { type: 'string', pattern: 'oo-[a-f0-9]{17}$', minLength: 1, maxLength: 20 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelOrderOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postOrdersRoute = createRoute({
  method: 'post',
  path: '/orders',
  description: 'Creates an order for an Outpost.',
  operationId: 'CreateOrder',
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
              OutpostIdentifier: z
                .string()
                .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/)?op-[a-f0-9]{17}$/)
                .min(1)
                .max(180)
                .openapi({
                  description: ' The ID or the Amazon Resource Name (ARN) of the Outpost. ',
                }),
              LineItems: z
                .array(LineItemRequestSchema)
                .min(1)
                .max(20)
                .openapi({ description: 'The line items that make up the order.' }),
              PaymentOption: z
                .enum(['ALL_UPFRONT', 'NO_UPFRONT', 'PARTIAL_UPFRONT'])
                .openapi({ description: 'The payment option.' }),
              PaymentTerm: z
                .enum(['THREE_YEARS', 'ONE_YEAR'])
                .exactOptional()
                .openapi({ description: 'The payment terms.' }),
            })
            .openapi({ required: ['OutpostIdentifier', 'LineItems', 'PaymentOption'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateOrderOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getOutpostsRoute = createRoute({
  method: 'get',
  path: '/outposts',
  description:
    '<p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>',
  operationId: 'ListOutposts',
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
      NextToken: z
        .string()
        .regex(/^(\d+)##(\S+)$/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              pattern: '^(\\d+)##(\\S+)$',
              description: 'The pagination token.',
              minLength: 1,
              maxLength: 2048,
            },
          },
          description: 'The pagination token.',
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum page size.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'The maximum page size.',
        }),
      LifeCycleStatusFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(LifeCycleStatusSchema).min(1).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'LifeCycleStatusFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by the lifecycle status.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/LifeCycleStatus' },
              minItems: 1,
              maxItems: 5,
            },
          },
        }),
      AvailabilityZoneFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AvailabilityZoneSchema).min(1).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AvailabilityZoneFilter',
            in: 'query',
            required: false,
            description:
              'Filters the results by Availability Zone (for example, <code>us-east-1a</code>).',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AvailabilityZone' },
              minItems: 1,
              maxItems: 5,
            },
          },
        }),
      AvailabilityZoneIdFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AvailabilityZoneIdSchema).min(1).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'AvailabilityZoneIdFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by AZ ID (for example, <code>use1-az1</code>).',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AvailabilityZoneId' },
              minItems: 1,
              maxItems: 5,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOutpostsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postOutpostsRoute = createRoute({
  method: 'post',
  path: '/outposts',
  description:
    '<p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>',
  operationId: 'CreateOutpost',
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
              Name: z
                .string()
                .regex(/^[\S ]+$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The name of the Outpost.' }),
              Description: z
                .string()
                .regex(/^[\S ]*$/)
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The description of the Outpost.' }),
              SiteId: z
                .string()
                .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site\/)?(os-[a-f0-9]{17})$/)
                .min(1)
                .max(255)
                .openapi({ description: 'The ID of the site.' }),
              AvailabilityZone: z
                .string()
                .regex(/^([a-zA-Z]+-){1,3}([a-zA-Z]+)?(\d+[a-zA-Z]?)?$/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The Availability Zone.' }),
              AvailabilityZoneId: z
                .string()
                .regex(/^[a-zA-Z]+\d-[a-zA-Z]+\d$/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The ID of the Availability Zone.' }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags to apply to the Outpost.' }),
              SupportedHardwareType: z
                .enum(['RACK', 'SERVER'])
                .exactOptional()
                .openapi({ description: ' The type of hardware for this Outpost. ' }),
            })
            .openapi({ required: ['Name', 'SiteId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateOutpostOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getSitesRoute = createRoute({
  method: 'get',
  path: '/sites',
  description:
    '<p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>',
  operationId: 'ListSites',
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
      NextToken: z
        .string()
        .regex(/^(\d+)##(\S+)$/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              pattern: '^(\\d+)##(\\S+)$',
              description: 'The pagination token.',
              minLength: 1,
              maxLength: 2048,
            },
          },
          description: 'The pagination token.',
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum page size.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'The maximum page size.',
        }),
      OperatingAddressCountryCodeFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(CountryCodeSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'OperatingAddressCountryCodeFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by country code.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/CountryCode' } },
          },
        }),
      OperatingAddressStateOrRegionFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StateOrRegionSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'OperatingAddressStateOrRegionFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by state or region.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/StateOrRegion' } },
          },
        }),
      OperatingAddressCityFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(CitySchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'OperatingAddressCityFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by city.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/City' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSitesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postSitesRoute = createRoute({
  method: 'post',
  path: '/sites',
  description: ' Creates a site for an Outpost. ',
  operationId: 'CreateSite',
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
              Name: z
                .string()
                .regex(/^[\S ]+$/)
                .min(1)
                .max(1000)
                .openapi({ description: 'The name of the site.' }),
              Description: z
                .string()
                .regex(/^[\S ]+$/)
                .min(1)
                .max(1001)
                .exactOptional()
                .openapi({ description: 'The description of the site.' }),
              Notes: z
                .string()
                .regex(/^[\S \n]+$/)
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({
                  description:
                    'Additional information that you provide about site access requirements, electrician scheduling, personal protective equipment, or regulation of equipment materials that could affect your installation process. ',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: ' The tags to apply to a site. ' }),
              OperatingAddress: z
                .object({
                  ContactName: ContactNameSchema.and(
                    z.any().openapi({ description: 'The name of the contact.' }),
                  ).exactOptional(),
                  ContactPhoneNumber: ContactPhoneNumberSchema.and(
                    z.any().openapi({ description: 'The phone number of the contact.' }),
                  ).exactOptional(),
                  AddressLine1: AddressLine1Schema.and(
                    z.any().openapi({ description: 'The first line of the address.' }),
                  ).exactOptional(),
                  AddressLine2: AddressLine2Schema.and(
                    z.any().openapi({ description: 'The second line of the address.' }),
                  ).exactOptional(),
                  AddressLine3: AddressLine3Schema.and(
                    z.any().openapi({ description: 'The third line of the address.' }),
                  ).exactOptional(),
                  City: CitySchema.and(
                    z.any().openapi({ description: 'The city for the address.' }),
                  ).exactOptional(),
                  StateOrRegion: StateOrRegionSchema.and(
                    z.any().openapi({ description: 'The state for the address.' }),
                  ).exactOptional(),
                  DistrictOrCounty: DistrictOrCountySchema.and(
                    z.any().openapi({ description: 'The district or county for the address.' }),
                  ).exactOptional(),
                  PostalCode: PostalCodeSchema.and(
                    z.any().openapi({ description: 'The postal code for the address.' }),
                  ).exactOptional(),
                  CountryCode: CountryCodeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The ISO-3166 two-letter country code for the address.',
                      }),
                  ).exactOptional(),
                  Municipality: MunicipalitySchema.and(
                    z.any().openapi({ description: 'The municipality for the address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: ' Information about an address. ', required: [] }),
              ShippingAddress: z
                .object({
                  ContactName: ContactNameSchema.and(
                    z.any().openapi({ description: 'The name of the contact.' }),
                  ).exactOptional(),
                  ContactPhoneNumber: ContactPhoneNumberSchema.and(
                    z.any().openapi({ description: 'The phone number of the contact.' }),
                  ).exactOptional(),
                  AddressLine1: AddressLine1Schema.and(
                    z.any().openapi({ description: 'The first line of the address.' }),
                  ).exactOptional(),
                  AddressLine2: AddressLine2Schema.and(
                    z.any().openapi({ description: 'The second line of the address.' }),
                  ).exactOptional(),
                  AddressLine3: AddressLine3Schema.and(
                    z.any().openapi({ description: 'The third line of the address.' }),
                  ).exactOptional(),
                  City: CitySchema.and(
                    z.any().openapi({ description: 'The city for the address.' }),
                  ).exactOptional(),
                  StateOrRegion: StateOrRegionSchema.and(
                    z.any().openapi({ description: 'The state for the address.' }),
                  ).exactOptional(),
                  DistrictOrCounty: DistrictOrCountySchema.and(
                    z.any().openapi({ description: 'The district or county for the address.' }),
                  ).exactOptional(),
                  PostalCode: PostalCodeSchema.and(
                    z.any().openapi({ description: 'The postal code for the address.' }),
                  ).exactOptional(),
                  CountryCode: CountryCodeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The ISO-3166 two-letter country code for the address.',
                      }),
                  ).exactOptional(),
                  Municipality: MunicipalitySchema.and(
                    z.any().openapi({ description: 'The municipality for the address.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: ' Information about an address. ', required: [] }),
              RackPhysicalProperties: z
                .object({
                  PowerDrawKva: PowerDrawKvaSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The power draw available at the hardware placement position for the rack. ',
                      }),
                  ).exactOptional(),
                  PowerPhase: PowerPhaseSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The power option that you can provide for hardware.',
                      }),
                  ).exactOptional(),
                  PowerConnector: PowerConnectorSchema.and(
                    z.any().openapi({ description: 'The power connector for the hardware. ' }),
                  ).exactOptional(),
                  PowerFeedDrop: PowerFeedDropSchema.and(
                    z.any().openapi({ description: 'The position of the power feed.' }),
                  ).exactOptional(),
                  UplinkGbps: UplinkGbpsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The uplink speed the rack supports for the connection to the Region. ',
                      }),
                  ).exactOptional(),
                  UplinkCount: UplinkCountSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The number of uplinks each Outpost network device.',
                      }),
                  ).exactOptional(),
                  FiberOpticCableType: FiberOpticCableTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The type of fiber used to attach the Outpost to the network. ',
                      }),
                  ).exactOptional(),
                  OpticalStandard: OpticalStandardSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The type of optical standard used to attach the Outpost to the network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a> in the Amazon Web Services Outposts User Guide. ',
                      }),
                  ).exactOptional(),
                  MaximumSupportedWeightLbs: MaximumSupportedWeightLbsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000 lbs (907 kg). ',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. ',
                  required: [],
                }),
            })
            .openapi({ required: ['Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSiteOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getOutpostsOutpostIdRoute = createRoute({
  method: 'get',
  path: '/outposts/{OutpostId}',
  description: 'Gets information about the specified Outpost.',
  operationId: 'GetOutpost',
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
      OutpostId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/)?op-[a-f0-9]{17}$/)
        .min(1)
        .max(180)
        .openapi({
          param: {
            name: 'OutpostId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the Outpost. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:outpost/)?op-[a-f0-9]{17}$',
              minLength: 1,
              maxLength: 180,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOutpostOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteOutpostsOutpostIdRoute = createRoute({
  method: 'delete',
  path: '/outposts/{OutpostId}',
  description: 'Deletes the specified Outpost.',
  operationId: 'DeleteOutpost',
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
      OutpostId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/)?op-[a-f0-9]{17}$/)
        .min(1)
        .max(180)
        .openapi({
          param: {
            name: 'OutpostId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the Outpost. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:outpost/)?op-[a-f0-9]{17}$',
              minLength: 1,
              maxLength: 180,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteOutpostOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchOutpostsOutpostIdRoute = createRoute({
  method: 'patch',
  path: '/outposts/{OutpostId}',
  description: ' Updates an Outpost. ',
  operationId: 'UpdateOutpost',
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
      OutpostId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/)?op-[a-f0-9]{17}$/)
        .min(1)
        .max(180)
        .openapi({
          param: {
            name: 'OutpostId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the Outpost. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:outpost/)?op-[a-f0-9]{17}$',
              minLength: 1,
              maxLength: 180,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[\S ]+$/)
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({ description: 'The name of the Outpost.' }),
              Description: z
                .string()
                .regex(/^[\S ]*$/)
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The description of the Outpost.' }),
              SupportedHardwareType: z
                .enum(['RACK', 'SERVER'])
                .exactOptional()
                .openapi({ description: ' The type of hardware for this Outpost. ' }),
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
      content: { 'application/json': { schema: UpdateOutpostOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getSitesSiteIdRoute = createRoute({
  method: 'get',
  path: '/sites/{SiteId}',
  description: 'Gets information about the specified Outpost site.',
  operationId: 'GetSite',
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
      SiteId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site\/)?(os-[a-f0-9]{17})$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'SiteId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the site. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:site/)?(os-[a-f0-9]{17})$',
              description: 'The ID of the site.',
              minLength: 1,
              maxLength: 255,
            },
          },
          description: 'The ID of the site.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSiteOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteSitesSiteIdRoute = createRoute({
  method: 'delete',
  path: '/sites/{SiteId}',
  description: 'Deletes the specified site.',
  operationId: 'DeleteSite',
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
      SiteId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site\/)?(os-[a-f0-9]{17})$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'SiteId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the site. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:site/)?(os-[a-f0-9]{17})$',
              description: 'The ID of the site.',
              minLength: 1,
              maxLength: 255,
            },
          },
          description: 'The ID of the site.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSiteOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchSitesSiteIdRoute = createRoute({
  method: 'patch',
  path: '/sites/{SiteId}',
  description: 'Updates the specified site.',
  operationId: 'UpdateSite',
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
      SiteId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site\/)?(os-[a-f0-9]{17})$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'SiteId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the site. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:site/)?(os-[a-f0-9]{17})$',
              description: 'The ID of the site.',
              minLength: 1,
              maxLength: 255,
            },
          },
          description: 'The ID of the site.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .regex(/^[\S ]+$/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: 'The name of the site.' }),
              Description: z
                .string()
                .regex(/^[\S ]+$/)
                .min(1)
                .max(1001)
                .exactOptional()
                .openapi({ description: 'The description of the site.' }),
              Notes: z
                .string()
                .regex(/^[\S \n]+$/)
                .min(1)
                .max(2000)
                .exactOptional()
                .openapi({ description: 'Notes about a site.' }),
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
      content: { 'application/json': { schema: UpdateSiteOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getCatalogItemCatalogItemIdRoute = createRoute({
  method: 'get',
  path: '/catalog/item/{CatalogItemId}',
  description: 'Gets information about the specified catalog item.',
  operationId: 'GetCatalogItem',
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
      CatalogItemId: z
        .string()
        .regex(/OR-[A-Z0-9]{7}/)
        .min(1)
        .max(10)
        .openapi({
          param: {
            name: 'CatalogItemId',
            in: 'path',
            required: true,
            description: 'The ID of the catalog item.',
            schema: { type: 'string', pattern: 'OR-[A-Z0-9]{7}', minLength: 1, maxLength: 10 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCatalogItemOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getConnectionsConnectionIdRoute = createRoute({
  method: 'get',
  path: '/connections/{ConnectionId}',
  description:
    '<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>',
  operationId: 'GetConnection',
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
      ConnectionId: z
        .string()
        .regex(/^[a-zA-Z0-9+\/=]{1,1024}$/)
        .min(1)
        .max(1024)
        .openapi({
          param: {
            name: 'ConnectionId',
            in: 'path',
            required: true,
            description: ' The ID of the connection. ',
            schema: {
              type: 'string',
              pattern: '^[a-zA-Z0-9+/=]{1,1024}$',
              minLength: 1,
              maxLength: 1024,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConnectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/orders/{OrderId}',
  description: 'Gets information about the specified order.',
  operationId: 'GetOrder',
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
      OrderId: z
        .string()
        .regex(/oo-[a-f0-9]{17}$/)
        .min(1)
        .max(20)
        .openapi({
          param: {
            name: 'OrderId',
            in: 'path',
            required: true,
            description: 'The ID of the order.',
            schema: { type: 'string', pattern: 'oo-[a-f0-9]{17}$', minLength: 1, maxLength: 20 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOrderOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getOutpostsOutpostIdInstanceTypesRoute = createRoute({
  method: 'get',
  path: '/outposts/{OutpostId}/instanceTypes',
  description: 'Gets the instance types for the specified Outpost.',
  operationId: 'GetOutpostInstanceTypes',
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
      OutpostId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/)?op-[a-f0-9]{17}$/)
        .min(1)
        .max(180)
        .openapi({
          param: {
            name: 'OutpostId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the Outpost. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:outpost/)?op-[a-f0-9]{17}$',
              minLength: 1,
              maxLength: 180,
            },
          },
        }),
    }),
    query: z.object({
      NextToken: z
        .string()
        .regex(/^(\d+)##(\S+)$/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              pattern: '^(\\d+)##(\\S+)$',
              description: 'The pagination token.',
              minLength: 1,
              maxLength: 2048,
            },
          },
          description: 'The pagination token.',
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum page size.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'The maximum page size.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOutpostInstanceTypesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getSitesSiteIdAddressAddressTypeRoute = createRoute({
  method: 'get',
  path: '/sites/{SiteId}/address#AddressType',
  description: ' Gets the site address of the specified site. ',
  operationId: 'GetSiteAddress',
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
      SiteId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site\/)?(os-[a-f0-9]{17})$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'SiteId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the site. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:site/)?(os-[a-f0-9]{17})$',
              description: 'The ID of the site.',
              minLength: 1,
              maxLength: 255,
            },
          },
          description: 'The ID of the site.',
        }),
    }),
    query: z.object({
      AddressType: z
        .enum(['SHIPPING_ADDRESS', 'OPERATING_ADDRESS'])
        .openapi({
          param: {
            name: 'AddressType',
            in: 'query',
            required: true,
            description: 'The type of the address you request. ',
            schema: { type: 'string', enum: ['SHIPPING_ADDRESS', 'OPERATING_ADDRESS'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSiteAddressOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getOutpostsOutpostIdAssetsRoute = createRoute({
  method: 'get',
  path: '/outposts/{OutpostId}/assets',
  description:
    '<p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>',
  operationId: 'ListAssets',
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
      OutpostId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/)?op-[a-f0-9]{17}$/)
        .min(1)
        .max(180)
        .openapi({
          param: {
            name: 'OutpostId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the Outpost. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:outpost/)?op-[a-f0-9]{17}$',
              minLength: 1,
              maxLength: 180,
            },
          },
        }),
    }),
    query: z.object({
      HostIdFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(HostIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'HostIdFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by the host ID of a Dedicated Host.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/HostId' } },
          },
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum page size.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'The maximum page size.',
        }),
      NextToken: z
        .string()
        .regex(/^(\d+)##(\S+)$/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              pattern: '^(\\d+)##(\\S+)$',
              description: 'The pagination token.',
              minLength: 1,
              maxLength: 2048,
            },
          },
          description: 'The pagination token.',
        }),
      StatusFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(AssetStateSchema).min(1).max(2),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'StatusFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by state.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/AssetState' },
              minItems: 1,
              maxItems: 2,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssetsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getCatalogItemsRoute = createRoute({
  method: 'get',
  path: '/catalog/items',
  description:
    '<p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>',
  operationId: 'ListCatalogItems',
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
      NextToken: z
        .string()
        .regex(/^(\d+)##(\S+)$/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              pattern: '^(\\d+)##(\\S+)$',
              description: 'The pagination token.',
              minLength: 1,
              maxLength: 2048,
            },
          },
          description: 'The pagination token.',
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum page size.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'The maximum page size.',
        }),
      ItemClassFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(CatalogItemClassSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ItemClassFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by item class.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/CatalogItemClass' } },
          },
        }),
      SupportedStorageFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SupportedStorageEnumSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'SupportedStorageFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by storage option.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SupportedStorageEnum' } },
          },
        }),
      EC2FamilyFilter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(FamilySchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'EC2FamilyFilter',
            in: 'query',
            required: false,
            description: 'Filters the results by EC2 family (for example, M5).',
            schema: { type: 'array', items: { $ref: '#/components/schemas/Family' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCatalogItemsOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getListOrdersRoute = createRoute({
  method: 'get',
  path: '/list-orders',
  description: 'Lists the Outpost orders for your Amazon Web Services account.',
  operationId: 'ListOrders',
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
      OutpostIdentifierFilter: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost\/)?op-[a-f0-9]{17}$/)
        .min(1)
        .max(180)
        .exactOptional()
        .openapi({
          param: {
            name: 'OutpostIdentifierFilter',
            in: 'query',
            required: false,
            description: ' The ID or the Amazon Resource Name (ARN) of the Outpost. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:outpost/)?op-[a-f0-9]{17}$',
              minLength: 1,
              maxLength: 180,
            },
          },
        }),
      NextToken: z
        .string()
        .regex(/^(\d+)##(\S+)$/)
        .min(1)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              pattern: '^(\\d+)##(\\S+)$',
              description: 'The pagination token.',
              minLength: 1,
              maxLength: 2048,
            },
          },
          description: 'The pagination token.',
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum page size.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'The maximum page size.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOrdersOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{ResourceArn}',
  description: 'Lists the tags for the specified resource.',
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
      ResourceArn: z
        .string()
        .regex(
          /^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:([a-z\d-]+)\/)[a-z]{2,8}-[a-f0-9]{17}$/,
        )
        .max(1011)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:([a-z\\d-]+)/)[a-z]{2,8}-[a-f0-9]{17}$',
              maxLength: 1011,
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{ResourceArn}',
  description: 'Adds tags to the specified resource.',
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
      ResourceArn: z
        .string()
        .regex(
          /^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:([a-z\d-]+)\/)[a-z]{2,8}-[a-f0-9]{17}$/,
        )
        .max(1011)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:([a-z\\d-]+)/)[a-z]{2,8}-[a-f0-9]{17}$',
              maxLength: 1011,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'The tags to add to the resource.' }),
            })
            .openapi({ required: ['Tags'] }),
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const postConnectionsRoute = createRoute({
  method: 'post',
  path: '/connections',
  description:
    '<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>',
  operationId: 'StartConnection',
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
              DeviceSerialNumber: z
                .string()
                .regex(/^(\w+)$/)
                .min(1)
                .max(100)
                .openapi({ description: ' The serial number of the dongle. ' }),
              AssetId: z
                .string()
                .regex(/^(\w+)$/)
                .min(1)
                .max(100)
                .openapi({ description: ' The ID of the Outpost server. ' }),
              ClientPublicKey: z
                .string()
                .regex(/^[a-zA-Z0-9\/+]{43}=$/)
                .length(44)
                .openapi({ description: ' The public key of the client. ' }),
              NetworkInterfaceDeviceIndex: z
                .int()
                .min(0)
                .max(1)
                .openapi({
                  description: ' The device index of the network interface on the Outpost server. ',
                }),
            })
            .openapi({
              required: [
                'DeviceSerialNumber',
                'AssetId',
                'ClientPublicKey',
                'NetworkInterfaceDeviceIndex',
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
      content: { 'application/json': { schema: StartConnectionResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{ResourceArn}#tagKeys',
  description: 'Removes tags from the specified resource.',
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
      ResourceArn: z
        .string()
        .regex(
          /^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:([a-z\d-]+)\/)[a-z]{2,8}-[a-f0-9]{17}$/,
        )
        .max(1011)
        .openapi({
          param: {
            name: 'ResourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource.',
            schema: {
              type: 'string',
              pattern:
                '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:([a-z\\d-]+)/)[a-z]{2,8}-[a-f0-9]{17}$',
              maxLength: 1011,
            },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The tag keys.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
  },
})

export const putSitesSiteIdAddressRoute = createRoute({
  method: 'put',
  path: '/sites/{SiteId}/address',
  description:
    "<p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>",
  operationId: 'UpdateSiteAddress',
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
      SiteId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site\/)?(os-[a-f0-9]{17})$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'SiteId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the site. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:site/)?(os-[a-f0-9]{17})$',
              description: 'The ID of the site.',
              minLength: 1,
              maxLength: 255,
            },
          },
          description: 'The ID of the site.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              AddressType: z
                .enum(['SHIPPING_ADDRESS', 'OPERATING_ADDRESS'])
                .openapi({ description: ' The type of the address. ' }),
              Address: z
                .object({
                  ContactName: ContactNameSchema.and(
                    z.any().openapi({ description: 'The name of the contact.' }),
                  ).exactOptional(),
                  ContactPhoneNumber: ContactPhoneNumberSchema.and(
                    z.any().openapi({ description: 'The phone number of the contact.' }),
                  ).exactOptional(),
                  AddressLine1: AddressLine1Schema.and(
                    z.any().openapi({ description: 'The first line of the address.' }),
                  ).exactOptional(),
                  AddressLine2: AddressLine2Schema.and(
                    z.any().openapi({ description: 'The second line of the address.' }),
                  ).exactOptional(),
                  AddressLine3: AddressLine3Schema.and(
                    z.any().openapi({ description: 'The third line of the address.' }),
                  ).exactOptional(),
                  City: CitySchema.and(
                    z.any().openapi({ description: 'The city for the address.' }),
                  ).exactOptional(),
                  StateOrRegion: StateOrRegionSchema.and(
                    z.any().openapi({ description: 'The state for the address.' }),
                  ).exactOptional(),
                  DistrictOrCounty: DistrictOrCountySchema.and(
                    z.any().openapi({ description: 'The district or county for the address.' }),
                  ).exactOptional(),
                  PostalCode: PostalCodeSchema.and(
                    z.any().openapi({ description: 'The postal code for the address.' }),
                  ).exactOptional(),
                  CountryCode: CountryCodeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The ISO-3166 two-letter country code for the address.',
                      }),
                  ).exactOptional(),
                  Municipality: MunicipalitySchema.and(
                    z.any().openapi({ description: 'The municipality for the address.' }),
                  ).exactOptional(),
                })
                .openapi({ description: ' Information about an address. ', required: [] }),
            })
            .openapi({ required: ['AddressType', 'Address'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSiteAddressOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchSitesSiteIdRackPhysicalPropertiesRoute = createRoute({
  method: 'patch',
  path: '/sites/{SiteId}/rackPhysicalProperties',
  description:
    '<p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>',
  operationId: 'UpdateSiteRackPhysicalProperties',
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
      SiteId: z
        .string()
        .regex(/^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site\/)?(os-[a-f0-9]{17})$/)
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'SiteId',
            in: 'path',
            required: true,
            description: ' The ID or the Amazon Resource Name (ARN) of the site. ',
            schema: {
              type: 'string',
              pattern: '^(arn:aws([a-z-]+)?:outposts:[a-z\\d-]+:\\d{12}:site/)?(os-[a-f0-9]{17})$',
              description: 'The ID of the site.',
              minLength: 1,
              maxLength: 255,
            },
          },
          description: 'The ID of the site.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PowerDrawKva: z
                .enum(['POWER_5_KVA', 'POWER_10_KVA', 'POWER_15_KVA', 'POWER_30_KVA'])
                .exactOptional()
                .openapi({
                  description:
                    'The power draw, in kVA, available at the hardware placement position for the rack.',
                }),
              PowerPhase: z
                .enum(['SINGLE_PHASE', 'THREE_PHASE'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The power option that you can provide for hardware. </p> <ul> <li> <p>Single-phase AC feed: 200 V to 277 V, 50 Hz or 60 Hz</p> </li> <li> <p>Three-phase AC feed: 346 V to 480 V, 50 Hz or 60 Hz</p> </li> </ul>',
                }),
              PowerConnector: z
                .enum(['L6_30P', 'IEC309', 'AH530P7W', 'AH532P6W'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The power connector that Amazon Web Services should plan to provide for connections to the hardware. Note the correlation between <code>PowerPhase</code> and <code>PowerConnector</code>. </p> <ul> <li> <p>Single-phase AC feed</p> <ul> <li> <p> <b>L6-30P</b> – (common in US); 30A; single phase</p> </li> <li> <p> <b>IEC309 (blue)</b> – P+N+E, 6hr; 32 A; single phase</p> </li> </ul> </li> <li> <p>Three-phase AC feed</p> <ul> <li> <p> <b>AH530P7W (red)</b> – 3P+N+E, 7hr; 30A; three phase</p> </li> <li> <p> <b>AH532P6W (red)</b> – 3P+N+E, 6hr; 32A; three phase</p> </li> </ul> </li> </ul>',
                }),
              PowerFeedDrop: z
                .enum(['ABOVE_RACK', 'BELOW_RACK'])
                .exactOptional()
                .openapi({
                  description: 'Indicates whether the power feed comes above or below the rack. ',
                }),
              UplinkGbps: z
                .enum(['UPLINK_1G', 'UPLINK_10G', 'UPLINK_40G', 'UPLINK_100G'])
                .exactOptional()
                .openapi({
                  description:
                    'The uplink speed the rack should support for the connection to the Region. ',
                }),
              UplinkCount: z
                .enum([
                  'UPLINK_COUNT_1',
                  'UPLINK_COUNT_2',
                  'UPLINK_COUNT_3',
                  'UPLINK_COUNT_4',
                  'UPLINK_COUNT_5',
                  'UPLINK_COUNT_6',
                  'UPLINK_COUNT_7',
                  'UPLINK_COUNT_8',
                  'UPLINK_COUNT_12',
                  'UPLINK_COUNT_16',
                ])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Racks come with two Outpost network devices. Depending on the supported uplink speed at the site, the Outpost network devices provide a variable number of uplinks. Specify the number of uplinks for each Outpost network device that you intend to use to connect the rack to your network. Note the correlation between <code>UplinkGbps</code> and <code>UplinkCount</code>. </p> <ul> <li> <p>1Gbps - Uplinks available: 1, 2, 4, 6, 8</p> </li> <li> <p>10Gbps - Uplinks available: 1, 2, 4, 8, 12, 16</p> </li> <li> <p>40 and 100 Gbps- Uplinks available: 1, 2, 4</p> </li> </ul>',
                }),
              FiberOpticCableType: z
                .enum(['SINGLE_MODE', 'MULTI_MODE'])
                .exactOptional()
                .openapi({
                  description:
                    'The type of fiber that you will use to attach the Outpost to your network. ',
                }),
              OpticalStandard: z
                .enum([
                  'OPTIC_10GBASE_SR',
                  'OPTIC_10GBASE_IR',
                  'OPTIC_10GBASE_LR',
                  'OPTIC_40GBASE_SR',
                  'OPTIC_40GBASE_ESR',
                  'OPTIC_40GBASE_IR4_LR4L',
                  'OPTIC_40GBASE_LR4',
                  'OPTIC_100GBASE_SR4',
                  'OPTIC_100GBASE_CWDM4',
                  'OPTIC_100GBASE_LR4',
                  'OPTIC_100G_PSM4_MSA',
                  'OPTIC_1000BASE_LX',
                  'OPTIC_1000BASE_SX',
                ])
                .exactOptional()
                .openapi({
                  description:
                    '<p>The type of optical standard that you will use to attach the Outpost to your network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a> in the Amazon Web Services Outposts User Guide. </p> <ul> <li> <p> <code>OPTIC_10GBASE_SR</code>: 10GBASE-SR</p> </li> <li> <p> <code>OPTIC_10GBASE_IR</code>: 10GBASE-IR</p> </li> <li> <p> <code>OPTIC_10GBASE_LR</code>: 10GBASE-LR</p> </li> <li> <p> <code>OPTIC_40GBASE_SR</code>: 40GBASE-SR</p> </li> <li> <p> <code>OPTIC_40GBASE_ESR</code>: 40GBASE-ESR</p> </li> <li> <p> <code>OPTIC_40GBASE_IR4_LR4L</code>: 40GBASE-IR (LR4L)</p> </li> <li> <p> <code>OPTIC_40GBASE_LR4</code>: 40GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100GBASE_SR4</code>: 100GBASE-SR4</p> </li> <li> <p> <code>OPTIC_100GBASE_CWDM4</code>: 100GBASE-CWDM4</p> </li> <li> <p> <code>OPTIC_100GBASE_LR4</code>: 100GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100G_PSM4_MSA</code>: 100G PSM4 MSA</p> </li> <li> <p> <code>OPTIC_1000BASE_LX</code>: 1000Base-LX</p> </li> <li> <p> <code>OPTIC_1000BASE_SX</code> : 1000Base-SX</p> </li> </ul>',
                }),
              MaximumSupportedWeightLbs: z
                .enum(['NO_LIMIT', 'MAX_1400_LBS', 'MAX_1600_LBS', 'MAX_1800_LBS', 'MAX_2000_LBS'])
                .exactOptional()
                .openapi({
                  description:
                    'The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000lbs. ',
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
      content: { 'application/json': { schema: UpdateSiteRackPhysicalPropertiesOutputSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
