import { createRoute, z } from '@hono/zod-openapi'

const DeveloperSchema = z
  .object({
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Developer')

const DeveloperSingleSchema = z
  .object({
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('DeveloperSingle')

const GameSchema = z
  .object({
    added: z.int().exactOptional().openapi({ readOnly: true, title: 'Added' }),
    added_by_status: z
      .object({})
      .exactOptional()
      .openapi({ readOnly: true, title: 'Added by status' }),
    background_image: z
      .url()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Background image' }),
    esrb_rating: z
      .object({
        id: z.int().exactOptional(),
        name: z
          .enum(['Everyone', 'Everyone 10+', 'Teen', 'Mature', 'Adults Only', 'Rating Pending'])
          .exactOptional(),
        slug: z
          .enum(['everyone', 'everyone-10-plus', 'teen', 'mature', 'adults-only', 'rating-pending'])
          .exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    metacritic: z.int().exactOptional().openapi({ readOnly: true, title: 'Metacritic' }),
    name: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Name' }),
    platforms: z
      .array(
        z
          .object({
            platform: z
              .object({
                id: z.int().exactOptional(),
                name: z.string().exactOptional(),
                slug: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            released_at: z.string().nullable().exactOptional(),
            requirements: z
              .object({
                minimum: z.string().exactOptional(),
                recommended: z.string().exactOptional(),
              })
              .nullable()
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    playtime: z
      .int()
      .exactOptional()
      .openapi({ description: 'in hours', readOnly: true, title: 'Playtime' }),
    rating: z.number().openapi({ title: 'Rating' }),
    rating_top: z.int().exactOptional().openapi({ readOnly: true, title: 'Rating top' }),
    ratings: z.object({}).exactOptional().openapi({ readOnly: true, title: 'Ratings' }),
    ratings_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Ratings count' }),
    released: z.iso.date().exactOptional().openapi({ readOnly: true, title: 'Released' }),
    reviews_text_count: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Reviews text count' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
    suggestions_count: z
      .int()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Suggestions count' }),
    tba: z.boolean().exactOptional().openapi({ readOnly: true, title: 'TBA' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Updated' }),
  })
  .openapi({ required: ['rating'] })
  .openapi('Game')

const GamePersonListSchema = z
  .object({
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image: z.url().exactOptional().openapi({ readOnly: true, title: 'Image' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('GamePersonList')

const GamePlatformMetacriticSchema = z
  .object({
    metascore: z.int().exactOptional().openapi({ readOnly: true, title: 'Metascore' }),
    url: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Url' }),
  })
  .openapi({ required: [] })
  .openapi('GamePlatformMetacritic')

const GameSingleSchema = z
  .object({
    achievements_count: z
      .int()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Achievements count' }),
    added: z.int().exactOptional().openapi({ readOnly: true, title: 'Added' }),
    added_by_status: z
      .object({})
      .exactOptional()
      .openapi({ readOnly: true, title: 'Added by status' }),
    additions_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Additions count' }),
    alternative_names: z
      .array(z.string().min(1).max(200).openapi({ title: 'Alternative names' }))
      .exactOptional()
      .openapi({ readOnly: true }),
    background_image: z
      .url()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Background image' }),
    background_image_additional: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Background image additional' }),
    creators_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Creators count' }),
    description: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Description' }),
    esrb_rating: z
      .object({
        id: z.int().exactOptional(),
        name: z
          .enum(['Everyone', 'Everyone 10+', 'Teen', 'Mature', 'Adults Only', 'Rating Pending'])
          .exactOptional(),
        slug: z
          .enum(['everyone', 'everyone-10-plus', 'teen', 'mature', 'adults-only', 'rating-pending'])
          .exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
    game_series_count: z
      .int()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Game series count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    metacritic: z.int().exactOptional().openapi({ readOnly: true, title: 'Metacritic' }),
    metacritic_platforms: z
      .array(GamePlatformMetacriticSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    metacritic_url: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'For example "http://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt"',
        readOnly: true,
        title: 'Metacritic url',
      }),
    movies_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Movies count' }),
    name: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Name' }),
    name_original: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Name original' }),
    parent_achievements_count: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Parent achievements count' }),
    parents_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Parents count' }),
    platforms: z
      .array(
        z
          .object({
            platform: z
              .object({
                id: z.int().exactOptional(),
                name: z.string().exactOptional(),
                slug: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            released_at: z.string().nullable().exactOptional(),
            requirements: z
              .object({
                minimum: z.string().exactOptional(),
                recommended: z.string().exactOptional(),
              })
              .nullable()
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    playtime: z
      .int()
      .exactOptional()
      .openapi({ description: 'in hours', readOnly: true, title: 'Playtime' }),
    rating: z.number().openapi({ title: 'Rating' }),
    rating_top: z.int().exactOptional().openapi({ readOnly: true, title: 'Rating top' }),
    ratings: z.object({}).exactOptional().openapi({ readOnly: true, title: 'Ratings' }),
    ratings_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Ratings count' }),
    reactions: z.object({}).exactOptional().openapi({ readOnly: true, title: 'Reactions' }),
    reddit_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Reddit count' }),
    reddit_description: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Reddit description' }),
    reddit_logo: z.url().min(1).exactOptional().openapi({ readOnly: true, title: 'Reddit logo' }),
    reddit_name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Reddit name' }),
    reddit_url: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'For example "https://www.reddit.com/r/uncharted/" or "uncharted"',
        readOnly: true,
        title: 'Reddit url',
      }),
    released: z.iso.date().exactOptional().openapi({ readOnly: true, title: 'Released' }),
    reviews_text_count: z
      .string()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Reviews text count' }),
    screenshots_count: z
      .int()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Screenshots count' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
    suggestions_count: z
      .int()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Suggestions count' }),
    tba: z.boolean().exactOptional().openapi({ readOnly: true, title: 'TBA' }),
    twitch_count: z.string().exactOptional().openapi({ readOnly: true, title: 'Twitch count' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Updated' }),
    website: z.url().min(1).exactOptional().openapi({ readOnly: true, title: 'Website' }),
    youtube_count: z.string().exactOptional().openapi({ readOnly: true, title: 'Youtube count' }),
  })
  .openapi({ required: ['rating'] })
  .openapi('GameSingle')

const GameStoreFullSchema = z
  .object({
    game_id: z.string().exactOptional().openapi({ readOnly: true, title: 'Game id' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    store_id: z.string().exactOptional().openapi({ readOnly: true, title: 'Store id' }),
    url: z.url().min(1).max(500).openapi({ title: 'Url' }),
  })
  .openapi({ required: ['url'] })
  .openapi('GameStoreFull')

const GenreSchema = z
  .object({
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Genre')

const GenreSingleSchema = z
  .object({
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('GenreSingle')

const MovieSchema = z
  .object({
    data: z.object({}).exactOptional().openapi({ readOnly: true, title: 'Data' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    name: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Name' }),
    preview: z.url().exactOptional().openapi({ readOnly: true, title: 'Preview' }),
  })
  .openapi({ required: [] })
  .openapi('Movie')

const ParentAchievementSchema = z
  .object({
    description: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Description' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image: z.url().exactOptional().openapi({ readOnly: true, title: 'Image' }),
    name: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Name' }),
    percent: z.string().exactOptional().openapi({ readOnly: true, title: 'Percent' }),
  })
  .openapi({ required: [] })
  .openapi('ParentAchievement')

const PersonSchema = z
  .object({
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image: z.url().exactOptional().openapi({ readOnly: true, title: 'Image' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Person')

const PersonSingleSchema = z
  .object({
    description: z.string().min(1).exactOptional().openapi({ title: 'Description' }),
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image: z.url().exactOptional().openapi({ readOnly: true, title: 'Image' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).openapi({ title: 'Name' }),
    rating: z.string().exactOptional().openapi({ readOnly: true, title: 'Rating' }),
    rating_top: z.int().exactOptional().openapi({ readOnly: true, title: 'Rating top' }),
    reviews_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Reviews count' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Updated' }),
  })
  .openapi({ required: ['name'] })
  .openapi('PersonSingle')

const PlatformSchema = z
  .object({
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image: z.url().nullable().exactOptional().openapi({ readOnly: true, title: 'Image' }),
    image_background: z
      .url()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
    year_end: z.int().min(0).max(32767).nullable().exactOptional().openapi({ title: 'Year end' }),
    year_start: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({ title: 'Year start' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Platform')

const PlatformParentSingleSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    platforms: z.array(PlatformSchema),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name', 'platforms'] })
  .openapi('PlatformParentSingle')

const PlatformSingleSchema = z
  .object({
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image: z.url().nullable().exactOptional().openapi({ readOnly: true, title: 'Image' }),
    image_background: z
      .url()
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
    year_end: z.int().min(0).max(32767).nullable().exactOptional().openapi({ title: 'Year end' }),
    year_start: z
      .int()
      .min(0)
      .max(32767)
      .nullable()
      .exactOptional()
      .openapi({ title: 'Year start' }),
  })
  .openapi({ required: ['name'] })
  .openapi('PlatformSingle')

const PositionSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    name: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: [] })
  .openapi('Position')

const PublisherSchema = z
  .object({
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Publisher')

const PublisherSingleSchema = z
  .object({
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('PublisherSingle')

const RedditSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Created' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image: z.url().min(1).exactOptional().openapi({ readOnly: true, title: 'Image' }),
    name: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Name' }),
    text: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Text' }),
    url: z.url().min(1).exactOptional().openapi({ readOnly: true, title: 'Url' }),
    username: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Username' }),
    username_url: z.url().min(1).exactOptional().openapi({ readOnly: true, title: 'Username url' }),
  })
  .openapi({ required: [] })
  .openapi('Reddit')

const ScreenShotSchema = z
  .object({
    height: z.int().exactOptional().openapi({ readOnly: true, title: 'Height' }),
    hidden: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Set image as hidden or visible.', title: 'Hidden' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image: z
      .url()
      .exactOptional()
      .openapi({
        description: 'An image file with size up to 20 MB.',
        readOnly: true,
        title: 'Image',
      }),
    width: z.int().exactOptional().openapi({ readOnly: true, title: 'Width' }),
  })
  .openapi({ example: { hidden: false, image: '@image.jpg' }, required: [] })
  .openapi('ScreenShot')

const StoreSchema = z
  .object({
    domain: z.string().max(255).nullable().exactOptional().openapi({ title: 'Domain' }),
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Store')

const StoreSingleSchema = z
  .object({
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    domain: z.string().max(255).nullable().exactOptional().openapi({ title: 'Domain' }),
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('StoreSingle')

const TagSchema = z
  .object({
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    language: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Language' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('Tag')

const TagSingleSchema = z
  .object({
    description: z.string().exactOptional().openapi({ title: 'Description' }),
    games_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Games count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    image_background: z
      .url()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Image background' }),
    name: z.string().min(1).max(100).openapi({ title: 'Name' }),
    slug: z
      .string()
      .regex(/^[-a-zA-Z0-9_]+$/)
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Slug' }),
  })
  .openapi({ required: ['name'] })
  .openapi('TagSingle')

const TwitchSchema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Created' }),
    description: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Description' }),
    external_id: z.int().exactOptional().openapi({ readOnly: true, title: 'External id' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    language: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Language' }),
    name: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Name' }),
    published: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Published' }),
    thumbnail: z.url().min(1).exactOptional().openapi({ readOnly: true, title: 'Thumbnail' }),
    view_count: z.int().exactOptional().openapi({ readOnly: true, title: 'View count' }),
  })
  .openapi({ required: [] })
  .openapi('Twitch')

const YoutubeSchema = z
  .object({
    channel_id: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Channel id' }),
    channel_title: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Channel title' }),
    comments_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Comments count' }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, title: 'Created' }),
    description: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'Description' }),
    dislike_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Dislike count' }),
    external_id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ readOnly: true, title: 'External id' }),
    favorite_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Favorite count' }),
    id: z.int().exactOptional().openapi({ readOnly: true, title: 'ID' }),
    like_count: z.int().exactOptional().openapi({ readOnly: true, title: 'Like count' }),
    name: z.string().min(1).exactOptional().openapi({ readOnly: true, title: 'Name' }),
    thumbnails: z.object({}).exactOptional().openapi({ readOnly: true, title: 'Thumbnails' }),
    view_count: z.int().exactOptional().openapi({ readOnly: true, title: 'View count' }),
  })
  .openapi({ required: [] })
  .openapi('Youtube')

export const getCreatorRolesRoute = createRoute({
  method: 'get',
  path: '/creator-roles',
  tags: ['creator-roles'],
  summary: 'Get a list of creator positions (jobs).',
  operationId: 'creator-roles_list',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(PositionSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getCreatorsRoute = createRoute({
  method: 'get',
  path: '/creators',
  tags: ['creators'],
  summary: 'Get a list of game creators.',
  operationId: 'creators_list',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(PersonSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getCreatorsIdRoute = createRoute({
  method: 'get',
  path: '/creators/{id}',
  tags: ['creators'],
  summary: 'Get details of the creator.',
  operationId: 'creators_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PersonSingleSchema } } },
  },
})

export const getDevelopersRoute = createRoute({
  method: 'get',
  path: '/developers',
  tags: ['developers'],
  summary: 'Get a list of game developers.',
  operationId: 'developers_list',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(DeveloperSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getDevelopersIdRoute = createRoute({
  method: 'get',
  path: '/developers/{id}',
  tags: ['developers'],
  summary: 'Get details of the developer.',
  operationId: 'developers_read',
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
            description: 'A unique integer value identifying this Developer.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: DeveloperSingleSchema } } },
  },
})

export const getGamesRoute = createRoute({
  method: 'get',
  path: '/games',
  tags: ['games'],
  summary: 'Get a list of games.',
  operationId: 'games_list',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search query.',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            required: false,
          },
        }),
      search_precise: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Disable fuzziness for the search query.',
            in: 'query',
            name: 'search_precise',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      search_exact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mark the search query as exact.',
            in: 'query',
            name: 'search_exact',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      parent_platforms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by parent platforms, for example: `1,2,3`.',
            in: 'query',
            name: 'parent_platforms',
            schema: { type: 'string' },
            required: false,
          },
        }),
      platforms: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by platforms, for example: `4,5`.',
            in: 'query',
            name: 'platforms',
            schema: { type: 'string' },
            required: false,
          },
        }),
      stores: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by stores, for example: `5,6`.',
            in: 'query',
            name: 'stores',
            schema: { type: 'string' },
            required: false,
          },
        }),
      developers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive`.',
            in: 'query',
            name: 'developers',
            schema: { type: 'string' },
            required: false,
          },
        }),
      publishers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`.',
            in: 'query',
            name: 'publishers',
            schema: { type: 'string' },
            required: false,
          },
        }),
      genres: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by genres, for example: `4,51` or `action,indie`.',
            in: 'query',
            name: 'genres',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by tags, for example: `31,7` or `singleplayer,multiplayer`.',
            in: 'query',
            name: 'tags',
            schema: { type: 'string' },
            required: false,
          },
        }),
      creators: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`.',
            in: 'query',
            name: 'creators',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dates: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`.',
            in: 'query',
            name: 'dates',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updated: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by an update date, for example: `2020-12-01,2020-12-31`.',
            in: 'query',
            name: 'updated',
            schema: { type: 'string' },
            required: false,
          },
        }),
      platforms_count: z
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
            description: 'Filter by platforms count, for example: `1`.',
            in: 'query',
            name: 'platforms_count',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      metacritic: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by a metacritic rating, for example: `80,100`.',
            in: 'query',
            name: 'metacritic',
            schema: { type: 'string' },
            required: false,
          },
        }),
      exclude_collection: z
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
            description: 'Exclude games from a particular collection, for example: `123`.',
            in: 'query',
            name: 'exclude_collection',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      exclude_additions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude additions.',
            in: 'query',
            name: 'exclude_additions',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      exclude_parents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude games which have additions.',
            in: 'query',
            name: 'exclude_parents',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      exclude_game_series: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude games which included in a game series.',
            in: 'query',
            name: 'exclude_game_series',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      exclude_stores: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude stores, for example: `5,6`.',
            in: 'query',
            name: 'exclude_stores',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`, `metacritic`. You can reverse the sort order adding a hyphen, for example: `-released`.',
            in: 'query',
            name: 'ordering',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(GameSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getGamesGamePkAdditionsRoute = createRoute({
  method: 'get',
  path: '/games/{game_pk}/additions',
  tags: ['games'],
  summary: "Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.",
  operationId: 'games_additions_list',
  request: {
    params: z.object({
      game_pk: z
        .string()
        .openapi({
          param: { in: 'path', name: 'game_pk', required: true, schema: { type: 'string' } },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(GameSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getGamesGamePkDevelopmentTeamRoute = createRoute({
  method: 'get',
  path: '/games/{game_pk}/development-team',
  tags: ['games'],
  summary: 'Get a list of individual creators that were part of the development team.',
  operationId: 'games_development-team_list',
  request: {
    params: z.object({
      game_pk: z
        .string()
        .openapi({
          param: { in: 'path', name: 'game_pk', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(GamePersonListSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getGamesGamePkGameSeriesRoute = createRoute({
  method: 'get',
  path: '/games/{game_pk}/game-series',
  tags: ['games'],
  summary: 'Get a list of games that are part of the same series.',
  operationId: 'games_game-series_list',
  request: {
    params: z.object({
      game_pk: z
        .string()
        .openapi({
          param: { in: 'path', name: 'game_pk', required: true, schema: { type: 'string' } },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(GameSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getGamesGamePkParentGamesRoute = createRoute({
  method: 'get',
  path: '/games/{game_pk}/parent-games',
  tags: ['games'],
  summary: "Get a list of parent games for DLC's and editions.",
  operationId: 'games_parent-games_list',
  request: {
    params: z.object({
      game_pk: z
        .string()
        .openapi({
          param: { in: 'path', name: 'game_pk', required: true, schema: { type: 'string' } },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(GameSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getGamesGamePkScreenshotsRoute = createRoute({
  method: 'get',
  path: '/games/{game_pk}/screenshots',
  tags: ['games'],
  summary: 'Get screenshots for the game.',
  operationId: 'games_screenshots_list',
  request: {
    params: z.object({
      game_pk: z
        .string()
        .openapi({
          param: { in: 'path', name: 'game_pk', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(ScreenShotSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getGamesGamePkStoresRoute = createRoute({
  method: 'get',
  path: '/games/{game_pk}/stores',
  tags: ['games'],
  summary: 'Get links to the stores that sell the game.',
  operationId: 'games_stores_list',
  request: {
    params: z.object({
      game_pk: z
        .string()
        .openapi({
          param: { in: 'path', name: 'game_pk', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(GameStoreFullSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getGamesIdRoute = createRoute({
  method: 'get',
  path: '/games/{id}',
  tags: ['games'],
  summary: 'Get details of the game.',
  operationId: 'games_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'An ID or a slug identifying this Game.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GameSingleSchema } } },
  },
})

export const getGamesIdAchievementsRoute = createRoute({
  method: 'get',
  path: '/games/{id}/achievements',
  tags: ['games'],
  summary: 'Get a list of game achievements.',
  operationId: 'games_achievements_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'An ID or a slug identifying this Game.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: ParentAchievementSchema } } },
  },
})

export const getGamesIdMoviesRoute = createRoute({
  method: 'get',
  path: '/games/{id}/movies',
  tags: ['games'],
  summary: 'Get a list of game trailers.',
  operationId: 'games_movies_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'An ID or a slug identifying this Game.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: { 'application/json': { schema: MovieSchema } } } },
})

export const getGamesIdRedditRoute = createRoute({
  method: 'get',
  path: '/games/{id}/reddit',
  tags: ['games'],
  summary: "Get a list of most recent posts from the game's subreddit.",
  operationId: 'games_reddit_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'An ID or a slug identifying this Game.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RedditSchema } } },
  },
})

export const getGamesIdSuggestedRoute = createRoute({
  method: 'get',
  path: '/games/{id}/suggested',
  tags: ['games'],
  summary:
    'Get a list of visually similar games, available only for business and enterprise API users.',
  operationId: 'games_suggested_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'An ID or a slug identifying this Game.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GameSingleSchema } } },
  },
})

export const getGamesIdTwitchRoute = createRoute({
  method: 'get',
  path: '/games/{id}/twitch',
  tags: ['games'],
  summary:
    'Get streams on Twitch associated with the game, available only for business and enterprise API users.',
  operationId: 'games_twitch_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'An ID or a slug identifying this Game.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: TwitchSchema } } },
  },
})

export const getGamesIdYoutubeRoute = createRoute({
  method: 'get',
  path: '/games/{id}/youtube',
  tags: ['games'],
  summary:
    'Get videos from YouTube associated with the game, available only for business and enterprise API users.',
  operationId: 'games_youtube_read',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'An ID or a slug identifying this Game.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: YoutubeSchema } } },
  },
})

export const getGenresRoute = createRoute({
  method: 'get',
  path: '/genres',
  tags: ['genres'],
  summary: 'Get a list of video game genres.',
  operationId: 'genres_list',
  request: {
    query: z.object({
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(GenreSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getGenresIdRoute = createRoute({
  method: 'get',
  path: '/genres/{id}',
  tags: ['genres'],
  summary: 'Get details of the genre.',
  operationId: 'genres_read',
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
            description: 'A unique integer value identifying this Genre.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: GenreSingleSchema } } },
  },
})

export const getPlatformsRoute = createRoute({
  method: 'get',
  path: '/platforms',
  tags: ['platforms'],
  summary: 'Get a list of video game platforms.',
  operationId: 'platforms_list',
  request: {
    query: z.object({
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(PlatformSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getPlatformsListsParentsRoute = createRoute({
  method: 'get',
  path: '/platforms/lists/parents',
  tags: ['platforms'],
  summary: 'Get a list of parent platforms.',
  description: 'For instance, for PS2 and PS4 the “parent platform” is PlayStation.',
  operationId: 'platforms_lists_parents_list',
  request: {
    query: z.object({
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(PlatformParentSingleSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getPlatformsIdRoute = createRoute({
  method: 'get',
  path: '/platforms/{id}',
  tags: ['platforms'],
  summary: 'Get details of the platform.',
  operationId: 'platforms_read',
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
            description: 'A unique integer value identifying this Platform.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PlatformSingleSchema } } },
  },
})

export const getPublishersRoute = createRoute({
  method: 'get',
  path: '/publishers',
  tags: ['publishers'],
  summary: 'Get a list of video game publishers.',
  operationId: 'publishers_list',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(PublisherSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getPublishersIdRoute = createRoute({
  method: 'get',
  path: '/publishers/{id}',
  tags: ['publishers'],
  summary: 'Get details of the publisher.',
  operationId: 'publishers_read',
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
            description: 'A unique integer value identifying this Publisher.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PublisherSingleSchema } } },
  },
})

export const getStoresRoute = createRoute({
  method: 'get',
  path: '/stores',
  tags: ['stores'],
  summary: 'Get a list of video game storefronts.',
  operationId: 'stores_list',
  request: {
    query: z.object({
      ordering: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Which field to use when ordering the results.',
            in: 'query',
            name: 'ordering',
            required: false,
            schema: { type: 'string' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(StoreSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getStoresIdRoute = createRoute({
  method: 'get',
  path: '/stores/{id}',
  tags: ['stores'],
  summary: 'Get details of the store.',
  operationId: 'stores_read',
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
            description: 'A unique integer value identifying this Store.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: StoreSingleSchema } } },
  },
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['tags'],
  summary: 'Get a list of tags.',
  operationId: 'tags_list',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A page number within the paginated result set.',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      page_size: z
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
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z.int(),
              next: z.url().nullable().exactOptional(),
              previous: z.url().nullable().exactOptional(),
              results: z.array(TagSchema),
            })
            .openapi({ required: ['count', 'results'] }),
        },
      },
    },
  },
})

export const getTagsIdRoute = createRoute({
  method: 'get',
  path: '/tags/{id}',
  tags: ['tags'],
  summary: 'Get details of the tag.',
  operationId: 'tags_read',
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
            description: 'A unique integer value identifying this Tag.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: TagSingleSchema } } },
  },
})
