import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBackupPlansBackupPlanIdRoute,
  deleteBackupPlansBackupPlanIdSelectionsSelectionIdRoute,
  getBackupPlansBackupPlanIdIndexRoute,
  getBackupPlansBackupPlanIdSelectionsIndexRoute,
  getBackupPlansBackupPlanIdSelectionsSelectionIdRoute,
  getBackupPlansBackupPlanIdToTemplateIndexRoute,
  getBackupPlansBackupPlanIdVersionsIndexRoute,
  getBackupPlansIndexRoute,
  getBackupTemplatePlansRoute,
  getBackupTemplatePlansTemplateIdToPlanRoute,
  postBackupPlansBackupPlanIdRoute,
  postBackupTemplateJsonToPlanRoute,
  putBackupPlansBackupPlanIdSelectionsIndexRoute,
  putBackupPlansIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupHandler = app
  .openapi(putBackupPlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupPlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBackupPlansBackupPlanIdSelectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupPlansBackupPlanIdSelectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupPlansBackupPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupPlansBackupPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupPlansBackupPlanIdSelectionsSelectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupPlansBackupPlanIdSelectionsSelectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupPlansBackupPlanIdToTemplateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupPlansBackupPlanIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupTemplateJsonToPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupTemplatePlansTemplateIdToPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupTemplatePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupPlansBackupPlanIdVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
