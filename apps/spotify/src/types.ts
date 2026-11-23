type ImageObject = { url: string; height: number | null; width: number | null }
type SimplifiedArtistObject = {
  external_urls?: { spotify?: string | undefined } | undefined
  href?: string | undefined
  id?: string | undefined
  name?: string | undefined
  type?: 'artist' | undefined
  uri?: string | undefined
}
type SimplifiedTrackObject = {
  artists?: SimplifiedArtistObject[] | undefined
  available_markets?: string[] | undefined
  disc_number?: number | undefined
  duration_ms?: number | undefined
  explicit?: boolean | undefined
  external_urls?: { spotify?: string | undefined } | undefined
  href?: string | undefined
  id?: string | undefined
  is_playable?: boolean | undefined
  linked_from?:
    | {
        external_urls?: { spotify?: string | undefined } | undefined
        href?: string | undefined
        id?: string | undefined
        type?: string | undefined
        uri?: string | undefined
      }
    | undefined
  restrictions?: { reason?: string | undefined } | undefined
  name?: string | undefined
  preview_url?: (string | null) | undefined
  track_number?: number | undefined
  type?: string | undefined
  uri?: string | undefined
  is_local?: boolean | undefined
}
type CopyrightObject = { text?: string | undefined; type?: string | undefined }
type AlbumObject = {
  album_type: 'album' | 'single' | 'compilation'
  total_tracks: number
  available_markets: string[]
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  restrictions?: { reason?: 'market' | 'product' | 'explicit' | undefined } | undefined
  type: 'album'
  uri: string
  artists?: SimplifiedArtistObject[] | undefined
  tracks?:
    | {
        href: string
        limit: number
        next: string | null
        offset: number
        previous: string | null
        total: number
        items?: SimplifiedTrackObject[] | undefined
      }
    | undefined
  copyrights?: CopyrightObject[] | undefined
  external_ids?:
    | { isrc?: string | undefined; ean?: string | undefined; upc?: string | undefined }
    | undefined
  genres?: string[] | undefined
  label?: string | undefined
  popularity?: number | undefined
}
type ErrorObject = { status: number; message: string }
type PagingSimplifiedTrackObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SimplifiedTrackObject[] | undefined
}
type ArtistObject = {
  external_urls?: { spotify?: string | undefined } | undefined
  followers?: { href?: (string | null) | undefined; total?: number | undefined } | undefined
  genres?: string[] | undefined
  href?: string | undefined
  id?: string | undefined
  images?: ImageObject[] | undefined
  name?: string | undefined
  popularity?: number | undefined
  type?: 'artist' | undefined
  uri?: string | undefined
}
type ArtistDiscographyAlbumObject = {
  album_type: 'album' | 'single' | 'compilation'
  total_tracks: number
  available_markets: string[]
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  restrictions?: { reason?: 'market' | 'product' | 'explicit' | undefined } | undefined
  type: 'album'
  uri: string
  artists: SimplifiedArtistObject[]
  album_group: 'album' | 'single' | 'compilation' | 'appears_on'
}
type PagingArtistDiscographyAlbumObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: ArtistDiscographyAlbumObject[] | undefined
}
type TrackObject = {
  album?:
    | {
        album_type: 'album' | 'single' | 'compilation'
        total_tracks: number
        available_markets: string[]
        external_urls: { spotify?: string | undefined }
        href: string
        id: string
        images: ImageObject[]
        name: string
        release_date: string
        release_date_precision: 'year' | 'month' | 'day'
        restrictions?: { reason?: 'market' | 'product' | 'explicit' | undefined } | undefined
        type: 'album'
        uri: string
        artists: SimplifiedArtistObject[]
      }
    | undefined
  artists?: SimplifiedArtistObject[] | undefined
  available_markets?: string[] | undefined
  disc_number?: number | undefined
  duration_ms?: number | undefined
  explicit?: boolean | undefined
  external_ids?:
    | { isrc?: string | undefined; ean?: string | undefined; upc?: string | undefined }
    | undefined
  external_urls?: { spotify?: string | undefined } | undefined
  href?: string | undefined
  id?: string | undefined
  is_playable?: boolean | undefined
  linked_from?:
    | {
        external_urls?: { spotify?: string | undefined } | undefined
        href?: string | undefined
        id?: string | undefined
        type?: string | undefined
        uri?: string | undefined
      }
    | undefined
  restrictions?: { reason?: string | undefined } | undefined
  name?: string | undefined
  popularity?: number | undefined
  preview_url?: (string | null) | undefined
  track_number?: number | undefined
  type?: 'track' | undefined
  uri?: string | undefined
  is_local?: boolean | undefined
}
type SimplifiedEpisodeObject = {
  audio_preview_url: string | null
  description: string
  html_description: string
  duration_ms: number
  explicit: boolean
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  is_externally_hosted: boolean
  is_playable: boolean
  language?: string | undefined
  languages: string[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  resume_point?:
    | { fully_played?: boolean | undefined; resume_position_ms?: number | undefined }
    | undefined
  type: 'episode'
  uri: string
  restrictions?: { reason?: string | undefined } | undefined
}
type ShowObject = {
  available_markets: string[]
  copyrights: CopyrightObject[]
  description: string
  html_description: string
  explicit: boolean
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  is_externally_hosted: boolean
  languages: string[]
  media_type: string
  name: string
  publisher: string
  type: 'show'
  uri: string
  total_episodes: number
  episodes: {
    href: string
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
    items?: SimplifiedEpisodeObject[] | undefined
  }
}
type SimplifiedShowObject = {
  available_markets: string[]
  copyrights: CopyrightObject[]
  description: string
  html_description: string
  explicit: boolean
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  is_externally_hosted: boolean
  languages: string[]
  media_type: string
  name: string
  publisher: string
  type: 'show'
  uri: string
  total_episodes: number
}
type PagingSimplifiedEpisodeObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SimplifiedEpisodeObject[] | undefined
}
type EpisodeObject = {
  audio_preview_url: string | null
  description: string
  html_description: string
  duration_ms: number
  explicit: boolean
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  is_externally_hosted: boolean
  is_playable: boolean
  language?: string | undefined
  languages: string[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  resume_point?:
    | { fully_played?: boolean | undefined; resume_position_ms?: number | undefined }
    | undefined
  type: 'episode'
  uri: string
  restrictions?: { reason?: string | undefined } | undefined
  show: {
    available_markets: string[]
    copyrights: CopyrightObject[]
    description: string
    html_description: string
    explicit: boolean
    external_urls: { spotify?: string | undefined }
    href: string
    id: string
    images: ImageObject[]
    is_externally_hosted: boolean
    languages: string[]
    media_type: string
    name: string
    publisher: string
    type: 'show'
    uri: string
    total_episodes: number
  }
}
type AuthorObject = { name?: string | undefined }
type NarratorObject = { name?: string | undefined }
type SimplifiedChapterObject = {
  audio_preview_url: string | null
  available_markets?: string[] | undefined
  chapter_number: number
  description: string
  html_description: string
  duration_ms: number
  explicit: boolean
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  is_playable: boolean
  languages: string[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  resume_point?:
    | { fully_played?: boolean | undefined; resume_position_ms?: number | undefined }
    | undefined
  type: 'episode'
  uri: string
  restrictions?: { reason?: string | undefined } | undefined
}
type AudiobookObject = {
  authors: AuthorObject[]
  available_markets: string[]
  copyrights: CopyrightObject[]
  description: string
  html_description: string
  edition?: string | undefined
  explicit: boolean
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  languages: string[]
  media_type: string
  name: string
  narrators: NarratorObject[]
  publisher: string
  type: 'audiobook'
  uri: string
  total_chapters: number
  chapters: {
    href: string
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
    items?: SimplifiedChapterObject[] | undefined
  }
}
type PagingSimplifiedChapterObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SimplifiedChapterObject[] | undefined
}
type SavedAudiobookObject = {
  added_at?: string | undefined
  audiobook?:
    | {
        authors: AuthorObject[]
        available_markets: string[]
        copyrights: CopyrightObject[]
        description: string
        html_description: string
        edition?: string | undefined
        explicit: boolean
        external_urls: { spotify?: string | undefined }
        href: string
        id: string
        images: ImageObject[]
        languages: string[]
        media_type: string
        name: string
        narrators: NarratorObject[]
        publisher: string
        type: 'audiobook'
        uri: string
        total_chapters: number
        chapters: {
          href: string
          limit: number
          next: string | null
          offset: number
          previous: string | null
          total: number
          items?: SimplifiedChapterObject[] | undefined
        }
      }
    | undefined
}
type PagingSavedAudiobookObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SavedAudiobookObject[] | undefined
}
type ChapterObject = {
  audio_preview_url: string | null
  available_markets?: string[] | undefined
  chapter_number: number
  description: string
  html_description: string
  duration_ms: number
  explicit: boolean
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  is_playable: boolean
  languages: string[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  resume_point?:
    | { fully_played?: boolean | undefined; resume_position_ms?: number | undefined }
    | undefined
  type: 'episode'
  uri: string
  restrictions?: { reason?: string | undefined } | undefined
  audiobook: {
    authors: AuthorObject[]
    available_markets: string[]
    copyrights: CopyrightObject[]
    description: string
    html_description: string
    edition?: string | undefined
    explicit: boolean
    external_urls: { spotify?: string | undefined }
    href: string
    id: string
    images: ImageObject[]
    languages: string[]
    media_type: string
    name: string
    narrators: NarratorObject[]
    publisher: string
    type: 'audiobook'
    uri: string
    total_chapters: number
  }
}
type PagingTrackObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: TrackObject[] | undefined
}
type PagingArtistObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: ArtistObject[] | undefined
}
type SimplifiedAlbumObject = {
  album_type: 'album' | 'single' | 'compilation'
  total_tracks: number
  available_markets: string[]
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  name: string
  release_date: string
  release_date_precision: 'year' | 'month' | 'day'
  restrictions?: { reason?: 'market' | 'product' | 'explicit' | undefined } | undefined
  type: 'album'
  uri: string
  artists: SimplifiedArtistObject[]
}
type PagingSimplifiedAlbumObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SimplifiedAlbumObject[] | undefined
}
type SimplifiedPlaylistObject = {
  collaborative?: boolean | undefined
  description?: string | undefined
  external_urls?: { spotify?: string | undefined } | undefined
  href?: string | undefined
  id?: string | undefined
  images?: ImageObject[] | undefined
  name?: string | undefined
  owner?:
    | {
        external_urls?: { spotify?: string | undefined } | undefined
        href?: string | undefined
        id?: string | undefined
        type?: 'user' | undefined
        uri?: string | undefined
        display_name?: (string | null) | undefined
      }
    | undefined
  public?: boolean | undefined
  snapshot_id?: string | undefined
  items?: { href?: string | undefined; total?: number | undefined } | undefined
  tracks?: { href?: string | undefined; total?: number | undefined } | undefined
  type?: string | undefined
  uri?: string | undefined
}
type PagingPlaylistObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SimplifiedPlaylistObject[] | undefined
}
type PagingSimplifiedShowObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SimplifiedShowObject[] | undefined
}
type SimplifiedAudiobookObject = {
  authors: AuthorObject[]
  available_markets: string[]
  copyrights: CopyrightObject[]
  description: string
  html_description: string
  edition?: string | undefined
  explicit: boolean
  external_urls: { spotify?: string | undefined }
  href: string
  id: string
  images: ImageObject[]
  languages: string[]
  media_type: string
  name: string
  narrators: NarratorObject[]
  publisher: string
  type: 'audiobook'
  uri: string
  total_chapters: number
}
type PagingSimplifiedAudiobookObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SimplifiedAudiobookObject[] | undefined
}
type PrivateUserObject = {
  account_id?: string | undefined
  country?: string | undefined
  display_name?: string | undefined
  email?: string | undefined
  explicit_content?:
    | { filter_enabled?: boolean | undefined; filter_locked?: boolean | undefined }
    | undefined
  external_urls?: { spotify?: string | undefined } | undefined
  followers?: { href?: (string | null) | undefined; total?: number | undefined } | undefined
  href?: string | undefined
  id?: string | undefined
  images?: ImageObject[] | undefined
  product?: string | undefined
  type?: string | undefined
  uri?: string | undefined
}
type PlaylistTrackObject = {
  added_at?: string | undefined
  added_by?:
    | {
        external_urls?: { spotify?: string | undefined } | undefined
        href?: string | undefined
        id?: string | undefined
        type?: 'user' | undefined
        uri?: string | undefined
      }
    | undefined
  is_local?: boolean | undefined
  item?: TrackObject | EpisodeObject | undefined
  track?: TrackObject | EpisodeObject | undefined
}
type PlaylistObject = {
  collaborative?: boolean | undefined
  description?: (string | null) | undefined
  external_urls?: { spotify?: string | undefined } | undefined
  href?: string | undefined
  id?: string | undefined
  images?: ImageObject[] | undefined
  name?: string | undefined
  owner?:
    | {
        external_urls?: { spotify?: string | undefined } | undefined
        href?: string | undefined
        id?: string | undefined
        type?: 'user' | undefined
        uri?: string | undefined
        display_name?: (string | null) | undefined
      }
    | undefined
  public?: boolean | undefined
  snapshot_id?: string | undefined
  items?:
    | {
        href: string
        limit: number
        next: string | null
        offset: number
        previous: string | null
        total: number
        items?: PlaylistTrackObject[] | undefined
      }
    | undefined
  tracks?:
    | {
        href: string
        limit: number
        next: string | null
        offset: number
        previous: string | null
        total: number
        items?: PlaylistTrackObject[] | undefined
      }
    | undefined
  type?: string | undefined
  uri?: string | undefined
  followers?: { href?: (string | null) | undefined; total?: number | undefined } | undefined
}
type PagingPlaylistTrackObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: PlaylistTrackObject[] | undefined
}
type SavedAlbumObject = {
  added_at?: string | undefined
  album?:
    | {
        album_type: 'album' | 'single' | 'compilation'
        total_tracks: number
        available_markets: string[]
        external_urls: { spotify?: string | undefined }
        href: string
        id: string
        images: ImageObject[]
        name: string
        release_date: string
        release_date_precision: 'year' | 'month' | 'day'
        restrictions?: { reason?: 'market' | 'product' | 'explicit' | undefined } | undefined
        type: 'album'
        uri: string
        artists?: SimplifiedArtistObject[] | undefined
        tracks?:
          | {
              href: string
              limit: number
              next: string | null
              offset: number
              previous: string | null
              total: number
              items?: SimplifiedTrackObject[] | undefined
            }
          | undefined
        copyrights?: CopyrightObject[] | undefined
        external_ids?:
          | { isrc?: string | undefined; ean?: string | undefined; upc?: string | undefined }
          | undefined
        genres?: string[] | undefined
        label?: string | undefined
        popularity?: number | undefined
      }
    | undefined
}
type PagingSavedAlbumObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SavedAlbumObject[] | undefined
}
type SavedTrackObject = {
  added_at?: string | undefined
  track?:
    | {
        album?:
          | {
              album_type: 'album' | 'single' | 'compilation'
              total_tracks: number
              available_markets: string[]
              external_urls: { spotify?: string | undefined }
              href: string
              id: string
              images: ImageObject[]
              name: string
              release_date: string
              release_date_precision: 'year' | 'month' | 'day'
              restrictions?: { reason?: 'market' | 'product' | 'explicit' | undefined } | undefined
              type: 'album'
              uri: string
              artists: SimplifiedArtistObject[]
            }
          | undefined
        artists?: SimplifiedArtistObject[] | undefined
        available_markets?: string[] | undefined
        disc_number?: number | undefined
        duration_ms?: number | undefined
        explicit?: boolean | undefined
        external_ids?:
          | { isrc?: string | undefined; ean?: string | undefined; upc?: string | undefined }
          | undefined
        external_urls?: { spotify?: string | undefined } | undefined
        href?: string | undefined
        id?: string | undefined
        is_playable?: boolean | undefined
        linked_from?:
          | {
              external_urls?: { spotify?: string | undefined } | undefined
              href?: string | undefined
              id?: string | undefined
              type?: string | undefined
              uri?: string | undefined
            }
          | undefined
        restrictions?: { reason?: string | undefined } | undefined
        name?: string | undefined
        popularity?: number | undefined
        preview_url?: (string | null) | undefined
        track_number?: number | undefined
        type?: 'track' | undefined
        uri?: string | undefined
        is_local?: boolean | undefined
      }
    | undefined
}
type PagingSavedTrackObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SavedTrackObject[] | undefined
}
type SavedEpisodeObject = {
  added_at?: string | undefined
  episode?:
    | {
        audio_preview_url: string | null
        description: string
        html_description: string
        duration_ms: number
        explicit: boolean
        external_urls: { spotify?: string | undefined }
        href: string
        id: string
        images: ImageObject[]
        is_externally_hosted: boolean
        is_playable: boolean
        language?: string | undefined
        languages: string[]
        name: string
        release_date: string
        release_date_precision: 'year' | 'month' | 'day'
        resume_point?:
          | { fully_played?: boolean | undefined; resume_position_ms?: number | undefined }
          | undefined
        type: 'episode'
        uri: string
        restrictions?: { reason?: string | undefined } | undefined
        show: {
          available_markets: string[]
          copyrights: CopyrightObject[]
          description: string
          html_description: string
          explicit: boolean
          external_urls: { spotify?: string | undefined }
          href: string
          id: string
          images: ImageObject[]
          is_externally_hosted: boolean
          languages: string[]
          media_type: string
          name: string
          publisher: string
          type: 'show'
          uri: string
          total_episodes: number
        }
      }
    | undefined
}
type PagingSavedEpisodeObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SavedEpisodeObject[] | undefined
}
type SavedShowObject = {
  added_at?: string | undefined
  show?:
    | {
        available_markets: string[]
        copyrights: CopyrightObject[]
        description: string
        html_description: string
        explicit: boolean
        external_urls: { spotify?: string | undefined }
        href: string
        id: string
        images: ImageObject[]
        is_externally_hosted: boolean
        languages: string[]
        media_type: string
        name: string
        publisher: string
        type: 'show'
        uri: string
        total_episodes: number
      }
    | undefined
}
type PagingSavedShowObject = {
  href: string
  limit: number
  next: string | null
  offset: number
  previous: string | null
  total: number
  items?: SavedShowObject[] | undefined
}
type PublicUserObject = {
  display_name?: (string | null) | undefined
  external_urls?: { spotify?: string | undefined } | undefined
  followers?: { href?: (string | null) | undefined; total?: number | undefined } | undefined
  href?: string | undefined
  id?: string | undefined
  images?: ImageObject[] | undefined
  type?: 'user' | undefined
  uri?: string | undefined
}
type PagingFeaturedPlaylistObject = {
  message?: string | undefined
  playlists?: PagingPlaylistObject | undefined
}
type CategoryObject = { href: string; icons: ImageObject[]; id: string; name: string }
type CursorPagingSimplifiedArtistObject = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  cursors?: { after?: string | undefined; before?: string | undefined } | undefined
  total?: number | undefined
  items?: ArtistObject[] | undefined
}
type Key = number
type Loudness = number
type Mode = number
type Tempo = number
type TimeSignature = number
type AudioFeaturesObject = {
  acousticness?: number | undefined
  analysis_url?: string | undefined
  danceability?: number | undefined
  duration_ms?: number | undefined
  energy?: number | undefined
  id?: string | undefined
  instrumentalness?: number | undefined
  key?: Key | undefined
  liveness?: number | undefined
  loudness?: Loudness | undefined
  mode?: Mode | undefined
  speechiness?: number | undefined
  tempo?: Tempo | undefined
  time_signature?: TimeSignature | undefined
  track_href?: string | undefined
  type?: 'audio_features' | undefined
  uri?: string | undefined
  valence?: number | undefined
}
type TimeIntervalObject = {
  start?: number | undefined
  duration?: number | undefined
  confidence?: number | undefined
}
type SectionObject = {
  start?: number | undefined
  duration?: number | undefined
  confidence?: number | undefined
  loudness?: number | undefined
  tempo?: number | undefined
  tempo_confidence?: number | undefined
  key?: number | undefined
  key_confidence?: number | undefined
  mode?: -1 | 0 | 1 | undefined
  mode_confidence?: number | undefined
  time_signature?: TimeSignature | undefined
  time_signature_confidence?: number | undefined
}
type SegmentObject = {
  start?: number | undefined
  duration?: number | undefined
  confidence?: number | undefined
  loudness_start?: number | undefined
  loudness_max?: number | undefined
  loudness_max_time?: number | undefined
  loudness_end?: number | undefined
  pitches?: number[] | undefined
  timbre?: number[] | undefined
}
type AudioAnalysisObject = {
  meta?:
    | {
        analyzer_version?: string | undefined
        platform?: string | undefined
        detailed_status?: string | undefined
        status_code?: number | undefined
        timestamp?: bigint | undefined
        analysis_time?: number | undefined
        input_process?: string | undefined
      }
    | undefined
  track?:
    | {
        num_samples?: number | undefined
        duration?: number | undefined
        sample_md5?: string | undefined
        offset_seconds?: number | undefined
        window_seconds?: number | undefined
        analysis_sample_rate?: number | undefined
        analysis_channels?: number | undefined
        end_of_fade_in?: number | undefined
        start_of_fade_out?: number | undefined
        loudness?: Loudness | undefined
        tempo?: Tempo | undefined
        tempo_confidence?: number | undefined
        time_signature?: TimeSignature | undefined
        time_signature_confidence?: number | undefined
        key?: Key | undefined
        key_confidence?: number | undefined
        mode?: Mode | undefined
        mode_confidence?: number | undefined
        codestring?: string | undefined
        code_version?: number | undefined
        echoprintstring?: string | undefined
        echoprint_version?: number | undefined
        synchstring?: string | undefined
        synch_version?: number | undefined
        rhythmstring?: string | undefined
        rhythm_version?: number | undefined
      }
    | undefined
  bars?: TimeIntervalObject[] | undefined
  beats?: TimeIntervalObject[] | undefined
  sections?: SectionObject[] | undefined
  segments?: SegmentObject[] | undefined
  tatums?: TimeIntervalObject[] | undefined
}
type RecommendationSeedObject = {
  afterFilteringSize?: number | undefined
  afterRelinkingSize?: number | undefined
  href?: string | undefined
  id?: string | undefined
  initialPoolSize?: number | undefined
  type?: string | undefined
}
type RecommendationsObject = { seeds: RecommendationSeedObject[]; tracks: TrackObject[] }
type CurrentlyPlayingContextObject = {
  device?:
    | {
        id?: (string | null) | undefined
        is_active?: boolean | undefined
        is_private_session?: boolean | undefined
        is_restricted?: boolean | undefined
        name?: string | undefined
        type?: string | undefined
        volume_percent?: (number | null) | undefined
        supports_volume?: boolean | undefined
      }
    | undefined
  repeat_state?: string | undefined
  shuffle_state?: boolean | undefined
  context?:
    | {
        type?: string | undefined
        href?: string | undefined
        external_urls?: { spotify?: string | undefined } | undefined
        uri?: string | undefined
      }
    | undefined
  timestamp?: bigint | undefined
  progress_ms?: number | undefined
  is_playing?: boolean | undefined
  item?: TrackObject | EpisodeObject | undefined
  currently_playing_type?: string | undefined
  actions?:
    | {
        interrupting_playback?: boolean | undefined
        pausing?: boolean | undefined
        resuming?: boolean | undefined
        seeking?: boolean | undefined
        skipping_next?: boolean | undefined
        skipping_prev?: boolean | undefined
        toggling_repeat_context?: boolean | undefined
        toggling_shuffle?: boolean | undefined
        toggling_repeat_track?: boolean | undefined
        transferring_playback?: boolean | undefined
      }
    | undefined
}
type DeviceObject = {
  id?: (string | null) | undefined
  is_active?: boolean | undefined
  is_private_session?: boolean | undefined
  is_restricted?: boolean | undefined
  name?: string | undefined
  type?: string | undefined
  volume_percent?: (number | null) | undefined
  supports_volume?: boolean | undefined
}
type CurrentlyPlayingObject = {
  context?:
    | {
        type?: string | undefined
        href?: string | undefined
        external_urls?: { spotify?: string | undefined } | undefined
        uri?: string | undefined
      }
    | undefined
  timestamp?: bigint | undefined
  progress_ms?: number | undefined
  is_playing?: boolean | undefined
  item?: TrackObject | EpisodeObject | undefined
  currently_playing_type?: string | undefined
  actions?:
    | {
        interrupting_playback?: boolean | undefined
        pausing?: boolean | undefined
        resuming?: boolean | undefined
        seeking?: boolean | undefined
        skipping_next?: boolean | undefined
        skipping_prev?: boolean | undefined
        toggling_repeat_context?: boolean | undefined
        toggling_shuffle?: boolean | undefined
        toggling_repeat_track?: boolean | undefined
        transferring_playback?: boolean | undefined
      }
    | undefined
}
type PlayHistoryObject = {
  track?:
    | {
        album?:
          | {
              album_type: 'album' | 'single' | 'compilation'
              total_tracks: number
              available_markets: string[]
              external_urls: { spotify?: string | undefined }
              href: string
              id: string
              images: ImageObject[]
              name: string
              release_date: string
              release_date_precision: 'year' | 'month' | 'day'
              restrictions?: { reason?: 'market' | 'product' | 'explicit' | undefined } | undefined
              type: 'album'
              uri: string
              artists: SimplifiedArtistObject[]
            }
          | undefined
        artists?: SimplifiedArtistObject[] | undefined
        available_markets?: string[] | undefined
        disc_number?: number | undefined
        duration_ms?: number | undefined
        explicit?: boolean | undefined
        external_ids?:
          | { isrc?: string | undefined; ean?: string | undefined; upc?: string | undefined }
          | undefined
        external_urls?: { spotify?: string | undefined } | undefined
        href?: string | undefined
        id?: string | undefined
        is_playable?: boolean | undefined
        linked_from?:
          | {
              external_urls?: { spotify?: string | undefined } | undefined
              href?: string | undefined
              id?: string | undefined
              type?: string | undefined
              uri?: string | undefined
            }
          | undefined
        restrictions?: { reason?: string | undefined } | undefined
        name?: string | undefined
        popularity?: number | undefined
        preview_url?: (string | null) | undefined
        track_number?: number | undefined
        type?: 'track' | undefined
        uri?: string | undefined
        is_local?: boolean | undefined
      }
    | undefined
  played_at?: string | undefined
  context?:
    | {
        type?: string | undefined
        href?: string | undefined
        external_urls?: { spotify?: string | undefined } | undefined
        uri?: string | undefined
      }
    | undefined
}
type CursorPagingPlayHistoryObject = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  cursors?: { after?: string | undefined; before?: string | undefined } | undefined
  total?: number | undefined
  items?: PlayHistoryObject[] | undefined
}
type QueueObject = {
  currently_playing?: TrackObject | EpisodeObject | undefined
  queue?: (TrackObject | EpisodeObject)[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/albums/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: AlbumObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/albums': {
      $get:
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { albums: AlbumObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/albums/:id/tracks': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PagingSimplifiedTrackObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/artists/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ArtistObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/artists': {
      $get:
        | {
            input: { query: { ids: string } }
            output: { artists: ArtistObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/artists/:id/albums': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include_groups?: string | undefined
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PagingArtistDiscographyAlbumObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_groups?: string | undefined
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_groups?: string | undefined
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include_groups?: string | undefined
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/artists/:id/top-tracks': {
      $get:
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { tracks: TrackObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/artists/:id/related-artists': {
      $get:
        | {
            input: { param: { id: string } }
            output: { artists: ArtistObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/shows/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: ShowObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/shows': {
      $get:
        | {
            input: { query: { market?: string | undefined; ids: string } }
            output: { shows: SimplifiedShowObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { market?: string | undefined; ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { market?: string | undefined; ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { market?: string | undefined; ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/shows/:id/episodes': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PagingSimplifiedEpisodeObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/episodes/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: EpisodeObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/episodes': {
      $get:
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { episodes: EpisodeObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/audiobooks/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: AudiobookObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/audiobooks': {
      $get:
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { audiobooks: AudiobookObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/audiobooks/:id/chapters': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PagingSimplifiedChapterObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/audiobooks': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: PagingSavedAudiobookObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | { input: { query: { ids: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: { query: { ids: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/audiobooks/contains': {
      $get:
        | {
            input: { query: { ids: string } }
            output: boolean[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/chapters/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: ChapterObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/chapters': {
      $get:
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { chapters: ChapterObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string; market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/tracks/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: TrackObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { market?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/tracks': {
      $get:
        | {
            input: { query: { market?: string | undefined; ids: string } }
            output: { tracks: TrackObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { market?: string | undefined; ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { market?: string | undefined; ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { market?: string | undefined; ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/search': {
      $get:
        | {
            input: {
              query: {
                q: string
                type: (
                  | 'album'
                  | 'artist'
                  | 'playlist'
                  | 'track'
                  | 'show'
                  | 'episode'
                  | 'audiobook'
                )[]
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                include_external?: 'audio' | undefined
              }
            }
            output: {
              tracks?: PagingTrackObject | undefined
              artists?: PagingArtistObject | undefined
              albums?: PagingSimplifiedAlbumObject | undefined
              playlists?: PagingPlaylistObject | undefined
              shows?: PagingSimplifiedShowObject | undefined
              episodes?: PagingSimplifiedEpisodeObject | undefined
              audiobooks?: PagingSimplifiedAudiobookObject | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                type: (
                  | 'album'
                  | 'artist'
                  | 'playlist'
                  | 'track'
                  | 'show'
                  | 'episode'
                  | 'audiobook'
                )[]
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                include_external?: 'audio' | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                q: string
                type: (
                  | 'album'
                  | 'artist'
                  | 'playlist'
                  | 'track'
                  | 'show'
                  | 'episode'
                  | 'audiobook'
                )[]
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                include_external?: 'audio' | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                q: string
                type: (
                  | 'album'
                  | 'artist'
                  | 'playlist'
                  | 'track'
                  | 'show'
                  | 'episode'
                  | 'audiobook'
                )[]
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                include_external?: 'audio' | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me': {
      $get:
        | { input: {}; output: PrivateUserObject; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/playlists/:playlist_id': {
      $get:
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                additional_types?: string | undefined
              }
            }
            output: PlaylistObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                additional_types?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                additional_types?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                additional_types?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { playlist_id: string } } & {
              json: {
                name?: string | undefined
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & {
              json: {
                name?: string | undefined
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & {
              json: {
                name?: string | undefined
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & {
              json: {
                name?: string | undefined
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/playlists/:playlist_id/tracks': {
      $get:
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                additional_types?: string | undefined
              }
            }
            output: PagingPlaylistTrackObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                additional_types?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                additional_types?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                additional_types?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { playlist_id: string } } & {
              query: { position?: number | undefined; uris?: string | undefined }
            } & { json: { uris?: string[] | undefined; position?: number | undefined } }
            output: { snapshot_id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: { position?: number | undefined; uris?: string | undefined }
            } & { json: { uris?: string[] | undefined; position?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: { position?: number | undefined; uris?: string | undefined }
            } & { json: { uris?: string[] | undefined; position?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: { position?: number | undefined; uris?: string | undefined }
            } & { json: { uris?: string[] | undefined; position?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { playlist_id: string } } & { query: { uris?: string | undefined } } & {
              json: {
                uris?: string[] | undefined
                range_start?: number | undefined
                insert_before?: number | undefined
                range_length?: number | undefined
                snapshot_id?: string | undefined
              }
            }
            output: { snapshot_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & { query: { uris?: string | undefined } } & {
              json: {
                uris?: string[] | undefined
                range_start?: number | undefined
                insert_before?: number | undefined
                range_length?: number | undefined
                snapshot_id?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & { query: { uris?: string | undefined } } & {
              json: {
                uris?: string[] | undefined
                range_start?: number | undefined
                insert_before?: number | undefined
                range_length?: number | undefined
                snapshot_id?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & { query: { uris?: string | undefined } } & {
              json: {
                uris?: string[] | undefined
                range_start?: number | undefined
                insert_before?: number | undefined
                range_length?: number | undefined
                snapshot_id?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { playlist_id: string } } & {
              json: { tracks: { uri?: string | undefined }[]; snapshot_id?: string | undefined }
            }
            output: { snapshot_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & {
              json: { tracks: { uri?: string | undefined }[]; snapshot_id?: string | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & {
              json: { tracks: { uri?: string | undefined }[]; snapshot_id?: string | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & {
              json: { tracks: { uri?: string | undefined }[]; snapshot_id?: string | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/playlists/:playlist_id/items': {
      $get:
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                additional_types?: string | undefined
              }
            }
            output: PagingPlaylistTrackObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                additional_types?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                additional_types?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: {
                market?: string | undefined
                fields?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                additional_types?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { playlist_id: string } } & {
              query: { position?: number | undefined; uris?: string | undefined }
            } & { json: { uris?: string[] | undefined; position?: number | undefined } }
            output: { snapshot_id?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: { position?: number | undefined; uris?: string | undefined }
            } & { json: { uris?: string[] | undefined; position?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: { position?: number | undefined; uris?: string | undefined }
            } & { json: { uris?: string[] | undefined; position?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & {
              query: { position?: number | undefined; uris?: string | undefined }
            } & { json: { uris?: string[] | undefined; position?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { playlist_id: string } } & { query: { uris?: string | undefined } } & {
              json: {
                uris?: string[] | undefined
                range_start?: number | undefined
                insert_before?: number | undefined
                range_length?: number | undefined
                snapshot_id?: string | undefined
              }
            }
            output: { snapshot_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & { query: { uris?: string | undefined } } & {
              json: {
                uris?: string[] | undefined
                range_start?: number | undefined
                insert_before?: number | undefined
                range_length?: number | undefined
                snapshot_id?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & { query: { uris?: string | undefined } } & {
              json: {
                uris?: string[] | undefined
                range_start?: number | undefined
                insert_before?: number | undefined
                range_length?: number | undefined
                snapshot_id?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & { query: { uris?: string | undefined } } & {
              json: {
                uris?: string[] | undefined
                range_start?: number | undefined
                insert_before?: number | undefined
                range_length?: number | undefined
                snapshot_id?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { playlist_id: string } } & {
              json: { items: { uri?: string | undefined }[]; snapshot_id?: string | undefined }
            }
            output: { snapshot_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & {
              json: { items: { uri?: string | undefined }[]; snapshot_id?: string | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & {
              json: { items: { uri?: string | undefined }[]; snapshot_id?: string | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & {
              json: { items: { uri?: string | undefined }[]; snapshot_id?: string | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/playlists': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: PagingPlaylistObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              json: {
                name: string
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: PlaylistObject
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/library': {
      $put:
        | { input: { query: { uris: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { query: { uris: string } }
            output: ErrorObject
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { uris: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { uris: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { uris: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: { query: { uris: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { query: { uris: string } }
            output: ErrorObject
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { uris: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { uris: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { uris: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/library/contains': {
      $get:
        | {
            input: { query: { uris: string } }
            output: boolean[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { uris: string } }
            output: ErrorObject
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { uris: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { uris: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { uris: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/albums': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                market?: string | undefined
              }
            }
            output: PagingSavedAlbumObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                market?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                market?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                market?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/albums/contains': {
      $get:
        | {
            input: { query: { ids: string } }
            output: boolean[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/tracks': {
      $get:
        | {
            input: {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PagingSavedTrackObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: {
              json: {
                ids: string[]
                timestamped_ids?: { id: string; added_at: string }[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                ids: string[]
                timestamped_ids?: { id: string; added_at: string }[] | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                ids: string[]
                timestamped_ids?: { id: string; added_at: string }[] | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                ids: string[]
                timestamped_ids?: { id: string; added_at: string }[] | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/tracks/contains': {
      $get:
        | {
            input: { query: { ids: string } }
            output: boolean[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/episodes': {
      $get:
        | {
            input: {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PagingSavedEpisodeObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                market?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { query: { ids: string } } & { json: { ids: string[] } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { ids: string } } & { json: { ids: string[] } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } } & { json: { ids: string[] } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } } & { json: { ids: string[] } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/episodes/contains': {
      $get:
        | {
            input: { query: { ids: string } }
            output: boolean[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/shows': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: PagingSavedShowObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } } & { json: { ids?: string[] | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { query: { ids: string; market?: string | undefined } } & {
              json: { ids?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { ids: string; market?: string | undefined } } & {
              json: { ids?: string[] | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string; market?: string | undefined } } & {
              json: { ids?: string[] | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string; market?: string | undefined } } & {
              json: { ids?: string[] | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/shows/contains': {
      $get:
        | {
            input: { query: { ids: string } }
            output: boolean[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/:user_id': {
      $get:
        | {
            input: { param: { user_id: string } }
            output: PublicUserObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/users/:user_id/playlists': {
      $get:
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: PagingPlaylistObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { user_id: string } } & {
              json: {
                name: string
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: PlaylistObject
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                name: string
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                name: string
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: string } } & {
              json: {
                name: string
                public?: boolean | undefined
                collaborative?: boolean | undefined
                description?: string | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/playlists/:playlist_id/followers': {
      $put:
        | {
            input: { param: { playlist_id: string } } & { json: { public?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & { json: { public?: boolean | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & { json: { public?: boolean | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & { json: { public?: boolean | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { playlist_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { playlist_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/browse/featured-playlists': {
      $get:
        | {
            input: {
              query: {
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PagingFeaturedPlaylistObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/browse/categories': {
      $get:
        | {
            input: {
              query: {
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              categories: {
                href: string
                limit: number
                next: string | null
                offset: number
                previous: string | null
                total: number
                items?: CategoryObject[] | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                locale?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/browse/categories/:category_id': {
      $get:
        | {
            input: { param: { category_id: string } } & { query: { locale?: string | undefined } }
            output: CategoryObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { category_id: string } } & { query: { locale?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { category_id: string } } & { query: { locale?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { category_id: string } } & { query: { locale?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/browse/categories/:category_id/playlists': {
      $get:
        | {
            input: { param: { category_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: PagingFeaturedPlaylistObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { category_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { category_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { category_id: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/playlists/:playlist_id/images': {
      $get:
        | {
            input: { param: { playlist_id: string } }
            output: ImageObject[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlist_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { playlist_id: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { playlist_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/browse/new-releases': {
      $get:
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { albums: PagingSimplifiedAlbumObject }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; offset?: number | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/following': {
      $get:
        | {
            input: {
              query: { type: 'artist'; after?: string | undefined; limit?: number | undefined }
            }
            output: { artists: CursorPagingSimplifiedArtistObject }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { type: 'artist'; after?: string | undefined; limit?: number | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { type: 'artist'; after?: string | undefined; limit?: number | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { type: 'artist'; after?: string | undefined; limit?: number | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } } & { json: { ids: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } } & { json: { ids: string[] } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } } & { json: { ids: string[] } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } } & { json: { ids: string[] } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } } & {
              json: { ids?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } } & {
              json: { ids?: string[] | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } } & {
              json: { ids?: string[] | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } } & {
              json: { ids?: string[] | undefined }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/following/contains': {
      $get:
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } }
            output: boolean[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { type: 'artist' | 'user'; ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/playlists/:playlist_id/followers/contains': {
      $get:
        | {
            input: { param: { playlist_id: string } } & { query: { ids?: string | undefined } }
            output: boolean[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { playlist_id: string } } & { query: { ids?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { playlist_id: string } } & { query: { ids?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { playlist_id: string } } & { query: { ids?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/audio-features': {
      $get:
        | {
            input: { query: { ids: string } }
            output: { audio_features: AudioFeaturesObject[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ids: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/audio-features/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AudioFeaturesObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/audio-analysis/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AudioAnalysisObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/recommendations': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                market?: string | undefined
                seed_artists?: string | undefined
                seed_genres?: string | undefined
                seed_tracks?: string | undefined
                min_acousticness?: number | undefined
                max_acousticness?: number | undefined
                target_acousticness?: number | undefined
                min_danceability?: number | undefined
                max_danceability?: number | undefined
                target_danceability?: number | undefined
                min_duration_ms?: number | undefined
                max_duration_ms?: number | undefined
                target_duration_ms?: number | undefined
                min_energy?: number | undefined
                max_energy?: number | undefined
                target_energy?: number | undefined
                min_instrumentalness?: number | undefined
                max_instrumentalness?: number | undefined
                target_instrumentalness?: number | undefined
                min_key?: number | undefined
                max_key?: number | undefined
                target_key?: number | undefined
                min_liveness?: number | undefined
                max_liveness?: number | undefined
                target_liveness?: number | undefined
                min_loudness?: number | undefined
                max_loudness?: number | undefined
                target_loudness?: number | undefined
                min_mode?: number | undefined
                max_mode?: number | undefined
                target_mode?: number | undefined
                min_popularity?: number | undefined
                max_popularity?: number | undefined
                target_popularity?: number | undefined
                min_speechiness?: number | undefined
                max_speechiness?: number | undefined
                target_speechiness?: number | undefined
                min_tempo?: number | undefined
                max_tempo?: number | undefined
                target_tempo?: number | undefined
                min_time_signature?: number | undefined
                max_time_signature?: number | undefined
                target_time_signature?: number | undefined
                min_valence?: number | undefined
                max_valence?: number | undefined
                target_valence?: number | undefined
              }
            }
            output: RecommendationsObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                market?: string | undefined
                seed_artists?: string | undefined
                seed_genres?: string | undefined
                seed_tracks?: string | undefined
                min_acousticness?: number | undefined
                max_acousticness?: number | undefined
                target_acousticness?: number | undefined
                min_danceability?: number | undefined
                max_danceability?: number | undefined
                target_danceability?: number | undefined
                min_duration_ms?: number | undefined
                max_duration_ms?: number | undefined
                target_duration_ms?: number | undefined
                min_energy?: number | undefined
                max_energy?: number | undefined
                target_energy?: number | undefined
                min_instrumentalness?: number | undefined
                max_instrumentalness?: number | undefined
                target_instrumentalness?: number | undefined
                min_key?: number | undefined
                max_key?: number | undefined
                target_key?: number | undefined
                min_liveness?: number | undefined
                max_liveness?: number | undefined
                target_liveness?: number | undefined
                min_loudness?: number | undefined
                max_loudness?: number | undefined
                target_loudness?: number | undefined
                min_mode?: number | undefined
                max_mode?: number | undefined
                target_mode?: number | undefined
                min_popularity?: number | undefined
                max_popularity?: number | undefined
                target_popularity?: number | undefined
                min_speechiness?: number | undefined
                max_speechiness?: number | undefined
                target_speechiness?: number | undefined
                min_tempo?: number | undefined
                max_tempo?: number | undefined
                target_tempo?: number | undefined
                min_time_signature?: number | undefined
                max_time_signature?: number | undefined
                target_time_signature?: number | undefined
                min_valence?: number | undefined
                max_valence?: number | undefined
                target_valence?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                market?: string | undefined
                seed_artists?: string | undefined
                seed_genres?: string | undefined
                seed_tracks?: string | undefined
                min_acousticness?: number | undefined
                max_acousticness?: number | undefined
                target_acousticness?: number | undefined
                min_danceability?: number | undefined
                max_danceability?: number | undefined
                target_danceability?: number | undefined
                min_duration_ms?: number | undefined
                max_duration_ms?: number | undefined
                target_duration_ms?: number | undefined
                min_energy?: number | undefined
                max_energy?: number | undefined
                target_energy?: number | undefined
                min_instrumentalness?: number | undefined
                max_instrumentalness?: number | undefined
                target_instrumentalness?: number | undefined
                min_key?: number | undefined
                max_key?: number | undefined
                target_key?: number | undefined
                min_liveness?: number | undefined
                max_liveness?: number | undefined
                target_liveness?: number | undefined
                min_loudness?: number | undefined
                max_loudness?: number | undefined
                target_loudness?: number | undefined
                min_mode?: number | undefined
                max_mode?: number | undefined
                target_mode?: number | undefined
                min_popularity?: number | undefined
                max_popularity?: number | undefined
                target_popularity?: number | undefined
                min_speechiness?: number | undefined
                max_speechiness?: number | undefined
                target_speechiness?: number | undefined
                min_tempo?: number | undefined
                max_tempo?: number | undefined
                target_tempo?: number | undefined
                min_time_signature?: number | undefined
                max_time_signature?: number | undefined
                target_time_signature?: number | undefined
                min_valence?: number | undefined
                max_valence?: number | undefined
                target_valence?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                market?: string | undefined
                seed_artists?: string | undefined
                seed_genres?: string | undefined
                seed_tracks?: string | undefined
                min_acousticness?: number | undefined
                max_acousticness?: number | undefined
                target_acousticness?: number | undefined
                min_danceability?: number | undefined
                max_danceability?: number | undefined
                target_danceability?: number | undefined
                min_duration_ms?: number | undefined
                max_duration_ms?: number | undefined
                target_duration_ms?: number | undefined
                min_energy?: number | undefined
                max_energy?: number | undefined
                target_energy?: number | undefined
                min_instrumentalness?: number | undefined
                max_instrumentalness?: number | undefined
                target_instrumentalness?: number | undefined
                min_key?: number | undefined
                max_key?: number | undefined
                target_key?: number | undefined
                min_liveness?: number | undefined
                max_liveness?: number | undefined
                target_liveness?: number | undefined
                min_loudness?: number | undefined
                max_loudness?: number | undefined
                target_loudness?: number | undefined
                min_mode?: number | undefined
                max_mode?: number | undefined
                target_mode?: number | undefined
                min_popularity?: number | undefined
                max_popularity?: number | undefined
                target_popularity?: number | undefined
                min_speechiness?: number | undefined
                max_speechiness?: number | undefined
                target_speechiness?: number | undefined
                min_tempo?: number | undefined
                max_tempo?: number | undefined
                target_tempo?: number | undefined
                min_time_signature?: number | undefined
                max_time_signature?: number | undefined
                target_time_signature?: number | undefined
                min_valence?: number | undefined
                max_valence?: number | undefined
                target_valence?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/recommendations/available-genre-seeds': {
      $get:
        | { input: {}; output: { genres: string[] }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/me/player': {
      $get:
        | {
            input: { query: { market?: string | undefined; additional_types?: string | undefined } }
            output: CurrentlyPlayingContextObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { market?: string | undefined; additional_types?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { market?: string | undefined; additional_types?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { market?: string | undefined; additional_types?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { market?: string | undefined; additional_types?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { json: { device_ids: string[]; play?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: { device_ids: string[]; play?: boolean | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { device_ids: string[]; play?: boolean | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { device_ids: string[]; play?: boolean | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/devices': {
      $get:
        | { input: {}; output: { devices: DeviceObject[] }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/me/player/currently-playing': {
      $get:
        | {
            input: { query: { market?: string | undefined; additional_types?: string | undefined } }
            output: CurrentlyPlayingObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { market?: string | undefined; additional_types?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { market?: string | undefined; additional_types?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { market?: string | undefined; additional_types?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/play': {
      $put:
        | {
            input: { query: { device_id?: string | undefined } } & {
              json: {
                context_uri?: string | undefined
                uris?: string[] | undefined
                offset?: { [x: string]: unknown } | undefined
                position_ms?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { device_id?: string | undefined } } & {
              json: {
                context_uri?: string | undefined
                uris?: string[] | undefined
                offset?: { [x: string]: unknown } | undefined
                position_ms?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { device_id?: string | undefined } } & {
              json: {
                context_uri?: string | undefined
                uris?: string[] | undefined
                offset?: { [x: string]: unknown } | undefined
                position_ms?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { device_id?: string | undefined } } & {
              json: {
                context_uri?: string | undefined
                uris?: string[] | undefined
                offset?: { [x: string]: unknown } | undefined
                position_ms?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/pause': {
      $put:
        | {
            input: { query: { device_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/next': {
      $post:
        | {
            input: { query: { device_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/previous': {
      $post:
        | {
            input: { query: { device_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/seek': {
      $put:
        | {
            input: { query: { position_ms: number; device_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { position_ms: number; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { position_ms: number; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { position_ms: number; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/repeat': {
      $put:
        | {
            input: { query: { state: string; device_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { state: string; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { state: string; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { state: string; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/volume': {
      $put:
        | {
            input: { query: { volume_percent: number; device_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { volume_percent: number; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { volume_percent: number; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { volume_percent: number; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/shuffle': {
      $put:
        | {
            input: { query: { state: boolean; device_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { state: boolean; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { state: boolean; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { state: boolean; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/recently-played': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: CursorPagingPlayHistoryObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/player/queue': {
      $get:
        | { input: {}; output: QueueObject; outputFormat: 'json'; status: 200 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { query: { uri: string; device_id?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { uri: string; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { uri: string; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { uri: string; device_id?: string | undefined } }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/markets': {
      $get:
        | {
            input: {}
            output: { markets?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 401 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 403 }
        | { input: {}; output: { error: ErrorObject }; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/me/top/artists': {
      $get:
        | {
            input: {
              query: {
                time_range?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PagingArtistObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                time_range?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                time_range?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                time_range?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/me/top/tracks': {
      $get:
        | {
            input: {
              query: {
                time_range?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: PagingTrackObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                time_range?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                time_range?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                time_range?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: { error: ErrorObject }
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
