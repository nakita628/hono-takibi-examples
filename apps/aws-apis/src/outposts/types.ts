type CancelOrderOutput = { [x: string]: unknown }
type LineItemRequest = { CatalogItemId?: {} | undefined; Quantity?: {} | undefined }
type CreateOrderOutput = {
  Order?:
    | {
        OutpostId?: {} | undefined
        OrderId?: {} | undefined
        Status?: {} | undefined
        LineItems?: {} | undefined
        PaymentOption?: {} | undefined
        OrderSubmissionDate?: {} | undefined
        OrderFulfilledDate?: {} | undefined
        PaymentTerm?: {} | undefined
        OrderType?: {} | undefined
      }
    | undefined
}
type TagValue = string
type OwnerId = string
type OutpostArn = string
type SiteId = string
type OutpostName = string
type OutpostDescription = string
type LifeCycleStatus = string
type AvailabilityZone = string
type AvailabilityZoneId = string
type SiteArn = string
type Outpost = {
  OutpostId?: {} | undefined
  OwnerId?: OwnerId | undefined
  OutpostArn?: OutpostArn | undefined
  SiteId?: SiteId | undefined
  Name?: OutpostName | undefined
  Description?: OutpostDescription | undefined
  LifeCycleStatus?: LifeCycleStatus | undefined
  AvailabilityZone?: AvailabilityZone | undefined
  AvailabilityZoneId?: AvailabilityZoneId | undefined
  Tags?: {} | undefined
  SiteArn?: SiteArn | undefined
  SupportedHardwareType?: {} | undefined
}
type CreateOutpostOutput = { Outpost?: Outpost | undefined }
type OutpostListDefinition = Outpost[]
type Token = string
type ListOutpostsOutput = {
  Outposts?: OutpostListDefinition | undefined
  NextToken?: Token | undefined
}
type AccountId = string
type SiteName = string
type SiteDescription = string
type Site = {
  SiteId?: SiteId | undefined
  AccountId?: AccountId | undefined
  Name?: SiteName | undefined
  Description?: SiteDescription | undefined
  Tags?: {} | undefined
  SiteArn?: SiteArn | undefined
  Notes?: {} | undefined
  OperatingAddressCountryCode?: {} | undefined
  OperatingAddressStateOrRegion?: {} | undefined
  OperatingAddressCity?: {} | undefined
  RackPhysicalProperties?:
    | {
        PowerDrawKva?: {} | undefined
        PowerPhase?: {} | undefined
        PowerConnector?: {} | undefined
        PowerFeedDrop?: {} | undefined
        UplinkGbps?: {} | undefined
        UplinkCount?: {} | undefined
        FiberOpticCableType?: {} | undefined
        OpticalStandard?: {} | undefined
        MaximumSupportedWeightLbs?: {} | undefined
      }
    | undefined
}
type CreateSiteOutput = { Site?: Site | undefined }
type CountryCode = string
type StateOrRegion = string
type City = string
type SiteListDefinition = Site[]
type ListSitesOutput = { Sites?: SiteListDefinition | undefined; NextToken?: Token | undefined }
type DeleteOutpostOutput = { [x: string]: unknown }
type GetOutpostOutput = { Outpost?: Outpost | undefined }
type UpdateOutpostOutput = { Outpost?: Outpost | undefined }
type DeleteSiteOutput = { [x: string]: unknown }
type GetSiteOutput = { Site?: Site | undefined }
type UpdateSiteOutput = { Site?: Site | undefined }
type GetCatalogItemOutput = {
  CatalogItem?:
    | {
        CatalogItemId?: {} | undefined
        ItemStatus?: {} | undefined
        EC2Capacities?: {} | undefined
        PowerKva?: {} | undefined
        WeightLbs?: {} | undefined
        SupportedUplinkGbps?: {} | undefined
        SupportedStorage?: {} | undefined
      }
    | undefined
}
type GetConnectionResponse = {
  ConnectionId?: {} | undefined
  ConnectionDetails?:
    | {
        ClientPublicKey?: {} | undefined
        ServerPublicKey?: {} | undefined
        ServerEndpoint?: {} | undefined
        ClientTunnelAddress?: {} | undefined
        ServerTunnelAddress?: {} | undefined
        AllowedIps?: {} | undefined
      }
    | undefined
}
type Order = {
  OutpostId?: {} | undefined
  OrderId?: {} | undefined
  Status?: {} | undefined
  LineItems?: {} | undefined
  PaymentOption?: {} | undefined
  OrderSubmissionDate?: {} | undefined
  OrderFulfilledDate?: {} | undefined
  PaymentTerm?: {} | undefined
  OrderType?: {} | undefined
}
type GetOrderOutput = { Order?: Order | undefined }
type InstanceType = string
type InstanceTypeItem = { InstanceType?: InstanceType | undefined }
type InstanceTypeListDefinition = InstanceTypeItem[]
type GetOutpostInstanceTypesOutput = {
  InstanceTypes?: InstanceTypeListDefinition | undefined
  NextToken?: Token | undefined
  OutpostId?: {} | undefined
  OutpostArn?: OutpostArn | undefined
}
type GetSiteAddressOutput = {
  SiteId?: SiteId | undefined
  AddressType?: {} | undefined
  Address?:
    | {
        ContactName?: {} | undefined
        ContactPhoneNumber?: {} | undefined
        AddressLine1: {}
        AddressLine2?: {} | undefined
        AddressLine3?: {} | undefined
        City: {}
        StateOrRegion: {}
        DistrictOrCounty?: {} | undefined
        PostalCode: {}
        CountryCode: {}
        Municipality?: {} | undefined
      }
    | undefined
}
type HostId = string
type AssetState = 'ACTIVE' | 'RETIRING'
type ListAssetsOutput = { Assets?: {} | undefined; NextToken?: Token | undefined }
type CatalogItemClass = 'RACK' | 'SERVER'
type SupportedStorageEnum = 'EBS' | 'S3'
type Family = string
type ListCatalogItemsOutput = { CatalogItems?: {} | undefined; NextToken?: Token | undefined }
type ListOrdersOutput = { Orders?: {} | undefined; NextToken?: Token | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type StartConnectionResponse = { ConnectionId?: {} | undefined; UnderlayIpAddress?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateSiteAddressOutput = {
  AddressType?: {} | undefined
  Address?:
    | {
        ContactName?: {} | undefined
        ContactPhoneNumber?: {} | undefined
        AddressLine1: {}
        AddressLine2?: {} | undefined
        AddressLine3?: {} | undefined
        City: {}
        StateOrRegion: {}
        DistrictOrCounty?: {} | undefined
        PostalCode: {}
        CountryCode: {}
        Municipality?: {} | undefined
      }
    | undefined
}
type UpdateSiteRackPhysicalPropertiesOutput = { Site?: Site | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/orders/:OrderId/cancel': {
      $post: {
        input: { param: { OrderId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CancelOrderOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/orders': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            OutpostIdentifier: string
            LineItems: LineItemRequest[]
            PaymentOption: 'ALL_UPFRONT' | 'NO_UPFRONT' | 'PARTIAL_UPFRONT'
            PaymentTerm?: 'THREE_YEARS' | 'ONE_YEAR' | undefined
          }
        }
        output: CreateOrderOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/outposts': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            Description?: string | undefined
            SiteId: string
            AvailabilityZone?: string | undefined
            AvailabilityZoneId?: string | undefined
            Tags?: { [x: string]: TagValue } | undefined
            SupportedHardwareType?: 'RACK' | 'SERVER' | undefined
          }
        }
        output: CreateOutpostOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            LifeCycleStatusFilter?: LifeCycleStatus[] | undefined
            AvailabilityZoneFilter?: AvailabilityZone[] | undefined
            AvailabilityZoneIdFilter?: AvailabilityZoneId[] | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListOutpostsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name: string
            Description?: string | undefined
            Notes?: string | undefined
            Tags?: { [x: string]: TagValue } | undefined
            OperatingAddress?:
              | {
                  ContactName?: {} | undefined
                  ContactPhoneNumber?: {} | undefined
                  AddressLine1?: {} | undefined
                  AddressLine2?: {} | undefined
                  AddressLine3?: {} | undefined
                  City?: {} | undefined
                  StateOrRegion?: {} | undefined
                  DistrictOrCounty?: {} | undefined
                  PostalCode?: {} | undefined
                  CountryCode?: {} | undefined
                  Municipality?: {} | undefined
                }
              | undefined
            ShippingAddress?:
              | {
                  ContactName?: {} | undefined
                  ContactPhoneNumber?: {} | undefined
                  AddressLine1?: {} | undefined
                  AddressLine2?: {} | undefined
                  AddressLine3?: {} | undefined
                  City?: {} | undefined
                  StateOrRegion?: {} | undefined
                  DistrictOrCounty?: {} | undefined
                  PostalCode?: {} | undefined
                  CountryCode?: {} | undefined
                  Municipality?: {} | undefined
                }
              | undefined
            RackPhysicalProperties?:
              | {
                  PowerDrawKva?: {} | undefined
                  PowerPhase?: {} | undefined
                  PowerConnector?: {} | undefined
                  PowerFeedDrop?: {} | undefined
                  UplinkGbps?: {} | undefined
                  UplinkCount?: {} | undefined
                  FiberOpticCableType?: {} | undefined
                  OpticalStandard?: {} | undefined
                  MaximumSupportedWeightLbs?: {} | undefined
                }
              | undefined
          }
        }
        output: CreateSiteOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            OperatingAddressCountryCodeFilter?: CountryCode[] | undefined
            OperatingAddressStateOrRegionFilter?: StateOrRegion[] | undefined
            OperatingAddressCityFilter?: City[] | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListSitesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/outposts/:OutpostId': {
      $delete: {
        input: { param: { OutpostId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteOutpostOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { OutpostId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetOutpostOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { OutpostId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name?: string | undefined
            Description?: string | undefined
            SupportedHardwareType?: 'RACK' | 'SERVER' | undefined
          }
        }
        output: UpdateOutpostOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:SiteId': {
      $delete: {
        input: { param: { SiteId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DeleteSiteOutput
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { SiteId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSiteOutput
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { SiteId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            Name?: string | undefined
            Description?: string | undefined
            Notes?: string | undefined
          }
        }
        output: UpdateSiteOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/catalog/item/:CatalogItemId': {
      $get: {
        input: { param: { CatalogItemId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetCatalogItemOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connections/:ConnectionId': {
      $get: {
        input: { param: { ConnectionId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/orders/:OrderId': {
      $get: {
        input: { param: { OrderId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetOrderOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/outposts/:OutpostId/instanceTypes': {
      $get: {
        input: { param: { OutpostId: string } } & {
          query: { NextToken?: string | undefined; MaxResults?: number | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetOutpostInstanceTypesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:SiteId/address#AddressType': {
      $get: {
        input: { param: { SiteId: string } } & {
          query: { AddressType: 'SHIPPING_ADDRESS' | 'OPERATING_ADDRESS' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetSiteAddressOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/outposts/:OutpostId/assets': {
      $get: {
        input: { param: { OutpostId: string } } & {
          query: {
            HostIdFilter?: HostId[] | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
            StatusFilter?: AssetState[] | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListAssetsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/catalog/items': {
      $get: {
        input: {
          query: {
            NextToken?: string | undefined
            MaxResults?: number | undefined
            ItemClassFilter?: CatalogItemClass[] | undefined
            SupportedStorageFilter?: SupportedStorageEnum[] | undefined
            EC2FamilyFilter?: Family[] | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListCatalogItemsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/list-orders': {
      $get: {
        input: {
          query: {
            OutpostIdentifierFilter?: string | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListOrdersOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn': {
      $get: {
        input: { param: { ResourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ResourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/connections': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            DeviceSerialNumber: string
            AssetId: string
            ClientPublicKey: string
            NetworkInterfaceDeviceIndex: number
          }
        }
        output: StartConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:ResourceArn#tagKeys': {
      $delete: {
        input: { param: { ResourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:SiteId/address': {
      $put: {
        input: { param: { SiteId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            AddressType: 'SHIPPING_ADDRESS' | 'OPERATING_ADDRESS'
            Address: {
              ContactName?: {} | undefined
              ContactPhoneNumber?: {} | undefined
              AddressLine1?: {} | undefined
              AddressLine2?: {} | undefined
              AddressLine3?: {} | undefined
              City?: {} | undefined
              StateOrRegion?: {} | undefined
              DistrictOrCounty?: {} | undefined
              PostalCode?: {} | undefined
              CountryCode?: {} | undefined
              Municipality?: {} | undefined
            }
          }
        }
        output: UpdateSiteAddressOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sites/:SiteId/rackPhysicalProperties': {
      $patch: {
        input: { param: { SiteId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            PowerDrawKva?:
              | 'POWER_5_KVA'
              | 'POWER_10_KVA'
              | 'POWER_15_KVA'
              | 'POWER_30_KVA'
              | undefined
            PowerPhase?: 'SINGLE_PHASE' | 'THREE_PHASE' | undefined
            PowerConnector?: 'L6_30P' | 'IEC309' | 'AH530P7W' | 'AH532P6W' | undefined
            PowerFeedDrop?: 'ABOVE_RACK' | 'BELOW_RACK' | undefined
            UplinkGbps?: 'UPLINK_1G' | 'UPLINK_10G' | 'UPLINK_40G' | 'UPLINK_100G' | undefined
            UplinkCount?:
              | 'UPLINK_COUNT_1'
              | 'UPLINK_COUNT_2'
              | 'UPLINK_COUNT_3'
              | 'UPLINK_COUNT_4'
              | 'UPLINK_COUNT_5'
              | 'UPLINK_COUNT_6'
              | 'UPLINK_COUNT_7'
              | 'UPLINK_COUNT_8'
              | 'UPLINK_COUNT_12'
              | 'UPLINK_COUNT_16'
              | undefined
            FiberOpticCableType?: 'SINGLE_MODE' | 'MULTI_MODE' | undefined
            OpticalStandard?:
              | 'OPTIC_10GBASE_SR'
              | 'OPTIC_10GBASE_IR'
              | 'OPTIC_10GBASE_LR'
              | 'OPTIC_40GBASE_SR'
              | 'OPTIC_40GBASE_ESR'
              | 'OPTIC_40GBASE_IR4_LR4L'
              | 'OPTIC_40GBASE_LR4'
              | 'OPTIC_100GBASE_SR4'
              | 'OPTIC_100GBASE_CWDM4'
              | 'OPTIC_100GBASE_LR4'
              | 'OPTIC_100G_PSM4_MSA'
              | 'OPTIC_1000BASE_LX'
              | 'OPTIC_1000BASE_SX'
              | undefined
            MaximumSupportedWeightLbs?:
              | 'NO_LIMIT'
              | 'MAX_1400_LBS'
              | 'MAX_1600_LBS'
              | 'MAX_1800_LBS'
              | 'MAX_2000_LBS'
              | undefined
          }
        }
        output: UpdateSiteRackPhysicalPropertiesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
