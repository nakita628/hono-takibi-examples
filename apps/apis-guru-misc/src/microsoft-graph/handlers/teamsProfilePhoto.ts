import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsTeamIdPhotoRoute,
  getTeamsTeamIdPhotoRoute,
  getTeamsTeamIdPhotoValueRoute,
  patchTeamsTeamIdPhotoRoute,
  putTeamsTeamIdPhotoValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsProfilePhotoHandler = app
  .openapi(deleteTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamsTeamIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsTeamIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
