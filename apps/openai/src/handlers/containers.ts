import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContainersContainerIdFilesFileIdRoute,
  deleteContainersContainerIdRoute,
  getContainersContainerIdFilesFileIdContentRoute,
  getContainersContainerIdFilesFileIdRoute,
  getContainersContainerIdFilesRoute,
  getContainersContainerIdRoute,
  getContainersRoute,
  postContainersContainerIdFilesRoute,
  postContainersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const containersHandler = app
  .openapi(getContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContainersContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContainersContainerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContainersContainerIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContainersContainerIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContainersContainerIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContainersContainerIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContainersContainerIdFilesFileIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
