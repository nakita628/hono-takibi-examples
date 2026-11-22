import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2ProfilesProfileIdRoute,
  getV2ProfilesMeRoute,
  getV2ProfilesProfileIdRoute,
  getV2ProfilesRoute,
  patchV2ProfilesProfileIdRoute,
  postV2ProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profilesAPIHandler = app
  .openapi(postV2ProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProfilesMeRoute, (c) => {
    throw new Error('Not implemented')
  })
