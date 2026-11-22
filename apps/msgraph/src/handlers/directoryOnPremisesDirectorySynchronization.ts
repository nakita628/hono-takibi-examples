import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute,
  getDirectoryOnPremisesSynchronizationCountRoute,
  getDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute,
  getDirectoryOnPremisesSynchronizationRoute,
  patchDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute,
  postDirectoryOnPremisesSynchronizationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryOnPremisesDirectorySynchronizationHandler = app
  .openapi(getDirectoryOnPremisesSynchronizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryOnPremisesSynchronizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDirectoryOnPremisesSynchronizationOnPremisesDirectorySynchronizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryOnPremisesSynchronizationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
