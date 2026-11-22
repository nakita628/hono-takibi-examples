type GetClipOutput = { Payload?: {} | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type InvalidArgumentException = { [x: string]: unknown }
type ClientLimitExceededException = { [x: string]: unknown }
type NotAuthorizedException = { [x: string]: unknown }
type UnsupportedStreamMediaTypeException = { [x: string]: unknown }
type MissingCodecPrivateDataException = { [x: string]: unknown }
type InvalidCodecPrivateDataException = { [x: string]: unknown }
type InvalidMediaFrameException = { [x: string]: unknown }
type NoDataRetentionException = { [x: string]: unknown }
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ClipFragmentSelector: {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              }
            }
            output: ResourceNotFoundException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ClipFragmentSelector: {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              }
            }
            output: InvalidArgumentException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ClipFragmentSelector: {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              }
            }
            output: ClientLimitExceededException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ClipFragmentSelector: {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              }
            }
            output: NotAuthorizedException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ClipFragmentSelector: {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              }
            }
            output: UnsupportedStreamMediaTypeException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ClipFragmentSelector: {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              }
            }
            output: MissingCodecPrivateDataException
            outputFormat: 'json'
            status: 485
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ClipFragmentSelector: {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              }
            }
            output: InvalidCodecPrivateDataException
            outputFormat: 'json'
            status: 486
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ClipFragmentSelector: {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              }
            }
            output: InvalidMediaFrameException
            outputFormat: 'json'
            status: 487
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                ClipFragmentSelector: {
                  FragmentSelectorType?: {} | undefined
                  TimestampRange?: { StartTimestamp: {}; EndTimestamp: {} } | undefined
                }
              }
            }
            output: NoDataRetentionException
            outputFormat: 'json'
            status: 488
          }
    }
  } & {
    '/getDASHStreamingSessionURL': {
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
            output: ResourceNotFoundException
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
            output: InvalidArgumentException
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
            output: ClientLimitExceededException
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
            output: NotAuthorizedException
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
            output: UnsupportedStreamMediaTypeException
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
            output: NoDataRetentionException
            outputFormat: 'json'
            status: 485
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
            output: MissingCodecPrivateDataException
            outputFormat: 'json'
            status: 486
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
            output: InvalidCodecPrivateDataException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/getHLSStreamingSessionURL': {
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
            output: ResourceNotFoundException
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
            output: InvalidArgumentException
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
            output: ClientLimitExceededException
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
            output: NotAuthorizedException
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
            output: UnsupportedStreamMediaTypeException
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
            output: NoDataRetentionException
            outputFormat: 'json'
            status: 485
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
            output: MissingCodecPrivateDataException
            outputFormat: 'json'
            status: 486
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
            output: InvalidCodecPrivateDataException
            outputFormat: 'json'
            status: 487
          }
    }
  } & {
    '/getImages': {
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
            output: ResourceNotFoundException
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
            output: InvalidArgumentException
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
            output: ClientLimitExceededException
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
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/getMediaForFragmentList': {
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                Fragments: FragmentNumberString[]
              }
            }
            output: GetMediaForFragmentListOutput
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                Fragments: FragmentNumberString[]
              }
            }
            output: ResourceNotFoundException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                Fragments: FragmentNumberString[]
              }
            }
            output: InvalidArgumentException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                Fragments: FragmentNumberString[]
              }
            }
            output: ClientLimitExceededException
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
                StreamName?: string | undefined
                StreamARN?: string | undefined
                Fragments: FragmentNumberString[]
              }
            }
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/listFragments': {
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
            output: ResourceNotFoundException
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
            output: InvalidArgumentException
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
            output: ClientLimitExceededException
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
            output: NotAuthorizedException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
