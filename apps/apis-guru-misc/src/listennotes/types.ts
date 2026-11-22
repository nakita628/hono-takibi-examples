type BestPodcastsLNUrlField = string
type AvgAudioLengthSecField = number
type CountryField = string
type PodcastDescriptionField = string
type EarliestPubDateMsField = number
type EmailField = string
type ExplicitField = boolean
type PodcastExtraField = {
  amazon_music_url?: string | undefined
  facebook_handle?: string | undefined
  google_url?: string | undefined
  instagram_handle?: string | undefined
  linkedin_url?: string | undefined
  patreon_handle?: string | undefined
  spotify_url?: string | undefined
  twitter_handle?: string | undefined
  url1?: string | undefined
  url2?: string | undefined
  url3?: string | undefined
  wechat_handle?: string | undefined
  youtube_url?: string | undefined
}
type GenreIdsField = number[]
type PodcastIdField = string
type ImageField = string
type IsClaimedField = boolean
type ITunesIdField = number
type LanguageField = string
type LatestEpisodeIdField = string
type LatestPubDateMsField = number
type ListenScoreField = number
type ListenScoreGlobalRankField = string
type PodcastLNUrlField = string
type PodcastLookingForField = {
  cohosts?: boolean | undefined
  cross_promotion?: boolean | undefined
  guests?: boolean | undefined
  sponsors?: boolean | undefined
}
type PublisherField = string
type RssField = string
type ThumbnailField = string
type PodcastNameField = string
type TotalEpisodesField = number
type PodcastTypeField = 'episodic' | 'serial'
type UpdateFrequencyHoursField = number
type WebsiteField = string
type PodcastSimple = {
  audio_length_sec?: AvgAudioLengthSecField | undefined
  country?: CountryField | undefined
  description?: PodcastDescriptionField | undefined
  earliest_pub_date_ms?: EarliestPubDateMsField | undefined
  email?: EmailField | undefined
  explicit_content?: ExplicitField | undefined
  extra?: PodcastExtraField | undefined
  genre_ids?: GenreIdsField | undefined
  id?: PodcastIdField | undefined
  image?: ImageField | undefined
  is_claimed?: IsClaimedField | undefined
  itunes_id?: ITunesIdField | undefined
  language?: LanguageField | undefined
  latest_episode_id?: LatestEpisodeIdField | undefined
  latest_pub_date_ms?: LatestPubDateMsField | undefined
  listen_score?: ListenScoreField | undefined
  listen_score_global_rank?: ListenScoreGlobalRankField | undefined
  listennotes_url?: PodcastLNUrlField | undefined
  looking_for?: PodcastLookingForField | undefined
  publisher?: PublisherField | undefined
  rss?: RssField | undefined
  thumbnail?: ThumbnailField | undefined
  title?: PodcastNameField | undefined
  total_episodes?: TotalEpisodesField | undefined
  type?: PodcastTypeField | undefined
  update_frequency_hours?: UpdateFrequencyHoursField | undefined
  website?: WebsiteField | undefined
}
type BestPodcastsResponse = {
  has_next: boolean
  has_previous: boolean
  id: number
  listennotes_url: BestPodcastsLNUrlField
  name: string
  next_page_number: number
  page_number: number
  parent_id: number
  podcasts: PodcastSimple[]
  previous_page_number: number
  total: number
}
type CuratedDescriptionField = string
type CuratedIdField = string
type CuratedLNUrlField = string
type PodcastMinimum = {
  id?: PodcastIdField | undefined
  image?: ImageField | undefined
  listen_score?: ListenScoreField | undefined
  listen_score_global_rank?: ListenScoreGlobalRankField | undefined
  listennotes_url?: PodcastLNUrlField | undefined
  publisher?: PublisherField | undefined
  thumbnail?: ThumbnailField | undefined
  title?: PodcastNameField | undefined
}
type CuratedPubDateMsField = number
type CuratedSourceDomainField = string
type CuratedSourceUrlField = string
type CuratedNameField = string
type CuratedTotalPodcastsField = number
type CuratedListSimple = {
  description?: CuratedDescriptionField | undefined
  id?: CuratedIdField | undefined
  listennotes_url?: CuratedLNUrlField | undefined
  podcasts?: PodcastMinimum[] | undefined
  pub_date_ms?: CuratedPubDateMsField | undefined
  source_domain?: CuratedSourceDomainField | undefined
  source_url?: CuratedSourceUrlField | undefined
  title?: CuratedNameField | undefined
  total?: CuratedTotalPodcastsField | undefined
}
type GetCuratedPodcastsResponse = {
  curated_lists: CuratedListSimple[]
  has_next: boolean
  has_previous: boolean
  next_page_number: number
  page_number: number
  previous_page_number: number
  total: number
}
type CuratedListFull = {
  description?: CuratedDescriptionField | undefined
  id?: CuratedIdField | undefined
  listennotes_url?: CuratedLNUrlField | undefined
  podcasts?: PodcastSimple[] | undefined
  pub_date_ms?: CuratedPubDateMsField | undefined
  source_domain?: CuratedSourceDomainField | undefined
  source_url?: CuratedSourceUrlField | undefined
  title?: CuratedNameField | undefined
  total?: CuratedTotalPodcastsField | undefined
}
type GetEpisodesInBatchForm = { ids: string }
type AudioField = string
type AudioLengthSecField = number
type EpisodeDescriptionField = string
type EpisodeIdField = string
type EpisodeImageField = string
type LinkField = string
type EpisodeLNEditUrlField = string
type EpisodeLNUrlField = string
type MaybeAudioInvalidField = boolean
type EpisodePubDateMsField = number
type EpisodeThumbnailField = string
type EpisodeNameField = string
type EpisodeSimple = {
  audio?: AudioField | undefined
  audio_length_sec?: AudioLengthSecField | undefined
  description?: EpisodeDescriptionField | undefined
  explicit_content?: ExplicitField | undefined
  id?: EpisodeIdField | undefined
  image?: EpisodeImageField | undefined
  link?: LinkField | undefined
  listennotes_edit_url?: EpisodeLNEditUrlField | undefined
  listennotes_url?: EpisodeLNUrlField | undefined
  maybe_audio_invalid?: MaybeAudioInvalidField | undefined
  podcast?: PodcastMinimum | undefined
  pub_date_ms?: EpisodePubDateMsField | undefined
  thumbnail?: EpisodeThumbnailField | undefined
  title?: EpisodeNameField | undefined
}
type GetEpisodesInBatchResponse = { episodes: EpisodeSimple[] }
type TranscriptField = string
type EpisodeFull = {
  audio?: AudioField | undefined
  audio_length_sec?: AudioLengthSecField | undefined
  description?: EpisodeDescriptionField | undefined
  explicit_content?: ExplicitField | undefined
  id?: EpisodeIdField | undefined
  image?: EpisodeImageField | undefined
  link?: LinkField | undefined
  listennotes_edit_url?: EpisodeLNEditUrlField | undefined
  listennotes_url?: EpisodeLNUrlField | undefined
  maybe_audio_invalid?: MaybeAudioInvalidField | undefined
  podcast?: PodcastSimple | undefined
  pub_date_ms?: EpisodePubDateMsField | undefined
  thumbnail?: EpisodeThumbnailField | undefined
  title?: EpisodeNameField | undefined
  transcript?: TranscriptField | undefined
}
type GetEpisodeRecommendationsResponse = { recommendations: EpisodeSimple[] }
type Genre = { id?: number | undefined; name?: string | undefined; parent_id?: number | undefined }
type GetGenresResponse = { genres: Genre[] }
type GetLanguagesResponse = { languages: string[] }
type PlaylistDescriptionField = string
type PlaylistIdField = string
type PlaylistImageField = string
type PlaylistLastTimestampMsField = number
type PlaylistListennotesUrlField = string
type PlaylistNameField = string
type PlaylistThumbnailField = string
type PlaylistVisibilityField = 'public' | 'unlisted' | 'private'
type PlaylistsResponse = {
  has_next?: boolean | undefined
  has_previous?: boolean | undefined
  next_page_number?: number | undefined
  page_number?: number | undefined
  playlists?:
    | {
        description?: PlaylistDescriptionField | undefined
        episode_count?: number | undefined
        id?: PlaylistIdField | undefined
        image?: PlaylistImageField | undefined
        last_timestamp_ms?: PlaylistLastTimestampMsField | undefined
        listennotes_url?: PlaylistListennotesUrlField | undefined
        name?: PlaylistNameField | undefined
        podcast_count?: number | undefined
        thumbnail?: PlaylistThumbnailField | undefined
        total_audio_length_sec?: number | undefined
        visibility?: PlaylistVisibilityField | undefined
      }[]
    | undefined
  previous_page_number?: number | undefined
  total?: number | undefined
}
type CustomAudio = {
  audio?: string | undefined
  audio_length_sec?: number | undefined
  image?: string | undefined
  pub_date_ms?: number | undefined
  thumbnail?: string | undefined
  title?: string | undefined
}
type DeletedItem = {
  error?: string | undefined
  id?: string | undefined
  status?: string | undefined
  title?: string | undefined
}
type PlaylistItem = {
  added_at_ms?: number | undefined
  data?: EpisodeSimple | PodcastSimple | CustomAudio | DeletedItem | undefined
  id?: number | undefined
  notes?: string | undefined
  type?: 'episode' | 'custom_audio' | 'podcast' | undefined
}
type PlaylistResponse = {
  description?: PlaylistDescriptionField | undefined
  id?: PlaylistIdField | undefined
  image?: PlaylistImageField | undefined
  items?: PlaylistItem[] | undefined
  last_timestamp_ms?: PlaylistLastTimestampMsField | undefined
  listennotes_url?: PlaylistListennotesUrlField | undefined
  name?: PlaylistNameField | undefined
  thumbnail?: PlaylistThumbnailField | undefined
  total?: number | undefined
  total_audio_length_sec?: number | undefined
  type?: 'episode_list' | 'podcast_list' | undefined
  visibility?: PlaylistVisibilityField | undefined
}
type GetPodcastsInBatchForm = {
  ids?: string | undefined
  itunes_ids?: string | undefined
  next_episode_pub_date?: number | undefined
  rsses?: string | undefined
  show_latest_episodes?: 0 | 1 | undefined
  spotify_ids?: string | undefined
}
type GetPodcastsInBatchResponse = {
  latest_episodes?: EpisodeSimple[] | undefined
  podcasts: PodcastSimple[]
}
type SubmitPodcastForm = { email?: string | undefined; rss: string }
type SubmitPodcastResponse = { podcast: PodcastMinimum; status: 'found' | 'in review' | 'rejected' }
type DeletePodcastResponse = { status: 'deleted' | 'in review' }
type EpisodeMinimum = {
  audio?: AudioField | undefined
  audio_length_sec?: AudioLengthSecField | undefined
  description?: EpisodeDescriptionField | undefined
  explicit_content?: ExplicitField | undefined
  id?: EpisodeIdField | undefined
  image?: ImageField | undefined
  link?: LinkField | undefined
  listennotes_edit_url?: EpisodeLNEditUrlField | undefined
  listennotes_url?: EpisodeLNUrlField | undefined
  maybe_audio_invalid?: MaybeAudioInvalidField | undefined
  pub_date_ms?: EpisodePubDateMsField | undefined
  thumbnail?: ThumbnailField | undefined
  title?: EpisodeNameField | undefined
}
type NextEpisodePubDateField = number
type PodcastFull = {
  audio_length_sec?: AvgAudioLengthSecField | undefined
  country?: CountryField | undefined
  description?: PodcastDescriptionField | undefined
  earliest_pub_date_ms?: EarliestPubDateMsField | undefined
  email?: EmailField | undefined
  episodes?: EpisodeMinimum[] | undefined
  explicit_content?: ExplicitField | undefined
  extra?: PodcastExtraField | undefined
  genre_ids?: GenreIdsField | undefined
  id?: PodcastIdField | undefined
  image?: ImageField | undefined
  is_claimed?: IsClaimedField | undefined
  itunes_id?: ITunesIdField | undefined
  language?: LanguageField | undefined
  latest_episode_id?: LatestEpisodeIdField | undefined
  latest_pub_date_ms?: LatestPubDateMsField | undefined
  listen_score?: ListenScoreField | undefined
  listen_score_global_rank?: ListenScoreGlobalRankField | undefined
  listennotes_url?: PodcastLNUrlField | undefined
  looking_for?: PodcastLookingForField | undefined
  next_episode_pub_date?: NextEpisodePubDateField | undefined
  publisher?: PublisherField | undefined
  rss?: RssField | undefined
  thumbnail?: ThumbnailField | undefined
  title?: PodcastNameField | undefined
  total_episodes?: TotalEpisodesField | undefined
  type?: PodcastTypeField | undefined
  update_frequency_hours?: UpdateFrequencyHoursField | undefined
  website?: WebsiteField | undefined
}
type PodcastAudienceResponse = {
  by_regions?: { ratio?: string | undefined; region?: string | undefined }[] | undefined
}
type GetPodcastRecommendationsResponse = { recommendations: PodcastSimple[] }
type GetRegionsResponse = { regions: { [x: string]: unknown } }
type RelatedSearchesResponse = { terms: string[] }
type PublisherHighlightedField = string
type PublisherOriginalField = string
type PodcastTitleHighlightedField = string
type PodcastTitleOriginalField = string
type EpisodeSearchResult = {
  audio?: AudioField | undefined
  audio_length_sec?: AudioLengthSecField | undefined
  description_highlighted?: string | undefined
  description_original?: string | undefined
  explicit_content?: ExplicitField | undefined
  id?: EpisodeIdField | undefined
  image?: EpisodeImageField | undefined
  itunes_id?: ITunesIdField | undefined
  link?: LinkField | undefined
  listennotes_url?: EpisodeLNUrlField | undefined
  podcast?:
    | {
        genre_ids?: GenreIdsField | undefined
        id?: PodcastIdField | undefined
        image?: ImageField | undefined
        listen_score?: ListenScoreField | undefined
        listen_score_global_rank?: ListenScoreGlobalRankField | undefined
        listennotes_url?: PodcastLNUrlField | undefined
        publisher_highlighted?: PublisherHighlightedField | undefined
        publisher_original?: PublisherOriginalField | undefined
        thumbnail?: ThumbnailField | undefined
        title_highlighted?: PodcastTitleHighlightedField | undefined
        title_original?: PodcastTitleOriginalField | undefined
      }
    | undefined
  pub_date_ms?: EpisodePubDateMsField | undefined
  rss?: RssField | undefined
  thumbnail?: EpisodeThumbnailField | undefined
  title_highlighted?: string | undefined
  title_original?: string | undefined
  transcripts_highlighted?: string[] | undefined
}
type PodcastSearchResult = {
  audio_length_sec?: AvgAudioLengthSecField | undefined
  description_highlighted?: string | undefined
  description_original?: string | undefined
  earliest_pub_date_ms?: EarliestPubDateMsField | undefined
  email?: EmailField | undefined
  explicit_content?: ExplicitField | undefined
  genre_ids?: GenreIdsField | undefined
  id?: PodcastIdField | undefined
  image?: ImageField | undefined
  itunes_id?: ITunesIdField | undefined
  latest_episode_id?: LatestEpisodeIdField | undefined
  latest_pub_date_ms?: LatestPubDateMsField | undefined
  listen_score?: ListenScoreField | undefined
  listen_score_global_rank?: ListenScoreGlobalRankField | undefined
  listennotes_url?: PodcastLNUrlField | undefined
  publisher_highlighted?: PublisherHighlightedField | undefined
  publisher_original?: PublisherOriginalField | undefined
  rss?: RssField | undefined
  thumbnail?: ThumbnailField | undefined
  title_highlighted?: PodcastTitleHighlightedField | undefined
  title_original?: PodcastTitleOriginalField | undefined
  total_episodes?: TotalEpisodesField | undefined
  update_frequency_hours?: UpdateFrequencyHoursField | undefined
  website?: WebsiteField | undefined
}
type CuratedListSearchResult = {
  description_highlighted?: string | undefined
  description_original?: string | undefined
  id?: CuratedIdField | undefined
  listennotes_url?: CuratedLNUrlField | undefined
  podcasts?: PodcastMinimum[] | undefined
  pub_date_ms?: CuratedPubDateMsField | undefined
  source_domain?: CuratedSourceDomainField | undefined
  source_url?: CuratedSourceUrlField | undefined
  title_highlighted?: string | undefined
  title_original?: string | undefined
  total?: CuratedTotalPodcastsField | undefined
}
type SearchResponse = {
  count?: number | undefined
  next_offset?: number | undefined
  results?: (EpisodeSearchResult | PodcastSearchResult | CuratedListSearchResult)[] | undefined
  took?: number | undefined
  total?: number | undefined
}
type SpellCheckResponse = {
  corrected_text_html: string
  tokens: {
    offset?: number | undefined
    suggestion?: string | undefined
    token?: string | undefined
  }[]
}
type TrendingSearchesResponse = { terms: string[] }
type PodcastTypeaheadResult = {
  explicit_content?: ExplicitField | undefined
  id?: PodcastIdField | undefined
  image?: ImageField | undefined
  publisher_highlighted?: PublisherHighlightedField | undefined
  publisher_original?: PublisherOriginalField | undefined
  thumbnail?: ThumbnailField | undefined
  title_highlighted?: PodcastTitleHighlightedField | undefined
  title_original?: PodcastTitleOriginalField | undefined
}
type TypeaheadResponse = {
  genres?: Genre[] | undefined
  podcasts?: PodcastTypeaheadResult[] | undefined
  terms: string[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/best_podcasts': {
      $get:
        | {
            input: {
              query: {
                genre_id?: string | undefined
                page?: number | undefined
                region?: string | undefined
                publisher_region?: string | undefined
                language?: string | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | 'listen_score'
                  | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: BestPodcastsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                genre_id?: string | undefined
                page?: number | undefined
                region?: string | undefined
                publisher_region?: string | undefined
                language?: string | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | 'listen_score'
                  | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                genre_id?: string | undefined
                page?: number | undefined
                region?: string | undefined
                publisher_region?: string | undefined
                language?: string | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | 'listen_score'
                  | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                genre_id?: string | undefined
                page?: number | undefined
                region?: string | undefined
                publisher_region?: string | undefined
                language?: string | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | 'listen_score'
                  | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                genre_id?: string | undefined
                page?: number | undefined
                region?: string | undefined
                publisher_region?: string | undefined
                language?: string | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | 'listen_score'
                  | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/curated_podcasts': {
      $get:
        | {
            input: { query: { page?: number | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: GetCuratedPodcastsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { page?: number | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { page?: number | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/curated_podcasts/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: CuratedListFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/episodes': {
      $post:
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: GetEpisodesInBatchForm } & {
              form: GetEpisodesInBatchForm
            }
            output: GetEpisodesInBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: GetEpisodesInBatchForm } & {
              form: GetEpisodesInBatchForm
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: GetEpisodesInBatchForm } & {
              form: GetEpisodesInBatchForm
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: GetEpisodesInBatchForm } & {
              form: GetEpisodesInBatchForm
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/episodes/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { show_transcript?: number | undefined }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: EpisodeFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { show_transcript?: number | undefined }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { show_transcript?: number | undefined }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { show_transcript?: number | undefined }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: { show_transcript?: number | undefined }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/episodes/:id/recommendations': {
      $get:
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: GetEpisodeRecommendationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/genres': {
      $get:
        | {
            input: { query: { top_level_only?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: GetGenresResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { top_level_only?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { top_level_only?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { top_level_only?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/just_listen': {
      $get:
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: EpisodeSimple
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/languages': {
      $get:
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: GetLanguagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/playlists': {
      $get:
        | {
            input: {
              query: {
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'name_a_to_z'
                  | 'name_z_to_a'
                  | undefined
                page?: number | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: PlaylistsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'name_a_to_z'
                  | 'name_z_to_a'
                  | undefined
                page?: number | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'name_a_to_z'
                  | 'name_z_to_a'
                  | undefined
                page?: number | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'name_a_to_z'
                  | 'name_z_to_a'
                  | undefined
                page?: number | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/playlists/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                type?: 'episode_list' | 'podcast_list' | undefined
                last_timestamp_ms?: number | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: PlaylistResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                type?: 'episode_list' | 'podcast_list' | undefined
                last_timestamp_ms?: number | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                type?: 'episode_list' | 'podcast_list' | undefined
                last_timestamp_ms?: number | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                type?: 'episode_list' | 'podcast_list' | undefined
                last_timestamp_ms?: number | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: {
                type?: 'episode_list' | 'podcast_list' | undefined
                last_timestamp_ms?: number | undefined
                sort?:
                  | 'recent_added_first'
                  | 'oldest_added_first'
                  | 'recent_published_first'
                  | 'oldest_published_first'
                  | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/podcasts': {
      $post:
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: GetPodcastsInBatchForm } & {
              form: GetPodcastsInBatchForm
            }
            output: GetPodcastsInBatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: GetPodcastsInBatchForm } & {
              form: GetPodcastsInBatchForm
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: GetPodcastsInBatchForm } & {
              form: GetPodcastsInBatchForm
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: GetPodcastsInBatchForm } & {
              form: GetPodcastsInBatchForm
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/podcasts/submit': {
      $post:
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: SubmitPodcastForm } & {
              form: SubmitPodcastForm
            }
            output: SubmitPodcastResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: SubmitPodcastForm } & {
              form: SubmitPodcastForm
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: SubmitPodcastForm } & {
              form: SubmitPodcastForm
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: SubmitPodcastForm } & {
              form: SubmitPodcastForm
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } } & { json: SubmitPodcastForm } & {
              form: SubmitPodcastForm
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/podcasts/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { reason?: string | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: DeletePodcastResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { reason?: string | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { reason?: string | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { reason?: string | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { reason?: string | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                next_episode_pub_date?: number | undefined
                sort?: 'recent_first' | 'oldest_first' | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: PodcastFull
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                next_episode_pub_date?: number | undefined
                sort?: 'recent_first' | 'oldest_first' | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                next_episode_pub_date?: number | undefined
                sort?: 'recent_first' | 'oldest_first' | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                next_episode_pub_date?: number | undefined
                sort?: 'recent_first' | 'oldest_first' | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              query: {
                next_episode_pub_date?: number | undefined
                sort?: 'recent_first' | 'oldest_first' | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/podcasts/:id/audience': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: PodcastAudienceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/podcasts/:id/recommendations': {
      $get:
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: GetPodcastRecommendationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { safe_mode?: 0 | 1 | undefined } } & {
              header: { 'X-ListenAPI-Key': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/regions': {
      $get:
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: GetRegionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/related_searches': {
      $get:
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: RelatedSearchesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search': {
      $get:
        | {
            input: {
              query: {
                q: string
                sort_by_date?: 0 | 1 | undefined
                type?: 'episode' | 'podcast' | 'curated' | undefined
                offset?: number | undefined
                len_min?: number | undefined
                len_max?: number | undefined
                episode_count_min?: number | undefined
                episode_count_max?: number | undefined
                update_freq_min?: number | undefined
                update_freq_max?: number | undefined
                genre_ids?: string | undefined
                published_before?: number | undefined
                published_after?: number | undefined
                only_in?: string | undefined
                language?: string | undefined
                region?: string | undefined
                ocid?: string | undefined
                ncid?: string | undefined
                safe_mode?: 0 | 1 | undefined
                unique_podcasts?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                sort_by_date?: 0 | 1 | undefined
                type?: 'episode' | 'podcast' | 'curated' | undefined
                offset?: number | undefined
                len_min?: number | undefined
                len_max?: number | undefined
                episode_count_min?: number | undefined
                episode_count_max?: number | undefined
                update_freq_min?: number | undefined
                update_freq_max?: number | undefined
                genre_ids?: string | undefined
                published_before?: number | undefined
                published_after?: number | undefined
                only_in?: string | undefined
                language?: string | undefined
                region?: string | undefined
                ocid?: string | undefined
                ncid?: string | undefined
                safe_mode?: 0 | 1 | undefined
                unique_podcasts?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                q: string
                sort_by_date?: 0 | 1 | undefined
                type?: 'episode' | 'podcast' | 'curated' | undefined
                offset?: number | undefined
                len_min?: number | undefined
                len_max?: number | undefined
                episode_count_min?: number | undefined
                episode_count_max?: number | undefined
                update_freq_min?: number | undefined
                update_freq_max?: number | undefined
                genre_ids?: string | undefined
                published_before?: number | undefined
                published_after?: number | undefined
                only_in?: string | undefined
                language?: string | undefined
                region?: string | undefined
                ocid?: string | undefined
                ncid?: string | undefined
                safe_mode?: 0 | 1 | undefined
                unique_podcasts?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                q: string
                sort_by_date?: 0 | 1 | undefined
                type?: 'episode' | 'podcast' | 'curated' | undefined
                offset?: number | undefined
                len_min?: number | undefined
                len_max?: number | undefined
                episode_count_min?: number | undefined
                episode_count_max?: number | undefined
                update_freq_min?: number | undefined
                update_freq_max?: number | undefined
                genre_ids?: string | undefined
                published_before?: number | undefined
                published_after?: number | undefined
                only_in?: string | undefined
                language?: string | undefined
                region?: string | undefined
                ocid?: string | undefined
                ncid?: string | undefined
                safe_mode?: 0 | 1 | undefined
                unique_podcasts?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                q: string
                sort_by_date?: 0 | 1 | undefined
                type?: 'episode' | 'podcast' | 'curated' | undefined
                offset?: number | undefined
                len_min?: number | undefined
                len_max?: number | undefined
                episode_count_min?: number | undefined
                episode_count_max?: number | undefined
                update_freq_min?: number | undefined
                update_freq_max?: number | undefined
                genre_ids?: string | undefined
                published_before?: number | undefined
                published_after?: number | undefined
                only_in?: string | undefined
                language?: string | undefined
                region?: string | undefined
                ocid?: string | undefined
                ncid?: string | undefined
                safe_mode?: 0 | 1 | undefined
                unique_podcasts?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/spellcheck': {
      $get:
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: SpellCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { q: string } } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/trending_searches': {
      $get:
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: TrendingSearchesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/typeahead': {
      $get:
        | {
            input: {
              query: {
                q: string
                show_podcasts?: 0 | 1 | undefined
                show_genres?: 0 | 1 | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: TypeaheadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                show_podcasts?: 0 | 1 | undefined
                show_genres?: 0 | 1 | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                q: string
                show_podcasts?: 0 | 1 | undefined
                show_genres?: 0 | 1 | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                q: string
                show_podcasts?: 0 | 1 | undefined
                show_genres?: 0 | 1 | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                q: string
                show_podcasts?: 0 | 1 | undefined
                show_genres?: 0 | 1 | undefined
                safe_mode?: 0 | 1 | undefined
              }
            } & { header: { 'X-ListenAPI-Key': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
