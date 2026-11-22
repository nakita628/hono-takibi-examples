import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPortfolioAnalysisSharpeRatioBiasAdjustedRoute,
  postPortfolioAnalysisSharpeRatioConfidenceIntervalRoute,
  postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRoute,
  postPortfolioAnalysisSharpeRatioProbabilisticRoute,
  postPortfolioAnalysisSharpeRatioRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfolioAnalysisSharpeRatioHandler = app
  .openapi(postPortfolioAnalysisSharpeRatioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisSharpeRatioBiasAdjustedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisSharpeRatioConfidenceIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisSharpeRatioProbabilisticRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRoute, (c) => {
    throw new Error('Not implemented')
  })
