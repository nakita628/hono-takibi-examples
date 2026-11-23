import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourceProfilesArtifactsResourceArnRoute,
  getResourceProfilesDetectionsResourceArnRoute,
  patchResourceProfilesDetectionsResourceArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceProfilesHandler = app
  .openapi(getResourceProfilesArtifactsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourceProfilesDetectionsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchResourceProfilesDetectionsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
