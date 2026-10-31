import { createRoute, z } from '@hono/zod-openapi'

type CategoryType = {
  child_episode_count?: number
  child_programme_count?: number
  contextual_title?: string
  id: string
  kind: 'genre' | 'accessibility' | 'national' | 'childrens'
  parent_category?: string
  sub_categories?: CategoryType[]
  title: string
  type: 'category'
}

const MasterBrandSchema = z
  .strictObject({
    attribution: z.string(),
    id: z.string(),
    ident_id: z.string().exactOptional(),
    titles: z
      .strictObject({ large: z.string(), medium: z.string(), small: z.string() })
      .openapi({ required: ['small', 'medium', 'large'] }),
  })
  .openapi({ required: ['id', 'titles', 'attribution'] })
  .openapi('MasterBrand')

const InteractionSchema = z
  .strictObject({
    interaction_points: z
      .strictObject({ show_from: z.number(), skip_to: z.number() })
      .openapi({ required: ['show_from', 'skip_to'] }),
    subtype: z.union([
      z.string(),
      z.enum(['intro', 'recap', 'this-episode-preview', 'next-episode-teaser']),
    ]),
    title: z
      .strictObject({
        long: z.union([z.string(), z.enum(['Skip intro', 'Skip recap', 'Skip preview'])]),
        short: z.union([z.string(), z.literal('Skip')]),
      })
      .openapi({ required: ['short', 'long'] }),
    type: z.union([z.string(), z.literal('skip')]),
  })
  .openapi({ required: ['title', 'type', 'subtype', 'interaction_points'] })
  .openapi('Interaction')

const EpisodeSchema = z
  .strictObject({
    audio_described: z.boolean(),
    categories: z.array(z.string()),
    childrens: z.boolean().exactOptional(),
    editorial_subtitle: z.string().exactOptional(),
    editorial_title: z.string().exactOptional(),
    event_group_id: z.string().exactOptional(),
    guidance: z.boolean(),
    has_credits: z.boolean().exactOptional(),
    id: z.string(),
    images: z
      .strictObject({
        character_image: z.string().exactOptional(),
        inherited_from: z.string().exactOptional(),
        live: z.string().exactOptional(),
        portrait: z.string().exactOptional(),
        promotional: z.string().exactOptional(),
        promotional_with_logo: z.string().exactOptional(),
        standard: z.string(),
        type: z.literal('image'),
      })
      .openapi({ required: ['type', 'standard'] }),
    labels: z
      .strictObject({
        category: z.string().exactOptional(),
        editorial: z.string().exactOptional(),
        editorial_category: z.string().exactOptional(),
        time: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    lexical_sort_letter: z.string(),
    live: z.boolean().exactOptional(),
    live_subtitle: z.string().exactOptional(),
    live_title: z.string().exactOptional(),
    master_brand: MasterBrandSchema,
    next_broadcast: z
      .strictObject({ channel_title: z.string(), scheduled_start: z.string() })
      .exactOptional()
      .openapi({ required: ['channel_title', 'scheduled_start'] }),
    numeric_tleo_position: z.number().exactOptional(),
    original_title: z.string().exactOptional(),
    parent_id: z.string().exactOptional(),
    parent_position: z.number().exactOptional(),
    preview_id: z.string().exactOptional(),
    programme_type: z
      .enum(['narrative', 'sequential', 'self-contained', 'strand', 'unclassified', 'one-off'])
      .exactOptional(),
    promoted: z.boolean().exactOptional(),
    related_links: z
      .array(
        z
          .strictObject({
            id: z.string(),
            kind: z.string(),
            title: z.string(),
            type: z.literal('link'),
            url: z.string(),
          })
          .openapi({ required: ['id', 'url', 'type', 'kind', 'title'] }),
      )
      .exactOptional(),
    release_date: z.string().exactOptional(),
    release_date_time: z.string().exactOptional(),
    requires_ab: z
      .array(z.enum(['u13', 'u16', 'u18', 'o18']))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    requires_sign_in: z.boolean(),
    requires_tv_licence: z.boolean().exactOptional(),
    signed: z.boolean(),
    slice_id: z.string().exactOptional(),
    slice_subtitle: z.string().exactOptional(),
    status: z.enum(['available', 'unavailable']),
    subtitle: z.string().exactOptional(),
    synopses: z
      .strictObject({
        editorial: z.string().exactOptional(),
        large: z.string().exactOptional(),
        live: z.string().exactOptional(),
        medium: z.string().exactOptional(),
        preview: z.string().exactOptional(),
        programme_small: z.string().exactOptional(),
        small: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
    tests: z
      .array(
        z
          .object({
            id: z.string(),
            status: z.literal('active'),
            variants: z.array(
              z
                .object({
                  data: z
                    .object({
                      images: z
                        .object({
                          standard: z.string(),
                          type: z.enum(['episode', 'episode_large']),
                        })
                        .openapi({ required: ['type', 'standard'] }),
                    })
                    .openapi({ required: ['images'] }),
                  id: z.string(),
                })
                .openapi({ required: ['id', 'data'] }),
            ),
          })
          .openapi({ required: ['id', 'variants', 'status'] }),
      )
      .exactOptional(),
    title: z.string(),
    tleo_id: z.string(),
    tleo_type: z.enum(['episode', 'brand', 'series']),
    type: z.enum(['episode', 'episode_large']),
    versions: z.array(
      z.union([
        z
          .strictObject({
            availability: z
              .strictObject({
                accurate_start: z.string().exactOptional(),
                end: z.string().exactOptional(),
                remaining: z
                  .strictObject({ text: z.string() })
                  .exactOptional()
                  .openapi({ required: ['text'] }),
                start: z.string(),
              })
              .openapi({ required: ['start'] }),
            credits_start: z.number().exactOptional(),
            download: z.boolean(),
            duration: z
              .strictObject({ text: z.string(), value: z.string() })
              .openapi({ required: ['text', 'value'] }),
            events: z
              .array(
                z.xor([
                  z
                    .strictObject({ name: z.string(), offset: z.int(), system: z.string() })
                    .openapi({ required: ['name', 'system', 'offset'] }),
                  z
                    .strictObject({ name: z.string(), system: z.string(), time: z.string() })
                    .openapi({ required: ['name', 'system', 'time'] }),
                ]),
              )
              .exactOptional(),
            first_broadcast: z.string().exactOptional(),
            first_broadcast_date_time: z.string().exactOptional(),
            guidance: z
              .strictObject({
                id: z.string(),
                text: z
                  .strictObject({
                    large: z.string().exactOptional(),
                    medium: z.string().exactOptional(),
                    small: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: ['id'] }),
            hd: z.boolean(),
            id: z.string(),
            interactions: z.array(InteractionSchema).exactOptional(),
            kind: z.enum([
              'legal',
              'editorial',
              'technical-replacement',
              'original',
              'iplayer-version',
              'lengthened',
              'shortened',
              'pre-watershed',
              'post-watershed',
              'warnings-higher',
              'warnings-lower',
              'warnings-none',
              'duplication',
              'open-subtitled',
              'other',
              'audio-described',
              'signed',
              'webcast',
              'simulcast',
            ]),
            rrc: z
              .strictObject({
                description: z
                  .strictObject({ large: z.string(), small: z.string() })
                  .openapi({ required: ['small', 'large'] }),
                url: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: ['description'] }),
            service_id: z.string().exactOptional(),
            type: z.enum(['version', 'version_large']),
            uhd: z.boolean(),
          })
          .openapi({
            required: ['id', 'type', 'hd', 'uhd', 'download', 'duration', 'kind', 'availability'],
          }),
        z
          .strictObject({
            download: z.boolean(),
            duration: z
              .strictObject({ text: z.string(), value: z.string() })
              .openapi({ required: ['text', 'value'] }),
            guidance: z
              .strictObject({
                id: z.string(),
                text: z
                  .strictObject({
                    large: z.string().exactOptional(),
                    medium: z.string().exactOptional(),
                    small: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .exactOptional()
              .openapi({ required: ['id'] }),
            hd: z.boolean(),
            id: z.string(),
            kind: z.string(),
            store_id: z.string(),
            store_profile: z.string(),
            store_session: z
              .strictObject({
                ceiling: z.number().exactOptional(),
                stats: z
                  .object({
                    assetName: z.string().exactOptional(),
                    contentType: z.string().exactOptional(),
                    contentVariant: z.string().exactOptional(),
                    episodeName: z.string().exactOptional(),
                    parentPID: z.string().exactOptional(),
                    parentPIDType: z.string().exactOptional(),
                    productVariant: z.string().exactOptional(),
                    viewerId: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
                token: z.string(),
              })
              .exactOptional()
              .openapi({ required: ['token', 'stats'] }),
            type: z.literal('store_version'),
          })
          .openapi({
            required: [
              'id',
              'type',
              'store_id',
              'store_profile',
              'hd',
              'download',
              'duration',
              'kind',
            ],
          }),
      ]),
    ),
  })
  .openapi({
    required: [
      'id',
      'type',
      'title',
      'images',
      'signed',
      'audio_described',
      'status',
      'tleo_id',
      'guidance',
      'synopses',
      'versions',
      'tleo_type',
      'categories',
      'master_brand',
      'lexical_sort_letter',
      'requires_sign_in',
    ],
  })
  .openapi('Episode')

const ProgrammeSchema = z
  .strictObject({
    categories: z.array(z.string()),
    count: z.number(),
    id: z.string(),
    images: z
      .strictObject({
        inherited_from: z.string().exactOptional(),
        standard: z.string(),
        type: z.literal('image'),
      })
      .openapi({ required: ['type', 'standard'] }),
    initial_children: z.array(EpisodeSchema),
    labels: z
      .strictObject({ category: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    lexical_sort_letter: z.string(),
    master_brand: MasterBrandSchema,
    programme_type: z
      .enum(['narrative', 'sequential', 'self-contained', 'strand', 'unclassified', 'one-off'])
      .exactOptional(),
    status: z.enum(['available', 'unavailable']),
    synopses: z
      .strictObject({
        large: z.string().exactOptional(),
        medium: z.string().exactOptional(),
        small: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
    title: z.string(),
    tleo_type: z.enum(['brand', 'series', 'episode']).exactOptional(),
    type: z.enum(['programme', 'programme_large']),
  })
  .openapi({
    required: [
      'id',
      'type',
      'title',
      'synopses',
      'lexical_sort_letter',
      'images',
      'master_brand',
      'categories',
      'status',
      'count',
      'initial_children',
    ],
  })
  .openapi('Programme')

const AddedSchema = z
  .strictObject({ programme: ProgrammeSchema, type: z.literal('added'), urn: z.string() })
  .openapi({ required: ['urn', 'type', 'programme'] })
  .openapi('Added')

const BroadcastSchema = z
  .strictObject({
    available_on_hd_service: z.string().nullable().exactOptional(),
    blanked: z.boolean(),
    channel_title: z.string().exactOptional(),
    duration: z
      .strictObject({ text: z.string(), value: z.string() })
      .exactOptional()
      .openapi({ required: ['value', 'text'] }),
    episode: EpisodeSchema,
    episode_id: z.string(),
    events: z
      .array(
        z
          .strictObject({ name: z.string(), system: z.string(), time: z.string() })
          .openapi({ required: ['name', 'system', 'time'] }),
      )
      .exactOptional(),
    id: z.string(),
    repeat: z.boolean(),
    scheduled_end: z.string(),
    scheduled_start: z.string(),
    service_id: z.string(),
    transmission_end: z.string().exactOptional(),
    transmission_start: z.string().exactOptional(),
    type: z.literal('broadcast'),
    version_id: z.string(),
  })
  .openapi({
    required: [
      'id',
      'type',
      'scheduled_start',
      'scheduled_end',
      'repeat',
      'blanked',
      'episode',
      'episode_id',
      'version_id',
      'service_id',
    ],
  })
  .openapi('Broadcast')

const CategorySchema: z.ZodType<CategoryType> = z
  .lazy(() =>
    z
      .strictObject({
        child_episode_count: z.number().exactOptional(),
        child_programme_count: z.number().exactOptional(),
        contextual_title: z.string().exactOptional(),
        id: z.string(),
        kind: z.enum(['genre', 'accessibility', 'national', 'childrens']),
        parent_category: z.string().exactOptional(),
        sub_categories: z.array(CategorySchema).exactOptional(),
        title: z.string(),
        type: z.literal('category'),
      })
      .openapi({ required: ['id', 'title', 'type', 'kind'] }),
  )
  .openapi('Category')

const ChannelSchema = z
  .strictObject({
    has_schedule: z.boolean(),
    id: z.string(),
    master_brand_id: z.string(),
    master_brand_title: z.string(),
    on_air: z.boolean().exactOptional(),
    title: z.string(),
    type: z.literal('channel'),
  })
  .openapi({
    required: ['id', 'title', 'type', 'has_schedule', 'master_brand_id', 'master_brand_title'],
  })
  .openapi('Channel')

const ClipSchema = z
  .strictObject({
    id: z.string(),
    images: z
      .strictObject({
        inherited_from: z.string().exactOptional(),
        standard: z.string(),
        type: z.literal('image'),
      })
      .openapi({ required: ['type', 'standard'] }),
    labels: z
      .strictObject({ category: z.string().exactOptional(), editorial: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    master_brand: MasterBrandSchema,
    onward_journey: z
      .strictObject({ id: z.string().exactOptional(), type: z.literal('episode').exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    promotion_type: z.enum(['available_now', 'coming_soon']).exactOptional(),
    synopses: z
      .strictObject({
        editorial: z.string().exactOptional(),
        large: z.string().exactOptional(),
        medium: z.string().exactOptional(),
        small: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
    title: z.string(),
    tleo_id: z.string(),
    tleo_type: z.enum(['episode', 'brand', 'series']).exactOptional(),
    type: z.literal('clip'),
    versions: z.array(
      z
        .strictObject({
          availability: z
            .strictObject({
              accurate_start: z.string().exactOptional(),
              end: z.string().exactOptional(),
              remaining: z
                .strictObject({ text: z.string() })
                .exactOptional()
                .openapi({ required: ['text'] }),
              start: z.string(),
            })
            .openapi({ required: ['start'] }),
          credits_start: z.number().exactOptional(),
          download: z.boolean(),
          duration: z
            .strictObject({ text: z.string(), value: z.string() })
            .openapi({ required: ['text', 'value'] }),
          events: z
            .array(
              z.xor([
                z
                  .strictObject({ name: z.string(), offset: z.int(), system: z.string() })
                  .openapi({ required: ['name', 'system', 'offset'] }),
                z
                  .strictObject({ name: z.string(), system: z.string(), time: z.string() })
                  .openapi({ required: ['name', 'system', 'time'] }),
              ]),
            )
            .exactOptional(),
          first_broadcast: z.string().exactOptional(),
          first_broadcast_date_time: z.string().exactOptional(),
          guidance: z
            .strictObject({
              id: z.string(),
              text: z
                .strictObject({
                  large: z.string().exactOptional(),
                  medium: z.string().exactOptional(),
                  small: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .exactOptional()
            .openapi({ required: ['id'] }),
          hd: z.boolean(),
          id: z.string(),
          interactions: z.array(InteractionSchema).exactOptional(),
          kind: z.enum([
            'legal',
            'editorial',
            'technical-replacement',
            'original',
            'iplayer-version',
            'lengthened',
            'shortened',
            'pre-watershed',
            'post-watershed',
            'warnings-higher',
            'warnings-lower',
            'warnings-none',
            'duplication',
            'open-subtitled',
            'other',
            'audio-described',
            'signed',
            'webcast',
            'simulcast',
          ]),
          rrc: z
            .strictObject({
              description: z
                .strictObject({ large: z.string(), small: z.string() })
                .openapi({ required: ['small', 'large'] }),
              url: z.string().exactOptional(),
            })
            .exactOptional()
            .openapi({ required: ['description'] }),
          service_id: z.string().exactOptional(),
          type: z.enum(['version', 'version_large']),
          uhd: z.boolean(),
        })
        .openapi({
          required: ['id', 'type', 'hd', 'uhd', 'download', 'duration', 'kind', 'availability'],
        }),
    ),
  })
  .openapi({
    required: ['id', 'type', 'title', 'images', 'tleo_id', 'synopses', 'versions', 'master_brand'],
  })
  .openapi('Clip')

const GroupSchema = z
  .strictObject({
    count: z.number().exactOptional(),
    episode_sort_direction: z.string().exactOptional(),
    group_type: z.enum(['tleo', 'curated', 'automated', 'event']).exactOptional(),
    id: z.string(),
    images: z
      .strictObject({ standard: z.string(), type: z.literal('image'), vertical: z.string() })
      .exactOptional()
      .openapi({ required: ['type', 'standard', 'vertical'] }),
    initial_children: z.array(z.union([EpisodeSchema, BroadcastSchema])).exactOptional(),
    master_brand: MasterBrandSchema.exactOptional(),
    related_links: z
      .array(
        z
          .strictObject({ kind: z.string(), title: z.string(), url: z.string() })
          .openapi({ required: ['kind', 'url', 'title'] }),
      )
      .exactOptional(),
    short_title: z.string().exactOptional(),
    stacked: z.boolean().exactOptional(),
    synopses: z
      .strictObject({
        large: z.string().exactOptional(),
        medium: z.string().exactOptional(),
        small: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    title: z.string().exactOptional(),
    type: z.enum(['group', 'group_large']),
  })
  .openapi({ required: ['id', 'type'] })
  .openapi('Group')

const IblSchema = z.any().openapi('Ibl')

const PromotionSchema = z
  .strictObject({
    id: z.string(),
    images: z
      .strictObject({
        inherited_from: z.string().exactOptional(),
        standard: z.string(),
        type: z.literal('image'),
      })
      .exactOptional()
      .openapi({ required: ['type', 'standard'] }),
    labels: z
      .strictObject({ promotion: z.string() })
      .exactOptional()
      .openapi({ required: ['promotion'] }),
    subtitle: z.string().exactOptional(),
    synopses: z
      .strictObject({
        large: z.string().exactOptional(),
        medium: z.string().exactOptional(),
        small: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    title: z.string().exactOptional(),
    type: z.literal('promotion'),
    url: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'type'] })
  .openapi('Promotion')

const RegionSchema = z
  .strictObject({
    id: z.string(),
    kind: z.enum(['regional', 'national']),
    short_id: z.string(),
    title: z.string(),
    type: z.literal('region'),
  })
  .openapi({ required: ['id', 'short_id', 'type', 'title', 'kind'] })
  .openapi('Region')

const SearchGroupSchema = z
  .strictObject({ episode: EpisodeSchema, id: z.string(), type: z.literal('search_group') })
  .openapi({ required: ['id', 'type', 'episode'] })
  .openapi('SearchGroup')

const StoreVersionSchema = z
  .strictObject({
    download: z.boolean(),
    duration: z
      .strictObject({ text: z.string(), value: z.string() })
      .openapi({ required: ['text', 'value'] }),
    guidance: z
      .strictObject({
        id: z.string(),
        text: z
          .strictObject({
            large: z.string().exactOptional(),
            medium: z.string().exactOptional(),
            small: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: ['id'] }),
    hd: z.boolean(),
    id: z.string(),
    kind: z.string(),
    store_id: z.string(),
    store_profile: z.string(),
    store_session: z
      .strictObject({
        ceiling: z.number().exactOptional(),
        stats: z
          .object({
            assetName: z.string().exactOptional(),
            contentType: z.string().exactOptional(),
            contentVariant: z.string().exactOptional(),
            episodeName: z.string().exactOptional(),
            parentPID: z.string().exactOptional(),
            parentPIDType: z.string().exactOptional(),
            productVariant: z.string().exactOptional(),
            viewerId: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
        token: z.string(),
      })
      .exactOptional()
      .openapi({ required: ['token', 'stats'] }),
    type: z.literal('store_version'),
  })
  .openapi({
    required: ['id', 'type', 'store_id', 'store_profile', 'hd', 'download', 'duration', 'kind'],
  })
  .openapi('StoreVersion')

const TrailerSchema = z
  .strictObject({
    id: z.string(),
    kind: z.enum(['available_now', 'watch_now', 'coming_soon', 'streaming_now_sounds', 'other']),
    message: z.string(),
    title: z.string(),
    type: z.literal('trailer'),
    version_id: z.string(),
  })
  .openapi({ required: ['id', 'type', 'title', 'kind', 'version_id', 'message'] })
  .openapi('Trailer')

const UserRecommendationSchema = z
  .strictObject({
    algorithm: z.string(),
    episode: EpisodeSchema,
    type: z.literal('user_recommendation'),
  })
  .openapi({ required: ['algorithm', 'type', 'episode'] })
  .openapi('UserRecommendation')

const VersionSchema = z
  .strictObject({
    availability: z
      .strictObject({
        accurate_start: z.string().exactOptional(),
        end: z.string().exactOptional(),
        remaining: z
          .strictObject({ text: z.string() })
          .exactOptional()
          .openapi({ required: ['text'] }),
        start: z.string(),
      })
      .openapi({ required: ['start'] }),
    credits_start: z.number().exactOptional(),
    download: z.boolean(),
    duration: z
      .strictObject({ text: z.string(), value: z.string() })
      .openapi({ required: ['text', 'value'] }),
    events: z
      .array(
        z.xor([
          z
            .strictObject({ name: z.string(), offset: z.int(), system: z.string() })
            .openapi({ required: ['name', 'system', 'offset'] }),
          z
            .strictObject({ name: z.string(), system: z.string(), time: z.string() })
            .openapi({ required: ['name', 'system', 'time'] }),
        ]),
      )
      .exactOptional(),
    first_broadcast: z.string().exactOptional(),
    first_broadcast_date_time: z.string().exactOptional(),
    guidance: z
      .strictObject({
        id: z.string(),
        text: z
          .strictObject({
            large: z.string().exactOptional(),
            medium: z.string().exactOptional(),
            small: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: ['id'] }),
    hd: z.boolean(),
    id: z.string(),
    interactions: z.array(InteractionSchema).exactOptional(),
    kind: z.enum([
      'legal',
      'editorial',
      'technical-replacement',
      'original',
      'iplayer-version',
      'lengthened',
      'shortened',
      'pre-watershed',
      'post-watershed',
      'warnings-higher',
      'warnings-lower',
      'warnings-none',
      'duplication',
      'open-subtitled',
      'other',
      'audio-described',
      'signed',
      'webcast',
      'simulcast',
    ]),
    rrc: z
      .strictObject({
        description: z
          .strictObject({ large: z.string(), small: z.string() })
          .openapi({ required: ['small', 'large'] }),
        url: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['description'] }),
    service_id: z.string().exactOptional(),
    type: z.enum(['version', 'version_large']),
    uhd: z.boolean(),
  })
  .openapi({
    required: ['id', 'type', 'hd', 'uhd', 'download', 'duration', 'kind', 'availability'],
  })
  .openapi('Version')

const WatchingSchema = z
  .strictObject({
    episode: EpisodeSchema,
    has_next: z.boolean(),
    offset: z.number().exactOptional(),
    programme: ProgrammeSchema,
    progress: z.number().exactOptional(),
    remaining: z.number().exactOptional(),
    status: z.enum(['current', 'next', 'ended']).exactOptional(),
    type: z.literal('watching'),
    urn: z.string(),
    version: VersionSchema,
  })
  .openapi({ required: ['type', 'urn', 'episode', 'programme', 'version', 'has_next'] })
  .openapi('Watching')

const AvailabilityParamsSchema = z
  .enum(['all', 'available'])
  .default('available')
  .openapi({
    param: {
      description: 'Whether to return all, or available programmes',
      in: 'query',
      name: 'availability',
      required: true,
      schema: { default: 'available', enum: ['all', 'available'], type: 'string' },
    },
  })

const CategoryParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The category identifier to return results from.',
      in: 'path',
      name: 'category',
      required: true,
      schema: { type: 'string' },
    },
  })

const ChannelParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The channel identifier to limit results to.',
      in: 'path',
      name: 'channel',
      required: true,
      schema: { type: 'string' },
    },
  })

const IdentityCookieParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.float64(),
  )
  .openapi({
    param: {
      description: 'The BBC-id cookie value',
      in: 'query',
      name: 'identity_cookie',
      required: true,
      schema: { format: 'double', type: 'number' },
    },
  })

const InitialChildCountParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(4),
  )
  .default(4)
  .openapi({
    param: {
      description: 'The depth to return child entities.',
      in: 'query',
      name: 'initial_child_count',
      required: true,
      schema: { default: 4, maximum: 4, minimum: 1, type: 'integer' },
    },
  })

const LangParamsSchema = z
  .enum(['en', 'cy', 'ga', 'gd', 'pi'])
  .openapi({
    param: {
      description: 'The language for any applicable localised strings.',
      in: 'query',
      name: 'lang',
      required: true,
      schema: { enum: ['en', 'cy', 'ga', 'gd', 'pi'], type: 'string' },
    },
  })

const MixinParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.union([z.literal('live'), z.literal('promotions')]),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'Request additional data in the output',
      explode: true,
      in: 'query',
      name: 'mixin',
      required: false,
      schema: { enum: ['live', 'promotions'], items: { type: 'string' }, type: 'array' },
    },
  })

const PageParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64())
  .openapi({
    param: {
      description: 'The page index.',
      in: 'query',
      name: 'page',
      required: true,
      schema: { format: 'int64', type: 'integer' },
    },
  })

const PerPageParamsSchema = z
  .preprocess((val) => {
    if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)) return val
    if (/^-?\d+$/.test(val)) return BigInt(val)
    const num = Number(val)
    return Number.isSafeInteger(num) ? BigInt(num) : val
  }, z.int64())
  .openapi({
    param: {
      description: 'The number of results to return.',
      in: 'query',
      name: 'per_page',
      required: true,
      schema: { format: 'int64', type: 'integer' },
    },
  })

const PidParamsSchema = z
  .string()
  .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
  .min(8)
  .openapi({
    param: {
      description: 'The programme identifier.',
      in: 'path',
      name: 'pid',
      required: true,
      schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
    },
  })

const QParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The term to search for.',
      in: 'query',
      name: 'q',
      required: true,
      schema: { type: 'string' },
    },
  })

const RightsParamsSchema = z
  .enum(['mobile', 'tv', 'web'])
  .default('web')
  .openapi({
    param: {
      description: 'The rights group to limit results to.',
      in: 'query',
      name: 'rights',
      required: true,
      schema: { default: 'web', enum: ['mobile', 'tv', 'web'], type: 'string' },
    },
  })

const SortParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The sort order of the results.',
      in: 'query',
      name: 'sort',
      required: true,
      schema: { type: 'string' },
    },
  })

const SortDirectionParamsSchema = z
  .enum(['asc', 'desc'])
  .openapi({
    param: {
      description: 'Whether to sort ascending or descending',
      in: 'query',
      name: 'sort_direction',
      required: true,
      schema: { enum: ['asc', 'desc'], type: 'string' },
    },
  })

const ApiKeySecurityScheme = { in: 'query', name: 'api_key', type: 'apiKey' }

const BasicSecurityScheme = {
  description: 'Used only by store purchases.',
  scheme: 'basic',
  type: 'http',
}

export const getAtozLetterProgrammesRoute = createRoute({
  method: 'get',
  path: '/atoz/{letter}/programmes',
  tags: ['A to Z'],
  summary: 'Programmes by initial title character',
  description: 'Get the Programmes whose title begins with the given initial character.',
  operationId: 'Get_Programmes AtoZ search_',
  request: {
    params: z.object({
      letter: z
        .string()
        .regex(/[a-z](0-9)/)
        .openapi({
          param: {
            description: "Letter to search by, a to z or the string '0-9'",
            in: 'path',
            name: 'letter',
            required: true,
            schema: { pattern: '[a-z](0-9)', type: 'string' },
          },
        }),
    }),
    query: z.object({
      rights: RightsParamsSchema,
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
      initial_child_count: InitialChildCountParamsSchema,
      sort: z
        .literal('title')
        .openapi({
          param: {
            description: 'The sort order of the results.',
            in: 'query',
            name: 'sort',
            required: true,
            schema: { enum: ['title'], type: 'string' },
          },
        }),
      sort_direction: SortDirectionParamsSchema,
      availability: AvailabilityParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getCategoriesRoute = createRoute({
  method: 'get',
  path: '/categories',
  tags: ['Categories'],
  summary: 'Get categories',
  description: 'Get the list of all the categories in TV & iPlayer.',
  operationId: 'Get_Categories_',
  request: { query: z.object({ lang: LangParamsSchema }) },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getCategoriesCategoryRoute = createRoute({
  method: 'get',
  path: '/categories/{category}',
  tags: ['Categories'],
  summary: 'Get sub-categories',
  description: 'Get sub-categories',
  operationId: 'Get_Sub-categories_',
  request: {
    params: z.object({ category: CategoryParamsSchema }),
    query: z.object({ lang: LangParamsSchema }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getCategoriesCategoryEpisodesRoute = createRoute({
  method: 'get',
  path: '/categories/{category}/episodes',
  tags: ['Episodes'],
  summary: 'List all the episodes for a category.',
  description: 'Get the list of all the episodes for a given category in TV & iPlayer.',
  operationId: 'Get_Episodes by category_',
  request: {
    params: z.object({ category: CategoryParamsSchema }),
    query: z.object({
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
      sort: z
        .enum(['recent', 'popular'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The sort order of the results.',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['recent', 'popular'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getCategoriesCategoryHighlightsRoute = createRoute({
  method: 'get',
  path: '/categories/{category}/highlights',
  tags: ['Programmes (TLEOs)'],
  summary: 'List the highlights for a category.',
  description: 'Get the editorial highlights of a given category in TV & iPlayer.',
  operationId: 'Get_Highlights by category_',
  request: {
    params: z.object({ category: CategoryParamsSchema }),
    query: z.object({
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      mixin: MixinParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getCategoriesCategoryProgrammesRoute = createRoute({
  method: 'get',
  path: '/categories/{category}/programmes',
  tags: ['Programmes (TLEOs)'],
  summary: 'List all the programmes for a category.',
  description: 'Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.',
  operationId: 'Get_Programmes by category_',
  request: {
    params: z.object({ category: CategoryParamsSchema }),
    query: z.object({
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getChannelsRoute = createRoute({
  method: 'get',
  path: '/channels',
  tags: ['Channels'],
  summary: 'List all the channels.',
  description: 'Get the list of all the channels TV & iPlayer.',
  operationId: 'Get_Channels_',
  request: {
    query: z.object({
      region: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The region to get the channels for.',
            in: 'query',
            name: 'region',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang: LangParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getChannelsChannelBroadcastsRoute = createRoute({
  method: 'get',
  path: '/channels/{channel}/broadcasts',
  tags: ['Programmes (TLEOs)'],
  summary: 'Get broadcasts by channel',
  description: 'Get broadcasts by channel',
  operationId: 'Get_Broadcasts by channel_',
  request: {
    params: z.object({ channel: ChannelParamsSchema }),
    query: z.object({
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      mixin: MixinParamsSchema,
      per_page: PerPageParamsSchema,
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Time to return results from, e.g. -3h',
            in: 'query',
            name: 'from',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getChannelsChannelHighlightsRoute = createRoute({
  method: 'get',
  path: '/channels/{channel}/highlights',
  tags: ['Channels'],
  summary: 'List the highlights for a channel.',
  description: 'Get the editorial highlights of a given channel in TV & iPlayer.',
  operationId: 'Get_Highlights by channel_',
  request: {
    params: z.object({ channel: ChannelParamsSchema }),
    query: z.object({
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      live: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to include live programmes',
            in: 'query',
            name: 'live',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      mixin: MixinParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getChannelsChannelProgrammesRoute = createRoute({
  method: 'get',
  path: '/channels/{channel}/programmes',
  tags: ['Programmes (TLEOs)'],
  summary: 'Get programmes by channel',
  description: 'Get programmes by channel',
  operationId: 'Get_Programmes by channel_',
  request: {
    params: z.object({ channel: ChannelParamsSchema }),
    query: z.object({
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getChannelsChannelScheduleDateRoute = createRoute({
  method: 'get',
  path: '/channels/{channel}/schedule/{date}',
  tags: ['Channels'],
  summary: 'Get schedule by channel',
  description: 'Get schedule by channel',
  operationId: 'Get_Schedule by channel_',
  request: {
    params: z.object({
      channel: ChannelParamsSchema,
      date: z
        .string()
        .openapi({
          param: {
            description: 'The date to return the schedule for, yyyy-mm-dd format',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getClipsPidRoute = createRoute({
  method: 'get',
  path: '/clips/{pid}',
  tags: ['Episodes'],
  summary: 'Get Clips',
  description: 'Get Clips',
  operationId: 'Get_Clips_',
  request: {
    params: z.object({ pid: PidParamsSchema }),
    query: z.object({ rights: RightsParamsSchema, availability: AvailabilityParamsSchema }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getEpisodesPidRoute = createRoute({
  method: 'get',
  path: '/episodes/{pid}',
  tags: ['Episodes'],
  summary: 'Episode for a given pid.',
  description: 'Get the episode for a given episode identifier.',
  operationId: 'Get_Programme by PID_',
  request: {
    params: z.object({ pid: PidParamsSchema }),
    query: z.object({
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      mixin: MixinParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getEpisodesPidNextRoute = createRoute({
  method: 'get',
  path: '/episodes/{pid}/next',
  tags: ['Episodes'],
  summary: 'Get Onward Journey',
  description: 'Get Onward Journey (next programme)',
  operationId: 'Get_Onward_Journey',
  request: {
    params: z.object({ pid: PidParamsSchema }),
    query: z.object({ rights: RightsParamsSchema, availability: AvailabilityParamsSchema }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getEpisodesPidPostrollsRoute = createRoute({
  method: 'get',
  path: '/episodes/{pid}/postrolls',
  tags: ['Episodes'],
  summary: 'Get Follow-ups (post-rolls)',
  description: 'Get Follow-ups (post-rolls)',
  operationId: 'getPostRolls',
  request: {
    params: z.object({ pid: PidParamsSchema }),
    query: z.object({ rights: RightsParamsSchema, availability: AvailabilityParamsSchema }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getEpisodesPidPrerollsRoute = createRoute({
  method: 'get',
  path: '/episodes/{pid}/prerolls',
  tags: ['Episodes'],
  summary: 'Get Trailers (pre-rolls)',
  description: 'Get Trailers (pre-rolls)',
  operationId: 'Get_Trailers (pre-rolls)_',
  request: {
    params: z.object({ pid: PidParamsSchema }),
    query: z.object({ rights: RightsParamsSchema, availability: AvailabilityParamsSchema }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getEpisodesPidRecommendationsRoute = createRoute({
  method: 'get',
  path: '/episodes/{pid}/recommendations',
  tags: ['Episodes'],
  summary: 'Get programme recommendations',
  description: 'Get programme recommendations',
  operationId: 'Get_Programme recommendations_',
  request: {
    params: z.object({ pid: PidParamsSchema }),
    query: z.object({
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getGroupsPopularEpisodesRoute = createRoute({
  method: 'get',
  path: '/groups/popular/episodes',
  tags: ['Episodes'],
  summary: 'Get programmes popular',
  description: 'Get programmes popular',
  operationId: 'Get_Programmes popular_',
  request: {
    query: z.object({
      rights: RightsParamsSchema,
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
      initial_child_count: InitialChildCountParamsSchema,
      sort: SortParamsSchema,
      sort_direction: SortDirectionParamsSchema,
      availability: AvailabilityParamsSchema,
      mixin: MixinParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getGroupsPidEpisodesRoute = createRoute({
  method: 'get',
  path: '/groups/{pid}/episodes',
  tags: ['Episodes'],
  summary: 'Get episodes by group, brand or series',
  description: 'Get episodes by group, brand or series',
  operationId: 'Get_Episodes by group_',
  request: {
    params: z.object({ pid: PidParamsSchema }),
    query: z.object({
      rights: RightsParamsSchema,
      page: PageParamsSchema,
      per_page: PerPageParamsSchema,
      initial_child_count: InitialChildCountParamsSchema,
      sort: SortParamsSchema,
      sort_direction: SortDirectionParamsSchema,
      availability: AvailabilityParamsSchema,
      mixin: MixinParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getHomeHighlightsRoute = createRoute({
  method: 'get',
  path: '/home/highlights',
  tags: ['Programmes (TLEOs)'],
  summary: 'Get programme highlights',
  description: 'Get programme highlights',
  operationId: 'Get_Programme highlights_',
  request: {
    query: z.object({
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      mixin: MixinParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getProgrammesPidRoute = createRoute({
  method: 'get',
  path: '/programmes/{pid}',
  tags: ['Programmes (TLEOs)'],
  summary: 'Programme for a given pid.',
  description: 'Get the programme for a given programme identifier.',
  operationId: 'Get_Programmes by parent PID_',
  request: {
    params: z.object({ pid: PidParamsSchema }),
    query: z.object({
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      initial_child_count: InitialChildCountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getProgrammesPidEpisodesRoute = createRoute({
  method: 'get',
  path: '/programmes/{pid}/episodes',
  tags: ['Episodes'],
  summary: 'Child episodes for a given programme pid.',
  description: 'Get the child episodes belonging to a given programme identifier.',
  operationId: 'Get_Episodes by parent PID_',
  request: {
    params: z.object({ pid: PidParamsSchema }),
    query: z.object({
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
      initial_child_count: InitialChildCountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getRegionsRoute = createRoute({
  method: 'get',
  path: '/regions',
  tags: ['Regions'],
  summary: 'List all regions',
  description: 'Get the list of all the regions TV & iPlayer.',
  operationId: 'Get_Regions_',
  request: { query: z.object({ lang: LangParamsSchema }) },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getSchemaIblJsonRoute = createRoute({
  method: 'get',
  path: '/schema/ibl.json',
  tags: ['Metadata'],
  summary: 'Get schema',
  description: 'Get schema',
  operationId: 'Get_Schema_',
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getSearchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['Search'],
  summary: 'Search',
  description: 'Search',
  operationId: 'Search_',
  request: {
    query: z.object({
      q: QParamsSchema,
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getSearchSuggestRoute = createRoute({
  method: 'get',
  path: '/search-suggest',
  tags: ['Search'],
  summary: 'Search-suggest',
  description: 'Search-suggest',
  operationId: 'Search-suggest_',
  request: {
    query: z.object({
      q: QParamsSchema,
      lang: LangParamsSchema,
      rights: RightsParamsSchema,
      availability: AvailabilityParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['Metadata'],
  summary: 'Get status',
  description:
    'Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.',
  operationId: 'Get_Status_',
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getUserPurchasesRoute = createRoute({
  method: 'get',
  path: '/user/purchases',
  tags: ['User'],
  summary: 'Get user store purchases',
  description: 'Get user store purchases',
  operationId: 'Get_User store purchases_',
  request: { query: z.object({ identity_cookie: IdentityCookieParamsSchema }) },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [{ basic: [] }],
})

export const getUserRecommendationsRoute = createRoute({
  method: 'get',
  path: '/user/recommendations',
  tags: ['User'],
  summary: 'Get user store recommendations',
  description: 'Get user store recommendations',
  operationId: 'Get_User store recommendations_',
  request: { query: z.object({ identity_cookie: IdentityCookieParamsSchema }) },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})

export const getUserWatchingRoute = createRoute({
  method: 'get',
  path: '/user/watching',
  tags: ['User'],
  summary: 'Get user watching',
  description: 'Get user watching',
  operationId: 'Get_User watching_',
  request: { query: z.object({ identity_cookie: IdentityCookieParamsSchema }) },
  responses: {
    200: {
      description: 'Default response',
      content: { 'application/json': { schema: IblSchema } },
    },
  },
  security: [],
})
