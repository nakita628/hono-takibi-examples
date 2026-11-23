import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPacerCaseLocatorCaseSearchAllCourtsRoute,
  getPacerCaseLocatorCaseSearchAppealCourtsRoute,
  getPacerCaseLocatorCaseSearchBankruptcyCourtsRoute,
  getPacerCaseLocatorCaseSearchCivilCourtsRoute,
  getPacerCaseLocatorCaseSearchCriminalCourtsRoute,
  getPacerCaseLocatorCaseSearchMultiDistrictCourtsRoute,
  getPacerCaseLocatorPartySearchAllCourtsRoute,
  getPacerCaseLocatorPartySearchAppealCourtsRoute,
  getPacerCaseLocatorPartySearchBankruptcyCourtsRoute,
  getPacerCaseLocatorPartySearchCivilCourtsRoute,
  getPacerCaseLocatorPartySearchCriminalCourtsRoute,
  getPacerCaseLocatorPartySearchMultiDistrictCourtsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pacerCaseLocatorHandler = app
  .openapi(getPacerCaseLocatorCaseSearchAllCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorCaseSearchAppealCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorCaseSearchBankruptcyCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorCaseSearchCivilCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorCaseSearchCriminalCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorCaseSearchMultiDistrictCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorPartySearchAllCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorPartySearchAppealCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorPartySearchBankruptcyCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorPartySearchCivilCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorPartySearchCriminalCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPacerCaseLocatorPartySearchMultiDistrictCourtsRoute, (c) => {
    throw new Error('Not implemented')
  })
