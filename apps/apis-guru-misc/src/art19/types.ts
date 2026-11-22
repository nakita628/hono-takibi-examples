type ResourceIdentifier = { id?: string | undefined; type?: string | undefined }
type ClassificationInclusion = {
  attributes?:
    | {
        classification_id?: string | undefined
        classification_type?:
          | 'AlternateFeedType'
          | 'Genre'
          | 'Industry'
          | 'Language'
          | 'MediaRating'
          | undefined
        classified_id?: string | undefined
        classified_type?: 'Series' | 'Season' | 'Episode' | undefined
        created_at?: string | undefined
        position?: number | undefined
        primary?: boolean | undefined
        updated_at?: string | undefined
      }
    | undefined
  id?: string | undefined
  relationships?:
    | { classification?: { data?: ResourceIdentifier | undefined } | undefined }
    | undefined
  type?: string | undefined
}
type Links = {
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  prev?: string | undefined
  self?: string | undefined
}
type ResourceLink = { self?: string | undefined }
type Classification = {
  attributes?:
    | {
        created_at?: string | undefined
        display_name?: string | undefined
        metadata?: { [x: string]: unknown } | undefined
        parent_id?: string | undefined
        tree_path?: string[] | undefined
        type?: 'AlternateFeedType' | 'Genre' | 'Industry' | 'Language' | 'MediaRating' | undefined
        updated_at?: string | undefined
        value?: string | undefined
        value_path?: string | undefined
      }
    | undefined
  id?: string | undefined
  type?: string | undefined
}
type Credit = {
  attributes?:
    | {
        created_at?: string | undefined
        position?: number | undefined
        type?:
          | 'AnchorCredit'
          | 'AssociateProducerCredit'
          | 'AuthorCredit'
          | 'CastCredit'
          | 'CoHostCredit'
          | 'ComposerCredit'
          | 'CreatorCredit'
          | 'Credit'
          | 'DirectorCredit'
          | 'EditorCredit'
          | 'EngineerCredit'
          | 'ExecutiveProducerCredit'
          | 'GuestCoHostCredit'
          | 'GuestCredit'
          | 'GuestHostCredit'
          | 'HeadWriterCredit'
          | 'HostCredit'
          | 'ProducerCredit'
          | 'ReporterCredit'
          | 'SeniorProducerCredit'
          | 'SidekickCredit'
          | 'VideoProducerCredit'
          | 'WriterCredit'
          | undefined
        updated_at?: string | undefined
      }
    | undefined
  id?: string | undefined
  relationships?:
    | {
        creditable?: { data?: ResourceIdentifier | undefined } | undefined
        person?: { data?: ResourceIdentifier | undefined } | undefined
      }
    | undefined
  type?: string | undefined
}
type Episode = {
  attributes?:
    | {
        allow_user_comments?: boolean | undefined
        cascaded_cover_image_id?: string | undefined
        cover_image_id?: string | undefined
        created_at?: string | undefined
        description?: string | undefined
        description_is_html?: boolean | undefined
        description_plain?: string | undefined
        file_name?: string | undefined
        itunes_type?: 'full' | 'bonus' | 'trailer' | undefined
        listen_count?: number | undefined
        premium_status?: 'active' | 'inactive' | 'force-active' | 'force-inactive' | undefined
        published?: boolean | undefined
        release_end_at?: string | undefined
        release_immediately?: boolean | undefined
        released_at?: string | undefined
        rss_guid?: string | undefined
        season_id?: string | undefined
        series_id?: string | undefined
        sort_title?: string | undefined
        status?: 'active' | 'inactive' | undefined
        title?: string | undefined
        updated_at?: string | undefined
      }
    | undefined
  id?: string | undefined
  relationships?:
    | {
        cascaded_cover_image?: { data?: ResourceIdentifier | undefined } | undefined
        classification_inclusions?: { data?: ResourceIdentifier[] | undefined } | undefined
        cover_image?: { data?: ResourceIdentifier | undefined } | undefined
        credits?: { data?: ResourceIdentifier[] | undefined } | undefined
        default_marker_points?: { data?: ResourceIdentifier[] | undefined } | undefined
        episode_versions?: { data?: ResourceIdentifier[] | undefined } | undefined
        images?: { data?: ResourceIdentifier[] | undefined } | undefined
        season?: { data?: ResourceIdentifier | undefined } | undefined
        segment_lists?: { data?: ResourceIdentifier[] | undefined } | undefined
        series?: { data?: ResourceIdentifier | undefined } | undefined
        taggings?: { data?: ResourceIdentifier[] | undefined } | undefined
        tags?: { data?: ResourceIdentifier[] | undefined } | undefined
      }
    | undefined
  type?: string | undefined
}
type Image = {
  attributes?:
    | {
        bucket_id?: string | undefined
        bucket_type?: 'AdRepAccount' | 'Agency' | 'Network' | 'Series' | 'User' | undefined
        created_at?: string | undefined
        crop_data?:
          | {
              height?: number | undefined
              left?: number | undefined
              top?: number | undefined
              width?: number | undefined
            }
          | undefined
        status?: 'invalid' | 'processing' | 'uploaded' | 'valid' | undefined
        updated_at?: string | undefined
      }
    | undefined
  id?: string | undefined
  relationships?:
    | { media_assets?: { data?: ResourceIdentifier[] | undefined } | undefined }
    | undefined
  type?: string | undefined
}
type MediaAsset = {
  attributes?:
    | {
        attachment_id?: string | undefined
        attachment_type?: 'Image' | 'Segment' | 'SegmentList' | undefined
        cdn_url?: string | undefined
        content_type?: string | undefined
        created_at?: string | undefined
        file_name?: string | undefined
        file_size?: number | undefined
        size_height?: number | undefined
        size_width?: number | undefined
        style?:
          | 'info'
          | 'itunes'
          | 'medium'
          | 'original'
          | 'regular'
          | 'square-400'
          | 'square-640'
          | 'square-888'
          | 'square-3000'
          | 'stripped-original'
          | 'thumb'
          | 'waveform_data'
          | undefined
        updated_at?: string | undefined
      }
    | undefined
  id?: string | undefined
  type?: string | undefined
}
type Network = {
  attributes?:
    | {
        copyright?: string | undefined
        created_at?: string | undefined
        description?: string | undefined
        description_is_html?: boolean | undefined
        description_plain?: string | undefined
        facebook_url?: string | undefined
        instagram_url?: string | undefined
        linkedin_url?: string | undefined
        name?: string | undefined
        public_email?: string | undefined
        public_page_enabled?: boolean | undefined
        slug?: string | undefined
        tumblr_url?: string | undefined
        twitter_url?: string | undefined
        updated_at?: string | undefined
        website_url?: string | undefined
      }
    | undefined
  id?: string | undefined
  relationships?:
    | {
        cover_image?: { data?: ResourceIdentifier | undefined } | undefined
        images?: { data?: ResourceIdentifier[] | undefined } | undefined
        parent?: { data?: ResourceIdentifier | undefined } | undefined
        series?: { data?: ResourceIdentifier[] | undefined } | undefined
      }
    | undefined
  type?: string | undefined
}
type Person = {
  attributes?:
    | {
        avatar_id?: string | undefined
        biography?: string | undefined
        born?: string | undefined
        created_at?: string | undefined
        died?: string | undefined
        first_name?: string | undefined
        from_country?: string | undefined
        from_locality?: string | undefined
        from_region?: string | undefined
        last_name?: string | undefined
        public_email?: string | undefined
        updated_at?: string | undefined
      }
    | undefined
  id?: string | undefined
  relationships?: { avatar?: { data?: ResourceIdentifier | undefined } | undefined } | undefined
  type?: string | undefined
}
type Season = {
  attributes?:
    | {
        cascaded_cover_image_id?: string | undefined
        cover_image_id?: string | undefined
        created_at?: string | undefined
        description?: string | undefined
        description_is_html?: boolean | undefined
        description_plain?: string | undefined
        first_released_episode_id?: string | undefined
        last_released_episode_id?: string | undefined
        season_number?: number | undefined
        sort_title?: string | undefined
        status?: 'active' | 'inactive' | undefined
        title?: string | undefined
        updated_at?: string | undefined
      }
    | undefined
  id?: string | undefined
  relationships?:
    | {
        cascaded_cover_image?: { data?: ResourceIdentifier | undefined } | undefined
        classification_inclusions?: { data?: ResourceIdentifier[] | undefined } | undefined
        cover_image?: { data?: ResourceIdentifier | undefined } | undefined
        credits?: { data?: ResourceIdentifier[] | undefined } | undefined
        episodes?: { data?: ResourceIdentifier[] | undefined } | undefined
        first_released_episode?: { data?: ResourceIdentifier | undefined } | undefined
        images?: { data?: ResourceIdentifier[] | undefined } | undefined
        last_released_episode?: { data?: ResourceIdentifier | undefined } | undefined
        series?: { data?: ResourceIdentifier | undefined } | undefined
        taggings?: { data?: ResourceIdentifier[] | undefined } | undefined
        tags?: { data?: ResourceIdentifier[] | undefined } | undefined
      }
    | undefined
  type?: string | undefined
}
type Series = {
  attributes?:
    | {
        amazon_subscription_url?: string | undefined
        castbox_subscription_url?: string | undefined
        cover_image_id?: string | undefined
        created_at?: string | undefined
        description?: string | undefined
        description_is_html?: boolean | undefined
        description_plain?: string | undefined
        facebook_url?: string | undefined
        google_subscription_url?: string | undefined
        iheart_subscription_url?: string | undefined
        instagram_url?: string | undefined
        itunes_subscription_badge_enabled?: boolean | undefined
        itunes_subscription_url?: string | undefined
        linkedin_url?: string | undefined
        pocket_casts_subscription_url?: string | undefined
        podcast_subscription_url?: string | undefined
        public_page_enabled?: boolean | undefined
        public_title?: string | undefined
        radio_public_subscription_url?: string | undefined
        rss_author?: string | undefined
        rss_copyright?: string | undefined
        rss_email?: string | undefined
        rss_owner?: string | undefined
        slug?: string | undefined
        sort_title?: string | undefined
        spotify_subscription_badge_enabled?: boolean | undefined
        spotify_subscription_url?: string | undefined
        status?: 'active' | 'inactive' | undefined
        stitcher_subscription_badge_enabled?: boolean | undefined
        stitcher_subscription_url?: string | undefined
        title?: string | undefined
        tumblr_url?: string | undefined
        tune_in_subscription_url?: string | undefined
        twitter_url?: string | undefined
        type?: 'Series' | undefined
        updated_at?: string | undefined
        website_url?: string | undefined
      }
    | undefined
  id?: string | undefined
  relationships?:
    | {
        classification_inclusions?: { data?: ResourceIdentifier[] | undefined } | undefined
        cover_image?: { data?: ResourceIdentifier | undefined } | undefined
        credits?: { data?: ResourceIdentifier[] | undefined } | undefined
        episodes?: { data?: ResourceIdentifier[] | undefined } | undefined
        images?: { data?: ResourceIdentifier[] | undefined } | undefined
        network?: { data?: ResourceIdentifier | undefined } | undefined
        seasons?: { data?: ResourceIdentifier[] | undefined } | undefined
        taggings?: { data?: ResourceIdentifier[] | undefined } | undefined
        tags?: { data?: ResourceIdentifier[] | undefined } | undefined
      }
    | undefined
  type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/classification_inclusions': {
      $get:
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                classification_id?: string | undefined
                classification_type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                classified_id?: string | undefined
                classified_type?: 'Series' | 'Season' | 'Episode' | undefined
                q?: string | undefined
                sort?: ('classification_value' | 'created_at' | 'position')[] | undefined
              }
            }
            output: { data?: ClassificationInclusion[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                classification_id?: string | undefined
                classification_type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                classified_id?: string | undefined
                classified_type?: 'Series' | 'Season' | 'Episode' | undefined
                q?: string | undefined
                sort?: ('classification_value' | 'created_at' | 'position')[] | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                classification_id?: string | undefined
                classification_type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                classified_id?: string | undefined
                classified_type?: 'Series' | 'Season' | 'Episode' | undefined
                q?: string | undefined
                sort?: ('classification_value' | 'created_at' | 'position')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                classification_id?: string | undefined
                classification_type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                classified_id?: string | undefined
                classified_type?: 'Series' | 'Season' | 'Episode' | undefined
                q?: string | undefined
                sort?: ('classification_value' | 'created_at' | 'position')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                classification_id?: string | undefined
                classification_type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                classified_id?: string | undefined
                classified_type?: 'Series' | 'Season' | 'Episode' | undefined
                q?: string | undefined
                sort?: ('classification_value' | 'created_at' | 'position')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                classification_id?: string | undefined
                classification_type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                classified_id?: string | undefined
                classified_type?: 'Series' | 'Season' | 'Episode' | undefined
                q?: string | undefined
                sort?: ('classification_value' | 'created_at' | 'position')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/classification_inclusions/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: ClassificationInclusion | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/classifications': {
      $get:
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                q?: string | undefined
                is_country?: string | undefined
                sort?: ('created_at' | 'updated_at' | 'value')[] | undefined
              }
            }
            output: { data?: Classification[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                q?: string | undefined
                is_country?: string | undefined
                sort?: ('created_at' | 'updated_at' | 'value')[] | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                q?: string | undefined
                is_country?: string | undefined
                sort?: ('created_at' | 'updated_at' | 'value')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                q?: string | undefined
                is_country?: string | undefined
                sort?: ('created_at' | 'updated_at' | 'value')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                q?: string | undefined
                is_country?: string | undefined
                sort?: ('created_at' | 'updated_at' | 'value')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                type?:
                  | 'AlternateFeedType'
                  | 'Genre'
                  | 'Industry'
                  | 'Language'
                  | 'MediaRating'
                  | undefined
                q?: string | undefined
                is_country?: string | undefined
                sort?: ('created_at' | 'updated_at' | 'value')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/classifications/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Classification | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/credits': {
      $get:
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                creditable_id?: string | undefined
                creditable_type?: 'Series' | 'Season' | 'Episode' | undefined
                sort?: ('created_at' | 'position' | 'updated_at')[] | undefined
              }
            }
            output: { data?: Credit[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                creditable_id?: string | undefined
                creditable_type?: 'Series' | 'Season' | 'Episode' | undefined
                sort?: ('created_at' | 'position' | 'updated_at')[] | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                creditable_id?: string | undefined
                creditable_type?: 'Series' | 'Season' | 'Episode' | undefined
                sort?: ('created_at' | 'position' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                creditable_id?: string | undefined
                creditable_type?: 'Series' | 'Season' | 'Episode' | undefined
                sort?: ('created_at' | 'position' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                creditable_id?: string | undefined
                creditable_type?: 'Series' | 'Season' | 'Episode' | undefined
                sort?: ('created_at' | 'position' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                creditable_id?: string | undefined
                creditable_type?: 'Series' | 'Season' | 'Episode' | undefined
                sort?: ('created_at' | 'position' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/credits/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Credit | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/episodes': {
      $get:
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]': number
                'page[size]': number
                included_in_inventory_calendar?: string | undefined
                month?: string | undefined
                published?: boolean | undefined
                q?: string | undefined
                released_after?: string | undefined
                released_before?: string | undefined
                rss?: boolean | undefined
                season_id?: string | undefined
                series_id?: string | undefined
                sort?:
                  | (
                      | 'created_at'
                      | 'earliest_released_at'
                      | 'released_at'
                      | 'released_or_created_at'
                      | 'sort_title'
                      | 'title'
                      | 'updated_at'
                    )[]
                  | undefined
                year?: string | undefined
              }
            }
            output: { data?: Episode[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]': number
                'page[size]': number
                included_in_inventory_calendar?: string | undefined
                month?: string | undefined
                published?: boolean | undefined
                q?: string | undefined
                released_after?: string | undefined
                released_before?: string | undefined
                rss?: boolean | undefined
                season_id?: string | undefined
                series_id?: string | undefined
                sort?:
                  | (
                      | 'created_at'
                      | 'earliest_released_at'
                      | 'released_at'
                      | 'released_or_created_at'
                      | 'sort_title'
                      | 'title'
                      | 'updated_at'
                    )[]
                  | undefined
                year?: string | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]': number
                'page[size]': number
                included_in_inventory_calendar?: string | undefined
                month?: string | undefined
                published?: boolean | undefined
                q?: string | undefined
                released_after?: string | undefined
                released_before?: string | undefined
                rss?: boolean | undefined
                season_id?: string | undefined
                series_id?: string | undefined
                sort?:
                  | (
                      | 'created_at'
                      | 'earliest_released_at'
                      | 'released_at'
                      | 'released_or_created_at'
                      | 'sort_title'
                      | 'title'
                      | 'updated_at'
                    )[]
                  | undefined
                year?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]': number
                'page[size]': number
                included_in_inventory_calendar?: string | undefined
                month?: string | undefined
                published?: boolean | undefined
                q?: string | undefined
                released_after?: string | undefined
                released_before?: string | undefined
                rss?: boolean | undefined
                season_id?: string | undefined
                series_id?: string | undefined
                sort?:
                  | (
                      | 'created_at'
                      | 'earliest_released_at'
                      | 'released_at'
                      | 'released_or_created_at'
                      | 'sort_title'
                      | 'title'
                      | 'updated_at'
                    )[]
                  | undefined
                year?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]': number
                'page[size]': number
                included_in_inventory_calendar?: string | undefined
                month?: string | undefined
                published?: boolean | undefined
                q?: string | undefined
                released_after?: string | undefined
                released_before?: string | undefined
                rss?: boolean | undefined
                season_id?: string | undefined
                series_id?: string | undefined
                sort?:
                  | (
                      | 'created_at'
                      | 'earliest_released_at'
                      | 'released_at'
                      | 'released_or_created_at'
                      | 'sort_title'
                      | 'title'
                      | 'updated_at'
                    )[]
                  | undefined
                year?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]': number
                'page[size]': number
                included_in_inventory_calendar?: string | undefined
                month?: string | undefined
                published?: boolean | undefined
                q?: string | undefined
                released_after?: string | undefined
                released_before?: string | undefined
                rss?: boolean | undefined
                season_id?: string | undefined
                series_id?: string | undefined
                sort?:
                  | (
                      | 'created_at'
                      | 'earliest_released_at'
                      | 'released_at'
                      | 'released_or_created_at'
                      | 'sort_title'
                      | 'title'
                      | 'updated_at'
                    )[]
                  | undefined
                year?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/episodes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Episode | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/episodes/:id/next_sibling': {
      $get:
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: { data?: Episode | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/episodes/:id/previous_sibling': {
      $get:
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: { data?: Episode | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: { param: { id: string } } & { query: { rss?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/images': {
      $get:
        | {
            input: { query: { 'ids[]': string[] } }
            output: { data?: Image[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'ids[]': string[] } }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | { input: { query: { 'ids[]': string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { 'ids[]': string[] } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { 'ids[]': string[] } }; output: {}; outputFormat: string; status: 406 }
        | { input: { query: { 'ids[]': string[] } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/images/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Image | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/media_assets': {
      $get:
        | {
            input: { query: { 'ids[]': string[] } }
            output: { data?: MediaAsset[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { 'ids[]': string[] } }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | { input: { query: { 'ids[]': string[] } }; output: {}; outputFormat: string; status: 401 }
        | { input: { query: { 'ids[]': string[] } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { 'ids[]': string[] } }; output: {}; outputFormat: string; status: 406 }
        | { input: { query: { 'ids[]': string[] } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/media_assets/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: MediaAsset | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/networks': {
      $get:
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                ad_rep_account_id?: string | undefined
                ad_deal_status?:
                  | ('active' | 'inactive' | 'pending_active' | 'pending_inactive')[]
                  | undefined
                sort?: ('created_at' | 'name' | 'updated_at')[] | undefined
              }
            }
            output: { data?: Network[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                ad_rep_account_id?: string | undefined
                ad_deal_status?:
                  | ('active' | 'inactive' | 'pending_active' | 'pending_inactive')[]
                  | undefined
                sort?: ('created_at' | 'name' | 'updated_at')[] | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                ad_rep_account_id?: string | undefined
                ad_deal_status?:
                  | ('active' | 'inactive' | 'pending_active' | 'pending_inactive')[]
                  | undefined
                sort?: ('created_at' | 'name' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                ad_rep_account_id?: string | undefined
                ad_deal_status?:
                  | ('active' | 'inactive' | 'pending_active' | 'pending_inactive')[]
                  | undefined
                sort?: ('created_at' | 'name' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                ad_rep_account_id?: string | undefined
                ad_deal_status?:
                  | ('active' | 'inactive' | 'pending_active' | 'pending_inactive')[]
                  | undefined
                sort?: ('created_at' | 'name' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                ad_rep_account_id?: string | undefined
                ad_deal_status?:
                  | ('active' | 'inactive' | 'pending_active' | 'pending_inactive')[]
                  | undefined
                sort?: ('created_at' | 'name' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/networks/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Network | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/people': {
      $get:
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                sort?: ('created_at' | 'first_name' | 'last_name' | 'updated_at')[] | undefined
              }
            }
            output: { data?: Person[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                sort?: ('created_at' | 'first_name' | 'last_name' | 'updated_at')[] | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                sort?: ('created_at' | 'first_name' | 'last_name' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                sort?: ('created_at' | 'first_name' | 'last_name' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                sort?: ('created_at' | 'first_name' | 'last_name' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                q?: string | undefined
                sort?: ('created_at' | 'first_name' | 'last_name' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/people/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Person | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/seasons': {
      $get:
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                series_id?: string | undefined
                q?: string | undefined
                sort?: ('created_at' | 'sort_title' | 'title' | 'updated_at')[] | undefined
              }
            }
            output: { data?: Season[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                series_id?: string | undefined
                q?: string | undefined
                sort?: ('created_at' | 'sort_title' | 'title' | 'updated_at')[] | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                series_id?: string | undefined
                q?: string | undefined
                sort?: ('created_at' | 'sort_title' | 'title' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                series_id?: string | undefined
                q?: string | undefined
                sort?: ('created_at' | 'sort_title' | 'title' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                series_id?: string | undefined
                q?: string | undefined
                sort?: ('created_at' | 'sort_title' | 'title' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                series_id?: string | undefined
                q?: string | undefined
                sort?: ('created_at' | 'sort_title' | 'title' | 'updated_at')[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/seasons/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Season | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/series': {
      $get:
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                ad_rep_account_id?: string | undefined
                network_id?: string | undefined
                q?: string | undefined
                sort?:
                  | ('created_at' | 'episode_released_at' | 'sort_title' | 'title' | 'updated_at')[]
                  | undefined
              }
            }
            output: { data?: Series[] | undefined; links?: Links | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                ad_rep_account_id?: string | undefined
                network_id?: string | undefined
                q?: string | undefined
                sort?:
                  | ('created_at' | 'episode_released_at' | 'sort_title' | 'title' | 'updated_at')[]
                  | undefined
              }
            }
            output: {
              errors?:
                | {
                    code?: string | undefined
                    detail?: string | undefined
                    source?:
                      | ({ parameter?: string | undefined; pointer?: string | undefined } | null)
                      | undefined
                    status?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                ad_rep_account_id?: string | undefined
                network_id?: string | undefined
                q?: string | undefined
                sort?:
                  | ('created_at' | 'episode_released_at' | 'sort_title' | 'title' | 'updated_at')[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                ad_rep_account_id?: string | undefined
                network_id?: string | undefined
                q?: string | undefined
                sort?:
                  | ('created_at' | 'episode_released_at' | 'sort_title' | 'title' | 'updated_at')[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                ad_rep_account_id?: string | undefined
                network_id?: string | undefined
                q?: string | undefined
                sort?:
                  | ('created_at' | 'episode_released_at' | 'sort_title' | 'title' | 'updated_at')[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 406
          }
        | {
            input: {
              query: {
                'ids[]'?: string[] | undefined
                'page[number]'?: number | undefined
                'page[size]'?: number | undefined
                ad_rep_account_id?: string | undefined
                network_id?: string | undefined
                q?: string | undefined
                sort?:
                  | ('created_at' | 'episode_released_at' | 'sort_title' | 'title' | 'updated_at')[]
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/series/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: { data?: Series | undefined; links?: ResourceLink | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 406 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  },
  '/'
>
export default routes
