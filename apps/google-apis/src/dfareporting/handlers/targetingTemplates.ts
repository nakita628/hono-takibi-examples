import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdTargetingTemplatesIdRoute,
  getUserprofilesProfileIdTargetingTemplatesRoute,
  patchUserprofilesProfileIdTargetingTemplatesRoute,
  postUserprofilesProfileIdTargetingTemplatesRoute,
  putUserprofilesProfileIdTargetingTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetingTemplatesHandler = app
  .openapi(getUserprofilesProfileIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdTargetingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdTargetingTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
