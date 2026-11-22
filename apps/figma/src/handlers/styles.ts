import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1FilesFileKeyStylesRoute,
  getV1StylesKeyRoute,
  getV1TeamsTeamIdStylesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stylesHandler = app
  .openapi(getV1TeamsTeamIdStylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyStylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StylesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
