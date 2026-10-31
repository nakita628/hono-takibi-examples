import { createRoute, z } from '@hono/zod-openapi'

const MetaUserSchema = z
  .object({
    avatar_url: z.string().exactOptional().openapi({ description: 'URL to a JPEG image' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'profile creation datetime' }),
    id: z.int().exactOptional().openapi({ description: 'unique identifier' }),
    kind: z.string().exactOptional().openapi({ description: 'kind of resource' }),
    last_modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'last modified datetime' }),
    permalink: z.string().exactOptional().openapi({ description: 'permalink of the resource' }),
    permalink_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to the SoundCloud.com page' }),
    uri: z.string().exactOptional().openapi({ description: 'API resource URL' }),
    username: z.string().exactOptional().openapi({ description: 'username' }),
  })
  .nullable()
  .openapi({ description: 'SoundCloud User object.', required: [] })
  .openapi('MetaUser')

const TrackSchema = z
  .object({
    access: z
      .union([z.literal('playable'), z.literal('preview'), z.literal('blocked'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Level of access the user (logged in or anonymous) has to the track.\n  * `playable` - user is allowed to listen to a full track.\n  * `preview` - user is allowed to preview a track, meaning a snippet is available\n  * `blocked` - user can only see the metadata of a track, no streaming is possible\n',
      }),
    artwork_url: z.string().exactOptional().openapi({ description: 'URL to a JPEG image.' }),
    available_country_codes: z
      .string()
      .exactOptional()
      .openapi({ description: 'List of countries where track is available.' }),
    bpm: z.int().exactOptional().openapi({ description: 'Tempo.' }),
    comment_count: z.int().exactOptional().openapi({ description: 'Number of comments.' }),
    commentable: z.boolean().exactOptional().openapi({ description: 'Is commentable.' }),
    created_at: z.string().exactOptional().openapi({ description: 'Created timestamp.' }),
    description: z.string().exactOptional().openapi({ description: 'Track description.' }),
    download_count: z.int().exactOptional().openapi({ description: 'NUmber of downloads.' }),
    download_url: z.string().exactOptional().openapi({ description: 'URL to download a track.' }),
    downloadable: z.string().exactOptional().openapi({ description: 'Is downloadable.' }),
    duration: z.int().exactOptional().openapi({ description: 'Track duration.' }),
    embeddable_by: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'Embeddable by.' }),
    favoritings_count: z.int().exactOptional().openapi({ description: 'Number of favoritings.' }),
    genre: z.string().exactOptional().openapi({ description: 'Genre' }),
    id: z.int().exactOptional().openapi({ description: 'Track identifier.' }),
    isrc: z.string().exactOptional().openapi({ description: 'ISRC code.' }),
    key_signature: z.string().exactOptional().openapi({ description: 'Key signature.' }),
    kind: z.string().exactOptional().openapi({ description: 'Type of object (track).' }),
    label_name: z.string().exactOptional().openapi({ description: 'Label user name.' }),
    license: z.string().exactOptional().openapi({ description: 'License' }),
    permalink_url: z.string().exactOptional().openapi({ description: 'Permalink URL.' }),
    playback_count: z.int().exactOptional().openapi({ description: 'Number of plays.' }),
    purchase_title: z.string().exactOptional().openapi({ description: 'Purchase title.' }),
    purchase_url: z.string().exactOptional().openapi({ description: 'Purchase URL.' }),
    release: z.string().exactOptional().openapi({ description: 'Release.' }),
    release_day: z.int().exactOptional().openapi({ description: 'Day of release.' }),
    release_month: z.int().exactOptional().openapi({ description: 'Month of release.' }),
    release_year: z.int().exactOptional().openapi({ description: 'Year of release.' }),
    reposts_count: z.int().exactOptional().openapi({ description: 'Number of reposts.' }),
    secret_uri: z.string().exactOptional().openapi({ description: 'Secret URL.' }),
    sharing: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of sharing (public/private).' }),
    stream_url: z.string().exactOptional().openapi({ description: 'URL to stream.' }),
    streamable: z.boolean().exactOptional().openapi({ description: 'Is streamable.' }),
    tag_list: z.string().exactOptional().openapi({ description: 'Tags.' }),
    title: z.string().exactOptional().openapi({ description: 'Track title.' }),
    uri: z.string().exactOptional().openapi({ description: 'Track URI.' }),
    user: MetaUserSchema.exactOptional().openapi({ description: 'User who uploaded a track' }),
    user_favorite: z.boolean().exactOptional().openapi({ description: "Is user's favourite." }),
    user_playback_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of plays by a user.' }),
    waveform_url: z.string().exactOptional().openapi({ description: 'Waveform URL.' }),
  })
  .openapi({ description: 'Soundcloud Track object.', required: [] })
  .openapi('Track')

const PlaylistSchema = z
  .object({
    artwork_url: z.string().exactOptional().openapi({ description: 'URL to a JPEG image.' }),
    created_at: z.string().exactOptional().openapi({ description: 'Created timestamp.' }),
    description: z.string().exactOptional().openapi({ description: 'Playlist description.' }),
    downloadable: z.boolean().exactOptional().openapi({ description: 'is downloadable.' }),
    duration: z.int().exactOptional().openapi({ description: 'Playlist duration.' }),
    ean: z.string().exactOptional().openapi({ description: 'European Article Number.' }),
    embeddable_by: z.string().exactOptional().openapi({ description: 'Embeddable by.' }),
    genre: z.string().exactOptional().openapi({ description: 'Playlist genre.' }),
    id: z.int().exactOptional().openapi({ description: 'Playlist identifier.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of Soundcloud object (playlist).' }),
    label: MetaUserSchema.exactOptional(),
    label_id: z.int().exactOptional().openapi({ description: 'Label user identifier.' }),
    label_name: z.string().exactOptional().openapi({ description: 'Label name.' }),
    last_modified: z.string().exactOptional().openapi({ description: 'Last modified timestamp.' }),
    license: z.string().exactOptional().openapi({ description: 'License.' }),
    likes_count: z.int().exactOptional().openapi({ description: 'Count of playlist likes.' }),
    permalink: z.string().exactOptional().openapi({ description: 'Playlist permalink.' }),
    permalink_url: z.string().exactOptional().openapi({ description: 'Playlist permalink URL.' }),
    playlist_type: z.string().exactOptional().openapi({ description: 'Type of playlist.' }),
    purchase_title: z.string().exactOptional().openapi({ description: 'Purchase title.' }),
    purchase_url: z.string().exactOptional().openapi({ description: 'Purchase URL.' }),
    release: z.string().exactOptional().openapi({ description: 'Release.' }),
    release_day: z.int().exactOptional().openapi({ description: 'Day of release.' }),
    release_month: z.int().exactOptional().openapi({ description: 'Month of release.' }),
    release_year: z.int().exactOptional().openapi({ description: 'Year of release.' }),
    sharing: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of sharing (private/public).' }),
    streamable: z.boolean().exactOptional().openapi({ description: 'Is streamable.' }),
    tag_list: z.string().exactOptional().openapi({ description: 'Tags.' }),
    tags: z.string().nullable().exactOptional().openapi({ description: 'Tags.' }),
    title: z.string().exactOptional().openapi({ description: 'Playlist title.' }),
    track_count: z.int().exactOptional().openapi({ description: 'Count of tracks.' }),
    tracks: z.array(TrackSchema).exactOptional().openapi({ description: 'List of tracks.' }),
    tracks_uri: z.string().nullable().exactOptional().openapi({ description: 'tracks URI.' }),
    type: z.string().exactOptional().openapi({ description: 'Playlist type.' }),
    uri: z.string().exactOptional().openapi({ description: 'Playlist URI.' }),
    user: MetaUserSchema.exactOptional(),
    user_id: z.int().exactOptional().openapi({ description: 'User identifier.' }),
  })
  .openapi({ description: 'Soundcloud Playlist Object', required: [] })
  .openapi('Playlist')

const ActivitiesSchema = z
  .object({
    collection: z
      .array(
        z
          .object({
            created_at: z.string().exactOptional().openapi({ description: 'Created timestamp.' }),
            origin: z
              .union([TrackSchema, PlaylistSchema])
              .exactOptional()
              .openapi({ description: 'Origin.' }),
            type: z.string().exactOptional().openapi({ description: 'Type of activity (track).' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    future_href: z.string().exactOptional(),
    next_href: z.string().exactOptional(),
  })
  .openapi({ description: "User's activities.", required: [] })
  .openapi('Activities')

const AuthorizationCodeSchema = z
  .object({
    authorization_code: z.string().exactOptional().openapi({ description: 'Authorization code' }),
    client_id: z.string().exactOptional().openapi({ description: 'Client ID' }),
    client_secret: z.string().exactOptional().openapi({ description: 'Client secret' }),
    grant_type: z.enum(['authorization_code', 'client_credentials']).exactOptional(),
    redirect_uri: z.string().exactOptional().openapi({ description: 'Redirect URI' }),
  })
  .openapi({ required: [] })
  .openapi('AuthorizationCode')

const CommentSchema = z
  .object({
    body: z.string().exactOptional().openapi({ description: 'Comment body.' }),
    created_at: z.string().exactOptional().openapi({ description: 'Created timestamp.' }),
    id: z.int().exactOptional().openapi({ description: 'Identifier.' }),
    kind: z.string().exactOptional().openapi({ description: 'Kind (comment).' }),
    timestamp: z.string().exactOptional().openapi({ description: 'Timestamp.' }),
    track_id: z.int().exactOptional().openapi({ description: "Track's identifier." }),
    uri: z.string().exactOptional().openapi({ description: "Comment's URL." }),
    user: z
      .object({
        avatar_url: z.string().exactOptional().openapi({ description: 'URL to a JPEG image.' }),
        followers_count: z.int().exactOptional().openapi({ description: 'number of followers.' }),
        followings_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'number of followed users.' }),
        id: z.int().exactOptional().openapi({ description: 'unique identifier' }),
        kind: z.string().exactOptional().openapi({ description: 'kind of resource.' }),
        last_modified: z
          .string()
          .exactOptional()
          .openapi({ description: 'last modified timestamp.' }),
        permalink: z
          .string()
          .exactOptional()
          .openapi({ description: 'permalink of the resource.' }),
        permalink_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'URL to the SoundCloud.com page.' }),
        reposts_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'number of reposts from user' }),
        uri: z.string().exactOptional().openapi({ description: 'API resource URL.' }),
        username: z.string().exactOptional().openapi({ description: 'username' }),
      })
      .exactOptional()
      .openapi({ description: 'SoundCloud User object', required: [] }),
    user_id: z.int().exactOptional().openapi({ description: "User's identifier." }),
  })
  .openapi({ description: "User's Comment", required: [] })
  .openapi('Comment')

const CommentsSchema = z
  .object({
    collection: z.array(CommentSchema).exactOptional(),
    next_href: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Comments')

const CommentsListSchema = z
  .array(CommentSchema)
  .openapi({ deprecated: true })
  .openapi('CommentsList')

const CompleteUserSchema = z
  .object({
    avatar_url: z.string().exactOptional().openapi({ description: 'URL to a JPEG image.' }),
    city: z.string().exactOptional().openapi({ description: 'city.' }),
    country: z.string().exactOptional().openapi({ description: 'country.' }),
    description: z.string().exactOptional().openapi({ description: 'description.' }),
    discogs_name: z.string().exactOptional().openapi({ description: 'discogs name.' }),
    first_name: z.string().exactOptional().openapi({ description: 'first name.' }),
    followers_count: z.int().exactOptional().openapi({ description: 'number of followers.' }),
    followings_count: z.int().exactOptional().openapi({ description: 'number of followed users.' }),
    full_name: z.string().exactOptional().openapi({ description: 'first and last name.' }),
    id: z.int().exactOptional().openapi({ description: 'unique identifier' }),
    kind: z.string().exactOptional().openapi({ description: 'kind of resource.' }),
    last_modified: z.string().exactOptional().openapi({ description: 'last modified timestamp.' }),
    last_name: z.string().exactOptional().openapi({ description: 'last name.' }),
    locale: z.string().exactOptional().openapi({ description: 'locale.' }),
    myspace_name: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'myspace name' }),
    permalink: z.string().exactOptional().openapi({ description: 'permalink of the resource.' }),
    permalink_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to the SoundCloud.com page.' }),
    plan: z.string().exactOptional().openapi({ description: 'subscription plan of the user.' }),
    playlist_count: z.int().exactOptional().openapi({ description: 'number of public playlists.' }),
    primary_email_confirmed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'boolean if email is confirmed.' }),
    private_playlists_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'number of private playlists.' }),
    private_tracks_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'number of private tracks.' }),
    public_favorites_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'number of favorited public tracks' }),
    quota: z
      .object({
        unlimited_upload_quota: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'unlimited upload quota.' }),
        upload_seconds_used: z
          .int()
          .exactOptional()
          .openapi({ description: 'upload seconds used.' }),
      })
      .exactOptional()
      .openapi({ description: "user's upload quota", required: [] }),
    reposts_count: z.int().exactOptional().openapi({ description: 'number of reposts from user' }),
    subscriptions: z
      .unknown()
      .superRefine((val, ctx) => {
        if (Array.isArray(val)) {
          {
            const Schema = z.union([
              z
                .object({
                  product: z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'subscription id instance.' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'subscription name instance.' }),
                    })
                    .exactOptional()
                    .openapi({ description: 'product', required: [] }),
                  recurring: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'if the subscription is recurring or not' }),
                })
                .openapi({ description: 'subscription', required: [] }),
            ])
            for (let i = 0; i < val.length; i++) {
              if (!Schema.safeParse(val[i]).success) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          }
        }
      })
      .exactOptional()
      .openapi({ description: 'a list subscriptions associated with the user' }),
    track_count: z.int().exactOptional().openapi({ description: 'number of public tracks.' }),
    uri: z.string().exactOptional().openapi({ description: 'API resource URL.' }),
    username: z.string().exactOptional().openapi({ description: 'username' }),
    website: z.string().exactOptional().openapi({ description: 'a URL to the website.' }),
    website_title: z
      .string()
      .exactOptional()
      .openapi({ description: 'a custom title for the website.' }),
  })
  .openapi({ description: 'SoundCloud Complete User object', required: [] })
  .openapi('CompleteUser')

const ConnectionSchema = z
  .object({
    created_at: z.string().exactOptional().openapi({ description: 'Created timestamp.' }),
    display_name: z.string().exactOptional().openapi({ description: 'Full Name.' }),
    id: z.int().exactOptional().openapi({ description: 'Unique identifier' }),
    kind: z.string().exactOptional().openapi({ description: 'Kind of resource.' }),
    post_favorite: z.boolean().exactOptional().openapi({ deprecated: true }),
    post_publish: z.boolean().exactOptional().openapi({ deprecated: true }),
    service: z.string().exactOptional().openapi({ description: 'Service.' }),
    type: z.string().exactOptional().openapi({ description: 'Type.' }),
    uri: z.string().exactOptional().openapi({ description: 'The external link URI.' }),
  })
  .openapi({ required: [] })
  .openapi('Connection')

const ConnectionsSchema = z.array(ConnectionSchema).openapi('Connections')

const CreateUpdatePlaylistRequestSchema = z
  .object({
    playlist: z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Description of the playlist' }),
        sharing: z
          .enum(['public', 'private'])
          .exactOptional()
          .openapi({ description: 'public or private' }),
        title: z.string().exactOptional().openapi({ description: 'Title of the playlist' }),
        tracks: z
          .array(
            z
              .object({ id: z.string().openapi({ description: 'SoundCloud track id' }) })
              .openapi({ required: ['id'] }),
          )
          .exactOptional()
          .openapi({ description: 'List of tracks to add to playlist' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CreateUpdatePlaylistRequest')

const ErrorSchema = z
  .object({
    code: z.int().exactOptional(),
    error: z.string().nullable().exactOptional().openapi({ deprecated: true }),
    errors: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
    link: z.string().exactOptional(),
    message: z.string().exactOptional(),
    status: z.string().exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const FoundSchema = z
  .object({
    location: z.string().exactOptional().openapi({ description: 'Location URL of the resource.' }),
    status: z.string().exactOptional().openapi({ description: 'Status code.' }),
  })
  .openapi({ required: [] })
  .openapi('Found')

const MetaUsersSchema = z
  .object({
    collection: z.array(MetaUserSchema).exactOptional(),
    next_href: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetaUsers')

const PasswordSchema = z
  .object({
    client_id: z.string().exactOptional().openapi({ description: 'Client ID' }),
    client_secret: z.string().exactOptional().openapi({ description: 'Client secret' }),
    grant_type: z.literal('password').exactOptional(),
    password: z.string().exactOptional().openapi({ description: 'User password' }),
    redirect_uri: z.string().exactOptional().openapi({ description: 'Redirect URI' }),
    user_name: z.string().exactOptional().openapi({ description: 'User name' }),
  })
  .openapi({ deprecated: true, required: [] })
  .openapi('Password')

const PlaylistsSchema = z
  .object({
    collection: z.array(PlaylistSchema).exactOptional(),
    next_href: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Playlists')

const PlaylistsArraySchema = z
  .array(PlaylistSchema)
  .openapi({ deprecated: true })
  .openapi('PlaylistsArray')

const RefreshTokenSchema = z
  .object({
    client_id: z.string().exactOptional().openapi({ description: 'Client ID' }),
    client_secret: z.string().exactOptional().openapi({ description: 'Client secret' }),
    grant_type: z.literal('refresh_token').exactOptional(),
    redirect_uri: z.string().exactOptional().openapi({ description: 'Redirect URI' }),
    refresh_token: z.string().exactOptional().openapi({ description: 'Refresh token' }),
  })
  .openapi({ required: [] })
  .openapi('RefreshToken')

const StreamsSchema = z
  .object({
    hls_mp3_128_url: z.string().exactOptional(),
    hls_opus_64_url: z.string().exactOptional(),
    http_mp3_128_url: z.string().exactOptional(),
    preview_mp3_128_url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Streams')

const TooManyRequestsSchema = ErrorSchema.and(
  z.object({ spam_warning_urn: z.string().exactOptional() }).openapi({ required: [] }),
).openapi('TooManyRequests')

const TrackDataRequestSchema = z
  .object({
    'track[artwork_data]': z
      .file()
      .exactOptional()
      .openapi({ type: 'string', format: 'binary', title: 'Only for uploading, for PRO users' }),
    'track[asset_data]': z
      .file()
      .exactOptional()
      .openapi({ type: 'string', format: 'binary', title: 'Only for uploading' }),
    'track[commentable]': z.boolean().default(true).exactOptional(),
    'track[description]': z.string().exactOptional(),
    'track[downloadable]': z.boolean().default(true).exactOptional(),
    'track[embeddable_by]': z
      .enum(['all', 'me', 'none'])
      .exactOptional()
      .openapi({ description: 'who can embed this track "all", "me", or "none"' }),
    'track[genre]': z.string().exactOptional(),
    'track[isrc]': z.string().exactOptional(),
    'track[label_name]': z.string().exactOptional(),
    'track[license]': z
      .enum([
        'no-rights-reserved',
        'all-rights-reserved',
        'cc-by',
        'cc-by-nc',
        'cc-by-nd',
        'cc-by-sa',
        'cc-by-nc-nd',
        'cc-by-nc-sa',
      ])
      .exactOptional()
      .openapi({
        description:
          'Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa',
      }),
    'track[permalink]': z.string().exactOptional(),
    'track[purchase_url]': z.string().exactOptional(),
    'track[release]': z.string().exactOptional(),
    'track[release_date]': z
      .string()
      .exactOptional()
      .openapi({
        description: 'string, formatted as yyyy-mm-dd, representing release date',
        title: 'write only!',
      }),
    'track[sharing]': z.enum(['public', 'private']).default('public').exactOptional(),
    'track[streamable]': z.boolean().default(true).exactOptional(),
    'track[tag_list]': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.',
      }),
    'track[title]': z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrackDataRequest')

const TrackMetadataRequestSchema = z
  .object({
    track: z
      .object({
        commentable: z.boolean().default(true).exactOptional(),
        description: z.string().exactOptional(),
        downloadable: z.boolean().default(true).exactOptional(),
        embeddable_by: z
          .enum(['all', 'me', 'none'])
          .exactOptional()
          .openapi({ description: 'who can embed this track "all", "me", or "none"' }),
        genre: z.string().exactOptional(),
        isrc: z.string().exactOptional(),
        label_name: z.string().exactOptional(),
        license: z
          .enum([
            'no-rights-reserved',
            'all-rights-reserved',
            'cc-by',
            'cc-by-nc',
            'cc-by-nd',
            'cc-by-sa',
            'cc-by-nc-nd',
            'cc-by-nc-sa',
          ])
          .exactOptional()
          .openapi({
            description:
              'Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa',
          }),
        permalink: z.string().exactOptional(),
        purchase_url: z.string().exactOptional(),
        release: z.string().exactOptional(),
        release_date: z
          .string()
          .exactOptional()
          .openapi({
            description: 'string, formatted as yyyy-mm-dd, representing release date',
            title: 'write only!',
          }),
        sharing: z.enum(['public', 'private']).default('public').exactOptional(),
        streamable: z.boolean().default(true).exactOptional(),
        tag_list: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.',
          }),
        title: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('TrackMetadataRequest')

const TracksSchema = z
  .object({
    collection: z.array(TrackSchema).exactOptional(),
    next_href: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tracks')

const TracksListSchema = z.array(TrackSchema).openapi({ deprecated: true }).openapi('TracksList')

const UserSchema = z
  .object({
    avatar_url: z.string().exactOptional().openapi({ description: 'URL to a JPEG image' }),
    city: z.string().exactOptional().openapi({ description: 'city' }),
    country: z.string().exactOptional().openapi({ description: 'country' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'profile creation datetime' }),
    description: z.string().exactOptional().openapi({ description: 'description' }),
    discogs_name: z.string().exactOptional().openapi({ description: 'discogs name' }),
    first_name: z.string().exactOptional().openapi({ description: 'first name' }),
    followers_count: z.int().exactOptional().openapi({ description: 'number of followers' }),
    followings_count: z.int().exactOptional().openapi({ description: 'number of followed users' }),
    full_name: z.string().exactOptional().openapi({ description: 'first and last name' }),
    id: z.int().exactOptional().openapi({ description: 'unique identifier' }),
    kind: z.string().exactOptional().openapi({ description: 'kind of resource' }),
    last_modified: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'last modified datetime' }),
    last_name: z.string().exactOptional().openapi({ description: 'last name' }),
    myspace_name: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'myspace name' }),
    permalink: z.string().exactOptional().openapi({ description: 'permalink of the resource' }),
    permalink_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to the SoundCloud.com page' }),
    plan: z.string().exactOptional().openapi({ description: 'subscription plan of the user' }),
    playlist_count: z.int().exactOptional().openapi({ description: 'number of public playlists' }),
    public_favorites_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'number of favorited public tracks' }),
    reposts_count: z.int().exactOptional().openapi({ description: 'number of reposts from user' }),
    subscriptions: z
      .unknown()
      .superRefine((val, ctx) => {
        if (Array.isArray(val)) {
          {
            const Schema = z.union([
              z
                .object({
                  product: z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'subscription id instance.' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'subscription name instance.' }),
                    })
                    .exactOptional()
                    .openapi({ description: 'product', required: [] }),
                  recurring: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'if the subscription is recurring or not' }),
                })
                .openapi({ description: 'subscription', required: [] }),
            ])
            for (let i = 0; i < val.length; i++) {
              if (!Schema.safeParse(val[i]).success) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          }
        }
      })
      .exactOptional()
      .openapi({ deprecated: true, description: 'a list subscriptions associated with the user' }),
    track_count: z.int().exactOptional().openapi({ description: 'number of public tracks' }),
    uri: z.string().exactOptional().openapi({ description: 'API resource URL' }),
    username: z.string().exactOptional().openapi({ description: 'username' }),
    website: z.string().exactOptional().openapi({ description: 'a URL to the website' }),
    website_title: z
      .string()
      .exactOptional()
      .openapi({ description: 'a custom title for the website' }),
  })
  .openapi({ description: 'SoundCloud User object', required: [] })
  .openapi('User')

const UsersSchema = z
  .object({
    collection: z.array(UserSchema).exactOptional(),
    next_href: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Users')

const UsersListSchema = z
  .array(
    z
      .object({
        avatar_url: z.string().exactOptional().openapi({ description: 'URL to a JPEG image' }),
        city: z.string().exactOptional().openapi({ description: 'city' }),
        country: z.string().exactOptional().openapi({ description: 'country' }),
        description: z.string().exactOptional().openapi({ description: 'description' }),
        discogs_name: z.string().exactOptional().openapi({ description: 'discogs name' }),
        first_name: z.string().exactOptional().openapi({ description: 'first name' }),
        followers_count: z.int().exactOptional().openapi({ description: 'number of followers' }),
        followings_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'number of followed users' }),
        full_name: z.string().exactOptional().openapi({ description: 'first and last name' }),
        id: z.int().exactOptional().openapi({ description: 'unique identifier' }),
        kind: z.string().exactOptional().openapi({ description: 'kind of resource' }),
        last_modified: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({ description: 'last modified datetime' }),
        last_name: z.string().exactOptional().openapi({ description: 'last name' }),
        myspace_name: z
          .string()
          .exactOptional()
          .openapi({ deprecated: true, description: 'myspace name' }),
        permalink: z.string().exactOptional().openapi({ description: 'permalink of the resource' }),
        permalink_url: z
          .string()
          .exactOptional()
          .openapi({ description: 'URL to the SoundCloud.com page' }),
        plan: z.string().exactOptional().openapi({ description: 'subscription plan of the user' }),
        playlist_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'number of public playlists' }),
        public_favorites_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'number of favorited public tracks' }),
        reposts_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'number of reposts from user' }),
        subscriptions: z
          .unknown()
          .superRefine((val, ctx) => {
            if (Array.isArray(val)) {
              {
                const Schema = z.union([
                  z
                    .object({
                      product: z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'subscription id instance.' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'subscription name instance.' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'product', required: [] }),
                      recurring: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'if the subscription is recurring or not' }),
                    })
                    .openapi({ description: 'subscription', required: [] }),
                ])
                for (let i = 0; i < val.length; i++) {
                  if (!Schema.safeParse(val[i]).success) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              }
            }
          })
          .exactOptional()
          .openapi({
            deprecated: true,
            description: 'a list subscriptions associated with the user',
          }),
        track_count: z.int().exactOptional().openapi({ description: 'number of public tracks' }),
        uri: z.string().exactOptional().openapi({ description: 'API resource URL' }),
        username: z.string().exactOptional().openapi({ description: 'username' }),
        website: z.string().exactOptional().openapi({ description: 'a URL to the website' }),
        website_title: z
          .string()
          .exactOptional()
          .openapi({ description: 'a custom title for the website' }),
      })
      .openapi({ description: 'SoundCloud User object', required: [] }),
  )
  .openapi({ deprecated: true })
  .openapi('UsersList')

const WebProfilesSchema = z
  .array(
    z
      .object({
        created_at: z
          .string()
          .exactOptional()
          .openapi({ description: 'Timestamp of when the link was added to the profile.' }),
        id: z.int().exactOptional().openapi({ description: 'Id' }),
        kind: z.string().exactOptional().openapi({ description: 'Kind' }),
        service: z.string().exactOptional().openapi({ description: 'Service or platform' }),
        title: z.string().exactOptional().openapi({ description: "Link's title" }),
        url: z.string().exactOptional().openapi({ description: 'URL of the external link' }),
        username: z
          .string()
          .exactOptional()
          .openapi({ description: 'Username extracted from the external link' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: "User's links added to their profile" })
  .openapi('WebProfiles')

const AcceptedResponse = { description: 'Accepted', content: {} }

const ActivitiesExample = {
  value: {
    collection: [
      {
        created_at: '2020/10/12 12:02:44 +0000',
        origin: {
          allOf: [
            {
              access: 'playable',
              artwork_url: 'https://i1.sndcdn.com/artworks-large.jpg',
              available_country_codes: null,
              bpm: null,
              comment_count: 4,
              commentable: true,
              created_at: '2019/01/15 15:40:49 +0000',
              description: null,
              download_count: 0,
              download_url: 'https://api.soundcloud.com/tracks/1234/download',
              downloadable: false,
              duration: 40000,
              embeddable_by: 'all',
              favoritings_count: 271,
              genre: 'Rock',
              id: 1234,
              isrc: null,
              key_signature: null,
              kind: 'track',
              label_name: 'some label',
              license: 'all-rights-reserved',
              permalink_url: 'https://soundcloud.com/userPermalink/trackPermalink',
              playback_count: 8027,
              purchase_title: null,
              purchase_url: null,
              release: null,
              release_day: 22,
              release_month: 8,
              release_year: 2019,
              reposts_count: 18,
              secret_uri: null,
              sharing: 'public',
              stream_url: 'https://api.soundcloud.com/tracks/1234/stream',
              streamable: true,
              tag_list: '',
              title: 'Some title',
              uri: 'https://api.soundcloud.com/tracks/1234',
              user: {
                avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
                id: 12345,
                kind: 'user',
                last_modified: '2020/09/03 14:08:25 +0000',
                permalink: 'permalink',
                permalink_url: 'https://soundcloud.com/permalink',
                uri: 'https://api.soundcloud.com/users/12345',
                username: 'user.name',
              },
              user_favorite: true,
              user_playback_count: 1,
              waveform_url: 'https://wave.sndcdn.com/someString.png',
            },
          ],
        },
        type: 'track:repost',
      },
      {
        created_at: '2020/10/12 12:02:44 +0000',
        origin: {
          allOf: [
            {
              artwork_url: '',
              created_at: '2020/07/16 16:09:54 +0000',
              description: null,
              downloadable: true,
              duration: 11000,
              ean: null,
              embeddable_by: 'all',
              genre: '',
              id: 12345,
              kind: 'playlist',
              label: null,
              label_id: null,
              label_name: null,
              last_modified: '2020/09/08 09:13:00 +0000',
              license: 'all-rights-reserved',
              likes_count: 0,
              permalink: 'permalink',
              permalink_url: 'https://soundcloud.com/userPermalink/sets/permalink',
              playlist_type: '',
              purchase_title: null,
              purchase_url: null,
              release: null,
              release_day: null,
              release_month: null,
              release_year: null,
              sharing: 'public',
              streamable: true,
              tag_list: '',
              tags: '',
              title: 'permalink',
              track_count: 2,
              tracks: {
                access: 'playable',
                artwork_url: 'https://i1.sndcdn.com/artworks-large.jpg',
                available_country_codes: null,
                bpm: null,
                comment_count: 4,
                commentable: true,
                created_at: '2019/01/15 15:40:49 +0000',
                description: null,
                download_count: 0,
                download_url: 'https://api.soundcloud.com/tracks/1234/download',
                downloadable: false,
                duration: 40000,
                embeddable_by: 'all',
                favoritings_count: 271,
                genre: 'Rock',
                id: 1234,
                isrc: null,
                key_signature: null,
                kind: 'track',
                label_name: 'some label',
                license: 'all-rights-reserved',
                permalink_url: 'https://soundcloud.com/userPermalink/trackPermalink',
                playback_count: 8027,
                purchase_title: null,
                purchase_url: null,
                release: null,
                release_day: 22,
                release_month: 8,
                release_year: 2019,
                reposts_count: 18,
                secret_uri: null,
                sharing: 'public',
                stream_url: 'https://api.soundcloud.com/tracks/1234/stream',
                streamable: true,
                tag_list: '',
                title: 'Some title',
                uri: 'https://api.soundcloud.com/tracks/1234',
                user: {
                  avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
                  id: 12345,
                  kind: 'user',
                  last_modified: '2020/09/03 14:08:25 +0000',
                  permalink: 'permalink',
                  permalink_url: 'https://soundcloud.com/permalink',
                  uri: 'https://api.soundcloud.com/users/12345',
                  username: 'user.name',
                },
                user_favorite: true,
                user_playback_count: 1,
                waveform_url: 'https://wave.sndcdn.com/someString.png',
              },
              tracks_uri: 'https://api.soundcloud.com/playlists/12345/tracks',
              type: '',
              uri: 'https://api.soundcloud.com/playlists/12345',
              user: {
                avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
                id: 12345,
                kind: 'user',
                last_modified: '2020/09/03 14:08:25 +0000',
                permalink: 'permalink',
                permalink_url: 'https://soundcloud.com/permalink',
                uri: 'https://api.soundcloud.com/users/12345',
                username: 'user.name',
              },
              user_id: 1234,
            },
          ],
        },
        type: 'playlist',
      },
    ],
    future_href: 'https://api.soundcloud.com/me/activities?limit=10&cursor=000001',
    next_href: 'https://api.soundcloud.com/me/activities?limit=10&cursor=00000',
  },
}

const ActivitiesResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: ActivitiesSchema,
      examples: { default: ActivitiesExample },
    },
  },
}

const BadRequestExample = {
  value: {
    code: 400,
    link: 'https://developers.soundcloud.com/docs/api/explorer/open-api',
    message: 'Detailed message of errors, when available',
  },
}

const BadRequestResponse = {
  description: 'Bad Request',
  content: {
    'application/json; charset=utf-8': {
      schema: ErrorSchema,
      examples: { default: BadRequestExample },
    },
  },
}

const CommentExample = {
  value: {
    body: 'comment body',
    created_at: '2007/09/11 15:40:24 +0000',
    id: 1234,
    kind: 'comment',
    timestamp: 4960,
    track_id: 123456,
    uri: 'https://api.soundcloud.com/comments/1234',
    user: {
      avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
      followers_count: 138,
      followings_count: 172,
      id: 12345,
      kind: 'user',
      last_modified: '2017/04/10 14:48:03 +0000',
      permalink: 'permalink',
      permalink_url: 'https://soundcloud.com/permalink',
      public_favorites_count: 5,
      reposts_count: 0,
      uri: 'https://api.soundcloud.com/users/12345',
      username: 'user name',
    },
    user_id: 12345,
  },
}

const CommentResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: CommentSchema,
      examples: { default: CommentExample },
    },
  },
}

const CommentsListExample = {
  description: 'Deprecated, use Comments instead.',
  value: {
    body: 'comment body',
    created_at: '2007/09/11 15:40:24 +0000',
    id: 1234,
    kind: 'comment',
    timestamp: 4960,
    track_id: 123456,
    uri: 'https://api.soundcloud.com/comments/1234',
    user: {
      avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
      followers_count: 138,
      followings_count: 172,
      id: 12345,
      kind: 'user',
      last_modified: '2017/04/10 14:48:03 +0000',
      permalink: 'permalink',
      permalink_url: 'https://soundcloud.com/permalink',
      public_favorites_count: 5,
      reposts_count: 0,
      uri: 'https://api.soundcloud.com/users/12345',
      username: 'user name',
    },
    user_id: 12345,
  },
}

const CommentsExample = {
  value: {
    collection: {
      body: 'comment body',
      created_at: '2007/09/11 15:40:24 +0000',
      id: 1234,
      kind: 'comment',
      timestamp: 4960,
      track_id: 123456,
      uri: 'https://api.soundcloud.com/comments/1234',
      user: {
        avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
        followers_count: 138,
        followings_count: 172,
        id: 12345,
        kind: 'user',
        last_modified: '2017/04/10 14:48:03 +0000',
        permalink: 'permalink',
        permalink_url: 'https://soundcloud.com/permalink',
        public_favorites_count: 5,
        reposts_count: 0,
        uri: 'https://api.soundcloud.com/users/12345',
        username: 'user name',
      },
      user_id: 12345,
    },
    next_href:
      'https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567',
  },
}

const CommentsResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: z.xor([CommentsSchema, CommentsListSchema]),
      examples: { commentsList: CommentsListExample, default: CommentsExample },
    },
  },
}

const CommentsListResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: CommentsListSchema,
      examples: { default: CommentsListExample },
    },
  },
}

const CompleteUserExample = {
  value: {
    avatar_url: 'https://i1.sndcdn.com/avatars.jpg',
    city: 'City',
    country: 'Country',
    description: null,
    discogs_name: null,
    first_name: 'First_name',
    followers_count: 0,
    followings_count: 0,
    full_name: 'Full Name',
    id: 12345,
    kind: 'user',
    last_modified: '2020/01/03 12:08:25 +0000',
    last_name: 'Last_name',
    locale: 'en',
    myspace_name: null,
    permalink: 'permalink',
    permalink_url: 'https://soundcloud.com/permalink',
    plan: 'Free',
    playlist_count: 3,
    primary_email_confirmed: true,
    private_playlists_count: 0,
    private_tracks_count: 0,
    public_favorites_count: 20,
    quota: { unlimited_upload_quota: false, upload_seconds_left: 10800, upload_seconds_used: 0 },
    reposts_count: 0,
    subscriptions: [{ product: { id: 'some-id', name: 'some.name' } }],
    track_count: 0,
    upload_seconds_left: 10800,
    uri: 'https://api.soundcloud.com/users/1234',
    username: 'some.user',
    website: null,
    website_title: null,
  },
}

const CompleteUserResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: CompleteUserSchema,
      examples: { default: CompleteUserExample },
    },
  },
}

const ConnectionExample = {
  value: {
    created_at: '1995/07/24 08:55:02 +0000',
    display_name: 'Full Name',
    id: 123456,
    kind: 'connection',
    post_favorite: true,
    post_publish: true,
    service: 'google_plus',
    type: 'google_plus',
    uri: 'https://api.soundcloud.com/connections/123456',
  },
}

const ConnectionResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: ConnectionSchema,
      examples: { default: ConnectionExample },
    },
  },
}

const ConnectionsExample = {
  value: {
    created_at: '1995/07/24 08:55:02 +0000',
    display_name: 'Full Name',
    id: 123456,
    kind: 'connection',
    post_favorite: true,
    post_publish: true,
    service: 'google_plus',
    type: 'google_plus',
    uri: 'https://api.soundcloud.com/connections/123456',
  },
}

const ConnectionsResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: ConnectionsSchema,
      examples: { default: ConnectionsExample },
    },
  },
}

const CreatedResponse = { description: 'Created', content: {} }

const ForbiddenExample = {
  value: {
    code: 403,
    link: 'https://developers.soundcloud.com/docs/api/explorer/open-api',
    message: 'Detailed message of errors, when available',
  },
}

const ForbiddenResponse = {
  description: 'Forbidden',
  content: { 'application/json': { schema: ErrorSchema, examples: { default: ForbiddenExample } } },
}

const FoundResponse = {
  description: 'Found',
  content: { 'application/json; charset=utf-8': { schema: FoundSchema } },
}

const FoundHtmlResponse = {
  description: 'Found',
  content: { 'application/json; charset=utf-8': { schema: z.string() } },
}

const LegacyPlaylistResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: z
        .object({
          artwork_url: z.string().exactOptional().openapi({ description: 'URL to a JPEG image.' }),
          created_at: z.string().exactOptional().openapi({ description: 'Created timestamp.' }),
          description: z.string().exactOptional().openapi({ description: 'Playlist description.' }),
          downloadable: z.boolean().exactOptional().openapi({ description: 'is downloadable.' }),
          duration: z.int().exactOptional().openapi({ description: 'Playlist duration.' }),
          ean: z.string().exactOptional().openapi({ description: 'European Article Number.' }),
          embeddable_by: z.string().exactOptional().openapi({ description: 'Embeddable by.' }),
          genre: z.string().exactOptional().openapi({ description: 'Playlist genre.' }),
          id: z.int().exactOptional().openapi({ description: 'Playlist identifier.' }),
          kind: z
            .string()
            .exactOptional()
            .openapi({ description: 'Type of Soundcloud object (playlist).' }),
          label_id: z.int().exactOptional().openapi({ description: 'Label user identifier.' }),
          label_name: z.string().exactOptional().openapi({ description: 'Label name.' }),
          last_modified: z
            .string()
            .exactOptional()
            .openapi({ description: 'Last modified timestamp.' }),
          license: z.string().exactOptional().openapi({ description: 'License.' }),
          permalink: z.string().exactOptional().openapi({ description: 'Playlist permalink.' }),
          permalink_url: z
            .string()
            .exactOptional()
            .openapi({ description: 'Playlist permalink URL.' }),
          playlist_type: z.string().exactOptional().openapi({ description: 'Type of playlist.' }),
          purchase_title: z.string().exactOptional().openapi({ description: 'Purchase title.' }),
          purchase_url: z.string().exactOptional().openapi({ description: 'Purchase URL.' }),
          release: z.string().exactOptional().openapi({ description: 'Release.' }),
          release_day: z.int().exactOptional().openapi({ description: 'Day of release.' }),
          release_month: z.int().exactOptional().openapi({ description: 'Month of release.' }),
          release_year: z.int().exactOptional().openapi({ description: 'Year of release.' }),
          sharing: z
            .string()
            .exactOptional()
            .openapi({ description: 'Type of sharing (private/public).' }),
          streamable: z.boolean().exactOptional().openapi({ description: 'Is streamable.' }),
          tag_list: z.string().exactOptional().openapi({ description: 'Tags.' }),
          title: z.string().exactOptional().openapi({ description: 'Playlist title.' }),
          track_count: z.int().exactOptional().openapi({ description: 'Count of tracks.' }),
          tracks: z
            .array(
              z
                .object({
                  artwork_url: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'URL to a JPEG image.' }),
                  bpm: z.int().exactOptional().openapi({ description: 'Tempo.' }),
                  comment_count: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of comments.' }),
                  commentable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Is commentable.' }),
                  created_at: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Created timestamp.' }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Track description.' }),
                  download_count: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'NUmber of downloads.' }),
                  downloadable: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Is downloadable.' }),
                  duration: z.int().exactOptional().openapi({ description: 'Track duration.' }),
                  embeddable_by: z
                    .string()
                    .exactOptional()
                    .openapi({ deprecated: true, description: 'Embeddable by.' }),
                  favoritings_count: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of favoritings.' }),
                  genre: z.string().exactOptional().openapi({ description: 'Genre' }),
                  id: z.int().exactOptional().openapi({ description: 'Track identifier.' }),
                  isrc: z.string().exactOptional().openapi({ description: 'ISRC code.' }),
                  key_signature: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Key signature.' }),
                  kind: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Type of object (track).' }),
                  label_name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Label user name.' }),
                  license: z.string().exactOptional().openapi({ description: 'License' }),
                  permalink_url: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Permalink URL.' }),
                  playback_count: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of plays.' }),
                  purchase_title: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Purchase title.' }),
                  purchase_url: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Purchase URL.' }),
                  release: z.string().exactOptional().openapi({ description: 'Release.' }),
                  release_day: z.int().exactOptional().openapi({ description: 'Day of release.' }),
                  release_month: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Month of release.' }),
                  release_year: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Year of release.' }),
                  sharing: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Type of sharing (public/private).' }),
                  stream_url: z.string().exactOptional().openapi({ description: 'URL to stream.' }),
                  streamable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Is streamable.' }),
                  tag_list: z.string().exactOptional().openapi({ description: 'Tags.' }),
                  title: z.string().exactOptional().openapi({ description: 'Track title.' }),
                  uri: z.string().exactOptional().openapi({ description: 'Track URI.' }),
                  user: MetaUserSchema.exactOptional().openapi({
                    description: 'User who uploaded a track',
                  }),
                  user_favorite: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: "Is user's favourite." }),
                  user_playback_count: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Number of plays by a user.' }),
                  waveform_url: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Waveform URL.' }),
                })
                .openapi({ description: 'Soundcloud Track object.', required: [] }),
            )
            .exactOptional()
            .openapi({ description: 'List of tracks.' }),
          type: z.string().exactOptional().openapi({ description: 'Playlist type.' }),
          uri: z.string().exactOptional().openapi({ description: 'Playlist URI.' }),
          user: MetaUserSchema.exactOptional(),
          user_id: z.int().exactOptional().openapi({ description: 'User identifier.' }),
        })
        .openapi({ description: 'Soundcloud Playlist Object', required: [] }),
    },
  },
}

const UserOfExample = {
  value: {
    avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
    id: 12345,
    kind: 'user',
    last_modified: '2020/09/03 14:08:25 +0000',
    permalink: 'permalink',
    permalink_url: 'https://soundcloud.com/permalink',
    uri: 'https://api.soundcloud.com/users/12345',
    username: 'user.name',
  },
}

const MetaUserResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: MetaUserSchema,
      examples: { default: UserOfExample },
    },
  },
}

const MetaUsersExample = {
  value: {
    collection: {
      avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
      id: 12345,
      kind: 'user',
      last_modified: '2020/09/03 14:08:25 +0000',
      permalink: 'permalink',
      permalink_url: 'https://soundcloud.com/permalink',
      uri: 'https://api.soundcloud.com/users/12345',
      username: 'user.name',
    },
    next_href:
      'https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567',
  },
}

const MetaUsersResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: MetaUsersSchema,
      examples: { default: MetaUsersExample },
    },
  },
}

const NotFoundExample = {
  value: {
    code: 404,
    link: 'https://developers.soundcloud.com/docs/api/explorer/open-api',
    message: 'Detailed message of errors, when available',
  },
}

const NotFoundResponse = {
  description: 'Not Found',
  content: { 'application/json': { schema: ErrorSchema, examples: { default: NotFoundExample } } },
}

const PlaylistExample = {
  value: {
    artwork_url: '',
    created_at: '2020/07/16 16:09:54 +0000',
    description: null,
    downloadable: true,
    duration: 11000,
    ean: null,
    embeddable_by: 'all',
    genre: '',
    id: 12345,
    kind: 'playlist',
    label: null,
    label_id: null,
    label_name: null,
    last_modified: '2020/09/08 09:13:00 +0000',
    license: 'all-rights-reserved',
    likes_count: 0,
    permalink: 'permalink',
    permalink_url: 'https://soundcloud.com/userPermalink/sets/permalink',
    playlist_type: '',
    purchase_title: null,
    purchase_url: null,
    release: null,
    release_day: null,
    release_month: null,
    release_year: null,
    sharing: 'public',
    streamable: true,
    tag_list: '',
    tags: '',
    title: 'permalink',
    track_count: 2,
    tracks: {
      access: 'playable',
      artwork_url: 'https://i1.sndcdn.com/artworks-large.jpg',
      available_country_codes: null,
      bpm: null,
      comment_count: 4,
      commentable: true,
      created_at: '2019/01/15 15:40:49 +0000',
      description: null,
      download_count: 0,
      download_url: 'https://api.soundcloud.com/tracks/1234/download',
      downloadable: false,
      duration: 40000,
      embeddable_by: 'all',
      favoritings_count: 271,
      genre: 'Rock',
      id: 1234,
      isrc: null,
      key_signature: null,
      kind: 'track',
      label_name: 'some label',
      license: 'all-rights-reserved',
      permalink_url: 'https://soundcloud.com/userPermalink/trackPermalink',
      playback_count: 8027,
      purchase_title: null,
      purchase_url: null,
      release: null,
      release_day: 22,
      release_month: 8,
      release_year: 2019,
      reposts_count: 18,
      secret_uri: null,
      sharing: 'public',
      stream_url: 'https://api.soundcloud.com/tracks/1234/stream',
      streamable: true,
      tag_list: '',
      title: 'Some title',
      uri: 'https://api.soundcloud.com/tracks/1234',
      user: {
        avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
        id: 12345,
        kind: 'user',
        last_modified: '2020/09/03 14:08:25 +0000',
        permalink: 'permalink',
        permalink_url: 'https://soundcloud.com/permalink',
        uri: 'https://api.soundcloud.com/users/12345',
        username: 'user.name',
      },
      user_favorite: true,
      user_playback_count: 1,
      waveform_url: 'https://wave.sndcdn.com/someString.png',
    },
    tracks_uri: 'https://api.soundcloud.com/playlists/12345/tracks',
    type: '',
    uri: 'https://api.soundcloud.com/playlists/12345',
    user: {
      avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
      id: 12345,
      kind: 'user',
      last_modified: '2020/09/03 14:08:25 +0000',
      permalink: 'permalink',
      permalink_url: 'https://soundcloud.com/permalink',
      uri: 'https://api.soundcloud.com/users/12345',
      username: 'user.name',
    },
    user_id: 1234,
  },
}

const PlaylistResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: PlaylistSchema,
      examples: { default: PlaylistExample },
    },
  },
}

const PlaylistsExample = {
  value: {
    collection: {
      artwork_url: '',
      created_at: '2020/07/16 16:09:54 +0000',
      description: null,
      downloadable: true,
      duration: 11000,
      ean: null,
      embeddable_by: 'all',
      genre: '',
      id: 12345,
      kind: 'playlist',
      label: null,
      label_id: null,
      label_name: null,
      last_modified: '2020/09/08 09:13:00 +0000',
      license: 'all-rights-reserved',
      likes_count: 0,
      permalink: 'permalink',
      permalink_url: 'https://soundcloud.com/userPermalink/sets/permalink',
      playlist_type: '',
      purchase_title: null,
      purchase_url: null,
      release: null,
      release_day: null,
      release_month: null,
      release_year: null,
      sharing: 'public',
      streamable: true,
      tag_list: '',
      tags: '',
      title: 'permalink',
      track_count: 2,
      tracks: {
        access: 'playable',
        artwork_url: 'https://i1.sndcdn.com/artworks-large.jpg',
        available_country_codes: null,
        bpm: null,
        comment_count: 4,
        commentable: true,
        created_at: '2019/01/15 15:40:49 +0000',
        description: null,
        download_count: 0,
        download_url: 'https://api.soundcloud.com/tracks/1234/download',
        downloadable: false,
        duration: 40000,
        embeddable_by: 'all',
        favoritings_count: 271,
        genre: 'Rock',
        id: 1234,
        isrc: null,
        key_signature: null,
        kind: 'track',
        label_name: 'some label',
        license: 'all-rights-reserved',
        permalink_url: 'https://soundcloud.com/userPermalink/trackPermalink',
        playback_count: 8027,
        purchase_title: null,
        purchase_url: null,
        release: null,
        release_day: 22,
        release_month: 8,
        release_year: 2019,
        reposts_count: 18,
        secret_uri: null,
        sharing: 'public',
        stream_url: 'https://api.soundcloud.com/tracks/1234/stream',
        streamable: true,
        tag_list: '',
        title: 'Some title',
        uri: 'https://api.soundcloud.com/tracks/1234',
        user: {
          avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
          id: 12345,
          kind: 'user',
          last_modified: '2020/09/03 14:08:25 +0000',
          permalink: 'permalink',
          permalink_url: 'https://soundcloud.com/permalink',
          uri: 'https://api.soundcloud.com/users/12345',
          username: 'user.name',
        },
        user_favorite: true,
        user_playback_count: 1,
        waveform_url: 'https://wave.sndcdn.com/someString.png',
      },
      tracks_uri: 'https://api.soundcloud.com/playlists/12345/tracks',
      type: '',
      uri: 'https://api.soundcloud.com/playlists/12345',
      user: {
        avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
        id: 12345,
        kind: 'user',
        last_modified: '2020/09/03 14:08:25 +0000',
        permalink: 'permalink',
        permalink_url: 'https://soundcloud.com/permalink',
        uri: 'https://api.soundcloud.com/users/12345',
        username: 'user.name',
      },
      user_id: 1234,
    },
    next_href:
      'https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567',
  },
}

const PlaylistsArrayExample = {
  description: 'Deprecated, use Playlists instead.',
  value: {
    artwork_url: '',
    created_at: '2020/07/16 16:09:54 +0000',
    description: null,
    downloadable: true,
    duration: 11000,
    ean: null,
    embeddable_by: 'all',
    genre: '',
    id: 12345,
    kind: 'playlist',
    label: null,
    label_id: null,
    label_name: null,
    last_modified: '2020/09/08 09:13:00 +0000',
    license: 'all-rights-reserved',
    likes_count: 0,
    permalink: 'permalink',
    permalink_url: 'https://soundcloud.com/userPermalink/sets/permalink',
    playlist_type: '',
    purchase_title: null,
    purchase_url: null,
    release: null,
    release_day: null,
    release_month: null,
    release_year: null,
    sharing: 'public',
    streamable: true,
    tag_list: '',
    tags: '',
    title: 'permalink',
    track_count: 2,
    tracks: {
      access: 'playable',
      artwork_url: 'https://i1.sndcdn.com/artworks-large.jpg',
      available_country_codes: null,
      bpm: null,
      comment_count: 4,
      commentable: true,
      created_at: '2019/01/15 15:40:49 +0000',
      description: null,
      download_count: 0,
      download_url: 'https://api.soundcloud.com/tracks/1234/download',
      downloadable: false,
      duration: 40000,
      embeddable_by: 'all',
      favoritings_count: 271,
      genre: 'Rock',
      id: 1234,
      isrc: null,
      key_signature: null,
      kind: 'track',
      label_name: 'some label',
      license: 'all-rights-reserved',
      permalink_url: 'https://soundcloud.com/userPermalink/trackPermalink',
      playback_count: 8027,
      purchase_title: null,
      purchase_url: null,
      release: null,
      release_day: 22,
      release_month: 8,
      release_year: 2019,
      reposts_count: 18,
      secret_uri: null,
      sharing: 'public',
      stream_url: 'https://api.soundcloud.com/tracks/1234/stream',
      streamable: true,
      tag_list: '',
      title: 'Some title',
      uri: 'https://api.soundcloud.com/tracks/1234',
      user: {
        avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
        id: 12345,
        kind: 'user',
        last_modified: '2020/09/03 14:08:25 +0000',
        permalink: 'permalink',
        permalink_url: 'https://soundcloud.com/permalink',
        uri: 'https://api.soundcloud.com/users/12345',
        username: 'user.name',
      },
      user_favorite: true,
      user_playback_count: 1,
      waveform_url: 'https://wave.sndcdn.com/someString.png',
    },
    tracks_uri: 'https://api.soundcloud.com/playlists/12345/tracks',
    type: '',
    uri: 'https://api.soundcloud.com/playlists/12345',
    user: {
      avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
      id: 12345,
      kind: 'user',
      last_modified: '2020/09/03 14:08:25 +0000',
      permalink: 'permalink',
      permalink_url: 'https://soundcloud.com/permalink',
      uri: 'https://api.soundcloud.com/users/12345',
      username: 'user.name',
    },
    user_id: 1234,
  },
}

const PlaylistsResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: z.xor([PlaylistsSchema, PlaylistsArraySchema]),
      examples: { default: PlaylistsExample, playlistsArray: PlaylistsArrayExample },
    },
  },
}

const PlaylistsArrayResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: PlaylistsArraySchema,
      examples: { default: PlaylistsArrayExample },
    },
  },
}

const StreamsExample = {
  value: {
    hls_mp3_128_url: 'https://cf-media.sndcdn.com/',
    hls_opus_64_url: 'https://cf-media.sndcdn.com/',
    http_mp3_128_url: 'https://cf-media.sndcdn.com/',
    preview_mp3_128_url: 'https://cf-media.sndcdn.com/',
  },
}

const StreamsResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: StreamsSchema,
      examples: { default: StreamsExample },
    },
  },
}

const SuccessResponse = { description: 'Success', content: {} }

const SuccessfulResponse = { description: 'Success', content: {} }

const TooManyRequestsExample = {
  value: {
    code: 429,
    link: 'https://developers.soundcloud.com/docs/api/rate-limits#errors',
    message: 'Detailed message of errors, when available',
    spam_warning_urn: 'soundcloud:spam-warnings:1',
  },
}

const TooManyRequestsResponse = {
  description: 'Too Many Requests',
  content: {
    'application/json': {
      schema: TooManyRequestsSchema,
      examples: { default: TooManyRequestsExample },
    },
  },
}

const TrackExample = {
  value: {
    access: 'playable',
    artwork_url: 'https://i1.sndcdn.com/artworks-large.jpg',
    available_country_codes: null,
    bpm: null,
    comment_count: 4,
    commentable: true,
    created_at: '2019/01/15 15:40:49 +0000',
    description: null,
    download_count: 0,
    download_url: 'https://api.soundcloud.com/tracks/1234/download',
    downloadable: false,
    duration: 40000,
    embeddable_by: 'all',
    favoritings_count: 271,
    genre: 'Rock',
    id: 1234,
    isrc: null,
    key_signature: null,
    kind: 'track',
    label_name: 'some label',
    license: 'all-rights-reserved',
    permalink_url: 'https://soundcloud.com/userPermalink/trackPermalink',
    playback_count: 8027,
    purchase_title: null,
    purchase_url: null,
    release: null,
    release_day: 22,
    release_month: 8,
    release_year: 2019,
    reposts_count: 18,
    secret_uri: null,
    sharing: 'public',
    stream_url: 'https://api.soundcloud.com/tracks/1234/stream',
    streamable: true,
    tag_list: '',
    title: 'Some title',
    uri: 'https://api.soundcloud.com/tracks/1234',
    user: {
      avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
      id: 12345,
      kind: 'user',
      last_modified: '2020/09/03 14:08:25 +0000',
      permalink: 'permalink',
      permalink_url: 'https://soundcloud.com/permalink',
      uri: 'https://api.soundcloud.com/users/12345',
      username: 'user.name',
    },
    user_favorite: true,
    user_playback_count: 1,
    waveform_url: 'https://wave.sndcdn.com/someString.png',
  },
}

const TrackResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': { schema: TrackSchema, examples: { default: TrackExample } },
  },
}

const TracksExample = {
  value: {
    collection: {
      access: 'playable',
      artwork_url: 'https://i1.sndcdn.com/artworks-large.jpg',
      available_country_codes: null,
      bpm: null,
      comment_count: 4,
      commentable: true,
      created_at: '2019/01/15 15:40:49 +0000',
      description: null,
      download_count: 0,
      download_url: 'https://api.soundcloud.com/tracks/1234/download',
      downloadable: false,
      duration: 40000,
      embeddable_by: 'all',
      favoritings_count: 271,
      genre: 'Rock',
      id: 1234,
      isrc: null,
      key_signature: null,
      kind: 'track',
      label_name: 'some label',
      license: 'all-rights-reserved',
      permalink_url: 'https://soundcloud.com/userPermalink/trackPermalink',
      playback_count: 8027,
      purchase_title: null,
      purchase_url: null,
      release: null,
      release_day: 22,
      release_month: 8,
      release_year: 2019,
      reposts_count: 18,
      secret_uri: null,
      sharing: 'public',
      stream_url: 'https://api.soundcloud.com/tracks/1234/stream',
      streamable: true,
      tag_list: '',
      title: 'Some title',
      uri: 'https://api.soundcloud.com/tracks/1234',
      user: {
        avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
        id: 12345,
        kind: 'user',
        last_modified: '2020/09/03 14:08:25 +0000',
        permalink: 'permalink',
        permalink_url: 'https://soundcloud.com/permalink',
        uri: 'https://api.soundcloud.com/users/12345',
        username: 'user.name',
      },
      user_favorite: true,
      user_playback_count: 1,
      waveform_url: 'https://wave.sndcdn.com/someString.png',
    },
    next_href:
      'https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567',
  },
}

const TracksListExample = {
  description: 'Deprecated, use Tracks instead.',
  value: {
    access: 'playable',
    artwork_url: 'https://i1.sndcdn.com/artworks-large.jpg',
    available_country_codes: null,
    bpm: null,
    comment_count: 4,
    commentable: true,
    created_at: '2019/01/15 15:40:49 +0000',
    description: null,
    download_count: 0,
    download_url: 'https://api.soundcloud.com/tracks/1234/download',
    downloadable: false,
    duration: 40000,
    embeddable_by: 'all',
    favoritings_count: 271,
    genre: 'Rock',
    id: 1234,
    isrc: null,
    key_signature: null,
    kind: 'track',
    label_name: 'some label',
    license: 'all-rights-reserved',
    permalink_url: 'https://soundcloud.com/userPermalink/trackPermalink',
    playback_count: 8027,
    purchase_title: null,
    purchase_url: null,
    release: null,
    release_day: 22,
    release_month: 8,
    release_year: 2019,
    reposts_count: 18,
    secret_uri: null,
    sharing: 'public',
    stream_url: 'https://api.soundcloud.com/tracks/1234/stream',
    streamable: true,
    tag_list: '',
    title: 'Some title',
    uri: 'https://api.soundcloud.com/tracks/1234',
    user: {
      avatar_url: 'https://i1.sndcdn.com/avatars-large.jpg',
      id: 12345,
      kind: 'user',
      last_modified: '2020/09/03 14:08:25 +0000',
      permalink: 'permalink',
      permalink_url: 'https://soundcloud.com/permalink',
      uri: 'https://api.soundcloud.com/users/12345',
      username: 'user.name',
    },
    user_favorite: true,
    user_playback_count: 1,
    waveform_url: 'https://wave.sndcdn.com/someString.png',
  },
}

const TracksResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: z.xor([TracksSchema, TracksListSchema]),
      examples: { default: TracksExample, tracksList: TracksListExample },
    },
  },
}

const TracksListResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: TracksListSchema,
      examples: { default: TracksListExample },
    },
  },
}

const UnauthorizedExample = {
  value: {
    code: 401,
    link: 'https://developers.soundcloud.com/docs/api/explorer/open-api',
    message: 'Detailed message of errors, when available',
  },
}

const UnauthorizedResponse = {
  description: 'Unauthorized',
  content: {
    'application/json; charset=utf-8': {
      schema: ErrorSchema,
      examples: { default: UnauthorizedExample },
    },
  },
}

const UnprocessableEntityExample = {
  value: {
    code: 422,
    link: 'https://developers.soundcloud.com/docs/api/explorer/open-api',
    message: 'Detailed message of errors, when available',
  },
}

const UnprocessableEntityResponse = {
  description: 'Unprocessable Entity',
  content: {
    'application/json': { schema: ErrorSchema, examples: { default: UnprocessableEntityExample } },
  },
}

const UserExample = {
  value: {
    avatar_url: 'https://i1.sndcdn.com/avatars.jpg',
    city: 'City',
    country: 'Country',
    created_at: '2018/01/01 12:08:25 +0000',
    description: null,
    discogs_name: null,
    first_name: 'First_name',
    followers_count: 0,
    followings_count: 0,
    full_name: 'Full Name',
    id: 12345,
    kind: 'user',
    last_modified: '2020/01/03 12:08:25 +0000',
    last_name: 'Last_name',
    myspace_name: null,
    permalink: 'permalink',
    permalink_url: 'https://soundcloud.com/permalink',
    plan: 'Free',
    playlist_count: 3,
    public_favorites_count: 20,
    reposts_count: 0,
    subscriptions: [{ product: { id: 'some-id', name: 'some.name' } }],
    track_count: 0,
    upload_seconds_left: 10800,
    uri: 'https://api.soundcloud.com/users/1234',
    username: 'some.user',
    website: null,
    website_title: null,
  },
}

const UserResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': { schema: UserSchema, examples: { default: UserExample } },
  },
}

const UsersExample = {
  value: {
    collection: {
      avatar_url: 'https://i1.sndcdn.com/avatars.jpg',
      city: 'City',
      country: 'Country',
      created_at: '2018/01/01 12:08:25 +0000',
      description: null,
      discogs_name: null,
      first_name: 'First_name',
      followers_count: 0,
      followings_count: 0,
      full_name: 'Full Name',
      id: 12345,
      kind: 'user',
      last_modified: '2020/01/03 12:08:25 +0000',
      last_name: 'Last_name',
      myspace_name: null,
      permalink: 'permalink',
      permalink_url: 'https://soundcloud.com/permalink',
      plan: 'Free',
      playlist_count: 3,
      public_favorites_count: 20,
      reposts_count: 0,
      subscriptions: [{ product: { id: 'some-id', name: 'some.name' } }],
      track_count: 0,
      upload_seconds_left: 10800,
      uri: 'https://api.soundcloud.com/users/1234',
      username: 'some.user',
      website: null,
      website_title: null,
    },
    next_href:
      'https://api.soundcloud.com/collection?client_id=client_id&page_size=10&cursor=1234567',
  },
}

const UsersListExample = {
  description: 'Deprecated, use Users instead.',
  value: {
    avatar_url: 'https://i1.sndcdn.com/avatars.jpg',
    city: 'City',
    country: 'Country',
    created_at: '2018/01/01 12:08:25 +0000',
    description: null,
    discogs_name: null,
    first_name: 'First_name',
    followers_count: 0,
    followings_count: 0,
    full_name: 'Full Name',
    id: 12345,
    kind: 'user',
    last_modified: '2020/01/03 12:08:25 +0000',
    last_name: 'Last_name',
    myspace_name: null,
    permalink: 'permalink',
    permalink_url: 'https://soundcloud.com/permalink',
    plan: 'Free',
    playlist_count: 3,
    public_favorites_count: 20,
    reposts_count: 0,
    subscriptions: [{ product: { id: 'some-id', name: 'some.name' } }],
    track_count: 0,
    upload_seconds_left: 10800,
    uri: 'https://api.soundcloud.com/users/1234',
    username: 'some.user',
    website: null,
    website_title: null,
  },
}

const UsersResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: z.xor([UsersSchema, UsersListSchema]),
      examples: { default: UsersExample, usersList: UsersListExample },
    },
  },
}

const UsersListResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: UsersListSchema,
      examples: { default: UsersListExample },
    },
  },
}

const WebProfilesExample = {
  value: [
    {
      created_at: '1995/10/20 12:10:39 +0000',
      id: 1234,
      kind: 'web-profile',
      service: 'facebook',
      title: 'my facebook',
      url: 'http://facebook.com',
      username: 'username',
    },
  ],
}

const WebProfilesResponse = {
  description: 'Success',
  content: {
    'application/json; charset=utf-8': {
      schema: WebProfilesSchema,
      examples: { default: WebProfilesExample },
    },
  },
}

const AccessParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['playable', 'preview', 'blocked'])),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
      explode: false,
      in: 'query',
      name: 'access',
      schema: {
        default: 'playable,preview',
        items: { enum: ['playable', 'preview', 'blocked'], type: 'string' },
        type: 'array',
      },
      style: 'form',
      required: false,
    },
    default: 'playable,preview',
  })

const BpmParamsSchema = z
  .object({
    from: z
      .preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.int(),
      )
      .exactOptional()
      .openapi({ description: 'Return tracks with at least this bpm value', example: 123 }),
    to: z
      .preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.int(),
      )
      .exactOptional()
      .openapi({ description: 'Return tracks with at most this bpm value', example: 456 }),
  })
  .exactOptional()
  .openapi({
    param: {
      description: 'Return tracks with a specified bpm[from], bpm[to]',
      in: 'query',
      name: 'bpm',
      required: false,
      schema: {
        properties: {
          from: {
            description: 'Return tracks with at least this bpm value',
            example: 123,
            type: 'integer',
          },
          to: {
            description: 'Return tracks with at most this bpm value',
            example: 456,
            type: 'integer',
          },
        },
        type: 'object',
      },
      style: 'deepObject',
    },
    required: [],
  })

const ClientIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The client id belonging to your application',
      example: 'some client',
      in: 'query',
      name: 'client_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const CommentIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud comment id',
      example: 123456,
      in: 'path',
      name: 'comment_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const ConnectionIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud connection id',
      example: 123456,
      in: 'path',
      name: 'connection_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const CreatedAtParamsSchema = z
  .object({
    from: z
      .string()
      .exactOptional()
      .openapi({
        description: '(yyyy-mm-dd hh:mm:ss) return tracks created at this date or later',
        example: '2020-12-24T00:00:00.000Z',
      }),
    to: z
      .string()
      .exactOptional()
      .openapi({
        description: '(yyyy-mm-dd hh:mm:ss) return tracks created at this date or earlier',
        example: '2020-12-26T00:00:00.000Z',
      }),
  })
  .exactOptional()
  .openapi({
    param: {
      description: '(yyyy-mm-dd hh:mm:ss) return tracks created within the specified dates',
      in: 'query',
      name: 'created_at',
      required: false,
      schema: {
        properties: {
          from: {
            description: '(yyyy-mm-dd hh:mm:ss) return tracks created at this date or later',
            example: '2020-12-24T00:00:00.000Z',
            type: 'string',
          },
          to: {
            description: '(yyyy-mm-dd hh:mm:ss) return tracks created at this date or earlier',
            example: '2020-12-26T00:00:00.000Z',
            type: 'string',
          },
        },
        type: 'object',
      },
      style: 'deepObject',
    },
    required: [],
  })

const DurationParamsSchema = z
  .object({
    from: z
      .preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.int(),
      )
      .exactOptional()
      .openapi({ description: 'Return tracks with at least this duration value', example: 123456 }),
    to: z
      .preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.int(),
      )
      .exactOptional()
      .openapi({ description: 'Return tracks with at most this duration value', example: 456789 }),
  })
  .exactOptional()
  .openapi({
    param: {
      description: 'Return tracks within a specified duration range',
      in: 'query',
      name: 'duration',
      required: false,
      schema: {
        properties: {
          from: {
            description: 'Return tracks with at least this duration value',
            example: 123456,
            type: 'integer',
          },
          to: {
            description: 'Return tracks with at most this duration value',
            example: 456789,
            type: 'integer',
          },
        },
        type: 'object',
      },
      style: 'deepObject',
    },
    required: [],
  })

const FakePlaylistIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud playlist id',
      example: 10,
      in: 'path',
      name: 'playlist_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const FollowerIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud User id to denote a Follower',
      example: 743372812,
      in: 'path',
      name: 'follower_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const FollowingIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud User id to denote a Following of a user',
      example: 25219981,
      in: 'path',
      name: 'following_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const GenresParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of genres',
      example: 'Pop,House',
      in: 'query',
      name: 'genres',
      required: false,
      schema: { type: 'string' },
    },
  })

const IdsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of track ids to filter on',
      example: '1,2,3',
      in: 'query',
      name: 'ids',
      required: false,
      schema: { type: 'string' },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(200),
  )
  .default(50)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of results to return in the collection.',
      example: 2,
      in: 'query',
      name: 'limit',
      required: false,
      schema: { default: 50, maximum: 200, minimum: 1, type: 'integer' },
    },
  })

const LinkedPartitioningParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)',
      example: true,
      in: 'query',
      name: 'linked_partitioning',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      deprecated: true,
      description: 'Offset of first result. Deprecated, use `linked_partitioning` instead.',
      example: 0,
      in: 'query',
      name: 'offset',
      required: false,
      schema: { default: 0, type: 'integer' },
    },
  })

const PlaylistIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud playlist id',
      example: 1212781357,
      in: 'path',
      name: 'playlist_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const QParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'search',
      example: 'hello',
      in: 'query',
      name: 'q',
      required: true,
      schema: { type: 'string' },
    },
  })

const RedirectUriParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The redirect uri you have configured for your application',
      example: 'https://soundcloud.com',
      in: 'query',
      name: 'redirect_uri',
      required: true,
      schema: { type: 'string' },
    },
  })

const RepostPlaylistIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud playlist id',
      example: 1205584273,
      in: 'path',
      name: 'playlist_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const ResponseTypeParamsSchema = z
  .enum(['code', 'token', 'code_and_token'])
  .openapi({
    param: {
      description: 'It\'s recommended to use "code" here',
      example: 'code',
      in: 'query',
      name: 'response_type',
      required: true,
      schema: { enum: ['code', 'token', 'code_and_token'], type: 'string' },
    },
  })

const ScopeParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Scope',
      example: 'default',
      in: 'query',
      name: 'scope',
      required: true,
      schema: { type: 'string' },
    },
  })

const SecretTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A secret token to fetch private playlists/tracks',
      in: 'query',
      name: 'secret_token',
      required: false,
      schema: { type: 'string' },
    },
  })

const StateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Any value included here will be appended to the redirect URI. Use this for CSRF protection.',
      example: 'encrypted_session_info',
      in: 'query',
      name: 'state',
      required: false,
      schema: { type: 'string' },
    },
  })

const TagParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'tag',
      example: 'some tag',
      in: 'path',
      name: 'tag',
      required: true,
      schema: { type: 'string' },
    },
  })

const TagsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of tags',
      example: 'test',
      in: 'query',
      name: 'tags',
      required: false,
      schema: { type: 'string' },
    },
  })

const TestTrackIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud Track id',
      example: 1015448728,
      in: 'path',
      name: 'track_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const TrackIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud Track id',
      example: 308946187,
      in: 'path',
      name: 'track_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const UrlParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'SoundCloud URL',
      example: 'https://soundcloud.com/user-434241656',
      in: 'query',
      name: 'url',
      required: true,
      schema: { type: 'string' },
    },
  })

const UserIdParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud User id',
      example: 948745750,
      in: 'path',
      name: 'user_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const UserIdToFollowParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      description: 'SoundCloud User id',
      example: 743372812,
      in: 'path',
      name: 'user_id',
      required: true,
      schema: { type: 'integer' },
    },
  })

const AcceptedExample = { value: { status: '202 - Accepted' } }

const AuthorizationCodeExample = {
  value: {
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET',
    code: '1-123456-12345678-FAbcfbe9ir2wdj0',
    grant_type: 'authorization_code',
    redirect_uri: 'https://mywebsite/auth/soundcloud',
  },
}

const ClientCredentialsExample = {
  value: {
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET',
    grant_type: 'client_credentials',
  },
}

const CreateUpdatePlaylistRequestExample = {
  value: {
    playlist: {
      description: 'Playlist for test purposes',
      sharing: 'private',
      title: 'Test Auto-created Playlist',
      tracks: [{ id: 219787221 }, { id: 783019264 }, { id: 870073492 }],
    },
  },
}

const CreatedExample = { value: { status: '201 - Created' } }

const ErrorInvalidGrantExample = {
  value: {
    code: 400,
    link: 'https://developers.soundcloud.com/docs/api/guide#authentication',
    message: 'invalid_grant',
  },
}

const ErrorUnsupportedGrantExample = {
  value: {
    code: 400,
    link: 'https://developers.soundcloud.com/docs/api/guide#authentication',
    message: 'unsupported_grant',
  },
}

const ExpiringTokenExample = {
  value: {
    access_token: 'some string',
    expires_in: 21599,
    refresh_token: 'some string',
    scope: '',
  },
}

const NonExpiringTokenExample = { value: { access_token: 'some string', scope: 'non-expiring' } }

const OKExample = { value: { status: 'Status(200) - OK' } }

const PasswordExample = {
  value: {
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET',
    password: 'my-password',
    username: 'my-user-name',
  },
}

const RefreshTokenExample = {
  value: {
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET',
    grant_type: 'refresh_token',
    refresh_token: '1234c331329477150e7b6056ff212345',
  },
}

const SuccessExample = { value: { status: '200 - OK' } }

const SuccessfulExample = { value: { status: '200 - Successful' } }

const TrackDataRequestExample = {
  value: {
    'track[artwork_data]': null,
    'track[asset_data]': '<binary string>',
    'track[commentable]': true,
    'track[description]': 'Public-api test sample upload',
    'track[downloadable]': false,
    'track[embeddable_by]': 'me',
    'track[genre]': 'Pop',
    'track[isrc]': null,
    'track[label_name]': null,
    'track[license]': 'no-rights-reserved',
    'track[permalink]': 'test-drum-sample',
    'track[purchase_url]': null,
    'track[release]': null,
    'track[release_date]': '2021-02-18T00:00:00.000Z',
    'track[sharing]': 'private',
    'track[streamable]': true,
    'track[tag_list]': null,
    'track[title]': 'Test drum sample',
  },
}

const TrackMetadataRequestExample = { value: { 'track[title]': 'Updated Test Track' } }

const AuthHeaderSecurityScheme = {
  description: 'The string "OAuth" followed by the user’s token: OAuth ACCESS_TOKEN',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

const ClientIdSecurityScheme = {
  description: 'Your product key. This is not the same as the API key used for most requests',
  in: 'query',
  name: 'client_id',
  type: 'apiKey',
}

export const getConnectRoute = createRoute({
  method: 'get',
  path: '/connect',
  tags: ['oauth'],
  summary:
    'The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.',
  description:
    '<h3>Security Advice</h3>\n* Using the [implicit OAuth authorization flow](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-2.1.2) (`response_type=token`)  is **not recommended**. It can suffer from access token leakage and access token replay attacks. Use `response_type=code` instead.\n* Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token.\n',
  request: {
    query: z.object({
      client_id: ClientIdParamsSchema,
      redirect_uri: RedirectUriParamsSchema,
      response_type: ResponseTypeParamsSchema,
      scope: ScopeParamsSchema,
      state: StateParamsSchema,
    }),
  },
  responses: { 302: FoundHtmlResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const postLikesPlaylistsPlaylistIdRoute = createRoute({
  method: 'post',
  path: '/likes/playlists/{playlist_id}',
  tags: ['likes'],
  summary: 'Likes a playlist.',
  request: { params: z.object({ playlist_id: PlaylistIdParamsSchema }) },
  responses: {
    200: SuccessResponse,
    201: CreatedResponse,
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ AuthHeader: [] }],
})

export const deleteLikesPlaylistsPlaylistIdRoute = createRoute({
  method: 'delete',
  path: '/likes/playlists/{playlist_id}',
  tags: ['likes'],
  summary: 'Unlikes a playlist.',
  request: { params: z.object({ playlist_id: PlaylistIdParamsSchema }) },
  responses: { 200: SuccessResponse, 400: BadRequestResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const postLikesTracksTrackIdRoute = createRoute({
  method: 'post',
  path: '/likes/tracks/{track_id}',
  tags: ['likes'],
  summary: 'Likes a track.',
  request: { params: z.object({ track_id: TestTrackIdParamsSchema }) },
  responses: {
    200: SuccessResponse,
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ AuthHeader: [] }],
})

export const deleteLikesTracksTrackIdRoute = createRoute({
  method: 'delete',
  path: '/likes/tracks/{track_id}',
  tags: ['likes'],
  summary: 'Unlikes a track.',
  request: { params: z.object({ track_id: TestTrackIdParamsSchema }) },
  responses: { 200: SuccessResponse, 400: BadRequestResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['me'],
  summary: 'Returns the authenticated user’s information.',
  responses: { 200: CompleteUserResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeActivitiesRoute = createRoute({
  method: 'get',
  path: '/me/activities',
  tags: ['me'],
  summary: "Returns the authenticated user's activities.",
  request: { query: z.object({ access: AccessParamsSchema, limit: LimitParamsSchema }) },
  responses: { 200: ActivitiesResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeActivitiesAllOwnRoute = createRoute({
  method: 'get',
  path: '/me/activities/all/own',
  tags: ['me'],
  summary: "Recent the authenticated user's activities.",
  request: { query: z.object({ access: AccessParamsSchema, limit: LimitParamsSchema }) },
  responses: { 200: ActivitiesResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeActivitiesTracksRoute = createRoute({
  method: 'get',
  path: '/me/activities/tracks',
  tags: ['me'],
  summary: "Returns the authenticated user's recent track related activities.",
  request: { query: z.object({ access: AccessParamsSchema, limit: LimitParamsSchema }) },
  responses: { 200: ActivitiesResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeConnectionsRoute = createRoute({
  method: 'get',
  path: '/me/connections',
  tags: ['me'],
  summary: "Returns a list of the authenticated user's connected social accounts.",
  request: { query: z.object({ limit: LimitParamsSchema, offset: OffsetParamsSchema }) },
  responses: { 200: ConnectionsResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeConnectionsConnectionIdRoute = createRoute({
  method: 'get',
  path: '/me/connections/{connection_id}',
  tags: ['me'],
  summary: "Returns the authenticated user's connected social account.",
  request: { params: z.object({ connection_id: ConnectionIdParamsSchema }) },
  responses: { 200: ConnectionResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeFavoritesIdsRoute = createRoute({
  method: 'get',
  path: '/me/favorites/ids',
  tags: ['me'],
  summary:
    "Returns user’s favorites ids. (use /me/likes/tracks instead to fetch the authenticated user's likes)",
  request: { query: z.object({ limit: LimitParamsSchema }) },
  responses: {
    200: { description: 'Success' },
    404: { description: 'The user could not be found' },
  },
  deprecated: true,
  security: [{ AuthHeader: [] }],
})

export const getMeFollowersRoute = createRoute({
  method: 'get',
  path: '/me/followers',
  tags: ['me'],
  summary: 'Returns a list of users who are following the authenticated user.',
  request: { query: z.object({ limit: LimitParamsSchema }) },
  responses: { 200: UsersResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeFollowersFollowerIdRoute = createRoute({
  method: 'get',
  path: '/me/followers/{follower_id}',
  tags: ['me'],
  summary:
    'Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)',
  request: { params: z.object({ follower_id: FollowerIdParamsSchema }) },
  responses: { 200: UserResponse, 401: UnauthorizedResponse },
  deprecated: true,
  security: [{ AuthHeader: [] }],
})

export const getMeFollowingsRoute = createRoute({
  method: 'get',
  path: '/me/followings',
  tags: ['me'],
  summary: 'Returns a list of users who are followed by the authenticated user.',
  request: { query: z.object({ limit: LimitParamsSchema, offset: OffsetParamsSchema }) },
  responses: { 200: UsersResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeFollowingsTracksRoute = createRoute({
  method: 'get',
  path: '/me/followings/tracks',
  tags: ['me'],
  summary: 'Returns a list of recent tracks from users followed by the authenticated user.',
  request: {
    query: z.object({
      access: AccessParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: { 200: TracksListResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeFollowingsUserIdRoute = createRoute({
  method: 'get',
  path: '/me/followings/{user_id}',
  tags: ['me'],
  summary:
    'Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)',
  request: { params: z.object({ user_id: UserIdParamsSchema }) },
  responses: { 200: UserResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  deprecated: true,
  security: [{ AuthHeader: [] }],
})

export const putMeFollowingsUserIdRoute = createRoute({
  method: 'put',
  path: '/me/followings/{user_id}',
  tags: ['me'],
  summary: 'Follows a user.',
  request: { params: z.object({ user_id: UserIdToFollowParamsSchema }) },
  responses: {
    200: SuccessfulResponse,
    201: UserResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
  security: [{ AuthHeader: [] }],
})

export const deleteMeFollowingsUserIdRoute = createRoute({
  method: 'delete',
  path: '/me/followings/{user_id}',
  tags: ['me'],
  summary: 'Deletes a user who is followed by the authenticated user.',
  request: { params: z.object({ user_id: UserIdToFollowParamsSchema }) },
  responses: {
    200: { description: 'Success', content: {} },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
  },
  security: [{ AuthHeader: [] }],
})

export const getMeLikesTracksRoute = createRoute({
  method: 'get',
  path: '/me/likes/tracks',
  tags: ['me'],
  summary: 'Returns a list of favorited or liked tracks of the authenticated user.',
  request: {
    query: z.object({
      limit: LimitParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: TracksResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMePlaylistsRoute = createRoute({
  method: 'get',
  path: '/me/playlists',
  tags: ['me'],
  summary: 'Returns user’s playlists (sets).',
  description: 'Returns playlist info, playlist tracks and tracks owner info.',
  request: { query: z.object({ limit: LimitParamsSchema }) },
  responses: { 200: PlaylistsArrayResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const getMePlaylistsPlaylistIdRoute = createRoute({
  method: 'get',
  path: '/me/playlists/{playlist_id}',
  tags: ['me'],
  summary:
    'Returns playlist. (use /playlists/{playlist_id} instead, to fetch the playlist details)',
  request: { params: z.object({ playlist_id: PlaylistIdParamsSchema }) },
  responses: { 200: PlaylistResponse },
  deprecated: true,
  security: [{ AuthHeader: [] }],
})

export const getMeTracksRoute = createRoute({
  method: 'get',
  path: '/me/tracks',
  tags: ['me'],
  summary: "Returns a list of user's tracks.",
  request: {
    query: z.object({
      limit: LimitParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: TracksResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const getMeTracksTrackIdRoute = createRoute({
  method: 'get',
  path: '/me/tracks/{track_id}',
  tags: ['me'],
  summary:
    'Returns a specified track. (use /tracks/{track_id} instead, to fetch the track details)',
  request: { params: z.object({ track_id: TrackIdParamsSchema }) },
  responses: { 200: TrackResponse },
  deprecated: true,
  security: [{ AuthHeader: [] }],
})

export const postOauth2TokenRoute = createRoute({
  method: 'post',
  path: '/oauth2/token',
  tags: ['oauth'],
  summary:
    'This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.xor([AuthorizationCodeSchema, RefreshTokenSchema, PasswordSchema]),
          examples: {
            AuthorizationCode: AuthorizationCodeExample,
            ClientCredentials: ClientCredentialsExample,
            Password: PasswordExample,
            RefreshToken: RefreshTokenExample,
          },
        },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: {} },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z.xor([ErrorSchema]),
          examples: {
            BadRequest: BadRequestExample,
            ErrorInvalidGrant: ErrorInvalidGrantExample,
            ErrorUnsupportedGrant: ErrorUnsupportedGrantExample,
          },
        },
      },
    },
    401: UnauthorizedResponse,
  },
  security: [{ ClientId: [] }],
})

export const getPlaylistsRoute = createRoute({
  method: 'get',
  path: '/playlists',
  tags: ['search'],
  summary: 'Performs a playlist search based on a query',
  request: {
    query: z.object({
      q: QParamsSchema,
      access: AccessParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: PlaylistsResponse, 400: BadRequestResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const postPlaylistsRoute = createRoute({
  method: 'post',
  path: '/playlists',
  tags: ['playlists'],
  summary: 'Creates a playlist.',
  request: {
    body: {
      description: 'Create Playlist request',
      content: {
        'application/json': {
          schema: CreateUpdatePlaylistRequestSchema,
          examples: { default: CreateUpdatePlaylistRequestExample },
        },
      },
    },
  },
  responses: { 201: LegacyPlaylistResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const getPlaylistsPlaylistIdRoute = createRoute({
  method: 'get',
  path: '/playlists/{playlist_id}',
  tags: ['playlists'],
  summary: 'Returns a playlist.',
  request: {
    params: z.object({ playlist_id: PlaylistIdParamsSchema }),
    query: z.object({ secret_token: SecretTokenParamsSchema, access: AccessParamsSchema }),
  },
  responses: { 200: PlaylistResponse, 400: BadRequestResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const putPlaylistsPlaylistIdRoute = createRoute({
  method: 'put',
  path: '/playlists/{playlist_id}',
  tags: ['playlists'],
  summary: 'Updates a playlist.',
  request: {
    params: z.object({ playlist_id: FakePlaylistIdParamsSchema }),
    body: {
      description: 'Playlist payload',
      content: {
        'application/json': {
          schema: CreateUpdatePlaylistRequestSchema,
          examples: { default: CreateUpdatePlaylistRequestExample },
        },
      },
    },
  },
  responses: { 200: LegacyPlaylistResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const deletePlaylistsPlaylistIdRoute = createRoute({
  method: 'delete',
  path: '/playlists/{playlist_id}',
  tags: ['playlists'],
  summary: 'Deletes a playlist.',
  request: { params: z.object({ playlist_id: FakePlaylistIdParamsSchema }) },
  responses: { 200: { description: 'Success' }, 404: NotFoundResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getPlaylistsPlaylistIdRepostersRoute = createRoute({
  method: 'get',
  path: '/playlists/{playlist_id}/reposters',
  tags: ['playlists'],
  summary: "Returns a collection of playlist's reposters.",
  request: {
    params: z.object({ playlist_id: PlaylistIdParamsSchema }),
    query: z.object({ limit: LimitParamsSchema }),
  },
  responses: { 200: MetaUsersResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ ClientId: [] }],
})

export const getPlaylistsPlaylistIdTracksRoute = createRoute({
  method: 'get',
  path: '/playlists/{playlist_id}/tracks',
  tags: ['playlists'],
  summary: 'Returns tracks under a playlist.',
  request: {
    params: z.object({ playlist_id: PlaylistIdParamsSchema }),
    query: z.object({
      secret_token: SecretTokenParamsSchema,
      access: AccessParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: TracksResponse, 400: BadRequestResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const postRepostsPlaylistsPlaylistIdRoute = createRoute({
  method: 'post',
  path: '/reposts/playlists/{playlist_id}',
  tags: ['reposts'],
  summary: 'Reposts a playlist as the authenticated user',
  request: { params: z.object({ playlist_id: RepostPlaylistIdParamsSchema }) },
  responses: { 201: { description: 'Created' }, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const deleteRepostsPlaylistsPlaylistIdRoute = createRoute({
  method: 'delete',
  path: '/reposts/playlists/{playlist_id}',
  tags: ['reposts'],
  summary: 'Removes a repost on a playlist as the authenticated user',
  request: { params: z.object({ playlist_id: RepostPlaylistIdParamsSchema }) },
  responses: { 200: { description: 'Success' }, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const postRepostsTracksTrackIdRoute = createRoute({
  method: 'post',
  path: '/reposts/tracks/{track_id}',
  tags: ['reposts'],
  summary: 'Reposts a track as the authenticated user',
  request: { params: z.object({ track_id: TestTrackIdParamsSchema }) },
  responses: { 201: { description: 'Created' }, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const deleteRepostsTracksTrackIdRoute = createRoute({
  method: 'delete',
  path: '/reposts/tracks/{track_id}',
  tags: ['reposts'],
  summary: 'Removes a repost on a track as the authenticated user',
  request: { params: z.object({ track_id: TestTrackIdParamsSchema }) },
  responses: { 200: { description: 'Success' }, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const getResolveRoute = createRoute({
  method: 'get',
  path: '/resolve',
  tags: ['miscellaneous'],
  summary: 'Resolves soundcloud.com URLs to Resource URLs to use with the API.',
  request: { query: z.object({ url: UrlParamsSchema }) },
  responses: { 302: FoundResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getTracksRoute = createRoute({
  method: 'get',
  path: '/tracks',
  tags: ['search'],
  summary: 'Performs a track search based on a query',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['bpm', 'duration', 'created_at']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          q: QParamsSchema,
          ids: IdsParamsSchema,
          genres: GenresParamsSchema,
          tags: TagsParamsSchema,
          bpm: BpmParamsSchema,
          duration: DurationParamsSchema,
          created_at: CreatedAtParamsSchema,
          access: AccessParamsSchema,
          limit: LimitParamsSchema,
          offset: OffsetParamsSchema,
          linked_partitioning: LinkedPartitioningParamsSchema,
        }),
      ),
  },
  responses: {
    200: TracksResponse,
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    500: { description: 'Internal Server Error' },
  },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const postTracksRoute = createRoute({
  method: 'post',
  path: '/tracks',
  tags: ['tracks'],
  summary: 'Uploads a new track.',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              'track[artwork_data]': z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  title: 'Only for uploading, for PRO users',
                }),
              'track[asset_data]': z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', title: 'Only for uploading' }),
              'track[commentable]': z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional(),
              'track[description]': z.string().exactOptional(),
              'track[downloadable]': z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional(),
              'track[embeddable_by]': z
                .enum(['all', 'me', 'none'])
                .exactOptional()
                .openapi({ description: 'who can embed this track "all", "me", or "none"' }),
              'track[genre]': z.string().exactOptional(),
              'track[isrc]': z.string().exactOptional(),
              'track[label_name]': z.string().exactOptional(),
              'track[license]': z
                .enum([
                  'no-rights-reserved',
                  'all-rights-reserved',
                  'cc-by',
                  'cc-by-nc',
                  'cc-by-nd',
                  'cc-by-sa',
                  'cc-by-nc-nd',
                  'cc-by-nc-sa',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa',
                }),
              'track[permalink]': z.string().exactOptional(),
              'track[purchase_url]': z.string().exactOptional(),
              'track[release]': z.string().exactOptional(),
              'track[release_date]': z
                .string()
                .exactOptional()
                .openapi({
                  description: 'string, formatted as yyyy-mm-dd, representing release date',
                  title: 'write only!',
                }),
              'track[sharing]': z.enum(['public', 'private']).default('public').exactOptional(),
              'track[streamable]': z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional(),
              'track[tag_list]': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.',
                }),
              'track[title]': z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: { default: TrackDataRequestExample },
        },
        'multipart/x-www-form-urlencoded': {
          schema: TrackDataRequestSchema.openapi({
            required: ['track[title]', 'track[asset_data]'],
          }),
        },
      },
    },
  },
  responses: { 201: TrackResponse, 400: BadRequestResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getTracksTrackIdRoute = createRoute({
  method: 'get',
  path: '/tracks/{track_id}',
  tags: ['tracks'],
  summary: 'Returns a track.',
  request: {
    params: z.object({ track_id: TrackIdParamsSchema }),
    query: z.object({ secret_token: SecretTokenParamsSchema }),
  },
  responses: { 200: TrackResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ ClientId: [] }],
})

export const putTracksTrackIdRoute = createRoute({
  method: 'put',
  path: '/tracks/{track_id}',
  tags: ['tracks'],
  summary: "Updates a track's information.",
  request: {
    params: z.object({ track_id: TrackIdParamsSchema }),
    body: {
      description: 'Track payload',
      content: {
        'application/json': { schema: TrackMetadataRequestSchema },
        'multipart/form-data': {
          schema: z
            .object({
              'track[artwork_data]': z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  title: 'Only for uploading, for PRO users',
                }),
              'track[asset_data]': z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', title: 'Only for uploading' }),
              'track[commentable]': z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional(),
              'track[description]': z.string().exactOptional(),
              'track[downloadable]': z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional(),
              'track[embeddable_by]': z
                .enum(['all', 'me', 'none'])
                .exactOptional()
                .openapi({ description: 'who can embed this track "all", "me", or "none"' }),
              'track[genre]': z.string().exactOptional(),
              'track[isrc]': z.string().exactOptional(),
              'track[label_name]': z.string().exactOptional(),
              'track[license]': z
                .enum([
                  'no-rights-reserved',
                  'all-rights-reserved',
                  'cc-by',
                  'cc-by-nc',
                  'cc-by-nd',
                  'cc-by-sa',
                  'cc-by-nc-nd',
                  'cc-by-nc-sa',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Possible values: no-rights-reserved, all-rights-reserved, cc-by, cc-by-nc, cc-by-nd, cc-by-sa, cc-by-nc-nd, cc-by-nc-sa',
                }),
              'track[permalink]': z.string().exactOptional(),
              'track[purchase_url]': z.string().exactOptional(),
              'track[release]': z.string().exactOptional(),
              'track[release_date]': z
                .string()
                .exactOptional()
                .openapi({
                  description: 'string, formatted as yyyy-mm-dd, representing release date',
                  title: 'write only!',
                }),
              'track[sharing]': z.enum(['public', 'private']).default('public').exactOptional(),
              'track[streamable]': z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional(),
              'track[tag_list]': z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The tag_list property contains a list of tags separated by spaces. Multiword tags are quoted in double quotes. We also support machine tags that follow the pattern NAMESPACE:KEY=VALUE. For example: geo:lat=43.555 camel:size=medium “machine:tag=with space” Machine tags are not revealed to the user on the track pages.',
                }),
              'track[title]': z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
        'multipart/x-www-form-urlencoded': { schema: TrackDataRequestSchema },
      },
    },
  },
  responses: { 200: TrackResponse, 400: BadRequestResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [] }],
})

export const deleteTracksTrackIdRoute = createRoute({
  method: 'delete',
  path: '/tracks/{track_id}',
  tags: ['tracks'],
  summary: 'Deletes a track.',
  request: { params: z.object({ track_id: TrackIdParamsSchema }) },
  responses: { 200: { description: 'Success' }, 404: NotFoundResponse },
  security: [{ AuthHeader: [] }],
})

export const getTracksTrackIdCommentsRoute = createRoute({
  method: 'get',
  path: '/tracks/{track_id}/comments',
  tags: ['tracks'],
  summary: 'Returns the comments posted on the track(track_id).',
  request: {
    params: z.object({ track_id: TrackIdParamsSchema }),
    query: z.object({
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: CommentsResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ ClientId: [] }],
})

export const postTracksTrackIdCommentsRoute = createRoute({
  method: 'post',
  path: '/tracks/{track_id}/comments',
  tags: ['tracks'],
  summary: 'Returns the newly created comment on success',
  request: {
    params: z.object({ track_id: TrackIdParamsSchema }),
    body: {
      description: 'Body of a comment\n',
      content: {
        'application/json; charset=utf-8': {
          schema: z
            .object({
              comment: z
                .object({
                  body: z
                    .string()
                    .openapi({ description: "Comment's content", example: 'test comment' }),
                  timestamp: z
                    .xor([z.string(), z.number()])
                    .exactOptional()
                    .openapi({
                      description:
                        'Timestamp of a comment. String or float representation is supported',
                    }),
                })
                .exactOptional()
                .openapi({ required: ['body'] }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: CommentResponse,
    422: UnprocessableEntityResponse,
    429: TooManyRequestsResponse,
  },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getTracksTrackIdFavoritersRoute = createRoute({
  method: 'get',
  path: '/tracks/{track_id}/favoriters',
  tags: ['tracks'],
  summary: 'Returns a list of users who have favorited or liked the track.',
  request: {
    params: z.object({ track_id: TrackIdParamsSchema }),
    query: z.object({ limit: LimitParamsSchema, offset: OffsetParamsSchema }),
  },
  responses: { 200: UsersListResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ ClientId: [] }],
})

export const getTracksTrackIdRelatedRoute = createRoute({
  method: 'get',
  path: '/tracks/{track_id}/related',
  tags: ['tracks'],
  summary: 'Returns all related tracks of track on SoundCloud.',
  request: {
    params: z.object({ track_id: TrackIdParamsSchema }),
    query: z.object({
      access: AccessParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: TracksResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ ClientId: [] }],
})

export const getTracksTrackIdRepostersRoute = createRoute({
  method: 'get',
  path: '/tracks/{track_id}/reposters',
  tags: ['tracks'],
  summary: "Returns a collection of track's reposters.",
  request: {
    params: z.object({ track_id: TrackIdParamsSchema }),
    query: z.object({ limit: LimitParamsSchema }),
  },
  responses: { 200: MetaUsersResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ ClientId: [] }],
})

export const getTracksTrackIdStreamsRoute = createRoute({
  method: 'get',
  path: '/tracks/{track_id}/streams',
  tags: ['tracks'],
  summary: "Returns a track's streamable URLs",
  request: {
    params: z.object({ track_id: TrackIdParamsSchema }),
    query: z.object({ secret_token: SecretTokenParamsSchema }),
  },
  responses: { 200: StreamsResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ ClientId: [] }],
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['search'],
  summary: 'Performs a user search based on a query',
  request: {
    query: z.object({
      q: QParamsSchema,
      ids: IdsParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: UsersResponse, 400: BadRequestResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}',
  tags: ['users'],
  summary: 'Returns a user.',
  request: { params: z.object({ user_id: UserIdParamsSchema }) },
  responses: { 200: CompleteUserResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdCommentsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/comments',
  tags: ['users'],
  summary: "Returns a list of user's comments.",
  request: {
    params: z.object({ user_id: UserIdParamsSchema }),
    query: z.object({ limit: LimitParamsSchema, offset: OffsetParamsSchema }),
  },
  responses: { 200: CommentsListResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdFavoritesRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/favorites',
  tags: ['users'],
  summary:
    "Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)",
  request: {
    params: z.object({ user_id: UserIdParamsSchema }),
    query: z.object({
      limit: LimitParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: TracksResponse, 401: UnauthorizedResponse },
  deprecated: true,
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdFollowersRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/followers',
  tags: ['users'],
  summary: 'Returns a list of user’s followers.',
  description: 'Returns a list of users that follows (user_id).',
  request: {
    params: z.object({ user_id: UserIdParamsSchema }),
    query: z.object({ limit: LimitParamsSchema }),
  },
  responses: { 200: UsersResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdFollowingsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/followings',
  tags: ['users'],
  summary: 'Returns a list of user’s followings.',
  description: 'Returns list of users that (user_id) follows.',
  request: {
    params: z.object({ user_id: UserIdParamsSchema }),
    query: z.object({ limit: LimitParamsSchema }),
  },
  responses: { 200: UsersResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdFollowingsFollowingIdRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/followings/{following_id}',
  tags: ['users'],
  summary: "Returns a user's following. (use /users/{user_id} instead, to fetch the user details)",
  description: 'Returns (following_id) that is followed by (user_id).',
  request: {
    params: z.object({ user_id: UserIdParamsSchema, following_id: FollowingIdParamsSchema }),
  },
  responses: { 200: CompleteUserResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  deprecated: true,
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdLikesTracksRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/likes/tracks',
  tags: ['users'],
  summary: "Returns a list of user's liked tracks.",
  request: {
    params: z.object({ user_id: UserIdParamsSchema }),
    query: z.object({
      access: AccessParamsSchema,
      limit: LimitParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: {
    200: TracksResponse,
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
  },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdPlaylistsRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/playlists',
  tags: ['users'],
  summary: "Returns a list of user's playlists.",
  request: {
    params: z.object({ user_id: UserIdParamsSchema }),
    query: z.object({
      access: AccessParamsSchema,
      limit: LimitParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: PlaylistsResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdTracksRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/tracks',
  tags: ['users'],
  summary: "Returns a list of user's tracks.",
  request: {
    params: z.object({ user_id: UserIdParamsSchema }),
    query: z.object({
      access: AccessParamsSchema,
      limit: LimitParamsSchema,
      linked_partitioning: LinkedPartitioningParamsSchema,
    }),
  },
  responses: { 200: TracksResponse, 401: UnauthorizedResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})

export const getUsersUserIdWebProfilesRoute = createRoute({
  method: 'get',
  path: '/users/{user_id}/web-profiles',
  tags: ['users'],
  summary: "Returns list of user's links added to their profile (website, facebook, instagram).",
  request: {
    params: z.object({ user_id: UserIdParamsSchema }),
    query: z.object({ limit: LimitParamsSchema }),
  },
  responses: { 200: WebProfilesResponse, 401: UnauthorizedResponse, 404: NotFoundResponse },
  security: [{ AuthHeader: [], ClientId: [] }],
})
