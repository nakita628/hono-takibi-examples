import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ScansIdFilesFileIdRoute,
  getApiV1ScansIdRoute,
  getApiV1ScansRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1ScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ScansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ScansIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
