import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFilesFileIdIndexRoute,
  getFilesFileIdVersionsIndexRoute,
  getFilesFileIdVersionsVersionIdIndexRoute,
  patchFilesFileIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getFilesFileIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdVersionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdVersionsVersionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
