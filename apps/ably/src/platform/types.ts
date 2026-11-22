type Notification = {
  title?: string | undefined
  body?: string | undefined
  icon?: string | undefined
  sound?: string | undefined
  collapseKey?: string | undefined
}
type Push = {
  data?: string | undefined
  notification?: Notification | undefined
  apns?: { notification?: Notification | undefined } | undefined
  fcm?: { notification?: Notification | undefined } | undefined
  web?: { notification?: Notification | undefined } | undefined
}
type Extras = { push?: Push | undefined }
type Message = {
  name?: string | undefined
  data?: string | undefined
  id?: string | undefined
  timestamp?: bigint | undefined
  encoding?: string | undefined
  clientId?: string | undefined
  connectionId?: string | undefined
  extras?: Extras | undefined
}
type Error = {
  message?: string | undefined
  code?: number | undefined
  statusCode?: number | undefined
  href?: string | undefined
  serverId?: string | undefined
}
type PresenceMessage = {
  id?: string | undefined
  action?: 'ABSENT' | 'PRESENT' | 'ENTER' | 'LEAVE' | 'UPDATE' | undefined
  data?: string | undefined
  clientId?: string | undefined
  connectionId?: string | undefined
  timestamp?: bigint | undefined
  encoding?: string | undefined
  extras?: Extras | undefined
}
type Occupancy = {
  publishers?: number | undefined
  subscribers?: number | undefined
  presenceSubscribers?: number | undefined
  presenceConnections?: number | undefined
  presenceMembers?: number | undefined
}
type ChannelStatus = { isActive: boolean; occupancy?: Occupancy | undefined }
type ChannelDetails = {
  channelId: string
  region?: string | undefined
  isGlobalMaster?: boolean | undefined
  status?: ChannelStatus | undefined
}
type Recipient = {
  transportType?: 'apns' | 'fcm' | 'gcm' | 'web' | undefined
  deviceToken?: string | undefined
  registrationToken?: string | undefined
  encryptionKey?: { [x: string]: unknown } | undefined
  clientId?: string | undefined
  deviceId?: string | undefined
}
type DeviceDetails = {
  id?: string | undefined
  clientId?: string | undefined
  formFactor?: 'phone' | 'tablet' | 'desktop' | 'tv' | 'watch' | 'car' | 'embedded' | undefined
  metadata?: { [x: string]: unknown } | undefined
  platform?: 'ios' | 'android' | 'browser' | undefined
  deviceSecret?: string | undefined
  'push.recipient'?: Recipient | undefined
  'push.state'?: 'Active' | 'Failing' | 'Failed' | undefined
}
type TokenRequest = {
  keyName: string
  capability: { [x: string]: unknown }
  clientId?: string | undefined
  timestamp: number
  nonce: string
}
type SignedTokenRequest = {
  keyName: string
  capability: { [x: string]: unknown }
  clientId?: string | undefined
  timestamp: number
  nonce: string
  mac: string
}
type TokenDetails = {
  token?: string | undefined
  keyName?: string | undefined
  issued?: number | undefined
  expires?: number | undefined
  capability?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
    '/push/deviceRegistrations': {
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
    }
  } & {
    '/push/deviceRegistrations/:device_id': {
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
    '/push/channelSubscriptions': {
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
    '/push/publish': {
      $post:
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: { recipient: Recipient; push?: Push | undefined } } & {
              form: { recipient: Recipient; push?: Push | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: { recipient: Recipient; push?: Push | undefined } } & {
              form: { recipient: Recipient; push?: Push | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: { recipient: Recipient; push?: Push | undefined } } & {
              form: { recipient: Recipient; push?: Push | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { format?: 'json' | 'jsonp' | 'msgpack' | 'html' | undefined } } & {
              header: { 'X-Ably-Version'?: string | undefined }
            } & { json: { recipient: Recipient; push?: Push | undefined } } & {
              form: { recipient: Recipient; push?: Push | undefined }
            }
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
