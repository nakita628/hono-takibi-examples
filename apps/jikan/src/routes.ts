import { createRoute, z } from '@hono/zod-openapi'

const UserAnimeListStatusFilterSchema = z
  .enum(['all', 'watching', 'completed', 'onhold', 'dropped', 'plantowatch'])
  .openapi({ description: "User's anime list status filter options" })
  .openapi('UserAnimeListStatusFilter')

const AnimeSearchQueryOrderbySchema = z
  .enum([
    'mal_id',
    'title',
    'start_date',
    'end_date',
    'episodes',
    'score',
    'scored_by',
    'rank',
    'popularity',
    'members',
    'favorites',
  ])
  .openapi({ description: 'Available Anime order_by properties' })
  .openapi('AnimeSearchQueryOrderby')

const AnimeSearchQueryRatingSchema = z
  .enum(['g', 'pg', 'pg13', 'r17', 'r', 'rx'])
  .openapi({
    description:
      'Available Anime audience ratings<br><br><b>Ratings</b><br><ul><li>G - All Ages</li><li>PG - Children</li><li>PG-13 - Teens 13 or older</li><li>R - 17+ (violence & profanity)</li><li>R+ - Mild Nudity</li><li>Rx - Hentai</li></ul>',
  })
  .openapi('AnimeSearchQueryRating')

const AnimeSearchQueryStatusSchema = z
  .enum(['airing', 'complete', 'upcoming'])
  .openapi({ description: 'Available Anime statuses' })
  .openapi('AnimeSearchQueryStatus')

const AnimeTypesSchema = z
  .enum(['TV', 'OVA', 'Movie', 'Special', 'ONA', 'Music', 'CM', 'PV', 'TV Special'])
  .openapi({ description: 'Anime Type' })
  .openapi('AnimeTypes')

const AnimeSearchQueryTypeSchema = AnimeTypesSchema.openapi({
  description: 'Available Anime types',
}).openapi('AnimeSearchQueryType')

const CharactersSearchQueryOrderbySchema = z
  .enum(['mal_id', 'name', 'favorites'])
  .openapi({ description: 'Available Character order_by properties' })
  .openapi('CharactersSearchQueryOrderby')

const ClubSearchQueryCategorySchema = z
  .enum([
    'anime',
    'manga',
    'actors_and_artists',
    'characters',
    'cities_and_neighborhoods',
    'companies',
    'conventions',
    'games',
    'japan',
    'music',
    'other',
    'schools',
  ])
  .openapi({ description: 'Club Search Query Category' })
  .openapi('ClubSearchQueryCategory')

const ClubSearchQueryOrderbySchema = z
  .enum(['mal_id', 'name', 'members_count', 'created'])
  .openapi({ description: 'Club Search Query OrderBy' })
  .openapi('ClubSearchQueryOrderby')

const ClubSearchQueryTypeSchema = z
  .enum(['public', 'private', 'secret'])
  .openapi({ description: 'Club Search Query Type' })
  .openapi('ClubSearchQueryType')

const UsersSearchQueryGenderSchema = z
  .enum(['any', 'male', 'female', 'nonbinary'])
  .openapi({ description: 'Users Search Query Gender.' })
  .openapi('UsersSearchQueryGender')

const GenreQueryFilterSchema = z
  .enum(['genres', 'explicit_genres', 'themes', 'demographics'])
  .openapi({ description: 'Filter genres by type' })
  .openapi('GenreQueryFilter')

const MagazinesQueryOrderbySchema = z
  .enum(['mal_id', 'name', 'count'])
  .openapi({ description: 'Order by magazine data' })
  .openapi('MagazinesQueryOrderby')

const UserMangaListStatusFilterSchema = z
  .enum(['all', 'reading', 'completed', 'onhold', 'dropped', 'plantoread'])
  .openapi({ description: "User's anime list status filter options" })
  .openapi('UserMangaListStatusFilter')

const MangaSearchQueryOrderbySchema = z
  .enum([
    'mal_id',
    'title',
    'start_date',
    'end_date',
    'chapters',
    'volumes',
    'score',
    'scored_by',
    'rank',
    'popularity',
    'members',
    'favorites',
  ])
  .openapi({ description: 'Available Manga order_by properties' })
  .openapi('MangaSearchQueryOrderby')

const MangaSearchQueryStatusSchema = z
  .enum(['publishing', 'complete', 'hiatus', 'discontinued', 'upcoming'])
  .openapi({ description: 'Available Manga statuses' })
  .openapi('MangaSearchQueryStatus')

const MangaSearchQueryTypeSchema = z
  .enum(['manga', 'novel', 'lightnovel', 'oneshot', 'doujin', 'manhwa', 'manhua'])
  .openapi({ description: 'Available Manga types' })
  .openapi('MangaSearchQueryType')

const PeopleSearchQueryOrderbySchema = z
  .enum(['mal_id', 'name', 'birthday', 'favorites'])
  .openapi({ description: 'Available People order_by properties' })
  .openapi('PeopleSearchQueryOrderby')

const ProducersQueryOrderbySchema = z
  .enum(['mal_id', 'count', 'favorites', 'established'])
  .openapi({ description: 'Producers Search Query Order By' })
  .openapi('ProducersQueryOrderby')

const SearchQuerySortSchema = z
  .enum(['desc', 'asc'])
  .openapi({ description: 'Search query sort direction' })
  .openapi('SearchQuerySort')

const TopAnimeFilterSchema = z
  .enum(['airing', 'upcoming', 'bypopularity', 'favorite'])
  .openapi({ description: 'Top items filter types' })
  .openapi('TopAnimeFilter')

const TopMangaFilterSchema = z
  .enum(['publishing', 'upcoming', 'bypopularity', 'favorite'])
  .openapi({ description: 'Top items filter types' })
  .openapi('TopMangaFilter')

const TopReviewsTypeEnumSchema = z
  .enum(['anime', 'manga'])
  .openapi({ description: 'The type of reviews to filter by. Defaults to anime.' })
  .openapi('TopReviewsTypeEnum')

const PaginationSchema = z
  .object({
    pagination: z
      .object({
        last_visible_page: z.int().exactOptional(),
        has_next_page: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const AnimeEpisodesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
            url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  "MyAnimeList URL. This is the URL of the episode's video. If there is no video url, this will be null.",
              }),
            title: z.string().exactOptional().openapi({ description: 'Title' }),
            title_japanese: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Title Japanese' }),
            title_romanji: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'title_romanji' }),
            aired: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Aired Date ISO8601' }),
            score: z
              .any()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Aggregated episode score (1.00 - 5.00) based on MyAnimeList user voting',
              }),
            filler: z.boolean().exactOptional().openapi({ description: 'Filler episode' }),
            recap: z.boolean().exactOptional().openapi({ description: 'Recap episode' }),
            forum_url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Episode discussion forum URL' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Anime Episodes Resource' })
  .openapi('AnimeEpisodes')

const CommonImagesSchema = z
  .object({
    jpg: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL JPG' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in JPG', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CommonImages')

const NewsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
            url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
            title: z.string().exactOptional().openapi({ description: 'Title' }),
            date: z.string().exactOptional().openapi({ description: 'Post Date ISO8601' }),
            author_username: z
              .string()
              .exactOptional()
              .openapi({ description: 'Author MyAnimeList Username' }),
            author_url: z.string().exactOptional().openapi({ description: 'Author Profile URL' }),
            forum_url: z.string().exactOptional().openapi({ description: 'Forum topic URL' }),
            images: CommonImagesSchema.exactOptional(),
            comments: z.int().exactOptional().openapi({ description: 'Comment count' }),
            excerpt: z.string().exactOptional().openapi({ description: 'Excerpt' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('News')

const AnimeNewsSchema = PaginationSchema.and(NewsSchema)
  .openapi({ description: 'Anime News Resource' })
  .openapi('AnimeNews')

const AnimeVideosEpisodesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            mal_id: z
              .int()
              .exactOptional()
              .openapi({ description: 'MyAnimeList ID or Episode Number' }),
            title: z.string().exactOptional().openapi({ description: 'Episode Title' }),
            episode: z.string().exactOptional().openapi({ description: 'Episode Subtitle' }),
            url: z.string().exactOptional().openapi({ description: 'Episode Page URL' }),
            images: CommonImagesSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Anime Videos Episodes Resource' })
  .openapi('AnimeVideosEpisodes')

const CharacterPicturesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            image_url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Default JPG Image Size URL' }),
            large_image_url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Large JPG Image Size URL' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Character Pictures', required: [] })
  .openapi('CharacterPictures')

const UserImagesSchema = z
  .object({
    jpg: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL JPG' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in JPG', required: [] }),
    webp: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL WEBP' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in WEBP', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('UserImages')

const ClubMemberSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            username: z.string().exactOptional().openapi({ description: "User's username" }),
            url: z.string().exactOptional().openapi({ description: 'User URL' }),
            images: UserImagesSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Club Member', required: [] })
  .openapi('ClubMember')

const MangaNewsSchema = PaginationSchema.and(NewsSchema)
  .openapi({ description: 'Manga News Resource' })
  .openapi('MangaNews')

const MangaImagesSchema = z
  .object({
    jpg: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL JPG' }),
        small_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Small Image URL JPG' }),
        large_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Image URL JPG' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in JPG', required: [] }),
    webp: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL WEBP' }),
        small_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Small Image URL WEBP' }),
        large_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Image URL WEBP' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in WEBP', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('MangaImages')

const MangaPicturesSchema = z
  .object({ data: z.array(MangaImagesSchema).exactOptional() })
  .openapi({ description: 'Manga Pictures', required: [] })
  .openapi('MangaPictures')

const PeopleImagesSchema = z
  .object({
    jpg: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL JPG' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in JPG', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PeopleImages')

const PersonPicturesSchema = z
  .object({ data: z.array(PeopleImagesSchema).exactOptional() })
  .openapi({ description: 'Character Pictures', required: [] })
  .openapi('PersonPictures')

const AnimeImagesSchema = z
  .object({
    jpg: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL JPG' }),
        small_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Small Image URL JPG' }),
        large_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Image URL JPG' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in JPG', required: [] }),
    webp: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL WEBP' }),
        small_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Small Image URL WEBP' }),
        large_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Image URL WEBP' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in WEBP', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AnimeImages')

const TrailerBaseSchema = z
  .object({
    youtube_id: z.string().nullable().exactOptional().openapi({ description: 'YouTube ID' }),
    url: z.string().nullable().exactOptional().openapi({ description: 'YouTube URL' }),
    embed_url: z.string().nullable().exactOptional().openapi({ description: 'Parsed Embed URL' }),
  })
  .openapi({ description: 'Youtube Details', required: [] })
  .openapi('TrailerBase')

const TitleSchema = z
  .object({
    type: z.string().exactOptional().openapi({ description: 'Title type' }),
    title: z.string().exactOptional().openapi({ description: 'Title value' }),
  })
  .openapi({ required: [] })
  .openapi('Title')

const DaterangeSchema = z
  .object({
    from: z.string().nullable().exactOptional().openapi({ description: 'Date ISO8601' }),
    to: z.string().nullable().exactOptional().openapi({ description: 'Date ISO8601' }),
    prop: z
      .object({
        from: z
          .object({
            day: z.int().nullable().exactOptional().openapi({ description: 'Day' }),
            month: z.int().nullable().exactOptional().openapi({ description: 'Month' }),
            year: z.int().nullable().exactOptional().openapi({ description: 'Year' }),
          })
          .exactOptional()
          .openapi({ description: 'Date Prop From', required: [] }),
        to: z
          .object({
            day: z.int().nullable().exactOptional().openapi({ description: 'Day' }),
            month: z.int().nullable().exactOptional().openapi({ description: 'Month' }),
            year: z.int().nullable().exactOptional().openapi({ description: 'Year' }),
          })
          .exactOptional()
          .openapi({ description: 'Date Prop To', required: [] }),
        string: z.string().nullable().exactOptional().openapi({ description: 'Raw parsed string' }),
      })
      .exactOptional()
      .openapi({ description: 'Date Prop', required: [] }),
  })
  .openapi({ description: 'Date range', required: [] })
  .openapi('Daterange')

const BroadcastSchema = z
  .object({
    day: z.string().nullable().exactOptional().openapi({ description: 'Day of the week' }),
    time: z.string().nullable().exactOptional().openapi({ description: 'Time in 24 hour format' }),
    timezone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Timezone (Tz Database format https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)',
      }),
    string: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Raw parsed broadcast string' }),
  })
  .openapi({ description: 'Broadcast Details', required: [] })
  .openapi('Broadcast')

const MalUrlSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    type: z.string().exactOptional().openapi({ description: 'Type of resource' }),
    name: z.string().exactOptional().openapi({ description: 'Resource Name/Title' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
  })
  .openapi({ description: 'Parsed URL Data', required: [] })
  .openapi('MalUrl')

const AnimeSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: AnimeImagesSchema.exactOptional(),
    trailer: TrailerBaseSchema.exactOptional(),
    approved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the entry is pending approval on MAL or not' }),
    titles: z.array(TitleSchema).exactOptional().openapi({ description: 'All titles' }),
    title: z.string().exactOptional().openapi({ description: 'Title', deprecated: true }),
    title_english: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'English Title', deprecated: true }),
    title_japanese: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Japanese Title', deprecated: true }),
    title_synonyms: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Other Titles', deprecated: true }),
    type: AnimeTypesSchema.nullable().exactOptional(),
    source: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Original Material/Source adapted from' }),
    episodes: z.int().nullable().exactOptional().openapi({ description: 'Episode count' }),
    status: z
      .enum(['Finished Airing', 'Currently Airing', 'Not yet aired'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Airing status' }),
    airing: z.boolean().exactOptional().openapi({ description: 'Airing boolean' }),
    aired: DaterangeSchema.exactOptional(),
    duration: z.string().nullable().exactOptional().openapi({ description: 'Parsed raw duration' }),
    rating: z
      .enum([
        'G - All Ages',
        'PG - Children',
        'PG-13 - Teens 13 or older',
        'R - 17+ (violence & profanity)',
        'R+ - Mild Nudity',
        'Rx - Hentai',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Anime audience rating' }),
    score: z.float32().nullable().exactOptional().openapi({ description: 'Score' }),
    scored_by: z.int().nullable().exactOptional().openapi({ description: 'Number of users' }),
    rank: z.int().nullable().exactOptional().openapi({ description: 'Ranking' }),
    popularity: z.int().nullable().exactOptional().openapi({ description: 'Popularity' }),
    members: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of users who have added this entry to their list' }),
    favorites: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of users who have favorited this entry' }),
    synopsis: z.string().nullable().exactOptional().openapi({ description: 'Synopsis' }),
    background: z.string().nullable().exactOptional().openapi({ description: 'Background' }),
    season: z
      .enum(['summer', 'winter', 'spring', 'fall'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Season' }),
    year: z.int().nullable().exactOptional().openapi({ description: 'Year' }),
    broadcast: BroadcastSchema.exactOptional(),
    producers: z.array(MalUrlSchema).exactOptional(),
    licensors: z.array(MalUrlSchema).exactOptional(),
    studios: z.array(MalUrlSchema).exactOptional(),
    genres: z.array(MalUrlSchema).exactOptional(),
    explicit_genres: z.array(MalUrlSchema).exactOptional(),
    themes: z.array(MalUrlSchema).exactOptional(),
    demographics: z.array(MalUrlSchema).exactOptional(),
  })
  .openapi({ description: 'Anime Resource', required: [] })
  .openapi('Anime')

const MangaSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: MangaImagesSchema.exactOptional(),
    approved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the entry is pending approval on MAL or not' }),
    titles: z.array(TitleSchema).exactOptional().openapi({ description: 'All Titles' }),
    title: z.string().exactOptional().openapi({ description: 'Title', deprecated: true }),
    title_english: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'English Title', deprecated: true }),
    title_japanese: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Japanese Title', deprecated: true }),
    type: z
      .enum(['Manga', 'Novel', 'Light Novel', 'One-shot', 'Doujinshi', 'Manhua', 'Manhwa', 'OEL'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Manga Type' }),
    chapters: z.int().nullable().exactOptional().openapi({ description: 'Chapter count' }),
    volumes: z.int().nullable().exactOptional().openapi({ description: 'Volume count' }),
    status: z
      .enum(['Finished', 'Publishing', 'On Hiatus', 'Discontinued', 'Not yet published'])
      .exactOptional()
      .openapi({ description: 'Publishing status' }),
    publishing: z.boolean().exactOptional().openapi({ description: 'Publishing boolean' }),
    published: DaterangeSchema.exactOptional(),
    score: z.float32().nullable().exactOptional().openapi({ description: 'Score' }),
    scored_by: z.int().nullable().exactOptional().openapi({ description: 'Number of users' }),
    rank: z.int().nullable().exactOptional().openapi({ description: 'Ranking' }),
    popularity: z.int().nullable().exactOptional().openapi({ description: 'Popularity' }),
    members: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of users who have added this entry to their list' }),
    favorites: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of users who have favorited this entry' }),
    synopsis: z.string().nullable().exactOptional().openapi({ description: 'Synopsis' }),
    background: z.string().nullable().exactOptional().openapi({ description: 'Background' }),
    authors: z.array(MalUrlSchema).exactOptional(),
    serializations: z.array(MalUrlSchema).exactOptional(),
    genres: z.array(MalUrlSchema).exactOptional(),
    explicit_genres: z.array(MalUrlSchema).exactOptional(),
    themes: z.array(MalUrlSchema).exactOptional(),
    demographics: z.array(MalUrlSchema).exactOptional(),
  })
  .openapi({ description: 'Manga Resource', required: [] })
  .openapi('Manga')

const CharacterImagesSchema = z
  .object({
    jpg: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL JPG' }),
        small_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Small Image URL JPG' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in JPG', required: [] }),
    webp: z
      .object({
        image_url: z.string().nullable().exactOptional().openapi({ description: 'Image URL WEBP' }),
        small_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Small Image URL WEBP' }),
      })
      .exactOptional()
      .openapi({ description: 'Available images in WEBP', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CharacterImages')

const CharacterSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: CharacterImagesSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Name' }),
    name_kanji: z.string().nullable().exactOptional().openapi({ description: 'Name' }),
    nicknames: z.array(z.string()).exactOptional().openapi({ description: 'Other Names' }),
    favorites: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of users who have favorited this entry' }),
    about: z.string().nullable().exactOptional().openapi({ description: 'Biography' }),
  })
  .openapi({ description: 'Character Resource', required: [] })
  .openapi('Character')

const PersonSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    website_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Person's website URL" }),
    images: PeopleImagesSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Name' }),
    given_name: z.string().nullable().exactOptional().openapi({ description: 'Given Name' }),
    family_name: z.string().nullable().exactOptional().openapi({ description: 'Family Name' }),
    alternate_names: z.array(z.string()).exactOptional().openapi({ description: 'Other Names' }),
    birthday: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Birthday Date ISO8601' }),
    favorites: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of users who have favorited this entry' }),
    about: z.string().nullable().exactOptional().openapi({ description: 'Biography' }),
  })
  .openapi({ description: 'Person Resource', required: [] })
  .openapi('Person')

const RandomSchema = z
  .object({
    data: z
      .array(z.union([AnimeSchema, MangaSchema, CharacterSchema, PersonSchema]))
      .exactOptional(),
  })
  .openapi({ description: 'Random Resources', required: [] })
  .openapi('Random')

const PaginationPlusSchema = z
  .object({
    pagination: z
      .object({
        last_visible_page: z.int().exactOptional(),
        has_next_page: z.boolean().exactOptional(),
        current_page: z.int().exactOptional(),
        items: z
          .object({
            count: z.int().exactOptional(),
            total: z.int().exactOptional(),
            per_page: z.int().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PaginationPlus')

const SchedulesSchema = z
  .object({ data: z.array(AnimeSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PaginationPlusSchema)
  .openapi({ description: 'Anime resources currently airing' })
  .openapi('Schedules')

const UsersSearchSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
            username: z.string().exactOptional().openapi({ description: 'MyAnimeList Username' }),
            images: UserImagesSchema.exactOptional(),
            last_online: z
              .string()
              .exactOptional()
              .openapi({ description: 'Last Online Date ISO8601' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'User Results' })
  .openapi('UsersSearch')

const SeasonsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            year: z.int().exactOptional().openapi({ description: 'Year' }),
            seasons: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'List of available seasons' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'List of available seasons', required: [] })
  .openapi('Seasons')

const AnimeReviewSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList review URL' }),
    type: z.string().exactOptional().openapi({ description: 'Entry type' }),
    reactions: z
      .object({
        overall: z.int().exactOptional().openapi({ description: 'Overall reaction count' }),
        nice: z.int().exactOptional().openapi({ description: 'Nice reaction count' }),
        love_it: z.int().exactOptional().openapi({ description: 'Love it reaction count' }),
        funny: z.int().exactOptional().openapi({ description: 'Funny reaction count' }),
        confusing: z.int().exactOptional().openapi({ description: 'Confusing reaction count' }),
        informative: z.int().exactOptional().openapi({ description: 'Informative reaction count' }),
        well_written: z
          .int()
          .exactOptional()
          .openapi({ description: 'Well written reaction count' }),
        creative: z.int().exactOptional().openapi({ description: 'Creative reaction count' }),
      })
      .exactOptional()
      .openapi({ description: 'User reaction count on the review', required: [] }),
    date: z.string().exactOptional().openapi({ description: 'Review created date ISO8601' }),
    review: z.string().exactOptional().openapi({ description: 'Review content' }),
    score: z.int().exactOptional().openapi({ description: 'Number of user votes on the Review' }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'Review tags' }),
    is_spoiler: z.boolean().exactOptional().openapi({ description: 'The review contains spoiler' }),
    is_preliminary: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The review was made before the entry was completed' }),
    episodes_watched: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of episodes watched' }),
  })
  .openapi({ required: [] })
  .openapi('AnimeReview')

const MangaReviewSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList review URL' }),
    type: z.string().exactOptional().openapi({ description: 'Entry type' }),
    reactions: z
      .object({
        overall: z.int().exactOptional().openapi({ description: 'Overall reaction count' }),
        nice: z.int().exactOptional().openapi({ description: 'Nice reaction count' }),
        love_it: z.int().exactOptional().openapi({ description: 'Love it reaction count' }),
        funny: z.int().exactOptional().openapi({ description: 'Funny reaction count' }),
        confusing: z.int().exactOptional().openapi({ description: 'Confusing reaction count' }),
        informative: z.int().exactOptional().openapi({ description: 'Informative reaction count' }),
        well_written: z
          .int()
          .exactOptional()
          .openapi({ description: 'Well written reaction count' }),
        creative: z.int().exactOptional().openapi({ description: 'Creative reaction count' }),
      })
      .exactOptional()
      .openapi({ description: 'User reaction count on the review', required: [] }),
    date: z.string().exactOptional().openapi({ description: 'Review created date ISO8601' }),
    review: z.string().exactOptional().openapi({ description: 'Review content' }),
    score: z.int().exactOptional().openapi({ description: 'Number of user votes on the Review' }),
    tags: z.array(z.string()).exactOptional().openapi({ description: 'Review tags' }),
    is_spoiler: z.boolean().exactOptional().openapi({ description: 'The review contains spoiler' }),
    is_preliminary: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The review was made before the entry was completed' }),
  })
  .openapi({ required: [] })
  .openapi('MangaReview')

const ReviewsCollectionSchema = z
  .object({ data: z.array(z.union([AnimeReviewSchema, MangaReviewSchema])).exactOptional() })
  .openapi({ description: 'Anime & Manga Reviews Resource', required: [] })
  .openapi('ReviewsCollection')

const UserMetaSchema = z
  .object({
    username: z.string().exactOptional().openapi({ description: 'MyAnimeList Username' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList Profile URL' }),
    images: UserImagesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserMeta')

const UserFriendsSchema = z
  .object({
    data: z
      .array(
        z
          .object({ user: UserMetaSchema.exactOptional() })
          .openapi({ required: [] })
          .and(
            z
              .object({
                last_online: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Last Online Date ISO8601 format' }),
                friends_since: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Friends Since Date ISO8601 format' }),
              })
              .openapi({ required: [] }),
          ),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'User Friends' })
  .openapi('UserFriends')

const UserClubsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
            name: z.string().exactOptional().openapi({ description: 'Club Name' }),
            url: z.string().exactOptional().openapi({ description: 'Club URL' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'User Clubs' })
  .openapi('UserClubs')

const AnimeMetaSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: AnimeImagesSchema.exactOptional(),
    title: z.string().exactOptional().openapi({ description: 'Entry title' }),
  })
  .openapi({ required: [] })
  .openapi('AnimeMeta')

const WatchEpisodesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            entry: AnimeMetaSchema.exactOptional(),
            episodes: z
              .array(
                z
                  .object({
                    mal_id: z.string().exactOptional().openapi({ description: 'MyAnimeList ID' }),
                    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
                    title: z.string().exactOptional().openapi({ description: 'Episode Title' }),
                    premium: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'For MyAnimeList Premium Users' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Recent Episodes (max 2 listed)' }),
            region_locked: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Region Locked Episode' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Watch Episodes' })
  .openapi('WatchEpisodes')

const TrailerImagesSchema = z
  .object({
    images: z
      .object({
        image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Default Image Size URL (120x90)' }),
        small_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Small Image Size URL (640x480)' }),
        medium_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Medium Image Size URL (320x180)' }),
        large_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Large Image Size URL (480x360)' }),
        maximum_image_url: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Maximum Image Size URL (1280x720)' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Youtube Images', required: [] })
  .openapi('TrailerImages')

const TrailerSchema = TrailerBaseSchema.and(TrailerImagesSchema)
  .openapi({ description: 'Youtube Details' })
  .openapi('Trailer')

const WatchPromosSchema = PaginationSchema.and(
  z
    .object({
      data: z
        .array(
          z
            .object({
              title: z.string().exactOptional().openapi({ description: 'Promo Title' }),
              entry: AnimeMetaSchema.exactOptional(),
              trailer: TrailerSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Watch Promos' })
  .openapi('WatchPromos')

const AnimeCharactersSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            character: z
              .object({
                mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
                url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
                images: CharacterImagesSchema.exactOptional(),
                name: z.string().exactOptional().openapi({ description: 'Character Name' }),
              })
              .exactOptional()
              .openapi({ description: 'Character details', required: [] }),
            role: z.string().exactOptional().openapi({ description: "Character's Role" }),
            voice_actors: z
              .array(
                z
                  .object({
                    person: z
                      .object({
                        mal_id: z.int().exactOptional(),
                        url: z.string().exactOptional(),
                        images: PeopleImagesSchema.exactOptional(),
                        name: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    language: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Anime Characters Resource', required: [] })
  .openapi('AnimeCharacters')

const AnimeSearchSchema = z
  .object({ data: z.array(AnimeSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PaginationPlusSchema)
  .openapi({ description: 'Anime Collection Resource' })
  .openapi('AnimeSearch')

const AnimeEpisodeSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    title: z.string().exactOptional().openapi({ description: 'Title' }),
    title_japanese: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Title Japanese' }),
    title_romanji: z.string().nullable().exactOptional().openapi({ description: 'title_romanji' }),
    duration: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Episode duration in seconds' }),
    aired: z.string().nullable().exactOptional().openapi({ description: 'Aired Date ISO8601' }),
    filler: z.boolean().exactOptional().openapi({ description: 'Filler episode' }),
    recap: z.boolean().exactOptional().openapi({ description: 'Recap episode' }),
    synopsis: z.string().nullable().exactOptional().openapi({ description: 'Episode Synopsis' }),
  })
  .openapi({ description: 'Anime Episode Resource', required: [] })
  .openapi('AnimeEpisode')

const AnimeFullSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: AnimeImagesSchema.exactOptional(),
    trailer: TrailerBaseSchema.exactOptional(),
    approved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the entry is pending approval on MAL or not' }),
    titles: z.array(TitleSchema).exactOptional().openapi({ description: 'All titles' }),
    title: z.string().exactOptional().openapi({ description: 'Title', deprecated: true }),
    title_english: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'English Title', deprecated: true }),
    title_japanese: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Japanese Title', deprecated: true }),
    title_synonyms: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Other Titles', deprecated: true }),
    type: AnimeTypesSchema.nullable().exactOptional(),
    source: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Original Material/Source adapted from' }),
    episodes: z.int().nullable().exactOptional().openapi({ description: 'Episode count' }),
    status: z
      .enum(['Finished Airing', 'Currently Airing', 'Not yet aired'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Airing status' }),
    airing: z.boolean().exactOptional().openapi({ description: 'Airing boolean' }),
    aired: DaterangeSchema.exactOptional(),
    duration: z.string().nullable().exactOptional().openapi({ description: 'Parsed raw duration' }),
    rating: z
      .enum([
        'G - All Ages',
        'PG - Children',
        'PG-13 - Teens 13 or older',
        'R - 17+ (violence & profanity)',
        'R+ - Mild Nudity',
        'Rx - Hentai',
      ])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Anime audience rating' }),
    score: z.float32().nullable().exactOptional().openapi({ description: 'Score' }),
    scored_by: z.int().nullable().exactOptional().openapi({ description: 'Number of users' }),
    rank: z.int().nullable().exactOptional().openapi({ description: 'Ranking' }),
    popularity: z.int().nullable().exactOptional().openapi({ description: 'Popularity' }),
    members: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of users who have added this entry to their list' }),
    favorites: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of users who have favorited this entry' }),
    synopsis: z.string().nullable().exactOptional().openapi({ description: 'Synopsis' }),
    background: z.string().nullable().exactOptional().openapi({ description: 'Background' }),
    season: z
      .enum(['summer', 'winter', 'spring', 'fall'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Season' }),
    year: z.int().nullable().exactOptional().openapi({ description: 'Year' }),
    broadcast: BroadcastSchema.exactOptional(),
    producers: z.array(MalUrlSchema).exactOptional(),
    licensors: z.array(MalUrlSchema).exactOptional(),
    studios: z.array(MalUrlSchema).exactOptional(),
    genres: z.array(MalUrlSchema).exactOptional(),
    explicit_genres: z.array(MalUrlSchema).exactOptional(),
    themes: z.array(MalUrlSchema).exactOptional(),
    demographics: z.array(MalUrlSchema).exactOptional(),
    relations: z
      .array(
        z
          .object({
            relation: z.string().exactOptional().openapi({ description: 'Relation type' }),
            entry: z.array(MalUrlSchema).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    theme: z
      .object({
        openings: z.array(z.string()).exactOptional(),
        endings: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    external: z
      .array(
        z
          .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    streaming: z
      .array(
        z
          .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Full anime Resource', required: [] })
  .openapi('AnimeFull')

const AnimeRelationsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            relation: z.string().exactOptional().openapi({ description: 'Relation type' }),
            entry: z.array(MalUrlSchema).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Anime Relations', required: [] })
  .openapi('AnimeRelations')

const AnimeStaffSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            person: z
              .object({
                mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
                url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
                images: PeopleImagesSchema.exactOptional(),
                name: z.string().exactOptional().openapi({ description: 'Name' }),
              })
              .exactOptional()
              .openapi({ description: 'Person details', required: [] }),
            positions: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'Staff Positions' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Anime Staff Resource', required: [] })
  .openapi('AnimeStaff')

const AnimeStatisticsSchema = z
  .object({
    data: z
      .object({
        watching: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users watching the resource' }),
        completed: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users who have completed the resource' }),
        on_hold: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users who have put the resource on hold' }),
        dropped: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users who have dropped the resource' }),
        plan_to_watch: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users who have planned to watch the resource' }),
        total: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Total number of users who have the resource added to their lists',
          }),
        scores: z
          .array(
            z
              .object({
                score: z.int().exactOptional().openapi({ description: 'Scoring value' }),
                votes: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Number of votes for this score' }),
                percentage: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Percentage of votes for this score' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Anime Statistics Resource', required: [] })
  .openapi('AnimeStatistics')

const AnimeThemesSchema = z
  .object({
    data: z
      .object({
        openings: z.array(z.string()).exactOptional(),
        endings: z.array(z.string()).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Anime Opening and Ending Themes', required: [] })
  .openapi('AnimeThemes')

const AnimeVideosSchema = z
  .object({
    data: z
      .object({
        promo: z
          .array(
            z
              .object({
                title: z.string().exactOptional().openapi({ description: 'Title' }),
                trailer: TrailerSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        episodes: z
          .array(
            z
              .object({
                mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
                url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
                title: z.string().exactOptional().openapi({ description: 'Title' }),
                episode: z.string().exactOptional().openapi({ description: 'Episode' }),
                images: CommonImagesSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        music_videos: z
          .array(
            z
              .object({
                title: z.string().exactOptional().openapi({ description: 'Title' }),
                video: TrailerSchema.exactOptional(),
                meta: z
                  .object({
                    title: z.string().nullable().exactOptional(),
                    author: z.string().nullable().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Anime Videos Resource', required: [] })
  .openapi('AnimeVideos')

const CharacterAnimeSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            role: z.string().exactOptional().openapi({ description: "Character's Role" }),
            anime: AnimeMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Character casted in anime', required: [] })
  .openapi('CharacterAnime')

const CharactersSearchSchema = z
  .object({ data: z.array(CharacterSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PaginationPlusSchema)
  .openapi({ description: 'Characters Search Resource' })
  .openapi('CharactersSearch')

const MangaMetaSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: MangaImagesSchema.exactOptional(),
    title: z.string().exactOptional().openapi({ description: 'Entry title' }),
  })
  .openapi({ required: [] })
  .openapi('MangaMeta')

const PersonMetaSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: PeopleImagesSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Entry name' }),
  })
  .openapi({ required: [] })
  .openapi('PersonMeta')

const CharacterFullSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: CharacterImagesSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Name' }),
    name_kanji: z.string().nullable().exactOptional().openapi({ description: 'Name' }),
    nicknames: z.array(z.string()).exactOptional().openapi({ description: 'Other Names' }),
    favorites: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of users who have favorited this entry' }),
    about: z.string().nullable().exactOptional().openapi({ description: 'Biography' }),
    anime: z
      .array(
        z
          .object({
            role: z.string().exactOptional().openapi({ description: "Character's Role" }),
            anime: AnimeMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    manga: z
      .array(
        z
          .object({
            role: z.string().exactOptional().openapi({ description: "Character's Role" }),
            manga: MangaMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    voices: z
      .array(
        z
          .object({
            language: z.string().exactOptional().openapi({ description: "Character's Role" }),
            person: PersonMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Character Resource', required: [] })
  .openapi('CharacterFull')

const CharacterMangaSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            role: z.string().exactOptional().openapi({ description: "Character's Role" }),
            manga: MangaMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Character casted in manga', required: [] })
  .openapi('CharacterManga')

const CharacterVoiceActorsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            language: z.string().exactOptional().openapi({ description: "Character's Role" }),
            person: PersonMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Character voice actors', required: [] })
  .openapi('CharacterVoiceActors')

const ClubSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    name: z.string().exactOptional().openapi({ description: 'Club name' }),
    url: z.string().exactOptional().openapi({ description: 'Club URL' }),
    images: CommonImagesSchema.exactOptional(),
    members: z.int().exactOptional().openapi({ description: 'Number of club members' }),
    category: z
      .enum([
        'actors & artists',
        'anime',
        'characters',
        'cities & neighborhoods',
        'companies',
        'conventions',
        'games',
        'japan',
        'manga',
        'music',
        'others',
        'schools',
      ])
      .exactOptional()
      .openapi({ description: 'Club Category' }),
    created: z.string().exactOptional().openapi({ description: 'Date Created ISO8601' }),
    access: z
      .enum(['public', 'private', 'secret'])
      .exactOptional()
      .openapi({ description: 'Club access' }),
  })
  .openapi({ description: 'Club Resource', required: [] })
  .openapi('Club')

const ClubsSearchSchema = z
  .object({ data: z.array(ClubSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Clubs Search Resource' })
  .openapi('ClubsSearch')

const ClubRelationsSchema = z
  .object({
    data: z
      .object({
        anime: z.array(MalUrlSchema).exactOptional(),
        manga: z.array(MalUrlSchema).exactOptional(),
        characters: z.array(MalUrlSchema).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Club Relations', required: [] })
  .openapi('ClubRelations')

const ClubStaffSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            url: z.string().exactOptional().openapi({ description: 'User URL' }),
            username: z.string().exactOptional().openapi({ description: "User's username" }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Club Staff Resource', required: [] })
  .openapi('ClubStaff')

const MalUrl_2Schema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    type: z.string().exactOptional().openapi({ description: 'Type of resource' }),
    title: z.string().exactOptional().openapi({ description: 'Resource Name/Title' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
  })
  .openapi({ description: 'Parsed URL Data', required: [] })
  .openapi('MalUrl_2')

const EntryMetaSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    image_url: z.string().exactOptional().openapi({ description: 'Image URL' }),
    name: z.string().exactOptional().openapi({ description: 'Entry Name/Title' }),
  })
  .openapi({ description: 'Entry Meta data', required: [] })
  .openapi('EntryMeta')

const RelationSchema = z
  .object({
    relation: z.string().exactOptional().openapi({ description: 'Relation type' }),
    entry: z.array(MalUrlSchema).exactOptional().openapi({ description: 'Related entries' }),
  })
  .openapi({ description: 'Related resources', required: [] })
  .openapi('Relation')

const UserByIdSchema = z
  .object({
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    username: z.string().exactOptional().openapi({ description: 'MyAnimeList Username' }),
  })
  .openapi({ description: 'User Meta By ID', required: [] })
  .openapi('UserById')

const CharacterMetaSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: CharacterImagesSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Entry name' }),
  })
  .openapi({ required: [] })
  .openapi('CharacterMeta')

const ExternalLinksSchema = z
  .object({
    data: z
      .array(
        z
          .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'External links', required: [] })
  .openapi('ExternalLinks')

const ForumSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
            url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
            title: z.string().exactOptional().openapi({ description: 'Title' }),
            date: z.string().exactOptional().openapi({ description: 'Post Date ISO8601' }),
            author_username: z
              .string()
              .exactOptional()
              .openapi({ description: 'Author MyAnimeList Username' }),
            author_url: z.string().exactOptional().openapi({ description: 'Author Profile URL' }),
            comments: z.int().exactOptional().openapi({ description: 'Comment count' }),
            last_comment: z
              .object({
                url: z.string().exactOptional().openapi({ description: 'Last comment URL' }),
                author_username: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Author MyAnimeList Username' }),
                author_url: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Author Profile URL' }),
                date: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({ description: 'Last comment date posted ISO8601' }),
              })
              .exactOptional()
              .openapi({ description: 'Last comment details', required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Forum Resource', required: [] })
  .openapi('Forum')

const GenreSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    name: z.string().exactOptional().openapi({ description: 'Genre Name' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    count: z.int().exactOptional().openapi({ description: "Genre's entry count" }),
  })
  .openapi({ description: 'Genre Resource', required: [] })
  .openapi('Genre')

const GenresSchema = z
  .object({ data: z.array(GenreSchema).exactOptional() })
  .openapi({ description: 'Genres Collection Resource', required: [] })
  .openapi('Genres')

const MagazineSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    name: z.string().exactOptional().openapi({ description: 'Magazine Name' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    count: z.int().exactOptional().openapi({ description: "Magazine's manga count" }),
  })
  .openapi({ description: 'Magazine Resource', required: [] })
  .openapi('Magazine')

const MagazinesSchema = z
  .object({ data: z.array(MagazineSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Magazine Collection Resource' })
  .openapi('Magazines')

const MangaCharactersSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            character: CharacterMetaSchema.exactOptional(),
            role: z.string().exactOptional().openapi({ description: "Character's Role" }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Manga Characters Resource', required: [] })
  .openapi('MangaCharacters')

const MangaSearchSchema = z
  .object({ data: z.array(MangaSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PaginationPlusSchema)
  .openapi({ description: 'Manga Search Resource' })
  .openapi('MangaSearch')

const MangaFullSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: MangaImagesSchema.exactOptional(),
    approved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the entry is pending approval on MAL or not' }),
    titles: z.array(TitleSchema).exactOptional().openapi({ description: 'All Titles' }),
    title: z.string().exactOptional().openapi({ description: 'Title', deprecated: true }),
    title_english: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'English Title', deprecated: true }),
    title_japanese: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Japanese Title', deprecated: true }),
    title_synonyms: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Other Titles', deprecated: true }),
    type: z
      .enum(['Manga', 'Novel', 'Light Novel', 'One-shot', 'Doujinshi', 'Manhua', 'Manhwa', 'OEL'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Manga Type' }),
    chapters: z.int().nullable().exactOptional().openapi({ description: 'Chapter count' }),
    volumes: z.int().nullable().exactOptional().openapi({ description: 'Volume count' }),
    status: z
      .enum(['Finished', 'Publishing', 'On Hiatus', 'Discontinued', 'Not yet published'])
      .exactOptional()
      .openapi({ description: 'Publishing status' }),
    publishing: z.boolean().exactOptional().openapi({ description: 'Publishing boolean' }),
    published: DaterangeSchema.exactOptional(),
    score: z.float32().nullable().exactOptional().openapi({ description: 'Score' }),
    scored_by: z.int().nullable().exactOptional().openapi({ description: 'Number of users' }),
    rank: z.int().nullable().exactOptional().openapi({ description: 'Ranking' }),
    popularity: z.int().nullable().exactOptional().openapi({ description: 'Popularity' }),
    members: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of users who have added this entry to their list' }),
    favorites: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of users who have favorited this entry' }),
    synopsis: z.string().nullable().exactOptional().openapi({ description: 'Synopsis' }),
    background: z.string().nullable().exactOptional().openapi({ description: 'Background' }),
    authors: z.array(MalUrlSchema).exactOptional(),
    serializations: z.array(MalUrlSchema).exactOptional(),
    genres: z.array(MalUrlSchema).exactOptional(),
    explicit_genres: z.array(MalUrlSchema).exactOptional(),
    themes: z.array(MalUrlSchema).exactOptional(),
    demographics: z.array(MalUrlSchema).exactOptional(),
    relations: z
      .array(
        z
          .object({
            relation: z.string().exactOptional().openapi({ description: 'Relation type' }),
            entry: z.array(MalUrlSchema).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    external: z
      .array(
        z
          .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Manga Resource', required: [] })
  .openapi('MangaFull')

const MangaStatisticsSchema = z
  .object({
    data: z
      .object({
        reading: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users reading the resource' }),
        completed: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users who have completed the resource' }),
        on_hold: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users who have put the resource on hold' }),
        dropped: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users who have dropped the resource' }),
        plan_to_read: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users who have planned to read the resource' }),
        total: z
          .int()
          .exactOptional()
          .openapi({
            description: 'Total number of users who have the resource added to their lists',
          }),
        scores: z
          .array(
            z
              .object({
                score: z.int().exactOptional().openapi({ description: 'Scoring value' }),
                votes: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Number of votes for this score' }),
                percentage: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Percentage of votes for this score' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Manga Statistics Resource', required: [] })
  .openapi('MangaStatistics')

const MoreinfoSchema = z
  .object({
    data: z
      .object({
        moreinfo: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Additional information on the entry' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'More Info Resource', required: [] })
  .openapi('Moreinfo')

const PersonAnimeSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            position: z.string().exactOptional().openapi({ description: "Person's position" }),
            anime: AnimeMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Person anime staff positions', required: [] })
  .openapi('PersonAnime')

const PeopleSearchSchema = z
  .object({ data: z.array(PersonSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PaginationPlusSchema)
  .openapi({ description: 'People Search' })
  .openapi('PeopleSearch')

const PersonFullSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    website_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Person's website URL" }),
    images: PeopleImagesSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Name' }),
    given_name: z.string().nullable().exactOptional().openapi({ description: 'Given Name' }),
    family_name: z.string().nullable().exactOptional().openapi({ description: 'Family Name' }),
    alternate_names: z.array(z.string()).exactOptional().openapi({ description: 'Other Names' }),
    birthday: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Birthday Date ISO8601' }),
    favorites: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of users who have favorited this entry' }),
    about: z.string().nullable().exactOptional().openapi({ description: 'Biography' }),
    anime: z
      .array(
        z
          .object({
            position: z.string().exactOptional().openapi({ description: "Person's position" }),
            anime: AnimeMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    manga: z
      .array(
        z
          .object({
            position: z.string().exactOptional().openapi({ description: "Person's position" }),
            manga: MangaMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    voices: z
      .array(
        z
          .object({
            role: z
              .string()
              .exactOptional()
              .openapi({ description: "Person's Character's role in the anime" }),
            anime: AnimeMetaSchema.exactOptional(),
            character: CharacterMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Person Resource', required: [] })
  .openapi('PersonFull')

const PersonMangaSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            position: z.string().exactOptional().openapi({ description: "Person's position" }),
            manga: MangaMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: "Person's mangaography", required: [] })
  .openapi('PersonManga')

const PersonVoiceActingRolesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            role: z
              .string()
              .exactOptional()
              .openapi({ description: "Person's Character's role in the anime" }),
            anime: AnimeMetaSchema.exactOptional(),
            character: CharacterMetaSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: "Person's voice acting roles", required: [] })
  .openapi('PersonVoiceActingRoles')

const PicturesSchema = z
  .object({
    data: z
      .array(z.object({ images: AnimeImagesSchema.exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
  })
  .openapi({ description: 'Pictures Resource', required: [] })
  .openapi('Pictures')

const PicturesVariantsSchema = z
  .object({
    data: z
      .array(z.object({ images: CommonImagesSchema.exactOptional() }).openapi({ required: [] }))
      .exactOptional(),
  })
  .openapi({ description: 'Pictures Resource', required: [] })
  .openapi('PicturesVariants')

const ProducerSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    titles: z.array(TitleSchema).exactOptional().openapi({ description: 'All titles' }),
    images: CommonImagesSchema.exactOptional(),
    favorites: z
      .int()
      .exactOptional()
      .openapi({ description: "Producers's member favorites count" }),
    count: z.int().exactOptional().openapi({ description: "Producers's anime count" }),
    established: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Established Date ISO8601' }),
    about: z.string().nullable().exactOptional().openapi({ description: 'About the Producer' }),
  })
  .openapi({ description: 'Producers Resource', required: [] })
  .openapi('Producer')

const ProducersSchema = z
  .object({ data: z.array(ProducerSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Producers Collection Resource' })
  .openapi('Producers')

const ProducerFullSchema = z
  .object({
    mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    titles: z.array(TitleSchema).exactOptional().openapi({ description: 'All titles' }),
    images: CommonImagesSchema.exactOptional(),
    favorites: z
      .int()
      .exactOptional()
      .openapi({ description: "Producers's member favorites count" }),
    count: z.int().exactOptional().openapi({ description: "Producers's anime count" }),
    established: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Established Date ISO8601' }),
    about: z.string().nullable().exactOptional().openapi({ description: 'About the Producer' }),
    external: z
      .array(
        z
          .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Producers Resource', required: [] })
  .openapi('ProducerFull')

const UserAboutSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            about: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'User About. NOTE: About information is customizable by users through BBCode on MyAnimeList. This means users can add multimedia content, different text sizes, etc. Due to this freeform, Jikan returns parsed HTML. Validate on your end!',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserAbout')

const UserFavoritesSchema = z
  .object({
    anime: z
      .array(
        z
          .object({ type: z.string().exactOptional(), start_year: z.int().exactOptional() })
          .openapi({ required: [] })
          .and(AnimeMetaSchema),
      )
      .exactOptional()
      .openapi({ description: 'Favorite Anime' }),
    manga: z
      .array(
        z
          .object({ type: z.string().exactOptional(), start_year: z.int().exactOptional() })
          .openapi({ required: [] })
          .and(MangaMetaSchema),
      )
      .exactOptional()
      .openapi({ description: 'Favorite Manga' }),
    characters: z
      .array(CharacterMetaSchema.and(MalUrl_2Schema))
      .exactOptional()
      .openapi({ description: 'Favorite Characters' }),
    people: z
      .array(CharacterMetaSchema)
      .exactOptional()
      .openapi({ description: 'Favorite People' }),
  })
  .openapi({ required: [] })
  .openapi('UserFavorites')

const UserProfileFullSchema = z
  .object({
    mal_id: z.int().nullable().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    username: z.string().exactOptional().openapi({ description: 'MyAnimeList Username' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: UserImagesSchema.exactOptional(),
    last_online: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last Online Date ISO8601' }),
    gender: z.string().nullable().exactOptional().openapi({ description: 'User Gender' }),
    birthday: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Birthday Date ISO8601' }),
    location: z.string().nullable().exactOptional().openapi({ description: 'Location' }),
    joined: z.string().nullable().exactOptional().openapi({ description: 'Joined Date ISO8601' }),
    statistics: z
      .object({
        anime: z
          .object({
            days_watched: z
              .float32()
              .exactOptional()
              .openapi({ description: 'Number of days spent watching Anime' }),
            mean_score: z.float32().exactOptional().openapi({ description: 'Mean Score' }),
            watching: z.int().exactOptional().openapi({ description: 'Anime Watching' }),
            completed: z.int().exactOptional().openapi({ description: 'Anime Completed' }),
            on_hold: z.int().exactOptional().openapi({ description: 'Anime On-Hold' }),
            dropped: z.int().exactOptional().openapi({ description: 'Anime Dropped' }),
            plan_to_watch: z
              .int()
              .exactOptional()
              .openapi({ description: 'Anime Planned to Watch' }),
            total_entries: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total Anime entries on User list' }),
            rewatched: z.int().exactOptional().openapi({ description: 'Anime re-watched' }),
            episodes_watched: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of Anime Episodes Watched' }),
          })
          .exactOptional()
          .openapi({ description: 'Anime Statistics', required: [] }),
        manga: z
          .object({
            days_read: z
              .float32()
              .exactOptional()
              .openapi({ description: 'Number of days spent reading Manga' }),
            mean_score: z.float32().exactOptional().openapi({ description: 'Mean Score' }),
            reading: z.int().exactOptional().openapi({ description: 'Manga Reading' }),
            completed: z.int().exactOptional().openapi({ description: 'Manga Completed' }),
            on_hold: z.int().exactOptional().openapi({ description: 'Manga On-Hold' }),
            dropped: z.int().exactOptional().openapi({ description: 'Manga Dropped' }),
            plan_to_read: z.int().exactOptional().openapi({ description: 'Manga Planned to Read' }),
            total_entries: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total Manga entries on User list' }),
            reread: z.int().exactOptional().openapi({ description: 'Manga re-read' }),
            chapters_read: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of Manga Chapters Read' }),
            volumes_read: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of Manga Volumes Read' }),
          })
          .exactOptional()
          .openapi({ description: 'Manga Statistics', required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    external: z
      .array(
        z
          .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Transform the resource into an array.', required: [] })
  .openapi('UserProfileFull')

const HistorySchema = z
  .object({
    entry: MalUrlSchema.exactOptional(),
    increment: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of episodes/chapters watched/read' }),
    date: z.string().exactOptional().openapi({ description: 'Date ISO8601' }),
  })
  .openapi({ description: 'Transform the resource into an array.', required: [] })
  .openapi('History')

const UserHistorySchema = z
  .object({ data: z.array(HistorySchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UserHistory')

const UserUpdatesSchema = z
  .object({
    data: z
      .object({
        anime: z
          .array(
            z
              .object({ entry: AnimeMetaSchema.exactOptional() })
              .openapi({ required: [] })
              .and(
                z
                  .object({
                    score: z.int().nullable().exactOptional(),
                    status: z.string().exactOptional(),
                    episodes_seen: z.int().nullable().exactOptional(),
                    episodes_total: z.int().nullable().exactOptional(),
                    date: z.string().exactOptional().openapi({ description: 'ISO8601 format' }),
                  })
                  .openapi({ required: [] }),
              ),
          )
          .exactOptional()
          .openapi({ description: 'Last updated Anime' }),
        manga: z
          .array(
            z
              .object({ entry: MangaMetaSchema.exactOptional() })
              .openapi({ required: [] })
              .and(
                z
                  .object({
                    score: z.int().nullable().exactOptional(),
                    status: z.string().exactOptional(),
                    chapters_read: z.int().nullable().exactOptional(),
                    chapters_total: z.int().nullable().exactOptional(),
                    volumes_read: z.int().nullable().exactOptional(),
                    volumes_total: z.int().nullable().exactOptional(),
                    date: z.string().exactOptional().openapi({ description: 'ISO8601 format' }),
                  })
                  .openapi({ required: [] }),
              ),
          )
          .exactOptional()
          .openapi({ description: 'Last updated Manga' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('UserUpdates')

const UserProfileSchema = z
  .object({
    mal_id: z.int().nullable().exactOptional().openapi({ description: 'MyAnimeList ID' }),
    username: z.string().exactOptional().openapi({ description: 'MyAnimeList Username' }),
    url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
    images: UserImagesSchema.exactOptional(),
    last_online: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last Online Date ISO8601' }),
    gender: z.string().nullable().exactOptional().openapi({ description: 'User Gender' }),
    birthday: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Birthday Date ISO8601' }),
    location: z.string().nullable().exactOptional().openapi({ description: 'Location' }),
    joined: z.string().nullable().exactOptional().openapi({ description: 'Joined Date ISO8601' }),
  })
  .openapi({ required: [] })
  .openapi('UserProfile')

const UsersTempSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            mal_id: z.int().exactOptional().openapi({ description: 'MyAnimeList ID' }),
            username: z.string().exactOptional().openapi({ description: 'MyAnimeList Username' }),
            url: z.string().exactOptional().openapi({ description: 'MyAnimeList URL' }),
            images: z
              .object({
                jpg: z
                  .object({
                    image_url: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Image URL JPG (225x335)' }),
                  })
                  .exactOptional()
                  .openapi({ description: 'Available images in JPG', required: [] }),
                webp: z
                  .object({
                    image_url: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Image URL WEBP (225x335)' }),
                  })
                  .exactOptional()
                  .openapi({ description: 'Available images in WEBP', required: [] }),
              })
              .exactOptional()
              .openapi({ description: 'Images', required: [] }),
            last_online: z
              .string()
              .exactOptional()
              .openapi({ description: 'Last Online Date ISO8601' }),
            gender: z.string().exactOptional().openapi({ description: 'User Gender' }),
            birthday: z.string().exactOptional().openapi({ description: 'Birthday Date ISO8601' }),
            location: z.string().exactOptional().openapi({ description: 'Location' }),
            joined: z.string().exactOptional().openapi({ description: 'Joined Date ISO8601' }),
            anime_stats: z
              .object({
                days_watched: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Number of days spent watching Anime' }),
                mean_score: z.float32().exactOptional().openapi({ description: 'Mean Score' }),
                watching: z.int().exactOptional().openapi({ description: 'Anime Watching' }),
                completed: z.int().exactOptional().openapi({ description: 'Anime Completed' }),
                on_hold: z.int().exactOptional().openapi({ description: 'Anime On-Hold' }),
                dropped: z.int().exactOptional().openapi({ description: 'Anime Dropped' }),
                plan_to_watch: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Anime Planned to Watch' }),
                total_entries: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Total Anime entries on User list' }),
                rewatched: z.int().exactOptional().openapi({ description: 'Anime re-watched' }),
                episodes_watched: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Number of Anime Episodes Watched' }),
              })
              .exactOptional()
              .openapi({ description: 'Anime Stats', required: [] }),
            manga_stats: z
              .object({
                days_read: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Number of days spent reading Manga' }),
                mean_score: z.float32().exactOptional().openapi({ description: 'Mean Score' }),
                reading: z.int().exactOptional().openapi({ description: 'Manga Reading' }),
                completed: z.int().exactOptional().openapi({ description: 'Manga Completed' }),
                on_hold: z.int().exactOptional().openapi({ description: 'Manga On-Hold' }),
                dropped: z.int().exactOptional().openapi({ description: 'Manga Dropped' }),
                plan_to_read: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Manga Planned to Read' }),
                total_entries: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Total Manga entries on User list' }),
                reread: z.int().exactOptional().openapi({ description: 'Manga re-read' }),
                chapters_read: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Number of Manga Chapters Read' }),
                volumes_read: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Number of Manga Volumes Read' }),
              })
              .exactOptional()
              .openapi({ description: 'Manga Stats', required: [] }),
            favorites: z
              .object({
                anime: z
                  .array(EntryMetaSchema)
                  .exactOptional()
                  .openapi({ description: 'Favorite Anime' }),
                manga: z
                  .array(EntryMetaSchema)
                  .exactOptional()
                  .openapi({ description: 'Favorite Manga' }),
                characters: z
                  .array(EntryMetaSchema)
                  .exactOptional()
                  .openapi({ description: 'Favorite Characters' }),
                people: z
                  .array(EntryMetaSchema)
                  .exactOptional()
                  .openapi({ description: 'Favorite People' }),
              })
              .exactOptional()
              .openapi({ description: 'Favorite entries', required: [] }),
            about: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'User About. NOTE: About information is customizable by users through BBCode on MyAnimeList. This means users can add multimedia content, different text sizes, etc. Due to this freeform, Jikan returns parsed HTML. Validate on your end!',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Transform the resource into an array.', required: [] })
  .openapi('UsersTemp')

const UserStatisticsSchema = z
  .object({
    data: z
      .object({
        anime: z
          .object({
            days_watched: z
              .float32()
              .exactOptional()
              .openapi({ description: 'Number of days spent watching Anime' }),
            mean_score: z.float32().exactOptional().openapi({ description: 'Mean Score' }),
            watching: z.int().exactOptional().openapi({ description: 'Anime Watching' }),
            completed: z.int().exactOptional().openapi({ description: 'Anime Completed' }),
            on_hold: z.int().exactOptional().openapi({ description: 'Anime On-Hold' }),
            dropped: z.int().exactOptional().openapi({ description: 'Anime Dropped' }),
            plan_to_watch: z
              .int()
              .exactOptional()
              .openapi({ description: 'Anime Planned to Watch' }),
            total_entries: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total Anime entries on User list' }),
            rewatched: z.int().exactOptional().openapi({ description: 'Anime re-watched' }),
            episodes_watched: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of Anime Episodes Watched' }),
          })
          .exactOptional()
          .openapi({ description: 'Anime Statistics', required: [] }),
        manga: z
          .object({
            days_read: z
              .float32()
              .exactOptional()
              .openapi({ description: 'Number of days spent reading Manga' }),
            mean_score: z.float32().exactOptional().openapi({ description: 'Mean Score' }),
            reading: z.int().exactOptional().openapi({ description: 'Manga Reading' }),
            completed: z.int().exactOptional().openapi({ description: 'Manga Completed' }),
            on_hold: z.int().exactOptional().openapi({ description: 'Manga On-Hold' }),
            dropped: z.int().exactOptional().openapi({ description: 'Manga Dropped' }),
            plan_to_read: z.int().exactOptional().openapi({ description: 'Manga Planned to Read' }),
            total_entries: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total Manga entries on User list' }),
            reread: z.int().exactOptional().openapi({ description: 'Manga re-read' }),
            chapters_read: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of Manga Chapters Read' }),
            volumes_read: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of Manga Volumes Read' }),
          })
          .exactOptional()
          .openapi({ description: 'Manga Statistics', required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('UserStatistics')

const RecommendationsSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            mal_id: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "MAL IDs of recommendations is both of the MAL ID's with a `-` delimiter",
              }),
            entry: z
              .array(z.union([AnimeMetaSchema, MangaMetaSchema]))
              .exactOptional()
              .openapi({
                description: 'Array of 2 entries that are being recommended to each other',
              }),
            content: z
              .string()
              .exactOptional()
              .openapi({ description: 'Recommendation context provided by the user' }),
            user: UserByIdSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Recommendations' })
  .openapi('Recommendations')

const EntryRecommendationsSchema = z
  .object({
    data: z
      .object({
        url: z.string().exactOptional().openapi({ description: 'Recommendation MyAnimeList URL' }),
        votes: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of users who have recommended this entry' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Entry Recommendations Resource', required: [] })
  .openapi('EntryRecommendations')

const AnimeReviewsSchema = z
  .object({
    data: z
      .array(
        z
          .object({ user: UserMetaSchema.exactOptional() })
          .openapi({ required: [] })
          .and(AnimeReviewSchema),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Anime Reviews Resource' })
  .openapi('AnimeReviews')

const MangaReviewsSchema = z
  .object({
    data: z
      .array(
        z
          .object({ user: UserMetaSchema.exactOptional() })
          .openapi({ required: [] })
          .and(MangaReviewSchema),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Manga Reviews Resource' })
  .openapi('MangaReviews')

const StreamingLinksSchema = z
  .object({
    data: z
      .array(
        z
          .object({ name: z.string().exactOptional(), url: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'Streaming links', required: [] })
  .openapi('StreamingLinks')

const AnimeUserupdatesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            user: UserMetaSchema.exactOptional(),
            score: z.int().nullable().exactOptional().openapi({ description: 'User Score' }),
            status: z.string().exactOptional().openapi({ description: 'User list status' }),
            episodes_seen: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Number of episodes seen' }),
            episodes_total: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Total number of episodes' }),
            date: z.string().exactOptional().openapi({ description: 'Last updated date ISO8601' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Anime User Updates Resource' })
  .openapi('AnimeUserupdates')

const MangaUserupdatesSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            user: UserMetaSchema.exactOptional(),
            score: z.int().nullable().exactOptional().openapi({ description: 'User Score' }),
            status: z.string().exactOptional().openapi({ description: 'User list status' }),
            volumes_read: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of volumes read' }),
            volumes_total: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of volumes' }),
            chapters_read: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of chapters read' }),
            chapters_total: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of chapters' }),
            date: z.string().exactOptional().openapi({ description: 'Last updated date ISO8601' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .and(PaginationSchema)
  .openapi({ description: 'Manga User Updates Resource' })
  .openapi('MangaUserupdates')

const _400Response = {
  description: 'Error: Bad request. When required parameters were not supplied.',
}

const ContinuingParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'continuing',
      in: 'query',
      description:
        'This is a flag. When supplied it will include entries which are continuing from previous seasons. MAL includes these items on the seasons view in the &#8243;TV (continuing)&#8243; section. (Example: https://myanimelist.net/anime/season/2024/winter) <br />Example usage: `?continuing`',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const KidsParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'kids',
      in: 'query',
      description:
        'This is a flag. When supplied it will include entries with the Kids genres in specific endpoints that filter them out by default. You do not need to pass a value to it. e.g usage: `?kids`',
      required: false,
      schema: { type: 'boolean' },
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
    z.int(),
  )
  .exactOptional()
  .openapi({ param: { name: 'limit', in: 'query', schema: { type: 'integer' }, required: false } })

const PageParamsSchema = z
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
  .openapi({ param: { name: 'page', in: 'query', schema: { type: 'integer' }, required: false } })

const PreliminaryParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'preliminary',
      in: 'query',
      description:
        'Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const SfwParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'sfw',
      in: 'query',
      description:
        "'Safe For Work'. This is a flag. When supplied it will filter out entries according to the SFW Policy. You do not need to pass a value to it. e.g usage: `?sfw`",
      required: false,
      schema: { type: 'boolean' },
    },
  })

const SpoilersParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'spoilers',
      in: 'query',
      description:
        'Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const UnapprovedParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'unapproved',
      in: 'query',
      description:
        'This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`',
      required: false,
      schema: { type: 'boolean' },
    },
  })

export const getAnimeIdFullRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/full',
  tags: ['anime'],
  operationId: 'getAnimeFullById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns complete anime resource data',
      content: {
        'application/json': {
          schema: z.object({ data: AnimeFullSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdRoute = createRoute({
  method: 'get',
  path: '/anime/{id}',
  tags: ['anime'],
  operationId: 'getAnimeById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime resource',
      content: {
        'application/json': {
          schema: z.object({ data: AnimeSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdCharactersRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/characters',
  tags: ['anime'],
  operationId: 'getAnimeCharacters',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime characters resource',
      content: { 'application/json': { schema: AnimeCharactersSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdStaffRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/staff',
  tags: ['anime'],
  operationId: 'getAnimeStaff',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime staff resource',
      content: { 'application/json': { schema: AnimeStaffSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdEpisodesRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/episodes',
  tags: ['anime'],
  operationId: 'getAnimeEpisodes',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a list of anime episodes',
      content: { 'application/json': { schema: AnimeEpisodesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdEpisodesEpisodeRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/episodes/{episode}',
  tags: ['anime'],
  operationId: 'getAnimeEpisodeById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
      episode: z
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
          param: { name: 'episode', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a single anime episode resource',
      content: {
        'application/json': {
          schema: z.object({ data: AnimeEpisodeSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdNewsRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/news',
  tags: ['anime'],
  operationId: 'getAnimeNews',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a list of news articles related to the entry',
      content: { 'application/json': { schema: AnimeNewsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdForumRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/forum',
  tags: ['anime'],
  operationId: 'getAnimeForum',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      filter: z
        .enum(['all', 'episode', 'other'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Filter topics',
            required: false,
            schema: { type: 'string', enum: ['all', 'episode', 'other'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of forum topics related to the entry',
      content: { 'application/json': { schema: ForumSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdVideosRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/videos',
  tags: ['anime'],
  operationId: 'getAnimeVideos',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns videos related to the entry',
      content: { 'application/json': { schema: AnimeVideosSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdVideosEpisodesRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/videos/episodes',
  tags: ['anime'],
  operationId: 'getAnimeVideosEpisodes',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns episode videos related to the entry',
      content: { 'application/json': { schema: AnimeVideosEpisodesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdPicturesRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/pictures',
  tags: ['anime'],
  operationId: 'getAnimePictures',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns pictures related to the entry',
      content: { 'application/json': { schema: PicturesVariantsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/statistics',
  tags: ['anime'],
  operationId: 'getAnimeStatistics',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime statistics',
      content: { 'application/json': { schema: AnimeStatisticsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdMoreinfoRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/moreinfo',
  tags: ['anime'],
  operationId: 'getAnimeMoreInfo',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime statistics',
      content: { 'application/json': { schema: MoreinfoSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdRecommendationsRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/recommendations',
  tags: ['anime'],
  operationId: 'getAnimeRecommendations',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime recommendations',
      content: { 'application/json': { schema: EntryRecommendationsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdUserupdatesRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/userupdates',
  tags: ['anime'],
  operationId: 'getAnimeUserUpdates',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a list of users who have added/updated/removed the entry on their list',
      content: { 'application/json': { schema: AnimeUserupdatesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdReviewsRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/reviews',
  tags: ['anime'],
  operationId: 'getAnimeReviews',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      page: PageParamsSchema,
      preliminary: PreliminaryParamsSchema,
      spoilers: SpoilersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns anime reviews',
      content: { 'application/json': { schema: AnimeReviewsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdRelationsRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/relations',
  tags: ['anime'],
  operationId: 'getAnimeRelations',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime relations',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(RelationSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getAnimeIdThemesRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/themes',
  tags: ['anime'],
  operationId: 'getAnimeThemes',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime themes',
      content: { 'application/json': { schema: AnimeThemesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdExternalRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/external',
  tags: ['anime'],
  operationId: 'getAnimeExternal',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime external links',
      content: { 'application/json': { schema: ExternalLinksSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeIdStreamingRoute = createRoute({
  method: 'get',
  path: '/anime/{id}/streaming',
  tags: ['anime'],
  operationId: 'getAnimeStreaming',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime streaming links',
      content: { 'application/json': { schema: ExternalLinksSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getCharactersIdFullRoute = createRoute({
  method: 'get',
  path: '/characters/{id}/full',
  tags: ['characters'],
  operationId: 'getCharacterFullById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns complete character resource data',
      content: {
        'application/json': {
          schema: z.object({ data: CharacterFullSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getCharactersIdRoute = createRoute({
  method: 'get',
  path: '/characters/{id}',
  tags: ['characters'],
  operationId: 'getCharacterById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns character resource',
      content: {
        'application/json': {
          schema: z.object({ data: CharacterSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getCharactersIdAnimeRoute = createRoute({
  method: 'get',
  path: '/characters/{id}/anime',
  tags: ['characters'],
  operationId: 'getCharacterAnime',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime that character is in',
      content: { 'application/json': { schema: CharacterAnimeSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getCharactersIdMangaRoute = createRoute({
  method: 'get',
  path: '/characters/{id}/manga',
  tags: ['characters'],
  operationId: 'getCharacterManga',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns manga that character is in',
      content: { 'application/json': { schema: CharacterMangaSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getCharactersIdVoicesRoute = createRoute({
  method: 'get',
  path: '/characters/{id}/voices',
  tags: ['characters'],
  operationId: 'getCharacterVoiceActors',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns the character's voice actors",
      content: { 'application/json': { schema: CharacterVoiceActorsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getCharactersIdPicturesRoute = createRoute({
  method: 'get',
  path: '/characters/{id}/pictures',
  tags: ['characters'],
  operationId: 'getCharacterPictures',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns pictures related to the entry',
      content: { 'application/json': { schema: CharacterPicturesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getClubsIdRoute = createRoute({
  method: 'get',
  path: '/clubs/{id}',
  tags: ['clubs'],
  operationId: 'getClubsById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns Club Resource',
      content: {
        'application/json': {
          schema: z.object({ data: ClubSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getClubsIdMembersRoute = createRoute({
  method: 'get',
  path: '/clubs/{id}/members',
  tags: ['clubs'],
  operationId: 'getClubMembers',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns Club Members Resource',
      content: { 'application/json': { schema: PaginationSchema.and(ClubMemberSchema) } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getClubsIdStaffRoute = createRoute({
  method: 'get',
  path: '/clubs/{id}/staff',
  tags: ['clubs'],
  operationId: 'getClubStaff',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns Club Staff',
      content: { 'application/json': { schema: ClubStaffSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getClubsIdRelationsRoute = createRoute({
  method: 'get',
  path: '/clubs/{id}/relations',
  tags: ['clubs'],
  operationId: 'getClubRelations',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns Club Relations',
      content: { 'application/json': { schema: ClubRelationsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getGenresAnimeRoute = createRoute({
  method: 'get',
  path: '/genres/anime',
  tags: ['genres'],
  operationId: 'getAnimeGenres',
  request: {
    query: z.object({
      filter: GenreQueryFilterSchema.openapi({
        param: {
          name: 'filter',
          in: 'query',
          schema: { $ref: '#/components/schemas/genre_query_filter' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Returns entry genres, explicit_genres, themes and demographics',
      content: { 'application/json': { schema: GenresSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getGenresMangaRoute = createRoute({
  method: 'get',
  path: '/genres/manga',
  tags: ['genres'],
  operationId: 'getMangaGenres',
  request: {
    query: z.object({
      filter: GenreQueryFilterSchema.openapi({
        param: {
          name: 'filter',
          in: 'query',
          schema: { $ref: '#/components/schemas/genre_query_filter' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Returns entry genres, explicit_genres, themes and demographics',
      content: { 'application/json': { schema: GenresSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMagazinesRoute = createRoute({
  method: 'get',
  path: '/magazines',
  tags: ['magazines'],
  operationId: 'getMagazines',
  request: {
    query: z.object({
      page: PageParamsSchema,
      limit: LimitParamsSchema,
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      order_by: MagazinesQueryOrderbySchema.openapi({
        param: {
          name: 'order_by',
          in: 'query',
          schema: { $ref: '#/components/schemas/magazines_query_orderby' },
          required: false,
        },
      }).exactOptional(),
      sort: SearchQuerySortSchema.openapi({
        param: {
          name: 'sort',
          in: 'query',
          schema: { $ref: '#/components/schemas/search_query_sort' },
          required: false,
        },
      }).exactOptional(),
      letter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'letter',
            in: 'query',
            description: 'Return entries starting with the given letter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns magazines collection',
      content: { 'application/json': { schema: MagazinesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdFullRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/full',
  tags: ['manga'],
  operationId: 'getMangaFullById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns complete manga resource data',
      content: {
        'application/json': {
          schema: z.object({ data: MangaFullSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdRoute = createRoute({
  method: 'get',
  path: '/manga/{id}',
  tags: ['manga'],
  operationId: 'getMangaById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns pictures related to the entry',
      content: {
        'application/json': {
          schema: z.object({ data: MangaSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdCharactersRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/characters',
  tags: ['manga'],
  operationId: 'getMangaCharacters',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns manga characters resource',
      content: { 'application/json': { schema: MangaCharactersSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdNewsRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/news',
  tags: ['manga'],
  operationId: 'getMangaNews',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns a list of manga news topics',
      content: { 'application/json': { schema: MangaNewsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdForumRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/forum',
  tags: ['manga'],
  operationId: 'getMangaTopics',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      filter: z
        .enum(['all', 'episode', 'other'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Filter topics',
            required: false,
            schema: { type: 'string', enum: ['all', 'episode', 'other'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of manga forum topics',
      content: { 'application/json': { schema: ForumSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdPicturesRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/pictures',
  tags: ['manga'],
  operationId: 'getMangaPictures',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of manga pictures',
      content: { 'application/json': { schema: MangaPicturesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdStatisticsRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/statistics',
  tags: ['manga'],
  operationId: 'getMangaStatistics',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns anime statistics',
      content: { 'application/json': { schema: MangaStatisticsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdMoreinfoRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/moreinfo',
  tags: ['manga'],
  operationId: 'getMangaMoreInfo',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns manga moreinfo',
      content: { 'application/json': { schema: MoreinfoSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdRecommendationsRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/recommendations',
  tags: ['manga'],
  operationId: 'getMangaRecommendations',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns manga recommendations',
      content: { 'application/json': { schema: EntryRecommendationsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdUserupdatesRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/userupdates',
  tags: ['manga'],
  operationId: 'getMangaUserUpdates',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns manga user updates',
      content: { 'application/json': { schema: MangaUserupdatesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdReviewsRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/reviews',
  tags: ['manga'],
  operationId: 'getMangaReviews',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      page: PageParamsSchema,
      preliminary: PreliminaryParamsSchema,
      spoilers: SpoilersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns manga reviews',
      content: { 'application/json': { schema: MangaReviewsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdRelationsRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/relations',
  tags: ['manga'],
  operationId: 'getMangaRelations',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns manga relations',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(RelationSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaIdExternalRoute = createRoute({
  method: 'get',
  path: '/manga/{id}/external',
  tags: ['manga'],
  operationId: 'getMangaExternal',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns manga external links',
      content: { 'application/json': { schema: ExternalLinksSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getPeopleIdFullRoute = createRoute({
  method: 'get',
  path: '/people/{id}/full',
  tags: ['people'],
  operationId: 'getPersonFullById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns complete character resource data',
      content: {
        'application/json': {
          schema: z.object({ data: PersonFullSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getPeopleIdRoute = createRoute({
  method: 'get',
  path: '/people/{id}',
  tags: ['people'],
  operationId: 'getPersonById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns pictures related to the entry',
      content: {
        'application/json': {
          schema: z.object({ data: PersonSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getPeopleIdAnimeRoute = createRoute({
  method: 'get',
  path: '/people/{id}/anime',
  tags: ['people'],
  operationId: 'getPersonAnime',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns person's anime staff positions",
      content: { 'application/json': { schema: PersonAnimeSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getPeopleIdVoicesRoute = createRoute({
  method: 'get',
  path: '/people/{id}/voices',
  tags: ['people'],
  operationId: 'getPersonVoices',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns person's voice acting roles",
      content: { 'application/json': { schema: PersonVoiceActingRolesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getPeopleIdMangaRoute = createRoute({
  method: 'get',
  path: '/people/{id}/manga',
  tags: ['people'],
  operationId: 'getPersonManga',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns person's published manga works",
      content: { 'application/json': { schema: PersonMangaSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getPeopleIdPicturesRoute = createRoute({
  method: 'get',
  path: '/people/{id}/pictures',
  tags: ['people'],
  operationId: 'getPersonPictures',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a list of pictures of the person',
      content: { 'application/json': { schema: PersonPicturesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getProducersIdRoute = createRoute({
  method: 'get',
  path: '/producers/{id}',
  tags: ['producers'],
  operationId: 'getProducerById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns producer resource',
      content: {
        'application/json': {
          schema: z.object({ data: ProducerSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getProducersIdFullRoute = createRoute({
  method: 'get',
  path: '/producers/{id}/full',
  tags: ['producers'],
  operationId: 'getProducerFullById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns producer resource',
      content: {
        'application/json': {
          schema: z.object({ data: ProducerFullSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getProducersIdExternalRoute = createRoute({
  method: 'get',
  path: '/producers/{id}/external',
  tags: ['producers'],
  operationId: 'getProducerExternal',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns producer's external links",
      content: { 'application/json': { schema: ExternalLinksSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getRandomAnimeRoute = createRoute({
  method: 'get',
  path: '/random/anime',
  tags: ['random'],
  operationId: 'getRandomAnime',
  responses: {
    200: {
      description: 'Returns a random anime resource',
      content: {
        'application/json': {
          schema: z.object({ data: AnimeSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getRandomMangaRoute = createRoute({
  method: 'get',
  path: '/random/manga',
  tags: ['random'],
  operationId: 'getRandomManga',
  responses: {
    200: {
      description: 'Returns a random manga resource',
      content: {
        'application/json': {
          schema: z.object({ data: MangaSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getRandomCharactersRoute = createRoute({
  method: 'get',
  path: '/random/characters',
  tags: ['random'],
  operationId: 'getRandomCharacters',
  responses: {
    200: {
      description: 'Returns a random character resource',
      content: {
        'application/json': {
          schema: z.object({ data: CharacterSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getRandomPeopleRoute = createRoute({
  method: 'get',
  path: '/random/people',
  tags: ['random'],
  operationId: 'getRandomPeople',
  responses: {
    200: {
      description: 'Returns a random person resource',
      content: {
        'application/json': {
          schema: z.object({ data: PersonSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getRandomUsersRoute = createRoute({
  method: 'get',
  path: '/random/users',
  tags: ['random'],
  operationId: 'getRandomUsers',
  responses: {
    200: {
      description: 'Returns a random user profile resource',
      content: {
        'application/json': {
          schema: z.object({ data: UserProfileSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getRecommendationsAnimeRoute = createRoute({
  method: 'get',
  path: '/recommendations/anime',
  tags: ['recommendations'],
  operationId: 'getRecentAnimeRecommendations',
  request: { query: z.object({ page: PageParamsSchema }) },
  responses: {
    200: {
      description: 'Returns recent anime recommendations',
      content: { 'application/json': { schema: RecommendationsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getRecommendationsMangaRoute = createRoute({
  method: 'get',
  path: '/recommendations/manga',
  tags: ['recommendations'],
  operationId: 'getRecentMangaRecommendations',
  request: { query: z.object({ page: PageParamsSchema }) },
  responses: {
    200: {
      description: 'Returns recent manga recommendations',
      content: { 'application/json': { schema: RecommendationsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getReviewsAnimeRoute = createRoute({
  method: 'get',
  path: '/reviews/anime',
  tags: ['reviews'],
  operationId: 'getRecentAnimeReviews',
  request: {
    query: z.object({
      page: PageParamsSchema,
      preliminary: PreliminaryParamsSchema,
      spoilers: SpoilersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns recent anime reviews',
      content: { 'application/json': { schema: z.any() } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getReviewsMangaRoute = createRoute({
  method: 'get',
  path: '/reviews/manga',
  tags: ['reviews'],
  operationId: 'getRecentMangaReviews',
  request: {
    query: z.object({
      page: PageParamsSchema,
      preliminary: PreliminaryParamsSchema,
      spoilers: SpoilersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns recent manga reviews',
      content: { 'application/json': { schema: z.any() } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getSchedulesRoute = createRoute({
  method: 'get',
  path: '/schedules',
  tags: ['schedules'],
  operationId: 'getSchedules',
  request: {
    query: z.object({
      filter: z
        .enum([
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
          'sunday',
          'unknown',
          'other',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Filter by day',
            required: false,
            schema: {
              type: 'string',
              enum: [
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday',
                'sunday',
                'unknown',
                'other',
              ],
            },
          },
        }),
      kids: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            name: 'kids',
            in: 'query',
            description:
              'When supplied, it will filter entries with the `Kids` Genre Demographic. When supplied as `kids=true`, it will return only Kid entries and when supplied as `kids=false`, it will filter out any Kid entries. Defaults to `false`.',
            required: false,
            schema: { type: 'string', enum: ['true', 'false'] },
          },
        }),
      sfw: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sfw',
            in: 'query',
            description:
              "'Safe For Work'. When supplied, it will filter entries with the `Hentai` Genre. When supplied as `sfw=true`, it will return only SFW entries and when supplied as `sfw=false`, it will filter out any Hentai entries. Defaults to `false`.",
            required: false,
            schema: { type: 'string', enum: ['true', 'false'] },
          },
        }),
      unapproved: UnapprovedParamsSchema,
      page: PageParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns weekly schedule',
      content: { 'application/json': { schema: SchedulesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getAnimeRoute = createRoute({
  method: 'get',
  path: '/anime',
  tags: ['anime'],
  operationId: 'getAnimeSearch',
  request: {
    query: z.object({
      unapproved: UnapprovedParamsSchema,
      page: PageParamsSchema,
      limit: LimitParamsSchema,
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      type: AnimeSearchQueryTypeSchema.openapi({
        param: {
          name: 'type',
          in: 'query',
          schema: { $ref: '#/components/schemas/anime_search_query_type' },
          required: false,
        },
      }).exactOptional(),
      score: z
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
          param: { name: 'score', in: 'query', schema: { type: 'number' }, required: false },
        }),
      min_score: z
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
            name: 'min_score',
            in: 'query',
            description: 'Set a minimum score for results.',
            schema: { type: 'number' },
            required: false,
          },
        }),
      max_score: z
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
            name: 'max_score',
            in: 'query',
            description: 'Set a maximum score for results',
            schema: { type: 'number' },
            required: false,
          },
        }),
      status: AnimeSearchQueryStatusSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          schema: { $ref: '#/components/schemas/anime_search_query_status' },
          required: false,
        },
      }).exactOptional(),
      rating: AnimeSearchQueryRatingSchema.openapi({
        param: {
          name: 'rating',
          in: 'query',
          schema: { $ref: '#/components/schemas/anime_search_query_rating' },
          required: false,
        },
      }).exactOptional(),
      sfw: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'sfw',
            in: 'query',
            description: 'Filter out Adult entries',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      genres: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'genres',
            in: 'query',
            description:
              'Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3',
            schema: { type: 'string' },
            required: false,
          },
        }),
      genres_exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'genres_exclude',
            in: 'query',
            description:
              'Exclude genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order_by: AnimeSearchQueryOrderbySchema.openapi({
        param: {
          name: 'order_by',
          in: 'query',
          schema: { $ref: '#/components/schemas/anime_search_query_orderby' },
          required: false,
        },
      }).exactOptional(),
      sort: SearchQuerySortSchema.openapi({
        param: {
          name: 'sort',
          in: 'query',
          schema: { $ref: '#/components/schemas/search_query_sort' },
          required: false,
        },
      }).exactOptional(),
      letter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'letter',
            in: 'query',
            description: 'Return entries starting with the given letter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      producers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'producers',
            in: 'query',
            description:
              'Filter by producer(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            description:
              'Filter by starting date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            description:
              'Filter by ending date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns search results for anime',
      content: { 'application/json': { schema: AnimeSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getMangaRoute = createRoute({
  method: 'get',
  path: '/manga',
  tags: ['manga'],
  operationId: 'getMangaSearch',
  request: {
    query: z.object({
      unapproved: UnapprovedParamsSchema,
      page: PageParamsSchema,
      limit: LimitParamsSchema,
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      type: MangaSearchQueryTypeSchema.openapi({
        param: {
          name: 'type',
          in: 'query',
          schema: { $ref: '#/components/schemas/manga_search_query_type' },
          required: false,
        },
      }).exactOptional(),
      score: z
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
          param: { name: 'score', in: 'query', schema: { type: 'number' }, required: false },
        }),
      min_score: z
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
            name: 'min_score',
            in: 'query',
            description: 'Set a minimum score for results.',
            schema: { type: 'number' },
            required: false,
          },
        }),
      max_score: z
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
            name: 'max_score',
            in: 'query',
            description: 'Set a maximum score for results',
            schema: { type: 'number' },
            required: false,
          },
        }),
      status: MangaSearchQueryStatusSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          schema: { $ref: '#/components/schemas/manga_search_query_status' },
          required: false,
        },
      }).exactOptional(),
      sfw: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'sfw',
            in: 'query',
            description: 'Filter out Adult entries',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      genres: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'genres',
            in: 'query',
            description:
              'Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3',
            schema: { type: 'string' },
            required: false,
          },
        }),
      genres_exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'genres_exclude',
            in: 'query',
            description:
              'Exclude genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order_by: MangaSearchQueryOrderbySchema.openapi({
        param: {
          name: 'order_by',
          in: 'query',
          schema: { $ref: '#/components/schemas/manga_search_query_orderby' },
          required: false,
        },
      }).exactOptional(),
      sort: SearchQuerySortSchema.openapi({
        param: {
          name: 'sort',
          in: 'query',
          schema: { $ref: '#/components/schemas/search_query_sort' },
          required: false,
        },
      }).exactOptional(),
      letter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'letter',
            in: 'query',
            description: 'Return entries starting with the given letter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      magazines: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'magazines',
            in: 'query',
            description:
              'Filter by magazine(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            description:
              'Filter by starting date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`',
            schema: { type: 'string' },
            required: false,
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            description:
              'Filter by ending date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns search results for manga',
      content: { 'application/json': { schema: MangaSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getPeopleRoute = createRoute({
  method: 'get',
  path: '/people',
  tags: ['people'],
  operationId: 'getPeopleSearch',
  request: {
    query: z.object({
      page: PageParamsSchema,
      limit: LimitParamsSchema,
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      order_by: PeopleSearchQueryOrderbySchema.openapi({
        param: {
          name: 'order_by',
          in: 'query',
          schema: { $ref: '#/components/schemas/people_search_query_orderby' },
          required: false,
        },
      }).exactOptional(),
      sort: SearchQuerySortSchema.openapi({
        param: {
          name: 'sort',
          in: 'query',
          schema: { $ref: '#/components/schemas/search_query_sort' },
          required: false,
        },
      }).exactOptional(),
      letter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'letter',
            in: 'query',
            description: 'Return entries starting with the given letter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns search results for people',
      content: { 'application/json': { schema: PeopleSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getCharactersRoute = createRoute({
  method: 'get',
  path: '/characters',
  tags: ['characters'],
  operationId: 'getCharactersSearch',
  request: {
    query: z.object({
      page: PageParamsSchema,
      limit: LimitParamsSchema,
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      order_by: CharactersSearchQueryOrderbySchema.openapi({
        param: {
          name: 'order_by',
          in: 'query',
          schema: { $ref: '#/components/schemas/characters_search_query_orderby' },
          required: false,
        },
      }).exactOptional(),
      sort: SearchQuerySortSchema.openapi({
        param: {
          name: 'sort',
          in: 'query',
          schema: { $ref: '#/components/schemas/search_query_sort' },
          required: false,
        },
      }).exactOptional(),
      letter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'letter',
            in: 'query',
            description: 'Return entries starting with the given letter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns search results for characters',
      content: { 'application/json': { schema: CharactersSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  tags: ['users'],
  operationId: 'getUsersSearch',
  request: {
    query: z.object({
      page: PageParamsSchema,
      limit: LimitParamsSchema,
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      gender: UsersSearchQueryGenderSchema.openapi({
        param: {
          name: 'gender',
          in: 'query',
          schema: { $ref: '#/components/schemas/users_search_query_gender' },
          required: false,
        },
      }).exactOptional(),
      location: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'location', in: 'query', schema: { type: 'string' }, required: false },
        }),
      maxAge: z
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
          param: { name: 'maxAge', in: 'query', schema: { type: 'integer' }, required: false },
        }),
      minAge: z
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
          param: { name: 'minAge', in: 'query', schema: { type: 'integer' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns search results for users',
      content: { 'application/json': { schema: UsersSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUserbyidIdRoute = createRoute({
  method: 'get',
  path: '/users/userbyid/{id}',
  tags: ['users'],
  operationId: 'getUserById',
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
          param: { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns username by ID search',
      content: {
        'application/json': {
          schema: z.object({ data: UserByIdSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getClubsRoute = createRoute({
  method: 'get',
  path: '/clubs',
  tags: ['clubs'],
  operationId: 'getClubsSearch',
  request: {
    query: z.object({
      page: PageParamsSchema,
      limit: LimitParamsSchema,
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      type: ClubSearchQueryTypeSchema.openapi({
        param: {
          name: 'type',
          in: 'query',
          schema: { $ref: '#/components/schemas/club_search_query_type' },
          required: false,
        },
      }).exactOptional(),
      category: ClubSearchQueryCategorySchema.openapi({
        param: {
          name: 'category',
          in: 'query',
          schema: { $ref: '#/components/schemas/club_search_query_category' },
          required: false,
        },
      }).exactOptional(),
      order_by: ClubSearchQueryOrderbySchema.openapi({
        param: {
          name: 'order_by',
          in: 'query',
          schema: { $ref: '#/components/schemas/club_search_query_orderby' },
          required: false,
        },
      }).exactOptional(),
      sort: SearchQuerySortSchema.openapi({
        param: {
          name: 'sort',
          in: 'query',
          schema: { $ref: '#/components/schemas/search_query_sort' },
          required: false,
        },
      }).exactOptional(),
      letter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'letter',
            in: 'query',
            description: 'Return entries starting with the given letter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns search results for clubs',
      content: { 'application/json': { schema: ClubsSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getProducersRoute = createRoute({
  method: 'get',
  path: '/producers',
  tags: ['producers'],
  operationId: 'getProducers',
  request: {
    query: z.object({
      page: PageParamsSchema,
      limit: LimitParamsSchema,
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      order_by: ProducersQueryOrderbySchema.openapi({
        param: {
          name: 'order_by',
          in: 'query',
          schema: { $ref: '#/components/schemas/producers_query_orderby' },
          required: false,
        },
      }).exactOptional(),
      sort: SearchQuerySortSchema.openapi({
        param: {
          name: 'sort',
          in: 'query',
          schema: { $ref: '#/components/schemas/search_query_sort' },
          required: false,
        },
      }).exactOptional(),
      letter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'letter',
            in: 'query',
            description: 'Return entries starting with the given letter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns producers collection',
      content: { 'application/json': { schema: ProducersSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getSeasonsNowRoute = createRoute({
  method: 'get',
  path: '/seasons/now',
  tags: ['seasons'],
  operationId: 'getSeasonNow',
  request: {
    query: z.object({
      filter: z
        .enum(['tv', 'movie', 'ova', 'special', 'ona', 'music'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Entry types',
            schema: { type: 'string', enum: ['tv', 'movie', 'ova', 'special', 'ona', 'music'] },
            required: false,
          },
        }),
      sfw: SfwParamsSchema,
      unapproved: UnapprovedParamsSchema,
      continuing: ContinuingParamsSchema,
      page: PageParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns current seasonal anime',
      content: { 'application/json': { schema: AnimeSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getSeasonsYearSeasonRoute = createRoute({
  method: 'get',
  path: '/seasons/{year}/{season}',
  tags: ['seasons'],
  operationId: 'getSeason',
  request: {
    params: z.object({
      year: z
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
          param: { name: 'year', in: 'path', required: true, schema: { type: 'integer' } },
        }),
      season: z
        .string()
        .openapi({
          param: { name: 'season', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      filter: z
        .enum(['tv', 'movie', 'ova', 'special', 'ona', 'music'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Entry types',
            schema: { type: 'string', enum: ['tv', 'movie', 'ova', 'special', 'ona', 'music'] },
            required: false,
          },
        }),
      sfw: SfwParamsSchema,
      unapproved: UnapprovedParamsSchema,
      continuing: ContinuingParamsSchema,
      page: PageParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns seasonal anime',
      content: { 'application/json': { schema: AnimeSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getSeasonsRoute = createRoute({
  method: 'get',
  path: '/seasons',
  tags: ['seasons'],
  operationId: 'getSeasonsList',
  responses: {
    200: {
      description: 'Returns available list of seasons',
      content: { 'application/json': { schema: SeasonsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getSeasonsUpcomingRoute = createRoute({
  method: 'get',
  path: '/seasons/upcoming',
  tags: ['seasons'],
  operationId: 'getSeasonUpcoming',
  request: {
    query: z.object({
      filter: z
        .enum(['tv', 'movie', 'ova', 'special', 'ona', 'music'])
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Entry types',
            schema: { type: 'string', enum: ['tv', 'movie', 'ova', 'special', 'ona', 'music'] },
            required: false,
          },
        }),
      sfw: SfwParamsSchema,
      unapproved: UnapprovedParamsSchema,
      continuing: ContinuingParamsSchema,
      page: PageParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: "Returns upcoming season's anime",
      content: { 'application/json': { schema: AnimeSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getTopAnimeRoute = createRoute({
  method: 'get',
  path: '/top/anime',
  tags: ['top'],
  operationId: 'getTopAnime',
  request: {
    query: z.object({
      type: AnimeSearchQueryTypeSchema.openapi({
        param: {
          name: 'type',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/anime_search_query_type' },
        },
      }).exactOptional(),
      filter: TopAnimeFilterSchema.openapi({
        param: {
          name: 'filter',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/top_anime_filter' },
        },
      }).exactOptional(),
      rating: AnimeSearchQueryRatingSchema.openapi({
        param: {
          name: 'rating',
          in: 'query',
          schema: { $ref: '#/components/schemas/anime_search_query_rating' },
          required: false,
        },
      }).exactOptional(),
      sfw: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'sfw',
            in: 'query',
            description: 'Filter out Adult entries',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      page: PageParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns top anime',
      content: { 'application/json': { schema: AnimeSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getTopMangaRoute = createRoute({
  method: 'get',
  path: '/top/manga',
  tags: ['top'],
  operationId: 'getTopManga',
  request: {
    query: z.object({
      type: MangaSearchQueryTypeSchema.openapi({
        param: {
          name: 'type',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/manga_search_query_type' },
        },
      }).exactOptional(),
      filter: TopMangaFilterSchema.openapi({
        param: {
          name: 'filter',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/top_manga_filter' },
        },
      }).exactOptional(),
      page: PageParamsSchema,
      limit: LimitParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns top manga',
      content: { 'application/json': { schema: MangaSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getTopPeopleRoute = createRoute({
  method: 'get',
  path: '/top/people',
  tags: ['top'],
  operationId: 'getTopPeople',
  request: { query: z.object({ page: PageParamsSchema, limit: LimitParamsSchema }) },
  responses: {
    200: {
      description: 'Returns top people',
      content: { 'application/json': { schema: PeopleSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getTopCharactersRoute = createRoute({
  method: 'get',
  path: '/top/characters',
  tags: ['top'],
  operationId: 'getTopCharacters',
  request: { query: z.object({ page: PageParamsSchema, limit: LimitParamsSchema }) },
  responses: {
    200: {
      description: 'Returns top characters',
      content: { 'application/json': { schema: CharactersSearchSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getTopReviewsRoute = createRoute({
  method: 'get',
  path: '/top/reviews',
  tags: ['top'],
  operationId: 'getTopReviews',
  request: {
    query: z.object({
      page: PageParamsSchema,
      type: TopReviewsTypeEnumSchema.openapi({
        param: {
          name: 'type',
          in: 'query',
          required: false,
          schema: { $ref: '#/components/schemas/top_reviews_type_enum' },
        },
      }).exactOptional(),
      preliminary: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'preliminary',
            in: 'query',
            description:
              'Whether the results include preliminary reviews or not. Defaults to true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      spoilers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'spoilers',
            in: 'query',
            description:
              'Whether the results include reviews with spoilers or not. Defaults to true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns top reviews',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  data: z
                    .array(
                      z.union([
                        z
                          .object({ user: UserMetaSchema.exactOptional() })
                          .openapi({ required: [] })
                          .and(
                            z
                              .object({ anime: AnimeMetaSchema.exactOptional() })
                              .openapi({ required: [] }),
                          )
                          .and(AnimeReviewSchema),
                        z
                          .object({ user: UserMetaSchema.exactOptional() })
                          .openapi({ required: [] })
                          .and(
                            z
                              .object({ manga: MangaMetaSchema.exactOptional() })
                              .openapi({ required: [] }),
                          )
                          .and(MangaReviewSchema),
                      ]),
                    )
                    .exactOptional(),
                })
                .openapi({ required: [] })
                .and(PaginationSchema)
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameFullRoute = createRoute({
  method: 'get',
  path: '/users/{username}/full',
  tags: ['users'],
  operationId: 'getUserFullProfile',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns complete user resource data',
      content: {
        'application/json': {
          schema: z
            .object({ data: UserProfileFullSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameRoute = createRoute({
  method: 'get',
  path: '/users/{username}',
  tags: ['users'],
  operationId: 'getUserProfile',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns user profile',
      content: {
        'application/json': {
          schema: z.object({ data: UserProfileSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameStatisticsRoute = createRoute({
  method: 'get',
  path: '/users/{username}/statistics',
  tags: ['users'],
  operationId: 'getUserStatistics',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns user statistics',
      content: { 'application/json': { schema: UserStatisticsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameFavoritesRoute = createRoute({
  method: 'get',
  path: '/users/{username}/favorites',
  tags: ['users'],
  operationId: 'getUserFavorites',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns user favorites',
      content: {
        'application/json': {
          schema: z.object({ data: UserFavoritesSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameUserupdatesRoute = createRoute({
  method: 'get',
  path: '/users/{username}/userupdates',
  tags: ['users'],
  operationId: 'getUserUpdates',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns user updates',
      content: { 'application/json': { schema: UserUpdatesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameAboutRoute = createRoute({
  method: 'get',
  path: '/users/{username}/about',
  tags: ['users'],
  operationId: 'getUserAbout',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns user about in raw HTML',
      content: { 'application/json': { schema: UserAboutSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameHistoryRoute = createRoute({
  method: 'get',
  path: '/users/{username}/history',
  tags: ['users'],
  operationId: 'getUserHistory',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      type: z
        .enum(['anime', 'manga'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['anime', 'manga'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns user history (past 30 days)',
      content: { 'application/json': { schema: UserHistorySchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameFriendsRoute = createRoute({
  method: 'get',
  path: '/users/{username}/friends',
  tags: ['users'],
  operationId: 'getUserFriends',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns user friends',
      content: { 'application/json': { schema: UserFriendsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameAnimelistRoute = createRoute({
  method: 'get',
  path: '/users/{username}/animelist',
  tags: ['users'],
  description:
    "User Anime lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>",
  operationId: 'getUserAnimelist',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      status: UserAnimeListStatusFilterSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          schema: { $ref: '#/components/schemas/user_anime_list_status_filter' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Returns user anime list',
      content: { 'application/json': { schema: z.any() } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
  deprecated: true,
})

export const getUsersUsernameMangalistRoute = createRoute({
  method: 'get',
  path: '/users/{username}/mangalist',
  tags: ['users'],
  description:
    "User Manga lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>",
  operationId: 'getUserMangaList',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      status: UserMangaListStatusFilterSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          schema: { $ref: '#/components/schemas/user_manga_list_status_filter' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Returns user manga list',
      content: { 'application/json': { schema: z.any() } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
  deprecated: true,
})

export const getUsersUsernameReviewsRoute = createRoute({
  method: 'get',
  path: '/users/{username}/reviews',
  tags: ['users'],
  operationId: 'getUserReviews',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns user reviews',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  data: z
                    .array(
                      z.union([
                        z
                          .object({ user: UserMetaSchema.exactOptional() })
                          .openapi({ required: [] })
                          .and(
                            z
                              .object({ anime: AnimeMetaSchema.exactOptional() })
                              .openapi({ required: [] }),
                          )
                          .and(AnimeReviewSchema),
                        z
                          .object({ user: UserMetaSchema.exactOptional() })
                          .openapi({ required: [] })
                          .and(
                            z
                              .object({ manga: MangaMetaSchema.exactOptional() })
                              .openapi({ required: [] }),
                          )
                          .and(MangaReviewSchema),
                      ]),
                    )
                    .exactOptional(),
                })
                .openapi({ required: [] })
                .and(PaginationSchema)
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameRecommendationsRoute = createRoute({
  method: 'get',
  path: '/users/{username}/recommendations',
  tags: ['users'],
  operationId: 'getUserRecommendations',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns Recent Anime Recommendations',
      content: { 'application/json': { schema: RecommendationsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameClubsRoute = createRoute({
  method: 'get',
  path: '/users/{username}/clubs',
  tags: ['users'],
  operationId: 'getUserClubs',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns user clubs',
      content: { 'application/json': { schema: UserClubsSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getUsersUsernameExternalRoute = createRoute({
  method: 'get',
  path: '/users/{username}/external',
  tags: ['users'],
  operationId: 'getUserExternal',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { name: 'username', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: "Returns user's external links",
      content: { 'application/json': { schema: ExternalLinksSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getWatchEpisodesRoute = createRoute({
  method: 'get',
  path: '/watch/episodes',
  tags: ['watch'],
  operationId: 'getWatchRecentEpisodes',
  responses: {
    200: {
      description: 'Returns Recently Added Episodes',
      content: { 'application/json': { schema: WatchEpisodesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getWatchEpisodesPopularRoute = createRoute({
  method: 'get',
  path: '/watch/episodes/popular',
  tags: ['watch'],
  operationId: 'getWatchPopularEpisodes',
  responses: {
    200: {
      description: 'Returns Popular Episodes',
      content: { 'application/json': { schema: WatchEpisodesSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getWatchPromosRoute = createRoute({
  method: 'get',
  path: '/watch/promos',
  tags: ['watch'],
  operationId: 'getWatchRecentPromos',
  request: { query: z.object({ page: PageParamsSchema }) },
  responses: {
    200: {
      description: 'Returns Recently Added Promotional Videos',
      content: { 'application/json': { schema: WatchPromosSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})

export const getWatchPromosPopularRoute = createRoute({
  method: 'get',
  path: '/watch/promos/popular',
  tags: ['watch'],
  operationId: 'getWatchPopularPromos',
  responses: {
    200: {
      description: 'Returns Popular Promotional Videos',
      content: { 'application/json': { schema: WatchPromosSchema } },
    },
    400: { description: 'Error: Bad request. When required parameters were not supplied.' },
  },
})
