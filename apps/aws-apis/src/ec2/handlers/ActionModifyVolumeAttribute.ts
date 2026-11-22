import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVolumeAttributeRoute,
  postActionModifyVolumeAttributeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyVolumeAttributeHandler = app
  .openapi(getActionModifyVolumeAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVolumeAttributeRoute, (c) => {
    throw new Error('Not implemented')
  })
