import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectIdMembersMemberIdScopesRoute,
  putV1ProjectsProjectIdMembersMemberIdScopesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scopesHandler = app
  .openapi(getV1ProjectsProjectIdMembersMemberIdScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdMembersMemberIdScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
