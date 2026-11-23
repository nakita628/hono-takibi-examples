type ClaimDevicesByClaimCodeResponse = { ClaimCode?: {} | undefined; Total?: {} | undefined }
type DescribeDeviceResponse = {
  DeviceDescription?:
    | {
        Arn?: {} | undefined
        Attributes?: {} | undefined
        DeviceId?: {} | undefined
        Enabled?: {} | undefined
        RemainingLife?: {} | undefined
        Type?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type String = string
type FinalizeDeviceClaimResponse = { State?: {} | undefined }
type GetDeviceMethodsResponse = { DeviceMethods?: {} | undefined }
type InvokeDeviceMethodResponse = { DeviceMethodResponse?: {} | undefined }
type InitiateDeviceClaimResponse = { State?: {} | undefined }
type ListDeviceEventsResponse = { Events?: {} | undefined; NextToken?: {} | undefined }
type ListDevicesResponse = { Devices?: {} | undefined; NextToken?: {} | undefined }
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type UnclaimDeviceResponse = { State?: {} | undefined }
type UpdateDeviceStateResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/claims/:claimCode': {
      $put: {
        input: { param: { claimCode: string } } & {
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
        output: ClaimDevicesByClaimCodeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:deviceId': {
      $get: {
        input: { param: { deviceId: string } } & {
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
        output: DescribeDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:deviceId/finalize-claim': {
      $put: {
        input: { param: { deviceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags?: { [x: string]: String } | undefined } }
        output: FinalizeDeviceClaimResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:deviceId/methods': {
      $get: {
        input: { param: { deviceId: string } } & {
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
        output: GetDeviceMethodsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { deviceId: string } } & {
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
            deviceMethod?: { DeviceType?: {} | undefined; MethodName?: {} | undefined } | undefined
            deviceMethodParameters?: string | undefined
          }
        }
        output: InvokeDeviceMethodResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:deviceId/initiate-claim': {
      $put: {
        input: { param: { deviceId: string } } & {
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
        output: InitiateDeviceClaimResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices/:deviceId/events#fromTimeStamp&toTimeStamp': {
      $get: {
        input: { param: { deviceId: string } } & {
          query: {
            fromTimeStamp: string
            maxResults?: number | undefined
            nextToken?: string | undefined
            toTimeStamp: string
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
        output: ListDeviceEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/devices': {
      $get: {
        input: {
          query: {
            deviceType?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resource-arn': {
      $get: {
        input: { param: { 'resource-arn': string } } & {
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
        input: { param: { 'resource-arn': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: String } } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/devices/:deviceId/unclaim': {
      $put: {
        input: { param: { deviceId: string } } & {
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
        output: UnclaimDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resource-arn#tagKeys': {
      $delete: {
        input: { param: { 'resource-arn': string } } & { query: { tagKeys: String[] } } & {
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
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/devices/:deviceId/state': {
      $put: {
        input: { param: { deviceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { enabled?: boolean | undefined } }
        output: UpdateDeviceStateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
