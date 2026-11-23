type Occupancy = {
  presenceConnections?: number | undefined
  presenceMembers?: number | undefined
  presenceSubscribers?: number | undefined
  publishers?: number | undefined
  subscribers?: number | undefined
}
type ChannelStatus = { isActive: boolean; occupancy?: Occupancy | undefined }
type ChannelDetails = {
  channelId: string
  isGlobalMaster?: boolean | undefined
  region?: string | undefined
  status?: ChannelStatus | undefined
}
type Error = {
  code?: number | undefined
  href?: string | undefined
  message?: string | undefined
  serverId?: string | undefined
  statusCode?: number | undefined
}
type Notification = {
  body?: string | undefined
  collapseKey?: string | undefined
  icon?: string | undefined
  sound?: string | undefined
  title?: string | undefined
}
type Push = {
  apns?: { notification?: Notification | undefined } | undefined
  data?: string | undefined
  fcm?: { notification?: Notification | undefined } | undefined
  notification?: Notification | undefined
  web?: { notification?: Notification | undefined } | undefined
}
type Extras = { push?: Push | undefined }
type Message = {
  clientId?: string | undefined
  connectionId?: string | undefined
  data?: string | undefined
  encoding?: string | undefined
  extras?: Extras | undefined
  id?: string | undefined
  name?: string | undefined
  timestamp?: bigint | undefined
}
type PresenceMessage = {
  action?: 'ABSENT' | 'PRESENT' | 'ENTER' | 'LEAVE' | 'UPDATE' | undefined
  clientId?: string | undefined
  connectionId?: string | undefined
  data?: string | undefined
  encoding?: string | undefined
  extras?: Extras | undefined
  id?: string | undefined
  timestamp?: bigint | undefined
}
type TokenRequest = {
  capability: { [x: string]: unknown }
  clientId?: string | undefined
  keyName: string
  nonce: string
  timestamp: number
}
type SignedTokenRequest = {
  capability: { [x: string]: unknown }
  clientId?: string | undefined
  keyName: string
  nonce: string
  timestamp: number
  mac: string
}
type TokenDetails = {
  capability?: string | undefined
  expires?: number | undefined
  issued?: number | undefined
  keyName?: string | undefined
  token?: string | undefined
}
type Recipient = {
  clientId?: string | undefined
  deviceId?: string | undefined
  deviceToken?: string | undefined
  registrationToken?: string | undefined
  transportType?: 'apns' | 'fcm' | 'gcm' | undefined
}
type DeviceDetails = {
  clientId?: string | undefined
  deviceSecret?: string | undefined
  formFactor?: 'phone' | 'tablet' | 'desktop' | 'tv' | 'watch' | 'car' | 'embedded' | undefined
  id?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  platform?: 'ios' | 'android' | undefined
  'push.recipient'?: Recipient | undefined
  'push.state'?: 'Active' | 'Failing' | 'Failed' | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/channels': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                prefix?: string | undefined
                by?: 'value' | 'id' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: ChannelDetails[] | string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                prefix?: string | undefined
                by?: 'value' | 'id' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: ChannelDetails[] | string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                prefix?: string | undefined
                by?: 'value' | 'id' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                prefix?: string | undefined
                by?: 'value' | 'id' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                prefix?: string | undefined
                by?: 'value' | 'id' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                prefix?: string | undefined
                by?: 'value' | 'id' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/channels/:channel_id': {
      $get:
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: ChannelDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/channels/:channel_id/messages': {
      $get:
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Message[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Message[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
      $post:
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: Message } & {
              form: Message
            }
            output: { channel?: string | undefined; messageId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: Message } & {
              form: Message
            }
            output: { channel?: string | undefined; messageId?: string | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: Message } & {
              form: Message
            }
            output: { channel?: string | undefined; messageId?: string | undefined }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: Message } & {
              form: Message
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: Message } & {
              form: Message
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: Message } & {
              form: Message
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/channels/:channel_id/presence': {
      $get:
        | {
            input: { param: { channel_id: string } } & {
              query: {
                clientId?: string | undefined
                connectionId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: PresenceMessage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                clientId?: string | undefined
                connectionId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: PresenceMessage[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                clientId?: string | undefined
                connectionId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                clientId?: string | undefined
                connectionId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                clientId?: string | undefined
                connectionId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                clientId?: string | undefined
                connectionId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/channels/:channel_id/presence/history': {
      $get:
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: PresenceMessage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: PresenceMessage[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { channel_id: string } } & {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/keys/:keyName/requestToken': {
      $post:
        | {
            input: { param: { keyName: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & {
              json: TokenRequest | SignedTokenRequest
            }
            output: TokenDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyName: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & {
              json: TokenRequest | SignedTokenRequest
            }
            output: TokenDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { keyName: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & {
              json: TokenRequest | SignedTokenRequest
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyName: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & {
              json: TokenRequest | SignedTokenRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { keyName: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & {
              json: TokenRequest | SignedTokenRequest
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/push/channelSubscriptions': {
      $delete:
        | {
            input: {
              query: {
                channel?: string | undefined
                deviceId?: string | undefined
                clientId?: string | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                channel?: string | undefined
                deviceId?: string | undefined
                clientId?: string | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channel?: string | undefined
                deviceId?: string | undefined
                clientId?: string | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channel?: string | undefined
                deviceId?: string | undefined
                clientId?: string | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                channel?: string | undefined
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channel?: string | undefined
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channel?: string | undefined
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                channel?: string | undefined
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & {
              json:
                | { channel?: string | undefined; deviceId?: string | undefined }
                | { channel?: string | undefined; clientId?: string | undefined }
            } & {
              form:
                | { channel?: string | undefined; deviceId?: string | undefined }
                | { channel?: string | undefined; clientId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & {
              json:
                | { channel?: string | undefined; deviceId?: string | undefined }
                | { channel?: string | undefined; clientId?: string | undefined }
            } & {
              form:
                | { channel?: string | undefined; deviceId?: string | undefined }
                | { channel?: string | undefined; clientId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & {
              json:
                | { channel?: string | undefined; deviceId?: string | undefined }
                | { channel?: string | undefined; clientId?: string | undefined }
            } & {
              form:
                | { channel?: string | undefined; deviceId?: string | undefined }
                | { channel?: string | undefined; clientId?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & {
              json:
                | { channel?: string | undefined; deviceId?: string | undefined }
                | { channel?: string | undefined; clientId?: string | undefined }
            } & {
              form:
                | { channel?: string | undefined; deviceId?: string | undefined }
                | { channel?: string | undefined; clientId?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/push/channels': {
      $get:
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: string[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/push/deviceRegistrations': {
      $delete:
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                deviceId?: string | undefined
                clientId?: string | undefined
                limit?: number | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: DeviceDetails }
            output: DeviceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: DeviceDetails }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: DeviceDetails }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: DeviceDetails }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: DeviceDetails }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: DeviceDetails }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/push/deviceRegistrations/:device_id': {
      $delete:
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $get:
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $patch:
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: DeviceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: DeviceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } } & { json: DeviceDetails } & {
              form: DeviceDetails
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/push/deviceRegistrations/:device_id/resetUpdateToken': {
      $get:
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: DeviceDetails
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { device_id: string } } & {
              query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/push/publish': {
      $post:
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: { push?: Push | undefined; recipient: Recipient } } & {
              form: { push?: Push | undefined; recipient: Recipient }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: { push?: Push | undefined; recipient: Recipient } } & {
              form: { push?: Push | undefined; recipient: Recipient }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: { push?: Push | undefined; recipient: Recipient } } & {
              form: { push?: Push | undefined; recipient: Recipient }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: { push?: Push | undefined; recipient: Recipient } } & {
              form: { push?: Push | undefined; recipient: Recipient }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/stats': {
      $get:
        | {
            input: {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                unit?: 'minute' | 'hour' | 'day' | 'month' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                unit?: 'minute' | 'hour' | 'day' | 'month' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                unit?: 'minute' | 'hour' | 'day' | 'month' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                limit?: number | undefined
                end?: string | undefined
                direction?: 'forwards' | 'backwards' | undefined
                unit?: 'minute' | 'hour' | 'day' | 'month' | undefined
                format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined
              }
            } & { header: { 'X-Ably-Version'?: string | undefined } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/time': {
      $get:
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: number[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
