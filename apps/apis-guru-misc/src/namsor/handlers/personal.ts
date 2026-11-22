import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToRoute,
  getApi2JsonCountryPersonalNameFullRoute,
  getApi2JsonDiasporaCountryIso2FirstNameLastNameRoute,
  getApi2JsonGenderFirstNameLastNameRoute,
  getApi2JsonGenderFirstNameRoute,
  getApi2JsonGenderFullFullNameRoute,
  getApi2JsonGenderFullGeoFullNameCountryIso2Route,
  getApi2JsonGenderGeoFirstNameLastNameCountryIso2Route,
  getApi2JsonOriginFirstNameLastNameRoute,
  getApi2JsonParseNameNameFullCountryIso2Route,
  getApi2JsonParseNameNameFullRoute,
  getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullRoute,
  getApi2JsonSubclassificationCountryIso2FirstNameLastNameRoute,
  getApi2JsonUsRaceEthnicityFirstNameLastNameRoute,
  getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeRoute,
  postApi2JsonCorridorBatchRoute,
  postApi2JsonCountryBatchRoute,
  postApi2JsonDiasporaBatchRoute,
  postApi2JsonGenderBatchRoute,
  postApi2JsonGenderFullBatchRoute,
  postApi2JsonGenderFullGeoBatchRoute,
  postApi2JsonGenderGeoBatchRoute,
  postApi2JsonOriginBatchRoute,
  postApi2JsonParseNameBatchRoute,
  postApi2JsonParseNameGeoBatchRoute,
  postApi2JsonReligionFullBatchRoute,
  postApi2JsonSubclassificationBatchRoute,
  postApi2JsonUsRaceEthnicityBatchRoute,
  postApi2JsonUsZipRaceEthnicityBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const personalHandler = app
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
  .openapi(getApi2JsonOriginFirstNameLastNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonOriginBatchRoute, (c) => {
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
  .openapi(getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonReligionFullBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonSubclassificationCountryIso2FirstNameLastNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonSubclassificationBatchRoute, (c) => {
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
