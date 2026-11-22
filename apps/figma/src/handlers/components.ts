import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ComponentsKeyRoute,
  getV1FilesFileKeyComponentsRoute,
  getV1TeamsTeamIdComponentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const componentsHandler = app
  .openapi(getV1TeamsTeamIdComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ComponentsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
