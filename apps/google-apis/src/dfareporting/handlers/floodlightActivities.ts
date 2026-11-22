import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdFloodlightActivitiesIdRoute,
  getUserprofilesProfileIdFloodlightActivitiesIdRoute,
  getUserprofilesProfileIdFloodlightActivitiesRoute,
  patchUserprofilesProfileIdFloodlightActivitiesRoute,
  postUserprofilesProfileIdFloodlightActivitiesGeneratetagRoute,
  postUserprofilesProfileIdFloodlightActivitiesRoute,
  putUserprofilesProfileIdFloodlightActivitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const floodlightActivitiesHandler = app
  .openapi(getUserprofilesProfileIdFloodlightActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdFloodlightActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdFloodlightActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdFloodlightActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdFloodlightActivitiesGeneratetagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdFloodlightActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFloodlightActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
