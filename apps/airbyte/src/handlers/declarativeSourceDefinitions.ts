import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DeclarativeSourceDefinitionsCreateManifestRoute,
  postV1DeclarativeSourceDefinitionsListManifestsRoute,
  postV1DeclarativeSourceDefinitionsUpdateActiveManifestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const declarativeSourceDefinitionsHandler = app
  .openapi(postV1DeclarativeSourceDefinitionsCreateManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeclarativeSourceDefinitionsUpdateActiveManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DeclarativeSourceDefinitionsListManifestsRoute, (c) => {
    throw new Error('Not implemented')
  })
