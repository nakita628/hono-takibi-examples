import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEcosystemsEcosystemIdCollectionsIdListingsRoute,
  getEcosystemsEcosystemIdCollectionsIdRoute,
  getEcosystemsEcosystemIdCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionHandler = app
  .openapi(getEcosystemsEcosystemIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCollectionsIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
