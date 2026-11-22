type APIKeyOut = {
  admin?: boolean | undefined
  anonymized?: boolean | undefined
  apiKey?: string | undefined
  corporate?: boolean | undefined
  disabled?: boolean | undefined
  learnable?: boolean | undefined
  partner?: boolean | undefined
  striped?: boolean | undefined
  userId?: string | undefined
  vetted?: boolean | undefined
}
type APIServiceOut = {
  costInUnits?: number | undefined
  serviceGroup?: string | undefined
  serviceName?: string | undefined
}
type APIServicesOut = { apiServices?: APIServiceOut[] | undefined }
type APIClassifierOut = {
  classifierName?: string | undefined
  learning?: boolean | undefined
  probabilityCalibrated?: boolean | undefined
  serving?: boolean | undefined
  shuttingDown?: boolean | undefined
}
type SoftwareVersionOut = {
  softwareNameAndVersion?: string | undefined
  softwareVersion?: number[] | undefined
}
type APIClassifiersStatusOut = {
  classifiers?: APIClassifierOut[] | undefined
  softwareVersion?: SoftwareVersionOut | undefined
}
type APIBillingPeriodUsageOut = {
  apiKey?: string | undefined
  billingStatus?: string | undefined
  hardLimit?: bigint | undefined
  periodEnded?: bigint | undefined
  periodStarted?: bigint | undefined
  softLimit?: bigint | undefined
  stripeCurrentPeriodEnd?: bigint | undefined
  stripeCurrentPeriodStart?: bigint | undefined
  subscriptionStarted?: bigint | undefined
  usage?: bigint | undefined
}
type APIPlanSubscriptionOut = {
  apiKey?: string | undefined
  currency?: string | undefined
  currencyFactor?: number | undefined
  planBaseFeesKey?: string | undefined
  planEnded?: bigint | undefined
  planName?: string | undefined
  planQuota?: bigint | undefined
  planStarted?: bigint | undefined
  planStatus?: string | undefined
  price?: number | undefined
  priceOverage?: number | undefined
  priceOverageUSD?: number | undefined
  priceUSD?: number | undefined
  priorPlanStarted?: bigint | undefined
  stripeCustomerId?: string | undefined
  stripeStatus?: string | undefined
  stripeSubscription?: string | undefined
  taxRate?: number | undefined
  userId?: string | undefined
}
type APIPeriodUsageOut = {
  billingPeriod?: APIBillingPeriodUsageOut | undefined
  overageCurrency?: string | undefined
  overageExclTax?: number | undefined
  overageInclTax?: number | undefined
  overageQuantity?: bigint | undefined
  subscription?: APIPlanSubscriptionOut | undefined
}
type APICounterV2Out = {
  apiKey?: APIKeyOut | undefined
  apiService?: string | undefined
  createdDateTime?: bigint | undefined
  hostAddress?: string | undefined
  lastFlushedDateTime?: bigint | undefined
  lastUsedDateTime?: bigint | undefined
  serviceFeaturesUsage?: { [x: string]: bigint } | undefined
  totalUsage?: bigint | undefined
}
type APIUsageHistoryOut = { detailedUsage?: APICounterV2Out[] | undefined }
type APIUsageAggregatedOut = {
  colHeaders?: string[] | undefined
  data?: number[][] | undefined
  historyTruncated?: boolean | undefined
  periodEnd?: bigint | undefined
  periodStart?: bigint | undefined
  rowHeaders?: string[] | undefined
  timeUnit?: string | undefined
  totalUsage?: bigint | undefined
}
type PersonalNameCastegroupOut = {
  castegroup?: string | undefined
  castegroupAlt?: string | undefined
  castegroupTop?: string[] | undefined
  id?: string | undefined
  name?: string | undefined
  probabilityAltCalibrated?: number | undefined
  probabilityCalibrated?: number | undefined
  score?: number | undefined
  script?: string | undefined
}
type FactIn = { id?: string | undefined; name?: string | undefined }
type PersonalNameSubdivisionIn = {
  id?: string | undefined
  name?: string | undefined
  subdivisionIso?: string | undefined
}
type BatchPersonalNameSubdivisionIn = {
  facts?: FactIn[] | undefined
  personalNames?: PersonalNameSubdivisionIn[] | undefined
}
type BatchPersonalNameCastegroupOut = { personalNames?: PersonalNameCastegroupOut[] | undefined }
type NameMatchCandidateOut = {
  candidateName?: string | undefined
  predScoreFamilyName?: number | undefined
  predScoreGivenName?: number | undefined
  probability?: number | undefined
}
type NameMatchCandidatesOut = {
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  matchCandidates?: NameMatchCandidateOut[] | undefined
  orderOption?: string | undefined
  script?: string | undefined
}
type FirstLastNameIn = {
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
}
type BatchFirstLastNameIn = {
  facts?: FactIn[] | undefined
  personalNames?: FirstLastNameIn[] | undefined
}
type BatchNameMatchCandidatesOut = {
  namesAndMatchCandidates?: NameMatchCandidatesOut[] | undefined
}
type FirstLastNameGenderIn = {
  firstName?: string | undefined
  gender?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
}
type BatchFirstLastNameGenderIn = {
  facts?: FactIn[] | undefined
  personalNames?: FirstLastNameGenderIn[] | undefined
}
type NameMatchedOut = {
  id?: string | undefined
  matchStatus?: 'Match' | 'Mismatch' | undefined
  score?: number | undefined
  script?: string | undefined
}
type PersonalNameIn = { id?: string | undefined; name?: string | undefined }
type MatchPersonalFirstLastNameIn = {
  id?: string | undefined
  name1?: FirstLastNameIn | undefined
  name2?: PersonalNameIn | undefined
}
type BatchMatchPersonalFirstLastNameIn = {
  facts?: FactIn[] | undefined
  personalNames?: MatchPersonalFirstLastNameIn[] | undefined
}
type BatchNameMatchedOut = { matchedNames?: NameMatchedOut[] | undefined }
type FirstLastNameDiasporaedOut = {
  countryIso2?: string | undefined
  ethnicitiesTop?: string[] | undefined
  ethnicity?: string | undefined
  ethnicityAlt?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  lifted?: boolean | undefined
  probabilityAltCalibrated?: number | undefined
  probabilityCalibrated?: number | undefined
  score?: number | undefined
  script?: string | undefined
}
type FirstLastNameGenderedOut = {
  firstName?: string | undefined
  genderScale?: number | undefined
  id?: string | undefined
  lastName?: string | undefined
  likelyGender?: 'male' | 'female' | 'unknown' | undefined
  probabilityCalibrated?: number | undefined
  score?: number | undefined
  script?: string | undefined
}
type FirstLastNameOriginedOut = {
  countriesOriginTop?: string[] | undefined
  countryOrigin?: string | undefined
  countryOriginAlt?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  probabilityAltCalibrated?: number | undefined
  probabilityCalibrated?: number | undefined
  regionOrigin?: string | undefined
  score?: number | undefined
  script?: string | undefined
  subRegionOrigin?: string | undefined
  topRegionOrigin?: string | undefined
}
type CorridorOut = {
  FirstLastNameDiasporaedOut?: FirstLastNameDiasporaedOut | undefined
  FirstLastNameGenderedOut?: FirstLastNameGenderedOut | undefined
  FirstLastNameOriginedOut?: FirstLastNameOriginedOut | undefined
  id?: string | undefined
  script?: string | undefined
}
type FirstLastNameGeoIn = {
  countryIso2?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
}
type CorridorIn = {
  firstLastNameGeoFrom?: FirstLastNameGeoIn | undefined
  firstLastNameGeoTo?: FirstLastNameGeoIn | undefined
  id?: string | undefined
}
type BatchCorridorIn = { corridorFromTo?: CorridorIn[] | undefined; facts?: FactIn[] | undefined }
type BatchCorridorOut = { corridorFromTo?: CorridorOut[] | undefined }
type PersonalNameGeoOut = {
  countriesTop?: string[] | undefined
  country?: string | undefined
  countryAlt?: string | undefined
  id?: string | undefined
  name?: string | undefined
  probabilityAltCalibrated?: number | undefined
  probabilityCalibrated?: number | undefined
  region?: string | undefined
  score?: number | undefined
  script?: string | undefined
  subRegion?: string | undefined
  topRegion?: string | undefined
}
type BatchPersonalNameIn = {
  facts?: FactIn[] | undefined
  personalNames?: PersonalNameIn[] | undefined
}
type BatchPersonalNameGeoOut = { personalNames?: PersonalNameGeoOut[] | undefined }
type BatchFirstLastNameGeoIn = {
  facts?: FactIn[] | undefined
  personalNames?: FirstLastNameGeoIn[] | undefined
}
type BatchFirstLastNameDiasporaedOut = { personalNames?: FirstLastNameDiasporaedOut[] | undefined }
type BatchFirstLastNameGenderedOut = { personalNames?: FirstLastNameGenderedOut[] | undefined }
type PersonalNameGenderedOut = {
  genderScale?: number | undefined
  id?: string | undefined
  likelyGender?: 'male' | 'female' | 'unknown' | undefined
  name?: string | undefined
  probabilityCalibrated?: number | undefined
  score?: number | undefined
  script?: string | undefined
}
type BatchPersonalNameGenderedOut = { personalNames?: PersonalNameGenderedOut[] | undefined }
type PersonalNameGeoIn = {
  countryIso2?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type BatchPersonalNameGeoIn = {
  facts?: FactIn[] | undefined
  personalNames?: PersonalNameGeoIn[] | undefined
}
type FeedbackLoopOut = { feedbackCredits?: bigint | undefined }
type ProperNounCategorizedOut = {
  commonType?: string | undefined
  commonTypeAlt?: string | undefined
  id?: string | undefined
  name?: string | undefined
  score?: number | undefined
  script?: string | undefined
}
type NameIn = { id?: string | undefined; name?: string | undefined }
type BatchNameIn = { facts?: FactIn[] | undefined; properNouns?: NameIn[] | undefined }
type BatchProperNounCategorizedOut = { properNouns?: ProperNounCategorizedOut[] | undefined }
type NameGeoIn = {
  countryIso2?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type BatchNameGeoIn = { facts?: FactIn[] | undefined; properNouns?: NameGeoIn[] | undefined }
type BatchFirstLastNameOriginedOut = { personalNames?: FirstLastNameOriginedOut[] | undefined }
type FirstLastNameOut = {
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  script?: string | undefined
}
type PersonalNameParsedOut = {
  firstLastName?: FirstLastNameOut | undefined
  id?: string | undefined
  name?: string | undefined
  nameParserType?:
    | 'FN1LN1'
    | 'LN1FN1'
    | 'FN1LN2'
    | 'LN2FN1'
    | 'FN1LNx'
    | 'LNxFN1'
    | 'FN2LN1'
    | 'LN1FN2'
    | 'FN2LN2'
    | 'LN2FN2'
    | 'FN2LNx'
    | 'LNxFN2'
    | 'FNxLN1'
    | 'LN1FNx'
    | 'FNxLN2'
    | 'LN2FNx'
    | 'FNxLNx'
    | 'LNxFNx'
    | undefined
  nameParserTypeAlt?:
    | 'FN1LN1'
    | 'LN1FN1'
    | 'FN1LN2'
    | 'LN2FN1'
    | 'FN1LNx'
    | 'LNxFN1'
    | 'FN2LN1'
    | 'LN1FN2'
    | 'FN2LN2'
    | 'LN2FN2'
    | 'FN2LNx'
    | 'LNxFN2'
    | 'FNxLN1'
    | 'LN1FNx'
    | 'FNxLN2'
    | 'LN2FNx'
    | 'FNxLNx'
    | 'LNxFNx'
    | undefined
  score?: number | undefined
  script?: string | undefined
}
type BatchPersonalNameParsedOut = { personalNames?: PersonalNameParsedOut[] | undefined }
type FirstLastNamePhoneCodedOut = {
  countryIso2?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  internationalPhoneNumberVerified?: string | undefined
  lastName?: string | undefined
  originCountryIso2?: string | undefined
  originCountryIso2Alt?: string | undefined
  phoneCountryCode?: number | undefined
  phoneCountryCodeAlt?: number | undefined
  phoneCountryIso2?: string | undefined
  phoneCountryIso2Alt?: string | undefined
  phoneCountryIso2Verified?: string | undefined
  phoneNumber?: string | undefined
  score?: number | undefined
  script?: string | undefined
  verified?: boolean | undefined
}
type FirstLastNamePhoneNumberIn = {
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  phoneNumber?: string | undefined
}
type BatchFirstLastNamePhoneNumberIn = {
  facts?: FactIn[] | undefined
  personalNamesWithPhoneNumbers?: FirstLastNamePhoneNumberIn[] | undefined
}
type BatchFirstLastNamePhoneCodedOut = {
  personalNamesWithPhoneNumbers?: FirstLastNamePhoneCodedOut[] | undefined
}
type FirstLastNamePhoneNumberGeoIn = {
  countryIso2?: string | undefined
  countryIso2Alt?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  phoneNumber?: string | undefined
}
type BatchFirstLastNamePhoneNumberGeoIn = {
  facts?: FactIn[] | undefined
  personalNamesWithPhoneNumbers?: FirstLastNamePhoneNumberGeoIn[] | undefined
}
type RegionISO = {
  countryFIPS?: string | undefined
  countryISO2?: string | undefined
  countryISO3?: string | undefined
  countryName?: string | undefined
  countryNumCode?: string | undefined
  region?: string | undefined
  subregion?: string | undefined
  topregion?: string | undefined
}
type RegionOut = { countriesAndRegions?: RegionISO[] | undefined }
type PersonalNameReligionedOut = {
  id?: string | undefined
  name?: string | undefined
  probabilityAltCalibrated?: number | undefined
  probabilityCalibrated?: number | undefined
  religion?: string | undefined
  religionAlt?: string | undefined
  religionsTop?: string[] | undefined
  score?: number | undefined
  script?: string | undefined
}
type PersonalNameGeoSubdivisionIn = {
  countryIso2?: string | undefined
  id?: string | undefined
  name?: string | undefined
  subdivisionIso?: string | undefined
}
type BatchPersonalNameGeoSubdivisionIn = {
  facts?: FactIn[] | undefined
  personalNames?: PersonalNameGeoSubdivisionIn[] | undefined
}
type BatchPersonalNameReligionedOut = { personalNames?: PersonalNameReligionedOut[] | undefined }
type FirstLastNameGeoSubclassificationOut = {
  countryIso2?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  probabilityAltCalibrated?: number | undefined
  probabilityCalibrated?: number | undefined
  score?: number | undefined
  script?: string | undefined
  subClassification?: string | undefined
  subClassificationAlt?: string | undefined
  subclassificationTop?: string[] | undefined
}
type BatchFirstLastNameGeoSubclassificationOut = {
  personalNames?: FirstLastNameGeoSubclassificationOut[] | undefined
}
type APIClassifierTaxonomyOut = {
  classifierName?: string | undefined
  classifyingScripts?: string[] | undefined
  taxonomyClasses?: string[] | undefined
}
type FirstLastNameUSRaceEthnicityOut = {
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  probabilityAltCalibrated?: number | undefined
  probabilityCalibrated?: number | undefined
  raceEthnicitiesTop?: string[] | undefined
  raceEthnicity?: 'W_NL' | 'HL' | 'A' | 'B_NL' | 'AI_AN' | 'PI' | undefined
  raceEthnicityAlt?: 'W_NL' | 'HL' | 'A' | 'B_NL' | 'AI_AN' | 'PI' | undefined
  score?: number | undefined
  script?: string | undefined
}
type BatchFirstLastNameUSRaceEthnicityOut = {
  personalNames?: FirstLastNameUSRaceEthnicityOut[] | undefined
}
type FirstLastNameGeoZippedIn = {
  countryIso2?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  zipCode?: string | undefined
}
type BatchFirstLastNameGeoZippedIn = {
  facts?: FactIn[] | undefined
  personalNames?: FirstLastNameGeoZippedIn[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api2/json/anonymize/:source/:anonymized/:token': {
      $get:
        | {
            input: { param: { source: string; anonymized: boolean; token: string } }
            output: APIKeyOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source: string; anonymized: boolean; token: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api2/json/apiKeyInfo': {
      $get:
        | { input: {}; output: APIKeyOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api2/json/apiServices': {
      $get:
        | { input: {}; output: APIServicesOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api2/json/apiStatus': {
      $get:
        | { input: {}; output: APIClassifiersStatusOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api2/json/apiUsage': {
      $get:
        | { input: {}; output: APIPeriodUsageOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api2/json/apiUsageHistory': {
      $get:
        | { input: {}; output: APIUsageHistoryOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api2/json/apiUsageHistoryAggregate': {
      $get:
        | { input: {}; output: APIUsageAggregatedOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api2/json/castegroupIndianFull/:subDivisionIso31662/:personalNameFull': {
      $get:
        | {
            input: { param: { subDivisionIso31662: string; personalNameFull: string } }
            output: PersonalNameCastegroupOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subDivisionIso31662: string; personalNameFull: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { subDivisionIso31662: string; personalNameFull: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/castegroupIndianFullBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameSubdivisionIn }
            output: BatchPersonalNameCastegroupOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchPersonalNameSubdivisionIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchPersonalNameSubdivisionIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchPersonalNameSubdivisionIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/chineseNameCandidates/:chineseSurnameLatin/:chineseGivenNameLatin': {
      $get:
        | {
            input: { param: { chineseSurnameLatin: string; chineseGivenNameLatin: string } }
            output: NameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chineseSurnameLatin: string; chineseGivenNameLatin: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chineseSurnameLatin: string; chineseGivenNameLatin: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/chineseNameCandidatesBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameIn }
            output: BatchNameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/chineseNameCandidatesGenderBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameGenderIn }
            output: BatchNameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNameGenderIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNameGenderIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNameGenderIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/chineseNameGenderCandidates/:chineseSurnameLatin/:chineseGivenNameLatin/:knownGender': {
      $get:
        | {
            input: {
              param: {
                chineseSurnameLatin: string
                chineseGivenNameLatin: string
                knownGender: string
              }
            }
            output: NameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                chineseSurnameLatin: string
                chineseGivenNameLatin: string
                knownGender: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                chineseSurnameLatin: string
                chineseGivenNameLatin: string
                knownGender: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/chineseNameMatch/:chineseSurnameLatin/:chineseGivenNameLatin/:chineseName': {
      $get:
        | {
            input: {
              param: {
                chineseSurnameLatin: string
                chineseGivenNameLatin: string
                chineseName: string
              }
            }
            output: NameMatchedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                chineseSurnameLatin: string
                chineseGivenNameLatin: string
                chineseName: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                chineseSurnameLatin: string
                chineseGivenNameLatin: string
                chineseName: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/chineseNameMatchBatch': {
      $post:
        | {
            input: { json: BatchMatchPersonalFirstLastNameIn }
            output: BatchNameMatchedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchMatchPersonalFirstLastNameIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchMatchPersonalFirstLastNameIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchMatchPersonalFirstLastNameIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/corridor/:countryIso2From/:firstNameFrom/:lastNameFrom/:countryIso2To/:firstNameTo/:lastNameTo': {
      $get:
        | {
            input: {
              param: {
                countryIso2From: string
                firstNameFrom: string
                lastNameFrom: string
                countryIso2To: string
                firstNameTo: string
                lastNameTo: string
              }
            }
            output: CorridorOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                countryIso2From: string
                firstNameFrom: string
                lastNameFrom: string
                countryIso2To: string
                firstNameTo: string
                lastNameTo: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                countryIso2From: string
                firstNameFrom: string
                lastNameFrom: string
                countryIso2To: string
                firstNameTo: string
                lastNameTo: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/corridorBatch': {
      $post:
        | {
            input: { json: BatchCorridorIn }
            output: BatchCorridorOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchCorridorIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchCorridorIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchCorridorIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/country/:personalNameFull': {
      $get:
        | {
            input: { param: { personalNameFull: string } }
            output: PersonalNameGeoOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { personalNameFull: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { personalNameFull: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/countryBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameIn }
            output: BatchPersonalNameGeoOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/diaspora/:countryIso2/:firstName/:lastName': {
      $get:
        | {
            input: { param: { countryIso2: string; firstName: string; lastName: string } }
            output: FirstLastNameDiasporaedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { countryIso2: string; firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { countryIso2: string; firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/diasporaBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: BatchFirstLastNameDiasporaedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/gender/:firstName': {
      $get:
        | {
            input: { param: { firstName: string } }
            output: FirstLastNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { firstName: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { firstName: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/gender/:firstName/:lastName': {
      $get:
        | {
            input: { param: { firstName: string; lastName: string } }
            output: FirstLastNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/genderBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameIn }
            output: BatchFirstLastNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/genderChineseName/:chineseName': {
      $get:
        | {
            input: { param: { chineseName: string } }
            output: PersonalNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chineseName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chineseName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/genderChineseNameBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameIn }
            output: BatchPersonalNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/genderChineseNamePinyin/:chineseSurnameLatin/:chineseGivenNameLatin': {
      $get:
        | {
            input: { param: { chineseSurnameLatin: string; chineseGivenNameLatin: string } }
            output: FirstLastNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chineseSurnameLatin: string; chineseGivenNameLatin: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chineseSurnameLatin: string; chineseGivenNameLatin: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/genderChineseNamePinyinBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameIn }
            output: BatchFirstLastNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/genderFull/:fullName': {
      $get:
        | {
            input: { param: { fullName: string } }
            output: PersonalNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { fullName: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { fullName: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/genderFullBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameIn }
            output: BatchPersonalNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/genderFullGeo/:fullName/:countryIso2': {
      $get:
        | {
            input: { param: { fullName: string; countryIso2: string } }
            output: PersonalNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fullName: string; countryIso2: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { fullName: string; countryIso2: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/genderFullGeoBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameGeoIn }
            output: BatchPersonalNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameGeoIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameGeoIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameGeoIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/genderGeo/:firstName/:lastName/:countryIso2': {
      $get:
        | {
            input: { param: { firstName: string; lastName: string; countryIso2: string } }
            output: FirstLastNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firstName: string; lastName: string; countryIso2: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { firstName: string; lastName: string; countryIso2: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/genderGeoBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: BatchFirstLastNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/genderJapaneseName/:japaneseSurname/:japaneseGivenName': {
      $get:
        | {
            input: { param: { japaneseSurname: string; japaneseGivenName: string } }
            output: FirstLastNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { japaneseSurname: string; japaneseGivenName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { japaneseSurname: string; japaneseGivenName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/genderJapaneseNameBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameIn }
            output: BatchFirstLastNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/genderJapaneseNameFull/:japaneseName': {
      $get:
        | {
            input: { param: { japaneseName: string } }
            output: PersonalNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { japaneseName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { japaneseName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/genderJapaneseNameFullBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameIn }
            output: BatchPersonalNameGenderedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/japaneseNameGenderKanjiCandidatesBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameGenderIn }
            output: BatchNameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNameGenderIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNameGenderIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNameGenderIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/japaneseNameKanjiCandidates/:japaneseSurnameLatin/:japaneseGivenNameLatin': {
      $get:
        | {
            input: { param: { japaneseSurnameLatin: string; japaneseGivenNameLatin: string } }
            output: NameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { japaneseSurnameLatin: string; japaneseGivenNameLatin: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { japaneseSurnameLatin: string; japaneseGivenNameLatin: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/japaneseNameKanjiCandidates/:japaneseSurnameLatin/:japaneseGivenNameLatin/:knownGender': {
      $get:
        | {
            input: {
              param: {
                japaneseSurnameLatin: string
                japaneseGivenNameLatin: string
                knownGender: string
              }
            }
            output: NameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                japaneseSurnameLatin: string
                japaneseGivenNameLatin: string
                knownGender: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                japaneseSurnameLatin: string
                japaneseGivenNameLatin: string
                knownGender: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/japaneseNameKanjiCandidatesBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameIn }
            output: BatchNameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/japaneseNameLatinCandidates/:japaneseSurnameKanji/:japaneseGivenNameKanji': {
      $get:
        | {
            input: { param: { japaneseSurnameKanji: string; japaneseGivenNameKanji: string } }
            output: NameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { japaneseSurnameKanji: string; japaneseGivenNameKanji: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { japaneseSurnameKanji: string; japaneseGivenNameKanji: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/japaneseNameLatinCandidatesBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameIn }
            output: BatchNameMatchCandidatesOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/japaneseNameMatch/:japaneseSurnameLatin/:japaneseGivenNameLatin/:japaneseName': {
      $get:
        | {
            input: {
              param: {
                japaneseSurnameLatin: string
                japaneseGivenNameLatin: string
                japaneseName: string
              }
            }
            output: NameMatchedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                japaneseSurnameLatin: string
                japaneseGivenNameLatin: string
                japaneseName: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                japaneseSurnameLatin: string
                japaneseGivenNameLatin: string
                japaneseName: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/japaneseNameMatchBatch': {
      $post:
        | {
            input: { json: BatchMatchPersonalFirstLastNameIn }
            output: BatchNameMatchedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchMatchPersonalFirstLastNameIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchMatchPersonalFirstLastNameIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchMatchPersonalFirstLastNameIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/japaneseNameMatchFeedbackLoop/:japaneseSurnameLatin/:japaneseGivenNameLatin/:japaneseName': {
      $get:
        | {
            input: {
              param: {
                japaneseSurnameLatin: string
                japaneseGivenNameLatin: string
                japaneseName: string
              }
            }
            output: FeedbackLoopOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                japaneseSurnameLatin: string
                japaneseGivenNameLatin: string
                japaneseName: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                japaneseSurnameLatin: string
                japaneseGivenNameLatin: string
                japaneseName: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/learnable/:source/:learnable/:token': {
      $get:
        | {
            input: { param: { source: string; learnable: boolean; token: string } }
            output: APIKeyOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source: string; learnable: boolean; token: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api2/json/nameType/:properNoun': {
      $get:
        | {
            input: { param: { properNoun: string } }
            output: ProperNounCategorizedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { properNoun: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { properNoun: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/nameTypeBatch': {
      $post:
        | {
            input: { json: BatchNameIn }
            output: BatchProperNounCategorizedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/nameTypeGeo/:properNoun/:countryIso2': {
      $get:
        | {
            input: { param: { properNoun: string; countryIso2: string } }
            output: ProperNounCategorizedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { properNoun: string; countryIso2: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { properNoun: string; countryIso2: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/nameTypeGeoBatch': {
      $post:
        | {
            input: { json: BatchNameGeoIn }
            output: BatchProperNounCategorizedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchNameGeoIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchNameGeoIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchNameGeoIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/origin/:firstName/:lastName': {
      $get:
        | {
            input: { param: { firstName: string; lastName: string } }
            output: FirstLastNameOriginedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/originBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameIn }
            output: BatchFirstLastNameOriginedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchFirstLastNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/parseChineseName/:chineseName': {
      $get:
        | {
            input: { param: { chineseName: string } }
            output: PersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chineseName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chineseName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/parseChineseNameBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameIn }
            output: BatchPersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/parseJapaneseName/:japaneseName': {
      $get:
        | {
            input: { param: { japaneseName: string } }
            output: PersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { japaneseName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { japaneseName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/parseJapaneseNameBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameIn }
            output: BatchPersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/parseName/:nameFull': {
      $get:
        | {
            input: { param: { nameFull: string } }
            output: PersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { nameFull: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { nameFull: string } }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/parseName/:nameFull/:countryIso2': {
      $get:
        | {
            input: { param: { nameFull: string; countryIso2: string } }
            output: PersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nameFull: string; countryIso2: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { nameFull: string; countryIso2: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/parseNameBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameIn }
            output: BatchPersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/parseNameGeoBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameGeoIn }
            output: BatchPersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameGeoIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameGeoIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameGeoIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/phoneCode/:firstName/:lastName/:phoneNumber': {
      $get:
        | {
            input: { param: { firstName: string; lastName: string; phoneNumber: string } }
            output: FirstLastNamePhoneCodedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firstName: string; lastName: string; phoneNumber: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { firstName: string; lastName: string; phoneNumber: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/phoneCodeBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNamePhoneNumberIn }
            output: BatchFirstLastNamePhoneCodedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNamePhoneNumberIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNamePhoneNumberIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNamePhoneNumberIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/phoneCodeGeo/:firstName/:lastName/:phoneNumber/:countryIso2': {
      $get:
        | {
            input: {
              param: {
                firstName: string
                lastName: string
                phoneNumber: string
                countryIso2: string
              }
            }
            output: FirstLastNamePhoneCodedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                firstName: string
                lastName: string
                phoneNumber: string
                countryIso2: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                firstName: string
                lastName: string
                phoneNumber: string
                countryIso2: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/phoneCodeGeoBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNamePhoneNumberGeoIn }
            output: BatchFirstLastNamePhoneCodedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNamePhoneNumberGeoIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNamePhoneNumberGeoIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNamePhoneNumberGeoIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/phoneCodeGeoFeedbackLoop/:firstName/:lastName/:phoneNumber/:phoneNumberE164/:countryIso2': {
      $get:
        | {
            input: {
              param: {
                firstName: string
                lastName: string
                phoneNumber: string
                phoneNumberE164: string
                countryIso2: string
              }
            }
            output: FirstLastNamePhoneCodedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                firstName: string
                lastName: string
                phoneNumber: string
                phoneNumberE164: string
                countryIso2: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                firstName: string
                lastName: string
                phoneNumber: string
                phoneNumberE164: string
                countryIso2: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/pinyinChineseName/:chineseName': {
      $get:
        | {
            input: { param: { chineseName: string } }
            output: PersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chineseName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { chineseName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/pinyinChineseNameBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameIn }
            output: BatchPersonalNameParsedOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: BatchPersonalNameIn }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/api2/json/regions': {
      $get:
        | { input: {}; output: RegionOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api2/json/religionFull/:countryIso2/:subDivisionIso31662/:personalNameFull': {
      $get:
        | {
            input: {
              param: { countryIso2: string; subDivisionIso31662: string; personalNameFull: string }
            }
            output: PersonalNameReligionedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { countryIso2: string; subDivisionIso31662: string; personalNameFull: string }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: { countryIso2: string; subDivisionIso31662: string; personalNameFull: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/religionFullBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameGeoSubdivisionIn }
            output: BatchPersonalNameReligionedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchPersonalNameGeoSubdivisionIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchPersonalNameGeoSubdivisionIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchPersonalNameGeoSubdivisionIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/religionIndianFull/:subDivisionIso31662/:personalNameFull': {
      $get:
        | {
            input: { param: { subDivisionIso31662: string; personalNameFull: string } }
            output: PersonalNameReligionedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subDivisionIso31662: string; personalNameFull: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { subDivisionIso31662: string; personalNameFull: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/religionIndianFullBatch': {
      $post:
        | {
            input: { json: BatchPersonalNameSubdivisionIn }
            output: BatchPersonalNameReligionedOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchPersonalNameSubdivisionIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchPersonalNameSubdivisionIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchPersonalNameSubdivisionIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/softwareVersion': {
      $get:
        | { input: {}; output: SoftwareVersionOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/api2/json/subclassification/:countryIso2/:firstName/:lastName': {
      $get:
        | {
            input: { param: { countryIso2: string; firstName: string; lastName: string } }
            output: FirstLastNameGeoSubclassificationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { countryIso2: string; firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { countryIso2: string; firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/subclassificationBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: BatchFirstLastNameGeoSubclassificationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/subclassificationIndian/:firstName/:lastName': {
      $get:
        | {
            input: { param: { firstName: string; lastName: string } }
            output: FirstLastNameGeoSubclassificationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/subclassificationIndianBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: BatchFirstLastNameGeoSubclassificationOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/taxonomyClasses/:classifierName': {
      $get:
        | {
            input: { param: { classifierName: string } }
            output: APIClassifierTaxonomyOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { classifierName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api2/json/usRaceEthnicity/:firstName/:lastName': {
      $get:
        | {
            input: { param: { firstName: string; lastName: string } }
            output: FirstLastNameUSRaceEthnicityOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { firstName: string; lastName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/usRaceEthnicityBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: BatchFirstLastNameUSRaceEthnicityOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNameGeoIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/usRaceEthnicityZIP5/:firstName/:lastName/:zip5Code': {
      $get:
        | {
            input: { param: { firstName: string; lastName: string; zip5Code: string } }
            output: FirstLastNameUSRaceEthnicityOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firstName: string; lastName: string; zip5Code: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { firstName: string; lastName: string; zip5Code: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api2/json/usZipRaceEthnicityBatch': {
      $post:
        | {
            input: { json: BatchFirstLastNameGeoZippedIn }
            output: BatchFirstLastNameUSRaceEthnicityOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchFirstLastNameGeoZippedIn }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BatchFirstLastNameGeoZippedIn }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BatchFirstLastNameGeoZippedIn }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  },
  '/'
>
export default routes
