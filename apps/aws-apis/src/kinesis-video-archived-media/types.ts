type GetClipOutput = { Payload?: {} | undefined }
type GetDASHStreamingSessionURLOutput = { DASHStreamingSessionURL?: {} | undefined }
type GetHLSStreamingSessionURLOutput = { HLSStreamingSessionURL?: {} | undefined }
type FormatConfigValue = string
type GetImagesOutput = { Images?: {} | undefined; NextToken?: {} | undefined }
type FragmentNumberString = string
type GetMediaForFragmentListOutput = { Payload?: {} | undefined }
type ListFragmentsOutput = { Fragments?: {} | undefined; NextToken?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/getClip': {
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
            StreamName?: string | undefined
            StreamARN?: string | undefined
            ClipFragmentSelector: {
              FragmentSelectorType?: {} | undefined
              TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
            }
          }
        }
        output: GetClipOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getDASHStreamingSessionURL': {
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
            StreamName?: string | undefined
            StreamARN?: string | undefined
            PlaybackMode?: 'LIVE' | 'LIVE_REPLAY' | 'ON_DEMAND' | undefined
            DisplayFragmentTimestamp?: 'ALWAYS' | 'NEVER' | undefined
            DisplayFragmentNumber?: 'ALWAYS' | 'NEVER' | undefined
            DASHFragmentSelector?:
              | {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?:
                    | { StartTimestamp?: {} | undefined; EndTimestamp?: {} | undefined }
                    | undefined
                }
              | undefined
            Expires?: number | undefined
            MaxManifestFragmentResults?: number | undefined
          }
        }
        output: GetDASHStreamingSessionURLOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getHLSStreamingSessionURL': {
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
            StreamName?: string | undefined
            StreamARN?: string | undefined
            PlaybackMode?: 'LIVE' | 'LIVE_REPLAY' | 'ON_DEMAND' | undefined
            HLSFragmentSelector?:
              | {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?:
                    | { StartTimestamp?: {} | undefined; EndTimestamp?: {} | undefined }
                    | undefined
                }
              | undefined
            ContainerFormat?: 'FRAGMENTED_MP4' | 'MPEG_TS' | undefined
            DiscontinuityMode?: 'ALWAYS' | 'NEVER' | 'ON_DISCONTINUITY' | undefined
            DisplayFragmentTimestamp?: 'ALWAYS' | 'NEVER' | undefined
            Expires?: number | undefined
            MaxMediaPlaylistFragmentResults?: number | undefined
          }
        }
        output: GetHLSStreamingSessionURLOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getImages': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            StreamName?: string | undefined
            StreamARN?: string | undefined
            ImageSelectorType: 'PRODUCER_TIMESTAMP' | 'SERVER_TIMESTAMP'
            StartTimestamp: string
            EndTimestamp: string
            SamplingInterval: number
            Format: 'JPEG' | 'PNG'
            FormatConfig?: { [x: string]: FormatConfigValue } | undefined
            WidthPixels?: number | undefined
            HeightPixels?: number | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
          }
        }
        output: GetImagesOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/getMediaForFragmentList': {
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
            StreamName?: string | undefined
            StreamARN?: string | undefined
            Fragments: FragmentNumberString[]
          }
        }
        output: GetMediaForFragmentListOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/listFragments': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
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
            StreamName?: string | undefined
            StreamARN?: string | undefined
            MaxResults?: number | undefined
            NextToken?: string | undefined
            FragmentSelector?:
              | {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              | undefined
          }
        }
        output: ListFragmentsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
