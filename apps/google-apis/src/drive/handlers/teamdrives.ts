import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamdrivesTeamDriveIdRoute,
  getTeamdrivesRoute,
  getTeamdrivesTeamDriveIdRoute,
  patchTeamdrivesTeamDriveIdRoute,
  postTeamdrivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamdrivesHandler = app
  .openapi(getTeamdrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamdrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamdrivesTeamDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamdrivesTeamDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTeamdrivesTeamDriveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
