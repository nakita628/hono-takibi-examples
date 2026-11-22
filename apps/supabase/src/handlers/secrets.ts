import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsRefApiKeysIdRoute,
  deleteV1ProjectsRefSecretsRoute,
  getV1ProjectsRefApiKeysIdRoute,
  getV1ProjectsRefApiKeysLegacyRoute,
  getV1ProjectsRefApiKeysRoute,
  getV1ProjectsRefPgsodiumRoute,
  getV1ProjectsRefSecretsRoute,
  patchV1ProjectsRefApiKeysIdRoute,
  postV1ProjectsRefApiKeysRoute,
  postV1ProjectsRefSecretsRoute,
  putV1ProjectsRefApiKeysLegacyRoute,
  putV1ProjectsRefPgsodiumRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsHandler = app
  .openapi(getV1ProjectsRefApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefApiKeysLegacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefApiKeysLegacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefPgsodiumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefPgsodiumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
