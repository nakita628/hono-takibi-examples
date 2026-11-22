import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesFileNameRoute,
  getApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesPathFileNameRoute,
  putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesFileNameRoute,
  putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesPathFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesPathFileNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mlModelRegistryHandler = app
  .openapi(putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesFileNameAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesPathFileNameAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesPathFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesMlModelsModelVersionIdFilesPathFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
