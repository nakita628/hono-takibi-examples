import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnalyzerAnalyzerNameArchiveRuleRuleNameRoute,
  deleteAnalyzerAnalyzerNameRoute,
  getAnalyzerAnalyzerNameArchiveRuleRoute,
  getAnalyzerAnalyzerNameArchiveRuleRuleNameRoute,
  getAnalyzerAnalyzerNameRoute,
  getAnalyzerRoute,
  putAnalyzerAnalyzerNameArchiveRuleRoute,
  putAnalyzerAnalyzerNameArchiveRuleRuleNameRoute,
  putAnalyzerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analyzerHandler = app
  .openapi(putAnalyzerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyzerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnalyzerAnalyzerNameArchiveRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyzerAnalyzerNameArchiveRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnalyzerAnalyzerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyzerAnalyzerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAnalyzerAnalyzerNameArchiveRuleRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyzerAnalyzerNameArchiveRuleRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAnalyzerAnalyzerNameArchiveRuleRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
