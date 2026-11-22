import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeCloudPCsCloudPCIdRoute,
  getMeCloudPCsCloudPCIdRetrieveCloudPcLaunchDetailRoute,
  getMeCloudPCsCloudPCIdRoute,
  getMeCloudPCsCountRoute,
  getMeCloudPCsRoute,
  patchMeCloudPCsCloudPCIdRoute,
  postMeCloudPCsCloudPCIdEndGracePeriodRoute,
  postMeCloudPCsCloudPCIdRebootRoute,
  postMeCloudPCsCloudPCIdRenameRoute,
  postMeCloudPCsCloudPCIdReprovisionRoute,
  postMeCloudPCsCloudPCIdResizeRoute,
  postMeCloudPCsCloudPCIdRestoreRoute,
  postMeCloudPCsCloudPCIdTroubleshootRoute,
  postMeCloudPCsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meCloudPCHandler = app
  .openapi(getMeCloudPCsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCloudPCsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCloudPCsCloudPCIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeCloudPCsCloudPCIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCloudPCsCloudPCIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCloudPCsCloudPCIdEndGracePeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCloudPCsCloudPCIdRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCloudPCsCloudPCIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCloudPCsCloudPCIdReprovisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCloudPCsCloudPCIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCloudPCsCloudPCIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCloudPCsCloudPCIdRetrieveCloudPcLaunchDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCloudPCsCloudPCIdTroubleshootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCloudPCsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
