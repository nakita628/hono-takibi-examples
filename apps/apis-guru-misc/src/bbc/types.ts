type ErrorModel = {
  fault?:
    | { detail?: { errorcode?: string | undefined } | undefined; faultString?: string | undefined }
    | undefined
}
type Deprecated = {
  deprecated_since: string
  name: string
  replaced_by?: string | undefined
  replacement_type?: string | undefined
  type: string
}
type Deprecations = { deprecated?: Deprecated[] | undefined }
type ReleaseStatusType = 'alpha' | 'beta' | 'supported' | 'deprecated'
type Option = {
  href?: string | undefined
  release_status?: ReleaseStatusType | undefined
  title: string
  value: string
}
type Prohibits = {
  filter?: { name: string }[] | undefined
  mixin?:
    | {
        filter?: { name: string }[] | undefined
        mixin?: { name: string }[] | undefined
        name: string
      }[]
    | undefined
}
type Filter = {
  default?: string | undefined
  depends_on?: string | undefined
  deprecated?: boolean | undefined
  deprecated_since?: string | undefined
  guaranteed_until?: string | undefined
  max_value?: number | undefined
  min_value?: number | undefined
  multiple_values?: boolean | undefined
  name: string
  option?: Option[] | undefined
  prefer?: string | undefined
  prohibits?: Prohibits[] | undefined
  release_status?: ReleaseStatusType | undefined
  replaced_by?: string | undefined
  required?: boolean | undefined
  title: string
  type: string
}
type UnstableFilters = { filter?: Filter[] | undefined }
type Filters = { filter?: Filter[] | undefined; unstable_filters?: UnstableFilters | undefined }
type AffectedBy = {
  filter?:
    | {
        description: string
        filter?: { description: string; name: string }[] | undefined
        name: string
      }[]
    | undefined
}
type DependencyOn = { filter?: string | undefined; value?: string | undefined }
type Mixin = {
  affected_by?: AffectedBy[] | undefined
  dependency_on?: DependencyOn[] | undefined
  depends_on?: string | undefined
  deprecated?: boolean | undefined
  deprecated_since?: string | undefined
  guaranteed_until?: string | undefined
  href?: string | undefined
  name: string
  prohibits?: Prohibits[] | undefined
  release_status?: ReleaseStatusType | undefined
  replaced_by?: string | undefined
  title: string
}
type UnstableMixins = { mixin?: Mixin[] | undefined }
type Mixins = { mixin?: Mixin[] | undefined; unstable_mixins?: UnstableMixins | undefined }
type Next = { href: string }
type Previous = { href: string }
type Pagination = { next?: Next | undefined; previous?: Previous | undefined }
type DateRange = { end?: string | undefined; start?: string | undefined }
type ActualStart = string
type Pid = string
type PidReference = {
  href?: string | undefined
  pid: Pid
  position?: number | undefined
  result_type: string
}
type MediaProfileGroup = {
  '#text'?: string | undefined
  context?: string | undefined
  pid?: Pid | undefined
  platform?: string | undefined
  territory?: string | undefined
  transport?: string | undefined
}
type MediaProfileGroups = { media_profile_group?: MediaProfileGroup[] | undefined }
type ServiceReference = { href: string; result_type: string; sid: string }
type AvailabilityDebug = {
  availability_of: PidReference
  media_profile_groups?: MediaProfileGroups | undefined
  service?: ServiceReference | undefined
  territory?: string | undefined
}
type AvailabilityOf = { href: string; pid: Pid; result_type: string; type?: string | undefined }
type AvailabilityType = 'ondemand' | 'simulcast' | 'webcast'
type MediaSet = string
type RevocationStatus = string
type ScheduledTime = { end?: string | undefined; start?: string | undefined }
type Status = string
type Availability = {
  accurate_programme_time?: DateRange | undefined
  actual_start?: ActualStart | undefined
  'availability-debug'?: AvailabilityDebug | undefined
  availability_of?: AvailabilityOf[] | undefined
  availability_type: AvailabilityType
  media_availability_time?: DateRange | undefined
  media_set?: MediaSet[] | undefined
  revocation_status?: RevocationStatus | undefined
  scheduled_time?: ScheduledTime | undefined
  status: Status
}
type AlternateImagesMixin = {
  alternate_images: {
    alternate_image?:
      | {
          alternate_images: {
            alternate_image?:
              | { href?: string | undefined; template_url: string; type?: string | undefined }[]
              | undefined
          }
          href?: string | undefined
          template_url: string
          type?: string | undefined
        }[]
      | undefined
  }
}
type AvailabilityMixin = {
  availability?:
    | {
        status: Status
        version_types: {
          version_type: {
            end?: string | undefined
            id?: string | undefined
            start?: string | undefined
            version_type: {
              availability?:
                | {
                    status: Status
                    version_types: {
                      version_type: {
                        end?: string | undefined
                        id?: string | undefined
                        start?: string | undefined
                        version_type: {
                          end?: string | undefined
                          id?: string | undefined
                          start?: string | undefined
                        }[]
                      }[]
                    }
                  }[]
                | undefined
              end?: string | undefined
              id?: string | undefined
              start?: string | undefined
            }[]
          }[]
        }
      }[]
    | undefined
}
type ContributionsMixinContributorName = {
  name: {
    family?: string | undefined
    given?: string | undefined
    name: {
      family?: string | undefined
      given?: string | undefined
      presentation?: string | undefined
      title?: string | undefined
    }
    presentation?: string | undefined
    title?: string | undefined
  }
}
type Type = string
type ContributionsMixinContributor = {
  contributor: {
    contributions_mixin_contributor_name?: ContributionsMixinContributorName | undefined
    contributor: {
      contributions_mixin_contributor_name?: ContributionsMixinContributorName | undefined
      href?: string | undefined
      type?: Type | undefined
    }
    href?: string | undefined
    type?: Type | undefined
  }
}
type ContributionsMixinContribution = {
  contribution: {
    character_name?: string | undefined
    contribution: {
      character_name?: string | undefined
      contributions_mixin_contributor?: ContributionsMixinContributor | undefined
      credit_role?: { '#text'?: string | undefined; id?: string | undefined } | undefined
    }
    contributions_mixin_contributor?: ContributionsMixinContributor | undefined
    credit_role?: { '#text'?: string | undefined; id?: string | undefined } | undefined
  }
}
type ContributionsMixin = {
  contributions: {
    contributions: {
      contributions_mixin_contribution?: ContributionsMixinContribution[] | undefined
      href?: string | undefined
    }
    contributions_mixin_contribution?: ContributionsMixinContribution[] | undefined
    href?: string | undefined
  }
}
type Embargoed = 'true' | 'false'
type ExpectedChildCount = number
type Reference = {
  href: string
  result_type: string
  href_deprecated?: boolean | undefined
  result_type_deprecated?: boolean | undefined
}
type Genre = { '#text'?: string | undefined; id?: string | undefined; type?: string | undefined }
type GenreGroup = {
  genres: { genre?: Genre[] | undefined }
  id?: string | undefined
  type?: string | undefined
}
type GenreGroupingsType = { genre_group?: GenreGroup[] | undefined }
type Identifier = {
  '#text'?: string | undefined
  authority?: string | undefined
  type?: string | undefined
}
type Identifiers = { identifier: Identifier[] }
type DeprecationAttributes = { deprecated: boolean; deprecated_since: string; replaced_by: string }
type ImageLink = {
  image:
    | DeprecationAttributes
    | {
        image: { pid?: Pid | undefined; template_url: string }
        pid?: Pid | undefined
        template_url: string
      }
}
type ImagesMixin = {
  images: {
    image?:
      | {
          href?: string | undefined
          images: {
            image?:
              | {
                  href?: string | undefined
                  inherited_from?:
                    | { href?: string | undefined; result_type?: string | undefined }
                    | undefined
                  template_url: string
                  type?: string | undefined
                }
              | undefined
          }
          inherited_from?:
            | { href?: string | undefined; result_type?: string | undefined }
            | undefined
          template_url: string
          type?: string | undefined
        }
      | undefined
  }
}
type IsEmbeddable = boolean
type Mid = string
type MasterBrandLink = {
  master_brand: {
    href: string
    master_brand: { href: string; mid: Mid; result_type: string }
    mid: Mid
    result_type: string
  }
}
type PreviousNextMixin = {
  previous_next: {
    next?: Reference | undefined
    previous?: Reference | undefined
    previous_next: { next?: Reference | undefined; previous?: Reference | undefined }
  }
}
type Format = { '#text'?: string | undefined; format_id?: string | undefined }
type ProgrammeFormats = { format: Format[] }
type ProgrammeType = { value: string }
type IsExternal = boolean
type Position = number
type Long = string
type Medium = string
type Short = string
type Synopses = { long?: Long | undefined; medium?: Medium | undefined; short?: Short | undefined }
type Title = string
type Uri = string
type RelatedLink = {
  availability?: { end?: string | undefined; start?: string | undefined } | undefined
  is_external?: IsExternal | undefined
  pid: Pid
  position?: Position | undefined
  synopses?: Synopses | undefined
  title?: Title | undefined
  type?: Type | undefined
  uri?: Uri | undefined
}
type RelatedLinks = { related_link?: RelatedLink[] | undefined }
type ReleaseDateGroup = {
  release_date?: string | undefined
  release_year?: string | undefined
  release_year_month?: string | undefined
}
type UpdatedTime = string
type Brand = {
  alternate_images_mixin?: AlternateImagesMixin | undefined
  availability_mixin?: AvailabilityMixin | undefined
  contributions_mixin?: ContributionsMixin | undefined
  embargoed: Embargoed
  expected_child_count?: ExpectedChildCount | undefined
  franchises?: Reference | undefined
  genre_groupings?: GenreGroupingsType | undefined
  identifiers?: Identifiers | undefined
  image_link?: ImageLink | undefined
  images_mixin?: ImagesMixin | undefined
  is_embeddable?: IsEmbeddable | undefined
  items_for?: Reference | undefined
  master_brand_link?: MasterBrandLink | undefined
  partner: Pid
  pid: Pid
  previous_next_mixin?: PreviousNextMixin | undefined
  programme_formats?: ProgrammeFormats | undefined
  programme_type?: ProgrammeType | undefined
  related_links?: RelatedLinks | undefined
  release_date_group?: ReleaseDateGroup | undefined
  synopses?: Synopses | undefined
  title?: Title | undefined
  updated_time: UpdatedTime
  uri?: Uri | undefined
}
type ContainersTitle = string
type PresentationTitle = string
type AncestorTitles = {
  brand?: { pid: Pid; title?: Title | undefined } | undefined
  episode?:
    | {
        brand?: { pid: Pid; title?: Title | undefined } | undefined
        containers_title?: ContainersTitle | undefined
        episode?:
          | {
              containers_title?: ContainersTitle | undefined
              pid: Pid
              presentation_title?: PresentationTitle | undefined
              title?: Title | undefined
            }
          | undefined
        pid: Pid
        presentation_title?: PresentationTitle | undefined
        series?: { pid: Pid; title?: Title | undefined }[] | undefined
        title?: Title | undefined
      }
    | undefined
  series?: { pid: Pid; title?: Title | undefined }[] | undefined
}
type AncestorsTitles = {
  brand?: { pid: Pid; title?: Title | undefined } | undefined
  episode?:
    | {
        brand?: { pid: Pid; title?: Title | undefined } | undefined
        containers_title?: ContainersTitle | undefined
        episode?:
          | {
              containers_title?: ContainersTitle | undefined
              pid: Pid
              presentation_title?: PresentationTitle | undefined
              title?: Title | undefined
            }
          | undefined
        pid: Pid
        presentation_title?: PresentationTitle | undefined
        series?: { pid: Pid; title?: Title | undefined }[] | undefined
        title?: Title | undefined
      }
    | undefined
  series?: { pid: Pid; title?: Title | undefined }[] | undefined
}
type Id = {
  '#text'?: string | undefined
  authority?: string | undefined
  type?: string | undefined
}
type Ids = { id: Id[] }
type IsAudioDescribed = boolean
type IsBlanked = boolean
type IsCritical = boolean
type IsRepeat = boolean
type IsSimulcast = boolean
type BroadcastTime = {
  end?: string | undefined
  start?: string | undefined
  duration?: string | undefined
}
type TxTime = {
  credits_showing?: string | undefined
  end?: string | undefined
  start?: string | undefined
}
type Broadcast = {
  ancestor_titles?: AncestorTitles | undefined
  ancestors_titles?: AncestorsTitles | undefined
  broadcast_of?: PidReference[] | undefined
  identifiers?: Identifiers | undefined
  ids?: Ids | undefined
  image_link?: ImageLink | undefined
  images_mixin?: ImagesMixin | undefined
  is_audio_described?: IsAudioDescribed | undefined
  is_blanked?: IsBlanked | undefined
  is_critical?: IsCritical | undefined
  is_repeat?: IsRepeat | undefined
  is_simulcast?: IsSimulcast | undefined
  partner: Pid
  pid: Pid
  published_time?: BroadcastTime | undefined
  service?: ServiceReference | undefined
  tx_time?: TxTime | undefined
  updated_time?: UpdatedTime | undefined
}
type CatalogueNumber = string
type MusicCode = string
type OffsetIn = {
  href: string
  offset?: number | undefined
  position?: number | undefined
  programme: Pid
  version: Pid
}
type Offsets = { offset_in?: OffsetIn[] | undefined }
type PlayedInLinks = {
  played_in?:
    | {
        href?: string | undefined
        played_in?: { href?: string | undefined; result_type?: string | undefined } | undefined
        result_type?: string | undefined
      }
    | undefined
}
type PlayEvent = {
  offset?: number | undefined
  pid: Pid
  played_in_links?: PlayedInLinks[] | undefined
  position?: number | undefined
  synopses?: Synopses | undefined
  title?: string | undefined
}
type PlayEvents = { play_event?: PlayEvent[] | undefined }
type Publisher = string
type RecordLabel = string
type RecordingDate = string
type ReleaseTitle = string
type SnippetUrl = string
type SourceMedia = string
type TrackNumber = string
type TrackSide = string
type Item = {
  catalogue_number?: CatalogueNumber | undefined
  contributions_mixin?: ContributionsMixin | undefined
  duration?: number | undefined
  identifiers?: Identifiers | undefined
  ids?: Ids | undefined
  images_mixin?: ImagesMixin | undefined
  item_of?: Reference | undefined
  music_code?: MusicCode | undefined
  offsets?: Offsets | undefined
  partner: Pid
  pid: Pid
  play_events?: PlayEvents | undefined
  publisher?: Publisher | undefined
  record_label?: RecordLabel | undefined
  recording_date?: RecordingDate | undefined
  release_title?: ReleaseTitle | undefined
  snippet_url?: SnippetUrl | undefined
  source_media?: SourceMedia | undefined
  synopses?: Synopses | undefined
  title?: Title | undefined
  track_number?: TrackNumber | undefined
  track_side?: TrackSide | undefined
  type?: string | undefined
  updated_time?: UpdatedTime | undefined
}
type AdvertisingAllowed = string
type Caption = string
type GenreGroupsType = {
  href: string
  result_type: string
  deprecated: boolean
  deprecated_since: string
  replaced_by: string
  genre_group?: GenreGroup[] | undefined
}
type MediaType = 'Video' | 'Audio'
type OriginalVersionDuration = {
  version?:
    | {
        duration?: string | undefined
        href: string
        pid: Pid
        version?: { duration?: string | undefined; href: string; pid: Pid } | undefined
      }
    | undefined
}
type AvailableVersionsMediaSets = {
  media_sets?:
    | {
        media_set: {
          actual_start?: string | undefined
          name: string
          territories?:
            | {
                media_sets?:
                  | {
                      media_set: {
                        actual_start?: string | undefined
                        name: string
                        territories?: { territory?: string[] | undefined } | undefined
                      }[]
                    }
                  | undefined
                territory?: string[] | undefined
              }
            | undefined
        }[]
      }
    | undefined
}
type AvailableMixins = {
  availabilities: {
    availabilities: {
      availability: {
        accurate_end?: string | undefined
        accurate_start?: string | undefined
        available_versions_media_sets: AvailableVersionsMediaSets
        media_availability_end?: string | undefined
        media_availability_start?: string | undefined
        payment_type?: string | undefined
        scheduled_end?: string | undefined
        scheduled_start?: string | undefined
        status?: string | undefined
        type?: string | undefined
      }[]
      type?: string | undefined
    }
    availability: {
      accurate_end?: string | undefined
      accurate_start?: string | undefined
      available_versions_media_sets: AvailableVersionsMediaSets
      media_availability_end?: string | undefined
      media_availability_start?: string | undefined
      payment_type?: string | undefined
      scheduled_end?: string | undefined
      scheduled_start?: string | undefined
      status?: string | undefined
      type?: string | undefined
    }[]
    type?: string | undefined
  }
}
type WarningItems = {
  warning?:
    | {
        '#text'?: string | undefined
        short_description?: string | undefined
        warning?:
          | {
              '#text'?: string | undefined
              short_description?: string | undefined
              warning_code?: string | undefined
            }[]
          | undefined
        warning_code?: string | undefined
      }[]
    | undefined
}
type WarningTexts = {
  warning_text?:
    | {
        '#text'?: string | undefined
        length?: string | undefined
        warning_text?: { '#text'?: string | undefined; length?: string | undefined }[] | undefined
      }[]
    | undefined
}
type GuidanceWarnings = {
  warnings?:
    | {
        warning_items?: WarningItems | undefined
        warning_texts?: WarningTexts | undefined
        warnings?:
          | { warning_items?: WarningItems | undefined; warning_texts?: WarningTexts | undefined }
          | undefined
      }
    | undefined
}
type AvailableVersionsElement = {
  version?:
    | {
        available_mixins?: AvailableMixins | undefined
        competition_warning?: boolean | undefined
        duration?: string | undefined
        guidance_warnings?: GuidanceWarnings | undefined
        pid?: Pid | undefined
        types: { type?: string[] | undefined }[]
        version?:
          | {
              available_mixins?: AvailableMixins | undefined
              competition_warning?: boolean | undefined
              duration?: string | undefined
              guidance_warnings?: GuidanceWarnings | undefined
              pid?: Pid | undefined
              types: { type?: string[] | undefined }[]
            }[]
          | undefined
      }[]
    | undefined
}
type AvailableSimulcasts = {
  available: number
  available_versions_element: AvailableVersionsElement
}
type AvailableVersions = { available: number; available_versions_element: AvailableVersionsElement }
type AvailableWebcasts = { available: number; available_versions_element: AvailableVersionsElement }
type AvailableMediaSets = {
  media_sets?:
    | {
        media_set: {
          '#text'?: string | undefined
          media_sets?: { media_set: { '#text'?: string | undefined }[] } | undefined
        }[]
      }
    | undefined
}
type VersionAvailability = {
  availability: {
    availability: {
      availability_end?: string | undefined
      availability_start?: string | undefined
      available_media_sets: AvailableMediaSets
      status?: string | undefined
    }
    availability_end?: string | undefined
    availability_start?: string | undefined
    available_media_sets: AvailableMediaSets
    status?: string | undefined
  }
}
type VersionAvailabilityMixin = {
  version?:
    | {
        availabilities?: { version_availability: VersionAvailability[] }[] | undefined
        competition_warning?: string | undefined
        duration?: string | undefined
        guidance_warnings?: GuidanceWarnings | undefined
        pid?: Pid | undefined
        types: { type?: string[] | undefined }[]
        version?:
          | {
              availabilities?: { version_availability: VersionAvailability[] }[] | undefined
              competition_warning?: string | undefined
              duration?: string | undefined
              guidance_warnings?: GuidanceWarnings | undefined
              pid?: Pid | undefined
              types: { type?: string[] | undefined }[]
            }[]
          | undefined
      }[]
    | undefined
}
type Versions = { available: number; version_availability_mixin: VersionAvailabilityMixin }
type VersionsMixin = {
  available_simulcasts?: AvailableSimulcasts | undefined
  available_versions?: AvailableVersions | undefined
  available_webcasts?: AvailableWebcasts | undefined
  versions?: Versions[] | undefined
}
type Clip = {
  advertising_allowed: AdvertisingAllowed
  alternate_images_mixin?: AlternateImagesMixin | undefined
  ancestor_titles?: AncestorTitles | undefined
  ancestors?: Reference | undefined
  ancestors_titles?: AncestorsTitles | undefined
  availability_mixin?: AvailabilityMixin | undefined
  caption?: Caption | undefined
  clip_of?: PidReference | undefined
  contributions_mixin?: ContributionsMixin | undefined
  embargoed: Embargoed
  genre_groupings?: GenreGroupingsType | undefined
  genre_groups?: GenreGroupsType | undefined
  identifiers?: Identifiers | undefined
  image_link?: ImageLink | undefined
  images_mixin?: ImagesMixin | undefined
  is_embeddable?: IsEmbeddable | undefined
  items_for?: Reference | undefined
  master_brand_link?: MasterBrandLink | undefined
  media_type?: MediaType | undefined
  original_version_duration?: OriginalVersionDuration | undefined
  partner: Pid
  pid: Pid
  previous_next_mixin?: PreviousNextMixin | undefined
  programme_formats?: ProgrammeFormats | undefined
  related_links?: RelatedLinks | undefined
  release_date_group?: ReleaseDateGroup | undefined
  synopses?: Synopses | undefined
  title?: Title | undefined
  updated_time: UpdatedTime
  uri?: Uri | undefined
  versions_mixin?: VersionsMixin | undefined
}
type ForProgramme = { href?: string | undefined }
type ForProgrammes = { for_programme?: ForProgramme[] | undefined }
type Scheduled = { end?: string | undefined; start?: string | undefined }
type UrlKey = string
type GroupBody = {
  alternate_images_mixin?: AlternateImagesMixin | undefined
  embargoed: Embargoed
  for_programmes?: ForProgrammes | undefined
  identifiers?: Identifiers | undefined
  ids?: Ids | undefined
  images_mixin?: ImagesMixin | undefined
  master_brand_link?: MasterBrandLink | undefined
  partner: Pid
  pid: Pid
  related_links?: RelatedLinks | undefined
  scheduled?: Scheduled | undefined
  synopses?: Synopses | undefined
  title?: Title | undefined
  updated_time: UpdatedTime
  url_key?: UrlKey | undefined
}
type ContributorName = {
  name: {
    family?: string | undefined
    given?: string | undefined
    lang?: string | undefined
    name: {
      family?: string | undefined
      given?: string | undefined
      lang?: string | undefined
      presentation?: string | undefined
      title?: string | undefined
    }
    presentation?: string | undefined
    title?: string | undefined
  }
}
type ContributorTo = { href: string; result_type: string }
type Disambiguation = string
type Contributor = {
  contributor_name?: ContributorName | undefined
  contributor_to?: ContributorTo[] | undefined
  disambiguation?: Disambiguation | undefined
  href?: string | undefined
  identifiers?: Identifiers | undefined
  ids?: Ids | undefined
  partner: Pid
  pid: Pid
  type?: Type | undefined
}
type HasGuidance = boolean
type IsStacked = boolean
type Episode = {
  advertising_allowed: AdvertisingAllowed
  alternate_images_mixin?: AlternateImagesMixin | undefined
  ancestor_titles?: AncestorTitles | undefined
  ancestors?: Reference | undefined
  ancestors_titles?: AncestorsTitles | undefined
  availability_mixin?: AvailabilityMixin | undefined
  contributions_mixin?: ContributionsMixin | undefined
  embargoed: Embargoed
  episode_of?: PidReference | undefined
  genre_groupings?: GenreGroupingsType | undefined
  genre_groups?: GenreGroupsType | undefined
  has_guidance?: HasGuidance | undefined
  identifiers?: Identifiers | undefined
  image_link?: ImageLink | undefined
  images_mixin?: ImagesMixin | undefined
  is_embeddable?: IsEmbeddable | undefined
  is_stacked?: IsStacked | undefined
  items_for?: Reference | undefined
  master_brand_link?: MasterBrandLink | undefined
  media_type?: MediaType | undefined
  original_version_duration?: OriginalVersionDuration | undefined
  partner: Pid
  pid: Pid
  presentation_title?: PresentationTitle | undefined
  previous_next_mixin?: PreviousNextMixin | undefined
  programme_formats?: ProgrammeFormats | undefined
  programme_type?: ProgrammeType | undefined
  related_links?: RelatedLinks | undefined
  release_date_group?: ReleaseDateGroup | undefined
  synopses?: Synopses | undefined
  title?: Title | undefined
  updated_time: UpdatedTime
  uri?: Uri | undefined
  versions_mixin?: VersionsMixin | undefined
}
type Dimensions = { height?: number | undefined; width?: number | undefined }
type FocusPoint = { x?: number | undefined; y?: number | undefined }
type Size = { units?: string | undefined }
type SourceAsset = {
  dimensions?: Dimensions | undefined
  focus_point?: FocusPoint | undefined
  mime_type?: string | undefined
  size?: Size | undefined
  uri?: string | undefined
}
type Image = {
  author?: string | undefined
  embargoed: Embargoed
  identifiers?: Identifiers | undefined
  partner: Pid
  pid: Pid
  shoot_date?: string | undefined
  source_asset?: SourceAsset | undefined
  synopses?: Synopses | undefined
  template_url?: string | undefined
  title?: Title | undefined
  type?: string | undefined
}
type Name = string
type MasterBrand = {
  colour?: string | undefined
  competition_warning?: { href: string; pid: Pid } | undefined
  ident?: string | undefined
  identifiers?: Identifiers | undefined
  image_link?: ImageLink | undefined
  images_mixin?: ImagesMixin | undefined
  master_brand_date_range?: { end?: string | undefined; start?: string | undefined } | undefined
  mid: Mid
  name?: Name | undefined
  partner: Pid
  position?: Position | undefined
  synopses?:
    | { long?: Long | undefined; medium?: Medium | undefined; short?: Short | undefined }
    | undefined
  title?: Title | undefined
  url_key?: string | undefined
}
type Context = {
  cascades_to_descendants?: boolean | undefined
  href?: string | undefined
  pid: Pid
  result_type: string
}
type EndTime = string
type Priority = number
type PromotedBy = string
type PromotedFor = string
type StartTime = string
type Url = string
type Promotion = {
  context?: Context | undefined
  end_time?: EndTime | undefined
  identifiers?: Identifiers | undefined
  partner: Pid
  pid: Pid
  priority?: Priority | undefined
  promoted_by?: PromotedBy | undefined
  promoted_for?: PromotedFor | undefined
  promotion_of?: PidReference | undefined
  related_links?: RelatedLinks | undefined
  start_time?: StartTime | undefined
  status?: Status | undefined
  synopses?: Synopses | undefined
  title?: Title | undefined
  updated_time: UpdatedTime
  uri?: Uri | undefined
  url?: Url | undefined
}
type Series = {
  alternate_images_mixin?: AlternateImagesMixin | undefined
  ancestor_titles?: AncestorTitles | undefined
  ancestors?: Reference | undefined
  ancestors_titles?: AncestorsTitles | undefined
  availability_mixin?: AvailabilityMixin | undefined
  contributions_mixin?: ContributionsMixin | undefined
  embargoed: Embargoed
  expected_child_count?: ExpectedChildCount | undefined
  genre_groupings?: GenreGroupingsType | undefined
  identifiers?: Identifiers | undefined
  image_link?: ImageLink | undefined
  images_mixin?: ImagesMixin | undefined
  is_embeddable?: IsEmbeddable | undefined
  items_for?: Reference | undefined
  master_brand_link?: MasterBrandLink | undefined
  partner: Pid
  pid: Pid
  previous_next_mixin?: PreviousNextMixin | undefined
  programme_formats?: ProgrammeFormats | undefined
  programme_type?: ProgrammeType | undefined
  related_links?: RelatedLinks | undefined
  release_date_group?: ReleaseDateGroup | undefined
  series_of?: PidReference | undefined
  synopses?: Synopses | undefined
  title?: Title | undefined
  updated_time: UpdatedTime
  uri?: Uri | undefined
}
type Description = string
type IsConcrete = boolean
type IsDownloadable = boolean
type IsStreamable = boolean
type Region = string
type Sid = string
type Service = {
  date_range?: DateRange | undefined
  description?: Description | undefined
  identifiers?: Identifiers | undefined
  ids?: Ids | undefined
  is_concrete?: IsConcrete | undefined
  is_downloadable?: IsDownloadable | undefined
  is_streamable?: IsStreamable | undefined
  master_brand_link?: MasterBrandLink | undefined
  media_type?: MediaType | undefined
  name?: Name | undefined
  partner: Pid
  region?: Region | undefined
  sid: Sid
  type?: Type | undefined
  updated_time?: UpdatedTime | undefined
}
type CompetitionWarning = boolean
type TypesWithId = {
  types: { type: { id?: string | undefined; types: { type: { id?: string | undefined }[] } }[] }
}
type VersionTypesWithId = {
  version_types: {
    version_type: {
      id?: string | undefined
      version_types: { version_type: { id?: string | undefined }[] }
    }[]
  }
}
type Warning = {
  '#text'?: string | undefined
  short_description?: string | undefined
  warning_code?: string | undefined
}
type WarningText = { '#text'?: string | undefined; length?: string | undefined }
type Warnings = { warning?: Warning[] | undefined; warning_text?: WarningText[] | undefined }
type VersionGroup = {
  version: {
    aspect_ratio?: string | undefined
    competition_warning?: CompetitionWarning | undefined
    duration?: string | undefined
    identifiers?: Identifiers | undefined
    ids?: Ids | undefined
    pid: Pid
    types_with_id?: TypesWithId | undefined
    updated_time: UpdatedTime
    version: {
      aspect_ratio?: string | undefined
      competition_warning?: CompetitionWarning | undefined
      duration?: string | undefined
      identifiers?: Identifiers | undefined
      ids?: Ids | undefined
      pid: Pid
      types_with_id?: TypesWithId | undefined
      updated_time: UpdatedTime
      version_of?: PidReference | undefined
      version_types_with_id?: VersionTypesWithId | undefined
      warnings?: Warnings | undefined
    }
    version_of?: PidReference | undefined
    version_types_with_id?: VersionTypesWithId | undefined
    warnings?: Warnings | undefined
  }
}
type PublicationRights = {
  '#text'?: string | undefined
  context?: string | undefined
  platform?: string | undefined
  territory?: string | undefined
  transport?: string | undefined
}
type ScheduledPublicationRights = { publication_rights?: PublicationRights[] | undefined }
type Window = {
  accurate_programme_time?: DateRange | undefined
  ancestor_titles?: AncestorTitles | undefined
  ancestors_titles?: AncestorsTitles | undefined
  identifiers?: Identifiers | undefined
  ids?: Ids | undefined
  image_link?: ImageLink | undefined
  images_mixin?: ImagesMixin | undefined
  media_availability_time?: DateRange | undefined
  partner: Pid
  pid: Pid
  scheduled_publication_rights?: ScheduledPublicationRights | undefined
  scheduled_time?: ScheduledTime | undefined
  service?: ServiceReference | undefined
  updated_time?: UpdatedTime | undefined
  window_of?: PidReference[] | undefined
}
type Results = {
  availability?: Availability | undefined
  brand?: Brand | undefined
  broadcast?: Broadcast | undefined
  chapter?: Item | undefined
  clip?: Clip | undefined
  collection?: GroupBody | undefined
  contributor?: Contributor | undefined
  episode?: Episode | undefined
  franchise?: GroupBody | undefined
  gallery?: GroupBody | undefined
  highlight?: Item | undefined
  image?: Image | undefined
  master_brand?: MasterBrand | undefined
  more_than?: number | undefined
  music?: Item | undefined
  other?: Item | undefined
  page: number
  page_size: number
  promotion?: Promotion | undefined
  season?: GroupBody | undefined
  series?: Series | undefined
  service?: Service | undefined
  speech?: Item | undefined
  total?: number | undefined
  version_group?: VersionGroup | undefined
  window?: Window | undefined
}
type SortDirection = { href: string; is_default: string; name: string; value: string }
type Sort = {
  deprecated?: boolean | undefined
  deprecated_since?: string | undefined
  guaranteed_until?: string | undefined
  is_default?: string | undefined
  name: string
  release_status?: ReleaseStatusType | undefined
  replaced_by?: string | undefined
  sort_direction?: SortDirection[] | undefined
  title: string
}
type UnstableSorts = { sort?: Sort[] | undefined }
type Sorts = { sort?: Sort[] | undefined; unstable_sorts?: UnstableSorts | undefined }
type Nitro = {
  deprecations?: Deprecations | undefined
  filters?: Filters | undefined
  mixins?: Mixins | undefined
  pagination?: Pagination | undefined
  results?: Results | undefined
  sorts?: Sorts | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/availabilities': {
      $get:
        | {
            input: {
              query: {
                sort?: 'scheduled_start' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                availability?: 'available'[] | undefined
                descendants_of?: string[] | undefined
                media_set?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                territory?: ('uk' | 'nonuk' | 'world')[] | undefined
                debug?: boolean | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'scheduled_start' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                availability?: 'available'[] | undefined
                descendants_of?: string[] | undefined
                media_set?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                territory?: ('uk' | 'nonuk' | 'world')[] | undefined
                debug?: boolean | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'scheduled_start' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                availability?: 'available'[] | undefined
                descendants_of?: string[] | undefined
                media_set?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                territory?: ('uk' | 'nonuk' | 'world')[] | undefined
                debug?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'scheduled_start' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                availability?: 'available'[] | undefined
                descendants_of?: string[] | undefined
                media_set?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                territory?: ('uk' | 'nonuk' | 'world')[] | undefined
                debug?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/broadcasts': {
      $get:
        | {
            input: {
              query: {
                sort?: 'start_date' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?: 'titles'[] | undefined
                authority?: string[] | undefined
                descendants_of?: string[] | undefined
                end_from?: string | undefined
                end_to?: string | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                id?: string[] | undefined
                item?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                people?: string | undefined
                pid?: string[] | undefined
                q?: string | undefined
                schedule_day?: string | undefined
                schedule_day_from?: string | undefined
                schedule_day_to?: string | undefined
                service_master_brand?: string[] | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
                version?: string[] | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'start_date' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?: 'titles'[] | undefined
                authority?: string[] | undefined
                descendants_of?: string[] | undefined
                end_from?: string | undefined
                end_to?: string | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                id?: string[] | undefined
                item?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                people?: string | undefined
                pid?: string[] | undefined
                q?: string | undefined
                schedule_day?: string | undefined
                schedule_day_from?: string | undefined
                schedule_day_to?: string | undefined
                service_master_brand?: string[] | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
                version?: string[] | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'start_date' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?: 'titles'[] | undefined
                authority?: string[] | undefined
                descendants_of?: string[] | undefined
                end_from?: string | undefined
                end_to?: string | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                id?: string[] | undefined
                item?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                people?: string | undefined
                pid?: string[] | undefined
                q?: string | undefined
                schedule_day?: string | undefined
                schedule_day_from?: string | undefined
                schedule_day_to?: string | undefined
                service_master_brand?: string[] | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
                version?: string[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'start_date' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?: 'titles'[] | undefined
                authority?: string[] | undefined
                descendants_of?: string[] | undefined
                end_from?: string | undefined
                end_to?: string | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                id?: string[] | undefined
                item?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                people?: string | undefined
                pid?: string[] | undefined
                q?: string | undefined
                schedule_day?: string | undefined
                schedule_day_from?: string | undefined
                schedule_day_to?: string | undefined
                service_master_brand?: string[] | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
                version?: string[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/groups': {
      $get:
        | {
            input: {
              query: {
                sort?: 'pid' | undefined
                sort_direction?: 'descending' | undefined
                mixin?:
                  | ('alternate_images' | 'group_for' | 'images' | 'related_links')[]
                  | undefined
                for_descendants_of?: string | undefined
                for_programme?: string | undefined
                group?: string | undefined
                group_type?: ('collection' | 'franchise' | 'gallery' | 'season')[] | undefined
                member?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                q?: string | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'pid' | undefined
                sort_direction?: 'descending' | undefined
                mixin?:
                  | ('alternate_images' | 'group_for' | 'images' | 'related_links')[]
                  | undefined
                for_descendants_of?: string | undefined
                for_programme?: string | undefined
                group?: string | undefined
                group_type?: ('collection' | 'franchise' | 'gallery' | 'season')[] | undefined
                member?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                q?: string | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'pid' | undefined
                sort_direction?: 'descending' | undefined
                mixin?:
                  | ('alternate_images' | 'group_for' | 'images' | 'related_links')[]
                  | undefined
                for_descendants_of?: string | undefined
                for_programme?: string | undefined
                group?: string | undefined
                group_type?: ('collection' | 'franchise' | 'gallery' | 'season')[] | undefined
                member?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                q?: string | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'pid' | undefined
                sort_direction?: 'descending' | undefined
                mixin?:
                  | ('alternate_images' | 'group_for' | 'images' | 'related_links')[]
                  | undefined
                for_descendants_of?: string | undefined
                for_programme?: string | undefined
                group?: string | undefined
                group_type?: ('collection' | 'franchise' | 'gallery' | 'season')[] | undefined
                member?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                q?: string | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/images': {
      $get:
        | {
            input: {
              query: {
                sort?: 'group_position' | 'pid' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                group?: string | undefined
                image_type?:
                  | ('standard' | 'podcast' | 'store' | 'portrait' | 'letterbox')[]
                  | undefined
                is_alternate_image_for?: string | undefined
                is_image_for?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                q?: string | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'group_position' | 'pid' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                group?: string | undefined
                image_type?:
                  | ('standard' | 'podcast' | 'store' | 'portrait' | 'letterbox')[]
                  | undefined
                is_alternate_image_for?: string | undefined
                is_image_for?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                q?: string | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'group_position' | 'pid' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                group?: string | undefined
                image_type?:
                  | ('standard' | 'podcast' | 'store' | 'portrait' | 'letterbox')[]
                  | undefined
                is_alternate_image_for?: string | undefined
                is_image_for?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                q?: string | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'group_position' | 'pid' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                group?: string | undefined
                image_type?:
                  | ('standard' | 'podcast' | 'store' | 'portrait' | 'letterbox')[]
                  | undefined
                is_alternate_image_for?: string | undefined
                is_image_for?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                q?: string | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/items': {
      $get:
        | {
            input: {
              query: {
                sort?: 'pid' | undefined
                sort_direction?: 'descending' | undefined
                mixin?: ('contributions' | 'images' | 'offset' | 'play_event')[] | undefined
                authority?: string | undefined
                id?: string[] | undefined
                id_type?: string | undefined
                item_type?: ('chapter' | 'highlight' | 'music' | 'speech' | 'other')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                programme?: string | undefined
                q?: string | undefined
                segment_event?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'pid' | undefined
                sort_direction?: 'descending' | undefined
                mixin?: ('contributions' | 'images' | 'offset' | 'play_event')[] | undefined
                authority?: string | undefined
                id?: string[] | undefined
                id_type?: string | undefined
                item_type?: ('chapter' | 'highlight' | 'music' | 'speech' | 'other')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                programme?: string | undefined
                q?: string | undefined
                segment_event?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'pid' | undefined
                sort_direction?: 'descending' | undefined
                mixin?: ('contributions' | 'images' | 'offset' | 'play_event')[] | undefined
                authority?: string | undefined
                id?: string[] | undefined
                id_type?: string | undefined
                item_type?: ('chapter' | 'highlight' | 'music' | 'speech' | 'other')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                programme?: string | undefined
                q?: string | undefined
                segment_event?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'pid' | undefined
                sort_direction?: 'descending' | undefined
                mixin?: ('contributions' | 'images' | 'offset' | 'play_event')[] | undefined
                authority?: string | undefined
                id?: string[] | undefined
                id_type?: string | undefined
                item_type?: ('chapter' | 'highlight' | 'music' | 'speech' | 'other')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                programme?: string | undefined
                q?: string | undefined
                segment_event?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/master_brands': {
      $get:
        | {
            input: {
              query: {
                sort?: 'mid' | undefined
                sort_direction?: 'ascending' | undefined
                mixin?: 'images'[] | undefined
                mid?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                q?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'mid' | undefined
                sort_direction?: 'ascending' | undefined
                mixin?: 'images'[] | undefined
                mid?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                q?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'mid' | undefined
                sort_direction?: 'ascending' | undefined
                mixin?: 'images'[] | undefined
                mid?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                q?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'mid' | undefined
                sort_direction?: 'ascending' | undefined
                mixin?: 'images'[] | undefined
                mid?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                q?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/people': {
      $get:
        | {
            input: {
              query: {
                authority?: string | undefined
                has_external_id?: ('true' | 'false')[] | undefined
                id?: string[] | undefined
                id_type?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                programme?: string | undefined
                q?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                authority?: string | undefined
                has_external_id?: ('true' | 'false')[] | undefined
                id?: string[] | undefined
                id_type?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                programme?: string | undefined
                q?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                authority?: string | undefined
                has_external_id?: ('true' | 'false')[] | undefined
                id?: string[] | undefined
                id_type?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                programme?: string | undefined
                q?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                authority?: string | undefined
                has_external_id?: ('true' | 'false')[] | undefined
                id?: string[] | undefined
                id_type?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                programme?: string | undefined
                q?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/pips': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                q?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                q?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                q?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                q?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/programme_details': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                partner_pid?: string | undefined
                pid?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                partner_pid?: string | undefined
                pid?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                partner_pid?: string | undefined
                pid?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                page_size?: number | undefined
                partner_pid?: string | undefined
                pid?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/programmes': {
      $get:
        | {
            input: {
              query: {
                sort?:
                  | 'group_position'
                  | 'pid'
                  | 'position'
                  | 'promotion'
                  | 'release_date'
                  | 'relevance'
                  | 'scheduled_start'
                  | 'strict_title'
                  | 'title'
                  | 'tree'
                  | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?:
                  | (
                      | 'alternate_images'
                      | 'ancestor_titles'
                      | 'availability'
                      | 'available_simulcasts'
                      | 'available_versions'
                      | 'available_webcasts'
                      | 'contributions'
                      | 'duration'
                      | 'genre_groupings'
                      | 'genre_groups'
                      | 'images'
                      | 'is_embeddable'
                      | 'previous_next'
                      | 'programme_type'
                      | 'related_links'
                      | 'titles'
                      | 'versions_availability'
                    )[]
                  | undefined
                audio_described?: ('true' | 'false')[] | undefined
                availability?: ('available' | 'pending')[] | undefined
                availability_entity_type?: ('episode' | 'clip')[] | undefined
                availability_from?: string | undefined
                availability_type?: ('ondemand' | 'webcast' | 'simulcast')[] | undefined
                children_of?: string[] | undefined
                descendants_of?: string[] | undefined
                duration?: ('short' | 'medium' | 'long')[] | undefined
                entity_type?: ('brand' | 'series' | 'episode' | 'clip')[] | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                group?: string | undefined
                initial_letter?: string | undefined
                initial_letter_end?: string | undefined
                initial_letter_start?: string | undefined
                initial_letter_strict?: string[] | undefined
                item?: string[] | undefined
                master_brand?: string[] | undefined
                media_set?: string | undefined
                media_type?: ('audio' | 'audio_video')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                payment_type?: ('free' | 'bbcstore' | 'uscansvod')[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                promoted_for?: string | undefined
                q?: string | undefined
                signed?: ('exclusive' | 'inclusive' | 'exclude')[] | undefined
                tag_name?: string | undefined
                tag_scheme?: string | undefined
                tleo?: ('true' | 'false')[] | undefined
                version?: string[] | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | 'group_position'
                  | 'pid'
                  | 'position'
                  | 'promotion'
                  | 'release_date'
                  | 'relevance'
                  | 'scheduled_start'
                  | 'strict_title'
                  | 'title'
                  | 'tree'
                  | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?:
                  | (
                      | 'alternate_images'
                      | 'ancestor_titles'
                      | 'availability'
                      | 'available_simulcasts'
                      | 'available_versions'
                      | 'available_webcasts'
                      | 'contributions'
                      | 'duration'
                      | 'genre_groupings'
                      | 'genre_groups'
                      | 'images'
                      | 'is_embeddable'
                      | 'previous_next'
                      | 'programme_type'
                      | 'related_links'
                      | 'titles'
                      | 'versions_availability'
                    )[]
                  | undefined
                audio_described?: ('true' | 'false')[] | undefined
                availability?: ('available' | 'pending')[] | undefined
                availability_entity_type?: ('episode' | 'clip')[] | undefined
                availability_from?: string | undefined
                availability_type?: ('ondemand' | 'webcast' | 'simulcast')[] | undefined
                children_of?: string[] | undefined
                descendants_of?: string[] | undefined
                duration?: ('short' | 'medium' | 'long')[] | undefined
                entity_type?: ('brand' | 'series' | 'episode' | 'clip')[] | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                group?: string | undefined
                initial_letter?: string | undefined
                initial_letter_end?: string | undefined
                initial_letter_start?: string | undefined
                initial_letter_strict?: string[] | undefined
                item?: string[] | undefined
                master_brand?: string[] | undefined
                media_set?: string | undefined
                media_type?: ('audio' | 'audio_video')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                payment_type?: ('free' | 'bbcstore' | 'uscansvod')[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                promoted_for?: string | undefined
                q?: string | undefined
                signed?: ('exclusive' | 'inclusive' | 'exclude')[] | undefined
                tag_name?: string | undefined
                tag_scheme?: string | undefined
                tleo?: ('true' | 'false')[] | undefined
                version?: string[] | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | 'group_position'
                  | 'pid'
                  | 'position'
                  | 'promotion'
                  | 'release_date'
                  | 'relevance'
                  | 'scheduled_start'
                  | 'strict_title'
                  | 'title'
                  | 'tree'
                  | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?:
                  | (
                      | 'alternate_images'
                      | 'ancestor_titles'
                      | 'availability'
                      | 'available_simulcasts'
                      | 'available_versions'
                      | 'available_webcasts'
                      | 'contributions'
                      | 'duration'
                      | 'genre_groupings'
                      | 'genre_groups'
                      | 'images'
                      | 'is_embeddable'
                      | 'previous_next'
                      | 'programme_type'
                      | 'related_links'
                      | 'titles'
                      | 'versions_availability'
                    )[]
                  | undefined
                audio_described?: ('true' | 'false')[] | undefined
                availability?: ('available' | 'pending')[] | undefined
                availability_entity_type?: ('episode' | 'clip')[] | undefined
                availability_from?: string | undefined
                availability_type?: ('ondemand' | 'webcast' | 'simulcast')[] | undefined
                children_of?: string[] | undefined
                descendants_of?: string[] | undefined
                duration?: ('short' | 'medium' | 'long')[] | undefined
                entity_type?: ('brand' | 'series' | 'episode' | 'clip')[] | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                group?: string | undefined
                initial_letter?: string | undefined
                initial_letter_end?: string | undefined
                initial_letter_start?: string | undefined
                initial_letter_strict?: string[] | undefined
                item?: string[] | undefined
                master_brand?: string[] | undefined
                media_set?: string | undefined
                media_type?: ('audio' | 'audio_video')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                payment_type?: ('free' | 'bbcstore' | 'uscansvod')[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                promoted_for?: string | undefined
                q?: string | undefined
                signed?: ('exclusive' | 'inclusive' | 'exclude')[] | undefined
                tag_name?: string | undefined
                tag_scheme?: string | undefined
                tleo?: ('true' | 'false')[] | undefined
                version?: string[] | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?:
                  | 'group_position'
                  | 'pid'
                  | 'position'
                  | 'promotion'
                  | 'release_date'
                  | 'relevance'
                  | 'scheduled_start'
                  | 'strict_title'
                  | 'title'
                  | 'tree'
                  | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?:
                  | (
                      | 'alternate_images'
                      | 'ancestor_titles'
                      | 'availability'
                      | 'available_simulcasts'
                      | 'available_versions'
                      | 'available_webcasts'
                      | 'contributions'
                      | 'duration'
                      | 'genre_groupings'
                      | 'genre_groups'
                      | 'images'
                      | 'is_embeddable'
                      | 'previous_next'
                      | 'programme_type'
                      | 'related_links'
                      | 'titles'
                      | 'versions_availability'
                    )[]
                  | undefined
                audio_described?: ('true' | 'false')[] | undefined
                availability?: ('available' | 'pending')[] | undefined
                availability_entity_type?: ('episode' | 'clip')[] | undefined
                availability_from?: string | undefined
                availability_type?: ('ondemand' | 'webcast' | 'simulcast')[] | undefined
                children_of?: string[] | undefined
                descendants_of?: string[] | undefined
                duration?: ('short' | 'medium' | 'long')[] | undefined
                entity_type?: ('brand' | 'series' | 'episode' | 'clip')[] | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                group?: string | undefined
                initial_letter?: string | undefined
                initial_letter_end?: string | undefined
                initial_letter_start?: string | undefined
                initial_letter_strict?: string[] | undefined
                item?: string[] | undefined
                master_brand?: string[] | undefined
                media_set?: string | undefined
                media_type?: ('audio' | 'audio_video')[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                payment_type?: ('free' | 'bbcstore' | 'uscansvod')[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                promoted_for?: string | undefined
                q?: string | undefined
                signed?: ('exclusive' | 'inclusive' | 'exclude')[] | undefined
                tag_name?: string | undefined
                tag_scheme?: string | undefined
                tleo?: ('true' | 'false')[] | undefined
                version?: string[] | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/promotions': {
      $get:
        | {
            input: {
              query: {
                mixin?: 'related_links'[] | undefined
                context?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                promoted_by?: string[] | undefined
                promoted_for?: string[] | undefined
                q?: string | undefined
                status?: 'current'[] | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                mixin?: 'related_links'[] | undefined
                context?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                promoted_by?: string[] | undefined
                promoted_for?: string[] | undefined
                q?: string | undefined
                status?: 'current'[] | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                mixin?: 'related_links'[] | undefined
                context?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                promoted_by?: string[] | undefined
                promoted_for?: string[] | undefined
                q?: string | undefined
                status?: 'current'[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                mixin?: 'related_links'[] | undefined
                context?: string | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                pid?: string[] | undefined
                promoted_by?: string[] | undefined
                promoted_for?: string[] | undefined
                q?: string | undefined
                status?: 'current'[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/schedules': {
      $get:
        | {
            input: {
              query: {
                sort?: 'start_date' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?: ('ancestor_titles' | 'images' | 'titles')[] | undefined
                authority?: string[] | undefined
                descendants_of?: string[] | undefined
                end_from?: string | undefined
                end_to?: string | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                group?: string | undefined
                id?: string[] | undefined
                id_type?: string[] | undefined
                item?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                q?: string | undefined
                repeat?: boolean | undefined
                schedule_day?: string | undefined
                schedule_day_from?: string | undefined
                schedule_day_to?: string | undefined
                service_master_brand?: string[] | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
                version?: string[] | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'start_date' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?: ('ancestor_titles' | 'images' | 'titles')[] | undefined
                authority?: string[] | undefined
                descendants_of?: string[] | undefined
                end_from?: string | undefined
                end_to?: string | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                group?: string | undefined
                id?: string[] | undefined
                id_type?: string[] | undefined
                item?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                q?: string | undefined
                repeat?: boolean | undefined
                schedule_day?: string | undefined
                schedule_day_from?: string | undefined
                schedule_day_to?: string | undefined
                service_master_brand?: string[] | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
                version?: string[] | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'start_date' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?: ('ancestor_titles' | 'images' | 'titles')[] | undefined
                authority?: string[] | undefined
                descendants_of?: string[] | undefined
                end_from?: string | undefined
                end_to?: string | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                group?: string | undefined
                id?: string[] | undefined
                id_type?: string[] | undefined
                item?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                q?: string | undefined
                repeat?: boolean | undefined
                schedule_day?: string | undefined
                schedule_day_from?: string | undefined
                schedule_day_to?: string | undefined
                service_master_brand?: string[] | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
                version?: string[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: 'start_date' | undefined
                sort_direction?: 'ascending' | 'descending' | undefined
                mixin?: ('ancestor_titles' | 'images' | 'titles')[] | undefined
                authority?: string[] | undefined
                descendants_of?: string[] | undefined
                end_from?: string | undefined
                end_to?: string | undefined
                format?: string[] | undefined
                genre?: string[] | undefined
                group?: string | undefined
                id?: string[] | undefined
                id_type?: string[] | undefined
                item?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                people?: string | undefined
                pid?: string[] | undefined
                q?: string | undefined
                repeat?: boolean | undefined
                schedule_day?: string | undefined
                schedule_day_from?: string | undefined
                schedule_day_to?: string | undefined
                service_master_brand?: string[] | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
                version?: string[] | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/schema': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/services': {
      $get:
        | {
            input: {
              query: {
                end_from?: string | undefined
                end_to?: string | undefined
                mid?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                q?: string | undefined
                service_type?:
                  | (
                      | 'Interactive'
                      | 'Local Radio'
                      | 'Master Brand Only'
                      | 'National Radio'
                      | 'On Demand'
                      | 'Regional Radio'
                      | 'Simulcast'
                      | 'TV'
                      | 'Web Only'
                      | 'Webcast'
                    )[]
                  | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                end_from?: string | undefined
                end_to?: string | undefined
                mid?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                q?: string | undefined
                service_type?:
                  | (
                      | 'Interactive'
                      | 'Local Radio'
                      | 'Master Brand Only'
                      | 'National Radio'
                      | 'On Demand'
                      | 'Regional Radio'
                      | 'Simulcast'
                      | 'TV'
                      | 'Web Only'
                      | 'Webcast'
                    )[]
                  | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                end_from?: string | undefined
                end_to?: string | undefined
                mid?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                q?: string | undefined
                service_type?:
                  | (
                      | 'Interactive'
                      | 'Local Radio'
                      | 'Master Brand Only'
                      | 'National Radio'
                      | 'On Demand'
                      | 'Regional Radio'
                      | 'Simulcast'
                      | 'TV'
                      | 'Web Only'
                      | 'Webcast'
                    )[]
                  | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                end_from?: string | undefined
                end_to?: string | undefined
                mid?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                q?: string | undefined
                service_type?:
                  | (
                      | 'Interactive'
                      | 'Local Radio'
                      | 'Master Brand Only'
                      | 'National Radio'
                      | 'On Demand'
                      | 'Regional Radio'
                      | 'Simulcast'
                      | 'TV'
                      | 'Web Only'
                      | 'Webcast'
                    )[]
                  | undefined
                sid?: string[] | undefined
                start_from?: string | undefined
                start_to?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/v1/brands/:pid': {
      $get:
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'json'; status: 200 }
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v1/brands/:pid/franchises/': {
      $get:
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'json'; status: 200 }
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v1/episodes/:pid': {
      $get:
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'json'; status: 200 }
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v1/episodes/:pid/ancestors/': {
      $get:
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'json'; status: 200 }
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v1/episodes/:pid/formats/': {
      $get:
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'json'; status: 200 }
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v1/episodes/:pid/genre_groups/': {
      $get:
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'json'; status: 200 }
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v1/images/:pid': {
      $get:
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'json'; status: 200 }
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v1/master_brands/:mbid': {
      $get:
        | { input: { param: { mbid: string } }; output: Nitro; outputFormat: 'json'; status: 200 }
        | { input: { param: { mbid: string } }; output: Nitro; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/v1/promotions/:pid': {
      $get:
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'json'; status: 200 }
        | { input: { param: { pid: string } }; output: Nitro; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/versions': {
      $get:
        | {
            input: {
              query: {
                availability?: 'available'[] | undefined
                descendants_of?: string[] | undefined
                media_set?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                payment_type?: ('free' | 'bbcstore' | 'uscansvod')[] | undefined
                pid?: string[] | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: Nitro
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                availability?: 'available'[] | undefined
                descendants_of?: string[] | undefined
                media_set?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                payment_type?: ('free' | 'bbcstore' | 'uscansvod')[] | undefined
                pid?: string[] | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: Nitro
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                availability?: 'available'[] | undefined
                descendants_of?: string[] | undefined
                media_set?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                payment_type?: ('free' | 'bbcstore' | 'uscansvod')[] | undefined
                pid?: string[] | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                availability?: 'available'[] | undefined
                descendants_of?: string[] | undefined
                media_set?: string[] | undefined
                page?: number | undefined
                page_size?: number | undefined
                partner_id?: string[] | undefined
                partner_pid?: string[] | undefined
                payment_type?: ('free' | 'bbcstore' | 'uscansvod')[] | undefined
                pid?: string[] | undefined
                embargoed?: 'include' | 'exclude' | 'only' | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
