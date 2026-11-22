import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmFilesIdRoute,
  getCrmFilesIdDataRoute,
  getCrmFilesIdRoute,
  getCrmFilesRoute,
  postCrmFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getCrmFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmFilesIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
