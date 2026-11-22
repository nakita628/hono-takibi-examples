type PlusAclentryResource = {
  displayName?: string | undefined
  id?: string | undefined
  type?: string | undefined
}
type Acl = {
  description?: string | undefined
  items?: PlusAclentryResource[] | undefined
  kind?: string | undefined
}
type Place = {
  address?: { formatted?: string | undefined } | undefined
  displayName?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  position?: { latitude?: number | undefined; longitude?: number | undefined } | undefined
}
type Activity = {
  access?: Acl | undefined
  actor?:
    | {
        clientSpecificActorInfo?:
          | { youtubeActorInfo?: { channelId?: string | undefined } | undefined }
          | undefined
        displayName?: string | undefined
        id?: string | undefined
        image?: { url?: string | undefined } | undefined
        name?: { familyName?: string | undefined; givenName?: string | undefined } | undefined
        url?: string | undefined
        verification?: { adHocVerified?: string | undefined } | undefined
      }
    | undefined
  address?: string | undefined
  annotation?: string | undefined
  crosspostSource?: string | undefined
  etag?: string | undefined
  geocode?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  location?: Place | undefined
  object?:
    | {
        actor?:
          | {
              clientSpecificActorInfo?:
                | { youtubeActorInfo?: { channelId?: string | undefined } | undefined }
                | undefined
              displayName?: string | undefined
              id?: string | undefined
              image?: { url?: string | undefined } | undefined
              url?: string | undefined
              verification?: { adHocVerified?: string | undefined } | undefined
            }
          | undefined
        attachments?:
          | {
              content?: string | undefined
              displayName?: string | undefined
              embed?: { type?: string | undefined; url?: string | undefined } | undefined
              fullImage?:
                | {
                    height?: number | undefined
                    type?: string | undefined
                    url?: string | undefined
                    width?: number | undefined
                  }
                | undefined
              id?: string | undefined
              image?:
                | {
                    height?: number | undefined
                    type?: string | undefined
                    url?: string | undefined
                    width?: number | undefined
                  }
                | undefined
              objectType?: string | undefined
              thumbnails?:
                | {
                    description?: string | undefined
                    image?:
                      | {
                          height?: number | undefined
                          type?: string | undefined
                          url?: string | undefined
                          width?: number | undefined
                        }
                      | undefined
                    url?: string | undefined
                  }[]
                | undefined
              url?: string | undefined
            }[]
          | undefined
        content?: string | undefined
        id?: string | undefined
        objectType?: string | undefined
        originalContent?: string | undefined
        plusoners?: { selfLink?: string | undefined; totalItems?: number | undefined } | undefined
        replies?: { selfLink?: string | undefined; totalItems?: number | undefined } | undefined
        resharers?: { selfLink?: string | undefined; totalItems?: number | undefined } | undefined
        url?: string | undefined
      }
    | undefined
  placeId?: string | undefined
  placeName?: string | undefined
  provider?: { title?: string | undefined } | undefined
  published?: string | undefined
  radius?: string | undefined
  title?: string | undefined
  updated?: string | undefined
  url?: string | undefined
  verb?: string | undefined
}
type ActivityFeed = {
  etag?: string | undefined
  id?: string | undefined
  items?: Activity[] | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  nextPageToken?: string | undefined
  selfLink?: string | undefined
  title?: string | undefined
  updated?: string | undefined
}
type Comment = {
  actor?:
    | {
        clientSpecificActorInfo?:
          | { youtubeActorInfo?: { channelId?: string | undefined } | undefined }
          | undefined
        displayName?: string | undefined
        id?: string | undefined
        image?: { url?: string | undefined } | undefined
        url?: string | undefined
        verification?: { adHocVerified?: string | undefined } | undefined
      }
    | undefined
  etag?: string | undefined
  id?: string | undefined
  inReplyTo?: { id?: string | undefined; url?: string | undefined }[] | undefined
  kind?: string | undefined
  object?:
    | {
        content?: string | undefined
        objectType?: string | undefined
        originalContent?: string | undefined
      }
    | undefined
  plusoners?: { totalItems?: number | undefined } | undefined
  published?: string | undefined
  selfLink?: string | undefined
  updated?: string | undefined
  verb?: string | undefined
}
type CommentFeed = {
  etag?: string | undefined
  id?: string | undefined
  items?: Comment[] | undefined
  kind?: string | undefined
  nextLink?: string | undefined
  nextPageToken?: string | undefined
  title?: string | undefined
  updated?: string | undefined
}
type Person = {
  aboutMe?: string | undefined
  ageRange?: { max?: number | undefined; min?: number | undefined } | undefined
  birthday?: string | undefined
  braggingRights?: string | undefined
  circledByCount?: number | undefined
  cover?:
    | {
        coverInfo?:
          | { leftImageOffset?: number | undefined; topImageOffset?: number | undefined }
          | undefined
        coverPhoto?:
          | { height?: number | undefined; url?: string | undefined; width?: number | undefined }
          | undefined
        layout?: string | undefined
      }
    | undefined
  currentLocation?: string | undefined
  displayName?: string | undefined
  domain?: string | undefined
  emails?: { type?: string | undefined; value?: string | undefined }[] | undefined
  etag?: string | undefined
  gender?: string | undefined
  id?: string | undefined
  image?: { isDefault?: boolean | undefined; url?: string | undefined } | undefined
  isPlusUser?: boolean | undefined
  kind?: string | undefined
  language?: string | undefined
  name?:
    | {
        familyName?: string | undefined
        formatted?: string | undefined
        givenName?: string | undefined
        honorificPrefix?: string | undefined
        honorificSuffix?: string | undefined
        middleName?: string | undefined
      }
    | undefined
  nickname?: string | undefined
  objectType?: string | undefined
  occupation?: string | undefined
  organizations?:
    | {
        department?: string | undefined
        description?: string | undefined
        endDate?: string | undefined
        location?: string | undefined
        name?: string | undefined
        primary?: boolean | undefined
        startDate?: string | undefined
        title?: string | undefined
        type?: string | undefined
      }[]
    | undefined
  placesLived?: { primary?: boolean | undefined; value?: string | undefined }[] | undefined
  plusOneCount?: number | undefined
  relationshipStatus?: string | undefined
  skills?: string | undefined
  tagline?: string | undefined
  url?: string | undefined
  urls?:
    | { label?: string | undefined; type?: string | undefined; value?: string | undefined }[]
    | undefined
  verified?: boolean | undefined
}
type PeopleFeed = {
  etag?: string | undefined
  items?: Person[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  selfLink?: string | undefined
  title?: string | undefined
  totalItems?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/activities': {
      $get: {
        input: {
          query: {
            query: string
            language?: string | undefined
            maxResults?: number | undefined
            orderBy?: 'best' | 'recent' | undefined
            pageToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ActivityFeed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/activities/:activityId': {
      $get: {
        input: { param: { activityId: string } } & {
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
        output: Activity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/activities/:activityId/comments': {
      $get: {
        input: { param: { activityId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            sortOrder?: 'ascending' | 'descending' | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CommentFeed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/activities/:activityId/people/:collection': {
      $get: {
        input: { param: { activityId: string; collection: 'plusoners' | 'resharers' } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: PeopleFeed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/comments/:commentId': {
      $get: {
        input: { param: { commentId: string } } & {
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
        output: Comment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people': {
      $get: {
        input: {
          query: {
            query: string
            language?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: PeopleFeed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/:userId': {
      $get: {
        input: { param: { userId: string } } & {
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
        output: Person
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/:userId/activities/:collection': {
      $get: {
        input: { param: { userId: string; collection: 'public' } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ActivityFeed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/people/:userId/people/:collection': {
      $get: {
        input: { param: { userId: string; collection: 'connected' | 'visible' } } & {
          query: {
            maxResults?: number | undefined
            orderBy?: 'alphabetical' | 'best' | undefined
            pageToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: PeopleFeed
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
