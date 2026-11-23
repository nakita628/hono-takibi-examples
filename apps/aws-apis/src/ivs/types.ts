type ChannelArn = string
type BatchGetChannelResponse = { channels?: {} | undefined; errors?: {} | undefined }
type StreamKeyArn = string
type BatchGetStreamKeyResponse = { errors?: {} | undefined; streamKeys?: {} | undefined }
type TagValue = string
type CreateChannelResponse = {
  channel?:
    | {
        arn?: {} | undefined
        authorized?: {} | undefined
        ingestEndpoint?: {} | undefined
        insecureIngest?: {} | undefined
        latencyMode?: {} | undefined
        name?: {} | undefined
        playbackUrl?: {} | undefined
        recordingConfigurationArn?: {} | undefined
        tags?: {} | undefined
        type?: {} | undefined
      }
    | undefined
  streamKey?:
    | {
        arn?: {} | undefined
        channelArn?: {} | undefined
        tags?: {} | undefined
        value?: {} | undefined
      }
    | undefined
}
type CreateRecordingConfigurationResponse = {
  recordingConfiguration?:
    | {
        arn: {}
        destinationConfiguration: { s3?: { bucketName: {} } | undefined }
        name?: {} | undefined
        recordingReconnectWindowSeconds?: {} | undefined
        state: {}
        tags?: {} | undefined
        thumbnailConfiguration?:
          | { recordingMode?: {} | undefined; targetIntervalSeconds?: {} | undefined }
          | undefined
      }
    | undefined
}
type CreateStreamKeyResponse = {
  streamKey?:
    | {
        arn?: {} | undefined
        channelArn?: {} | undefined
        tags?: {} | undefined
        value?: {} | undefined
      }
    | undefined
}
type DeletePlaybackKeyPairResponse = { [x: string]: unknown }
type GetChannelResponse = {
  channel?:
    | {
        arn?: {} | undefined
        authorized?: {} | undefined
        ingestEndpoint?: {} | undefined
        insecureIngest?: {} | undefined
        latencyMode?: {} | undefined
        name?: {} | undefined
        playbackUrl?: {} | undefined
        recordingConfigurationArn?: {} | undefined
        tags?: {} | undefined
        type?: {} | undefined
      }
    | undefined
}
type GetPlaybackKeyPairResponse = {
  keyPair?:
    | {
        arn?: {} | undefined
        fingerprint?: {} | undefined
        name?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type GetRecordingConfigurationResponse = {
  recordingConfiguration?:
    | {
        arn: {}
        destinationConfiguration: { s3?: { bucketName: {} } | undefined }
        name?: {} | undefined
        recordingReconnectWindowSeconds?: {} | undefined
        state: {}
        tags?: {} | undefined
        thumbnailConfiguration?:
          | { recordingMode?: {} | undefined; targetIntervalSeconds?: {} | undefined }
          | undefined
      }
    | undefined
}
type GetStreamResponse = {
  stream?:
    | {
        channelArn?: {} | undefined
        health?: {} | undefined
        playbackUrl?: {} | undefined
        startTime?: {} | undefined
        state?: {} | undefined
        streamId?: {} | undefined
        viewerCount?: {} | undefined
      }
    | undefined
}
type GetStreamKeyResponse = {
  streamKey?:
    | {
        arn?: {} | undefined
        channelArn?: {} | undefined
        tags?: {} | undefined
        value?: {} | undefined
      }
    | undefined
}
type GetStreamSessionResponse = {
  streamSession?:
    | {
        channel?:
          | {
              arn?: {} | undefined
              authorized?: {} | undefined
              ingestEndpoint?: {} | undefined
              insecureIngest?: {} | undefined
              latencyMode?: {} | undefined
              name?: {} | undefined
              playbackUrl?: {} | undefined
              recordingConfigurationArn?: {} | undefined
              tags?: {} | undefined
              type?: {} | undefined
            }
          | undefined
        endTime?: {} | undefined
        ingestConfiguration?:
          | {
              audio?:
                | {
                    channels?: {} | undefined
                    codec?: {} | undefined
                    sampleRate?: {} | undefined
                    targetBitrate?: {} | undefined
                  }
                | undefined
              video?:
                | {
                    avcLevel?: {} | undefined
                    avcProfile?: {} | undefined
                    codec?: {} | undefined
                    encoder?: {} | undefined
                    targetBitrate?: {} | undefined
                    targetFramerate?: {} | undefined
                    videoHeight?: {} | undefined
                    videoWidth?: {} | undefined
                  }
                | undefined
            }
          | undefined
        recordingConfiguration?:
          | {
              arn: {}
              destinationConfiguration: { s3?: { bucketName: {} } | undefined }
              name?: {} | undefined
              recordingReconnectWindowSeconds?: {} | undefined
              state: {}
              tags?: {} | undefined
              thumbnailConfiguration?:
                | { recordingMode?: {} | undefined; targetIntervalSeconds?: {} | undefined }
                | undefined
            }
          | undefined
        startTime?: {} | undefined
        streamId?: {} | undefined
        truncatedEvents?: {} | undefined
      }
    | undefined
}
type ImportPlaybackKeyPairResponse = {
  keyPair?:
    | {
        arn?: {} | undefined
        fingerprint?: {} | undefined
        name?: {} | undefined
        tags?: {} | undefined
      }
    | undefined
}
type ListChannelsResponse = { channels: {}; nextToken?: {} | undefined }
type ListPlaybackKeyPairsResponse = { keyPairs: {}; nextToken?: {} | undefined }
type ListRecordingConfigurationsResponse = {
  nextToken?: {} | undefined
  recordingConfigurations: {}
}
type ListStreamKeysResponse = { nextToken?: {} | undefined; streamKeys: {} }
type ListStreamSessionsResponse = { nextToken?: {} | undefined; streamSessions: {} }
type ListStreamsResponse = { nextToken?: {} | undefined; streams: {} }
type ListTagsForResourceResponse = { tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type StopStreamResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type Channel = {
  arn?: {} | undefined
  authorized?: {} | undefined
  ingestEndpoint?: {} | undefined
  insecureIngest?: {} | undefined
  latencyMode?: {} | undefined
  name?: {} | undefined
  playbackUrl?: {} | undefined
  recordingConfigurationArn?: {} | undefined
  tags?: {} | undefined
  type?: {} | undefined
}
type UpdateChannelResponse = { channel?: Channel | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/BatchGetChannel': {
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
        } & { json: { arns: ChannelArn[] } }
        output: BatchGetChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/BatchGetStreamKey': {
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
        } & { json: { arns: StreamKeyArn[] } }
        output: BatchGetStreamKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateChannel': {
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
            authorized?: boolean | undefined
            insecureIngest?: boolean | undefined
            latencyMode?: 'NORMAL' | 'LOW' | undefined
            name?: string | undefined
            recordingConfigurationArn?: string | undefined
            tags?: { [x: string]: TagValue } | undefined
            type?: 'BASIC' | 'STANDARD' | undefined
          }
        }
        output: CreateChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateRecordingConfiguration': {
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
            destinationConfiguration: { s3?: { bucketName: {} } | undefined }
            name?: string | undefined
            recordingReconnectWindowSeconds?: number | undefined
            tags?: { [x: string]: TagValue } | undefined
            thumbnailConfiguration?:
              | { recordingMode?: {} | undefined; targetIntervalSeconds?: {} | undefined }
              | undefined
          }
        }
        output: CreateRecordingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CreateStreamKey': {
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
        } & { json: { channelArn: string; tags?: { [x: string]: TagValue } | undefined } }
        output: CreateStreamKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteChannel': {
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
        } & { json: { arn: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/DeletePlaybackKeyPair': {
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
        } & { json: { arn: string } }
        output: DeletePlaybackKeyPairResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/DeleteRecordingConfiguration': {
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
        } & { json: { arn: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/DeleteStreamKey': {
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
        } & { json: { arn: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/GetChannel': {
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
        } & { json: { arn: string } }
        output: GetChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetPlaybackKeyPair': {
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
        } & { json: { arn: string } }
        output: GetPlaybackKeyPairResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetRecordingConfiguration': {
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
        } & { json: { arn: string } }
        output: GetRecordingConfigurationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetStream': {
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
        } & { json: { channelArn: string } }
        output: GetStreamResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetStreamKey': {
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
        } & { json: { arn: string } }
        output: GetStreamKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/GetStreamSession': {
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
        } & { json: { channelArn: string; streamId?: string | undefined } }
        output: GetStreamSessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ImportPlaybackKeyPair': {
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
            name?: string | undefined
            publicKeyMaterial: string
            tags?: { [x: string]: TagValue } | undefined
          }
        }
        output: ImportPlaybackKeyPairResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListChannels': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            filterByName?: string | undefined
            filterByRecordingConfigurationArn?: string | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListPlaybackKeyPairs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListPlaybackKeyPairsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListRecordingConfigurations': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { maxResults?: number | undefined; nextToken?: string | undefined } }
        output: ListRecordingConfigurationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListStreamKeys': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            channelArn: string
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListStreamKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListStreamSessions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            channelArn: string
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListStreamSessionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ListStreams': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
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
            filterBy?: { health?: {} | undefined } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListStreamsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
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
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/PutMetadata': {
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
        } & { json: { channelArn: string; metadata: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/StopStream': {
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
        } & { json: { channelArn: string } }
        output: StopStreamResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
    '/UpdateChannel': {
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
            arn: string
            authorized?: boolean | undefined
            insecureIngest?: boolean | undefined
            latencyMode?: 'NORMAL' | 'LOW' | undefined
            name?: string | undefined
            recordingConfigurationArn?: string | undefined
            type?: 'BASIC' | 'STANDARD' | undefined
          }
        }
        output: UpdateChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
