import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApi2JsonAnonymizeSourceAnonymizedToken(
  args: InferRequestType<
    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.anonymize[':source'][':anonymized'][':token'].$get(args, options),
  )
}

export async function getApi2JsonApiKeyInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.api2.json.apiKeyInfo.$get(undefined, options))
}

export async function getApi2JsonApiServices(options?: ClientRequestOptions) {
  return await parseResponse(client.api2.json.apiServices.$get(undefined, options))
}

export async function getApi2JsonApiStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api2.json.apiStatus.$get(undefined, options))
}

export async function getApi2JsonApiUsage(options?: ClientRequestOptions) {
  return await parseResponse(client.api2.json.apiUsage.$get(undefined, options))
}

export async function getApi2JsonApiUsageHistory(options?: ClientRequestOptions) {
  return await parseResponse(client.api2.json.apiUsageHistory.$get(undefined, options))
}

export async function getApi2JsonApiUsageHistoryAggregate(options?: ClientRequestOptions) {
  return await parseResponse(client.api2.json.apiUsageHistoryAggregate.$get(undefined, options))
}

export async function getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFull(
  args: InferRequestType<
    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.castegroupIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
      args,
      options,
    ),
  )
}

export async function postApi2JsonCastegroupIndianFullBatch(
  args: InferRequestType<typeof client.api2.json.castegroupIndianFullBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.castegroupIndianFullBatch.$post(args, options))
}

export async function getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatin(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.chineseNameCandidates[':chineseSurnameLatin'][':chineseGivenNameLatin'].$get(
      args,
      options,
    ),
  )
}

export async function postApi2JsonChineseNameCandidatesBatch(
  args: InferRequestType<typeof client.api2.json.chineseNameCandidatesBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.chineseNameCandidatesBatch.$post(args, options))
}

export async function postApi2JsonChineseNameCandidatesGenderBatch(
  args: InferRequestType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.chineseNameCandidatesGenderBatch.$post(args, options))
}

export async function getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGender(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.chineseNameGenderCandidates[':chineseSurnameLatin'][':chineseGivenNameLatin'][
      ':knownGender'
    ].$get(args, options),
  )
}

export async function getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseName(
  args: InferRequestType<
    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.chineseNameMatch[':chineseSurnameLatin'][':chineseGivenNameLatin'][
      ':chineseName'
    ].$get(args, options),
  )
}

export async function postApi2JsonChineseNameMatchBatch(
  args: InferRequestType<typeof client.api2.json.chineseNameMatchBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.chineseNameMatchBatch.$post(args, options))
}

export async function getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameTo(
  args: InferRequestType<
    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.corridor[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][
      ':countryIso2To'
    ][':firstNameTo'][':lastNameTo'].$get(args, options),
  )
}

export async function postApi2JsonCorridorBatch(
  args: InferRequestType<typeof client.api2.json.corridorBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.corridorBatch.$post(args, options))
}

export async function getApi2JsonCountryPersonalNameFull(
  args: InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.country[':personalNameFull'].$get(args, options))
}

export async function postApi2JsonCountryBatch(
  args: InferRequestType<typeof client.api2.json.countryBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.countryBatch.$post(args, options))
}

export async function getApi2JsonDiasporaCountryIso2FirstNameLastName(
  args: InferRequestType<
    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.diaspora[':countryIso2'][':firstName'][':lastName'].$get(args, options),
  )
}

export async function postApi2JsonDiasporaBatch(
  args: InferRequestType<typeof client.api2.json.diasporaBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.diasporaBatch.$post(args, options))
}

export async function getApi2JsonGenderFirstName(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.gender[':firstName'].$get(args, options))
}

export async function getApi2JsonGenderFirstNameLastName(
  args: InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.gender[':firstName'][':lastName'].$get(args, options))
}

export async function postApi2JsonGenderBatch(
  args: InferRequestType<typeof client.api2.json.genderBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderBatch.$post(args, options))
}

export async function getApi2JsonGenderChineseNameChineseName(
  args: InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderChineseName[':chineseName'].$get(args, options))
}

export async function postApi2JsonGenderChineseNameBatch(
  args: InferRequestType<typeof client.api2.json.genderChineseNameBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderChineseNameBatch.$post(args, options))
}

export async function getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatin(
  args: InferRequestType<
    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.genderChineseNamePinyin[':chineseSurnameLatin'][':chineseGivenNameLatin'].$get(
      args,
      options,
    ),
  )
}

export async function postApi2JsonGenderChineseNamePinyinBatch(
  args: InferRequestType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderChineseNamePinyinBatch.$post(args, options))
}

export async function getApi2JsonGenderFullFullName(
  args: InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderFull[':fullName'].$get(args, options))
}

export async function postApi2JsonGenderFullBatch(
  args: InferRequestType<typeof client.api2.json.genderFullBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderFullBatch.$post(args, options))
}

export async function getApi2JsonGenderFullGeoFullNameCountryIso2(
  args: InferRequestType<
    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.genderFullGeo[':fullName'][':countryIso2'].$get(args, options),
  )
}

export async function postApi2JsonGenderFullGeoBatch(
  args: InferRequestType<typeof client.api2.json.genderFullGeoBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderFullGeoBatch.$post(args, options))
}

export async function getApi2JsonGenderGeoFirstNameLastNameCountryIso2(
  args: InferRequestType<
    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.genderGeo[':firstName'][':lastName'][':countryIso2'].$get(args, options),
  )
}

export async function postApi2JsonGenderGeoBatch(
  args: InferRequestType<typeof client.api2.json.genderGeoBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderGeoBatch.$post(args, options))
}

export async function getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenName(
  args: InferRequestType<
    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.genderJapaneseName[':japaneseSurname'][':japaneseGivenName'].$get(
      args,
      options,
    ),
  )
}

export async function postApi2JsonGenderJapaneseNameBatch(
  args: InferRequestType<typeof client.api2.json.genderJapaneseNameBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderJapaneseNameBatch.$post(args, options))
}

export async function getApi2JsonGenderJapaneseNameFullJapaneseName(
  args: InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.genderJapaneseNameFull[':japaneseName'].$get(args, options),
  )
}

export async function postApi2JsonGenderJapaneseNameFullBatch(
  args: InferRequestType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.genderJapaneseNameFullBatch.$post(args, options))
}

export async function postApi2JsonJapaneseNameGenderKanjiCandidatesBatch(
  args: InferRequestType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post(args, options),
  )
}

export async function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatin(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
      ':japaneseGivenNameLatin'
    ].$get(args, options),
  )
}

export async function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGender(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
      ':japaneseGivenNameLatin'
    ][':knownGender'].$get(args, options),
  )
}

export async function postApi2JsonJapaneseNameKanjiCandidatesBatch(
  args: InferRequestType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.japaneseNameKanjiCandidatesBatch.$post(args, options))
}

export async function getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanji(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.japaneseNameLatinCandidates[':japaneseSurnameKanji'][
      ':japaneseGivenNameKanji'
    ].$get(args, options),
  )
}

export async function postApi2JsonJapaneseNameLatinCandidatesBatch(
  args: InferRequestType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.japaneseNameLatinCandidatesBatch.$post(args, options))
}

export async function getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.japaneseNameMatch[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][
      ':japaneseName'
    ].$get(args, options),
  )
}

export async function postApi2JsonJapaneseNameMatchBatch(
  args: InferRequestType<typeof client.api2.json.japaneseNameMatchBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.japaneseNameMatchBatch.$post(args, options))
}

export async function getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName(
  args: InferRequestType<
    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.japaneseNameMatchFeedbackLoop[':japaneseSurnameLatin'][
      ':japaneseGivenNameLatin'
    ][':japaneseName'].$get(args, options),
  )
}

export async function getApi2JsonLearnableSourceLearnableToken(
  args: InferRequestType<
    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.learnable[':source'][':learnable'][':token'].$get(args, options),
  )
}

export async function getApi2JsonNameTypeProperNoun(
  args: InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.nameType[':properNoun'].$get(args, options))
}

export async function postApi2JsonNameTypeBatch(
  args: InferRequestType<typeof client.api2.json.nameTypeBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.nameTypeBatch.$post(args, options))
}

export async function getApi2JsonNameTypeGeoProperNounCountryIso2(
  args: InferRequestType<
    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.nameTypeGeo[':properNoun'][':countryIso2'].$get(args, options),
  )
}

export async function postApi2JsonNameTypeGeoBatch(
  args: InferRequestType<typeof client.api2.json.nameTypeGeoBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.nameTypeGeoBatch.$post(args, options))
}

export async function getApi2JsonOriginFirstNameLastName(
  args: InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.origin[':firstName'][':lastName'].$get(args, options))
}

export async function postApi2JsonOriginBatch(
  args: InferRequestType<typeof client.api2.json.originBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.originBatch.$post(args, options))
}

export async function getApi2JsonParseChineseNameChineseName(
  args: InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.parseChineseName[':chineseName'].$get(args, options))
}

export async function postApi2JsonParseChineseNameBatch(
  args: InferRequestType<typeof client.api2.json.parseChineseNameBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.parseChineseNameBatch.$post(args, options))
}

export async function getApi2JsonParseJapaneseNameJapaneseName(
  args: InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.parseJapaneseName[':japaneseName'].$get(args, options),
  )
}

export async function postApi2JsonParseJapaneseNameBatch(
  args: InferRequestType<typeof client.api2.json.parseJapaneseNameBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.parseJapaneseNameBatch.$post(args, options))
}

export async function getApi2JsonParseNameNameFull(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.parseName[':nameFull'].$get(args, options))
}

export async function getApi2JsonParseNameNameFullCountryIso2(
  args: InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.parseName[':nameFull'][':countryIso2'].$get(args, options),
  )
}

export async function postApi2JsonParseNameBatch(
  args: InferRequestType<typeof client.api2.json.parseNameBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.parseNameBatch.$post(args, options))
}

export async function postApi2JsonParseNameGeoBatch(
  args: InferRequestType<typeof client.api2.json.parseNameGeoBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.parseNameGeoBatch.$post(args, options))
}

export async function getApi2JsonPhoneCodeFirstNameLastNamePhoneNumber(
  args: InferRequestType<
    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.phoneCode[':firstName'][':lastName'][':phoneNumber'].$get(args, options),
  )
}

export async function postApi2JsonPhoneCodeBatch(
  args: InferRequestType<typeof client.api2.json.phoneCodeBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.phoneCodeBatch.$post(args, options))
}

export async function getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.phoneCodeGeo[':firstName'][':lastName'][':phoneNumber'][':countryIso2'].$get(
      args,
      options,
    ),
  )
}

export async function postApi2JsonPhoneCodeGeoBatch(
  args: InferRequestType<typeof client.api2.json.phoneCodeGeoBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.phoneCodeGeoBatch.$post(args, options))
}

export async function getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2(
  args: InferRequestType<
    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.phoneCodeGeoFeedbackLoop[':firstName'][':lastName'][':phoneNumber'][
      ':phoneNumberE164'
    ][':countryIso2'].$get(args, options),
  )
}

export async function getApi2JsonPinyinChineseNameChineseName(
  args: InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.pinyinChineseName[':chineseName'].$get(args, options))
}

export async function postApi2JsonPinyinChineseNameBatch(
  args: InferRequestType<typeof client.api2.json.pinyinChineseNameBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.pinyinChineseNameBatch.$post(args, options))
}

export async function getApi2JsonRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.api2.json.regions.$get(undefined, options))
}

export async function getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFull(
  args: InferRequestType<
    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.religionFull[':countryIso2'][':subDivisionIso31662'][':personalNameFull'].$get(
      args,
      options,
    ),
  )
}

export async function postApi2JsonReligionFullBatch(
  args: InferRequestType<typeof client.api2.json.religionFullBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.religionFullBatch.$post(args, options))
}

export async function getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFull(
  args: InferRequestType<
    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.religionIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
      args,
      options,
    ),
  )
}

export async function postApi2JsonReligionIndianFullBatch(
  args: InferRequestType<typeof client.api2.json.religionIndianFullBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.religionIndianFullBatch.$post(args, options))
}

export async function getApi2JsonSoftwareVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.api2.json.softwareVersion.$get(undefined, options))
}

export async function getApi2JsonSubclassificationCountryIso2FirstNameLastName(
  args: InferRequestType<
    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.subclassification[':countryIso2'][':firstName'][':lastName'].$get(
      args,
      options,
    ),
  )
}

export async function postApi2JsonSubclassificationBatch(
  args: InferRequestType<typeof client.api2.json.subclassificationBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.subclassificationBatch.$post(args, options))
}

export async function getApi2JsonSubclassificationIndianFirstNameLastName(
  args: InferRequestType<
    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.subclassificationIndian[':firstName'][':lastName'].$get(args, options),
  )
}

export async function postApi2JsonSubclassificationIndianBatch(
  args: InferRequestType<typeof client.api2.json.subclassificationIndianBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.subclassificationIndianBatch.$post(args, options))
}

export async function getApi2JsonTaxonomyClassesClassifierName(
  args: InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.taxonomyClasses[':classifierName'].$get(args, options),
  )
}

export async function getApi2JsonUsRaceEthnicityFirstNameLastName(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.usRaceEthnicity[':firstName'][':lastName'].$get(args, options),
  )
}

export async function postApi2JsonUsRaceEthnicityBatch(
  args: InferRequestType<typeof client.api2.json.usRaceEthnicityBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.usRaceEthnicityBatch.$post(args, options))
}

export async function getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5Code(
  args: InferRequestType<
    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api2.json.usRaceEthnicityZIP5[':firstName'][':lastName'][':zip5Code'].$get(
      args,
      options,
    ),
  )
}

export async function postApi2JsonUsZipRaceEthnicityBatch(
  args: InferRequestType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api2.json.usZipRaceEthnicityBatch.$post(args, options))
}
