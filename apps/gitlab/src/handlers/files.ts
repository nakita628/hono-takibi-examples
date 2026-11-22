import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdRepositoryFilesFilePathRoute,
  getApiV4ProjectsIdRepositoryFilesFilePathBlameRoute,
  getApiV4ProjectsIdRepositoryFilesFilePathRawRoute,
  getApiV4ProjectsIdRepositoryFilesFilePathRoute,
  headApiV4ProjectsIdRepositoryFilesFilePathBlameRoute,
  headApiV4ProjectsIdRepositoryFilesFilePathRoute,
  postApiV4ProjectsIdRepositoryFilesFilePathRoute,
  putApiV4ProjectsIdRepositoryFilesFilePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(headApiV4ProjectsIdRepositoryFilesFilePathBlameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryFilesFilePathBlameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryFilesFilePathRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV4ProjectsIdRepositoryFilesFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryFilesFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryFilesFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdRepositoryFilesFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRepositoryFilesFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
