type FacebookPost = { key?: string | undefined; timestamp?: string | undefined }
type Home = {
  key?: string | undefined
  timestamp?: string | undefined
  featurePostKey?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  topPostKey?: string | undefined
}
type Ministry = {
  key?: string | undefined
  timestamp?: string | undefined
  featurePostKey?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  topPostKey?: string | undefined
  audioUri?: string | undefined
  flickrUri?: string | undefined
  isActive?: boolean | undefined
  twitterFeedUsername?: string | undefined
  youtubeUri?: string | undefined
}
type Minister = { key?: string | undefined; timestamp?: string | undefined }
type Newsletter = { key?: string | undefined; timestamp?: string | undefined }
type EditionImage = { key?: string | undefined; timestamp?: string | undefined }
type Edition = { key?: string | undefined; timestamp?: string | undefined }
type Article = { key?: string | undefined; timestamp?: string | undefined }
type Post = { key?: string | undefined; timestamp?: string | undefined }
type KeyValuePair_2 = { key?: string | undefined; value?: string | undefined }
type ResourceLink = { key?: string | undefined; timestamp?: string | undefined }
type Sector = {
  key?: string | undefined
  timestamp?: string | undefined
  featurePostKey?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  topPostKey?: string | undefined
  audioUri?: string | undefined
  flickrUri?: string | undefined
  isActive?: boolean | undefined
  twitterFeedUsername?: string | undefined
  youtubeUri?: string | undefined
}
type Service = {
  key?: string | undefined
  timestamp?: string | undefined
  featurePostKey?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  topPostKey?: string | undefined
  audioUri?: string | undefined
  flickrUri?: string | undefined
  isActive?: boolean | undefined
  twitterFeedUsername?: string | undefined
  youtubeUri?: string | undefined
}
type Slide = { key?: string | undefined; timestamp?: string | undefined }
type Tag = {
  key?: string | undefined
  timestamp?: string | undefined
  featurePostKey?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  topPostKey?: string | undefined
  audioUri?: string | undefined
  flickrUri?: string | undefined
  isActive?: boolean | undefined
  twitterFeedUsername?: string | undefined
  youtubeUri?: string | undefined
}
type Theme = {
  key?: string | undefined
  timestamp?: string | undefined
  featurePostKey?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  topPostKey?: string | undefined
  audioUri?: string | undefined
  flickrUri?: string | undefined
  isActive?: boolean | undefined
  twitterFeedUsername?: string | undefined
  youtubeUri?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/FacebookPosts/ByUri': {
      $get:
        | {
            input: { query: { uri?: string | undefined; 'api-version': string } }
            output: FacebookPost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uri?: string | undefined; 'api-version': string } }
            output: FacebookPost
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { uri?: string | undefined; 'api-version': string } }
            output: FacebookPost
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Home': {
      $get:
        | {
            input: { query: { 'api-version': string } }
            output: Home
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Home
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Home
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Ministries': {
      $get:
        | {
            input: { query: { 'api-version': string } }
            output: Ministry[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Ministry[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Ministry[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Ministries/:key': {
      $get:
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Ministry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Ministry
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Ministry
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Ministries/:key/Minister': {
      $get:
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Minister
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Minister
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Minister
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Newsletters': {
      $get:
        | {
            input: { query: { 'api-version': string } }
            output: Newsletter[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Newsletter[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Newsletter[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Newsletters/Images/:guid': {
      $get:
        | {
            input: { param: { guid: string } } & { query: { 'api-version': string } }
            output: EditionImage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { guid: string } } & { query: { 'api-version': string } }
            output: EditionImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { guid: string } } & { query: { 'api-version': string } }
            output: EditionImage
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Newsletters/:newsletterKey': {
      $get:
        | {
            input: { param: { newsletterKey: string } } & { query: { 'api-version': string } }
            output: Newsletter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { newsletterKey: string } } & { query: { 'api-version': string } }
            output: Newsletter
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { newsletterKey: string } } & { query: { 'api-version': string } }
            output: Newsletter
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Newsletters/:newsletterKey/Editions/:editionKey': {
      $get:
        | {
            input: { param: { newsletterKey: string; editionKey: string } } & {
              query: { 'api-version': string }
            }
            output: Edition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { newsletterKey: string; editionKey: string } } & {
              query: { 'api-version': string }
            }
            output: Edition
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { newsletterKey: string; editionKey: string } } & {
              query: { 'api-version': string }
            }
            output: Edition
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Newsletters/:newsletterKey/Editions/:editionKey/Articles/:articleKey': {
      $get:
        | {
            input: { param: { newsletterKey: string; editionKey: string; articleKey: string } } & {
              query: { 'api-version': string }
            }
            output: Article
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { newsletterKey: string; editionKey: string; articleKey: string } } & {
              query: { 'api-version': string }
            }
            output: Article
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { newsletterKey: string; editionKey: string; articleKey: string } } & {
              query: { 'api-version': string }
            }
            output: Article
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Posts': {
      $get:
        | {
            input: { query: { postKeys?: string[] | undefined; 'api-version': string } }
            output: Post[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { postKeys?: string[] | undefined; 'api-version': string } }
            output: Post[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { postKeys?: string[] | undefined; 'api-version': string } }
            output: Post[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Posts/Keys/:indexKind/:indexKey': {
      $get:
        | {
            input: { param: { indexKind: string; indexKey: string } } & {
              query: {
                postKind?: string | undefined
                count?: number | undefined
                skip?: number | undefined
                'api-version': string
              }
            }
            output: KeyValuePair_2[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexKind: string; indexKey: string } } & {
              query: {
                postKind?: string | undefined
                count?: number | undefined
                skip?: number | undefined
                'api-version': string
              }
            }
            output: KeyValuePair_2[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { indexKind: string; indexKey: string } } & {
              query: {
                postKind?: string | undefined
                count?: number | undefined
                skip?: number | undefined
                'api-version': string
              }
            }
            output: KeyValuePair_2[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Posts/Keys/:reference': {
      $get:
        | {
            input: { param: { reference: string } } & { query: { 'api-version': string } }
            output: KeyValuePair_2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reference: string } } & { query: { 'api-version': string } }
            output: KeyValuePair_2
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reference: string } } & { query: { 'api-version': string } }
            output: KeyValuePair_2
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Posts/Latest/:indexKind/:indexKey': {
      $get:
        | {
            input: { param: { indexKind: string; indexKey: string } } & {
              query: {
                postKind?: string | undefined
                count?: number | undefined
                skip?: number | undefined
                'api-version': string
              }
            }
            output: Post[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexKind: string; indexKey: string } } & {
              query: {
                postKind?: string | undefined
                count?: number | undefined
                skip?: number | undefined
                'api-version': string
              }
            }
            output: Post[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { indexKind: string; indexKey: string } } & {
              query: {
                postKind?: string | undefined
                count?: number | undefined
                skip?: number | undefined
                'api-version': string
              }
            }
            output: Post[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Posts/LatestMediaUri/:mediaType': {
      $get:
        | {
            input: { param: { mediaType: string } } & { query: { 'api-version': string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { mediaType: string } } & { query: { 'api-version': string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaType: string } } & { query: { 'api-version': string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Posts/:key': {
      $get:
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Post
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Post
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Post
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/ResourceLinks': {
      $get:
        | {
            input: { query: { 'api-version': string } }
            output: ResourceLink[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: ResourceLink[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: ResourceLink[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Sectors': {
      $get:
        | {
            input: { query: { 'api-version': string } }
            output: Sector[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Sector[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Sector[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Sectors/:key': {
      $get:
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Sector
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Sector
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Sector
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Services': {
      $get:
        | {
            input: { query: { 'api-version': string } }
            output: Service[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Service[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Service[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Services/:key': {
      $get:
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Service
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Service
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Slides': {
      $get:
        | {
            input: { query: { 'api-version': string } }
            output: Slide[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Slide[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Slide[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Slides/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { 'api-version': string } }
            output: Slide
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { 'api-version': string } }
            output: Slide
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { 'api-version': string } }
            output: Slide
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Tags': {
      $get:
        | {
            input: { query: { 'api-version': string } }
            output: Tag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Tag[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Tag[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Tags/:key': {
      $get:
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Tag
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Tag
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Themes': {
      $get:
        | {
            input: { query: { 'api-version': string } }
            output: Theme[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Theme[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { 'api-version': string } }
            output: Theme[]
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Themes/:key': {
      $get:
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Theme
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Theme
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { key: string } } & { query: { 'api-version': string } }
            output: Theme
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
