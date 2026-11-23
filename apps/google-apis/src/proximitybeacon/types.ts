type AdvertisedId = {
  id?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'EDDYSTONE' | 'IBEACON' | 'ALTBEACON' | 'EDDYSTONE_EID' | undefined
}
type Observation = {
  advertisedId?: AdvertisedId | undefined
  telemetry?: string | undefined
  timestampMs?: string | undefined
}
type GetInfoForObservedBeaconsRequest = {
  namespacedTypes?: string[] | undefined
  observations?: Observation[] | undefined
}
type AttachmentInfo = {
  data?: string | undefined
  maxDistanceMeters?: number | undefined
  namespacedType?: string | undefined
}
type BeaconInfo = {
  advertisedId?: AdvertisedId | undefined
  attachments?: AttachmentInfo[] | undefined
  beaconName?: string | undefined
}
type GetInfoForObservedBeaconsResponse = { beacons?: BeaconInfo[] | undefined }
type EphemeralIdRegistration = {
  beaconEcdhPublicKey?: string | undefined
  beaconIdentityKey?: string | undefined
  initialClockValue?: string | undefined
  initialEid?: string | undefined
  rotationPeriodExponent?: number | undefined
  serviceEcdhPublicKey?: string | undefined
}
type IndoorLevel = { name?: string | undefined }
type LatLng = { latitude?: number | undefined; longitude?: number | undefined }
type Beacon = {
  advertisedId?: AdvertisedId | undefined
  beaconName?: string | undefined
  description?: string | undefined
  ephemeralIdRegistration?: EphemeralIdRegistration | undefined
  expectedStability?:
    | 'STABILITY_UNSPECIFIED'
    | 'STABLE'
    | 'PORTABLE'
    | 'MOBILE'
    | 'ROVING'
    | undefined
  indoorLevel?: IndoorLevel | undefined
  latLng?: LatLng | undefined
  placeId?: string | undefined
  properties?: { [x: string]: string } | undefined
  provisioningKey?: string | undefined
  status?: 'STATUS_UNSPECIFIED' | 'ACTIVE' | 'DECOMMISSIONED' | 'INACTIVE' | undefined
}
type ListBeaconsResponse = {
  beacons?: Beacon[] | undefined
  nextPageToken?: string | undefined
  totalCount?: string | undefined
}
type EphemeralIdRegistrationParams = {
  maxRotationPeriodExponent?: number | undefined
  minRotationPeriodExponent?: number | undefined
  serviceEcdhPublicKey?: string | undefined
}
type Namespace = {
  namespaceName?: string | undefined
  servingVisibility?: 'VISIBILITY_UNSPECIFIED' | 'UNLISTED' | 'PUBLIC' | undefined
}
type ListNamespacesResponse = { namespaces?: Namespace[] | undefined }
type Empty = { [x: string]: unknown }
type BeaconAttachment = {
  attachmentName?: string | undefined
  creationTimeMs?: string | undefined
  data?: string | undefined
  maxDistanceMeters?: number | undefined
  namespacedType?: string | undefined
}
type ListBeaconAttachmentsResponse = { attachments?: BeaconAttachment[] | undefined }
type DeleteAttachmentsResponse = { numDeleted?: number | undefined }
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type Diagnostics = {
  alerts?: ('ALERT_UNSPECIFIED' | 'WRONG_LOCATION' | 'LOW_BATTERY' | 'LOW_ACTIVITY')[] | undefined
  beaconName?: string | undefined
  estimatedLowBatteryDate?: Date | undefined
}
type ListDiagnosticsResponse = {
  diagnostics?: Diagnostics[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/beaconinfo:getforobserved': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GetInfoForObservedBeaconsRequest }
        output: GetInfoForObservedBeaconsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/beacons': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            projectId?: string | undefined
            q?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListBeaconsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/beacons:register': {
      $post: {
        input: {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Beacon }
        output: Beacon
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/eidparams': {
      $get: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: EphemeralIdRegistrationParams
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/namespaces': {
      $get: {
        input: {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListNamespacesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:attachmentName': {
      $delete: {
        input: { param: { attachmentName: string } } & {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:beaconName': {
      $delete: {
        input: { param: { beaconName: string } } & {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { beaconName: string } } & {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Beacon
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { beaconName: string } } & {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Beacon }
        output: Beacon
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:beaconName/attachments': {
      $get: {
        input: { param: { beaconName: string } } & {
          query: {
            namespacedType?: string | undefined
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListBeaconAttachmentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { beaconName: string } } & {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BeaconAttachment }
        output: BeaconAttachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:beaconName/attachments:batchDelete': {
      $post: {
        input: { param: { beaconName: string } } & {
          query: {
            namespacedType?: string | undefined
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DeleteAttachmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:beaconName/diagnostics': {
      $get: {
        input: { param: { beaconName: string } } & {
          query: {
            alertFilter?:
              | 'ALERT_UNSPECIFIED'
              | 'WRONG_LOCATION'
              | 'LOW_BATTERY'
              | 'LOW_ACTIVITY'
              | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListDiagnosticsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:beaconName:activate': {
      $post: {
        input: { param: { beaconName: string } } & {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:beaconName:deactivate': {
      $post: {
        input: { param: { beaconName: string } } & {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:beaconName:decommission': {
      $post: {
        input: { param: { beaconName: string } } & {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:namespaceName': {
      $put: {
        input: { param: { namespaceName: string } } & {
          query: {
            projectId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Namespace }
        output: Namespace
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
