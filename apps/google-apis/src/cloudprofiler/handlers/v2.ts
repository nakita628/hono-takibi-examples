import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchV2NameRoute,
  postV2ParentProfilesCreateOfflineRoute,
  postV2ParentProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentProfilesCreateOfflineRoute, (c) => {
    throw new Error('Not implemented')
  })
