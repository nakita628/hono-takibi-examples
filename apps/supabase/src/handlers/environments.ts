import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BranchesBranchIdOrRefRoute,
  deleteV1ProjectsRefBranchesRoute,
  getV1BranchesBranchIdOrRefDiffRoute,
  getV1BranchesBranchIdOrRefRoute,
  getV1ProjectsRefActionsRoute,
  getV1ProjectsRefActionsRunIdLogsRoute,
  getV1ProjectsRefActionsRunIdRoute,
  getV1ProjectsRefBranchesNameRoute,
  getV1ProjectsRefBranchesRoute,
  headV1ProjectsRefActionsRoute,
  patchV1BranchesBranchIdOrRefRoute,
  patchV1ProjectsRefActionsRunIdStatusRoute,
  postV1BranchesBranchIdOrRefMergeRoute,
  postV1BranchesBranchIdOrRefPushRoute,
  postV1BranchesBranchIdOrRefResetRoute,
  postV1BranchesBranchIdOrRefRestoreRoute,
  postV1ProjectsRefBranchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getV1BranchesBranchIdOrRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BranchesBranchIdOrRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BranchesBranchIdOrRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchIdOrRefPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchIdOrRefMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchIdOrRefResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BranchesBranchIdOrRefRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BranchesBranchIdOrRefDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV1ProjectsRefActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefActionsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefActionsRunIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefActionsRunIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
