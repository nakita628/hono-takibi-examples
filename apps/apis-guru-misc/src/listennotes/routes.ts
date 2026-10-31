import { createRoute, z } from '@hono/zod-openapi'

const AudioFieldSchema = z
  .string()
  .openapi({
    description: 'Audio url of this episode, which can be played directly.',
    examples: ['https://www.listennotes.com/e/p/11b34041e804491b9704d11f283c74de/'],
  })
  .openapi('AudioField')

const AudioLengthSecFieldSchema = z
  .int()
  .openapi({ description: 'Audio length of this episode. In seconds.', examples: [567] })
  .openapi('AudioLengthSecField')

const AvgAudioLengthSecFieldSchema = z
  .int()
  .openapi({
    description: 'Average audio length of all episodes of this podcast. In seconds.',
    examples: [1291],
  })
  .openapi('AvgAudioLengthSecField')

const BestPodcastsLNUrlFieldSchema = z
  .string()
  .openapi({
    description:
      'Url of the list of best podcasts on [ListenNotes.com](https://www.ListenNotes.com).',
    examples: ['https://www.listennotes.com/best-business-news-podcasts-95/'],
  })
  .openapi('BestPodcastsLNUrlField')

const CountryFieldSchema = z
  .string()
  .openapi({
    description: 'The country where this podcast is produced.',
    examples: ['United States'],
  })
  .openapi('CountryField')

const PodcastDescriptionFieldSchema = z
  .string()
  .openapi({
    description: "Html of this episode's full description",
    examples: [
      "<p>The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed!</p>",
    ],
  })
  .openapi('PodcastDescriptionField')

const EarliestPubDateMsFieldSchema = z
  .int()
  .openapi({
    description: 'The published date of the oldest episode of this podcast. In milliseconds',
    examples: [1470667902000],
  })
  .openapi('EarliestPubDateMsField')

const EmailFieldSchema = z
  .string()
  .openapi({
    description:
      "The email of this podcast's producer. This field is available only in the PRO/ENTERPRISE plan.",
    examples: ['hello@example.com'],
  })
  .openapi('EmailField')

const ExplicitFieldSchema = z
  .boolean()
  .openapi({ description: 'Whether this podcast contains explicit language.', examples: [false] })
  .openapi('ExplicitField')

const PodcastExtraFieldSchema = z
  .object({
    amazon_music_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Amazon Music url for this podcast',
        examples: [
          'https://music.amazon.com/podcasts/6fc6d683-9ef3-4850-9c35-8e8b1a42a147/the-lock-sportscast',
        ],
      }),
    facebook_handle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Facebook username affiliated with this podcast',
        examples: ['sw7x7'],
      }),
    google_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Google Podcasts url for this podcast',
        examples: [
          'https://podcasts.google.com/feed/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2pvaG4tc29sb21vbi1yZXBvcnRz',
        ],
      }),
    instagram_handle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Instagram username affiliated with this podcast',
        examples: ['sw7x7'],
      }),
    linkedin_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'LinkedIn url affiliated with this podcast' }),
    patreon_handle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Patreon username affiliated with this podcast',
        examples: ['sw7x7'],
      }),
    spotify_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Spotify url for this podcast',
        examples: ['https://open.spotify.com/show/2rQJUP9Y3HxemiW3JHt9WV'],
      }),
    twitter_handle: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Twitter username affiliated with this podcast',
        examples: ['SW7x7podcast'],
      }),
    url1: z.string().exactOptional().openapi({ description: 'Url affiliated with this podcast' }),
    url2: z.string().exactOptional().openapi({ description: 'Url affiliated with this podcast' }),
    url3: z.string().exactOptional().openapi({ description: 'Url affiliated with this podcast' }),
    wechat_handle: z
      .string()
      .exactOptional()
      .openapi({ description: 'WeChat username affiliated with this podcast' }),
    youtube_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'YouTube url affiliated with this podcast',
        examples: ['https://www.youtube.com/sw7x7'],
      }),
  })
  .openapi({ required: [] })
  .openapi('PodcastExtraField')

const GenreIdsFieldSchema = z
  .array(z.int().openapi({ description: 'Genre ids.' }))
  .openapi({ examples: [[138, 86, 160, 68, 82, 100, 101]] })
  .openapi('GenreIdsField')

const PodcastIdFieldSchema = z
  .string()
  .openapi({
    description:
      'Podcast id, which can be used to further fetch detailed podcast metadata via `GET /podcasts/{id}`.',
    examples: ['4d3fe717742d4963a85562e9f84d8c79'],
  })
  .openapi('PodcastIdField')

const ImageFieldSchema = z
  .string()
  .openapi({
    description:
      "Image url for this podcast's artwork. If you are using PRO/ENTERPRISE plan, then it's\na high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,\nlow resolution image (300x300).\n",
    examples: [
      'https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg',
    ],
  })
  .openapi('ImageField')

const IsClaimedFieldSchema = z
  .boolean()
  .openapi({
    description:
      'Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).',
    examples: [true],
  })
  .openapi('IsClaimedField')

const ITunesIdFieldSchema = z
  .int()
  .openapi({ description: 'iTunes id for this podcast.', examples: [896354638] })
  .openapi('ITunesIdField')

const LanguageFieldSchema = z
  .string()
  .openapi({
    description:
      'The language of this podcast. You can get all supported languages from `GET /languages`.',
    examples: ['English'],
  })
  .openapi('LanguageField')

const LatestEpisodeIdFieldSchema = z
  .string()
  .openapi({
    description:
      'The id of the most recently published episode of this podcast, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.',
    examples: ['d057092e57cc4ced80e0efaa196593d9'],
  })
  .openapi('LatestEpisodeIdField')

const LatestPubDateMsFieldSchema = z
  .int()
  .openapi({
    description: 'The published date of the latest episode of this podcast. In milliseconds',
    examples: [1557499770000],
  })
  .openapi('LatestPubDateMsField')

const ListenScoreFieldSchema = z
  .int()
  .openapi({
    description:
      "The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.\nIf the score is not available, it'll be null. Learn more at listennotes.com/listen-score\n",
    examples: [81],
  })
  .openapi('ListenScoreField')

const ListenScoreGlobalRankFieldSchema = z
  .string()
  .openapi({
    description:
      "The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.\nFor example, if the value is 0.5%, then this podcast is one of the top 0.5% most popular shows out of all podcasts globally, ranked by Listen Score.\nIf the ranking is not available, it'll be null. Learn more at listennotes.com/listen-score\n",
    examples: ['0.5%'],
  })
  .openapi('ListenScoreGlobalRankField')

const PodcastLNUrlFieldSchema = z
  .string()
  .openapi({
    description: 'The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).',
    examples: ['https://www.listennotes.com/c/4d3fe717742d4963a85562e9f84d8c79/'],
  })
  .openapi('PodcastLNUrlField')

const PodcastLookingForFieldSchema = z
  .object({
    cohosts: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this podcast is looking for cohosts.', examples: [true] }),
    cross_promotion: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this podcast is looking for cross promotion opportunities with other podcasts.',
        examples: [true],
      }),
    guests: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this podcast is looking for guests.', examples: [true] }),
    sponsors: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this podcast is looking for sponsors.', examples: [true] }),
  })
  .openapi({ required: [] })
  .openapi('PodcastLookingForField')

const PublisherFieldSchema = z
  .string()
  .openapi({ description: 'Podcast publisher name.', examples: ['Planet Broadcasting'] })
  .openapi('PublisherField')

const RssFieldSchema = z
  .string()
  .openapi({
    description:
      'RSS url of this podcast. This field is available only in the PRO/ENTERPRISE plan.',
    examples: ['https://sw7x7.libsyn.com/rss'],
  })
  .openapi('RssField')

const ThumbnailFieldSchema = z
  .string()
  .openapi({
    description: "Thumbnail image url for this podcast's artwork (300x300).",
    examples: [
      'https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg',
    ],
  })
  .openapi('ThumbnailField')

const PodcastNameFieldSchema = z
  .string()
  .openapi({
    description: 'Podcast name.',
    examples: ['Star Wars 7x7 | Star Wars News, Interviews, and More!'],
  })
  .openapi('PodcastNameField')

const TotalEpisodesFieldSchema = z
  .int()
  .openapi({ description: 'Total number of episodes in this podcast.', examples: [324] })
  .openapi('TotalEpisodesField')

const PodcastTypeFieldSchema = z
  .enum(['episodic', 'serial'])
  .openapi({
    description: 'The type of this podcast - episodic or serial.',
    examples: ['episodic'],
  })
  .openapi('PodcastTypeField')

const UpdateFrequencyHoursFieldSchema = z
  .int()
  .openapi({
    description:
      "How frequently does this podcast release a new episode? In hours. For example, if the value is 166, then it's every 166 hours (or weekly).",
    examples: [168],
  })
  .openapi('UpdateFrequencyHoursField')

const WebsiteFieldSchema = z
  .string()
  .openapi({ description: 'Website url of this podcast.', examples: ['http://sw7x7.com/'] })
  .openapi('WebsiteField')

const PodcastSimpleSchema = z
  .object({
    audio_length_sec: AvgAudioLengthSecFieldSchema.exactOptional(),
    country: CountryFieldSchema.exactOptional(),
    description: PodcastDescriptionFieldSchema.exactOptional(),
    earliest_pub_date_ms: EarliestPubDateMsFieldSchema.exactOptional(),
    email: EmailFieldSchema.exactOptional(),
    explicit_content: ExplicitFieldSchema.exactOptional(),
    extra: PodcastExtraFieldSchema.exactOptional(),
    genre_ids: GenreIdsFieldSchema.exactOptional(),
    id: PodcastIdFieldSchema.exactOptional(),
    image: ImageFieldSchema.exactOptional(),
    is_claimed: IsClaimedFieldSchema.exactOptional(),
    itunes_id: ITunesIdFieldSchema.exactOptional(),
    language: LanguageFieldSchema.exactOptional(),
    latest_episode_id: LatestEpisodeIdFieldSchema.exactOptional(),
    latest_pub_date_ms: LatestPubDateMsFieldSchema.exactOptional(),
    listen_score: ListenScoreFieldSchema.exactOptional(),
    listen_score_global_rank: ListenScoreGlobalRankFieldSchema.exactOptional(),
    listennotes_url: PodcastLNUrlFieldSchema.exactOptional(),
    looking_for: PodcastLookingForFieldSchema.exactOptional(),
    publisher: PublisherFieldSchema.exactOptional(),
    rss: RssFieldSchema.exactOptional(),
    thumbnail: ThumbnailFieldSchema.exactOptional(),
    title: PodcastNameFieldSchema.exactOptional(),
    total_episodes: TotalEpisodesFieldSchema.exactOptional(),
    type: PodcastTypeFieldSchema.exactOptional(),
    update_frequency_hours: UpdateFrequencyHoursFieldSchema.exactOptional(),
    website: WebsiteFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PodcastSimple')

const BestPodcastsResponseSchema = z
  .object({
    has_next: z.boolean().openapi({ examples: [true] }),
    has_previous: z.boolean(),
    id: z.int().openapi({ description: 'The id of this genre', examples: [95] }),
    listennotes_url: BestPodcastsLNUrlFieldSchema,
    name: z.string().openapi({ description: "This genre's name.", examples: ['Business News'] }),
    next_page_number: z.int().openapi({ examples: [3] }),
    page_number: z.int().openapi({ examples: [2] }),
    parent_id: z.int().openapi({ description: 'The id of parent genre.', examples: [93] }),
    podcasts: z.array(PodcastSimpleSchema),
    previous_page_number: z.int().openapi({ examples: [1] }),
    total: z.int().openapi({ examples: [325] }),
  })
  .openapi({
    required: [
      'has_next',
      'has_previous',
      'id',
      'listennotes_url',
      'name',
      'next_page_number',
      'page_number',
      'parent_id',
      'podcasts',
      'previous_page_number',
      'total',
    ],
  })
  .openapi('BestPodcastsResponse')

const CuratedDescriptionFieldSchema = z
  .string()
  .openapi({
    description: "This curated list's description.",
    examples: [
      'Commuting to work is always better when you have a great new podcast to listen to, and this year, we have discovered some of our favorite podcasts yet for readers and book-lovers. These podcasts for readers entertain us and provide no shortage of new book recommendations too.',
    ],
  })
  .openapi('CuratedDescriptionField')

const CuratedIdFieldSchema = z
  .string()
  .openapi({
    description:
      'Curated list id, which can be used to further fetch detailed curated list metadata via `GET /curated_podcasts/{id}`.',
    examples: ['Vb017Sx3l8F'],
  })
  .openapi('CuratedIdField')

const CuratedLNUrlFieldSchema = z
  .string()
  .openapi({
    description: 'The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).',
    examples: [
      'https://www.listennotes.com/curated-podcasts/7-bookish-podcasts-for-avid-readers-on-H2r-TCWai8K/',
    ],
  })
  .openapi('CuratedLNUrlField')

const CuratedPubDateMsFieldSchema = z
  .int()
  .openapi({
    description: 'Published date of this curated list. In milliseconds.',
    examples: [1556843484301],
  })
  .openapi('CuratedPubDateMsField')

const CuratedSourceDomainFieldSchema = z
  .string()
  .openapi({
    description: 'The domain name of the source of this curated list.',
    examples: ['parade.com'],
  })
  .openapi('CuratedSourceDomainField')

const CuratedSourceUrlFieldSchema = z
  .string()
  .openapi({
    description: 'Url of the source of this curated list.',
    examples: [
      'https://parade.com/718913/ashley_johnson/7-bookish-podcasts-for-avid-readers-on-the-go/',
    ],
  })
  .openapi('CuratedSourceUrlField')

const CuratedNameFieldSchema = z
  .string()
  .openapi({
    description: 'Curated list name.',
    examples: ['7 Bookish Podcasts for Avid Readers On the Go'],
  })
  .openapi('CuratedNameField')

const CuratedTotalPodcastsFieldSchema = z
  .int()
  .openapi({ description: 'The total number of podcasts in this curated list.', examples: [25] })
  .openapi('CuratedTotalPodcastsField')

const CuratedListFullSchema = z
  .object({
    description: CuratedDescriptionFieldSchema.exactOptional(),
    id: CuratedIdFieldSchema.exactOptional(),
    listennotes_url: CuratedLNUrlFieldSchema.exactOptional(),
    podcasts: z
      .array(PodcastSimpleSchema)
      .exactOptional()
      .openapi({ description: 'Complete meta data of all podcasts in this curated list.' }),
    pub_date_ms: CuratedPubDateMsFieldSchema.exactOptional(),
    source_domain: CuratedSourceDomainFieldSchema.exactOptional(),
    source_url: CuratedSourceUrlFieldSchema.exactOptional(),
    title: CuratedNameFieldSchema.exactOptional(),
    total: CuratedTotalPodcastsFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CuratedListFull')

const PodcastMinimumSchema = z
  .object({
    id: PodcastIdFieldSchema.exactOptional(),
    image: ImageFieldSchema.exactOptional(),
    listen_score: ListenScoreFieldSchema.exactOptional(),
    listen_score_global_rank: ListenScoreGlobalRankFieldSchema.exactOptional(),
    listennotes_url: PodcastLNUrlFieldSchema.exactOptional(),
    publisher: PublisherFieldSchema.exactOptional(),
    thumbnail: ThumbnailFieldSchema.exactOptional(),
    title: PodcastNameFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PodcastMinimum')

const CuratedListSearchResultSchema = z
  .object({
    description_highlighted: z
      .string()
      .exactOptional()
      .openapi({
        description: "Highlighted segment of this curated list's description",
        examples: [
          '...<span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> fans in Reddit shared their favorite podcasts.',
        ],
      }),
    description_original: z
      .string()
      .exactOptional()
      .openapi({
        description: "Plain text of this curated list's description",
        examples: ['Star Wars fans in Reddit shared their favorite podcasts.'],
      }),
    id: CuratedIdFieldSchema.exactOptional(),
    listennotes_url: CuratedLNUrlFieldSchema.exactOptional(),
    podcasts: z
      .array(PodcastMinimumSchema)
      .exactOptional()
      .openapi({ description: 'Up to 5 podcasts in this curated list.' }),
    pub_date_ms: CuratedPubDateMsFieldSchema.exactOptional(),
    source_domain: CuratedSourceDomainFieldSchema.exactOptional(),
    source_url: CuratedSourceUrlFieldSchema.exactOptional(),
    title_highlighted: z
      .string()
      .exactOptional()
      .openapi({
        description: "Highlighted segment of this curated list's title",
        examples: [
          'What are some good <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> Podcast to listen to?\n',
        ],
      }),
    title_original: z
      .string()
      .exactOptional()
      .openapi({
        description: "Plain text of this curated list's title",
        examples: ['What are some good Star Wars Podcast to listen to?'],
      }),
    total: CuratedTotalPodcastsFieldSchema.exactOptional(),
  })
  .openapi({ description: 'When **type** is *curated*.', required: [] })
  .openapi('CuratedListSearchResult')

const CuratedListSimpleSchema = z
  .object({
    description: CuratedDescriptionFieldSchema.exactOptional(),
    id: CuratedIdFieldSchema.exactOptional(),
    listennotes_url: CuratedLNUrlFieldSchema.exactOptional(),
    podcasts: z
      .array(PodcastMinimumSchema)
      .exactOptional()
      .openapi({ description: 'Minimum meta data of up to 5 podcasts in this curated list.' }),
    pub_date_ms: CuratedPubDateMsFieldSchema.exactOptional(),
    source_domain: CuratedSourceDomainFieldSchema.exactOptional(),
    source_url: CuratedSourceUrlFieldSchema.exactOptional(),
    title: CuratedNameFieldSchema.exactOptional(),
    total: CuratedTotalPodcastsFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CuratedListSimple')

const CustomAudioSchema = z
  .object({
    audio: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Audio url, which can be played directly.',
        examples: ['https://example.com/audio.mp3'],
      }),
    audio_length_sec: z
      .int()
      .exactOptional()
      .openapi({ description: 'Audio length in seconds.', examples: [253] }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description: 'High resolution image url of this custom audio.',
        examples: [
          'https://cdn-images-1.listennotes.com/playlist/image/6907e8ff6b6c45df94cc059753f369cc.JPEG',
        ],
      }),
    pub_date_ms: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "Published date (in milliseconds) of this custom audio.\nFor now, it's the same as **added_at_ms** of this playlist item.\n",
        examples: [1595567028133],
      }),
    thumbnail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Low resolution image url of this custom audio.',
        examples: [
          'https://d3sv2eduhewoas.cloudfront.net/playlist/image/48477deae02649d7ab9d3f1b3966af38.JPEG',
        ],
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom audio title.', examples: ['An awesome audio to listen.'] }),
  })
  .openapi({
    description: 'A custom audio in a playlist, which is a type of playlist item.',
    required: [],
  })
  .openapi('CustomAudio')

const DeletePodcastResponseSchema = z
  .object({
    status: z
      .enum(['deleted', 'in review'])
      .openapi({
        description: 'The status of this podcast deletion request.',
        examples: ['deleted'],
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('DeletePodcastResponse')

const DeletedItemSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Why this episode or podcast is deleted?',
        examples: ['This episode is deleted from the podcast database, because...'],
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Episode id or podcast id.',
        examples: ['96fc400171364e32897b25d84a8ed8ec'],
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of this episode or podcast. For now, the only possible value is **deleted**.',
        examples: ['deleted'],
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Episode title or podcast title.',
        examples: ['This is a test episode'],
      }),
  })
  .openapi({
    description:
      'A deleted episode or podcast.\nAn episode or a podcast could be deleted from our podcast database.\nPossible reasons: 1) Podcast producers sometimes delete their old episodes. 2) Copyright issues.\n',
    required: [],
  })
  .openapi('DeletedItem')

const EpisodeDescriptionFieldSchema = z
  .string()
  .openapi({
    description: "Html of this episode's full description",
    examples: [
      "<p>Disney chief Bob Iger shared news about Star Wars movies in 2020 and beyond, but some media outlets gave conflicting reports about it. Here's the real scoop. Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>\n",
    ],
  })
  .openapi('EpisodeDescriptionField')

const EpisodeIdFieldSchema = z
  .string()
  .openapi({
    description:
      'Episode id, which can be used to further fetch detailed episode metadata via `GET /episodes/{id}`.',
    examples: ['4d82e50314174754a3b603912448e812'],
  })
  .openapi('EpisodeIdField')

const EpisodeImageFieldSchema = z
  .string()
  .openapi({
    description:
      "Image url for this episode.\nIf an episode doesn't have its own image, then this field would be the url of the podcast artwork image.\nIf you are using PRO/ENTERPRISE plan, then it's\na high resolution image (1400x1400). If you are using FREE plan, then it's the same as **thumbnail**,\nlow resolution image (300x300).\n",
    examples: [
      'https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.1400x1400.jpg',
    ],
  })
  .openapi('EpisodeImageField')

const LinkFieldSchema = z
  .string()
  .openapi({
    description: 'Web link of this episode.',
    examples: ['https://www.npr.org/2020/01/22/798532179/soleimanis-iran'],
  })
  .openapi('LinkField')

const EpisodeLNEditUrlFieldSchema = z
  .string()
  .openapi({
    description:
      'Edit url of this episode where you can update the audio url if you find the audio is broken.',
    examples: ['https://www.listennotes.com/e/11b34041e804491b9704d11f283c74de/#edit'],
  })
  .openapi('EpisodeLNEditUrlField')

const EpisodeLNUrlFieldSchema = z
  .string()
  .openapi({
    description: 'The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).',
    examples: ['https://www.listennotes.com/e/4d82e50314174754a3b603912448e812/'],
  })
  .openapi('EpisodeLNUrlField')

const MaybeAudioInvalidFieldSchema = z
  .boolean()
  .openapi({
    description:
      "Whether or not this episode's audio is invalid. Podcasters may delete the original audio.",
    examples: [false],
  })
  .openapi('MaybeAudioInvalidField')

const EpisodePubDateMsFieldSchema = z
  .int()
  .openapi({
    description: 'Published date for this episode. In millisecond.',
    examples: [1474873200000],
  })
  .openapi('EpisodePubDateMsField')

const EpisodeThumbnailFieldSchema = z
  .string()
  .openapi({
    description:
      "Thumbnail image (300x300) url for this episode.\nIf an episode doesn't have its own image, then this field would be the url of the podcast artwork thumbnail image.\n",
    examples: [
      'https://cdn-images-1.listennotes.com/podcasts/exponent-ben-thompson-james-allworth-OaJSjb4xQv3.300x300.jpg',
    ],
  })
  .openapi('EpisodeThumbnailField')

const EpisodeNameFieldSchema = z
  .string()
  .openapi({
    description: 'Episode name.',
    examples: ['Celebration Recap, Jason Fry and Christian Blauvelt Interviews – SWBW #101'],
  })
  .openapi('EpisodeNameField')

const TranscriptFieldSchema = z
  .string()
  .openapi({
    description:
      "The transcript of this episode, in plain text (with the newline character \\n). If there's not transcript, it is null. This field is available only in the PRO/ENTERPRISE plan.",
    examples: ['00:00:07 Welcome to this podcast...\n'],
  })
  .openapi('TranscriptField')

const EpisodeFullSchema = z
  .object({
    audio: AudioFieldSchema.exactOptional(),
    audio_length_sec: AudioLengthSecFieldSchema.exactOptional(),
    description: EpisodeDescriptionFieldSchema.exactOptional(),
    explicit_content: ExplicitFieldSchema.exactOptional(),
    id: EpisodeIdFieldSchema.exactOptional(),
    image: EpisodeImageFieldSchema.exactOptional(),
    link: LinkFieldSchema.exactOptional(),
    listennotes_edit_url: EpisodeLNEditUrlFieldSchema.exactOptional(),
    listennotes_url: EpisodeLNUrlFieldSchema.exactOptional(),
    maybe_audio_invalid: MaybeAudioInvalidFieldSchema.exactOptional(),
    podcast: PodcastSimpleSchema.exactOptional(),
    pub_date_ms: EpisodePubDateMsFieldSchema.exactOptional(),
    thumbnail: EpisodeThumbnailFieldSchema.exactOptional(),
    title: EpisodeNameFieldSchema.exactOptional(),
    transcript: TranscriptFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EpisodeFull')

const EpisodeMinimumSchema = z
  .object({
    audio: AudioFieldSchema.exactOptional(),
    audio_length_sec: AudioLengthSecFieldSchema.exactOptional(),
    description: EpisodeDescriptionFieldSchema.exactOptional(),
    explicit_content: ExplicitFieldSchema.exactOptional(),
    id: EpisodeIdFieldSchema.exactOptional(),
    image: ImageFieldSchema.exactOptional(),
    link: LinkFieldSchema.exactOptional(),
    listennotes_edit_url: EpisodeLNEditUrlFieldSchema.exactOptional(),
    listennotes_url: EpisodeLNUrlFieldSchema.exactOptional(),
    maybe_audio_invalid: MaybeAudioInvalidFieldSchema.exactOptional(),
    pub_date_ms: EpisodePubDateMsFieldSchema.exactOptional(),
    thumbnail: ThumbnailFieldSchema.exactOptional(),
    title: EpisodeNameFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EpisodeMinimum')

const PublisherHighlightedFieldSchema = z
  .string()
  .openapi({
    description: "Highlighted segment of this podcast's publisher name.",
    examples: [
      '<span class=\\"ln-search-highlight\\">Star</span> <span class=\\"ln-search-highlight\\">Wars</span> Daily, by Allen Voivod',
    ],
  })
  .openapi('PublisherHighlightedField')

const PublisherOriginalFieldSchema = z
  .string()
  .openapi({
    description: "Plain text of this podcast's publisher name.",
    examples: ['Star Wars Daily, by Allen Voivod'],
  })
  .openapi('PublisherOriginalField')

const PodcastTitleHighlightedFieldSchema = z
  .string()
  .openapi({
    description: 'Highlighted segment of podcast name.',
    examples: [
      '<span class=\\"ln-search-highlight\\">Star</span> <span class=\\"ln-search-highlight\\">Wars</span> 7x7 | <span class=\\"ln-search-highlight\\">Star</span> <span class=\\"ln-search-highlight\\">Wars</span> News, Interviews, and More!',
    ],
  })
  .openapi('PodcastTitleHighlightedField')

const PodcastTitleOriginalFieldSchema = z
  .string()
  .openapi({
    description: 'Plain text of podcast name.',
    examples: ['Star Wars 7x7 | Star Wars News, Interviews, and More!'],
  })
  .openapi('PodcastTitleOriginalField')

const EpisodeSearchResultSchema = z
  .object({
    audio: AudioFieldSchema.exactOptional(),
    audio_length_sec: AudioLengthSecFieldSchema.exactOptional(),
    description_highlighted: z
      .string()
      .exactOptional()
      .openapi({
        description: "Highlighted segment of this episode's description",
        examples: [
          '...Go to http://Patreon.com/sw7x7 to donate to the <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> 7x7 podcast, and you\'ll get some fabulous rewards for your pledge.***  Check out SW7x7.com for full <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> 7x7 show notes and links, and to\n',
        ],
      }),
    description_original: z
      .string()
      .exactOptional()
      .openapi({
        description: "Plain text of this episode's description",
        examples: [
          "Yeah, Star Wars Celebration Orlando is 32 days away, but what's the scoop on Celebration 2018? Plus, Rebels Day is Saturday, and much more in our update. Punch it! ***We're listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and youâ€™ll get some fabulous rewards for your pledge.***  Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast. Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!\n",
        ],
      }),
    explicit_content: ExplicitFieldSchema.exactOptional(),
    id: EpisodeIdFieldSchema.exactOptional(),
    image: EpisodeImageFieldSchema.exactOptional(),
    itunes_id: ITunesIdFieldSchema.exactOptional(),
    link: LinkFieldSchema.exactOptional(),
    listennotes_url: EpisodeLNUrlFieldSchema.exactOptional(),
    podcast: z
      .object({
        genre_ids: GenreIdsFieldSchema.exactOptional(),
        id: PodcastIdFieldSchema.exactOptional(),
        image: ImageFieldSchema.exactOptional(),
        listen_score: ListenScoreFieldSchema.exactOptional(),
        listen_score_global_rank: ListenScoreGlobalRankFieldSchema.exactOptional(),
        listennotes_url: PodcastLNUrlFieldSchema.exactOptional(),
        publisher_highlighted: PublisherHighlightedFieldSchema.exactOptional(),
        publisher_original: PublisherOriginalFieldSchema.exactOptional(),
        thumbnail: ThumbnailFieldSchema.exactOptional(),
        title_highlighted: PodcastTitleHighlightedFieldSchema.exactOptional(),
        title_original: PodcastTitleOriginalFieldSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'The podcast that this episode belongs to.', required: [] }),
    pub_date_ms: EpisodePubDateMsFieldSchema.exactOptional(),
    rss: RssFieldSchema.exactOptional(),
    thumbnail: EpisodeThumbnailFieldSchema.exactOptional(),
    title_highlighted: z
      .string()
      .exactOptional()
      .openapi({
        description: "Highlighted segment of this episode's title",
        examples: [
          '815: <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> 2020 Movie and Beyond!',
        ],
      }),
    title_original: z
      .string()
      .exactOptional()
      .openapi({
        description: "Plain text of this episode' title",
        examples: ['815: Star Wars 2020 Movie and Beyond!'],
      }),
    transcripts_highlighted: z
      .array(
        z
          .string()
          .openapi({
            examples: [
              '00:21:27  when Disney bought the <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> franchise from George Lucas they had a plan lots of <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> movies new <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> movies every month another one was just released while I was talking\n',
            ],
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Up to 2 highlighted segments of the audio transcript of this episode.',
      }),
  })
  .openapi({ description: 'When **type** is *episode*.', required: [] })
  .openapi('EpisodeSearchResult')

const EpisodeSimpleSchema = z
  .object({
    audio: AudioFieldSchema.exactOptional(),
    audio_length_sec: AudioLengthSecFieldSchema.exactOptional(),
    description: EpisodeDescriptionFieldSchema.exactOptional(),
    explicit_content: ExplicitFieldSchema.exactOptional(),
    id: EpisodeIdFieldSchema.exactOptional(),
    image: EpisodeImageFieldSchema.exactOptional(),
    link: LinkFieldSchema.exactOptional(),
    listennotes_edit_url: EpisodeLNEditUrlFieldSchema.exactOptional(),
    listennotes_url: EpisodeLNUrlFieldSchema.exactOptional(),
    maybe_audio_invalid: MaybeAudioInvalidFieldSchema.exactOptional(),
    podcast: PodcastMinimumSchema.exactOptional(),
    pub_date_ms: EpisodePubDateMsFieldSchema.exactOptional(),
    thumbnail: EpisodeThumbnailFieldSchema.exactOptional(),
    title: EpisodeNameFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EpisodeSimple')

const GenreSchema = z
  .object({
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Genre id', examples: [93] }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Genre name.', examples: ['Business'] }),
    parent_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Parent genre id.', examples: [95] }),
  })
  .openapi({ examples: [{ id: 140, name: 'Web Design', parent_id: 127 }], required: [] })
  .openapi('Genre')

const GetCuratedPodcastsResponseSchema = z
  .object({
    curated_lists: z.array(CuratedListSimpleSchema),
    has_next: z.boolean().openapi({ examples: [true] }),
    has_previous: z.boolean().openapi({ examples: [true] }),
    next_page_number: z.int().openapi({ examples: [3] }),
    page_number: z.int().openapi({ examples: [2] }),
    previous_page_number: z.int().openapi({ examples: [1] }),
    total: z.int().openapi({ examples: [25] }),
  })
  .openapi({
    required: [
      'curated_lists',
      'has_next',
      'has_previous',
      'next_page_number',
      'page_number',
      'previous_page_number',
      'total',
    ],
  })
  .openapi('GetCuratedPodcastsResponse')

const GetEpisodeRecommendationsResponseSchema = z
  .object({ recommendations: z.array(EpisodeSimpleSchema) })
  .openapi({ required: ['recommendations'] })
  .openapi('GetEpisodeRecommendationsResponse')

const GetEpisodesInBatchFormSchema = z
  .object({
    ids: z
      .string()
      .openapi({
        description: 'Comma-separated list of episode ids.',
        examples: ['c577d55b2b2b483c969fae3ceb58e362,0f34a9099579490993eec9e8c8cebb82'],
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('GetEpisodesInBatchForm')

const GetEpisodesInBatchResponseSchema = z
  .object({ episodes: z.array(EpisodeSimpleSchema) })
  .openapi({ required: ['episodes'] })
  .openapi('GetEpisodesInBatchResponse')

const GetGenresResponseSchema = z
  .object({ genres: z.array(GenreSchema) })
  .openapi({ required: ['genres'] })
  .openapi('GetGenresResponse')

const GetLanguagesResponseSchema = z
  .object({
    languages: z
      .array(z.string())
      .openapi({
        examples: [
          [
            'Any language',
            'Afar',
            'Abkhazian',
            'Afrikaans',
            'Akan',
            'Albanian',
            'Arabic',
            'Azerbaijani',
            'Bambara',
            'Bashkir',
            'Basque',
            'Belarusian',
            'Bulgarian',
            'Catalan',
            'Chamorro',
            'Chinese',
            'Croatian',
            'Czech',
            'Danish',
            'Dutch',
            'English',
            'Estonian',
            'Faeroese',
            'Finnish',
            'French',
            'Gaelic',
            'Galician',
            'German',
            'Greek',
          ],
        ],
      }),
  })
  .openapi({ required: ['languages'] })
  .openapi('GetLanguagesResponse')

const GetPodcastRecommendationsResponseSchema = z
  .object({ recommendations: z.array(PodcastSimpleSchema) })
  .openapi({ required: ['recommendations'] })
  .openapi('GetPodcastRecommendationsResponse')

const GetPodcastsInBatchFormSchema = z
  .object({
    ids: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of podcast ids.',
        examples: [
          '3302bc71139541baa46ecb27dbf6071a,68faf62be97149c280ebcc25178aa731,37589a3e121e40debe4cef3d9638932a,9cf19c590ff0484d97b18b329fed0c6a',
        ],
      }),
    itunes_ids: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated Apple Podcasts (iTunes) ids, e.g., 659155419',
        examples: ['1457514703,1386234384,659155419'],
      }),
    next_episode_pub_date: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "For latest episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 15 episodes.\n",
        examples: [1557394247000],
      }),
    rsses: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated rss urls.',
        examples: [
          'https://rss.art19.com/recode-decode,https://rss.art19.com/the-daily,https://www.npr.org/rss/podcast.php?id=510331,https://www.npr.org/rss/podcast.php?id=510331',
        ],
      }),
    show_latest_episodes: z
      .union([z.literal(0), z.literal(1)])
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Whether or not to fetch up to 15 latest episodes from these podcasts, sorted by pub_date. 1 is yes, and 0 is no.\n',
        examples: [1],
      }),
    spotify_ids: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated Spotify ids, e.g., 3DDfEsKDIDrTlnPOiG4ZF4',
        examples: ['3DDfEsKDIDrTlnPOiG4ZF4,4qDNe5Gvl1XxdLinUGEXrC,23NZCM4ik6o3UYkM473Itz'],
      }),
  })
  .openapi({ required: [] })
  .openapi('GetPodcastsInBatchForm')

const GetPodcastsInBatchResponseSchema = z
  .object({
    latest_episodes: z
      .array(EpisodeSimpleSchema)
      .exactOptional()
      .openapi({
        description:
          'Up to 10 latest episodes from these podcasts, sorted by **pub_date**. This field shows up only when **show_latest_episodes** is 1.\n',
      }),
    podcasts: z.array(PodcastSimpleSchema),
  })
  .openapi({ required: ['podcasts'] })
  .openapi('GetPodcastsInBatchResponse')

const GetRegionsResponseSchema = z
  .object({
    regions: z
      .object({})
      .openapi({
        examples: [{ au: 'Australia', de: 'Germany', ua: 'Ukraine', us: 'United States' }],
      }),
  })
  .openapi({ required: ['regions'] })
  .openapi('GetRegionsResponse')

const NextEpisodePubDateFieldSchema = z
  .int()
  .openapi({
    description:
      'Passed to the **next_episode_pub_date** parameter of `GET /podcasts/{id}` to paginate through episodes of that podcast.',
    examples: [1470667902000],
  })
  .openapi('NextEpisodePubDateField')

const PlaylistDescriptionFieldSchema = z
  .string()
  .openapi({
    description: 'Playlist description.',
    examples: ['A curated playlist of podcasts about podcasting.'],
  })
  .openapi('PlaylistDescriptionField')

const PlaylistIdFieldSchema = z
  .string()
  .openapi({
    description:
      'A 11-character playlist id, which can be used to further fetch detailed playlist metadata via `GET /playlists/{id}`.',
    examples: ['m1pe7z60bsw'],
  })
  .openapi('PlaylistIdField')

const PlaylistImageFieldSchema = z
  .string()
  .openapi({
    description: 'High resolution image url of the playlist.',
    examples: [
      'https://cdn-images-1.listennotes.com/playlist/image/6907e8ff6b6c45df94cc059753f369cc.JPEG',
    ],
  })
  .openapi('PlaylistImageField')

const PlaylistItemSchema = z
  .object({
    added_at_ms: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Timestamp (in milliseconds) when this item is added.',
        examples: [1595567004958],
      }),
    data: z
      .xor([EpisodeSimpleSchema, PodcastSimpleSchema, CustomAudioSchema, DeletedItemSchema])
      .exactOptional(),
    id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Playlist item id.', examples: [23] }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Notes for this item.', examples: ['This is a good episode.'] }),
    type: z
      .enum(['episode', 'custom_audio', 'podcast'])
      .exactOptional()
      .openapi({
        description:
          "The type of this playlist item.\nIf a playlist is **episode_list**, then an item could be either **episode** or **custom_audio**.\nIf it's **podcast_list**, then an item can only be **podcast**.\n",
        examples: ['episode'],
      }),
  })
  .openapi({ description: 'An item in a playlist', required: [] })
  .openapi('PlaylistItem')

const PlaylistLastTimestampMsFieldSchema = z
  .int()
  .openapi({
    description:
      'Passed to the **last_timestamp_ms** parameter of `GET /playlists/{id}` to paginate through items of that playlist.\n',
    examples: [1595641092907],
  })
  .openapi('PlaylistLastTimestampMsField')

const PlaylistListennotesUrlFieldSchema = z
  .string()
  .openapi({
    description: 'The url of this playlist on ListenNotes.com.',
    examples: [
      'https://www.listennotes.com/listen/podcasts-about-podcasting-m1pe7z60bsw/?display=episode',
    ],
  })
  .openapi('PlaylistListennotesUrlField')

const PlaylistNameFieldSchema = z
  .string()
  .openapi({ description: 'Playlist name.', examples: ['My podcast playlist'] })
  .openapi('PlaylistNameField')

const PlaylistThumbnailFieldSchema = z
  .string()
  .openapi({
    description: 'Low resolution image url of the playlist.',
    examples: [
      'https://d3sv2eduhewoas.cloudfront.net/playlist/image/48477deae02649d7ab9d3f1b3966af38.JPEG',
    ],
  })
  .openapi('PlaylistThumbnailField')

const PlaylistVisibilityFieldSchema = z
  .enum(['public', 'unlisted', 'private'])
  .openapi({ description: 'Visibility of this playlist.', examples: ['public'] })
  .openapi('PlaylistVisibilityField')

const PlaylistResponseSchema = z
  .object({
    description: PlaylistDescriptionFieldSchema.exactOptional(),
    id: PlaylistIdFieldSchema.exactOptional(),
    image: PlaylistImageFieldSchema.exactOptional(),
    items: z
      .array(PlaylistItemSchema)
      .exactOptional()
      .openapi({ description: 'A list of playlist items.' }),
    last_timestamp_ms: PlaylistLastTimestampMsFieldSchema.exactOptional(),
    listennotes_url: PlaylistListennotesUrlFieldSchema.exactOptional(),
    name: PlaylistNameFieldSchema.exactOptional(),
    thumbnail: PlaylistThumbnailFieldSchema.exactOptional(),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of items in this playlist.', examples: [325] }),
    total_audio_length_sec: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Total audio length of all episodes in this playlist, in seconds. It will have a valid value only when type is **episode_list**. In other words, it will be 0 if type is **podcast_list**.',
        examples: [234567],
      }),
    type: z
      .enum(['episode_list', 'podcast_list'])
      .exactOptional()
      .openapi({
        description:
          'The type of this playlist, which should be either **episode_list** or **podcast_list**.\n',
        examples: ['episode_list'],
      }),
    visibility: PlaylistVisibilityFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlaylistResponse')

const PlaylistsResponseSchema = z
  .object({
    has_next: z
      .boolean()
      .exactOptional()
      .openapi({ examples: [true] }),
    has_previous: z
      .boolean()
      .exactOptional()
      .openapi({ examples: [true] }),
    next_page_number: z
      .int()
      .exactOptional()
      .openapi({ examples: [3] }),
    page_number: z
      .int()
      .exactOptional()
      .openapi({ examples: [2] }),
    playlists: z
      .array(
        z
          .object({
            description: PlaylistDescriptionFieldSchema.exactOptional(),
            episode_count: z
              .int()
              .exactOptional()
              .openapi({
                description: 'The number of episodes (including custom audio) in this playlist.',
                examples: [23],
              }),
            id: PlaylistIdFieldSchema.exactOptional(),
            image: PlaylistImageFieldSchema.exactOptional(),
            last_timestamp_ms: PlaylistLastTimestampMsFieldSchema.exactOptional(),
            listennotes_url: PlaylistListennotesUrlFieldSchema.exactOptional(),
            name: PlaylistNameFieldSchema.exactOptional(),
            podcast_count: z
              .int()
              .exactOptional()
              .openapi({ description: 'The number of podcasts in this playlist.', examples: [10] }),
            thumbnail: PlaylistThumbnailFieldSchema.exactOptional(),
            total_audio_length_sec: z
              .int()
              .exactOptional()
              .openapi({
                description: 'Total audio length of all episodes in this playlist, in seconds.',
                examples: [234567],
              }),
            visibility: PlaylistVisibilityFieldSchema.exactOptional(),
          })
          .openapi({ description: 'A playlist', required: [] }),
      )
      .exactOptional(),
    previous_page_number: z
      .int()
      .exactOptional()
      .openapi({ examples: [1] }),
    total: z
      .int()
      .exactOptional()
      .openapi({ examples: [325] }),
  })
  .openapi({ required: [] })
  .openapi('PlaylistsResponse')

const PodcastAudienceResponseSchema = z
  .object({
    by_regions: z
      .array(
        z
          .object({
            ratio: z
              .string()
              .exactOptional()
              .openapi({
                description: 'percentage of audience from this specific region',
                examples: ['20.22%'],
              }),
            region: z
              .string()
              .exactOptional()
              .openapi({ description: '2-letter country code of a region.', examples: ['us'] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PodcastAudienceResponse')

const PodcastFullSchema = z
  .object({
    audio_length_sec: AvgAudioLengthSecFieldSchema.exactOptional(),
    country: CountryFieldSchema.exactOptional(),
    description: PodcastDescriptionFieldSchema.exactOptional(),
    earliest_pub_date_ms: EarliestPubDateMsFieldSchema.exactOptional(),
    email: EmailFieldSchema.exactOptional(),
    episodes: z.array(EpisodeMinimumSchema).exactOptional(),
    explicit_content: ExplicitFieldSchema.exactOptional(),
    extra: PodcastExtraFieldSchema.exactOptional(),
    genre_ids: GenreIdsFieldSchema.exactOptional(),
    id: PodcastIdFieldSchema.exactOptional(),
    image: ImageFieldSchema.exactOptional(),
    is_claimed: IsClaimedFieldSchema.exactOptional(),
    itunes_id: ITunesIdFieldSchema.exactOptional(),
    language: LanguageFieldSchema.exactOptional(),
    latest_episode_id: LatestEpisodeIdFieldSchema.exactOptional(),
    latest_pub_date_ms: LatestPubDateMsFieldSchema.exactOptional(),
    listen_score: ListenScoreFieldSchema.exactOptional(),
    listen_score_global_rank: ListenScoreGlobalRankFieldSchema.exactOptional(),
    listennotes_url: PodcastLNUrlFieldSchema.exactOptional(),
    looking_for: PodcastLookingForFieldSchema.exactOptional(),
    next_episode_pub_date: NextEpisodePubDateFieldSchema.exactOptional(),
    publisher: PublisherFieldSchema.exactOptional(),
    rss: RssFieldSchema.exactOptional(),
    thumbnail: ThumbnailFieldSchema.exactOptional(),
    title: PodcastNameFieldSchema.exactOptional(),
    total_episodes: TotalEpisodesFieldSchema.exactOptional(),
    type: PodcastTypeFieldSchema.exactOptional(),
    update_frequency_hours: UpdateFrequencyHoursFieldSchema.exactOptional(),
    website: WebsiteFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PodcastFull')

const PodcastMinimumRssSchema = z
  .object({
    id: PodcastIdFieldSchema.exactOptional(),
    image: ImageFieldSchema.exactOptional(),
    listennotes_url: PodcastLNUrlFieldSchema.exactOptional(),
    publisher: PublisherFieldSchema.exactOptional(),
    rss: RssFieldSchema.exactOptional(),
    thumbnail: ThumbnailFieldSchema.exactOptional(),
    title: PodcastNameFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PodcastMinimumRss')

const PodcastSearchResultSchema = z
  .object({
    audio_length_sec: AvgAudioLengthSecFieldSchema.exactOptional(),
    description_highlighted: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Highlighted segment of podcast description',
        examples: [
          '...Join host Allen Voivod for <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> news, history, interviews, trivia, and deep dives into the <span class="ln-search-highlight">Star</span> <span class="ln-search-highlight">Wars</span> story as told in movies, books, comics, games, cartoons, and more.\n',
        ],
      }),
    description_original: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Plain text of podcast description',
        examples: [
          "The Star Wars 7x7 Podcast is Rebel-rousing fun for everyday Jedi, between 7 and 14 minutes a day, 7 days a week. Join host Allen Voivod for Star Wars news, history, interviews, trivia, and deep dives into the Star Wars story as told in movies, books, comics, games, cartoons, and more. Subscribe now for your daily dose of Star Wars joy. It's destiny unleashed! #SW7x7\n",
        ],
      }),
    earliest_pub_date_ms: EarliestPubDateMsFieldSchema.exactOptional(),
    email: EmailFieldSchema.exactOptional(),
    explicit_content: ExplicitFieldSchema.exactOptional(),
    genre_ids: GenreIdsFieldSchema.exactOptional(),
    id: PodcastIdFieldSchema.exactOptional(),
    image: ImageFieldSchema.exactOptional(),
    itunes_id: ITunesIdFieldSchema.exactOptional(),
    latest_episode_id: LatestEpisodeIdFieldSchema.exactOptional(),
    latest_pub_date_ms: LatestPubDateMsFieldSchema.exactOptional(),
    listen_score: ListenScoreFieldSchema.exactOptional(),
    listen_score_global_rank: ListenScoreGlobalRankFieldSchema.exactOptional(),
    listennotes_url: PodcastLNUrlFieldSchema.exactOptional(),
    publisher_highlighted: PublisherHighlightedFieldSchema.exactOptional(),
    publisher_original: PublisherOriginalFieldSchema.exactOptional(),
    rss: RssFieldSchema.exactOptional(),
    thumbnail: ThumbnailFieldSchema.exactOptional(),
    title_highlighted: PodcastTitleHighlightedFieldSchema.exactOptional(),
    title_original: PodcastTitleOriginalFieldSchema.exactOptional(),
    total_episodes: TotalEpisodesFieldSchema.exactOptional(),
    update_frequency_hours: UpdateFrequencyHoursFieldSchema.exactOptional(),
    website: WebsiteFieldSchema.exactOptional(),
  })
  .openapi({ description: 'When **type** is *podcast*.', required: [] })
  .openapi('PodcastSearchResult')

const PodcastTypeaheadResultSchema = z
  .object({
    explicit_content: ExplicitFieldSchema.exactOptional(),
    id: PodcastIdFieldSchema.exactOptional(),
    image: ImageFieldSchema.exactOptional(),
    publisher_highlighted: PublisherHighlightedFieldSchema.exactOptional(),
    publisher_original: PublisherOriginalFieldSchema.exactOptional(),
    thumbnail: ThumbnailFieldSchema.exactOptional(),
    title_highlighted: PodcastTitleHighlightedFieldSchema.exactOptional(),
    title_original: PodcastTitleOriginalFieldSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PodcastTypeaheadResult')

const RelatedSearchesResponseSchema = z
  .object({
    terms: z
      .array(z.string())
      .openapi({
        description: 'Related search terms',
        examples: [['evergrande stock', 'evergrande china', 'evergrande group', 'evergrande news']],
      }),
  })
  .openapi({ required: ['terms'] })
  .openapi('RelatedSearchesResponse')

const SearchResponseSchema = z
  .object({
    count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of search results in this page.', examples: [10] }),
    next_offset: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Pass this value to the **offset** parameter to do pagination of search results.',
        examples: [10],
      }),
    results: z
      .array(
        z.xor([
          EpisodeSearchResultSchema,
          PodcastSearchResultSchema,
          CuratedListSearchResultSchema,
        ]),
      )
      .exactOptional()
      .openapi({ description: 'A list of search results.' }),
    took: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The time it took to fetch these search results. In seconds.',
        examples: [0.093],
      }),
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of search results.', examples: [1989] }),
  })
  .openapi({ required: [] })
  .openapi('SearchResponse')

const SpellCheckResponseSchema = z
  .object({
    corrected_text_html: z
      .string()
      .openapi({
        description:
          'The corrected text for the entire search term (multiple words/tokens), where misspelled tokens are replaced with the correct texts and html tags <b><i>',
        examples: ['<b><i>evergrande</i></b> stock'],
      }),
    tokens: z
      .array(
        z
          .object({
            offset: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The zero-based offset from the beginning of the text query string to the word that is misspelled',
                examples: [5],
              }),
            suggestion: z
              .string()
              .exactOptional()
              .openapi({
                description: 'A word that corrects the spelling error',
                examples: ['evergrande'],
              }),
            token: z
              .string()
              .exactOptional()
              .openapi({ description: 'The misspelled word', examples: ['evergrand'] }),
          })
          .openapi({ required: [] }),
      )
      .openapi({ description: 'The word in the text query string that is not spelled correctly' }),
  })
  .openapi({ required: ['tokens', 'corrected_text_html'] })
  .openapi('SpellCheckResponse')

const SubmitPodcastFormSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A valid email address. If **email** is specified, then we'll notify this email address once the podcast is accepted.",
        examples: ['hello@example.com'],
      }),
    rss: z
      .string()
      .openapi({
        description: 'A valid podcast rss url.',
        examples: ['https://feeds.megaphone.fm/committed'],
      }),
  })
  .openapi({ required: ['rss'] })
  .openapi('SubmitPodcastForm')

const SubmitPodcastResponseSchema = z
  .object({
    podcast: PodcastMinimumSchema,
    status: z
      .enum(['found', 'in review', 'rejected'])
      .openapi({ description: 'The status of this submission.', examples: ['found'] }),
  })
  .openapi({ required: ['podcast', 'status'] })
  .openapi('SubmitPodcastResponse')

const TrendingSearchesResponseSchema = z
  .object({
    terms: z
      .array(z.string())
      .openapi({
        description: 'Trending search terms',
        examples: [['Taliban', 'Andrew Cuomo', 'john McAfee']],
      }),
  })
  .openapi({ required: ['terms'] })
  .openapi('TrendingSearchesResponse')

const TypeaheadResponseSchema = z
  .object({
    genres: z
      .array(GenreSchema)
      .exactOptional()
      .openapi({
        description: "Genre suggestions. It'll show up when the **show_genres** parameter is *1*.",
      }),
    podcasts: z
      .array(PodcastTypeaheadResultSchema)
      .exactOptional()
      .openapi({
        description:
          "Podcast suggestions. It'll show up when the **show_podcasts** parameter is 1.",
      }),
    terms: z
      .array(z.string())
      .openapi({
        description: 'Search term suggestions.',
        examples: [['startup sales', 'startup', 'startups', 'star wars']],
      }),
  })
  .openapi({ required: ['terms'] })
  .openapi('TypeaheadResponse')

const BadRequestResponse = {
  description:
    'Something wrong on your end (Client side errors), e.g., missing required parameters.',
}

const NotFoundResponse = { description: 'Endpoint not exist, or podcast / episode not exist.' }

const ServerErrorResponse = {
  description: 'Something wrong on our end (Unexpected server errors).',
}

const TooManyRequestsResponse = {
  description:
    'For FREE plan, exceeding the quota limit; or for all plans, sending too many requests too fast and exceeding the rate limit.',
}

const UnauthorizedResponse = { description: 'Wrong api key, or your account is suspended.' }

const ApiKeyParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Get API Key on listennotes.com/api',
      explode: false,
      in: 'header',
      name: 'X-ListenAPI-Key',
      required: true,
      schema: { type: 'string' },
      style: 'simple',
    },
  })

const GenreIdParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "You can get the id from `GET /genres`. If not specified, it'll be the overall best podcasts, which can be considered as a special genre.",
      in: 'query',
      name: 'genre_id',
      required: false,
      schema: { examples: [93], type: 'string' },
    },
    examples: [93],
  })

const QueryParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Search term, e.g., person, place, topic... You can use double quotes to do verbatim match, e.g., "game of thrones". Otherwise, it\'s fuzzy search.\n',
      explode: true,
      in: 'query',
      name: 'q',
      required: true,
      schema: { examples: ['star wars'], type: 'string' },
      style: 'form',
    },
    examples: ['star wars'],
  })

const SafeModeParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.union([z.literal(0), z.literal(1)]),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.',
      in: 'query',
      name: 'safe_mode',
      required: false,
      schema: { default: 0, enum: [0, 1], examples: [0], type: 'integer' },
    },
    examples: [0],
  })

const XListenAPIFreeQuotaHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'Free quotas of API requests included in your api plan.',
    param: { required: false },
    examples: [25000],
  })

const XListenAPINextBillingDateHeaderSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    description: 'The timestamp for the start of next billing cycle. In ISO 8601 format.',
    param: { required: false },
    examples: ['2020-04-26T17:27:33.110641+00:00'],
  })

const XListenAPIUsageHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: "The number of API requests that you've used in current billing cycle.",
    param: { required: false },
    examples: [19231],
  })

const XListenAPILatencySecondsHeaderSchema = z
  .number()
  .exactOptional()
  .openapi({
    description: 'Latency for this api call, in seconds.',
    param: { required: false },
    examples: [0.056],
  })

export const getBestPodcastsRoute = createRoute({
  method: 'get',
  path: '/best_podcasts',
  tags: ['Directory API'],
  summary: 'Fetch a list of best podcasts by genre',
  description:
    'Get a list of curated best podcasts by genre,\nwhich are curated by Listen Notes staffs based on various signals from the Internet, e.g.,\ntop charts on other podcast platforms, recommendations from mainstream media,\nuser activities on listennotes.com...\nYou can get the genre ids from `GET /genres` endpoint.\nThis endpoint returns same data as https://www.listennotes.com/best-podcasts/\n',
  operationId: 'getBestPodcasts',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    query: z.object({
      genre_id: GenreIdParamParamsSchema,
      page: z
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
            description: 'Page number of those podcasts in this genre.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { examples: [2], type: 'integer' },
          },
          examples: [2],
        }),
      region: z
        .string()
        .default('us')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter best podcasts by country/region.\nPlease note that podcasts that are "best" in a country/region may not be produced in that country/region.\nFor example, a podcast from the US may be very popular in Canada.\nYou can get the supported country codes (e.g., us, jp, gb...) from `GET /regions`.\nIf not specified, you\'ll get "best podcasts" in United States.\n',
            in: 'query',
            name: 'region',
            required: false,
            schema: { default: 'us', examples: ['us'], type: 'string' },
          },
          examples: ['us'],
        }),
      publisher_region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter best podcasts by the publisher\'s country/region.\nThis is to narrow down the results to include "best podcasts" produced in a specific country/region.\nYou can get the supported country codes (e.g., us, jp, gb...) from `GET /regions`.\nIf not specified, you\'ll get "best podcasts" produced in any country/region.\nIf you want to get a country/region\'s "best podcasts" that are also produced in that country/region,\nthen you need to specify both **region** and **publisher_region**,\ne.g., `region=jp` and `publisher_region=jp`.\n',
            in: 'query',
            name: 'publisher_region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter best podcasts by language.\nYou can get a list of supported languages (e.g., English, Chinese, Japanese...) from `GET /languages`.\nIf not specified, you\'ll get "best podcasts" in any language.\n',
            in: 'query',
            name: 'language',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort: z
        .enum([
          'recent_added_first',
          'oldest_added_first',
          'recent_published_first',
          'oldest_published_first',
          'listen_score',
        ])
        .default('recent_added_first')
        .exactOptional()
        .openapi({
          param: {
            description:
              "How do you want to sort these podcasts?\nIf you'd like to sort by popularity, please use **listen_score**.\n",
            example: 'listen_score',
            explode: true,
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'recent_added_first',
              enum: [
                'recent_added_first',
                'oldest_added_first',
                'recent_published_first',
                'oldest_published_first',
                'listen_score',
              ],
              type: 'string',
            },
            style: 'form',
          },
        }),
      safe_mode: SafeModeParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BestPodcastsResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
      links: {
        paginate: {
          operationId: 'getBestPodcasts',
          parameters: { page: '$response.body#/next_page_number' },
          description: 'Pagination through podcasts.',
        },
      },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getCuratedPodcastsRoute = createRoute({
  method: 'get',
  path: '/curated_podcasts',
  tags: ['Directory API'],
  summary: 'Fetch curated lists of podcasts',
  description:
    "A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.\n",
  operationId: 'getCuratedPodcasts',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number of curated lists.',
            example: 2,
            explode: true,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetCuratedPodcastsResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
      links: {
        paginate: {
          operationId: 'getCuratedPodcasts',
          parameters: { page: '$response.body#/next_page_number' },
          description: 'Pagination through curated lists.',
        },
      },
    },
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getCuratedPodcastsIdRoute = createRoute({
  method: 'get',
  path: '/curated_podcasts/{id}',
  tags: ['Directory API'],
  summary: 'Fetch a curated list of podcasts by id',
  description:
    'Get detailed meta data of all podcasts in a specific curated list.\nThis endpoint returns same data as https://www.listennotes.com/curated-podcasts/\n',
  operationId: 'getCuratedPodcastById',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'id for a specific curated list of podcasts. You can get the id from the response of `GET /search?type=curated` or `GET /curated_podcasts`.\n',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { examples: ['SDFKduyJ47r'], type: 'string' },
            style: 'simple',
          },
          examples: ['SDFKduyJ47r'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CuratedListFullSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const postEpisodesRoute = createRoute({
  method: 'post',
  path: '/episodes',
  tags: ['Directory API'],
  summary: 'Batch fetch basic meta data for episodes',
  description:
    'Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.\n',
  operationId: 'getEpisodesInBatch',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: GetEpisodesInBatchFormSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetEpisodesInBatchResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getEpisodesIdRoute = createRoute({
  method: 'get',
  path: '/episodes/{id}',
  tags: ['Directory API'],
  summary: 'Fetch detailed meta data for an episode by id',
  description: 'Fetch detailed meta data for a specific episode.',
  operationId: 'getEpisodeById',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'id for a specific episode. You can get episode id from using other endpoints, e.g., `GET /search`...',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { examples: ['6b6d65930c5a4f71b254465871fed370'], type: 'string' },
            style: 'simple',
          },
          examples: ['6b6d65930c5a4f71b254465871fed370'],
        }),
    }),
    query: z.object({
      show_transcript: z
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
            description:
              "To include the transcript of this episode or not? If it is 1, then include the transcript in the **transcript** field. The default value is 0 - we don't include transcript by default, because 1) it would make the response data very big, thus slow response time; 2) less than 1% of episodes have transcripts. The transcript field is available only in the PRO/ENTERPRISE plan.",
            explode: false,
            in: 'query',
            name: 'show_transcript',
            required: false,
            schema: { default: 0, examples: [1], type: 'integer' },
            style: 'form',
          },
          examples: [1],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EpisodeFullSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getEpisodesIdRecommendationsRoute = createRoute({
  method: 'get',
  path: '/episodes/{id}/recommendations',
  tags: ['Directory API'],
  summary: 'Fetch recommendations for an episode',
  description: 'Fetch up to 8 episode recommendations based on the given episode id.',
  operationId: 'getEpisodeRecommendations',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Episode id.',
            example: '254444fa6cf64a43a95292a70eb6869b',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({ safe_mode: SafeModeParamParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetEpisodeRecommendationsResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getGenresRoute = createRoute({
  method: 'get',
  path: '/genres',
  tags: ['Directory API'],
  summary: 'Fetch a list of podcast genres',
  description:
    'Get a list of podcast genres that are supported in Listen Notes.\nThe genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,\ne.g., `GET /best_podcasts`, `GET /search`...\nYou may want to cache the list of genres on the client side.\n',
  operationId: 'getGenres',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    query: z.object({
      top_level_only: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Just show top level genres? If 1, yes, just show top level genres. If 0, no, show all genres.\n',
            explode: true,
            in: 'query',
            name: 'top_level_only',
            required: false,
            schema: { default: 0, enum: [0, 1], examples: [1], type: 'integer' },
            style: 'form',
          },
          examples: [1],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetGenresResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getJustListenRoute = createRoute({
  method: 'get',
  path: '/just_listen',
  tags: ['Directory API'],
  summary: 'Fetch a random podcast episode',
  description: 'Recently published episodes are more likely to be fetched. Good luck!',
  operationId: 'justListen',
  request: { headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EpisodeSimpleSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getLanguagesRoute = createRoute({
  method: 'get',
  path: '/languages',
  tags: ['Directory API'],
  summary: 'Fetch a list of supported languages for podcasts',
  description:
    'Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.\n',
  operationId: 'getLanguages',
  request: { headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetLanguagesResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getPlaylistsRoute = createRoute({
  method: 'get',
  path: '/playlists',
  tags: ['Playlist API'],
  summary: 'Fetch a list of your playlists.',
  description:
    'This endpoint returns same data as listennotes.com/listen under your account.\nYou can use the **page** parameter to do pagination and fetch more playlists.\n',
  operationId: 'getPlaylists',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    query: z.object({
      sort: z
        .enum(['recent_added_first', 'oldest_added_first', 'name_a_to_z', 'name_z_to_a'])
        .default('recent_added_first')
        .exactOptional()
        .openapi({
          param: {
            description: 'How do you want to sort playlists?\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'recent_added_first',
              enum: ['recent_added_first', 'oldest_added_first', 'name_a_to_z', 'name_z_to_a'],
              examples: ['recent_added_first'],
              type: 'string',
            },
          },
          examples: ['recent_added_first'],
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number of playlists.\n',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, examples: [1], type: 'integer' },
          },
          examples: [1],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PlaylistsResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
      links: {
        paginate: {
          operationId: 'getPlaylists',
          parameters: { page: '$response.body#/page' },
          description: 'Pagination through playlists.',
        },
      },
    },
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getPlaylistsIdRoute = createRoute({
  method: 'get',
  path: '/playlists/{id}',
  tags: ['Playlist API'],
  summary: "Fetch a playlist's info and items (i.e., episodes or podcasts).",
  description:
    'A playlist can be an episode list (i.e., all items are episodes) or a podcast list (i.e., all items are podcasts),\nwhich is essentially the same as those created via listennotes.com/listen/.\nThis endpoint fetches a list of items (i.e., episodes or podcasts) in the playlist.\nYou can use the **last_pub_date_ms** parameter to do pagination and fetch more items.\nA playlist can be **public** (discoverable on ListenNotes.com),\n**unlisted** (accessible to anyone who knows the playlist id),\nor **private** (accessible to its owner).\nYou can fetch all playlists created by you, and **public** / **unlisted** playlists created by others.\n',
  operationId: 'getPlaylistById',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Playlist id (always 11 characters, e.g., m1pe7z60bsw).\nYou can get the podcast id from the url of a playlist, e.g.,\nm1pe7z60bsw is the playlist id of listennotes.com/listen/podcasts-about-podcasting-m1pe7z60bsw\n',
            example: 'm1pe7z60bsw',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      type: z
        .enum(['episode_list', 'podcast_list'])
        .default('episode_list')
        .exactOptional()
        .openapi({
          param: {
            description:
              'The type of this playlist, which should be either **episode_list** or **podcast_list**.\n',
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              default: 'episode_list',
              enum: ['episode_list', 'podcast_list'],
              examples: ['episode_list'],
              type: 'string',
            },
          },
          examples: ['episode_list'],
        }),
      last_timestamp_ms: z
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
            description:
              "For playlist items pagination.\nIt's the value of **last_timestamp_ms** from the response of last request.\nIf it's 0 or not specified, just return the latest or the oldest 20 items,\ndepending on the value of the **sort** parameter.\n",
            in: 'query',
            name: 'last_timestamp_ms',
            required: false,
            schema: { default: 0, examples: [0], type: 'integer' },
          },
          examples: [0],
        }),
      sort: z
        .enum([
          'recent_added_first',
          'oldest_added_first',
          'recent_published_first',
          'oldest_published_first',
        ])
        .default('recent_added_first')
        .exactOptional()
        .openapi({
          param: {
            description: 'How do you want to sort playlist items?\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'recent_added_first',
              enum: [
                'recent_added_first',
                'oldest_added_first',
                'recent_published_first',
                'oldest_published_first',
              ],
              examples: ['recent_added_first'],
              type: 'string',
            },
          },
          examples: ['recent_added_first'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PlaylistResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
      links: {
        paginate: {
          operationId: 'getPlaylistById',
          parameters: { last_timestamp_ms: '$response.body#/last_timestamp_ms' },
          description: 'Pagination through playlist items.',
        },
      },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const postPodcastsRoute = createRoute({
  method: 'post',
  path: '/podcasts',
  tags: ['Directory API'],
  summary: 'Batch fetch basic meta data for podcasts',
  description:
    'Batch fetch basic meta data for up to 10 podcasts.\nThis endpoint could be used to build something like OPML import,\nallowing users to import a bunch of podcasts via rss urls.\nFor detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.\n',
  operationId: 'getPodcastsInBatch',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              ids: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Comma-separated list of podcast ids.',
                  examples: [
                    '3302bc71139541baa46ecb27dbf6071a,68faf62be97149c280ebcc25178aa731,37589a3e121e40debe4cef3d9638932a,9cf19c590ff0484d97b18b329fed0c6a',
                  ],
                }),
              itunes_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Comma-separated Apple Podcasts (iTunes) ids, e.g., 659155419',
                  examples: ['1457514703,1386234384,659155419'],
                }),
              next_episode_pub_date: z
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
                  description:
                    "For latest episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 15 episodes.\n",
                  examples: [1557394247000],
                }),
              rsses: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Comma-separated rss urls.',
                  examples: [
                    'https://rss.art19.com/recode-decode,https://rss.art19.com/the-daily,https://www.npr.org/rss/podcast.php?id=510331,https://www.npr.org/rss/podcast.php?id=510331',
                  ],
                }),
              show_latest_episodes: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.union([z.literal(0), z.literal(1)]),
                )
                .default(0)
                .exactOptional()
                .openapi({
                  description:
                    'Whether or not to fetch up to 15 latest episodes from these podcasts, sorted by pub_date. 1 is yes, and 0 is no.\n',
                  examples: [1],
                }),
              spotify_ids: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Comma-separated Spotify ids, e.g., 3DDfEsKDIDrTlnPOiG4ZF4',
                  examples: [
                    '3DDfEsKDIDrTlnPOiG4ZF4,4qDNe5Gvl1XxdLinUGEXrC,23NZCM4ik6o3UYkM473Itz',
                  ],
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetPodcastsInBatchResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
      links: {
        paginate: {
          operationId: 'getPodcastsInBatch',
          parameters: { next_episode_pub_date: '$response.body#/next_episode_pub_date' },
          description: 'Pagination through latest episodes.',
        },
      },
    },
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const postPodcastsSubmitRoute = createRoute({
  method: 'post',
  path: '/podcasts/submit',
  tags: ['Podcaster API'],
  summary: 'Submit a podcast to Listen Notes database',
  description:
    'Podcast hosting services can use this endpoint to help your users directly submit a new podcast to Listen Notes database. If the podcast doesn\'t exist in the database, "status" in the response will be "in review", and we\'ll review it within 12 hours. If the podcast exists, "status" in the response will be "found". If this submission is rejected, "status" in the response will be "rejected". You can use `POST /podcasts` to check if multiple podcasts exist in the database. If you want to get a notification once the podcast is accepted, you can either specify the "email" parameter or configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks\n',
  operationId: 'submitPodcast',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    body: {
      content: { 'application/x-www-form-urlencoded': { schema: SubmitPodcastFormSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SubmitPodcastResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getPodcastsIdRoute = createRoute({
  method: 'get',
  path: '/podcasts/{id}',
  tags: ['Directory API'],
  summary: 'Fetch detailed meta data and episodes for a podcast by id',
  description:
    'Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).\nYou can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.\n',
  operationId: 'getPodcastById',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...',
            example: '4d3fe717742d4963a85562e9f84d8c79',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      next_episode_pub_date: z
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
            description:
              "For episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 10 episodes or oldest 10 episodes, depending on the value of the **sort** parameter.\n",
            example: 1479154463000,
            explode: true,
            in: 'query',
            name: 'next_episode_pub_date',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      sort: z
        .enum(['recent_first', 'oldest_first'])
        .default('recent_first')
        .exactOptional()
        .openapi({
          param: {
            description: 'How do you want to sort the episodes of this podcast?\n',
            example: 'recent_first',
            explode: true,
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: 'recent_first',
              enum: ['recent_first', 'oldest_first'],
              type: 'string',
            },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PodcastFullSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
      links: {
        paginate: {
          operationId: 'getPodcastById',
          parameters: { next_episode_pub_date: '$response.body#/next_episode_pub_date' },
          description: 'Pagination through episodes.',
        },
      },
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const deletePodcastsIdRoute = createRoute({
  method: 'delete',
  path: '/podcasts/{id}',
  tags: ['Podcaster API'],
  summary: 'Request to delete a podcast',
  description:
    'Podcast hosting services can use this endpoint to streamline the process of podcast deletion on behave of their users (podcasters). We will review the deletion request within 12 hours. If the podcast is already deleted, the "status" field in the response will be "deleted". Otherwise, the status field will be "in review". If you want to get a notification once the podcast is deleted, you can configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks\n',
  operationId: 'deletePodcastById',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...',
            example: '4d3fe717742d4963a85562e9f84d8c79',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      reason: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The reason why this podcast should be deleted, e.g., copyright violation, the podcaster wants to delete it... You can put "testing" here to indicate that you are testing this endpoint, so we will not actually delete the podcast.',
            example: 'the podcaster wants to delete it',
            explode: true,
            in: 'query',
            name: 'reason',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeletePodcastResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getPodcastsIdAudienceRoute = createRoute({
  method: 'get',
  path: '/podcasts/{id}/audience',
  tags: ['Insights API'],
  summary: 'Fetch audience demographics for a podcast',
  description:
    'Fetch audience demographics for a podcast - 1) directly measured on the Listen Notes platform; 2) only supports audience breakdown by regions for now; 3) not every podcast has data.',
  operationId: 'getPodcastAudience',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Podcast id.',
            example: '25212ac3c53240a880dd5032e547047b',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PodcastAudienceResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getPodcastsIdRecommendationsRoute = createRoute({
  method: 'get',
  path: '/podcasts/{id}/recommendations',
  tags: ['Directory API'],
  summary: 'Fetch recommendations for a podcast',
  description: 'Fetch up to 8 podcast recommendations based on the given podcast id.',
  operationId: 'getPodcastRecommendations',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Podcast id.',
            example: '25212ac3c53240a880dd5032e547047b',
            explode: false,
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({ safe_mode: SafeModeParamParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetPodcastRecommendationsResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getRegionsRoute = createRoute({
  method: 'get',
  path: '/regions',
  tags: ['Directory API'],
  summary: 'Fetch a list of supported countries/regions for best podcasts',
  description:
    'It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.\n',
  operationId: 'getRegions',
  request: { headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetRegionsResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getRelatedSearchesRoute = createRoute({
  method: 'get',
  path: '/related_searches',
  tags: ['Search API'],
  summary: 'Fetch related search terms',
  description:
    'Suggest related search terms. The results are more comprehensive than from `GET /typeahead`. This endpoint is available only in the PRO/ENTERPRISE plan.',
  operationId: 'getRelatedSearches',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'Search term, e.g., person, place, topic...\n',
            explode: true,
            in: 'query',
            name: 'q',
            required: true,
            schema: { examples: ['evergrande'], type: 'string' },
            style: 'form',
          },
          examples: ['evergrande'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RelatedSearchesResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['Search API'],
  summary: 'Full-text search',
  description:
    'Full-text search on episodes, podcasts, or curated lists of podcasts.\nUse the `offset` parameter to paginate through search results.\nThe FREE plan allows to see up to 30 search results (or `offset` < 30) per query.\nThe PRO plan allows to see up to 300 search results (or `offset` < 300) per query.\nThe ENTERPRISE plan allows to see up to 10,000 search results (or `offset` < 10000) per query.\n',
  operationId: 'search',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    query: z.object({
      q: QueryParamParamsSchema,
      sort_by_date: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sort by date or not? If 0, then sort by relevance. If 1, then sort by date.\n',
            explode: true,
            in: 'query',
            name: 'sort_by_date',
            required: false,
            schema: { default: 0, enum: [0, 1], examples: [0], type: 'integer' },
            style: 'form',
          },
          examples: [0],
        }),
      type: z
        .enum(['episode', 'podcast', 'curated'])
        .default('episode')
        .exactOptional()
        .openapi({
          param: {
            description: 'What type of contents do you want to search for? \n',
            explode: true,
            in: 'query',
            name: 'type',
            required: false,
            schema: {
              default: 'episode',
              enum: ['episode', 'podcast', 'curated'],
              examples: ['episode'],
              type: 'string',
            },
            style: 'form',
          },
          examples: ['episode'],
        }),
      offset: z
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
            description:
              "Offset for search results, for pagination. You'll use **next_offset** from response for this parameter.\n",
            explode: true,
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, examples: [0], type: 'integer' },
            style: 'form',
          },
          examples: [0],
        }),
      len_min: z
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
            description:
              "Minimum audio length in minutes. Applicable only when **type** parameter is **episode** or **podcast**.\nIf **type** parameter is **episode**, it's for audio length of an episode.\nIf **type** parameter is **podcast**, it's for average audio length of all episodes in a podcast.\n",
            explode: true,
            in: 'query',
            name: 'len_min',
            required: false,
            schema: { default: 0, examples: [10], type: 'integer' },
            style: 'form',
          },
          examples: [10],
        }),
      len_max: z
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
            description:
              "Maximum audio length in minutes. Applicable only when **type** parameter is **episode** or **podcast**.\nIf **type** parameter is **episode**, it's for audio length of an episode.\nIf **type** parameter is **podcast**, it's for average audio length of all episodes in a podcast.\n",
            explode: true,
            in: 'query',
            name: 'len_max',
            required: false,
            schema: { examples: [30], type: 'integer' },
            style: 'form',
          },
          examples: [30],
        }),
      episode_count_min: z
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
            description:
              'Minimum number of episodes. Applicable only when type parameter is **podcast**.\n',
            explode: true,
            in: 'query',
            name: 'episode_count_min',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      episode_count_max: z
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
            description:
              'Maximum number of episodes. Applicable only when type parameter is **podcast**.\n',
            explode: true,
            in: 'query',
            name: 'episode_count_max',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      update_freq_min: z
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
            description:
              'Minimum update frequency in hours (how frequently does a podcast release a new episode). For example, if you want to find "weekly" podcasts, then you can set **update_freq_min**=144 hours (or 6 days) and **update_freq_max**=192 hours (or 8 days). Applicable only when type parameter is **podcast**.\n',
            explode: true,
            in: 'query',
            name: 'update_freq_min',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      update_freq_max: z
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
            description:
              'Maximum update frequency in hours (how frequently does a podcast release a new episode). For example, if you want to find "weekly" podcasts, then you can set **update_freq_min**=144 hours (or 6 days) and **update_freq_max**=192 hours (or 8 days). Applicable only when type parameter is **podcast**.\n',
            explode: true,
            in: 'query',
            name: 'update_freq_max',
            required: false,
            schema: { type: 'integer' },
            style: 'form',
          },
        }),
      genre_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited string of a list of genre ids. If not specified, then all genres are included. You can find the id and the name of all genres from `GET /genres`. It works only when **type** is *episode* or *podcast*.\n',
            explode: true,
            in: 'query',
            name: 'genre_ids',
            required: false,
            schema: { examples: ['68,82'], type: 'string' },
            style: 'form',
          },
          examples: ['68,82'],
        }),
      published_before: z
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
            description:
              'Only show episodes/podcasts/curated lists published before this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.\n',
            explode: true,
            in: 'query',
            name: 'published_before',
            required: false,
            schema: { examples: [1580172454000], type: 'integer' },
            style: 'form',
          },
          examples: [1580172454000],
        }),
      published_after: z
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
            description:
              'Only show episodes/podcasts/curated lists published after this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.\n',
            explode: true,
            in: 'query',
            name: 'published_after',
            required: false,
            schema: { default: 0, examples: [0], type: 'integer' },
            style: 'form',
          },
          examples: [0],
        }),
      only_in: z
        .string()
        .default('title,description,author,audio')
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited string to search only in specific fields. Allowed values are title, description, author, and audio. If not specified, then search every fields.\n',
            explode: true,
            in: 'query',
            name: 'only_in',
            required: false,
            schema: {
              default: 'title,description,author,audio',
              examples: ['title,description'],
              type: 'string',
            },
            style: 'form',
          },
          examples: ['title,description'],
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit search results to a specific language. If not specified, it'll be any language. You can get a list of supported languages from `GET /languages`. It works only when **type** is *episode* or *podcast*.\n",
            explode: true,
            in: 'query',
            name: 'language',
            required: false,
            schema: { examples: ['English'], type: 'string' },
            style: 'form',
          },
          examples: ['English'],
        }),
      region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Limit search results to a specific region (e.g., us, gb, in...). If not specified, it'll be any region. You can get the supported country codes from `GET /regions`. It works only when **type** is *episode* or *podcast*.\n",
            in: 'query',
            name: 'region',
            required: false,
            schema: { examples: [''], type: 'string' },
          },
          examples: [''],
        }),
      ocid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited string of podcast ids (up to 5 podcasts) - you can get a podcast id from the **podcast_id** field in response. This parameter is to limit search results from only a few specific podcasts. It works only when **type** is *episode*.\n',
            explode: true,
            in: 'query',
            name: 'ocid',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      ncid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited string of podcast ids (up to 5 podcasts) - you can get a podcast id from the **podcast_id** field in response. This parameter is to exclude search results of a few specific podcasts. It works only when **type** is *episode*.\n',
            explode: true,
            in: 'query',
            name: 'ncid',
            required: false,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      safe_mode: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **type** is *episode* or *podcast*.\n',
            explode: true,
            in: 'query',
            name: 'safe_mode',
            required: false,
            schema: { default: 0, enum: [0, 1], examples: [0], type: 'integer' },
            style: 'form',
          },
          examples: [0],
        }),
      unique_podcasts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether or not to keep only one episode per podcast in search results. 1 is yes and 0 is no. It works only when **type** is *episode*.\n',
            explode: true,
            in: 'query',
            name: 'unique_podcasts',
            required: false,
            schema: { default: 0, enum: [0, 1], examples: [0], type: 'integer' },
            style: 'form',
          },
          examples: [0],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SearchResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
      links: {
        paginate: {
          operationId: 'search',
          parameters: { offset: '$response.body#/next_offset' },
          description: 'Pagination through search results.',
        },
      },
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getSpellcheckRoute = createRoute({
  method: 'get',
  path: '/spellcheck',
  tags: ['Search API'],
  summary: 'Spell check on a search term',
  description:
    'Suggest a list of words that correct the spelling errors of a search term. This endpoint is available only in the PRO/ENTERPRISE plan.',
  operationId: 'spellcheck',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description: 'Search term, e.g., person, place, topic...\n',
            explode: true,
            in: 'query',
            name: 'q',
            required: true,
            schema: { examples: ['evergrand stok'], type: 'string' },
            style: 'form',
          },
          examples: ['evergrand stok'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SpellCheckResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getTrendingSearchesRoute = createRoute({
  method: 'get',
  path: '/trending_searches',
  tags: ['Search API'],
  summary: 'Fetch trending search terms',
  description: 'Fetch up to 10 most recent trending search terms on the Listen Notes platform.',
  operationId: 'getTrendingSearches',
  request: { headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TrendingSearchesResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const getTypeaheadRoute = createRoute({
  method: 'get',
  path: '/typeahead',
  tags: ['Search API'],
  summary: 'Typeahead search',
  description: 'Suggest search terms, podcast genres, and podcasts.',
  operationId: 'typeahead',
  request: {
    headers: z.object({ 'X-ListenAPI-Key': ApiKeyParamParamsSchema }),
    query: z.object({
      q: QueryParamParamsSchema,
      show_podcasts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Autosuggest podcasts. This only searches podcast title and publisher and returns very limited info of 5 podcasts. 1 is yes, 0 is no. It's a bit slow to autosuggest podcasts, so we turn it off by default. If show_podcasts=1, you can also pass iTunes id (e.g., 474722933) to the q parameter to fetch podcast meta data.\n",
            explode: true,
            in: 'query',
            name: 'show_podcasts',
            required: false,
            schema: { default: 0, enum: [0, 1], examples: [1], type: 'integer' },
            style: 'form',
          },
          examples: [1],
        }),
      show_genres: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether or not to autosuggest genres. 1 is yes, 0 is no.\n',
            explode: true,
            in: 'query',
            name: 'show_genres',
            required: false,
            schema: { default: 0, enum: [0, 1], examples: [1], type: 'integer' },
            style: 'form',
          },
          examples: [1],
        }),
      safe_mode: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(0), z.literal(1)]),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **show_podcasts** is *1*.\n',
            explode: true,
            in: 'query',
            name: 'safe_mode',
            required: false,
            schema: { default: 0, enum: [0, 1], examples: [0], type: 'integer' },
            style: 'form',
          },
          examples: [0],
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TypeaheadResponseSchema } },
      headers: z.object({
        'X-ListenAPI-FreeQuota': XListenAPIFreeQuotaHeaderSchema,
        'X-ListenAPI-NextBillingDate': XListenAPINextBillingDateHeaderSchema,
        'X-ListenAPI-Usage': XListenAPIUsageHeaderSchema,
        'X-listenAPI-Latency-Seconds': XListenAPILatencySecondsHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    429: TooManyRequestsResponse,
    '5XX': ServerErrorResponse,
  },
})

export const podcastDeletedPostWebhook = {
  method: 'post',
  path: '/podcastDeleted',
  request: {
    body: {
      description:
        'Triggered by your request to DELETE /podcasts/{id}, if the podcast is actually deleted.',
      content: { 'application/json': { schema: PodcastMinimumRssSchema } },
    },
  },
  responses: {
    200: { description: 'Return a 200 status to indicate that the data was received successfully' },
  },
}

export const podcastsSubmitAcceptedPostWebhook = {
  method: 'post',
  path: '/podcastsSubmitAccepted',
  request: {
    body: {
      description:
        'Triggered by your request to POST /podcasts/submit, if the podcast submission is accepted.',
      content: { 'application/json': { schema: PodcastMinimumRssSchema } },
    },
  },
  responses: {
    200: { description: 'Return a 200 status to indicate that the data was received successfully' },
  },
}

export const podcastsSubmitRejectedPostWebhook = {
  method: 'post',
  path: '/podcastsSubmitRejected',
  request: {
    body: {
      description:
        'Triggered by your request to POST /podcasts/submit, if the podcast submission is rejected.',
      content: {
        'application/json': {
          schema: z
            .object({
              podcast: z
                .object({ rss: RssFieldSchema.exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Return a 200 status to indicate that the data was received successfully' },
  },
}
