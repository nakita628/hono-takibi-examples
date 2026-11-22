import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdRoutesRoute,
  getV1ProjectsProjectIdRoutesRoute,
  getV1ProjectsProjectIdRoutesVersionsRoute,
  patchV1ProjectsProjectIdRoutesRouteIdRoute,
  postV1ProjectsProjectIdRoutesGenerateRoute,
  postV1ProjectsProjectIdRoutesRoute,
  postV1ProjectsProjectIdRoutesVersionsRoute,
  putV1ProjectsProjectIdRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectRoutesHandler = app
  .openapi(getV1ProjectsProjectIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdRoutesRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRoutesGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdRoutesVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdRoutesVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
