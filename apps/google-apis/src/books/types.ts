type BooksCloudloadingResource = {
  author?: string | undefined
  processingState?: string | undefined
  title?: string | undefined
  volumeId?: string | undefined
}
type Empty = { [x: string]: unknown }
type Metadata = {
  items?:
    | {
        download_url?: string | undefined
        encrypted_key?: string | undefined
        language?: string | undefined
        size?: string | undefined
        version?: string | undefined
      }[]
    | undefined
  kind?: string | undefined
}
type FamilyInfo = {
  kind?: string | undefined
  membership?:
    | {
        acquirePermission?: string | undefined
        ageGroup?: string | undefined
        allowedMaturityRating?: string | undefined
        isInFamily?: boolean | undefined
        role?: string | undefined
      }
    | undefined
}
type Usersettings = {
  kind?: string | undefined
  notesExport?: { folderName?: string | undefined; isEnabled?: boolean | undefined } | undefined
  notification?:
    | {
        matchMyInterests?: { opted_state?: string | undefined } | undefined
        moreFromAuthors?: { opted_state?: string | undefined } | undefined
        moreFromSeries?: { opted_state?: string | undefined } | undefined
        priceDrop?: { opted_state?: string | undefined } | undefined
        rewardExpirations?: { opted_state?: string | undefined } | undefined
      }
    | undefined
}
type DownloadAccessRestriction = {
  deviceAllowed?: boolean | undefined
  downloadsAcquired?: number | undefined
  justAcquired?: boolean | undefined
  kind?: string | undefined
  maxDownloadDevices?: number | undefined
  message?: string | undefined
  nonce?: string | undefined
  reasonCode?: string | undefined
  restricted?: boolean | undefined
  signature?: string | undefined
  source?: string | undefined
  volumeId?: string | undefined
}
type DownloadAccesses = {
  downloadAccessList?: DownloadAccessRestriction[] | undefined
  kind?: string | undefined
}
type ConcurrentAccessRestriction = {
  deviceAllowed?: boolean | undefined
  kind?: string | undefined
  maxConcurrentDevices?: number | undefined
  message?: string | undefined
  nonce?: string | undefined
  reasonCode?: string | undefined
  restricted?: boolean | undefined
  signature?: string | undefined
  source?: string | undefined
  timeWindowSeconds?: number | undefined
  volumeId?: string | undefined
}
type RequestAccessData = {
  concurrentAccess?: ConcurrentAccessRestriction | undefined
  downloadAccess?: DownloadAccessRestriction | undefined
  kind?: string | undefined
}
type ReadingPosition = {
  epubCfiPosition?: string | undefined
  gbImagePosition?: string | undefined
  gbTextPosition?: string | undefined
  kind?: string | undefined
  pdfPosition?: string | undefined
  updated?: string | undefined
  volumeId?: string | undefined
}
type Review = {
  author?: { displayName?: string | undefined } | undefined
  content?: string | undefined
  date?: string | undefined
  fullTextUrl?: string | undefined
  kind?: string | undefined
  rating?: string | undefined
  source?:
    | {
        description?: string | undefined
        extraDescription?: string | undefined
        url?: string | undefined
      }
    | undefined
  title?: string | undefined
  type?: string | undefined
  volumeId?: string | undefined
}
type Volumeseriesinfo = {
  bookDisplayNumber?: string | undefined
  kind?: string | undefined
  shortSeriesBookTitle?: string | undefined
  volumeSeries?:
    | {
        issue?:
          | { issueDisplayNumber?: string | undefined; issueOrderNumber?: number | undefined }[]
          | undefined
        orderNumber?: number | undefined
        seriesBookType?: string | undefined
        seriesId?: string | undefined
      }[]
    | undefined
}
type Volume = {
  accessInfo?:
    | {
        accessViewStatus?: string | undefined
        country?: string | undefined
        downloadAccess?: DownloadAccessRestriction | undefined
        driveImportedContentLink?: string | undefined
        embeddable?: boolean | undefined
        epub?:
          | {
              acsTokenLink?: string | undefined
              downloadLink?: string | undefined
              isAvailable?: boolean | undefined
            }
          | undefined
        explicitOfflineLicenseManagement?: boolean | undefined
        pdf?:
          | {
              acsTokenLink?: string | undefined
              downloadLink?: string | undefined
              isAvailable?: boolean | undefined
            }
          | undefined
        publicDomain?: boolean | undefined
        quoteSharingAllowed?: boolean | undefined
        textToSpeechPermission?: string | undefined
        viewOrderUrl?: string | undefined
        viewability?: string | undefined
        webReaderLink?: string | undefined
      }
    | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  layerInfo?:
    | {
        layers?:
          | { layerId?: string | undefined; volumeAnnotationsVersion?: string | undefined }[]
          | undefined
      }
    | undefined
  recommendedInfo?: { explanation?: string | undefined } | undefined
  saleInfo?:
    | {
        buyLink?: string | undefined
        country?: string | undefined
        isEbook?: boolean | undefined
        listPrice?: { amount?: number | undefined; currencyCode?: string | undefined } | undefined
        offers?:
          | {
              finskyOfferType?: number | undefined
              giftable?: boolean | undefined
              listPrice?:
                | { amountInMicros?: number | undefined; currencyCode?: string | undefined }
                | undefined
              rentalDuration?: { count?: number | undefined; unit?: string | undefined } | undefined
              retailPrice?:
                | { amountInMicros?: number | undefined; currencyCode?: string | undefined }
                | undefined
            }[]
          | undefined
        onSaleDate?: string | undefined
        retailPrice?: { amount?: number | undefined; currencyCode?: string | undefined } | undefined
        saleability?: string | undefined
      }
    | undefined
  searchInfo?: { textSnippet?: string | undefined } | undefined
  selfLink?: string | undefined
  userInfo?:
    | {
        acquiredTime?: string | undefined
        acquisitionType?: number | undefined
        copy?:
          | {
              allowedCharacterCount?: number | undefined
              limitType?: string | undefined
              remainingCharacterCount?: number | undefined
              updated?: string | undefined
            }
          | undefined
        entitlementType?: number | undefined
        familySharing?:
          | {
              familyRole?: string | undefined
              isSharingAllowed?: boolean | undefined
              isSharingDisabledByFop?: boolean | undefined
            }
          | undefined
        isFamilySharedFromUser?: boolean | undefined
        isFamilySharedToUser?: boolean | undefined
        isFamilySharingAllowed?: boolean | undefined
        isFamilySharingDisabledByFop?: boolean | undefined
        isInMyBooks?: boolean | undefined
        isPreordered?: boolean | undefined
        isPurchased?: boolean | undefined
        isUploaded?: boolean | undefined
        readingPosition?: ReadingPosition | undefined
        rentalPeriod?:
          | { endUtcSec?: string | undefined; startUtcSec?: string | undefined }
          | undefined
        rentalState?: string | undefined
        review?: Review | undefined
        updated?: string | undefined
        userUploadedVolumeInfo?: { processingState?: string | undefined } | undefined
      }
    | undefined
  volumeInfo?:
    | {
        allowAnonLogging?: boolean | undefined
        authors?: string[] | undefined
        averageRating?: number | undefined
        canonicalVolumeLink?: string | undefined
        categories?: string[] | undefined
        comicsContent?: boolean | undefined
        contentVersion?: string | undefined
        description?: string | undefined
        dimensions?:
          | {
              height?: string | undefined
              thickness?: string | undefined
              width?: string | undefined
            }
          | undefined
        imageLinks?:
          | {
              extraLarge?: string | undefined
              large?: string | undefined
              medium?: string | undefined
              small?: string | undefined
              smallThumbnail?: string | undefined
              thumbnail?: string | undefined
            }
          | undefined
        industryIdentifiers?:
          | { identifier?: string | undefined; type?: string | undefined }[]
          | undefined
        infoLink?: string | undefined
        language?: string | undefined
        mainCategory?: string | undefined
        maturityRating?: string | undefined
        pageCount?: number | undefined
        panelizationSummary?:
          | {
              containsEpubBubbles?: boolean | undefined
              containsImageBubbles?: boolean | undefined
              epubBubbleVersion?: string | undefined
              imageBubbleVersion?: string | undefined
            }
          | undefined
        previewLink?: string | undefined
        printType?: string | undefined
        printedPageCount?: number | undefined
        publishedDate?: string | undefined
        publisher?: string | undefined
        ratingsCount?: number | undefined
        readingModes?: { image?: boolean | undefined; text?: boolean | undefined } | undefined
        samplePageCount?: number | undefined
        seriesInfo?: Volumeseriesinfo | undefined
        subtitle?: string | undefined
        title?: string | undefined
      }
    | undefined
}
type Volumes = {
  items?: Volume[] | undefined
  kind?: string | undefined
  totalItems?: number | undefined
}
type BooksAnnotationsRange = {
  endOffset?: string | undefined
  endPosition?: string | undefined
  startOffset?: string | undefined
  startPosition?: string | undefined
}
type Annotation = {
  afterSelectedText?: string | undefined
  beforeSelectedText?: string | undefined
  clientVersionRanges?:
    | {
        cfiRange?: BooksAnnotationsRange | undefined
        contentVersion?: string | undefined
        gbImageRange?: BooksAnnotationsRange | undefined
        gbTextRange?: BooksAnnotationsRange | undefined
        imageCfiRange?: BooksAnnotationsRange | undefined
      }
    | undefined
  created?: string | undefined
  currentVersionRanges?:
    | {
        cfiRange?: BooksAnnotationsRange | undefined
        contentVersion?: string | undefined
        gbImageRange?: BooksAnnotationsRange | undefined
        gbTextRange?: BooksAnnotationsRange | undefined
        imageCfiRange?: BooksAnnotationsRange | undefined
      }
    | undefined
  data?: string | undefined
  deleted?: boolean | undefined
  highlightStyle?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  layerId?: string | undefined
  layerSummary?:
    | {
        allowedCharacterCount?: number | undefined
        limitType?: string | undefined
        remainingCharacterCount?: number | undefined
      }
    | undefined
  pageIds?: string[] | undefined
  selectedText?: string | undefined
  selfLink?: string | undefined
  updated?: string | undefined
  volumeId?: string | undefined
}
type Annotations = {
  items?: Annotation[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  totalItems?: number | undefined
}
type AnnotationsSummary = {
  kind?: string | undefined
  layers?:
    | {
        allowedCharacterCount?: number | undefined
        layerId?: string | undefined
        limitType?: string | undefined
        remainingCharacterCount?: number | undefined
        updated?: string | undefined
      }[]
    | undefined
}
type Bookshelf = {
  access?: string | undefined
  created?: string | undefined
  description?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  selfLink?: string | undefined
  title?: string | undefined
  updated?: string | undefined
  volumeCount?: number | undefined
  volumesLastUpdated?: string | undefined
}
type Bookshelves = { items?: Bookshelf[] | undefined; kind?: string | undefined }
type Notification = {
  body?: string | undefined
  crmExperimentIds?: string[] | undefined
  doc_id?: string | undefined
  doc_type?: string | undefined
  dont_show_notification?: boolean | undefined
  iconUrl?: string | undefined
  is_document_mature?: boolean | undefined
  kind?: string | undefined
  notificationGroup?: string | undefined
  notification_type?: string | undefined
  pcampaign_id?: string | undefined
  reason?: string | undefined
  show_notification_settings_action?: boolean | undefined
  targetUrl?: string | undefined
  timeToExpireMs?: string | undefined
  title?: string | undefined
}
type Category = {
  items?:
    | {
        badgeUrl?: string | undefined
        categoryId?: string | undefined
        name?: string | undefined
      }[]
    | undefined
  kind?: string | undefined
}
type Volume2 = {
  items?: Volume[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type Discoveryclusters = {
  clusters?:
    | {
        banner_with_content_container?:
          | {
              fillColorArgb?: string | undefined
              imageUrl?: string | undefined
              maskColorArgb?: string | undefined
              moreButtonText?: string | undefined
              moreButtonUrl?: string | undefined
              textColorArgb?: string | undefined
            }
          | undefined
        subTitle?: string | undefined
        title?: string | undefined
        totalVolumes?: number | undefined
        uid?: string | undefined
        volumes?: Volume[] | undefined
      }[]
    | undefined
  kind?: string | undefined
  totalClusters?: number | undefined
}
type Offers = {
  items?:
    | {
        artUrl?: string | undefined
        gservicesKey?: string | undefined
        id?: string | undefined
        items?:
          | {
              author?: string | undefined
              canonicalVolumeLink?: string | undefined
              coverUrl?: string | undefined
              description?: string | undefined
              title?: string | undefined
              volumeId?: string | undefined
            }[]
          | undefined
      }[]
    | undefined
  kind?: string | undefined
}
type Series = {
  kind?: string | undefined
  series?:
    | {
        bannerImageUrl?: string | undefined
        eligibleForSubscription?: boolean | undefined
        imageUrl?: string | undefined
        isComplete?: boolean | undefined
        seriesFormatType?: string | undefined
        seriesId?: string | undefined
        seriesSubscriptionReleaseInfo?:
          | {
              cancelTime?: string | undefined
              currentReleaseInfo?:
                | {
                    amountInMicros?: number | undefined
                    currencyCode?: string | undefined
                    releaseNumber?: string | undefined
                    releaseTime?: string | undefined
                  }
                | undefined
              nextReleaseInfo?:
                | {
                    amountInMicros?: number | undefined
                    currencyCode?: string | undefined
                    releaseNumber?: string | undefined
                    releaseTime?: string | undefined
                  }
                | undefined
              seriesSubscriptionType?: string | undefined
            }
          | undefined
        seriesType?: string | undefined
        subscriptionId?: string | undefined
        title?: string | undefined
      }[]
    | undefined
}
type Seriesmembership = {
  kind?: string | undefined
  member?: Volume[] | undefined
  nextPageToken?: string | undefined
}
type BooksVolumesRecommendedRateResponse = { consistency_token?: string | undefined }
type Volumeannotation = {
  annotationDataId?: string | undefined
  annotationDataLink?: string | undefined
  annotationType?: string | undefined
  contentRanges?:
    | {
        cfiRange?: BooksAnnotationsRange | undefined
        contentVersion?: string | undefined
        gbImageRange?: BooksAnnotationsRange | undefined
        gbTextRange?: BooksAnnotationsRange | undefined
      }
    | undefined
  data?: string | undefined
  deleted?: boolean | undefined
  id?: string | undefined
  kind?: string | undefined
  layerId?: string | undefined
  pageIds?: string[] | undefined
  selectedText?: string | undefined
  selfLink?: string | undefined
  updated?: string | undefined
  volumeId?: string | undefined
}
type Volumeannotations = {
  items?: Volumeannotation[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  totalItems?: number | undefined
  version?: string | undefined
}
type Geolayerdata = {
  common?:
    | {
        lang?: string | undefined
        previewImageUrl?: string | undefined
        snippet?: string | undefined
        snippetUrl?: string | undefined
        title?: string | undefined
      }
    | undefined
  geo?:
    | {
        boundary?: string[] | undefined
        cachePolicy?: string | undefined
        countryCode?: string | undefined
        latitude?: number | undefined
        longitude?: number | undefined
        mapType?: string | undefined
        viewport?:
          | {
              hi?: { latitude?: number | undefined; longitude?: number | undefined } | undefined
              lo?: { latitude?: number | undefined; longitude?: number | undefined } | undefined
            }
          | undefined
        zoom?: number | undefined
      }
    | undefined
  kind?: string | undefined
}
type GeoAnnotationdata = {
  annotationType?: string | undefined
  data?: Geolayerdata | undefined
  encodedData?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  layerId?: string | undefined
  selfLink?: string | undefined
  updated?: string | undefined
  volumeId?: string | undefined
}
type Annotationsdata = {
  items?: GeoAnnotationdata[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  totalItems?: number | undefined
}
type Dictlayerdata = {
  common?: { title?: string | undefined } | undefined
  dict?:
    | {
        source?: { attribution?: string | undefined; url?: string | undefined } | undefined
        words?:
          | {
              derivatives?:
                | {
                    source?:
                      | { attribution?: string | undefined; url?: string | undefined }
                      | undefined
                    text?: string | undefined
                  }[]
                | undefined
              examples?:
                | {
                    source?:
                      | { attribution?: string | undefined; url?: string | undefined }
                      | undefined
                    text?: string | undefined
                  }[]
                | undefined
              senses?:
                | {
                    conjugations?:
                      | { type?: string | undefined; value?: string | undefined }[]
                      | undefined
                    definitions?:
                      | {
                          definition?: string | undefined
                          examples?:
                            | {
                                source?:
                                  | { attribution?: string | undefined; url?: string | undefined }
                                  | undefined
                                text?: string | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
                    partOfSpeech?: string | undefined
                    pronunciation?: string | undefined
                    pronunciationUrl?: string | undefined
                    source?:
                      | { attribution?: string | undefined; url?: string | undefined }
                      | undefined
                    syllabification?: string | undefined
                    synonyms?:
                      | {
                          source?:
                            | { attribution?: string | undefined; url?: string | undefined }
                            | undefined
                          text?: string | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
              source?: { attribution?: string | undefined; url?: string | undefined } | undefined
            }[]
          | undefined
      }
    | undefined
  kind?: string | undefined
}
type DictionaryAnnotationdata = {
  annotationType?: string | undefined
  data?: Dictlayerdata | undefined
  encodedData?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  layerId?: string | undefined
  selfLink?: string | undefined
  updated?: string | undefined
  volumeId?: string | undefined
}
type Layersummary = {
  annotationCount?: number | undefined
  annotationTypes?: string[] | undefined
  annotationsDataLink?: string | undefined
  annotationsLink?: string | undefined
  contentVersion?: string | undefined
  dataCount?: number | undefined
  id?: string | undefined
  kind?: string | undefined
  layerId?: string | undefined
  selfLink?: string | undefined
  updated?: string | undefined
  volumeAnnotationsVersion?: string | undefined
  volumeId?: string | undefined
}
type Layersummaries = {
  items?: Layersummary[] | undefined
  kind?: string | undefined
  totalItems?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/books/v1/cloudloading/addBook': {
      $post: {
        input: {
          query: {
            drive_document_id?: string | undefined
            mime_type?: string | undefined
            name?: string | undefined
            upload_client_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: BooksCloudloadingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/cloudloading/deleteBook': {
      $post: {
        input: {
          query: {
            volumeId: string
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/cloudloading/updateBook': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BooksCloudloadingResource }
        output: BooksCloudloadingResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/dictionary/listOfflineMetadata': {
      $get: {
        input: {
          query: {
            cpksver: string
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Metadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/familysharing/getFamilyInfo': {
      $get: {
        input: {
          query: {
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: FamilyInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/familysharing/share': {
      $post: {
        input: {
          query: {
            docId?: string | undefined
            source?: string | undefined
            volumeId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/familysharing/unshare': {
      $post: {
        input: {
          query: {
            docId?: string | undefined
            source?: string | undefined
            volumeId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/myconfig/getUserSettings': {
      $get: {
        input: {
          query: {
            country?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Usersettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/myconfig/releaseDownloadAccess': {
      $post: {
        input: {
          query: {
            cpksver: string
            volumeIds: string[]
            locale?: string | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DownloadAccesses
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/myconfig/requestAccess': {
      $post: {
        input: {
          query: {
            cpksver: string
            nonce: string
            source: string
            volumeId: string
            licenseTypes?:
              | 'LICENSE_TYPES_UNDEFINED'
              | 'BOTH'
              | 'CONCURRENT'
              | 'DOWNLOAD'
              | undefined
            locale?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: RequestAccessData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/myconfig/syncVolumeLicenses': {
      $post: {
        input: {
          query: {
            cpksver: string
            nonce: string
            source: string
            features?: ('FEATURES_UNDEFINED' | 'RENTALS')[] | undefined
            includeNonComicsSeries?: boolean | undefined
            locale?: string | undefined
            showPreorders?: boolean | undefined
            volumeIds?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/myconfig/updateUserSettings': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Usersettings }
        output: Usersettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/annotations': {
      $get: {
        input: {
          query: {
            contentVersion?: string | undefined
            layerId?: string | undefined
            layerIds?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
            source?: string | undefined
            updatedMax?: string | undefined
            updatedMin?: string | undefined
            volumeId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Annotations
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            annotationId?: string | undefined
            country?: string | undefined
            showOnlySummaryInResponse?: boolean | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Annotation }
        output: Annotation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/annotations/summary': {
      $post: {
        input: {
          query: {
            layerIds: string[]
            volumeId: string
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: AnnotationsSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/annotations/:annotationId': {
      $delete: {
        input: { param: { annotationId: string } } & {
          query: {
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { annotationId: string } } & {
          query: {
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Annotation }
        output: Annotation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/bookshelves': {
      $get: {
        input: {
          query: {
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Bookshelves
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/bookshelves/:shelf': {
      $get: {
        input: { param: { shelf: string } } & {
          query: {
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Bookshelf
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/bookshelves/:shelf/addVolume': {
      $post: {
        input: { param: { shelf: string } } & {
          query: {
            volumeId: string
            reason?: 'REASON_UNDEFINED' | 'IOS_PREX' | 'IOS_SEARCH' | 'ONBOARDING' | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/bookshelves/:shelf/clearVolumes': {
      $post: {
        input: { param: { shelf: string } } & {
          query: {
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/bookshelves/:shelf/moveVolume': {
      $post: {
        input: { param: { shelf: string } } & {
          query: {
            volumeId: string
            volumePosition: number
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/bookshelves/:shelf/removeVolume': {
      $post: {
        input: { param: { shelf: string } } & {
          query: {
            volumeId: string
            reason?: 'REASON_UNDEFINED' | 'ONBOARDING' | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/bookshelves/:shelf/volumes': {
      $get: {
        input: { param: { shelf: string } } & {
          query: {
            country?: string | undefined
            maxResults?: number | undefined
            projection?: 'PROJECTION_UNDEFINED' | 'FULL' | 'LITE' | undefined
            q?: string | undefined
            showPreorders?: boolean | undefined
            source?: string | undefined
            startIndex?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/readingpositions/:volumeId': {
      $get: {
        input: { param: { volumeId: string } } & {
          query: {
            contentVersion?: string | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ReadingPosition
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/mylibrary/readingpositions/:volumeId/setPosition': {
      $post: {
        input: { param: { volumeId: string } } & {
          query: {
            position: string
            timestamp: string
            action?:
              | 'ACTION_UNDEFINED'
              | 'bookmark'
              | 'chapter'
              | 'next-page'
              | 'prev-page'
              | 'scroll'
              | 'search'
              | undefined
            contentVersion?: string | undefined
            deviceCookie?: string | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/notification/get': {
      $get: {
        input: {
          query: {
            notification_id: string
            locale?: string | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/onboarding/listCategories': {
      $get: {
        input: {
          query: {
            locale?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Category
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/onboarding/listCategoryVolumes': {
      $get: {
        input: {
          query: {
            categoryId?: string[] | undefined
            locale?: string | undefined
            maxAllowedMaturityRating?:
              | 'MAX_ALLOWED_MATURITY_RATING_UNDEFINED'
              | 'MATURE'
              | 'not-mature'
              | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volume2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/personalizedstream/get': {
      $get: {
        input: {
          query: {
            locale?: string | undefined
            maxAllowedMaturityRating?:
              | 'MAX_ALLOWED_MATURITY_RATING_UNDEFINED'
              | 'MATURE'
              | 'not-mature'
              | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Discoveryclusters
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/promooffer/accept': {
      $post: {
        input: {
          query: {
            androidId?: string | undefined
            device?: string | undefined
            manufacturer?: string | undefined
            model?: string | undefined
            offerId?: string | undefined
            product?: string | undefined
            serial?: string | undefined
            volumeId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/promooffer/dismiss': {
      $post: {
        input: {
          query: {
            androidId?: string | undefined
            device?: string | undefined
            manufacturer?: string | undefined
            model?: string | undefined
            offerId?: string | undefined
            product?: string | undefined
            serial?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/promooffer/get': {
      $get: {
        input: {
          query: {
            androidId?: string | undefined
            device?: string | undefined
            manufacturer?: string | undefined
            model?: string | undefined
            product?: string | undefined
            serial?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Offers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/series/get': {
      $get: {
        input: {
          query: {
            series_id: string[]
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Series
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/series/membership/get': {
      $get: {
        input: {
          query: {
            series_id: string
            page_size?: number | undefined
            page_token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Seriesmembership
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/users/:userId/bookshelves': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Bookshelves
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/users/:userId/bookshelves/:shelf': {
      $get: {
        input: { param: { userId: string; shelf: string } } & {
          query: {
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Bookshelf
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/users/:userId/bookshelves/:shelf/volumes': {
      $get: {
        input: { param: { userId: string; shelf: string } } & {
          query: {
            maxResults?: number | undefined
            showPreorders?: boolean | undefined
            source?: string | undefined
            startIndex?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes': {
      $get: {
        input: {
          query: {
            q: string
            download?: 'DOWNLOAD_UNDEFINED' | 'EPUB' | undefined
            filter?:
              | 'FILTER_UNDEFINED'
              | 'ebooks'
              | 'free-ebooks'
              | 'full'
              | 'paid-ebooks'
              | 'partial'
              | undefined
            langRestrict?: string | undefined
            libraryRestrict?:
              | 'LIBRARY_RESTRICT_UNDEFINED'
              | 'my-library'
              | 'no-restrict'
              | undefined
            maxAllowedMaturityRating?:
              | 'MAX_ALLOWED_MATURITY_RATING_UNDEFINED'
              | 'MATURE'
              | 'not-mature'
              | undefined
            maxResults?: number | undefined
            orderBy?: 'ORDER_BY_UNDEFINED' | 'newest' | 'relevance' | undefined
            partner?: string | undefined
            printType?: 'PRINT_TYPE_UNDEFINED' | 'ALL' | 'BOOKS' | 'MAGAZINES' | undefined
            projection?: 'PROJECTION_UNDEFINED' | 'FULL' | 'LITE' | undefined
            showPreorders?: boolean | undefined
            source?: string | undefined
            startIndex?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/mybooks': {
      $get: {
        input: {
          query: {
            acquireMethod?:
              | (
                  | 'ACQUIRE_METHOD_UNDEFINED'
                  | 'FAMILY_SHARED'
                  | 'PREORDERED'
                  | 'PREVIOUSLY_RENTED'
                  | 'PUBLIC_DOMAIN'
                  | 'PURCHASED'
                  | 'RENTED'
                  | 'SAMPLE'
                  | 'UPLOADED'
                )[]
              | undefined
            country?: string | undefined
            locale?: string | undefined
            maxResults?: number | undefined
            processingState?:
              | (
                  | 'PROCESSING_STATE_UNDEFINED'
                  | 'COMPLETED_FAILED'
                  | 'COMPLETED_SUCCESS'
                  | 'RUNNING'
                )[]
              | undefined
            source?: string | undefined
            startIndex?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/recommended': {
      $get: {
        input: {
          query: {
            locale?: string | undefined
            maxAllowedMaturityRating?:
              | 'MAX_ALLOWED_MATURITY_RATING_UNDEFINED'
              | 'MATURE'
              | 'not-mature'
              | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/recommended/rate': {
      $post: {
        input: {
          query: {
            rating: 'RATING_UNDEFINED' | 'HAVE_IT' | 'NOT_INTERESTED'
            volumeId: string
            locale?: string | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: BooksVolumesRecommendedRateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/useruploaded': {
      $get: {
        input: {
          query: {
            locale?: string | undefined
            maxResults?: number | undefined
            processingState?:
              | (
                  | 'PROCESSING_STATE_UNDEFINED'
                  | 'COMPLETED_FAILED'
                  | 'COMPLETED_SUCCESS'
                  | 'RUNNING'
                )[]
              | undefined
            source?: string | undefined
            startIndex?: number | undefined
            volumeId?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/:volumeId': {
      $get: {
        input: { param: { volumeId: string } } & {
          query: {
            country?: string | undefined
            includeNonComicsSeries?: boolean | undefined
            partner?: string | undefined
            projection?: 'PROJECTION_UNDEFINED' | 'FULL' | 'LITE' | undefined
            source?: string | undefined
            user_library_consistent_read?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volume
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/:volumeId/associated': {
      $get: {
        input: { param: { volumeId: string } } & {
          query: {
            association?:
              | 'ASSOCIATION_UNDEFINED'
              | 'end-of-sample'
              | 'end-of-volume'
              | 'related-for-play'
              | undefined
            locale?: string | undefined
            maxAllowedMaturityRating?:
              | 'MAX_ALLOWED_MATURITY_RATING_UNDEFINED'
              | 'MATURE'
              | 'not-mature'
              | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/:volumeId/layers/:layerId': {
      $get: {
        input: { param: { volumeId: string; layerId: string } } & {
          query: {
            contentVersion: string
            endOffset?: string | undefined
            endPosition?: string | undefined
            locale?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
            source?: string | undefined
            startOffset?: string | undefined
            startPosition?: string | undefined
            updatedMax?: string | undefined
            updatedMin?: string | undefined
            volumeAnnotationsVersion?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumeannotations
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/:volumeId/layers/:layerId/annotations/:annotationId': {
      $get: {
        input: { param: { volumeId: string; layerId: string; annotationId: string } } & {
          query: {
            locale?: string | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Volumeannotation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/:volumeId/layers/:layerId/data': {
      $get: {
        input: { param: { volumeId: string; layerId: string } } & {
          query: {
            contentVersion: string
            annotationDataId?: string[] | undefined
            h?: number | undefined
            locale?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            scale?: number | undefined
            source?: string | undefined
            updatedMax?: string | undefined
            updatedMin?: string | undefined
            w?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Annotationsdata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/:volumeId/layers/:layerId/data/:annotationDataId': {
      $get: {
        input: { param: { volumeId: string; layerId: string; annotationDataId: string } } & {
          query: {
            contentVersion: string
            allowWebDefinitions?: boolean | undefined
            h?: number | undefined
            locale?: string | undefined
            scale?: number | undefined
            source?: string | undefined
            w?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: DictionaryAnnotationdata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/:volumeId/layersummary': {
      $get: {
        input: { param: { volumeId: string } } & {
          query: {
            contentVersion?: string | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Layersummaries
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/books/v1/volumes/:volumeId/layersummary/:summaryId': {
      $get: {
        input: { param: { volumeId: string; summaryId: string } } & {
          query: {
            contentVersion?: string | undefined
            source?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Layersummary
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
