import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceAiEvalsCasesListPathRoute,
  getWWorkspaceAiEvalsDatasetsGetPathRoute,
  getWWorkspaceAiEvalsDatasetsListRoute,
  getWWorkspaceAiEvalsExperimentsListAllRoute,
  getWWorkspaceAiEvalsExperimentsResultsPathRoute,
  getWWorkspaceAiEvalsRunPayloadRoute,
  getWWorkspaceAiEvalsScorerDefaultsRoute,
  getWWorkspaceAiEvalsScorersRecentRoute,
  getWWorkspaceAiEvalsSubjectStateRoute,
  postWWorkspaceAiEvalsDatasetsCreateRoute,
  postWWorkspaceAiEvalsDatasetsDeletePathRoute,
  postWWorkspaceAiEvalsDatasetsUpdatePathRoute,
  postWWorkspaceAiEvalsExperimentsCollectRoute,
  postWWorkspaceAiEvalsExperimentsRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiEvalsHandler = app
  .openapi(getWWorkspaceAiEvalsDatasetsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsDatasetsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsDatasetsGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsDatasetsUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsDatasetsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsCasesListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsSubjectStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsRunPayloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsScorerDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsScorersRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsExperimentsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsExperimentsCollectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsExperimentsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsExperimentsResultsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
