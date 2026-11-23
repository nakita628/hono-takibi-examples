type GetIceServerConfigResponse = { IceServerList?: {} | undefined }
type SendAlexaOfferToMasterResponse = { Answer?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/get-ice-server-config': {
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
            ChannelARN: string
            ClientId?: string | undefined
            Service?: 'TURN' | undefined
            Username?: string | undefined
          }
        }
        output: GetIceServerConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/send-alexa-offer-to-master': {
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
        } & { json: { ChannelARN: string; SenderClientId: string; MessagePayload: string } }
        output: SendAlexaOfferToMasterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
