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
} from './routes'
import {
  getApi2JsonAnonymizeSourceAnonymizedTokenRouteHandler,
  getApi2JsonApiKeyInfoRouteHandler,
  getApi2JsonApiServicesRouteHandler,
  getApi2JsonApiStatusRouteHandler,
  getApi2JsonApiUsageHistoryAggregateRouteHandler,
  getApi2JsonApiUsageHistoryRouteHandler,
  getApi2JsonApiUsageRouteHandler,
  getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullRouteHandler,
  getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinRouteHandler,
  getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderRouteHandler,
  getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameRouteHandler,
  getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToRouteHandler,
  getApi2JsonCountryPersonalNameFullRouteHandler,
  getApi2JsonDiasporaCountryIso2FirstNameLastNameRouteHandler,
  getApi2JsonGenderChineseNameChineseNameRouteHandler,
  getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinRouteHandler,
  getApi2JsonGenderFirstNameLastNameRouteHandler,
  getApi2JsonGenderFirstNameRouteHandler,
  getApi2JsonGenderFullFullNameRouteHandler,
  getApi2JsonGenderFullGeoFullNameCountryIso2RouteHandler,
  getApi2JsonGenderGeoFirstNameLastNameCountryIso2RouteHandler,
  getApi2JsonGenderJapaneseNameFullJapaneseNameRouteHandler,
  getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameRouteHandler,
  getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderRouteHandler,
  getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinRouteHandler,
  getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiRouteHandler,
  getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRouteHandler,
  getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRouteHandler,
  getApi2JsonLearnableSourceLearnableTokenRouteHandler,
  getApi2JsonNameTypeGeoProperNounCountryIso2RouteHandler,
  getApi2JsonNameTypeProperNounRouteHandler,
  getApi2JsonOriginFirstNameLastNameRouteHandler,
  getApi2JsonParseChineseNameChineseNameRouteHandler,
  getApi2JsonParseJapaneseNameJapaneseNameRouteHandler,
  getApi2JsonParseNameNameFullCountryIso2RouteHandler,
  getApi2JsonParseNameNameFullRouteHandler,
  getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberRouteHandler,
  getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2RouteHandler,
  getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2RouteHandler,
  getApi2JsonPinyinChineseNameChineseNameRouteHandler,
  getApi2JsonRegionsRouteHandler,
  getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullRouteHandler,
  getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullRouteHandler,
  getApi2JsonSoftwareVersionRouteHandler,
  getApi2JsonSubclassificationCountryIso2FirstNameLastNameRouteHandler,
  getApi2JsonSubclassificationIndianFirstNameLastNameRouteHandler,
  getApi2JsonTaxonomyClassesClassifierNameRouteHandler,
  getApi2JsonUsRaceEthnicityFirstNameLastNameRouteHandler,
  getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeRouteHandler,
  postApi2JsonCastegroupIndianFullBatchRouteHandler,
  postApi2JsonChineseNameCandidatesBatchRouteHandler,
  postApi2JsonChineseNameCandidatesGenderBatchRouteHandler,
  postApi2JsonChineseNameMatchBatchRouteHandler,
  postApi2JsonCorridorBatchRouteHandler,
  postApi2JsonCountryBatchRouteHandler,
  postApi2JsonDiasporaBatchRouteHandler,
  postApi2JsonGenderBatchRouteHandler,
  postApi2JsonGenderChineseNameBatchRouteHandler,
  postApi2JsonGenderChineseNamePinyinBatchRouteHandler,
  postApi2JsonGenderFullBatchRouteHandler,
  postApi2JsonGenderFullGeoBatchRouteHandler,
  postApi2JsonGenderGeoBatchRouteHandler,
  postApi2JsonGenderJapaneseNameBatchRouteHandler,
  postApi2JsonGenderJapaneseNameFullBatchRouteHandler,
  postApi2JsonJapaneseNameGenderKanjiCandidatesBatchRouteHandler,
  postApi2JsonJapaneseNameKanjiCandidatesBatchRouteHandler,
  postApi2JsonJapaneseNameLatinCandidatesBatchRouteHandler,
  postApi2JsonJapaneseNameMatchBatchRouteHandler,
  postApi2JsonNameTypeBatchRouteHandler,
  postApi2JsonNameTypeGeoBatchRouteHandler,
  postApi2JsonOriginBatchRouteHandler,
  postApi2JsonParseChineseNameBatchRouteHandler,
  postApi2JsonParseJapaneseNameBatchRouteHandler,
  postApi2JsonParseNameBatchRouteHandler,
  postApi2JsonParseNameGeoBatchRouteHandler,
  postApi2JsonPhoneCodeBatchRouteHandler,
  postApi2JsonPhoneCodeGeoBatchRouteHandler,
  postApi2JsonPinyinChineseNameBatchRouteHandler,
  postApi2JsonReligionFullBatchRouteHandler,
  postApi2JsonReligionIndianFullBatchRouteHandler,
  postApi2JsonSubclassificationBatchRouteHandler,
  postApi2JsonSubclassificationIndianBatchRouteHandler,
  postApi2JsonUsRaceEthnicityBatchRouteHandler,
  postApi2JsonUsZipRaceEthnicityBatchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApi2JsonAnonymizeSourceAnonymizedTokenRoute,
    getApi2JsonAnonymizeSourceAnonymizedTokenRouteHandler,
  )
  .openapi(getApi2JsonApiKeyInfoRoute, getApi2JsonApiKeyInfoRouteHandler)
  .openapi(getApi2JsonApiServicesRoute, getApi2JsonApiServicesRouteHandler)
  .openapi(getApi2JsonApiStatusRoute, getApi2JsonApiStatusRouteHandler)
  .openapi(getApi2JsonApiUsageRoute, getApi2JsonApiUsageRouteHandler)
  .openapi(getApi2JsonApiUsageHistoryRoute, getApi2JsonApiUsageHistoryRouteHandler)
  .openapi(
    getApi2JsonApiUsageHistoryAggregateRoute,
    getApi2JsonApiUsageHistoryAggregateRouteHandler,
  )
  .openapi(
    getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullRoute,
    getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullRouteHandler,
  )
  .openapi(
    postApi2JsonCastegroupIndianFullBatchRoute,
    postApi2JsonCastegroupIndianFullBatchRouteHandler,
  )
  .openapi(
    getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinRoute,
    getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinRouteHandler,
  )
  .openapi(
    postApi2JsonChineseNameCandidatesBatchRoute,
    postApi2JsonChineseNameCandidatesBatchRouteHandler,
  )
  .openapi(
    postApi2JsonChineseNameCandidatesGenderBatchRoute,
    postApi2JsonChineseNameCandidatesGenderBatchRouteHandler,
  )
  .openapi(
    getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderRoute,
    getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderRouteHandler,
  )
  .openapi(
    getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameRoute,
    getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameRouteHandler,
  )
  .openapi(postApi2JsonChineseNameMatchBatchRoute, postApi2JsonChineseNameMatchBatchRouteHandler)
  .openapi(
    getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToRoute,
    getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToRouteHandler,
  )
  .openapi(postApi2JsonCorridorBatchRoute, postApi2JsonCorridorBatchRouteHandler)
  .openapi(getApi2JsonCountryPersonalNameFullRoute, getApi2JsonCountryPersonalNameFullRouteHandler)
  .openapi(postApi2JsonCountryBatchRoute, postApi2JsonCountryBatchRouteHandler)
  .openapi(
    getApi2JsonDiasporaCountryIso2FirstNameLastNameRoute,
    getApi2JsonDiasporaCountryIso2FirstNameLastNameRouteHandler,
  )
  .openapi(postApi2JsonDiasporaBatchRoute, postApi2JsonDiasporaBatchRouteHandler)
  .openapi(getApi2JsonGenderFirstNameRoute, getApi2JsonGenderFirstNameRouteHandler)
  .openapi(getApi2JsonGenderFirstNameLastNameRoute, getApi2JsonGenderFirstNameLastNameRouteHandler)
  .openapi(postApi2JsonGenderBatchRoute, postApi2JsonGenderBatchRouteHandler)
  .openapi(
    getApi2JsonGenderChineseNameChineseNameRoute,
    getApi2JsonGenderChineseNameChineseNameRouteHandler,
  )
  .openapi(postApi2JsonGenderChineseNameBatchRoute, postApi2JsonGenderChineseNameBatchRouteHandler)
  .openapi(
    getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinRoute,
    getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinRouteHandler,
  )
  .openapi(
    postApi2JsonGenderChineseNamePinyinBatchRoute,
    postApi2JsonGenderChineseNamePinyinBatchRouteHandler,
  )
  .openapi(getApi2JsonGenderFullFullNameRoute, getApi2JsonGenderFullFullNameRouteHandler)
  .openapi(postApi2JsonGenderFullBatchRoute, postApi2JsonGenderFullBatchRouteHandler)
  .openapi(
    getApi2JsonGenderFullGeoFullNameCountryIso2Route,
    getApi2JsonGenderFullGeoFullNameCountryIso2RouteHandler,
  )
  .openapi(postApi2JsonGenderFullGeoBatchRoute, postApi2JsonGenderFullGeoBatchRouteHandler)
  .openapi(
    getApi2JsonGenderGeoFirstNameLastNameCountryIso2Route,
    getApi2JsonGenderGeoFirstNameLastNameCountryIso2RouteHandler,
  )
  .openapi(postApi2JsonGenderGeoBatchRoute, postApi2JsonGenderGeoBatchRouteHandler)
  .openapi(
    getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameRoute,
    getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameRouteHandler,
  )
  .openapi(
    postApi2JsonGenderJapaneseNameBatchRoute,
    postApi2JsonGenderJapaneseNameBatchRouteHandler,
  )
  .openapi(
    getApi2JsonGenderJapaneseNameFullJapaneseNameRoute,
    getApi2JsonGenderJapaneseNameFullJapaneseNameRouteHandler,
  )
  .openapi(
    postApi2JsonGenderJapaneseNameFullBatchRoute,
    postApi2JsonGenderJapaneseNameFullBatchRouteHandler,
  )
  .openapi(
    postApi2JsonJapaneseNameGenderKanjiCandidatesBatchRoute,
    postApi2JsonJapaneseNameGenderKanjiCandidatesBatchRouteHandler,
  )
  .openapi(
    getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinRoute,
    getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinRouteHandler,
  )
  .openapi(
    getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderRoute,
    getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderRouteHandler,
  )
  .openapi(
    postApi2JsonJapaneseNameKanjiCandidatesBatchRoute,
    postApi2JsonJapaneseNameKanjiCandidatesBatchRouteHandler,
  )
  .openapi(
    getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiRoute,
    getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiRouteHandler,
  )
  .openapi(
    postApi2JsonJapaneseNameLatinCandidatesBatchRoute,
    postApi2JsonJapaneseNameLatinCandidatesBatchRouteHandler,
  )
  .openapi(
    getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
    getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRouteHandler,
  )
  .openapi(postApi2JsonJapaneseNameMatchBatchRoute, postApi2JsonJapaneseNameMatchBatchRouteHandler)
  .openapi(
    getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRoute,
    getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameRouteHandler,
  )
  .openapi(
    getApi2JsonLearnableSourceLearnableTokenRoute,
    getApi2JsonLearnableSourceLearnableTokenRouteHandler,
  )
  .openapi(getApi2JsonNameTypeProperNounRoute, getApi2JsonNameTypeProperNounRouteHandler)
  .openapi(postApi2JsonNameTypeBatchRoute, postApi2JsonNameTypeBatchRouteHandler)
  .openapi(
    getApi2JsonNameTypeGeoProperNounCountryIso2Route,
    getApi2JsonNameTypeGeoProperNounCountryIso2RouteHandler,
  )
  .openapi(postApi2JsonNameTypeGeoBatchRoute, postApi2JsonNameTypeGeoBatchRouteHandler)
  .openapi(getApi2JsonOriginFirstNameLastNameRoute, getApi2JsonOriginFirstNameLastNameRouteHandler)
  .openapi(postApi2JsonOriginBatchRoute, postApi2JsonOriginBatchRouteHandler)
  .openapi(
    getApi2JsonParseChineseNameChineseNameRoute,
    getApi2JsonParseChineseNameChineseNameRouteHandler,
  )
  .openapi(postApi2JsonParseChineseNameBatchRoute, postApi2JsonParseChineseNameBatchRouteHandler)
  .openapi(
    getApi2JsonParseJapaneseNameJapaneseNameRoute,
    getApi2JsonParseJapaneseNameJapaneseNameRouteHandler,
  )
  .openapi(postApi2JsonParseJapaneseNameBatchRoute, postApi2JsonParseJapaneseNameBatchRouteHandler)
  .openapi(getApi2JsonParseNameNameFullRoute, getApi2JsonParseNameNameFullRouteHandler)
  .openapi(
    getApi2JsonParseNameNameFullCountryIso2Route,
    getApi2JsonParseNameNameFullCountryIso2RouteHandler,
  )
  .openapi(postApi2JsonParseNameBatchRoute, postApi2JsonParseNameBatchRouteHandler)
  .openapi(postApi2JsonParseNameGeoBatchRoute, postApi2JsonParseNameGeoBatchRouteHandler)
  .openapi(
    getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberRoute,
    getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberRouteHandler,
  )
  .openapi(postApi2JsonPhoneCodeBatchRoute, postApi2JsonPhoneCodeBatchRouteHandler)
  .openapi(
    getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2Route,
    getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2RouteHandler,
  )
  .openapi(postApi2JsonPhoneCodeGeoBatchRoute, postApi2JsonPhoneCodeGeoBatchRouteHandler)
  .openapi(
    getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2Route,
    getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2RouteHandler,
  )
  .openapi(
    getApi2JsonPinyinChineseNameChineseNameRoute,
    getApi2JsonPinyinChineseNameChineseNameRouteHandler,
  )
  .openapi(postApi2JsonPinyinChineseNameBatchRoute, postApi2JsonPinyinChineseNameBatchRouteHandler)
  .openapi(getApi2JsonRegionsRoute, getApi2JsonRegionsRouteHandler)
  .openapi(
    getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullRoute,
    getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullRouteHandler,
  )
  .openapi(postApi2JsonReligionFullBatchRoute, postApi2JsonReligionFullBatchRouteHandler)
  .openapi(
    getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullRoute,
    getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullRouteHandler,
  )
  .openapi(
    postApi2JsonReligionIndianFullBatchRoute,
    postApi2JsonReligionIndianFullBatchRouteHandler,
  )
  .openapi(getApi2JsonSoftwareVersionRoute, getApi2JsonSoftwareVersionRouteHandler)
  .openapi(
    getApi2JsonSubclassificationCountryIso2FirstNameLastNameRoute,
    getApi2JsonSubclassificationCountryIso2FirstNameLastNameRouteHandler,
  )
  .openapi(postApi2JsonSubclassificationBatchRoute, postApi2JsonSubclassificationBatchRouteHandler)
  .openapi(
    getApi2JsonSubclassificationIndianFirstNameLastNameRoute,
    getApi2JsonSubclassificationIndianFirstNameLastNameRouteHandler,
  )
  .openapi(
    postApi2JsonSubclassificationIndianBatchRoute,
    postApi2JsonSubclassificationIndianBatchRouteHandler,
  )
  .openapi(
    getApi2JsonTaxonomyClassesClassifierNameRoute,
    getApi2JsonTaxonomyClassesClassifierNameRouteHandler,
  )
  .openapi(
    getApi2JsonUsRaceEthnicityFirstNameLastNameRoute,
    getApi2JsonUsRaceEthnicityFirstNameLastNameRouteHandler,
  )
  .openapi(postApi2JsonUsRaceEthnicityBatchRoute, postApi2JsonUsRaceEthnicityBatchRouteHandler)
  .openapi(
    getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeRoute,
    getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeRouteHandler,
  )
  .openapi(
    postApi2JsonUsZipRaceEthnicityBatchRoute,
    postApi2JsonUsZipRaceEthnicityBatchRouteHandler,
  )

export default app
