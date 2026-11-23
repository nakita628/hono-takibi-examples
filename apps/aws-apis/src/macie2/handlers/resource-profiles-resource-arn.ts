import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourceProfilesResourceArnRoute,
  patchResourceProfilesResourceArnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceProfilesResourceArnHandler = app
  .openapi(getResourceProfilesResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchResourceProfilesResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
