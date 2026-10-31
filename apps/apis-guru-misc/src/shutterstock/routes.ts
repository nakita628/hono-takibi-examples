import { createRoute, z } from '@hono/zod-openapi'

const AccessTokenDetailsSchema = z
  .object({
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client ID that is associated with the user' }),
    contributor_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contributor ID that is associated with the user' }),
    customer_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer ID that is associated with the user' }),
    expires_in: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Number of seconds until the access token expires; no expiration if this value is null',
      }),
    organization_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization ID that is associated with the user' }),
    realm: z
      .enum(['customer', 'contributor'])
      .exactOptional()
      .openapi({ description: 'Type of access token' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Scopes that this access token provides when used as authentication',
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'User ID that is associated with the user' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'User name that is associated with the user' }),
  })
  .openapi({
    description: 'Access token details that are currently associated with this user',
    example: {
      client_id: 'c456b-26230-fa8ed-d19ab-05ce2-bf0aa',
      customer_id: '123456789',
      expires_in: 3600,
      realm: 'customer',
      scopes: [
        'collections.edit',
        'collections.view',
        'licenses.create',
        'licenses.view',
        'purchases.view',
        'user.view',
      ],
      user_id: '123456789',
      username: 'jdoe',
    },
    required: [],
  })
  .openapi('AccessTokenDetails')

const AlbumSchema = z
  .strictObject({
    id: z.string().openapi({ description: 'The album ID' }),
    title: z.string().openapi({ description: 'The album title' }),
  })
  .openapi({
    description: 'Album metadata',
    example: { id: '1234567', title: 'Happy Music' },
    required: ['id', 'title'],
  })
  .openapi('Album')

const AllotmentSchema = z
  .object({
    downloads_left: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of credits remaining in the subscription' }),
    downloads_limit: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of credits available to this subscription' }),
    end_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date the subscription ends' }),
    start_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date the subscription started' }),
  })
  .openapi({
    description: 'An allotment of credits as part of a subscription',
    example: {
      downloads_left: 5,
      downloads_limit: 10,
      end_time: '2020-05-29T12:10:22-05:00',
      start_time: '2020-05-29T12:10:22-05:00',
    },
    required: [],
  })
  .openapi('Allotment')

const ArtistSchema = z
  .object({ name: z.string().openapi({ description: "The artist's name" }) })
  .openapi({
    description: 'Metadata about the artist that created the media',
    example: { name: 'The Happy Tunes Band' },
    required: ['name'],
  })
  .openapi('Artist')

const AudioAssetDetailsSchema = z
  .object({
    file_size: z.int().exactOptional().openapi({ description: 'File size of the track' }),
    url: z.string().exactOptional().openapi({ description: 'URL the track is available at' }),
  })
  .openapi({
    description: 'Information about a file that is part of an audio asset',
    example: {
      file_size: 4453197,
      url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3',
    },
    required: [],
  })
  .openapi('AudioAssetDetails')

const ShortsLoopsStemsSchema = z
  .object({
    loops: z
      .record(z.string(), z.object({ url: z.string().exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
    shorts: z
      .record(z.string(), z.object({ url: z.string().exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
    stems: z
      .record(z.string(), z.object({ url: z.string().exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
  })
  .openapi({
    description: 'Links for Shorts, Loops and Stems previews',
    example: {
      loops: {
        loop_preview_1: {
          url: 'http://picdn.shuttercorp.net/shutterstock/audio/464947/loop_preview_1/loop_preview_1.mp3',
        },
        loop_preview_2: {
          url: 'http://picdn.shuttercorp.net/shutterstock/audio/464947/loop_preview_2/loop_preview_2.mp3',
        },
      },
      shorts: {
        short_preview_1: {
          url: 'http://picdn.shuttercorp.net/shutterstock/audio/464947/short_preview_1/short_preview_1.mp3',
        },
        short_preview_2: {
          url: 'http://picdn.shuttercorp.net/shutterstock/audio/464947/short_preview_2/short_preview_2.mp3',
        },
      },
      stems: {
        stem_preview_1: {
          url: 'http://picdn.shuttercorp.net/shutterstock/audio/464947/stem_preview_1/stem_preview_1.mp3',
        },
        stem_preview_2: {
          url: 'http://picdn.shuttercorp.net/shutterstock/audio/464947/stem_preview_1/stem_preview_1.mp3',
        },
      },
    },
    required: [],
  })
  .openapi('ShortsLoopsStems')

const AudioAssetsSchema = z
  .object({
    album_art: AudioAssetDetailsSchema.exactOptional(),
    clean_audio: AudioAssetDetailsSchema.exactOptional(),
    original_audio: AudioAssetDetailsSchema.exactOptional(),
    preview_mp3: AudioAssetDetailsSchema.exactOptional(),
    preview_ogg: AudioAssetDetailsSchema.exactOptional(),
    shorts_loops_stems: ShortsLoopsStemsSchema.exactOptional(),
    waveform: AudioAssetDetailsSchema.exactOptional(),
  })
  .openapi({
    description: 'Files that are available as part of an audio asset',
    example: {
      clean_audio: { file_size: 35188408 },
      preview_mp3: {
        file_size: 4400203,
        url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3',
      },
      preview_ogg: {
        file_size: 4453197,
        url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg',
      },
      waveform: {
        file_size: 18778,
        url: 'https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png',
      },
    },
    required: [],
  })
  .openapi('AudioAssets')

const ContributorSchema = z
  .object({ id: z.string().openapi({ description: 'ID of the contributor' }) })
  .openapi({
    description: 'Information about a contributor',
    example: { id: '12345678' },
    required: ['id'],
  })
  .openapi('Contributor')

const ModelReleaseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of the model or property release' }),
  })
  .openapi({
    description: 'Model and property release metadata',
    example: { id: '123456789' },
    required: [],
  })
  .openapi('ModelRelease')

const AudioSchema = z
  .object({
    added_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date this track was added to the Shutterstock library' }),
    affiliate_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Affiliate referral link; appears only for registered affiliate partners',
      }),
    album: AlbumSchema.exactOptional(),
    artists: z.array(ArtistSchema).exactOptional().openapi({ description: 'List of artists' }),
    assets: AudioAssetsSchema.exactOptional(),
    bpm: z.int().exactOptional().openapi({ description: 'BPM (beats per minute) of this track' }),
    contributor: ContributorSchema,
    deleted_time: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional().openapi({ description: 'Description of this track' }),
    duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'Duration of this track in seconds' }),
    genres: z
      .array(z.string().openapi({ description: 'Genre that is associated with this track' }))
      .exactOptional()
      .openapi({ description: 'List of all genres for this track' }),
    id: z.string().openapi({ description: 'Shutterstock ID of this track' }),
    instruments: z
      .array(z.string().openapi({ description: 'Instrument that appears in this track' }))
      .exactOptional()
      .openapi({ description: 'List of all instruments that appear in this track' }),
    is_adult: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this track contains adult content' }),
    is_instrumental: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not this track is purely instrumental (lacking lyrics)',
      }),
    isrc: z.string().exactOptional().openapi({ description: '' }),
    keywords: z
      .array(z.string().openapi({ description: 'Keyword for this track' }))
      .exactOptional()
      .openapi({ description: 'List of all keywords for this track' }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: "Language of this track's lyrics" }),
    lyrics: z.string().exactOptional().openapi({ description: 'Lyrics of this track' }),
    media_type: z
      .string()
      .openapi({ description: 'Media type of this track; should always be "audio"' }),
    model_releases: z
      .array(ModelReleaseSchema)
      .exactOptional()
      .openapi({ description: 'List of all model releases for this track' }),
    moods: z
      .array(z.string().openapi({ description: 'Mood of this track' }))
      .exactOptional()
      .openapi({ description: 'List of all moods of this track' }),
    published_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this track was published' }),
    recording_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Recording version of this track' }),
    releases: z
      .array(z.string().openapi({ description: 'Release of this track' }))
      .exactOptional()
      .openapi({ description: 'List of all releases of this track' }),
    similar_artists: z
      .array(ArtistSchema)
      .exactOptional()
      .openapi({ description: 'List of all similar artists of this track' }),
    submitted_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this track was submitted' }),
    title: z.string().exactOptional().openapi({ description: 'Title of this track' }),
    updated_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this track was last updated' }),
    url: z.string().exactOptional().openapi({ description: '' }),
    vocal_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vocal description of this track' }),
  })
  .openapi({
    description: 'Audio metadata',
    example: {
      added_date: '2016-08-16',
      artists: [{ name: 'Klimenko Music' }],
      assets: {
        clean_audio: { file_size: 35188408 },
        preview_mp3: {
          file_size: 4400203,
          url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3',
        },
        preview_ogg: {
          file_size: 4453197,
          url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg',
        },
        waveform: {
          file_size: 18778,
          url: 'https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png',
        },
      },
      bpm: 110,
      contributor: { id: '2847971' },
      description:
        'Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.',
      duration: 183,
      genres: ['Dance/Electronic', 'Electro Pop', 'Pop/Rock'],
      id: '442583',
      instruments: ['Piano', 'Synth bass', 'Synth drums', 'Synthesizer'],
      is_adult: false,
      is_instrumental: true,
      isrc: '',
      keywords: [
        'celebratory',
        'chic',
        'euphoric',
        'good times',
        'hip',
        'optimistic',
        'party',
        'soaring',
        'upbeat',
      ],
      language: 'en',
      lyrics: '',
      media_type: 'audio',
      moods: [
        'Bright',
        'Confident',
        'Fun',
        'Happy',
        'Inspiring',
        'Optimistic',
        'Playful',
        'Sophisticated',
        'Stylish',
        'Uplifting',
      ],
      published_time: '2016-08-16T14:30:03-04:00',
      recording_version: '',
      releases: [],
      similar_artists: [],
      title: 'Another Tomorrow',
      updated_time: '2016-08-18T17:59:33-04:00',
      url: '',
      vocal_description: '',
    },
    required: ['id', 'media_type', 'contributor'],
  })
  .openapi('Audio')

const ErrorSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'The error code of this error' }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'Debugging information about the error' }),
    items: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'A list of items that produced the error' }),
    message: z.string().openapi({ description: 'Specific details about this error' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal code reference to the source of the error' }),
  })
  .openapi({
    description: 'Error object',
    example: {
      code: 'VALIDATION_INVALID_TYPE',
      data: "'10'",
      message: 'Invalid type: string should be integer',
      path: '$.query.page',
    },
    required: ['message'],
  })
  .openapi('Error')

const AudioDataListSchema = z
  .object({
    data: z.array(AudioSchema).exactOptional().openapi({ description: 'Tracks' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'List of tracks',
    example: {
      data: [
        {
          added_date: '2016-04-12',
          artists: [{ name: 'Fin Productions' }],
          assets: {
            clean_audio: { file_size: 30760372 },
            preview_mp3: {
              file_size: 3846606,
              url: 'https://ak.picdn.net/shutterstock/audio/434750/preview/preview.mp3',
            },
            preview_ogg: {
              file_size: 4402608,
              url: 'https://ak.picdn.net/shutterstock/audio/434750/preview/preview.ogg',
            },
            waveform: {
              file_size: 19822,
              url: 'https://ak.picdn.net/shutterstock/audio/434750/waveform/waveform.png',
            },
          },
          bpm: 100,
          contributor: { id: '2847971' },
          description:
            'Pulsing and feel-good, featuring slick electric guitar, synthesizer, bass, electronic drum pads and drums that create a positive, celebratory mood.',
          duration: 160,
          genres: ['Dance/Electronic', 'Electro Pop', 'Pop/Rock'],
          id: '434750',
          instruments: ['Bass', 'Drums', 'Electric guitar', 'Pads', 'Percussion', 'Synthesizer'],
          is_adult: false,
          is_instrumental: true,
          isrc: '',
          keywords: [
            'breezy',
            'celebration',
            'festive',
            'good times',
            'hopeful',
            'optimistic',
            'party',
            'positive',
            'reflective',
          ],
          language: 'en',
          lyrics: '',
          media_type: 'audio',
          moods: [
            'Bright',
            'Confident',
            'Fun',
            'Happy',
            'Inspiring',
            'Optimistic',
            'Playful',
            'Sophisticated',
            'Stylish',
            'Uplifting',
          ],
          published_time: '2016-04-12T17:45:29-04:00',
          recording_version: '',
          releases: [],
          similar_artists: [],
          title: 'Fresh Love',
          updated_time: '2016-08-18T18:03:11-04:00',
          vocal_description: '',
        },
      ],
    },
    required: [],
  })
  .openapi('AudioDataList')

const AudioRendersFilesListSchema = z
  .object({
    bits_sample: z
      .number()
      .openapi({ description: 'The bit depth of the audio files in bits/sample' }),
    content_type: z.string().openapi({ description: 'The content-type of the file' }),
    download_url: z
      .string()
      .openapi({
        description:
          'The internet-accessible URL from which the file can be downloaded. Any redirects encountered when using this URL must be followed',
      }),
    filename: z
      .string()
      .openapi({
        description:
          'The user-specified file name suggestion from the render request; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file',
      }),
    frequency_hz: z
      .number()
      .openapi({ description: 'The Sample rate of the audio files in Hertz (Hz)' }),
    kbits_second: z
      .number()
      .openapi({ description: 'The data rate of the audio files in kilobits/second' }),
    size_bytes: z.number().openapi({ description: 'Size of the file in bytes' }),
    tracks: z
      .array(z.string())
      .openapi({ description: 'An array of track names included in the file' }),
  })
  .openapi({
    description: 'Files associated with the render',
    example: {
      bits_sample: 16,
      content_type: 'audio/mp3',
      download_url:
        'https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/0.mp3',
      filename: 'My_audio_ai.mp3',
      frequency_hz: 44100,
      kbits_second: 192,
      size_bytes: 481556,
      tracks: ['master'],
    },
    required: [
      'filename',
      'bits_sample',
      'content_type',
      'download_url',
      'frequency_hz',
      'kbits_second',
      'size_bytes',
      'tracks',
    ],
  })
  .openapi('AudioRendersFilesList')

const AudioRenderTimelineSpanInstrumentGroupStatusSchema = z
  .object({
    beat: z
      .number()
      .openapi({ description: 'The beat, relative to the span, at which the status begins' }),
    status: z
      .enum(['active', 'inactive'])
      .openapi({ description: 'Whether the instrument is playing or not' }),
  })
  .openapi({
    description: 'The status of an instrument at a specific beat',
    example: { beat: 12, status: 'active' },
    required: ['beat', 'status'],
  })
  .openapi('AudioRenderTimelineSpanInstrumentGroupStatus')

const AudioRenderTimelineSpanInstrumentGroupSchema = z
  .object({
    instrument_group: z.string().openapi({ description: 'The instrument ID' }),
    statuses: z
      .array(AudioRenderTimelineSpanInstrumentGroupStatusSchema)
      .exactOptional()
      .openapi({ description: 'An array of status objects' }),
  })
  .openapi({
    description: 'An instrument and the status objects that specify when that instrument plays',
    example: { instrument_group: 'bright_roomy_kit', statuses: [{ beat: 12, status: 'active' }] },
    required: ['instrument_group'],
  })
  .openapi('AudioRenderTimelineSpanInstrumentGroup')

const AudioRenderTimelineSpanRegionSchema = z
  .object({
    beat: z
      .int()
      .openapi({
        description: "The beat, relative to the span, at which the region object's music begins",
      }),
    descriptor: z
      .string()
      .openapi({ description: 'The descriptor ID needed to compose the music' }),
    end_type: z
      .object({
        beat: z
          .number()
          .openapi({
            description:
              'The beat, relative to the start of the active region, at which the end_type begins; in other words, the ending starts on this beat of the region',
          }),
        event: z.enum(['ending', 'transition']).openapi({ description: 'The type of event' }),
        type: z
          .enum(['ringout', 'cut'])
          .openapi({
            description:
              'The specific action to perform; if the event type is "ending" then this must be "ringout" and if event type is "transition" this must be "cut"',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'A high-level description of how a region ends',
        required: ['beat', 'event', 'type'],
      }),
    id: z
      .number()
      .openapi({ description: 'An identifier which must be unique within the parent span' }),
    key: z
      .object({
        tonic_accidental: z
          .enum(['double flat', 'flat', 'natural', 'sharp', 'double sharp'])
          .exactOptional()
          .openapi({
            description:
              'A text representation of the accidental; if this field is specified, the tonic_note field should also be specified',
          }),
        tonic_note: z
          .enum(['c', 'd', 'e', 'f', 'g', 'a', 'b'])
          .exactOptional()
          .openapi({
            description:
              'A text representation of the musical note; if this field is specified, the tonic_accidental field should also be specified',
          }),
        tonic_quality: z
          .enum([
            'major',
            'natural_minor',
            'harmonic_minor',
            'melodic_minor',
            'ionian',
            'dorian',
            'phrygian',
            'lydian',
            'mixolydian',
            'aeolian',
            'locrian',
          ])
          .exactOptional()
          .openapi({
            description:
              'The scale quality; if this field is not specified, the API selects the quality automatically',
            example: 'major',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The key signature active at the beginning of the region',
        required: [],
      }),
    region: z.enum(['music', 'silence']).openapi({ description: 'The type of region' }),
  })
  .openapi({
    description: 'A period of music or silence, measured in beats',
    example: {
      beat: 12,
      descriptor: 'cinematic_minimal_tense',
      end_type: { beat: 24, event: 'ending', type: 'ringout' },
      id: 222,
      key: { tonic_note: 'c', tonic_quality: 'major' },
      region: 'music',
    },
    required: ['id', 'region', 'descriptor', 'beat'],
  })
  .openapi('AudioRenderTimelineSpanRegion')

const AudioRenderTimelineSpanTempoChangesSchema = z
  .object({
    tempo: z
      .number()
      .openapi({ description: 'The tempo, in beats per minute, active at this time' }),
    time: z.number().openapi({ description: 'The time, in seconds, at which the tempo exists' }),
  })
  .openapi({
    description:
      'An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change',
    example: { tempo: 86, time: 5 },
    required: ['time', 'tempo'],
  })
  .openapi('AudioRenderTimelineSpanTempoChanges')

const AudioRenderTimelineSpanSchema = z
  .object({
    id: z
      .number()
      .exactOptional()
      .openapi({ description: 'An identifier which must be unique within the parent span' }),
    instrument_groups: z
      .array(AudioRenderTimelineSpanInstrumentGroupSchema)
      .exactOptional()
      .openapi({ description: 'An array of instrument_group objects that are used in this span' }),
    regions: z
      .array(AudioRenderTimelineSpanRegionSchema)
      .exactOptional()
      .openapi({ description: 'An array of region objects within the span' }),
    span_type: z
      .enum(['metered', 'unmetered'])
      .openapi({
        description:
          'Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span',
      }),
    tempo: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The tempo, in beats per minute, at the start of the span; if not provided, the API selects a random tempo',
      }),
    tempo_changes: z
      .array(AudioRenderTimelineSpanTempoChangesSchema)
      .exactOptional()
      .openapi({
        description:
          'Two or more inflection points in a tempo curve; the API creates a smoothly changing tempo by using a linear interpolation of the time between each tempo change',
      }),
    time: z
      .int()
      .openapi({ description: 'The absolute time, in seconds, at which the span starts' }),
  })
  .openapi({
    description: 'The beginning of a non-overlapping period of absolute time',
    example: {
      id: 111,
      regions: [
        {
          beat: 12,
          descriptor: 'cinematic_minimal_tense',
          end_type: { beat: 24, event: 'ending', type: 'ringout' },
          id: 222,
          key: { tonic_note: 'c', tonic_quality: 'major' },
          region: 'music',
        },
      ],
      span_type: 'metered',
      tempo: 76,
      time: 0,
    },
    required: ['span_type', 'time'],
  })
  .openapi('AudioRenderTimelineSpan')

const AudioRenderTimelineSchema = z
  .object({
    spans: z
      .array(AudioRenderTimelineSpanSchema)
      .exactOptional()
      .openapi({
        description: 'A span object that represents the beginning of a period of absolute time',
      }),
  })
  .openapi({
    description:
      'A timeline object that represents either a request for music to be created or an entire music composition',
    example: {
      spans: [
        {
          id: 123456,
          instrument_groups: [
            { instrument_group: 'The instrument ID', statuses: [{ beat: 12, status: 'active' }] },
          ],
          regions: [
            {
              beat: 12,
              descriptor: 'The descriptor ID needed to compose the music',
              end_type: { beat: 12, event: 'ending', type: 'ringout' },
              id: 123456,
              key: { tonic_accidental: 'double flat', tonic_note: 'c', tonic_quality: 'major' },
              region: 'music',
            },
          ],
          span_type: 'metered',
          tempo: 12345,
          tempo_changes: [{ tempo: 12345, time: 5 }],
          time: 5,
        },
      ],
    },
    required: [],
  })
  .openapi('AudioRenderTimeline')

const AudioRenderResultSchema = z
  .object({
    created_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time the render was submitted to the API' }),
    files: z
      .array(AudioRendersFilesListSchema)
      .exactOptional()
      .openapi({ description: 'The files associated with the render' }),
    id: z.string().openapi({ description: 'The alphanumeric ID of the simple render' }),
    preset: z
      .enum(['MASTER_MP3', 'MASTER_WAV', 'STEMS_WAV'])
      .exactOptional()
      .openapi({ description: 'The file format preset' }),
    progress_percent: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current progress of the render as a percentage' }),
    status: z
      .enum([
        'WAITING_COMPOSE',
        'RUNNING_COMPOSE',
        'WAITING_RENDER',
        'RUNNING_RENDER',
        'CREATED',
        'FAILED_CREATE',
      ])
      .openapi({ description: 'A coarse progress indicator' }),
    timeline: AudioRenderTimelineSchema,
    updated_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time that the audio output was uploaded' }),
  })
  .openapi({
    description: 'The output of an audio render in WAV or MP3 format',
    example: {
      created_date: '2021-07-13T16:19:30-04:00',
      files: [],
      id: '2yZp13IhLqnjfh2KquDTOHUHzTiP',
      preset: 'MASTER_MP3',
      progress_percent: 0,
      status: 'WAITING_COMPOSE',
      timeline: {},
      updated_date: '2021-07-13T16:19:30-04:00',
    },
    required: ['id', 'timeline', 'status'],
  })
  .openapi('AudioRenderResult')

const AudioRendersListResultsSchema = z
  .object({
    audio_renders: z
      .array(AudioRenderResultSchema)
      .openapi({ description: 'Audio render results' }),
  })
  .openapi({
    description: 'Audio render data',
    example: {
      audio_renders: [
        {
          created_date: '2021-07-13T16:19:30-04:00',
          files: [],
          id: '2yZp13IhLqnjfh2KquDTOHUHzTiP',
          preset: 'MASTER_MP3',
          progress_percent: 20,
          status: 'WAITING_COMPOSE',
          timeline: {},
          updated_date: '2021-07-13T16:19:30-04:00',
        },
        {
          created_date: '2021-07-12T16:39:59-04:00',
          files: [
            {
              bits_sample: 16,
              content_type: 'audio/mp3',
              download_url:
                'https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/0.mp3',
              filename: 'My_audio_ai.mp3',
              frequency_hz: 44100,
              kbits_second: 192,
              size_bytes: 481556,
              tracks: ['master'],
            },
            {
              bits_sample: 0,
              content_type: 'application/vnd.amper.waveform+json',
              download_url:
                'https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/1.json',
              filename: 'render.json',
              frequency_hz: 42,
              kbits_second: 0,
              size_bytes: 4420,
              tracks: ['master'],
            },
          ],
          id: 'QwAgKqXQAzr622KuXYZ25C9WRH3a',
          preset: 'MASTER_MP3',
          progress_percent: 100,
          status: 'CREATED',
          timeline: {},
          updated_date: '2021-07-12T16:46:26-04:00',
        },
      ],
    },
    required: ['audio_renders'],
  })
  .openapi('AudioRendersListResults')

const AudioSearchResultsSchema = z
  .object({
    data: z.array(AudioSchema).openapi({ description: 'List of tracks' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    search_id: z.string().openapi({ description: 'ID of the search' }),
    total_count: z.int().openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'Audio search results',
    example: {
      data: [
        {
          added_date: '2016-08-16',
          artists: [{ name: 'Klimenko Music' }],
          assets: {
            clean_audio: { file_size: 35188408 },
            preview_mp3: {
              file_size: 4400203,
              url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3',
            },
            preview_ogg: {
              file_size: 4453197,
              url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg',
            },
            waveform: {
              file_size: 18778,
              url: 'https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png',
            },
          },
          bpm: 110,
          contributor: { id: '2847971' },
          description:
            'Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.',
          duration: 183,
          genres: ['Dance/Electronic', 'Electro Pop', 'Pop/Rock'],
          id: '442583',
          instruments: ['Piano', 'Synth bass', 'Synth drums', 'Synthesizer'],
          is_adult: false,
          is_instrumental: true,
          isrc: '',
          keywords: [
            'celebratory',
            'chic',
            'euphoric',
            'good times',
            'hip',
            'optimistic',
            'party',
            'soaring',
            'upbeat',
          ],
          language: 'en',
          lyrics: '',
          media_type: 'audio',
          moods: [
            'Bright',
            'Confident',
            'Fun',
            'Happy',
            'Inspiring',
            'Optimistic',
            'Playful',
            'Sophisticated',
            'Stylish',
            'Uplifting',
          ],
          published_time: '2016-08-16T14:30:03-04:00',
          recording_version: '',
          releases: [],
          similar_artists: [],
          title: 'Another Tomorrow',
          updated_time: '2016-08-18T17:59:33-04:00',
          url: '',
          vocal_description: '',
        },
      ],
      page: 1,
      per_page: 5,
      search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
      total_count: 123455,
    },
    required: ['data', 'total_count', 'search_id'],
  })
  .openapi('AudioSearchResults')

const AudioUrlSchema = z
  .object({
    shorts_loops_stems: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL that can be used to download the .zip file containing shorts, loops, and stems',
      }),
    url: z
      .string()
      .openapi({
        description: 'URL that can be used to download the unwatermarked, licensed asset',
      }),
  })
  .openapi({
    description: 'Audio License URL object',
    example: {
      url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg',
    },
    required: ['url'],
  })
  .openapi('AudioUrl')

const AuthorizeResponseSchema = z
  .string()
  .openapi({
    description: "HTML redirect URL that contains the application authorization 'code'",
    example:
      'Moved temporarily. Redirecting to https://accounts.shutterstock.com/login?next=%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26state%3D1539619928633%26scope%3Dlicenses.create%20licenses.view%20purchases.view%26client_id%3D6d097450b209c6dcd859%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A3000%2Fmyapp%2Fauth%2Fcallback%26realm%3Dcustomer',
  })
  .openapi('AuthorizeResponse')

const BandsSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the band' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the band' }),
  })
  .openapi({
    description: 'A band that can be used to generate music',
    example: { id: '1234567', name: 'The Happy Tunes Band' },
    required: [],
  })
  .openapi('Bands')

const LanguageSchema = z
  .enum([
    'ar',
    'bg',
    'bn',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'es',
    'fi',
    'fr',
    'gu',
    'he',
    'hi',
    'hr',
    'hu',
    'id',
    'it',
    'ja',
    'kn',
    'ko',
    'ml',
    'mr',
    'nb',
    'nl',
    'or',
    'pl',
    'pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'ta',
    'te',
    'th',
    'tr',
    'uk',
    'ur',
    'vi',
    'zh',
    'zh-Hant',
  ])
  .openapi({ description: 'Language code', example: 'cs', title: 'language' })
  .openapi('Language')

const SearchImageSchema = z
  .object({
    added_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Show images added on the specified date' }),
    added_date_end: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Show images added before the specified date' }),
    added_date_start: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Show images added on or after the specified date' }),
    aspect_ratio: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image',
      }),
    aspect_ratio_max: z
      .number()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image',
      }),
    aspect_ratio_min: z
      .number()
      .min(0)
      .exactOptional()
      .openapi({
        description:
          'Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image',
      }),
    authentic: z.boolean().exactOptional().openapi({ description: 'Show only authentic images' }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Show images with the specified Shutterstock-defined category; specify a category name or ID',
      }),
    color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors",
      }),
    contributor: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Show images with the specified contributor names or IDs, allows multiple',
      }),
    contributor_country: z
      .xor([z.array(z.string()), z.array(z.string())])
      .exactOptional()
      .openapi({
        description:
          'Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search',
      }),
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fields to display in the response; see the documentation for the fields parameter in the overview section',
      }),
    height: z
      .int()
      .exactOptional()
      .openapi({
        description:
          '(Deprecated; use height_from and height_to instead) Show images with the specified height',
      }),
    height_from: z
      .int()
      .exactOptional()
      .openapi({ description: 'Show images with the specified height or larger, in pixels' }),
    height_to: z
      .int()
      .exactOptional()
      .openapi({ description: 'Show images with the specified height or smaller, in pixels' }),
    image_type: z
      .array(z.enum(['photo', 'illustration', 'vector']))
      .exactOptional()
      .openapi({ description: 'Show images of the specified type' }),
    keyword_safe_search: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Hide results with potentially unsafe keywords' }),
    language: LanguageSchema.exactOptional().openapi({
      description: 'Set query and result language (uses Accept-Language header if not set)',
    }),
    license: z
      .array(z.enum(['commercial', 'editorial', 'enhanced']))
      .default(['commercial'])
      .exactOptional()
      .openapi({ description: 'Show only images with the specified license' }),
    model: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Show image results with the specified model IDs' }),
    orientation: z
      .enum(['horizontal', 'vertical'])
      .exactOptional()
      .openapi({ description: 'Show image results with horizontal or vertical orientation' }),
    page: z.int().min(1).default(1).exactOptional().openapi({ description: 'Page number' }),
    people_age: z
      .enum(['infants', 'children', 'teenagers', '20s', '30s', '40s', '50s', '60s', 'older'])
      .exactOptional()
      .openapi({ description: 'Show images that feature people of the specified age category' }),
    people_ethnicity: z
      .array(
        z.enum([
          'african',
          'african_american',
          'black',
          'brazilian',
          'chinese',
          'caucasian',
          'east_asian',
          'hispanic',
          'japanese',
          'middle_eastern',
          'native_american',
          'pacific_islander',
          'south_asian',
          'southeast_asian',
          'other',
          'NOT african',
          'NOT african_american',
          'NOT black',
          'NOT brazilian',
          'NOT chinese',
          'NOT caucasian',
          'NOT east_asian',
          'NOT hispanic',
          'NOT japanese',
          'NOT middle_eastern',
          'NOT native_american',
          'NOT pacific_islander',
          'NOT south_asian',
          'NOT southeast_asian',
          'NOT other',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities',
      }),
    people_gender: z
      .enum(['male', 'female', 'both'])
      .exactOptional()
      .openapi({ description: 'Show images with people of the specified gender' }),
    people_model_released: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Show images of people with a signed model release' }),
    people_number: z
      .int()
      .min(0)
      .max(4)
      .exactOptional()
      .openapi({ description: 'Show images with the specified number of people' }),
    per_page: z
      .int()
      .min(0)
      .max(20)
      .default(20)
      .exactOptional()
      .openapi({ description: 'Number of results per page' }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'One or more search terms separated by spaces; you can use NOT to filter out images that match a term',
      }),
    region: z
      .union([z.string(), z.ipv4()])
      .exactOptional()
      .openapi({
        description:
          "Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country",
      }),
    safe: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Enable or disable safe search' }),
    sort: z
      .enum(['newest', 'popular', 'relevance', 'random'])
      .default('popular')
      .exactOptional()
      .openapi({ description: 'Sort by' }),
    spellcheck_query: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Spellcheck the search query and return results on suggested spellings',
      }),
    view: z
      .enum(['minimal', 'full'])
      .default('minimal')
      .exactOptional()
      .openapi({ description: 'Amount of detail to render in the response' }),
    width: z
      .int()
      .exactOptional()
      .openapi({
        description:
          '(Deprecated; use width_from and width_to instead) Show images with the specified width',
      }),
    width_from: z
      .int()
      .exactOptional()
      .openapi({ description: 'Show images with the specified width or larger, in pixels' }),
    width_to: z
      .int()
      .exactOptional()
      .openapi({ description: 'Show images with the specified width or smaller, in pixels' }),
  })
  .openapi({
    description: 'Data required to search for an image',
    example: { license: ['editorial'], query: 'cat', sort: 'popular' },
    required: [],
  })
  .openapi('SearchImage')

const BulkImageSearchRequestSchema = z
  .array(SearchImageSchema)
  .max(5)
  .openapi({
    description: 'List of searches',
    example: [
      { license: ['editorial'], query: 'cat', sort: 'popular' },
      { orientation: 'horizontal', query: 'dog' },
    ],
  })
  .openapi('BulkImageSearchRequest')

const ImageSizeDetailsSchema = z
  .object({
    display_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of this image size' }),
    dpi: z.int().exactOptional(),
    file_size: z
      .int()
      .exactOptional()
      .openapi({ description: 'File size (in bytes) of this image size' }),
    format: z.string().exactOptional().openapi({ description: 'Format of this image size' }),
    height: z.int().exactOptional().openapi({ description: 'Height of this image size' }),
    is_licensable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this image can be licensed in this image size' }),
    width: z.int().exactOptional().openapi({ description: 'Width of this image size' }),
  })
  .openapi({
    description: 'Image size information',
    example: {
      display_name: 'Med',
      dpi: 300,
      file_size: 860200,
      format: 'jpg',
      height: 667,
      is_licensable: true,
      width: 1000,
    },
    required: [],
  })
  .openapi('ImageSizeDetails')

const ThumbnailSchema = z
  .object({
    height: z.int().openapi({ description: 'Height in pixels of the image thumbnail' }),
    url: z.string().openapi({ description: 'Direct URL to the image' }),
    width: z.int().openapi({ description: 'Width in pixels of the image thumbnail' }),
  })
  .openapi({
    description: 'Image thumbnail information',
    example: {
      height: 100,
      url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
      width: 150,
    },
    required: ['url', 'height', 'width'],
  })
  .openapi('Thumbnail')

const ImageAssetsSchema = z
  .object({
    huge_jpg: ImageSizeDetailsSchema.exactOptional(),
    huge_thumb: ThumbnailSchema.exactOptional(),
    large_thumb: ThumbnailSchema.exactOptional(),
    medium_jpg: ImageSizeDetailsSchema.exactOptional(),
    preview: ThumbnailSchema.exactOptional(),
    preview_1000: ThumbnailSchema.exactOptional(),
    preview_1500: ThumbnailSchema.exactOptional(),
    small_jpg: ImageSizeDetailsSchema.exactOptional(),
    small_thumb: ThumbnailSchema.exactOptional(),
    supersize_jpg: ImageSizeDetailsSchema.exactOptional(),
    vector_eps: ImageSizeDetailsSchema.exactOptional(),
  })
  .openapi({
    description: 'Information about the assets that are part of an image',
    example: {
      huge_thumb: {
        height: 260,
        url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
        width: 390,
      },
      large_thumb: {
        height: 100,
        url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
        width: 150,
      },
      preview: {
        height: 300,
        url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
        width: 450,
      },
      preview_1000: {
        height: 667,
        url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
        width: 1000,
      },
      preview_1500: {
        height: 1000,
        url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
        width: 1500,
      },
      small_thumb: {
        height: 67,
        url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
        width: 100,
      },
    },
    required: [],
  })
  .openapi('ImageAssets')

const CategorySchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Category ID' }),
    name: z.string().exactOptional().openapi({ description: 'Category name' }),
  })
  .openapi({
    description: 'Category information',
    example: { id: '1', name: 'Animals/Wildlife' },
    required: [],
  })
  .openapi('Category')

const ModelSchema = z
  .object({ id: z.string().openapi({ description: 'ID of the model' }) })
  .openapi({
    description:
      'Information about a human model or property that appears in media; used to search for assets that this model is in',
    example: { id: '123456789' },
    required: ['id'],
  })
  .openapi('Model')

const ImageSchema = z
  .object({
    added_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date that the image was added by the contributor' }),
    affiliate_url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Affiliate referral link; appears only for registered affiliate partners',
      }),
    aspect: z
      .number()
      .exactOptional()
      .openapi({ description: 'Aspect ratio of the image in decimal format, such as 0.6667' }),
    assets: ImageAssetsSchema.exactOptional().openapi({ description: 'Image asset information' }),
    categories: z
      .array(CategorySchema)
      .exactOptional()
      .openapi({ description: 'Categories that this image is a part of' }),
    contributor: ContributorSchema,
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed description of the image' }),
    has_model_release: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether there are model releases for the image' }),
    has_property_release: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether there are property releases for the image' }),
    id: z.string().openapi({ description: 'Image ID' }),
    image_type: z.string().exactOptional().openapi({ description: 'Type of image' }),
    insights: z
      .object({ labels: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'AI-powered insights about how the asset will perform for the objective and audience',
        required: [],
      }),
    is_adult: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this image contains adult content' }),
    is_editorial: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this image is editorial content' }),
    is_illustration: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this image is an illustration' }),
    keywords: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Keywords associated with the content of this image' }),
    media_type: z
      .string()
      .openapi({ description: 'Media type of this image, should always be "image"' }),
    model_releases: z
      .array(ModelReleaseSchema)
      .exactOptional()
      .openapi({ description: 'List of model releases' }),
    models: z.array(ModelSchema).exactOptional().openapi({ description: 'List of models' }),
    releases: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of all releases of this image' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to image information page; included only for certain accounts',
      }),
  })
  .openapi({
    description: 'Information about an image',
    example: {
      aspect: 1.5,
      assets: {
        huge_thumb: {
          height: 260,
          url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
          width: 390,
        },
        large_thumb: {
          height: 100,
          url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
          width: 150,
        },
        preview: {
          height: 300,
          url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
          width: 450,
        },
        preview_1000: {
          height: 667,
          url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
          width: 1000,
        },
        preview_1500: {
          height: 1000,
          url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
          width: 1500,
        },
        small_thumb: {
          height: 67,
          url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
          width: 100,
        },
      },
      contributor: { id: '250738318' },
      description: 'cropped image of woman gardening',
      has_model_release: true,
      id: '1572478477',
      image_type: 'photo',
      media_type: 'image',
      original_filename: '123.jpg',
    },
    required: ['id', 'media_type', 'contributor'],
  })
  .openapi('Image')

const InsightsSchema = z
  .object({
    label_performance: z
      .array(
        z
          .object({
            name: z.string().exactOptional(),
            percentile_performance: z.number().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .openapi({
        description:
          'How effective the AI thinks an asset in the category is for the specified audience and objective, expressed as a percentile compared to other images',
      }),
  })
  .openapi({
    description:
      'AI-powered insights about an asset, based on the specified audience and objective',
    example: {
      label_performance: [
        { name: 'Nature', percentile_performance: 98.82123565673828 },
        { name: 'Outdoors', percentile_performance: 98.63294982910156 },
      ],
    },
    required: ['label_performance'],
  })
  .openapi('Insights')

const ImageSearchResultsSchema = z
  .object({
    data: z.array(ImageSchema).openapi({ description: 'List of images' }),
    insights: InsightsSchema.exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    search_id: z.string().openapi({ description: 'Unique identifier for the search request' }),
    spellcheck_info: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Returns information if search phrase has potentially been mistyped or another query would lead to better search results',
      }),
    total_count: z.int().openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'Image search results',
    example: {
      data: [
        {
          aspect: 1.5,
          assets: {
            huge_thumb: {
              height: 260,
              url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
              width: 390,
            },
            large_thumb: {
              height: 100,
              url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
              width: 150,
            },
            preview: {
              height: 300,
              url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
              width: 450,
            },
            preview_1000: {
              height: 667,
              url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
              width: 1000,
            },
            preview_1500: {
              height: 1000,
              url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
              width: 1500,
            },
            small_thumb: {
              height: 67,
              url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
              width: 100,
            },
          },
          contributor: { id: '250738318' },
          description: 'cropped image of woman gardening',
          has_model_release: true,
          id: '1572478477',
          image_type: 'photo',
          media_type: 'image',
        },
      ],
      page: 1,
      per_page: 5,
      search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
      spellcheck_info: {},
      total_count: 45,
    },
    required: ['data', 'total_count', 'search_id'],
  })
  .openapi('ImageSearchResults')

const BulkImageSearchResultsSchema = z
  .object({
    bulk_search_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the search request' }),
    results: z
      .array(ImageSearchResultsSchema)
      .exactOptional()
      .openapi({ description: 'List of image search results' }),
  })
  .openapi({
    description: 'List of search results for each given query',
    example: {
      results: [
        {
          data: [
            {
              aspect: 1.5,
              assets: {
                huge_thumb: {
                  height: 260,
                  url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
                  width: 390,
                },
                large_thumb: {
                  height: 100,
                  url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                  width: 150,
                },
                preview: {
                  height: 300,
                  url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                  width: 450,
                },
                preview_1000: {
                  height: 667,
                  url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
                  width: 1000,
                },
                preview_1500: {
                  height: 1000,
                  url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                  width: 1500,
                },
                small_thumb: {
                  height: 67,
                  url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                  width: 100,
                },
              },
              contributor: { id: '250738318' },
              description: 'cropped image of woman gardening',
              has_model_release: true,
              id: '1572478477',
              image_type: 'photo',
              media_type: 'image',
            },
          ],
          page: 1,
          per_page: 5,
          search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
          spellcheck_info: {},
          total_count: 45,
        },
        {
          data: [],
          page: 1,
          per_page: 5,
          search_id: '749090bb-2967-4a20-b22e-c800dc845e11',
          spellcheck_info: {},
          total_count: 0,
        },
      ],
    },
    required: [],
  })
  .openapi('BulkImageSearchResults')

const CatalogCollectionItemSchema = z
  .object({
    asset: z
      .object({
        id: z.string().exactOptional(),
        name: z.string().exactOptional(),
        type: z.enum(['image', 'video', 'audio', 'editorial-image', 'editorial-video']),
      })
      .openapi({ required: ['type'] }),
    collection_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The collection IDs that this asset belongs to' }),
    created_time: z.iso.datetime({ offset: true }),
    id: z.string(),
  })
  .openapi({
    description: 'Metadata about an item that is part of a collection',
    example: {
      asset: { id: '1690105108', name: 'Young couple playing tennis at the court', type: 'image' },
      collection_ids: ['126351028'],
      created_time: '2021-06-10T13:26:09-04:00',
      id: '123',
    },
    required: ['id', 'asset', 'created_time'],
  })
  .openapi('CatalogCollectionItem')

const CatalogCollectionRoleSchema = z
  .object({ email: z.string(), id: z.string(), type: z.literal('USER') })
  .openapi({
    description: 'A user that has access to a catalog collection',
    example: { email: 'user123@org.com', id: '123', type: 'USER' },
    required: ['id', 'type', 'email'],
  })
  .openapi('CatalogCollectionRole')

const CatalogCollectionRoleAssignmentsSchema = z
  .object({
    collection_id: z.string(),
    roles: z
      .object({
        editors: z.array(CatalogCollectionRoleSchema).exactOptional(),
        owners: z.array(CatalogCollectionRoleSchema).exactOptional(),
        viewers: z.array(CatalogCollectionRoleSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'List of role assignments for a catalog collection',
    example: {
      collection_id: '126351028',
      roles: {
        editors: [{ email: 'userTwo@org.com', id: '987', type: 'USER' }],
        owners: [{ email: 'userOne@org.com', id: '321', type: 'USER' }],
        viewers: [],
      },
    },
    required: ['collection_id', 'roles'],
  })
  .openapi('CatalogCollectionRoleAssignments')

const CatalogCollectionSchema = z
  .object({
    cover_asset: CatalogCollectionItemSchema.exactOptional(),
    created_time: z.iso.datetime({ offset: true }),
    id: z.string(),
    name: z.string(),
    role_assignments: CatalogCollectionRoleAssignmentsSchema,
    total_item_count: z.number(),
    updated_time: z.iso.datetime({ offset: true }),
    visibility: z.enum(['private', 'public']),
  })
  .openapi({
    description: 'Catalog collection',
    example: {
      cover_asset: {
        asset: {
          id: '1690105108',
          name: 'Young couple playing tennis at the court',
          type: 'image',
        },
        created_time: '2021-06-10T13:26:09-04:00',
        id: '123',
      },
      created_time: '2021-05-20T16:15:22-04:00',
      id: '126351028',
      name: 'My collection',
      role_assignments: {
        collection_id: '126351028',
        roles: {
          editors: [{ email: 'userTwo@org.com', id: '987', type: 'USER' }],
          owners: [{ email: 'userOne@org.com', id: '321', type: 'USER' }],
          viewers: [],
        },
      },
      total_item_count: 2,
      updated_time: '2021-06-10T13:26:09-04:00',
      visibility: 'public',
    },
    required: [
      'id',
      'name',
      'total_item_count',
      'created_time',
      'updated_time',
      'visibility',
      'role_assignments',
    ],
  })
  .openapi('CatalogCollection')

const CatalogCollectionDataListSchema = z
  .object({
    data: z.array(CatalogCollectionSchema).openapi({ description: 'List of catalog collections' }),
    page: z.number(),
    per_page: z.number(),
    total_count: z.number(),
  })
  .openapi({
    description: 'List of catalog collections',
    example: {
      data: [
        {
          cover_asset: {
            asset: {
              id: '1690105108',
              name: 'Young couple playing tennis at the court',
              type: 'image',
            },
            created_time: '2021-06-10T13:26:09-04:00',
            id: '123',
          },
          created_time: '2021-05-20T16:15:22-04:00',
          id: '126351028',
          name: 'My collection',
          role_assignments: {
            collection_id: '126351028',
            roles: {
              editors: [{ email: 'userTwo@org.com', id: '987', type: 'USER' }],
              owners: [{ email: 'userOne@org.com', id: '321', type: 'USER' }],
              viewers: [],
            },
          },
          total_item_count: 2,
          updated_time: '2021-06-10T13:26:09-04:00',
          visibility: 'public',
        },
      ],
      page: 1,
      per_page: 20,
      total_count: 1,
    },
    required: ['page', 'per_page', 'total_count', 'data'],
  })
  .openapi('CatalogCollectionDataList')

const CatalogCollectionItemDataListSchema = z
  .object({
    data: z
      .array(CatalogCollectionItemSchema)
      .openapi({ description: 'List of catalog collection items' }),
    page: z.number(),
    per_page: z.number(),
    total_count: z.number(),
  })
  .openapi({
    description: 'List of catalog collection items',
    example: {
      data: [
        {
          asset: {
            id: '1690105108',
            name: 'Young couple playing tennis at the court',
            type: 'image',
          },
          collection_ids: ['126351028'],
          created_time: '2021-06-10T13:26:09-04:00',
          id: '123',
        },
      ],
      page: 1,
      per_page: 1,
      total_count: 82,
    },
    required: ['page', 'per_page', 'total_count', 'data'],
  })
  .openapi('CatalogCollectionItemDataList')

const CategoryDataListSchema = z
  .object({
    data: z.array(CategorySchema).exactOptional().openapi({ description: 'Categories' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'The current page of results' }),
    per_page: z.int().exactOptional().openapi({ description: 'The number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of results across all pages' }),
  })
  .openapi({
    description: 'List of categories that images can belong to',
    example: {
      data: [
        { id: '1', name: 'Animals/Wildlife' },
        { id: '11', name: 'The Arts' },
      ],
      page: 1,
      per_page: 2,
      total_count: 13,
    },
    required: [],
  })
  .openapi('CategoryDataList')

const CollectionItemSchema = z
  .object({
    added_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date the item was added to the collection' }),
    id: z.string().openapi({ description: 'ID of the item' }),
    media_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The media type of the item, such as image, video, or audio' }),
  })
  .openapi({
    description: 'Metadata about an item that is part of a collection',
    example: { added_time: '2020-05-29T12:10:22-05:00', id: '1690105108', media_type: 'image' },
    required: ['id'],
  })
  .openapi('CollectionItem')

const CollectionSchema = z
  .object({
    cover_item: CollectionItemSchema.exactOptional(),
    created_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the collection was created' }),
    id: z.string().openapi({ description: 'The collection ID' }),
    items_updated_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: "The last time this collection's items were updated" }),
    name: z.string().openapi({ description: 'The name of the collection' }),
    share_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'A code that can be used to share the collection (optional)' }),
    share_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The browser URL that can be used to share the collection (optional)',
      }),
    total_item_count: z.int().openapi({ description: 'The number of items in the collection' }),
    updated_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The last time the collection was update (other than changes to the items in it)',
      }),
  })
  .openapi({
    description: 'Metadata about a collection of assets',
    example: {
      cover_item: { id: '297886754' },
      id: '293542904',
      items_updated_time: '2021-05-20T16:15:22-04:00',
      name: 'My collection',
      total_item_count: 85,
    },
    required: ['id', 'name', 'total_item_count'],
  })
  .openapi('Collection')

const CollectionCreateRequestSchema = z
  .object({ name: z.string().openapi({ description: 'The name of the collection' }) })
  .openapi({
    description: 'Collection creation request',
    example: { name: 'Test Collection 19cf' },
    required: ['name'],
  })
  .openapi('CollectionCreateRequest')

const CollectionCreateResponseSchema = z
  .object({ id: z.string().openapi({ description: 'ID of the new collection' }) })
  .openapi({
    description: 'Collection creation response',
    example: { id: '48433105' },
    required: ['id'],
  })
  .openapi('CollectionCreateResponse')

const CollectionDataListSchema = z
  .object({
    data: z.array(CollectionSchema).exactOptional().openapi({ description: 'Collections' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'The current page of results' }),
    per_page: z.int().exactOptional().openapi({ description: 'The number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of results across all pages' }),
  })
  .openapi({
    description: 'List of collections',
    example: {
      data: [
        {
          cover_item: { id: '297886754' },
          id: '293542904',
          items_updated_time: '2021-05-20T16:15:22-04:00',
          name: 'My collection',
          total_item_count: 85,
        },
      ],
      page: 1,
      per_page: 100,
      total_count: 1,
    },
    required: [],
  })
  .openapi('CollectionDataList')

const CollectionItemDataListSchema = z
  .object({
    data: z
      .array(CollectionItemSchema)
      .exactOptional()
      .openapi({ description: 'Assets in the collection' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'The current page of results' }),
    per_page: z.int().exactOptional().openapi({ description: 'The number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of results across all pages' }),
  })
  .openapi({
    description: 'List of items in a collection',
    example: {
      data: [
        { added_time: '2021-07-08T12:33:37.000Z', id: '1690105108', media_type: 'image' },
        { added_time: '2021-07-08T12:31:43.000Z', id: '1468703072', media_type: 'image' },
      ],
      page: 1,
      per_page: 2,
      total_count: 82,
    },
    required: [],
  })
  .openapi('CollectionItemDataList')

const CollectionItemRequestSchema = z
  .object({ items: z.array(CollectionItemSchema).openapi({ description: 'List of items' }) })
  .openapi({
    description: 'Request to get a list of items in a collection',
    example: {},
    required: ['items'],
  })
  .openapi('CollectionItemRequest')

const CollectionUpdateRequestSchema = z
  .object({ name: z.string().openapi({ description: 'The new name of the collection' }) })
  .openapi({
    description: 'Collection update request',
    example: { name: 'My collection with a new name' },
    required: ['name'],
  })
  .openapi('CollectionUpdateRequest')

const ComputerVisionImageCreateResponseSchema = z
  .object({ upload_id: z.string() })
  .openapi({
    description: 'Asset upload information',
    example: { upload_id: 'Udb14e1c3540bdbf82b4b3fe12d3a44f2' },
    required: ['upload_id'],
  })
  .openapi('ComputerVisionImageCreateResponse')

const ContributorProfileSocialMediaSchema = z
  .object({
    facebook: z.string().exactOptional().openapi({ description: 'Facebook link for contributor' }),
    google_plus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Google+ link for contributor' }),
    linkedin: z.string().exactOptional().openapi({ description: 'LinkedIn link for contributor' }),
    pinterest: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pinterest page for contributor' }),
    tumblr: z.string().exactOptional().openapi({ description: 'Tumblr link for contributor' }),
    twitter: z.string().exactOptional().openapi({ description: 'Twitter link for contributor' }),
  })
  .openapi({
    description: 'Contributor profile social media links',
    example: {
      facebook: 'http://example.com/jdoe',
      google_plus: 'http://example.com/jdoe',
      linkedin: 'http://example.com/jdoe',
      pinterest: 'http://example.com/jdoe',
      tumblr: 'http://example.com/jdoe',
      twitter: 'http://example.com/jdoe',
    },
    required: [],
  })
  .openapi('ContributorProfileSocialMedia')

const ContributorProfileSchema = z
  .object({
    about: z
      .string()
      .exactOptional()
      .openapi({ description: "Short description of the contributors' library" }),
    contributor_type: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Type of content that the contributor specializes in (photographer, illustrator, etc)',
      }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Preferred name to be displayed for the contributor' }),
    equipment: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of equipment used by the contributor (Canon EOS 5D Mark II, etc)',
      }),
    id: z.string().openapi({ description: 'Contributor ID' }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: "Country code representing the contributor's locale" }),
    portfolio_url: z
      .string()
      .exactOptional()
      .openapi({ description: "Web URL for the contributors' profile" }),
    social_media: ContributorProfileSocialMediaSchema.exactOptional(),
    styles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of styles that the contributor specializes in (lifestyle, mixed media, etc)',
      }),
    subjects: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Generic list of subjects for contributors' work (food_and_drink, holiday, people, etc)",
      }),
    website: z
      .string()
      .exactOptional()
      .openapi({ description: 'Personal website for the contributor' }),
  })
  .openapi({
    description: 'Contributor profile data',
    example: {
      about: "John Doe's photographs",
      contributor_type: ['photographer'],
      display_name: 'John Doe',
      equipment: ['Nikon', 'Fuji'],
      id: '12345678',
      location: 'US',
      portfolio_url: 'https://www.shutterstock.com/g/jdoe',
      social_media: {
        facebook: 'http://example.com/jdoe',
        google_plus: 'http://example.com/jdoe',
        linkedin: 'http://example.com/jdoe',
        pinterest: 'http://example.com/jdoe',
        tumblr: 'http://example.com/jdoe',
        twitter: 'http://example.com/jdoe',
      },
      styles: ['landscape', 'nature', 'footage_travel'],
      subjects: ['animals', 'landmarks', 'nature', 'objects', 'recreation'],
      website: 'http://example.com/profiles/jdoe',
    },
    required: ['id'],
  })
  .openapi('ContributorProfile')

const ContributorProfileDataListSchema = z
  .object({
    data: z
      .array(ContributorProfileSchema)
      .exactOptional()
      .openapi({ description: 'Conributor profiles' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z.string().exactOptional().openapi({ description: 'Error message' }),
    page: z.int().exactOptional().openapi({ description: 'Page of response' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of contributors per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of contributors for this request' }),
  })
  .openapi({
    description: 'List of contributor profiles',
    example: {
      data: [
        {
          about: "John Doe's photographs",
          contributor_type: ['photographer'],
          display_name: 'John Doe',
          equipment: ['Nikon', 'Fuji'],
          id: '12345678',
          location: 'US',
          portfolio_url: 'https://www.shutterstock.com/g/jdoe',
          social_media: {
            facebook: 'http://example.com/jdoe',
            google_plus: 'http://example.com/jdoe',
            linkedin: 'http://example.com/jdoe',
            pinterest: 'http://example.com/jdoe',
            tumblr: 'http://example.com/jdoe',
            twitter: 'http://example.com/jdoe',
          },
          styles: ['landscape', 'nature', 'footage_travel'],
          subjects: ['animals', 'landmarks', 'nature', 'objects', 'recreation'],
          website: 'http://example.com/profiles/jdoe',
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 15,
    },
    required: [],
  })
  .openapi('ContributorProfileDataList')

const CookieSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the cookie' }),
    value: z.string().openapi({ description: 'The value of the cookie' }),
  })
  .openapi({
    description: 'Cookie object',
    example: { name: 'The name of the cookie', value: 'The value of the cookie' },
    required: ['name', 'value'],
  })
  .openapi('Cookie')

const CreateAudioRenderSchema = z
  .object({
    filename: z
      .string()
      .openapi({
        description:
          'A user-specified file name suggestion; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file',
        example: 'My Project.mp3',
      }),
    preset: z
      .enum(['MASTER_MP3', 'MASTER_WAV', 'STEMS_WAV'])
      .openapi({
        description:
          'File format, such as MP3 file, combined WAV file, or individual track WAV files',
        example: 'MASTER_MP3',
      }),
    timeline: AudioRenderTimelineSchema.openapi({
      description: 'The timeline data with which to generate the render',
    }),
  })
  .openapi({
    description: 'Data required to create an audio render',
    example: {
      filename: 'My Project.mp3',
      preset: 'MASTER_MP3',
      timeline: {
        spans: [
          {
            id: 111,
            instrument_groups: [
              { instrument_group: 'roomy_kit', statuses: [{ beat: 12, status: 'active' }] },
            ],
            regions: [
              {
                beat: 12,
                descriptor: 'cinematic_minimal_tense',
                end_type: { beat: 24, event: 'ending', type: 'ringout' },
                id: 222,
                key: { tonic_note: 'c', tonic_quality: 'major' },
                region: 'music',
              },
            ],
            span_type: 'metered',
            tempo: 76,
            tempo_changes: [{ tempo: 86, time: 5 }],
            time: 5,
          },
          { span_type: 'unmetered', time: 20 },
        ],
      },
    },
    required: ['preset', 'timeline', 'filename'],
  })
  .openapi('CreateAudioRender')

const CreateAudioRendersRequestSchema = z
  .object({
    audio_renders: z
      .array(CreateAudioRenderSchema)
      .openapi({ description: 'Parameters to create computer audio renders' }),
  })
  .openapi({
    description: 'Render request data',
    example: {
      audio_renders: [
        {
          filename: 'My Project.mp3',
          preset: 'MASTER_MP3',
          timeline: {
            spans: [
              {
                id: 111,
                instrument_groups: [
                  { instrument_group: 'roomy_kit', statuses: [{ beat: 12, status: 'active' }] },
                ],
                regions: [
                  {
                    beat: 12,
                    descriptor: 'cinematic_minimal_tense',
                    end_type: { beat: 24, event: 'ending', type: 'ringout' },
                    id: 222,
                    key: { tonic_note: 'c', tonic_quality: 'major' },
                    region: 'music',
                  },
                ],
                span_type: 'metered',
                tempo: 76,
                tempo_changes: [{ tempo: 86, time: 5 }],
                time: 5,
              },
              { span_type: 'unmetered', time: 20 },
            ],
          },
        },
      ],
    },
    required: ['audio_renders'],
  })
  .openapi('CreateAudioRendersRequest')

const CreateCatalogCollectionItemSchema = z
  .object({
    asset: z
      .object({ id: z.string().exactOptional(), type: z.string() })
      .openapi({ required: ['type'] }),
  })
  .openapi({ example: { asset: { id: '1690105108', type: 'image' } }, required: ['asset'] })
  .openapi('CreateCatalogCollectionItem')

const CreateCatalogCollectionSchema = z
  .object({
    items: z.array(CreateCatalogCollectionItemSchema).max(50).exactOptional(),
    name: z.string().min(1).max(100000),
    visibility: z.enum(['private', 'public']).default('private').exactOptional(),
  })
  .openapi({ example: { name: 'New Collection', visibility: 'public' }, required: ['name'] })
  .openapi('CreateCatalogCollection')

const CreateCatalogCollectionItemsSchema = z
  .object({ items: z.array(CreateCatalogCollectionItemSchema).min(1).max(50) })
  .openapi({ example: {}, required: ['items'] })
  .openapi('CreateCatalogCollectionItems')

const CustomSizeDimensionsSchema = z
  .object({
    height: z
      .int()
      .min(100)
      .exactOptional()
      .openapi({ description: 'Custom height to resize the image to' }),
    width: z
      .int()
      .min(100)
      .exactOptional()
      .openapi({ description: 'Custom width to resize the image to' }),
  })
  .openapi({
    description:
      'A custom height or a custom width to resize the image to, but not both (experimental)',
    example: { height: 600, width: 800 },
    required: [],
  })
  .openapi('CustomSizeDimensions')

const InstrumentsSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The string id of the instrument' }),
    name: z.string().exactOptional().openapi({ description: 'The string name of the instrument' }),
  })
  .openapi({
    description: 'Instruments',
    example: { id: 'bright_roomy_kit', name: 'Bright Roomy Kit' },
    required: [],
  })
  .openapi('Instruments')

const PreviewSchema = z
  .object({
    content_type: z
      .literal('audio/mp3')
      .exactOptional()
      .openapi({ description: 'Content type of the preview, currently audio/mp3' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: "Url of the instrument's preview file" }),
  })
  .openapi({
    description: 'Preview information',
    example: {
      content_type: 'audio/mp3',
      url: 'https://public-cdn.ampermusic.com/instruments/previews/roomy_kit_v1.mp3',
    },
    required: [],
  })
  .openapi('Preview')

const DescriptorsSchema = z
  .object({
    average_render_speed: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The average ratio of the length of the music to the time it takes to render; for example, a render speed of 3.0 generates 30 seconds of music in about 10 seconds',
      }),
    bands: z
      .array(BandsSchema)
      .exactOptional()
      .openapi({ description: 'The bands that are available to use this descriptor' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the descriptor' }),
    instruments: z
      .array(InstrumentsSchema)
      .exactOptional()
      .openapi({ description: 'The instruments that can play with this descriptor' }),
    max_tempo: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The maximum beats per minute that the descriptor is intended to be used with',
      }),
    min_tempo: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The minimum beats per minute that the descriptor is intended to be used with',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the descriptor' }),
    previews: z
      .array(PreviewSchema)
      .exactOptional()
      .openapi({ description: 'Preview of the descriptor' }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Tags that describe the descriptor' }),
  })
  .openapi({
    description: 'Information about a descriptor',
    example: {
      average_render_speed: 8.242664029014177,
      bands: [
        { id: 'cinematic_minimal_tense_band_1', name: 'Cinematic Minimal Tense Band 1' },
        { id: 'cinematic_minimal_tense_band_2', name: 'Cinematic Minimal Tense Band 2' },
      ],
      id: 'cinematic_minimal_tense',
      instruments: [
        { id: 'blue_synth_pad', name: 'Warm Pad - Lush' },
        { id: 'direct_round_1_synth_bass', name: 'Direct Round 1 Synth Bass' },
        { id: 'direct_crystal_breath_mid_pad', name: 'Direct Crystal Breath Mid Pad' },
      ],
      max_tempo: 76,
      min_tempo: 58,
      name: 'Cinematic Minimal Tense',
      previews: [
        {
          content_type: 'audio/mp3',
          url: 'https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_1_v1.mp3',
        },
        {
          content_type: 'audio/mp3',
          url: 'https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_2_v1.mp3',
        },
      ],
      tags: [
        'Tense',
        'Cinematic',
        'Negative',
        'Simple Meter',
        '4/4',
        'Natural Minor',
        'Dorian',
        'Minimal',
        'Adagio',
        'Single Region',
        'Main',
        'Entertainment',
        'Politics',
        'Keys',
        'Mid Pads',
        'Fast',
        'Slow',
        'Slow',
        'Voice',
        'Medium Bright',
        'Non Noisy',
        'Medium Thick',
        'Angelic',
        'Direct',
        'Percussion',
        'Perc FX',
        'Misc',
        'Acoustic Pianos',
        'Grand',
        'Nice',
        'Roomy',
        'Pop',
        'Upright',
        'Clean',
        'Classic',
        'Keyboards',
        'Digital Keyboard',
        'Strings',
        'Synth Basses',
        'Fast',
        'Dark',
        'Thick',
        'Sub',
        'Synth Mallets',
        'Dull',
        'Mid Synth Beds',
        'Slow',
        'None',
        'Medium Noisy',
        'Harsh',
        'Fast',
        'Airy',
        'Long Textures',
        'Ambience',
        'Synth Texture',
        'Ethereal',
        'Set Kicks',
        'Processed',
        'Hubcap Mallet',
        'Wide',
        'Tickie',
        'Airy',
        'Chamber',
        'Thin',
        'Organ',
        'Cello Ensemble',
        'Sweet',
        'Big',
        'Di',
        'Raw',
        'Bright',
        'Tight',
        'Chorus',
        'Buzzy',
        'Huge',
        'Warm',
        'Jazz',
        'Brass',
        'String',
        'Hollow',
        'Woodwind',
        'Breathy',
        'Crystal',
        'Rhodes',
        'Synth Piano',
        'Noisy',
        'Woody',
        'Metallic',
        'Reverse Piano',
        'Full',
        'Foley',
        'Piano',
        'Clean',
        'Delayed',
        'Reverb',
        'Low Passed',
        'Large',
        'Medium',
        'Small',
      ],
    },
    required: [],
  })
  .openapi('Descriptors')

const DescriptorsListResultSchema = z
  .object({
    data: z
      .array(DescriptorsSchema)
      .exactOptional()
      .openapi({ description: 'List of descriptors' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
  })
  .openapi({
    description: 'List Descriptors results',
    example: {
      data: [
        {
          average_render_speed: 8.242664029014177,
          bands: [
            { id: 'cinematic_minimal_tense_band_1', name: 'Cinematic Minimal Tense Band 1' },
            { id: 'cinematic_minimal_tense_band_2', name: 'Cinematic Minimal Tense Band 2' },
          ],
          id: 'cinematic_minimal_tense',
          instruments: [
            { id: 'blue_synth_pad', name: 'Warm Pad - Lush' },
            { id: 'direct_round_1_synth_bass', name: 'Direct Round 1 Synth Bass' },
            { id: 'direct_crystal_breath_mid_pad', name: 'Direct Crystal Breath Mid Pad' },
          ],
          max_tempo: 76,
          min_tempo: 58,
          name: 'Cinematic Minimal Tense',
          previews: [
            {
              content_type: 'audio/mp3',
              url: 'https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_1_v1.mp3',
            },
            {
              content_type: 'audio/mp3',
              url: 'https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_2_v1.mp3',
            },
          ],
          tags: [
            'Tense',
            'Cinematic',
            'Negative',
            'Simple Meter',
            '4/4',
            'Natural Minor',
            'Dorian',
            'Minimal',
            'Adagio',
            'Single Region',
            'Main',
            'Entertainment',
            'Politics',
            'Keys',
            'Mid Pads',
            'Fast',
            'Slow',
            'Slow',
            'Voice',
            'Medium Bright',
            'Non Noisy',
            'Medium Thick',
            'Angelic',
            'Direct',
            'Percussion',
            'Perc FX',
            'Misc',
            'Acoustic Pianos',
            'Grand',
            'Nice',
            'Roomy',
            'Pop',
            'Upright',
            'Clean',
            'Classic',
            'Keyboards',
            'Digital Keyboard',
            'Strings',
            'Synth Basses',
            'Fast',
            'Dark',
            'Thick',
            'Sub',
            'Synth Mallets',
            'Dull',
            'Mid Synth Beds',
            'Slow',
            'None',
            'Medium Noisy',
            'Harsh',
            'Fast',
            'Airy',
            'Long Textures',
            'Ambience',
            'Synth Texture',
            'Ethereal',
            'Set Kicks',
            'Processed',
            'Hubcap Mallet',
            'Wide',
            'Tickie',
            'Airy',
            'Chamber',
            'Thin',
            'Organ',
            'Cello Ensemble',
            'Sweet',
            'Big',
            'Di',
            'Raw',
            'Bright',
            'Tight',
            'Chorus',
            'Buzzy',
            'Huge',
            'Warm',
            'Jazz',
            'Brass',
            'String',
            'Hollow',
            'Woodwind',
            'Breathy',
            'Crystal',
            'Rhodes',
            'Synth Piano',
            'Noisy',
            'Woody',
            'Metallic',
            'Reverse Piano',
            'Full',
            'Foley',
            'Piano',
            'Clean',
            'Delayed',
            'Reverb',
            'Low Passed',
            'Large',
            'Medium',
            'Small',
          ],
        },
      ],
      page: 1,
      per_page: 1,
    },
    required: [],
  })
  .openapi('DescriptorsListResult')

const DownloadHistoryFormatDetailsSchema = z
  .object({
    format: z
      .string()
      .exactOptional()
      .openapi({ description: 'The format of the downloaded media' }),
    size: z.string().exactOptional().openapi({ description: 'The size of the downloaded media' }),
  })
  .openapi({
    description: 'Information about the format of a download',
    example: { format: 'jpg', size: 'medium' },
    required: [],
  })
  .openapi('DownloadHistoryFormatDetails')

const DownloadHistoryMediaDetailsSchema = z
  .object({
    format: DownloadHistoryFormatDetailsSchema.exactOptional(),
    id: z.string().openapi({ description: 'ID of the download history media details' }),
  })
  .openapi({
    description: 'Information about the downloaded media',
    example: { format: { format: 'jpg', size: 'medium' }, id: '1234567' },
    required: ['id'],
  })
  .openapi('DownloadHistoryMediaDetails')

const DownloadHistoryRevshareDetailsSchema = z
  .object({
    purchase_amount: z.string().openapi({ description: 'The amount charged for the license' }),
    purchase_currency: z
      .string()
      .openapi({ description: 'The currency the amount was charged in' }),
  })
  .openapi({
    description: 'Pricing information for revenue-sharing transactions',
    example: { purchase_amount: '8.65', purchase_currency: 'USD' },
    required: ['purchase_amount', 'purchase_currency'],
  })
  .openapi('DownloadHistoryRevshareDetails')

const DownloadHistoryUserDetailsSchema = z
  .object({
    username: z.string().openapi({ description: 'The name of the user who downloaded the item' }),
  })
  .openapi({
    description: 'Information about a user',
    example: { username: 'jdoe' },
    required: ['username'],
  })
  .openapi('DownloadHistoryUserDetails')

const DownloadHistorySchema = z
  .object({
    audio: DownloadHistoryMediaDetailsSchema.exactOptional(),
    download_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date the media was downloaded the first time' }),
    id: z.string().openapi({ description: 'ID of the download' }),
    image: DownloadHistoryMediaDetailsSchema.exactOptional(),
    is_downloadable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Specifies if the media is downloadable via its respective downloads endpoint',
      }),
    license: z.string().openapi({ description: 'The name of the license of this download' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The metadata that was passed in the original licensing request' }),
    revshare: DownloadHistoryRevshareDetailsSchema.exactOptional(),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the subscription used to perform this download' }),
    user: DownloadHistoryUserDetailsSchema.exactOptional(),
    video: DownloadHistoryMediaDetailsSchema.exactOptional(),
  })
  .openapi({
    description:
      "Information about a downloaded media item. Applicable for all media types, only one of 'audio', 'image' or 'video' will be in a single DownloadHistory object",
    example: {
      download_time: '2021-05-20T20:31:46.000Z',
      id: 'a24499ca3ccd912a6d8316d45f953ef092',
      image: { format: { size: 'medium' }, id: '1234567' },
      is_downloadable: true,
      license: 'standard',
      subscription_id: 's12345678',
      user: { username: 'jdoe' },
    },
    required: ['id', 'download_time', 'license'],
  })
  .openapi('DownloadHistory')

const DownloadHistoryDataListSchema = z
  .object({
    data: z
      .array(DownloadHistorySchema)
      .exactOptional()
      .openapi({ description: 'Download events' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'The current page of results' }),
    per_page: z.int().exactOptional().openapi({ description: 'The number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of results across all pages' }),
  })
  .openapi({
    description: 'List of download events',
    example: {
      data: [
        {
          download_time: '2021-07-15T15:46:34.000Z',
          id: 'e1eba3833793e77188d22caae8bac9f2cd',
          image: { format: { size: 'original' }, id: '9763363ao' },
          is_downloadable: false,
          license: 'premier_editorial_all_digital',
          metadata: {
            client: 'Company A',
            job: 'Important project',
            other: 'Important media',
            purchase_order: '123456',
          },
          subscription_id: 's12345678',
          user: { username: 'editorial_test_account_002' },
        },
      ],
      page: 1,
      per_page: 1,
      total_count: 2890,
    },
    required: [],
  })
  .openapi('DownloadHistoryDataList')

const EditorialAssetsSchema = z
  .object({
    medium_jpg: ImageSizeDetailsSchema.exactOptional(),
    original: ImageSizeDetailsSchema.exactOptional(),
    small_jpg: ImageSizeDetailsSchema.exactOptional(),
    thumb_170: ThumbnailSchema.exactOptional(),
    thumb_220: ThumbnailSchema.exactOptional(),
    watermark_1500: ThumbnailSchema.exactOptional(),
    watermark_450: ThumbnailSchema.exactOptional(),
  })
  .openapi({
    description: 'Asset information, including size and thumbnail URLs',
    example: {
      medium_jpg: { display_name: 'Med', height: 617, is_licensable: true, width: 1000 },
      original: { display_name: 'Original', height: 3693, is_licensable: true, width: 5985 },
      small_jpg: { display_name: 'Small', height: 309, is_licensable: true, width: 500 },
      thumb_170: {
        height: 105,
        url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
        width: 170,
      },
      thumb_220: {
        height: 136,
        url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
        width: 220,
      },
      watermark_1500: {
        height: 926,
        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
        width: 1500,
      },
      watermark_450: {
        height: 278,
        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
        width: 450,
      },
    },
    required: [],
  })
  .openapi('EditorialAssets')

const EditorialCategorySchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({
    description: 'Name of an editorial category',
    example: { name: 'Awards' },
    required: [],
  })
  .openapi('EditorialCategory')

const EditorialCategoryResultsSchema = z
  .object({
    data: z
      .array(EditorialCategorySchema)
      .exactOptional()
      .openapi({ description: 'List of editorial categories' }),
  })
  .openapi({
    description: 'List of editorial categories',
    example: { data: [{ name: 'Animal' }, { name: 'Awards' }, { name: 'Art' }] },
    required: [],
  })
  .openapi('EditorialCategoryResults')

const EditorialContentSchema = z
  .object({
    aspect: z.number().exactOptional(),
    assets: EditorialAssetsSchema.exactOptional(),
    byline: z.string().exactOptional(),
    caption: z.string().exactOptional(),
    categories: z
      .array(EditorialCategorySchema)
      .exactOptional()
      .openapi({ description: 'List of categories' }),
    date_taken: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    id: z.string(),
    keywords: z.array(z.string()).exactOptional(),
    special_instructions: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({
    description: 'Metadata about editorial content',
    example: {
      aspect: 1.621,
      assets: {
        medium_jpg: { display_name: 'Med', height: 617, is_licensable: true, width: 1000 },
        original: { display_name: 'Original', height: 3693, is_licensable: true, width: 5985 },
        small_jpg: { display_name: 'Small', height: 309, is_licensable: true, width: 500 },
        thumb_170: {
          height: 105,
          url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
          width: 170,
        },
        thumb_220: {
          height: 136,
          url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
          width: 220,
        },
        watermark_1500: {
          height: 926,
          url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
          width: 1500,
        },
        watermark_450: {
          height: 278,
          url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
          width: 450,
        },
      },
      byline: 'Jon Super/AP/Shutterstock',
      caption: '',
      categories: [{ name: 'Sport' }],
      date_taken: '2021-05-11',
      description:
        "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
      id: '10687730b',
      keywords: [
        'england',
        'europe',
        'leicester city fc',
        'manchester',
        'manchester united fc',
        "men's soccer",
        "men's sports",
        'premier league',
        'professional soccer',
        'soccer',
        'sports',
        'united kingdom',
        'western europe',
        'wsoc',
      ],
      title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
    },
    required: ['id'],
  })
  .openapi('EditorialContent')

const EditorialContentDataListSchema = z
  .object({
    data: z
      .array(EditorialContentSchema)
      .exactOptional()
      .openapi({ description: 'Editorial items' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z.string().exactOptional().openapi({ description: 'Optional error message' }),
    page: z.int().exactOptional().openapi({ description: 'Current page of the response' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z.int().exactOptional().openapi({ description: 'Total count of all results' }),
  })
  .openapi({
    description: 'List of editorial items',
    example: {
      data: [
        {
          aspect: 1.621,
          assets: {
            medium_jpg: { display_name: 'Med', height: 617, is_licensable: true, width: 1000 },
            original: { display_name: 'Original', height: 3693, is_licensable: true, width: 5985 },
            small_jpg: { display_name: 'Small', height: 309, is_licensable: true, width: 500 },
            thumb_170: {
              height: 105,
              url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
              width: 170,
            },
            thumb_220: {
              height: 136,
              url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
              width: 220,
            },
            watermark_1500: {
              height: 926,
              url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
              width: 1500,
            },
            watermark_450: {
              height: 278,
              url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
              width: 450,
            },
          },
          byline: 'Jon Super/AP/Shutterstock',
          caption: '',
          categories: [{ name: 'Sport' }],
          date_taken: '2021-05-11',
          description:
            "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
          id: '10687730b',
          keywords: [
            'england',
            'europe',
            'leicester city fc',
            'manchester',
            'manchester united fc',
            "men's soccer",
            "men's sports",
            'premier league',
            'professional soccer',
            'soccer',
            'sports',
            'united kingdom',
            'western europe',
            'wsoc',
          ],
          title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 16,
    },
    required: [],
  })
  .openapi('EditorialContentDataList')

const EditorialCoverItemSchema = z
  .object({
    height: z.int().exactOptional(),
    id: z.string(),
    url: z.string(),
    width: z.int().exactOptional(),
  })
  .openapi({
    description: 'Cover image for editorial livefeed',
    example: {
      height: 117,
      id: '9763363q',
      url: 'https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg',
      width: 170,
    },
    required: ['id', 'url'],
  })
  .openapi('EditorialCoverItem')

const EditorialImageCategoryResultsSchema = z
  .object({ data: z.array(EditorialCategorySchema).exactOptional() })
  .openapi({
    description: 'List of editorial categories',
    example: {
      data: [{ name: 'Animal' }, { name: 'Awards' }, { name: 'Art' }, { name: 'Film Stills' }],
    },
    required: [],
  })
  .openapi('EditorialImageCategoryResults')

const EditorialImageContentDataListSchema = z
  .object({
    data: z
      .array(EditorialContentSchema)
      .exactOptional()
      .openapi({ description: 'Editorial items' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z.string().exactOptional().openapi({ description: 'Optional error message' }),
    page: z.int().exactOptional().openapi({ description: 'Current page of the response' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z.int().exactOptional().openapi({ description: 'Total count of all results' }),
  })
  .openapi({
    description: 'List of editorial items',
    example: {
      data: [
        {
          aspect: 1.621,
          assets: {
            medium_jpg: { display_name: 'Med', height: 617, is_licensable: true, width: 1000 },
            original: { display_name: 'Original', height: 3693, is_licensable: true, width: 5985 },
            small_jpg: { display_name: 'Small', height: 309, is_licensable: true, width: 500 },
            thumb_170: {
              height: 105,
              url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
              width: 170,
            },
            thumb_220: {
              height: 136,
              url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
              width: 220,
            },
            watermark_1500: {
              height: 926,
              url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
              width: 1500,
            },
            watermark_450: {
              height: 278,
              url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
              width: 450,
            },
          },
          byline: 'Jon Super/AP/Shutterstock',
          caption: '',
          categories: [{ name: 'Sport' }],
          date_taken: '2021-05-11',
          description:
            "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
          id: '10687730b',
          keywords: [
            'england',
            'europe',
            'leicester city fc',
            'manchester',
            'manchester united fc',
            "men's soccer",
            "men's sports",
            'premier league',
            'professional soccer',
            'soccer',
            'sports',
            'united kingdom',
            'western europe',
            'wsoc',
          ],
          title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
        },
      ],
      page: 1,
      per_page: 1,
      total_count: 23,
    },
    required: [],
  })
  .openapi('EditorialImageContentDataList')

const EditorialImageLivefeedSchema = z
  .object({
    cover_item: EditorialCoverItemSchema.exactOptional(),
    created_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the livefeed was initially created' }),
    id: z.string().openapi({ description: 'Livefeed ID' }),
    name: z.string().openapi({ description: 'Name of the livefeed' }),
    total_item_count: z.int().openapi({ description: 'Total count of items in the livefeed' }),
  })
  .openapi({
    description: 'Metadata about editorial livefeed',
    example: {
      cover_item: {
        height: 117,
        id: '9763363q',
        url: 'https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg',
        width: 170,
      },
      created_time: '2018-07-17T12:42:03+00:00',
      id: '2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202',
      name: 'Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2',
      total_item_count: 38,
    },
    required: ['id', 'name', 'total_item_count'],
  })
  .openapi('EditorialImageLivefeed')

const EditorialLivefeedSchema = z
  .object({
    cover_item: EditorialCoverItemSchema.exactOptional(),
    created_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the livefeed was initially created' }),
    id: z.string().openapi({ description: 'Livefeed ID' }),
    name: z.string().openapi({ description: 'Name of the livefeed' }),
    total_item_count: z.int().openapi({ description: 'Total count of items in the livefeed' }),
  })
  .openapi({
    description: 'Metadata about editorial livefeed',
    example: {
      cover_item: {
        height: 117,
        id: '9763363q',
        url: 'https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg',
        width: 170,
      },
      created_time: '2018-07-17T12:42:03+00:00',
      id: '2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202',
      name: 'Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2',
      total_item_count: 38,
    },
    required: ['id', 'name', 'total_item_count'],
  })
  .openapi('EditorialLivefeed')

const EditorialImageLivefeedListSchema = z
  .object({
    data: z.array(EditorialLivefeedSchema).openapi({ description: 'Editorial livefeeds' }),
    message: z.string().exactOptional().openapi({ description: 'Optional error message' }),
    page: z.int().exactOptional().openapi({ description: 'Current page of the response' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z.int().openapi({ description: 'Total count of all results' }),
  })
  .openapi({
    description: 'List of editorial livefeeds',
    example: {
      data: [
        {
          cover_item: {
            height: 117,
            id: '9763363q',
            url: 'https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg',
            width: 170,
          },
          created_time: '2018-07-17T12:42:03+00:00',
          id: '2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202',
          name: 'Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2',
          total_item_count: 38,
        },
      ],
      page: 1,
      per_page: 1,
      total_count: 5300,
    },
    required: ['data', 'total_count'],
  })
  .openapi('EditorialImageLivefeedList')

const EditorialLivefeedListSchema = z
  .object({
    data: z.array(EditorialLivefeedSchema).openapi({ description: 'Editorial livefeeds' }),
    message: z.string().exactOptional().openapi({ description: 'Optional error message' }),
    page: z.int().exactOptional().openapi({ description: 'Current page of the response' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z.int().openapi({ description: 'Total count of all results' }),
  })
  .openapi({
    description: 'List of editorial livefeeds',
    example: {
      data: [
        {
          cover_item: {
            height: 117,
            id: '9763363q',
            url: 'https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg',
            width: 170,
          },
          created_time: '2018-07-17T12:42:03+00:00',
          id: '2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202',
          name: 'Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2',
          total_item_count: 38,
        },
      ],
      page: 1,
      per_page: 1,
      total_count: 56,
    },
    required: ['data', 'total_count'],
  })
  .openapi('EditorialLivefeedList')

const EditorialSearchResultsSchema = z
  .object({
    data: z.array(EditorialContentSchema).openapi({ description: 'Editorial items' }),
    message: z.string().exactOptional().openapi({ description: 'Optional error message' }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cursor value that represents the next page of results' }),
    page: z.int().exactOptional().openapi({ description: 'Current page of the response' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    prev: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cursor value that represents the previous page of results' }),
    search_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the search request' }),
    total_count: z.int().openapi({ description: 'Total count of all results' }),
  })
  .openapi({
    description: 'Editorial search results',
    example: {
      data: [
        {
          aspect: 1.621,
          assets: {
            medium_jpg: { display_name: 'Med', height: 617, is_licensable: true, width: 1000 },
            original: { display_name: 'Original', height: 3693, is_licensable: true, width: 5985 },
            small_jpg: { display_name: 'Small', height: 309, is_licensable: true, width: 500 },
            thumb_170: {
              height: 105,
              url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
              width: 170,
            },
            thumb_220: {
              height: 136,
              url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
              width: 220,
            },
            watermark_1500: {
              height: 926,
              url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
              width: 1500,
            },
            watermark_450: {
              height: 278,
              url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
              width: 450,
            },
          },
          byline: 'Jon Super/AP/Shutterstock',
          caption: '',
          categories: [{ name: 'Sport' }],
          date_taken: '2021-05-11',
          description:
            "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
          id: '10687730b',
          keywords: [
            'england',
            'europe',
            'leicester city fc',
            'manchester',
            'manchester united fc',
            "men's soccer",
            "men's sports",
            'premier league',
            'professional soccer',
            'soccer',
            'sports',
            'united kingdom',
            'western europe',
            'wsoc',
          ],
          title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
        },
      ],
      next: 'eyJ2IjoyLCJzIjoxLCJwIjpbMF19',
      per_page: 1,
      prev: '',
      search_id: 'BaMzOAkpHIvfnuWVRFs1ag',
      total_count: 46845,
    },
    required: ['data', 'total_count'],
  })
  .openapi('EditorialSearchResults')

const EditorialUpdatedContentSchema = z
  .object({
    aspect: z.number().exactOptional(),
    assets: EditorialAssetsSchema.exactOptional(),
    byline: z.string().exactOptional(),
    caption: z.string().exactOptional(),
    categories: z
      .array(EditorialCategorySchema)
      .exactOptional()
      .openapi({ description: 'List of categories' }),
    commercial_status: z
      .object({ reason: z.string().exactOptional(), status: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    created_time: z.iso.datetime({ offset: true }).exactOptional(),
    date_taken: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    id: z.string(),
    keywords: z.array(z.string()).exactOptional(),
    rights: z
      .object({ countries: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    special_instructions: z.string().exactOptional(),
    supplier_code: z.string().exactOptional(),
    title: z.string().exactOptional(),
    updated_time: z.iso.datetime({ offset: true }).exactOptional(),
    updates: z.array(z.string()).exactOptional(),
  })
  .openapi({
    description: 'Metadata about updated editorial content',
    example: {
      aspect: 1.481,
      assets: {
        medium_jpg: { display_name: 'Med', height: 675, is_licensable: true, width: 1000 },
        original: { display_name: 'Original', height: 3263, is_licensable: true, width: 4831 },
        small_jpg: { display_name: 'Small', height: 337, is_licensable: true, width: 500 },
        thumb_170: {
          height: 115,
          url: 'https://editorial01.shutterstock.com/thumb/9804979n/c4377a53/Shutterstock_9804979n.jpg',
          width: 170,
        },
        thumb_220: {
          height: 149,
          url: 'https://editorial01.shutterstock.com/thumb-220/9804979n/c57a68c7/Shutterstock_9804979n.jpg',
          width: 220,
        },
        watermark_1500: {
          height: 1500,
          url: 'https://editorial01.shutterstock.com/wm-preview-1500/9933285a/ab82fea4/Shutterstock_9933285a.jpg',
          width: 1040,
        },
        watermark_450: {
          height: 304,
          url: 'https://editorial01.shutterstock.com/wm-preview-450/9804979n/37d19dce/Shutterstock_9804979n.jpg',
          width: 450,
        },
      },
      byline: 'ALEX HOFFORD/EPA-EFE/Shutterstock',
      caption: '',
      categories: [],
      commercial_status: { status: 'available' },
      date_taken: '2018-08-24',
      description:
        'Members of the TyLoo e-Sports team from China prepare to face off against the Kinguin e-Sports team from Poland at the ICBC (Asia) e-Sports and Music Festival Hong Kong 2018, Hong Kong, China, 24 August 2018. The festival runs from 24 to 26 August with professional gamers from around the world competing in international e-sports tournaments.',
      id: '9804979n',
      keywords: [],
      rights: { countries: 'CAN,+DEU,+GBR,+USA,-*' },
      supplier_code: 'EPA',
      title: 'Hong Kong kicks off international e-Sports competition, China - 24 Aug 2018',
      updated_time: '2019-07-15T20:04:44-04:00',
      updates: ['addition'],
    },
    required: ['id'],
  })
  .openapi('EditorialUpdatedContent')

const EditorialUpdatedResultsSchema = z
  .object({
    data: z
      .array(EditorialUpdatedContentSchema)
      .openapi({ description: 'Editorial updated items' }),
    message: z.string().exactOptional().openapi({ description: 'Optional error message' }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cursor value that represents the next page of results' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    prev: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cursor value that represents the previous page of results' }),
  })
  .openapi({
    description: 'Editorial updated results',
    example: {
      data: [
        {
          aspect: 1.481,
          assets: {
            medium_jpg: { display_name: 'Med', height: 675, is_licensable: true, width: 1000 },
            original: { display_name: 'Original', height: 3263, is_licensable: true, width: 4831 },
            small_jpg: { display_name: 'Small', height: 337, is_licensable: true, width: 500 },
            thumb_170: {
              height: 115,
              url: 'https://editorial01.shutterstock.com/thumb/9804979n/c4377a53/Shutterstock_9804979n.jpg',
              width: 170,
            },
            thumb_220: {
              height: 149,
              url: 'https://editorial01.shutterstock.com/thumb-220/9804979n/c57a68c7/Shutterstock_9804979n.jpg',
              width: 220,
            },
            watermark_1500: {
              height: 1500,
              url: 'https://editorial01.shutterstock.com/wm-preview-1500/9933285a/ab82fea4/Shutterstock_9933285a.jpg',
              width: 1040,
            },
            watermark_450: {
              height: 304,
              url: 'https://editorial01.shutterstock.com/wm-preview-450/9804979n/37d19dce/Shutterstock_9804979n.jpg',
              width: 450,
            },
          },
          byline: 'ALEX HOFFORD/EPA-EFE/Shutterstock',
          caption: '',
          categories: [],
          commercial_status: { status: 'available' },
          date_taken: '2018-08-24',
          description:
            'Members of the TyLoo e-Sports team from China prepare to face off against the Kinguin e-Sports team from Poland at the ICBC (Asia) e-Sports and Music Festival Hong Kong 2018, Hong Kong, China, 24 August 2018. The festival runs from 24 to 26 August with professional gamers from around the world competing in international e-sports tournaments.',
          id: '9804979n',
          keywords: [],
          rights: { countries: 'CAN,+DEU,+GBR,+USA,-*' },
          supplier_code: 'EPA',
          title: 'Hong Kong kicks off international e-Sports competition, China - 24 Aug 2018',
          updated_time: '2019-07-15T20:04:44-04:00',
          updates: ['addition'],
        },
      ],
      next: 'eyJ2IjoxLCJzIjoxfQ==',
      per_page: 1,
      prev: '',
    },
    required: ['data'],
  })
  .openapi('EditorialUpdatedResults')

const VideoSizeDetailsSchema = z
  .object({
    display_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of this video size' }),
    file_size: z
      .int()
      .exactOptional()
      .openapi({ description: 'File size (in bytes) of this video size' }),
    format: z.string().exactOptional().openapi({ description: 'Format of this video size' }),
    fps: z
      .number()
      .exactOptional()
      .openapi({ description: 'Frames per second of this video size' }),
    height: z.int().exactOptional().openapi({ description: 'Height of this video size' }),
    is_licensable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not videos can be licensed in this video size' }),
    width: z.int().exactOptional().openapi({ description: 'Width of this video size' }),
  })
  .openapi({
    description: 'Video asset information',
    example: {
      display_name: 'Original HD',
      file_size: 110359552,
      format: 'avc1',
      fps: 29.97,
      height: 1080,
      is_licensable: true,
      width: 1920,
    },
    required: [],
  })
  .openapi('VideoSizeDetails')

const VideoPreviewUrlSchema = z
  .object({ url: z.string().openapi({ description: 'Direct URL to the image' }) })
  .openapi({
    description: 'Video preview information',
    example: {
      url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
    },
    required: ['url'],
  })
  .openapi('VideoPreviewUrl')

const EditorialVideoAssetsSchema = z
  .object({
    original: VideoSizeDetailsSchema.exactOptional(),
    preview_mp4: VideoPreviewUrlSchema.exactOptional(),
    preview_webm: VideoPreviewUrlSchema.exactOptional(),
    thumb_jpg: VideoPreviewUrlSchema.exactOptional(),
  })
  .openapi({
    description: 'Asset information, including size and thumbnail URLs',
    example: {
      original: {
        display_name: 'HD',
        file_size: 82233387,
        format: 'avc1',
        fps: 30,
        height: 1080,
        is_licensable: true,
        width: 1080,
      },
      preview_mp4: {
        url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4',
      },
      preview_webm: {
        url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm',
      },
      thumb_jpg: {
        url: 'https://qa.editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg',
      },
    },
    required: [],
  })
  .openapi('EditorialVideoAssets')

const EditorialVideoCategoryResultsSchema = z
  .object({ data: z.array(EditorialCategorySchema).exactOptional() })
  .openapi({
    description: 'List of editorial video categories',
    example: {
      data: [{ name: 'Animal' }, { name: 'Awards' }, { name: 'Art' }, { name: 'Film Stills' }],
    },
    required: [],
  })
  .openapi('EditorialVideoCategoryResults')

const EditorialVideoContentSchema = z
  .object({
    aspect: z.number().exactOptional(),
    assets: EditorialVideoAssetsSchema.exactOptional(),
    byline: z.string().exactOptional(),
    caption: z.string().exactOptional(),
    categories: z
      .array(EditorialCategorySchema)
      .exactOptional()
      .openapi({ description: 'List of categories' }),
    date_taken: z.iso.date().exactOptional(),
    description: z.string().exactOptional(),
    id: z.string(),
    keywords: z.array(z.string()).exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({
    description: 'Metadata about editorial content',
    example: {
      aspect: 1,
      assets: {
        original: {
          display_name: 'HD',
          file_size: 82233387,
          format: 'avc1',
          fps: 30,
          height: 1080,
          is_licensable: true,
          width: 1080,
        },
        preview_mp4: {
          url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4',
        },
        preview_webm: {
          url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm',
        },
        thumb_jpg: {
          url: 'https://qa.editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg',
        },
      },
      byline: 'ViralHog/Shutterstock',
      caption: '',
      categories: [],
      date_taken: '2020-11-13',
      description:
        'Info from Licensor: "Peeps the Canadian Goose has been raised with our family since a gosling. Peeps has made appearances on our local news channels, TV shows, and local newspapers. He has been trained to fly next to four wheelers, jet ski\'s, and boats. He has brought joy to many people during the pandemic including those with cancer."',
      id: '10679854a',
      keywords: [
        '2020',
        'adorable',
        'birds',
        'bizarre',
        'canadian goose',
        'cute',
        'domesticated animals',
        'entertainment',
        'feel good',
        'flew',
        'flies',
        'fly',
        'flying',
        'fun',
        'goose',
        'jet skis',
        'nature',
        'odd',
        'pets',
        'played',
        'playing',
        'plays',
        'prior lake',
        'sports',
        'strange',
        'sweet',
        'usa',
        'viralhog',
        'virals',
        'water sports',
        'weird',
      ],
      title: 'Peeps the Goose Has a Blast on a Jet Ski, Prior Lake, Minnesota, USA - 13 Nov 2020',
    },
    required: ['id'],
  })
  .openapi('EditorialVideoContent')

const EditorialVideoSearchResultsSchema = z
  .object({
    data: z.array(EditorialVideoContentSchema).openapi({ description: 'Editorial items' }),
    message: z.string().exactOptional().openapi({ description: 'Optional error message' }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cursor value that represents the next page of results' }),
    page: z.int().exactOptional().openapi({ description: 'Current page of the response' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    prev: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cursor value that represents the previous page of results' }),
    search_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the search request' }),
    total_count: z.int().openapi({ description: 'Total count of all results' }),
  })
  .openapi({
    description: 'Editorial search results',
    example: {
      data: [
        {
          aspect: 1,
          assets: {
            original: {
              display_name: 'HD',
              file_size: 82233387,
              format: 'avc1',
              fps: 30,
              height: 1080,
              is_licensable: true,
              width: 1080,
            },
            preview_mp4: {
              url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4',
            },
            preview_webm: {
              url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm',
            },
            thumb_jpg: {
              url: 'https://qa.editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg',
            },
          },
          byline: 'ViralHog/Shutterstock',
          caption: '',
          categories: [],
          date_taken: '2020-11-13',
          description:
            'Info from Licensor: "Peeps the Canadian Goose has been raised with our family since a gosling. Peeps has made appearances on our local news channels, TV shows, and local newspapers. He has been trained to fly next to four wheelers, jet ski\'s, and boats. He has brought joy to many people during the pandemic including those with cancer."',
          id: '10679854a',
          keywords: [
            '2020',
            'adorable',
            'birds',
            'bizarre',
            'canadian goose',
            'cute',
            'domesticated animals',
            'entertainment',
            'feel good',
            'flew',
            'flies',
            'fly',
            'flying',
            'fun',
            'goose',
            'jet skis',
            'nature',
            'odd',
            'pets',
            'played',
            'playing',
            'plays',
            'prior lake',
            'sports',
            'strange',
            'sweet',
            'usa',
            'viralhog',
            'virals',
            'water sports',
            'weird',
          ],
          title:
            'Peeps the Goose Has a Blast on a Jet Ski, Prior Lake, Minnesota, USA - 13 Nov 2020',
        },
      ],
      next: 'eyJ2IjoyLCJzIjoyMCwicCI6WzBdfQ==',
      per_page: 1,
      prev: '',
      search_id: 'zhmz9zLmpQehdTPvg8cacQ',
      total_count: 331,
    },
    required: ['data', 'total_count'],
  })
  .openapi('EditorialVideoSearchResults')

const FeaturedCollectionCoverItemSchema = z
  .object({ url: z.string().openapi({ description: 'URL of the collection cover item' }) })
  .openapi({
    description: 'Featured collection cover item metadata',
    example: {
      url: 'https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg',
    },
    required: ['url'],
  })
  .openapi('FeaturedCollectionCoverItem')

const FeaturedCollectionSchema = z
  .object({
    cover_item: FeaturedCollectionCoverItemSchema.exactOptional(),
    created_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date that the collection was created' }),
    hero_item: FeaturedCollectionCoverItemSchema.exactOptional().openapi({
      description:
        'Top-level item that is meant as a cover asset, as the first asset seen to represent the collection',
    }),
    id: z.string().openapi({ description: 'Collection ID' }),
    items_updated_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date that an item in the collection was last added or removed' }),
    name: z.string().openapi({ description: 'Name of the collection' }),
    share_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique share url for the collection' }),
    total_item_count: z.int().openapi({ description: 'Total number of items in the collection' }),
    updated_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date that the collection was last modified' }),
  })
  .openapi({
    description: 'Metadata about a featured collection',
    example: {
      cover_item: {
        url: 'https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg',
      },
      created_time: '2021-07-07T13:10:24.000Z',
      id: '19853',
      items_updated_time: '2021-07-08T12:33:37.000Z',
      name: 'Exercise & Fitness',
      total_item_count: 82,
      updated_time: '2021-07-07T13:10:24.000Z',
    },
    required: ['id', 'name', 'total_item_count'],
  })
  .openapi('FeaturedCollection')

const FeaturedCollectionDataListSchema = z
  .object({
    data: z
      .array(FeaturedCollectionSchema)
      .exactOptional()
      .openapi({ description: 'Featured collections' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'List of featured collections',
    example: {
      data: [
        {
          cover_item: {
            url: 'https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg',
          },
          created_time: '2021-07-07T13:10:24.000Z',
          id: '19853',
          items_updated_time: '2021-07-08T12:33:37.000Z',
          name: 'Exercise & Fitness',
          total_item_count: 82,
          updated_time: '2021-07-07T13:10:24.000Z',
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 123455,
    },
    required: [],
  })
  .openapi('FeaturedCollectionDataList')

const GenreListSchema = z
  .strictObject({ data: z.array(z.string()).openapi({ description: 'List of genres' }) })
  .openapi({
    description: 'List of audio genres',
    example: {
      data: ['Rock', 'Pop > Singer-Songwriter', 'Pop > Synth Pop', 'Production / Film Scores'],
    },
    required: ['data'],
  })
  .openapi('GenreList')

const ISOCountryCodeSchema = z
  .xor([
    z.enum([
      'ABW',
      'AFG',
      'AGO',
      'AIA',
      'ALA',
      'ALB',
      'AND',
      'ARE',
      'ARG',
      'ARM',
      'ASM',
      'ATA',
      'ATF',
      'ATG',
      'AUS',
      'AUT',
      'AZE',
      'BDI',
      'BEL',
      'BEN',
      'BES',
      'BFA',
      'BGD',
      'BGR',
      'BHR',
      'BHS',
      'BIH',
      'BLM',
      'BLR',
      'BLZ',
      'BMU',
      'BOL',
      'BRA',
      'BRB',
      'BRN',
      'BTN',
      'BVT',
      'BWA',
      'CAF',
      'CAN',
      'CCK',
      'CHE',
      'CHL',
      'CHN',
      'CIV',
      'CMR',
      'COD',
      'COG',
      'COK',
      'COL',
      'COM',
      'CPV',
      'CRI',
      'CUB',
      'CUW',
      'CXR',
      'CYM',
      'CYP',
      'CZE',
      'DEU',
      'DJI',
      'DMA',
      'DNK',
      'DOM',
      'DZA',
      'ECU',
      'EGY',
      'ERI',
      'ESH',
      'ESP',
      'EST',
      'ETH',
      'FIN',
      'FJI',
      'FLK',
      'FRA',
      'FRO',
      'FSM',
      'GAB',
      'GBR',
      'GEO',
      'GGY',
      'GHA',
      'GIB',
      'GIN',
      'GLP',
      'GMB',
      'GNB',
      'GNQ',
      'GRC',
      'GRD',
      'GRL',
      'GTM',
      'GUF',
      'GUM',
      'GUY',
      'HKG',
      'HMD',
      'HND',
      'HRV',
      'HTI',
      'HUN',
      'IDN',
      'IMN',
      'IND',
      'IOT',
      'IRL',
      'IRN',
      'IRQ',
      'ISL',
      'ISR',
      'ITA',
      'JAM',
      'JEY',
      'JOR',
      'JPN',
      'KAZ',
      'KEN',
      'KGZ',
      'KHM',
      'KIR',
      'KNA',
      'KOR',
      'KWT',
      'LAO',
      'LBN',
      'LBR',
      'LBY',
      'LCA',
      'LIE',
      'LKA',
      'LSO',
      'LTU',
      'LUX',
      'LVA',
      'MAC',
      'MAF',
      'MAR',
      'MCO',
      'MDA',
      'MDG',
      'MDV',
      'MEX',
      'MHL',
      'MKD',
      'MLI',
      'MLT',
      'MMR',
      'MNE',
      'MNG',
      'MNP',
      'MOZ',
      'MRT',
      'MSR',
      'MTQ',
      'MUS',
      'MWI',
      'MYS',
      'MYT',
      'NAM',
      'NCL',
      'NER',
      'NFK',
      'NGA',
      'NIC',
      'NIU',
      'NLD',
      'NOR',
      'NPL',
      'NRU',
      'NZL',
      'OMN',
      'PAK',
      'PAN',
      'PCN',
      'PER',
      'PHL',
      'PLW',
      'PNG',
      'POL',
      'PRI',
      'PRK',
      'PRT',
      'PRY',
      'PSE',
      'PYF',
      'QAT',
      'REU',
      'ROU',
      'RUS',
      'RWA',
      'SAU',
      'SDN',
      'SEN',
      'SGP',
      'SGS',
      'SHN',
      'SJM',
      'SLB',
      'SLE',
      'SLV',
      'SMR',
      'SOM',
      'SPM',
      'SRB',
      'SSD',
      'STP',
      'SUR',
      'SVK',
      'SVN',
      'SWE',
      'SWZ',
      'SXM',
      'SYC',
      'SYR',
      'TCA',
      'TCD',
      'TGO',
      'THA',
      'TJK',
      'TKL',
      'TKM',
      'TLS',
      'TON',
      'TTO',
      'TUN',
      'TUR',
      'TUV',
      'TWN',
      'TZA',
      'UGA',
      'UKR',
      'UMI',
      'URY',
      'USA',
      'UZB',
      'VAT',
      'VCT',
      'VEN',
      'VGB',
      'VIR',
      'VNM',
      'VUT',
      'WLF',
      'WSM',
      'YEM',
      'ZAF',
      'ZMB',
      'ZWE',
    ]),
    z.enum([
      'AF',
      'AX',
      'AL',
      'DZ',
      'AS',
      'AD',
      'AO',
      'AI',
      'AQ',
      'AG',
      'AR',
      'AM',
      'AW',
      'AU',
      'AT',
      'AZ',
      'BS',
      'BH',
      'BD',
      'BB',
      'BY',
      'BE',
      'BZ',
      'BJ',
      'BM',
      'BT',
      'BO',
      'BA',
      'BW',
      'BV',
      'BR',
      'IO',
      'BN',
      'BG',
      'BF',
      'BI',
      'KH',
      'CM',
      'CA',
      'CV',
      'KY',
      'CF',
      'TD',
      'CL',
      'CN',
      'CX',
      'CC',
      'CO',
      'KM',
      'CG',
      'CD',
      'CK',
      'CR',
      'CI',
      'HR',
      'CU',
      'CY',
      'CZ',
      'DK',
      'DJ',
      'DM',
      'DO',
      'EC',
      'EG',
      'SV',
      'GQ',
      'ER',
      'EE',
      'ET',
      'FK',
      'FO',
      'FJ',
      'FI',
      'FR',
      'GF',
      'PF',
      'TF',
      'GA',
      'GM',
      'GE',
      'DE',
      'GH',
      'GI',
      'GR',
      'GL',
      'GD',
      'GP',
      'GU',
      'GT',
      'GG',
      'GN',
      'GW',
      'GY',
      'HT',
      'HM',
      'VA',
      'HN',
      'HK',
      'HU',
      'IS',
      'IN',
      'ID',
      'IR',
      'IQ',
      'IE',
      'IM',
      'IL',
      'IT',
      'JM',
      'JP',
      'JE',
      'JO',
      'KZ',
      'KE',
      'KI',
      'KR',
      'KW',
      'KG',
      'LA',
      'LV',
      'LB',
      'LS',
      'LR',
      'LY',
      'LI',
      'LT',
      'LU',
      'MO',
      'MK',
      'MG',
      'MW',
      'MY',
      'MV',
      'ML',
      'MT',
      'MH',
      'MQ',
      'MR',
      'MU',
      'YT',
      'MX',
      'FM',
      'MD',
      'MC',
      'MN',
      'ME',
      'MS',
      'MA',
      'MZ',
      'MM',
      'NA',
      'NR',
      'NP',
      'NL',
      'AN',
      'NC',
      'NZ',
      'NI',
      'NE',
      'NG',
      'NU',
      'NF',
      'MP',
      'NO',
      'OM',
      'PK',
      'PW',
      'PS',
      'PA',
      'PG',
      'PY',
      'PE',
      'PH',
      'PN',
      'PL',
      'PT',
      'PR',
      'QA',
      'RE',
      'RO',
      'RU',
      'RW',
      'BL',
      'SH',
      'KN',
      'LC',
      'MF',
      'PM',
      'VC',
      'WS',
      'SM',
      'ST',
      'SA',
      'SN',
      'RS',
      'SC',
      'SL',
      'SG',
      'SK',
      'SI',
      'SB',
      'SO',
      'ZA',
      'GS',
      'ES',
      'LK',
      'SD',
      'SR',
      'SJ',
      'SZ',
      'SE',
      'CH',
      'SY',
      'TW',
      'TJ',
      'TZ',
      'TH',
      'TL',
      'TG',
      'TK',
      'TO',
      'TT',
      'TN',
      'TR',
      'TM',
      'TC',
      'TV',
      'UG',
      'UA',
      'AE',
      'GB',
      'US',
      'UM',
      'UY',
      'UZ',
      'VU',
      'VE',
      'VN',
      'VG',
      'VI',
      'WF',
      'EH',
      'YE',
      'ZM',
      'ZW',
    ]),
  ])
  .openapi({
    description: 'A valid ISO 3166-1 Alpha-2 or ISO 3166-1 Alpha-3 code.',
    example: 'USA',
  })
  .openapi('ISOCountryCode')

const ImageCreateRequestSchema = z
  .object({
    base64_image: z
      .string()
      .openapi({
        description:
          'A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height',
      }),
  })
  .openapi({
    description: 'Request to upload an image',
    example: {
      base64_image:
        'R0lGODlhgACAAPcAAEwiBLyaLOzNUNmWFNjOrNSuN7x6PPzqeOTMgfKSDMyuTPzwsdi2dHwuBPzbVu',
    },
    required: ['base64_image'],
  })
  .openapi('ImageCreateRequest')

const ImageCreateResponseSchema = z
  .object({ id: z.string() })
  .openapi({
    description: 'Image upload information',
    example: { id: 'Udb14e1c3540bdbf82b4b3fe12d3a44f2' },
    required: ['id'],
  })
  .openapi('ImageCreateResponse')

const ImageDataListSchema = z
  .object({
    data: z.array(ImageSchema).exactOptional().openapi({ description: 'Images' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'List of images',
    example: {
      data: [
        {
          aspect: 1.5,
          assets: {
            huge_thumb: {
              height: 260,
              url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
              width: 390,
            },
            large_thumb: {
              height: 100,
              url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
              width: 150,
            },
            preview: {
              height: 300,
              url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
              width: 450,
            },
            preview_1000: {
              height: 667,
              url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
              width: 1000,
            },
            preview_1500: {
              height: 1000,
              url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
              width: 1500,
            },
            small_thumb: {
              height: 67,
              url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
              width: 100,
            },
          },
          contributor: { id: '250738318' },
          description: 'cropped image of woman gardening',
          has_model_release: true,
          id: '1572478477',
          image_type: 'photo',
          media_type: 'image',
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 123455,
    },
    required: [],
  })
  .openapi('ImageDataList')

const InstrumentSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The id of the instrument' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the instrument' }),
    previews: z
      .array(PreviewSchema)
      .exactOptional()
      .openapi({ description: 'Preview of the instrument' }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'List of tags' }),
  })
  .openapi({
    description: 'Information about an musical instrument',
    example: {
      id: 'bright_roomy_kit',
      name: 'Bright Roomy Kit',
      previews: [
        {
          content_type: 'audio/mp3',
          url: 'https://public-cdn.ampermusic.com/instruments/previews/bright_roomy_kit_v1.mp3',
        },
      ],
      tags: [
        'Percussion',
        'Aux Percs',
        'Set Cymbals',
        'Crash',
        'Open',
        'Ride',
        'Set Hi-Hat',
        'Set Kicks',
        'Stick Snare',
        'Quad Toms',
        'Roto Toms',
      ],
    },
    required: [],
  })
  .openapi('Instrument')

const InstrumentListSchema = z
  .strictObject({ data: z.array(z.string()).openapi({ description: 'List of instruments' }) })
  .openapi({
    description: 'List of instruments',
    example: { data: ['Orchestra', 'Organ', 'Oud', 'Pads', 'Electric Guitar'] },
    required: ['data'],
  })
  .openapi('InstrumentList')

const InstrumentsListResultSchema = z
  .object({
    data: z.array(InstrumentSchema).exactOptional().openapi({ description: 'List of instrumnets' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
  })
  .openapi({
    description: 'Image search results',
    example: {
      data: [
        {
          id: 'bright_roomy_kit',
          name: 'Bright Roomy Kit',
          previews: [
            {
              content_type: 'audio/mp3',
              url: 'https://public-cdn.ampermusic.com/instruments/previews/bright_roomy_kit_v1.mp3',
            },
          ],
          tags: [
            'Percussion',
            'Aux Percs',
            'Set Cymbals',
            'Crash',
            'Open',
            'Ride',
            'Set Hi-Hat',
            'Set Kicks',
            'Stick Snare',
            'Quad Toms',
            'Roto Toms',
          ],
        },
      ],
      page: 1,
      per_page: 5,
    },
    required: [],
  })
  .openapi('InstrumentsListResult')

const KeywordDataListSchema = z
  .object({
    data: z.array(z.string()).exactOptional().openapi({ description: 'Keywords' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
  })
  .openapi({
    description: 'List of keywords',
    example: {
      data: [
        'nature',
        'wildlife',
        'animal',
        'cute',
        'bamboo',
        'panda',
        'china',
        'wild',
        'endangered',
        'black',
        'bear',
      ],
    },
    required: [],
  })
  .openapi('KeywordDataList')

const LicenseAudioSchema = z
  .object({
    audio_id: z.string().openapi({ description: 'ID of the track being licensed' }),
    license: z
      .enum([
        'audio_platform',
        'premier_music_basic',
        'premier_music_extended',
        'premier_music_pro',
        'premier_music_comp',
        'asset_all_music',
      ])
      .exactOptional()
      .openapi({ description: 'Type of license' }),
    search_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the search that led to this licensing event' }),
  })
  .openapi({
    description: 'An audio track in a licensing request',
    example: { audio_id: '123456789', license: 'audio_platform', search_id: '987654321' },
    required: ['audio_id'],
  })
  .openapi('LicenseAudio')

const LicenseAudioRequestSchema = z
  .object({
    audio: z
      .array(LicenseAudioSchema)
      .max(50)
      .openapi({ description: 'List of audio tracks to license' }),
  })
  .openapi({
    description: 'Audio license request data',
    example: {
      audio: [
        { audio_id: '591623', license: 'audio_platform', metadata: { customer_id: '12345' } },
      ],
    },
    required: ['audio'],
  })
  .openapi('LicenseAudioRequest')

const LicenseAudioResultSchema = z
  .object({
    allotment_charge: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of credits that this licensing event used' }),
    audio_id: z.string().openapi({ description: 'ID of the track that was licensed' }),
    download: AudioUrlSchema.exactOptional(),
    error: z.string().exactOptional().openapi({ description: 'Error information if applicable' }),
    license_id: z.string().exactOptional().openapi({ description: 'ID of the license event' }),
  })
  .openapi({
    description: 'The response to a licensing request for an audio track',
    example: {
      allotment_charge: 1,
      audio_id: '123456789',
      download: { url: 'http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav' },
      license_id: 'abcdef123456789ghijklmn',
    },
    required: ['audio_id'],
  })
  .openapi('LicenseAudioResult')

const LicenseAudioResultDataListSchema = z
  .object({
    data: z
      .array(LicenseAudioResultSchema)
      .exactOptional()
      .openapi({ description: 'License results' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'List of audio license results',
    example: {
      data: [
        {
          allotment_charge: 1,
          audio_id: '123456789',
          download: { url: 'http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav' },
          license_id: 'abcdef123456789ghijklmn',
        },
      ],
    },
    required: [],
  })
  .openapi('LicenseAudioResultDataList')

const LicenseRequestMetadataSchema = z
  .object({})
  .refine((val) => Object.keys(val).length <= 4)
  .openapi({
    description:
      'Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder',
    example: { customer_id: '12345', geo_location: 'US', number_viewed: '15', search_term: 'dog' },
  })
  .openapi('LicenseRequestMetadata')

const LicenseEditorialContentSchema = z
  .object({
    editorial_id: z.string().openapi({ description: 'Editorial ID' }),
    license: z.string().openapi({ description: 'License agreement to use for licensing' }),
    metadata: LicenseRequestMetadataSchema.exactOptional(),
    size: z
      .enum(['small', 'medium', 'original'])
      .default('original')
      .exactOptional()
      .openapi({ description: 'Asset size to download' }),
  })
  .openapi({
    description: 'Individual editorial content to license',
    example: {
      editorial_id: '10687730b',
      license: 'premier_editorial_comp',
      metadata: {
        customer_id: '12345',
        geo_location: 'US',
        number_viewed: '15',
        search_term: 'dog',
      },
      size: 'original',
    },
    required: ['editorial_id', 'license'],
  })
  .openapi('LicenseEditorialContent')

const LicenseEditorialContentRequestSchema = z
  .object({
    country: ISOCountryCodeSchema.openapi({
      description:
        'Mandatory country code for where the editorial content will be distributed; this value is used for rights checks',
      example: 'USA',
    }),
    editorial: z
      .array(LicenseEditorialContentSchema)
      .openapi({ description: 'Editorial content to license' }),
  })
  .openapi({
    description: 'License editorial content request',
    example: {
      country: 'USA',
      editorial: [
        {
          editorial_id: '10687730b',
          license: 'premier_editorial_comp',
          metadata: {
            customer_id: '12345',
            geo_location: 'US',
            number_viewed: '15',
            search_term: 'dog',
          },
          size: 'original',
        },
      ],
    },
    required: ['country', 'editorial'],
  })
  .openapi('LicenseEditorialContentRequest')

const UrlSchema = z
  .object({
    url: z
      .string()
      .openapi({
        description: 'URL that can be used to download the unwatermarked, licensed asset',
      }),
  })
  .openapi({
    description: 'URL object',
    example: {
      url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg',
    },
    required: ['url'],
  })
  .openapi('Url')

const LicenseEditorialContentResultSchema = z
  .object({
    allotment_charge: z
      .int()
      .exactOptional()
      .openapi({
        description: 'For pre-paid plans, how many credits were used for the item license',
      }),
    download: UrlSchema.exactOptional().openapi({
      description: 'Information that is needed to download the image',
    }),
    editorial_id: z.string().openapi({ description: 'Editorial ID' }),
    error: z.string().exactOptional(),
  })
  .openapi({
    description: 'The response to a licensing request for editorial content',
    example: {
      allotment_charge: 1,
      download: {
        url: 'https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].jpg?Expires=1524717323',
      },
      editorial_id: '69656358',
    },
    required: ['editorial_id'],
  })
  .openapi('LicenseEditorialContentResult')

const LicenseEditorialContentResultsSchema = z
  .object({
    data: z
      .array(LicenseEditorialContentResultSchema)
      .exactOptional()
      .openapi({ description: 'License results' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z.string().exactOptional().openapi({ description: 'Optional error message' }),
    page: z.int().exactOptional().openapi({ description: 'Current page of the response' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z.int().exactOptional().openapi({ description: 'Total count of all results' }),
  })
  .openapi({
    description: 'List of editorial license results',
    example: {
      data: [
        {
          allotment_charge: 1,
          download: {
            url: 'https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].jpg?Expires=1524717323',
          },
          editorial_id: '69656358',
        },
      ],
      page: 1,
      per_page: 1,
      total_count: 12,
    },
    required: [],
  })
  .openapi('LicenseEditorialContentResults')

const LicenseEditorialVideoContentSchema = z
  .object({
    editorial_id: z.string().openapi({ description: 'Editorial ID' }),
    license: z
      .enum([
        'premier_editorial_video_digital_only',
        'premier_editorial_video_all_media',
        'premier_editorial_video_all_media_single_territory',
        'premier_editorial_video_comp',
      ])
      .openapi({ description: 'License agreement to use for licensing' }),
    metadata: LicenseRequestMetadataSchema.exactOptional(),
    size: z
      .literal('original')
      .default('original')
      .exactOptional()
      .openapi({ description: 'Asset size to download' }),
  })
  .openapi({
    description: 'Individual editorial video content to license',
    example: {
      editorial_id: '10679854a',
      license: 'premier_editorial_video_digital_only',
      metadata: { purchase_order: '12345' },
      size: 'original',
    },
    required: ['editorial_id', 'license'],
  })
  .openapi('LicenseEditorialVideoContent')

const LicenseEditorialVideoContentRequestSchema = z
  .object({
    country: ISOCountryCodeSchema.openapi({
      description:
        'Mandatory country code for where the editorial content will be distributed; this value is used for rights checks',
      example: 'USA',
    }),
    editorial: z
      .array(LicenseEditorialVideoContentSchema)
      .openapi({ description: 'Editorial content to license' }),
  })
  .openapi({
    description: 'License editorial video content request',
    example: {
      country: 'USA',
      editorial: [
        {
          editorial_id: '10679854a',
          license: 'premier_editorial_video_digital_only',
          metadata: { purchase_order: '12345' },
          size: 'original',
        },
      ],
    },
    required: ['country', 'editorial'],
  })
  .openapi('LicenseEditorialVideoContentRequest')

const LicenseFormatSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the license' }),
    format: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Format or extension of the media, such as mpeg for videos or jpeg for images',
      }),
    media_type: z
      .enum(['image', 'video', 'audio', 'editorial'])
      .exactOptional()
      .openapi({ description: 'Media type of the license' }),
    min_resolution: z
      .int()
      .exactOptional()
      .openapi({ description: 'Width of the media, in pixels, allowed by this license' }),
    size: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Keyword that details the size of the media, such as hd or sd for video, huge or vector for images',
      }),
  })
  .openapi({
    description: 'Description of a license',
    example: {
      description: 'Med',
      format: 'jpg',
      media_type: 'image',
      min_resolution: 1000,
      size: 'medium',
    },
    required: [],
  })
  .openapi('LicenseFormat')

const LicenseImageSchema = z
  .object({
    auth_cookie: CookieSchema.exactOptional().openapi({ description: 'Cookie object' }),
    custom_dimensions: CustomSizeDimensionsSchema.exactOptional(),
    editorial_acknowledgement: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set to true to acknowledge the editorial agreement' }),
    format: z
      .literal('jpg')
      .default('jpg')
      .exactOptional()
      .openapi({ description: '(Deprecated) Image format to download' }),
    image_id: z.string().openapi({ description: 'Image ID' }),
    metadata: LicenseRequestMetadataSchema.exactOptional(),
    price: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34',
      }),
    search_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the search that led to this licensing transaction' }),
    show_modal: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: '(Deprecated)' }),
    size: z
      .enum(['small', 'medium', 'huge', 'custom'])
      .exactOptional()
      .openapi({ description: 'Image size to download' }),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the subscription to use for the download.' }),
    verification_code: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: '(Deprecated)' }),
  })
  .openapi({
    description: 'Data required to license an image',
    example: {
      editorial_acknowledgement: true,
      format: 'jpg',
      image_id: '123456789',
      metadata: {
        customer_id: '12345',
        geo_location: 'US',
        number_viewed: '15',
        search_term: 'dog',
      },
      price: 12.34,
      show_modal: true,
      size: 'small',
      subscription_id: 's12345678',
    },
    required: ['image_id'],
  })
  .openapi('LicenseImage')

const LicenseImageVectorSchema = z
  .object({
    auth_cookie: CookieSchema.exactOptional().openapi({ description: 'Cookie object' }),
    editorial_acknowledgement: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set to true to acknowledge the editorial agreement' }),
    format: z
      .literal('eps')
      .default('eps')
      .exactOptional()
      .openapi({ description: '(Deprecated) Image format to download' }),
    image_id: z.string().openapi({ description: 'Image ID' }),
    metadata: LicenseRequestMetadataSchema.exactOptional(),
    price: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34',
      }),
    search_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the search that led to this licensing transaction' }),
    show_modal: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: '(Deprecated)' }),
    size: z.literal('vector').exactOptional().openapi({ description: 'Image size to download' }),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the subscription to use for the download.' }),
    verification_code: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: '(Deprecated)' }),
  })
  .openapi({
    description: 'Data required to license an image',
    example: {
      editorial_acknowledgement: true,
      format: 'eps',
      image_id: '123456789',
      metadata: {
        customer_id: '12345',
        geo_location: 'US',
        number_viewed: '15',
        search_term: 'dog',
      },
      price: 12.34,
      show_modal: true,
      size: 'vector',
      subscription_id: 's12345678',
    },
    required: ['image_id'],
  })
  .openapi('LicenseImageVector')

const LicenseImageRequestSchema = z
  .object({
    images: z
      .array(z.union([LicenseImageSchema, LicenseImageVectorSchema]))
      .max(50)
      .openapi({ description: 'Images to create licenses for' }),
  })
  .openapi({
    description: 'Image license request data',
    example: {
      images: [
        {
          editorial_acknowledgement: true,
          format: 'jpg',
          image_id: '123456789',
          metadata: {
            customer_id: '12345',
            geo_location: 'US',
            number_viewed: '15',
            search_term: 'dog',
          },
          price: 12.34,
          show_modal: true,
          size: 'small',
          subscription_id: 's12345678',
        },
      ],
    },
    required: ['images'],
  })
  .openapi('LicenseImageRequest')

const PriceSchema = z
  .object({
    local_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Floating-point amount of the calculated rev-share price in the currency local_currency',
      }),
    local_currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currency of the rev-share price that was calculated' }),
  })
  .openapi({
    description: 'Price',
    example: { local_amount: 12.34, local_currency: 'EUR' },
    required: [],
  })
  .openapi('Price')

const LicenseImageResultSchema = z
  .object({
    allotment_charge: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of credits that this licensing event used' }),
    download: UrlSchema.exactOptional().openapi({
      description: 'Information that is needed to download the image',
    }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message, appears only if there was an error' }),
    image_id: z.string().openapi({ description: 'Image ID that was licensed' }),
    license_id: z.string().exactOptional().openapi({ description: 'ID of the license event' }),
    price: PriceSchema.exactOptional().openapi({
      description: 'Wholesale price information; only for rev-share partners',
    }),
  })
  .openapi({
    description: 'The response to a licensing request for an image',
    example: {
      allotment_charge: 1,
      download: {
        url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg',
      },
      image_id: '59656357',
      price: { local_amount: 12.34, local_currency: 'EUR' },
    },
    required: ['image_id'],
  })
  .openapi('LicenseImageResult')

const LicenseImageResultDataListSchema = z
  .object({
    data: z
      .array(LicenseImageResultSchema)
      .exactOptional()
      .openapi({ description: 'License results' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'List of information about licensed images',
    example: {
      data: [
        {
          allotment_charge: 1,
          download: {
            url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg',
          },
          image_id: '59656357',
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 23,
    },
    required: [],
  })
  .openapi('LicenseImageResultDataList')

const LicenseSFXSchema = z
  .object({
    audio_layout: z.enum(['ambisonic', '5.1', 'stereo']).exactOptional(),
    format: z.enum(['wav', 'mp3']).exactOptional(),
    search_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the search that led to this licensing event' }),
    sfx_id: z.string().openapi({ description: 'ID of the sounds effect being licensed' }),
    subscription_id: z
      .string()
      .openapi({ description: 'ID of the subscription to use for the download.' }),
  })
  .openapi({
    description: '',
    example: {
      format: 'wav',
      metadata: {
        customer_id: '12345',
        geo_location: 'US',
        number_viewed: '15',
        search_term: 'dog',
      },
      sfx_id: '123456789',
      show_modal: true,
      size: 'ambisonic',
      subscription_id: 's12345678',
    },
    required: ['sfx_id', 'subscription_id'],
  })
  .openapi('LicenseSFX')

const LicenseSFXRequestSchema = z
  .object({
    sound_effects: z
      .array(LicenseSFXSchema)
      .openapi({ description: 'Sound effects to license for' }),
  })
  .openapi({
    description: 'License sounds effect asset request body',
    example: {
      sound_effects: [
        {
          format: 'wav',
          metadata: {
            customer_id: '12345',
            geo_location: 'US',
            number_viewed: '15',
            search_term: 'dog',
          },
          sfx_id: '123456789',
          show_modal: true,
          size: 'ambisonic',
          subscription_id: 's12345678',
        },
      ],
    },
    required: ['sound_effects'],
  })
  .openapi('LicenseSFXRequest')

const LicenseSFXResultSchema = z
  .object({
    allotment_charge: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of credits that this licensing event used' }),
    download: UrlSchema.exactOptional().openapi({
      description: 'Information that is needed to download the sound effects',
    }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message, appears only if there was an error' }),
    license_id: z.string().exactOptional().openapi({ description: 'ID of the license event' }),
    sfx_id: z.string().openapi({ description: 'Sound effects ID that was licensed' }),
  })
  .openapi({
    description: 'The response to a licensing request for an sound effects',
    example: {
      allotment_charge: 1,
      download: {
        url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.wav',
      },
      sfx_id: '59656357',
    },
    required: ['sfx_id'],
  })
  .openapi('LicenseSFXResult')

const LicenseSFXResultDataListSchema = z
  .object({
    data: z
      .array(LicenseSFXResultSchema)
      .exactOptional()
      .openapi({ description: 'Sound effects license results' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
  })
  .openapi({
    description: 'List of information about licensed sound effects',
    example: {
      data: [
        {
          allotment_charge: 1,
          download: {
            url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp3',
          },
          sfx_id: '123456789',
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 123455,
    },
    required: [],
  })
  .openapi('LicenseSFXResultDataList')

const LicenseVideoSchema = z
  .object({
    auth_cookie: CookieSchema.exactOptional(),
    editorial_acknowledgement: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this item is editorial content' }),
    metadata: LicenseRequestMetadataSchema.exactOptional(),
    price: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners',
      }),
    search_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the search that led to this licensing event' }),
    show_modal: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: '(Deprecated)' }),
    size: z
      .enum(['web', 'sd', 'hd', '4k'])
      .exactOptional()
      .openapi({ description: 'Size of the video being licensed' }),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the subscription used for this license' }),
    video_id: z.string().openapi({ description: 'ID of the video being licensed' }),
  })
  .openapi({
    description: 'Data required to license a video',
    example: { size: 'hd', subscription_id: 's12345678', video_id: '2140697' },
    required: ['video_id'],
  })
  .openapi('LicenseVideo')

const LicenseVideoRequestSchema = z
  .object({
    videos: z.array(LicenseVideoSchema).max(50).openapi({ description: 'Videos to license' }),
  })
  .openapi({
    description: 'List of videos to license',
    example: { videos: [{ size: 'hd', subscription_id: 's12345678', video_id: '2140697' }] },
    required: ['videos'],
  })
  .openapi('LicenseVideoRequest')

const LicenseVideoResultSchema = z
  .object({
    allotment_charge: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of credits that this licensing event used' }),
    download: UrlSchema.exactOptional(),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Potential error that occurred during licensing' }),
    license_id: z.string().exactOptional().openapi({ description: 'ID of the license event' }),
    price: PriceSchema.exactOptional().openapi({
      description: 'Wholesale price information; only for rev-share partners only',
    }),
    video_id: z.string().openapi({ description: 'ID of the video that was licensed' }),
  })
  .openapi({
    description: 'The response to a licensing request for a video',
    example: {
      allotment_charge: 1,
      download: {
        url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp4',
      },
      price: { local_amount: 12.34, local_currency: 'EUR' },
      video_id: '123456789',
    },
    required: ['video_id'],
  })
  .openapi('LicenseVideoResult')

const LicenseVideoResultDataListSchema = z
  .object({
    data: z
      .array(LicenseVideoResultSchema)
      .exactOptional()
      .openapi({ description: 'License results' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'List of video license results',
    example: {
      data: [
        {
          allotment_charge: 1,
          download: {
            url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp4',
          },
          price: { local_amount: 12.34, local_currency: 'EUR' },
          video_id: '123456789',
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 123455,
    },
    required: [],
  })
  .openapi('LicenseVideoResultDataList')

const MoodListSchema = z
  .strictObject({ data: z.array(z.string()).openapi({ description: 'List of audio moods' }) })
  .openapi({
    description: 'List of audio moods',
    example: {
      data: ['Action / Sports', 'Adventure / Discovery', 'Aerobics / Workout', 'Aggressive'],
    },
    required: ['data'],
  })
  .openapi('MoodList')

const OauthAccessTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({ description: 'Access token that can be used for future requests' }),
    expires_in: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of seconds before token expires, only present for expiring tokens',
      }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A refresh token that can be used to renew the access_token when it expires, only present for expiring tokens',
      }),
    token_type: z.string().default('Bearer').openapi({ description: 'Type of token' }),
    user_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Metadata about the access_token, only present for expiring tokens',
      }),
  })
  .openapi({
    description: 'Access token response to client apps',
    example: {
      access_token:
        'v2/NmQwOTc0NTBiMjA5YzZkY2Q4NTkvMTA4OTg1MDk5L2N1c3RvbWVyLzIvZjB2a0RseGo4Rkt6ZjRmVWJNMm10V2VzcHh1NTBlZWJ6andUQU1NeTVYYnNFTDVWOFRJakItS2RnZTlmbEY1Y3haNWdXLUtYc2JhaXo5djk0V0p2QzZUUWZ4c2FNWm41NkdLYUgyVWlCaVUtQTNVMV9YQWpzd3lpblI3SlZEem8wSG1qQ2NzSkJlX3VQTnNXenBIdkd4SXViVi1rRGJTVENCV0g1U3U0RXRJSV9rSm5lQkl5QXlvbm5JN241UUhv',
      token_type: 'Bearer',
    },
    required: ['access_token', 'token_type'],
  })
  .openapi('OauthAccessTokenResponse')

const RecommendationSchema = z
  .object({ id: z.string().openapi({ description: 'Media ID' }) })
  .openapi({ description: 'Media Recommendation', example: { id: '123456789' }, required: ['id'] })
  .openapi('Recommendation')

const RecommendationDataListSchema = z
  .object({
    data: z
      .array(RecommendationSchema)
      .exactOptional()
      .openapi({ description: 'Recommended images' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'List of recommended images',
    example: {
      data: [{ id: '123456789' }, { id: '99379946' }, { id: '133918412' }],
      page: 1,
      per_page: 5,
      total_count: 12,
    },
    required: [],
  })
  .openapi('RecommendationDataList')

const RedownloadImageSchema = z
  .object({
    auth_cookie: CookieSchema.exactOptional().openapi({
      deprecated: true,
      description: '(Deprecated)',
    }),
    show_modal: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: '(Deprecated)' }),
    size: z
      .enum(['small', 'medium', 'huge', 'supersize', 'vector'])
      .exactOptional()
      .openapi({ description: 'Size of the image' }),
    verification_code: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: '(Deprecated)' }),
  })
  .openapi({
    description: 'Data required to redownload an image',
    example: { size: 'small' },
    required: [],
  })
  .openapi('RedownloadImage')

const RedownloadVideoSchema = z
  .object({
    auth_cookie: CookieSchema.exactOptional().openapi({
      deprecated: true,
      description: '(Deprecated)',
    }),
    show_modal: z
      .boolean()
      .exactOptional()
      .openapi({ deprecated: true, description: '(Deprecated)' }),
    size: z
      .enum(['web', 'sd', 'hd', '4k'])
      .exactOptional()
      .openapi({ description: 'Size of the video' }),
    verification_code: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: '(Deprecated)' }),
  })
  .openapi({
    description: 'Data required to redownload a video',
    example: { size: 'web' },
    required: [],
  })
  .openapi('RedownloadVideo')

const RemoveCatalogCollectionItemSchema = z
  .object({ id: z.string() })
  .openapi({ example: { id: '123' }, required: ['id'] })
  .openapi('RemoveCatalogCollectionItem')

const RemoveCatalogCollectionItemsSchema = z
  .object({ items: z.array(RemoveCatalogCollectionItemSchema).min(1).max(50) })
  .openapi({ example: {}, required: ['items'] })
  .openapi('RemoveCatalogCollectionItems')

const SFXAssetDetailsSchema = z
  .object({
    file_size: z.int().exactOptional().openapi({ description: 'File size of the sound effect' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL the sound effect is available at' }),
  })
  .openapi({
    description: 'Information about a file that is part of an sound effect asset',
    example: {
      file_size: 123,
      url: 'https://cdn.shutterstock.com/shutterstock/sfx/11222/preview_ecom_ster/hand-throw-catch-cellphone.mp3',
    },
    required: [],
  })
  .openapi('SFXAssetDetails')

const SFXAssetsSchema = z
  .object({
    preview_mp3: SFXAssetDetailsSchema.exactOptional(),
    waveform: SFXAssetDetailsSchema.exactOptional(),
  })
  .openapi({
    description: 'Files that are available as part of an sound effect asset',
    example: {
      preview_mp3: {
        file_size: 123,
        url: 'https://cdn.shutterstock.com/shutterstock/sfx/11222/preview_ecom_ster/hand-throw-catch-cellphone.mp3',
      },
      waveform: {
        file_size: 123,
        url: 'https://cdn.shutterstock.com/shutterstock/sfx/11222/preview_ecom_ster/hand-throw-catch-cellphone.mp3',
      },
    },
    required: [],
  })
  .openapi('SFXAssets')

const SFXSchema = z
  .object({
    added_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date this sound effect was added to the Shutterstock library' }),
    affiliate_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Affiliate referral link; appears only for registered affiliate partners',
      }),
    artist: z.string().exactOptional().openapi({ description: 'Artist of the sound effect' }),
    assets: SFXAssetsSchema.exactOptional(),
    contributor: ContributorSchema,
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of this sound effect' }),
    duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'Duration of this sound effect in seconds' }),
    id: z.string().openapi({ description: 'Shutterstock ID of this sound effect' }),
    keywords: z
      .array(z.string().openapi({ description: 'Keyword for this track' }))
      .exactOptional()
      .openapi({ description: 'List of all keywords for this sound effect' }),
    media_type: z
      .string()
      .openapi({ description: 'Media type of this track; should always be "sfx"' }),
    releases: z
      .array(z.string().openapi({ description: 'Release of this sound effect' }))
      .exactOptional()
      .openapi({ description: 'List of all releases of this sound effect' }),
    title: z.string().exactOptional().openapi({ description: 'Title of this sound effect' }),
    updated_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Time this sound effect was last updated' }),
    url: z.string().exactOptional().openapi({ description: '' }),
  })
  .openapi({
    description: 'SFX metadata',
    example: { contributor: { id: '1234' }, id: '123', media_type: 'sfx' },
    required: ['id', 'media_type', 'contributor'],
  })
  .openapi('SFX')

const SFXDataListSchema = z
  .object({ data: z.array(SFXSchema).exactOptional().openapi({ description: 'Sound Effects' }) })
  .openapi({
    description: 'List of sound effects',
    example: { data: [{ contributor: { id: '1234' }, id: '123', media_type: 'sfx' }] },
    required: [],
  })
  .openapi('SFXDataList')

const SFXSearchResultsSchema = z
  .object({
    data: z.array(SFXSchema).openapi({ description: 'List of tracks' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    search_id: z.string().openapi({ description: 'ID of the search' }),
    total_count: z.int().openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'Sound effects search results',
    example: {
      data: [
        {
          added_date: '2022-07-29',
          assets: {
            preview_mp3: {
              url: 'https://cdn.shutterstock.com/shutterstock/sfx/21230/preview_ecom_ster/heavy-duty-interface-feedback.mp3',
            },
            waveform: {
              url: 'https://cdn.shutterstock.com/shutterstock/sfx/21230/wvfm_img/heavy-duty-interface-feedback.png',
            },
          },
          contributor: { id: '321402911' },
          description:
            'User interface calculations, scanning, thinking, text displayed on screen. Screen gak or garble.',
          id: '123',
          media_type: 'sfx',
          title: 'Heavy Duty Interface Feedback',
          updated_time: '2022-08-04T15:11:15.711Z',
        },
      ],
      search_id: 'e6f84c4c-ffdd-499b-ad89-72c65a896ead',
      total_count: 14881,
    },
    required: ['data', 'total_count', 'search_id'],
  })
  .openapi('SFXSearchResults')

const SearchEntitiesRequestSchema = z
  .object({
    text: z
      .string()
      .min(1)
      .max(100000)
      .openapi({ description: 'Plain text to extract keywords from' }),
  })
  .openapi({
    description: 'Search entity request data',
    example: { text: 'Planting flowers is a great way to make springtime more beautiful.' },
    required: ['text'],
  })
  .openapi('SearchEntitiesRequest')

const SearchEntitiesResponseSchema = z
  .object({
    keywords: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The top keywords from the submitted text' }),
  })
  .openapi({
    description: 'The response to a request for keyword analysis',
    example: { keywords: ['planting', 'flowers', 'springtime', 'beautiful'] },
    required: [],
  })
  .openapi('SearchEntitiesResponse')

const SfxUrlSchema = z
  .object({
    url: z
      .string()
      .openapi({
        description: 'URL that can be used to download the unwatermarked, licensed asset',
      }),
  })
  .openapi({
    description: 'Sound effect license URL object',
    example: {
      url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg',
    },
    required: ['url'],
  })
  .openapi('SfxUrl')

const SubscriptionMetadataSchema = z
  .object({})
  .openapi({
    description: 'Subscription metadata; different for each customer',
    example: {
      client: { is_required: false, name: 'purchase_order' },
      job: { is_required: true, name: 'client_name' },
      other: { is_required: false, name: 'custom_value' },
    },
  })
  .openapi('SubscriptionMetadata')

const SubscriptionSchema = z
  .object({
    allotment: AllotmentSchema.exactOptional(),
    asset_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier for the type of assets associated with this subscription (images, videos, audio, editorial)',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the subscription' }),
    expiration_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date the subscription ends' }),
    formats: z
      .array(LicenseFormatSchema)
      .exactOptional()
      .openapi({ description: 'List of formats that are licensable for the subscription' }),
    id: z.string().openapi({ description: 'Unique internal identifier for the subscription' }),
    license: z
      .string()
      .exactOptional()
      .openapi({ description: 'Internal identifier for the type of subscription' }),
    metadata: SubscriptionMetadataSchema.exactOptional(),
    price_per_download: PriceSchema.exactOptional(),
  })
  .openapi({
    description: 'Subscription information',
    example: {
      allotment: {
        downloads_left: 5,
        downloads_limit: 10,
        end_time: '2020-05-29T12:10:22-05:00',
        start_time: '2020-05-29T12:10:22-05:00',
      },
      asset_type: 'images',
      description: 'Annual Subscription',
      expiration_time: '2020-05-29T12:10:22-05:00',
      formats: [
        {
          description: 'Small',
          format: 'jpg',
          media_type: 'image',
          min_resolution: 500,
          size: 'small',
        },
        {
          description: 'Med',
          format: 'jpg',
          media_type: 'image',
          min_resolution: 1000,
          size: 'medium',
        },
        { description: 'Vector', format: 'eps', media_type: 'image', size: 'vector' },
      ],
      id: 's8906043',
      license: 'standard',
      metadata: {},
    },
    required: ['id'],
  })
  .openapi('Subscription')

const SubscriptionDataListSchema = z
  .object({
    data: z
      .array(SubscriptionSchema)
      .exactOptional()
      .openapi({ description: 'Subscriptions retrieved from this user' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z.string().exactOptional().openapi({ description: 'Optional error message' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is being queried' }),
    per_page: z
      .int()
      .exactOptional()
      .openapi({ description: 'Amount of subscriptions to show per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of subscriptions for this user' }),
  })
  .openapi({
    description: 'List of subscriptions',
    example: {
      data: [
        {
          allotment: {
            downloads_left: 5,
            downloads_limit: 10,
            end_time: '2020-05-29T12:10:22-05:00',
            start_time: '2020-05-29T12:10:22-05:00',
          },
          asset_type: 'images',
          description: 'Annual Subscription',
          expiration_time: '2020-05-29T12:10:22-05:00',
          formats: [
            {
              description: 'Small',
              format: 'jpg',
              media_type: 'image',
              min_resolution: 500,
              size: 'small',
            },
            {
              description: 'Med',
              format: 'jpg',
              media_type: 'image',
              min_resolution: 1000,
              size: 'medium',
            },
            { description: 'Vector', format: 'eps', media_type: 'image', size: 'vector' },
          ],
          id: 's8906043',
          license: 'standard',
          metadata: {},
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 123455,
    },
    required: [],
  })
  .openapi('SubscriptionDataList')

const SuggestionsSchema = z
  .object({
    data: z.array(z.string()).exactOptional().openapi({ description: 'Search suggestions' }),
  })
  .openapi({
    description: 'List of search suggestions',
    example: {
      data: [
        'cat scan',
        'cats and dogs',
        'cats playing',
        'catsuit',
        'cat silhouette',
        'catskills',
        'cats eyes',
        'cat sitting',
        'cat sleeping',
        'cats eye',
      ],
    },
    required: [],
  })
  .openapi('Suggestions')

const TestEchoSchema = z
  .object({ text: z.string().exactOptional() })
  .openapi({
    description: 'Text to echo in the response',
    example: { text: 'Test string' },
    required: [],
  })
  .openapi('TestEcho')

const TestValidateHeaderSchema = z
  .object({
    'user-agent': z
      .string()
      .exactOptional()
      .openapi({ description: 'User agent to expect in the response' }),
  })
  .openapi({
    description: 'Validation results',
    example: {
      'user-agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
    },
    required: [],
  })
  .openapi('TestValidateHeader')

const TestValidateQuerySchema = z
  .object({
    id: z.int().openapi({ description: 'Integer ID that was passed in the request' }),
    tag: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of tags that were passed in the request' }),
  })
  .openapi({
    description: 'Validation results',
    example: { id: 123456, tag: ['string'] },
    required: ['id'],
  })
  .openapi('TestValidateQuery')

const TestValidateSchema = z
  .object({
    header: TestValidateHeaderSchema.exactOptional().openapi({
      description: 'Headers as included in the request',
    }),
    query: TestValidateQuerySchema.exactOptional().openapi({
      description: 'Query as included in the request',
    }),
  })
  .openapi({
    description: 'Validation results',
    example: {
      header: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      },
      query: { id: 123456, tag: ['Test string'] },
    },
    required: [],
  })
  .openapi('TestValidate')

const UpdateCatalogCollectionSchema = z
  .object({
    cover_asset: z
      .object({ id: z.string() })
      .exactOptional()
      .openapi({ required: ['id'] }),
    name: z.string().min(1).max(100000).exactOptional(),
    visibility: z.enum(['private', 'public']).exactOptional(),
  })
  .openapi({
    example: { cover_asset: { id: '123' }, name: 'My Collection', visibility: 'public' },
    required: [],
  })
  .openapi('UpdateCatalogCollection')

const UpdatedMediaSchema = z
  .object({
    id: z.string().openapi({ description: 'ID of the media' }),
    updated_time: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Date that the media was updated' }),
    updates: z
      .array(z.string())
      .openapi({ description: 'Types of updates that were made to the piece of media' }),
  })
  .openapi({
    description: 'Information about a piece of updated media',
    example: {
      id: '123456789',
      updated_time: '2020-05-29T12:10:22-05:00',
      updates: ['addition', 'edit'],
    },
    required: ['id', 'updated_time', 'updates'],
  })
  .openapi('UpdatedMedia')

const UpdatedMediaDataListSchema = z
  .object({
    data: z
      .array(UpdatedMediaSchema)
      .exactOptional()
      .openapi({ description: 'Updated media items' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'List of updated media',
    example: {
      data: [
        {
          id: '123456789',
          updated_time: '2020-05-29T12:10:22-05:00',
          updates: ['addition', 'edit'],
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 13,
    },
    required: [],
  })
  .openapi('UpdatedMediaDataList')

const UrlsSchema = z
  .object({ urls: z.array(z.string()).openapi({ description: 'URLs' }) })
  .openapi({ description: 'List of URLs', example: { urls: ['string'] }, required: ['urls'] })
  .openapi('Urls')

const UserDetailsSchema = z
  .object({
    contributor_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique internal identifier of the user, as a contributor' }),
    customer_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique internal identifier of the user, as a purchaser' }),
    email: z.string().exactOptional().openapi({ description: 'Email address of the user' }),
    first_name: z.string().exactOptional().openapi({ description: 'First name of the user' }),
    full_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full name including first, middle, and last name of the user' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique internal identifier for the user, not tied to contributor or purchasing customer',
      }),
    is_premier: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the user has access to the Premier collection, false otherwise',
      }),
    is_premier_parent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the user has access to the Premier collection and also has child users',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: 'Main language of the user account' }),
    last_name: z.string().exactOptional().openapi({ description: 'Last name of the user' }),
    only_enhanced_license: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the user has an enterprise license, false otherwise' }),
    only_sensitive_use: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the user has access to sensitive use only, false otherwise',
      }),
    organization_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Unique internal identifier for the user's organization, specific to Premier users",
      }),
    premier_permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of permissions allowed through the Premier client' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'User name associated to the user' }),
  })
  .openapi({
    description: 'User details',
    example: {
      contributor_id: '212',
      first_name: 'John',
      full_name: 'John Doe',
      id: '101782699',
      language: 'es',
      last_name: 'Doe',
      username: 'jdoe',
    },
    required: [],
  })
  .openapi('UserDetails')

const VideoAssetsSchema = z
  .object({
    '4k': VideoSizeDetailsSchema.exactOptional(),
    hd: VideoSizeDetailsSchema.exactOptional(),
    preview_jpg: UrlSchema.exactOptional(),
    preview_mp4: UrlSchema.exactOptional(),
    preview_webm: UrlSchema.exactOptional(),
    sd: VideoSizeDetailsSchema.exactOptional(),
    thumb_jpg: UrlSchema.exactOptional(),
    thumb_jpgs: UrlsSchema.exactOptional(),
    thumb_mp4: UrlSchema.exactOptional(),
    thumb_webm: UrlSchema.exactOptional(),
    web: VideoSizeDetailsSchema.exactOptional(),
  })
  .openapi({
    description: 'Video asset information',
    example: {
      hd: {
        display_name: 'Original HD',
        file_size: 110359552,
        format: 'avc1',
        fps: 29.97,
        height: 1080,
        is_licensable: true,
        width: 1920,
      },
      original_filename: '123.mp4',
      preview_jpg: { url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg' },
      preview_mp4: {
        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
      },
      preview_webm: {
        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
      },
      sd: {
        display_name: 'Standard Definition MPEG',
        file_size: 4577280,
        format: 'mov',
        fps: 29.97,
        height: 480,
        is_licensable: true,
        width: 852,
      },
      thumb_jpg: { url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg' },
      thumb_jpgs: {
        urls: [
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg',
          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
        ],
      },
      thumb_mp4: {
        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
      },
      thumb_webm: {
        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
      },
      web: {
        display_name: 'Low Resolution MPEG',
        file_size: 1291264,
        format: 'mov',
        fps: 29.97,
        height: 240,
        is_licensable: true,
        width: 426,
      },
    },
    required: [],
  })
  .openapi('VideoAssets')

const VideoSchema = z
  .object({
    added_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Date this video was added to the Shutterstock library' }),
    affiliate_url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Affiliate referral link; appears only for registered affiliate partners',
      }),
    aspect: z
      .number()
      .exactOptional()
      .openapi({ description: 'Aspect ratio of this video in decimal format, such as 0.6667' }),
    aspect_ratio: z
      .string()
      .exactOptional()
      .openapi({ description: 'Aspect ratio of the video as a ratio, such as 16:9' }),
    assets: VideoAssetsSchema.exactOptional(),
    categories: z
      .array(CategorySchema)
      .exactOptional()
      .openapi({ description: 'List of categories' }),
    contributor: ContributorSchema,
    description: z.string().exactOptional().openapi({ description: 'Description of this video' }),
    duration: z
      .number()
      .exactOptional()
      .openapi({ description: 'Duration of this video, in seconds' }),
    has_model_release: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not this video has been released for use by the model appearing in it',
      }),
    has_property_release: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not this video has received a release to show the landmark or property appearing in it',
      }),
    id: z.string().openapi({ description: 'ID of the video' }),
    is_adult: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this video contains adult content' }),
    is_editorial: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not this video is editorial content' }),
    keywords: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Keywords associated with the content of this video' }),
    media_type: z
      .string()
      .openapi({ description: 'Media type of this video, should always be "video"' }),
    models: z
      .array(ModelSchema)
      .exactOptional()
      .openapi({ description: 'List of models in this video' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to video information page; included only for certain accounts',
      }),
  })
  .openapi({
    description: 'Information about a video',
    example: {
      added_date: '2019-07-13',
      aspect: 1.778,
      aspect_ratio: '16:9',
      assets: {
        hd: {
          display_name: 'Original HD',
          file_size: 110359552,
          format: 'avc1',
          fps: 29.97,
          height: 1080,
          is_licensable: true,
          width: 1920,
        },
        preview_jpg: { url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg' },
        preview_mp4: {
          url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
        },
        preview_webm: {
          url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
        },
        sd: {
          display_name: 'Standard Definition MPEG',
          file_size: 4577280,
          format: 'mov',
          fps: 29.97,
          height: 480,
          is_licensable: true,
          width: 852,
        },
        thumb_jpg: { url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg' },
        thumb_jpgs: {
          urls: [
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg',
            'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
          ],
        },
        thumb_mp4: {
          url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
        },
        thumb_webm: {
          url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
        },
        web: {
          display_name: 'Low Resolution MPEG',
          file_size: 1291264,
          format: 'mov',
          fps: 29.97,
          height: 240,
          is_licensable: true,
          width: 426,
        },
      },
      categories: [
        { id: '12', name: 'Nature' },
        { id: '13', name: 'People' },
      ],
      contributor: { id: '4411978' },
      description:
        'Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness',
      duration: 14.081,
      has_model_release: true,
      has_property_release: false,
      id: '1033184651',
      is_adult: false,
      is_editorial: false,
      keywords: [
        'active',
        'activity',
        'adventure',
        'arms',
        'backpacker',
        'carefree',
        'celebrating',
        'cliff',
        'climate',
        'cloud',
        'discovery',
        'escape',
        'explore',
        'extreme',
        'free',
        'freedom',
        'girl',
        'happy',
        'high',
        'hiker',
        'hiking',
        'hill',
        'independent',
        'inspiration',
        'landscape',
        'leisure',
        'lifestyle',
        'mountain',
        'mountains',
        'nature',
        'outdoor',
        'peak',
        'person',
        'rock',
        'scenic',
        'sky',
        'sport',
        'success',
        'summer',
        'summit',
        'sun',
        'sunset',
        'top',
        'tourism',
        'travel',
        'trekking',
        'vacation',
        'view',
        'winning',
        'woman',
      ],
      media_type: 'video',
      models: [{ id: '33233810' }, { id: '25487168' }],
    },
    required: ['id', 'media_type', 'contributor'],
  })
  .openapi('Video')

const VideoCollectionItemDataListSchema = z
  .object({
    data: z
      .array(CollectionItemSchema)
      .exactOptional()
      .openapi({ description: 'Assets in the collection' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'The current page of results' }),
    per_page: z.int().exactOptional().openapi({ description: 'The number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of results across all pages' }),
  })
  .openapi({
    description: 'List of items in a collection',
    example: {
      data: [
        { added_time: '2016-08-18T18:52:59-04:00', id: '76688182', media_type: 'video' },
        { added_time: '2016-08-18T18:52:59-04:00', id: '40005859', media_type: 'video' },
      ],
      page: 1,
      per_page: 100,
    },
    required: [],
  })
  .openapi('VideoCollectionItemDataList')

const VideoDataListSchema = z
  .object({
    data: z.array(VideoSchema).exactOptional().openapi({ description: 'Videos' }),
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'Error list; appears only if there was an error' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    total_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'List of videos',
    example: {
      data: [
        {
          added_date: '2019-07-13',
          aspect: 1.778,
          aspect_ratio: '16:9',
          assets: {
            hd: {
              display_name: 'Original HD',
              file_size: 110359552,
              format: 'avc1',
              fps: 29.97,
              height: 1080,
              is_licensable: true,
              width: 1920,
            },
            preview_jpg: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
            },
            preview_mp4: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
            },
            preview_webm: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
            },
            sd: {
              display_name: 'Standard Definition MPEG',
              file_size: 4577280,
              format: 'mov',
              fps: 29.97,
              height: 480,
              is_licensable: true,
              width: 852,
            },
            thumb_jpg: { url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg' },
            thumb_jpgs: {
              urls: [
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg',
                'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
              ],
            },
            thumb_mp4: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
            },
            thumb_webm: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
            },
            web: {
              display_name: 'Low Resolution MPEG',
              file_size: 1291264,
              format: 'mov',
              fps: 29.97,
              height: 240,
              is_licensable: true,
              width: 426,
            },
          },
          categories: [
            { id: '12', name: 'Nature' },
            { id: '13', name: 'People' },
          ],
          contributor: { id: '4411978' },
          description:
            'Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness',
          duration: 14.081,
          has_model_release: true,
          has_property_release: false,
          id: '1033184651',
          is_adult: false,
          is_editorial: false,
          keywords: [
            'active',
            'activity',
            'adventure',
            'arms',
            'backpacker',
            'carefree',
            'celebrating',
            'cliff',
            'climate',
            'cloud',
            'discovery',
            'escape',
            'explore',
            'extreme',
            'free',
            'freedom',
            'girl',
            'happy',
            'high',
            'hiker',
            'hiking',
            'hill',
            'independent',
            'inspiration',
            'landscape',
            'leisure',
            'lifestyle',
            'mountain',
            'mountains',
            'nature',
            'outdoor',
            'peak',
            'person',
            'rock',
            'scenic',
            'sky',
            'sport',
            'success',
            'summer',
            'summit',
            'sun',
            'sunset',
            'top',
            'tourism',
            'travel',
            'trekking',
            'vacation',
            'view',
            'winning',
            'woman',
          ],
          media_type: 'video',
          models: [{ id: '33233810' }, { id: '25487168' }],
        },
      ],
      page: 1,
      per_page: 5,
      total_count: 25,
    },
    required: [],
  })
  .openapi('VideoDataList')

const VideoSearchResultsSchema = z
  .object({
    data: z.array(VideoSchema).openapi({ description: 'List of videos' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-generated message, if any' }),
    page: z.int().exactOptional().openapi({ description: 'Current page that is returned' }),
    per_page: z.int().exactOptional().openapi({ description: 'Number of results per page' }),
    search_id: z.string().openapi({ description: 'Unique identifier for the search request' }),
    total_count: z.int().openapi({ description: 'Total count of all results across all pages' }),
  })
  .openapi({
    description: 'Video search results',
    example: {
      data: [
        {
          aspect: 1.778,
          aspect_ratio: '16:9',
          assets: {
            preview_jpg: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
            },
            preview_mp4: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
            },
            preview_webm: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
            },
            thumb_jpg: { url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg' },
            thumb_mp4: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
            },
            thumb_webm: {
              url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
            },
          },
          contributor: { id: '4411978' },
          description:
            'Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness',
          duration: 14.081,
          has_model_release: true,
          id: '1033184651',
          media_type: 'video',
        },
      ],
      page: 1,
      per_page: 5,
      search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
      total_count: 123,
    },
    required: ['data', 'total_count', 'search_id'],
  })
  .openapi('VideoSearchResults')

const BasicSecurityScheme = { scheme: 'basic', type: 'http' }

const CustomerAccessCodeSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.shutterstock.com/oauth/authorize',
      scopes: {
        'collections.edit':
          'Grant the ability to create new collections, edit a collection, and modify the contents of a collection',
        'collections.view': 'Grant read-only access to a collection and its contents.',
        'licenses.create': 'Grant the ability to download and license media on behalf of the user.',
        'licenses.view': "Grant read-only access to a user's licenses.",
        'purchases.view': "Grant read-only access to a user's purchase history.",
        'user.view': '*Originally missing*',
      },
      tokenUrl: 'https://api.shutterstock.com/v2/oauth/access_token',
    },
  },
  type: 'oauth2',
  'x-shutterstock-realm': 'customer',
}

export const getV2AiAudioDescriptorsRoute = createRoute({
  method: 'get',
  path: '/v2/ai/audio/descriptors',
  tags: ['custom_music'],
  summary: 'List computer audio descriptors',
  description:
    'This endpoint lists the descriptors that you can use in the audio regions in an audio render.',
  operationId: 'listCustomDescriptors',
  request: {
    query: z.object({
      render_speed_over: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show descriptors with an average render speed that is greater than or equal to the specified value',
            example: 5,
            in: 'query',
            name: 'render_speed_over',
            schema: { type: 'number' },
            required: false,
          },
        }),
      band_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show descriptors that contain the specified band (case-sentsitive)',
            example: 'Corporate Folk Bonfire Band 1',
            in: 'query',
            name: 'band_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      band_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show descriptors with the specified band name (case-sensitive)',
            example: 'Documentary Underscore Heartfelt Band 1',
            in: 'query',
            name: 'band_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: '1',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: '1',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show descriptors with the specified IDs (case-sensitive)',
            example: 'documentary_underscore_heartfelt',
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, maxItems: 20, type: 'array' },
            required: false,
          },
        }),
      instrument_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show descriptors with the specified instrument name (case-sensitive)',
            example: 'Precision Bass - Full',
            in: 'query',
            name: 'instrument_name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      instrument_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show descriptors with the specified instrument ID (case-sensitive)',
            example: 'direct_fluorescent_synth_lead',
            in: 'query',
            name: 'instrument_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tempo: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show descriptors whose tempo range includes the specified tempo in beats per minute',
            example: 90,
            in: 'query',
            name: 'tempo',
            schema: { type: 'number' },
            required: false,
          },
        }),
      tempo_to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show descriptors with a tempo that is less than or equal to the specified number',
            example: 120,
            in: 'query',
            name: 'tempo_to',
            schema: { type: 'number' },
            required: false,
          },
        }),
      tempo_from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show descriptors that have a tempo range that includes the specified tempo in beats per minute',
            example: 60,
            in: 'query',
            name: 'tempo_from',
            schema: { type: 'number' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show descriptors with the specified name (case-sensitive)',
            example: 'Corporate Pop Inspirational High Energy',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)',
            example: 'Cinematic',
            in: 'query',
            name: 'tag',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DescriptorsListResultSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    average_render_speed: 8.242664029014177,
                    bands: [
                      {
                        id: 'cinematic_minimal_tense_band_1',
                        name: 'Cinematic Minimal Tense Band 1',
                      },
                      {
                        id: 'cinematic_minimal_tense_band_2',
                        name: 'Cinematic Minimal Tense Band 2',
                      },
                    ],
                    id: 'cinematic_minimal_tense',
                    instruments: [
                      { id: 'blue_synth_pad', name: 'Warm Pad - Lush' },
                      { id: 'direct_round_1_synth_bass', name: 'Direct Round 1 Synth Bass' },
                      {
                        id: 'direct_crystal_breath_mid_pad',
                        name: 'Direct Crystal Breath Mid Pad',
                      },
                    ],
                    max_tempo: 76,
                    min_tempo: 58,
                    name: 'Cinematic Minimal Tense',
                    previews: [
                      {
                        content_type: 'audio/mp3',
                        url: 'https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_1_v1.mp3',
                      },
                      {
                        content_type: 'audio/mp3',
                        url: 'https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_2_v1.mp3',
                      },
                    ],
                    tags: [
                      'Tense',
                      'Cinematic',
                      'Negative',
                      'Simple Meter',
                      '4/4',
                      'Natural Minor',
                      'Dorian',
                      'Minimal',
                      'Adagio',
                      'Single Region',
                      'Main',
                      'Entertainment',
                      'Politics',
                      'Keys',
                      'Mid Pads',
                      'Fast',
                      'Slow',
                      'Slow',
                      'Voice',
                      'Medium Bright',
                      'Non Noisy',
                      'Medium Thick',
                      'Angelic',
                      'Direct',
                      'Percussion',
                      'Perc FX',
                      'Misc',
                      'Acoustic Pianos',
                      'Grand',
                      'Nice',
                      'Roomy',
                      'Pop',
                      'Upright',
                      'Clean',
                      'Classic',
                      'Keyboards',
                      'Digital Keyboard',
                      'Strings',
                      'Synth Basses',
                      'Fast',
                      'Dark',
                      'Thick',
                      'Sub',
                      'Synth Mallets',
                      'Dull',
                      'Mid Synth Beds',
                      'Slow',
                      'None',
                      'Medium Noisy',
                      'Harsh',
                      'Fast',
                      'Airy',
                      'Long Textures',
                      'Ambience',
                      'Synth Texture',
                      'Ethereal',
                      'Set Kicks',
                      'Processed',
                      'Hubcap Mallet',
                      'Wide',
                      'Tickie',
                      'Airy',
                      'Chamber',
                      'Thin',
                      'Organ',
                      'Cello Ensemble',
                      'Sweet',
                      'Big',
                      'Di',
                      'Raw',
                      'Bright',
                      'Tight',
                      'Chorus',
                      'Buzzy',
                      'Huge',
                      'Warm',
                      'Jazz',
                      'Brass',
                      'String',
                      'Hollow',
                      'Woodwind',
                      'Breathy',
                      'Crystal',
                      'Rhodes',
                      'Synth Piano',
                      'Noisy',
                      'Woody',
                      'Metallic',
                      'Reverse Piano',
                      'Full',
                      'Foley',
                      'Piano',
                      'Clean',
                      'Delayed',
                      'Reverb',
                      'Low Passed',
                      'Large',
                      'Medium',
                      'Small',
                    ],
                  },
                ],
                page: 1,
                per_page: 1,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2AiAudioInstrumentsRoute = createRoute({
  method: 'get',
  path: '/v2/ai/audio/instruments',
  tags: ['custom_music'],
  summary: 'List computer audio instruments',
  description:
    'This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.',
  operationId: 'listCustomInstruments',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show instruments with the specified ID',
            example: 'wood_blocks',
            in: 'query',
            name: 'id',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 1,
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: '1',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show instruments with the specified name (case-sensitive)',
            example: 'Precision Bass - Full',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show instruments with the specified tag, such as Percussion or Strings (case-sensitive)',
            example: 'Percussion',
            in: 'query',
            name: 'tag',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: InstrumentsListResultSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    id: 'bright_roomy_kit',
                    name: 'Bright Roomy Kit',
                    previews: [
                      {
                        content_type: 'audio/mp3',
                        url: 'https://public-cdn.ampermusic.com/instruments/previews/bright_roomy_kit_v1.mp3',
                      },
                    ],
                    tags: [
                      'Percussion',
                      'Aux Percs',
                      'Set Cymbals',
                      'Crash',
                      'Open',
                      'Ride',
                      'Set Hi-Hat',
                      'Set Kicks',
                      'Stick Snare',
                      'Quad Toms',
                      'Roto Toms',
                    ],
                  },
                ],
                page: 1,
                per_page: 5,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2AiAudioRendersRoute = createRoute({
  method: 'get',
  path: '/v2/ai/audio/renders',
  tags: ['custom_music'],
  summary: 'Get details about audio renders',
  description:
    'This endpoint shows the status of one or more audio renders, including download links for completed audio.',
  operationId: 'fetchRenders',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'One or more render IDs',
            example: ['L2w7h9VNFlkzpllSUunSYayenKjN', 'BeHx3UNXzMBB4dGsC9aa6VxnpcWl'],
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AudioRendersListResultsSchema,
          examples: {
            response: {
              value: {
                audio_renders: [
                  {
                    created_date: '2021-07-13T16:19:30-04:00',
                    files: [],
                    id: '2yZp13IhLqnjfh2KquDTOHUHzTiP',
                    preset: 'MASTER_MP3',
                    progress_percent: 20,
                    status: 'WAITING_COMPOSE',
                    timeline: {},
                    updated_date: '2021-07-13T16:19:30-04:00',
                  },
                  {
                    created_date: '2021-07-12T16:39:59-04:00',
                    files: [
                      {
                        bits_sample: 16,
                        content_type: 'audio/mp3',
                        download_url:
                          'https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/0.mp3',
                        filename: 'My_audio_ai.mp3',
                        frequency_hz: 44100,
                        kbits_second: 192,
                        size_bytes: 481556,
                        tracks: ['master'],
                      },
                      {
                        bits_sample: 0,
                        content_type: 'application/vnd.amper.waveform+json',
                        download_url:
                          'https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/1.json',
                        filename: 'render.json',
                        frequency_hz: 42,
                        kbits_second: 0,
                        size_bytes: 4420,
                        tracks: ['master'],
                      },
                    ],
                    id: 'QwAgKqXQAzr622KuXYZ25C9WRH3a',
                    preset: 'MASTER_MP3',
                    progress_percent: 100,
                    status: 'CREATED',
                    timeline: {},
                    updated_date: '2021-07-12T16:46:26-04:00',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const postV2AiAudioRendersRoute = createRoute({
  method: 'post',
  path: '/v2/ai/audio/renders',
  tags: ['custom_music'],
  summary: 'Create rendered audio',
  description:
    'This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.',
  operationId: 'createAudioRenders',
  request: {
    body: {
      description:
        'Parameters for the audio, including the timeline and information about the output file',
      content: {
        'application/json': {
          schema: CreateAudioRendersRequestSchema,
          example: {
            audio_renders: [
              {
                filename: 'My Project.mp3',
                preset: 'MASTER_MP3',
                timeline: {
                  spans: [
                    {
                      id: 111,
                      instrument_groups: [
                        {
                          instrument_group: 'roomy_kit',
                          statuses: [{ beat: 12, status: 'active' }],
                        },
                      ],
                      regions: [
                        {
                          beat: 12,
                          descriptor: 'cinematic_minimal_tense',
                          end_type: { beat: 24, event: 'ending', type: 'ringout' },
                          id: 222,
                          key: { tonic_note: 'c', tonic_quality: 'major' },
                          region: 'music',
                        },
                      ],
                      span_type: 'metered',
                      tempo: 76,
                      tempo_changes: [{ tempo: 86, time: 5 }],
                      time: 5,
                    },
                    { span_type: 'unmetered', time: 20 },
                  ],
                },
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AudioRendersListResultsSchema,
          examples: {
            response: {
              value: {
                audio_renders: [
                  {
                    created_date: '2021-01-26T12:10:22-05:00',
                    files: [],
                    id: 'njlpYoWWmb1AYs2nZyw7EcNWbAkZ',
                    preset: 'MASTER_MP3',
                    progress_percent: 0,
                    status: 'WAITING_COMPOSE',
                    timeline: {},
                    updated_date: '2021-01-26T13:10:22-05:00',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2AudioRoute = createRoute({
  method: 'get',
  path: '/v2/audio',
  tags: ['audio'],
  summary: 'List audio tracks',
  description:
    'This endpoint lists information about one or more audio tracks, including the description and publication date.',
  operationId: 'getTrackList',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z
                .string()
                .regex(/^[1-9]\d*$/)
                .openapi({ 'x-pattern-description': 'A number that does not start with 0' }),
            )
            .min(1)
            .max(500),
        )
        .openapi({
          param: {
            description: 'One or more audio IDs',
            example: ['442583', '434750'],
            in: 'query',
            name: 'id',
            required: true,
            schema: {
              items: {
                pattern: '^[1-9]\\d*$',
                type: 'string',
                'x-pattern-description': 'A number that does not start with 0',
              },
              maxItems: 500,
              minItems: 1,
              type: 'array',
            },
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            example: 'full',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AudioDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    added_date: '2016-04-12',
                    artists: [{ name: 'Fin Productions' }],
                    assets: {
                      clean_audio: { file_size: 30760372 },
                      preview_mp3: {
                        file_size: 3846606,
                        url: 'https://ak.picdn.net/shutterstock/audio/434750/preview/preview.mp3',
                      },
                      preview_ogg: {
                        file_size: 4402608,
                        url: 'https://ak.picdn.net/shutterstock/audio/434750/preview/preview.ogg',
                      },
                      waveform: {
                        file_size: 19822,
                        url: 'https://ak.picdn.net/shutterstock/audio/434750/waveform/waveform.png',
                      },
                    },
                    bpm: 100,
                    contributor: { id: '2847971' },
                    description:
                      'Pulsing and feel-good, featuring slick electric guitar, synthesizer, bass, electronic drum pads and drums that create a positive, celebratory mood.',
                    duration: 160,
                    genres: ['Dance/Electronic', 'Electro Pop', 'Pop/Rock'],
                    id: '434750',
                    instruments: [
                      'Bass',
                      'Drums',
                      'Electric guitar',
                      'Pads',
                      'Percussion',
                      'Synthesizer',
                    ],
                    is_adult: false,
                    is_instrumental: true,
                    isrc: '',
                    keywords: [
                      'breezy',
                      'celebration',
                      'festive',
                      'good times',
                      'hopeful',
                      'optimistic',
                      'party',
                      'positive',
                      'reflective',
                    ],
                    language: 'en',
                    lyrics: '',
                    media_type: 'audio',
                    moods: [
                      'Bright',
                      'Confident',
                      'Fun',
                      'Happy',
                      'Inspiring',
                      'Optimistic',
                      'Playful',
                      'Sophisticated',
                      'Stylish',
                      'Uplifting',
                    ],
                    published_time: '2016-04-12T17:45:29-04:00',
                    recording_version: '',
                    releases: [],
                    similar_artists: [],
                    title: 'Fresh Love',
                    updated_time: '2016-08-18T18:03:11-04:00',
                    vocal_description: '',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2AudioCollectionsRoute = createRoute({
  method: 'get',
  path: '/v2/audio/collections',
  tags: ['audio'],
  summary: 'List audio collections',
  description: 'This endpoint lists your collections of audio tracks and their basic attributes.',
  operationId: 'getTrackCollectionList',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: '1',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(150),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: '100',
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 150, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      embed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['share_code', 'share_url'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which sharing information to include in the response, such as a URL to the collection',
            example: 'share_code',
            in: 'query',
            name: 'embed',
            schema: { items: { enum: ['share_code', 'share_url'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    cover_item: { id: '297886754' },
                    id: '293542904',
                    items_updated_time: '2021-05-20T16:15:22-04:00',
                    name: 'My collection',
                    total_item_count: 85,
                  },
                ],
                page: 1,
                per_page: 100,
                total_count: 1,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2AudioCollectionsRoute = createRoute({
  method: 'post',
  path: '/v2/audio/collections',
  tags: ['audio'],
  summary: 'Create audio collections',
  description:
    'This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.',
  operationId: 'createTrackCollection',
  request: {
    body: {
      description: 'Collection metadata',
      content: {
        'application/json': {
          schema: CollectionCreateRequestSchema,
          examples: {
            default: { description: 'Create a soundbox', value: { name: 'Best rock music' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created audio collection',
      content: {
        'application/json': {
          schema: CollectionCreateResponseSchema,
          examples: { response: { value: { id: '48433105' } } },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const getV2AudioCollectionsIdRoute = createRoute({
  method: 'get',
  path: '/v2/audio/collections/{id}',
  tags: ['audio'],
  summary: 'Get the details of audio collections',
  description:
    'This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.',
  operationId: 'getTrackCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '48433107',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['share_code', 'share_url'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which sharing information to include in the response, such as a URL to the collection',
            in: 'query',
            name: 'embed',
            schema: { items: { enum: ['share_code', 'share_url'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      share_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Code to retrieve a shared collection',
            in: 'query',
            name: 'share_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionSchema,
          examples: {
            response: {
              value: {
                cover_item: { id: '297886754' },
                id: '293542904',
                items_updated_time: '2021-05-20T16:15:22-04:00',
                name: 'My collection',
                total_item_count: 85,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2AudioCollectionsIdRoute = createRoute({
  method: 'post',
  path: '/v2/audio/collections/{id}',
  tags: ['audio'],
  summary: 'Rename audio collections',
  description: 'This endpoint sets a new name for a collection.',
  operationId: 'renameTrackCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '48433107',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Collection changes',
      content: {
        'application/json': {
          schema: CollectionUpdateRequestSchema,
          examples: {
            default: { description: 'Renaming a soundbox', value: { name: 'Best rock music' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully updated collection' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const deleteV2AudioCollectionsIdRoute = createRoute({
  method: 'delete',
  path: '/v2/audio/collections/{id}',
  tags: ['audio'],
  summary: 'Delete audio collections',
  description: 'This endpoint deletes a collection.',
  operationId: 'deleteTrackCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '48433111',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully deleted collection' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const getV2AudioCollectionsIdItemsRoute = createRoute({
  method: 'get',
  path: '/v2/audio/collections/{id}/items',
  tags: ['audio'],
  summary: 'Get the contents of audio collections',
  description:
    'This endpoint lists the IDs of tracks in a collection and the date that each was added.',
  operationId: 'getTrackCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '126351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(150),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 150, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      share_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Code to retrieve the contents of a shared collection',
            in: 'query',
            name: 'share_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('oldest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { default: 'oldest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionItemDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  { added_time: '2016-08-18T18:52:59-04:00', id: '76688182', media_type: 'audio' },
                  { added_time: '2016-08-18T18:52:59-04:00', id: '40005859', media_type: 'audio' },
                ],
                page: 1,
                per_page: 2,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2AudioCollectionsIdItemsRoute = createRoute({
  method: 'post',
  path: '/v2/audio/collections/{id}/items',
  tags: ['audio'],
  summary: 'Add audio tracks to collections',
  description: 'This endpoint adds one or more tracks to a collection by track IDs.',
  operationId: 'addTrackCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '48433115',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'List of items to add to collection',
      content: {
        'application/json': {
          schema: CollectionItemRequestSchema,
          examples: {
            default: {
              description: 'Adds tracks to a soundbox',
              value: { items: [{ id: '442583' }, { id: '7491192' }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully added collection items' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const deleteV2AudioCollectionsIdItemsRoute = createRoute({
  method: 'delete',
  path: '/v2/audio/collections/{id}/items',
  tags: ['audio'],
  summary: 'Remove audio tracks from collections',
  description: 'This endpoint removes one or more tracks from a collection.',
  operationId: 'deleteTrackCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '48433119',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      item_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'One or more item IDs to remove from the collection',
            example: ['76688182', '40005859'],
            in: 'query',
            name: 'item_id',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully removed collection items' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const getV2AudioGenresRoute = createRoute({
  method: 'get',
  path: '/v2/audio/genres',
  tags: ['audio'],
  summary: 'List audio genres',
  description: 'This endpoint returns a list of all audio genres.',
  operationId: 'listGenres',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which language the genres will be returned',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GenreListSchema,
          examples: {
            response: {
              value: {
                data: [
                  'Rock',
                  'Pop > Singer-Songwriter',
                  'Pop > Synth Pop',
                  'Production / Film Scores',
                ],
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2AudioInstrumentsRoute = createRoute({
  method: 'get',
  path: '/v2/audio/instruments',
  tags: ['audio'],
  summary: 'List audio instruments',
  description: 'This endpoint returns a list of all audio instruments.',
  operationId: 'listInstruments',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which language the instruments will be returned in',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: InstrumentListSchema,
          examples: {
            response: { value: { data: ['Orchestra', 'Organ', 'Oud', 'Pads', 'Electric Guitar'] } },
          },
        },
      },
    },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2AudioLicensesRoute = createRoute({
  method: 'get',
  path: '/v2/audio/licenses',
  tags: ['audio'],
  summary: 'List audio licenses',
  description:
    'This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.',
  operationId: 'getTrackLicenseList',
  request: {
    query: z.object({
      audio_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses for the specified track ID',
            example: '1',
            in: 'query',
            name: 'audio_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      license: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict results by license. Prepending a `-` sign will exclude results by license',
            example: '48433107',
            in: 'query',
            name: 'license',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(200),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 200, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by username of licensee',
            example: 'aUniqueUsername',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created on or after the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'start_date',
            schema: { format: 'date-time', type: 'string' },
            'x-relationships': [{ in: 'query', name: 'end_date', relationship: '<=' }],
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created before the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'end_date',
            schema: { format: 'date-time', type: 'string' },
            'x-relationships': [{ in: 'query', name: 'start_date', relationship: '>' }],
            required: false,
          },
        }),
      download_availability: z
        .enum(['all', 'downloadable', 'non_downloadable'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by download availability',
            in: 'query',
            name: 'download_availability',
            schema: {
              default: 'all',
              enum: ['all', 'downloadable', 'non_downloadable'],
              type: 'string',
            },
            required: false,
          },
        }),
      team_history: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to see license history for all members of your team.',
            in: 'query',
            name: 'team_history',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DownloadHistoryDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    audio: { format: { size: 'clean_audio' }, id: '420298' },
                    download_time: '2020-11-11T16:15:20.000Z',
                    id: 'a10b7a7a5a02113a928f13e5ba196151d6',
                    is_downloadable: true,
                    license: 'premier_music_extended',
                    metadata: { purchase_order: '123' },
                    user: { username: 'jsmith' },
                  },
                ],
                page: 1,
                per_page: 20,
                total_count: 1,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const postV2AudioLicensesRoute = createRoute({
  method: 'post',
  path: '/v2/audio/licenses',
  tags: ['audio'],
  summary: 'License audio tracks',
  description:
    'This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.',
  operationId: 'licenseTrack',
  request: {
    query: z.object({
      license: z
        .enum([
          'audio_platform',
          'premier_music_basic',
          'premier_music_extended',
          'premier_music_pro',
          'premier_music_comp',
          'asset_all_music',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'License type',
            example: 'audio_platform',
            in: 'query',
            name: 'license',
            schema: {
              enum: [
                'audio_platform',
                'premier_music_basic',
                'premier_music_extended',
                'premier_music_pro',
                'premier_music_comp',
                'asset_all_music',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that led to licensing this track',
            example: 'p5S6QwRikdFJTHXwsoiqTg',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Tracks to license',
      content: {
        'application/json': {
          schema: LicenseAudioRequestSchema,
          examples: {
            default: {
              description: 'Overwrite content of soundbox with new items',
              value: {
                audio: [
                  {
                    audio_id: '591623',
                    license: 'audio_platform',
                    metadata: { customer_id: '12345' },
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LicenseAudioResultDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    allotment_charge: 1,
                    audio_id: '123456789',
                    download: {
                      url: 'http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav',
                    },
                    license_id: 'abcdef123456789ghijklmn',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.create'] }],
})

export const postV2AudioLicensesIdDownloadsRoute = createRoute({
  method: 'post',
  path: '/v2/audio/licenses/{id}/downloads',
  tags: ['audio'],
  summary: 'Download audio tracks',
  description:
    'This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.',
  operationId: 'downloadTracks',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'License ID',
            example: 'e123',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AudioUrlSchema,
          examples: {
            response: {
              value: {
                shorts_loops_stems:
                  'http://download2.dev.shutterstock.com/gatekeeper/abc/original.zip',
                url: 'http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const getV2AudioMoodsRoute = createRoute({
  method: 'get',
  path: '/v2/audio/moods',
  tags: ['audio'],
  summary: 'List audio moods',
  description: 'This endpoint returns a list of all audio moods.',
  operationId: 'listMoods',
  request: {
    query: z.object({
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which language the moods will be returned in',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: MoodListSchema,
          examples: {
            response: {
              value: {
                data: [
                  'Action / Sports',
                  'Adventure / Discovery',
                  'Aerobics / Workout',
                  'Aggressive',
                ],
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2AudioSearchRoute = createRoute({
  method: 'get',
  path: '/v2/audio/search',
  tags: ['audio'],
  summary: 'Search for tracks',
  description:
    'This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.',
  operationId: 'searchTracks',
  request: {
    query: z.object({
      artists: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show tracks with one of the specified artist names or IDs',
            in: 'query',
            name: 'artists',
            schema: { items: { type: 'string' }, type: 'array', uniqueItems: false },
            required: false,
          },
        }),
      bpm: z
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
        .openapi({
          param: {
            deprecated: true,
            description:
              '(Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute',
            in: 'query',
            name: 'bpm',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      bpm_from: z
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
        .openapi({
          param: {
            description: 'Show tracks with the specified beats per minute or faster',
            example: 80,
            in: 'query',
            name: 'bpm_from',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      bpm_to: z
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
        .openapi({
          param: {
            description: 'Show tracks with the specified beats per minute or slower',
            example: 120,
            in: 'query',
            name: 'bpm_to',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      duration: z
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
        .openapi({
          param: {
            description: 'Show tracks with the specified duration in seconds',
            example: 180,
            in: 'query',
            name: 'duration',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      duration_from: z
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
        .openapi({
          param: {
            description: 'Show tracks with the specified duration or longer in seconds',
            example: 30,
            in: 'query',
            name: 'duration_from',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      duration_to: z
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
        .openapi({
          param: {
            description: 'Show tracks with the specified duration or shorter in seconds',
            example: 180,
            in: 'query',
            name: 'duration_to',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      genre: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show tracks with each of the specified genres; to get the list of genres, use `GET /v2/audio/genres`',
            example: ['Classical', 'Holiday'],
            explode: true,
            in: 'query',
            name: 'genre',
            schema: { items: { type: 'string' }, type: 'array', uniqueItems: false },
            required: false,
          },
        }),
      is_instrumental: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show instrumental music only',
            example: true,
            in: 'query',
            name: 'is_instrumental',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      instruments: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show tracks with each of the specified instruments; to get the list of instruments, use `GET /v2/audio/instruments`',
            example: ['Trumpet', 'Percussion'],
            explode: true,
            in: 'query',
            name: 'instruments',
            schema: { items: { type: 'string' }, type: 'array', uniqueItems: false },
            required: false,
          },
        }),
      moods: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show tracks with each of the specified moods; to get the list of moods, use `GET /v2/audio/moods`',
            example: ['Confident', 'Playful'],
            explode: true,
            in: 'query',
            name: 'moods',
            schema: { items: { type: 'string' }, type: 'array', uniqueItems: false },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 1,
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 500, minimum: 0, type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'One or more search terms separated by spaces',
            example: 'drum',
            in: 'query',
            name: 'query',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sort: z
        .enum(['score', 'ranking_all', 'artist', 'title', 'bpm', 'freshness', 'duration'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            example: 'score',
            in: 'query',
            name: 'sort',
            schema: {
              enum: ['score', 'ranking_all', 'artist', 'title', 'bpm', 'freshness', 'duration'],
              type: 'string',
              uniqueItems: true,
            },
            required: false,
          },
        }),
      sort_order: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort_order',
            schema: { default: 'desc', enum: ['asc', 'desc'], type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      vocal_description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show tracks with the specified vocal description (male, female)',
            example: 'female',
            in: 'query',
            name: 'vocal_description',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            example: 'full',
            in: 'query',
            name: 'view',
            schema: {
              default: 'minimal',
              enum: ['minimal', 'full'],
              type: 'string',
              uniqueItems: true,
            },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Fields to display in the response; see the documentation for the fields parameter in the overview section',
            in: 'query',
            name: 'fields',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      library: z
        .enum(['shutterstock', 'premier'])
        .default('premier')
        .exactOptional()
        .openapi({
          param: {
            description: 'Which library to search',
            in: 'query',
            name: 'library',
            schema: {
              default: 'premier',
              enum: ['shutterstock', 'premier'],
              type: 'string',
              uniqueItems: true,
            },
            required: false,
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which language to search in',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AudioSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    added_date: '2016-08-16',
                    artists: [{ name: 'Klimenko Music' }],
                    assets: {
                      clean_audio: { file_size: 35188408 },
                      preview_mp3: {
                        file_size: 4400203,
                        url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3',
                      },
                      preview_ogg: {
                        file_size: 4453197,
                        url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg',
                      },
                      waveform: {
                        file_size: 18778,
                        url: 'https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png',
                      },
                    },
                    bpm: 110,
                    contributor: { id: '2847971' },
                    description:
                      'Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.',
                    duration: 183,
                    genres: ['Dance/Electronic', 'Electro Pop', 'Pop/Rock'],
                    id: '442583',
                    instruments: ['Piano', 'Synth bass', 'Synth drums', 'Synthesizer'],
                    is_adult: false,
                    is_instrumental: true,
                    isrc: '',
                    keywords: [
                      'celebratory',
                      'chic',
                      'euphoric',
                      'good times',
                      'hip',
                      'optimistic',
                      'party',
                      'soaring',
                      'upbeat',
                    ],
                    language: 'en',
                    lyrics: '',
                    media_type: 'audio',
                    moods: [
                      'Bright',
                      'Confident',
                      'Fun',
                      'Happy',
                      'Inspiring',
                      'Optimistic',
                      'Playful',
                      'Sophisticated',
                      'Stylish',
                      'Uplifting',
                    ],
                    published_time: '2016-08-16T14:30:03-04:00',
                    recording_version: '',
                    releases: [],
                    similar_artists: [],
                    title: 'Another Tomorrow',
                    updated_time: '2016-08-18T17:59:33-04:00',
                    url: '',
                    vocal_description: '',
                  },
                ],
                page: 1,
                per_page: 5,
                search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
                total_count: 123455,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2AudioIdRoute = createRoute({
  method: 'get',
  path: '/v2/audio/{id}',
  tags: ['audio'],
  summary: 'Get details about audio tracks',
  description:
    'This endpoint shows information about a track, including its genres, instruments, and other attributes.',
  operationId: 'getTrack',
  request: {
    params: z.object({
      id: z
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
            description: 'Audio track ID',
            example: '442583',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      view: z
        .enum(['minimal', 'full'])
        .default('full')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            example: 'full',
            in: 'query',
            name: 'view',
            schema: { default: 'full', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AudioSchema,
          examples: {
            response: {
              value: {
                added_date: '2016-08-16',
                artists: [{ name: 'Klimenko Music' }],
                assets: {
                  clean_audio: { file_size: 35188408 },
                  preview_mp3: {
                    file_size: 4400203,
                    url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3',
                  },
                  preview_ogg: {
                    file_size: 4453197,
                    url: 'https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg',
                  },
                  waveform: {
                    file_size: 18778,
                    url: 'https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png',
                  },
                },
                bpm: 110,
                contributor: { id: '2847971' },
                description:
                  'Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.',
                duration: 183,
                genres: ['Dance/Electronic', 'Electro Pop', 'Pop/Rock'],
                id: '442583',
                instruments: ['Piano', 'Synth bass', 'Synth drums', 'Synthesizer'],
                is_adult: false,
                is_instrumental: true,
                isrc: '',
                keywords: [
                  'celebratory',
                  'chic',
                  'euphoric',
                  'good times',
                  'hip',
                  'optimistic',
                  'party',
                  'soaring',
                  'upbeat',
                ],
                language: 'en',
                lyrics: '',
                media_type: 'audio',
                moods: [
                  'Bright',
                  'Confident',
                  'Fun',
                  'Happy',
                  'Inspiring',
                  'Optimistic',
                  'Playful',
                  'Sophisticated',
                  'Stylish',
                  'Uplifting',
                ],
                published_time: '2016-08-16T14:30:03-04:00',
                recording_version: '',
                releases: [],
                similar_artists: [],
                title: 'Another Tomorrow',
                updated_time: '2016-08-18T17:59:33-04:00',
                url: '',
                vocal_description: '',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const postV2BulkSearchImagesRoute = createRoute({
  method: 'post',
  path: '/v2/bulk_search/images',
  tags: ['images'],
  summary: 'Run multiple image searches',
  description:
    'This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.',
  operationId: 'bulkSearchImages',
  request: {
    query: z.object({
      added_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images added on the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'added_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      added_date_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images added on or after the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'added_date_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      aspect_ratio_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().positive(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image',
            example: 1.7778,
            in: 'query',
            name: 'aspect_ratio_min',
            schema: { exclusiveMinimum: true, minimum: 0, type: 'number' },
            required: false,
          },
        }),
      aspect_ratio_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().positive(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image',
            example: 1.7778,
            in: 'query',
            name: 'aspect_ratio_max',
            schema: { exclusiveMinimum: true, minimum: 0, type: 'number' },
            required: false,
          },
        }),
      aspect_ratio: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().positive(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image',
            example: 1.7778,
            in: 'query',
            name: 'aspect_ratio',
            schema: { exclusiveMinimum: true, minimum: 0, type: 'number' },
            required: false,
          },
        }),
      added_date_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images added before the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'added_date_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with the specified Shutterstock-defined category; specify a category name or ID',
            in: 'query',
            name: 'category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      color: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors",
            example: '4F21EA',
            in: 'query',
            name: 'color',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images with the specified contributor names or IDs, allows multiple',
            example: ['123456'],
            in: 'query',
            name: 'contributor',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      contributor_country: z
        .xor([z.array(z.string()), z.array(z.string())])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search',
            example: 'US',
            in: 'query',
            name: 'contributor_country',
            schema: {
              oneOf: [
                { items: { format: 'country-code-2', type: 'string' }, type: 'array' },
                { items: { format: 'negated-country-code-2', type: 'string' }, type: 'array' },
              ],
            },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Fields to display in the response; see the documentation for the fields parameter in the overview section',
            in: 'query',
            name: 'fields',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      height: z
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
        .openapi({
          param: {
            deprecated: true,
            description:
              '(Deprecated; use height_from and height_to instead) Show images with the specified height',
            in: 'query',
            name: 'height',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      height_from: z
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
        .openapi({
          param: {
            description: 'Show images with the specified height or larger, in pixels',
            example: 1080,
            in: 'query',
            name: 'height_from',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      height_to: z
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
        .openapi({
          param: {
            description: 'Show images with the specified height or smaller, in pixels',
            example: 1080,
            in: 'query',
            name: 'height_to',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      image_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['photo', 'illustration', 'vector'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images of the specified type',
            example: 'photo',
            in: 'query',
            name: 'image_type',
            schema: {
              items: { enum: ['photo', 'illustration', 'vector'], type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      keyword_safe_search: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Hide results with potentially unsafe keywords',
            in: 'query',
            name: 'keyword_safe_search',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      language: LanguageSchema.openapi({
        param: {
          description: 'Set query and result language (uses Accept-Language header if not set)',
          example: 'fr',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      license: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['commercial', 'editorial', 'enhanced']).default('commercial')),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only images with the specified license',
            in: 'query',
            name: 'license',
            schema: {
              items: {
                default: 'commercial',
                enum: ['commercial', 'editorial', 'enhanced'],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      model: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show image results with the specified model IDs',
            example: ['12345', '67890'],
            in: 'query',
            name: 'model',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      orientation: z
        .enum(['horizontal', 'vertical'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show image results with horizontal or vertical orientation',
            example: 'vertical',
            in: 'query',
            name: 'orientation',
            schema: { enum: ['horizontal', 'vertical'], type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: 1,
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(20),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 10,
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 20, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      people_model_released: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images of people with a signed model release',
            example: true,
            in: 'query',
            name: 'people_model_released',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      people_age: z
        .enum(['infants', 'children', 'teenagers', '20s', '30s', '40s', '50s', '60s', 'older'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images that feature people of the specified age category',
            example: '20s',
            in: 'query',
            name: 'people_age',
            schema: {
              enum: [
                'infants',
                'children',
                'teenagers',
                '20s',
                '30s',
                '40s',
                '50s',
                '60s',
                'older',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      people_ethnicity: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'african',
              'african_american',
              'black',
              'brazilian',
              'chinese',
              'caucasian',
              'east_asian',
              'hispanic',
              'japanese',
              'middle_eastern',
              'native_american',
              'pacific_islander',
              'south_asian',
              'southeast_asian',
              'other',
              'NOT african',
              'NOT african_american',
              'NOT black',
              'NOT brazilian',
              'NOT chinese',
              'NOT caucasian',
              'NOT east_asian',
              'NOT hispanic',
              'NOT japanese',
              'NOT middle_eastern',
              'NOT native_american',
              'NOT pacific_islander',
              'NOT south_asian',
              'NOT southeast_asian',
              'NOT other',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities',
            example: 'hispanic',
            in: 'query',
            name: 'people_ethnicity',
            schema: {
              items: {
                enum: [
                  'african',
                  'african_american',
                  'black',
                  'brazilian',
                  'chinese',
                  'caucasian',
                  'east_asian',
                  'hispanic',
                  'japanese',
                  'middle_eastern',
                  'native_american',
                  'pacific_islander',
                  'south_asian',
                  'southeast_asian',
                  'other',
                  'NOT african',
                  'NOT african_american',
                  'NOT black',
                  'NOT brazilian',
                  'NOT chinese',
                  'NOT caucasian',
                  'NOT east_asian',
                  'NOT hispanic',
                  'NOT japanese',
                  'NOT middle_eastern',
                  'NOT native_american',
                  'NOT pacific_islander',
                  'NOT south_asian',
                  'NOT southeast_asian',
                  'NOT other',
                ],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      people_gender: z
        .enum(['male', 'female', 'both'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images with people of the specified gender',
            example: 'both',
            in: 'query',
            name: 'people_gender',
            schema: { enum: ['male', 'female', 'both'], type: 'string' },
            required: false,
          },
        }),
      people_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(4),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images with the specified number of people',
            example: 2,
            in: 'query',
            name: 'people_number',
            schema: { maximum: 4, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      region: z
        .union([z.string(), z.ipv4()])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country",
            example: 'US',
            in: 'query',
            name: 'region',
            schema: {
              anyOf: [
                { format: 'country-code-2', type: 'string' },
                { format: 'ipv4', type: 'string' },
              ],
            },
            required: false,
          },
        }),
      safe: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable or disable safe search',
            in: 'query',
            name: 'safe',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'popular', 'relevance', 'random'])
        .default('popular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            in: 'query',
            name: 'sort',
            schema: {
              default: 'popular',
              enum: ['newest', 'popular', 'relevance', 'random'],
              type: 'string',
            },
            required: false,
          },
        }),
      spellcheck_query: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Spellcheck the search query and return results on suggested spellings',
            in: 'query',
            name: 'spellcheck_query',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      width: z
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
        .openapi({
          param: {
            deprecated: true,
            description:
              '(Deprecated; use width_from and width_to instead) Show images with the specified width',
            in: 'query',
            name: 'width',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      width_from: z
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
        .openapi({
          param: {
            description: 'Show images with the specified width or larger, in pixels',
            example: 1920,
            in: 'query',
            name: 'width_from',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      width_to: z
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
        .openapi({
          param: {
            description: 'Show images with the specified width or smaller, in pixels',
            example: 1920,
            in: 'query',
            name: 'width_to',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    body: {
      description:
        'List of queries to request results for and filters to apply per query; these values override the defaults in the query parameters',
      content: {
        'application/json': {
          schema: BulkImageSearchRequestSchema,
          examples: {
            default: { value: { $ref: '#/components/schemas/BulkImageSearchRequest/example' } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: BulkImageSearchResultsSchema,
          examples: {
            response: {
              value: {
                results: [
                  {
                    data: [
                      {
                        aspect: 1.5,
                        assets: {
                          huge_thumb: {
                            height: 260,
                            url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
                            width: 390,
                          },
                          large_thumb: {
                            height: 100,
                            url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                            width: 150,
                          },
                          preview: {
                            height: 300,
                            url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                            width: 450,
                          },
                          preview_1000: {
                            height: 667,
                            url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
                            width: 1000,
                          },
                          preview_1500: {
                            height: 1000,
                            url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                            width: 1500,
                          },
                          small_thumb: {
                            height: 67,
                            url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                            width: 100,
                          },
                        },
                        contributor: { id: '250738318' },
                        description: 'cropped image of woman gardening',
                        has_model_release: true,
                        id: '1572478477',
                        image_type: 'photo',
                        media_type: 'image',
                      },
                    ],
                    page: 1,
                    per_page: 5,
                    search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
                    spellcheck_info: {},
                    total_count: 45,
                  },
                  {
                    data: [],
                    page: 1,
                    per_page: 5,
                    search_id: '749090bb-2967-4a20-b22e-c800dc845e11',
                    spellcheck_info: {},
                    total_count: 0,
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2CatalogCollectionsRoute = createRoute({
  method: 'get',
  path: '/v2/catalog/collections',
  tags: ['catalog'],
  summary: 'List catalog collections',
  description: 'This endpoint returns a list of catalog collections.',
  operationId: 'getCollections',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: 1,
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(2).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 20,
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 50, minimum: 2, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      shared: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set to true to omit collections that you own and return only collections  that are shared with you',
            in: 'query',
            name: 'shared',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CatalogCollectionDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    cover_asset: {
                      asset: {
                        id: '1690105108',
                        name: 'Young couple playing tennis at the court',
                        type: 'image',
                      },
                      created_time: '2021-06-10T13:26:09-04:00',
                      id: '123',
                    },
                    created_time: '2021-05-20T16:15:22-04:00',
                    id: '126351028',
                    name: 'My collection',
                    role_assignments: {
                      collection_id: '126351028',
                      roles: {
                        editors: [{ email: 'userTwo@org.com', id: '987', type: 'USER' }],
                        owners: [{ email: 'userOne@org.com', id: '321', type: 'USER' }],
                        viewers: [],
                      },
                    },
                    total_item_count: 2,
                    updated_time: '2021-06-10T13:26:09-04:00',
                    visibility: 'public',
                  },
                ],
                page: 1,
                per_page: 20,
                total_count: 1,
              },
            },
          },
        },
      },
    },
    400: { description: 'Invalid status value' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2CatalogCollectionsRoute = createRoute({
  method: 'post',
  path: '/v2/catalog/collections',
  tags: ['catalog'],
  summary: 'Create catalog collections',
  description:
    'This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.',
  operationId: 'createCollection',
  request: {
    body: {
      description: 'Create a catalog collection and, optionally, add items.',
      content: {
        'application/json': {
          schema: CreateCatalogCollectionSchema,
          examples: {
            default: {
              description: 'Create Collection Request',
              value: {
                items: [{ asset: { id: '1690105108', type: 'image' } }],
                name: 'New Collection',
                visibility: 'public',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CatalogCollectionSchema,
          examples: {
            response: {
              value: {
                cover_asset: {
                  asset: {
                    id: '1690105108',
                    name: 'Young couple playing tennis at the court',
                    type: 'image',
                  },
                  created_time: '2021-06-10T13:26:09-04:00',
                  id: '123',
                },
                created_time: '2021-05-20T16:15:22-04:00',
                id: '126351028',
                name: 'My collection',
                role_assignments: {
                  collection_id: '126351028',
                  roles: {
                    editors: [{ email: 'userTwo@org.com', id: '987', type: 'USER' }],
                    owners: [{ email: 'userOne@org.com', id: '321', type: 'USER' }],
                    viewers: [],
                  },
                },
                total_item_count: 2,
                updated_time: '2021-06-10T13:26:09-04:00',
                visibility: 'public',
              },
            },
          },
        },
      },
    },
  },
  security: [{ customer_accessCode: ['collections.view', 'collections.edit'] }],
})

export const deleteV2CatalogCollectionsCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/v2/catalog/collections/{collection_id}',
  tags: ['catalog'],
  summary: 'Delete catalog collections',
  description:
    "This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.",
  operationId: 'deleteCollection',
  request: {
    params: z.object({
      collection_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the collection to delete',
            example: '126351028',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'OK' }, 404: { description: 'Collection not found' } },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const patchV2CatalogCollectionsCollectionIdRoute = createRoute({
  method: 'patch',
  path: '/v2/catalog/collections/{collection_id}',
  tags: ['catalog'],
  summary: 'Update collection metadata',
  description: 'This endpoint updates the metadata of a catalog collection.',
  operationId: 'updateCollection',
  request: {
    params: z.object({
      collection_id: z
        .string()
        .openapi({
          param: {
            description: 'ID of collection that needs to be modified',
            example: '126351028',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Collections Metadata to update',
      content: {
        'application/json': {
          schema: UpdateCatalogCollectionSchema,
          examples: {
            default: {
              description: 'Collection Metadata',
              value: { cover_asset: { id: '123' }, name: 'My Collection', visibility: 'public' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CatalogCollectionSchema,
          examples: {
            response: {
              value: {
                cover_asset: {
                  asset: {
                    id: '1690105108',
                    name: 'Young couple playing tennis at the court',
                    type: 'image',
                  },
                  created_time: '2021-06-10T13:26:09-04:00',
                  id: '123',
                },
                created_time: '2021-05-20T16:15:22-04:00',
                id: '126351028',
                name: 'My collection',
                role_assignments: {
                  collection_id: '126351028',
                  roles: {
                    editors: [{ email: 'userTwo@org.com', id: '987', type: 'USER' }],
                    owners: [{ email: 'userOne@org.com', id: '321', type: 'USER' }],
                    viewers: [],
                  },
                },
                total_item_count: 2,
                updated_time: '2021-06-10T13:26:09-04:00',
                visibility: 'public',
              },
            },
          },
        },
      },
    },
  },
  security: [{ customer_accessCode: ['collections.view', 'collections.edit'] }],
})

export const postV2CatalogCollectionsCollectionIdItemsRoute = createRoute({
  method: 'post',
  path: '/v2/catalog/collections/{collection_id}/items',
  tags: ['catalog'],
  summary: 'Add items to catalog collections',
  description:
    "This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.",
  operationId: 'addToCollection',
  request: {
    params: z.object({
      collection_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the collection to add assets to',
            example: '126351028',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Collection item attributes to add to collection',
      content: {
        'application/json': {
          schema: CreateCatalogCollectionItemsSchema,
          examples: {
            default: {
              description: 'Add collection items',
              value: { items: [{ asset: { id: '1690105108', type: 'image' } }] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CatalogCollectionSchema,
          examples: {
            response: {
              value: {
                cover_asset: {
                  asset: {
                    id: '1690105108',
                    name: 'Young couple playing tennis at the court',
                    type: 'image',
                  },
                  created_time: '2021-06-10T13:26:09-04:00',
                  id: '123',
                },
                created_time: '2021-05-20T16:15:22-04:00',
                id: '126351028',
                name: 'My collection',
                role_assignments: {
                  collection_id: '126351028',
                  roles: {
                    editors: [{ email: 'userTwo@org.com', id: '987', type: 'USER' }],
                    owners: [{ email: 'userOne@org.com', id: '321', type: 'USER' }],
                    viewers: [],
                  },
                },
                total_item_count: 2,
                updated_time: '2021-06-10T13:26:09-04:00',
                visibility: 'public',
              },
            },
          },
        },
      },
    },
  },
  security: [{ customer_accessCode: ['collections.view', 'collections.edit'] }],
})

export const deleteV2CatalogCollectionsCollectionIdItemsRoute = createRoute({
  method: 'delete',
  path: '/v2/catalog/collections/{collection_id}/items',
  tags: ['catalog'],
  summary: 'Remove items from catalog collection',
  description:
    "This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.",
  operationId: 'deleteFromCollection',
  request: {
    params: z.object({
      collection_id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the collection to remove assets from',
            example: '126351028',
            in: 'path',
            name: 'collection_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Items to remove from the collection',
      content: {
        'application/json': {
          schema: RemoveCatalogCollectionItemsSchema,
          examples: {
            default: { description: 'Remove collection items', value: { items: [{ id: '123' }] } },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CatalogCollectionSchema,
          examples: {
            response: {
              value: {
                cover_asset: {
                  asset: {
                    id: '1690105108',
                    name: 'Young couple playing tennis at the court',
                    type: 'image',
                  },
                  created_time: '2021-06-10T13:26:09-04:00',
                  id: '123',
                },
                created_time: '2021-05-20T16:15:22-04:00',
                id: '126351028',
                name: 'My collection',
                role_assignments: {
                  collection_id: '126351028',
                  roles: {
                    editors: [{ email: 'userTwo@org.com', id: '987', type: 'USER' }],
                    owners: [{ email: 'userOne@org.com', id: '321', type: 'USER' }],
                    viewers: [],
                  },
                },
                total_item_count: 2,
                updated_time: '2021-06-10T13:26:09-04:00',
                visibility: 'public',
              },
            },
          },
        },
      },
    },
  },
  security: [{ customer_accessCode: ['collections.view', 'collections.edit'] }],
})

export const getV2CatalogSearchRoute = createRoute({
  method: 'get',
  path: '/v2/catalog/search',
  tags: ['catalog'],
  summary: 'Search catalogs for assets',
  description:
    "This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.",
  operationId: 'searchCatalog',
  request: {
    query: z.object({
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: 1,
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 50,
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 500, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'One or more search terms separated by spaces',
            example: 'dogs on the beach',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      collection_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by collection id',
            in: 'query',
            name: 'collection_id',
            schema: {
              example: ['123456', '456789', '13579'],
              items: { type: 'string' },
              maxItems: 50,
              type: 'array',
            },
            required: false,
          },
          example: ['123456', '456789', '13579'],
        }),
      asset_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum(['image', 'video', 'audio', 'elements', 'editorial-image', 'editorial-video']),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by asset type',
            in: 'query',
            name: 'asset_type',
            schema: {
              example: ['image', 'editorial-image'],
              items: {
                enum: ['image', 'video', 'audio', 'elements', 'editorial-image', 'editorial-video'],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
          example: ['image', 'editorial-image'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CatalogCollectionItemDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    asset: {
                      id: '1690105108',
                      name: 'Young couple playing tennis at the court',
                      type: 'image',
                    },
                    collection_ids: ['126351028'],
                    created_time: '2021-06-10T13:26:09-04:00',
                    id: '123',
                  },
                ],
                page: 1,
                per_page: 1,
                total_count: 82,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const getV2ContributorsRoute = createRoute({
  method: 'get',
  path: '/v2/contributors',
  tags: ['contributors'],
  summary: 'Get details about multiple contributors',
  description:
    'This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.',
  operationId: 'getContributorList',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'One or more contributor IDs',
            example: [800506, 1653538],
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ContributorProfileDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    about: "John Doe's photographs",
                    contributor_type: ['photographer'],
                    display_name: 'John Doe',
                    equipment: ['Nikon', 'Fuji'],
                    id: '12345678',
                    location: 'US',
                    portfolio_url: 'https://www.shutterstock.com/g/jdoe',
                    social_media: {
                      facebook: 'http://example.com/jdoe',
                      google_plus: 'http://example.com/jdoe',
                      linkedin: 'http://example.com/jdoe',
                      pinterest: 'http://example.com/jdoe',
                      tumblr: 'http://example.com/jdoe',
                      twitter: 'http://example.com/jdoe',
                    },
                    styles: ['landscape', 'nature', 'footage_travel'],
                    subjects: ['animals', 'landmarks', 'nature', 'objects', 'recreation'],
                    website: 'http://example.com/profiles/jdoe',
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 15,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: [] }, { basic: [] }],
})

export const getV2ContributorsContributorIdRoute = createRoute({
  method: 'get',
  path: '/v2/contributors/{contributor_id}',
  tags: ['contributors'],
  summary: 'Get details about a single contributor',
  description:
    'This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.',
  operationId: 'getContributor',
  request: {
    params: z.object({
      contributor_id: z
        .string()
        .openapi({
          param: {
            description: 'Contributor ID',
            example: 1653538,
            in: 'path',
            name: 'contributor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ContributorProfileSchema,
          examples: {
            response: {
              value: {
                about: "John Doe's photographs",
                contributor_type: ['photographer'],
                display_name: 'John Doe',
                equipment: ['Nikon', 'Fuji'],
                id: '12345678',
                location: 'US',
                portfolio_url: 'https://www.shutterstock.com/g/jdoe',
                social_media: {
                  facebook: 'http://example.com/jdoe',
                  google_plus: 'http://example.com/jdoe',
                  linkedin: 'http://example.com/jdoe',
                  pinterest: 'http://example.com/jdoe',
                  tumblr: 'http://example.com/jdoe',
                  twitter: 'http://example.com/jdoe',
                },
                styles: ['landscape', 'nature', 'footage_travel'],
                subjects: ['animals', 'landmarks', 'nature', 'objects', 'recreation'],
                website: 'http://example.com/profiles/jdoe',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: [] }, { basic: [] }],
})

export const getV2ContributorsContributorIdCollectionsRoute = createRoute({
  method: 'get',
  path: '/v2/contributors/{contributor_id}/collections',
  tags: ['contributors'],
  summary: "List contributors' collections",
  description: 'This endpoint lists collections based on contributor ID.',
  operationId: 'getContributorCollectionsList',
  request: {
    params: z.object({
      contributor_id: z
        .string()
        .openapi({
          param: {
            description: 'Contributor ID',
            example: 800506,
            in: 'path',
            name: 'contributor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      sort: z
        .enum(['newest', 'last_updated', 'item_count'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { enum: ['newest', 'last_updated', 'item_count'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    cover_item: { id: '297886754' },
                    id: '293542904',
                    items_updated_time: '2021-05-20T16:15:22-04:00',
                    name: 'My collection',
                    total_item_count: 85,
                  },
                ],
                page: 1,
                per_page: 100,
                total_count: 1,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Contributor not found' },
  },
  security: [{ customer_accessCode: [] }, { basic: [] }],
})

export const getV2ContributorsContributorIdCollectionsIdRoute = createRoute({
  method: 'get',
  path: '/v2/contributors/{contributor_id}/collections/{id}',
  tags: ['contributors'],
  summary: "Get details about contributors' collections",
  description:
    "This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.",
  operationId: 'getContributorCollections',
  request: {
    params: z.object({
      contributor_id: z
        .string()
        .openapi({
          param: {
            description: 'Contributor ID',
            example: 800506,
            in: 'path',
            name: 'contributor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID that belongs to the contributor',
            example: 1991678,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionSchema,
          examples: {
            response: {
              value: {
                cover_item: { id: '297886754' },
                id: '293542904',
                items_updated_time: '2021-05-20T16:15:22-04:00',
                name: 'My collection',
                total_item_count: 85,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Set not found' },
  },
  security: [{ customer_accessCode: [] }, { basic: [] }],
})

export const getV2ContributorsContributorIdCollectionsIdItemsRoute = createRoute({
  method: 'get',
  path: '/v2/contributors/{contributor_id}/collections/{id}/items',
  tags: ['contributors'],
  summary: "Get the items in contributors' collections",
  description:
    "This endpoint lists the IDs of items in a contributor's collection and the date that each was added.",
  operationId: 'getContributorCollectionItems',
  request: {
    params: z.object({
      contributor_id: z
        .string()
        .openapi({
          param: {
            description: 'Contributor ID',
            example: 800506,
            in: 'path',
            name: 'contributor_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID that belongs to the contributor',
            example: 1991678,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionItemDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  { added_time: '2014-05-01T05:49:46-04:00', id: '168592952', media_type: 'image' },
                  { added_time: '2014-05-01T05:49:59-04:00', id: '88269310', media_type: 'image' },
                  { added_time: '2014-05-01T05:50:21-04:00', id: '94373977', media_type: 'image' },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Set not found' },
  },
  security: [{ customer_accessCode: [] }, { basic: [] }],
})

export const postV2CvImagesRoute = createRoute({
  method: 'post',
  path: '/v2/cv/images',
  tags: ['computer_vision'],
  summary: 'Upload images',
  description:
    'This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.',
  operationId: 'uploadImage',
  request: {
    body: {
      description:
        'A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height',
      content: {
        'application/json': {
          schema: ImageCreateRequestSchema,
          examples: {
            default: {
              value: {
                base64_image:
                  'R0lGODlhgACAAPcAAEwiBLyaLOzNUNmWFNjOrNSuN7x6PPzqeOTMgfKSDMyuTPzwsdi2dHwuBPzbVu',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: ComputerVisionImageCreateResponseSchema,
          examples: { response: { value: { upload_id: 'Udb14e1c3540bdbf82b4b3fe12d3a44f2' } } },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    413: { description: 'Payload Too Large' },
    415: { description: 'Unsupported Media Type' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2CvKeywordsRoute = createRoute({
  method: 'get',
  path: '/v2/cv/keywords',
  tags: ['computer_vision'],
  summary: 'List suggested keywords',
  description:
    'This endpoint returns a list of suggested keywords for a media item that you specify or upload.',
  operationId: 'getKeywords',
  request: {
    query: z.object({
      asset_id: z.xor([z.string(), z.string()]).openapi({
        param: {
          description: 'The asset ID or upload ID to suggest keywords for',
          example: 'U6ba16262e3bc2db470b8e3cfa8aaab25',
          in: 'query',
          name: 'asset_id',
          required: true,
          schema: {
            oneOf: [
              { format: 'asset-upload-id', type: 'string' },
              { format: 'asset-id', type: 'string' },
            ],
          },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: KeywordDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  'nature',
                  'wildlife',
                  'animal',
                  'cute',
                  'bamboo',
                  'panda',
                  'china',
                  'wild',
                  'endangered',
                  'black',
                  'bear',
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    415: { description: 'Unsupported Media Type' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2CvSimilarImagesRoute = createRoute({
  method: 'get',
  path: '/v2/cv/similar/images',
  tags: ['computer_vision'],
  summary: 'List similar images',
  description:
    'This endpoint returns images that are visually similar to an image that you specify or upload.',
  operationId: 'getSimilarImages',
  request: {
    query: z.object({
      asset_id: z
        .string()
        .openapi({
          param: {
            description: 'The asset ID or upload ID to find similar images for',
            example: 'U6ba16262e3bc2db470b8e3cfa8aaab25',
            in: 'query',
            name: 'asset_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      license: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['commercial', 'editorial'])),
        )
        .default(['commercial'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only images with the specified license',
            in: 'query',
            name: 'license',
            schema: {
              default: ['commercial'],
              items: { enum: ['commercial', 'editorial'], type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      safe: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable or disable safe search',
            in: 'query',
            name: 'safe',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          example: 'es',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.5,
                    assets: {
                      huge_thumb: {
                        height: 260,
                        url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
                        width: 390,
                      },
                      large_thumb: {
                        height: 100,
                        url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 150,
                      },
                      preview: {
                        height: 300,
                        url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 450,
                      },
                      preview_1000: {
                        height: 667,
                        url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
                        width: 1000,
                      },
                      preview_1500: {
                        height: 1000,
                        url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 1500,
                      },
                      small_thumb: {
                        height: 67,
                        url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 100,
                      },
                    },
                    contributor: { id: '250738318' },
                    description: 'cropped image of woman gardening',
                    has_model_release: true,
                    id: '1572478477',
                    image_type: 'photo',
                    media_type: 'image',
                  },
                ],
                page: 1,
                per_page: 5,
                search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
                spellcheck_info: {},
                total_count: 45,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2CvSimilarVideosRoute = createRoute({
  method: 'get',
  path: '/v2/cv/similar/videos',
  tags: ['computer_vision'],
  summary: 'List similar videos',
  description:
    'This endpoint returns videos that are visually similar to an image that you specify or upload.',
  operationId: 'getSimilarVideos',
  request: {
    query: z.object({
      asset_id: z
        .string()
        .openapi({
          param: {
            description: 'The asset ID or upload ID to find similar videos for',
            example: 'U6ba16262e3bc2db470b8e3cfa8aaab25',
            in: 'query',
            name: 'asset_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      license: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['commercial', 'editorial'])),
        )
        .default(['commercial'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only videos with the specified license',
            in: 'query',
            name: 'license',
            schema: {
              default: ['commercial'],
              items: { enum: ['commercial', 'editorial'], type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      safe: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable or disable safe search',
            in: 'query',
            name: 'safe',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          example: 'es',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: VideoSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.778,
                    aspect_ratio: '16:9',
                    assets: {
                      preview_jpg: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                      },
                      preview_mp4: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                      },
                      preview_webm: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                      },
                      thumb_jpg: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                      },
                      thumb_mp4: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                      },
                      thumb_webm: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                      },
                    },
                    contributor: { id: '4411978' },
                    description:
                      'Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness',
                    duration: 14.081,
                    has_model_release: true,
                    id: '1033184651',
                    media_type: 'video',
                  },
                ],
                page: 1,
                per_page: 5,
                search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
                total_count: 123,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialCategoriesRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/categories',
  tags: ['editorial_images'],
  summary: '(Deprecated) List editorial categories',
  description:
    'Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.',
  operationId: 'getEditorialCategories',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialCategoryResultsSchema,
          examples: {
            response: {
              value: { data: [{ name: 'Animal' }, { name: 'Awards' }, { name: 'Art' }] },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  deprecated: true,
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialImagesCategoriesRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/images/categories',
  tags: ['editorial_images'],
  summary: 'List editorial categories',
  description:
    'This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.',
  operationId: 'listEditorialImageCategories',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialImageCategoryResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  { name: 'Animal' },
                  { name: 'Awards' },
                  { name: 'Art' },
                  { name: 'Film Stills' },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialImagesLicensesRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/images/licenses',
  tags: ['editorial_images'],
  summary: 'List editorial image licenses',
  description: 'This endpoint lists existing editorial image licenses.',
  operationId: 'getEditorialImageLicenseList',
  request: {
    query: z.object({
      image_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses for the specified editorial image ID',
            example: '12345678',
            in: 'query',
            name: 'image_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      license: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show editorial images that are available with the specified license name',
            example: 'premier_editorial_all_digital',
            in: 'query',
            name: 'license',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(200),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 200, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by username of licensee',
            example: 'aUniqueUsername',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created on or after the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'start_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created before the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'end_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      download_availability: z
        .enum(['all', 'downloadable', 'non_downloadable'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by download availability',
            in: 'query',
            name: 'download_availability',
            schema: {
              default: 'all',
              enum: ['all', 'downloadable', 'non_downloadable'],
              type: 'string',
            },
            required: false,
          },
        }),
      team_history: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to see license history for all members of your team.',
            in: 'query',
            name: 'team_history',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DownloadHistoryDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    download_time: '2021-07-15T15:46:34.000Z',
                    id: 'e1eba3833793e77188d22caae8bac9f2cd',
                    image: { format: { size: 'original' }, id: '9763363ao' },
                    is_downloadable: false,
                    license: 'premier_editorial_all_digital',
                    metadata: {
                      client: 'Company A',
                      job: 'Important project',
                      other: 'Important media',
                      purchase_order: '123456',
                    },
                    subscription_id: 's12345678',
                    user: { username: 'editorial_test_account_002' },
                  },
                ],
                page: 1,
                per_page: 1,
                total_count: 2890,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const postV2EditorialImagesLicensesRoute = createRoute({
  method: 'post',
  path: '/v2/editorial/images/licenses',
  tags: ['editorial_images'],
  summary: 'License editorial content',
  description:
    'This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.',
  operationId: 'licenseEditorialImages',
  request: {
    body: {
      description: 'License editorial content',
      content: {
        'application/json': {
          schema: LicenseEditorialContentRequestSchema,
          example: {
            country: 'USA',
            editorial: [
              {
                editorial_id: '10687730b',
                license: 'premier_editorial_comp',
                metadata: {
                  customer_id: '12345',
                  geo_location: 'US',
                  number_viewed: '15',
                  search_term: 'dog',
                },
                size: 'original',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LicenseEditorialContentResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    allotment_charge: 1,
                    download: {
                      url: 'https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].jpg?Expires=1524717323',
                    },
                    editorial_id: '69656358',
                  },
                ],
                page: 1,
                per_page: 1,
                total_count: 12,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  security: [{ customer_accessCode: ['licenses.create', 'purchases.view'] }],
})

export const getV2EditorialImagesLivefeedsRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/images/livefeeds',
  tags: ['editorial_images'],
  summary: 'Get editorial livefeed list',
  operationId: 'getEditorialImageLivefeedList',
  request: {
    query: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Returns only livefeeds that are available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialImageLivefeedListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    cover_item: {
                      height: 117,
                      id: '9763363q',
                      url: 'https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg',
                      width: 170,
                    },
                    created_time: '2018-07-17T12:42:03+00:00',
                    id: '2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202',
                    name: 'Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2',
                    total_item_count: 38,
                  },
                ],
                page: 1,
                per_page: 1,
                total_count: 5300,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialImagesLivefeedsIdRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/images/livefeeds/{id}',
  tags: ['editorial_images'],
  summary: 'Get editorial livefeed',
  operationId: 'getEditorialImageLivefeed',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Editorial livefeed ID; must be an URI encoded string',
            example: '2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Returns only if the livefeed is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialImageLivefeedSchema,
          examples: {
            response: {
              value: {
                cover_item: {
                  height: 117,
                  id: '9763363q',
                  url: 'https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg',
                  width: 170,
                },
                created_time: '2018-07-17T12:42:03+00:00',
                id: '2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202',
                name: 'Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2',
                total_item_count: 38,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialImagesLivefeedsIdItemsRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/images/livefeeds/{id}/items',
  tags: ['editorial_images'],
  summary: 'Get editorial livefeed items',
  operationId: 'getEditorialImageLivefeedItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Editorial livefeed ID; must be an URI encoded string',
            example: '2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Returns only if the livefeed items are available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialImageContentDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.621,
                    assets: {
                      medium_jpg: {
                        display_name: 'Med',
                        height: 617,
                        is_licensable: true,
                        width: 1000,
                      },
                      original: {
                        display_name: 'Original',
                        height: 3693,
                        is_licensable: true,
                        width: 5985,
                      },
                      small_jpg: {
                        display_name: 'Small',
                        height: 309,
                        is_licensable: true,
                        width: 500,
                      },
                      thumb_170: {
                        height: 105,
                        url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
                        width: 170,
                      },
                      thumb_220: {
                        height: 136,
                        url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
                        width: 220,
                      },
                      watermark_1500: {
                        height: 926,
                        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
                        width: 1500,
                      },
                      watermark_450: {
                        height: 278,
                        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
                        width: 450,
                      },
                    },
                    byline: 'Jon Super/AP/Shutterstock',
                    caption: '',
                    categories: [{ name: 'Sport' }],
                    date_taken: '2021-05-11',
                    description:
                      "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
                    id: '10687730b',
                    keywords: [
                      'england',
                      'europe',
                      'leicester city fc',
                      'manchester',
                      'manchester united fc',
                      "men's soccer",
                      "men's sports",
                      'premier league',
                      'professional soccer',
                      'soccer',
                      'sports',
                      'united kingdom',
                      'western europe',
                      'wsoc',
                    ],
                    title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
                  },
                ],
                page: 1,
                per_page: 1,
                total_count: 23,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialImagesSearchRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/images/search',
  tags: ['editorial_images'],
  summary: 'Search editorial images',
  description:
    'This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.',
  operationId: 'searchEditorialImages',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'One or more search terms separated by spaces',
            example: 'The Academy Awards',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['relevant', 'newest', 'oldest'])
        .default('relevant')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            in: 'query',
            name: 'sort',
            schema: { default: 'relevant', enum: ['relevant', 'newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list',
            example: 'Alone,Performing',
            in: 'query',
            name: 'category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Show only editorial content that is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
      supplier_code: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial content from certain suppliers',
            in: 'query',
            name: 'supplier_code',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      date_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial content generated on or after a specific date',
            example: '2020-05-29',
            in: 'query',
            name: 'date_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      date_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial content generated on or before a specific date',
            example: '2021-05-29',
            in: 'query',
            name: 'date_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The cursor of the page with which to start fetching results; this cursor is returned from previous requests',
            example: 'eyJ2IjoxLCJzIjoxfQ==',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.621,
                    assets: {
                      medium_jpg: {
                        display_name: 'Med',
                        height: 617,
                        is_licensable: true,
                        width: 1000,
                      },
                      original: {
                        display_name: 'Original',
                        height: 3693,
                        is_licensable: true,
                        width: 5985,
                      },
                      small_jpg: {
                        display_name: 'Small',
                        height: 309,
                        is_licensable: true,
                        width: 500,
                      },
                      thumb_170: {
                        height: 105,
                        url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
                        width: 170,
                      },
                      thumb_220: {
                        height: 136,
                        url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
                        width: 220,
                      },
                      watermark_1500: {
                        height: 926,
                        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
                        width: 1500,
                      },
                      watermark_450: {
                        height: 278,
                        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
                        width: 450,
                      },
                    },
                    byline: 'Jon Super/AP/Shutterstock',
                    caption: '',
                    categories: [{ name: 'Sport' }],
                    date_taken: '2021-05-11',
                    description:
                      "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
                    id: '10687730b',
                    keywords: [
                      'england',
                      'europe',
                      'leicester city fc',
                      'manchester',
                      'manchester united fc',
                      "men's soccer",
                      "men's sports",
                      'premier league',
                      'professional soccer',
                      'soccer',
                      'sports',
                      'united kingdom',
                      'western europe',
                      'wsoc',
                    ],
                    title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
                  },
                ],
                next: 'eyJ2IjoyLCJzIjoxLCJwIjpbMF19',
                per_page: 1,
                prev: '',
                search_id: 'BaMzOAkpHIvfnuWVRFs1ag',
                total_count: 46845,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialImagesUpdatedRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/images/updated',
  tags: ['editorial_images'],
  summary: 'List updated content',
  description:
    'This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.',
  operationId: 'getUpdatedEditorialImages',
  request: {
    query: z.object({
      type: z
        .enum(['edit', 'addition'])
        .openapi({
          param: {
            description:
              'Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted',
            example: 'edit',
            in: 'query',
            name: 'type',
            required: true,
            schema: { enum: ['edit', 'addition'], type: 'string' },
          },
        }),
      date_updated_start: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description:
              'Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'date_updated_start',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_updated_end: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description:
              'Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'date_updated_end',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_taken_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets',
            example: '2020-02-04',
            in: 'query',
            name: 'date_taken_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      date_taken_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images that were taken before the specified date',
            example: '2020-02-05',
            in: 'query',
            name: 'date_taken_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The cursor of the page with which to start fetching results; this cursor is returned from previous requests',
            example: 'eyJ2IjoxLCJzIjoyfQ==',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            example: 'newest',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      supplier_code: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(5)),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial content from certain suppliers',
            example: 'ABC',
            in: 'query',
            name: 'supplier_code',
            schema: { items: { maxLength: 5, type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Show only editorial content that is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(100).max(500),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 200,
            in: 'query',
            name: 'per_page',
            schema: { default: 500, maximum: 500, minimum: 100, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialUpdatedResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.481,
                    assets: {
                      medium_jpg: {
                        display_name: 'Med',
                        height: 675,
                        is_licensable: true,
                        width: 1000,
                      },
                      original: {
                        display_name: 'Original',
                        height: 3263,
                        is_licensable: true,
                        width: 4831,
                      },
                      small_jpg: {
                        display_name: 'Small',
                        height: 337,
                        is_licensable: true,
                        width: 500,
                      },
                      thumb_170: {
                        height: 115,
                        url: 'https://editorial01.shutterstock.com/thumb/9804979n/c4377a53/Shutterstock_9804979n.jpg',
                        width: 170,
                      },
                      thumb_220: {
                        height: 149,
                        url: 'https://editorial01.shutterstock.com/thumb-220/9804979n/c57a68c7/Shutterstock_9804979n.jpg',
                        width: 220,
                      },
                      watermark_1500: {
                        height: 1500,
                        url: 'https://editorial01.shutterstock.com/wm-preview-1500/9933285a/ab82fea4/Shutterstock_9933285a.jpg',
                        width: 1040,
                      },
                      watermark_450: {
                        height: 304,
                        url: 'https://editorial01.shutterstock.com/wm-preview-450/9804979n/37d19dce/Shutterstock_9804979n.jpg',
                        width: 450,
                      },
                    },
                    byline: 'ALEX HOFFORD/EPA-EFE/Shutterstock',
                    caption: '',
                    categories: [],
                    commercial_status: { status: 'available' },
                    date_taken: '2018-08-24',
                    description:
                      'Members of the TyLoo e-Sports team from China prepare to face off against the Kinguin e-Sports team from Poland at the ICBC (Asia) e-Sports and Music Festival Hong Kong 2018, Hong Kong, China, 24 August 2018. The festival runs from 24 to 26 August with professional gamers from around the world competing in international e-sports tournaments.',
                    id: '9804979n',
                    keywords: [],
                    rights: { countries: 'CAN,+DEU,+GBR,+USA,-*' },
                    supplier_code: 'EPA',
                    title:
                      'Hong Kong kicks off international e-Sports competition, China - 24 Aug 2018',
                    updated_time: '2019-07-15T20:04:44-04:00',
                    updates: ['addition'],
                  },
                ],
                next: 'eyJ2IjoxLCJzIjoxfQ==',
                per_page: 1,
                prev: '',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialImagesIdRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/images/{id}',
  tags: ['editorial_images'],
  summary: 'Get editorial content details',
  description:
    'This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.',
  operationId: 'getEditorialImage',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Editorial ID',
            example: '9926131a',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Returns only if the content is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialContentSchema,
          examples: {
            response: {
              value: {
                aspect: 1.621,
                assets: {
                  medium_jpg: {
                    display_name: 'Med',
                    height: 617,
                    is_licensable: true,
                    width: 1000,
                  },
                  original: {
                    display_name: 'Original',
                    height: 3693,
                    is_licensable: true,
                    width: 5985,
                  },
                  small_jpg: {
                    display_name: 'Small',
                    height: 309,
                    is_licensable: true,
                    width: 500,
                  },
                  thumb_170: {
                    height: 105,
                    url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
                    width: 170,
                  },
                  thumb_220: {
                    height: 136,
                    url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
                    width: 220,
                  },
                  watermark_1500: {
                    height: 926,
                    url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
                    width: 1500,
                  },
                  watermark_450: {
                    height: 278,
                    url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
                    width: 450,
                  },
                },
                byline: 'Jon Super/AP/Shutterstock',
                caption: '',
                categories: [{ name: 'Sport' }],
                date_taken: '2021-05-11',
                description:
                  "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
                id: '10687730b',
                keywords: [
                  'england',
                  'europe',
                  'leicester city fc',
                  'manchester',
                  'manchester united fc',
                  "men's soccer",
                  "men's sports",
                  'premier league',
                  'professional soccer',
                  'soccer',
                  'sports',
                  'united kingdom',
                  'western europe',
                  'wsoc',
                ],
                title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const postV2EditorialLicensesRoute = createRoute({
  method: 'post',
  path: '/v2/editorial/licenses',
  tags: ['editorial_images'],
  summary: '(Deprecated) License editorial content',
  description:
    'Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.',
  operationId: 'licenseEditorialImage',
  request: {
    body: {
      description: 'License editorial content',
      content: {
        'application/json': {
          schema: LicenseEditorialContentRequestSchema,
          examples: {
            default: {
              value: {
                country: 'USA',
                editorial: [
                  {
                    editorial_id: '10687730b',
                    license: 'premier_editorial_comp',
                    metadata: {
                      customer_id: '12345',
                      geo_location: 'US',
                      number_viewed: '15',
                      search_term: 'dog',
                    },
                    size: 'original',
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LicenseEditorialContentResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    download: {
                      url: 'https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].jpg?Expires=1524717323',
                    },
                    editorial_id: '69656358',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  deprecated: true,
  security: [{ customer_accessCode: ['licenses.create'] }],
})

export const getV2EditorialLivefeedsRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/livefeeds',
  tags: ['editorial_images'],
  summary: '(Deprecated) Get editorial livefeed list',
  description:
    'Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.',
  operationId: 'getEditorialLivefeedList',
  request: {
    query: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Returns only livefeeds that are available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialLivefeedListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    cover_item: {
                      height: 117,
                      id: '9763363q',
                      url: 'https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg',
                      width: 170,
                    },
                    created_time: '2018-07-17T12:42:03+00:00',
                    id: '2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202',
                    name: 'Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2',
                    total_item_count: 38,
                  },
                ],
                page: 1,
                per_page: 1,
                total_count: 56,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  deprecated: true,
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialLivefeedsIdRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/livefeeds/{id}',
  tags: ['editorial_images'],
  summary: '(Deprecated) Get editorial livefeed',
  description:
    'Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.',
  operationId: 'getEditorialLivefeed',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Editorial livefeed ID; must be an URI encoded string',
            example: '2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Returns only if the livefeed is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialLivefeedSchema,
          examples: {
            response: {
              value: {
                cover_item: {
                  height: 117,
                  id: '9763363q',
                  url: 'https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg',
                  width: 170,
                },
                created_time: '2018-07-17T12:42:03+00:00',
                id: '2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202',
                name: 'Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2',
                total_item_count: 38,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  deprecated: true,
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialLivefeedsIdItemsRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/livefeeds/{id}/items',
  tags: ['editorial_images'],
  summary: '(Deprecated) Get editorial livefeed items',
  description:
    'Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.',
  operationId: 'getEditorialLivefeedItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Editorial livefeed ID; must be an URI encoded string',
            example: '2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Returns only if the livefeed items are available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialContentDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.621,
                    assets: {
                      medium_jpg: {
                        display_name: 'Med',
                        height: 617,
                        is_licensable: true,
                        width: 1000,
                      },
                      original: {
                        display_name: 'Original',
                        height: 3693,
                        is_licensable: true,
                        width: 5985,
                      },
                      small_jpg: {
                        display_name: 'Small',
                        height: 309,
                        is_licensable: true,
                        width: 500,
                      },
                      thumb_170: {
                        height: 105,
                        url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
                        width: 170,
                      },
                      thumb_220: {
                        height: 136,
                        url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
                        width: 220,
                      },
                      watermark_1500: {
                        height: 926,
                        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
                        width: 1500,
                      },
                      watermark_450: {
                        height: 278,
                        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
                        width: 450,
                      },
                    },
                    byline: 'Jon Super/AP/Shutterstock',
                    caption: '',
                    categories: [{ name: 'Sport' }],
                    date_taken: '2021-05-11',
                    description:
                      "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
                    id: '10687730b',
                    keywords: [
                      'england',
                      'europe',
                      'leicester city fc',
                      'manchester',
                      'manchester united fc',
                      "men's soccer",
                      "men's sports",
                      'premier league',
                      'professional soccer',
                      'soccer',
                      'sports',
                      'united kingdom',
                      'western europe',
                      'wsoc',
                    ],
                    title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 16,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  deprecated: true,
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialSearchRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/search',
  tags: ['editorial_images'],
  summary: '(Deprecated) Search editorial content',
  description:
    'Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.',
  operationId: 'searchEditorial',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'One or more search terms separated by spaces',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['relevant', 'newest', 'oldest'])
        .default('relevant')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            in: 'query',
            name: 'sort',
            schema: { default: 'relevant', enum: ['relevant', 'newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show editorial content within a certain editorial category; specify by category name',
            in: 'query',
            name: 'category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Show only editorial content that is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
      supplier_code: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial content from certain suppliers',
            in: 'query',
            name: 'supplier_code',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      date_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial content generated on or after a specific date',
            in: 'query',
            name: 'date_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      date_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial content generated on or before a specific date',
            in: 'query',
            name: 'date_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The cursor of the page with which to start fetching results; this cursor is returned from previous requests',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.621,
                    assets: {
                      medium_jpg: {
                        display_name: 'Med',
                        height: 617,
                        is_licensable: true,
                        width: 1000,
                      },
                      original: {
                        display_name: 'Original',
                        height: 3693,
                        is_licensable: true,
                        width: 5985,
                      },
                      small_jpg: {
                        display_name: 'Small',
                        height: 309,
                        is_licensable: true,
                        width: 500,
                      },
                      thumb_170: {
                        height: 105,
                        url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
                        width: 170,
                      },
                      thumb_220: {
                        height: 136,
                        url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
                        width: 220,
                      },
                      watermark_1500: {
                        height: 926,
                        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
                        width: 1500,
                      },
                      watermark_450: {
                        height: 278,
                        url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
                        width: 450,
                      },
                    },
                    byline: 'Jon Super/AP/Shutterstock',
                    caption: '',
                    categories: [{ name: 'Sport' }],
                    date_taken: '2021-05-11',
                    description:
                      "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
                    id: '10687730b',
                    keywords: [
                      'england',
                      'europe',
                      'leicester city fc',
                      'manchester',
                      'manchester united fc',
                      "men's soccer",
                      "men's sports",
                      'premier league',
                      'professional soccer',
                      'soccer',
                      'sports',
                      'united kingdom',
                      'western europe',
                      'wsoc',
                    ],
                    title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
                  },
                ],
                next: 'eyJ2IjoyLCJzIjoxLCJwIjpbMF19',
                per_page: 1,
                prev: '',
                search_id: 'BaMzOAkpHIvfnuWVRFs1ag',
                total_count: 46845,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  deprecated: true,
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialUpdatedRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/updated',
  tags: ['editorial_images'],
  summary: '(Deprecated) List updated content',
  description:
    'Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.',
  operationId: 'getUpdatedEditorialImage',
  request: {
    query: z.object({
      type: z
        .enum(['edit', 'addition'])
        .openapi({
          param: {
            description:
              'Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted',
            example: 'edit',
            in: 'query',
            name: 'type',
            required: true,
            schema: { enum: ['edit', 'addition'], type: 'string' },
          },
        }),
      date_updated_start: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description:
              'Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'date_updated_start',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_updated_end: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description:
              'Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'date_updated_end',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      date_taken_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets',
            example: '2020-02-04',
            in: 'query',
            name: 'date_taken_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      date_taken_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images that were taken before the specified date',
            example: '2020-02-05',
            in: 'query',
            name: 'date_taken_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The cursor of the page with which to start fetching results; this cursor is returned from previous requests',
            example: 'eyJ2IjoxLCJzIjoyfQ==',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            example: 'newest',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      supplier_code: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().max(5)),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial content from certain suppliers',
            example: 'ABC',
            in: 'query',
            name: 'supplier_code',
            schema: { items: { maxLength: 5, type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Show only editorial content that is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(100).max(500),
        )
        .default(500)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 200,
            in: 'query',
            name: 'per_page',
            schema: { default: 500, maximum: 500, minimum: 100, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialUpdatedResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.481,
                    assets: {
                      medium_jpg: {
                        display_name: 'Med',
                        height: 675,
                        is_licensable: true,
                        width: 1000,
                      },
                      original: {
                        display_name: 'Original',
                        height: 3263,
                        is_licensable: true,
                        width: 4831,
                      },
                      small_jpg: {
                        display_name: 'Small',
                        height: 337,
                        is_licensable: true,
                        width: 500,
                      },
                      thumb_170: {
                        height: 115,
                        url: 'https://editorial01.shutterstock.com/thumb/9804979n/c4377a53/Shutterstock_9804979n.jpg',
                        width: 170,
                      },
                      thumb_220: {
                        height: 149,
                        url: 'https://editorial01.shutterstock.com/thumb-220/9804979n/c57a68c7/Shutterstock_9804979n.jpg',
                        width: 220,
                      },
                      watermark_1500: {
                        height: 1500,
                        url: 'https://editorial01.shutterstock.com/wm-preview-1500/9933285a/ab82fea4/Shutterstock_9933285a.jpg',
                        width: 1040,
                      },
                      watermark_450: {
                        height: 304,
                        url: 'https://editorial01.shutterstock.com/wm-preview-450/9804979n/37d19dce/Shutterstock_9804979n.jpg',
                        width: 450,
                      },
                    },
                    byline: 'ALEX HOFFORD/EPA-EFE/Shutterstock',
                    caption: '',
                    categories: [],
                    commercial_status: { status: 'available' },
                    date_taken: '2018-08-24',
                    description:
                      'Members of the TyLoo e-Sports team from China prepare to face off against the Kinguin e-Sports team from Poland at the ICBC (Asia) e-Sports and Music Festival Hong Kong 2018, Hong Kong, China, 24 August 2018. The festival runs from 24 to 26 August with professional gamers from around the world competing in international e-sports tournaments.',
                    id: '9804979n',
                    keywords: [],
                    rights: { countries: 'CAN,+DEU,+GBR,+USA,-*' },
                    supplier_code: 'EPA',
                    title:
                      'Hong Kong kicks off international e-Sports competition, China - 24 Aug 2018',
                    updated_time: '2019-07-15T20:04:44-04:00',
                    updates: ['addition'],
                  },
                ],
                next: 'eyJ2IjoxLCJzIjoxfQ==',
                per_page: 1,
                prev: '',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  deprecated: true,
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialVideosCategoriesRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/videos/categories',
  tags: ['editorial_video'],
  summary: 'List editorial video categories',
  description:
    'This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.',
  operationId: 'listEditorialVideoCategories',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialVideoCategoryResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  { name: 'Animal' },
                  { name: 'Awards' },
                  { name: 'Art' },
                  { name: 'Film Stills' },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialVideosLicensesRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/videos/licenses',
  tags: ['editorial_video'],
  summary: 'List editorial video licenses',
  description: 'This endpoint lists existing editorial video licenses.',
  operationId: 'getEditorialVideoLicenseList',
  request: {
    query: z.object({
      video_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses for the specified editorial video ID',
            example: '12345678',
            in: 'query',
            name: 'video_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      license: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show editorial videos that are available with the specified license name',
            example: 'premier_editorial_all_media',
            in: 'query',
            name: 'license',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(200),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 200, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by username of licensee',
            example: 'aUniqueUsername',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created on or after the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'start_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created before the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'end_date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      download_availability: z
        .enum(['all', 'downloadable', 'non_downloadable'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by download availability',
            in: 'query',
            name: 'download_availability',
            schema: {
              default: 'all',
              enum: ['all', 'downloadable', 'non_downloadable'],
              type: 'string',
            },
            required: false,
          },
        }),
      team_history: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to see license history for all members of your team.',
            in: 'query',
            name: 'team_history',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DownloadHistoryDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    download_time: '2020-12-18T02:22:56.000Z',
                    id: 'e1dbb15d5384725d292cf64f793ac45062',
                    is_downloadable: false,
                    license: 'premier_editorial_all_digital',
                    metadata: {
                      client: 'Company A',
                      job: 'Important project',
                      other: 'Important media',
                      purchase_order: '457234',
                    },
                    subscription_id: 's12345678',
                    user: { username: 'username1' },
                    video: { format: { size: 'original' }, id: '11231389im' },
                  },
                  {
                    download_time: '2020-12-11T01:24:22.000Z',
                    id: 'e1dbb15d5384725d292cf64f793ac45114',
                    is_downloadable: false,
                    license: 'premier_editorial_all_digital',
                    metadata: {
                      client: 'Company B',
                      job: 'Important project',
                      other: 'Important image',
                      purchase_order: '5583831',
                    },
                    subscription_id: 's12345678',
                    user: { username: 'username2' },
                    video: { format: { size: 'original' }, id: '11231442aa' },
                  },
                ],
                page: 1,
                per_page: 2,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const postV2EditorialVideosLicensesRoute = createRoute({
  method: 'post',
  path: '/v2/editorial/videos/licenses',
  tags: ['editorial_video'],
  summary: 'License editorial video content',
  description:
    'This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.',
  operationId: 'licenseEditorialVideo',
  request: {
    body: {
      description: 'License editorial video content',
      content: {
        'application/json': {
          schema: LicenseEditorialVideoContentRequestSchema,
          examples: {
            default: {
              value: {
                country: 'USA',
                editorial: [
                  {
                    editorial_id: '10679854a',
                    license: 'premier_editorial_video_digital_only',
                    metadata: { purchase_order: '12345' },
                    size: 'original',
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LicenseEditorialContentResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    download: {
                      url: 'https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].mov?Expires=1524717323',
                    },
                    editorial_id: '69656358',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.create', 'purchases.view'] }],
})

export const getV2EditorialVideosSearchRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/videos/search',
  tags: ['editorial_video'],
  summary: 'Search editorial video content',
  description:
    'This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.',
  operationId: 'searchEditorialVideos',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'One or more search terms separated by spaces',
            example: 'The Academy Awards',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['relevant', 'newest', 'oldest'])
        .default('relevant')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            in: 'query',
            name: 'sort',
            schema: { default: 'relevant', enum: ['relevant', 'newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list',
            example: 'Alone,Performing',
            in: 'query',
            name: 'category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Show only editorial video content that is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
      supplier_code: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial video content from certain suppliers',
            in: 'query',
            name: 'supplier_code',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      date_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial video content generated on or after a specific date',
            example: '2020-05-29',
            in: 'query',
            name: 'date_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      date_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial video content generated on or before a specific date',
            example: '2021-05-29',
            in: 'query',
            name: 'date_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      resolution: z
        .enum(['4k', 'high_definition', 'standard_definition'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only editorial video content with specific resolution',
            example: '4k',
            in: 'query',
            name: 'resolution',
            schema: { enum: ['4k', 'high_definition', 'standard_definition'], type: 'string' },
            required: false,
          },
        }),
      fps: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show only editorial video content generated with specific frames per second',
            example: 24,
            in: 'query',
            name: 'fps',
            schema: { type: 'number' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The cursor of the page with which to start fetching results; this cursor is returned from previous requests',
            example: 'eyJ2IjoxLCJzIjoxfQ==',
            in: 'query',
            name: 'cursor',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialVideoSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1,
                    assets: {
                      original: {
                        display_name: 'HD',
                        file_size: 82233387,
                        format: 'avc1',
                        fps: 30,
                        height: 1080,
                        is_licensable: true,
                        width: 1080,
                      },
                      preview_mp4: {
                        url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4',
                      },
                      preview_webm: {
                        url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm',
                      },
                      thumb_jpg: {
                        url: 'https://qa.editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg',
                      },
                    },
                    byline: 'ViralHog/Shutterstock',
                    caption: '',
                    categories: [],
                    date_taken: '2020-11-13',
                    description:
                      'Info from Licensor: "Peeps the Canadian Goose has been raised with our family since a gosling. Peeps has made appearances on our local news channels, TV shows, and local newspapers. He has been trained to fly next to four wheelers, jet ski\'s, and boats. He has brought joy to many people during the pandemic including those with cancer."',
                    id: '10679854a',
                    keywords: [
                      '2020',
                      'adorable',
                      'birds',
                      'bizarre',
                      'canadian goose',
                      'cute',
                      'domesticated animals',
                      'entertainment',
                      'feel good',
                      'flew',
                      'flies',
                      'fly',
                      'flying',
                      'fun',
                      'goose',
                      'jet skis',
                      'nature',
                      'odd',
                      'pets',
                      'played',
                      'playing',
                      'plays',
                      'prior lake',
                      'sports',
                      'strange',
                      'sweet',
                      'usa',
                      'viralhog',
                      'virals',
                      'water sports',
                      'weird',
                    ],
                    title:
                      'Peeps the Goose Has a Blast on a Jet Ski, Prior Lake, Minnesota, USA - 13 Nov 2020',
                  },
                ],
                next: 'eyJ2IjoyLCJzIjoyMCwicCI6WzBdfQ==',
                per_page: 1,
                prev: '',
                search_id: 'zhmz9zLmpQehdTPvg8cacQ',
                total_count: 331,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialVideosIdRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/videos/{id}',
  tags: ['editorial_video'],
  summary: 'Get editorial video content details',
  description:
    'This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.',
  operationId: 'getEditorialVideo',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Editorial ID',
            example: '9926131a',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Returns only if the content is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialVideoContentSchema,
          examples: {
            response: {
              value: {
                aspect: 1,
                assets: {
                  original: {
                    display_name: 'HD',
                    file_size: 82233387,
                    format: 'avc1',
                    fps: 30,
                    height: 1080,
                    is_licensable: true,
                    width: 1080,
                  },
                  preview_mp4: {
                    url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4',
                  },
                  preview_webm: {
                    url: 'https://qa.editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm',
                  },
                  thumb_jpg: {
                    url: 'https://qa.editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg',
                  },
                },
                byline: 'ViralHog/Shutterstock',
                caption: '',
                categories: [],
                date_taken: '2020-11-13',
                description:
                  'Info from Licensor: "Peeps the Canadian Goose has been raised with our family since a gosling. Peeps has made appearances on our local news channels, TV shows, and local newspapers. He has been trained to fly next to four wheelers, jet ski\'s, and boats. He has brought joy to many people during the pandemic including those with cancer."',
                id: '10679854a',
                keywords: [
                  '2020',
                  'adorable',
                  'birds',
                  'bizarre',
                  'canadian goose',
                  'cute',
                  'domesticated animals',
                  'entertainment',
                  'feel good',
                  'flew',
                  'flies',
                  'fly',
                  'flying',
                  'fun',
                  'goose',
                  'jet skis',
                  'nature',
                  'odd',
                  'pets',
                  'played',
                  'playing',
                  'plays',
                  'prior lake',
                  'sports',
                  'strange',
                  'sweet',
                  'usa',
                  'viralhog',
                  'virals',
                  'water sports',
                  'weird',
                ],
                title:
                  'Peeps the Goose Has a Blast on a Jet Ski, Prior Lake, Minnesota, USA - 13 Nov 2020',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    406: { description: 'Not Acceptable' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2EditorialIdRoute = createRoute({
  method: 'get',
  path: '/v2/editorial/{id}',
  tags: ['editorial_images'],
  summary: '(Deprecated) Get editorial content details',
  description:
    'Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Editorial ID',
            example: '9926131a',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description:
              'Returns only if the content is available for distribution in a certain country',
            example: 'USA',
            in: 'query',
            name: 'country',
            required: true,
            schema: { format: 'country-code-3', type: 'string' },
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: EditorialContentSchema,
          examples: {
            response: {
              value: {
                aspect: 1.621,
                assets: {
                  medium_jpg: {
                    display_name: 'Med',
                    height: 617,
                    is_licensable: true,
                    width: 1000,
                  },
                  original: {
                    display_name: 'Original',
                    height: 3693,
                    is_licensable: true,
                    width: 5985,
                  },
                  small_jpg: {
                    display_name: 'Small',
                    height: 309,
                    is_licensable: true,
                    width: 500,
                  },
                  thumb_170: {
                    height: 105,
                    url: 'https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg',
                    width: 170,
                  },
                  thumb_220: {
                    height: 136,
                    url: 'https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg',
                    width: 220,
                  },
                  watermark_1500: {
                    height: 926,
                    url: 'https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg',
                    width: 1500,
                  },
                  watermark_450: {
                    height: 278,
                    url: 'https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg',
                    width: 450,
                  },
                },
                byline: 'Jon Super/AP/Shutterstock',
                caption: '',
                categories: [{ name: 'Sport' }],
                date_taken: '2021-05-11',
                description:
                  "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
                id: '10687730b',
                keywords: [
                  'england',
                  'europe',
                  'leicester city fc',
                  'manchester',
                  'manchester united fc',
                  "men's soccer",
                  "men's sports",
                  'premier league',
                  'professional soccer',
                  'soccer',
                  'sports',
                  'united kingdom',
                  'western europe',
                  'wsoc',
                ],
                title: 'Soccer Premier League, Manchester, United Kingdom - 11 May 2021',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
  deprecated: true,
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesRoute = createRoute({
  method: 'get',
  path: '/v2/images',
  tags: ['images'],
  summary: 'List images',
  description:
    'This endpoint lists information about one or more images, including the available sizes.',
  operationId: 'getImageList',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).max(500),
        )
        .openapi({
          param: {
            description: 'One or more image IDs',
            example: ['1110335168', '465011609'],
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { format: 'asset-id', type: 'string' }, maxItems: 500, type: 'array' },
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            example: 'minimal',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.5,
                    assets: {
                      huge_thumb: {
                        height: 260,
                        url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
                        width: 390,
                      },
                      large_thumb: {
                        height: 100,
                        url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 150,
                      },
                      preview: {
                        height: 300,
                        url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 450,
                      },
                      preview_1000: {
                        height: 667,
                        url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
                        width: 1000,
                      },
                      preview_1500: {
                        height: 1000,
                        url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 1500,
                      },
                      small_thumb: {
                        height: 67,
                        url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 100,
                      },
                    },
                    contributor: { id: '250738318' },
                    description: 'cropped image of woman gardening',
                    has_model_release: true,
                    id: '1572478477',
                    image_type: 'photo',
                    media_type: 'image',
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 123455,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const postV2ImagesRoute = createRoute({
  method: 'post',
  path: '/v2/images',
  tags: ['computer_vision'],
  summary: 'Upload ephemeral images',
  description:
    'Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.',
  operationId: 'uploadEphemeralImage',
  request: {
    body: {
      description: 'The image data in JPEG or PNG format',
      content: {
        'application/json': {
          schema: ImageCreateRequestSchema,
          examples: {
            default: {
              value: {
                base64_image:
                  'R0lGODlhgACAAPcAAEwiBLyaLOzNUNmWFNjOrNSuN7x6PPzqeOTMgfKSDMyuTPzwsdi2dHwuBPzbVu',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: ImageCreateResponseSchema,
          examples: { response: { value: { id: 'Udb14e1c3540bdbf82b4b3fe12d3a44f2' } } },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    413: { description: 'Payload Too Large' },
  },
  deprecated: true,
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesCategoriesRoute = createRoute({
  method: 'get',
  path: '/v2/images/categories',
  tags: ['images'],
  summary: 'List image categories',
  description:
    'This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.',
  operationId: 'listImageCategories',
  request: {
    query: z.object({
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          example: 'es',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CategoryDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  { id: '1', name: 'Animals/Wildlife' },
                  { id: '11', name: 'The Arts' },
                ],
                page: 1,
                per_page: 2,
                total_count: 13,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesCollectionsRoute = createRoute({
  method: 'get',
  path: '/v2/images/collections',
  tags: ['images'],
  summary: 'List image collections',
  description: 'This endpoint lists your collections of images and their basic attributes.',
  operationId: 'getImageCollectionList',
  request: {
    query: z.object({
      embed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['share_code', 'share_url'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which sharing information to include in the response, such as a URL to the collection',
            example: 'share_code',
            in: 'query',
            name: 'embed',
            schema: { items: { enum: ['share_code', 'share_url'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: 1,
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(150),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 2,
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 150, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    cover_item: { id: '297886754' },
                    id: '293542904',
                    items_updated_time: '2021-05-20T16:15:22-04:00',
                    name: 'My collection',
                    total_item_count: 85,
                  },
                ],
                page: 1,
                per_page: 100,
                total_count: 1,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2ImagesCollectionsRoute = createRoute({
  method: 'post',
  path: '/v2/images/collections',
  tags: ['images'],
  summary: 'Create image collections',
  description:
    'This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.',
  operationId: 'createImageCollection',
  request: {
    body: {
      description: 'The names of the new collections',
      content: {
        'application/json': {
          schema: CollectionCreateRequestSchema,
          examples: { default: { value: { name: 'Test Collection 19cf' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created image collection',
      content: {
        'application/json': {
          schema: CollectionCreateResponseSchema,
          examples: { response: { value: { id: '48433105' } } },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const getV2ImagesCollectionsFeaturedRoute = createRoute({
  method: 'get',
  path: '/v2/images/collections/featured',
  tags: ['images'],
  summary: 'List featured image collections',
  description:
    'This endpoint lists featured collections of specific types and a name and cover image for each collection.',
  operationId: 'getFeaturedImageCollectionList',
  request: {
    query: z.object({
      embed: z
        .literal('share_url')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which sharing information to include in the response, such as a URL to the collection',
            example: 'share_url',
            in: 'query',
            name: 'embed',
            schema: { enum: ['share_url'], type: 'string' },
            required: false,
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['photo', 'editorial', 'vector'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The types of collections to return',
            example: ['photo'],
            in: 'query',
            name: 'type',
            schema: {
              items: { enum: ['photo', 'editorial', 'vector'], type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      asset_hint: z
        .enum(['1x', '2x'])
        .default('1x')
        .exactOptional()
        .openapi({
          param: {
            description: 'Cover image size',
            example: '1x',
            in: 'query',
            name: 'asset_hint',
            schema: { default: '1x', enum: ['1x', '2x'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: FeaturedCollectionDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    cover_item: {
                      url: 'https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg',
                    },
                    created_time: '2021-07-07T13:10:24.000Z',
                    id: '19853',
                    items_updated_time: '2021-07-08T12:33:37.000Z',
                    name: 'Exercise & Fitness',
                    total_item_count: 82,
                    updated_time: '2021-07-07T13:10:24.000Z',
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 123455,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesCollectionsFeaturedIdRoute = createRoute({
  method: 'get',
  path: '/v2/images/collections/featured/{id}',
  tags: ['images'],
  summary: 'Get the details of featured image collections',
  description:
    'This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.',
  operationId: 'getFeaturedImageCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '136351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .literal('share_url')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which sharing information to include in the response, such as a URL to the collection',
            in: 'query',
            name: 'embed',
            schema: { enum: ['share_url'], type: 'string' },
            required: false,
          },
        }),
      asset_hint: z
        .enum(['1x', '2x'])
        .default('1x')
        .exactOptional()
        .openapi({
          param: {
            description: 'Cover image size',
            in: 'query',
            name: 'asset_hint',
            schema: { default: '1x', enum: ['1x', '2x'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: FeaturedCollectionSchema,
          examples: {
            response: {
              value: {
                cover_item: {
                  url: 'https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg',
                },
                created_time: '2021-07-07T13:10:24.000Z',
                id: '19853',
                items_updated_time: '2021-07-08T12:33:37.000Z',
                name: 'Exercise & Fitness',
                total_item_count: 82,
                updated_time: '2021-07-07T13:10:24.000Z',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Featured collection not found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesCollectionsFeaturedIdItemsRoute = createRoute({
  method: 'get',
  path: '/v2/images/collections/featured/{id}/items',
  tags: ['images'],
  summary: 'Get the contents of featured image collections',
  description:
    'This endpoint lists the IDs of images in a featured collection and the date that each was added.',
  operationId: 'getFeaturedImageCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '136351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(150),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 150, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionItemDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  { added_time: '2021-07-08T12:33:37.000Z', id: '1690105108', media_type: 'image' },
                  { added_time: '2021-07-08T12:31:43.000Z', id: '1468703072', media_type: 'image' },
                ],
                page: 1,
                per_page: 2,
                total_count: 82,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Featured collection not found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesCollectionsIdRoute = createRoute({
  method: 'get',
  path: '/v2/images/collections/{id}',
  tags: ['images'],
  summary: 'Get the details of image collections',
  description:
    'This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.',
  operationId: 'getImageCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '126351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['share_code', 'share_url'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which sharing information to include in the response, such as a URL to the collection',
            in: 'query',
            name: 'embed',
            schema: { items: { enum: ['share_code', 'share_url'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      share_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Code to retrieve a shared collection',
            in: 'query',
            name: 'share_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionSchema,
          examples: {
            response: {
              value: {
                cover_item: { id: '297886754' },
                id: '293542904',
                items_updated_time: '2021-05-20T16:15:22-04:00',
                name: 'My collection',
                total_item_count: 85,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2ImagesCollectionsIdRoute = createRoute({
  method: 'post',
  path: '/v2/images/collections/{id}',
  tags: ['images'],
  summary: 'Rename image collections',
  description: 'This endpoint sets a new name for an image collection.',
  operationId: 'renameImageCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '126351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The new name for the collection',
      content: {
        'application/json': {
          schema: CollectionUpdateRequestSchema,
          examples: { default: { value: { name: 'My collection with a new name' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully updated collection' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const deleteV2ImagesCollectionsIdRoute = createRoute({
  method: 'delete',
  path: '/v2/images/collections/{id}',
  tags: ['images'],
  summary: 'Delete image collections',
  description: 'This endpoint deletes an image collection.',
  operationId: 'deleteImageCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '136351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully deleted collection' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const getV2ImagesCollectionsIdItemsRoute = createRoute({
  method: 'get',
  path: '/v2/images/collections/{id}/items',
  tags: ['images'],
  summary: 'Get the contents of image collections',
  description:
    'This endpoint lists the IDs of images in a collection and the date that each was added.',
  operationId: 'getImageCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '126351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(150),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 150, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      share_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Code to retrieve the contents of a shared collection',
            in: 'query',
            name: 'share_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('oldest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { default: 'oldest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionItemDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  { added_time: '2021-07-08T12:33:37.000Z', id: '1690105108', media_type: 'image' },
                  { added_time: '2021-07-08T12:31:43.000Z', id: '1468703072', media_type: 'image' },
                ],
                page: 1,
                per_page: 2,
                total_count: 82,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2ImagesCollectionsIdItemsRoute = createRoute({
  method: 'post',
  path: '/v2/images/collections/{id}/items',
  tags: ['images'],
  summary: 'Add images to collections',
  description: 'This endpoint adds one or more images to a collection by image IDs.',
  operationId: 'addImageCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '126351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Array of image IDs to add to the collection',
      content: {
        'application/json': {
          schema: CollectionItemRequestSchema,
          examples: { default: { value: { items: [{ id: '49572945' }] } } },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully added collection items' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const deleteV2ImagesCollectionsIdItemsRoute = createRoute({
  method: 'delete',
  path: '/v2/images/collections/{id}/items',
  tags: ['images'],
  summary: 'Remove images from collections',
  description: 'This endpoint removes one or more images from a collection.',
  operationId: 'deleteImageCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '126351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      item_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'One or more image IDs to remove from the collection',
            in: 'query',
            name: 'item_id',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully removed collection items' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const getV2ImagesLicensesRoute = createRoute({
  method: 'get',
  path: '/v2/images/licenses',
  tags: ['images'],
  summary: 'List image licenses',
  description: 'This endpoint lists existing licenses.',
  operationId: 'getImageLicenseList',
  request: {
    query: z.object({
      image_id: z
        .string()
        .regex(/^[1-9]\d*$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses for the specified image ID',
            example: '12345678',
            in: 'query',
            name: 'image_id',
            schema: {
              pattern: '^[1-9]\\d*$',
              type: 'string',
              'x-pattern-description': 'A number that does not start with 0',
            },
            required: false,
          },
          'x-pattern-description': 'A number that does not start with 0',
        }),
      license: z
        .string()
        .regex(/^.+$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license',
            example: 'standard',
            in: 'query',
            name: 'license',
            schema: {
              pattern: '^.+$',
              type: 'string',
              'x-pattern-description': 'Minimum 1 character',
            },
            required: false,
          },
          'x-pattern-description': 'Minimum 1 character',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by username of licensee',
            example: 'aUniqueUsername',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created on or after the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'start_date',
            schema: { format: 'date-time', type: 'string' },
            'x-relationships': [{ in: 'query', name: 'end_date', relationship: '<=' }],
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created before the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'end_date',
            schema: { format: 'date-time', type: 'string' },
            'x-relationships': [{ in: 'query', name: 'start_date', relationship: '>' }],
            required: false,
          },
        }),
      download_availability: z
        .enum(['all', 'downloadable', 'non_downloadable'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by download availability',
            in: 'query',
            name: 'download_availability',
            schema: {
              default: 'all',
              enum: ['all', 'downloadable', 'non_downloadable'],
              type: 'string',
            },
            required: false,
          },
        }),
      team_history: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to see license history for all members of your team.',
            in: 'query',
            name: 'team_history',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DownloadHistoryDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    download_time: '2021-07-15T15:46:34.000Z',
                    id: 'e1eba3833793e77188d22caae8bac9f2cd',
                    image: { format: { size: 'original' }, id: '9763363ao' },
                    is_downloadable: false,
                    license: 'premier_editorial_all_digital',
                    metadata: {
                      client: 'Company A',
                      job: 'Important project',
                      other: 'Important media',
                      purchase_order: '123456',
                    },
                    subscription_id: 's12345678',
                    user: { username: 'editorial_test_account_002' },
                  },
                ],
                page: 1,
                per_page: 1,
                total_count: 2890,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const postV2ImagesLicensesRoute = createRoute({
  method: 'post',
  path: '/v2/images/licenses',
  tags: ['images'],
  summary: 'License images',
  description:
    'This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.',
  operationId: 'licenseImages',
  request: {
    query: z.object({
      subscription_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Subscription ID to use to license the image',
            in: 'query',
            name: 'subscription_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['eps', 'jpg'])
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description: '(Deprecated) Image format',
            in: 'query',
            name: 'format',
            schema: { enum: ['eps', 'jpg'], type: 'string' },
            required: false,
          },
        }),
      size: z
        .enum(['small', 'medium', 'huge', 'vector', 'custom'])
        .default('huge')
        .exactOptional()
        .openapi({
          param: {
            description: 'Image size',
            in: 'query',
            name: 'size',
            schema: {
              default: 'huge',
              enum: ['small', 'medium', 'huge', 'vector', 'custom'],
              type: 'string',
            },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search ID that was provided in the results of an image search',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description:
        'List of images to request licenses for and information about each license transaction; these values override the defaults in the query parameters',
      content: {
        'application/json': {
          schema: LicenseImageRequestSchema,
          examples: {
            default: {
              value: {
                images: [
                  {
                    editorial_acknowledgement: true,
                    format: 'jpg',
                    image_id: '123456789',
                    metadata: {
                      customer_id: '12345',
                      geo_location: 'US',
                      number_viewed: '15',
                      search_term: 'dog',
                    },
                    price: 12.34,
                    show_modal: true,
                    size: 'small',
                    subscription_id: 's12345678',
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LicenseImageResultDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    allotment_charge: 1,
                    download: {
                      url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg',
                    },
                    image_id: '59656357',
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 23,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.create', 'purchases.view'] }],
})

export const postV2ImagesLicensesIdDownloadsRoute = createRoute({
  method: 'post',
  path: '/v2/images/licenses/{id}/downloads',
  tags: ['images'],
  summary: 'Download images',
  description:
    'This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.',
  operationId: 'downloadImage',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'License ID',
            example: 'e123',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Information about the images to redownload',
      content: {
        'application/json': { schema: RedownloadImageSchema, example: { size: 'small' } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UrlSchema,
          examples: {
            response: {
              value: {
                url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const getV2ImagesRecommendationsRoute = createRoute({
  method: 'get',
  path: '/v2/images/recommendations',
  tags: ['images'],
  summary: 'List recommended images',
  description:
    'This endpoint returns images that customers put in the same collection as the specified image IDs.',
  operationId: 'getImageRecommendations',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'Image IDs',
            example: [465011609],
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      max_items: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results returned in the response',
            in: 'query',
            name: 'max_items',
            schema: { default: 20, maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      safe: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict results to safe images',
            in: 'query',
            name: 'safe',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: RecommendationDataListSchema,
          examples: {
            response: {
              value: {
                data: [{ id: '123456789' }, { id: '99379946' }, { id: '133918412' }],
                page: 1,
                per_page: 5,
                total_count: 12,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesSearchRoute = createRoute({
  method: 'get',
  path: '/v2/images/search',
  tags: ['images'],
  summary: 'Search for images',
  description:
    'This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.',
  operationId: 'searchImages',
  request: {
    query: z.object({
      added_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images added on the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'added_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      added_date_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images added on or after the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'added_date_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      aspect_ratio_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().positive(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image',
            example: 1.7778,
            in: 'query',
            name: 'aspect_ratio_min',
            schema: { exclusiveMinimum: true, minimum: 0, type: 'number' },
            required: false,
          },
        }),
      aspect_ratio_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().positive(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image',
            example: 1.7778,
            in: 'query',
            name: 'aspect_ratio_max',
            schema: { exclusiveMinimum: true, minimum: 0, type: 'number' },
            required: false,
          },
        }),
      aspect_ratio: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().positive(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image',
            example: 1.7778,
            in: 'query',
            name: 'aspect_ratio',
            schema: { exclusiveMinimum: true, minimum: 0, type: 'number' },
            required: false,
          },
        }),
      ai_search: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set to true and specify the `ai_objective` and `ai_industry` parameters to use AI-powered search; the API returns information about how well images meet the objective for the industry ',
            in: 'query',
            name: 'ai_search',
            schema: { type: 'boolean' },
            'x-relationships': [
              { in: 'query', name: 'ai_industry', relationship: 'required' },
              { in: 'query', name: 'ai_objective', relationship: 'required' },
            ],
            required: false,
          },
        }),
      ai_labels_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'For AI-powered search, specify the maximum number of labels to return',
            in: 'query',
            name: 'ai_labels_limit',
            schema: { default: 20, maximum: 500, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      ai_industry: z
        .enum(['automotive', 'cpg', 'finance', 'healthcare', 'retail', 'technology'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'For AI-powered search, specify the industry to target; requires that the `ai_search` parameter is set to true',
            in: 'query',
            name: 'ai_industry',
            schema: {
              enum: ['automotive', 'cpg', 'finance', 'healthcare', 'retail', 'technology'],
              type: 'string',
            },
            required: false,
          },
        }),
      ai_objective: z
        .enum(['awareness', 'traffic', 'conversions'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'For AI-powered search, specify the goal of the media; requires that the `ai_search` parameter is set to true',
            in: 'query',
            name: 'ai_objective',
            schema: { enum: ['awareness', 'traffic', 'conversions'], type: 'string' },
            required: false,
          },
        }),
      added_date_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images added before the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'added_date_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with the specified Shutterstock-defined category; specify a category name or ID',
            in: 'query',
            name: 'category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      color: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors",
            example: '4F21EA',
            in: 'query',
            name: 'color',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images with the specified contributor names or IDs, allows multiple',
            example: ['123456'],
            in: 'query',
            name: 'contributor',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      contributor_country: z
        .xor([z.array(z.string()), z.array(z.string())])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search',
            example: 'US',
            in: 'query',
            name: 'contributor_country',
            schema: {
              oneOf: [
                { items: { format: 'country-code-2', type: 'string' }, type: 'array' },
                { items: { format: 'negated-country-code-2', type: 'string' }, type: 'array' },
              ],
            },
            required: false,
          },
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Fields to display in the response; see the documentation for the fields parameter in the overview section',
            in: 'query',
            name: 'fields',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      height: z
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
        .openapi({
          param: {
            deprecated: true,
            description:
              '(Deprecated; use height_from and height_to instead) Show images with the specified height',
            in: 'query',
            name: 'height',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      height_from: z
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
        .openapi({
          param: {
            description: 'Show images with the specified height or larger, in pixels',
            example: 1080,
            in: 'query',
            name: 'height_from',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      height_to: z
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
        .openapi({
          param: {
            description: 'Show images with the specified height or smaller, in pixels',
            example: 1080,
            in: 'query',
            name: 'height_to',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      image_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['photo', 'illustration', 'vector'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images of the specified type',
            example: 'photo',
            in: 'query',
            name: 'image_type',
            schema: {
              items: { enum: ['photo', 'illustration', 'vector'], type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      keyword_safe_search: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Hide results with potentially unsafe keywords',
            in: 'query',
            name: 'keyword_safe_search',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      language: LanguageSchema.openapi({
        param: {
          description: 'Set query and result language (uses Accept-Language header if not set)',
          example: 'fr',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      license: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['commercial', 'editorial', 'enhanced']).default('commercial')),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only images with the specified license',
            in: 'query',
            name: 'license',
            schema: {
              items: {
                default: 'commercial',
                enum: ['commercial', 'editorial', 'enhanced'],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      model: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show image results with the specified model IDs',
            example: ['12345', '67890'],
            in: 'query',
            name: 'model',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      orientation: z
        .enum(['horizontal', 'vertical'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show image results with horizontal or vertical orientation',
            example: 'vertical',
            in: 'query',
            name: 'orientation',
            schema: { enum: ['horizontal', 'vertical'], type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            example: 1,
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 50,
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 500, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      people_model_released: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images of people with a signed model release',
            example: true,
            in: 'query',
            name: 'people_model_released',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      people_age: z
        .enum(['infants', 'children', 'teenagers', '20s', '30s', '40s', '50s', '60s', 'older'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images that feature people of the specified age category',
            example: '20s',
            in: 'query',
            name: 'people_age',
            schema: {
              enum: [
                'infants',
                'children',
                'teenagers',
                '20s',
                '30s',
                '40s',
                '50s',
                '60s',
                'older',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      people_ethnicity: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'african',
              'african_american',
              'black',
              'brazilian',
              'chinese',
              'caucasian',
              'east_asian',
              'hispanic',
              'japanese',
              'middle_eastern',
              'native_american',
              'pacific_islander',
              'south_asian',
              'southeast_asian',
              'other',
              'NOT african',
              'NOT african_american',
              'NOT black',
              'NOT brazilian',
              'NOT chinese',
              'NOT caucasian',
              'NOT east_asian',
              'NOT hispanic',
              'NOT japanese',
              'NOT middle_eastern',
              'NOT native_american',
              'NOT pacific_islander',
              'NOT south_asian',
              'NOT southeast_asian',
              'NOT other',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities',
            example: 'hispanic',
            in: 'query',
            name: 'people_ethnicity',
            schema: {
              items: {
                enum: [
                  'african',
                  'african_american',
                  'black',
                  'brazilian',
                  'chinese',
                  'caucasian',
                  'east_asian',
                  'hispanic',
                  'japanese',
                  'middle_eastern',
                  'native_american',
                  'pacific_islander',
                  'south_asian',
                  'southeast_asian',
                  'other',
                  'NOT african',
                  'NOT african_american',
                  'NOT black',
                  'NOT brazilian',
                  'NOT chinese',
                  'NOT caucasian',
                  'NOT east_asian',
                  'NOT hispanic',
                  'NOT japanese',
                  'NOT middle_eastern',
                  'NOT native_american',
                  'NOT pacific_islander',
                  'NOT south_asian',
                  'NOT southeast_asian',
                  'NOT other',
                ],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      people_gender: z
        .enum(['male', 'female', 'both'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images with people of the specified gender',
            example: 'both',
            in: 'query',
            name: 'people_gender',
            schema: { enum: ['male', 'female', 'both'], type: 'string' },
            required: false,
          },
        }),
      people_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(4),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images with the specified number of people',
            example: 2,
            in: 'query',
            name: 'people_number',
            schema: { maximum: 4, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more search terms separated by spaces; you can use NOT to filter out images that match a term',
            example: 'dogs on the beach',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      region: z
        .union([z.string(), z.ipv4()])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country",
            example: 'US',
            in: 'query',
            name: 'region',
            schema: {
              anyOf: [
                { format: 'country-code-2', type: 'string' },
                { format: 'ipv4', type: 'string' },
              ],
            },
            required: false,
          },
        }),
      safe: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable or disable safe search',
            in: 'query',
            name: 'safe',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'popular', 'relevance', 'random'])
        .default('popular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            in: 'query',
            name: 'sort',
            schema: {
              default: 'popular',
              enum: ['newest', 'popular', 'relevance', 'random'],
              type: 'string',
            },
            required: false,
          },
        }),
      spellcheck_query: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Spellcheck the search query and return results on suggested spellings',
            in: 'query',
            name: 'spellcheck_query',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      width: z
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
        .openapi({
          param: {
            deprecated: true,
            description:
              '(Deprecated; use width_from and width_to instead) Show images with the specified width',
            in: 'query',
            name: 'width',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      width_from: z
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
        .openapi({
          param: {
            description: 'Show images with the specified width or larger, in pixels',
            example: 1920,
            in: 'query',
            name: 'width_from',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      width_to: z
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
        .openapi({
          param: {
            description: 'Show images with the specified width or smaller, in pixels',
            example: 1920,
            in: 'query',
            name: 'width_to',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.5,
                    assets: {
                      huge_thumb: {
                        height: 260,
                        url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
                        width: 390,
                      },
                      large_thumb: {
                        height: 100,
                        url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 150,
                      },
                      preview: {
                        height: 300,
                        url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 450,
                      },
                      preview_1000: {
                        height: 667,
                        url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
                        width: 1000,
                      },
                      preview_1500: {
                        height: 1000,
                        url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 1500,
                      },
                      small_thumb: {
                        height: 67,
                        url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 100,
                      },
                    },
                    contributor: { id: '250738318' },
                    description: 'cropped image of woman gardening',
                    has_model_release: true,
                    id: '1572478477',
                    image_type: 'photo',
                    media_type: 'image',
                  },
                ],
                page: 1,
                per_page: 5,
                search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
                spellcheck_info: {},
                total_count: 45,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesSearchSuggestionsRoute = createRoute({
  method: 'get',
  path: '/v2/images/search/suggestions',
  tags: ['images'],
  summary: 'Get suggestions for a search term',
  description: 'This endpoint provides autocomplete suggestions for partial search terms.',
  operationId: 'getImageSuggestions',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search term for which you want keyword suggestions',
            example: 'cats',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of suggestions',
            in: 'query',
            name: 'limit',
            schema: { default: 10, maximum: 25, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SuggestionsSchema,
          examples: {
            response: {
              value: {
                data: [
                  'cat scan',
                  'cats and dogs',
                  'cats playing',
                  'catsuit',
                  'cat silhouette',
                  'catskills',
                  'cats eyes',
                  'cat sitting',
                  'cat sleeping',
                  'cats eye',
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const postV2ImagesSearchSuggestionsRoute = createRoute({
  method: 'post',
  path: '/v2/images/search/suggestions',
  tags: ['images'],
  summary: 'Get keywords from text',
  description: 'This endpoint returns up to 10 important keywords from a block of plain text.',
  operationId: 'getImageKeywordSuggestions',
  request: {
    body: {
      description: 'Plain text to extract keywords from',
      content: {
        'application/json': {
          schema: SearchEntitiesRequestSchema,
          example: { text: 'Planting flowers is a great way to make springtime more beautiful.' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SearchEntitiesResponseSchema,
          examples: { response: { value: { data: ['beach', 'place', 'sand', 'ocean'] } } },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesUpdatedRoute = createRoute({
  method: 'get',
  path: '/v2/images/updated',
  tags: ['images'],
  summary: 'List updated images',
  description:
    'This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.',
  operationId: 'getUpdatedImages',
  request: {
    query: z.object({
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['addition', 'deletion', 'edit'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways',
            example: 'addition',
            in: 'query',
            name: 'type',
            schema: {
              items: { enum: ['addition', 'deletion', 'edit'], type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      start_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images updated on or after the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'start_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show images updated before the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'end_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      interval: z
        .string()
        .default('1 HOUR')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request',
            in: 'query',
            name: 'interval',
            schema: { default: '1 HOUR', type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 2000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UpdatedMediaDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    id: '123456789',
                    updated_time: '2020-05-29T12:10:22-05:00',
                    updates: ['addition', 'edit'],
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 13,
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesIdRoute = createRoute({
  method: 'get',
  path: '/v2/images/{id}',
  tags: ['images'],
  summary: 'Get details about images',
  description:
    'This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.',
  operationId: 'getImage',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Image ID',
            example: '465011609',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'asset-id', type: 'string' },
          },
        }),
    }),
    query: z.object({
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          example: 'es',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      view: z
        .enum(['minimal', 'full'])
        .default('full')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'full', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageSchema,
          examples: {
            response: {
              value: {
                aspect: 1.5,
                assets: {
                  huge_thumb: {
                    height: 260,
                    url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
                    width: 390,
                  },
                  large_thumb: {
                    height: 100,
                    url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                    width: 150,
                  },
                  preview: {
                    height: 300,
                    url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                    width: 450,
                  },
                  preview_1000: {
                    height: 667,
                    url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
                    width: 1000,
                  },
                  preview_1500: {
                    height: 1000,
                    url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                    width: 1500,
                  },
                  small_thumb: {
                    height: 67,
                    url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                    width: 100,
                  },
                },
                contributor: { id: '250738318' },
                description: 'cropped image of woman gardening',
                has_model_release: true,
                id: '1572478477',
                image_type: 'photo',
                media_type: 'image',
                original_filename: '123.jpg',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2ImagesIdSimilarRoute = createRoute({
  method: 'get',
  path: '/v2/images/{id}/similar',
  tags: ['images'],
  summary: 'List similar images',
  description:
    'This endpoint returns images that are visually similar to an image that you specify.',
  operationId: 'listSimilarImages',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^([1-9]\d*)|(U[a-zA-Z0-9]+)$/)
        .openapi({
          param: {
            description: 'Image ID',
            example: '465011609',
            in: 'path',
            name: 'id',
            required: true,
            schema: { pattern: '^([1-9]\\d*)|(U[a-zA-Z0-9]+)$', type: 'string' },
          },
        }),
    }),
    query: z.object({
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          example: 'es',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ImageSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.5,
                    assets: {
                      huge_thumb: {
                        height: 260,
                        url: 'https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg',
                        width: 390,
                      },
                      large_thumb: {
                        height: 100,
                        url: 'https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 150,
                      },
                      preview: {
                        height: 300,
                        url: 'https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 450,
                      },
                      preview_1000: {
                        height: 667,
                        url: 'https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg',
                        width: 1000,
                      },
                      preview_1500: {
                        height: 1000,
                        url: 'https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 1500,
                      },
                      small_thumb: {
                        height: 67,
                        url: 'https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg',
                        width: 100,
                      },
                    },
                    contributor: { id: '250738318' },
                    description: 'cropped image of woman gardening',
                    has_model_release: true,
                    id: '1572478477',
                    image_type: 'photo',
                    media_type: 'image',
                  },
                ],
                page: 1,
                per_page: 5,
                search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
                spellcheck_info: {},
                total_count: 45,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const postV2OauthAccessTokenRoute = createRoute({
  method: 'post',
  path: '/v2/oauth/access_token',
  tags: ['oauth'],
  summary: 'Get access tokens',
  description:
    'This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.',
  operationId: 'createAccessToken',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              client_id: z
                .string()
                .openapi({ description: 'Client ID (Consumer Key) of your application' }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client Secret (Consumer Secret) of your application' }),
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Response code from the /oauth/authorize flow; required if grant_type=authorization_code',
                }),
              expires: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token',
                }),
              grant_type: z
                .enum(['authorization_code', 'client_credentials', 'refresh_token'])
                .openapi({
                  description:
                    'Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants',
                }),
              realm: z
                .enum(['customer', 'contributor'])
                .default('customer')
                .exactOptional()
                .openapi({ description: "User type to be authorized (usually 'customer')" }),
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Pass this along with grant_type=refresh_token to get a fresh access token',
                }),
            })
            .openapi({ required: ['client_id', 'grant_type'] }),
          examples: { default: { value: { client_id: '141024g14g28104gff1h' } } },
        },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z
                .string()
                .openapi({ description: 'Client ID (Consumer Key) of your application' }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({ description: 'Client Secret (Consumer Secret) of your application' }),
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Response code from the /oauth/authorize flow; required if grant_type=authorization_code',
                }),
              expires: z
                .enum(['true', 'false'])
                .default('false')
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token',
                }),
              grant_type: z
                .enum(['authorization_code', 'client_credentials', 'refresh_token'])
                .openapi({
                  description:
                    'Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants',
                }),
              realm: z
                .enum(['customer', 'contributor'])
                .default('customer')
                .exactOptional()
                .openapi({ description: "User type to be authorized (usually 'customer')" }),
              refresh_token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Pass this along with grant_type=refresh_token to get a fresh access token',
                }),
            })
            .openapi({ required: ['client_id', 'grant_type'] }),
          examples: { default: { value: { client_id: '141024g14g28104gff1h' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OauthAccessTokenResponseSchema,
          examples: {
            response: {
              value: {
                access_token:
                  'v2/NmQwOTc0NTBiMjA5YzZkY2Q4NTkvMTA4OTg1MDk5L2N1c3RvbWVyLzIvZjB2a0RseGo4Rkt6ZjRmVWJNMm10V2VzcHh1NTBlZWJ6andUQU1NeTVYYnNFTDVWOFRJakItS2RnZTlmbEY1Y3haNWdXLUtYc2JhaXo5djk0V0p2QzZUUWZ4c2FNWm41NkdLYUgyVWlCaVUtQTNVMV9YQWpzd3lpblI3SlZEem8wSG1qQ2NzSkJlX3VQTnNXenBIdkd4SXViVi1rRGJTVENCV0g1U3U0RXRJSV9rSm5lQkl5QXlvbm5JN241UUhv',
                token_type: 'Bearer',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
})

export const getV2OauthAuthorizeRoute = createRoute({
  method: 'get',
  path: '/v2/oauth/authorize',
  tags: ['oauth'],
  summary: 'Authorize applications',
  description:
    "This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.",
  operationId: 'authorize',
  request: {
    query: z.object({
      client_id: z
        .string()
        .openapi({
          param: {
            description: 'Client ID (Consumer Key) of your application',
            example: '6d097450b209c6dcd859',
            in: 'query',
            name: 'client_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      realm: z
        .enum(['customer', 'contributor'])
        .default('customer')
        .exactOptional()
        .openapi({
          param: {
            description: "User type to be authorized (usually 'customer')",
            example: 'customer',
            in: 'query',
            name: 'realm',
            schema: { default: 'customer', enum: ['customer', 'contributor'], type: 'string' },
            required: false,
          },
        }),
      redirect_uri: z
        .string()
        .openapi({
          param: {
            description:
              'The callback URI to send the request to after authorization; must use a host name that is registered with your application',
            example: 'localhost',
            in: 'query',
            name: 'redirect_uri',
            required: true,
            schema: { type: 'string' },
          },
        }),
      response_type: z
        .literal('code')
        .openapi({
          param: {
            description:
              "Type of temporary authorization code that will be used to generate an access code; the only valid value is 'code'",
            example: 'code',
            in: 'query',
            name: 'response_type',
            required: true,
            schema: { enum: ['code'], type: 'string' },
          },
        }),
      scope: z
        .string()
        .default('user.view')
        .exactOptional()
        .openapi({
          param: {
            description: 'Space-separated list of scopes to be authorized',
            example: 'user.view',
            in: 'query',
            name: 'scope',
            schema: { default: 'user.view', type: 'string' },
            required: false,
          },
        }),
      state: z
        .string()
        .openapi({
          param: {
            description: 'Unique value used by the calling app to verify the request',
            example: '1540290465000',
            in: 'query',
            name: 'state',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    302: {
      description: 'Redirect user to authenticate with Shutterstock',
      content: {
        'text/html': {
          schema: AuthorizeResponseSchema,
          examples: {
            response: { value: { $ref: '#/components/schemas/AuthorizeResponse/example' } },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
})

export const getV2SfxRoute = createRoute({
  method: 'get',
  path: '/v2/sfx',
  tags: ['sound_effects'],
  summary: 'List details about sound effects',
  description: 'This endpoint shows information about sound effects.',
  operationId: 'getSfxListDetails',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).max(500),
        )
        .openapi({
          param: {
            description: 'One or more sound effect IDs',
            example: ['1110335168', '465011609'],
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { format: 'asset-id', type: 'string' }, maxItems: 500, type: 'array' },
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            example: 'minimal',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      library: z
        .enum(['shutterstock', 'premier', 'premiumbeat'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Which library to fetch from',
            example: 'shutterstock',
            in: 'query',
            name: 'library',
            schema: { enum: ['shutterstock', 'premier', 'premiumbeat'], type: 'string' },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SFXDataListSchema,
          examples: {
            response: {
              value: { data: [{ contributor: { id: '1234' }, id: '123', media_type: 'sfx' }] },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2SfxLicensesRoute = createRoute({
  method: 'get',
  path: '/v2/sfx/licenses',
  tags: ['sound_effects'],
  summary: 'List sound effects licenses',
  description: 'This endpoint lists existing licenses.',
  operationId: 'getSfxLicenseList',
  request: {
    query: z.object({
      sfx_id: z
        .string()
        .regex(/^[1-9]\d*$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses for the specified sound effects ID',
            example: '12345678',
            in: 'query',
            name: 'sfx_id',
            schema: {
              pattern: '^[1-9]\\d*$',
              type: 'string',
              'x-pattern-description': 'A number that does not start with 0',
            },
            required: false,
          },
          'x-pattern-description': 'A number that does not start with 0',
        }),
      license: z
        .string()
        .regex(/^.+$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show sound effects that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license',
            example: 'standard',
            in: 'query',
            name: 'license',
            schema: {
              pattern: '^.+$',
              type: 'string',
              'x-pattern-description': 'Minimum 1 character',
            },
            required: false,
          },
          'x-pattern-description': 'Minimum 1 character',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      username: z
        .string()
        .regex(/^.+$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by username of licensee',
            example: 'aUniqueUsername',
            in: 'query',
            name: 'username',
            schema: {
              pattern: '^.+$',
              type: 'string',
              'x-pattern-description': 'Minimum 1 character',
            },
            required: false,
          },
          'x-pattern-description': 'Minimum 1 character',
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created on or after the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'start_date',
            schema: { format: 'date-time', type: 'string' },
            'x-relationships': [{ in: 'query', name: 'end_date', relationship: '<=' }],
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created before the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'end_date',
            schema: { format: 'date-time', type: 'string' },
            'x-relationships': [{ in: 'query', name: 'start_date', relationship: '>' }],
            required: false,
          },
        }),
      license_id: z
        .string()
        .regex(/^.+$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by the license ID',
            in: 'query',
            name: 'license_id',
            schema: {
              pattern: '^.+$',
              type: 'string',
              'x-pattern-description': 'Minimum 1 character',
            },
            required: false,
          },
          'x-pattern-description': 'Minimum 1 character',
        }),
      download_availability: z
        .enum(['all', 'downloadable', 'non_downloadable'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by download availability',
            in: 'query',
            name: 'download_availability',
            schema: {
              default: 'all',
              enum: ['all', 'downloadable', 'non_downloadable'],
              type: 'string',
            },
            required: false,
          },
        }),
      team_history: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to see license history for all members of your team.',
            in: 'query',
            name: 'team_history',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DownloadHistoryDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    download_time: '2021-07-15T15:46:34.000Z',
                    id: 'e1eba3833793e77188d22caae8bac9f2cd',
                    image: { format: { size: 'original' }, id: '9763363ao' },
                    is_downloadable: false,
                    license: 'premier_editorial_all_digital',
                    metadata: {
                      client: 'Company A',
                      job: 'Important project',
                      other: 'Important media',
                      purchase_order: '123456',
                    },
                    subscription_id: 's12345678',
                    user: { username: 'editorial_test_account_002' },
                  },
                ],
                page: 1,
                per_page: 1,
                total_count: 2890,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const postV2SfxLicensesRoute = createRoute({
  method: 'post',
  path: '/v2/sfx/licenses',
  tags: ['sound_effects'],
  summary: 'License sound effects',
  description: 'This endpoint licenses sounds effect assets.',
  operationId: 'licensesSFX',
  request: {
    body: {
      content: {
        'application/json': {
          schema: LicenseSFXRequestSchema,
          examples: {
            default: {
              value: {
                sound_effects: [
                  {
                    format: 'wav',
                    metadata: {
                      customer_id: '12345',
                      geo_location: 'US',
                      number_viewed: '15',
                      search_term: 'dog',
                    },
                    sfx_id: '123456789',
                    show_modal: true,
                    size: 'ambisonic',
                    subscription_id: 's12345678',
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LicenseSFXResultDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    allotment_charge: 1,
                    download: {
                      url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp3',
                    },
                    sfx_id: '123456789',
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 123455,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const postV2SfxLicensesIdDownloadsRoute = createRoute({
  method: 'post',
  path: '/v2/sfx/licenses/{id}/downloads',
  tags: ['sound_effects'],
  summary: 'Download sound effects',
  description:
    'This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.',
  operationId: 'downloadSfx',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'License ID',
            example: '123',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SfxUrlSchema,
          examples: {
            response: {
              value: {
                url: 'http://download.dev.shutterstock.com/gatekeeper/abc/shutterstock_id.wav',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const getV2SfxSearchRoute = createRoute({
  method: 'get',
  path: '/v2/sfx/search',
  tags: ['sound_effects'],
  summary: 'Search for sound effects',
  description:
    'This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.',
  operationId: 'searchSFX',
  request: {
    query: z.object({
      added_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show sound effects added on the specified date',
            example: '2022-09-23',
            in: 'query',
            name: 'added_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      added_date_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show sound effects added on or after the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'added_date_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      added_date_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show sound effects added before the specified date',
            example: '2021-03-29',
            in: 'query',
            name: 'added_date_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      duration: z
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
        .openapi({
          param: {
            description: 'Show sound effects with the specified duration in seconds',
            example: 180,
            in: 'query',
            name: 'duration',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      duration_from: z
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
        .openapi({
          param: {
            description: 'Show sound effects with the specified duration or longer in seconds',
            example: 30,
            in: 'query',
            name: 'duration_from',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      duration_to: z
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
        .openapi({
          param: {
            description: 'Show sound effects with the specified duration or shorter in seconds',
            example: 180,
            in: 'query',
            name: 'duration_to',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            example: 1,
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 500, minimum: 1, type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'One or more search terms separated by spaces',
            example: 'drum',
            in: 'query',
            name: 'query',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      safe: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable or disable safe search',
            in: 'query',
            name: 'safe',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      sort: z
        .enum(['popular', 'newest', 'relevance', 'random', 'oldest'])
        .default('popular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by',
            example: 'popular',
            in: 'query',
            name: 'sort',
            schema: {
              default: 'popular',
              enum: ['popular', 'newest', 'relevance', 'random', 'oldest'],
              type: 'string',
              uniqueItems: true,
            },
            required: false,
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            example: 'full',
            in: 'query',
            name: 'view',
            schema: {
              default: 'minimal',
              enum: ['minimal', 'full'],
              type: 'string',
              uniqueItems: true,
            },
            required: false,
          },
        }),
      language: LanguageSchema.openapi({
        param: {
          description: 'Set query and result language (uses Accept-Language header if not set)',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SFXSearchResultsSchema,
          examples: { response: { value: { $ref: '#/components/schemas/SFXSearchResults' } } },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2SfxIdRoute = createRoute({
  method: 'get',
  path: '/v2/sfx/{id}',
  tags: ['sound_effects'],
  summary: 'Get details about sound effects',
  description: 'This endpoint shows information about a sound effect.',
  operationId: 'getSfxDetails',
  request: {
    params: z.object({
      id: z
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
            description: 'Audio track ID',
            example: '442583',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            example: 'full',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      library: z
        .enum(['shutterstock', 'premier', 'premiumbeat'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Which library to fetch from',
            example: 'shutterstock',
            in: 'query',
            name: 'library',
            schema: { enum: ['shutterstock', 'premier', 'premiumbeat'], type: 'string' },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SFXSchema,
          examples: {
            response: { value: { contributor: { id: '1234' }, id: '123', media_type: 'sfx' } },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2TestRoute = createRoute({
  method: 'get',
  path: '/v2/test',
  tags: ['test'],
  summary: 'Echo text',
  operationId: 'echo',
  request: {
    query: z.object({
      text: z
        .string()
        .default('ok')
        .exactOptional()
        .openapi({
          param: {
            description: 'Text to echo',
            in: 'query',
            name: 'text',
            schema: { default: 'ok', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TestEchoSchema,
          examples: { response: { value: { text: 'Test string' } } },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
})

export const getV2TestValidateRoute = createRoute({
  method: 'get',
  path: '/v2/test/validate',
  tags: ['test'],
  summary: 'Validate input',
  operationId: 'validate',
  request: {
    query: z.object({
      id: z
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
            description: 'Integer ID',
            example: 123,
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      tag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of tags',
            in: 'query',
            name: 'tag',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User agent',
            in: 'header',
            name: 'user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TestValidateSchema,
          examples: {
            response: {
              value: {
                header: {
                  'user-agent':
                    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
                },
                query: { id: 123456, tag: ['Test string'] },
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
})

export const getV2UserRoute = createRoute({
  method: 'get',
  path: '/v2/user',
  tags: ['users'],
  summary: 'Get user details',
  operationId: 'getUser',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UserDetailsSchema,
          examples: {
            response: {
              value: {
                contributor_id: '212',
                first_name: 'John',
                full_name: 'John Doe',
                id: '101782699',
                language: 'es',
                last_name: 'Doe',
                username: 'jdoe',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['user.view'] }],
})

export const getV2UserAccessTokenRoute = createRoute({
  method: 'get',
  path: '/v2/user/access_token',
  tags: ['users'],
  summary: 'Get access token details',
  operationId: 'getAccessToken',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AccessTokenDetailsSchema,
          examples: {
            response: {
              value: {
                client_id: 'c456b-26230-fa8ed-d19ab-05ce2-bf0aa',
                customer_id: '123456789',
                expires_in: 3600,
                realm: 'customer',
                scopes: [
                  'collections.edit',
                  'collections.view',
                  'licenses.create',
                  'licenses.view',
                  'purchases.view',
                  'user.view',
                ],
                user_id: '123456789',
                username: 'jdoe',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: [] }],
})

export const getV2UserSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/v2/user/subscriptions',
  tags: ['users'],
  summary: 'List user subscriptions',
  operationId: 'getUserSubscriptionList',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SubscriptionDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    allotment: {
                      downloads_left: 5,
                      downloads_limit: 10,
                      end_time: '2020-05-29T12:10:22-05:00',
                      start_time: '2020-05-29T12:10:22-05:00',
                    },
                    asset_type: 'images',
                    description: 'Annual Subscription',
                    expiration_time: '2020-05-29T12:10:22-05:00',
                    formats: [
                      {
                        description: 'Small',
                        format: 'jpg',
                        media_type: 'image',
                        min_resolution: 500,
                        size: 'small',
                      },
                      {
                        description: 'Med',
                        format: 'jpg',
                        media_type: 'image',
                        min_resolution: 1000,
                        size: 'medium',
                      },
                      { description: 'Vector', format: 'eps', media_type: 'image', size: 'vector' },
                    ],
                    id: 's8906043',
                    license: 'standard',
                    metadata: {},
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 123455,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['purchases.view'] }],
})

export const getV2VideosRoute = createRoute({
  method: 'get',
  path: '/v2/videos',
  tags: ['videos'],
  summary: 'List videos',
  description:
    'This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.',
  operationId: 'getVideoList',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()).min(1).max(500),
        )
        .openapi({
          param: {
            description: 'One or more video IDs',
            example: ['639703', '993721'],
            in: 'query',
            name: 'id',
            required: true,
            schema: {
              items: { format: 'asset-id', type: 'string' },
              maxItems: 500,
              minItems: 1,
              type: 'array',
            },
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: VideoDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    added_date: '2019-07-13',
                    aspect: 1.778,
                    aspect_ratio: '16:9',
                    assets: {
                      hd: {
                        display_name: 'Original HD',
                        file_size: 110359552,
                        format: 'avc1',
                        fps: 29.97,
                        height: 1080,
                        is_licensable: true,
                        width: 1920,
                      },
                      preview_jpg: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                      },
                      preview_mp4: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                      },
                      preview_webm: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                      },
                      sd: {
                        display_name: 'Standard Definition MPEG',
                        file_size: 4577280,
                        format: 'mov',
                        fps: 29.97,
                        height: 480,
                        is_licensable: true,
                        width: 852,
                      },
                      thumb_jpg: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                      },
                      thumb_jpgs: {
                        urls: [
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg',
                          'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                        ],
                      },
                      thumb_mp4: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                      },
                      thumb_webm: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                      },
                      web: {
                        display_name: 'Low Resolution MPEG',
                        file_size: 1291264,
                        format: 'mov',
                        fps: 29.97,
                        height: 240,
                        is_licensable: true,
                        width: 426,
                      },
                    },
                    categories: [
                      { id: '12', name: 'Nature' },
                      { id: '13', name: 'People' },
                    ],
                    contributor: { id: '4411978' },
                    description:
                      'Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness',
                    duration: 14.081,
                    has_model_release: true,
                    has_property_release: false,
                    id: '1033184651',
                    is_adult: false,
                    is_editorial: false,
                    keywords: [
                      'active',
                      'activity',
                      'adventure',
                      'arms',
                      'backpacker',
                      'carefree',
                      'celebrating',
                      'cliff',
                      'climate',
                      'cloud',
                      'discovery',
                      'escape',
                      'explore',
                      'extreme',
                      'free',
                      'freedom',
                      'girl',
                      'happy',
                      'high',
                      'hiker',
                      'hiking',
                      'hill',
                      'independent',
                      'inspiration',
                      'landscape',
                      'leisure',
                      'lifestyle',
                      'mountain',
                      'mountains',
                      'nature',
                      'outdoor',
                      'peak',
                      'person',
                      'rock',
                      'scenic',
                      'sky',
                      'sport',
                      'success',
                      'summer',
                      'summit',
                      'sun',
                      'sunset',
                      'top',
                      'tourism',
                      'travel',
                      'trekking',
                      'vacation',
                      'view',
                      'winning',
                      'woman',
                    ],
                    media_type: 'video',
                    models: [{ id: '33233810' }, { id: '25487168' }],
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 25,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2VideosCategoriesRoute = createRoute({
  method: 'get',
  path: '/v2/videos/categories',
  tags: ['videos'],
  summary: 'List video categories',
  description:
    'This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.',
  operationId: 'listVideoCategories',
  request: {
    query: z.object({
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          example: 'es',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CategoryDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  { id: '1', name: 'Animals/Wildlife' },
                  { id: '11', name: 'The Arts' },
                ],
                page: 1,
                per_page: 2,
                total_count: 13,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2VideosCollectionsRoute = createRoute({
  method: 'get',
  path: '/v2/videos/collections',
  tags: ['videos'],
  summary: 'List video collections',
  description: 'This endpoint lists your collections of videos and their basic attributes.',
  operationId: 'getVideoCollectionList',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(150),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 150, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      embed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['share_code', 'share_url'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which sharing information to include in the response, such as a URL to the collection',
            example: 'share_code',
            in: 'query',
            name: 'embed',
            schema: { items: { enum: ['share_code', 'share_url'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    cover_item: { id: '297886754' },
                    id: '293542904',
                    items_updated_time: '2021-05-20T16:15:22-04:00',
                    name: 'My collection',
                    total_item_count: 85,
                  },
                ],
                page: 1,
                per_page: 100,
                total_count: 1,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2VideosCollectionsRoute = createRoute({
  method: 'post',
  path: '/v2/videos/collections',
  tags: ['videos'],
  summary: 'Create video collections',
  description:
    'This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.',
  operationId: 'createVideoCollection',
  request: {
    body: {
      description: 'Collection metadata',
      content: {
        'application/json': {
          schema: CollectionCreateRequestSchema,
          examples: { default: { value: { name: 'Test Collection 19cf' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully created video collection',
      content: {
        'application/json': {
          schema: CollectionCreateResponseSchema,
          examples: { response: { value: { id: '48433105' } } },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const getV2VideosCollectionsFeaturedRoute = createRoute({
  method: 'get',
  path: '/v2/videos/collections/featured',
  tags: ['videos'],
  summary: 'List featured video collections',
  description:
    'This endpoint lists featured video collections and a name and cover video for each collection.',
  operationId: 'getFeaturedVideoCollectionList',
  request: {
    query: z.object({
      embed: z
        .literal('share_url')
        .exactOptional()
        .openapi({
          param: {
            description:
              'What information to include in the response, such as a URL to the collection',
            example: 'share_url',
            in: 'query',
            name: 'embed',
            schema: { enum: ['share_url'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: FeaturedCollectionDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    cover_item: {
                      url: 'https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg',
                    },
                    created_time: '2021-07-07T13:10:24.000Z',
                    id: '19853',
                    items_updated_time: '2021-07-08T12:33:37.000Z',
                    name: 'Exercise & Fitness',
                    total_item_count: 82,
                    updated_time: '2021-07-07T13:10:24.000Z',
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 123455,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2VideosCollectionsFeaturedIdRoute = createRoute({
  method: 'get',
  path: '/v2/videos/collections/featured/{id}',
  tags: ['videos'],
  summary: 'Get the details of featured video collections',
  description:
    'This endpoint gets more detailed information about a featured video collection, including its cover video and timestamps for its creation and most recent update. To get the videos, use `GET /v2/videos/collections/featured/{id}/items`.',
  operationId: 'getFeaturedVideoCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '136351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .literal('share_url')
        .exactOptional()
        .openapi({
          param: {
            description:
              'What information to include in the response, such as a URL to the collection',
            in: 'query',
            name: 'embed',
            schema: { enum: ['share_url'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: FeaturedCollectionSchema,
          examples: {
            response: {
              value: {
                cover_item: {
                  url: 'https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg',
                },
                created_time: '2021-07-07T13:10:24.000Z',
                id: '19853',
                items_updated_time: '2021-07-08T12:33:37.000Z',
                name: 'Exercise & Fitness',
                total_item_count: 82,
                updated_time: '2021-07-07T13:10:24.000Z',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Featured collection not found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2VideosCollectionsFeaturedIdItemsRoute = createRoute({
  method: 'get',
  path: '/v2/videos/collections/featured/{id}/items',
  tags: ['videos'],
  summary: 'Get the contents of featured video collections',
  description:
    'This endpoint lists the IDs of videos in a featured collection and the date that each was added.',
  operationId: 'getFeaturedVideoCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '136351027',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(150),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 150, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: VideoCollectionItemDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  { added_time: '2016-08-18T18:52:59-04:00', id: '76688182', media_type: 'video' },
                  { added_time: '2016-08-18T18:52:59-04:00', id: '40005859', media_type: 'video' },
                ],
                page: 1,
                per_page: 100,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Featured collection not found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2VideosCollectionsIdRoute = createRoute({
  method: 'get',
  path: '/v2/videos/collections/{id}',
  tags: ['videos'],
  summary: 'Get the details of video collections',
  description:
    'This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.',
  operationId: 'getVideoCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the collection to return',
            example: '17555176',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['share_code', 'share_url'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which sharing information to include in the response, such as a URL to the collection',
            in: 'query',
            name: 'embed',
            schema: { items: { enum: ['share_code', 'share_url'], type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      share_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Code to retrieve a shared collection',
            in: 'query',
            name: 'share_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionSchema,
          examples: {
            response: {
              value: {
                cover_item: { id: '297886754' },
                id: '293542904',
                items_updated_time: '2021-05-20T16:15:22-04:00',
                name: 'My collection',
                total_item_count: 85,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2VideosCollectionsIdRoute = createRoute({
  method: 'post',
  path: '/v2/videos/collections/{id}',
  tags: ['videos'],
  summary: 'Rename video collections',
  description: 'This endpoint sets a new name for a collection.',
  operationId: 'renameVideoCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the collection to rename',
            example: '17555176',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The new name for the collection',
      content: {
        'application/json': {
          schema: CollectionUpdateRequestSchema,
          examples: { default: { value: { name: 'My collection with a new name' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully updated collection' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const deleteV2VideosCollectionsIdRoute = createRoute({
  method: 'delete',
  path: '/v2/videos/collections/{id}',
  tags: ['videos'],
  summary: 'Delete video collections',
  description: 'This endpoint deletes a collection.',
  operationId: 'deleteVideoCollection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the collection to delete',
            example: '17555176',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully deleted collection' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const getV2VideosCollectionsIdItemsRoute = createRoute({
  method: 'get',
  path: '/v2/videos/collections/{id}/items',
  tags: ['videos'],
  summary: 'Get the contents of video collections',
  description:
    'This endpoint lists the IDs of videos in a collection and the date that each was added.',
  operationId: 'getVideoCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Collection ID',
            example: '17555176',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(150),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 150, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      share_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Code to retrieve the contents of a shared collection',
            in: 'query',
            name: 'share_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('oldest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort order',
            in: 'query',
            name: 'sort',
            schema: { default: 'oldest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CollectionItemDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  { added_time: '2021-07-08T12:33:37.000Z', id: '1690105108', media_type: 'image' },
                  { added_time: '2021-07-08T12:31:43.000Z', id: '1468703072', media_type: 'image' },
                ],
                page: 1,
                per_page: 2,
                total_count: 82,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.view'] }],
})

export const postV2VideosCollectionsIdItemsRoute = createRoute({
  method: 'post',
  path: '/v2/videos/collections/{id}/items',
  tags: ['videos'],
  summary: 'Add videos to collections',
  description: 'This endpoint adds one or more videos to a collection by video IDs.',
  operationId: 'addVideoCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the collection to which items should be added',
            example: '17555176',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Array of video IDs to add to the collection',
      content: {
        'application/json': {
          schema: CollectionItemRequestSchema,
          examples: { default: { value: { items: [{ id: '10120264' }, { id: '24419024' }] } } },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully added collection items' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const deleteV2VideosCollectionsIdItemsRoute = createRoute({
  method: 'delete',
  path: '/v2/videos/collections/{id}/items',
  tags: ['videos'],
  summary: 'Remove videos from collections',
  description: 'This endpoint removes one or more videos from a collection.',
  operationId: 'deleteVideoCollectionItems',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the Collection from which items will be deleted',
            example: '17555176',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      item_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'One or more video IDs to remove from the collection',
            in: 'query',
            name: 'item_id',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successfully removed collection items' },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Collection not found' },
  },
  security: [{ customer_accessCode: ['collections.edit'] }],
})

export const getV2VideosLicensesRoute = createRoute({
  method: 'get',
  path: '/v2/videos/licenses',
  tags: ['videos'],
  summary: 'List video licenses',
  description: 'This endpoint lists existing licenses.',
  operationId: 'getVideoLicenseList',
  request: {
    query: z.object({
      video_id: z
        .string()
        .regex(/^[1-9]\d*$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses for the specified video ID',
            example: '12345678',
            in: 'query',
            name: 'video_id',
            schema: {
              pattern: '^[1-9]\\d*$',
              type: 'string',
              'x-pattern-description': 'A number that does not start with 0',
            },
            required: false,
          },
          'x-pattern-description': 'A number that does not start with 0',
        }),
      license: z
        .string()
        .regex(/^.+$/)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license',
            example: 'standard',
            in: 'query',
            name: 'license',
            schema: {
              pattern: '^.+$',
              type: 'string',
              'x-pattern-description': 'Minimum 1 character',
            },
            required: false,
          },
          'x-pattern-description': 'Minimum 1 character',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(200),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by oldest or newest videos first',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by username of licensee',
            example: 'aUniqueUsername',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created on or after the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'start_date',
            schema: { format: 'date-time', type: 'string' },
            'x-relationships': [{ in: 'query', name: 'end_date', relationship: '<=' }],
            required: false,
          },
        }),
      end_date: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Show licenses created before the specified date',
            example: '2021-03-29T13:25:13.521Z',
            in: 'query',
            name: 'end_date',
            schema: { format: 'date-time', type: 'string' },
            'x-relationships': [{ in: 'query', name: 'start_date', relationship: '>' }],
            required: false,
          },
        }),
      download_availability: z
        .enum(['all', 'downloadable', 'non_downloadable'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter licenses by download availability',
            in: 'query',
            name: 'download_availability',
            schema: {
              default: 'all',
              enum: ['all', 'downloadable', 'non_downloadable'],
              type: 'string',
            },
            required: false,
          },
        }),
      team_history: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to see license history for all members of your team.',
            in: 'query',
            name: 'team_history',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: DownloadHistoryDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    download_time: '2018-05-24T14:26:25-04:00',
                    id: 'e121',
                    is_downloadable: true,
                    license: 'footage_premier',
                    metadata: {
                      customer_id: '12345',
                      geo_location: 'US',
                      number_viewed: '15',
                      search_term: 'dog',
                    },
                    subscription_id: 's12345678',
                    user: { username: 'myusername' },
                    video: { format: { size: 'sd' }, id: '2140697' },
                  },
                ],
                page: 1,
                per_page: 20,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const postV2VideosLicensesRoute = createRoute({
  method: 'post',
  path: '/v2/videos/licenses',
  tags: ['videos'],
  summary: 'License videos',
  description:
    'This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.',
  operationId: 'licenseVideos',
  request: {
    query: z.object({
      subscription_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The subscription ID to use for licensing',
            example: 's12345678',
            in: 'query',
            name: 'subscription_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      size: z
        .enum(['web', 'sd', 'hd', '4k'])
        .default('web')
        .exactOptional()
        .openapi({
          param: {
            description: 'The size of the video to license',
            in: 'query',
            name: 'size',
            schema: { default: 'web', enum: ['web', 'sd', 'hd', '4k'], type: 'string' },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Search ID that led to this licensing event',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description:
        'List of videos to request licenses for and information about each license transaction; these values override the defaults in the query parameters',
      content: {
        'application/json': {
          schema: LicenseVideoRequestSchema,
          examples: {
            default: {
              value: {
                videos: [{ size: 'hd', subscription_id: 's12345678', video_id: '2140697' }],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LicenseVideoResultDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    allotment_charge: 1,
                    download: {
                      url: 'https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp4',
                    },
                    price: { local_amount: 12.34, local_currency: 'EUR' },
                    video_id: '123456789',
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 123455,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.create', 'purchases.view'] }],
})

export const postV2VideosLicensesIdDownloadsRoute = createRoute({
  method: 'post',
  path: '/v2/videos/licenses/{id}/downloads',
  tags: ['videos'],
  summary: 'Download videos',
  description: 'This endpoint redownloads videos that you have already received a license for.',
  operationId: 'downloadVideos',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The license ID of the item to (re)download. The download links in the response are valid for 8 hours.',
            example: 'e123',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Information about the videos to redownload',
      content: { 'application/json': { schema: RedownloadVideoSchema, example: { size: 'web' } } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UrlSchema,
          examples: {
            response: {
              value: {
                url: 'https://download1.shutterstock.com/gatekeeper/W3siZSI6MTUzMzMzMzUzMCwiayI6InZpZGVvLzM5NjU4ODEvaGQubW92IiwibSI6MSwiZCI6InNodXR0ZXJzdG9jay1tZWRpYSJ9LCJjZ2lvRU14T09hNWZGTHZsN21iTWVPRVQ3MFEiXQ/shutterstock_v3965881.mov',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ customer_accessCode: ['licenses.view'] }],
})

export const getV2VideosSearchRoute = createRoute({
  method: 'get',
  path: '/v2/videos/search',
  tags: ['videos'],
  summary: 'Search for videos',
  description:
    'This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.',
  operationId: 'searchVideos',
  request: {
    query: z.object({
      added_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos added on the specified date',
            example: '2020-05-29',
            in: 'query',
            name: 'added_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      added_date_start: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos added on or after the specified date',
            example: '2020-05-29',
            in: 'query',
            name: 'added_date_start',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      added_date_end: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos added before the specified date',
            example: '2020-05-29',
            in: 'query',
            name: 'added_date_end',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      aspect_ratio: z
        .enum(['4_3', '16_9', 'nonstandard'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos with the specified aspect ratio',
            example: '4_3',
            in: 'query',
            name: 'aspect_ratio',
            schema: { enum: ['4_3', '16_9', 'nonstandard'], type: 'string' },
            required: false,
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show videos with the specified Shutterstock-defined category; specify a category name or ID',
            in: 'query',
            name: 'category',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos with the specified artist names or IDs',
            example: '[12345678]',
            in: 'query',
            name: 'contributor',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      contributor_country: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos from contributors in one or more specified countries',
            example: 'US',
            in: 'query',
            name: 'contributor_country',
            schema: { items: { format: 'country-code-2', type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      duration: z
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
        .openapi({
          param: {
            deprecated: true,
            description:
              '(Deprecated; use duration_from and duration_to instead) Show videos with the specified duration in seconds',
            in: 'query',
            name: 'duration',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      duration_from: z
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
        .openapi({
          param: {
            description: 'Show videos with the specified duration or longer in seconds',
            example: 60,
            in: 'query',
            name: 'duration_from',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      duration_to: z
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
        .openapi({
          param: {
            description: 'Show videos with the specified duration or shorter in seconds',
            example: 180,
            in: 'query',
            name: 'duration_to',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      fps: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              '(Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second',
            in: 'query',
            name: 'fps',
            schema: { type: 'number' },
            required: false,
          },
        }),
      fps_from: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos with the specified frames per second or more',
            example: 24,
            in: 'query',
            name: 'fps_from',
            schema: { type: 'number' },
            required: false,
          },
        }),
      fps_to: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos with the specified frames per second or fewer',
            example: 60,
            in: 'query',
            name: 'fps_to',
            schema: { type: 'number' },
            required: false,
          },
        }),
      keyword_safe_search: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Hide results with potentially unsafe keywords',
            in: 'query',
            name: 'keyword_safe_search',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      language: LanguageSchema.openapi({
        param: {
          description: 'Set query and result language (uses Accept-Language header if not set)',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      license: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['commercial', 'editorial']).default('commercial')),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only videos with the specified license or licenses',
            example: ['commercial', 'editorial'],
            explode: true,
            in: 'query',
            name: 'license',
            schema: {
              items: { default: 'commercial', enum: ['commercial', 'editorial'], type: 'string' },
              type: 'array',
            },
            required: false,
          },
        }),
      model: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos with each of the specified models',
            example: ['442583', '434750'],
            explode: true,
            in: 'query',
            name: 'model',
            schema: { items: { type: 'string' }, type: 'array' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 500, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      people_age: z
        .enum(['infants', 'children', 'teenagers', '20s', '30s', '40s', '50s', '60s', 'older'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos that feature people of the specified age range',
            example: '20s',
            in: 'query',
            name: 'people_age',
            schema: {
              enum: [
                'infants',
                'children',
                'teenagers',
                '20s',
                '30s',
                '40s',
                '50s',
                '60s',
                'older',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      people_ethnicity: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'african',
              'african_american',
              'black',
              'brazilian',
              'chinese',
              'caucasian',
              'east_asian',
              'hispanic',
              'japanese',
              'middle_eastern',
              'native_american',
              'pacific_islander',
              'south_asian',
              'southeast_asian',
              'other',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos with people of the specified ethnicities',
            example: 'hispanic',
            in: 'query',
            name: 'people_ethnicity',
            schema: {
              items: {
                enum: [
                  'african',
                  'african_american',
                  'black',
                  'brazilian',
                  'chinese',
                  'caucasian',
                  'east_asian',
                  'hispanic',
                  'japanese',
                  'middle_eastern',
                  'native_american',
                  'pacific_islander',
                  'south_asian',
                  'southeast_asian',
                  'other',
                ],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
        }),
      people_gender: z
        .enum(['male', 'female', 'both'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos with people with the specified gender',
            example: 'female',
            in: 'query',
            name: 'people_gender',
            schema: { enum: ['male', 'female', 'both'], type: 'string' },
            required: false,
          },
        }),
      people_number: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(4),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos with the specified number of people',
            example: 2,
            in: 'query',
            name: 'people_number',
            schema: { maximum: 4, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      people_model_released: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only videos of people with a signed model release',
            example: true,
            in: 'query',
            name: 'people_model_released',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more search terms separated by spaces; you can use NOT to filter out videos that match a term',
            example: 'dogs running on the beach',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resolution: z
        .enum(['4k', 'standard_definition', 'high_definition'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos with the specified resolution',
            example: '4k',
            in: 'query',
            name: 'resolution',
            schema: { enum: ['4k', 'standard_definition', 'high_definition'], type: 'string' },
            required: false,
          },
        }),
      safe: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description: 'Enable or disable safe search',
            in: 'query',
            name: 'safe',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'popular', 'relevance', 'random'])
        .default('popular')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by one of these categories',
            in: 'query',
            name: 'sort',
            schema: {
              default: 'popular',
              enum: ['newest', 'popular', 'relevance', 'random'],
              type: 'string',
            },
            required: false,
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: VideoSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.778,
                    aspect_ratio: '16:9',
                    assets: {
                      preview_jpg: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                      },
                      preview_mp4: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                      },
                      preview_webm: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                      },
                      thumb_jpg: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                      },
                      thumb_mp4: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                      },
                      thumb_webm: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                      },
                    },
                    contributor: { id: '4411978' },
                    description:
                      'Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness',
                    duration: 14.081,
                    has_model_release: true,
                    id: '1033184651',
                    media_type: 'video',
                  },
                ],
                page: 1,
                per_page: 5,
                search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
                total_count: 123,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2VideosSearchSuggestionsRoute = createRoute({
  method: 'get',
  path: '/v2/videos/search/suggestions',
  tags: ['videos'],
  summary: 'Get suggestions for a search term',
  description: 'This endpoint provides autocomplete suggestions for partial search terms.',
  operationId: 'getVideoSuggestions',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search term for which you want keyword suggestions',
            example: 'cats',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(25),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'Limit the number of the suggestions',
            in: 'query',
            name: 'limit',
            schema: { default: 10, maximum: 25, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SuggestionsSchema,
          examples: {
            response: {
              value: {
                data: [
                  'cat scan',
                  'cats and dogs',
                  'cats playing',
                  'catsuit',
                  'cat silhouette',
                  'catskills',
                  'cats eyes',
                  'cat sitting',
                  'cat sleeping',
                  'cats eye',
                ],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2VideosUpdatedRoute = createRoute({
  method: 'get',
  path: '/v2/videos/updated',
  tags: ['videos'],
  summary: 'List updated videos',
  description:
    'This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.',
  operationId: 'getUpdatedVideos',
  request: {
    query: z.object({
      start_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos updated on or after the specified date',
            example: '2020-05-29',
            in: 'query',
            name: 'start_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      end_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show videos updated before the specified date',
            example: '2021-05-29',
            in: 'query',
            name: 'end_date',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      interval: z
        .string()
        .default('1 HOUR')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request',
            in: 'query',
            name: 'interval',
            schema: { default: '1 HOUR', type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 100, maximum: 2000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      sort: z
        .enum(['newest', 'oldest'])
        .default('newest')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort by oldest or newest videos first',
            in: 'query',
            name: 'sort',
            schema: { default: 'newest', enum: ['newest', 'oldest'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: UpdatedMediaDataListSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    id: '123456789',
                    updated_time: '2020-05-29T12:10:22-05:00',
                    updates: ['addition', 'edit'],
                  },
                ],
                page: 1,
                per_page: 5,
                total_count: 13,
              },
            },
          },
        },
      },
    },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2VideosIdRoute = createRoute({
  method: 'get',
  path: '/v2/videos/{id}',
  tags: ['videos'],
  summary: 'Get details about videos',
  description:
    'This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.',
  operationId: 'getVideo',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Video ID',
            example: '639703',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'asset-id', type: 'string' },
          },
        }),
    }),
    query: z.object({
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          example: 'es',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      view: z
        .enum(['minimal', 'full'])
        .default('full')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'full', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
      search_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the search that is related to this request',
            example: '00000000-0000-0000-0000-000000000000',
            in: 'query',
            name: 'search_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: VideoSchema,
          examples: {
            response: {
              value: {
                added_date: '2019-07-13',
                aspect: 1.778,
                aspect_ratio: '16:9',
                assets: {
                  hd: {
                    display_name: 'Original HD',
                    file_size: 110359552,
                    format: 'avc1',
                    fps: 29.97,
                    height: 1080,
                    is_licensable: true,
                    width: 1920,
                  },
                  preview_jpg: {
                    url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                  },
                  preview_mp4: {
                    url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                  },
                  preview_webm: {
                    url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                  },
                  sd: {
                    display_name: 'Standard Definition MPEG',
                    file_size: 4577280,
                    format: 'mov',
                    fps: 29.97,
                    height: 480,
                    is_licensable: true,
                    width: 852,
                  },
                  thumb_jpg: {
                    url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                  },
                  thumb_jpgs: {
                    urls: [
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg',
                      'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                    ],
                  },
                  thumb_mp4: {
                    url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                  },
                  thumb_webm: {
                    url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                  },
                  web: {
                    display_name: 'Low Resolution MPEG',
                    file_size: 1291264,
                    format: 'mov',
                    fps: 29.97,
                    height: 240,
                    is_licensable: true,
                    width: 426,
                  },
                },
                categories: [
                  { id: '12', name: 'Nature' },
                  { id: '13', name: 'People' },
                ],
                contributor: { id: '4411978' },
                description:
                  'Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness',
                duration: 14.081,
                has_model_release: true,
                has_property_release: false,
                id: '1033184651',
                is_adult: false,
                is_editorial: false,
                keywords: [
                  'active',
                  'activity',
                  'adventure',
                  'arms',
                  'backpacker',
                  'carefree',
                  'celebrating',
                  'cliff',
                  'climate',
                  'cloud',
                  'discovery',
                  'escape',
                  'explore',
                  'extreme',
                  'free',
                  'freedom',
                  'girl',
                  'happy',
                  'high',
                  'hiker',
                  'hiking',
                  'hill',
                  'independent',
                  'inspiration',
                  'landscape',
                  'leisure',
                  'lifestyle',
                  'mountain',
                  'mountains',
                  'nature',
                  'outdoor',
                  'peak',
                  'person',
                  'rock',
                  'scenic',
                  'sky',
                  'sport',
                  'success',
                  'summer',
                  'summit',
                  'sun',
                  'sunset',
                  'top',
                  'tourism',
                  'travel',
                  'trekking',
                  'vacation',
                  'view',
                  'winning',
                  'woman',
                ],
                media_type: 'video',
                models: [{ id: '33233810' }, { id: '25487168' }],
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})

export const getV2VideosIdSimilarRoute = createRoute({
  method: 'get',
  path: '/v2/videos/{id}/similar',
  tags: ['videos'],
  summary: 'List similar videos',
  description: 'This endpoint searches for videos that are similar to a video that you specify.',
  operationId: 'findSimilarVideos',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of a video for which similar videos should be returned',
            example: '2140697',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'asset-id', type: 'string' },
          },
        }),
    }),
    query: z.object({
      language: LanguageSchema.openapi({
        param: {
          description: 'Language for the keywords and categories in the response',
          example: 'es',
          in: 'query',
          name: 'language',
          schema: { $ref: '#/components/schemas/Language' },
          required: false,
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results per page',
            in: 'query',
            name: 'per_page',
            schema: { default: 20, maximum: 500, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      view: z
        .enum(['minimal', 'full'])
        .default('minimal')
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of detail to render in the response',
            in: 'query',
            name: 'view',
            schema: { default: 'minimal', enum: ['minimal', 'full'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: VideoSearchResultsSchema,
          examples: {
            response: {
              value: {
                data: [
                  {
                    aspect: 1.778,
                    aspect_ratio: '16:9',
                    assets: {
                      preview_jpg: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                      },
                      preview_mp4: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                      },
                      preview_webm: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                      },
                      thumb_jpg: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg',
                      },
                      thumb_mp4: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4',
                      },
                      thumb_webm: {
                        url: 'https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm',
                      },
                    },
                    contributor: { id: '4411978' },
                    description:
                      'Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness',
                    duration: 14.081,
                    has_model_release: true,
                    id: '1033184651',
                    media_type: 'video',
                  },
                ],
                page: 1,
                per_page: 5,
                search_id: '749090bb-2967-4a20-b22e-c800dc845e10',
                total_count: 123,
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
  security: [{ basic: [] }, { customer_accessCode: [] }],
})
