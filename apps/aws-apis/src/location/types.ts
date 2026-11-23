type AssociateTrackerConsumerResponse = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type ResourceNotFoundException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type AccessDeniedException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type ServiceQuotaExceededException = { [x: string]: unknown }
type ThrottlingException = { [x: string]: unknown }
type Id = string
type BatchDeleteDevicePositionHistoryResponse = { Errors: {} }
type BatchDeleteGeofenceResponse = { Errors: {} }
type DevicePositionUpdate = {
  Accuracy?: { Horizontal: {} } | undefined
  DeviceId: {}
  Position: {}
  PositionProperties?: {} | undefined
  SampleTime: {}
}
type BatchEvaluateGeofencesResponse = { Errors: {} }
type BatchGetDevicePositionResponse = { DevicePositions: {}; Errors: {} }
type BatchPutGeofenceRequestEntry = {
  GeofenceId: {}
  Geometry: { Circle?: { Center: {}; Radius: {} } | undefined; Polygon?: {} | undefined }
}
type BatchPutGeofenceResponse = { Errors: {}; Successes: {} }
type BatchUpdateDevicePositionResponse = { Errors: {} }
type Double = number
type Position = Double[]
type CalculateRouteResponse = {
  Legs: {}
  Summary: { DataSource: {}; Distance: {}; DistanceUnit: {}; DurationSeconds: {}; RouteBBox: {} }
}
type CalculateRouteMatrixResponse = {
  RouteMatrix: {}
  SnappedDeparturePositions?: {} | undefined
  SnappedDestinationPositions?: {} | undefined
  Summary: { DataSource: {}; DistanceUnit: {}; ErrorCount: {}; RouteCount: {} }
}
type TagValue = string
type CreateGeofenceCollectionResponse = { CollectionArn: {}; CollectionName: {}; CreateTime: {} }
type CreateKeyResponse = { CreateTime: {}; Key: {}; KeyArn: {}; KeyName: {} }
type CreateMapResponse = { CreateTime: {}; MapArn: {}; MapName: {} }
type CreatePlaceIndexResponse = { CreateTime: {}; IndexArn: {}; IndexName: {} }
type CreateRouteCalculatorResponse = { CalculatorArn: {}; CalculatorName: {}; CreateTime: {} }
type CreateTrackerResponse = { CreateTime: {}; TrackerArn: {}; TrackerName: {} }
type DeleteGeofenceCollectionResponse = { [x: string]: unknown }
type DescribeGeofenceCollectionResponse = {
  CollectionArn: {}
  CollectionName: {}
  CreateTime: {}
  Description: {}
  KmsKeyId?: {} | undefined
  PricingPlan?: {} | undefined
  PricingPlanDataSource?: {} | undefined
  Tags?: {} | undefined
  UpdateTime: {}
}
type UpdateGeofenceCollectionResponse = { CollectionArn: {}; CollectionName: {}; UpdateTime: {} }
type DeleteKeyResponse = { [x: string]: unknown }
type ApiKeyRestrictions = { AllowActions: {}; AllowReferers?: {} | undefined; AllowResources: {} }
type DescribeKeyResponse = {
  CreateTime: {}
  Description?: {} | undefined
  ExpireTime: {}
  Key: {}
  KeyArn: {}
  KeyName: {}
  Restrictions: ApiKeyRestrictions
  Tags?: {} | undefined
  UpdateTime: {}
}
type UpdateKeyResponse = { KeyArn: {}; KeyName: {}; UpdateTime: {} }
type DeleteMapResponse = { [x: string]: unknown }
type DescribeMapResponse = {
  Configuration: { Style: {} }
  CreateTime: {}
  DataSource: {}
  Description: {}
  MapArn: {}
  MapName: {}
  PricingPlan?: {} | undefined
  Tags?: {} | undefined
  UpdateTime: {}
}
type UpdateMapResponse = { MapArn: {}; MapName: {}; UpdateTime: {} }
type DeletePlaceIndexResponse = { [x: string]: unknown }
type DescribePlaceIndexResponse = {
  CreateTime: {}
  DataSource: {}
  DataSourceConfiguration: { IntendedUse?: {} | undefined }
  Description: {}
  IndexArn: {}
  IndexName: {}
  PricingPlan?: {} | undefined
  Tags?: {} | undefined
  UpdateTime: {}
}
type UpdatePlaceIndexResponse = { IndexArn: {}; IndexName: {}; UpdateTime: {} }
type DeleteRouteCalculatorResponse = { [x: string]: unknown }
type DescribeRouteCalculatorResponse = {
  CalculatorArn: {}
  CalculatorName: {}
  CreateTime: {}
  DataSource: {}
  Description: {}
  PricingPlan?: {} | undefined
  Tags?: {} | undefined
  UpdateTime: {}
}
type UpdateRouteCalculatorResponse = { CalculatorArn: {}; CalculatorName: {}; UpdateTime: {} }
type DeleteTrackerResponse = { [x: string]: unknown }
type DescribeTrackerResponse = {
  CreateTime: {}
  Description: {}
  KmsKeyId?: {} | undefined
  PositionFiltering?: {} | undefined
  PricingPlan?: {} | undefined
  PricingPlanDataSource?: {} | undefined
  Tags?: {} | undefined
  TrackerArn: {}
  TrackerName: {}
  UpdateTime: {}
}
type UpdateTrackerResponse = { TrackerArn: {}; TrackerName: {}; UpdateTime: {} }
type DisassociateTrackerConsumerResponse = { [x: string]: unknown }
type GetDevicePositionResponse = {
  Accuracy?: { Horizontal: {} } | undefined
  DeviceId?: {} | undefined
  Position: {}
  PositionProperties?: {} | undefined
  ReceivedTime: {}
  SampleTime: {}
}
type GetDevicePositionHistoryResponse = { DevicePositions: {}; NextToken?: {} | undefined }
type GetGeofenceResponse = {
  CreateTime: {}
  GeofenceId: {}
  Geometry: { Circle?: { Center: {}; Radius: {} } | undefined; Polygon?: {} | undefined }
  Status: {}
  UpdateTime: {}
}
type PutGeofenceResponse = { CreateTime: {}; GeofenceId: {}; UpdateTime: {} }
type GetMapGlyphsResponse = { Blob?: {} | undefined }
type GetMapSpritesResponse = { Blob?: {} | undefined }
type GetMapStyleDescriptorResponse = { Blob?: {} | undefined }
type GetMapTileResponse = { Blob?: {} | undefined }
type PlaceGeometry = { Point?: {} | undefined }
type GetPlaceResponse = {
  Place: {
    AddressNumber?: {} | undefined
    Country?: {} | undefined
    Geometry: PlaceGeometry
    Interpolated?: {} | undefined
    Label?: {} | undefined
    Municipality?: {} | undefined
    Neighborhood?: {} | undefined
    PostalCode?: {} | undefined
    Region?: {} | undefined
    Street?: {} | undefined
    SubRegion?: {} | undefined
    TimeZone?: { Name: {}; Offset?: {} | undefined } | undefined
    UnitNumber?: {} | undefined
    UnitType?: {} | undefined
  }
}
type ListDevicePositionsResponse = { Entries: {}; NextToken?: {} | undefined }
type ListGeofenceCollectionsResponse = { Entries: {}; NextToken?: {} | undefined }
type ListGeofencesResponse = { Entries: {}; NextToken?: {} | undefined }
type ListKeysResponse = { Entries: {}; NextToken?: {} | undefined }
type ListMapsResponse = { Entries: {}; NextToken?: {} | undefined }
type ListPlaceIndexesResponse = { Entries: {}; NextToken?: {} | undefined }
type ListRouteCalculatorsResponse = { Entries: {}; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type ListTrackerConsumersResponse = { ConsumerArns: {}; NextToken?: {} | undefined }
type ListTrackersResponse = { Entries: {}; NextToken?: {} | undefined }
type SearchPlaceIndexForPositionResponse = {
  Results: {}
  Summary: { DataSource: {}; Language?: {} | undefined; MaxResults?: {} | undefined; Position: {} }
}
type CountryCode = string
type SearchPlaceIndexForSuggestionsResponse = {
  Results: {}
  Summary: {
    BiasPosition?: {} | undefined
    DataSource: {}
    FilterBBox?: {} | undefined
    FilterCountries?: {} | undefined
    Language?: {} | undefined
    MaxResults?: {} | undefined
    Text: {}
  }
}
type SearchPlaceIndexForTextResponse = {
  Results: {}
  Summary: {
    BiasPosition?: {} | undefined
    DataSource: {}
    FilterBBox?: {} | undefined
    FilterCountries?: {} | undefined
    Language?: {} | undefined
    MaxResults?: {} | undefined
    ResultBBox?: {} | undefined
    Text: {}
  }
}
type String = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/tracking/v0/trackers/:TrackerName/consumers': {
      $post:
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConsumerArn: string } }
            output: AssociateTrackerConsumerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConsumerArn: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConsumerArn: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConsumerArn: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConsumerArn: string } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConsumerArn: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConsumerArn: string } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 485
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { ConsumerArn: string } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 486
          }
    }
  } & {
    '/tracking/v0/trackers/:TrackerName/delete-positions': {
      $post:
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: BatchDeleteDevicePositionHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/geofencing/v0/collections/:CollectionName/delete-geofences': {
      $post:
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeofenceIds: Id[] } }
            output: BatchDeleteGeofenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeofenceIds: Id[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeofenceIds: Id[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeofenceIds: Id[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeofenceIds: Id[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { GeofenceIds: Id[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/geofencing/v0/collections/:CollectionName/positions': {
      $post:
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DevicePositionUpdates: DevicePositionUpdate[] } }
            output: BatchEvaluateGeofencesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DevicePositionUpdates: DevicePositionUpdate[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DevicePositionUpdates: DevicePositionUpdate[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DevicePositionUpdates: DevicePositionUpdate[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DevicePositionUpdates: DevicePositionUpdate[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DevicePositionUpdates: DevicePositionUpdate[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tracking/v0/trackers/:TrackerName/get-positions': {
      $post:
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: BatchGetDevicePositionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { DeviceIds: Id[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/geofencing/v0/collections/:CollectionName/put-geofences': {
      $post:
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Entries: BatchPutGeofenceRequestEntry[] } }
            output: BatchPutGeofenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Entries: BatchPutGeofenceRequestEntry[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Entries: BatchPutGeofenceRequestEntry[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Entries: BatchPutGeofenceRequestEntry[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Entries: BatchPutGeofenceRequestEntry[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CollectionName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Entries: BatchPutGeofenceRequestEntry[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tracking/v0/trackers/:TrackerName/positions': {
      $post:
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Updates: DevicePositionUpdate[] } }
            output: BatchUpdateDevicePositionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Updates: DevicePositionUpdate[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Updates: DevicePositionUpdate[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Updates: DevicePositionUpdate[] } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Updates: DevicePositionUpdate[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { TrackerName: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { Updates: DevicePositionUpdate[] } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/routes/v0/calculators/:CalculatorName/calculate/route': {
      $post:
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePosition: Double[]
                DepartureTime?: string | undefined
                DestinationPosition: Double[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                IncludeLegGeometry?: boolean | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
                WaypointPositions?: Position[] | undefined
              }
            }
            output: CalculateRouteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePosition: Double[]
                DepartureTime?: string | undefined
                DestinationPosition: Double[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                IncludeLegGeometry?: boolean | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
                WaypointPositions?: Position[] | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePosition: Double[]
                DepartureTime?: string | undefined
                DestinationPosition: Double[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                IncludeLegGeometry?: boolean | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
                WaypointPositions?: Position[] | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePosition: Double[]
                DepartureTime?: string | undefined
                DestinationPosition: Double[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                IncludeLegGeometry?: boolean | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
                WaypointPositions?: Position[] | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePosition: Double[]
                DepartureTime?: string | undefined
                DestinationPosition: Double[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                IncludeLegGeometry?: boolean | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
                WaypointPositions?: Position[] | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePosition: Double[]
                DepartureTime?: string | undefined
                DestinationPosition: Double[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                IncludeLegGeometry?: boolean | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
                WaypointPositions?: Position[] | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/routes/v0/calculators/:CalculatorName/calculate/route-matrix': {
      $post:
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePositions: Position[]
                DepartureTime?: string | undefined
                DestinationPositions: Position[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: CalculateRouteMatrixResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePositions: Position[]
                DepartureTime?: string | undefined
                DestinationPositions: Position[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePositions: Position[]
                DepartureTime?: string | undefined
                DestinationPositions: Position[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePositions: Position[]
                DepartureTime?: string | undefined
                DestinationPositions: Position[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePositions: Position[]
                DepartureTime?: string | undefined
                DestinationPositions: Position[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                CarModeOptions?:
                  | { AvoidFerries?: {} | undefined; AvoidTolls?: {} | undefined }
                  | undefined
                DepartNow?: boolean | undefined
                DeparturePositions: Position[]
                DepartureTime?: string | undefined
                DestinationPositions: Position[]
                DistanceUnit?: 'Kilometers' | 'Miles' | undefined
                TravelMode?: 'Car' | 'Truck' | 'Walking' | 'Bicycle' | 'Motorcycle' | undefined
                TruckModeOptions?:
                  | {
                      AvoidFerries?: {} | undefined
                      AvoidTolls?: {} | undefined
                      Dimensions?:
                        | {
                            Height?: {} | undefined
                            Length?: {} | undefined
                            Unit?: {} | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                      Weight?: { Total?: {} | undefined; Unit?: {} | undefined } | undefined
                    }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/geofencing/v0/collections': {
      $post:
        | {
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
                CollectionName: string
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateGeofenceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                CollectionName: string
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                CollectionName: string
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                CollectionName: string
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                CollectionName: string
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                CollectionName: string
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                CollectionName: string
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/metadata/v0/keys': {
      $post:
        | {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                KeyName: string
                NoExpiry?: boolean | undefined
                Restrictions: {
                  AllowActions?: {} | undefined
                  AllowReferers?: {} | undefined
                  AllowResources?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                KeyName: string
                NoExpiry?: boolean | undefined
                Restrictions: {
                  AllowActions?: {} | undefined
                  AllowReferers?: {} | undefined
                  AllowResources?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                KeyName: string
                NoExpiry?: boolean | undefined
                Restrictions: {
                  AllowActions?: {} | undefined
                  AllowReferers?: {} | undefined
                  AllowResources?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                KeyName: string
                NoExpiry?: boolean | undefined
                Restrictions: {
                  AllowActions?: {} | undefined
                  AllowReferers?: {} | undefined
                  AllowResources?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                KeyName: string
                NoExpiry?: boolean | undefined
                Restrictions: {
                  AllowActions?: {} | undefined
                  AllowReferers?: {} | undefined
                  AllowResources?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                KeyName: string
                NoExpiry?: boolean | undefined
                Restrictions: {
                  AllowActions?: {} | undefined
                  AllowReferers?: {} | undefined
                  AllowResources?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                KeyName: string
                NoExpiry?: boolean | undefined
                Restrictions: {
                  AllowActions?: {} | undefined
                  AllowReferers?: {} | undefined
                  AllowResources?: {} | undefined
                }
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/maps/v0/maps': {
      $post:
        | {
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
                Configuration: { Style?: {} | undefined }
                Description?: string | undefined
                MapName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateMapResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                Configuration: { Style?: {} | undefined }
                Description?: string | undefined
                MapName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                Configuration: { Style?: {} | undefined }
                Description?: string | undefined
                MapName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                Configuration: { Style?: {} | undefined }
                Description?: string | undefined
                MapName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                Configuration: { Style?: {} | undefined }
                Description?: string | undefined
                MapName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                Configuration: { Style?: {} | undefined }
                Description?: string | undefined
                MapName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                Configuration: { Style?: {} | undefined }
                Description?: string | undefined
                MapName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/places/v0/indexes': {
      $post:
        | {
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
                DataSource: string
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                IndexName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreatePlaceIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                DataSource: string
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                IndexName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                DataSource: string
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                IndexName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                DataSource: string
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                IndexName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                DataSource: string
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                IndexName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                DataSource: string
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                IndexName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                DataSource: string
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                IndexName: string
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/routes/v0/calculators': {
      $post:
        | {
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
                CalculatorName: string
                DataSource: string
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateRouteCalculatorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                CalculatorName: string
                DataSource: string
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                CalculatorName: string
                DataSource: string
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                CalculatorName: string
                DataSource: string
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                CalculatorName: string
                DataSource: string
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                CalculatorName: string
                DataSource: string
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 484
          }
        | {
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
                CalculatorName: string
                DataSource: string
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                Tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/tracking/v0/trackers': {
      $post:
        | {
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
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                TrackerName: string
              }
            }
            output: CreateTrackerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
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
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                TrackerName: string
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                TrackerName: string
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 481
          }
        | {
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
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                TrackerName: string
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                TrackerName: string
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
                Description?: string | undefined
                KmsKeyId?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
                Tags?: { [x: string]: TagValue } | undefined
                TrackerName: string
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/geofencing/v0/collections/:CollectionName': {
      $delete:
        | {
            input: { param: { CollectionName: string } } & {
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
            output: DeleteGeofenceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { CollectionName: string } } & {
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
            output: DescribeGeofenceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CollectionName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { CollectionName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: UpdateGeofenceCollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CollectionName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CollectionName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CollectionName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CollectionName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CollectionName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/metadata/v0/keys/:KeyName': {
      $delete:
        | {
            input: { param: { KeyName: string } } & {
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
            output: DeleteKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { KeyName: string } } & {
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
            output: DescribeKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { KeyName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { KeyName: string } } & {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                ForceUpdate?: boolean | undefined
                NoExpiry?: boolean | undefined
                Restrictions?:
                  | {
                      AllowActions?: {} | undefined
                      AllowReferers?: {} | undefined
                      AllowResources?: {} | undefined
                    }
                  | undefined
              }
            }
            output: UpdateKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { KeyName: string } } & {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                ForceUpdate?: boolean | undefined
                NoExpiry?: boolean | undefined
                Restrictions?:
                  | {
                      AllowActions?: {} | undefined
                      AllowReferers?: {} | undefined
                      AllowResources?: {} | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { KeyName: string } } & {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                ForceUpdate?: boolean | undefined
                NoExpiry?: boolean | undefined
                Restrictions?:
                  | {
                      AllowActions?: {} | undefined
                      AllowReferers?: {} | undefined
                      AllowResources?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { KeyName: string } } & {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                ForceUpdate?: boolean | undefined
                NoExpiry?: boolean | undefined
                Restrictions?:
                  | {
                      AllowActions?: {} | undefined
                      AllowReferers?: {} | undefined
                      AllowResources?: {} | undefined
                    }
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { KeyName: string } } & {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                ForceUpdate?: boolean | undefined
                NoExpiry?: boolean | undefined
                Restrictions?:
                  | {
                      AllowActions?: {} | undefined
                      AllowReferers?: {} | undefined
                      AllowResources?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { KeyName: string } } & {
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
                Description?: string | undefined
                ExpireTime?: string | undefined
                ForceUpdate?: boolean | undefined
                NoExpiry?: boolean | undefined
                Restrictions?:
                  | {
                      AllowActions?: {} | undefined
                      AllowReferers?: {} | undefined
                      AllowResources?: {} | undefined
                    }
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/maps/v0/maps/:MapName': {
      $delete:
        | {
            input: { param: { MapName: string } } & {
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
            output: DeleteMapResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { MapName: string } } & {
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
            output: DescribeMapResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { MapName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { MapName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: UpdateMapResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { MapName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { MapName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { MapName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { MapName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { MapName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/places/v0/indexes/:IndexName': {
      $delete:
        | {
            input: { param: { IndexName: string } } & {
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
            output: DeletePlaceIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { IndexName: string } } & {
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
            output: DescribePlaceIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IndexName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { IndexName: string } } & {
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
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: UpdatePlaceIndexResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IndexName: string } } & {
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
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IndexName: string } } & {
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
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IndexName: string } } & {
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
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IndexName: string } } & {
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
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IndexName: string } } & {
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
                DataSourceConfiguration?: { IntendedUse?: {} | undefined } | undefined
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/routes/v0/calculators/:CalculatorName': {
      $delete:
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: DeleteRouteCalculatorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: DescribeRouteCalculatorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { CalculatorName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: UpdateRouteCalculatorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CalculatorName: string } } & {
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
                Description?: string | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tracking/v0/trackers/:TrackerName': {
      $delete:
        | {
            input: { param: { TrackerName: string } } & {
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
            output: DeleteTrackerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $get:
        | {
            input: { param: { TrackerName: string } } & {
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
            output: DescribeTrackerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { TrackerName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $patch:
        | {
            input: { param: { TrackerName: string } } & {
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
                Description?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: UpdateTrackerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackerName: string } } & {
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
                Description?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TrackerName: string } } & {
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
                Description?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TrackerName: string } } & {
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
                Description?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TrackerName: string } } & {
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
                Description?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { TrackerName: string } } & {
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
                Description?: string | undefined
                PositionFiltering?: 'TimeBased' | 'DistanceBased' | 'AccuracyBased' | undefined
                PricingPlan?:
                  | 'RequestBasedUsage'
                  | 'MobileAssetTracking'
                  | 'MobileAssetManagement'
                  | undefined
                PricingPlanDataSource?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tracking/v0/trackers/:TrackerName/consumers/:ConsumerArn': {
      $delete:
        | {
            input: { param: { ConsumerArn: string; TrackerName: string } } & {
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
            output: DisassociateTrackerConsumerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ConsumerArn: string; TrackerName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ConsumerArn: string; TrackerName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ConsumerArn: string; TrackerName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ConsumerArn: string; TrackerName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ConsumerArn: string; TrackerName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tracking/v0/trackers/:TrackerName/devices/:DeviceId/positions/latest': {
      $get:
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
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
            output: GetDevicePositionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tracking/v0/trackers/:TrackerName/devices/:DeviceId/list-positions': {
      $post:
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                EndTimeExclusive?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
                StartTimeInclusive?: string | undefined
              }
            }
            output: GetDevicePositionHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                EndTimeExclusive?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
                StartTimeInclusive?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                EndTimeExclusive?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
                StartTimeInclusive?: string | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                EndTimeExclusive?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
                StartTimeInclusive?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                EndTimeExclusive?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
                StartTimeInclusive?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { DeviceId: string; TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                EndTimeExclusive?: string | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
                StartTimeInclusive?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/geofencing/v0/collections/:CollectionName/geofences/:GeofenceId': {
      $get:
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
            output: GetGeofenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $put:
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
                Geometry: {
                  Circle?: { Center: {}; Radius: {} } | undefined
                  Polygon?: {} | undefined
                }
              }
            }
            output: PutGeofenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
                Geometry: {
                  Circle?: { Center: {}; Radius: {} } | undefined
                  Polygon?: {} | undefined
                }
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
                Geometry: {
                  Circle?: { Center: {}; Radius: {} } | undefined
                  Polygon?: {} | undefined
                }
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
                Geometry: {
                  Circle?: { Center: {}; Radius: {} } | undefined
                  Polygon?: {} | undefined
                }
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
                Geometry: {
                  Circle?: { Center: {}; Radius: {} } | undefined
                  Polygon?: {} | undefined
                }
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
                Geometry: {
                  Circle?: { Center: {}; Radius: {} } | undefined
                  Polygon?: {} | undefined
                }
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { CollectionName: string; GeofenceId: string } } & {
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
                Geometry: {
                  Circle?: { Center: {}; Radius: {} } | undefined
                  Polygon?: {} | undefined
                }
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/maps/v0/maps/:MapName/glyphs/:FontStack/:FontUnicodeRange': {
      $get:
        | {
            input: { param: { FontStack: string; FontUnicodeRange: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: GetMapGlyphsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FontStack: string; FontUnicodeRange: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FontStack: string; FontUnicodeRange: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FontStack: string; FontUnicodeRange: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FontStack: string; FontUnicodeRange: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FontStack: string; FontUnicodeRange: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/maps/v0/maps/:MapName/sprites/:FileName': {
      $get:
        | {
            input: { param: { FileName: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: GetMapSpritesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { FileName: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { FileName: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { FileName: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { FileName: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { FileName: string; MapName: string } } & {
              query: { key?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/maps/v0/maps/:MapName/style-descriptor': {
      $get:
        | {
            input: { param: { MapName: string } } & { query: { key?: string | undefined } } & {
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
            output: GetMapStyleDescriptorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { MapName: string } } & { query: { key?: string | undefined } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { MapName: string } } & { query: { key?: string | undefined } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { MapName: string } } & { query: { key?: string | undefined } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { MapName: string } } & { query: { key?: string | undefined } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { MapName: string } } & { query: { key?: string | undefined } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/maps/v0/maps/:MapName/tiles/:Z/:X/:Y': {
      $get:
        | {
            input: { param: { MapName: string; X: string; Y: string; Z: string } } & {
              query: { key?: string | undefined }
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
            output: GetMapTileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { MapName: string; X: string; Y: string; Z: string } } & {
              query: { key?: string | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { MapName: string; X: string; Y: string; Z: string } } & {
              query: { key?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { MapName: string; X: string; Y: string; Z: string } } & {
              query: { key?: string | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { MapName: string; X: string; Y: string; Z: string } } & {
              query: { key?: string | undefined }
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { MapName: string; X: string; Y: string; Z: string } } & {
              query: { key?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/places/v0/indexes/:IndexName/places/:PlaceId': {
      $get:
        | {
            input: { param: { IndexName: string; PlaceId: string } } & {
              query: { language?: string | undefined }
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
            output: GetPlaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IndexName: string; PlaceId: string } } & {
              query: { language?: string | undefined }
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IndexName: string; PlaceId: string } } & {
              query: { language?: string | undefined }
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IndexName: string; PlaceId: string } } & {
              query: { language?: string | undefined }
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IndexName: string; PlaceId: string } } & {
              query: { language?: string | undefined }
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IndexName: string; PlaceId: string } } & {
              query: { language?: string | undefined }
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tracking/v0/trackers/:TrackerName/list-positions': {
      $post:
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ListDevicePositionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/geofencing/v0/list-collections': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ListGeofenceCollectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/geofencing/v0/collections/:CollectionName/list-geofences': {
      $post:
        | {
            input: { param: { CollectionName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ListGeofencesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { CollectionName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { CollectionName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { CollectionName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { CollectionName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { CollectionName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/metadata/v0/list-keys': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                Filter?: { KeyStatus?: {} | undefined } | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: ListKeysResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                Filter?: { KeyStatus?: {} | undefined } | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                Filter?: { KeyStatus?: {} | undefined } | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                Filter?: { KeyStatus?: {} | undefined } | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & {
              json: {
                Filter?: { KeyStatus?: {} | undefined } | undefined
                MaxResults?: number | undefined
                NextToken?: string | undefined
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/maps/v0/list-maps': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ListMapsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/places/v0/list-indexes': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ListPlaceIndexesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/routes/v0/list-calculators': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ListRouteCalculatorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/tags/:ResourceArn': {
      $get:
        | {
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
        | {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
      $post:
        | {
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
        | {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tracking/v0/trackers/:TrackerName/list-consumers': {
      $post:
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ListTrackerConsumersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { TrackerName: string } } & {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tracking/v0/list-trackers': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ListTrackersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
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
            } & { json: { MaxResults?: number | undefined; NextToken?: string | undefined } }
            output: ThrottlingException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/places/v0/indexes/:IndexName/search/position': {
      $post:
        | {
            input: { param: { IndexName: string } } & {
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
                Language?: string | undefined
                MaxResults?: number | undefined
                Position: Double[]
              }
            }
            output: SearchPlaceIndexForPositionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IndexName: string } } & {
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
                Language?: string | undefined
                MaxResults?: number | undefined
                Position: Double[]
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IndexName: string } } & {
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
                Language?: string | undefined
                MaxResults?: number | undefined
                Position: Double[]
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IndexName: string } } & {
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
                Language?: string | undefined
                MaxResults?: number | undefined
                Position: Double[]
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IndexName: string } } & {
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
                Language?: string | undefined
                MaxResults?: number | undefined
                Position: Double[]
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IndexName: string } } & {
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
                Language?: string | undefined
                MaxResults?: number | undefined
                Position: Double[]
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/places/v0/indexes/:IndexName/search/suggestions': {
      $post:
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: SearchPlaceIndexForSuggestionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/places/v0/indexes/:IndexName/search/text': {
      $post:
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: SearchPlaceIndexForTextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { IndexName: string } } & {
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
                BiasPosition?: Double[] | undefined
                FilterBBox?: Double[] | undefined
                FilterCountries?: CountryCode[] | undefined
                Language?: string | undefined
                MaxResults?: number | undefined
                Text: string
              }
            }
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/tags/:ResourceArn#tagKeys': {
      $delete:
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: String[] } } & {
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
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: String[] } } & {
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
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: String[] } } & {
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
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: String[] } } & {
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
            output: AccessDeniedException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: String[] } } & {
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
            output: ValidationException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { ResourceArn: string } } & { query: { tagKeys: String[] } } & {
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
            output: ThrottlingException
            outputFormat: 'json'
            status: 484
          }
    }
  },
  '/'
>
export default routes
