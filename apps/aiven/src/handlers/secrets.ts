import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectSecretsCmksCmkIdRoute,
  getProjectProjectSecretsCmksAccessorsRoute,
  getProjectProjectSecretsCmksCmkIdRoute,
  getProjectProjectSecretsCmksCmkIdServiceAssociationsRoute,
  getProjectProjectSecretsCmksRoute,
  postProjectProjectSecretsCmksCmkIdAccessCheckRoute,
  postProjectProjectSecretsCmksCmkIdRoute,
  postProjectProjectSecretsCmksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(postProjectProjectSecretsCmksCmkIdAccessCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSecretsCmksAccessorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSecretsCmksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSecretsCmksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectSecretsCmksCmkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSecretsCmksCmkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSecretsCmksCmkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSecretsCmksCmkIdServiceAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
