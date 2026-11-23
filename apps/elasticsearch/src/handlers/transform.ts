import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransformTransformIdRoute,
  getTransformNodeStatsRoute,
  getTransformPreviewRoute,
  getTransformRoute,
  getTransformTransformIdPreviewRoute,
  getTransformTransformIdRoute,
  getTransformTransformIdStatsRoute,
  postTransformPreviewRoute,
  postTransformSetUpgradeModeRoute,
  postTransformTransformIdPreviewRoute,
  postTransformTransformIdResetRoute,
  postTransformTransformIdScheduleNowRoute,
  postTransformTransformIdStartRoute,
  postTransformTransformIdStopRoute,
  postTransformTransformIdUpdateRoute,
  postTransformUpgradeRoute,
  putTransformTransformIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transformHandler = app
  .openapi(getTransformTransformIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransformTransformIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransformTransformIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformNodeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformTransformIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformTransformIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformTransformIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransformPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformTransformIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformTransformIdScheduleNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformSetUpgradeModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformTransformIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformTransformIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformTransformIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
