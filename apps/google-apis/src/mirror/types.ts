type AuthToken = { authToken?: string | undefined; type?: string | undefined }
type UserData = { key?: string | undefined; value?: string | undefined }
type Account = {
  authTokens?: AuthToken[] | undefined
  features?: string[] | undefined
  password?: string | undefined
  userData?: UserData[] | undefined
}
type Command = { type?: string | undefined }
type Contact = {
  acceptCommands?: Command[] | undefined
  acceptTypes?: string[] | undefined
  displayName?: string | undefined
  id?: string | undefined
  imageUrls?: string[] | undefined
  kind?: string | undefined
  phoneNumber?: string | undefined
  priority?: number | undefined
  sharingFeatures?: string[] | undefined
  source?: string | undefined
  speakableName?: string | undefined
  type?: string | undefined
}
type ContactsListResponse = { items?: Contact[] | undefined; kind?: string | undefined }
type Location = {
  accuracy?: number | undefined
  address?: string | undefined
  displayName?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  timestamp?: string | undefined
}
type LocationsListResponse = { items?: Location[] | undefined; kind?: string | undefined }
type Setting = { id?: string | undefined; kind?: string | undefined; value?: string | undefined }
type UserAction = { payload?: string | undefined; type?: string | undefined }
type Notification = {
  collection?: string | undefined
  itemId?: string | undefined
  operation?: string | undefined
  userActions?: UserAction[] | undefined
  userToken?: string | undefined
  verifyToken?: string | undefined
}
type Subscription = {
  callbackUrl?: string | undefined
  collection?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  notification?: Notification | undefined
  operation?: string[] | undefined
  updated?: string | undefined
  userToken?: string | undefined
  verifyToken?: string | undefined
}
type SubscriptionsListResponse = { items?: Subscription[] | undefined; kind?: string | undefined }
type Attachment = {
  contentType?: string | undefined
  contentUrl?: string | undefined
  id?: string | undefined
  isProcessingContent?: boolean | undefined
}
type MenuValue = {
  displayName?: string | undefined
  iconUrl?: string | undefined
  state?: string | undefined
}
type MenuItem = {
  action?: string | undefined
  contextual_command?: string | undefined
  id?: string | undefined
  payload?: string | undefined
  removeWhenSelected?: boolean | undefined
  values?: MenuValue[] | undefined
}
type NotificationConfig = { deliveryTime?: string | undefined; level?: string | undefined }
type TimelineItem = {
  attachments?: Attachment[] | undefined
  bundleId?: string | undefined
  canonicalUrl?: string | undefined
  created?: string | undefined
  creator?: Contact | undefined
  displayTime?: string | undefined
  etag?: string | undefined
  html?: string | undefined
  id?: string | undefined
  inReplyTo?: string | undefined
  isBundleCover?: boolean | undefined
  isDeleted?: boolean | undefined
  isPinned?: boolean | undefined
  kind?: string | undefined
  location?: Location | undefined
  menuItems?: MenuItem[] | undefined
  notification?: NotificationConfig | undefined
  pinScore?: number | undefined
  recipients?: Contact[] | undefined
  selfLink?: string | undefined
  sourceItemId?: string | undefined
  speakableText?: string | undefined
  speakableType?: string | undefined
  text?: string | undefined
  title?: string | undefined
  updated?: string | undefined
}
type TimelineListResponse = {
  items?: TimelineItem[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type AttachmentsListResponse = { items?: Attachment[] | undefined; kind?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts/:userToken/:accountType/:accountName': {
      $post: {
        input: { param: { userToken: string; accountType: string; accountName: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Account }
        output: Account
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/contacts': {
      $get: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ContactsListResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Contact }
        output: Contact
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/contacts/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Contact
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Contact }
        output: Contact
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Contact }
        output: Contact
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/locations': {
      $get: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: LocationsListResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/locations/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Location
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/settings/:id': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Setting
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/subscriptions': {
      $get: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: SubscriptionsListResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Subscription }
        output: Subscription
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/subscriptions/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Subscription }
        output: Subscription
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/timeline': {
      $get: {
        input: {
          query: {
            bundleId?: string | undefined
            includeDeleted?: boolean | undefined
            maxResults?: number | undefined
            orderBy?: 'displayTime' | 'writeTime' | undefined
            pageToken?: string | undefined
            pinnedOnly?: boolean | undefined
            sourceItemId?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: TimelineListResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: TimelineItem
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/timeline/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: TimelineItem
        outputFormat: 'text'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: TimelineItem }
        output: TimelineItem
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: TimelineItem
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/timeline/:itemId/attachments': {
      $get: {
        input: { param: { itemId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AttachmentsListResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { itemId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Attachment
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/timeline/:itemId/attachments/:attachmentId': {
      $delete: {
        input: { param: { itemId: string; attachmentId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { itemId: string; attachmentId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Attachment
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
