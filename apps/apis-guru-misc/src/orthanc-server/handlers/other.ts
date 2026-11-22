import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInstancesIdAttachmentsNameRoute,
  getInstancesIdFramesFrameRoute,
  getPatientsIdAttachmentsNameRoute,
  getSeriesIdAttachmentsNameRoute,
  getStudiesIdAttachmentsNameRoute,
  getToolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otherHandler = app
  .openapi(getInstancesIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancesIdFramesFrameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientsIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSeriesIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStudiesIdAttachmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
