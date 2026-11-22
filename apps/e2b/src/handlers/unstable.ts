import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUnstableBuildsBuildIDRoute,
  getUnstableBuildsRoute,
  getUnstableBuildsStatusesRoute,
  getUnstableTemplatesSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unstableHandler = app
  .openapi(getUnstableTemplatesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableBuildsStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableBuildsBuildIDRoute, (c) => {
    throw new Error('Not implemented')
  })
