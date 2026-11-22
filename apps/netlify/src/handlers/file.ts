import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesSiteIdFilesFilePathRoute,
  getSitesSiteIdFilesRoute,
  putDeploysDeployIdFilesPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileHandler = app
  .openapi(getSitesSiteIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdFilesFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeploysDeployIdFilesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
