import { createRoute, z } from '@hono/zod-openapi'

const ReleaseStatusTypeSchema = z
  .enum(['alpha', 'beta', 'supported', 'deprecated'])
  .openapi('ReleaseStatusType')

const OptionSchema = z
  .strictObject({
    href: z.string().exactOptional(),
    release_status: ReleaseStatusTypeSchema.exactOptional(),
    title: z.string(),
    value: z.string(),
  })
  .openapi({ required: ['value', 'title'] })
  .openapi('Option')

const ProhibitsSchema = z
  .strictObject({
    filter: z
      .array(z.strictObject({ name: z.string() }).openapi({ required: ['name'] }))
      .exactOptional(),
    mixin: z
      .array(
        z
          .strictObject({
            filter: z
              .array(z.strictObject({ name: z.string() }).openapi({ required: ['name'] }))
              .exactOptional(),
            mixin: z
              .array(z.strictObject({ name: z.string() }).openapi({ required: ['name'] }))
              .exactOptional(),
            name: z.string(),
          })
          .openapi({ required: ['name'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Prohibits')

const FilterSchema = z
  .strictObject({
    default: z.string().exactOptional(),
    depends_on: z.string().exactOptional(),
    deprecated: z.boolean().exactOptional(),
    deprecated_since: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/)
      .exactOptional(),
    guaranteed_until: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/)
      .exactOptional(),
    max_value: z.int().exactOptional(),
    min_value: z.int().exactOptional(),
    multiple_values: z.boolean().exactOptional(),
    name: z.string(),
    option: z.array(OptionSchema).exactOptional(),
    prefer: z.string().exactOptional(),
    prohibits: z.array(ProhibitsSchema).exactOptional(),
    release_status: ReleaseStatusTypeSchema.exactOptional(),
    replaced_by: z.string().exactOptional(),
    required: z.boolean().exactOptional(),
    title: z.string(),
    type: z.string(),
  })
  .openapi({ required: ['name', 'title', 'type'] })
  .openapi('Filter')

const UnstableFiltersSchema = z
  .strictObject({ filter: z.array(FilterSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UnstableFilters')

type FiltersType = {
  filter?: z.infer<typeof FilterSchema>[]
  unstable_filters?: z.infer<typeof UnstableFiltersSchema>
}

const AffectedBySchema = z
  .strictObject({
    filter: z
      .array(
        z
          .strictObject({
            description: z.string(),
            filter: z
              .array(
                z
                  .strictObject({ description: z.string(), name: z.string() })
                  .openapi({ required: ['name', 'description'] }),
              )
              .exactOptional(),
            name: z.string(),
          })
          .openapi({ required: ['name', 'description'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AffectedBy')

const DependencyOnSchema = z
  .strictObject({ filter: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DependencyOn')

const MixinSchema = z
  .strictObject({
    affected_by: z.array(AffectedBySchema).exactOptional(),
    dependency_on: z.array(DependencyOnSchema).exactOptional(),
    depends_on: z.string().exactOptional(),
    deprecated: z.boolean().exactOptional(),
    deprecated_since: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/)
      .exactOptional(),
    guaranteed_until: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/)
      .exactOptional(),
    href: z.string().exactOptional(),
    name: z.string(),
    prohibits: z.array(ProhibitsSchema).exactOptional(),
    release_status: ReleaseStatusTypeSchema.exactOptional(),
    replaced_by: z.string().exactOptional(),
    title: z.string(),
  })
  .openapi({ required: ['name', 'title'] })
  .openapi('Mixin')

const UnstableMixinsSchema = z
  .strictObject({ mixin: z.array(MixinSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UnstableMixins')

type MixinsType = {
  mixin?: z.infer<typeof MixinSchema>[]
  unstable_mixins?: z.infer<typeof UnstableMixinsSchema>
}

const SortDirectionSchema = z
  .strictObject({ href: z.string(), is_default: z.string(), name: z.string(), value: z.string() })
  .openapi({ required: ['name', 'value', 'is_default', 'href'] })
  .openapi('SortDirection')

const SortSchema = z
  .strictObject({
    deprecated: z.boolean().exactOptional(),
    deprecated_since: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/)
      .exactOptional(),
    guaranteed_until: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/)
      .exactOptional(),
    is_default: z.string().exactOptional(),
    name: z.string(),
    release_status: ReleaseStatusTypeSchema.exactOptional(),
    replaced_by: z.string().exactOptional(),
    sort_direction: z.array(SortDirectionSchema).exactOptional(),
    title: z.string(),
  })
  .openapi({ required: ['name', 'title'] })
  .openapi('Sort')

const UnstableSortsSchema = z
  .strictObject({ sort: z.array(SortSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UnstableSorts')

type SortsType = {
  sort?: z.infer<typeof SortSchema>[]
  unstable_sorts?: z.infer<typeof UnstableSortsSchema>
}

const ErrorModelSchema = z
  .object({
    fault: z
      .object({
        detail: z
          .object({ errorcode: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        faultString: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ErrorModel')

const DateRangeSchema = z
  .strictObject({
    end: z.iso.datetime({ offset: true }).exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DateRange')

const AccurateProgrammeTimeSchema = DateRangeSchema.openapi('AccurateProgrammeTime')

const BroadcastTimeSchema = DateRangeSchema.and(
  z
    .looseObject({
      duration: z
        .string()
        .regex(
          /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/,
        )
        .exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('BroadcastTime')

const AccurateTimeSchema = BroadcastTimeSchema.openapi('AccurateTime')

const ActualStartSchema = z.iso.datetime({ offset: true }).openapi('ActualStart')

const AdvertisingAllowedSchema = z
  .string()
  .regex(/[a-z0-9_]+/)
  .openapi('AdvertisingAllowed')

const AlternateImagesMixinSchema = z
  .strictObject({
    alternate_images: z
      .strictObject({
        alternate_image: z
          .array(
            z
              .strictObject({
                alternate_images: z
                  .strictObject({
                    alternate_image: z
                      .array(
                        z
                          .strictObject({
                            href: z.string().exactOptional(),
                            template_url: z.string(),
                            type: z.string().exactOptional(),
                          })
                          .openapi({ required: ['template_url'] }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
                href: z.string().exactOptional(),
                template_url: z.string(),
                type: z.string().exactOptional(),
              })
              .openapi({ required: ['template_url', 'alternate_images'] }),
          )
          .exactOptional(),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['alternate_images'] })
  .openapi('AlternateImagesMixin')

const PidSchema = z
  .string()
  .regex(/([a-z0-9\.\-]+|.*PID.*)/)
  .openapi('Pid')

const TitleSchema = z.string().openapi('Title')

const ContainersTitleSchema = z.string().openapi('ContainersTitle')

const PresentationTitleSchema = z.string().openapi('PresentationTitle')

const AncestorTitlesSchema = z
  .strictObject({
    brand: z
      .strictObject({ pid: PidSchema, title: TitleSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: ['pid'] }),
    episode: z
      .strictObject({
        brand: z
          .strictObject({ pid: PidSchema, title: TitleSchema.exactOptional() })
          .exactOptional()
          .openapi({ required: ['pid'] }),
        containers_title: ContainersTitleSchema.exactOptional(),
        episode: z
          .strictObject({
            containers_title: ContainersTitleSchema.exactOptional(),
            pid: PidSchema,
            presentation_title: PresentationTitleSchema.exactOptional(),
            title: TitleSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['pid'] }),
        pid: PidSchema,
        presentation_title: PresentationTitleSchema.exactOptional(),
        series: z
          .array(
            z
              .strictObject({ pid: PidSchema, title: TitleSchema.exactOptional() })
              .openapi({ required: ['pid'] }),
          )
          .max(5)
          .exactOptional(),
        title: TitleSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['pid'] }),
    series: z
      .array(
        z
          .strictObject({ pid: PidSchema, title: TitleSchema.exactOptional() })
          .openapi({ required: ['pid'] }),
      )
      .max(5)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AncestorTitles')

const ReferenceAttributesSchema = z
  .strictObject({ href: z.string(), result_type: z.string() })
  .openapi({ required: ['href', 'result_type'] })
  .openapi('ReferenceAttributes')

const ReferenceSchema = ReferenceAttributesSchema.and(
  z
    .looseObject({
      href_deprecated: z.boolean().exactOptional(),
      result_type_deprecated: z.boolean().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Reference')

const AncestorsSchema = ReferenceSchema.openapi('Ancestors')

const AncestorsTitlesSchema = z
  .strictObject({
    brand: z
      .strictObject({ pid: PidSchema, title: TitleSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: ['pid'] }),
    episode: z
      .strictObject({
        brand: z
          .strictObject({ pid: PidSchema, title: TitleSchema.exactOptional() })
          .exactOptional()
          .openapi({ required: ['pid'] }),
        containers_title: ContainersTitleSchema.exactOptional(),
        episode: z
          .strictObject({
            containers_title: ContainersTitleSchema.exactOptional(),
            pid: PidSchema,
            presentation_title: PresentationTitleSchema.exactOptional(),
            title: TitleSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['pid'] }),
        pid: PidSchema,
        presentation_title: PresentationTitleSchema.exactOptional(),
        series: z
          .array(
            z
              .strictObject({ pid: PidSchema, title: TitleSchema.exactOptional() })
              .openapi({ required: ['pid'] }),
          )
          .max(5)
          .exactOptional(),
        title: TitleSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: ['pid'] }),
    series: z
      .array(
        z
          .strictObject({ pid: PidSchema, title: TitleSchema.exactOptional() })
          .openapi({ required: ['pid'] }),
      )
      .max(5)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AncestorsTitles')

const PidReferenceSchema = z
  .strictObject({
    href: z.string().exactOptional(),
    pid: PidSchema,
    position: z.int().exactOptional(),
    result_type: z.string(),
  })
  .openapi({ required: ['pid', 'result_type'] })
  .openapi('PidReference')

const MediaProfileGroupSchema = z
  .strictObject({
    '#text': z.string().exactOptional(),
    context: z.string().exactOptional(),
    pid: PidSchema.exactOptional(),
    platform: z.string().exactOptional(),
    territory: z.string().exactOptional(),
    transport: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaProfileGroup')

const MediaProfileGroupsSchema = z
  .strictObject({ media_profile_group: z.array(MediaProfileGroupSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('MediaProfileGroups')

const ServiceReferenceSchema = z
  .strictObject({ href: z.string(), result_type: z.string(), sid: z.string() })
  .openapi({ required: ['result_type', 'href', 'sid'] })
  .openapi('ServiceReference')

const AvailabilityDebugSchema = z
  .strictObject({
    availability_of: PidReferenceSchema,
    media_profile_groups: MediaProfileGroupsSchema.exactOptional(),
    service: ServiceReferenceSchema.exactOptional(),
    territory: z.string().exactOptional(),
  })
  .openapi({ required: ['availability_of'] })
  .openapi('AvailabilityDebug')

const AvailabilityOfSchema = z
  .strictObject({
    href: z.string(),
    pid: PidSchema,
    result_type: z.string(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: ['result_type', 'pid', 'href'] })
  .openapi('AvailabilityOf')

const AvailabilityTypeSchema = z
  .enum(['ondemand', 'simulcast', 'webcast'])
  .openapi('AvailabilityType')

const MediaSetSchema = z.string().openapi('MediaSet')

const RevocationStatusSchema = z.string().openapi('RevocationStatus')

const ScheduledTimeSchema = z
  .strictObject({
    end: z.iso.datetime({ offset: true }).exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScheduledTime')

const StatusSchema = z.string().openapi('Status')

const AvailabilitySchema = z
  .strictObject({
    accurate_programme_time: DateRangeSchema.exactOptional(),
    actual_start: ActualStartSchema.exactOptional(),
    'availability-debug': AvailabilityDebugSchema.exactOptional(),
    availability_of: z.array(AvailabilityOfSchema).exactOptional(),
    availability_type: AvailabilityTypeSchema,
    media_availability_time: DateRangeSchema.exactOptional(),
    media_set: z.array(MediaSetSchema).exactOptional(),
    revocation_status: RevocationStatusSchema.exactOptional(),
    scheduled_time: ScheduledTimeSchema.exactOptional(),
    status: StatusSchema,
  })
  .openapi({ required: ['status', 'availability_type'] })
  .openapi('Availability')

const AvailabilityMixinSchema = z
  .strictObject({
    availability: z
      .array(
        z
          .strictObject({
            status: StatusSchema,
            version_types: z
              .strictObject({
                version_type: z
                  .array(
                    z
                      .strictObject({
                        end: z.iso.datetime({ offset: true }).exactOptional(),
                        id: z.string().exactOptional(),
                        start: z.iso.datetime({ offset: true }).exactOptional(),
                        version_type: z
                          .array(
                            z
                              .strictObject({
                                availability: z
                                  .array(
                                    z
                                      .strictObject({
                                        status: StatusSchema,
                                        version_types: z
                                          .strictObject({
                                            version_type: z
                                              .array(
                                                z
                                                  .strictObject({
                                                    end: z.iso
                                                      .datetime({ offset: true })
                                                      .exactOptional(),
                                                    id: z.string().exactOptional(),
                                                    start: z.iso
                                                      .datetime({ offset: true })
                                                      .exactOptional(),
                                                    version_type: z
                                                      .array(
                                                        z
                                                          .strictObject({
                                                            end: z.iso
                                                              .datetime({ offset: true })
                                                              .exactOptional(),
                                                            id: z.string().exactOptional(),
                                                            start: z.iso
                                                              .datetime({ offset: true })
                                                              .exactOptional(),
                                                          })
                                                          .openapi({ required: [] }),
                                                      )
                                                      .min(1),
                                                  })
                                                  .openapi({ required: ['version_type'] }),
                                              )
                                              .min(1),
                                          })
                                          .openapi({ required: ['version_type'] }),
                                      })
                                      .openapi({ required: ['status', 'version_types'] }),
                                  )
                                  .exactOptional(),
                                end: z.iso.datetime({ offset: true }).exactOptional(),
                                id: z.string().exactOptional(),
                                start: z.iso.datetime({ offset: true }).exactOptional(),
                              })
                              .openapi({ required: [] }),
                          )
                          .min(1),
                      })
                      .openapi({ required: ['version_type'] }),
                  )
                  .min(1),
              })
              .openapi({ required: ['version_type'] }),
          })
          .openapi({ required: ['status', 'version_types'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AvailabilityMixin')

const AvailableMediaSetsSchema = z
  .strictObject({
    media_sets: z
      .strictObject({
        media_set: z
          .array(
            z
              .strictObject({
                '#text': z.string().exactOptional(),
                media_sets: z
                  .strictObject({
                    media_set: z
                      .array(
                        z
                          .strictObject({ '#text': z.string().exactOptional() })
                          .openapi({ required: [] }),
                      )
                      .min(1),
                  })
                  .exactOptional()
                  .openapi({ required: ['media_set'] }),
              })
              .openapi({ required: [] }),
          )
          .min(1),
      })
      .exactOptional()
      .openapi({ required: ['media_set'] }),
  })
  .openapi({ required: [] })
  .openapi('AvailableMediaSets')

const AvailableVersionsMediaSetsSchema = z
  .strictObject({
    media_sets: z
      .strictObject({
        media_set: z
          .array(
            z
              .strictObject({
                actual_start: z.iso.datetime({ offset: true }).exactOptional(),
                name: z.string(),
                territories: z
                  .strictObject({
                    media_sets: z
                      .strictObject({
                        media_set: z
                          .array(
                            z
                              .strictObject({
                                actual_start: z.iso.datetime({ offset: true }).exactOptional(),
                                name: z.string(),
                                territories: z
                                  .strictObject({ territory: z.array(z.string()).exactOptional() })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                              })
                              .openapi({ required: ['name'] }),
                          )
                          .min(1),
                      })
                      .exactOptional()
                      .openapi({ required: ['media_set'] }),
                    territory: z.array(z.string()).exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: ['name'] }),
          )
          .min(1),
      })
      .exactOptional()
      .openapi({ required: ['media_set'] }),
  })
  .openapi({ required: [] })
  .openapi('AvailableVersionsMediaSets')

const AvailableMixinsSchema = z
  .strictObject({
    availabilities: z
      .strictObject({
        availabilities: z
          .strictObject({
            availability: z
              .array(
                z
                  .strictObject({
                    accurate_end: z.iso.datetime({ offset: true }).exactOptional(),
                    accurate_start: z.iso.datetime({ offset: true }).exactOptional(),
                    available_versions_media_sets: AvailableVersionsMediaSetsSchema,
                    media_availability_end: z.iso.datetime({ offset: true }).exactOptional(),
                    media_availability_start: z.iso.datetime({ offset: true }).exactOptional(),
                    payment_type: z.string().exactOptional(),
                    scheduled_end: z.iso.datetime({ offset: true }).exactOptional(),
                    scheduled_start: z.iso.datetime({ offset: true }).exactOptional(),
                    status: z.string().exactOptional(),
                    type: z.string().exactOptional(),
                  })
                  .openapi({ required: ['available_versions_media_sets'] }),
              )
              .min(1),
            type: z.string().exactOptional(),
          })
          .openapi({ required: ['availability'] }),
        availability: z
          .array(
            z
              .strictObject({
                accurate_end: z.iso.datetime({ offset: true }).exactOptional(),
                accurate_start: z.iso.datetime({ offset: true }).exactOptional(),
                available_versions_media_sets: AvailableVersionsMediaSetsSchema,
                media_availability_end: z.iso.datetime({ offset: true }).exactOptional(),
                media_availability_start: z.iso.datetime({ offset: true }).exactOptional(),
                payment_type: z.string().exactOptional(),
                scheduled_end: z.iso.datetime({ offset: true }).exactOptional(),
                scheduled_start: z.iso.datetime({ offset: true }).exactOptional(),
                status: z.string().exactOptional(),
                type: z.string().exactOptional(),
              })
              .openapi({ required: ['available_versions_media_sets'] }),
          )
          .min(1),
        type: z.string().exactOptional(),
      })
      .openapi({ required: ['availability', 'availabilities'] }),
  })
  .openapi({ required: ['availabilities'] })
  .openapi('AvailableMixins')

const WarningItemsSchema = z
  .strictObject({
    warning: z
      .array(
        z
          .strictObject({
            '#text': z.string().exactOptional(),
            short_description: z.string().exactOptional(),
            warning: z
              .array(
                z
                  .strictObject({
                    '#text': z.string().exactOptional(),
                    short_description: z.string().exactOptional(),
                    warning_code: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            warning_code: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WarningItems')

const WarningTextsSchema = z
  .strictObject({
    warning_text: z
      .array(
        z
          .strictObject({
            '#text': z.string().exactOptional(),
            length: z.string().exactOptional(),
            warning_text: z
              .array(
                z
                  .strictObject({
                    '#text': z.string().exactOptional(),
                    length: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WarningTexts')

const GuidanceWarningsSchema = z
  .strictObject({
    warnings: z
      .strictObject({
        warning_items: WarningItemsSchema.exactOptional(),
        warning_texts: WarningTextsSchema.exactOptional(),
        warnings: z
          .strictObject({
            warning_items: WarningItemsSchema.exactOptional(),
            warning_texts: WarningTextsSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('GuidanceWarnings')

const AvailableVersionsElementSchema = z
  .strictObject({
    version: z
      .array(
        z
          .strictObject({
            available_mixins: AvailableMixinsSchema.exactOptional(),
            competition_warning: z.boolean().exactOptional(),
            duration: z
              .string()
              .regex(
                /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/,
              )
              .exactOptional(),
            guidance_warnings: GuidanceWarningsSchema.exactOptional(),
            pid: PidSchema.exactOptional(),
            types: z
              .array(
                z
                  .strictObject({ type: z.array(z.string()).exactOptional() })
                  .openapi({ required: [] }),
              )
              .min(1),
            version: z
              .array(
                z
                  .strictObject({
                    available_mixins: AvailableMixinsSchema.exactOptional(),
                    competition_warning: z.boolean().exactOptional(),
                    duration: z
                      .string()
                      .regex(
                        /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/,
                      )
                      .exactOptional(),
                    guidance_warnings: GuidanceWarningsSchema.exactOptional(),
                    pid: PidSchema.exactOptional(),
                    types: z
                      .array(
                        z
                          .strictObject({ type: z.array(z.string()).exactOptional() })
                          .openapi({ required: [] }),
                      )
                      .min(1),
                  })
                  .openapi({ required: ['types'] }),
              )
              .exactOptional(),
          })
          .openapi({ required: ['types'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AvailableVersionsElement')

const AvailableSimulcastsSchema = z
  .strictObject({ available: z.int(), available_versions_element: AvailableVersionsElementSchema })
  .openapi({ required: ['available_versions_element', 'available'] })
  .openapi('AvailableSimulcasts')

const AvailableVersionsSchema = z
  .strictObject({ available: z.int(), available_versions_element: AvailableVersionsElementSchema })
  .openapi({ required: ['available_versions_element', 'available'] })
  .openapi('AvailableVersions')

const AvailableWebcastsSchema = z
  .strictObject({ available: z.int(), available_versions_element: AvailableVersionsElementSchema })
  .openapi({ required: ['available_versions_element', 'available'] })
  .openapi('AvailableWebcasts')

const ContributionsMixinContributorNameSchema = z
  .strictObject({
    name: z
      .strictObject({
        family: z.string().exactOptional(),
        given: z.string().exactOptional(),
        name: z
          .strictObject({
            family: z.string().exactOptional(),
            given: z.string().exactOptional(),
            presentation: z.string().exactOptional(),
            title: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
        presentation: z.string().exactOptional(),
        title: z.string().exactOptional(),
      })
      .openapi({ required: ['name'] }),
  })
  .openapi({ required: ['name'] })
  .openapi('ContributionsMixinContributorName')

const TypeSchema = z.string().openapi('Type')

const ContributionsMixinContributorSchema = z
  .strictObject({
    contributor: z
      .strictObject({
        contributions_mixin_contributor_name:
          ContributionsMixinContributorNameSchema.exactOptional(),
        contributor: z
          .strictObject({
            contributions_mixin_contributor_name:
              ContributionsMixinContributorNameSchema.exactOptional(),
            href: z.string().exactOptional(),
            type: TypeSchema.exactOptional(),
          })
          .openapi({ required: [] }),
        href: z.string().exactOptional(),
        type: TypeSchema.exactOptional(),
      })
      .openapi({ required: ['contributor'] }),
  })
  .openapi({ required: ['contributor'] })
  .openapi('ContributionsMixinContributor')

const ContributionsMixinContributionSchema = z
  .strictObject({
    contribution: z
      .strictObject({
        character_name: z.string().exactOptional(),
        contribution: z
          .strictObject({
            character_name: z.string().exactOptional(),
            contributions_mixin_contributor: ContributionsMixinContributorSchema.exactOptional(),
            credit_role: z
              .strictObject({ '#text': z.string().exactOptional(), id: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
        contributions_mixin_contributor: ContributionsMixinContributorSchema.exactOptional(),
        credit_role: z
          .strictObject({ '#text': z.string().exactOptional(), id: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .openapi({ required: ['contribution'] }),
  })
  .openapi({ required: ['contribution'] })
  .openapi('ContributionsMixinContribution')

const ContributionsMixinSchema = z
  .strictObject({
    contributions: z
      .strictObject({
        contributions: z
          .strictObject({
            contributions_mixin_contribution: z
              .array(ContributionsMixinContributionSchema)
              .exactOptional(),
            href: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
        contributions_mixin_contribution: z
          .array(ContributionsMixinContributionSchema)
          .exactOptional(),
        href: z.string().exactOptional(),
      })
      .openapi({ required: ['contributions'] }),
  })
  .openapi({ required: ['contributions'] })
  .openapi('ContributionsMixin')

const EmbargoedSchema = z.enum(['true', 'false']).openapi('Embargoed')

const ExpectedChildCountSchema = z.int().openapi('ExpectedChildCount')

const GenreSchema = z
  .strictObject({
    '#text': z.string().exactOptional(),
    id: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Genre')

const GenreGroupSchema = z
  .strictObject({
    genres: z
      .strictObject({ genre: z.array(GenreSchema).exactOptional() })
      .openapi({ required: [] }),
    id: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: ['genres'] })
  .openapi('GenreGroup')

const GenreGroupingsTypeSchema = z
  .strictObject({ genre_group: z.array(GenreGroupSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('GenreGroupingsType')

const IdentifierSchema = z
  .strictObject({
    '#text': z.string().exactOptional(),
    authority: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Identifier')

const IdentifiersSchema = z
  .strictObject({ identifier: z.array(IdentifierSchema).min(1) })
  .openapi({ required: ['identifier'] })
  .openapi('Identifiers')

const DeprecationAttributesSchema = z
  .strictObject({
    deprecated: z.boolean(),
    deprecated_since: z.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/),
    replaced_by: z.string(),
  })
  .openapi({ required: ['deprecated', 'deprecated_since', 'replaced_by'] })
  .openapi('DeprecationAttributes')

const ImageLinkSchema = z
  .strictObject({
    image: z.union([
      DeprecationAttributesSchema,
      z
        .object({
          image: z
            .strictObject({ pid: PidSchema.exactOptional(), template_url: z.string() })
            .openapi({ required: ['template_url'] }),
          pid: PidSchema.exactOptional(),
          template_url: z.string(),
        })
        .openapi({ required: ['template_url', 'image'] }),
    ]),
  })
  .openapi({ required: ['image'] })
  .openapi('ImageLink')

const ImagesMixinSchema = z
  .strictObject({
    images: z
      .strictObject({
        image: z
          .strictObject({
            href: z.string().exactOptional(),
            images: z
              .strictObject({
                image: z
                  .strictObject({
                    href: z.string().exactOptional(),
                    inherited_from: z
                      .strictObject({
                        href: z.string().exactOptional(),
                        result_type: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                    template_url: z.string(),
                    type: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: ['template_url'] }),
              })
              .openapi({ required: [] }),
            inherited_from: z
              .strictObject({
                href: z.string().exactOptional(),
                result_type: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            template_url: z.string(),
            type: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: ['template_url', 'images'] }),
      })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['images'] })
  .openapi('ImagesMixin')

const IsEmbeddableSchema = z.boolean().openapi('IsEmbeddable')

const MidSchema = z.string().openapi('Mid')

const MasterBrandLinkSchema = z
  .strictObject({
    master_brand: z
      .strictObject({
        href: z.string(),
        master_brand: z
          .strictObject({ href: z.string(), mid: MidSchema, result_type: z.string() })
          .openapi({ required: ['href', 'mid', 'result_type'] }),
        mid: MidSchema,
        result_type: z.string(),
      })
      .openapi({ required: ['href', 'mid', 'result_type', 'master_brand'] }),
  })
  .openapi({ required: ['master_brand'] })
  .openapi('MasterBrandLink')

const PreviousNextMixinSchema = z
  .strictObject({
    previous_next: z
      .strictObject({
        next: ReferenceSchema.exactOptional(),
        previous: ReferenceSchema.exactOptional(),
        previous_next: z
          .strictObject({
            next: ReferenceSchema.exactOptional(),
            previous: ReferenceSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      })
      .openapi({ required: ['previous_next'] }),
  })
  .openapi({ required: ['previous_next'] })
  .openapi('PreviousNextMixin')

const FormatSchema = z
  .strictObject({ '#text': z.string().exactOptional(), format_id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Format')

const ProgrammeFormatsSchema = z
  .strictObject({ format: z.array(FormatSchema).min(1) })
  .openapi({ required: ['format'] })
  .openapi('ProgrammeFormats')

const ProgrammeTypeSchema = z
  .strictObject({ value: z.string() })
  .openapi({ required: ['value'] })
  .openapi('ProgrammeType')

const IsExternalSchema = z.boolean().openapi('IsExternal')

const PositionSchema = z.int().openapi('Position')

const LongSchema = z.string().openapi('Long')

const MediumSchema = z.string().openapi('Medium')

const ShortSchema = z.string().openapi('Short')

const SynopsesSchema = z
  .strictObject({
    long: LongSchema.exactOptional(),
    medium: MediumSchema.exactOptional(),
    short: ShortSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Synopses')

const UriSchema = z.string().openapi('Uri')

const RelatedLinkSchema = z
  .strictObject({
    availability: z
      .strictObject({
        end: z.iso.datetime({ offset: true }).exactOptional(),
        start: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    is_external: IsExternalSchema.exactOptional(),
    pid: PidSchema,
    position: PositionSchema.exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    type: TypeSchema.exactOptional(),
    uri: UriSchema.exactOptional(),
  })
  .openapi({ required: ['pid'] })
  .openapi('RelatedLink')

const RelatedLinksSchema = z
  .strictObject({ related_link: z.array(RelatedLinkSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('RelatedLinks')

const ReleaseDateGroupSchema = z
  .strictObject({
    release_date: z
      .string()
      .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/)
      .exactOptional(),
    release_year: z
      .string()
      .regex(/[0-9]{4}/)
      .exactOptional(),
    release_year_month: z
      .string()
      .regex(/[0-9]{4}-[0-9]{2}/)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReleaseDateGroup')

const UpdatedTimeSchema = z.iso.datetime({ offset: true }).openapi('UpdatedTime')

const BrandSchema = z
  .strictObject({
    alternate_images_mixin: AlternateImagesMixinSchema.exactOptional(),
    availability_mixin: AvailabilityMixinSchema.exactOptional(),
    contributions_mixin: ContributionsMixinSchema.exactOptional(),
    embargoed: EmbargoedSchema,
    expected_child_count: ExpectedChildCountSchema.exactOptional(),
    franchises: ReferenceSchema.exactOptional(),
    genre_groupings: GenreGroupingsTypeSchema.exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    image_link: ImageLinkSchema.exactOptional(),
    images_mixin: ImagesMixinSchema.exactOptional(),
    is_embeddable: IsEmbeddableSchema.exactOptional(),
    items_for: ReferenceSchema.exactOptional(),
    master_brand_link: MasterBrandLinkSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    previous_next_mixin: PreviousNextMixinSchema.exactOptional(),
    programme_formats: ProgrammeFormatsSchema.exactOptional(),
    programme_type: ProgrammeTypeSchema.exactOptional(),
    related_links: RelatedLinksSchema.exactOptional(),
    release_date_group: ReleaseDateGroupSchema.exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_time: UpdatedTimeSchema,
    uri: UriSchema.exactOptional(),
  })
  .openapi({ required: ['pid', 'partner', 'updated_time', 'embargoed'] })
  .openapi('Brand')

const IdSchema = z
  .strictObject({
    '#text': z.string().exactOptional(),
    authority: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Id')

const IdsSchema = z
  .strictObject({ id: z.array(IdSchema).min(1) })
  .openapi({ required: ['id'] })
  .openapi('Ids')

const IsAudioDescribedSchema = z.boolean().openapi('IsAudioDescribed')

const IsBlankedSchema = z.boolean().openapi('IsBlanked')

const IsCriticalSchema = z.boolean().openapi('IsCritical')

const IsRepeatSchema = z.boolean().openapi('IsRepeat')

const IsSimulcastSchema = z.boolean().openapi('IsSimulcast')

const TxTimeSchema = z
  .strictObject({
    credits_showing: z.iso.datetime({ offset: true }).exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TxTime')

const BroadcastSchema = z
  .strictObject({
    ancestor_titles: AncestorTitlesSchema.exactOptional(),
    ancestors_titles: AncestorsTitlesSchema.exactOptional(),
    broadcast_of: z.array(PidReferenceSchema).exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    ids: IdsSchema.exactOptional(),
    image_link: ImageLinkSchema.exactOptional(),
    images_mixin: ImagesMixinSchema.exactOptional(),
    is_audio_described: IsAudioDescribedSchema.exactOptional(),
    is_blanked: IsBlankedSchema.exactOptional(),
    is_critical: IsCriticalSchema.exactOptional(),
    is_repeat: IsRepeatSchema.exactOptional(),
    is_simulcast: IsSimulcastSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    published_time: BroadcastTimeSchema.exactOptional(),
    service: ServiceReferenceSchema.exactOptional(),
    tx_time: TxTimeSchema.exactOptional(),
    updated_time: UpdatedTimeSchema.exactOptional(),
  })
  .openapi({ required: ['pid', 'partner'] })
  .openapi('Broadcast')

const BroadcastOfSchema = PidReferenceSchema.openapi('BroadcastOf')

const SidSchema = z
  .string()
  .regex(/[a-z0-9A-Z_\.\-]+/)
  .openapi('Sid')

const BroadcasterSchema = z
  .strictObject({ href: z.string(), result_type: z.string(), sid: SidSchema })
  .openapi({ required: ['href', 'sid', 'result_type'] })
  .openapi('Broadcaster')

const CaptionSchema = z.string().openapi('Caption')

const CatalogueNumberSchema = z.string().min(1).max(32).openapi('CatalogueNumber')

const MusicCodeSchema = z.string().min(1).max(8).openapi('MusicCode')

const OffsetInSchema = z
  .strictObject({
    href: z.string(),
    offset: z.int().exactOptional(),
    position: z.number().exactOptional(),
    programme: PidSchema,
    version: PidSchema,
  })
  .openapi({ required: ['programme', 'version', 'href'] })
  .openapi('OffsetIn')

const OffsetsSchema = z
  .strictObject({ offset_in: z.array(OffsetInSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Offsets')

const PlayedInLinksSchema = z
  .strictObject({
    played_in: z
      .strictObject({
        href: z.string().exactOptional(),
        played_in: z
          .strictObject({
            href: z.string().exactOptional(),
            result_type: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        result_type: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('PlayedInLinks')

const PlayEventSchema = z
  .strictObject({
    offset: z.int().exactOptional(),
    pid: PidSchema,
    played_in_links: z.array(PlayedInLinksSchema).exactOptional(),
    position: z.number().exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: ['pid'] })
  .openapi('PlayEvent')

const PlayEventsSchema = z
  .strictObject({ play_event: z.array(PlayEventSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('PlayEvents')

const PublisherSchema = z.string().min(1).max(255).openapi('Publisher')

const RecordLabelSchema = z.string().min(1).max(255).openapi('RecordLabel')

const RecordingDateSchema = z.string().min(4).max(10).openapi('RecordingDate')

const ReleaseTitleSchema = z.string().min(1).max(255).openapi('ReleaseTitle')

const SnippetUrlSchema = z.string().openapi('SnippetUrl')

const SourceMediaSchema = z.string().min(1).max(64).openapi('SourceMedia')

const TrackNumberSchema = z.string().min(1).max(8).openapi('TrackNumber')

const TrackSideSchema = z.string().min(1).max(8).openapi('TrackSide')

const ItemSchema = z
  .strictObject({
    catalogue_number: CatalogueNumberSchema.exactOptional(),
    contributions_mixin: ContributionsMixinSchema.exactOptional(),
    duration: z.float32().exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    ids: IdsSchema.exactOptional(),
    images_mixin: ImagesMixinSchema.exactOptional(),
    item_of: ReferenceSchema.exactOptional(),
    music_code: MusicCodeSchema.exactOptional(),
    offsets: OffsetsSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    play_events: PlayEventsSchema.exactOptional(),
    publisher: PublisherSchema.exactOptional(),
    record_label: RecordLabelSchema.exactOptional(),
    recording_date: RecordingDateSchema.exactOptional(),
    release_title: ReleaseTitleSchema.exactOptional(),
    snippet_url: SnippetUrlSchema.exactOptional(),
    source_media: SourceMediaSchema.exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    track_number: TrackNumberSchema.exactOptional(),
    track_side: TrackSideSchema.exactOptional(),
    type: z.string().exactOptional(),
    updated_time: UpdatedTimeSchema.exactOptional(),
  })
  .openapi({ required: ['pid', 'partner'] })
  .openapi('Item')

const ChapterSchema = ItemSchema.openapi('Chapter')

const DeprecatedReferenceElementSchema = ReferenceAttributesSchema.and(
  DeprecationAttributesSchema,
).openapi('DeprecatedReferenceElement')

const GenreGroupsTypeSchema = DeprecatedReferenceElementSchema.and(
  z
    .looseObject({ genre_group: z.array(GenreGroupSchema).exactOptional() })
    .openapi({ required: [] }),
).openapi('GenreGroupsType')

const MediaTypeSchema = z.enum(['Video', 'Audio']).openapi('MediaType')

const OriginalVersionDurationSchema = z
  .strictObject({
    version: z
      .strictObject({
        duration: z
          .string()
          .regex(
            /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/,
          )
          .exactOptional(),
        href: z.string(),
        pid: PidSchema,
        version: z
          .strictObject({
            duration: z
              .string()
              .regex(
                /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/,
              )
              .exactOptional(),
            href: z.string(),
            pid: PidSchema,
          })
          .exactOptional()
          .openapi({ required: ['pid', 'href'] }),
      })
      .exactOptional()
      .openapi({ required: ['pid', 'href'] }),
  })
  .openapi({ required: [] })
  .openapi('OriginalVersionDuration')

const VersionAvailabilitySchema = z
  .strictObject({
    availability: z
      .strictObject({
        availability: z
          .strictObject({
            availability_end: z.iso.datetime({ offset: true }).exactOptional(),
            availability_start: z.iso.datetime({ offset: true }).exactOptional(),
            available_media_sets: AvailableMediaSetsSchema,
            status: z.string().exactOptional(),
          })
          .openapi({ required: ['available_media_sets'] }),
        availability_end: z.iso.datetime({ offset: true }).exactOptional(),
        availability_start: z.iso.datetime({ offset: true }).exactOptional(),
        available_media_sets: AvailableMediaSetsSchema,
        status: z.string().exactOptional(),
      })
      .openapi({ required: ['available_media_sets', 'availability'] }),
  })
  .openapi({ required: ['availability'] })
  .openapi('VersionAvailability')

const VersionAvailabilityMixinSchema = z
  .strictObject({
    version: z
      .array(
        z
          .strictObject({
            availabilities: z
              .array(
                z
                  .strictObject({ version_availability: z.array(VersionAvailabilitySchema).min(1) })
                  .openapi({ required: ['version_availability'] }),
              )
              .exactOptional(),
            competition_warning: z.string().exactOptional(),
            duration: z
              .string()
              .regex(
                /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/,
              )
              .exactOptional(),
            guidance_warnings: GuidanceWarningsSchema.exactOptional(),
            pid: PidSchema.exactOptional(),
            types: z
              .array(
                z
                  .strictObject({ type: z.array(z.string()).exactOptional() })
                  .openapi({ required: [] }),
              )
              .min(1),
            version: z
              .array(
                z
                  .strictObject({
                    availabilities: z
                      .array(
                        z
                          .strictObject({
                            version_availability: z.array(VersionAvailabilitySchema).min(1),
                          })
                          .openapi({ required: ['version_availability'] }),
                      )
                      .exactOptional(),
                    competition_warning: z.string().exactOptional(),
                    duration: z
                      .string()
                      .regex(
                        /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/,
                      )
                      .exactOptional(),
                    guidance_warnings: GuidanceWarningsSchema.exactOptional(),
                    pid: PidSchema.exactOptional(),
                    types: z
                      .array(
                        z
                          .strictObject({ type: z.array(z.string()).exactOptional() })
                          .openapi({ required: [] }),
                      )
                      .min(1),
                  })
                  .openapi({ required: ['types'] }),
              )
              .exactOptional(),
          })
          .openapi({ required: ['types'] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VersionAvailabilityMixin')

const VersionsSchema = z
  .strictObject({ available: z.int(), version_availability_mixin: VersionAvailabilityMixinSchema })
  .openapi({ required: ['version_availability_mixin', 'available'] })
  .openapi('Versions')

const VersionsMixinSchema = z
  .strictObject({
    available_simulcasts: AvailableSimulcastsSchema.exactOptional(),
    available_versions: AvailableVersionsSchema.exactOptional(),
    available_webcasts: AvailableWebcastsSchema.exactOptional(),
    versions: z.array(VersionsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VersionsMixin')

const ClipSchema = z
  .strictObject({
    advertising_allowed: AdvertisingAllowedSchema,
    alternate_images_mixin: AlternateImagesMixinSchema.exactOptional(),
    ancestor_titles: AncestorTitlesSchema.exactOptional(),
    ancestors: ReferenceSchema.exactOptional(),
    ancestors_titles: AncestorsTitlesSchema.exactOptional(),
    availability_mixin: AvailabilityMixinSchema.exactOptional(),
    caption: CaptionSchema.exactOptional(),
    clip_of: PidReferenceSchema.exactOptional(),
    contributions_mixin: ContributionsMixinSchema.exactOptional(),
    embargoed: EmbargoedSchema,
    genre_groupings: GenreGroupingsTypeSchema.exactOptional(),
    genre_groups: GenreGroupsTypeSchema.exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    image_link: ImageLinkSchema.exactOptional(),
    images_mixin: ImagesMixinSchema.exactOptional(),
    is_embeddable: IsEmbeddableSchema.exactOptional(),
    items_for: ReferenceSchema.exactOptional(),
    master_brand_link: MasterBrandLinkSchema.exactOptional(),
    media_type: MediaTypeSchema.exactOptional(),
    original_version_duration: OriginalVersionDurationSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    previous_next_mixin: PreviousNextMixinSchema.exactOptional(),
    programme_formats: ProgrammeFormatsSchema.exactOptional(),
    related_links: RelatedLinksSchema.exactOptional(),
    release_date_group: ReleaseDateGroupSchema.exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_time: UpdatedTimeSchema,
    uri: UriSchema.exactOptional(),
    versions_mixin: VersionsMixinSchema.exactOptional(),
  })
  .openapi({ required: ['pid', 'partner', 'updated_time', 'embargoed', 'advertising_allowed'] })
  .openapi('Clip')

const ClipOfSchema = PidReferenceSchema.openapi('ClipOf')

const CodeSchema = z.string().openapi('Code')

const ForProgrammeSchema = z
  .strictObject({ href: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ForProgramme')

const ForProgrammesSchema = z
  .strictObject({ for_programme: z.array(ForProgrammeSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ForProgrammes')

const ScheduledSchema = z
  .strictObject({
    end: z.iso.datetime({ offset: true }).exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Scheduled')

const UrlKeySchema = z.string().openapi('UrlKey')

const GroupBodySchema = z
  .strictObject({
    alternate_images_mixin: AlternateImagesMixinSchema.exactOptional(),
    embargoed: EmbargoedSchema,
    for_programmes: ForProgrammesSchema.exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    ids: IdsSchema.exactOptional(),
    images_mixin: ImagesMixinSchema.exactOptional(),
    master_brand_link: MasterBrandLinkSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    related_links: RelatedLinksSchema.exactOptional(),
    scheduled: ScheduledSchema.exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_time: UpdatedTimeSchema,
    url_key: UrlKeySchema.exactOptional(),
  })
  .openapi({ required: ['pid', 'embargoed', 'partner', 'updated_time'] })
  .openapi('GroupBody')

const CollectionSchema = GroupBodySchema.openapi('Collection')

const CompetitionWarningSchema = z.boolean().openapi('CompetitionWarning')

const ContextSchema = z
  .strictObject({
    cascades_to_descendants: z.boolean().exactOptional(),
    href: z.string().exactOptional(),
    pid: PidSchema,
    result_type: z.string(),
  })
  .openapi({ required: ['pid', 'result_type'] })
  .openapi('Context')

const ContributorNameSchema = z
  .strictObject({
    name: z
      .strictObject({
        family: z.string().exactOptional(),
        given: z.string().exactOptional(),
        lang: z.string().exactOptional(),
        name: z
          .strictObject({
            family: z.string().exactOptional(),
            given: z.string().exactOptional(),
            lang: z.string().exactOptional(),
            presentation: z.string().exactOptional(),
            title: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
        presentation: z.string().exactOptional(),
        title: z.string().exactOptional(),
      })
      .openapi({ required: ['name'] }),
  })
  .openapi({ required: ['name'] })
  .openapi('ContributorName')

const ContributorToSchema = z
  .strictObject({ href: z.string(), result_type: z.string() })
  .openapi({ required: ['result_type', 'href'] })
  .openapi('ContributorTo')

const DisambiguationSchema = z.string().openapi('Disambiguation')

const ContributorSchema = z
  .strictObject({
    contributor_name: ContributorNameSchema.exactOptional(),
    contributor_to: z.array(ContributorToSchema).exactOptional(),
    disambiguation: DisambiguationSchema.exactOptional(),
    href: z.string().exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    ids: IdsSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    type: TypeSchema.exactOptional(),
  })
  .openapi({ required: ['pid', 'partner'] })
  .openapi('Contributor')

const CreditsTimeSchema = z
  .strictObject({
    squeeze_end: z.iso.datetime({ offset: true }).exactOptional(),
    squeeze_start: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreditsTime')

const DatumSchema = z.string().openapi('Datum')

const DataSchema = z
  .strictObject({ datum: DatumSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Data')

const DateRange2Schema = DateRangeSchema.openapi('DateRange2')

const DeprecatedSchema = z
  .strictObject({
    deprecated_since: z.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/),
    name: z.string(),
    replaced_by: z.string().exactOptional(),
    replacement_type: z.string().exactOptional(),
    type: z.string(),
  })
  .openapi({ required: ['name', 'type', 'deprecated_since'] })
  .openapi('Deprecated')

const DeprecationsSchema = z
  .strictObject({ deprecated: z.array(DeprecatedSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Deprecations')

const DescriptionSchema = z.string().openapi('Description')

const DimensionsSchema = z
  .strictObject({ height: z.int().exactOptional(), width: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('Dimensions')

const EndSchema = z.iso.datetime({ offset: true }).openapi('End')

const EndTimeSchema = z.iso.datetime({ offset: true }).openapi('EndTime')

const HasGuidanceSchema = z.boolean().openapi('HasGuidance')

const IsStackedSchema = z.boolean().openapi('IsStacked')

const EpisodeSchema = z
  .strictObject({
    advertising_allowed: AdvertisingAllowedSchema,
    alternate_images_mixin: AlternateImagesMixinSchema.exactOptional(),
    ancestor_titles: AncestorTitlesSchema.exactOptional(),
    ancestors: ReferenceSchema.exactOptional(),
    ancestors_titles: AncestorsTitlesSchema.exactOptional(),
    availability_mixin: AvailabilityMixinSchema.exactOptional(),
    contributions_mixin: ContributionsMixinSchema.exactOptional(),
    embargoed: EmbargoedSchema,
    episode_of: PidReferenceSchema.exactOptional(),
    genre_groupings: GenreGroupingsTypeSchema.exactOptional(),
    genre_groups: GenreGroupsTypeSchema.exactOptional(),
    has_guidance: HasGuidanceSchema.exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    image_link: ImageLinkSchema.exactOptional(),
    images_mixin: ImagesMixinSchema.exactOptional(),
    is_embeddable: IsEmbeddableSchema.exactOptional(),
    is_stacked: IsStackedSchema.exactOptional(),
    items_for: ReferenceSchema.exactOptional(),
    master_brand_link: MasterBrandLinkSchema.exactOptional(),
    media_type: MediaTypeSchema.exactOptional(),
    original_version_duration: OriginalVersionDurationSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    presentation_title: PresentationTitleSchema.exactOptional(),
    previous_next_mixin: PreviousNextMixinSchema.exactOptional(),
    programme_formats: ProgrammeFormatsSchema.exactOptional(),
    programme_type: ProgrammeTypeSchema.exactOptional(),
    related_links: RelatedLinksSchema.exactOptional(),
    release_date_group: ReleaseDateGroupSchema.exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_time: UpdatedTimeSchema,
    uri: UriSchema.exactOptional(),
    versions_mixin: VersionsMixinSchema.exactOptional(),
  })
  .openapi({ required: ['pid', 'partner', 'updated_time', 'embargoed', 'advertising_allowed'] })
  .openapi('Episode')

const EpisodeOfSchema = PidReferenceSchema.openapi('EpisodeOf')

const ErrorNameSchema = z.string().openapi('ErrorName')

const ExprSchema = z.string().openapi('Expr')

const FormatStringSchema = z.string().openapi('FormatString')

const MessageSchema = z.string().openapi('Message')

const RetryableSchema = z.boolean().openapi('Retryable')

const XqueryVersionSchema = z
  .enum(['1.0-ml', '0.9-ml', '1.0', 'XSLT'])
  .openapi({ description: 'The XQuery language version.' })
  .openapi('XqueryVersion')

const ErrorSchema = z
  .strictObject({
    code: CodeSchema,
    data: DataSchema,
    'error-name': ErrorNameSchema,
    expr: ExprSchema,
    'format-string': FormatStringSchema,
    message: MessageSchema,
    retryable: RetryableSchema,
    'xquery-version': XqueryVersionSchema,
  })
  .openapi({
    required: [
      'code',
      'error-name',
      'xquery-version',
      'message',
      'format-string',
      'retryable',
      'expr',
      'data',
    ],
  })
  .openapi('Error')

const ErrorsSchema = z
  .strictObject({ error: ErrorSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Errors')

const FiltersSchema: z.ZodType<FiltersType> = z
  .lazy(() =>
    z
      .strictObject({
        filter: z.array(FilterSchema).exactOptional(),
        unstable_filters: UnstableFiltersSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Filters')

const MixinsSchema: z.ZodType<MixinsType> = z
  .lazy(() =>
    z
      .strictObject({
        mixin: z.array(MixinSchema).exactOptional(),
        unstable_mixins: UnstableMixinsSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Mixins')

const SortsSchema: z.ZodType<SortsType> = z
  .lazy(() =>
    z
      .strictObject({
        sort: z.array(SortSchema).exactOptional(),
        unstable_sorts: UnstableSortsSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Sorts')

const FeedSchema = z
  .strictObject({
    deprecations: DeprecationsSchema.exactOptional(),
    filters: FiltersSchema.exactOptional(),
    href: z.string(),
    mixins: MixinsSchema.exactOptional(),
    name: z.string(),
    rel: z.string(),
    release_status: ReleaseStatusTypeSchema.exactOptional(),
    sorts: SortsSchema.exactOptional(),
    title: z.string(),
  })
  .openapi({ required: ['href', 'name', 'rel', 'title'] })
  .openapi('Feed')

const FeedsSchema = z
  .strictObject({
    deployment_root: z.string().exactOptional(),
    deprecations: DeprecationsSchema.exactOptional(),
    feed: z.array(FeedSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Feeds')

const FocusPointSchema = z
  .strictObject({ x: z.int().exactOptional(), y: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('FocusPoint')

const FranchiseSchema = GroupBodySchema.openapi('Franchise')

const FranchisesSchema = ReferenceSchema.openapi('Franchises')

const GallerySchema = GroupBodySchema.openapi('Gallery')

const GenreGroupingsSchema = GenreGroupingsTypeSchema.openapi('GenreGroupings')

const GenreGroupsSchema = GenreGroupsTypeSchema.openapi('GenreGroups')

const HighlightSchema = ItemSchema.openapi('Highlight')

const SizeSchema = z
  .strictObject({ units: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Size')

const SourceAssetSchema = z
  .strictObject({
    dimensions: DimensionsSchema.exactOptional(),
    focus_point: FocusPointSchema.exactOptional(),
    mime_type: z.string().exactOptional(),
    size: SizeSchema.exactOptional(),
    uri: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SourceAsset')

const ImageSchema = z
  .strictObject({
    author: z.string().exactOptional(),
    embargoed: EmbargoedSchema,
    identifiers: IdentifiersSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    shoot_date: z.iso.datetime({ offset: true }).exactOptional(),
    source_asset: SourceAssetSchema.exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    template_url: z.string().exactOptional(),
    title: TitleSchema.exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: ['pid', 'embargoed', 'partner'] })
  .openapi('Image')

const IsConcreteSchema = z.boolean().openapi('IsConcrete')

const IsDownloadableSchema = z.boolean().openapi('IsDownloadable')

const IsSignedSchema = z.boolean().openapi('IsSigned')

const IsStreamableSchema = z.boolean().openapi('IsStreamable')

const ItemOfSchema = ReferenceSchema.openapi('ItemOf')

const ItemsForSchema = ReferenceSchema.openapi('ItemsFor')

const NameSchema = z.string().openapi('Name')

const MasterBrandSchema = z
  .strictObject({
    colour: z.string().exactOptional(),
    competition_warning: z
      .strictObject({ href: z.string(), pid: PidSchema })
      .exactOptional()
      .openapi({ required: ['href', 'pid'] }),
    ident: z.string().exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    image_link: ImageLinkSchema.exactOptional(),
    images_mixin: ImagesMixinSchema.exactOptional(),
    master_brand_date_range: z
      .strictObject({
        end: z.iso.datetime({ offset: true }).exactOptional(),
        start: z.iso.datetime({ offset: true }).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    mid: MidSchema,
    name: NameSchema.exactOptional(),
    partner: PidSchema,
    position: PositionSchema.exactOptional(),
    synopses: z
      .strictObject({
        long: LongSchema.exactOptional(),
        medium: MediumSchema.exactOptional(),
        short: ShortSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    title: TitleSchema.exactOptional(),
    url_key: z.string().exactOptional(),
  })
  .openapi({ required: ['mid', 'partner'] })
  .openapi('MasterBrand')

const MediaAvailabilityTimeSchema = DateRangeSchema.openapi('MediaAvailabilityTime')

const MusicSchema = ItemSchema.openapi('Music')

const NextSchema = z
  .strictObject({ href: z.string() })
  .openapi({ required: ['href'] })
  .openapi('Next')

const PreviousSchema = z
  .strictObject({ href: z.string() })
  .openapi({ required: ['href'] })
  .openapi('Previous')

const PaginationSchema = z
  .strictObject({ next: NextSchema.exactOptional(), previous: PreviousSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Pagination')

const PrioritySchema = z.int().openapi('Priority')

const PromotedBySchema = z.string().openapi('PromotedBy')

const PromotedForSchema = z.string().openapi('PromotedFor')

const StartTimeSchema = z.iso.datetime({ offset: true }).openapi('StartTime')

const UrlSchema = z.string().openapi('Url')

const PromotionSchema = z
  .strictObject({
    context: ContextSchema.exactOptional(),
    end_time: EndTimeSchema.exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    priority: PrioritySchema.exactOptional(),
    promoted_by: PromotedBySchema.exactOptional(),
    promoted_for: PromotedForSchema.exactOptional(),
    promotion_of: PidReferenceSchema.exactOptional(),
    related_links: RelatedLinksSchema.exactOptional(),
    start_time: StartTimeSchema.exactOptional(),
    status: StatusSchema.exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_time: UpdatedTimeSchema,
    uri: UriSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
  })
  .openapi({ required: ['pid', 'partner', 'updated_time'] })
  .openapi('Promotion')

const SeriesSchema = z
  .strictObject({
    alternate_images_mixin: AlternateImagesMixinSchema.exactOptional(),
    ancestor_titles: AncestorTitlesSchema.exactOptional(),
    ancestors: ReferenceSchema.exactOptional(),
    ancestors_titles: AncestorsTitlesSchema.exactOptional(),
    availability_mixin: AvailabilityMixinSchema.exactOptional(),
    contributions_mixin: ContributionsMixinSchema.exactOptional(),
    embargoed: EmbargoedSchema,
    expected_child_count: ExpectedChildCountSchema.exactOptional(),
    genre_groupings: GenreGroupingsTypeSchema.exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    image_link: ImageLinkSchema.exactOptional(),
    images_mixin: ImagesMixinSchema.exactOptional(),
    is_embeddable: IsEmbeddableSchema.exactOptional(),
    items_for: ReferenceSchema.exactOptional(),
    master_brand_link: MasterBrandLinkSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    previous_next_mixin: PreviousNextMixinSchema.exactOptional(),
    programme_formats: ProgrammeFormatsSchema.exactOptional(),
    programme_type: ProgrammeTypeSchema.exactOptional(),
    related_links: RelatedLinksSchema.exactOptional(),
    release_date_group: ReleaseDateGroupSchema.exactOptional(),
    series_of: PidReferenceSchema.exactOptional(),
    synopses: SynopsesSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_time: UpdatedTimeSchema,
    uri: UriSchema.exactOptional(),
  })
  .openapi({ required: ['pid', 'partner', 'updated_time', 'embargoed'] })
  .openapi('Series')

const RegionSchema = z.string().openapi('Region')

const ServiceSchema = z
  .strictObject({
    date_range: DateRangeSchema.exactOptional(),
    description: DescriptionSchema.exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    ids: IdsSchema.exactOptional(),
    is_concrete: IsConcreteSchema.exactOptional(),
    is_downloadable: IsDownloadableSchema.exactOptional(),
    is_streamable: IsStreamableSchema.exactOptional(),
    master_brand_link: MasterBrandLinkSchema.exactOptional(),
    media_type: MediaTypeSchema.exactOptional(),
    name: NameSchema.exactOptional(),
    partner: PidSchema,
    region: RegionSchema.exactOptional(),
    sid: SidSchema,
    type: TypeSchema.exactOptional(),
    updated_time: UpdatedTimeSchema.exactOptional(),
  })
  .openapi({ required: ['sid', 'partner'] })
  .openapi('Service')

const TypesWithIdSchema = z
  .strictObject({
    types: z
      .strictObject({
        type: z
          .array(
            z
              .strictObject({
                id: z.string().exactOptional(),
                types: z
                  .strictObject({
                    type: z
                      .array(
                        z
                          .strictObject({ id: z.string().exactOptional() })
                          .openapi({ required: [] }),
                      )
                      .min(1),
                  })
                  .openapi({ required: ['type'] }),
              })
              .openapi({ required: ['types'] }),
          )
          .min(1),
      })
      .openapi({ required: ['type'] }),
  })
  .openapi({ required: ['types'] })
  .openapi('TypesWithId')

const VersionTypesWithIdSchema = z
  .strictObject({
    version_types: z
      .strictObject({
        version_type: z
          .array(
            z
              .strictObject({
                id: z.string().exactOptional(),
                version_types: z
                  .strictObject({
                    version_type: z
                      .array(
                        z
                          .strictObject({ id: z.string().exactOptional() })
                          .openapi({ required: [] }),
                      )
                      .min(1),
                  })
                  .openapi({ required: ['version_type'] }),
              })
              .openapi({ required: ['version_types'] }),
          )
          .min(1),
      })
      .openapi({ required: ['version_type'] }),
  })
  .openapi({ required: ['version_types'] })
  .openapi('VersionTypesWithId')

const WarningSchema = z
  .strictObject({
    '#text': z.string().exactOptional(),
    short_description: z.string().exactOptional(),
    warning_code: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Warning')

const WarningTextSchema = z
  .strictObject({ '#text': z.string().exactOptional(), length: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('WarningText')

const WarningsSchema = z
  .strictObject({
    warning: z.array(WarningSchema).exactOptional(),
    warning_text: z.array(WarningTextSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Warnings')

const VersionGroupSchema = z
  .strictObject({
    version: z
      .strictObject({
        aspect_ratio: z.string().exactOptional(),
        competition_warning: CompetitionWarningSchema.exactOptional(),
        duration: z
          .string()
          .regex(
            /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/,
          )
          .exactOptional(),
        identifiers: IdentifiersSchema.exactOptional(),
        ids: IdsSchema.exactOptional(),
        pid: PidSchema,
        types_with_id: TypesWithIdSchema.exactOptional(),
        updated_time: UpdatedTimeSchema,
        version: z
          .strictObject({
            aspect_ratio: z.string().exactOptional(),
            competition_warning: CompetitionWarningSchema.exactOptional(),
            duration: z
              .string()
              .regex(
                /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/,
              )
              .exactOptional(),
            identifiers: IdentifiersSchema.exactOptional(),
            ids: IdsSchema.exactOptional(),
            pid: PidSchema,
            types_with_id: TypesWithIdSchema.exactOptional(),
            updated_time: UpdatedTimeSchema,
            version_of: PidReferenceSchema.exactOptional(),
            version_types_with_id: VersionTypesWithIdSchema.exactOptional(),
            warnings: WarningsSchema.exactOptional(),
          })
          .openapi({ required: ['pid', 'updated_time'] }),
        version_of: PidReferenceSchema.exactOptional(),
        version_types_with_id: VersionTypesWithIdSchema.exactOptional(),
        warnings: WarningsSchema.exactOptional(),
      })
      .openapi({ required: ['pid', 'updated_time', 'version'] }),
  })
  .openapi({ required: ['version'] })
  .openapi('VersionGroup')

const PublicationRightsSchema = z
  .strictObject({
    '#text': z.string().exactOptional(),
    context: z.string().exactOptional(),
    platform: z.string().exactOptional(),
    territory: z.string().exactOptional(),
    transport: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublicationRights')

const ScheduledPublicationRightsSchema = z
  .strictObject({ publication_rights: z.array(PublicationRightsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ScheduledPublicationRights')

const WindowSchema = z
  .strictObject({
    accurate_programme_time: DateRangeSchema.exactOptional(),
    ancestor_titles: AncestorTitlesSchema.exactOptional(),
    ancestors_titles: AncestorsTitlesSchema.exactOptional(),
    identifiers: IdentifiersSchema.exactOptional(),
    ids: IdsSchema.exactOptional(),
    image_link: ImageLinkSchema.exactOptional(),
    images_mixin: ImagesMixinSchema.exactOptional(),
    media_availability_time: DateRangeSchema.exactOptional(),
    partner: PidSchema,
    pid: PidSchema,
    scheduled_publication_rights: ScheduledPublicationRightsSchema.exactOptional(),
    scheduled_time: ScheduledTimeSchema.exactOptional(),
    service: ServiceReferenceSchema.exactOptional(),
    updated_time: UpdatedTimeSchema.exactOptional(),
    window_of: z.array(PidReferenceSchema).exactOptional(),
  })
  .openapi({ required: ['pid', 'partner'] })
  .openapi('Window')

const ResultsSchema = z
  .strictObject({
    availability: AvailabilitySchema.exactOptional(),
    brand: BrandSchema.exactOptional(),
    broadcast: BroadcastSchema.exactOptional(),
    chapter: ItemSchema.exactOptional(),
    clip: ClipSchema.exactOptional(),
    collection: GroupBodySchema.exactOptional(),
    contributor: ContributorSchema.exactOptional(),
    episode: EpisodeSchema.exactOptional(),
    franchise: GroupBodySchema.exactOptional(),
    gallery: GroupBodySchema.exactOptional(),
    highlight: ItemSchema.exactOptional(),
    image: ImageSchema.exactOptional(),
    master_brand: MasterBrandSchema.exactOptional(),
    more_than: z.int().exactOptional(),
    music: ItemSchema.exactOptional(),
    other: ItemSchema.exactOptional(),
    page: z.int(),
    page_size: z.int(),
    promotion: PromotionSchema.exactOptional(),
    season: GroupBodySchema.exactOptional(),
    series: SeriesSchema.exactOptional(),
    service: ServiceSchema.exactOptional(),
    speech: ItemSchema.exactOptional(),
    total: z.int().exactOptional(),
    version_group: VersionGroupSchema.exactOptional(),
    window: WindowSchema.exactOptional(),
  })
  .openapi({ required: ['page', 'page_size'] })
  .openapi('Results')

const NitroSchema = z
  .looseObject({
    deprecations: DeprecationsSchema.exactOptional(),
    filters: FiltersSchema.exactOptional(),
    mixins: MixinsSchema.exactOptional(),
    pagination: PaginationSchema.exactOptional(),
    results: ResultsSchema.exactOptional(),
    sorts: SortsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Nitro')

const OtherSchema = ItemSchema.openapi('Other')

const PartnerSchema = PidSchema.openapi('Partner')

const PromotionOfSchema = PidReferenceSchema.openapi('PromotionOf')

const PublishedTimeSchema = BroadcastTimeSchema.openapi('PublishedTime')

const ScheduleDateSchema = z
  .string()
  .regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}.*$/)
  .openapi('ScheduleDate')

const SeasonSchema = GroupBodySchema.openapi('Season')

const SeriesOfSchema = PidReferenceSchema.openapi('SeriesOf')

const SpeechSchema = ItemSchema.openapi('Speech')

const VersionOfSchema = PidReferenceSchema.openapi('VersionOf')

const WindowOfSchema = PidReferenceSchema.openapi('WindowOf')

const ApiKeySecurityScheme = { in: 'query', name: 'api_key', type: 'apiKey' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['schema'],
  summary: 'Get API definition',
  description: 'Get API definition',
  operationId: 'getAPI',
  responses: {
    200: { description: 'Metadata response' },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getAvailabilitiesRoute = createRoute({
  method: 'get',
  path: '/availabilities',
  tags: ['feeds'],
  summary: 'Discover details of on-demand availability for programmes and their versions',
  description: 'Discover details of on-demand availability for programmes and their versions',
  operationId: 'listAvailability',
  request: {
    query: z.object({
      sort: z
        .literal('scheduled_start')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts:\n* scheduled_start: sort chronologically by scheduled start time/date, ascending\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['scheduled_start'], type: 'string' },
          },
        }),
      sort_direction: z
        .enum(['ascending', 'descending'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { enum: ['ascending', 'descending'], type: 'string' },
          },
        }),
      availability: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('available')),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of availabilities',
            in: 'query',
            name: 'availability',
            required: false,
            schema: { items: { enum: ['available'], type: 'string' }, type: 'array' },
          },
        }),
      descendants_of: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of availabilities that have PID as ancestor',
            in: 'query',
            name: 'descendants_of',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      media_set: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of availabilities with media set',
            in: 'query',
            name: 'media_set',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      territory: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['uk', 'nonuk', 'world'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for availabilities in given territory',
            in: 'query',
            name: 'territory',
            required: false,
            schema: { items: { enum: ['uk', 'nonuk', 'world'], type: 'string' }, type: 'array' },
          },
        }),
      debug: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Turn on debug information (undocumented)',
            in: 'query',
            name: 'debug',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getBroadcastsRoute = createRoute({
  method: 'get',
  path: '/broadcasts',
  tags: ['feeds'],
  summary: 'Build schedules and find metadata for TV and radio broadcasts',
  description:
    'Fetch metadata about linear Broadcasts and Services, allowing the generation of Television and Radio schedules and other datasets for broadcast items. Use /schedules instead of this feed as it is more efficient. Broadcasts will be deprecated in the future.',
  operationId: 'listBroadcasts',
  request: {
    query: z.object({
      sort: z
        .literal('start_date')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts:\n* start_date: sort chronologically by scheduled start time/date, ascending\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['start_date'], type: 'string' },
          },
        }),
      sort_direction: z
        .enum(['ascending', 'descending'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { enum: ['ascending', 'descending'], type: 'string' },
          },
        }),
      mixin: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('titles')),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Mixins:\n* titles: return ancestor programme titles\n',
            in: 'query',
            name: 'mixin',
            required: false,
            schema: { items: { enum: ['titles'], type: 'string' }, type: 'array' },
          },
        }),
      authority: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts that have given authority',
            in: 'query',
            name: 'authority',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      descendants_of: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that are descendants of the given programme PID',
            in: 'query',
            name: 'descendants_of',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      end_from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that end on or later than the specified datetime',
            in: 'query',
            name: 'end_from',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      end_to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that end on or earlier than the specified datetime',
            in: 'query',
            name: 'end_to',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      format: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that are classified in the given format ID',
            in: 'query',
            name: 'format',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
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
              'filter for subset of broadcasts that are classified in the given genre ID',
            in: 'query',
            name: 'genre',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts that have given identifier',
            in: 'query',
            name: 'id',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      item: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts with the given item performed on it',
            in: 'query',
            name: 'item',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      people: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts that have given contributor',
            in: 'query',
            name: 'people',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts having given PID',
            in: 'query',
            name: 'pid',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      schedule_day: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that start on the specified day (BBC time)',
            in: 'query',
            name: 'schedule_day',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      schedule_day_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that start on or after the specified day (BBC time)',
            in: 'query',
            name: 'schedule_day_from',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      schedule_day_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that start on or before the specified day (BBC time)',
            in: 'query',
            name: 'schedule_day_to',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      service_master_brand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts with given service master brand',
            in: 'query',
            name: 'service_master_brand',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      sid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts that are on the specified linear service',
            in: 'query',
            name: 'sid',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      start_from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that start on or later than the specified datetime',
            in: 'query',
            name: 'start_from',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      start_to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that start on or earlier than the specified datetime',
            in: 'query',
            name: 'start_to',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      version: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts with given PID as their parent version',
            in: 'query',
            name: 'version',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getGroupsRoute = createRoute({
  method: 'get',
  path: '/groups',
  tags: ['feeds'],
  summary: 'Find metadata for curated groups: seasons, collections, galleries or franchises',
  description:
    'Long-lived curated collections of programmes and more, including Collections, Seasons, Franchises and Galleries',
  operationId: 'listGroups',
  request: {
    query: z.object({
      sort: z
        .literal('pid')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorts:\n* pid: sort alphabetically by PID\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['pid'], type: 'string' },
          },
        }),
      sort_direction: z
        .literal('descending')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { enum: ['descending'], type: 'string' },
          },
        }),
      mixin: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['alternate_images', 'group_for', 'images', 'related_links'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mixins:\n* alternate_images: mixin to return the alternate images for a group\n* group_for: mixin to return links to programme entities that group belongs to\n* images: mixin to add image information for a group\n* related_links: mixin to return related links for the group\n',
            in: 'query',
            name: 'mixin',
            required: false,
            schema: {
              items: {
                enum: ['alternate_images', 'group_for', 'images', 'related_links'],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      for_descendants_of: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for groups related to given programme or its descendants',
            in: 'query',
            name: 'for_descendants_of',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      for_programme: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of groups directly related to a given programme',
            in: 'query',
            name: 'for_programme',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      group: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of groups which belong to the given group pid',
            in: 'query',
            name: 'group',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      group_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['collection', 'franchise', 'gallery', 'season'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of groups that have the given group type',
            in: 'query',
            name: 'group_type',
            required: false,
            schema: {
              items: { enum: ['collection', 'franchise', 'gallery', 'season'], type: 'string' },
              type: 'array',
            },
          },
        }),
      member: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of groups which contain an entity with the given pid as a member',
            in: 'query',
            name: 'member',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for groups by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for groups by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of seasons, collections, galleries or franchises having given PID',
            in: 'query',
            name: 'pid',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of groups matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      embargoed: z
        .enum(['include', 'exclude', 'only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Control return of embargoed items (undocumented)',
            in: 'query',
            name: 'embargoed',
            required: false,
            schema: { enum: ['include', 'exclude', 'only'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getImagesRoute = createRoute({
  method: 'get',
  path: '/images',
  tags: ['feeds'],
  summary: 'Find metadata for images',
  description: 'Find metadata for images, particularly those in galleries',
  operationId: 'listImages',
  request: {
    query: z.object({
      sort: z
        .enum(['group_position', 'pid'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts:\n* group_position: sort numerically by position, ascending only\n* pid: sort alphabetically by PID\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['group_position', 'pid'], type: 'string' },
          },
        }),
      sort_direction: z
        .enum(['ascending', 'descending'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { enum: ['ascending', 'descending'], type: 'string' },
          },
        }),
      group: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for images belonging to the given group (i.e. Gallery)',
            in: 'query',
            name: 'group',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      image_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['standard', 'podcast', 'store', 'portrait', 'letterbox'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for images by type',
            in: 'query',
            name: 'image_type',
            required: false,
            schema: {
              items: {
                enum: ['standard', 'podcast', 'store', 'portrait', 'letterbox'],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      is_alternate_image_for: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for alternate images by entity PID',
            in: 'query',
            name: 'is_alternate_image_for',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      is_image_for: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for images by entity PID',
            in: 'query',
            name: 'is_image_for',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for images by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for images by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of images having given PID',
            in: 'query',
            name: 'pid',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of images matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      embargoed: z
        .enum(['include', 'exclude', 'only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Control return of embargoed items (undocumented)',
            in: 'query',
            name: 'embargoed',
            required: false,
            schema: { enum: ['include', 'exclude', 'only'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getItemsRoute = createRoute({
  method: 'get',
  path: '/items',
  tags: ['feeds'],
  summary: 'Look inside programmes to find segments: chapters, tracks and more',
  description: 'Look inside programmes to find segments: chapters, tracks and more',
  operationId: 'listItems',
  request: {
    query: z.object({
      sort: z
        .literal('pid')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorts:\n* pid: sort by pid, descending\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['pid'], type: 'string' },
          },
        }),
      sort_direction: z
        .literal('descending')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { enum: ['descending'], type: 'string' },
          },
        }),
      mixin: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['contributions', 'images', 'offset', 'play_event'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mixins:\n* contributions: mixin to return information about contributors to items\n* images: mixin to add image information for an item\n* offset: mixin to return programme segment offsets, works in conjunction with programme filter\n* play_event: mixin to return programme segment events, works in conjunction with programme or segment_event filters\n',
            in: 'query',
            name: 'mixin',
            required: false,
            schema: {
              items: { enum: ['contributions', 'images', 'offset', 'play_event'], type: 'string' },
              type: 'array',
            },
          },
        }),
      authority: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of items that have an ID issued by the given authority',
            in: 'query',
            name: 'authority',
            required: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of items having given ID',
            in: 'query',
            name: 'id',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      id_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of items that have given an ID of the given type',
            in: 'query',
            name: 'id_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      item_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['chapter', 'highlight', 'music', 'speech', 'other'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for specific type(s) of items',
            in: 'query',
            name: 'item_type',
            required: false,
            schema: {
              items: { enum: ['chapter', 'highlight', 'music', 'speech', 'other'], type: 'string' },
              type: 'array',
            },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for items by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for items by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      people: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of items that have specified person involved',
            in: 'query',
            name: 'people',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of items matching one of the given PIDs',
            in: 'query',
            name: 'pid',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      programme: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of items that are part of the given programme',
            in: 'query',
            name: 'programme',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of items matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      segment_event: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for item with the given segment_event',
            in: 'query',
            name: 'segment_event',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getMasterBrandsRoute = createRoute({
  method: 'get',
  path: '/master_brands',
  tags: ['feeds'],
  summary: 'List all Master Brands',
  description: 'List all Master Brands',
  operationId: 'listMasterbrands',
  request: {
    query: z.object({
      sort: z
        .literal('mid')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorts:\n* mid: sort by mid, ascending\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['mid'], type: 'string' },
          },
        }),
      sort_direction: z
        .literal('ascending')
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { enum: ['ascending'], type: 'string' },
          },
        }),
      mixin: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('images')),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Mixins:\n* images: mixin to add image information for a masterbrand\n',
            in: 'query',
            name: 'mixin',
            required: false,
            schema: { items: { enum: ['images'], type: 'string' }, type: 'array' },
          },
        }),
      mid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of masterbrands that have given identifier',
            in: 'query',
            name: 'mid',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for masterbrands by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for masterbrands by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of masterbrands matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getPeopleRoute = createRoute({
  method: 'get',
  path: '/people',
  tags: ['feeds'],
  summary: 'Find the people behind and in programmes: cast, crew, guests and more',
  description:
    'The People feed allows you to search for the people and groups that contribute to programmes. This is the starting point for cast and crew credits, as well as finding contributors using external IDs (such as Wikipedia URLs)',
  operationId: 'listPeople',
  request: {
    query: z.object({
      authority: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of people that have an ID issued by the given authority',
            in: 'query',
            name: 'authority',
            required: false,
            schema: { type: 'string' },
          },
        }),
      has_external_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['true', 'false'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for people who have an external identifier',
            in: 'query',
            name: 'has_external_id',
            required: false,
            schema: { items: { enum: ['true', 'false'], type: 'string' }, type: 'array' },
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of people having given ID',
            in: 'query',
            name: 'id',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      id_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of people that have given an ID of the given type',
            in: 'query',
            name: 'id_type',
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for people by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for people by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of people having given PID',
            in: 'query',
            name: 'pid',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      programme: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of people that have contributed to the given programme pid',
            in: 'query',
            name: 'programme',
            required: false,
            schema: { type: 'string' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of people matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getPipsRoute = createRoute({
  method: 'get',
  path: '/pips',
  tags: ['feeds'],
  summary: 'Look inside pips entities',
  description: 'Look inside pips entities',
  operationId: 'listPips',
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getProgrammeDetailsRoute = createRoute({
  method: 'get',
  path: '/programme_details',
  tags: ['feeds'],
  summary: 'Exposes programme information for a single pid',
  description: 'Exposes programme information for a single pid',
  operationId: 'listProgrammeDetails',
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_pid: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for programme information by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      pid: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter for programme information for the provided PID',
            in: 'query',
            name: 'pid',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getProgrammesRoute = createRoute({
  method: 'get',
  path: '/programmes',
  tags: ['feeds'],
  summary: 'Start here for programmes metadata: Brands, Series, Episodes and Clips',
  description:
    'Fetch metadata about Programmes (brands, series, episodes, clips). By applying different filter restrictions this feed can be used in many ways, for example to retrieve all series belonging to a brand, all the episodes and/or clips for a specific series, or any TLEO objects for a masterbrand. Other filters permit restricting to specific formats and/or genres, and you can request specific versions (for example Signed or Audio-Described). Parameters may be combined in any way suitable for your application.',
  operationId: 'listProgrammes',
  request: {
    query: z.object({
      sort: z
        .enum([
          'group_position',
          'pid',
          'position',
          'promotion',
          'release_date',
          'relevance',
          'scheduled_start',
          'strict_title',
          'title',
          'tree',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Sorts:\n* group_position: sort numerically by position in group, ascending\n* pid: sort alphabetically by PID, descending\n* position: sort numerically by position, ascending\n* promotion: sort by promotion rank, ascending\n* release_date: sort chronologically by release date, descending\n* relevance: sort by weighting of search term (use with q parameter)\n* scheduled_start: sort chronologically by scheduled start time/date, ascending\n* strict_title: sort alphabetically by title, ascending\n* title: sort by title librarian style (ignoring leading 'The', 'A', etc), ascending\n* tree: sort by root pid and then preorder tree sort. Requires entities to have release date.\n",
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              enum: [
                'group_position',
                'pid',
                'position',
                'promotion',
                'release_date',
                'relevance',
                'scheduled_start',
                'strict_title',
                'title',
                'tree',
              ],
              type: 'string',
            },
          },
        }),
      sort_direction: z
        .enum(['ascending', 'descending'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { enum: ['ascending', 'descending'], type: 'string' },
          },
        }),
      mixin: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'alternate_images',
              'ancestor_titles',
              'availability',
              'available_simulcasts',
              'available_versions',
              'available_webcasts',
              'contributions',
              'duration',
              'genre_groupings',
              'genre_groups',
              'images',
              'is_embeddable',
              'previous_next',
              'programme_type',
              'related_links',
              'titles',
              'versions_availability',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mixins:\n* alternate_images: mixin to return the alternate images for a programme\n* ancestor_titles: mixin to return ancestor programme titles\n* availability: mixin to return programme availability information\n* available_simulcasts: mixin to return information about programmes that are currently available as simulcasts\n* available_versions: mixin to return information about programmes that are currently available on demand\n* available_webcasts: mixin to return information about programmes that are currently available as webcasts\n* contributions: mixin to return information about contributors to a programme\n* duration: mixin to return original version duration in programme concept entities\n* genre_groupings: mixin to return list of genre groupings\n* genre_groups: mixin to return list of genre groups\n* images: mixin to add image information for a programme\n* is_embeddable: mixin to add embeddable information for a programme\n* previous_next: mixin to return the programmes which appear before and after a programme (as determined by the sort applied in the request)\n* programme_type: mixin to return the programme type\n* related_links: mixin to return information about related links to a programme\n* titles: mixin to return ancestor programme titles\n* versions_availability: mixin to return information about programmes that are currently available\n',
            in: 'query',
            name: 'mixin',
            required: false,
            schema: {
              items: {
                enum: [
                  'alternate_images',
                  'ancestor_titles',
                  'availability',
                  'available_simulcasts',
                  'available_versions',
                  'available_webcasts',
                  'contributions',
                  'duration',
                  'genre_groupings',
                  'genre_groups',
                  'images',
                  'is_embeddable',
                  'previous_next',
                  'programme_type',
                  'related_links',
                  'titles',
                  'versions_availability',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      audio_described: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['true', 'false'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes that are audio-described',
            in: 'query',
            name: 'audio_described',
            required: false,
            schema: { items: { enum: ['true', 'false'], type: 'string' }, type: 'array' },
          },
        }),
      availability: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['available', 'pending'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes that have availability',
            in: 'query',
            name: 'availability',
            required: false,
            schema: { items: { enum: ['available', 'pending'], type: 'string' }, type: 'array' },
          },
        }),
      availability_entity_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['episode', 'clip'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'additional filter when availability=available',
            in: 'query',
            name: 'availability_entity_type',
            required: false,
            schema: { items: { enum: ['episode', 'clip'], type: 'string' }, type: 'array' },
          },
        }),
      availability_from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            deprecated: true,
            description:
              'filter for subset of programmes that are available after or at the specified datetime',
            in: 'query',
            name: 'availability_from',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      availability_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ondemand', 'webcast', 'simulcast'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for a subset of programmes that are available for a given type',
            in: 'query',
            name: 'availability_type',
            required: false,
            schema: {
              items: { enum: ['ondemand', 'webcast', 'simulcast'], type: 'string' },
              type: 'array',
            },
          },
        }),
      children_of: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes that have PID as immediate parent',
            in: 'query',
            name: 'children_of',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      descendants_of: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes that have PID as ancestor',
            in: 'query',
            name: 'descendants_of',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      duration: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['short', 'medium', 'long'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes that have given duration',
            in: 'query',
            name: 'duration',
            required: false,
            schema: { items: { enum: ['short', 'medium', 'long'], type: 'string' }, type: 'array' },
          },
        }),
      entity_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['brand', 'series', 'episode', 'clip'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes that have given entity type',
            in: 'query',
            name: 'entity_type',
            required: false,
            schema: {
              items: { enum: ['brand', 'series', 'episode', 'clip'], type: 'string' },
              type: 'array',
            },
          },
        }),
      format: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes with format',
            in: 'query',
            name: 'format',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
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
            description: 'filter for subset of programmes with genre',
            in: 'query',
            name: 'genre',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      group: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes which belong to the given group pid',
            in: 'query',
            name: 'group',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      initial_letter: z
        .string()
        .length(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              "filter for subset of programmes with title beginning with initial letter librarian style (ignoring leading 'The', 'An' (Welsh), etc) 0-9 a-z",
            in: 'query',
            name: 'initial_letter',
            required: false,
            schema: { maxLength: 1, minLength: 1, type: 'string' },
          },
        }),
      initial_letter_end: z
        .string()
        .length(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Programmes with (librarian) titles whose initial letter is equal/before given letter. Use with initial_letter_start for a range',
            in: 'query',
            name: 'initial_letter_end',
            required: false,
            schema: { maxLength: 1, minLength: 1, type: 'string' },
          },
        }),
      initial_letter_start: z
        .string()
        .length(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Programmes with (librarian) titles whose initial letter is equal/after given letter. Use with initial_letter_end for range.',
            in: 'query',
            name: 'initial_letter_start',
            required: false,
            schema: { maxLength: 1, minLength: 1, type: 'string' },
          },
        }),
      initial_letter_strict: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string().length(1)),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes with title beginning with initial letter',
            in: 'query',
            name: 'initial_letter_strict',
            required: false,
            schema: { items: { maxLength: 1, minLength: 1, type: 'string' }, type: 'array' },
          },
        }),
      item: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of programmes with linked to versions which have the given item pids',
            in: 'query',
            name: 'item',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      master_brand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes with master_brand',
            in: 'query',
            name: 'master_brand',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      media_set: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes with media set',
            in: 'query',
            name: 'media_set',
            required: false,
            schema: { type: 'string' },
          },
        }),
      media_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['audio', 'audio_video'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes with media type',
            in: 'query',
            name: 'media_type',
            required: false,
            schema: { items: { enum: ['audio', 'audio_video'], type: 'string' }, type: 'array' },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for programmes by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for programmes by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      payment_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['free', 'bbcstore', 'uscansvod'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for a subset of programmes that are of the given payment_type',
            in: 'query',
            name: 'payment_type',
            required: false,
            schema: {
              items: { enum: ['free', 'bbcstore', 'uscansvod'], type: 'string' },
              type: 'array',
            },
          },
        }),
      people: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes with contributions by given people PID',
            in: 'query',
            name: 'people',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes having given PID',
            in: 'query',
            name: 'pid',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      promoted_for: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes which are promoted for given service',
            in: 'query',
            name: 'promoted_for',
            required: false,
            schema: { type: 'string' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of programmes matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      signed: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['exclusive', 'inclusive', 'exclude'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes that are signed',
            in: 'query',
            name: 'signed',
            required: false,
            schema: {
              items: { enum: ['exclusive', 'inclusive', 'exclude'], type: 'string' },
              type: 'array',
            },
          },
        }),
      tag_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes with tag',
            in: 'query',
            name: 'tag_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tag_scheme: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes with a tag',
            in: 'query',
            name: 'tag_scheme',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tleo: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['true', 'false'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes that are TLEOs',
            in: 'query',
            name: 'tleo',
            required: false,
            schema: { items: { enum: ['true', 'false'], type: 'string' }, type: 'array' },
          },
        }),
      version: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of programmes with given PID as one of their versions',
            in: 'query',
            name: 'version',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      embargoed: z
        .enum(['include', 'exclude', 'only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Control return of embargoed items (undocumented)',
            in: 'query',
            name: 'embargoed',
            required: false,
            schema: { enum: ['include', 'exclude', 'only'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getPromotionsRoute = createRoute({
  method: 'get',
  path: '/promotions',
  tags: ['feeds'],
  summary: 'Discover metadata for content promotions',
  description:
    'Details of short-term editorially curated "promotions", for instance those programmes featured on iPlayer today',
  operationId: 'listPromotions',
  request: {
    query: z.object({
      mixin: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('related_links')),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mixins:\n* related_links: mixin to return information about related links to a promotion\n',
            in: 'query',
            name: 'mixin',
            required: false,
            schema: { items: { enum: ['related_links'], type: 'string' }, type: 'array' },
          },
        }),
      context: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of promotions belonging to a given context',
            in: 'query',
            name: 'context',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for promotions by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for promotions by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of promotions having given PID',
            in: 'query',
            name: 'pid',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      promoted_by: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of promotions having given promoted by',
            in: 'query',
            name: 'promoted_by',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      promoted_for: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of promotions having given promoted for',
            in: 'query',
            name: 'promoted_for',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of promotions matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('current')),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of promotions with status',
            in: 'query',
            name: 'status',
            required: false,
            schema: { items: { enum: ['current'], type: 'string' }, type: 'array' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getSchedulesRoute = createRoute({
  method: 'get',
  path: '/schedules',
  tags: ['feeds'],
  summary: 'Build schedules and find metadata for TV and radio broadcasts and webcasts',
  description: 'Dates, Times, Schedules: when and where are programmes being shown?',
  operationId: 'listSchedules',
  request: {
    query: z.object({
      sort: z
        .literal('start_date')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Sorts:\n* start_date: sort chronologically by scheduled start time/date, ascending\n',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { enum: ['start_date'], type: 'string' },
          },
        }),
      sort_direction: z
        .enum(['ascending', 'descending'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction',
            in: 'query',
            name: 'sort_direction',
            required: false,
            schema: { enum: ['ascending', 'descending'], type: 'string' },
          },
        }),
      mixin: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ancestor_titles', 'images', 'titles'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mixins:\n* ancestor_titles: return ancestor programme titles\n* images: mixin to add image information for broadcasts and webcasts\n* titles: return ancestor programme titles\n',
            in: 'query',
            name: 'mixin',
            required: false,
            schema: {
              items: { enum: ['ancestor_titles', 'images', 'titles'], type: 'string' },
              type: 'array',
            },
          },
        }),
      authority: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts and webcasts that have given authority',
            in: 'query',
            name: 'authority',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      descendants_of: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that are descendants of the given programme PID',
            in: 'query',
            name: 'descendants_of',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      end_from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that end on or later than the specified datetime',
            in: 'query',
            name: 'end_from',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      end_to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that end on or earlier than the specified datetime',
            in: 'query',
            name: 'end_to',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      format: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that are classified in the given format ID',
            in: 'query',
            name: 'format',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
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
              'filter for subset of broadcasts and webcasts that are classified in the given genre ID',
            in: 'query',
            name: 'genre',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      group: z
        .string()
        .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
        .min(8)
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that have programmes in the given group',
            in: 'query',
            name: 'group',
            required: false,
            schema: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
          },
        }),
      id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts and webcasts that have given identifier',
            in: 'query',
            name: 'id',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      id_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts and webcasts that have given id type',
            in: 'query',
            name: 'id_type',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      item: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts with the given item performed on it',
            in: 'query',
            name: 'item',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for broadcasts and webcasts by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for broadcasts and webcasts by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      people: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts and webcasts that have given contributor',
            in: 'query',
            name: 'people',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of broadcasts and webcasts having given PID',
            in: 'query',
            name: 'pid',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      repeat: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter to show either only repeats or non-repeats',
            in: 'query',
            name: 'repeat',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      schedule_day: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that start on the specified day (BBC time)',
            in: 'query',
            name: 'schedule_day',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      schedule_day_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that start on or after the specified day (BBC time)',
            in: 'query',
            name: 'schedule_day_from',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      schedule_day_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that start on or before the specified day (BBC time)',
            in: 'query',
            name: 'schedule_day_to',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      service_master_brand: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts with given service master brand',
            in: 'query',
            name: 'service_master_brand',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      sid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that are on the specified linear service',
            in: 'query',
            name: 'sid',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      start_from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that start on or later than the specified datetime',
            in: 'query',
            name: 'start_from',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      start_to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts that start on or earlier than the specified datetime',
            in: 'query',
            name: 'start_to',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      version: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts and webcasts with given PID as their parent version',
            in: 'query',
            name: 'version',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getSchemaRoute = createRoute({
  method: 'get',
  path: '/schema',
  tags: ['schema'],
  summary: 'Get Schema definition',
  description: 'Get Schema definition',
  operationId: 'getXSD',
  responses: {
    200: { description: 'Metadata response' },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getServicesRoute = createRoute({
  method: 'get',
  path: '/services',
  tags: ['feeds'],
  summary: 'Information about the linear services used for broadcast transmissions',
  description:
    'The services feed exposes the linear broadcast "services" from PIPs. These are the actual services which broadcast programmes (eg bbc_one_oxford is the service for BBC One in Oxford).',
  operationId: 'listServices',
  request: {
    query: z.object({
      end_from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Return services that end on or later than the specified datetime',
            in: 'query',
            name: 'end_from',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      end_to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of broadcasts that end on or earlier than the specified datetime',
            in: 'query',
            name: 'end_to',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      mid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for services by masterbrand MID',
            in: 'query',
            name: 'mid',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for services by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for services by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'filter for subset of services matching supplied keyword/phrase (boolean operators permitted)',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
      service_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'Interactive',
              'Local Radio',
              'Master Brand Only',
              'National Radio',
              'On Demand',
              'Regional Radio',
              'Simulcast',
              'TV',
              'Web Only',
              'Webcast',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for specified type of linear services',
            in: 'query',
            name: 'service_type',
            required: false,
            schema: {
              items: {
                enum: [
                  'Interactive',
                  'Local Radio',
                  'Master Brand Only',
                  'National Radio',
                  'On Demand',
                  'Regional Radio',
                  'Simulcast',
                  'TV',
                  'Web Only',
                  'Webcast',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      sid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for specified linear service',
            in: 'query',
            name: 'sid',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
          },
        }),
      start_from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Return services that start on or later than the specified datetime',
            in: 'query',
            name: 'start_from',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      start_to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Return services that start earlier than the specified datetime',
            in: 'query',
            name: 'start_to',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})

export const getV1BrandsPidRoute = createRoute({
  method: 'get',
  path: '/v1/brands/{pid}',
  tags: ['Raw'],
  summary: 'Get raw brand',
  description: 'Get raw brand',
  operationId: 'Get_Raw_brand',
  request: {
    params: z.object({
      pid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
  },
})

export const getV1BrandsPidFranchisesIndexRoute = createRoute({
  method: 'get',
  path: '/v1/brands/{pid}/franchises/',
  tags: ['Raw'],
  summary: 'Get raw brand franchise',
  description: 'Get raw brand franchises',
  operationId: 'Get_Raw_brand franchises',
  request: {
    params: z.object({
      pid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
  },
})

export const getV1EpisodesPidRoute = createRoute({
  method: 'get',
  path: '/v1/episodes/{pid}',
  tags: ['Raw'],
  summary: 'Get raw episode',
  description: 'Get raw episode',
  operationId: 'Get_Raw_episode',
  request: {
    params: z.object({
      pid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
  },
})

export const getV1EpisodesPidAncestorsIndexRoute = createRoute({
  method: 'get',
  path: '/v1/episodes/{pid}/ancestors/',
  tags: ['Raw'],
  summary: 'Get raw ancestors',
  description: 'Get raw ancestors',
  operationId: 'Get_Raw_ancestors',
  request: {
    params: z.object({
      pid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
  },
})

export const getV1EpisodesPidFormatsIndexRoute = createRoute({
  method: 'get',
  path: '/v1/episodes/{pid}/formats/',
  tags: ['Raw'],
  summary: 'Get raw formats',
  description: 'Get raw formats',
  operationId: 'Get_Raw_formats',
  request: {
    params: z.object({
      pid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
  },
})

export const getV1EpisodesPidGenreGroupsIndexRoute = createRoute({
  method: 'get',
  path: '/v1/episodes/{pid}/genre_groups/',
  tags: ['Raw'],
  summary: 'Get raw genre groups',
  description: 'Get raw genre groups',
  operationId: 'Get_Raw_genre_groups',
  request: {
    params: z.object({
      pid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
  },
})

export const getV1ImagesPidRoute = createRoute({
  method: 'get',
  path: '/v1/images/{pid}',
  tags: ['Raw'],
  summary: 'Get raw image',
  description: 'Get raw image',
  operationId: 'Get_Raw_image',
  request: {
    params: z.object({
      pid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
  },
})

export const getV1MasterBrandsMbidRoute = createRoute({
  method: 'get',
  path: '/v1/master_brands/{mbid}',
  tags: ['Raw'],
  summary: 'Get raw masterbrand',
  description: 'Get raw masterbrand',
  operationId: 'Get_Raw_masterbrand',
  request: {
    params: z.object({
      mbid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'mbid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
  },
})

export const getV1PromotionsPidRoute = createRoute({
  method: 'get',
  path: '/v1/promotions/{pid}',
  tags: ['Raw'],
  summary: 'Get raw promotion',
  description: 'Get raw promotion',
  operationId: 'Get_Raw_promotion',
  request: {
    params: z.object({
      pid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
  },
})

export const getVersionsRoute = createRoute({
  method: 'get',
  path: '/versions',
  tags: ['feeds'],
  summary: 'Metadata on editorial programme versions: original, signed, audio-described, etc',
  description:
    'The versions feed exposes editorial "Versions" of programmes. These are concepts used to capture different presentations of an overall programme: for example, versions of a programme may include one with sign language, one with audio description, one edited for content and more. Versions are also important to understand for broadcasts: a linear broadcast or an ondemand is always of a specific version, not merely of a programme.',
  operationId: 'listVersions',
  request: {
    query: z.object({
      availability: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('available')),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of versions that have availability',
            in: 'query',
            name: 'availability',
            required: false,
            schema: { items: { enum: ['available'], type: 'string' }, type: 'array' },
          },
        }),
      descendants_of: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of versions having given programme PID',
            in: 'query',
            name: 'descendants_of',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      media_set: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of versions with availability in the given media set',
            in: 'query',
            name: 'media_set',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
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
            description: 'which page of results to return',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().max(300),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of results in each page',
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 10, maximum: 300, type: 'integer' },
          },
        }),
      partner_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for versions by partner ID',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      partner_pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8)
              .default('s0000001'),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for versions by partner PID',
            in: 'query',
            name: 'partner_pid',
            required: false,
            schema: {
              items: {
                default: 's0000001',
                minLength: 8,
                pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$',
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      payment_type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['free', 'bbcstore', 'uscansvod'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for a subset of versions that are of the given payment_type',
            in: 'query',
            name: 'payment_type',
            required: false,
            schema: {
              items: { enum: ['free', 'bbcstore', 'uscansvod'], type: 'string' },
              type: 'array',
            },
          },
        }),
      pid: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$/)
              .min(8),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'filter for subset of versions having given PID',
            in: 'query',
            name: 'pid',
            required: false,
            schema: {
              items: { minLength: 8, pattern: '^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$', type: 'string' },
              type: 'array',
            },
          },
        }),
      embargoed: z
        .enum(['include', 'exclude', 'only'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Control return of embargoed items (undocumented)',
            in: 'query',
            name: 'embargoed',
            required: false,
            schema: { enum: ['include', 'exclude', 'only'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Nitro response',
      content: {
        'application/json': { schema: NitroSchema },
        'application/xml': { schema: NitroSchema },
      },
    },
    default: {
      description: 'Unexpected error',
      content: {
        'application/json': { schema: ErrorModelSchema },
        'application/xml': { schema: ErrorModelSchema },
      },
    },
  },
})
