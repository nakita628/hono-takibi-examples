type PodcastCategory = {
  id?: string | undefined
  parent?: string | undefined
  text?: string | undefined
}
type Country = { iso?: string | undefined; iso3?: string | undefined; name?: string | undefined }
type Podcast = {
  author?: string | undefined
  block?: boolean | undefined
  categories: string[]
  copyright?: string | undefined
  country?: string | undefined
  description: string
  explicit?: boolean | undefined
  image?: string | undefined
  key?: string | undefined
  keywords?: string[] | undefined
  language: string
  link?: string | undefined
  ownerEmail?: string | undefined
  ownerName?: string | undefined
  showType?: string | undefined
  subtitle?: string | undefined
  summary: string
  title: string
}
type Language = { name?: string | undefined }
type PodcastFilters = {
  category?: string[] | undefined
  country?: string[] | undefined
  language?: string[] | undefined
  podcastType?: 'podcasts' | 'shows' | undefined
}
type PodcastSearchParams = {
  filters?: PodcastFilters | undefined
  hitsPerPage?: number | undefined
  page?: number | undefined
  query?: string | undefined
}
type PodcastSearchResults = { hits?: Podcast[] | undefined; total?: bigint | undefined }
type PodcastEpisode = {
  author?: string | undefined
  block?: boolean | undefined
  description: string
  duration?: bigint | undefined
  episode?: bigint | undefined
  episodeType?: string | undefined
  explicit?: boolean | undefined
  fileUrl?: string | undefined
  image?: string | undefined
  key?: string | undefined
  link?: string | undefined
  publishDate: string
  season?: bigint | undefined
  size?: bigint | undefined
  subtitle?: string | undefined
  summary: string
  tags?: string[] | undefined
  title: string
}
type PodcastEpisodeList = { items?: PodcastEpisode[] | undefined; total?: bigint | undefined }
type StationGenre = { name?: string | undefined }
type Station = {
  city?: string | undefined
  country?: string | undefined
  description?: string | undefined
  genre?: string | undefined
  key?: string | undefined
  language?: string | undefined
  logo?: string | undefined
  name?: string | undefined
  stream?: string | undefined
  website?: string | undefined
}
type StationList = { items?: Station[] | undefined; total?: bigint | undefined }
type StationFilters = {
  country?: string[] | undefined
  genre?: string[] | undefined
  language?: string[] | undefined
}
type StationSearchParams = {
  filters?: StationFilters | undefined
  hitsPerPage?: number | undefined
  page?: number | undefined
  query?: string | undefined
}
type StationSearchResults = { hits?: Station[] | undefined; total?: bigint | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v2/podcasts/categories': {
      $get: { input: {}; output: PodcastCategory[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/podcasts/countries': {
      $get: { input: {}; output: Country[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/podcasts/create': {
      $post: {
        input: { form: { file_logo: File; podcast: Podcast } }
        output: Podcast
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v2/podcasts/languages': {
      $get: { input: {}; output: Language[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/podcasts/search': {
      $post: {
        input: { json: PodcastSearchParams }
        output: PodcastSearchResults
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v2/podcasts/:podcastKey': {
      $delete: {
        input: { param: { podcastKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { podcastKey: string } }
        output: Podcast
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { podcastKey: string } } & {
          form: { file_logo?: File | undefined; podcast: Podcast }
        }
        output: Podcast
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v2/podcasts/:podcastKey/episodes': {
      $get: {
        input: { param: { podcastKey: string } } & {
          query: { limit?: string | undefined; offset?: string | undefined }
        }
        output: PodcastEpisodeList
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v2/podcasts/:podcastKey/episodes/create': {
      $post: {
        input: { param: { podcastKey: string } } & {
          form: { episode: PodcastEpisode; file_logo: File; file_media: File }
        }
        output: PodcastEpisode
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v2/podcasts/:podcastKey/episodes/:episodeKey': {
      $delete: {
        input: { param: { podcastKey: string; episodeKey: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { podcastKey: string; episodeKey: string } }
        output: PodcastEpisode
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { podcastKey: string; episodeKey: string } } & {
          form: { episode: PodcastEpisode; file_logo?: File | undefined }
        }
        output: PodcastEpisode
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v2/stations/countries': {
      $get: { input: {}; output: Country[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/stations/genres': {
      $get: { input: {}; output: StationGenre[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/stations/languages': {
      $get: { input: {}; output: Language[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/v2/stations/list': {
      $get: {
        input: { query: { page?: string | undefined; hitsPerPage?: string | undefined } }
        output: StationList
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/v2/stations/search': {
      $post: {
        input: { json: StationSearchParams }
        output: StationSearchResults
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
