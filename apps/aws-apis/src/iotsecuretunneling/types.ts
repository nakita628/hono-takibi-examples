type CloseTunnelRequest = { tunnelId: {}; delete?: {} | undefined }
type CloseTunnelResponse = { [x: string]: unknown }
type DescribeTunnelRequest = { tunnelId: {} }
type DescribeTunnelResponse = {
  tunnel?:
    | {
        tunnelId?: {} | undefined
        tunnelArn?: {} | undefined
        status?: {} | undefined
        sourceConnectionState?:
          | { status?: {} | undefined; lastUpdatedAt?: {} | undefined }
          | undefined
        destinationConnectionState?:
          | { status?: {} | undefined; lastUpdatedAt?: {} | undefined }
          | undefined
        description?: {} | undefined
        destinationConfig?: { thingName?: {} | undefined; services: {} } | undefined
        timeoutConfig?: { maxLifetimeTimeoutMinutes?: {} | undefined } | undefined
        tags?: {} | undefined
        createdAt?: {} | undefined
        lastUpdatedAt?: {} | undefined
      }
    | undefined
}
type ListTagsForResourceRequest = { resourceArn: {} }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type ListTunnelsRequest = {
  thingName?: {} | undefined
  maxResults?: {} | undefined
  nextToken?: {} | undefined
}
type ListTunnelsResponse = { tunnelSummaries?: {} | undefined; nextToken?: {} | undefined }
type OpenTunnelRequest = {
  description?: {} | undefined
  tags?: {} | undefined
  destinationConfig?: { thingName?: {} | undefined; services: {} } | undefined
  timeoutConfig?: { maxLifetimeTimeoutMinutes?: {} | undefined } | undefined
}
type OpenTunnelResponse = {
  tunnelId?: {} | undefined
  tunnelArn?: {} | undefined
  sourceAccessToken?: {} | undefined
  destinationAccessToken?: {} | undefined
}
type DestinationConfig = { thingName?: {} | undefined; services: {} }
type RotateTunnelAccessTokenRequest = {
  tunnelId: {}
  clientMode: {}
  destinationConfig?: DestinationConfig | undefined
}
type RotateTunnelAccessTokenResponse = {
  tunnelArn?: {} | undefined
  sourceAccessToken?: {} | undefined
  destinationAccessToken?: {} | undefined
}
type TagResourceRequest = { resourceArn: {}; tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { resourceArn: {}; tagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=IoTSecuredTunneling.CloseTunnel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IoTSecuredTunneling.CloseTunnel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CloseTunnelRequest }
        output: CloseTunnelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IoTSecuredTunneling.DescribeTunnel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTunnelRequest }
        output: DescribeTunnelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IoTSecuredTunneling.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IoTSecuredTunneling.ListTunnels': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'IoTSecuredTunneling.ListTunnels'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTunnelsRequest }
        output: ListTunnelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IoTSecuredTunneling.OpenTunnel': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IoTSecuredTunneling.OpenTunnel'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: OpenTunnelRequest }
        output: OpenTunnelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IoTSecuredTunneling.RotateTunnelAccessToken'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RotateTunnelAccessTokenRequest }
        output: RotateTunnelAccessTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IoTSecuredTunneling.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IoTSecuredTunneling.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=IoTSecuredTunneling.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'IoTSecuredTunneling.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
