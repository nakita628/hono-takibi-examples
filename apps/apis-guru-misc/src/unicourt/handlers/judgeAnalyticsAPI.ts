import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNormJudgeNormJudgeIdAssociatedNormAttorneysRoute,
  getNormJudgeNormJudgeIdAssociatedNormLawFirmsRoute,
  getNormJudgeNormJudgeIdAssociatedNormPartiesRoute,
  getNormJudgeNormJudgeIdRoute,
  getNormJudgeSearchNormJudgeSearchIdRoute,
  getNormJudgeSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const judgeAnalyticsAPIHandler = app
  .openapi(getNormJudgeNormJudgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormJudgeNormJudgeIdAssociatedNormAttorneysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormJudgeNormJudgeIdAssociatedNormLawFirmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormJudgeNormJudgeIdAssociatedNormPartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormJudgeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormJudgeSearchNormJudgeSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
