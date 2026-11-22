import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ComponentSetsKeyRoute,
  getV1FilesFileKeyComponentSetsRoute,
  getV1TeamsTeamIdComponentSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const componentSetsHandler = app
  .openapi(getV1TeamsTeamIdComponentSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FilesFileKeyComponentSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ComponentSetsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
