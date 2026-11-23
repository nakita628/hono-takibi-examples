type KidsAgeBand = 'FIVE_AND_UNDER' | 'SIX_TO_EIGHT' | 'NINE_TO_ELEVEN'
type AgeRatingDeclarationUpdateRequest = {
  data: {
    attributes?:
      | {
          alcoholTobaccoOrDrugUseOrReferences?:
            | 'NONE'
            | 'INFREQUENT_OR_MILD'
            | 'FREQUENT_OR_INTENSE'
            | undefined
          contests?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
          gambling?: boolean | undefined
          gamblingAndContests?: boolean | undefined
          gamblingSimulated?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
          horrorOrFearThemes?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
          kidsAgeBand?: KidsAgeBand | undefined
          matureOrSuggestiveThemes?:
            | 'NONE'
            | 'INFREQUENT_OR_MILD'
            | 'FREQUENT_OR_INTENSE'
            | undefined
          medicalOrTreatmentInformation?:
            | 'NONE'
            | 'INFREQUENT_OR_MILD'
            | 'FREQUENT_OR_INTENSE'
            | undefined
          profanityOrCrudeHumor?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
          seventeenPlus?: boolean | undefined
          sexualContentGraphicAndNudity?:
            | 'NONE'
            | 'INFREQUENT_OR_MILD'
            | 'FREQUENT_OR_INTENSE'
            | undefined
          sexualContentOrNudity?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
          unrestrictedWebAccess?: boolean | undefined
          violenceCartoonOrFantasy?:
            | 'NONE'
            | 'INFREQUENT_OR_MILD'
            | 'FREQUENT_OR_INTENSE'
            | undefined
          violenceRealistic?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
          violenceRealisticProlongedGraphicOrSadistic?:
            | 'NONE'
            | 'INFREQUENT_OR_MILD'
            | 'FREQUENT_OR_INTENSE'
            | undefined
        }
      | undefined
    id: string
    type: 'ageRatingDeclarations'
  }
}
type ResourceLinks = { self: string }
type AgeRatingDeclaration = {
  attributes?:
    | {
        alcoholTobaccoOrDrugUseOrReferences?:
          | 'NONE'
          | 'INFREQUENT_OR_MILD'
          | 'FREQUENT_OR_INTENSE'
          | undefined
        contests?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
        gambling?: boolean | undefined
        gamblingAndContests?: boolean | undefined
        gamblingSimulated?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
        horrorOrFearThemes?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
        kidsAgeBand?: KidsAgeBand | undefined
        matureOrSuggestiveThemes?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
        medicalOrTreatmentInformation?:
          | 'NONE'
          | 'INFREQUENT_OR_MILD'
          | 'FREQUENT_OR_INTENSE'
          | undefined
        profanityOrCrudeHumor?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
        seventeenPlus?: boolean | undefined
        sexualContentGraphicAndNudity?:
          | 'NONE'
          | 'INFREQUENT_OR_MILD'
          | 'FREQUENT_OR_INTENSE'
          | undefined
        sexualContentOrNudity?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
        unrestrictedWebAccess?: boolean | undefined
        violenceCartoonOrFantasy?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
        violenceRealistic?: 'NONE' | 'INFREQUENT_OR_MILD' | 'FREQUENT_OR_INTENSE' | undefined
        violenceRealisticProlongedGraphicOrSadistic?:
          | 'NONE'
          | 'INFREQUENT_OR_MILD'
          | 'FREQUENT_OR_INTENSE'
          | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  type: 'ageRatingDeclarations'
}
type DocumentLinks = { self: string }
type AgeRatingDeclarationResponse = { data: AgeRatingDeclaration; links: DocumentLinks }
type ErrorResponse = {
  errors?:
    | {
        code: string
        detail: string
        id?: string | undefined
        source?: { pointer?: string | undefined } | { parameter?: string | undefined } | undefined
        status: string
        title: string
      }[]
    | undefined
}
type Platform = 'IOS' | 'MAC_OS' | 'TV_OS'
type PagingInformation = { paging: { limit: number; total: number } }
type AppCategory = {
  attributes?: { platforms?: Platform[] | undefined } | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        parent?:
          | {
              data?: { id: string; type: 'appCategories' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        subcategories?:
          | {
              data?: { id: string; type: 'appCategories' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'appCategories'
}
type PagedDocumentLinks = { first?: string | undefined; next?: string | undefined; self: string }
type AppCategoriesResponse = {
  data: AppCategory[]
  included?: (AppCategory | AppCategory)[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppCategoryResponse = {
  data: AppCategory
  included?: (AppCategory | AppCategory)[] | undefined
  links: DocumentLinks
}
type AppEncryptionDeclarationState = 'IN_REVIEW' | 'APPROVED' | 'REJECTED' | 'INVALID' | 'EXPIRED'
type AppEncryptionDeclaration = {
  attributes?:
    | {
        appEncryptionDeclarationState?: AppEncryptionDeclarationState | undefined
        availableOnFrenchStore?: boolean | undefined
        codeValue?: string | undefined
        containsProprietaryCryptography?: boolean | undefined
        containsThirdPartyCryptography?: boolean | undefined
        documentName?: string | undefined
        documentType?: string | undefined
        documentUrl?: string | undefined
        exempt?: boolean | undefined
        platform?: Platform | undefined
        uploadedDate?: string | undefined
        usesEncryption?: boolean | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appEncryptionDeclarations'
}
type App = {
  attributes?:
    | {
        availableInNewTerritories?: boolean | undefined
        bundleId?: string | undefined
        contentRightsDeclaration?:
          | 'DOES_NOT_USE_THIRD_PARTY_CONTENT'
          | 'USES_THIRD_PARTY_CONTENT'
          | undefined
        isOrEverWasMadeForKids?: boolean | undefined
        name?: string | undefined
        primaryLocale?: string | undefined
        sku?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appInfos?:
          | {
              data?: { id: string; type: 'appInfos' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        appStoreVersions?:
          | {
              data?: { id: string; type: 'appStoreVersions' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        availableTerritories?:
          | {
              data?: { id: string; type: 'territories' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        betaAppLocalizations?:
          | {
              data?: { id: string; type: 'betaAppLocalizations' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        betaAppReviewDetail?:
          | {
              data?: { id: string; type: 'betaAppReviewDetails' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        betaGroups?:
          | {
              data?: { id: string; type: 'betaGroups' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        betaLicenseAgreement?:
          | {
              data?: { id: string; type: 'betaLicenseAgreements' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        builds?:
          | {
              data?: { id: string; type: 'builds' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        endUserLicenseAgreement?:
          | {
              data?: { id: string; type: 'endUserLicenseAgreements' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        gameCenterEnabledVersions?:
          | {
              data?: { id: string; type: 'gameCenterEnabledVersions' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        inAppPurchases?:
          | {
              data?: { id: string; type: 'inAppPurchases' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        preOrder?:
          | {
              data?: { id: string; type: 'appPreOrders' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        preReleaseVersions?:
          | {
              data?: { id: string; type: 'preReleaseVersions' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        prices?:
          | {
              data?: { id: string; type: 'appPrices' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'apps'
}
type AppEncryptionDeclarationsResponse = {
  data: AppEncryptionDeclaration[]
  included?: App[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppEncryptionDeclarationResponse = {
  data: AppEncryptionDeclaration
  included?: App[] | undefined
  links: DocumentLinks
}
type BetaGroup = {
  attributes?:
    | {
        createdDate?: string | undefined
        feedbackEnabled?: boolean | undefined
        isInternalGroup?: boolean | undefined
        name?: string | undefined
        publicLink?: string | undefined
        publicLinkEnabled?: boolean | undefined
        publicLinkId?: string | undefined
        publicLinkLimit?: number | undefined
        publicLinkLimitEnabled?: boolean | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        betaTesters?:
          | {
              data?: { id: string; type: 'betaTesters' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        builds?:
          | {
              data?: { id: string; type: 'builds' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'betaGroups'
}
type AppStoreVersionState =
  | 'DEVELOPER_REMOVED_FROM_SALE'
  | 'DEVELOPER_REJECTED'
  | 'IN_REVIEW'
  | 'INVALID_BINARY'
  | 'METADATA_REJECTED'
  | 'PENDING_APPLE_RELEASE'
  | 'PENDING_CONTRACT'
  | 'PENDING_DEVELOPER_RELEASE'
  | 'PREPARE_FOR_SUBMISSION'
  | 'PREORDER_READY_FOR_SALE'
  | 'PROCESSING_FOR_APP_STORE'
  | 'READY_FOR_SALE'
  | 'REJECTED'
  | 'REMOVED_FROM_SALE'
  | 'WAITING_FOR_EXPORT_COMPLIANCE'
  | 'WAITING_FOR_REVIEW'
  | 'REPLACED_WITH_NEW_VERSION'
type AppStoreVersion = {
  attributes?:
    | {
        appStoreState?: AppStoreVersionState | undefined
        copyright?: string | undefined
        createdDate?: string | undefined
        downloadable?: boolean | undefined
        earliestReleaseDate?: string | undefined
        platform?: Platform | undefined
        releaseType?: 'MANUAL' | 'AFTER_APPROVAL' | 'SCHEDULED' | undefined
        usesIdfa?: boolean | undefined
        versionString?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        ageRatingDeclaration?:
          | {
              data?: { id: string; type: 'ageRatingDeclarations' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        appStoreReviewDetail?:
          | {
              data?: { id: string; type: 'appStoreReviewDetails' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        appStoreVersionLocalizations?:
          | {
              data?: { id: string; type: 'appStoreVersionLocalizations' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        appStoreVersionPhasedRelease?:
          | {
              data?: { id: string; type: 'appStoreVersionPhasedReleases' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        appStoreVersionSubmission?:
          | {
              data?: { id: string; type: 'appStoreVersionSubmissions' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        build?:
          | {
              data?: { id: string; type: 'builds' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        idfaDeclaration?:
          | {
              data?: { id: string; type: 'idfaDeclarations' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        routingAppCoverage?:
          | {
              data?: { id: string; type: 'routingAppCoverages' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appStoreVersions'
}
type PrereleaseVersion = {
  attributes?: { platform?: Platform | undefined; version?: string | undefined } | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        builds?:
          | {
              data?: { id: string; type: 'builds' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'preReleaseVersions'
}
type BetaAppLocalization = {
  attributes?:
    | {
        description?: string | undefined
        feedbackEmail?: string | undefined
        locale?: string | undefined
        marketingUrl?: string | undefined
        privacyPolicyUrl?: string | undefined
        tvOsPrivacyPolicy?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'betaAppLocalizations'
}
type ImageAsset = {
  height?: number | undefined
  templateUrl?: string | undefined
  width?: number | undefined
}
type Build = {
  attributes?:
    | {
        expirationDate?: string | undefined
        expired?: boolean | undefined
        iconAssetToken?: ImageAsset | undefined
        minOsVersion?: string | undefined
        processingState?: 'PROCESSING' | 'FAILED' | 'INVALID' | 'VALID' | undefined
        uploadedDate?: string | undefined
        usesNonExemptEncryption?: boolean | undefined
        version?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        appEncryptionDeclaration?:
          | {
              data?: { id: string; type: 'appEncryptionDeclarations' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        appStoreVersion?:
          | {
              data?: { id: string; type: 'appStoreVersions' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        betaAppReviewSubmission?:
          | {
              data?: { id: string; type: 'betaAppReviewSubmissions' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        betaBuildLocalizations?:
          | {
              data?: { id: string; type: 'betaBuildLocalizations' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        buildBetaDetail?:
          | {
              data?: { id: string; type: 'buildBetaDetails' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        icons?:
          | {
              data?: { id: string; type: 'buildIcons' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        individualTesters?:
          | {
              data?: { id: string; type: 'betaTesters' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        preReleaseVersion?:
          | {
              data?: { id: string; type: 'preReleaseVersions' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'builds'
}
type BetaLicenseAgreement = {
  attributes?: { agreementText?: string | undefined } | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'betaLicenseAgreements'
}
type BetaAppReviewDetail = {
  attributes?:
    | {
        contactEmail?: string | undefined
        contactFirstName?: string | undefined
        contactLastName?: string | undefined
        contactPhone?: string | undefined
        demoAccountName?: string | undefined
        demoAccountPassword?: string | undefined
        demoAccountRequired?: boolean | undefined
        notes?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'betaAppReviewDetails'
}
type AppStoreAgeRating = 'FOUR_PLUS' | 'NINE_PLUS' | 'TWELVE_PLUS' | 'SEVENTEEN_PLUS'
type BrazilAgeRating = 'L' | 'TEN' | 'TWELVE' | 'FOURTEEN' | 'SIXTEEN' | 'EIGHTEEN'
type AppInfo = {
  attributes?:
    | {
        appStoreAgeRating?: AppStoreAgeRating | undefined
        appStoreState?: AppStoreVersionState | undefined
        brazilAgeRating?: BrazilAgeRating | undefined
        kidsAgeBand?: KidsAgeBand | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        ageRatingDeclaration?:
          | {
              data?: { id: string; type: 'ageRatingDeclarations' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        appInfoLocalizations?:
          | {
              data?: { id: string; type: 'appInfoLocalizations' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        primaryCategory?:
          | {
              data?: { id: string; type: 'appCategories' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        primarySubcategoryOne?:
          | {
              data?: { id: string; type: 'appCategories' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        primarySubcategoryTwo?:
          | {
              data?: { id: string; type: 'appCategories' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        secondaryCategory?:
          | {
              data?: { id: string; type: 'appCategories' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        secondarySubcategoryOne?:
          | {
              data?: { id: string; type: 'appCategories' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        secondarySubcategoryTwo?:
          | {
              data?: { id: string; type: 'appCategories' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appInfos'
}
type EndUserLicenseAgreement = {
  attributes?: { agreementText?: string | undefined } | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        territories?:
          | {
              data?: { id: string; type: 'territories' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'endUserLicenseAgreements'
}
type AppPreOrder = {
  attributes?:
    | { appReleaseDate?: string | undefined; preOrderAvailableDate?: string | undefined }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appPreOrders'
}
type AppPrice = {
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        priceTier?:
          | {
              data?: { id: string; type: 'appPriceTiers' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appPrices'
}
type Territory = {
  attributes?: { currency?: string | undefined } | undefined
  id: string
  links: ResourceLinks
  type: 'territories'
}
type InAppPurchase = {
  attributes?:
    | {
        inAppPurchaseType?:
          | 'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION'
          | 'NON_CONSUMABLE'
          | 'CONSUMABLE'
          | 'NON_RENEWING_SUBSCRIPTION'
          | 'FREE_SUBSCRIPTION'
          | undefined
        productId?: string | undefined
        referenceName?: string | undefined
        state?:
          | 'CREATED'
          | 'DEVELOPER_SIGNED_OFF'
          | 'DEVELOPER_ACTION_NEEDED'
          | 'DELETION_IN_PROGRESS'
          | 'APPROVED'
          | 'DELETED'
          | 'REMOVED_FROM_SALE'
          | 'DEVELOPER_REMOVED_FROM_SALE'
          | 'WAITING_FOR_UPLOAD'
          | 'PROCESSING_CONTENT'
          | 'REPLACED'
          | 'REJECTED'
          | 'WAITING_FOR_SCREENSHOT'
          | 'PREPARE_FOR_SUBMISSION'
          | 'MISSING_METADATA'
          | 'READY_TO_SUBMIT'
          | 'WAITING_FOR_REVIEW'
          | 'IN_REVIEW'
          | 'PENDING_DEVELOPER_RELEASE'
          | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        apps?:
          | {
              data?: { id: string; type: 'apps' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'inAppPurchases'
}
type GameCenterEnabledVersion = {
  attributes?:
    | {
        iconAsset?: ImageAsset | undefined
        platform?: Platform | undefined
        versionString?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        compatibleVersions?:
          | {
              data?: { id: string; type: 'gameCenterEnabledVersions' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'gameCenterEnabledVersions'
}
type PerfPowerMetric = {
  attributes?:
    | {
        deviceType?: string | undefined
        metricType?:
          | 'DISK'
          | 'HANG'
          | 'BATTERY'
          | 'LAUNCH'
          | 'MEMORY'
          | 'ANIMATION'
          | 'TERMINATION'
          | undefined
        platform?: 'IOS' | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  type: 'perfPowerMetrics'
}
type AppResponse = {
  data: App
  included?:
    | (
        | BetaGroup
        | AppStoreVersion
        | PrereleaseVersion
        | BetaAppLocalization
        | Build
        | BetaLicenseAgreement
        | BetaAppReviewDetail
        | AppInfo
        | EndUserLicenseAgreement
        | AppPreOrder
        | AppPrice
        | Territory
        | InAppPurchase
        | GameCenterEnabledVersion
        | PerfPowerMetric
      )[]
    | undefined
  links: DocumentLinks
}
type AppEncryptionDeclarationBuildsLinkagesRequest = { data: { id: string; type: 'builds' }[] }
type AppInfoLocalizationCreateRequest = {
  data: {
    attributes: {
      locale: string
      name?: string | undefined
      privacyPolicyText?: string | undefined
      privacyPolicyUrl?: string | undefined
      subtitle?: string | undefined
    }
    relationships: { appInfo: { data: { id: string; type: 'appInfos' } } }
    type: 'appInfoLocalizations'
  }
}
type AppInfoLocalization = {
  attributes?:
    | {
        locale?: string | undefined
        name?: string | undefined
        privacyPolicyText?: string | undefined
        privacyPolicyUrl?: string | undefined
        subtitle?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appInfo?:
          | {
              data?: { id: string; type: 'appInfos' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appInfoLocalizations'
}
type AppInfoLocalizationResponse = { data: AppInfoLocalization; links: DocumentLinks }
type AppInfoLocalizationUpdateRequest = {
  data: {
    attributes?:
      | {
          name?: string | undefined
          privacyPolicyText?: string | undefined
          privacyPolicyUrl?: string | undefined
          subtitle?: string | undefined
        }
      | undefined
    id: string
    type: 'appInfoLocalizations'
  }
}
type AppInfoResponse = {
  data: AppInfo
  included?:
    | (
        | AppInfoLocalization
        | AppCategory
        | AppCategory
        | AppCategory
        | AppCategory
        | AppCategory
        | AppCategory
      )[]
    | undefined
  links: DocumentLinks
}
type AppInfoUpdateRequest = {
  data: {
    id: string
    relationships?:
      | {
          primaryCategory?: { data?: { id: string; type: 'appCategories' } | undefined } | undefined
          primarySubcategoryOne?:
            | { data?: { id: string; type: 'appCategories' } | undefined }
            | undefined
          primarySubcategoryTwo?:
            | { data?: { id: string; type: 'appCategories' } | undefined }
            | undefined
          secondaryCategory?:
            | { data?: { id: string; type: 'appCategories' } | undefined }
            | undefined
          secondarySubcategoryOne?:
            | { data?: { id: string; type: 'appCategories' } | undefined }
            | undefined
          secondarySubcategoryTwo?:
            | { data?: { id: string; type: 'appCategories' } | undefined }
            | undefined
        }
      | undefined
    type: 'appInfos'
  }
}
type AppInfoLocalizationsResponse = {
  data: AppInfoLocalization[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppPreOrderCreateRequest = {
  data: {
    attributes?: { appReleaseDate?: string | undefined } | undefined
    relationships: { app: { data: { id: string; type: 'apps' } } }
    type: 'appPreOrders'
  }
}
type AppPreOrderResponse = { data: AppPreOrder; links: DocumentLinks }
type AppPreOrderUpdateRequest = {
  data: {
    attributes?: { appReleaseDate?: string | undefined } | undefined
    id: string
    type: 'appPreOrders'
  }
}
type PreviewType =
  | 'IPHONE_65'
  | 'IPHONE_58'
  | 'IPHONE_55'
  | 'IPHONE_47'
  | 'IPHONE_40'
  | 'IPHONE_35'
  | 'IPAD_PRO_3GEN_129'
  | 'IPAD_PRO_3GEN_11'
  | 'IPAD_PRO_129'
  | 'IPAD_105'
  | 'IPAD_97'
  | 'DESKTOP'
  | 'WATCH_SERIES_4'
  | 'WATCH_SERIES_3'
  | 'APPLE_TV'
type AppPreviewSetCreateRequest = {
  data: {
    attributes: { previewType: PreviewType }
    relationships: {
      appStoreVersionLocalization: { data: { id: string; type: 'appStoreVersionLocalizations' } }
    }
    type: 'appPreviewSets'
  }
}
type AppPreviewSet = {
  attributes?: { previewType?: PreviewType | undefined } | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appPreviews?:
          | {
              data?: { id: string; type: 'appPreviews' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        appStoreVersionLocalization?:
          | {
              data?: { id: string; type: 'appStoreVersionLocalizations' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appPreviewSets'
}
type AppMediaStateError = { code?: string | undefined; description?: string | undefined }
type AppMediaAssetState = {
  errors?: AppMediaStateError[] | undefined
  state?: 'AWAITING_UPLOAD' | 'UPLOAD_COMPLETE' | 'COMPLETE' | 'FAILED' | undefined
  warnings?: AppMediaStateError[] | undefined
}
type UploadOperationHeader = { name?: string | undefined; value?: string | undefined }
type UploadOperation = {
  length?: number | undefined
  method?: string | undefined
  offset?: number | undefined
  requestHeaders?: UploadOperationHeader[] | undefined
  url?: string | undefined
}
type AppPreview = {
  attributes?:
    | {
        assetDeliveryState?: AppMediaAssetState | undefined
        fileName?: string | undefined
        fileSize?: number | undefined
        mimeType?: string | undefined
        previewFrameTimeCode?: string | undefined
        previewImage?: ImageAsset | undefined
        sourceFileChecksum?: string | undefined
        uploadOperations?: UploadOperation[] | undefined
        videoUrl?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appPreviewSet?:
          | {
              data?: { id: string; type: 'appPreviewSets' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appPreviews'
}
type AppPreviewSetResponse = {
  data: AppPreviewSet
  included?: AppPreview[] | undefined
  links: DocumentLinks
}
type AppPreviewsResponse = {
  data: AppPreview[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppPreviewSetAppPreviewsLinkagesResponse = {
  data: { id: string; type: 'appPreviews' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppPreviewSetAppPreviewsLinkagesRequest = { data: { id: string; type: 'appPreviews' }[] }
type AppPreviewCreateRequest = {
  data: {
    attributes: {
      fileName: string
      fileSize: number
      mimeType?: string | undefined
      previewFrameTimeCode?: string | undefined
    }
    relationships: { appPreviewSet: { data: { id: string; type: 'appPreviewSets' } } }
    type: 'appPreviews'
  }
}
type AppPreviewResponse = { data: AppPreview; links: DocumentLinks }
type AppPreviewUpdateRequest = {
  data: {
    attributes?:
      | {
          previewFrameTimeCode?: string | undefined
          sourceFileChecksum?: string | undefined
          uploaded?: boolean | undefined
        }
      | undefined
    id: string
    type: 'appPreviews'
  }
}
type AppPricePoint = {
  attributes?: { customerPrice?: string | undefined; proceeds?: string | undefined } | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        priceTier?:
          | {
              data?: { id: string; type: 'appPriceTiers' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        territory?:
          | {
              data?: { id: string; type: 'territories' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appPricePoints'
}
type AppPricePointsResponse = {
  data: AppPricePoint[]
  included?: Territory[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppPricePointResponse = {
  data: AppPricePoint
  included?: Territory[] | undefined
  links: DocumentLinks
}
type TerritoryResponse = { data: Territory; links: DocumentLinks }
type AppPriceTier = {
  id: string
  links: ResourceLinks
  relationships?:
    | {
        pricePoints?:
          | {
              data?: { id: string; type: 'appPricePoints' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'appPriceTiers'
}
type AppPriceTiersResponse = {
  data: AppPriceTier[]
  included?: AppPricePoint[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppPriceTierResponse = {
  data: AppPriceTier
  included?: AppPricePoint[] | undefined
  links: DocumentLinks
}
type AppPriceResponse = { data: AppPrice; links: DocumentLinks }
type ScreenshotDisplayType =
  | 'APP_IPHONE_65'
  | 'APP_IPHONE_58'
  | 'APP_IPHONE_55'
  | 'APP_IPHONE_47'
  | 'APP_IPHONE_40'
  | 'APP_IPHONE_35'
  | 'APP_IPAD_PRO_3GEN_129'
  | 'APP_IPAD_PRO_3GEN_11'
  | 'APP_IPAD_PRO_129'
  | 'APP_IPAD_105'
  | 'APP_IPAD_97'
  | 'APP_DESKTOP'
  | 'APP_WATCH_SERIES_4'
  | 'APP_WATCH_SERIES_3'
  | 'APP_APPLE_TV'
  | 'IMESSAGE_APP_IPHONE_65'
  | 'IMESSAGE_APP_IPHONE_58'
  | 'IMESSAGE_APP_IPHONE_55'
  | 'IMESSAGE_APP_IPHONE_47'
  | 'IMESSAGE_APP_IPHONE_40'
  | 'IMESSAGE_APP_IPAD_PRO_3GEN_129'
  | 'IMESSAGE_APP_IPAD_PRO_3GEN_11'
  | 'IMESSAGE_APP_IPAD_PRO_129'
  | 'IMESSAGE_APP_IPAD_105'
  | 'IMESSAGE_APP_IPAD_97'
type AppScreenshotSetCreateRequest = {
  data: {
    attributes: { screenshotDisplayType: ScreenshotDisplayType }
    relationships: {
      appStoreVersionLocalization: { data: { id: string; type: 'appStoreVersionLocalizations' } }
    }
    type: 'appScreenshotSets'
  }
}
type AppScreenshotSet = {
  attributes?: { screenshotDisplayType?: ScreenshotDisplayType | undefined } | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appScreenshots?:
          | {
              data?: { id: string; type: 'appScreenshots' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        appStoreVersionLocalization?:
          | {
              data?: { id: string; type: 'appStoreVersionLocalizations' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appScreenshotSets'
}
type AppScreenshot = {
  attributes?:
    | {
        assetDeliveryState?: AppMediaAssetState | undefined
        assetToken?: string | undefined
        assetType?: string | undefined
        fileName?: string | undefined
        fileSize?: number | undefined
        imageAsset?: ImageAsset | undefined
        sourceFileChecksum?: string | undefined
        uploadOperations?: UploadOperation[] | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appScreenshotSet?:
          | {
              data?: { id: string; type: 'appScreenshotSets' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appScreenshots'
}
type AppScreenshotSetResponse = {
  data: AppScreenshotSet
  included?: AppScreenshot[] | undefined
  links: DocumentLinks
}
type AppScreenshotsResponse = {
  data: AppScreenshot[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppScreenshotSetAppScreenshotsLinkagesResponse = {
  data: { id: string; type: 'appScreenshots' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppScreenshotSetAppScreenshotsLinkagesRequest = {
  data: { id: string; type: 'appScreenshots' }[]
}
type AppScreenshotCreateRequest = {
  data: {
    attributes: { fileName: string; fileSize: number }
    relationships: { appScreenshotSet: { data: { id: string; type: 'appScreenshotSets' } } }
    type: 'appScreenshots'
  }
}
type AppScreenshotResponse = { data: AppScreenshot; links: DocumentLinks }
type AppScreenshotUpdateRequest = {
  data: {
    attributes?:
      | { sourceFileChecksum?: string | undefined; uploaded?: boolean | undefined }
      | undefined
    id: string
    type: 'appScreenshots'
  }
}
type AppStoreReviewAttachmentCreateRequest = {
  data: {
    attributes: { fileName: string; fileSize: number }
    relationships: { appStoreReviewDetail: { data: { id: string; type: 'appStoreReviewDetails' } } }
    type: 'appStoreReviewAttachments'
  }
}
type AppStoreReviewAttachment = {
  attributes?:
    | {
        assetDeliveryState?: AppMediaAssetState | undefined
        fileName?: string | undefined
        fileSize?: number | undefined
        sourceFileChecksum?: string | undefined
        uploadOperations?: UploadOperation[] | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appStoreReviewDetail?:
          | {
              data?: { id: string; type: 'appStoreReviewDetails' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appStoreReviewAttachments'
}
type AppStoreReviewAttachmentResponse = { data: AppStoreReviewAttachment; links: DocumentLinks }
type AppStoreReviewAttachmentUpdateRequest = {
  data: {
    attributes?:
      | { sourceFileChecksum?: string | undefined; uploaded?: boolean | undefined }
      | undefined
    id: string
    type: 'appStoreReviewAttachments'
  }
}
type AppStoreReviewDetailCreateRequest = {
  data: {
    attributes?:
      | {
          contactEmail?: string | undefined
          contactFirstName?: string | undefined
          contactLastName?: string | undefined
          contactPhone?: string | undefined
          demoAccountName?: string | undefined
          demoAccountPassword?: string | undefined
          demoAccountRequired?: boolean | undefined
          notes?: string | undefined
        }
      | undefined
    relationships: { appStoreVersion: { data: { id: string; type: 'appStoreVersions' } } }
    type: 'appStoreReviewDetails'
  }
}
type AppStoreReviewDetail = {
  attributes?:
    | {
        contactEmail?: string | undefined
        contactFirstName?: string | undefined
        contactLastName?: string | undefined
        contactPhone?: string | undefined
        demoAccountName?: string | undefined
        demoAccountPassword?: string | undefined
        demoAccountRequired?: boolean | undefined
        notes?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appStoreReviewAttachments?:
          | {
              data?: { id: string; type: 'appStoreReviewAttachments' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        appStoreVersion?:
          | {
              data?: { id: string; type: 'appStoreVersions' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appStoreReviewDetails'
}
type AppStoreReviewDetailResponse = {
  data: AppStoreReviewDetail
  included?: AppStoreReviewAttachment[] | undefined
  links: DocumentLinks
}
type AppStoreReviewDetailUpdateRequest = {
  data: {
    attributes?:
      | {
          contactEmail?: string | undefined
          contactFirstName?: string | undefined
          contactLastName?: string | undefined
          contactPhone?: string | undefined
          demoAccountName?: string | undefined
          demoAccountPassword?: string | undefined
          demoAccountRequired?: boolean | undefined
          notes?: string | undefined
        }
      | undefined
    id: string
    type: 'appStoreReviewDetails'
  }
}
type AppStoreReviewAttachmentsResponse = {
  data: AppStoreReviewAttachment[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppStoreVersionLocalizationCreateRequest = {
  data: {
    attributes: {
      description?: string | undefined
      keywords?: string | undefined
      locale: string
      marketingUrl?: string | undefined
      promotionalText?: string | undefined
      supportUrl?: string | undefined
      whatsNew?: string | undefined
    }
    relationships: { appStoreVersion: { data: { id: string; type: 'appStoreVersions' } } }
    type: 'appStoreVersionLocalizations'
  }
}
type AppStoreVersionLocalization = {
  attributes?:
    | {
        description?: string | undefined
        keywords?: string | undefined
        locale?: string | undefined
        marketingUrl?: string | undefined
        promotionalText?: string | undefined
        supportUrl?: string | undefined
        whatsNew?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appPreviewSets?:
          | {
              data?: { id: string; type: 'appPreviewSets' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        appScreenshotSets?:
          | {
              data?: { id: string; type: 'appScreenshotSets' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        appStoreVersion?:
          | {
              data?: { id: string; type: 'appStoreVersions' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appStoreVersionLocalizations'
}
type AppStoreVersionLocalizationResponse = {
  data: AppStoreVersionLocalization
  included?: (AppScreenshotSet | AppPreviewSet)[] | undefined
  links: DocumentLinks
}
type AppStoreVersionLocalizationUpdateRequest = {
  data: {
    attributes?:
      | {
          description?: string | undefined
          keywords?: string | undefined
          marketingUrl?: string | undefined
          promotionalText?: string | undefined
          supportUrl?: string | undefined
          whatsNew?: string | undefined
        }
      | undefined
    id: string
    type: 'appStoreVersionLocalizations'
  }
}
type AppPreviewSetsResponse = {
  data: AppPreviewSet[]
  included?: AppPreview[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppScreenshotSetsResponse = {
  data: AppScreenshotSet[]
  included?: AppScreenshot[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type PhasedReleaseState = 'INACTIVE' | 'ACTIVE' | 'PAUSED' | 'COMPLETE'
type AppStoreVersionPhasedReleaseCreateRequest = {
  data: {
    attributes?: { phasedReleaseState?: PhasedReleaseState | undefined } | undefined
    relationships: { appStoreVersion: { data: { id: string; type: 'appStoreVersions' } } }
    type: 'appStoreVersionPhasedReleases'
  }
}
type AppStoreVersionPhasedRelease = {
  attributes?:
    | {
        currentDayNumber?: number | undefined
        phasedReleaseState?: PhasedReleaseState | undefined
        startDate?: string | undefined
        totalPauseDuration?: number | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  type: 'appStoreVersionPhasedReleases'
}
type AppStoreVersionPhasedReleaseResponse = {
  data: AppStoreVersionPhasedRelease
  links: DocumentLinks
}
type AppStoreVersionPhasedReleaseUpdateRequest = {
  data: {
    attributes?: { phasedReleaseState?: PhasedReleaseState | undefined } | undefined
    id: string
    type: 'appStoreVersionPhasedReleases'
  }
}
type AppStoreVersionSubmissionCreateRequest = {
  data: {
    relationships: { appStoreVersion: { data: { id: string; type: 'appStoreVersions' } } }
    type: 'appStoreVersionSubmissions'
  }
}
type AppStoreVersionSubmission = {
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appStoreVersion?:
          | {
              data?: { id: string; type: 'appStoreVersions' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'appStoreVersionSubmissions'
}
type AppStoreVersionSubmissionResponse = { data: AppStoreVersionSubmission; links: DocumentLinks }
type AppStoreVersionCreateRequest = {
  data: {
    attributes: {
      copyright?: string | undefined
      earliestReleaseDate?: string | undefined
      platform: Platform
      releaseType?: 'MANUAL' | 'AFTER_APPROVAL' | 'SCHEDULED' | undefined
      usesIdfa?: boolean | undefined
      versionString: string
    }
    relationships: {
      app: { data: { id: string; type: 'apps' } }
      build?: { data?: { id: string; type: 'builds' } | undefined } | undefined
    }
    type: 'appStoreVersions'
  }
}
type RoutingAppCoverage = {
  attributes?:
    | {
        assetDeliveryState?: AppMediaAssetState | undefined
        fileName?: string | undefined
        fileSize?: number | undefined
        sourceFileChecksum?: string | undefined
        uploadOperations?: UploadOperation[] | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appStoreVersion?:
          | {
              data?: { id: string; type: 'appStoreVersions' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'routingAppCoverages'
}
type IdfaDeclaration = {
  attributes?:
    | {
        attributesActionWithPreviousAd?: boolean | undefined
        attributesAppInstallationToPreviousAd?: boolean | undefined
        honorsLimitedAdTracking?: boolean | undefined
        servesAds?: boolean | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        appStoreVersion?:
          | {
              data?: { id: string; type: 'appStoreVersions' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'idfaDeclarations'
}
type AppStoreVersionResponse = {
  data: AppStoreVersion
  included?:
    | (
        | AgeRatingDeclaration
        | AppStoreVersionLocalization
        | Build
        | AppStoreVersionPhasedRelease
        | RoutingAppCoverage
        | AppStoreReviewDetail
        | AppStoreVersionSubmission
        | IdfaDeclaration
      )[]
    | undefined
  links: DocumentLinks
}
type AppStoreVersionUpdateRequest = {
  data: {
    attributes?:
      | {
          copyright?: string | undefined
          downloadable?: boolean | undefined
          earliestReleaseDate?: string | undefined
          releaseType?: 'MANUAL' | 'AFTER_APPROVAL' | 'SCHEDULED' | undefined
          usesIdfa?: boolean | undefined
          versionString?: string | undefined
        }
      | undefined
    id: string
    relationships?:
      | { build?: { data?: { id: string; type: 'builds' } | undefined } | undefined }
      | undefined
    type: 'appStoreVersions'
  }
}
type AppStoreVersionLocalizationsResponse = {
  data: AppStoreVersionLocalization[]
  included?: (AppScreenshotSet | AppPreviewSet)[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaInviteType = 'EMAIL' | 'PUBLIC_LINK'
type BetaTester = {
  attributes?:
    | {
        email?: string | undefined
        firstName?: string | undefined
        inviteType?: BetaInviteType | undefined
        lastName?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        apps?:
          | {
              data?: { id: string; type: 'apps' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        betaGroups?:
          | {
              data?: { id: string; type: 'betaGroups' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        builds?:
          | {
              data?: { id: string; type: 'builds' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'betaTesters'
}
type BetaBuildLocalization = {
  attributes?: { locale?: string | undefined; whatsNew?: string | undefined } | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        build?:
          | {
              data?: { id: string; type: 'builds' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'betaBuildLocalizations'
}
type BetaReviewState = 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED'
type BetaAppReviewSubmission = {
  attributes?: { betaReviewState?: BetaReviewState | undefined } | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        build?:
          | {
              data?: { id: string; type: 'builds' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'betaAppReviewSubmissions'
}
type ExternalBetaState =
  | 'PROCESSING'
  | 'PROCESSING_EXCEPTION'
  | 'MISSING_EXPORT_COMPLIANCE'
  | 'READY_FOR_BETA_TESTING'
  | 'IN_BETA_TESTING'
  | 'EXPIRED'
  | 'READY_FOR_BETA_SUBMISSION'
  | 'IN_EXPORT_COMPLIANCE_REVIEW'
  | 'WAITING_FOR_BETA_REVIEW'
  | 'IN_BETA_REVIEW'
  | 'BETA_REJECTED'
  | 'BETA_APPROVED'
type InternalBetaState =
  | 'PROCESSING'
  | 'PROCESSING_EXCEPTION'
  | 'MISSING_EXPORT_COMPLIANCE'
  | 'READY_FOR_BETA_TESTING'
  | 'IN_BETA_TESTING'
  | 'EXPIRED'
  | 'IN_EXPORT_COMPLIANCE_REVIEW'
type BuildBetaDetail = {
  attributes?:
    | {
        autoNotifyEnabled?: boolean | undefined
        externalBuildState?: ExternalBetaState | undefined
        internalBuildState?: InternalBetaState | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        build?:
          | {
              data?: { id: string; type: 'builds' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
      }
    | undefined
  type: 'buildBetaDetails'
}
type IconAssetType =
  | 'APP_STORE'
  | 'MESSAGES_APP_STORE'
  | 'WATCH_APP_STORE'
  | 'TV_OS_HOME_SCREEN'
  | 'TV_OS_TOP_SHELF'
type BuildIcon = {
  attributes?:
    | { iconAsset?: ImageAsset | undefined; iconType?: IconAssetType | undefined }
    | undefined
  id: string
  links: ResourceLinks
  type: 'buildIcons'
}
type DiagnosticSignature = {
  attributes?:
    | {
        diagnosticType?: 'DISK_WRITES' | undefined
        signature?: string | undefined
        weight?: number | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  type: 'diagnosticSignatures'
}
type BuildResponse = {
  data: Build
  included?:
    | (
        | PrereleaseVersion
        | BetaTester
        | BetaBuildLocalization
        | AppEncryptionDeclaration
        | BetaAppReviewSubmission
        | App
        | BuildBetaDetail
        | AppStoreVersion
        | BuildIcon
        | PerfPowerMetric
        | DiagnosticSignature
      )[]
    | undefined
  links: DocumentLinks
}
type IdfaDeclarationResponse = { data: IdfaDeclaration; links: DocumentLinks }
type AppStoreVersionBuildLinkageResponse = {
  data: { id: string; type: 'builds' }
  links: DocumentLinks
}
type AppStoreVersionBuildLinkageRequest = { data: { id: string; type: 'builds' } }
type RoutingAppCoverageResponse = { data: RoutingAppCoverage; links: DocumentLinks }
type AppsResponse = {
  data: App[]
  included?:
    | (
        | BetaGroup
        | AppStoreVersion
        | PrereleaseVersion
        | BetaAppLocalization
        | Build
        | BetaLicenseAgreement
        | BetaAppReviewDetail
        | AppInfo
        | EndUserLicenseAgreement
        | AppPreOrder
        | AppPrice
        | Territory
        | InAppPurchase
        | GameCenterEnabledVersion
        | PerfPowerMetric
      )[]
    | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppUpdateRequest = {
  data: {
    attributes?:
      | {
          availableInNewTerritories?: boolean | undefined
          bundleId?: string | undefined
          contentRightsDeclaration?:
            | 'DOES_NOT_USE_THIRD_PARTY_CONTENT'
            | 'USES_THIRD_PARTY_CONTENT'
            | undefined
          primaryLocale?: string | undefined
        }
      | undefined
    id: string
    relationships?:
      | {
          availableTerritories?:
            | { data?: { id: string; type: 'territories' }[] | undefined }
            | undefined
          prices?: { data?: { id: string; type: 'appPrices' }[] | undefined } | undefined
        }
      | undefined
    type: 'apps'
  }
}
type AppInfosResponse = {
  data: AppInfo[]
  included?:
    | (
        | AppInfoLocalization
        | AppCategory
        | AppCategory
        | AppCategory
        | AppCategory
        | AppCategory
        | AppCategory
      )[]
    | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppStoreVersionsResponse = {
  data: AppStoreVersion[]
  included?:
    | (
        | AgeRatingDeclaration
        | AppStoreVersionLocalization
        | Build
        | AppStoreVersionPhasedRelease
        | RoutingAppCoverage
        | AppStoreReviewDetail
        | AppStoreVersionSubmission
        | IdfaDeclaration
      )[]
    | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type TerritoriesResponse = {
  data: Territory[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaAppLocalizationsResponse = {
  data: BetaAppLocalization[]
  included?: App[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaAppReviewDetailResponse = {
  data: BetaAppReviewDetail
  included?: App[] | undefined
  links: DocumentLinks
}
type BetaGroupsResponse = {
  data: BetaGroup[]
  included?: (App | Build | BetaTester)[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaLicenseAgreementResponse = {
  data: BetaLicenseAgreement
  included?: App[] | undefined
  links: DocumentLinks
}
type BuildsResponse = {
  data: Build[]
  included?:
    | (
        | PrereleaseVersion
        | BetaTester
        | BetaBuildLocalization
        | AppEncryptionDeclaration
        | BetaAppReviewSubmission
        | App
        | BuildBetaDetail
        | AppStoreVersion
        | BuildIcon
        | PerfPowerMetric
        | DiagnosticSignature
      )[]
    | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type EndUserLicenseAgreementResponse = {
  data: EndUserLicenseAgreement
  included?: Territory[] | undefined
  links: DocumentLinks
}
type GameCenterEnabledVersionsResponse = {
  data: GameCenterEnabledVersion[]
  included?: GameCenterEnabledVersion[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type InAppPurchasesResponse = {
  data: InAppPurchase[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type PerfPowerMetricsResponse = {
  data: PerfPowerMetric[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type PreReleaseVersionsResponse = {
  data: PrereleaseVersion[]
  included?: (Build | App)[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppPricesResponse = {
  data: AppPrice[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type AppBetaTestersLinkagesRequest = { data: { id: string; type: 'betaTesters' }[] }
type BetaAppLocalizationCreateRequest = {
  data: {
    attributes: {
      description?: string | undefined
      feedbackEmail?: string | undefined
      locale: string
      marketingUrl?: string | undefined
      privacyPolicyUrl?: string | undefined
      tvOsPrivacyPolicy?: string | undefined
    }
    relationships: { app: { data: { id: string; type: 'apps' } } }
    type: 'betaAppLocalizations'
  }
}
type BetaAppLocalizationResponse = {
  data: BetaAppLocalization
  included?: App[] | undefined
  links: DocumentLinks
}
type BetaAppLocalizationUpdateRequest = {
  data: {
    attributes?:
      | {
          description?: string | undefined
          feedbackEmail?: string | undefined
          marketingUrl?: string | undefined
          privacyPolicyUrl?: string | undefined
          tvOsPrivacyPolicy?: string | undefined
        }
      | undefined
    id: string
    type: 'betaAppLocalizations'
  }
}
type BetaAppReviewDetailsResponse = {
  data: BetaAppReviewDetail[]
  included?: App[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaAppReviewDetailUpdateRequest = {
  data: {
    attributes?:
      | {
          contactEmail?: string | undefined
          contactFirstName?: string | undefined
          contactLastName?: string | undefined
          contactPhone?: string | undefined
          demoAccountName?: string | undefined
          demoAccountPassword?: string | undefined
          demoAccountRequired?: boolean | undefined
          notes?: string | undefined
        }
      | undefined
    id: string
    type: 'betaAppReviewDetails'
  }
}
type BetaAppReviewSubmissionsResponse = {
  data: BetaAppReviewSubmission[]
  included?: Build[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaAppReviewSubmissionCreateRequest = {
  data: {
    relationships: { build: { data: { id: string; type: 'builds' } } }
    type: 'betaAppReviewSubmissions'
  }
}
type BetaAppReviewSubmissionResponse = {
  data: BetaAppReviewSubmission
  included?: Build[] | undefined
  links: DocumentLinks
}
type BetaBuildLocalizationsResponse = {
  data: BetaBuildLocalization[]
  included?: Build[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaBuildLocalizationCreateRequest = {
  data: {
    attributes: { locale: string; whatsNew?: string | undefined }
    relationships: { build: { data: { id: string; type: 'builds' } } }
    type: 'betaBuildLocalizations'
  }
}
type BetaBuildLocalizationResponse = {
  data: BetaBuildLocalization
  included?: Build[] | undefined
  links: DocumentLinks
}
type BetaBuildLocalizationUpdateRequest = {
  data: {
    attributes?: { whatsNew?: string | undefined } | undefined
    id: string
    type: 'betaBuildLocalizations'
  }
}
type BetaGroupCreateRequest = {
  data: {
    attributes: {
      feedbackEnabled?: boolean | undefined
      name: string
      publicLinkEnabled?: boolean | undefined
      publicLinkLimit?: number | undefined
      publicLinkLimitEnabled?: boolean | undefined
    }
    relationships: {
      app: { data: { id: string; type: 'apps' } }
      betaTesters?: { data?: { id: string; type: 'betaTesters' }[] | undefined } | undefined
      builds?: { data?: { id: string; type: 'builds' }[] | undefined } | undefined
    }
    type: 'betaGroups'
  }
}
type BetaGroupResponse = {
  data: BetaGroup
  included?: (App | Build | BetaTester)[] | undefined
  links: DocumentLinks
}
type BetaGroupUpdateRequest = {
  data: {
    attributes?:
      | {
          feedbackEnabled?: boolean | undefined
          name?: string | undefined
          publicLinkEnabled?: boolean | undefined
          publicLinkLimit?: number | undefined
          publicLinkLimitEnabled?: boolean | undefined
        }
      | undefined
    id: string
    type: 'betaGroups'
  }
}
type BetaTestersResponse = {
  data: BetaTester[]
  included?: (App | BetaGroup | Build)[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaGroupBetaTestersLinkagesRequest = { data: { id: string; type: 'betaTesters' }[] }
type BetaGroupBetaTestersLinkagesResponse = {
  data: { id: string; type: 'betaTesters' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaGroupBuildsLinkagesRequest = { data: { id: string; type: 'builds' }[] }
type BetaGroupBuildsLinkagesResponse = {
  data: { id: string; type: 'builds' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaLicenseAgreementsResponse = {
  data: BetaLicenseAgreement[]
  included?: App[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaLicenseAgreementUpdateRequest = {
  data: {
    attributes?: { agreementText?: string | undefined } | undefined
    id: string
    type: 'betaLicenseAgreements'
  }
}
type BetaTesterInvitationCreateRequest = {
  data: {
    relationships: {
      app: { data: { id: string; type: 'apps' } }
      betaTester: { data: { id: string; type: 'betaTesters' } }
    }
    type: 'betaTesterInvitations'
  }
}
type BetaTesterInvitation = { id: string; links: ResourceLinks; type: 'betaTesterInvitations' }
type BetaTesterInvitationResponse = { data: BetaTesterInvitation; links: DocumentLinks }
type BetaTesterCreateRequest = {
  data: {
    attributes: { email: string; firstName?: string | undefined; lastName?: string | undefined }
    relationships?:
      | {
          betaGroups?: { data?: { id: string; type: 'betaGroups' }[] | undefined } | undefined
          builds?: { data?: { id: string; type: 'builds' }[] | undefined } | undefined
        }
      | undefined
    type: 'betaTesters'
  }
}
type BetaTesterResponse = {
  data: BetaTester
  included?: (App | BetaGroup | Build)[] | undefined
  links: DocumentLinks
}
type BetaTesterAppsLinkagesRequest = { data: { id: string; type: 'apps' }[] }
type BetaTesterAppsLinkagesResponse = {
  data: { id: string; type: 'apps' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaTesterBetaGroupsLinkagesRequest = { data: { id: string; type: 'betaGroups' }[] }
type BetaTesterBetaGroupsLinkagesResponse = {
  data: { id: string; type: 'betaGroups' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BetaTesterBuildsLinkagesRequest = { data: { id: string; type: 'builds' }[] }
type BetaTesterBuildsLinkagesResponse = {
  data: { id: string; type: 'builds' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BuildBetaDetailsResponse = {
  data: BuildBetaDetail[]
  included?: Build[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BuildBetaDetailResponse = {
  data: BuildBetaDetail
  included?: Build[] | undefined
  links: DocumentLinks
}
type BuildBetaDetailUpdateRequest = {
  data: {
    attributes?: { autoNotifyEnabled?: boolean | undefined } | undefined
    id: string
    type: 'buildBetaDetails'
  }
}
type BuildBetaNotificationCreateRequest = {
  data: {
    relationships: { build: { data: { id: string; type: 'builds' } } }
    type: 'buildBetaNotifications'
  }
}
type BuildBetaNotification = { id: string; links: ResourceLinks; type: 'buildBetaNotifications' }
type BuildBetaNotificationResponse = { data: BuildBetaNotification; links: DocumentLinks }
type BuildUpdateRequest = {
  data: {
    attributes?:
      | { expired?: boolean | undefined; usesNonExemptEncryption?: boolean | undefined }
      | undefined
    id: string
    relationships?:
      | {
          appEncryptionDeclaration?:
            | { data?: { id: string; type: 'appEncryptionDeclarations' } | undefined }
            | undefined
        }
      | undefined
    type: 'builds'
  }
}
type DiagnosticLog = { id: string; links: ResourceLinks; type: 'diagnosticLogs' }
type DiagnosticSignaturesResponse = {
  data: DiagnosticSignature[]
  included?: DiagnosticLog[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BuildIconsResponse = {
  data: BuildIcon[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type PrereleaseVersionResponse = {
  data: PrereleaseVersion
  included?: (Build | App)[] | undefined
  links: DocumentLinks
}
type BuildAppEncryptionDeclarationLinkageResponse = {
  data: { id: string; type: 'appEncryptionDeclarations' }
  links: DocumentLinks
}
type BuildAppEncryptionDeclarationLinkageRequest = {
  data: { id: string; type: 'appEncryptionDeclarations' }
}
type BuildBetaGroupsLinkagesRequest = { data: { id: string; type: 'betaGroups' }[] }
type BuildIndividualTestersLinkagesRequest = { data: { id: string; type: 'betaTesters' }[] }
type BuildIndividualTestersLinkagesResponse = {
  data: { id: string; type: 'betaTesters' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type CapabilityType =
  | 'ICLOUD'
  | 'IN_APP_PURCHASE'
  | 'GAME_CENTER'
  | 'PUSH_NOTIFICATIONS'
  | 'WALLET'
  | 'INTER_APP_AUDIO'
  | 'MAPS'
  | 'ASSOCIATED_DOMAINS'
  | 'PERSONAL_VPN'
  | 'APP_GROUPS'
  | 'HEALTHKIT'
  | 'HOMEKIT'
  | 'WIRELESS_ACCESSORY_CONFIGURATION'
  | 'APPLE_PAY'
  | 'DATA_PROTECTION'
  | 'SIRIKIT'
  | 'NETWORK_EXTENSIONS'
  | 'MULTIPATH'
  | 'HOT_SPOT'
  | 'NFC_TAG_READING'
  | 'CLASSKIT'
  | 'AUTOFILL_CREDENTIAL_PROVIDER'
  | 'ACCESS_WIFI_INFORMATION'
  | 'NETWORK_CUSTOM_PROTOCOL'
  | 'COREMEDIA_HLS_LOW_LATENCY'
  | 'SYSTEM_EXTENSION_INSTALL'
  | 'USER_MANAGEMENT'
  | 'APPLE_ID_AUTH'
type CapabilityOption = {
  description?: string | undefined
  enabled?: boolean | undefined
  enabledByDefault?: boolean | undefined
  key?:
    | 'XCODE_5'
    | 'XCODE_6'
    | 'COMPLETE_PROTECTION'
    | 'PROTECTED_UNLESS_OPEN'
    | 'PROTECTED_UNTIL_FIRST_USER_AUTH'
    | 'PRIMARY_APP_CONSENT'
    | undefined
  name?: string | undefined
  supportsWildcard?: boolean | undefined
}
type CapabilitySetting = {
  allowedInstances?: 'ENTRY' | 'SINGLE' | 'MULTIPLE' | undefined
  description?: string | undefined
  enabledByDefault?: boolean | undefined
  key?:
    | 'ICLOUD_VERSION'
    | 'DATA_PROTECTION_PERMISSION_LEVEL'
    | 'APPLE_ID_AUTH_APP_CONSENT'
    | undefined
  minInstances?: number | undefined
  name?: string | undefined
  options?: CapabilityOption[] | undefined
  visible?: boolean | undefined
}
type BundleIdCapabilityCreateRequest = {
  data: {
    attributes: { capabilityType: CapabilityType; settings?: CapabilitySetting[] | undefined }
    relationships: { bundleId: { data: { id: string; type: 'bundleIds' } } }
    type: 'bundleIdCapabilities'
  }
}
type BundleIdCapability = {
  attributes?:
    | { capabilityType?: CapabilityType | undefined; settings?: CapabilitySetting[] | undefined }
    | undefined
  id: string
  links: ResourceLinks
  type: 'bundleIdCapabilities'
}
type BundleIdCapabilityResponse = { data: BundleIdCapability; links: DocumentLinks }
type BundleIdCapabilityUpdateRequest = {
  data: {
    attributes?:
      | { capabilityType?: CapabilityType | undefined; settings?: CapabilitySetting[] | undefined }
      | undefined
    id: string
    type: 'bundleIdCapabilities'
  }
}
type BundleIdPlatform = 'IOS' | 'MAC_OS'
type BundleId = {
  attributes?:
    | {
        identifier?: string | undefined
        name?: string | undefined
        platform?: BundleIdPlatform | undefined
        seedId?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        app?:
          | {
              data?: { id: string; type: 'apps' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        bundleIdCapabilities?:
          | {
              data?: { id: string; type: 'bundleIdCapabilities' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        profiles?:
          | {
              data?: { id: string; type: 'profiles' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'bundleIds'
}
type Profile = {
  attributes?:
    | {
        createdDate?: string | undefined
        expirationDate?: string | undefined
        name?: string | undefined
        platform?: BundleIdPlatform | undefined
        profileContent?: string | undefined
        profileState?: 'ACTIVE' | 'INVALID' | undefined
        profileType?:
          | 'IOS_APP_DEVELOPMENT'
          | 'IOS_APP_STORE'
          | 'IOS_APP_ADHOC'
          | 'IOS_APP_INHOUSE'
          | 'MAC_APP_DEVELOPMENT'
          | 'MAC_APP_STORE'
          | 'MAC_APP_DIRECT'
          | 'TVOS_APP_DEVELOPMENT'
          | 'TVOS_APP_STORE'
          | 'TVOS_APP_ADHOC'
          | 'TVOS_APP_INHOUSE'
          | 'MAC_CATALYST_APP_DEVELOPMENT'
          | 'MAC_CATALYST_APP_STORE'
          | 'MAC_CATALYST_APP_DIRECT'
          | undefined
        uuid?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        bundleId?:
          | {
              data?: { id: string; type: 'bundleIds' } | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
            }
          | undefined
        certificates?:
          | {
              data?: { id: string; type: 'certificates' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
        devices?:
          | {
              data?: { id: string; type: 'devices' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'profiles'
}
type BundleIdsResponse = {
  data: BundleId[]
  included?: (Profile | BundleIdCapability | App)[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type BundleIdCreateRequest = {
  data: {
    attributes: {
      identifier: string
      name: string
      platform: BundleIdPlatform
      seedId?: string | undefined
    }
    type: 'bundleIds'
  }
}
type BundleIdResponse = {
  data: BundleId
  included?: (Profile | BundleIdCapability | App)[] | undefined
  links: DocumentLinks
}
type BundleIdUpdateRequest = {
  data: { attributes?: { name?: string | undefined } | undefined; id: string; type: 'bundleIds' }
}
type BundleIdCapabilitiesResponse = {
  data: BundleIdCapability[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type Device = {
  attributes?:
    | {
        addedDate?: string | undefined
        deviceClass?: 'APPLE_WATCH' | 'IPAD' | 'IPHONE' | 'IPOD' | 'APPLE_TV' | 'MAC' | undefined
        model?: string | undefined
        name?: string | undefined
        platform?: BundleIdPlatform | undefined
        status?: 'ENABLED' | 'DISABLED' | undefined
        udid?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  type: 'devices'
}
type CertificateType =
  | 'IOS_DEVELOPMENT'
  | 'IOS_DISTRIBUTION'
  | 'MAC_APP_DISTRIBUTION'
  | 'MAC_INSTALLER_DISTRIBUTION'
  | 'MAC_APP_DEVELOPMENT'
  | 'DEVELOPER_ID_KEXT'
  | 'DEVELOPER_ID_APPLICATION'
  | 'DEVELOPMENT'
  | 'DISTRIBUTION'
type Certificate = {
  attributes?:
    | {
        certificateContent?: string | undefined
        certificateType?: CertificateType | undefined
        displayName?: string | undefined
        expirationDate?: string | undefined
        name?: string | undefined
        platform?: BundleIdPlatform | undefined
        serialNumber?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  type: 'certificates'
}
type ProfilesResponse = {
  data: Profile[]
  included?: (BundleId | Device | Certificate)[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type CertificatesResponse = {
  data: Certificate[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type CertificateCreateRequest = {
  data: {
    attributes: { certificateType: CertificateType; csrContent: string }
    type: 'certificates'
  }
}
type CertificateResponse = { data: Certificate; links: DocumentLinks }
type DevicesResponse = {
  data: Device[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type DeviceCreateRequest = {
  data: { attributes: { name: string; platform: BundleIdPlatform; udid: string }; type: 'devices' }
}
type DeviceResponse = { data: Device; links: DocumentLinks }
type DeviceUpdateRequest = {
  data: {
    attributes?:
      | { name?: string | undefined; status?: 'ENABLED' | 'DISABLED' | undefined }
      | undefined
    id: string
    type: 'devices'
  }
}
type DiagnosticLogsResponse = {
  data: DiagnosticLog[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type EndUserLicenseAgreementCreateRequest = {
  data: {
    attributes: { agreementText: string }
    relationships: {
      app: { data: { id: string; type: 'apps' } }
      territories: { data: { id: string; type: 'territories' }[] }
    }
    type: 'endUserLicenseAgreements'
  }
}
type EndUserLicenseAgreementUpdateRequest = {
  data: {
    attributes?: { agreementText?: string | undefined } | undefined
    id: string
    relationships?:
      | { territories?: { data?: { id: string; type: 'territories' }[] | undefined } | undefined }
      | undefined
    type: 'endUserLicenseAgreements'
  }
}
type GameCenterEnabledVersionCompatibleVersionsLinkagesRequest = {
  data: { id: string; type: 'gameCenterEnabledVersions' }[]
}
type GameCenterEnabledVersionCompatibleVersionsLinkagesResponse = {
  data: { id: string; type: 'gameCenterEnabledVersions' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type IdfaDeclarationCreateRequest = {
  data: {
    attributes: {
      attributesActionWithPreviousAd: boolean
      attributesAppInstallationToPreviousAd: boolean
      honorsLimitedAdTracking: boolean
      servesAds: boolean
    }
    relationships: { appStoreVersion: { data: { id: string; type: 'appStoreVersions' } } }
    type: 'idfaDeclarations'
  }
}
type IdfaDeclarationUpdateRequest = {
  data: {
    attributes?:
      | {
          attributesActionWithPreviousAd?: boolean | undefined
          attributesAppInstallationToPreviousAd?: boolean | undefined
          honorsLimitedAdTracking?: boolean | undefined
          servesAds?: boolean | undefined
        }
      | undefined
    id: string
    type: 'idfaDeclarations'
  }
}
type InAppPurchaseResponse = { data: InAppPurchase; links: DocumentLinks }
type ProfileCreateRequest = {
  data: {
    attributes: {
      name: string
      profileType:
        | 'IOS_APP_DEVELOPMENT'
        | 'IOS_APP_STORE'
        | 'IOS_APP_ADHOC'
        | 'IOS_APP_INHOUSE'
        | 'MAC_APP_DEVELOPMENT'
        | 'MAC_APP_STORE'
        | 'MAC_APP_DIRECT'
        | 'TVOS_APP_DEVELOPMENT'
        | 'TVOS_APP_STORE'
        | 'TVOS_APP_ADHOC'
        | 'TVOS_APP_INHOUSE'
        | 'MAC_CATALYST_APP_DEVELOPMENT'
        | 'MAC_CATALYST_APP_STORE'
        | 'MAC_CATALYST_APP_DIRECT'
    }
    relationships: {
      bundleId: { data: { id: string; type: 'bundleIds' } }
      certificates: { data: { id: string; type: 'certificates' }[] }
      devices?: { data?: { id: string; type: 'devices' }[] | undefined } | undefined
    }
    type: 'profiles'
  }
}
type ProfileResponse = {
  data: Profile
  included?: (BundleId | Device | Certificate)[] | undefined
  links: DocumentLinks
}
type RoutingAppCoverageCreateRequest = {
  data: {
    attributes: { fileName: string; fileSize: number }
    relationships: { appStoreVersion: { data: { id: string; type: 'appStoreVersions' } } }
    type: 'routingAppCoverages'
  }
}
type RoutingAppCoverageUpdateRequest = {
  data: {
    attributes?:
      | { sourceFileChecksum?: string | undefined; uploaded?: boolean | undefined }
      | undefined
    id: string
    type: 'routingAppCoverages'
  }
}
type UserRole =
  | 'ADMIN'
  | 'FINANCE'
  | 'TECHNICAL'
  | 'ACCOUNT_HOLDER'
  | 'READ_ONLY'
  | 'SALES'
  | 'MARKETING'
  | 'APP_MANAGER'
  | 'DEVELOPER'
  | 'ACCESS_TO_REPORTS'
  | 'CUSTOMER_SUPPORT'
  | 'CREATE_APPS'
  | 'CLOUD_MANAGED_DEVELOPER_ID'
  | 'CLOUD_MANAGED_APP_DISTRIBUTION'
type UserInvitation = {
  attributes?:
    | {
        allAppsVisible?: boolean | undefined
        email?: string | undefined
        expirationDate?: string | undefined
        firstName?: string | undefined
        lastName?: string | undefined
        provisioningAllowed?: boolean | undefined
        roles?: UserRole[] | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        visibleApps?:
          | {
              data?: { id: string; type: 'apps' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'userInvitations'
}
type UserInvitationsResponse = {
  data: UserInvitation[]
  included?: App[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type UserInvitationCreateRequest = {
  data: {
    attributes: {
      allAppsVisible?: boolean | undefined
      email: string
      firstName: string
      lastName: string
      provisioningAllowed?: boolean | undefined
      roles: UserRole[]
    }
    relationships?:
      | { visibleApps?: { data?: { id: string; type: 'apps' }[] | undefined } | undefined }
      | undefined
    type: 'userInvitations'
  }
}
type UserInvitationResponse = {
  data: UserInvitation
  included?: App[] | undefined
  links: DocumentLinks
}
type User = {
  attributes?:
    | {
        allAppsVisible?: boolean | undefined
        firstName?: string | undefined
        lastName?: string | undefined
        provisioningAllowed?: boolean | undefined
        roles?: UserRole[] | undefined
        username?: string | undefined
      }
    | undefined
  id: string
  links: ResourceLinks
  relationships?:
    | {
        visibleApps?:
          | {
              data?: { id: string; type: 'apps' }[] | undefined
              links?: { related?: string | undefined; self?: string | undefined } | undefined
              meta?: PagingInformation | undefined
            }
          | undefined
      }
    | undefined
  type: 'users'
}
type UsersResponse = {
  data: User[]
  included?: App[] | undefined
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
type UserResponse = { data: User; included?: App[] | undefined; links: DocumentLinks }
type UserUpdateRequest = {
  data: {
    attributes?:
      | {
          allAppsVisible?: boolean | undefined
          provisioningAllowed?: boolean | undefined
          roles?: UserRole[] | undefined
        }
      | undefined
    id: string
    relationships?:
      | { visibleApps?: { data?: { id: string; type: 'apps' }[] | undefined } | undefined }
      | undefined
    type: 'users'
  }
}
type UserVisibleAppsLinkagesRequest = { data: { id: string; type: 'apps' }[] }
type UserVisibleAppsLinkagesResponse = {
  data: { id: string; type: 'apps' }[]
  links: PagedDocumentLinks
  meta?: PagingInformation | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/ageRatingDeclarations/:id': {
      $patch:
        | {
            input: { param: { id: string } } & { json: AgeRatingDeclarationUpdateRequest }
            output: AgeRatingDeclarationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AgeRatingDeclarationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AgeRatingDeclarationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AgeRatingDeclarationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AgeRatingDeclarationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appCategories': {
      $get:
        | {
            input: {
              query: {
                'filter[platforms]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'exists[parent]'?: string[] | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                limit?: number | undefined
                include?: ('parent' | 'subcategories')[] | undefined
                'limit[subcategories]'?: number | undefined
              }
            }
            output: AppCategoriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[platforms]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'exists[parent]'?: string[] | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                limit?: number | undefined
                include?: ('parent' | 'subcategories')[] | undefined
                'limit[subcategories]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[platforms]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'exists[parent]'?: string[] | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                limit?: number | undefined
                include?: ('parent' | 'subcategories')[] | undefined
                'limit[subcategories]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/appCategories/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                include?: ('parent' | 'subcategories')[] | undefined
                'limit[subcategories]'?: number | undefined
              }
            }
            output: AppCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                include?: ('parent' | 'subcategories')[] | undefined
                'limit[subcategories]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                include?: ('parent' | 'subcategories')[] | undefined
                'limit[subcategories]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                include?: ('parent' | 'subcategories')[] | undefined
                'limit[subcategories]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appCategories/:id/parent': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: AppCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appCategories/:id/subcategories': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                limit?: number | undefined
              }
            }
            output: AppCategoriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appEncryptionDeclarations': {
      $get:
        | {
            input: {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppEncryptionDeclarationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/appEncryptionDeclarations/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppEncryptionDeclarationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appEncryptionDeclarations/:id/app': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appEncryptionDeclarations/:id/relationships/builds': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: AppEncryptionDeclarationBuildsLinkagesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: AppEncryptionDeclarationBuildsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: AppEncryptionDeclarationBuildsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: AppEncryptionDeclarationBuildsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appInfoLocalizations': {
      $post:
        | {
            input: { json: AppInfoLocalizationCreateRequest }
            output: AppInfoLocalizationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppInfoLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppInfoLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppInfoLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appInfoLocalizations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                include?: 'appInfo'[] | undefined
              }
            }
            output: AppInfoLocalizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                include?: 'appInfo'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                include?: 'appInfo'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                include?: 'appInfo'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppInfoLocalizationUpdateRequest }
            output: AppInfoLocalizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppInfoLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppInfoLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppInfoLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppInfoLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appInfos/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                'limit[appInfoLocalizations]'?: number | undefined
              }
            }
            output: AppInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                'limit[appInfoLocalizations]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                'limit[appInfoLocalizations]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                'limit[appInfoLocalizations]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppInfoUpdateRequest }
            output: AppInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppInfoUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppInfoUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppInfoUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppInfoUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appInfos/:id/ageRatingDeclaration': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
              }
            }
            output: AgeRatingDeclarationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appInfos/:id/appInfoLocalizations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[locale]'?: string[] | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appInfo'[] | undefined
              }
            }
            output: AppInfoLocalizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[locale]'?: string[] | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appInfo'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[locale]'?: string[] | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appInfo'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[locale]'?: string[] | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appInfo'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appInfos/:id/primaryCategory': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: AppCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appInfos/:id/primarySubcategoryOne': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: AppCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appInfos/:id/primarySubcategoryTwo': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: AppCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appInfos/:id/secondaryCategory': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: AppCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appInfos/:id/secondarySubcategoryOne': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: AppCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appInfos/:id/secondarySubcategoryTwo': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: AppCategoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appPreOrders': {
      $post:
        | {
            input: { json: AppPreOrderCreateRequest }
            output: AppPreOrderResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppPreOrderCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppPreOrderCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppPreOrderCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appPreOrders/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                include?: 'app'[] | undefined
              }
            }
            output: AppPreOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                include?: 'app'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                include?: 'app'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                include?: 'app'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppPreOrderUpdateRequest }
            output: AppPreOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppPreOrderUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppPreOrderUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppPreOrderUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppPreOrderUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appPreviewSets': {
      $post:
        | {
            input: { json: AppPreviewSetCreateRequest }
            output: AppPreviewSetResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppPreviewSetCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppPreviewSetCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppPreviewSetCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appPreviewSets/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                include?: ('appPreviews' | 'appStoreVersionLocalization')[] | undefined
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'limit[appPreviews]'?: number | undefined
              }
            }
            output: AppPreviewSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                include?: ('appPreviews' | 'appStoreVersionLocalization')[] | undefined
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'limit[appPreviews]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                include?: ('appPreviews' | 'appStoreVersionLocalization')[] | undefined
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'limit[appPreviews]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                include?: ('appPreviews' | 'appStoreVersionLocalization')[] | undefined
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'limit[appPreviews]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appPreviewSets/:id/appPreviews': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                limit?: number | undefined
                include?: 'appPreviewSet'[] | undefined
              }
            }
            output: AppPreviewsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                limit?: number | undefined
                include?: 'appPreviewSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                limit?: number | undefined
                include?: 'appPreviewSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                limit?: number | undefined
                include?: 'appPreviewSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appPreviewSets/:id/relationships/appPreviews': {
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: AppPreviewSetAppPreviewsLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppPreviewSetAppPreviewsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: AppPreviewSetAppPreviewsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppPreviewSetAppPreviewsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppPreviewSetAppPreviewsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appPreviews': {
      $post:
        | {
            input: { json: AppPreviewCreateRequest }
            output: AppPreviewResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppPreviewCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppPreviewCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppPreviewCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appPreviews/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                include?: 'appPreviewSet'[] | undefined
              }
            }
            output: AppPreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                include?: 'appPreviewSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                include?: 'appPreviewSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                include?: 'appPreviewSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppPreviewUpdateRequest }
            output: AppPreviewResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppPreviewUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppPreviewUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppPreviewUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppPreviewUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appPricePoints': {
      $get:
        | {
            input: {
              query: {
                'filter[priceTier]'?: string[] | undefined
                'filter[territory]'?: string[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                limit?: number | undefined
                include?: ('priceTier' | 'territory')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
              }
            }
            output: AppPricePointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[priceTier]'?: string[] | undefined
                'filter[territory]'?: string[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                limit?: number | undefined
                include?: ('priceTier' | 'territory')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[priceTier]'?: string[] | undefined
                'filter[territory]'?: string[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                limit?: number | undefined
                include?: ('priceTier' | 'territory')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/appPricePoints/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                include?: ('priceTier' | 'territory')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
              }
            }
            output: AppPricePointResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                include?: ('priceTier' | 'territory')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                include?: ('priceTier' | 'territory')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                include?: ('priceTier' | 'territory')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appPricePoints/:id/territory': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { 'fields[territories]'?: 'currency'[] | undefined }
            }
            output: TerritoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { 'fields[territories]'?: 'currency'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { 'fields[territories]'?: 'currency'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { 'fields[territories]'?: 'currency'[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appPriceTiers': {
      $get:
        | {
            input: {
              query: {
                'filter[id]'?: string[] | undefined
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                limit?: number | undefined
                include?: 'pricePoints'[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                'limit[pricePoints]'?: number | undefined
              }
            }
            output: AppPriceTiersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[id]'?: string[] | undefined
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                limit?: number | undefined
                include?: 'pricePoints'[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                'limit[pricePoints]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[id]'?: string[] | undefined
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                limit?: number | undefined
                include?: 'pricePoints'[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                'limit[pricePoints]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/appPriceTiers/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                include?: 'pricePoints'[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                'limit[pricePoints]'?: number | undefined
              }
            }
            output: AppPriceTierResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                include?: 'pricePoints'[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                'limit[pricePoints]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                include?: 'pricePoints'[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                'limit[pricePoints]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                include?: 'pricePoints'[] | undefined
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                'limit[pricePoints]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appPriceTiers/:id/pricePoints': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: AppPricePointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPricePoints]'?:
                  | ('customerPrice' | 'priceTier' | 'proceeds' | 'territory')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appPrices/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                include?: ('app' | 'priceTier')[] | undefined
              }
            }
            output: AppPriceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                include?: ('app' | 'priceTier')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                include?: ('app' | 'priceTier')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                include?: ('app' | 'priceTier')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appScreenshotSets': {
      $post:
        | {
            input: { json: AppScreenshotSetCreateRequest }
            output: AppScreenshotSetResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppScreenshotSetCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppScreenshotSetCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppScreenshotSetCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appScreenshotSets/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                include?: ('appScreenshots' | 'appStoreVersionLocalization')[] | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'limit[appScreenshots]'?: number | undefined
              }
            }
            output: AppScreenshotSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                include?: ('appScreenshots' | 'appStoreVersionLocalization')[] | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'limit[appScreenshots]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                include?: ('appScreenshots' | 'appStoreVersionLocalization')[] | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'limit[appScreenshots]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                include?: ('appScreenshots' | 'appStoreVersionLocalization')[] | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'limit[appScreenshots]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appScreenshotSets/:id/appScreenshots': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appScreenshotSet'[] | undefined
              }
            }
            output: AppScreenshotsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appScreenshotSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appScreenshotSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appScreenshotSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appScreenshotSets/:id/relationships/appScreenshots': {
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: AppScreenshotSetAppScreenshotsLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: AppScreenshotSetAppScreenshotsLinkagesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: AppScreenshotSetAppScreenshotsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: AppScreenshotSetAppScreenshotsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: AppScreenshotSetAppScreenshotsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appScreenshots': {
      $post:
        | {
            input: { json: AppScreenshotCreateRequest }
            output: AppScreenshotResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppScreenshotCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppScreenshotCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppScreenshotCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appScreenshots/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appScreenshotSet'[] | undefined
              }
            }
            output: AppScreenshotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appScreenshotSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appScreenshotSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appScreenshotSet'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppScreenshotUpdateRequest }
            output: AppScreenshotResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppScreenshotUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppScreenshotUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppScreenshotUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppScreenshotUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreReviewAttachments': {
      $post:
        | {
            input: { json: AppStoreReviewAttachmentCreateRequest }
            output: AppStoreReviewAttachmentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppStoreReviewAttachmentCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppStoreReviewAttachmentCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppStoreReviewAttachmentCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreReviewAttachments/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appStoreReviewDetail'[] | undefined
              }
            }
            output: AppStoreReviewAttachmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appStoreReviewDetail'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appStoreReviewDetail'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appStoreReviewDetail'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppStoreReviewAttachmentUpdateRequest }
            output: AppStoreReviewAttachmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppStoreReviewAttachmentUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppStoreReviewAttachmentUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppStoreReviewAttachmentUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppStoreReviewAttachmentUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreReviewDetails': {
      $post:
        | {
            input: { json: AppStoreReviewDetailCreateRequest }
            output: AppStoreReviewDetailResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppStoreReviewDetailCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppStoreReviewDetailCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppStoreReviewDetailCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreReviewDetails/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                include?: ('appStoreReviewAttachments' | 'appStoreVersion')[] | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'limit[appStoreReviewAttachments]'?: number | undefined
              }
            }
            output: AppStoreReviewDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                include?: ('appStoreReviewAttachments' | 'appStoreVersion')[] | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'limit[appStoreReviewAttachments]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                include?: ('appStoreReviewAttachments' | 'appStoreVersion')[] | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'limit[appStoreReviewAttachments]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                include?: ('appStoreReviewAttachments' | 'appStoreVersion')[] | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'limit[appStoreReviewAttachments]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppStoreReviewDetailUpdateRequest }
            output: AppStoreReviewDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppStoreReviewDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppStoreReviewDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppStoreReviewDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppStoreReviewDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreReviewDetails/:id/appStoreReviewAttachments': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appStoreReviewDetail'[] | undefined
              }
            }
            output: AppStoreReviewAttachmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appStoreReviewDetail'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appStoreReviewDetail'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'appStoreReviewDetail'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersionLocalizations': {
      $post:
        | {
            input: { json: AppStoreVersionLocalizationCreateRequest }
            output: AppStoreVersionLocalizationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppStoreVersionLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppStoreVersionLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppStoreVersionLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreVersionLocalizations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                include?: ('appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion')[] | undefined
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                'limit[appPreviewSets]'?: number | undefined
                'limit[appScreenshotSets]'?: number | undefined
              }
            }
            output: AppStoreVersionLocalizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                include?: ('appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion')[] | undefined
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                'limit[appPreviewSets]'?: number | undefined
                'limit[appScreenshotSets]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                include?: ('appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion')[] | undefined
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                'limit[appPreviewSets]'?: number | undefined
                'limit[appScreenshotSets]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                include?: ('appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion')[] | undefined
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                'limit[appPreviewSets]'?: number | undefined
                'limit[appScreenshotSets]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppStoreVersionLocalizationUpdateRequest }
            output: AppStoreVersionLocalizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreVersionLocalizations/:id/appPreviewSets': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[previewType]'?:
                  | (
                      | 'IPHONE_65'
                      | 'IPHONE_58'
                      | 'IPHONE_55'
                      | 'IPHONE_47'
                      | 'IPHONE_40'
                      | 'IPHONE_35'
                      | 'IPAD_PRO_3GEN_129'
                      | 'IPAD_PRO_3GEN_11'
                      | 'IPAD_PRO_129'
                      | 'IPAD_105'
                      | 'IPAD_97'
                      | 'DESKTOP'
                      | 'WATCH_SERIES_4'
                      | 'WATCH_SERIES_3'
                      | 'APPLE_TV'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                limit?: number | undefined
                include?: ('appPreviews' | 'appStoreVersionLocalization')[] | undefined
              }
            }
            output: AppPreviewSetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[previewType]'?:
                  | (
                      | 'IPHONE_65'
                      | 'IPHONE_58'
                      | 'IPHONE_55'
                      | 'IPHONE_47'
                      | 'IPHONE_40'
                      | 'IPHONE_35'
                      | 'IPAD_PRO_3GEN_129'
                      | 'IPAD_PRO_3GEN_11'
                      | 'IPAD_PRO_129'
                      | 'IPAD_105'
                      | 'IPAD_97'
                      | 'DESKTOP'
                      | 'WATCH_SERIES_4'
                      | 'WATCH_SERIES_3'
                      | 'APPLE_TV'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                limit?: number | undefined
                include?: ('appPreviews' | 'appStoreVersionLocalization')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[previewType]'?:
                  | (
                      | 'IPHONE_65'
                      | 'IPHONE_58'
                      | 'IPHONE_55'
                      | 'IPHONE_47'
                      | 'IPHONE_40'
                      | 'IPHONE_35'
                      | 'IPAD_PRO_3GEN_129'
                      | 'IPAD_PRO_3GEN_11'
                      | 'IPAD_PRO_129'
                      | 'IPAD_105'
                      | 'IPAD_97'
                      | 'DESKTOP'
                      | 'WATCH_SERIES_4'
                      | 'WATCH_SERIES_3'
                      | 'APPLE_TV'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                limit?: number | undefined
                include?: ('appPreviews' | 'appStoreVersionLocalization')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[previewType]'?:
                  | (
                      | 'IPHONE_65'
                      | 'IPHONE_58'
                      | 'IPHONE_55'
                      | 'IPHONE_47'
                      | 'IPHONE_40'
                      | 'IPHONE_35'
                      | 'IPAD_PRO_3GEN_129'
                      | 'IPAD_PRO_3GEN_11'
                      | 'IPAD_PRO_129'
                      | 'IPAD_105'
                      | 'IPAD_97'
                      | 'DESKTOP'
                      | 'WATCH_SERIES_4'
                      | 'WATCH_SERIES_3'
                      | 'APPLE_TV'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[appPreviews]'?:
                  | (
                      | 'appPreviewSet'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'mimeType'
                      | 'previewFrameTimeCode'
                      | 'previewImage'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                      | 'videoUrl'
                    )[]
                  | undefined
                'fields[appPreviewSets]'?:
                  | ('appPreviews' | 'appStoreVersionLocalization' | 'previewType')[]
                  | undefined
                limit?: number | undefined
                include?: ('appPreviews' | 'appStoreVersionLocalization')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersionLocalizations/:id/appScreenshotSets': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[screenshotDisplayType]'?:
                  | (
                      | 'APP_IPHONE_65'
                      | 'APP_IPHONE_58'
                      | 'APP_IPHONE_55'
                      | 'APP_IPHONE_47'
                      | 'APP_IPHONE_40'
                      | 'APP_IPHONE_35'
                      | 'APP_IPAD_PRO_3GEN_129'
                      | 'APP_IPAD_PRO_3GEN_11'
                      | 'APP_IPAD_PRO_129'
                      | 'APP_IPAD_105'
                      | 'APP_IPAD_97'
                      | 'APP_DESKTOP'
                      | 'APP_WATCH_SERIES_4'
                      | 'APP_WATCH_SERIES_3'
                      | 'APP_APPLE_TV'
                      | 'IMESSAGE_APP_IPHONE_65'
                      | 'IMESSAGE_APP_IPHONE_58'
                      | 'IMESSAGE_APP_IPHONE_55'
                      | 'IMESSAGE_APP_IPHONE_47'
                      | 'IMESSAGE_APP_IPHONE_40'
                      | 'IMESSAGE_APP_IPAD_PRO_3GEN_129'
                      | 'IMESSAGE_APP_IPAD_PRO_3GEN_11'
                      | 'IMESSAGE_APP_IPAD_PRO_129'
                      | 'IMESSAGE_APP_IPAD_105'
                      | 'IMESSAGE_APP_IPAD_97'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('appScreenshots' | 'appStoreVersionLocalization')[] | undefined
              }
            }
            output: AppScreenshotSetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[screenshotDisplayType]'?:
                  | (
                      | 'APP_IPHONE_65'
                      | 'APP_IPHONE_58'
                      | 'APP_IPHONE_55'
                      | 'APP_IPHONE_47'
                      | 'APP_IPHONE_40'
                      | 'APP_IPHONE_35'
                      | 'APP_IPAD_PRO_3GEN_129'
                      | 'APP_IPAD_PRO_3GEN_11'
                      | 'APP_IPAD_PRO_129'
                      | 'APP_IPAD_105'
                      | 'APP_IPAD_97'
                      | 'APP_DESKTOP'
                      | 'APP_WATCH_SERIES_4'
                      | 'APP_WATCH_SERIES_3'
                      | 'APP_APPLE_TV'
                      | 'IMESSAGE_APP_IPHONE_65'
                      | 'IMESSAGE_APP_IPHONE_58'
                      | 'IMESSAGE_APP_IPHONE_55'
                      | 'IMESSAGE_APP_IPHONE_47'
                      | 'IMESSAGE_APP_IPHONE_40'
                      | 'IMESSAGE_APP_IPAD_PRO_3GEN_129'
                      | 'IMESSAGE_APP_IPAD_PRO_3GEN_11'
                      | 'IMESSAGE_APP_IPAD_PRO_129'
                      | 'IMESSAGE_APP_IPAD_105'
                      | 'IMESSAGE_APP_IPAD_97'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('appScreenshots' | 'appStoreVersionLocalization')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[screenshotDisplayType]'?:
                  | (
                      | 'APP_IPHONE_65'
                      | 'APP_IPHONE_58'
                      | 'APP_IPHONE_55'
                      | 'APP_IPHONE_47'
                      | 'APP_IPHONE_40'
                      | 'APP_IPHONE_35'
                      | 'APP_IPAD_PRO_3GEN_129'
                      | 'APP_IPAD_PRO_3GEN_11'
                      | 'APP_IPAD_PRO_129'
                      | 'APP_IPAD_105'
                      | 'APP_IPAD_97'
                      | 'APP_DESKTOP'
                      | 'APP_WATCH_SERIES_4'
                      | 'APP_WATCH_SERIES_3'
                      | 'APP_APPLE_TV'
                      | 'IMESSAGE_APP_IPHONE_65'
                      | 'IMESSAGE_APP_IPHONE_58'
                      | 'IMESSAGE_APP_IPHONE_55'
                      | 'IMESSAGE_APP_IPHONE_47'
                      | 'IMESSAGE_APP_IPHONE_40'
                      | 'IMESSAGE_APP_IPAD_PRO_3GEN_129'
                      | 'IMESSAGE_APP_IPAD_PRO_3GEN_11'
                      | 'IMESSAGE_APP_IPAD_PRO_129'
                      | 'IMESSAGE_APP_IPAD_105'
                      | 'IMESSAGE_APP_IPAD_97'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('appScreenshots' | 'appStoreVersionLocalization')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[screenshotDisplayType]'?:
                  | (
                      | 'APP_IPHONE_65'
                      | 'APP_IPHONE_58'
                      | 'APP_IPHONE_55'
                      | 'APP_IPHONE_47'
                      | 'APP_IPHONE_40'
                      | 'APP_IPHONE_35'
                      | 'APP_IPAD_PRO_3GEN_129'
                      | 'APP_IPAD_PRO_3GEN_11'
                      | 'APP_IPAD_PRO_129'
                      | 'APP_IPAD_105'
                      | 'APP_IPAD_97'
                      | 'APP_DESKTOP'
                      | 'APP_WATCH_SERIES_4'
                      | 'APP_WATCH_SERIES_3'
                      | 'APP_APPLE_TV'
                      | 'IMESSAGE_APP_IPHONE_65'
                      | 'IMESSAGE_APP_IPHONE_58'
                      | 'IMESSAGE_APP_IPHONE_55'
                      | 'IMESSAGE_APP_IPHONE_47'
                      | 'IMESSAGE_APP_IPHONE_40'
                      | 'IMESSAGE_APP_IPAD_PRO_3GEN_129'
                      | 'IMESSAGE_APP_IPAD_PRO_3GEN_11'
                      | 'IMESSAGE_APP_IPAD_PRO_129'
                      | 'IMESSAGE_APP_IPAD_105'
                      | 'IMESSAGE_APP_IPAD_97'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[appScreenshotSets]'?:
                  | ('appScreenshots' | 'appStoreVersionLocalization' | 'screenshotDisplayType')[]
                  | undefined
                'fields[appScreenshots]'?:
                  | (
                      | 'appScreenshotSet'
                      | 'assetDeliveryState'
                      | 'assetToken'
                      | 'assetType'
                      | 'fileName'
                      | 'fileSize'
                      | 'imageAsset'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('appScreenshots' | 'appStoreVersionLocalization')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersionPhasedReleases': {
      $post:
        | {
            input: { json: AppStoreVersionPhasedReleaseCreateRequest }
            output: AppStoreVersionPhasedReleaseResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppStoreVersionPhasedReleaseCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppStoreVersionPhasedReleaseCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppStoreVersionPhasedReleaseCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreVersionPhasedReleases/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppStoreVersionPhasedReleaseUpdateRequest }
            output: AppStoreVersionPhasedReleaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionPhasedReleaseUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionPhasedReleaseUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionPhasedReleaseUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionPhasedReleaseUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreVersionSubmissions': {
      $post:
        | {
            input: { json: AppStoreVersionSubmissionCreateRequest }
            output: AppStoreVersionSubmissionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppStoreVersionSubmissionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppStoreVersionSubmissionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppStoreVersionSubmissionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreVersionSubmissions/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreVersions': {
      $post:
        | {
            input: { json: AppStoreVersionCreateRequest }
            output: AppStoreVersionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AppStoreVersionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppStoreVersionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AppStoreVersionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreVersions/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'idfaDeclaration'
                      | 'routingAppCoverage'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                'limit[appStoreVersionLocalizations]'?: number | undefined
              }
            }
            output: AppStoreVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'idfaDeclaration'
                      | 'routingAppCoverage'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                'limit[appStoreVersionLocalizations]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'idfaDeclaration'
                      | 'routingAppCoverage'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                'limit[appStoreVersionLocalizations]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'idfaDeclaration'
                      | 'routingAppCoverage'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                'limit[appStoreVersionLocalizations]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppStoreVersionUpdateRequest }
            output: AppStoreVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreVersions/:id/ageRatingDeclaration': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
              }
            }
            output: AgeRatingDeclarationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersions/:id/appStoreReviewDetail': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: ('appStoreReviewAttachments' | 'appStoreVersion')[] | undefined
              }
            }
            output: AppStoreReviewDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: ('appStoreReviewAttachments' | 'appStoreVersion')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: ('appStoreReviewAttachments' | 'appStoreVersion')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[appStoreReviewAttachments]'?:
                  | (
                      | 'appStoreReviewDetail'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: ('appStoreReviewAttachments' | 'appStoreVersion')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersions/:id/appStoreVersionLocalizations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: AppStoreVersionLocalizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersions/:id/appStoreVersionPhasedRelease': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
              }
            }
            output: AppStoreVersionPhasedReleaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersions/:id/appStoreVersionSubmission': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                include?: 'appStoreVersion'[] | undefined
              }
            }
            output: AppStoreVersionSubmissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                include?: 'appStoreVersion'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                include?: 'appStoreVersion'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                include?: 'appStoreVersion'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersions/:id/build': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BuildResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersions/:id/idfaDeclaration': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
              }
            }
            output: IdfaDeclarationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/appStoreVersions/:id/relationships/build': {
      $get:
        | {
            input: { param: { id: string } }
            output: AppStoreVersionBuildLinkageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppStoreVersionBuildLinkageRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionBuildLinkageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionBuildLinkageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppStoreVersionBuildLinkageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/appStoreVersions/:id/routingAppCoverage': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
              }
            }
            output: RoutingAppCoverageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps': {
      $get:
        | {
            input: {
              query: {
                'filter[appStoreVersions.appStoreState]'?:
                  | (
                      | 'DEVELOPER_REMOVED_FROM_SALE'
                      | 'DEVELOPER_REJECTED'
                      | 'IN_REVIEW'
                      | 'INVALID_BINARY'
                      | 'METADATA_REJECTED'
                      | 'PENDING_APPLE_RELEASE'
                      | 'PENDING_CONTRACT'
                      | 'PENDING_DEVELOPER_RELEASE'
                      | 'PREPARE_FOR_SUBMISSION'
                      | 'PREORDER_READY_FOR_SALE'
                      | 'PROCESSING_FOR_APP_STORE'
                      | 'READY_FOR_SALE'
                      | 'REJECTED'
                      | 'REMOVED_FROM_SALE'
                      | 'WAITING_FOR_EXPORT_COMPLIANCE'
                      | 'WAITING_FOR_REVIEW'
                      | 'REPLACED_WITH_NEW_VERSION'
                    )[]
                  | undefined
                'filter[appStoreVersions.platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[bundleId]'?: string[] | undefined
                'filter[name]'?: string[] | undefined
                'filter[sku]'?: string[] | undefined
                'filter[appStoreVersions]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'exists[gameCenterEnabledVersions]'?: string[] | undefined
                sort?: ('bundleId' | '-bundleId' | 'name' | '-name' | 'sku' | '-sku')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'builds'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                'limit[appInfos]'?: number | undefined
                'limit[appStoreVersions]'?: number | undefined
                'limit[availableTerritories]'?: number | undefined
                'limit[betaAppLocalizations]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
                'limit[gameCenterEnabledVersions]'?: number | undefined
                'limit[inAppPurchases]'?: number | undefined
                'limit[preReleaseVersions]'?: number | undefined
                'limit[prices]'?: number | undefined
              }
            }
            output: AppsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[appStoreVersions.appStoreState]'?:
                  | (
                      | 'DEVELOPER_REMOVED_FROM_SALE'
                      | 'DEVELOPER_REJECTED'
                      | 'IN_REVIEW'
                      | 'INVALID_BINARY'
                      | 'METADATA_REJECTED'
                      | 'PENDING_APPLE_RELEASE'
                      | 'PENDING_CONTRACT'
                      | 'PENDING_DEVELOPER_RELEASE'
                      | 'PREPARE_FOR_SUBMISSION'
                      | 'PREORDER_READY_FOR_SALE'
                      | 'PROCESSING_FOR_APP_STORE'
                      | 'READY_FOR_SALE'
                      | 'REJECTED'
                      | 'REMOVED_FROM_SALE'
                      | 'WAITING_FOR_EXPORT_COMPLIANCE'
                      | 'WAITING_FOR_REVIEW'
                      | 'REPLACED_WITH_NEW_VERSION'
                    )[]
                  | undefined
                'filter[appStoreVersions.platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[bundleId]'?: string[] | undefined
                'filter[name]'?: string[] | undefined
                'filter[sku]'?: string[] | undefined
                'filter[appStoreVersions]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'exists[gameCenterEnabledVersions]'?: string[] | undefined
                sort?: ('bundleId' | '-bundleId' | 'name' | '-name' | 'sku' | '-sku')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'builds'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                'limit[appInfos]'?: number | undefined
                'limit[appStoreVersions]'?: number | undefined
                'limit[availableTerritories]'?: number | undefined
                'limit[betaAppLocalizations]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
                'limit[gameCenterEnabledVersions]'?: number | undefined
                'limit[inAppPurchases]'?: number | undefined
                'limit[preReleaseVersions]'?: number | undefined
                'limit[prices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[appStoreVersions.appStoreState]'?:
                  | (
                      | 'DEVELOPER_REMOVED_FROM_SALE'
                      | 'DEVELOPER_REJECTED'
                      | 'IN_REVIEW'
                      | 'INVALID_BINARY'
                      | 'METADATA_REJECTED'
                      | 'PENDING_APPLE_RELEASE'
                      | 'PENDING_CONTRACT'
                      | 'PENDING_DEVELOPER_RELEASE'
                      | 'PREPARE_FOR_SUBMISSION'
                      | 'PREORDER_READY_FOR_SALE'
                      | 'PROCESSING_FOR_APP_STORE'
                      | 'READY_FOR_SALE'
                      | 'REJECTED'
                      | 'REMOVED_FROM_SALE'
                      | 'WAITING_FOR_EXPORT_COMPLIANCE'
                      | 'WAITING_FOR_REVIEW'
                      | 'REPLACED_WITH_NEW_VERSION'
                    )[]
                  | undefined
                'filter[appStoreVersions.platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[bundleId]'?: string[] | undefined
                'filter[name]'?: string[] | undefined
                'filter[sku]'?: string[] | undefined
                'filter[appStoreVersions]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'exists[gameCenterEnabledVersions]'?: string[] | undefined
                sort?: ('bundleId' | '-bundleId' | 'name' | '-name' | 'sku' | '-sku')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'builds'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                'limit[appInfos]'?: number | undefined
                'limit[appStoreVersions]'?: number | undefined
                'limit[availableTerritories]'?: number | undefined
                'limit[betaAppLocalizations]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
                'limit[gameCenterEnabledVersions]'?: number | undefined
                'limit[inAppPurchases]'?: number | undefined
                'limit[preReleaseVersions]'?: number | undefined
                'limit[prices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/apps/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'builds'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                'limit[appInfos]'?: number | undefined
                'limit[appStoreVersions]'?: number | undefined
                'limit[availableTerritories]'?: number | undefined
                'limit[betaAppLocalizations]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
                'limit[gameCenterEnabledVersions]'?: number | undefined
                'limit[inAppPurchases]'?: number | undefined
                'limit[preReleaseVersions]'?: number | undefined
                'limit[prices]'?: number | undefined
              }
            }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'builds'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                'limit[appInfos]'?: number | undefined
                'limit[appStoreVersions]'?: number | undefined
                'limit[availableTerritories]'?: number | undefined
                'limit[betaAppLocalizations]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
                'limit[gameCenterEnabledVersions]'?: number | undefined
                'limit[inAppPurchases]'?: number | undefined
                'limit[preReleaseVersions]'?: number | undefined
                'limit[prices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'builds'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                'limit[appInfos]'?: number | undefined
                'limit[appStoreVersions]'?: number | undefined
                'limit[availableTerritories]'?: number | undefined
                'limit[betaAppLocalizations]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
                'limit[gameCenterEnabledVersions]'?: number | undefined
                'limit[inAppPurchases]'?: number | undefined
                'limit[preReleaseVersions]'?: number | undefined
                'limit[prices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'builds'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                'limit[appInfos]'?: number | undefined
                'limit[appStoreVersions]'?: number | undefined
                'limit[availableTerritories]'?: number | undefined
                'limit[betaAppLocalizations]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
                'limit[gameCenterEnabledVersions]'?: number | undefined
                'limit[inAppPurchases]'?: number | undefined
                'limit[preReleaseVersions]'?: number | undefined
                'limit[prices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AppUpdateRequest }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AppUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AppUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/apps/:id/appInfos': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
              }
            }
            output: AppInfosResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'contests'
                      | 'gambling'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'seventeenPlus'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appInfos]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'appStoreAgeRating'
                      | 'appStoreState'
                      | 'brazilAgeRating'
                      | 'kidsAgeBand'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
                'fields[appCategories]'?: ('parent' | 'platforms' | 'subcategories')[] | undefined
                'fields[appInfoLocalizations]'?:
                  | (
                      | 'appInfo'
                      | 'locale'
                      | 'name'
                      | 'privacyPolicyText'
                      | 'privacyPolicyUrl'
                      | 'subtitle'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'app'
                      | 'appInfoLocalizations'
                      | 'primaryCategory'
                      | 'primarySubcategoryOne'
                      | 'primarySubcategoryTwo'
                      | 'secondaryCategory'
                      | 'secondarySubcategoryOne'
                      | 'secondarySubcategoryTwo'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/appStoreVersions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[appStoreState]'?:
                  | (
                      | 'DEVELOPER_REMOVED_FROM_SALE'
                      | 'DEVELOPER_REJECTED'
                      | 'IN_REVIEW'
                      | 'INVALID_BINARY'
                      | 'METADATA_REJECTED'
                      | 'PENDING_APPLE_RELEASE'
                      | 'PENDING_CONTRACT'
                      | 'PENDING_DEVELOPER_RELEASE'
                      | 'PREPARE_FOR_SUBMISSION'
                      | 'PREORDER_READY_FOR_SALE'
                      | 'PROCESSING_FOR_APP_STORE'
                      | 'READY_FOR_SALE'
                      | 'REJECTED'
                      | 'REMOVED_FROM_SALE'
                      | 'WAITING_FOR_EXPORT_COMPLIANCE'
                      | 'WAITING_FOR_REVIEW'
                      | 'REPLACED_WITH_NEW_VERSION'
                    )[]
                  | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'idfaDeclaration'
                      | 'routingAppCoverage'
                    )[]
                  | undefined
              }
            }
            output: AppStoreVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[appStoreState]'?:
                  | (
                      | 'DEVELOPER_REMOVED_FROM_SALE'
                      | 'DEVELOPER_REJECTED'
                      | 'IN_REVIEW'
                      | 'INVALID_BINARY'
                      | 'METADATA_REJECTED'
                      | 'PENDING_APPLE_RELEASE'
                      | 'PENDING_CONTRACT'
                      | 'PENDING_DEVELOPER_RELEASE'
                      | 'PREPARE_FOR_SUBMISSION'
                      | 'PREORDER_READY_FOR_SALE'
                      | 'PROCESSING_FOR_APP_STORE'
                      | 'READY_FOR_SALE'
                      | 'REJECTED'
                      | 'REMOVED_FROM_SALE'
                      | 'WAITING_FOR_EXPORT_COMPLIANCE'
                      | 'WAITING_FOR_REVIEW'
                      | 'REPLACED_WITH_NEW_VERSION'
                    )[]
                  | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'idfaDeclaration'
                      | 'routingAppCoverage'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[appStoreState]'?:
                  | (
                      | 'DEVELOPER_REMOVED_FROM_SALE'
                      | 'DEVELOPER_REJECTED'
                      | 'IN_REVIEW'
                      | 'INVALID_BINARY'
                      | 'METADATA_REJECTED'
                      | 'PENDING_APPLE_RELEASE'
                      | 'PENDING_CONTRACT'
                      | 'PENDING_DEVELOPER_RELEASE'
                      | 'PREPARE_FOR_SUBMISSION'
                      | 'PREORDER_READY_FOR_SALE'
                      | 'PROCESSING_FOR_APP_STORE'
                      | 'READY_FOR_SALE'
                      | 'REJECTED'
                      | 'REMOVED_FROM_SALE'
                      | 'WAITING_FOR_EXPORT_COMPLIANCE'
                      | 'WAITING_FOR_REVIEW'
                      | 'REPLACED_WITH_NEW_VERSION'
                    )[]
                  | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'idfaDeclaration'
                      | 'routingAppCoverage'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[appStoreState]'?:
                  | (
                      | 'DEVELOPER_REMOVED_FROM_SALE'
                      | 'DEVELOPER_REJECTED'
                      | 'IN_REVIEW'
                      | 'INVALID_BINARY'
                      | 'METADATA_REJECTED'
                      | 'PENDING_APPLE_RELEASE'
                      | 'PENDING_CONTRACT'
                      | 'PENDING_DEVELOPER_RELEASE'
                      | 'PREPARE_FOR_SUBMISSION'
                      | 'PREORDER_READY_FOR_SALE'
                      | 'PROCESSING_FOR_APP_STORE'
                      | 'READY_FOR_SALE'
                      | 'REJECTED'
                      | 'REMOVED_FROM_SALE'
                      | 'WAITING_FOR_EXPORT_COMPLIANCE'
                      | 'WAITING_FOR_REVIEW'
                      | 'REPLACED_WITH_NEW_VERSION'
                    )[]
                  | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'fields[idfaDeclarations]'?:
                  | (
                      | 'appStoreVersion'
                      | 'attributesActionWithPreviousAd'
                      | 'attributesAppInstallationToPreviousAd'
                      | 'honorsLimitedAdTracking'
                      | 'servesAds'
                    )[]
                  | undefined
                'fields[appStoreVersionLocalizations]'?:
                  | (
                      | 'appPreviewSets'
                      | 'appScreenshotSets'
                      | 'appStoreVersion'
                      | 'description'
                      | 'keywords'
                      | 'locale'
                      | 'marketingUrl'
                      | 'promotionalText'
                      | 'supportUrl'
                      | 'whatsNew'
                    )[]
                  | undefined
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                'fields[appStoreVersionPhasedReleases]'?:
                  | (
                      | 'appStoreVersion'
                      | 'currentDayNumber'
                      | 'phasedReleaseState'
                      | 'startDate'
                      | 'totalPauseDuration'
                    )[]
                  | undefined
                'fields[ageRatingDeclarations]'?:
                  | (
                      | 'alcoholTobaccoOrDrugUseOrReferences'
                      | 'gamblingAndContests'
                      | 'gamblingSimulated'
                      | 'horrorOrFearThemes'
                      | 'kidsAgeBand'
                      | 'matureOrSuggestiveThemes'
                      | 'medicalOrTreatmentInformation'
                      | 'profanityOrCrudeHumor'
                      | 'sexualContentGraphicAndNudity'
                      | 'sexualContentOrNudity'
                      | 'unrestrictedWebAccess'
                      | 'violenceCartoonOrFantasy'
                      | 'violenceRealistic'
                      | 'violenceRealisticProlongedGraphicOrSadistic'
                    )[]
                  | undefined
                'fields[appStoreReviewDetails]'?:
                  | (
                      | 'appStoreReviewAttachments'
                      | 'appStoreVersion'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[appStoreVersionSubmissions]'?: 'appStoreVersion'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'idfaDeclaration'
                      | 'routingAppCoverage'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/availableTerritories': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: TerritoriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/betaAppLocalizations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BetaAppLocalizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/betaAppReviewDetail': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
              }
            }
            output: BetaAppReviewDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/betaGroups': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BetaGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/betaLicenseAgreement': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { 'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined }
            }
            output: BetaLicenseAgreementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { 'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { 'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { 'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/builds': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BuildsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/endUserLicenseAgreement': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
              }
            }
            output: EndUserLicenseAgreementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/gameCenterEnabledVersions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?: ('versionString' | '-versionString')[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'compatibleVersions')[] | undefined
              }
            }
            output: GameCenterEnabledVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?: ('versionString' | '-versionString')[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'compatibleVersions')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?: ('versionString' | '-versionString')[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'compatibleVersions')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?: ('versionString' | '-versionString')[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'compatibleVersions')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/inAppPurchases': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[inAppPurchaseType]'?:
                  | (
                      | 'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION'
                      | 'NON_CONSUMABLE'
                      | 'CONSUMABLE'
                      | 'NON_RENEWING_SUBSCRIPTION'
                      | 'FREE_SUBSCRIPTION'
                    )[]
                  | undefined
                'filter[canBeSubmitted]'?: string[] | undefined
                sort?:
                  | (
                      | 'inAppPurchaseType'
                      | '-inAppPurchaseType'
                      | 'productId'
                      | '-productId'
                      | 'referenceName'
                      | '-referenceName'
                    )[]
                  | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'apps'[] | undefined
              }
            }
            output: InAppPurchasesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[inAppPurchaseType]'?:
                  | (
                      | 'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION'
                      | 'NON_CONSUMABLE'
                      | 'CONSUMABLE'
                      | 'NON_RENEWING_SUBSCRIPTION'
                      | 'FREE_SUBSCRIPTION'
                    )[]
                  | undefined
                'filter[canBeSubmitted]'?: string[] | undefined
                sort?:
                  | (
                      | 'inAppPurchaseType'
                      | '-inAppPurchaseType'
                      | 'productId'
                      | '-productId'
                      | 'referenceName'
                      | '-referenceName'
                    )[]
                  | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'apps'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[inAppPurchaseType]'?:
                  | (
                      | 'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION'
                      | 'NON_CONSUMABLE'
                      | 'CONSUMABLE'
                      | 'NON_RENEWING_SUBSCRIPTION'
                      | 'FREE_SUBSCRIPTION'
                    )[]
                  | undefined
                'filter[canBeSubmitted]'?: string[] | undefined
                sort?:
                  | (
                      | 'inAppPurchaseType'
                      | '-inAppPurchaseType'
                      | 'productId'
                      | '-productId'
                      | 'referenceName'
                      | '-referenceName'
                    )[]
                  | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'apps'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[inAppPurchaseType]'?:
                  | (
                      | 'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION'
                      | 'NON_CONSUMABLE'
                      | 'CONSUMABLE'
                      | 'NON_RENEWING_SUBSCRIPTION'
                      | 'FREE_SUBSCRIPTION'
                    )[]
                  | undefined
                'filter[canBeSubmitted]'?: string[] | undefined
                sort?:
                  | (
                      | 'inAppPurchaseType'
                      | '-inAppPurchaseType'
                      | 'productId'
                      | '-productId'
                      | 'referenceName'
                      | '-referenceName'
                    )[]
                  | undefined
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'apps'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/perfPowerMetrics': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[deviceType]'?: string[] | undefined
                'filter[metricType]'?:
                  | (
                      | 'DISK'
                      | 'HANG'
                      | 'BATTERY'
                      | 'LAUNCH'
                      | 'MEMORY'
                      | 'ANIMATION'
                      | 'TERMINATION'
                    )[]
                  | undefined
                'filter[platform]'?: 'IOS'[] | undefined
              }
            }
            output: PerfPowerMetricsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[deviceType]'?: string[] | undefined
                'filter[metricType]'?:
                  | (
                      | 'DISK'
                      | 'HANG'
                      | 'BATTERY'
                      | 'LAUNCH'
                      | 'MEMORY'
                      | 'ANIMATION'
                      | 'TERMINATION'
                    )[]
                  | undefined
                'filter[platform]'?: 'IOS'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[deviceType]'?: string[] | undefined
                'filter[metricType]'?:
                  | (
                      | 'DISK'
                      | 'HANG'
                      | 'BATTERY'
                      | 'LAUNCH'
                      | 'MEMORY'
                      | 'ANIMATION'
                      | 'TERMINATION'
                    )[]
                  | undefined
                'filter[platform]'?: 'IOS'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[deviceType]'?: string[] | undefined
                'filter[metricType]'?:
                  | (
                      | 'DISK'
                      | 'HANG'
                      | 'BATTERY'
                      | 'LAUNCH'
                      | 'MEMORY'
                      | 'ANIMATION'
                      | 'TERMINATION'
                    )[]
                  | undefined
                'filter[platform]'?: 'IOS'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/preOrder': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
              }
            }
            output: AppPreOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPreOrders]'?:
                  | ('app' | 'appReleaseDate' | 'preOrderAvailableDate')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/preReleaseVersions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: PreReleaseVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/prices': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'priceTier')[] | undefined
              }
            }
            output: AppPricesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'priceTier')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'priceTier')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appPrices]'?: ('app' | 'priceTier')[] | undefined
                'fields[appPriceTiers]'?: 'pricePoints'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'priceTier')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/apps/:id/relationships/betaTesters': {
      $delete:
        | {
            input: { param: { id: string } } & { json: AppBetaTestersLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: AppBetaTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AppBetaTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AppBetaTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaAppLocalizations': {
      $get:
        | {
            input: {
              query: {
                'filter[locale]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: BetaAppLocalizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[locale]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[locale]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: BetaAppLocalizationCreateRequest }
            output: BetaAppLocalizationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BetaAppLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BetaAppLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BetaAppLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaAppLocalizations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: BetaAppLocalizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppLocalizations]'?:
                  | (
                      | 'app'
                      | 'description'
                      | 'feedbackEmail'
                      | 'locale'
                      | 'marketingUrl'
                      | 'privacyPolicyUrl'
                      | 'tvOsPrivacyPolicy'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BetaAppLocalizationUpdateRequest }
            output: BetaAppLocalizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BetaAppLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BetaAppLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaAppLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaAppLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaAppLocalizations/:id/app': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaAppReviewDetails': {
      $get:
        | {
            input: {
              query: {
                'filter[app]': string[]
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: BetaAppReviewDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[app]': string[]
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[app]': string[]
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/betaAppReviewDetails/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: BetaAppReviewDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewDetails]'?:
                  | (
                      | 'app'
                      | 'contactEmail'
                      | 'contactFirstName'
                      | 'contactLastName'
                      | 'contactPhone'
                      | 'demoAccountName'
                      | 'demoAccountPassword'
                      | 'demoAccountRequired'
                      | 'notes'
                    )[]
                  | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BetaAppReviewDetailUpdateRequest }
            output: BetaAppReviewDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BetaAppReviewDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BetaAppReviewDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaAppReviewDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaAppReviewDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaAppReviewDetails/:id/app': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaAppReviewSubmissions': {
      $get:
        | {
            input: {
              query: {
                'filter[betaReviewState]'?:
                  | ('WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED')[]
                  | undefined
                'filter[build]': string[]
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                limit?: number | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BetaAppReviewSubmissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[betaReviewState]'?:
                  | ('WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED')[]
                  | undefined
                'filter[build]': string[]
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                limit?: number | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[betaReviewState]'?:
                  | ('WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED')[]
                  | undefined
                'filter[build]': string[]
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                limit?: number | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: BetaAppReviewSubmissionCreateRequest }
            output: BetaAppReviewSubmissionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BetaAppReviewSubmissionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BetaAppReviewSubmissionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BetaAppReviewSubmissionCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaAppReviewSubmissions/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BetaAppReviewSubmissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaAppReviewSubmissions/:id/build': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BuildResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaBuildLocalizations': {
      $get:
        | {
            input: {
              query: {
                'filter[locale]'?: string[] | undefined
                'filter[build]'?: string[] | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                limit?: number | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BetaBuildLocalizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[locale]'?: string[] | undefined
                'filter[build]'?: string[] | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                limit?: number | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[locale]'?: string[] | undefined
                'filter[build]'?: string[] | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                limit?: number | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: BetaBuildLocalizationCreateRequest }
            output: BetaBuildLocalizationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BetaBuildLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BetaBuildLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BetaBuildLocalizationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaBuildLocalizations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BetaBuildLocalizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BetaBuildLocalizationUpdateRequest }
            output: BetaBuildLocalizationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BetaBuildLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BetaBuildLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaBuildLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaBuildLocalizationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaBuildLocalizations/:id/build': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BuildResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaGroups': {
      $get:
        | {
            input: {
              query: {
                'filter[isInternalGroup]'?: string[] | undefined
                'filter[name]'?: string[] | undefined
                'filter[publicLink]'?: string[] | undefined
                'filter[publicLinkEnabled]'?: string[] | undefined
                'filter[publicLinkLimitEnabled]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'createdDate'
                      | '-createdDate'
                      | 'name'
                      | '-name'
                      | 'publicLinkEnabled'
                      | '-publicLinkEnabled'
                      | 'publicLinkLimit'
                      | '-publicLinkLimit'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'betaTesters' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaTesters]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: BetaGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[isInternalGroup]'?: string[] | undefined
                'filter[name]'?: string[] | undefined
                'filter[publicLink]'?: string[] | undefined
                'filter[publicLinkEnabled]'?: string[] | undefined
                'filter[publicLinkLimitEnabled]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'createdDate'
                      | '-createdDate'
                      | 'name'
                      | '-name'
                      | 'publicLinkEnabled'
                      | '-publicLinkEnabled'
                      | 'publicLinkLimit'
                      | '-publicLinkLimit'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'betaTesters' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaTesters]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[isInternalGroup]'?: string[] | undefined
                'filter[name]'?: string[] | undefined
                'filter[publicLink]'?: string[] | undefined
                'filter[publicLinkEnabled]'?: string[] | undefined
                'filter[publicLinkLimitEnabled]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'createdDate'
                      | '-createdDate'
                      | 'name'
                      | '-name'
                      | 'publicLinkEnabled'
                      | '-publicLinkEnabled'
                      | 'publicLinkLimit'
                      | '-publicLinkLimit'
                    )[]
                  | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'betaTesters' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaTesters]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: BetaGroupCreateRequest }
            output: BetaGroupResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BetaGroupCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BetaGroupCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BetaGroupCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaGroups/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                include?: ('app' | 'betaTesters' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaTesters]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: BetaGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                include?: ('app' | 'betaTesters' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaTesters]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                include?: ('app' | 'betaTesters' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaTesters]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                include?: ('app' | 'betaTesters' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaTesters]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BetaGroupUpdateRequest }
            output: BetaGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaGroups/:id/app': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaGroups/:id/betaTesters': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BetaTestersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaGroups/:id/builds': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BuildsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaGroups/:id/relationships/betaTesters': {
      $delete:
        | {
            input: { param: { id: string } } & { json: BetaGroupBetaTestersLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBetaTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBetaTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBetaTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: BetaGroupBetaTestersLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: BetaGroupBetaTestersLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBetaTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBetaTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBetaTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaGroups/:id/relationships/builds': {
      $delete:
        | {
            input: { param: { id: string } } & { json: BetaGroupBuildsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: BetaGroupBuildsLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: BetaGroupBuildsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaGroupBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaLicenseAgreements': {
      $get:
        | {
            input: {
              query: {
                'filter[app]'?: string[] | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: BetaLicenseAgreementsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[app]'?: string[] | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[app]'?: string[] | undefined
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                limit?: number | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/betaLicenseAgreements/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: BetaLicenseAgreementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaLicenseAgreements]'?: ('agreementText' | 'app')[] | undefined
                include?: 'app'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BetaLicenseAgreementUpdateRequest }
            output: BetaLicenseAgreementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BetaLicenseAgreementUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BetaLicenseAgreementUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaLicenseAgreementUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaLicenseAgreementUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaLicenseAgreements/:id/app': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaTesterInvitations': {
      $post:
        | {
            input: { json: BetaTesterInvitationCreateRequest }
            output: BetaTesterInvitationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BetaTesterInvitationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BetaTesterInvitationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BetaTesterInvitationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaTesters': {
      $get:
        | {
            input: {
              query: {
                'filter[email]'?: string[] | undefined
                'filter[firstName]'?: string[] | undefined
                'filter[inviteType]'?: ('EMAIL' | 'PUBLIC_LINK')[] | undefined
                'filter[lastName]'?: string[] | undefined
                'filter[apps]'?: string[] | undefined
                'filter[betaGroups]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                sort?:
                  | (
                      | 'email'
                      | '-email'
                      | 'firstName'
                      | '-firstName'
                      | 'inviteType'
                      | '-inviteType'
                      | 'lastName'
                      | '-lastName'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('apps' | 'betaGroups' | 'builds')[] | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[apps]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: BetaTestersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[email]'?: string[] | undefined
                'filter[firstName]'?: string[] | undefined
                'filter[inviteType]'?: ('EMAIL' | 'PUBLIC_LINK')[] | undefined
                'filter[lastName]'?: string[] | undefined
                'filter[apps]'?: string[] | undefined
                'filter[betaGroups]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                sort?:
                  | (
                      | 'email'
                      | '-email'
                      | 'firstName'
                      | '-firstName'
                      | 'inviteType'
                      | '-inviteType'
                      | 'lastName'
                      | '-lastName'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('apps' | 'betaGroups' | 'builds')[] | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[apps]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[email]'?: string[] | undefined
                'filter[firstName]'?: string[] | undefined
                'filter[inviteType]'?: ('EMAIL' | 'PUBLIC_LINK')[] | undefined
                'filter[lastName]'?: string[] | undefined
                'filter[apps]'?: string[] | undefined
                'filter[betaGroups]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                sort?:
                  | (
                      | 'email'
                      | '-email'
                      | 'firstName'
                      | '-firstName'
                      | 'inviteType'
                      | '-inviteType'
                      | 'lastName'
                      | '-lastName'
                    )[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('apps' | 'betaGroups' | 'builds')[] | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[apps]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: BetaTesterCreateRequest }
            output: BetaTesterResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BetaTesterCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BetaTesterCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BetaTesterCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaTesters/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                include?: ('apps' | 'betaGroups' | 'builds')[] | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[apps]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: BetaTesterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                include?: ('apps' | 'betaGroups' | 'builds')[] | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[apps]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                include?: ('apps' | 'betaGroups' | 'builds')[] | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[apps]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                include?: ('apps' | 'betaGroups' | 'builds')[] | undefined
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[apps]'?: number | undefined
                'limit[betaGroups]'?: number | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaTesters/:id/apps': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: AppsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaTesters/:id/betaGroups': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BetaGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaGroups]'?:
                  | (
                      | 'app'
                      | 'betaTesters'
                      | 'builds'
                      | 'createdDate'
                      | 'feedbackEnabled'
                      | 'isInternalGroup'
                      | 'name'
                      | 'publicLink'
                      | 'publicLinkEnabled'
                      | 'publicLinkId'
                      | 'publicLinkLimit'
                      | 'publicLinkLimitEnabled'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaTesters/:id/builds': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BuildsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaTesters/:id/relationships/apps': {
      $delete:
        | {
            input: { param: { id: string } } & { json: BetaTesterAppsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: BetaTesterAppsLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/betaTesters/:id/relationships/betaGroups': {
      $delete:
        | {
            input: { param: { id: string } } & { json: BetaTesterBetaGroupsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: BetaTesterBetaGroupsLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: BetaTesterBetaGroupsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/betaTesters/:id/relationships/builds': {
      $delete:
        | {
            input: { param: { id: string } } & { json: BetaTesterBuildsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: BetaTesterBuildsLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: BetaTesterBuildsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BetaTesterBuildsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/buildBetaDetails': {
      $get:
        | {
            input: {
              query: {
                'filter[build]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                limit?: number | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BuildBetaDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[build]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                limit?: number | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[build]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                limit?: number | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/buildBetaDetails/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BuildBetaDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                include?: 'build'[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BuildBetaDetailUpdateRequest }
            output: BuildBetaDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaDetailUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/buildBetaDetails/:id/build': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: BuildResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/buildBetaNotifications': {
      $post:
        | {
            input: { json: BuildBetaNotificationCreateRequest }
            output: BuildBetaNotificationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BuildBetaNotificationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BuildBetaNotificationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BuildBetaNotificationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/builds': {
      $get:
        | {
            input: {
              query: {
                'filter[betaAppReviewSubmission.betaReviewState]'?:
                  | ('WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED')[]
                  | undefined
                'filter[expired]'?: string[] | undefined
                'filter[preReleaseVersion.platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[preReleaseVersion.version]'?: string[] | undefined
                'filter[processingState]'?:
                  | ('PROCESSING' | 'FAILED' | 'INVALID' | 'VALID')[]
                  | undefined
                'filter[usesNonExemptEncryption]'?: string[] | undefined
                'filter[version]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[appStoreVersion]'?: string[] | undefined
                'filter[betaGroups]'?: string[] | undefined
                'filter[preReleaseVersion]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'preReleaseVersion'
                      | '-preReleaseVersion'
                      | 'uploadedDate'
                      | '-uploadedDate'
                      | 'version'
                      | '-version'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'buildBetaDetail'
                      | 'icons'
                      | 'individualTesters'
                      | 'preReleaseVersion'
                    )[]
                  | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaBuildLocalizations]'?: number | undefined
                'limit[icons]'?: number | undefined
                'limit[individualTesters]'?: number | undefined
              }
            }
            output: BuildsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[betaAppReviewSubmission.betaReviewState]'?:
                  | ('WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED')[]
                  | undefined
                'filter[expired]'?: string[] | undefined
                'filter[preReleaseVersion.platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[preReleaseVersion.version]'?: string[] | undefined
                'filter[processingState]'?:
                  | ('PROCESSING' | 'FAILED' | 'INVALID' | 'VALID')[]
                  | undefined
                'filter[usesNonExemptEncryption]'?: string[] | undefined
                'filter[version]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[appStoreVersion]'?: string[] | undefined
                'filter[betaGroups]'?: string[] | undefined
                'filter[preReleaseVersion]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'preReleaseVersion'
                      | '-preReleaseVersion'
                      | 'uploadedDate'
                      | '-uploadedDate'
                      | 'version'
                      | '-version'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'buildBetaDetail'
                      | 'icons'
                      | 'individualTesters'
                      | 'preReleaseVersion'
                    )[]
                  | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaBuildLocalizations]'?: number | undefined
                'limit[icons]'?: number | undefined
                'limit[individualTesters]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[betaAppReviewSubmission.betaReviewState]'?:
                  | ('WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'REJECTED' | 'APPROVED')[]
                  | undefined
                'filter[expired]'?: string[] | undefined
                'filter[preReleaseVersion.platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[preReleaseVersion.version]'?: string[] | undefined
                'filter[processingState]'?:
                  | ('PROCESSING' | 'FAILED' | 'INVALID' | 'VALID')[]
                  | undefined
                'filter[usesNonExemptEncryption]'?: string[] | undefined
                'filter[version]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[appStoreVersion]'?: string[] | undefined
                'filter[betaGroups]'?: string[] | undefined
                'filter[preReleaseVersion]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'preReleaseVersion'
                      | '-preReleaseVersion'
                      | 'uploadedDate'
                      | '-uploadedDate'
                      | 'version'
                      | '-version'
                    )[]
                  | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
                include?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'buildBetaDetail'
                      | 'icons'
                      | 'individualTesters'
                      | 'preReleaseVersion'
                    )[]
                  | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaBuildLocalizations]'?: number | undefined
                'limit[icons]'?: number | undefined
                'limit[individualTesters]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/builds/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'buildBetaDetail'
                      | 'icons'
                      | 'individualTesters'
                      | 'preReleaseVersion'
                    )[]
                  | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaBuildLocalizations]'?: number | undefined
                'limit[icons]'?: number | undefined
                'limit[individualTesters]'?: number | undefined
              }
            }
            output: BuildResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'buildBetaDetail'
                      | 'icons'
                      | 'individualTesters'
                      | 'preReleaseVersion'
                    )[]
                  | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaBuildLocalizations]'?: number | undefined
                'limit[icons]'?: number | undefined
                'limit[individualTesters]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'buildBetaDetail'
                      | 'icons'
                      | 'individualTesters'
                      | 'preReleaseVersion'
                    )[]
                  | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaBuildLocalizations]'?: number | undefined
                'limit[icons]'?: number | undefined
                'limit[individualTesters]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                include?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'buildBetaDetail'
                      | 'icons'
                      | 'individualTesters'
                      | 'preReleaseVersion'
                    )[]
                  | undefined
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                'fields[perfPowerMetrics]'?:
                  | ('deviceType' | 'metricType' | 'platform')[]
                  | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[betaBuildLocalizations]'?: number | undefined
                'limit[icons]'?: number | undefined
                'limit[individualTesters]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BuildUpdateRequest }
            output: BuildResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BuildUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BuildUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BuildUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BuildUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/builds/:id/app': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/appEncryptionDeclaration': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
              }
            }
            output: AppEncryptionDeclarationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appEncryptionDeclarations]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclarationState'
                      | 'availableOnFrenchStore'
                      | 'builds'
                      | 'codeValue'
                      | 'containsProprietaryCryptography'
                      | 'containsThirdPartyCryptography'
                      | 'documentName'
                      | 'documentType'
                      | 'documentUrl'
                      | 'exempt'
                      | 'platform'
                      | 'uploadedDate'
                      | 'usesEncryption'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/appStoreVersion': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
              }
            }
            output: AppStoreVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[appStoreVersions]'?:
                  | (
                      | 'ageRatingDeclaration'
                      | 'app'
                      | 'appStoreReviewDetail'
                      | 'appStoreState'
                      | 'appStoreVersionLocalizations'
                      | 'appStoreVersionPhasedRelease'
                      | 'appStoreVersionSubmission'
                      | 'build'
                      | 'copyright'
                      | 'createdDate'
                      | 'downloadable'
                      | 'earliestReleaseDate'
                      | 'idfaDeclaration'
                      | 'platform'
                      | 'releaseType'
                      | 'routingAppCoverage'
                      | 'usesIdfa'
                      | 'versionString'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/betaAppReviewSubmission': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
              }
            }
            output: BetaAppReviewSubmissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaAppReviewSubmissions]'?: ('betaReviewState' | 'build')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/betaBuildLocalizations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                limit?: number | undefined
              }
            }
            output: BetaBuildLocalizationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaBuildLocalizations]'?: ('build' | 'locale' | 'whatsNew')[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/buildBetaDetail': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
              }
            }
            output: BuildBetaDetailResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildBetaDetails]'?:
                  | ('autoNotifyEnabled' | 'build' | 'externalBuildState' | 'internalBuildState')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/diagnosticSignatures': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[diagnosticType]'?: 'DISK_WRITES'[] | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: DiagnosticSignaturesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[diagnosticType]'?: 'DISK_WRITES'[] | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[diagnosticType]'?: 'DISK_WRITES'[] | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[diagnosticType]'?: 'DISK_WRITES'[] | undefined
                'fields[diagnosticSignatures]'?:
                  | ('diagnosticType' | 'logs' | 'signature' | 'weight')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/icons': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                limit?: number | undefined
              }
            }
            output: BuildIconsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[buildIcons]'?: ('iconAsset' | 'iconType')[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/individualTesters': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BetaTestersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[betaTesters]'?:
                  | (
                      | 'apps'
                      | 'betaGroups'
                      | 'builds'
                      | 'email'
                      | 'firstName'
                      | 'inviteType'
                      | 'lastName'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/perfPowerMetrics': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[deviceType]'?: string[] | undefined
                'filter[metricType]'?:
                  | (
                      | 'DISK'
                      | 'HANG'
                      | 'BATTERY'
                      | 'LAUNCH'
                      | 'MEMORY'
                      | 'ANIMATION'
                      | 'TERMINATION'
                    )[]
                  | undefined
                'filter[platform]'?: 'IOS'[] | undefined
              }
            }
            output: PerfPowerMetricsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[deviceType]'?: string[] | undefined
                'filter[metricType]'?:
                  | (
                      | 'DISK'
                      | 'HANG'
                      | 'BATTERY'
                      | 'LAUNCH'
                      | 'MEMORY'
                      | 'ANIMATION'
                      | 'TERMINATION'
                    )[]
                  | undefined
                'filter[platform]'?: 'IOS'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[deviceType]'?: string[] | undefined
                'filter[metricType]'?:
                  | (
                      | 'DISK'
                      | 'HANG'
                      | 'BATTERY'
                      | 'LAUNCH'
                      | 'MEMORY'
                      | 'ANIMATION'
                      | 'TERMINATION'
                    )[]
                  | undefined
                'filter[platform]'?: 'IOS'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[deviceType]'?: string[] | undefined
                'filter[metricType]'?:
                  | (
                      | 'DISK'
                      | 'HANG'
                      | 'BATTERY'
                      | 'LAUNCH'
                      | 'MEMORY'
                      | 'ANIMATION'
                      | 'TERMINATION'
                    )[]
                  | undefined
                'filter[platform]'?: 'IOS'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/preReleaseVersion': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
              }
            }
            output: PrereleaseVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/builds/:id/relationships/appEncryptionDeclaration': {
      $get:
        | {
            input: { param: { id: string } }
            output: BuildAppEncryptionDeclarationLinkageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BuildAppEncryptionDeclarationLinkageRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BuildAppEncryptionDeclarationLinkageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BuildAppEncryptionDeclarationLinkageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BuildAppEncryptionDeclarationLinkageRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/builds/:id/relationships/betaGroups': {
      $delete:
        | {
            input: { param: { id: string } } & { json: BuildBetaGroupsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { id: string } } & { json: BuildBetaGroupsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BuildBetaGroupsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/builds/:id/relationships/individualTesters': {
      $delete:
        | {
            input: { param: { id: string } } & { json: BuildIndividualTestersLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BuildIndividualTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BuildIndividualTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BuildIndividualTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: BuildIndividualTestersLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: BuildIndividualTestersLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: BuildIndividualTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BuildIndividualTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BuildIndividualTestersLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/bundleIdCapabilities': {
      $post:
        | {
            input: { json: BundleIdCapabilityCreateRequest }
            output: BundleIdCapabilityResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BundleIdCapabilityCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BundleIdCapabilityCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BundleIdCapabilityCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/bundleIdCapabilities/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BundleIdCapabilityUpdateRequest }
            output: BundleIdCapabilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BundleIdCapabilityUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BundleIdCapabilityUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BundleIdCapabilityUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BundleIdCapabilityUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/bundleIds': {
      $get:
        | {
            input: {
              query: {
                'filter[identifier]'?: string[] | undefined
                'filter[name]'?: string[] | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS')[] | undefined
                'filter[seedId]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'id'
                      | '-id'
                      | 'identifier'
                      | '-identifier'
                      | 'name'
                      | '-name'
                      | 'platform'
                      | '-platform'
                      | 'seedId'
                      | '-seedId'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'bundleIdCapabilities' | 'profiles')[] | undefined
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[bundleIdCapabilities]'?: number | undefined
                'limit[profiles]'?: number | undefined
              }
            }
            output: BundleIdsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[identifier]'?: string[] | undefined
                'filter[name]'?: string[] | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS')[] | undefined
                'filter[seedId]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'id'
                      | '-id'
                      | 'identifier'
                      | '-identifier'
                      | 'name'
                      | '-name'
                      | 'platform'
                      | '-platform'
                      | 'seedId'
                      | '-seedId'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'bundleIdCapabilities' | 'profiles')[] | undefined
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[bundleIdCapabilities]'?: number | undefined
                'limit[profiles]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[identifier]'?: string[] | undefined
                'filter[name]'?: string[] | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS')[] | undefined
                'filter[seedId]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'id'
                      | '-id'
                      | 'identifier'
                      | '-identifier'
                      | 'name'
                      | '-name'
                      | 'platform'
                      | '-platform'
                      | 'seedId'
                      | '-seedId'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'bundleIdCapabilities' | 'profiles')[] | undefined
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[bundleIdCapabilities]'?: number | undefined
                'limit[profiles]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: BundleIdCreateRequest }
            output: BundleIdResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BundleIdCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BundleIdCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BundleIdCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/bundleIds/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                include?: ('app' | 'bundleIdCapabilities' | 'profiles')[] | undefined
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[bundleIdCapabilities]'?: number | undefined
                'limit[profiles]'?: number | undefined
              }
            }
            output: BundleIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                include?: ('app' | 'bundleIdCapabilities' | 'profiles')[] | undefined
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[bundleIdCapabilities]'?: number | undefined
                'limit[profiles]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                include?: ('app' | 'bundleIdCapabilities' | 'profiles')[] | undefined
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[bundleIdCapabilities]'?: number | undefined
                'limit[profiles]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                include?: ('app' | 'bundleIdCapabilities' | 'profiles')[] | undefined
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[bundleIdCapabilities]'?: number | undefined
                'limit[profiles]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: BundleIdUpdateRequest }
            output: BundleIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BundleIdUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BundleIdUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BundleIdUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BundleIdUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/bundleIds/:id/app': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/bundleIds/:id/bundleIdCapabilities': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BundleIdCapabilitiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIdCapabilities]'?:
                  | ('bundleId' | 'capabilityType' | 'settings')[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/bundleIds/:id/profiles': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/certificates': {
      $get:
        | {
            input: {
              query: {
                'filter[certificateType]'?:
                  | (
                      | 'IOS_DEVELOPMENT'
                      | 'IOS_DISTRIBUTION'
                      | 'MAC_APP_DISTRIBUTION'
                      | 'MAC_INSTALLER_DISTRIBUTION'
                      | 'MAC_APP_DEVELOPMENT'
                      | 'DEVELOPER_ID_KEXT'
                      | 'DEVELOPER_ID_APPLICATION'
                      | 'DEVELOPMENT'
                      | 'DISTRIBUTION'
                    )[]
                  | undefined
                'filter[displayName]'?: string[] | undefined
                'filter[serialNumber]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'certificateType'
                      | '-certificateType'
                      | 'displayName'
                      | '-displayName'
                      | 'id'
                      | '-id'
                      | 'serialNumber'
                      | '-serialNumber'
                    )[]
                  | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: CertificatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[certificateType]'?:
                  | (
                      | 'IOS_DEVELOPMENT'
                      | 'IOS_DISTRIBUTION'
                      | 'MAC_APP_DISTRIBUTION'
                      | 'MAC_INSTALLER_DISTRIBUTION'
                      | 'MAC_APP_DEVELOPMENT'
                      | 'DEVELOPER_ID_KEXT'
                      | 'DEVELOPER_ID_APPLICATION'
                      | 'DEVELOPMENT'
                      | 'DISTRIBUTION'
                    )[]
                  | undefined
                'filter[displayName]'?: string[] | undefined
                'filter[serialNumber]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'certificateType'
                      | '-certificateType'
                      | 'displayName'
                      | '-displayName'
                      | 'id'
                      | '-id'
                      | 'serialNumber'
                      | '-serialNumber'
                    )[]
                  | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[certificateType]'?:
                  | (
                      | 'IOS_DEVELOPMENT'
                      | 'IOS_DISTRIBUTION'
                      | 'MAC_APP_DISTRIBUTION'
                      | 'MAC_INSTALLER_DISTRIBUTION'
                      | 'MAC_APP_DEVELOPMENT'
                      | 'DEVELOPER_ID_KEXT'
                      | 'DEVELOPER_ID_APPLICATION'
                      | 'DEVELOPMENT'
                      | 'DISTRIBUTION'
                    )[]
                  | undefined
                'filter[displayName]'?: string[] | undefined
                'filter[serialNumber]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'certificateType'
                      | '-certificateType'
                      | 'displayName'
                      | '-displayName'
                      | 'id'
                      | '-id'
                      | 'serialNumber'
                      | '-serialNumber'
                    )[]
                  | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: CertificateCreateRequest }
            output: CertificateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CertificateCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CertificateCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CertificateCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/certificates/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
              }
            }
            output: CertificateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/devices': {
      $get:
        | {
            input: {
              query: {
                'filter[name]'?: string[] | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS')[] | undefined
                'filter[status]'?: ('ENABLED' | 'DISABLED')[] | undefined
                'filter[udid]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'id'
                      | '-id'
                      | 'name'
                      | '-name'
                      | 'platform'
                      | '-platform'
                      | 'status'
                      | '-status'
                      | 'udid'
                      | '-udid'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: DevicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[name]'?: string[] | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS')[] | undefined
                'filter[status]'?: ('ENABLED' | 'DISABLED')[] | undefined
                'filter[udid]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'id'
                      | '-id'
                      | 'name'
                      | '-name'
                      | 'platform'
                      | '-platform'
                      | 'status'
                      | '-status'
                      | 'udid'
                      | '-udid'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[name]'?: string[] | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS')[] | undefined
                'filter[status]'?: ('ENABLED' | 'DISABLED')[] | undefined
                'filter[udid]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'id'
                      | '-id'
                      | 'name'
                      | '-name'
                      | 'platform'
                      | '-platform'
                      | 'status'
                      | '-status'
                      | 'udid'
                      | '-udid'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: DeviceCreateRequest }
            output: DeviceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DeviceCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeviceCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DeviceCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/devices/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
              }
            }
            output: DeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: DeviceUpdateRequest }
            output: DeviceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DeviceUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DeviceUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: DeviceUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: DeviceUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/diagnosticSignatures/:id/logs': {
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: DiagnosticLogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/endUserLicenseAgreements': {
      $post:
        | {
            input: { json: EndUserLicenseAgreementCreateRequest }
            output: EndUserLicenseAgreementResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: EndUserLicenseAgreementCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EndUserLicenseAgreementCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EndUserLicenseAgreementCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/endUserLicenseAgreements/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                include?: ('app' | 'territories')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'limit[territories]'?: number | undefined
              }
            }
            output: EndUserLicenseAgreementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                include?: ('app' | 'territories')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'limit[territories]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                include?: ('app' | 'territories')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'limit[territories]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[endUserLicenseAgreements]'?:
                  | ('agreementText' | 'app' | 'territories')[]
                  | undefined
                include?: ('app' | 'territories')[] | undefined
                'fields[territories]'?: 'currency'[] | undefined
                'limit[territories]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: EndUserLicenseAgreementUpdateRequest }
            output: EndUserLicenseAgreementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: EndUserLicenseAgreementUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: EndUserLicenseAgreementUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: EndUserLicenseAgreementUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: EndUserLicenseAgreementUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/endUserLicenseAgreements/:id/territories': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: TerritoriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/financeReports': {
      $get:
        | {
            input: {
              query: {
                'filter[regionCode]': string[]
                'filter[reportDate]': string[]
                'filter[reportType]': ('FINANCIAL' | 'FINANCE_DETAIL')[]
                'filter[vendorNumber]': string[]
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[regionCode]': string[]
                'filter[reportDate]': string[]
                'filter[reportType]': ('FINANCIAL' | 'FINANCE_DETAIL')[]
                'filter[vendorNumber]': string[]
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[regionCode]': string[]
                'filter[reportDate]': string[]
                'filter[reportType]': ('FINANCIAL' | 'FINANCE_DETAIL')[]
                'filter[vendorNumber]': string[]
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/gameCenterEnabledVersions/:id/compatibleVersions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?: ('versionString' | '-versionString')[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'compatibleVersions')[] | undefined
              }
            }
            output: GameCenterEnabledVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?: ('versionString' | '-versionString')[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'compatibleVersions')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?: ('versionString' | '-versionString')[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'compatibleVersions')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[versionString]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[id]'?: string[] | undefined
                sort?: ('versionString' | '-versionString')[] | undefined
                'fields[gameCenterEnabledVersions]'?:
                  | ('app' | 'compatibleVersions' | 'iconAsset' | 'platform' | 'versionString')[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'compatibleVersions')[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/gameCenterEnabledVersions/:id/relationships/compatibleVersions': {
      $delete:
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: GameCenterEnabledVersionCompatibleVersionsLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/idfaDeclarations': {
      $post:
        | {
            input: { json: IdfaDeclarationCreateRequest }
            output: IdfaDeclarationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: IdfaDeclarationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: IdfaDeclarationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: IdfaDeclarationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/idfaDeclarations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: IdfaDeclarationUpdateRequest }
            output: IdfaDeclarationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IdfaDeclarationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IdfaDeclarationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IdfaDeclarationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: IdfaDeclarationUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/inAppPurchases/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                include?: 'apps'[] | undefined
                'limit[apps]'?: number | undefined
              }
            }
            output: InAppPurchaseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                include?: 'apps'[] | undefined
                'limit[apps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                include?: 'apps'[] | undefined
                'limit[apps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[inAppPurchases]'?:
                  | ('apps' | 'inAppPurchaseType' | 'productId' | 'referenceName' | 'state')[]
                  | undefined
                include?: 'apps'[] | undefined
                'limit[apps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/preReleaseVersions': {
      $get:
        | {
            input: {
              query: {
                'filter[builds.expired]'?: string[] | undefined
                'filter[builds.processingState]'?:
                  | ('PROCESSING' | 'FAILED' | 'INVALID' | 'VALID')[]
                  | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[version]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                sort?: ('version' | '-version')[] | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: PreReleaseVersionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[builds.expired]'?: string[] | undefined
                'filter[builds.processingState]'?:
                  | ('PROCESSING' | 'FAILED' | 'INVALID' | 'VALID')[]
                  | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[version]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                sort?: ('version' | '-version')[] | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[builds.expired]'?: string[] | undefined
                'filter[builds.processingState]'?:
                  | ('PROCESSING' | 'FAILED' | 'INVALID' | 'VALID')[]
                  | undefined
                'filter[platform]'?: ('IOS' | 'MAC_OS' | 'TV_OS')[] | undefined
                'filter[version]'?: string[] | undefined
                'filter[app]'?: string[] | undefined
                'filter[builds]'?: string[] | undefined
                sort?: ('version' | '-version')[] | undefined
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                limit?: number | undefined
                include?: ('app' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/preReleaseVersions/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                include?: ('app' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: PrereleaseVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                include?: ('app' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                include?: ('app' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[preReleaseVersions]'?:
                  | ('app' | 'builds' | 'platform' | 'version')[]
                  | undefined
                include?: ('app' | 'builds')[] | undefined
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[builds]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/preReleaseVersions/:id/app': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: AppResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/preReleaseVersions/:id/builds': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: BuildsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[builds]'?:
                  | (
                      | 'app'
                      | 'appEncryptionDeclaration'
                      | 'appStoreVersion'
                      | 'betaAppReviewSubmission'
                      | 'betaBuildLocalizations'
                      | 'betaGroups'
                      | 'buildBetaDetail'
                      | 'diagnosticSignatures'
                      | 'expirationDate'
                      | 'expired'
                      | 'iconAssetToken'
                      | 'icons'
                      | 'individualTesters'
                      | 'minOsVersion'
                      | 'perfPowerMetrics'
                      | 'preReleaseVersion'
                      | 'processingState'
                      | 'uploadedDate'
                      | 'usesNonExemptEncryption'
                      | 'version'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/profiles': {
      $get:
        | {
            input: {
              query: {
                'filter[name]'?: string[] | undefined
                'filter[profileState]'?: ('ACTIVE' | 'INVALID')[] | undefined
                'filter[profileType]'?:
                  | (
                      | 'IOS_APP_DEVELOPMENT'
                      | 'IOS_APP_STORE'
                      | 'IOS_APP_ADHOC'
                      | 'IOS_APP_INHOUSE'
                      | 'MAC_APP_DEVELOPMENT'
                      | 'MAC_APP_STORE'
                      | 'MAC_APP_DIRECT'
                      | 'TVOS_APP_DEVELOPMENT'
                      | 'TVOS_APP_STORE'
                      | 'TVOS_APP_ADHOC'
                      | 'TVOS_APP_INHOUSE'
                      | 'MAC_CATALYST_APP_DEVELOPMENT'
                      | 'MAC_CATALYST_APP_STORE'
                      | 'MAC_CATALYST_APP_DIRECT'
                    )[]
                  | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'id'
                      | '-id'
                      | 'name'
                      | '-name'
                      | 'profileState'
                      | '-profileState'
                      | 'profileType'
                      | '-profileType'
                    )[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('bundleId' | 'certificates' | 'devices')[] | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                'limit[certificates]'?: number | undefined
                'limit[devices]'?: number | undefined
              }
            }
            output: ProfilesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[name]'?: string[] | undefined
                'filter[profileState]'?: ('ACTIVE' | 'INVALID')[] | undefined
                'filter[profileType]'?:
                  | (
                      | 'IOS_APP_DEVELOPMENT'
                      | 'IOS_APP_STORE'
                      | 'IOS_APP_ADHOC'
                      | 'IOS_APP_INHOUSE'
                      | 'MAC_APP_DEVELOPMENT'
                      | 'MAC_APP_STORE'
                      | 'MAC_APP_DIRECT'
                      | 'TVOS_APP_DEVELOPMENT'
                      | 'TVOS_APP_STORE'
                      | 'TVOS_APP_ADHOC'
                      | 'TVOS_APP_INHOUSE'
                      | 'MAC_CATALYST_APP_DEVELOPMENT'
                      | 'MAC_CATALYST_APP_STORE'
                      | 'MAC_CATALYST_APP_DIRECT'
                    )[]
                  | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'id'
                      | '-id'
                      | 'name'
                      | '-name'
                      | 'profileState'
                      | '-profileState'
                      | 'profileType'
                      | '-profileType'
                    )[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('bundleId' | 'certificates' | 'devices')[] | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                'limit[certificates]'?: number | undefined
                'limit[devices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[name]'?: string[] | undefined
                'filter[profileState]'?: ('ACTIVE' | 'INVALID')[] | undefined
                'filter[profileType]'?:
                  | (
                      | 'IOS_APP_DEVELOPMENT'
                      | 'IOS_APP_STORE'
                      | 'IOS_APP_ADHOC'
                      | 'IOS_APP_INHOUSE'
                      | 'MAC_APP_DEVELOPMENT'
                      | 'MAC_APP_STORE'
                      | 'MAC_APP_DIRECT'
                      | 'TVOS_APP_DEVELOPMENT'
                      | 'TVOS_APP_STORE'
                      | 'TVOS_APP_ADHOC'
                      | 'TVOS_APP_INHOUSE'
                      | 'MAC_CATALYST_APP_DEVELOPMENT'
                      | 'MAC_CATALYST_APP_STORE'
                      | 'MAC_CATALYST_APP_DIRECT'
                    )[]
                  | undefined
                'filter[id]'?: string[] | undefined
                sort?:
                  | (
                      | 'id'
                      | '-id'
                      | 'name'
                      | '-name'
                      | 'profileState'
                      | '-profileState'
                      | 'profileType'
                      | '-profileType'
                    )[]
                  | undefined
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: ('bundleId' | 'certificates' | 'devices')[] | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                'limit[certificates]'?: number | undefined
                'limit[devices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: ProfileCreateRequest }
            output: ProfileResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ProfileCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProfileCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ProfileCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/profiles/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                include?: ('bundleId' | 'certificates' | 'devices')[] | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                'limit[certificates]'?: number | undefined
                'limit[devices]'?: number | undefined
              }
            }
            output: ProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                include?: ('bundleId' | 'certificates' | 'devices')[] | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                'limit[certificates]'?: number | undefined
                'limit[devices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                include?: ('bundleId' | 'certificates' | 'devices')[] | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                'limit[certificates]'?: number | undefined
                'limit[devices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[profiles]'?:
                  | (
                      | 'bundleId'
                      | 'certificates'
                      | 'createdDate'
                      | 'devices'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'profileContent'
                      | 'profileState'
                      | 'profileType'
                      | 'uuid'
                    )[]
                  | undefined
                include?: ('bundleId' | 'certificates' | 'devices')[] | undefined
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
                'limit[certificates]'?: number | undefined
                'limit[devices]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/profiles/:id/bundleId': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
              }
            }
            output: BundleIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[bundleIds]'?:
                  | (
                      | 'app'
                      | 'bundleIdCapabilities'
                      | 'identifier'
                      | 'name'
                      | 'platform'
                      | 'profiles'
                      | 'seedId'
                    )[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/profiles/:id/certificates': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: CertificatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[certificates]'?:
                  | (
                      | 'certificateContent'
                      | 'certificateType'
                      | 'csrContent'
                      | 'displayName'
                      | 'expirationDate'
                      | 'name'
                      | 'platform'
                      | 'serialNumber'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/profiles/:id/devices': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: DevicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[devices]'?:
                  | (
                      | 'addedDate'
                      | 'deviceClass'
                      | 'model'
                      | 'name'
                      | 'platform'
                      | 'status'
                      | 'udid'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/routingAppCoverages': {
      $post:
        | {
            input: { json: RoutingAppCoverageCreateRequest }
            output: RoutingAppCoverageResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RoutingAppCoverageCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RoutingAppCoverageCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RoutingAppCoverageCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/routingAppCoverages/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appStoreVersion'[] | undefined
              }
            }
            output: RoutingAppCoverageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appStoreVersion'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appStoreVersion'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[routingAppCoverages]'?:
                  | (
                      | 'appStoreVersion'
                      | 'assetDeliveryState'
                      | 'fileName'
                      | 'fileSize'
                      | 'sourceFileChecksum'
                      | 'uploadOperations'
                      | 'uploaded'
                    )[]
                  | undefined
                include?: 'appStoreVersion'[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: RoutingAppCoverageUpdateRequest }
            output: RoutingAppCoverageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RoutingAppCoverageUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: RoutingAppCoverageUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: RoutingAppCoverageUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: RoutingAppCoverageUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/salesReports': {
      $get:
        | {
            input: {
              query: {
                'filter[frequency]': ('DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY')[]
                'filter[reportDate]'?: string[] | undefined
                'filter[reportSubType]': ('SUMMARY' | 'DETAILED' | 'OPT_IN')[]
                'filter[reportType]': (
                  | 'SALES'
                  | 'PRE_ORDER'
                  | 'NEWSSTAND'
                  | 'SUBSCRIPTION'
                  | 'SUBSCRIPTION_EVENT'
                  | 'SUBSCRIBER'
                )[]
                'filter[vendorNumber]': string[]
                'filter[version]'?: string[] | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[frequency]': ('DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY')[]
                'filter[reportDate]'?: string[] | undefined
                'filter[reportSubType]': ('SUMMARY' | 'DETAILED' | 'OPT_IN')[]
                'filter[reportType]': (
                  | 'SALES'
                  | 'PRE_ORDER'
                  | 'NEWSSTAND'
                  | 'SUBSCRIPTION'
                  | 'SUBSCRIPTION_EVENT'
                  | 'SUBSCRIBER'
                )[]
                'filter[vendorNumber]': string[]
                'filter[version]'?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[frequency]': ('DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY')[]
                'filter[reportDate]'?: string[] | undefined
                'filter[reportSubType]': ('SUMMARY' | 'DETAILED' | 'OPT_IN')[]
                'filter[reportType]': (
                  | 'SALES'
                  | 'PRE_ORDER'
                  | 'NEWSSTAND'
                  | 'SUBSCRIPTION'
                  | 'SUBSCRIPTION_EVENT'
                  | 'SUBSCRIBER'
                )[]
                'filter[vendorNumber]': string[]
                'filter[version]'?: string[] | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/territories': {
      $get:
        | {
            input: {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: TerritoriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'fields[territories]'?: 'currency'[] | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/userInvitations': {
      $get:
        | {
            input: {
              query: {
                'filter[email]'?: string[] | undefined
                'filter[roles]'?:
                  | (
                      | 'ADMIN'
                      | 'FINANCE'
                      | 'TECHNICAL'
                      | 'ACCOUNT_HOLDER'
                      | 'READ_ONLY'
                      | 'SALES'
                      | 'MARKETING'
                      | 'APP_MANAGER'
                      | 'DEVELOPER'
                      | 'ACCESS_TO_REPORTS'
                      | 'CUSTOMER_SUPPORT'
                      | 'CREATE_APPS'
                      | 'CLOUD_MANAGED_DEVELOPER_ID'
                      | 'CLOUD_MANAGED_APP_DISTRIBUTION'
                    )[]
                  | undefined
                'filter[visibleApps]'?: string[] | undefined
                sort?: ('email' | '-email' | 'lastName' | '-lastName')[] | undefined
                'fields[userInvitations]'?:
                  | (
                      | 'allAppsVisible'
                      | 'email'
                      | 'expirationDate'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'visibleApps'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: UserInvitationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[email]'?: string[] | undefined
                'filter[roles]'?:
                  | (
                      | 'ADMIN'
                      | 'FINANCE'
                      | 'TECHNICAL'
                      | 'ACCOUNT_HOLDER'
                      | 'READ_ONLY'
                      | 'SALES'
                      | 'MARKETING'
                      | 'APP_MANAGER'
                      | 'DEVELOPER'
                      | 'ACCESS_TO_REPORTS'
                      | 'CUSTOMER_SUPPORT'
                      | 'CREATE_APPS'
                      | 'CLOUD_MANAGED_DEVELOPER_ID'
                      | 'CLOUD_MANAGED_APP_DISTRIBUTION'
                    )[]
                  | undefined
                'filter[visibleApps]'?: string[] | undefined
                sort?: ('email' | '-email' | 'lastName' | '-lastName')[] | undefined
                'fields[userInvitations]'?:
                  | (
                      | 'allAppsVisible'
                      | 'email'
                      | 'expirationDate'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'visibleApps'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[email]'?: string[] | undefined
                'filter[roles]'?:
                  | (
                      | 'ADMIN'
                      | 'FINANCE'
                      | 'TECHNICAL'
                      | 'ACCOUNT_HOLDER'
                      | 'READ_ONLY'
                      | 'SALES'
                      | 'MARKETING'
                      | 'APP_MANAGER'
                      | 'DEVELOPER'
                      | 'ACCESS_TO_REPORTS'
                      | 'CUSTOMER_SUPPORT'
                      | 'CREATE_APPS'
                      | 'CLOUD_MANAGED_DEVELOPER_ID'
                      | 'CLOUD_MANAGED_APP_DISTRIBUTION'
                    )[]
                  | undefined
                'filter[visibleApps]'?: string[] | undefined
                sort?: ('email' | '-email' | 'lastName' | '-lastName')[] | undefined
                'fields[userInvitations]'?:
                  | (
                      | 'allAppsVisible'
                      | 'email'
                      | 'expirationDate'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'visibleApps'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: UserInvitationCreateRequest }
            output: UserInvitationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UserInvitationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UserInvitationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UserInvitationCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/userInvitations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[userInvitations]'?:
                  | (
                      | 'allAppsVisible'
                      | 'email'
                      | 'expirationDate'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'visibleApps'
                    )[]
                  | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: UserInvitationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[userInvitations]'?:
                  | (
                      | 'allAppsVisible'
                      | 'email'
                      | 'expirationDate'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'visibleApps'
                    )[]
                  | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[userInvitations]'?:
                  | (
                      | 'allAppsVisible'
                      | 'email'
                      | 'expirationDate'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'visibleApps'
                    )[]
                  | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[userInvitations]'?:
                  | (
                      | 'allAppsVisible'
                      | 'email'
                      | 'expirationDate'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'visibleApps'
                    )[]
                  | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/userInvitations/:id/visibleApps': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: AppsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/users': {
      $get:
        | {
            input: {
              query: {
                'filter[roles]'?:
                  | (
                      | 'ADMIN'
                      | 'FINANCE'
                      | 'TECHNICAL'
                      | 'ACCOUNT_HOLDER'
                      | 'READ_ONLY'
                      | 'SALES'
                      | 'MARKETING'
                      | 'APP_MANAGER'
                      | 'DEVELOPER'
                      | 'ACCESS_TO_REPORTS'
                      | 'CUSTOMER_SUPPORT'
                      | 'CREATE_APPS'
                      | 'CLOUD_MANAGED_DEVELOPER_ID'
                      | 'CLOUD_MANAGED_APP_DISTRIBUTION'
                    )[]
                  | undefined
                'filter[username]'?: string[] | undefined
                'filter[visibleApps]'?: string[] | undefined
                sort?: ('lastName' | '-lastName' | 'username' | '-username')[] | undefined
                'fields[users]'?:
                  | (
                      | 'allAppsVisible'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'username'
                      | 'visibleApps'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: UsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'filter[roles]'?:
                  | (
                      | 'ADMIN'
                      | 'FINANCE'
                      | 'TECHNICAL'
                      | 'ACCOUNT_HOLDER'
                      | 'READ_ONLY'
                      | 'SALES'
                      | 'MARKETING'
                      | 'APP_MANAGER'
                      | 'DEVELOPER'
                      | 'ACCESS_TO_REPORTS'
                      | 'CUSTOMER_SUPPORT'
                      | 'CREATE_APPS'
                      | 'CLOUD_MANAGED_DEVELOPER_ID'
                      | 'CLOUD_MANAGED_APP_DISTRIBUTION'
                    )[]
                  | undefined
                'filter[username]'?: string[] | undefined
                'filter[visibleApps]'?: string[] | undefined
                sort?: ('lastName' | '-lastName' | 'username' | '-username')[] | undefined
                'fields[users]'?:
                  | (
                      | 'allAppsVisible'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'username'
                      | 'visibleApps'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                'filter[roles]'?:
                  | (
                      | 'ADMIN'
                      | 'FINANCE'
                      | 'TECHNICAL'
                      | 'ACCOUNT_HOLDER'
                      | 'READ_ONLY'
                      | 'SALES'
                      | 'MARKETING'
                      | 'APP_MANAGER'
                      | 'DEVELOPER'
                      | 'ACCESS_TO_REPORTS'
                      | 'CUSTOMER_SUPPORT'
                      | 'CREATE_APPS'
                      | 'CLOUD_MANAGED_DEVELOPER_ID'
                      | 'CLOUD_MANAGED_APP_DISTRIBUTION'
                    )[]
                  | undefined
                'filter[username]'?: string[] | undefined
                'filter[visibleApps]'?: string[] | undefined
                sort?: ('lastName' | '-lastName' | 'username' | '-username')[] | undefined
                'fields[users]'?:
                  | (
                      | 'allAppsVisible'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'username'
                      | 'visibleApps'
                    )[]
                  | undefined
                limit?: number | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/users/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[users]'?:
                  | (
                      | 'allAppsVisible'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'username'
                      | 'visibleApps'
                    )[]
                  | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[users]'?:
                  | (
                      | 'allAppsVisible'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'username'
                      | 'visibleApps'
                    )[]
                  | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[users]'?:
                  | (
                      | 'allAppsVisible'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'username'
                      | 'visibleApps'
                    )[]
                  | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[users]'?:
                  | (
                      | 'allAppsVisible'
                      | 'firstName'
                      | 'lastName'
                      | 'provisioningAllowed'
                      | 'roles'
                      | 'username'
                      | 'visibleApps'
                    )[]
                  | undefined
                include?: 'visibleApps'[] | undefined
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                'limit[visibleApps]'?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: UserUpdateRequest }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UserUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UserUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UserUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UserUpdateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/users/:id/relationships/visibleApps': {
      $delete:
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: UserVisibleAppsLinkagesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $post:
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UserVisibleAppsLinkagesRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/v1/users/:id/visibleApps': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: AppsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'fields[apps]'?:
                  | (
                      | 'appInfos'
                      | 'appStoreVersions'
                      | 'availableInNewTerritories'
                      | 'availableTerritories'
                      | 'betaAppLocalizations'
                      | 'betaAppReviewDetail'
                      | 'betaGroups'
                      | 'betaLicenseAgreement'
                      | 'betaTesters'
                      | 'builds'
                      | 'bundleId'
                      | 'contentRightsDeclaration'
                      | 'endUserLicenseAgreement'
                      | 'gameCenterEnabledVersions'
                      | 'inAppPurchases'
                      | 'isOrEverWasMadeForKids'
                      | 'name'
                      | 'perfPowerMetrics'
                      | 'preOrder'
                      | 'preReleaseVersions'
                      | 'prices'
                      | 'primaryLocale'
                      | 'sku'
                    )[]
                  | undefined
                limit?: number | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
