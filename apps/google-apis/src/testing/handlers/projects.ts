import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectIdTestMatricesTestMatrixIdRoute,
  postV1ProjectsProjectIdTestMatricesRoute,
  postV1ProjectsProjectIdTestMatricesTestMatrixIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1ProjectsProjectIdTestMatricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdTestMatricesTestMatrixIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectIdTestMatricesTestMatrixIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
