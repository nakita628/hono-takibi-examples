import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProfilesProfileIdRoute,
  optionsProfilesProfileIdRoute,
  patchProfilesProfileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profilesHandler = app
  .openapi(getProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
