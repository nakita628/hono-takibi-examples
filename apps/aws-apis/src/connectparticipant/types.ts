type ArtifactId = string
type CompleteAttachmentUploadResponse = { [x: string]: unknown }
type ConnectionType = 'WEBSOCKET' | 'CONNECTION_CREDENTIALS'
type CreateParticipantConnectionResponse = {
  Websocket?: { Url?: {} | undefined; ConnectionExpiry?: {} | undefined } | undefined
  ConnectionCredentials?: { ConnectionToken?: {} | undefined; Expiry?: {} | undefined } | undefined
}
type DisconnectParticipantResponse = { [x: string]: unknown }
type GetAttachmentResponse = { Url?: {} | undefined; UrlExpiry?: {} | undefined }
type GetTranscriptResponse = {
  InitialContactId?: {} | undefined
  Transcript?: {} | undefined
  NextToken?: {} | undefined
}
type SendEventResponse = { Id?: {} | undefined; AbsoluteTime?: {} | undefined }
type SendMessageResponse = { Id?: {} | undefined; AbsoluteTime?: {} | undefined }
type StartAttachmentUploadResponse = {
  AttachmentId?: {} | undefined
  UploadMetadata?:
    | { Url?: {} | undefined; UrlExpiry?: {} | undefined; HeadersToInclude?: {} | undefined }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/participant/complete-attachment-upload#X-Amz-Bearer': {
      $post: {
        input: {
          header: {
            'X-Amz-Bearer': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { AttachmentIds: ArtifactId[]; ClientToken: string } }
        output: CompleteAttachmentUploadResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/participant/connection#X-Amz-Bearer': {
      $post: {
        input: {
          header: {
            'X-Amz-Bearer': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: { Type?: ConnectionType[] | undefined; ConnectParticipant?: boolean | undefined }
        }
        output: CreateParticipantConnectionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/participant/disconnect#X-Amz-Bearer': {
      $post: {
        input: {
          header: {
            'X-Amz-Bearer': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ClientToken?: string | undefined } }
        output: DisconnectParticipantResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/participant/attachment#X-Amz-Bearer': {
      $post: {
        input: {
          header: {
            'X-Amz-Bearer': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { AttachmentId: string } }
        output: GetAttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/participant/transcript#X-Amz-Bearer': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Bearer': string
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
            ContactId?: string | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
            ScanDirection?: 'FORWARD' | 'BACKWARD' | undefined
            SortOrder?: 'DESCENDING' | 'ASCENDING' | undefined
            StartPosition?:
              | { Id?: {} | undefined; AbsoluteTime?: {} | undefined; MostRecent?: {} | undefined }
              | undefined
          }
        }
        output: GetTranscriptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/participant/event#X-Amz-Bearer': {
      $post: {
        input: {
          header: {
            'X-Amz-Bearer': string
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
            ContentType: string
            Content?: string | undefined
            ClientToken?: string | undefined
          }
        }
        output: SendEventResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/participant/message#X-Amz-Bearer': {
      $post: {
        input: {
          header: {
            'X-Amz-Bearer': string
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { ContentType: string; Content: string; ClientToken?: string | undefined } }
        output: SendMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/participant/start-attachment-upload#X-Amz-Bearer': {
      $post: {
        input: {
          header: {
            'X-Amz-Bearer': string
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
            ContentType: string
            AttachmentSizeInBytes: number
            AttachmentName: string
            ClientToken: string
          }
        }
        output: StartAttachmentUploadResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
