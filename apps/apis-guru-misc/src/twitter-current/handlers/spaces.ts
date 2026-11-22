import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get2SpacesByCreatorIdsRoute,
  get2SpacesIdBuyersRoute,
  get2SpacesIdRoute,
  get2SpacesIdTweetsRoute,
  get2SpacesRoute,
  get2SpacesSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spacesHandler = app
  .openapi(get2SpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2SpacesByCreatorIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2SpacesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2SpacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2SpacesIdBuyersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get2SpacesIdTweetsRoute, (c) => {
    throw new Error('Not implemented')
  })
