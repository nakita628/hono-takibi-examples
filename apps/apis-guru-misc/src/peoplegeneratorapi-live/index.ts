import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAddressIndexRoute,
  getApiAddressRoute,
  getApiLifestoryIndexRoute,
  getApiLifestoryRoute,
  getApiPersonAgeIndexRoute,
  getApiPersonAgeRoute,
  getApiPersonBloodtypeIndexRoute,
  getApiPersonBloodtypeRoute,
  getApiPersonCreditcardnumberIndexRoute,
  getApiPersonCreditcardnumberRoute,
  getApiPersonCreditscoreIndexRoute,
  getApiPersonCreditscoreRoute,
  getApiPersonEmailIndexRoute,
  getApiPersonEmailRoute,
  getApiPersonEyecolorIndexRoute,
  getApiPersonEyecolorRoute,
  getApiPersonGenderIndexRoute,
  getApiPersonGenderRoute,
  getApiPersonGpaIndexRoute,
  getApiPersonGpaRoute,
  getApiPersonHaschildrenIndexRoute,
  getApiPersonHaschildrenRoute,
  getApiPersonHasdegreeIndexRoute,
  getApiPersonHasdegreeRoute,
  getApiPersonHeightIndexRoute,
  getApiPersonHeightRoute,
  getApiPersonIncomeIndexRoute,
  getApiPersonIncomeRoute,
  getApiPersonIndexRoute,
  getApiPersonJobIndexRoute,
  getApiPersonJobRoute,
  getApiPersonMaritalstatusIndexRoute,
  getApiPersonMaritalstatusRoute,
  getApiPersonNameIndexRoute,
  getApiPersonNameRoute,
  getApiPersonNumberIndexRoute,
  getApiPersonNumberRoute,
  getApiPersonPoliticalleaningIndexRoute,
  getApiPersonPoliticalleaningRoute,
  getApiPersonReligionIndexRoute,
  getApiPersonReligionRoute,
  getApiPersonRoute,
  getApiPersonUsernameIndexRoute,
  getApiPersonUsernameRoute,
  getApiPersonWeightIndexRoute,
  getApiPersonWeightRoute,
} from './routes'
import {
  getApiAddressIndexRouteHandler,
  getApiAddressRouteHandler,
  getApiLifestoryIndexRouteHandler,
  getApiLifestoryRouteHandler,
  getApiPersonAgeIndexRouteHandler,
  getApiPersonAgeRouteHandler,
  getApiPersonBloodtypeIndexRouteHandler,
  getApiPersonBloodtypeRouteHandler,
  getApiPersonCreditcardnumberIndexRouteHandler,
  getApiPersonCreditcardnumberRouteHandler,
  getApiPersonCreditscoreIndexRouteHandler,
  getApiPersonCreditscoreRouteHandler,
  getApiPersonEmailIndexRouteHandler,
  getApiPersonEmailRouteHandler,
  getApiPersonEyecolorIndexRouteHandler,
  getApiPersonEyecolorRouteHandler,
  getApiPersonGenderIndexRouteHandler,
  getApiPersonGenderRouteHandler,
  getApiPersonGpaIndexRouteHandler,
  getApiPersonGpaRouteHandler,
  getApiPersonHaschildrenIndexRouteHandler,
  getApiPersonHaschildrenRouteHandler,
  getApiPersonHasdegreeIndexRouteHandler,
  getApiPersonHasdegreeRouteHandler,
  getApiPersonHeightIndexRouteHandler,
  getApiPersonHeightRouteHandler,
  getApiPersonIncomeIndexRouteHandler,
  getApiPersonIncomeRouteHandler,
  getApiPersonIndexRouteHandler,
  getApiPersonJobIndexRouteHandler,
  getApiPersonJobRouteHandler,
  getApiPersonMaritalstatusIndexRouteHandler,
  getApiPersonMaritalstatusRouteHandler,
  getApiPersonNameIndexRouteHandler,
  getApiPersonNameRouteHandler,
  getApiPersonNumberIndexRouteHandler,
  getApiPersonNumberRouteHandler,
  getApiPersonPoliticalleaningIndexRouteHandler,
  getApiPersonPoliticalleaningRouteHandler,
  getApiPersonReligionIndexRouteHandler,
  getApiPersonReligionRouteHandler,
  getApiPersonRouteHandler,
  getApiPersonUsernameIndexRouteHandler,
  getApiPersonUsernameRouteHandler,
  getApiPersonWeightIndexRouteHandler,
  getApiPersonWeightRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAddressRoute, getApiAddressRouteHandler)
  .openapi(getApiAddressIndexRoute, getApiAddressIndexRouteHandler)
  .openapi(getApiLifestoryRoute, getApiLifestoryRouteHandler)
  .openapi(getApiLifestoryIndexRoute, getApiLifestoryIndexRouteHandler)
  .openapi(getApiPersonRoute, getApiPersonRouteHandler)
  .openapi(getApiPersonIndexRoute, getApiPersonIndexRouteHandler)
  .openapi(getApiPersonAgeRoute, getApiPersonAgeRouteHandler)
  .openapi(getApiPersonAgeIndexRoute, getApiPersonAgeIndexRouteHandler)
  .openapi(getApiPersonBloodtypeRoute, getApiPersonBloodtypeRouteHandler)
  .openapi(getApiPersonBloodtypeIndexRoute, getApiPersonBloodtypeIndexRouteHandler)
  .openapi(getApiPersonCreditcardnumberRoute, getApiPersonCreditcardnumberRouteHandler)
  .openapi(getApiPersonCreditcardnumberIndexRoute, getApiPersonCreditcardnumberIndexRouteHandler)
  .openapi(getApiPersonCreditscoreRoute, getApiPersonCreditscoreRouteHandler)
  .openapi(getApiPersonCreditscoreIndexRoute, getApiPersonCreditscoreIndexRouteHandler)
  .openapi(getApiPersonEmailRoute, getApiPersonEmailRouteHandler)
  .openapi(getApiPersonEmailIndexRoute, getApiPersonEmailIndexRouteHandler)
  .openapi(getApiPersonEyecolorRoute, getApiPersonEyecolorRouteHandler)
  .openapi(getApiPersonEyecolorIndexRoute, getApiPersonEyecolorIndexRouteHandler)
  .openapi(getApiPersonGenderRoute, getApiPersonGenderRouteHandler)
  .openapi(getApiPersonGenderIndexRoute, getApiPersonGenderIndexRouteHandler)
  .openapi(getApiPersonGpaRoute, getApiPersonGpaRouteHandler)
  .openapi(getApiPersonGpaIndexRoute, getApiPersonGpaIndexRouteHandler)
  .openapi(getApiPersonHaschildrenRoute, getApiPersonHaschildrenRouteHandler)
  .openapi(getApiPersonHaschildrenIndexRoute, getApiPersonHaschildrenIndexRouteHandler)
  .openapi(getApiPersonHasdegreeRoute, getApiPersonHasdegreeRouteHandler)
  .openapi(getApiPersonHasdegreeIndexRoute, getApiPersonHasdegreeIndexRouteHandler)
  .openapi(getApiPersonHeightRoute, getApiPersonHeightRouteHandler)
  .openapi(getApiPersonHeightIndexRoute, getApiPersonHeightIndexRouteHandler)
  .openapi(getApiPersonIncomeRoute, getApiPersonIncomeRouteHandler)
  .openapi(getApiPersonIncomeIndexRoute, getApiPersonIncomeIndexRouteHandler)
  .openapi(getApiPersonJobRoute, getApiPersonJobRouteHandler)
  .openapi(getApiPersonJobIndexRoute, getApiPersonJobIndexRouteHandler)
  .openapi(getApiPersonMaritalstatusRoute, getApiPersonMaritalstatusRouteHandler)
  .openapi(getApiPersonMaritalstatusIndexRoute, getApiPersonMaritalstatusIndexRouteHandler)
  .openapi(getApiPersonNameRoute, getApiPersonNameRouteHandler)
  .openapi(getApiPersonNameIndexRoute, getApiPersonNameIndexRouteHandler)
  .openapi(getApiPersonPoliticalleaningRoute, getApiPersonPoliticalleaningRouteHandler)
  .openapi(getApiPersonPoliticalleaningIndexRoute, getApiPersonPoliticalleaningIndexRouteHandler)
  .openapi(getApiPersonReligionRoute, getApiPersonReligionRouteHandler)
  .openapi(getApiPersonReligionIndexRoute, getApiPersonReligionIndexRouteHandler)
  .openapi(getApiPersonUsernameRoute, getApiPersonUsernameRouteHandler)
  .openapi(getApiPersonUsernameIndexRoute, getApiPersonUsernameIndexRouteHandler)
  .openapi(getApiPersonWeightRoute, getApiPersonWeightRouteHandler)
  .openapi(getApiPersonWeightIndexRoute, getApiPersonWeightIndexRouteHandler)
  .openapi(getApiPersonNumberRoute, getApiPersonNumberRouteHandler)
  .openapi(getApiPersonNumberIndexRoute, getApiPersonNumberIndexRouteHandler)

export default app
