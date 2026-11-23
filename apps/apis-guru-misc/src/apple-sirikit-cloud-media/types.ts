type ExtensionConfigTag = string
type ExtensionConfig = {
  hdr?: { [x: string]: unknown } | undefined
  intent: {
    addMedia?: { hdr?: { [x: string]: unknown } | undefined; url?: string | undefined } | undefined
    hdr?: { [x: string]: unknown } | undefined
    playMedia: { hdr?: { [x: string]: unknown } | undefined; url?: string | undefined }
    updateMediaAffinity?:
      | { hdr?: { [x: string]: unknown } | undefined; url?: string | undefined }
      | undefined
  }
  media: {
    queues?:
      | {
          hdr?: { [x: string]: unknown } | undefined
          playMedia?:
            | { hdr?: { [x: string]: unknown } | undefined; url?: string | undefined }
            | undefined
          updateActivity?:
            | { hdr?: { [x: string]: unknown } | undefined; url?: string | undefined }
            | undefined
        }
      | undefined
  }
  url?: string | undefined
  version: string
}
type Constraints = {
  allowExplicitContent?: boolean | undefined
  maximumQueueSegmentItemCount?: number | undefined
  updateUserTasteProfile?: boolean | undefined
}
type ContentIdentifier = string
type QueueIdentifier = string
type PlayerContext = {
  activityIdentifier?: string | undefined
  contentIdentifier?: ContentIdentifier | undefined
  offsetInMillis?: bigint | undefined
  playbackSpeed?: number | undefined
  queueIdentifier?: QueueIdentifier | undefined
}
type Session = {
  constraints: Constraints
  deadline: string
  identifier: string
  playerContext?: PlayerContext | undefined
  requested: string
  version: string
}
type AddMediaIntentHandlingInvocation = {
  method: string
  params: { [x: string]: unknown } | null
  session?: Session | undefined
}
type ServiceDebugReference = string
type ExecutionMetrics = {
  completed?: string | undefined
  duration?: number | undefined
  received?: string | undefined
}
type AddMediaIntentHandlingResolveMediaItemsInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type AddMediaIntentHandlingResolveMediaDestinationInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type AddMediaIntentHandlingConfirmInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type AddMediaIntentHandlingHandleInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type ProtocolExceptionInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type AddMediaIntentHandlingInvocationResponse =
  | AddMediaIntentHandlingResolveMediaItemsInvocationResponse
  | AddMediaIntentHandlingResolveMediaDestinationInvocationResponse
  | AddMediaIntentHandlingConfirmInvocationResponse
  | AddMediaIntentHandlingHandleInvocationResponse
  | ProtocolExceptionInvocationResponse
type PlayMediaIntentHandlingInvocation = {
  method: string
  params: { [x: string]: unknown } | null
  session?: Session | undefined
}
type PlayMediaIntentHandlingResolveMediaItemsInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type PlayMediaIntentHandlingHandleInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type PlayMediaIntentHandlingInvocationResponse =
  | PlayMediaIntentHandlingResolveMediaItemsInvocationResponse
  | PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse
  | PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse
  | PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse
  | PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse
  | PlayMediaIntentHandlingHandleInvocationResponse
  | ProtocolExceptionInvocationResponse
type UpdateMediaAffinityIntentHandlingInvocation = {
  method: string
  params: { [x: string]: unknown } | null
  session?: Session | undefined
}
type UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type UpdateMediaAffinityIntentHandlingHandleInvocationResponse = {
  debug?: ServiceDebugReference | undefined
  method: string
  metrics?: ExecutionMetrics | undefined
  result: { [x: string]: unknown } | null
}
type UpdateMediaAffinityIntentHandlingInvocationResponse =
  | UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse
  | UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse
  | UpdateMediaAffinityIntentHandlingHandleInvocationResponse
  | ProtocolExceptionInvocationResponse
type UserActivity = {
  activityType: string
  persistentIdentifier?: string | undefined
  title?: string | undefined
  userInfo?: { [x: string]: unknown } | undefined
  version: string
} | null
type PlayMediaRequest = { constraints: Constraints; userActivity: UserActivity; version: string }
type ContentAttributes = {
  albumName?: string | undefined
  artistName?: string | undefined
  artwork?: { url?: string | undefined } | undefined
  composerName?: string | undefined
  durationInMillis?: bigint | undefined
  genreNames?: string[] | undefined
  name?: string | undefined
  trackNumber?: number | undefined
}
type Content = {
  attributes?: ContentAttributes | undefined
  control?: string | undefined
  identifier: ContentIdentifier
  isLive?: boolean | undefined
  playIndex?: bigint | undefined
  url?: string | undefined
}
type PlayMediaControlActivity = {
  playElapsed?: number | undefined
  playElapsedInterval?: number | undefined
  playPaused?: number | undefined
}
type PlayMediaControlCommandSet = {
  bookmarkTrack?: boolean | undefined
  dislikeTrack?: boolean | undefined
  likeTrack?: boolean | undefined
  nextTrack?: boolean | undefined
  preferSkipBackward?: boolean | undefined
  preferSkipForward?: boolean | undefined
  previousTrack?: boolean | undefined
  seekToPlaybackPosition?: boolean | undefined
  skipBackward?: boolean | undefined
  skipForward?: boolean | undefined
}
type PlayMediaControlScheme =
  | 'custom'
  | 'onDemand'
  | 'internetRadio'
  | 'liveStreaming'
  | 'audioBook'
  | 'podcast'
  | 'advertisement'
type PlayMediaControl = {
  activity?: PlayMediaControlActivity | undefined
  commands?: PlayMediaControlCommandSet | undefined
  scheme: PlayMediaControlScheme
}
type QueueControlMapping = { default: PlayMediaControl }
type QueueInsertPointer = {
  afterIdentifier?: ContentIdentifier | undefined
  replace?: boolean | undefined
}
type QueuePlayPointer = {
  contentIdentifier?: ContentIdentifier | undefined
  offsetInMillis?: bigint | undefined
} | null
type Queue = {
  content: Content[]
  contentItemsCount?: (number | null) | undefined
  controls?: QueueControlMapping | undefined
  identifier: QueueIdentifier
  insertPointer?: QueueInsertPointer | undefined
  nextContentUrl?: (string | null) | undefined
  playPointer?: QueuePlayPointer | undefined
  prerollSeconds?: number | undefined
  previousContentUrl?: (string | null) | undefined
  skipsRemaining?: (number | null) | undefined
  version: string
}
type QueueActivityReportEvent =
  | 'local.playing.elapsed'
  | 'local.playing.paused'
  | 'local.playing.continued'
  | 'local.playing.scrub'
  | 'local.playing.fastForward'
  | 'local.playing.fastRewind'
  | 'local.playing.transitioned.naturally'
  | 'local.playing.transitioned.skip_next'
  | 'local.playing.transitioned.skip_previous'
  | 'local.playing.transitioned.queue_replaced'
  | 'local.stopped.naturally'
  | 'local.stopped.skip_past_end'
  | 'local.command.like'
  | 'local.command.dislike'
  | 'local.command.bookmark'
type UpdateActivityRequest = {
  constraints?: Constraints | undefined
  nowPlaying?: PlayerContext | undefined
  previouslyPlaying?: PlayerContext | undefined
  report: QueueActivityReportEvent
  timestamp: string
  userActivity: UserActivity
  version: string
}
type UpdateActivityResponse = { queue?: Queue | undefined; userActivity?: UserActivity | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/configuration': {
      $get:
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'Request-Timeout': number
                'User-Agent': string
                'Accept-Language': string
                'If-None-Match'?: ExtensionConfigTag | undefined
                'Cache-Control': string
              }
            }
            output: ExtensionConfig
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'Request-Timeout': number
                'User-Agent': string
                'Accept-Language': string
                'If-None-Match'?: ExtensionConfigTag | undefined
                'Cache-Control': string
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/intent/addMedia': {
      $post: {
        input: {
          header: {
            'x-applecloudextension-session-id': string
            'x-applecloudextension-retry-count'?: number | undefined
            'Request-Timeout': number
            'User-Agent': string
            'Accept-Language': string
          }
        } & { json: AddMediaIntentHandlingInvocation[] }
        output: AddMediaIntentHandlingInvocationResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/intent/playMedia': {
      $post: {
        input: {
          header: {
            'x-applecloudextension-session-id': string
            'x-applecloudextension-retry-count'?: number | undefined
            'Request-Timeout': number
            'User-Agent': string
            'Accept-Language': string
          }
        } & { json: PlayMediaIntentHandlingInvocation[] }
        output: PlayMediaIntentHandlingInvocationResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/intent/updateMediaAffinity': {
      $post: {
        input: {
          header: {
            'x-applecloudextension-session-id': string
            'x-applecloudextension-retry-count'?: number | undefined
            'Request-Timeout': number
            'User-Agent': string
            'Accept-Language': string
          }
        } & { json: UpdateMediaAffinityIntentHandlingInvocation[] }
        output: UpdateMediaAffinityIntentHandlingInvocationResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/queues/playMedia': {
      $post:
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'User-Agent': string
                'Accept-Language': string
              }
            } & { json: PlayMediaRequest }
            output: Queue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'User-Agent': string
                'Accept-Language': string
              }
            } & { json: PlayMediaRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'User-Agent': string
                'Accept-Language': string
              }
            } & { json: PlayMediaRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'User-Agent': string
                'Accept-Language': string
              }
            } & { json: PlayMediaRequest }
            output: {}
            outputFormat: string
            status: 410
          }
    }
  } & {
    '/queues/updateActivity': {
      $post:
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'User-Agent': string
                'Accept-Language': string
              }
            } & { json: UpdateActivityRequest }
            output: UpdateActivityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'User-Agent': string
                'Accept-Language': string
              }
            } & { json: UpdateActivityRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'User-Agent': string
                'Accept-Language': string
              }
            } & { json: UpdateActivityRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'User-Agent': string
                'Accept-Language': string
              }
            } & { json: UpdateActivityRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'x-applecloudextension-session-id': string
                'x-applecloudextension-retry-count'?: number | undefined
                'User-Agent': string
                'Accept-Language': string
              }
            } & { json: UpdateActivityRequest }
            output: {}
            outputFormat: string
            status: 410
          }
    }
  },
  '/'
>
export default routes
