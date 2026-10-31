import { createRoute, z } from '@hono/zod-openapi'

const BooksAnnotationsRangeSchema = z
  .object({
    endOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The offset from the ending position.' }),
    endPosition: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ending position for the range.' }),
    startOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The offset from the starting position.' }),
    startPosition: z
      .string()
      .exactOptional()
      .openapi({ description: 'The starting position for the range.' }),
  })
  .openapi({ required: [] })
  .openapi('BooksAnnotationsRange')

const AnnotationSchema = z
  .object({
    afterSelectedText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.',
      }),
    beforeSelectedText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.',
      }),
    clientVersionRanges: z
      .object({
        cfiRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in CFI format for this annotation sent by client.',
        }),
        contentVersion: z
          .string()
          .exactOptional()
          .openapi({ description: 'Content version the client sent in.' }),
        gbImageRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in GB image format for this annotation sent by client.',
        }),
        gbTextRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in GB text format for this annotation sent by client.',
        }),
        imageCfiRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in image CFI format for this annotation sent by client.',
        }),
      })
      .exactOptional()
      .openapi({ description: 'Selection ranges sent from the client.', required: [] }),
    created: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp for the created time of this annotation.' }),
    currentVersionRanges: z
      .object({
        cfiRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in CFI format for this annotation for version above.',
        }),
        contentVersion: z
          .string()
          .exactOptional()
          .openapi({ description: 'Content version applicable to ranges below.' }),
        gbImageRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in GB image format for this annotation for version above.',
        }),
        gbTextRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in GB text format for this annotation for version above.',
        }),
        imageCfiRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in image CFI format for this annotation for version above.',
        }),
      })
      .exactOptional()
      .openapi({
        description: 'Selection ranges for the most recent content version.',
        required: [],
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-created data for this annotation.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates that this annotation is deleted.' }),
    highlightStyle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The highlight style for this annotation.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of this annotation, in the form of a GUID.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    layerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The layer this annotation is for.' }),
    layerSummary: z
      .object({
        allowedCharacterCount: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'Maximum allowed characters on this layer, especially for the "copy" layer.',
          }),
        limitType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Type of limitation on this layer. "limited" or "unlimited" for the "copy" layer.',
          }),
        remainingCharacterCount: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'Remaining allowed characters on this layer, especially for the "copy" layer.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    pageIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Pages that this annotation spans.' }),
    selectedText: z.string().exactOptional().openapi({ description: 'Excerpt from the volume.' }),
    selfLink: z.string().exactOptional().openapi({ description: 'URL to this resource.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp for the last time this annotation was modified.' }),
    volumeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The volume that this annotation belongs to.' }),
  })
  .openapi({ required: [] })
  .openapi('Annotation')

const AnnotationsSchema = z
  .object({
    items: z
      .array(AnnotationSchema)
      .exactOptional()
      .openapi({ description: 'A list of annotations.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to pass in for pagination for the next page. This will not be present if this request does not have more results.',
      }),
    totalItems: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Annotations')

const AnnotationsSummarySchema = z
  .object({
    kind: z.string().exactOptional(),
    layers: z
      .array(
        z
          .object({
            allowedCharacterCount: z.int32().exactOptional(),
            layerId: z.string().exactOptional(),
            limitType: z.string().exactOptional(),
            remainingCharacterCount: z.int32().exactOptional(),
            updated: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationsSummary')

const GeolayerdataSchema = z
  .object({
    common: z
      .object({
        lang: z
          .string()
          .exactOptional()
          .openapi({ description: 'The language of the information url and description.' }),
        previewImageUrl: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL for the preview image information.' }),
        snippet: z
          .string()
          .exactOptional()
          .openapi({ description: 'The description for this location.' }),
        snippetUrl: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The URL for information for this location. Ex: wikipedia link.',
          }),
        title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The display title and localized canonical name to use when searching for this entity on Google search.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    geo: z
      .object({
        boundary: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The boundary of the location as a set of loops containing pairs of latitude, longitude coordinates.',
          }),
        cachePolicy: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The cache policy active for this data. EX: UNRESTRICTED, RESTRICTED, NEVER',
          }),
        countryCode: z
          .string()
          .exactOptional()
          .openapi({ description: 'The country code of the location.' }),
        latitude: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The latitude of the location.' }),
        longitude: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The longitude of the location.' }),
        mapType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The type of map that should be used for this location. EX: HYBRID, ROADMAP, SATELLITE, TERRAIN',
          }),
        viewport: z
          .object({
            hi: z
              .object({
                latitude: z.float64().exactOptional(),
                longitude: z.float64().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            lo: z
              .object({
                latitude: z.float64().exactOptional(),
                longitude: z.float64().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({
            description:
              'The viewport for showing this location. This is a latitude, longitude rectangle.',
            required: [],
          }),
        zoom: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The Zoom level to use for the map. Zoom levels between 0 (the lowest zoom level, in which the entire world can be seen on one map) to 21+ (down to individual buildings). See: https: //developers.google.com/maps/documentation/staticmaps/#Zoomlevels',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    kind: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Geolayerdata')

const GeoAnnotationdataSchema = z
  .object({
    annotationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of annotation this data is for.' }),
    data: GeolayerdataSchema.exactOptional().openapi({
      description:
        "JSON encoded data for this geo annotation data. Emitted with name 'data' in JSON output. Either this or dict_data will be populated.",
    }),
    encodedData: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base64 encoded data for this annotation data.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique id for this annotation data.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource Type' }),
    layerId: z.string().exactOptional().openapi({ description: 'The Layer id for this data. *' }),
    selfLink: z.string().exactOptional().openapi({ description: 'URL for this resource. *' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).',
      }),
    volumeId: z.string().exactOptional().openapi({ description: 'The volume id for this data. *' }),
  })
  .openapi({ required: [] })
  .openapi('GeoAnnotationdata')

const AnnotationsdataSchema = z
  .object({
    items: z
      .array(GeoAnnotationdataSchema)
      .exactOptional()
      .openapi({ description: 'A list of Annotation Data.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to pass in for pagination for the next page. This will not be present if this request does not have more results.',
      }),
    totalItems: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of volume annotations found.' }),
  })
  .openapi({ required: [] })
  .openapi('Annotationsdata')

const BooksCloudloadingResourceSchema = z
  .object({
    author: z.string().exactOptional(),
    processingState: z.string().exactOptional(),
    title: z.string().exactOptional(),
    volumeId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BooksCloudloadingResource')

const BooksVolumesRecommendedRateResponseSchema = z
  .object({ consistency_token: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('BooksVolumesRecommendedRateResponse')

const BookshelfSchema = z
  .object({
    access: z
      .string()
      .exactOptional()
      .openapi({ description: 'Whether this bookshelf is PUBLIC or PRIVATE.' }),
    created: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Created time for this bookshelf (formatted UTC timestamp with millisecond resolution).',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of this bookshelf.' }),
    id: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Id of this bookshelf, only unique by user.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource type for bookshelf metadata.' }),
    selfLink: z.string().exactOptional().openapi({ description: 'URL to this resource.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of this bookshelf.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution).',
      }),
    volumeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of volumes in this bookshelf.' }),
    volumesLastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution).',
      }),
  })
  .openapi({ required: [] })
  .openapi('Bookshelf')

const BookshelvesSchema = z
  .object({
    items: z
      .array(BookshelfSchema)
      .exactOptional()
      .openapi({ description: 'A list of bookshelves.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('Bookshelves')

const CategorySchema = z
  .object({
    items: z
      .array(
        z
          .object({
            badgeUrl: z.string().exactOptional(),
            categoryId: z.string().exactOptional(),
            name: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of onboarding categories.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('Category')

const ConcurrentAccessRestrictionSchema = z
  .object({
    deviceAllowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether access is granted for this (user, device, volume).' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    maxConcurrentDevices: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The maximum number of concurrent access licenses for this volume.',
      }),
    message: z.string().exactOptional().openapi({ description: 'Error/warning message.' }),
    nonce: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Client nonce for verification. Download access and client-validation only.',
      }),
    reasonCode: z.string().exactOptional().openapi({ description: 'Error/warning reason code.' }),
    restricted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this volume has any concurrent access restrictions.' }),
    signature: z.string().exactOptional().openapi({ description: 'Response signature.' }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Client app identifier for verification. Download access and client-validation only.',
      }),
    timeWindowSeconds: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Time in seconds for license auto-expiration.' }),
    volumeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the volume for which this entry applies.' }),
  })
  .openapi({ required: [] })
  .openapi('ConcurrentAccessRestriction')

const DictlayerdataSchema = z
  .object({
    common: z
      .object({
        title: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The display title and localized canonical name to use when searching for this entity on Google search.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    dict: z
      .object({
        source: z
          .object({ attribution: z.string().exactOptional(), url: z.string().exactOptional() })
          .exactOptional()
          .openapi({
            description: 'The source, url and attribution for this dictionary data.',
            required: [],
          }),
        words: z
          .array(
            z
              .object({
                derivatives: z
                  .array(
                    z
                      .object({
                        source: z
                          .object({
                            attribution: z.string().exactOptional(),
                            url: z.string().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        text: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                examples: z
                  .array(
                    z
                      .object({
                        source: z
                          .object({
                            attribution: z.string().exactOptional(),
                            url: z.string().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        text: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                senses: z
                  .array(
                    z
                      .object({
                        conjugations: z
                          .array(
                            z
                              .object({
                                type: z.string().exactOptional(),
                                value: z.string().exactOptional(),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional(),
                        definitions: z
                          .array(
                            z
                              .object({
                                definition: z.string().exactOptional(),
                                examples: z
                                  .array(
                                    z
                                      .object({
                                        source: z
                                          .object({
                                            attribution: z.string().exactOptional(),
                                            url: z.string().exactOptional(),
                                          })
                                          .exactOptional()
                                          .openapi({ required: [] }),
                                        text: z.string().exactOptional(),
                                      })
                                      .openapi({ required: [] }),
                                  )
                                  .exactOptional(),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional(),
                        partOfSpeech: z.string().exactOptional(),
                        pronunciation: z.string().exactOptional(),
                        pronunciationUrl: z.string().exactOptional(),
                        source: z
                          .object({
                            attribution: z.string().exactOptional(),
                            url: z.string().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({ required: [] }),
                        syllabification: z.string().exactOptional(),
                        synonyms: z
                          .array(
                            z
                              .object({
                                source: z
                                  .object({
                                    attribution: z.string().exactOptional(),
                                    url: z.string().exactOptional(),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                text: z.string().exactOptional(),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                source: z
                  .object({
                    attribution: z.string().exactOptional(),
                    url: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      'The words with different meanings but not related words, e.g. "go" (game) and "go" (verb).',
                    required: [],
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    kind: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Dictlayerdata')

const DictionaryAnnotationdataSchema = z
  .object({
    annotationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of annotation this data is for.' }),
    data: DictlayerdataSchema.exactOptional().openapi({
      description:
        "JSON encoded data for this dictionary annotation data. Emitted with name 'data' in JSON output. Either this or geo_data will be populated.",
    }),
    encodedData: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base64 encoded data for this annotation data.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique id for this annotation data.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource Type' }),
    layerId: z.string().exactOptional().openapi({ description: 'The Layer id for this data. *' }),
    selfLink: z.string().exactOptional().openapi({ description: 'URL for this resource. *' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).',
      }),
    volumeId: z.string().exactOptional().openapi({ description: 'The volume id for this data. *' }),
  })
  .openapi({ required: [] })
  .openapi('DictionaryAnnotationdata')

const DownloadAccessRestrictionSchema = z
  .object({
    deviceAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If restricted, whether access is granted for this (user, device, volume).',
      }),
    downloadsAcquired: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).',
      }),
    justAcquired: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If deviceAllowed, whether access was just acquired with this request.',
      }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    maxDownloadDevices: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If restricted, the maximum number of content download licenses for this volume.',
      }),
    message: z.string().exactOptional().openapi({ description: 'Error/warning message.' }),
    nonce: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Client nonce for verification. Download access and client-validation only.',
      }),
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS',
      }),
    restricted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this volume has any download access restrictions.' }),
    signature: z.string().exactOptional().openapi({ description: 'Response signature.' }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Client app identifier for verification. Download access and client-validation only.',
      }),
    volumeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the volume for which this entry applies.' }),
  })
  .openapi({ required: [] })
  .openapi('DownloadAccessRestriction')

const ReadingPositionSchema = z
  .object({
    epubCfiPosition: z
      .string()
      .exactOptional()
      .openapi({ description: 'Position in an EPUB as a CFI.' }),
    gbImagePosition: z
      .string()
      .exactOptional()
      .openapi({ description: 'Position in a volume for image-based content.' }),
    gbTextPosition: z
      .string()
      .exactOptional()
      .openapi({ description: 'Position in a volume for text-based content.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource type for a reading position.' }),
    pdfPosition: z.string().exactOptional().openapi({ description: 'Position in a PDF file.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution).',
      }),
    volumeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Volume id associated with this reading position.' }),
  })
  .openapi({ required: [] })
  .openapi('ReadingPosition')

const ReviewSchema = z
  .object({
    author: z
      .object({
        displayName: z.string().exactOptional().openapi({ description: 'Name of this person.' }),
      })
      .exactOptional()
      .openapi({ description: 'Author of this review.', required: [] }),
    content: z.string().exactOptional().openapi({ description: 'Review text.' }),
    date: z.string().exactOptional().openapi({ description: 'Date of this review.' }),
    fullTextUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for the full review text, for reviews gathered from the web.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type for a review.' }),
    rating: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED.',
      }),
    source: z
      .object({
        description: z.string().exactOptional().openapi({ description: 'Name of the source.' }),
        extraDescription: z
          .string()
          .exactOptional()
          .openapi({ description: 'Extra text about the source of the review.' }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: 'URL of the source of the review.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Information regarding the source of this review, when the review is not from a Google Books user.',
        required: [],
      }),
    title: z.string().exactOptional().openapi({ description: 'Title for this review.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER.',
      }),
    volumeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Volume that this review is for.' }),
  })
  .openapi({ required: [] })
  .openapi('Review')

const VolumeseriesinfoSchema = z
  .object({
    bookDisplayNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber.',
      }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    shortSeriesBookTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short book title in the context of the series.' }),
    volumeSeries: z
      .array(
        z
          .object({
            issue: z
              .array(
                z
                  .object({
                    issueDisplayNumber: z.string().exactOptional(),
                    issueOrderNumber: z.int32().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description: 'List of issues. Applicable only for Collection Edition and Omnibus.',
              }),
            orderNumber: z
              .int32()
              .exactOptional()
              .openapi({ description: 'The book order number in the series.' }),
            seriesBookType: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The book type in the context of series. Examples - Single Issue, Collection Edition, etc.',
              }),
            seriesId: z.string().exactOptional().openapi({ description: 'The series id.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Volumeseriesinfo')

const VolumeSchema = z
  .object({
    accessInfo: z
      .object({
        accessViewStatus: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Combines the access and viewability of this volume into a single status field for this user. Values can be FULL_PURCHASED, FULL_PUBLIC_DOMAIN, SAMPLE or NONE. (In LITE projection.)',
          }),
        country: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The two-letter ISO_3166-1 country code for which this access information is valid. (In LITE projection.)',
          }),
        downloadAccess: DownloadAccessRestrictionSchema.exactOptional().openapi({
          description: "Information about a volume's download license access restrictions.",
        }),
        driveImportedContentLink: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'URL to the Google Drive viewer if this volume is uploaded by the user by selecting the file from Google Drive.',
          }),
        embeddable: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether this volume can be embedded in a viewport using the Embedded Viewer API.',
          }),
        epub: z
          .object({
            acsTokenLink: z
              .string()
              .exactOptional()
              .openapi({
                description: 'URL to retrieve ACS token for epub download. (In LITE projection.)',
              }),
            downloadLink: z
              .string()
              .exactOptional()
              .openapi({ description: 'URL to download epub. (In LITE projection.)' }),
            isAvailable: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Is a flowing text epub available either as public domain or for purchase. (In LITE projection.)',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Information about epub content. (In LITE projection.)',
            required: [],
          }),
        explicitOfflineLicenseManagement: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether this volume requires that the client explicitly request offline download license rather than have it done automatically when loading the content, if the client supports it.',
          }),
        pdf: z
          .object({
            acsTokenLink: z
              .string()
              .exactOptional()
              .openapi({
                description: 'URL to retrieve ACS token for pdf download. (In LITE projection.)',
              }),
            downloadLink: z
              .string()
              .exactOptional()
              .openapi({ description: 'URL to download pdf. (In LITE projection.)' }),
            isAvailable: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Is a scanned image pdf available either as public domain or for purchase. (In LITE projection.)',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Information about pdf content. (In LITE projection.)',
            required: [],
          }),
        publicDomain: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether or not this book is public domain in the country listed above.',
          }),
        quoteSharingAllowed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether quote sharing is allowed for this volume.' }),
        textToSpeechPermission: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Whether text-to-speech is permitted for this volume. Values can be ALLOWED, ALLOWED_FOR_ACCESSIBILITY, or NOT_ALLOWED.',
          }),
        viewOrderUrl: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'For ordered but not yet processed orders, we give a URL that can be used to go to the appropriate Google Wallet page.',
          }),
        viewability: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The read access of a volume. Possible values are PARTIAL, ALL_PAGES, NO_PAGES or UNKNOWN. This value depends on the country listed above. A value of PARTIAL means that the publisher has allowed some portion of the volume to be viewed publicly, without purchase. This can apply to eBooks as well as non-eBooks. Public domain books will always have a value of ALL_PAGES.',
          }),
        webReaderLink: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'URL to read this volume on the Google Books site. Link will not allow users to read non-viewable volumes.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).',
        required: [],
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Opaque identifier for a specific version of a volume resource. (In LITE projection)',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for a volume. (In LITE projection.)' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource type for a volume. (In LITE projection.)' }),
    layerInfo: z
      .object({
        layers: z
          .array(
            z
              .object({
                layerId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The layer id of this layer (e.g. "geo").' }),
                volumeAnnotationsVersion: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      "The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.",
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'A layer should appear here if and only if the layer exists for this book.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'What layers exist in this volume and high level information about them.',
        required: [],
      }),
    recommendedInfo: z
      .object({
        explanation: z
          .string()
          .exactOptional()
          .openapi({ description: 'A text explaining why this volume is recommended.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Recommendation related information for this volume.',
        required: [],
      }),
    saleInfo: z
      .object({
        buyLink: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'URL to purchase this volume on the Google Books site. (In LITE projection)',
          }),
        country: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The two-letter ISO_3166-1 country code for which this sale information is valid. (In LITE projection.)',
          }),
        isEbook: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether or not this volume is an eBook (can be added to the My eBooks shelf).',
          }),
        listPrice: z
          .object({
            amount: z
              .float64()
              .exactOptional()
              .openapi({
                description: 'Amount in the currency listed below. (In LITE projection.)',
              }),
            currencyCode: z
              .string()
              .exactOptional()
              .openapi({
                description: 'An ISO 4217, three-letter currency code. (In LITE projection.)',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Suggested retail price. (In LITE projection.)', required: [] }),
        offers: z
          .array(
            z
              .object({
                finskyOfferType: z
                  .int32()
                  .exactOptional()
                  .openapi({ description: 'The finsky offer type (e.g., PURCHASE=0 RENTAL=3)' }),
                giftable: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Indicates whether the offer is giftable.' }),
                listPrice: z
                  .object({
                    amountInMicros: z.float64().exactOptional(),
                    currencyCode: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Offer list (=undiscounted) price in Micros.',
                    required: [],
                  }),
                rentalDuration: z
                  .object({ count: z.float64().exactOptional(), unit: z.string().exactOptional() })
                  .exactOptional()
                  .openapi({
                    description: 'The rental duration (for rental offers only).',
                    required: [],
                  }),
                retailPrice: z
                  .object({
                    amountInMicros: z.float64().exactOptional(),
                    currencyCode: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Offer retail (=discounted) price in Micros',
                    required: [],
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Offers available for this volume (sales and rentals).' }),
        onSaleDate: z
          .string()
          .exactOptional()
          .openapi({ description: 'The date on which this book is available for sale.' }),
        retailPrice: z
          .object({
            amount: z
              .float64()
              .exactOptional()
              .openapi({
                description: 'Amount in the currency listed below. (In LITE projection.)',
              }),
            currencyCode: z
              .string()
              .exactOptional()
              .openapi({
                description: 'An ISO 4217, three-letter currency code. (In LITE projection.)',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)',
            required: [],
          }),
        saleability: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Whether or not this book is available for sale or offered for free in the Google eBookstore for the country listed above. Possible values are FOR_SALE, FOR_RENTAL_ONLY, FOR_SALE_AND_RENTAL, FREE, NOT_FOR_SALE, or FOR_PREORDER.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).',
        required: [],
      }),
    searchInfo: z
      .object({
        textSnippet: z
          .string()
          .exactOptional()
          .openapi({ description: 'A text snippet containing the search query.' }),
      })
      .exactOptional()
      .openapi({ description: 'Search result information related to this volume.', required: [] }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to this resource. (In LITE projection.)' }),
    userInfo: z
      .object({
        acquiredTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Timestamp when this volume was acquired by the user. (RFC 3339 UTC date-time format) Acquiring includes purchase, user upload, receiving family sharing, etc.',
          }),
        acquisitionType: z
          .int32()
          .exactOptional()
          .openapi({ description: 'How this volume was acquired.' }),
        copy: z
          .object({
            allowedCharacterCount: z.int32().exactOptional(),
            limitType: z.string().exactOptional(),
            remainingCharacterCount: z.int32().exactOptional(),
            updated: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ description: 'Copy/Paste accounting information.', required: [] }),
        entitlementType: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Whether this volume is purchased, sample, pd download etc.' }),
        familySharing: z
          .object({
            familyRole: z
              .string()
              .exactOptional()
              .openapi({ description: 'The role of the user in the family.' }),
            isSharingAllowed: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether or not this volume can be shared with the family by the user. This includes sharing eligibility of both the volume and the user. If the value is true, the user can initiate a family sharing action.',
              }),
            isSharingDisabledByFop: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether or not sharing this volume is temporarily disabled due to issues with the Family Wallet.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Information on the ability to share with the family.',
            required: [],
          }),
        isFamilySharedFromUser: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether or not the user shared this volume with the family.' }),
        isFamilySharedToUser: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether or not the user received this volume through family sharing.',
          }),
        isFamilySharingAllowed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Deprecated: Replaced by familySharing.' }),
        isFamilySharingDisabledByFop: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Deprecated: Replaced by familySharing.' }),
        isInMyBooks: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether or not this volume is currently in "my books."' }),
        isPreordered: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether or not this volume was pre-ordered by the authenticated user making the request. (In LITE projection.)',
          }),
        isPurchased: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether or not this volume was purchased by the authenticated user making the request. (In LITE projection.)',
          }),
        isUploaded: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether or not this volume was user uploaded.' }),
        readingPosition: ReadingPositionSchema.exactOptional().openapi({
          description:
            "The user's current reading position in the volume, if one is available. (In LITE projection.)",
        }),
        rentalPeriod: z
          .object({
            endUtcSec: z.string().exactOptional(),
            startUtcSec: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ description: 'Period during this book is/was a valid rental.', required: [] }),
        rentalState: z
          .string()
          .exactOptional()
          .openapi({ description: 'Whether this book is an active or an expired rental.' }),
        review: ReviewSchema.exactOptional().openapi({
          description: "This user's review of this volume, if one exists.",
        }),
        updated: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Timestamp when this volume was last modified by a user action, such as a reading position update, volume purchase or writing a review. (RFC 3339 UTC date-time format).',
          }),
        userUploadedVolumeInfo: z
          .object({ processingState: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({
        description:
          'User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)',
        required: [],
      }),
    volumeInfo: z
      .object({
        allowAnonLogging: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether anonymous logging should be allowed.' }),
        authors: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The names of the authors and/or editors for this volume. (In LITE projection)',
          }),
        averageRating: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The mean review rating for this volume. (min = 1.0, max = 5.0)',
          }),
        canonicalVolumeLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'Canonical URL for a volume. (In LITE projection.)' }),
        categories: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'A list of subject categories, such as "Fiction", "Suspense", etc.',
          }),
        comicsContent: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the volume has comics content.' }),
        contentVersion: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'An identifier for the version of the volume content (text & images). (In LITE projection)',
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A synopsis of the volume. The text of the description is formatted in HTML and includes simple formatting elements, such as b, i, and br tags. (In LITE projection.)',
          }),
        dimensions: z
          .object({
            height: z
              .string()
              .exactOptional()
              .openapi({ description: 'Height or length of this volume (in cm).' }),
            thickness: z
              .string()
              .exactOptional()
              .openapi({ description: 'Thickness of this volume (in cm).' }),
            width: z
              .string()
              .exactOptional()
              .openapi({ description: 'Width of this volume (in cm).' }),
          })
          .exactOptional()
          .openapi({ description: 'Physical dimensions of this volume.', required: [] }),
        imageLinks: z
          .object({
            extraLarge: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Image link for extra large size (width of ~1280 pixels). (In LITE projection)',
              }),
            large: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Image link for large size (width of ~800 pixels). (In LITE projection)',
              }),
            medium: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Image link for medium size (width of ~575 pixels). (In LITE projection)',
              }),
            small: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Image link for small size (width of ~300 pixels). (In LITE projection)',
              }),
            smallThumbnail: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Image link for small thumbnail size (width of ~80 pixels). (In LITE projection)',
              }),
            thumbnail: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Image link for thumbnail size (width of ~128 pixels). (In LITE projection)',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'A list of image links for all the sizes that are available. (In LITE projection.)',
            required: [],
          }),
        industryIdentifiers: z
          .array(
            z
              .object({
                identifier: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Industry specific volume identifier.' }),
                type: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Identifier type. Possible values are ISBN_10, ISBN_13, ISSN and OTHER.',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Industry standard identifiers for this volume.' }),
        infoLink: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'URL to view information about this volume on the Google Books site. (In LITE projection)',
          }),
        language: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Best language for this volume (based on content). It is the two-letter ISO 639-1 code such as 'fr', 'en', etc.",
          }),
        mainCategory: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The main category to which this volume belongs. It will be the category from the categories list returned below that has the highest weight.',
          }),
        maturityRating: z.string().exactOptional(),
        pageCount: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Total number of pages as per publisher metadata.' }),
        panelizationSummary: z
          .object({
            containsEpubBubbles: z.boolean().exactOptional(),
            containsImageBubbles: z.boolean().exactOptional(),
            epubBubbleVersion: z.string().exactOptional(),
            imageBubbleVersion: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({
            description: 'A top-level summary of the panelization info in this volume.',
            required: [],
          }),
        previewLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'URL to preview this volume on the Google Books site.' }),
        printType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Type of publication of this volume. Possible values are BOOK or MAGAZINE.',
          }),
        printedPageCount: z
          .int32()
          .exactOptional()
          .openapi({
            description: 'Total number of printed pages in generated pdf representation.',
          }),
        publishedDate: z
          .string()
          .exactOptional()
          .openapi({ description: 'Date of publication. (In LITE projection.)' }),
        publisher: z
          .string()
          .exactOptional()
          .openapi({ description: 'Publisher of this volume. (In LITE projection.)' }),
        ratingsCount: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The number of review ratings for this volume.' }),
        readingModes: z
          .object({ image: z.boolean().exactOptional(), text: z.boolean().exactOptional() })
          .exactOptional()
          .openapi({ description: 'The reading modes available for this volume.', required: [] }),
        samplePageCount: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Total number of sample pages as per publisher metadata.' }),
        seriesInfo: VolumeseriesinfoSchema.exactOptional(),
        subtitle: z
          .string()
          .exactOptional()
          .openapi({ description: 'Volume subtitle. (In LITE projection.)' }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'Volume title. (In LITE projection.)' }),
      })
      .exactOptional()
      .openapi({ description: 'General volume information.', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Volume')

const DiscoveryclustersSchema = z
  .object({
    clusters: z
      .array(
        z
          .object({
            banner_with_content_container: z
              .object({
                fillColorArgb: z.string().exactOptional(),
                imageUrl: z.string().exactOptional(),
                maskColorArgb: z.string().exactOptional(),
                moreButtonText: z.string().exactOptional(),
                moreButtonUrl: z.string().exactOptional(),
                textColorArgb: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            subTitle: z.string().exactOptional(),
            title: z.string().exactOptional(),
            totalVolumes: z.int32().exactOptional(),
            uid: z.string().exactOptional(),
            volumes: z.array(VolumeSchema).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    kind: z.string().exactOptional().openapi({ description: 'Resorce type.' }),
    totalClusters: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Discoveryclusters')

const DownloadAccessesSchema = z
  .object({
    downloadAccessList: z
      .array(DownloadAccessRestrictionSchema)
      .exactOptional()
      .openapi({ description: 'A list of download access responses.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('DownloadAccesses')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FamilyInfoSchema = z
  .object({
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    membership: z
      .object({
        acquirePermission: z
          .string()
          .exactOptional()
          .openapi({ description: 'Restrictions on user buying and acquiring content.' }),
        ageGroup: z.string().exactOptional().openapi({ description: 'The age group of the user.' }),
        allowedMaturityRating: z
          .string()
          .exactOptional()
          .openapi({ description: 'The maximum allowed maturity rating for the user.' }),
        isInFamily: z.boolean().exactOptional(),
        role: z
          .string()
          .exactOptional()
          .openapi({ description: 'The role of the user in the family.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Family membership info of the user that made the request.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('FamilyInfo')

const LayersummarySchema = z
  .object({
    annotationCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of annotations for this layer.' }),
    annotationTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of annotation types contained for this layer.' }),
    annotationsDataLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to get data for this annotation.' }),
    annotationsLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The link to get the annotations for this layer.' }),
    contentVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content version this resource is for.' }),
    dataCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of data items for this layer.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique id of this layer summary.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource Type' }),
    layerId: z.string().exactOptional().openapi({ description: 'The layer id for this summary.' }),
    selfLink: z.string().exactOptional().openapi({ description: 'URL to this resource.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format).',
      }),
    volumeAnnotationsVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.",
      }),
    volumeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The volume id this resource is for.' }),
  })
  .openapi({ required: [] })
  .openapi('Layersummary')

const LayersummariesSchema = z
  .object({
    items: z
      .array(LayersummarySchema)
      .exactOptional()
      .openapi({ description: 'A list of layer summary items.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    totalItems: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of layer summaries found.' }),
  })
  .openapi({ required: [] })
  .openapi('Layersummaries')

const MetadataSchema = z
  .object({
    items: z
      .array(
        z
          .object({
            download_url: z.string().exactOptional(),
            encrypted_key: z.string().exactOptional(),
            language: z.string().exactOptional(),
            size: z.string().exactOptional(),
            version: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of offline dictionary metadata.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('Metadata')

const NotificationSchema = z
  .object({
    body: z.string().exactOptional(),
    crmExperimentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of crm experiment ids.' }),
    doc_id: z.string().exactOptional(),
    doc_type: z.string().exactOptional(),
    dont_show_notification: z.boolean().exactOptional(),
    iconUrl: z.string().exactOptional(),
    is_document_mature: z.boolean().exactOptional(),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    notificationGroup: z.string().exactOptional(),
    notification_type: z.string().exactOptional(),
    pcampaign_id: z.string().exactOptional(),
    reason: z.string().exactOptional(),
    show_notification_settings_action: z.boolean().exactOptional(),
    targetUrl: z.string().exactOptional(),
    timeToExpireMs: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Notification')

const OffersSchema = z
  .object({
    items: z
      .array(
        z
          .object({
            artUrl: z.string().exactOptional(),
            gservicesKey: z.string().exactOptional(),
            id: z.string().exactOptional(),
            items: z
              .array(
                z
                  .object({
                    author: z.string().exactOptional(),
                    canonicalVolumeLink: z.string().exactOptional(),
                    coverUrl: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    title: z.string().exactOptional(),
                    volumeId: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of offers.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('Offers')

const RequestAccessDataSchema = z
  .object({
    concurrentAccess: ConcurrentAccessRestrictionSchema.exactOptional().openapi({
      description: 'A concurrent access response.',
    }),
    downloadAccess: DownloadAccessRestrictionSchema.exactOptional().openapi({
      description: 'A download access response.',
    }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('RequestAccessData')

const SeriesSchema = z
  .object({
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    series: z
      .array(
        z
          .object({
            bannerImageUrl: z.string().exactOptional(),
            eligibleForSubscription: z.boolean().exactOptional(),
            imageUrl: z.string().exactOptional(),
            isComplete: z.boolean().exactOptional(),
            seriesFormatType: z.string().exactOptional(),
            seriesId: z.string().exactOptional(),
            seriesSubscriptionReleaseInfo: z
              .object({
                cancelTime: z.string().exactOptional(),
                currentReleaseInfo: z
                  .object({
                    amountInMicros: z.float64().exactOptional(),
                    currencyCode: z.string().exactOptional(),
                    releaseNumber: z.string().exactOptional(),
                    releaseTime: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                nextReleaseInfo: z
                  .object({
                    amountInMicros: z.float64().exactOptional(),
                    currencyCode: z.string().exactOptional(),
                    releaseNumber: z.string().exactOptional(),
                    releaseTime: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                seriesSubscriptionType: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            seriesType: z.string().exactOptional(),
            subscriptionId: z.string().exactOptional(),
            title: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Series')

const SeriesmembershipSchema = z
  .object({
    kind: z.string().exactOptional().openapi({ description: 'Resorce type.' }),
    member: z.array(VolumeSchema).exactOptional(),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Seriesmembership')

const UsersettingsSchema = z
  .object({
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    notesExport: z
      .object({ folderName: z.string().exactOptional(), isEnabled: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({
        description: 'User settings in sub-objects, each for different purposes.',
        required: [],
      }),
    notification: z
      .object({
        matchMyInterests: z
          .object({ opted_state: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        moreFromAuthors: z
          .object({ opted_state: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        moreFromSeries: z
          .object({ opted_state: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        priceDrop: z
          .object({ opted_state: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        rewardExpirations: z
          .object({ opted_state: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Usersettings')

const Volume2Schema = z
  .object({
    items: z.array(VolumeSchema).exactOptional().openapi({ description: 'A list of volumes.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    nextPageToken: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Volume2')

const VolumeannotationSchema = z
  .object({
    annotationDataId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The annotation data id for this volume annotation.' }),
    annotationDataLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to get data for this annotation.' }),
    annotationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of annotation this is.' }),
    contentRanges: z
      .object({
        cfiRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in CFI format for this annotation for version above.',
        }),
        contentVersion: z
          .string()
          .exactOptional()
          .openapi({ description: 'Content version applicable to ranges below.' }),
        gbImageRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in GB image format for this annotation for version above.',
        }),
        gbTextRange: BooksAnnotationsRangeSchema.exactOptional().openapi({
          description: 'Range in GB text format for this annotation for version above.',
        }),
      })
      .exactOptional()
      .openapi({ description: 'The content ranges to identify the selected text.', required: [] }),
    data: z.string().exactOptional().openapi({ description: 'Data for this annotation.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates that this annotation is deleted.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique id of this volume annotation.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource Type' }),
    layerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Layer this annotation is for.' }),
    pageIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Pages the annotation spans.' }),
    selectedText: z.string().exactOptional().openapi({ description: 'Excerpt from the volume.' }),
    selfLink: z.string().exactOptional().openapi({ description: 'URL to this resource.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format).',
      }),
    volumeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Volume this annotation is for.' }),
  })
  .openapi({ required: [] })
  .openapi('Volumeannotation')

const VolumeannotationsSchema = z
  .object({
    items: z
      .array(VolumeannotationSchema)
      .exactOptional()
      .openapi({ description: 'A list of volume annotations.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to pass in for pagination for the next page. This will not be present if this request does not have more results.',
      }),
    totalItems: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of volume annotations found.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book).",
      }),
  })
  .openapi({ required: [] })
  .openapi('Volumeannotations')

const VolumesSchema = z
  .object({
    items: z.array(VolumeSchema).exactOptional().openapi({ description: 'A list of volumes.' }),
    kind: z.string().exactOptional().openapi({ description: 'Resource type.' }),
    totalItems: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Volumes')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: { 'https://www.googleapis.com/auth/books': 'Manage your books' },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: { 'https://www.googleapis.com/auth/books': 'Manage your books' },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postBooksV1CloudloadingAddBookRoute = createRoute({
  method: 'post',
  path: '/books/v1/cloudloading/addBook',
  tags: ['cloudloading'],
  description: 'Add a user-upload volume and triggers processing.',
  operationId: 'books.cloudloading.addBook',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      drive_document_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A drive document id. The upload_client_token must not be set.',
            in: 'query',
            name: 'drive_document_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      mime_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The document MIME type. It can be set only if the drive_document_id is set.',
            in: 'query',
            name: 'mime_type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The document name. It can be set only if the drive_document_id is set.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      upload_client_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Scotty upload token.',
            in: 'query',
            name: 'upload_client_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BooksCloudloadingResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1CloudloadingDeleteBookRoute = createRoute({
  method: 'post',
  path: '/books/v1/cloudloading/deleteBook',
  tags: ['cloudloading'],
  description: 'Remove the book and its contents',
  operationId: 'books.cloudloading.deleteBook',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the book to be removed.',
            in: 'query',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1CloudloadingUpdateBookRoute = createRoute({
  method: 'post',
  path: '/books/v1/cloudloading/updateBook',
  tags: ['cloudloading'],
  description: 'Updates a user-upload volume.',
  operationId: 'books.cloudloading.updateBook',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: BooksCloudloadingResourceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BooksCloudloadingResourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1DictionaryListOfflineMetadataRoute = createRoute({
  method: 'get',
  path: '/books/v1/dictionary/listOfflineMetadata',
  tags: ['dictionary'],
  description: 'Returns a list of offline dictionary metadata available',
  operationId: 'books.dictionary.listOfflineMetadata',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      cpksver: z
        .string()
        .openapi({
          param: {
            description: 'The device/version ID from which to request the data.',
            in: 'query',
            name: 'cpksver',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MetadataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1FamilysharingGetFamilyInfoRoute = createRoute({
  method: 'get',
  path: '/books/v1/familysharing/getFamilyInfo',
  tags: ['familysharing'],
  description: 'Gets information regarding the family that the user is part of.',
  operationId: 'books.familysharing.getFamilyInfo',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FamilyInfoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1FamilysharingShareRoute = createRoute({
  method: 'post',
  path: '/books/v1/familysharing/share',
  tags: ['familysharing'],
  description:
    "Initiates sharing of the content with the user's family. Empty response indicates success.",
  operationId: 'books.familysharing.share',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      docId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The docid to share.',
            in: 'query',
            name: 'docId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      volumeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The volume to share.',
            in: 'query',
            name: 'volumeId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1FamilysharingUnshareRoute = createRoute({
  method: 'post',
  path: '/books/v1/familysharing/unshare',
  tags: ['familysharing'],
  description:
    "Initiates revoking content that has already been shared with the user's family. Empty response indicates success.",
  operationId: 'books.familysharing.unshare',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      docId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The docid to unshare.',
            in: 'query',
            name: 'docId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      volumeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The volume to unshare.',
            in: 'query',
            name: 'volumeId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1MyconfigGetUserSettingsRoute = createRoute({
  method: 'get',
  path: '/books/v1/myconfig/getUserSettings',
  tags: ['myconfig'],
  description: 'Gets the current settings for the user.',
  operationId: 'books.myconfig.getUserSettings',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unused. Added only to workaround TEX mandatory request template requirement',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UsersettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MyconfigReleaseDownloadAccessRoute = createRoute({
  method: 'post',
  path: '/books/v1/myconfig/releaseDownloadAccess',
  tags: ['myconfig'],
  description: 'Release downloaded content access restriction.',
  operationId: 'books.myconfig.releaseDownloadAccess',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      cpksver: z
        .string()
        .openapi({
          param: {
            description: 'The device/version ID from which to release the restriction.',
            in: 'query',
            name: 'cpksver',
            required: true,
            schema: { type: 'string' },
          },
        }),
      volumeIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The volume(s) to release restrictions for.',
            explode: true,
            in: 'query',
            name: 'volumeIds',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.',
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DownloadAccessesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MyconfigRequestAccessRoute = createRoute({
  method: 'post',
  path: '/books/v1/myconfig/requestAccess',
  tags: ['myconfig'],
  description: 'Request concurrent and download access restrictions.',
  operationId: 'books.myconfig.requestAccess',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      cpksver: z
        .string()
        .openapi({
          param: {
            description: 'The device/version ID from which to request the restrictions.',
            in: 'query',
            name: 'cpksver',
            required: true,
            schema: { type: 'string' },
          },
        }),
      nonce: z
        .string()
        .openapi({
          param: {
            description: 'The client nonce value.',
            in: 'query',
            name: 'nonce',
            required: true,
            schema: { type: 'string' },
          },
        }),
      source: z
        .string()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            required: true,
            schema: { type: 'string' },
          },
        }),
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'The volume to request concurrent/download restrictions for.',
            in: 'query',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      licenseTypes: z
        .enum(['LICENSE_TYPES_UNDEFINED', 'BOTH', 'CONCURRENT', 'DOWNLOAD'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The type of access license to request. If not specified, the default is BOTH.',
            in: 'query',
            name: 'licenseTypes',
            schema: {
              enum: ['LICENSE_TYPES_UNDEFINED', 'BOTH', 'CONCURRENT', 'DOWNLOAD'],
              type: 'string',
            },
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.',
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RequestAccessDataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MyconfigSyncVolumeLicensesRoute = createRoute({
  method: 'post',
  path: '/books/v1/myconfig/syncVolumeLicenses',
  tags: ['myconfig'],
  description: 'Request downloaded content access for specified volumes on the My eBooks shelf.',
  operationId: 'books.myconfig.syncVolumeLicenses',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      cpksver: z
        .string()
        .openapi({
          param: {
            description: 'The device/version ID from which to release the restriction.',
            in: 'query',
            name: 'cpksver',
            required: true,
            schema: { type: 'string' },
          },
        }),
      nonce: z
        .string()
        .openapi({
          param: {
            description: 'The client nonce value.',
            in: 'query',
            name: 'nonce',
            required: true,
            schema: { type: 'string' },
          },
        }),
      source: z
        .string()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            required: true,
            schema: { type: 'string' },
          },
        }),
      features: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['FEATURES_UNDEFINED', 'RENTALS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "List of features supported by the client, i.e., 'RENTALS'",
            explode: true,
            in: 'query',
            name: 'features',
            schema: {
              items: { enum: ['FEATURES_UNDEFINED', 'RENTALS'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      includeNonComicsSeries: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to include non-comics series. Defaults to false.',
            in: 'query',
            name: 'includeNonComicsSeries',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.',
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showPreorders: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to show pre-ordered books. Defaults to false.',
            in: 'query',
            name: 'showPreorders',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      volumeIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The volume(s) to request download restrictions for.',
            explode: true,
            in: 'query',
            name: 'volumeIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MyconfigUpdateUserSettingsRoute = createRoute({
  method: 'post',
  path: '/books/v1/myconfig/updateUserSettings',
  tags: ['myconfig'],
  description:
    'Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.',
  operationId: 'books.myconfig.updateUserSettings',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: UsersettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UsersettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1MylibraryAnnotationsRoute = createRoute({
  method: 'get',
  path: '/books/v1/mylibrary/annotations',
  tags: ['mylibrary'],
  description: 'Retrieves a list of annotations, possibly filtered.',
  operationId: 'books.mylibrary.annotations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      contentVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The content version for the requested volume.',
            in: 'query',
            name: 'contentVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
      layerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The layer ID to limit annotation by.',
            in: 'query',
            name: 'layerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      layerIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The layer ID(s) to limit annotation by.',
            explode: true,
            in: 'query',
            name: 'layerIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(40),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 40, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.',
            in: 'query',
            name: 'showDeleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updatedMax: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).',
            in: 'query',
            name: 'updatedMax',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updatedMin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).',
            in: 'query',
            name: 'updatedMin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      volumeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The volume to restrict annotations to.',
            in: 'query',
            name: 'volumeId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnotationsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MylibraryAnnotationsRoute = createRoute({
  method: 'post',
  path: '/books/v1/mylibrary/annotations',
  tags: ['mylibrary'],
  description: 'Inserts a new annotation.',
  operationId: 'books.mylibrary.annotations.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      annotationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID for the annotation to insert.',
            in: 'query',
            name: 'annotationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO-3166-1 code to override the IP-based location.',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showOnlySummaryInResponse: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Requests that only the summary of the specified layer be provided in the response.',
            in: 'query',
            name: 'showOnlySummaryInResponse',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnotationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnotationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MylibraryAnnotationsSummaryRoute = createRoute({
  method: 'post',
  path: '/books/v1/mylibrary/annotations/summary',
  tags: ['mylibrary'],
  description: 'Gets the summary of specified layers.',
  operationId: 'books.mylibrary.annotations.summary',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      layerIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'Array of layer IDs to get the summary for.',
            explode: true,
            in: 'query',
            name: 'layerIds',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'Volume id to get the summary for.',
            in: 'query',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnotationsSummarySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const putBooksV1MylibraryAnnotationsAnnotationIdRoute = createRoute({
  method: 'put',
  path: '/books/v1/mylibrary/annotations/{annotationId}',
  tags: ['mylibrary'],
  description: 'Updates an existing annotation.',
  operationId: 'books.mylibrary.annotations.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      annotationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID for the annotation to update.',
            in: 'path',
            name: 'annotationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnotationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnotationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const deleteBooksV1MylibraryAnnotationsAnnotationIdRoute = createRoute({
  method: 'delete',
  path: '/books/v1/mylibrary/annotations/{annotationId}',
  tags: ['mylibrary'],
  description: 'Deletes an annotation.',
  operationId: 'books.mylibrary.annotations.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      annotationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID for the annotation to delete.',
            in: 'path',
            name: 'annotationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1MylibraryBookshelvesRoute = createRoute({
  method: 'get',
  path: '/books/v1/mylibrary/bookshelves',
  tags: ['mylibrary'],
  description: 'Retrieves a list of bookshelves belonging to the authenticated user.',
  operationId: 'books.mylibrary.bookshelves.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BookshelvesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1MylibraryBookshelvesShelfRoute = createRoute({
  method: 'get',
  path: '/books/v1/mylibrary/bookshelves/{shelf}',
  tags: ['mylibrary'],
  description: 'Retrieves metadata for a specific bookshelf belonging to the authenticated user.',
  operationId: 'books.mylibrary.bookshelves.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      shelf: z
        .string()
        .openapi({
          param: {
            description: 'ID of bookshelf to retrieve.',
            in: 'path',
            name: 'shelf',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BookshelfSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MylibraryBookshelvesShelfAddVolumeRoute = createRoute({
  method: 'post',
  path: '/books/v1/mylibrary/bookshelves/{shelf}/addVolume',
  tags: ['mylibrary'],
  description: 'Adds a volume to a bookshelf.',
  operationId: 'books.mylibrary.bookshelves.addVolume',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of volume to add.',
            in: 'query',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reason: z
        .enum(['REASON_UNDEFINED', 'IOS_PREX', 'IOS_SEARCH', 'ONBOARDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The reason for which the book is added to the library.',
            in: 'query',
            name: 'reason',
            schema: {
              enum: ['REASON_UNDEFINED', 'IOS_PREX', 'IOS_SEARCH', 'ONBOARDING'],
              type: 'string',
            },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      shelf: z
        .string()
        .openapi({
          param: {
            description: 'ID of bookshelf to which to add a volume.',
            in: 'path',
            name: 'shelf',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MylibraryBookshelvesShelfClearVolumesRoute = createRoute({
  method: 'post',
  path: '/books/v1/mylibrary/bookshelves/{shelf}/clearVolumes',
  tags: ['mylibrary'],
  description: 'Clears all volumes from a bookshelf.',
  operationId: 'books.mylibrary.bookshelves.clearVolumes',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      shelf: z
        .string()
        .openapi({
          param: {
            description: 'ID of bookshelf from which to remove a volume.',
            in: 'path',
            name: 'shelf',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MylibraryBookshelvesShelfMoveVolumeRoute = createRoute({
  method: 'post',
  path: '/books/v1/mylibrary/bookshelves/{shelf}/moveVolume',
  tags: ['mylibrary'],
  description: 'Moves a volume within a bookshelf.',
  operationId: 'books.mylibrary.bookshelves.moveVolume',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of volume to move.',
            in: 'query',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      volumePosition: z
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
            description:
              'Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)',
            in: 'query',
            name: 'volumePosition',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      shelf: z
        .string()
        .openapi({
          param: {
            description: 'ID of bookshelf with the volume.',
            in: 'path',
            name: 'shelf',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MylibraryBookshelvesShelfRemoveVolumeRoute = createRoute({
  method: 'post',
  path: '/books/v1/mylibrary/bookshelves/{shelf}/removeVolume',
  tags: ['mylibrary'],
  description: 'Removes a volume from a bookshelf.',
  operationId: 'books.mylibrary.bookshelves.removeVolume',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of volume to remove.',
            in: 'query',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reason: z
        .enum(['REASON_UNDEFINED', 'ONBOARDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The reason for which the book is removed from the library.',
            in: 'query',
            name: 'reason',
            schema: { enum: ['REASON_UNDEFINED', 'ONBOARDING'], type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      shelf: z
        .string()
        .openapi({
          param: {
            description: 'ID of bookshelf from which to remove a volume.',
            in: 'path',
            name: 'shelf',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1MylibraryBookshelvesShelfVolumesRoute = createRoute({
  method: 'get',
  path: '/books/v1/mylibrary/bookshelves/{shelf}/volumes',
  tags: ['mylibrary'],
  description: 'Gets volume information for volumes on a bookshelf.',
  operationId: 'books.mylibrary.bookshelves.volumes.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO-3166-1 code to override the IP-based location.',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      projection: z
        .enum(['PROJECTION_UNDEFINED', 'FULL', 'LITE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict information returned to a set of selected fields.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['PROJECTION_UNDEFINED', 'FULL', 'LITE'], type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Full-text search query string in this bookshelf.',
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showPreorders: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to show pre-ordered books. Defaults to false.',
            in: 'query',
            name: 'showPreorders',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the first element to return (starts at 0)',
            in: 'query',
            name: 'startIndex',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      shelf: z
        .string()
        .openapi({
          param: {
            description: 'The bookshelf ID or name retrieve volumes for.',
            in: 'path',
            name: 'shelf',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1MylibraryReadingpositionsVolumeIdRoute = createRoute({
  method: 'get',
  path: '/books/v1/mylibrary/readingpositions/{volumeId}',
  tags: ['mylibrary'],
  description: 'Retrieves my reading position information for a volume.',
  operationId: 'books.mylibrary.readingpositions.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      contentVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Volume content version for which this reading position is requested.',
            in: 'query',
            name: 'contentVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of volume for which to retrieve a reading position.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReadingPositionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1MylibraryReadingpositionsVolumeIdSetPositionRoute = createRoute({
  method: 'post',
  path: '/books/v1/mylibrary/readingpositions/{volumeId}/setPosition',
  tags: ['mylibrary'],
  description: 'Sets my reading position information for a volume.',
  operationId: 'books.mylibrary.readingpositions.setPosition',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      position: z
        .string()
        .openapi({
          param: {
            description: 'Position string for the new volume reading position.',
            in: 'query',
            name: 'position',
            required: true,
            schema: { type: 'string' },
          },
        }),
      timestamp: z
        .string()
        .openapi({
          param: {
            description: 'RFC 3339 UTC format timestamp associated with this reading position.',
            in: 'query',
            name: 'timestamp',
            required: true,
            schema: { type: 'string' },
          },
        }),
      action: z
        .enum([
          'ACTION_UNDEFINED',
          'bookmark',
          'chapter',
          'next-page',
          'prev-page',
          'scroll',
          'search',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Action that caused this reading position to be set.',
            in: 'query',
            name: 'action',
            schema: {
              enum: [
                'ACTION_UNDEFINED',
                'bookmark',
                'chapter',
                'next-page',
                'prev-page',
                'scroll',
                'search',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      contentVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Volume content version for which this reading position applies.',
            in: 'query',
            name: 'contentVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
      deviceCookie: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Random persistent device cookie optional on set position.',
            in: 'query',
            name: 'deviceCookie',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of volume for which to update the reading position.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1NotificationGetRoute = createRoute({
  method: 'get',
  path: '/books/v1/notification/get',
  tags: ['notification'],
  description: 'Returns notification details for a given notification id.',
  operationId: 'books.notification.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      notification_id: z
        .string()
        .openapi({
          param: {
            description: 'String to identify the notification.',
            in: 'query',
            name: 'notification_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NotificationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1OnboardingListCategoriesRoute = createRoute({
  method: 'get',
  path: '/books/v1/onboarding/listCategories',
  tags: ['onboarding'],
  description: 'List categories for onboarding experience.',
  operationId: 'books.onboarding.listCategories',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.',
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CategorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1OnboardingListCategoryVolumesRoute = createRoute({
  method: 'get',
  path: '/books/v1/onboarding/listCategoryVolumes',
  tags: ['onboarding'],
  description: 'List available volumes under categories for onboarding experience.',
  operationId: 'books.onboarding.listCategoryVolumes',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      categoryId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'List of category ids requested.',
            explode: true,
            in: 'query',
            name: 'categoryId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.',
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxAllowedMaturityRating: z
        .enum(['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.',
            in: 'query',
            name: 'maxAllowedMaturityRating',
            schema: {
              enum: ['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'],
              type: 'string',
            },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'Number of maximum results per page to be included in the response.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: Volume2Schema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1PersonalizedstreamGetRoute = createRoute({
  method: 'get',
  path: '/books/v1/personalizedstream/get',
  tags: ['personalizedstream'],
  description: 'Returns a stream of personalized book clusters',
  operationId: 'books.personalizedstream.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxAllowedMaturityRating: z
        .enum(['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.',
            in: 'query',
            name: 'maxAllowedMaturityRating',
            schema: {
              enum: ['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'],
              type: 'string',
            },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DiscoveryclustersSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1PromoofferAcceptRoute = createRoute({
  method: 'post',
  path: '/books/v1/promooffer/accept',
  tags: ['promooffer'],
  description: 'Accepts the promo offer.',
  operationId: 'books.promooffer.accept',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      androidId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device android_id',
            in: 'query',
            name: 'androidId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      device: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device device',
            in: 'query',
            name: 'device',
            schema: { type: 'string' },
            required: false,
          },
        }),
      manufacturer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device manufacturer',
            in: 'query',
            name: 'manufacturer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device model',
            in: 'query',
            name: 'model',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offerId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'offerId', schema: { type: 'string' }, required: false },
        }),
      product: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device product',
            in: 'query',
            name: 'product',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device serial',
            in: 'query',
            name: 'serial',
            schema: { type: 'string' },
            required: false,
          },
        }),
      volumeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Volume id to exercise the offer',
            in: 'query',
            name: 'volumeId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1PromoofferDismissRoute = createRoute({
  method: 'post',
  path: '/books/v1/promooffer/dismiss',
  tags: ['promooffer'],
  description: 'Marks the promo offer as dismissed.',
  operationId: 'books.promooffer.dismiss',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      androidId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device android_id',
            in: 'query',
            name: 'androidId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      device: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device device',
            in: 'query',
            name: 'device',
            schema: { type: 'string' },
            required: false,
          },
        }),
      manufacturer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device manufacturer',
            in: 'query',
            name: 'manufacturer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device model',
            in: 'query',
            name: 'model',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Offer to dimiss',
            in: 'query',
            name: 'offerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      product: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device product',
            in: 'query',
            name: 'product',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device serial',
            in: 'query',
            name: 'serial',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1PromoofferGetRoute = createRoute({
  method: 'get',
  path: '/books/v1/promooffer/get',
  tags: ['promooffer'],
  description: 'Returns a list of promo offers available to the user',
  operationId: 'books.promooffer.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      androidId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device android_id',
            in: 'query',
            name: 'androidId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      device: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device device',
            in: 'query',
            name: 'device',
            schema: { type: 'string' },
            required: false,
          },
        }),
      manufacturer: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device manufacturer',
            in: 'query',
            name: 'manufacturer',
            schema: { type: 'string' },
            required: false,
          },
        }),
      model: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device model',
            in: 'query',
            name: 'model',
            schema: { type: 'string' },
            required: false,
          },
        }),
      product: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device product',
            in: 'query',
            name: 'product',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serial: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'device serial',
            in: 'query',
            name: 'serial',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OffersSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1SeriesGetRoute = createRoute({
  method: 'get',
  path: '/books/v1/series/get',
  tags: ['series'],
  description: 'Returns Series metadata for the given series ids.',
  operationId: 'books.series.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      series_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'String that identifies the series',
            explode: true,
            in: 'query',
            name: 'series_id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SeriesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1SeriesMembershipGetRoute = createRoute({
  method: 'get',
  path: '/books/v1/series/membership/get',
  tags: ['series'],
  description: 'Returns Series membership data given the series id.',
  operationId: 'books.series.membership.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      series_id: z
        .string()
        .openapi({
          param: {
            description: 'String that identifies the series',
            in: 'query',
            name: 'series_id',
            required: true,
            schema: { type: 'string' },
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
            description: 'Number of maximum results per page to be included in the response.',
            in: 'query',
            name: 'page_size',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous page.',
            in: 'query',
            name: 'page_token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SeriesmembershipSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1UsersUserIdBookshelvesRoute = createRoute({
  method: 'get',
  path: '/books/v1/users/{userId}/bookshelves',
  tags: ['bookshelves'],
  description: 'Retrieves a list of public bookshelves for the specified user.',
  operationId: 'books.bookshelves.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID of user for whom to retrieve bookshelves.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BookshelvesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1UsersUserIdBookshelvesShelfRoute = createRoute({
  method: 'get',
  path: '/books/v1/users/{userId}/bookshelves/{shelf}',
  tags: ['bookshelves'],
  description: 'Retrieves metadata for a specific bookshelf for the specified user.',
  operationId: 'books.bookshelves.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID of user for whom to retrieve bookshelves.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shelf: z
        .string()
        .openapi({
          param: {
            description: 'ID of bookshelf to retrieve.',
            in: 'path',
            name: 'shelf',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BookshelfSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1UsersUserIdBookshelvesShelfVolumesRoute = createRoute({
  method: 'get',
  path: '/books/v1/users/{userId}/bookshelves/{shelf}/volumes',
  tags: ['bookshelves'],
  description: 'Retrieves volumes in a specific bookshelf for the specified user.',
  operationId: 'books.bookshelves.volumes.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'maxResults',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      showPreorders: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to show pre-ordered books. Defaults to false.',
            in: 'query',
            name: 'showPreorders',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the first element to return (starts at 0)',
            in: 'query',
            name: 'startIndex',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'ID of user for whom to retrieve bookshelf volumes.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shelf: z
        .string()
        .openapi({
          param: {
            description: 'ID of bookshelf to retrieve volumes.',
            in: 'path',
            name: 'shelf',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes',
  tags: ['volumes'],
  description: 'Performs a book search.',
  operationId: 'books.volumes.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      q: z
        .string()
        .openapi({
          param: {
            description: 'Full-text search query string.',
            in: 'query',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
      download: z
        .enum(['DOWNLOAD_UNDEFINED', 'EPUB'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict to volumes by download availability.',
            in: 'query',
            name: 'download',
            schema: { enum: ['DOWNLOAD_UNDEFINED', 'EPUB'], type: 'string' },
            required: false,
          },
        }),
      filter: z
        .enum(['FILTER_UNDEFINED', 'ebooks', 'free-ebooks', 'full', 'paid-ebooks', 'partial'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter search results.',
            in: 'query',
            name: 'filter',
            schema: {
              enum: ['FILTER_UNDEFINED', 'ebooks', 'free-ebooks', 'full', 'paid-ebooks', 'partial'],
              type: 'string',
            },
            required: false,
          },
        }),
      langRestrict: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict results to books with this language code.',
            in: 'query',
            name: 'langRestrict',
            schema: { type: 'string' },
            required: false,
          },
        }),
      libraryRestrict: z
        .enum(['LIBRARY_RESTRICT_UNDEFINED', 'my-library', 'no-restrict'])
        .exactOptional()
        .openapi({
          param: {
            description: "Restrict search to this user's library.",
            in: 'query',
            name: 'libraryRestrict',
            schema: {
              enum: ['LIBRARY_RESTRICT_UNDEFINED', 'my-library', 'no-restrict'],
              type: 'string',
            },
            required: false,
          },
        }),
      maxAllowedMaturityRating: z
        .enum(['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.',
            in: 'query',
            name: 'maxAllowedMaturityRating',
            schema: {
              enum: ['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'],
              type: 'string',
            },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(40),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 40, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .enum(['ORDER_BY_UNDEFINED', 'newest', 'relevance'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort search results.',
            in: 'query',
            name: 'orderBy',
            schema: { enum: ['ORDER_BY_UNDEFINED', 'newest', 'relevance'], type: 'string' },
            required: false,
          },
        }),
      partner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict and brand results for partner ID.',
            in: 'query',
            name: 'partner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      printType: z
        .enum(['PRINT_TYPE_UNDEFINED', 'ALL', 'BOOKS', 'MAGAZINES'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict to books or magazines.',
            in: 'query',
            name: 'printType',
            schema: { enum: ['PRINT_TYPE_UNDEFINED', 'ALL', 'BOOKS', 'MAGAZINES'], type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['PROJECTION_UNDEFINED', 'FULL', 'LITE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict information returned to a set of selected fields.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['PROJECTION_UNDEFINED', 'FULL', 'LITE'], type: 'string' },
            required: false,
          },
        }),
      showPreorders: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to show books available for preorder. Defaults to false.',
            in: 'query',
            name: 'showPreorders',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the first result to return (starts at 0)',
            in: 'query',
            name: 'startIndex',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesMybooksRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/mybooks',
  tags: ['volumes'],
  description: 'Return a list of books in My Library.',
  operationId: 'books.volumes.mybooks.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      acquireMethod: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'ACQUIRE_METHOD_UNDEFINED',
              'FAMILY_SHARED',
              'PREORDERED',
              'PREVIOUSLY_RENTED',
              'PUBLIC_DOMAIN',
              'PURCHASED',
              'RENTED',
              'SAMPLE',
              'UPLOADED',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'How the book was acquired',
            explode: true,
            in: 'query',
            name: 'acquireMethod',
            schema: {
              items: {
                enum: [
                  'ACQUIRE_METHOD_UNDEFINED',
                  'FAMILY_SHARED',
                  'PREORDERED',
                  'PREVIOUSLY_RENTED',
                  'PUBLIC_DOMAIN',
                  'PURCHASED',
                  'RENTED',
                  'SAMPLE',
                  'UPLOADED',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO-3166-1 code to override the IP-based location.',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      processingState: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'PROCESSING_STATE_UNDEFINED',
              'COMPLETED_FAILED',
              'COMPLETED_SUCCESS',
              'RUNNING',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.',
            explode: true,
            in: 'query',
            name: 'processingState',
            schema: {
              items: {
                enum: [
                  'PROCESSING_STATE_UNDEFINED',
                  'COMPLETED_FAILED',
                  'COMPLETED_SUCCESS',
                  'RUNNING',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the first result to return (starts at 0)',
            in: 'query',
            name: 'startIndex',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesRecommendedRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/recommended',
  tags: ['volumes'],
  description: 'Return a list of recommended books for the current user.',
  operationId: 'books.volumes.recommended.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxAllowedMaturityRating: z
        .enum(['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.',
            in: 'query',
            name: 'maxAllowedMaturityRating',
            schema: {
              enum: ['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'],
              type: 'string',
            },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const postBooksV1VolumesRecommendedRateRoute = createRoute({
  method: 'post',
  path: '/books/v1/volumes/recommended/rate',
  tags: ['volumes'],
  description: 'Rate a recommended book for the current user.',
  operationId: 'books.volumes.recommended.rate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      rating: z
        .enum(['RATING_UNDEFINED', 'HAVE_IT', 'NOT_INTERESTED'])
        .openapi({
          param: {
            description: 'Rating to be given to the volume.',
            in: 'query',
            name: 'rating',
            required: true,
            schema: { enum: ['RATING_UNDEFINED', 'HAVE_IT', 'NOT_INTERESTED'], type: 'string' },
          },
        }),
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the source volume.',
            in: 'query',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BooksVolumesRecommendedRateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesUseruploadedRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/useruploaded',
  tags: ['volumes'],
  description: 'Return a list of books uploaded by the current user.',
  operationId: 'books.volumes.useruploaded.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(40),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 40, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      processingState: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'PROCESSING_STATE_UNDEFINED',
              'COMPLETED_FAILED',
              'COMPLETED_SUCCESS',
              'RUNNING',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The processing state of the user uploaded volumes to be returned.',
            explode: true,
            in: 'query',
            name: 'processingState',
            schema: {
              items: {
                enum: [
                  'PROCESSING_STATE_UNDEFINED',
                  'COMPLETED_FAILED',
                  'COMPLETED_SUCCESS',
                  'RUNNING',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the first result to return (starts at 0)',
            in: 'query',
            name: 'startIndex',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      volumeId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ids of the volumes to be returned. If not specified all that match the processingState are returned.',
            explode: true,
            in: 'query',
            name: 'volumeId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesVolumeIdRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/{volumeId}',
  tags: ['volumes'],
  description: 'Gets volume information for a single volume.',
  operationId: 'books.volumes.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO-3166-1 code to override the IP-based location.',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeNonComicsSeries: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true to include non-comics series. Defaults to false.',
            in: 'query',
            name: 'includeNonComicsSeries',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      partner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Brand results for partner ID.',
            in: 'query',
            name: 'partner',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projection: z
        .enum(['PROJECTION_UNDEFINED', 'FULL', 'LITE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Restrict information returned to a set of selected fields.',
            in: 'query',
            name: 'projection',
            schema: { enum: ['PROJECTION_UNDEFINED', 'FULL', 'LITE'], type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'string to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user_library_consistent_read: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user_library_consistent_read',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of volume to retrieve.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesVolumeIdAssociatedRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/{volumeId}/associated',
  tags: ['volumes'],
  description: 'Return a list of associated books.',
  operationId: 'books.volumes.associated.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      association: z
        .enum(['ASSOCIATION_UNDEFINED', 'end-of-sample', 'end-of-volume', 'related-for-play'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Association type.',
            in: 'query',
            name: 'association',
            schema: {
              enum: ['ASSOCIATION_UNDEFINED', 'end-of-sample', 'end-of-volume', 'related-for-play'],
              type: 'string',
            },
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxAllowedMaturityRating: z
        .enum(['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.',
            in: 'query',
            name: 'maxAllowedMaturityRating',
            schema: {
              enum: ['MAX_ALLOWED_MATURITY_RATING_UNDEFINED', 'MATURE', 'not-mature'],
              type: 'string',
            },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the source volume.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesVolumeIdLayersLayerIdRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/{volumeId}/layers/{layerId}',
  tags: ['layers'],
  description: 'Gets the volume annotations for a volume and layer.',
  operationId: 'books.layers.volumeAnnotations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      contentVersion: z
        .string()
        .openapi({
          param: {
            description: 'The content version for the requested volume.',
            in: 'query',
            name: 'contentVersion',
            required: true,
            schema: { type: 'string' },
          },
        }),
      endOffset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The end offset to end retrieving data from.',
            in: 'query',
            name: 'endOffset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      endPosition: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The end position to end retrieving data from.',
            in: 'query',
            name: 'endPosition',
            schema: { type: 'string' },
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 200, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.',
            in: 'query',
            name: 'showDeleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startOffset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The start offset to start retrieving data from.',
            in: 'query',
            name: 'startOffset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startPosition: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The start position to start retrieving data from.',
            in: 'query',
            name: 'startPosition',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updatedMax: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).',
            in: 'query',
            name: 'updatedMax',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updatedMin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).',
            in: 'query',
            name: 'updatedMin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      volumeAnnotationsVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The version of the volume annotations that you are requesting.',
            in: 'query',
            name: 'volumeAnnotationsVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'The volume to retrieve annotations for.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      layerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID for the layer to get the annotations.',
            in: 'path',
            name: 'layerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumeannotationsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesVolumeIdLayersLayerIdAnnotationsAnnotationIdRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}',
  tags: ['layers'],
  description: 'Gets the volume annotation.',
  operationId: 'books.layers.volumeAnnotations.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'The volume to retrieve annotations for.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      layerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID for the layer to get the annotations.',
            in: 'path',
            name: 'layerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      annotationId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the volume annotation to retrieve.',
            in: 'path',
            name: 'annotationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VolumeannotationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesVolumeIdLayersLayerIdDataRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/{volumeId}/layers/{layerId}/data',
  tags: ['layers'],
  description: 'Gets the annotation data for a volume and layer.',
  operationId: 'books.layers.annotationData.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      contentVersion: z
        .string()
        .openapi({
          param: {
            description: 'The content version for the requested volume.',
            in: 'query',
            name: 'contentVersion',
            required: true,
            schema: { type: 'string' },
          },
        }),
      annotationDataId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.',
            explode: true,
            in: 'query',
            name: 'annotationDataId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      h: z
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
              'The requested pixel height for any images. If height is provided width must also be provided.',
            in: 'query',
            name: 'h',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 200, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scale: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The requested scale for the image.',
            in: 'query',
            name: 'scale',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updatedMax: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).',
            in: 'query',
            name: 'updatedMax',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updatedMin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).',
            in: 'query',
            name: 'updatedMin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      w: z
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
              'The requested pixel width for any images. If width is provided height must also be provided.',
            in: 'query',
            name: 'w',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'The volume to retrieve annotation data for.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      layerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID for the layer to get the annotation data.',
            in: 'path',
            name: 'layerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AnnotationsdataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesVolumeIdLayersLayerIdDataAnnotationDataIdRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}',
  tags: ['layers'],
  description: 'Gets the annotation data.',
  operationId: 'books.layers.annotationData.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      contentVersion: z
        .string()
        .openapi({
          param: {
            description: 'The content version for the volume you are trying to retrieve.',
            in: 'query',
            name: 'contentVersion',
            required: true,
            schema: { type: 'string' },
          },
        }),
      allowWebDefinitions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'For the dictionary layer. Whether or not to allow web definitions.',
            in: 'query',
            name: 'allowWebDefinitions',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      h: z
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
              'The requested pixel height for any images. If height is provided width must also be provided.',
            in: 'query',
            name: 'h',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.",
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scale: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The requested scale for the image.',
            in: 'query',
            name: 'scale',
            schema: { minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
      w: z
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
              'The requested pixel width for any images. If width is provided height must also be provided.',
            in: 'query',
            name: 'w',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'The volume to retrieve annotations for.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      layerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID for the layer to get the annotations.',
            in: 'path',
            name: 'layerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      annotationDataId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the annotation data to retrieve.',
            in: 'path',
            name: 'annotationDataId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DictionaryAnnotationdataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesVolumeIdLayersummaryRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/{volumeId}/layersummary',
  tags: ['layers'],
  description: 'List the layer summaries for a volume.',
  operationId: 'books.layers.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      contentVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The content version for the requested volume.',
            in: 'query',
            name: 'contentVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 200, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'The volume to retrieve layers for.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LayersummariesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})

export const getBooksV1VolumesVolumeIdLayersummarySummaryIdRoute = createRoute({
  method: 'get',
  path: '/books/v1/volumes/{volumeId}/layersummary/{summaryId}',
  tags: ['layers'],
  description: 'Gets the layer summary for a volume.',
  operationId: 'books.layers.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      contentVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The content version for the requested volume.',
            in: 'query',
            name: 'contentVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'String to identify the originator of this request.',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      volumeId: z
        .string()
        .openapi({
          param: {
            description: 'The volume to retrieve layers for.',
            in: 'path',
            name: 'volumeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      summaryId: z
        .string()
        .openapi({
          param: {
            description: 'The ID for the layer to get the summary for.',
            in: 'path',
            name: 'summaryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LayersummarySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/books'],
      Oauth2c: ['https://www.googleapis.com/auth/books'],
    },
  ],
})
