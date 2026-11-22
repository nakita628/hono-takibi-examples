import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAssetsAnalysisAbsorptionRatioRoute,
  postAssetsAnalysisTurbulenceIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsAnalysisHandler = app
  .openapi(postAssetsAnalysisAbsorptionRatioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsAnalysisTurbulenceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
