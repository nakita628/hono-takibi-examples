type ResourceWrapped = { [x: string]: unknown }
type Message = {
  errorCode?: string | undefined
  errorDetail?: string | undefined
  errorMessage?: string | undefined
  userMessage?: string | undefined
}
type Pagination = {
  count?: number | undefined
  currentUrl?: string | undefined
  max?: number | undefined
  nextUrl?: string | undefined
  offset?: number | undefined
  pageNum?: number | undefined
  previousUrl?: string | undefined
  sort?: string | undefined
  total?: number | undefined
  totalPages?: number | undefined
}
type Meta = {
  messages?: Message[] | undefined
  pagination?: Pagination | undefined
  status?: number | undefined
}
type Source = {
  acronym?: string | undefined
  contactEmail?: string | undefined
  id?: bigint | undefined
  largeLogoUrl?: string | undefined
  name?: string | undefined
  smallLogoUrl?: string | undefined
  websiteUrl?: string | undefined
}
type Campaign = {
  contactEmail?: string | undefined
  description?: string | undefined
  endDate?: string | undefined
  id?: bigint | undefined
  name?: string | undefined
  source?: Source | undefined
  startDate?: string | undefined
}
type CampaignWrapped = {
  callback?: string | undefined
  meta?: Meta | undefined
  results?: Campaign[] | undefined
}
type ExtendedAttribute = {
  id?: bigint | undefined
  name?: string | undefined
  value?: string | undefined
}
type Language = {
  id?: bigint | undefined
  isActive?: boolean | undefined
  isoCode?: string | undefined
  name?: string | undefined
}
type MediaItem = {
  campaigns?: Campaign[] | undefined
  createdBy?: string | undefined
  customAttributionUrl?: string | undefined
  customPreviewUrl?: string | undefined
  customThumbnailUrl?: string | undefined
  dateContentAuthored?: string | undefined
  dateContentPublished?: string | undefined
  dateContentReviewed?: string | undefined
  dateContentUpdated?: string | undefined
  dateSyndicationCaptured?: string | undefined
  dateSyndicationUpdated?: string | undefined
  dateSyndicationVisible?: string | undefined
  description?: string | undefined
  extendedAttributes?: ExtendedAttribute[] | undefined
  externalGuid?: string | undefined
  foreignSyndicationAPIUrl?: string | undefined
  hash?: string | undefined
  id?: bigint | undefined
  language?: Language | undefined
  mediaType?: string | undefined
  name?: string | undefined
  source?: Source | undefined
  sourceUrl?: string | undefined
  targetUrl?: string | undefined
}
type MediaItemWrapped = {
  callback?: string | undefined
  meta?: Meta | undefined
  results?: MediaItem[] | undefined
}
type SyndicateMarshaller = {
  content?: string | undefined
  description?: string | undefined
  id?: number | undefined
  mediaType?: string | undefined
  name?: string | undefined
  sourceUrl?: string | undefined
}
type SyndicateMarshallerWrapped = {
  callback?: string | undefined
  meta?: Meta | undefined
  results?: SyndicateMarshaller[] | undefined
}
type LanguageWrapped = {
  callback?: string | undefined
  meta?: Meta | undefined
  results?: Language[] | undefined
}
type YoutubeMetadata = { [x: string]: unknown }
type MediaTypeHolder = { description?: string | undefined; name?: string | undefined }
type MediaTypeHolderWrapped = {
  callback?: string | undefined
  meta?: Meta | undefined
  results?: MediaTypeHolder[] | undefined
}
type SourceWrapped = {
  callback?: string | undefined
  meta?: Meta | undefined
  results?: Source[] | undefined
}
type TagLanguageMarshaller = {
  id?: number | undefined
  isActive?: boolean | undefined
  isoCode?: string | undefined
  name?: string | undefined
}
type TagTypeMarshaller = { id?: number | undefined; name?: string | undefined }
type TagMarshaller = {
  id?: number | undefined
  language?: TagLanguageMarshaller | undefined
  name?: string | undefined
  type?: TagTypeMarshaller | undefined
}
type TagMarshallerWrapped = {
  callback?: string | undefined
  meta?: Meta | undefined
  results?: TagMarshaller[] | undefined
}
type TagLanguageMarshallerWrapped = {
  callback?: string | undefined
  meta?: Meta | undefined
  results?: TagLanguageMarshaller[] | undefined
}
type TagTypeMarshallerWrapped = {
  callback?: string | undefined
  meta?: Meta | undefined
  results?: TagTypeMarshaller[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/resources.json': {
      $get:
        | {
            input: { query: { q: string } }
            output: ResourceWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { q: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { q: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/campaigns.json': {
      $get:
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: CampaignWrapped
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/campaigns/:id.json': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: CampaignWrapped
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/campaigns/:id/media.json': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: MediaItemWrapped
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/campaigns/:id/syndicate.{format}': {
      $get:
        | {
            input: { param: { id: bigint; format: string } } & {
              query: { displayMethod?: string | undefined }
            }
            output: SyndicateMarshallerWrapped
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: { displayMethod?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: { displayMethod?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/languages.json': {
      $get:
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: LanguageWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/languages/:id.json': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: LanguageWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/media.json': {
      $get:
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
                order?: string | undefined
                mediaTypes?: string | undefined
                name?: string | undefined
                collectionId?: number | undefined
                nameContains?: string | undefined
                descriptionContains?: string | undefined
                sourceUrl?: string | undefined
                sourceUrlContains?: string | undefined
                customThumbnailUrl?: string | undefined
                customThumbnailUrlContains?: string | undefined
                dateContentAuthored?: string | undefined
                dateContentUpdated?: string | undefined
                dateContentPublished?: string | undefined
                dateContentReviewed?: string | undefined
                dateSyndicationCaptured?: string | undefined
                dateSyndicationUpdated?: string | undefined
                contentAuthoredSinceDate?: string | undefined
                contentAuthoredBeforeDate?: string | undefined
                contentAuthoredInRange?: string | undefined
                contentUpdatedSinceDate?: string | undefined
                contentUpdatedBeforeDate?: string | undefined
                contentUpdatedInRange?: string | undefined
                contentPublishedSinceDate?: string | undefined
                contentPublishedBeforeDate?: string | undefined
                contentPublishedInRange?: string | undefined
                contentReviewedSinceDate?: string | undefined
                contentReviewedBeforeDate?: string | undefined
                contentReviewedInRange?: string | undefined
                syndicationCapturedSinceDate?: string | undefined
                syndicationCapturedBeforeDate?: string | undefined
                syndicationCapturedInRange?: string | undefined
                syndicationUpdatedSinceDate?: string | undefined
                syndicationUpdatedBeforeDate?: string | undefined
                syndicationUpdatedInRange?: string | undefined
                syndicationVisibleSinceDate?: string | undefined
                syndicationVisibleBeforeDate?: string | undefined
                syndicationVisibleInRange?: string | undefined
                languageId?: bigint | undefined
                languageName?: string | undefined
                languageIsoCode?: string | undefined
                hash?: string | undefined
                hashContains?: string | undefined
                sourceId?: bigint | undefined
                sourceName?: string | undefined
                sourceNameContains?: string | undefined
                sourceAcronym?: string | undefined
                sourceAcronymContains?: string | undefined
                tagIds?: string | undefined
                restrictToSet?: string | undefined
                createdBy?: string | undefined
              }
            }
            output: MediaItemWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
                order?: string | undefined
                mediaTypes?: string | undefined
                name?: string | undefined
                collectionId?: number | undefined
                nameContains?: string | undefined
                descriptionContains?: string | undefined
                sourceUrl?: string | undefined
                sourceUrlContains?: string | undefined
                customThumbnailUrl?: string | undefined
                customThumbnailUrlContains?: string | undefined
                dateContentAuthored?: string | undefined
                dateContentUpdated?: string | undefined
                dateContentPublished?: string | undefined
                dateContentReviewed?: string | undefined
                dateSyndicationCaptured?: string | undefined
                dateSyndicationUpdated?: string | undefined
                contentAuthoredSinceDate?: string | undefined
                contentAuthoredBeforeDate?: string | undefined
                contentAuthoredInRange?: string | undefined
                contentUpdatedSinceDate?: string | undefined
                contentUpdatedBeforeDate?: string | undefined
                contentUpdatedInRange?: string | undefined
                contentPublishedSinceDate?: string | undefined
                contentPublishedBeforeDate?: string | undefined
                contentPublishedInRange?: string | undefined
                contentReviewedSinceDate?: string | undefined
                contentReviewedBeforeDate?: string | undefined
                contentReviewedInRange?: string | undefined
                syndicationCapturedSinceDate?: string | undefined
                syndicationCapturedBeforeDate?: string | undefined
                syndicationCapturedInRange?: string | undefined
                syndicationUpdatedSinceDate?: string | undefined
                syndicationUpdatedBeforeDate?: string | undefined
                syndicationUpdatedInRange?: string | undefined
                syndicationVisibleSinceDate?: string | undefined
                syndicationVisibleBeforeDate?: string | undefined
                syndicationVisibleInRange?: string | undefined
                languageId?: bigint | undefined
                languageName?: string | undefined
                languageIsoCode?: string | undefined
                hash?: string | undefined
                hashContains?: string | undefined
                sourceId?: bigint | undefined
                sourceName?: string | undefined
                sourceNameContains?: string | undefined
                sourceAcronym?: string | undefined
                sourceAcronymContains?: string | undefined
                tagIds?: string | undefined
                restrictToSet?: string | undefined
                createdBy?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
                order?: string | undefined
                mediaTypes?: string | undefined
                name?: string | undefined
                collectionId?: number | undefined
                nameContains?: string | undefined
                descriptionContains?: string | undefined
                sourceUrl?: string | undefined
                sourceUrlContains?: string | undefined
                customThumbnailUrl?: string | undefined
                customThumbnailUrlContains?: string | undefined
                dateContentAuthored?: string | undefined
                dateContentUpdated?: string | undefined
                dateContentPublished?: string | undefined
                dateContentReviewed?: string | undefined
                dateSyndicationCaptured?: string | undefined
                dateSyndicationUpdated?: string | undefined
                contentAuthoredSinceDate?: string | undefined
                contentAuthoredBeforeDate?: string | undefined
                contentAuthoredInRange?: string | undefined
                contentUpdatedSinceDate?: string | undefined
                contentUpdatedBeforeDate?: string | undefined
                contentUpdatedInRange?: string | undefined
                contentPublishedSinceDate?: string | undefined
                contentPublishedBeforeDate?: string | undefined
                contentPublishedInRange?: string | undefined
                contentReviewedSinceDate?: string | undefined
                contentReviewedBeforeDate?: string | undefined
                contentReviewedInRange?: string | undefined
                syndicationCapturedSinceDate?: string | undefined
                syndicationCapturedBeforeDate?: string | undefined
                syndicationCapturedInRange?: string | undefined
                syndicationUpdatedSinceDate?: string | undefined
                syndicationUpdatedBeforeDate?: string | undefined
                syndicationUpdatedInRange?: string | undefined
                syndicationVisibleSinceDate?: string | undefined
                syndicationVisibleBeforeDate?: string | undefined
                syndicationVisibleInRange?: string | undefined
                languageId?: bigint | undefined
                languageName?: string | undefined
                languageIsoCode?: string | undefined
                hash?: string | undefined
                hashContains?: string | undefined
                sourceId?: bigint | undefined
                sourceName?: string | undefined
                sourceNameContains?: string | undefined
                sourceAcronym?: string | undefined
                sourceAcronymContains?: string | undefined
                tagIds?: string | undefined
                restrictToSet?: string | undefined
                createdBy?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/media/featured.json': {
      $get:
        | {
            input: {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: MediaItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/media/mostPopularMedia.{format}': {
      $get:
        | {
            input: { param: { format: string } } & {
              query: { max?: number | undefined; offset?: number | undefined }
            }
            output: MediaItemWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: string } } & {
              query: { max?: number | undefined; offset?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { format: string } } & {
              query: { max?: number | undefined; offset?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/media/searchResults.json': {
      $get:
        | {
            input: { query: { q: string; max?: number | undefined; offset?: number | undefined } }
            output: MediaItemWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { q: string; max?: number | undefined; offset?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { q: string; max?: number | undefined; offset?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/media/:id.json': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: MediaItemWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/media/:id/content': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { calledByBuild?: boolean | undefined } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { calledByBuild?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { calledByBuild?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/media/:id/embed.json': {
      $get:
        | {
            input: { param: { id: bigint } } & {
              query: {
                flavor?: string | undefined
                width?: number | undefined
                height?: number | undefined
                iframeName?: string | undefined
                excludeJquery?: boolean | undefined
                excludeDiv?: boolean | undefined
                divId?: string | undefined
                displayMethod?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                flavor?: string | undefined
                width?: number | undefined
                height?: number | undefined
                iframeName?: string | undefined
                excludeJquery?: boolean | undefined
                excludeDiv?: boolean | undefined
                divId?: string | undefined
                displayMethod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & {
              query: {
                flavor?: string | undefined
                width?: number | undefined
                height?: number | undefined
                iframeName?: string | undefined
                excludeJquery?: boolean | undefined
                excludeDiv?: boolean | undefined
                divId?: string | undefined
                displayMethod?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/media/:id/preview.jpg': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/media/:id/relatedMedia.{format}': {
      $get:
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: MediaItemWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/media/:id/syndicate.{format}': {
      $get:
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                cssClass?: string | undefined
                stripStyles?: boolean | undefined
                stripScripts?: boolean | undefined
                stripImages?: boolean | undefined
                stripBreaks?: boolean | undefined
                stripClasses?: boolean | undefined
                'font-size'?: number | undefined
                imageFloat?: string | undefined
                imageMargin?: string | undefined
                autoplay?: boolean | undefined
                rel?: boolean | undefined
              }
            }
            output: SyndicateMarshallerWrapped
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                cssClass?: string | undefined
                stripStyles?: boolean | undefined
                stripScripts?: boolean | undefined
                stripImages?: boolean | undefined
                stripBreaks?: boolean | undefined
                stripClasses?: boolean | undefined
                'font-size'?: number | undefined
                imageFloat?: string | undefined
                imageMargin?: string | undefined
                autoplay?: boolean | undefined
                rel?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                cssClass?: string | undefined
                stripStyles?: boolean | undefined
                stripScripts?: boolean | undefined
                stripImages?: boolean | undefined
                stripBreaks?: boolean | undefined
                stripClasses?: boolean | undefined
                'font-size'?: number | undefined
                imageFloat?: string | undefined
                imageMargin?: string | undefined
                autoplay?: boolean | undefined
                rel?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/media/:id/thumbnail.jpg': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/media/:id/youtubeMetaData.json': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: {
              callback?: string | undefined
              meta?: Meta | undefined
              results?: YoutubeMetadata[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/mediaTypes.{format}': {
      $get:
        | {
            input: { param: { format: string } }
            output: MediaTypeHolderWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { format: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { format: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/sources.json': {
      $get:
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: SourceWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                max?: number | undefined
                offset?: number | undefined
                sort?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/sources/:id.json': {
      $get:
        | {
            input: { param: { id: bigint } }
            output: SourceWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: bigint } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/sources/:id/syndicate.{format}': {
      $get:
        | {
            input: { param: { id: bigint; format: string } } & {
              query: { displayMethod?: string | undefined }
            }
            output: MediaItemWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: { displayMethod?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: { displayMethod?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/tags.{format}': {
      $get:
        | {
            input: { param: { format: string } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                nameContains?: string | undefined
                mediaId?: bigint | undefined
                typeId?: bigint | undefined
                typeName?: string | undefined
              }
            }
            output: TagMarshallerWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { format: string } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                nameContains?: string | undefined
                mediaId?: bigint | undefined
                typeId?: bigint | undefined
                typeName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { format: string } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
                name?: string | undefined
                nameContains?: string | undefined
                mediaId?: bigint | undefined
                typeId?: bigint | undefined
                typeName?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/tags/tagLanguages.{format}': {
      $get:
        | {
            input: { param: { format: string } }
            output: TagLanguageMarshallerWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { format: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { format: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/tags/tagTypes.{format}': {
      $get:
        | {
            input: { param: { format: string } }
            output: TagTypeMarshallerWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { format: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { format: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/resources/tags/:id.{format}': {
      $get:
        | {
            input: { param: { id: bigint; format: string } }
            output: TagMarshallerWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; format: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; format: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/tags/:id/media.{format}': {
      $get:
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: MediaItemWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/tags/:id/related.{format}': {
      $get:
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: TagMarshallerWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: {
                sort?: string | undefined
                max?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/tags/:id/syndicate.{format}': {
      $get:
        | {
            input: { param: { id: bigint; format: string } } & {
              query: { displayMethod?: string | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: { displayMethod?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint; format: string } } & {
              query: { displayMethod?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resources/userMediaLists/:id.json': {
      $get:
        | {
            input: { param: { id: bigint } } & { query: { displayMethod?: string | undefined } }
            output: MediaItemWrapped[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: bigint } } & { query: { displayMethod?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: bigint } } & { query: { displayMethod?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
