import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi1ReportsTrialBsRoute,
  getApi1ReportsTrialBsThreeYearsRoute,
  getApi1ReportsTrialBsTwoYearsRoute,
  getApi1ReportsTrialCrRoute,
  getApi1ReportsTrialCrSectionsRoute,
  getApi1ReportsTrialCrSegment1TagsRoute,
  getApi1ReportsTrialCrSegment2TagsRoute,
  getApi1ReportsTrialCrSegment3TagsRoute,
  getApi1ReportsTrialCrThreeYearsRoute,
  getApi1ReportsTrialCrTwoYearsRoute,
  getApi1ReportsTrialPlRoute,
  getApi1ReportsTrialPlSectionsRoute,
  getApi1ReportsTrialPlSegment1TagsRoute,
  getApi1ReportsTrialPlSegment2TagsRoute,
  getApi1ReportsTrialPlSegment3TagsRoute,
  getApi1ReportsTrialPlThreeYearsRoute,
  getApi1ReportsTrialPlTwoYearsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trialBalanceHandler = app
  .openapi(getApi1ReportsTrialBsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialBsTwoYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialBsThreeYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlTwoYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlThreeYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlSegment1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlSegment2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialPlSegment3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrTwoYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrThreeYearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrSegment1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrSegment2TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ReportsTrialCrSegment3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
