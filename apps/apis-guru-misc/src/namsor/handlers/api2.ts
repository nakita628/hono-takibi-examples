import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi2JsonAnonymizeSourceAnonymizedTokenRoute,
  getApi2JsonApiKeyInfoRoute,
  getApi2JsonApiServicesRoute,
  getApi2JsonApiStatusRoute,
  getApi2JsonApiUsageHistoryAggregateRoute,
  getApi2JsonApiUsageHistoryRoute,
  getApi2JsonApiUsageRoute,
  getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullRoute,
  getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinRoute,
  getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderRoute,
  getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameRoute,
  getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToRoute,
  getApi2JsonCountryPersonalNameFullRoute,
  getApi2JsonDiasporaCountryIso2FirstNameLastNameRoute,
  getApi2JsonGenderChineseNameChineseNameRoute,
  getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinRoute,
  getApi2JsonGenderFirstNameLastNameRoute,
  getApi2JsonGenderFirstNameRoute,
  getApi2JsonGenderFullFullNameRoute,
  getApi2JsonGenderFullGeoFullNameCountryIso2Route,
  getApi2JsonGenderGeoFirstNameLastNameCountryIso2Route,
  getApi2JsonGenderJapaneseNameFullJapaneseNameRoute,
  getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameRoute,
  getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderRoute,
  getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinRoute,
  getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiRoute,
  getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
  getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
  getApi2JsonLearnableSourceLearnableTokenRoute,
  getApi2JsonNameTypeGeoProperNounCountryIso2Route,
  getApi2JsonNameTypeProperNounRoute,
  getApi2JsonOriginFirstNameLastNameRoute,
  getApi2JsonParseChineseNameChineseNameRoute,
  getApi2JsonParseJapaneseNameJapaneseNameRoute,
  getApi2JsonParseNameNameFullCountryIso2Route,
  getApi2JsonParseNameNameFullRoute,
  getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberRoute,
  getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2Route,
  getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2Route,
  getApi2JsonPinyinChineseNameChineseNameRoute,
  getApi2JsonRegionsRoute,
  getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullRoute,
  getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullRoute,
  getApi2JsonSoftwareVersionRoute,
  getApi2JsonSubclassificationCountryIso2FirstNameLastNameRoute,
  getApi2JsonSubclassificationIndianFirstNameLastNameRoute,
  getApi2JsonTaxonomyClassesClassifierNameRoute,
  getApi2JsonUsRaceEthnicityFirstNameLastNameRoute,
  getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeRoute,
  postApi2JsonCastegroupIndianFullBatchRoute,
  postApi2JsonChineseNameCandidatesBatchRoute,
  postApi2JsonChineseNameCandidatesGenderBatchRoute,
  postApi2JsonChineseNameMatchBatchRoute,
  postApi2JsonCorridorBatchRoute,
  postApi2JsonCountryBatchRoute,
  postApi2JsonDiasporaBatchRoute,
  postApi2JsonGenderBatchRoute,
  postApi2JsonGenderChineseNameBatchRoute,
  postApi2JsonGenderChineseNamePinyinBatchRoute,
  postApi2JsonGenderFullBatchRoute,
  postApi2JsonGenderFullGeoBatchRoute,
  postApi2JsonGenderGeoBatchRoute,
  postApi2JsonGenderJapaneseNameBatchRoute,
  postApi2JsonGenderJapaneseNameFullBatchRoute,
  postApi2JsonJapaneseNameGenderKanjiCandidatesBatchRoute,
  postApi2JsonJapaneseNameKanjiCandidatesBatchRoute,
  postApi2JsonJapaneseNameLatinCandidatesBatchRoute,
  postApi2JsonJapaneseNameMatchBatchRoute,
  postApi2JsonNameTypeBatchRoute,
  postApi2JsonNameTypeGeoBatchRoute,
  postApi2JsonOriginBatchRoute,
  postApi2JsonParseChineseNameBatchRoute,
  postApi2JsonParseJapaneseNameBatchRoute,
  postApi2JsonParseNameBatchRoute,
  postApi2JsonParseNameGeoBatchRoute,
  postApi2JsonPhoneCodeBatchRoute,
  postApi2JsonPhoneCodeGeoBatchRoute,
  postApi2JsonPinyinChineseNameBatchRoute,
  postApi2JsonReligionFullBatchRoute,
  postApi2JsonReligionIndianFullBatchRoute,
  postApi2JsonSubclassificationBatchRoute,
  postApi2JsonSubclassificationIndianBatchRoute,
  postApi2JsonUsRaceEthnicityBatchRoute,
  postApi2JsonUsZipRaceEthnicityBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api2Handler = app
  .openapi(getApi2JsonAnonymizeSourceAnonymizedTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiKeyInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiUsageHistoryAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonCastegroupIndianFullBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonChineseNameCandidatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonChineseNameCandidatesGenderBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApi2JsonChineseNameMatchBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApi2JsonCorridorBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonCountryPersonalNameFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonCountryBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonDiasporaCountryIso2FirstNameLastNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonDiasporaBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderFirstNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderFirstNameLastNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderChineseNameChineseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderChineseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderChineseNamePinyinBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderFullFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderFullBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderFullGeoFullNameCountryIso2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderFullGeoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderGeoFirstNameLastNameCountryIso2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderGeoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderJapaneseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonGenderJapaneseNameFullJapaneseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonGenderJapaneseNameFullBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonJapaneseNameGenderKanjiCandidatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApi2JsonJapaneseNameKanjiCandidatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApi2JsonJapaneseNameLatinCandidatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApi2JsonJapaneseNameMatchBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApi2JsonLearnableSourceLearnableTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonNameTypeProperNounRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonNameTypeBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonNameTypeGeoProperNounCountryIso2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonNameTypeGeoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonOriginFirstNameLastNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonOriginBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonParseChineseNameChineseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonParseChineseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonParseJapaneseNameJapaneseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonParseJapaneseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonParseNameNameFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonParseNameNameFullCountryIso2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonParseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonParseNameGeoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonPhoneCodeBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonPhoneCodeGeoBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApi2JsonPinyinChineseNameChineseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonPinyinChineseNameBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonReligionFullBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonReligionIndianFullBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonSoftwareVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonSubclassificationCountryIso2FirstNameLastNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonSubclassificationBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonSubclassificationIndianFirstNameLastNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonSubclassificationIndianBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonTaxonomyClassesClassifierNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonUsRaceEthnicityFirstNameLastNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonUsRaceEthnicityBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonUsZipRaceEthnicityBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
